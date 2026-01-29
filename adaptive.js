/*
 * Ideology Matrix - Adaptive Quiz Engine
 *
 * Three-phase adaptive testing system:
 * Phase 1: Core Screening (35+ questions) - Establish baseline on all 16 axes
 * Phase 2: Adaptive Discrimination (25+ questions) - Resolve ambiguity between top ideologies
 * Phase 3: Mechanism Questions (12+ questions) - Distinguish HOW someone wants to achieve goals
 *
 * Budget-aware selection: As quiz approaches target (140), urgency multipliers increasingly
 * prioritize questions that help meet phase exit criteria. No hard per-phase caps.
 *
 * Validation pair system detects inconsistent responses and asks clarifying questions
 * (up to 12 validation questions, budget shared across phases 1-2)
 *
 * Target: 140 questions, soft max: 150 (allows slight overruns in edge cases)
 * Typical range with validation: 75-120 questions
 */

const Adaptive = (function() {
    // ==================== CONFIGURATION ====================
    const Config = {
        // Phase 1: Core screening
        PHASE1_MIN_QUESTIONS: 35,
        PHASE1_MAX_QUESTIONS: 60,
        PHASE1_MIN_PER_AXIS: 2,

        // Phase 2: Adaptive discrimination
        PHASE2_MIN_QUESTIONS: 25,
        PHASE2_MAX_QUESTIONS: 50,

        // Phase 3: Mechanism questions
        PHASE3_MIN_QUESTIONS: 12,
        PHASE3_MAX_QUESTIONS: 30,

        // Validation pairs
        VALIDATION_MAX_QUESTIONS: 12,
        VALIDATION_GRACE_PERIOD: 10,  // Don't validate in first N questions
        VALIDATION_PHASE1_THRESHOLD: 0.8,  // Only high severity in Phase 1
        VALIDATION_PHASE2_THRESHOLD: 0.6,  // More liberal in Phase 2

        // Confidence thresholds
        AXIS_CONFIDENCE_THRESHOLD: 0.7,
        IDEOLOGY_CONFIDENCE_THRESHOLD: 0.85,
        IDEOLOGY_SEPARATION_THRESHOLD: 5, // percentage points

        // Budget-aware selection
        TARGET_QUESTIONS: 140,        // Soft target
        SOFT_MAX_QUESTIONS: 150,      // Hard stop only for edge cases
        URGENCY_START_BUDGET: 30,     // Start boosting when this many questions remain to target

        // Shuffle mode
        SHUFFLE_POOL_SIZE: 12,  // When shuffle enabled, pick randomly from top N candidates
        SHUFFLE_TEMPERATURE: 65  // Higher = more uniform, lower = favor top scores
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
        'theocratic': ['secular', 'laicist'],
        // Enforcement mechanism conflicts
        'social_enforcement': ['state_enforcement', 'private_enforcement', 'punitive'],
        'democratic_enforcement': ['private_enforcement', 'punitive'],
        'state_enforcement': ['social_enforcement', 'private_enforcement'],
        'private_enforcement': ['social_enforcement', 'democratic_enforcement', 'state_enforcement'],
        'restorative': ['punitive'],
        'punitive': ['restorative', 'rehabilitative'],
        'rehabilitative': ['punitive'],
        // Leadership style conflicts
        'leaderless': ['vanguard_leadership', 'technocratic_leadership', 'elite_guidance'],
        'horizontal': ['vanguard_leadership', 'technocratic_leadership', 'elite_guidance', 'cadre'],
        'grassroots_leadership': ['technocratic_leadership', 'elite_guidance', 'vanguard_leadership'],
        'vanguard_leadership': ['leaderless', 'horizontal', 'grassroots_leadership', 'representative_leadership'],
        'technocratic_leadership': ['leaderless', 'horizontal', 'grassroots_leadership'],
        'elite_guidance': ['leaderless', 'horizontal', 'grassroots_leadership'],
        // Social change method conflicts
        'direct_action': ['institutional_preservation', 'incremental'],
        'mass_mobilization': ['institutional_preservation', 'incremental'],
        'prefigurative': ['institutional_preservation'],
        'institutional_preservation': ['direct_action', 'mass_mobilization', 'prefigurative'],
        'gradualist': ['direct_action', 'mass_mobilization'],
        // Legitimacy source conflicts
        'popular_consent': ['hereditary', 'divine', 'charismatic'],
        'electoral': ['hereditary', 'divine', 'revolutionary'],
        'traditional': ['revolutionary', 'popular_consent'],
        'divine': ['secular', 'popular_consent', 'electoral'],
        'hereditary': ['popular_consent', 'electoral', 'revolutionary'],
        'revolutionary': ['traditional', 'hereditary', 'electoral'],
        // Power structure conflicts
        'decentralized': ['centralized', 'totalitarian', 'authoritarian', 'one_party_state'],
        'horizontal': ['hierarchical', 'authoritarian', 'centralized'],
        'one_party_state': ['federal', 'democratic', 'decentralized', 'separation_of_powers'],
        'totalitarian': ['federal', 'democratic', 'decentralized', 'horizontal'],
        'hierarchical': ['horizontal', 'decentralized'],
        // Integration approach conflicts
        'pluralist': ['assimilationist', 'exclusionist', 'ethno_state'],
        'multicultural': ['exclusionist', 'ethno_state', 'nativist'],
        'exclusionist': ['pluralist', 'multicultural', 'cosmopolitan'],
        'ethno_state': ['pluralist', 'multicultural', 'cosmopolitan', 'civic'],
        'cosmopolitan': ['exclusionist', 'ethno_state', 'nativist', 'nationalist'],
        // Economic goal conflicts
        'post_capitalism': ['market_freedom', 'growth', 'efficiency'],
        'sustainability': ['growth'],
        'market_freedom': ['post_capitalism', 'equality', 'socialism'],
        'socialism': ['market_freedom', 'efficiency'],
        // Authority preference conflicts
        'anti_authority': ['authoritarian', 'strong_defense', 'militarist', 'strong_state'],
        'minimal_state': ['authoritarian', 'interventionist', 'strong_state'],
        'multilateral': ['sovereignty', 'non_intervention', 'isolationist'],
        'interventionist': ['non_intervention', 'isolationist', 'minimal_state'],
        'sovereignty': ['multilateral', 'supranational'],
        // Enforcement philosophy conflicts (new)
        'rehabilitative': ['punitive', 'incapacitative'],
        'restorative': ['punitive', 'incapacitative'],
        'incapacitative': ['rehabilitative', 'restorative'],
        // Enforcement accountability conflicts (new)
        'community_oversight': ['union_protection', 'private_enforcement'],
        'private_enforcement': ['state_enforcement', 'community_oversight', 'social_enforcement'],
        // Leadership selection conflicts (new)
        'direct_election': ['hereditary_appointment', 'meritocratic_selection'],
        'hereditary_appointment': ['direct_election', 'consensus_selection', 'representative_election'],
        'meritocratic_selection': ['direct_election', 'hereditary_appointment'],
        'consensus_selection': ['hereditary_appointment'],
        // Leadership discretion conflicts (new)
        'procedural_constraint': ['executive_discretion', 'unified_authority'],
        'distributed_leadership': ['executive_discretion', 'unified_authority', 'vanguard_leadership'],
        'executive_discretion': ['procedural_constraint', 'distributed_leadership'],
        // Power structure conflicts (new)
        'separation_of_powers': ['unified_authority', 'party_discipline', 'one_party_state'],
        'direct_oversight': ['unified_authority', 'technocratic'],
        'party_discipline': ['separation_of_powers', 'direct_oversight'],
        'unified_authority': ['separation_of_powers', 'federalism', 'direct_oversight', 'distributed_leadership'],
        'federalism': ['unified_authority', 'centralized_enforcement'],
        // Economic organization conflicts (new)
        'union_federation': ['individual_enterprise', 'state_enterprise'],
        'communal': ['individual_enterprise', 'market_value'],
        'state_enterprise': ['individual_enterprise', 'cooperative_market', 'union_federation'],
        'individual_enterprise': ['union_federation', 'communal', 'state_enterprise'],
        'cooperative_market': ['state_enterprise'],
        // Compensation principle conflicts (new)
        'needs_based': ['market_value', 'productivity_based'],
        'strict_equality': ['market_value', 'productivity_based'],
        'labor_time': ['market_value'],
        'market_value': ['needs_based', 'strict_equality', 'labor_time', 'communal'],
        'productivity_based': ['needs_based', 'strict_equality'],
        // Welfare provider conflicts (new)
        'family_provision': ['state_welfare'],
        'religious_charity': ['state_welfare', 'secular'],
        'state_welfare': ['family_provision', 'religious_charity'],
        // Change strategy conflicts (new)
        'electoral_transformation': ['revolutionary_seizure'],
        'cooperative_prefiguration': ['revolutionary_seizure', 'state_led'],
        'revolutionary_seizure': ['electoral_transformation', 'cooperative_prefiguration', 'regulatory_reform', 'social_partnership'],
        'social_partnership': ['revolutionary_seizure']
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

    // ==================== VALIDATION PAIR SYSTEM ====================

    /**
     * Build lookup index for validation pairs
     * Returns: { questionId: { pairId: number, correlation: 1|-1 } }
     */
    function buildValidationPairIndex(questions) {
        const index = {};
        questions.forEach(q => {
            if (q.validationPair) {
                const pairId = Math.abs(q.validationPair);
                const correlation = q.validationPair > 0 ? 1 : -1;
                index[q.id] = { pairId, correlation };
            }
        });
        return index;
    }

    /**
     * Check if a response is inconsistent with its validation pair
     * Returns: { severity: number, pairQuestionId: number, thisResponse: number, pairResponse: number } | null
     */
    function checkForInconsistencies(state, questionId, response, questions) {
        // Ensure validation pair index is built
        if (!state.validationPairIndex) {
            state.validationPairIndex = buildValidationPairIndex(questions);
        }

        const pairInfo = state.validationPairIndex[questionId];
        if (!pairInfo) return null;  // No validation pair for this question

        // Find the paired question's response
        const pairQuestion = questions.find(q => q.id === pairInfo.pairId);
        if (!pairQuestion) return null;

        const pairResponse = state.validationState.questionResponses[pairInfo.pairId];
        if (pairResponse === undefined) return null;  // Pair not answered yet

        // Only check if BOTH responses are strong (|r| >= 0.5)
        // Neutral responses (0.0) don't trigger inconsistency
        if (Math.abs(response) < 0.5 || Math.abs(pairResponse) < 0.5) {
            return null;
        }

        // Calculate expected agreement based on correlation
        // correlation = 1: responses should have same sign
        // correlation = -1: responses should have opposite signs
        const expectedSign = pairInfo.correlation > 0 ? Math.sign(pairResponse) : -Math.sign(pairResponse);
        const actualSign = Math.sign(response);

        if (expectedSign === actualSign) {
            return null;  // Responses are consistent
        }

        // Calculate severity based on strength of contradiction
        // Max severity when both are strongly in the "wrong" directions
        const severity = (Math.abs(response) + Math.abs(pairResponse)) / 2;

        return {
            severity,
            pairQuestionId: pairInfo.pairId,
            thisQuestionId: questionId,
            thisResponse: response,
            pairResponse: pairResponse,
            correlation: pairInfo.correlation
        };
    }

    /**
     * Determine if we should ask a validation question right now
     */
    function shouldAskValidation(state) {
        // Don't interrupt mechanism questions (Phase 3)
        if (state.phase === 3) return false;

        // Respect grace period
        if (state.answeredIds.size < Config.VALIDATION_GRACE_PERIOD) return false;

        // Respect budget
        if (state.validationState.validationQuestionsAsked >= Config.VALIDATION_MAX_QUESTIONS) return false;

        // Check if we have unresolved inconsistencies
        const unresolved = state.validationState.detectedInconsistencies.filter(inc =>
            !state.validationState.resolvedPairs.has(`${inc.thisQuestionId}-${inc.pairQuestionId}`)
        );

        if (unresolved.length === 0) return false;

        // Get threshold based on phase
        const threshold = state.phase === 1
            ? Config.VALIDATION_PHASE1_THRESHOLD
            : Config.VALIDATION_PHASE2_THRESHOLD;

        // Check if any unresolved inconsistency meets the threshold
        return unresolved.some(inc => inc.severity >= threshold);
    }

    /**
     * Get the best validation question to ask
     * Returns the question that would help resolve the highest-severity inconsistency
     */
    function getValidationQuestion(state, questions) {
        if (!shouldAskValidation(state)) return null;

        const threshold = state.phase === 1
            ? Config.VALIDATION_PHASE1_THRESHOLD
            : Config.VALIDATION_PHASE2_THRESHOLD;

        // Get unresolved inconsistencies above threshold
        const unresolved = state.validationState.detectedInconsistencies
            .filter(inc =>
                inc.severity >= threshold &&
                !state.validationState.resolvedPairs.has(`${inc.thisQuestionId}-${inc.pairQuestionId}`)
            )
            .sort((a, b) => b.severity - a.severity);  // Highest severity first

        if (unresolved.length === 0) return null;

        // Find a question that helps resolve the top inconsistency
        // Prefer questions related to the same axes but not yet asked
        const topInconsistency = unresolved[0];

        // Get the axes involved in both questions of the pair
        const q1 = questions.find(q => q.id === topInconsistency.thisQuestionId);
        const q2 = questions.find(q => q.id === topInconsistency.pairQuestionId);
        if (!q1 || !q2) return null;

        const involvedAxes = new Set([
            ...Object.keys(q1.loadings || {}),
            ...Object.keys(q2.loadings || {})
        ]);

        // Find unanswered questions that target these axes
        const candidates = questions.filter(q =>
            !state.answeredIds.has(q.id) &&
            !state.validationState.askedValidationQuestions.has(q.id) &&
            q.type !== 'mechanism' &&
            q.loadings &&
            Object.keys(q.loadings).some(axis => involvedAxes.has(axis))
        );

        if (candidates.length === 0) {
            // Mark this pair as resolved (can't find validation question)
            state.validationState.resolvedPairs.add(
                `${topInconsistency.thisQuestionId}-${topInconsistency.pairQuestionId}`
            );
            return null;
        }

        // Score candidates by relevance and reliability
        const scored = candidates.map(q => {
            let score = (q.reliability || 0.7) * 50;
            // Boost for questions that share more axes with the inconsistent pair
            const sharedAxes = Object.keys(q.loadings).filter(axis => involvedAxes.has(axis));
            score += sharedAxes.length * 20;
            return { question: q, score, inconsistency: topInconsistency };
        });

        scored.sort((a, b) => b.score - a.score);
        return scored.length > 0 ? scored[0] : null;
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

        // Calculate urgency multiplier based on remaining budget
        const urgency = getUrgencyMultiplier(state);

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

                    // Strong boost for axes with few responses (scaled by urgency)
                    if (axisResponses < Config.PHASE1_MIN_PER_AXIS) {
                        score += (Config.PHASE1_MIN_PER_AXIS - axisResponses) * 20 * urgency;
                    }

                    // Boost for low confidence axes (scaled by urgency)
                    score += (1 - axisConf) * 30 * urgency;

                    // Primary loadings preferred for clean signal
                    if ((loading.type || '').toLowerCase() === 'primary') score += 10;
                });
            }

            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return selectFromCandidates(scored, state)?.question ?? null;
    }

    /**
     * Check if Phase 1 should end
     */
    function shouldEndPhase1(state) {
        const totalAnswered = state.answeredIds.size;

        // Minimum questions required
        if (totalAnswered < Config.PHASE1_MIN_QUESTIONS) return false;

        // No hard maximum - rely on budget-aware selection to push toward completion

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

        // Calculate urgency multiplier based on remaining budget
        const urgency = getUrgencyMultiplier(state);

        // Score questions by discriminating power (scaled by urgency)
        const scored = available.map(q => {
            let score = calculateDiscriminatingPower(q, axisVariances, state.answeredIds) * urgency;
            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return selectFromCandidates(scored, state)?.question ?? null;
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
            const typeMultiplier = LOADING_MULTIPLIERS[(loading.type || '').toLowerCase()] || LOADING_MULTIPLIERS['primary'];

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

        // No hard maximum - rely on budget-aware selection to push toward completion

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
        // Guard against null/undefined mechanismQuestions
        if (!mechanismQuestions || mechanismQuestions.length === 0) {
            return null;
        }

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

        // Calculate urgency multiplier based on remaining budget
        const urgency = getUrgencyMultiplier(state);

        // Sort by relevance to user's profile
        const scored = available.map(q => {
            let score = 0;

            // Base relevance from reliability
            score += (q.reliability || 0.8) * 20;

            // Boost if this mechanism helps distinguish between top ideologies
            if (q.distinguishes && state.topIdeologies && state.topIdeologies.length > 0) {
                const topNames = (state.topIdeologies || []).slice(0, 5).map(i => i.name);
                const matchCount = q.distinguishes.filter(name => topNames.includes(name)).length;

                // Extra boost if question distinguishes between top 2 specifically (scaled by urgency)
                if (matchCount >= 2) {
                    const top2Names = topNames.slice(0, 2);
                    const top2MatchCount = q.distinguishes.filter(name => top2Names.includes(name)).length;
                    if (top2MatchCount >= 2) {
                        score += 25 * urgency; // High priority for questions that separate close matches
                    } else {
                        score += matchCount * 10;
                    }
                } else {
                    score += matchCount * 10;
                }
            }

            return { question: q, score };
        });

        scored.sort((a, b) => b.score - a.score);
        return selectFromCandidates(scored, state)?.question ?? null;
    }

    /**
     * Count mechanism tag differences between two ideologies based on user's collected tags
     * Used to determine if top ideologies are adequately distinguished
     */
    function countMechanismDifferences(ideology1, ideology2, userTags) {
        if (!ideology1.mechanisms || !ideology2.mechanisms || !userTags || userTags.length === 0) {
            return 0;
        }

        // Flatten ideology mechanism tags
        const tags1 = new Set();
        const tags2 = new Set();

        for (const category of Object.values(ideology1.mechanisms)) {
            if (Array.isArray(category)) {
                category.forEach(tag => tags1.add(tag));
            }
        }
        for (const category of Object.values(ideology2.mechanisms)) {
            if (Array.isArray(category)) {
                category.forEach(tag => tags2.add(tag));
            }
        }

        // Count user tags that differentiate the two ideologies
        let differences = 0;
        for (const userTag of userTags) {
            const in1 = tags1.has(userTag);
            const in2 = tags2.has(userTag);
            if (in1 !== in2) {
                differences++;
            }
        }

        return differences;
    }

    /**
     * Check if Phase 3 should end
     */
    function shouldEndPhase3(state) {
        const phase3Answered = state.answeredIds.size - state.phase2EndCount;

        // Minimum
        if (phase3Answered < Config.PHASE3_MIN_QUESTIONS) return false;

        // No hard maximum - rely on budget-aware selection to push toward completion

        // Check if top ideologies are adequately distinguished by mechanisms
        if (state.topIdeologies && state.topIdeologies.length >= 2) {
            const top2 = state.topIdeologies.slice(0, 2);
            const mechanismDiff = countMechanismDifferences(top2[0], top2[1], state.mechanismTags);
            // Continue if top 2 are still too similar on mechanisms (less than 2 differentiating tags)
            if (mechanismDiff < 2) {
                return false;
            }
        }

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
        const allMatches = ideologies.map(ideo => ({
            ideology: ideo,
            distance: calculateDistance(userScores, ideo)
        }));

        // Filter out ideologies with Infinity distance (corrupted/missing salience data)
        const matches = allMatches.filter(m => isFinite(m.distance));

        // Warn if any ideologies were filtered out due to corrupted data
        const filteredCount = allMatches.length - matches.length;
        if (filteredCount > 0) {
            console.warn(`[Adaptive] Filtered out ${filteredCount} ideologies with invalid distance (check salience data)`);
        }

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
            // Handle insufficient data edge case - if max is 0 or too small,
            // the axis hasn't been tested enough for a reliable score
            // Explicit zero check prevents division-by-zero edge case
            if (max === 0 || max < 0.1) {
                scores[axis] = 50; // Default to neutral for untested axes
            } else {
                // Cap score to 0-100 range (response curve can cause overflow)
                const rawScore = 100 * (max + score) / (2 * max);
                // Use Math.round instead of parseFloat(toFixed) to avoid -0 edge case
                scores[axis] = Math.max(0, Math.min(100, Math.round(rawScore * 10) / 10));
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
            mechanismTagCounts: {},  // Track how many times each tag was endorsed
            tagConflicts: [],  // High fix #9: track conflicting mechanism preferences
            phase1EndCount: 0,
            phase2EndCount: null,  // Use null as sentinel to distinguish "not yet set" from 0
            // Validation pair tracking
            validationState: {
                questionResponses: {},           // Track responses by question ID
                detectedInconsistencies: [],     // Pairs with severity > threshold
                askedValidationQuestions: new Set(),
                resolvedPairs: new Set(),
                validationQuestionsAsked: 0
            },
            validationPairIndex: null,  // Will be populated on first use
            shuffleMode: false  // When true, randomize from top N candidates instead of always picking best
        };
    }

    /**
     * Select a question from scored candidates
     * In shuffle mode, uses softmax-weighted random selection:
     * - Higher scores get higher probability (preserves quality)
     * - Temperature controls variety vs. quality tradeoff
     * - Every candidate has non-zero probability (all questions reachable)
     */
    function selectFromCandidates(scored, state) {
        if (scored.length === 0) return null;
        if (!state.shuffleMode || scored.length <= 1) {
            return scored[0];
        }

        const poolSize = Math.min(Config.SHUFFLE_POOL_SIZE, scored.length);
        const pool = scored.slice(0, poolSize);

        // Normalize scores to prevent overflow in exp()
        const maxScore = pool[0].score; // Already sorted, first is highest
        const temperature = Config.SHUFFLE_TEMPERATURE;

        // Calculate softmax weights: exp((score - maxScore) / temperature)
        const weights = pool.map(c => Math.exp((c.score - maxScore) / temperature));
        const totalWeight = weights.reduce((sum, w) => sum + w, 0);

        // Weighted random selection
        let random = Math.random() * totalWeight;
        for (let i = 0; i < pool.length; i++) {
            random -= weights[i];
            if (random <= 0) return pool[i];
        }
        return pool[pool.length - 1]; // Fallback (shouldn't reach)
    }

    /**
     * Calculate urgency multiplier based on remaining question budget
     * Returns 1.0 when plenty of budget remains, ramps up to 3.0 as budget depletes
     */
    function getUrgencyMultiplier(state, targetBudget = Config.TARGET_QUESTIONS) {
        const remaining = targetBudget - state.answeredIds.size;
        if (remaining >= Config.URGENCY_START_BUDGET) return 1.0;
        if (remaining <= 0) return 3.0;
        // Ramp from 1.0 to 3.0 as remaining goes from 30 to 0
        return 1.0 + 2.0 * (1 - remaining / Config.URGENCY_START_BUDGET);
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
                        const typeMultiplier = LOADING_MULTIPLIERS[(loading.type || '').toLowerCase()] || LOADING_MULTIPLIERS['primary'];
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
                    // Deduplicate conflicts by checking if this pair already exists (BUG-M1)
                    const conflictExists = state.tagConflicts.some(c =>
                        (c.existing === conflictResult.existing && c.new === conflictResult.new) ||
                        (c.existing === conflictResult.new && c.new === conflictResult.existing)
                    );
                    if (!conflictExists) {
                        state.tagConflicts.push({
                            existing: conflictResult.existing,
                            new: conflictResult.new,
                            questionId: question.id
                        });
                    }
                }
                // Deduplicate tags to avoid duplicates from similar questions
                // Also track frequency for weighted matching (Phase 4)
                selectedOption.tags.forEach(tag => {
                    if (!state.mechanismTags.includes(tag)) {
                        state.mechanismTags.push(tag);
                    }
                    // Track how many times each tag was endorsed
                    state.mechanismTagCounts[tag] = (state.mechanismTagCounts[tag] || 0) + 1;
                });
            }

            // Apply option-specific loadings (Critical fix #4: use proper scoring formula)
            if (selectedOption && selectedOption.loadings) {
                const reliability = question.reliability || 0.8;
                Object.entries(selectedOption.loadings).forEach(([axis, weight]) => {
                    if (!AXES.includes(axis)) return;
                    // Skip zero-weight loadings to avoid inflating response counts (BUG-M3)
                    if (weight === 0) return;
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
                });
            }
        } else if (question.loadings) {
            // Standard question scoring
            const reliability = question.reliability || 0.8;

            Object.entries(question.loadings).forEach(([axis, loading]) => {
                if (!AXES.includes(axis)) return;

                const typeMultiplier = LOADING_MULTIPLIERS[(loading.type || '').toLowerCase()] || LOADING_MULTIPLIERS['primary'];
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
     * Record response for validation tracking and check for inconsistencies
     * Called after recordResponse with the questions array for pair lookup
     */
    function recordValidationResponse(state, question, rawResponse, questions) {
        // Only track non-mechanism questions for validation pairs
        if (question.type === 'mechanism') return;

        // Store response for this question
        state.validationState.questionResponses[question.id] = rawResponse;

        // Check for inconsistencies with validation pair
        const inconsistency = checkForInconsistencies(state, question.id, rawResponse, questions);
        const thresholdForDetection = state.phase === 1
            ? Config.VALIDATION_PHASE1_THRESHOLD
            : Config.VALIDATION_PHASE2_THRESHOLD;
        if (inconsistency && inconsistency.severity >= thresholdForDetection) {
            // Avoid duplicate inconsistencies for the same pair
            const pairKey = `${inconsistency.thisQuestionId}-${inconsistency.pairQuestionId}`;
            const reversePairKey = `${inconsistency.pairQuestionId}-${inconsistency.thisQuestionId}`;
            const alreadyDetected = state.validationState.detectedInconsistencies.some(inc =>
                `${inc.thisQuestionId}-${inc.pairQuestionId}` === pairKey ||
                `${inc.thisQuestionId}-${inc.pairQuestionId}` === reversePairKey
            );
            if (!alreadyDetected) {
                state.validationState.detectedInconsistencies.push(inconsistency);
            }
        }
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
        // Safety check - soft max allows slight overruns in edge cases
        if (state.answeredIds.size >= Config.SOFT_MAX_QUESTIONS) {
            return null;
        }

        // Check if we should prioritize a validation question (not in Phase 3)
        if (state.phase !== 3) {
            const validation = getValidationQuestion(state, questions);
            if (validation) {
                state.validationState.askedValidationQuestions.add(validation.question.id);
                state.validationState.validationQuestionsAsked++;
                // Mark the inconsistency pair as resolved since we're addressing it
                if (validation.inconsistency) {
                    state.validationState.resolvedPairs.add(
                        `${validation.inconsistency.thisQuestionId}-${validation.inconsistency.pairQuestionId}`
                    );
                }
                return validation.question;
            }
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
               state.answeredIds.size >= Config.SOFT_MAX_QUESTIONS;
    }

    /**
     * Get progress information with confidence-based estimation
     * Uses actual phase completion signals to interpolate between min and max estimates
     */
    function getProgress(state, ideologies) {
        const total = state.answeredIds.size;
        let estimated;
        let currentPhaseEstimate;

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
            const confidenceFactor = confidentAxes / Math.max(1, AXES.length - 2); // allows 2 low-confidence
            const completionFactor = Math.min(1, Math.min(coverageFactor, confidenceFactor));

            // Interpolate between min and max based on completion signals
            const phase1Estimate = Config.PHASE1_MIN_QUESTIONS +
                (Config.PHASE1_MAX_QUESTIONS - Config.PHASE1_MIN_QUESTIONS) *
                (1 - completionFactor);
            currentPhaseEstimate = phase1Estimate;
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
            currentPhaseEstimate = phase2Estimate;
            const phase1End = state.phase1EndCount ?? 0;
            estimated = phase1End + phase2Estimate + Config.PHASE3_MIN_QUESTIONS;

        } else {
            // Calculate mechanism tag progress
            const tagFactor = Math.min(1, state.mechanismTags.length / 15);

            const phase3Estimate = Config.PHASE3_MIN_QUESTIONS +
                (Config.PHASE3_MAX_QUESTIONS - Config.PHASE3_MIN_QUESTIONS) *
                (1 - tagFactor);
            currentPhaseEstimate = phase3Estimate;
            const phase2End = state.phase2EndCount ?? state.answeredIds.size;
            estimated = phase2End + phase3Estimate;
        }

        // Boundary protection - use TARGET_QUESTIONS for estimation display
        estimated = Math.max(estimated, total);
        estimated = Math.min(estimated, Config.TARGET_QUESTIONS);

        return {
            answered: total,
            estimated: Math.round(estimated), // Round for cleaner display
            phase: state.phase,
            phaseProgress: getPhaseProgress(state),
            phaseEstimate: Math.round(currentPhaseEstimate)
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
            const phase1End = state.phase1EndCount ?? 0;
            const inPhase = total - phase1End;
            return {
                current: inPhase,
                min: Config.PHASE2_MIN_QUESTIONS,
                max: Config.PHASE2_MAX_QUESTIONS
            };
        } else {
            const phase2End = state.phase2EndCount ?? total;
            const inPhase = total - phase2End;
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
        recordValidationResponse: recordValidationResponse,
        getNextQuestion: getNextQuestion,
        checkPhaseTransition: checkPhaseTransition,
        isComplete: isComplete,
        getProgress: getProgress,

        // Validation
        buildValidationPairIndex: buildValidationPairIndex,

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
