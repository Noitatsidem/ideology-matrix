/*
 * Ideology Matrix - Adaptive Quiz Engine
 *
 * Three-phase adaptive testing system:
 * Phase 1: Core Screening (25-60 questions) - Establish baseline on all 16 axes
 * Phase 2: Adaptive Discrimination (15-50 questions) - Resolve ambiguity between top ideologies
 * Phase 3: Mechanism Questions (8-30 questions) - Distinguish HOW someone wants to achieve goals
 *
 * Caps total questions at 140 while retaining adaptive depth
 */

const Adaptive = (function() {
    // ==================== CONFIGURATION ====================
    const Config = {
        // Phase 1: Core screening
        PHASE1_MIN_QUESTIONS: 25,
        PHASE1_MAX_QUESTIONS: 60,
        PHASE1_MIN_PER_AXIS: 2,

        // Phase 2: Adaptive discrimination
        PHASE2_MIN_QUESTIONS: 15,
        PHASE2_MAX_QUESTIONS: 50,

        // Phase 3: Mechanism questions
        PHASE3_MIN_QUESTIONS: 8,
        PHASE3_MAX_QUESTIONS: 30,

        // Confidence thresholds
        AXIS_CONFIDENCE_THRESHOLD: 0.7,
        IDEOLOGY_CONFIDENCE_THRESHOLD: 0.85,
        IDEOLOGY_SEPARATION_THRESHOLD: 5, // percentage points

        // Hard limits
        ABSOLUTE_MAX_QUESTIONS: 140
    };

    const AXES = ['eqlt', 'lbrt', 'prog', 'idnt', 'popl', 'intv', 'ecol', 'powr',
                  'chng', 'hmnn', 'mns', 'prty', 'scr', 'tech', 'wlfr', 'intg'];

    const LOADING_MULTIPLIERS = {
        'primary': 1.0,
        'secondary': 0.6,
        'tertiary': 0.3
    };

    // Mechanism questions use loadings scaled 0.1-0.3 while standard questions use 3-10.
    // This scaling factor brings mechanism question impact in line with standard questions.
    const MECHANISM_LOADING_SCALE = 30;

    // High fix #9: Tag conflict detection for contradictory mechanism preferences
    const TAG_CONFLICTS = {
        'state_ownership': ['market_preference', 'laissez_faire', 'free_market'],
        'nationalization': ['market_preference', 'laissez_faire', 'free_market', 'privatization'],
        'planning': ['free_market', 'laissez_faire'],
        'anti_market': ['market_preference', 'free_market', 'laissez_faire'],
        'revolutionary': ['conservative_reform', 'preservationist', 'incremental'],
        'rupture': ['conservative_reform', 'preservationist', 'incremental', 'gradual'],
        'centralized': ['decentralized', 'municipal', 'local_autonomy', 'federalist'],
        'direct_democracy': ['technocratic', 'elite_governance', 'authoritarian'],
        'authoritarian': ['direct_democracy', 'participatory', 'anarchist'],
        'internationalist': ['nationalist', 'isolationist', 'nativist'],
        'cosmopolitan': ['nationalist', 'nativist', 'isolationist'],
        'open_borders': ['closed_borders', 'restrictionist', 'nativist'],
        'secular': ['theocratic', 'religious_governance'],
        'theocratic': ['secular', 'laicist']
    };

    /**
     * Check if adding new tags would conflict with existing tags
     * Returns { conflict: boolean, existing?: string, new?: string }
     */
    function hasTagConflict(existingTags, newTags) {
        for (const newTag of newTags) {
            const conflicts = TAG_CONFLICTS[newTag] || [];
            const conflictingExisting = existingTags.find(t => conflicts.includes(t));
            if (conflictingExisting) {
                return { conflict: true, existing: conflictingExisting, new: newTag };
            }
            // Also check reverse: if existing tag conflicts with new tag
            for (const existingTag of existingTags) {
                const reverseConflicts = TAG_CONFLICTS[existingTag] || [];
                if (reverseConflicts.includes(newTag)) {
                    return { conflict: true, existing: existingTag, new: newTag };
                }
            }
        }
        return { conflict: false };
    }

    // ==================== AXIS CONFIDENCE ====================

    /**
     * Calculate confidence for a specific axis based on responses
     * Factors: number of responses, response consistency, response magnitude, question reliability
     * High fix #13: Weight by response magnitude, not just count
     * High fix #14: Increase reliability factor from 0.1 to 0.2
     */
    function calculateAxisConfidence(axisResponses) {
        if (!axisResponses || axisResponses.length === 0) return 0;

        // Calculate weighted confidence based on response magnitude and reliability
        const totalWeight = axisResponses.reduce((sum, r) =>
            sum + Math.abs(r.weighted) * r.reliability, 0);
        // Estimate max possible weight: max response magnitude (~1.0) * max reliability (0.9) per question
        const maxPossibleWeight = axisResponses.length * 1.0 * 0.9;
        const weightedConfidence = maxPossibleWeight > 0
            ? Math.min(0.7, (totalWeight / maxPossibleWeight) * 0.7)
            : 0;

        // Also factor in response count (minimum questions needed for confidence)
        const countFactor = Math.min(0.3, axisResponses.length * 0.075);

        // Consistency bonus: check if responses align
        let consistencyBonus = 0;
        if (axisResponses.length >= 2) {
            const positives = axisResponses.filter(r => r.weighted > 0).length;
            const negatives = axisResponses.filter(r => r.weighted < 0).length;
            const neutrals = axisResponses.filter(r => r.weighted === 0).length;

            // High consistency if responses are mostly same direction
            const dominant = Math.max(positives, negatives);
            const directionalCount = axisResponses.length - neutrals;
            const consistency = directionalCount > 0 ? (dominant / directionalCount) : 0;
            // Scale bonus by response magnitude - strong consistent responses get more bonus
            const avgMagnitude = axisResponses.reduce((sum, r) => sum + Math.abs(r.weighted), 0) / axisResponses.length;
            consistencyBonus = consistency * avgMagnitude * 0.15;
        }

        // Reliability-weighted average (High fix #14: increased from 0.1 to 0.2)
        const avgReliability = axisResponses.reduce((sum, r) => sum + r.reliability, 0) / axisResponses.length;
        const reliabilityFactor = avgReliability * 0.2;

        return Math.min(1.0, weightedConfidence + countFactor + consistencyBonus + reliabilityFactor);
    }

    /**
     * Calculate confidence for all axes
     */
    function calculateAllAxisConfidence(state) {
        const confidence = {};
        AXES.forEach(axis => {
            confidence[axis] = calculateAxisConfidence(state.axisResponses[axis] || []);
        });
        return confidence;
    }

    // ==================== PHASE 1: CORE SCREENING ====================

    /**
     * Get questions for Phase 1 core screening
     * Prioritizes high-reliability questions with primary loadings
     */
    function getPhase1Questions(questions, state) {
        const available = questions.filter(q =>
            !state.answeredIds.has(q.id) && q.type !== 'mechanism'
        );

        // Score questions for Phase 1
        const scored = available.map(q => {
            let score = 0;
            const reliability = q.reliability || 0.7;

            // Boost for high reliability
            score += reliability * 50;

            // Boost for phase1Priority if set
            if (q.phase1Priority === 1) score += 30;
            else if (q.phase1Priority === 2) score += 15;

            // Boost for under-confident axes
            if (q.loadings) {
                Object.entries(q.loadings).forEach(([axis, loading]) => {
                    if (!AXES.includes(axis)) return;

                    const axisConf = state.axisConfidence[axis] || 0;
                    const axisResponses = (state.axisResponses[axis] || []).length;

                    // Strong boost for axes with few responses
                    if (axisResponses < Config.PHASE1_MIN_PER_AXIS) {
                        score += (Config.PHASE1_MIN_PER_AXIS - axisResponses) * 20;
                    }

                    // Boost for low confidence axes
                    score += (1 - axisConf) * 30;

                    // Primary loadings preferred for clean signal
                    if (loading.type === 'primary') score += 10;
                });
            }

            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.length > 0 ? scored[0].question : null;
    }

    /**
     * Check if Phase 1 should end
     */
    function shouldEndPhase1(state) {
        const totalAnswered = state.answeredIds.size;

        // Minimum questions required
        if (totalAnswered < Config.PHASE1_MIN_QUESTIONS) return false;

        // Maximum reached
        if (totalAnswered >= Config.PHASE1_MAX_QUESTIONS) return true;

        // Check axis coverage - need at least 2 responses per axis
        const underCovered = AXES.filter(axis =>
            (state.axisResponses[axis] || []).length < Config.PHASE1_MIN_PER_AXIS
        );
        if (underCovered.length > 0) return false;

        // Check confidence - all axes should have minimum confidence
        const lowConfidence = AXES.filter(axis =>
            (state.axisConfidence[axis] || 0) < Config.AXIS_CONFIDENCE_THRESHOLD
        );

        return lowConfidence.length <= 2; // Allow up to 2 low-confidence axes
    }

    // ==================== PHASE 2: ADAPTIVE DISCRIMINATION ====================

    /**
     * Get questions for Phase 2 adaptive discrimination
     * Targets axes where top ideologies differ most
     */
    function getPhase2Questions(questions, ideologies, state) {
        // Get top ideology matches
        const topMatches = getTopMatches(state.userScores, ideologies, 10);
        state.topIdeologies = topMatches;

        // Calculate variance on each axis among top matches
        const axisVariances = {};
        AXES.forEach(axis => {
            axisVariances[axis] = calculateAxisVariance(topMatches, axis);
        });
        state.axisVariances = axisVariances;

        // Sort axes by variance
        const sortedAxes = [...AXES].sort((a, b) => axisVariances[b] - axisVariances[a]);
        state.targetedAxes = sortedAxes.slice(0, 5);

        // Filter available questions
        const available = questions.filter(q =>
            !state.answeredIds.has(q.id) && q.type !== 'mechanism'
        );

        // Score questions by discriminating power
        const scored = available.map(q => {
            let score = calculateDiscriminatingPower(q, axisVariances, state.answeredIds);
            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.length > 0 ? scored[0].question : null;
    }

    /**
     * Calculate variance among top ideologies on an axis
     */
    function calculateAxisVariance(topIdeologies, axis) {
        const values = topIdeologies.map(ideo => ideo.stats[axis] ?? 50);
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        return variance;
    }

    /**
     * Calculate discriminating power of a question
     */
    function calculateDiscriminatingPower(question, axisVariances, answeredIds) {
        if (!question.loadings) return 0;

        let totalPower = 0;
        const reliability = question.reliability || 0.7;

        Object.entries(question.loadings).forEach(([axis, loading]) => {
            if (!AXES.includes(axis)) return;

            const axisVariance = axisVariances[axis] || 0;
            const weight = Math.abs(loading.weight);

            // Use consistent multipliers with actual scoring
            const typeMultiplier = LOADING_MULTIPLIERS[loading.type] || 0.5;

            totalPower += axisVariance * weight * typeMultiplier * reliability;
        });

        return totalPower;
    }

    /**
     * Check if Phase 2 should end
     */
    function shouldEndPhase2(state, ideologies) {
        const phase2Answered = state.answeredIds.size - state.phase1EndCount;

        // Minimum questions
        if (phase2Answered < Config.PHASE2_MIN_QUESTIONS) return false;

        // Maximum reached
        if (phase2Answered >= Config.PHASE2_MAX_QUESTIONS) return true;

        // Check ideology confidence
        const topMatches = getTopMatches(state.userScores, ideologies, 3);
        // If < 3 matches, only exit if we've done minimum Phase 2 questions
        if (topMatches.length < 3) {
            return phase2Answered >= Config.PHASE2_MIN_QUESTIONS;
        }

        const distances = topMatches.map(ideo =>
            calculateDistance(state.userScores, ideo)
        );

        // Guard against fewer than 3 matches
        if (distances.length < 3) return true;

        // If top 3 are very close (within threshold), continue
        const spread = distances[2] - distances[0];
        return spread > Config.IDEOLOGY_SEPARATION_THRESHOLD;
    }

    // ==================== PHASE 3: MECHANISM QUESTIONS ====================

    /**
     * Get mechanism questions based on user's scores
     */
    function getPhase3Questions(mechanismQuestions, state) {
        // Refresh top ideologies based on current scores to keep tailoring current
        if (state.ideologies && state.userScores) {
            state.topIdeologies = getTopMatches(state.userScores, state.ideologies, 10);
        }

        // Filter to mechanism questions that trigger based on user's scores
        let available = mechanismQuestions.filter(q => {
            if (state.answeredIds.has(q.id)) return false;
            if (!q.trigger) return true; // No trigger = always available

            const userScore = state.userScores[q.trigger.axis] ?? 50;
            if (q.trigger.direction === 'high') {
                return userScore >= q.trigger.threshold;
            } else if (q.trigger.direction === 'low') {
                return userScore <= q.trigger.threshold;
            } else if (q.trigger.direction === 'extreme') {
                return userScore >= q.trigger.threshold || userScore <= (100 - q.trigger.threshold);
            }
            return true;
        });

        // High fix #8: Guard against empty mechanism pool
        // Fall back to null-trigger questions if all triggered questions are filtered out
        if (available.length === 0) {
            const fallback = mechanismQuestions.filter(q =>
                !state.answeredIds.has(q.id) && !q.trigger
            );
            if (fallback.length === 0) {
                return null; // No questions available at all
            }
            available = fallback;
        }

        // Sort by relevance to user's profile
        const scored = available.map(q => {
            let score = 0;

            // Base relevance from reliability
            score += (q.reliability || 0.8) * 20;

            // Boost if this mechanism helps distinguish between top ideologies
            if (q.distinguishes && state.topIdeologies && state.topIdeologies.length > 0) {
                const topNames = (state.topIdeologies || []).slice(0, 5).map(i => i.name);
                const matchCount = q.distinguishes.filter(name => topNames.includes(name)).length;
                score += matchCount * 10;
            }

            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.length > 0 ? scored[0].question : null;
    }

    /**
     * Check if Phase 3 should end
     */
    function shouldEndPhase3(state) {
        const phase3Answered = state.answeredIds.size - state.phase2EndCount;

        // Minimum
        if (phase3Answered < Config.PHASE3_MIN_QUESTIONS) return false;

        // Maximum
        if (phase3Answered >= Config.PHASE3_MAX_QUESTIONS) return true;

        // End if we've collected enough mechanism data
        return state.mechanismTags.length >= 5;
    }

    // ==================== SCORING UTILITIES ====================

    /**
     * Calculate distance between user scores and ideology
     */
    function calculateDistance(userScores, ideology) {
        let weightedSumSquares = 0;
        let totalWeight = 0;

        const salience = ideology.salience || {};

        AXES.forEach(axis => {
            const userVal = userScores[axis] ?? 50;
            const ideoVal = ideology.stats[axis] ?? 50;
            const weight = salience[axis] || 0.5;

            const diff = userVal - ideoVal;
            weightedSumSquares += weight * (diff * diff);
            totalWeight += weight;
        });

        if (totalWeight === 0) return Infinity;
        return Math.sqrt(weightedSumSquares / totalWeight);
    }

    /**
     * Get top N ideology matches
     */
    function getTopMatches(userScores, ideologies, n = 10) {
        const matches = ideologies.map(ideo => ({
            ideology: ideo,
            distance: calculateDistance(userScores, ideo)
        }))
        // Filter out ideologies with Infinity distance (corrupted/missing salience data)
        .filter(m => isFinite(m.distance));

        matches.sort((a, b) => a.distance - b.distance);
        return matches.slice(0, n).map(m => m.ideology);
    }

    /**
     * Convert axis totals to percentages
     */
    function calculateUserScores(axisScores, axisMaxes) {
        const scores = {};
        AXES.forEach(axis => {
            const score = axisScores[axis] || 0;
            const max = axisMaxes[axis] || 0;
            // Handle insufficient data edge case - if max is too small,
            // the axis hasn't been tested enough for a reliable score
            if (max < 0.1) {
                scores[axis] = 50; // Default to neutral for untested axes
            } else {
                // Cap score to 0-100 range (response curve can cause overflow)
                const rawScore = 100 * (max + score) / (2 * max);
                scores[axis] = Math.max(0, Math.min(100, parseFloat(rawScore.toFixed(1))));
            }
        });
        return scores;
    }

    // ==================== MAIN ADAPTIVE CONTROLLER ====================

    /**
     * Create initial adaptive quiz state
     */
    function createState() {
        const axisResponses = {};
        const axisConfidence = {};
        AXES.forEach(axis => {
            axisResponses[axis] = [];
            axisConfidence[axis] = 0;
        });

        return {
            phase: 1,
            answeredIds: new Set(),
            axisResponses: axisResponses,
            axisConfidence: axisConfidence,
            axisScores: {},
            axisMaxes: {},
            fullAxisMaxes: {},
            userScores: AXES.reduce((acc, axis) => ({ ...acc, [axis]: 50 }), {}),
            topIdeologies: [],
            targetedAxes: [],
            axisVariances: {},
            mechanismTags: [],
            tagConflicts: [],  // High fix #9: track conflicting mechanism preferences
            phase1EndCount: 0,
            phase2EndCount: null  // Use null as sentinel to distinguish "not yet set" from 0
        };
    }

    /**
     * Initialize axis score tracking
     */
    function initializeScores(state) {
        AXES.forEach(axis => {
            state.axisScores[axis] = 0;
            state.axisMaxes[axis] = 0;
            state.fullAxisMaxes[axis] = 0;
        });
    }

    /**
     * Pre-calculate maximum possible scores for normalization
     */
    function calculateMaxScores(questions, state) {
        const fullAxisMaxes = {};
        AXES.forEach(axis => {
            fullAxisMaxes[axis] = 0;
        });

        questions.forEach(q => {
            if (q.type === 'mechanism') return; // Handle separately
            const reliability = q.reliability || 0.8;
            if (q.loadings) {
                Object.entries(q.loadings).forEach(([axis, loading]) => {
                    if (AXES.includes(axis)) {
                        const typeMultiplier = LOADING_MULTIPLIERS[loading.type] || 0.5;
                        const weight = Math.abs(loading.weight);
                        // Max response is 1.0 (response curve: 1^1.3 = 1)
                        fullAxisMaxes[axis] += weight * typeMultiplier * reliability;
                    }
                });
            }
        });

        state.fullAxisMaxes = fullAxisMaxes;
    }

    /**
     * Record a response and update state
     */
    function recordResponse(state, question, rawResponse) {
        const curvedResponse = rawResponse >= 0
            ? Math.pow(Math.abs(rawResponse), 1.3)
            : -Math.pow(Math.abs(rawResponse), 1.3);

        state.answeredIds.add(question.id);

        // Handle mechanism questions differently
        if (question.type === 'mechanism' && question.options) {
            // Find selected option and record tags
            const selectedOption = question.options.find(opt =>
                Math.abs(opt.value - rawResponse) < 0.1
            );
            if (selectedOption && selectedOption.tags) {
                // Check for tag conflicts before adding (High fix #9)
                const conflictResult = hasTagConflict(state.mechanismTags, selectedOption.tags);
                if (conflictResult.conflict) {
                    // Log conflict but still add - user may have nuanced views
                    // The results page can display this as "complex" or "nuanced" positioning
                    state.tagConflicts = state.tagConflicts || [];
                    state.tagConflicts.push({
                        existing: conflictResult.existing,
                        new: conflictResult.new,
                        questionId: question.id
                    });
                }
                // Deduplicate tags to avoid duplicates from similar questions
                selectedOption.tags.forEach(tag => {
                    if (!state.mechanismTags.includes(tag)) {
                        state.mechanismTags.push(tag);
                    }
                });
            }

            // Apply option-specific loadings (Critical fix #4: use proper scoring formula)
            if (selectedOption && selectedOption.loadings) {
                const reliability = question.reliability || 0.8;
                Object.entries(selectedOption.loadings).forEach(([axis, weight]) => {
                    if (AXES.includes(axis)) {
                        // Scale mechanism loadings to be comparable to standard question weights
                        const scaledWeight = weight * MECHANISM_LOADING_SCALE;
                        // Use primary multiplier for mechanism questions (they are core discriminators)
                        const typeMultiplier = LOADING_MULTIPLIERS['primary'] || 1.0;
                        const score = scaledWeight * typeMultiplier * reliability * curvedResponse;
                        state.axisScores[axis] += score;
                        state.axisMaxes[axis] += Math.abs(scaledWeight) * typeMultiplier * reliability;

                        // Critical fix #5: Track in axisResponses for confidence calculation
                        state.axisResponses[axis].push({
                            questionId: question.id,
                            rawResponse: rawResponse,
                            weighted: score,
                            reliability: reliability
                        });
                    }
                });
            }
        } else if (question.loadings) {
            // Standard question scoring
            const reliability = question.reliability || 0.8;

            Object.entries(question.loadings).forEach(([axis, loading]) => {
                if (!AXES.includes(axis)) return;

                const typeMultiplier = LOADING_MULTIPLIERS[loading.type] || 0.5;
                const weight = loading.weight;
                if (weight === 0) return;

                const score = weight * typeMultiplier * reliability * curvedResponse;
                state.axisScores[axis] += score;
                // Max response is 1.0 (response curve: 1^1.3 = 1)
                state.axisMaxes[axis] += Math.abs(weight) * typeMultiplier * reliability;

                // Track response for this axis
                state.axisResponses[axis].push({
                    questionId: question.id,
                    rawResponse: rawResponse,
                    weighted: score,
                    reliability: reliability
                });
            });
        }

        // Update confidence and scores
        state.axisConfidence = calculateAllAxisConfidence(state);
        state.userScores = calculateUserScores(state.axisScores, state.axisMaxes);
    }

    /**
     * Get next question based on current phase
     */
    function getNextQuestion(state, questions, mechanismQuestions, ideologies) {
        // Defensive check for missing ideologies
        if (!ideologies || ideologies.length === 0) {
            console.error('Missing ideologies data in getNextQuestion');
            return null;
        }
        state.ideologies = ideologies;
        // Safety check
        if (state.answeredIds.size >= Config.ABSOLUTE_MAX_QUESTIONS) {
            return null;
        }

        if (state.phase === 1) {
            return getPhase1Questions(questions, state);
        } else if (state.phase === 2) {
            return getPhase2Questions(questions, ideologies, state);
        } else if (state.phase === 3) {
            return getPhase3Questions(mechanismQuestions, state);
        }

        return null;
    }

    /**
     * Check and handle phase transitions
     */
    function checkPhaseTransition(state, ideologies) {
        // Defensive check for missing ideologies
        if (!ideologies || ideologies.length === 0) {
            console.error('Missing ideologies data in checkPhaseTransition');
            return { transition: false };
        }
        if (state.phase === 1 && shouldEndPhase1(state)) {
            state.phase = 2;
            state.phase1EndCount = state.answeredIds.size;
            return { transition: true, from: 1, to: 2 };
        }

        if (state.phase === 2 && shouldEndPhase2(state, ideologies)) {
            state.phase = 3;
            state.phase2EndCount = state.answeredIds.size;
            return { transition: true, from: 2, to: 3 };
        }

        if (state.phase === 3 && shouldEndPhase3(state)) {
            state.phase = 4;  // Use numeric 4 for completion to maintain type consistency
            return { transition: true, from: 3, to: 4 };
        }

        return { transition: false };
    }

    /**
     * Check if quiz is complete
     */
    function isComplete(state) {
        return state.phase === 4 ||
               state.answeredIds.size >= Config.ABSOLUTE_MAX_QUESTIONS;
    }

    /**
     * Get progress information with confidence-based estimation
     * Uses actual phase completion signals to interpolate between min and max estimates
     */
    function getProgress(state, ideologies) {
        const total = state.answeredIds.size;
        let estimated;

        if (state.phase === 1) {
            // Calculate axis confidence progress
            const confidentAxes = AXES.filter(a =>
                (state.axisConfidence[a] || 0) >= Config.AXIS_CONFIDENCE_THRESHOLD
            ).length;
            const coveredAxes = AXES.filter(a =>
                (state.axisResponses[a] || []).length >= Config.PHASE1_MIN_PER_AXIS
            ).length;

            // Phase 1 ends when: min questions met + coverage + confidence
            const coverageFactor = coveredAxes / AXES.length;
            const confidenceFactor = confidentAxes / (AXES.length - 2); // allows 2 low-confidence
            const completionFactor = Math.min(1, Math.min(coverageFactor, confidenceFactor));

            // Interpolate between min and max based on completion signals
            const phase1Estimate = Config.PHASE1_MIN_QUESTIONS +
                (Config.PHASE1_MAX_QUESTIONS - Config.PHASE1_MIN_QUESTIONS) *
                (1 - completionFactor);
            estimated = phase1Estimate + Config.PHASE2_MIN_QUESTIONS + Config.PHASE3_MIN_QUESTIONS;

        } else if (state.phase === 2) {
            // Calculate ideology separation progress
            let completionFactor = 0;
            if (ideologies) {
                const topMatches = getTopMatches(state.userScores, ideologies, 3);
                if (topMatches.length >= 3) {
                    const distances = topMatches.map(ideo =>
                        calculateDistance(state.userScores, ideo)
                    );
                    // Guard against fewer than 3 distances
                    if (distances.length >= 3) {
                        const spread = distances[2] - distances[0];
                        completionFactor = Math.min(1, spread / Config.IDEOLOGY_SEPARATION_THRESHOLD);
                    }
                }
            }

            const phase2Estimate = Config.PHASE2_MIN_QUESTIONS +
                (Config.PHASE2_MAX_QUESTIONS - Config.PHASE2_MIN_QUESTIONS) *
                (1 - completionFactor);
            estimated = state.phase1EndCount + phase2Estimate + Config.PHASE3_MIN_QUESTIONS;

        } else {
            // Calculate mechanism tag progress
            const tagFactor = Math.min(1, state.mechanismTags.length / 5);

            const phase3Estimate = Config.PHASE3_MIN_QUESTIONS +
                (Config.PHASE3_MAX_QUESTIONS - Config.PHASE3_MIN_QUESTIONS) *
                (1 - tagFactor);
            estimated = state.phase2EndCount + phase3Estimate;
        }

        // Boundary protection
        estimated = Math.max(estimated, total);
        estimated = Math.min(estimated, Config.ABSOLUTE_MAX_QUESTIONS);

        return {
            answered: total,
            estimated: Math.round(estimated), // Round for cleaner display
            phase: state.phase,
            phaseProgress: getPhaseProgress(state)
        };
    }

    function getPhaseProgress(state) {
        const total = state.answeredIds.size;
        if (state.phase === 1) {
            return {
                current: total,
                min: Config.PHASE1_MIN_QUESTIONS,
                max: Config.PHASE1_MAX_QUESTIONS
            };
        } else if (state.phase === 2) {
            const inPhase = total - state.phase1EndCount;
            return {
                current: inPhase,
                min: Config.PHASE2_MIN_QUESTIONS,
                max: Config.PHASE2_MAX_QUESTIONS
            };
        } else {
            const inPhase = total - state.phase2EndCount;
            return {
                current: inPhase,
                min: Config.PHASE3_MIN_QUESTIONS,
                max: Config.PHASE3_MAX_QUESTIONS
            };
        }
    }

    // ==================== PUBLIC API ====================
    return {
        Config: Config,
        AXES: AXES,

        // State management
        createState: createState,
        initializeScores: initializeScores,
        calculateMaxScores: calculateMaxScores,

        // Core operations
        recordResponse: recordResponse,
        getNextQuestion: getNextQuestion,
        checkPhaseTransition: checkPhaseTransition,
        isComplete: isComplete,
        getProgress: getProgress,

        // Utilities
        calculateUserScores: calculateUserScores,
        getTopMatches: getTopMatches,
        calculateAxisConfidence: calculateAxisConfidence
    };
})();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Adaptive;
}
