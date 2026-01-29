/*
 * Ideology Matrix - Mechanism Questions
 *
 * These questions distinguish HOW someone wants to achieve their goals,
 * not just what end-state they prefer.
 *
 * Structure:
 * - id: Unique identifier (starting at 1000 to avoid conflicts)
 * - question: The question text
 * - type: "mechanism"
 * - reliability: Question reliability coefficient
 * - trigger: When to show this question { axis, threshold, direction }
 * - options: Array of possible responses with loadings and tags
 * - distinguishes: Array of ideology names this helps distinguish between
 *
 * Categories:
 * - Economic Transition (4): ownership path, market role, property transition, welfare mechanism
 * - Political Organization (4): decision making, change velocity, power structure, legitimacy
 * - Social/Cultural (4): integration, progress method, technology, environment
 * - Security/International (3): conflict, global integration, national identity
 */

const mechanismQuestions = [
    // ========================================
    // ECONOMIC TRANSITION
    // ========================================
    {
        "id": 1001,
        "question": "What is the best path toward a more equitable distribution of ownership in the economy?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 55, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Nationalization of key industries under democratic state control",
                "loadings": { "eqlt": 0.3, "lbrt": -0.2, "powr": -0.2 },
                "tags": ["state_ownership", "nationalization"]
            },
            {
                "value": 0.5,
                "text": "Worker cooperatives and employee ownership programs",
                "loadings": { "eqlt": 0.2, "powr": 0.2, "lbrt": 0.1 },
                "tags": ["cooperative", "worker_ownership"]
            },
            {
                "value": 0.0,
                "text": "Social wealth funds that gradually buy equity stakes on behalf of citizens",
                "loadings": { "eqlt": 0.15, "prty": -0.1 },
                "tags": ["social_wealth_fund", "market_socialism"]
            },
            {
                "value": -0.5,
                "text": "Strong redistribution through taxes while keeping private ownership",
                "loadings": { "eqlt": 0.1, "prty": -0.15, "wlfr": 0.1 },
                "tags": ["redistribution", "social_democracy"]
            },
            {
                "value": -1.0,
                "text": "The current ownership distribution is mostly fine as is",
                "loadings": { "eqlt": -0.2, "prty": -0.2 },
                "tags": ["status_quo", "market_preference"]
            }
        ],
        "distinguishes": ["Democratic Socialism", "Market Socialism", "Social Democracy", "Social Liberalism", "Syndicalism", "Libertarian Socialism", "Cooperative Socialism", "Nordic Model"]
    },
    {
        "id": 1002,
        "question": "What role should markets play in a well-functioning economy?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Markets should be eliminated or minimized in favor of democratic planning",
                "loadings": { "eqlt": 0.3, "prty": 0.2 },
                "tags": ["planning", "anti_market"]
            },
            {
                "value": 0.5,
                "text": "Markets should exist but with heavy regulation and government ownership of major industries",
                "loadings": { "eqlt": 0.15, "prty": 0.1 },
                "tags": ["mixed_economy", "regulated_markets"]
            },
            {
                "value": 0.0,
                "text": "A balance of market mechanisms and government intervention based on what works",
                "loadings": { "mns": -0.1 },
                "tags": ["pragmatic", "mixed_economy"]
            },
            {
                "value": -0.5,
                "text": "Markets should be primary with limited government intervention only when necessary",
                "loadings": { "eqlt": -0.15, "prty": -0.1 },
                "tags": ["market_preference", "light_regulation"]
            },
            {
                "value": -1.0,
                "text": "Markets should be as free as possible with minimal government interference",
                "loadings": { "eqlt": -0.25, "prty": -0.2, "lbrt": 0.1 },
                "tags": ["free_market", "laissez_faire"]
            }
        ],
        "distinguishes": ["Libertarianism", "Classical Liberalism", "Social Democracy", "Market Socialism", "Centrism", "Radical Centrism", "Left-Liberalism"]
    },
    {
        "id": 1003,
        "question": "How should the transition to a more equal society happen?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "eqlt", "threshold": 55, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "A revolutionary break with the current system, building something entirely new",
                "loadings": { "chng": 0.3, "mns": -0.1 },
                "tags": ["revolutionary", "rupture"]
            },
            {
                "value": 0.5,
                "text": "Rapid, bold reforms that fundamentally transform institutions within years",
                "loadings": { "chng": 0.15, "mns": 0.05 },
                "tags": ["rapid_reform", "transformative"]
            },
            {
                "value": 0.0,
                "text": "Steady reforms over a generation, letting people adapt",
                "loadings": { "chng": -0.1, "mns": 0.1 },
                "tags": ["gradual", "generational"]
            },
            {
                "value": -0.5,
                "text": "Incremental changes within existing frameworks, proving each step works",
                "loadings": { "chng": -0.2, "mns": 0.15 },
                "tags": ["incremental", "pragmatic"]
            },
            {
                "value": -1.0,
                "text": "Very cautious changes, preserving what works while fixing clear problems",
                "loadings": { "chng": -0.3, "mns": 0.2 },
                "tags": ["conservative_reform", "preservationist"]
            }
        ],
        "distinguishes": ["Democratic Socialism", "Social Democracy", "Social Liberalism", "Communization", "Laborism", "Fabianism"]
    },
    {
        "id": 1004,
        "question": "How should welfare and social support be organized?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "wlfr", "threshold": 50, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Universal basic services: free healthcare, housing, education, transport for all",
                "loadings": { "wlfr": 0.3, "prty": 0.15, "eqlt": 0.1 },
                "tags": ["universal_services", "decommodification"]
            },
            {
                "value": 0.5,
                "text": "Universal basic income: cash payments to all, letting people choose how to spend",
                "loadings": { "wlfr": 0.25, "lbrt": 0.1 },
                "tags": ["ubi", "cash_transfers"]
            },
            {
                "value": 0.0,
                "text": "Strong social insurance programs: robust unemployment, disability, and pension systems",
                "loadings": { "wlfr": 0.15 },
                "tags": ["social_insurance", "bismarckian"]
            },
            {
                "value": -0.5,
                "text": "Means-tested assistance targeting those who need it most",
                "loadings": { "wlfr": -0.1, "mns": -0.1 },
                "tags": ["means_tested", "targeted"]
            },
            {
                "value": -1.0,
                "text": "Primarily private charity and community support, not government programs",
                "loadings": { "wlfr": -0.25, "lbrt": 0.1 },
                "tags": ["charity", "voluntary"]
            }
        ],
        "distinguishes": ["Social Democracy", "Left-Libertarianism", "Libertarianism", "Conservatism", "Communitarianism"]
    },

    // ========================================
    // POLITICAL ORGANIZATION
    // ========================================
    {
        "id": 1005,
        "question": "How should major political and economic decisions be made?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Direct democracy: citizens vote on major decisions themselves",
                "loadings": { "powr": 0.25, "popl": 0.15, "lbrt": 0.1 },
                "tags": ["direct_democracy", "participatory"]
            },
            {
                "value": 0.5,
                "text": "Representative democracy with strong participation and accountability mechanisms",
                "loadings": { "powr": 0.1, "lbrt": 0.1 },
                "tags": ["representative", "democratic"]
            },
            {
                "value": 0.0,
                "text": "Constitutional democracy with checks, balances, and protected rights",
                "loadings": { "lbrt": 0.15, "mns": 0.1 },
                "tags": ["constitutional", "liberal_democracy"]
            },
            {
                "value": -0.5,
                "text": "Governance informed heavily by experts and technocrats on complex issues",
                "loadings": { "popl": -0.2, "powr": -0.1 },
                "tags": ["technocracy", "expertise"]
            },
            {
                "value": -1.0,
                "text": "Strong, decisive leadership that can act quickly without excessive deliberation",
                "loadings": { "powr": -0.25, "lbrt": -0.15, "popl": -0.1 },
                "tags": ["authoritarian", "centralized"]
            }
        ],
        "distinguishes": ["Participism", "Technocracy", "Social Authoritarianism", "Civic Republicanism", "Deliberative Democracy"]
    },
    {
        "id": 1006,
        "question": "At what pace should significant social changes occur?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "As fast as possible when change is clearly needed - urgency matters",
                "loadings": { "chng": 0.25, "mns": -0.1 },
                "tags": ["urgent", "accelerationist"]
            },
            {
                "value": 0.5,
                "text": "Boldly, within an electoral cycle - enough time to implement and adjust",
                "loadings": { "chng": 0.1 },
                "tags": ["ambitious", "electoral"]
            },
            {
                "value": 0.0,
                "text": "Moderately paced, giving institutions time to adapt",
                "loadings": { "mns": 0.1 },
                "tags": ["moderate", "adaptive"]
            },
            {
                "value": -0.5,
                "text": "Gradually over a generation, building broad consensus",
                "loadings": { "chng": -0.15, "mns": 0.15 },
                "tags": ["gradual", "consensus"]
            },
            {
                "value": -1.0,
                "text": "Very slowly, preserving stability and testing each change carefully",
                "loadings": { "chng": -0.25, "mns": 0.2 },
                "tags": ["conservative", "stability"]
            }
        ],
        "distinguishes": ["Progressivism", "Conservatism", "Blairism", "Third Way", "Post-Liberalism", "Traditionalist Conservatism"]
    },
    {
        "id": 1007,
        "question": "How should power be distributed geographically?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Highly decentralized: most power at the local/municipal level",
                "loadings": { "powr": 0.3, "lbrt": 0.1 },
                "tags": ["decentralized", "municipal", "local"]
            },
            {
                "value": 0.5,
                "text": "Federated: strong regional/state governments with limited central authority",
                "loadings": { "powr": 0.15 },
                "tags": ["federal", "regional"]
            },
            {
                "value": 0.0,
                "text": "Balanced federalism: shared powers between levels",
                "loadings": {},
                "tags": ["balanced", "mixed"]
            },
            {
                "value": -0.5,
                "text": "Primarily national: strong central government with local administration",
                "loadings": { "powr": -0.15 },
                "tags": ["national", "centralized"]
            },
            {
                "value": -1.0,
                "text": "Highly centralized: efficient national coordination on most matters",
                "loadings": { "powr": -0.25 },
                "tags": ["centralized", "unitary"]
            }
        ],
        "distinguishes": ["Libertarian Socialism", "Libertarianism", "Civic Republicanism", "Left-Wing Nationalism", "Communitarianism"]
    },
    {
        "id": 1008,
        "question": "What gives a government legitimacy to rule?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Active, ongoing consent of the people through direct participation",
                "loadings": { "powr": 0.2, "popl": 0.15 },
                "tags": ["popular_consent", "participatory"]
            },
            {
                "value": 0.5,
                "text": "Democratic elections and constitutional procedures",
                "loadings": { "lbrt": 0.1 },
                "tags": ["electoral", "procedural"]
            },
            {
                "value": 0.0,
                "text": "Protection of individual rights and rule of law",
                "loadings": { "lbrt": 0.15, "mns": 0.1 },
                "tags": ["rights_based", "liberal"]
            },
            {
                "value": -0.5,
                "text": "Expertise and demonstrated competence in delivering results",
                "loadings": { "popl": -0.15, "mns": -0.1 },
                "tags": ["technocratic", "performance"]
            },
            {
                "value": -1.0,
                "text": "Historical continuity, tradition, and established institutions",
                "loadings": { "prog": -0.2, "chng": -0.15 },
                "tags": ["traditional", "hereditary"]
            }
        ],
        "distinguishes": ["Deliberative Democracy", "Liquid Democracy", "Technocracy", "Traditionalist Conservatism", "Constitutional Monarchism"]
    },

    // ========================================
    // SOCIAL/CULTURAL
    // ========================================
    {
        "id": 1009,
        "question": "How should cultural diversity be handled in society?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Strong pluralism: celebrate and preserve distinct cultural communities",
                "loadings": { "intg": 0.3, "idnt": 0.1 },
                "tags": ["pluralist", "multicultural"]
            },
            {
                "value": 0.5,
                "text": "Interculturalism: encourage exchange and mixing while respecting origins",
                "loadings": { "intg": 0.15, "idnt": 0.05 },
                "tags": ["intercultural", "exchange"]
            },
            {
                "value": 0.0,
                "text": "Civic integration: shared public values with private cultural freedom",
                "loadings": { "lbrt": 0.1 },
                "tags": ["civic", "liberal_integration"]
            },
            {
                "value": -0.5,
                "text": "Melting pot: gradual blending into a common national culture",
                "loadings": { "intg": -0.15, "idnt": -0.1 },
                "tags": ["assimilationist", "melting_pot"]
            },
            {
                "value": -1.0,
                "text": "Strong assimilation: newcomers should fully adopt the host culture",
                "loadings": { "intg": -0.25, "idnt": -0.15 },
                "tags": ["assimilationist", "monocultural"]
            }
        ],
        "distinguishes": ["Multiculturalism", "Civic Nationalism", "Interculturalism", "Ethnonationalism", "National Conservatism"]
    },
    {
        "id": 1010,
        "question": "What is the best approach to social progress?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Radically reimagine society - dismantle and rebuild institutions",
                "loadings": { "prog": 0.25, "chng": 0.2 },
                "tags": ["radical", "transformative"]
            },
            {
                "value": 0.5,
                "text": "Ambitious reform - push boundaries while building coalitions",
                "loadings": { "prog": 0.15, "chng": 0.1 },
                "tags": ["progressive", "reformist"]
            },
            {
                "value": 0.0,
                "text": "Evidence-based change - reform what demonstrably doesn't work",
                "loadings": { "mns": -0.1 },
                "tags": ["pragmatic", "evidence_based"]
            },
            {
                "value": -0.5,
                "text": "Careful reform - preserve what works while fixing clear problems",
                "loadings": { "prog": -0.1, "chng": -0.1 },
                "tags": ["moderate", "preserving"]
            },
            {
                "value": -1.0,
                "text": "Conserve and restore - protect and revive valuable traditions",
                "loadings": { "prog": -0.25, "chng": -0.15 },
                "tags": ["conservative", "restorationist"]
            }
        ],
        "distinguishes": ["Progressivism", "Liberalism", "Conservatism", "Feminist Politics", "Postmodernism", "Post-Liberalism"]
    },
    {
        "id": 1011,
        "question": "How should society approach technological change?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Embrace and accelerate - technology is key to solving major problems",
                "loadings": { "tech": 0.3, "prog": 0.1 },
                "tags": ["techno_optimist", "accelerationist"]
            },
            {
                "value": 0.5,
                "text": "Generally positive - adopt new technology with reasonable precautions",
                "loadings": { "tech": 0.15 },
                "tags": ["tech_positive", "cautious_optimist"]
            },
            {
                "value": 0.0,
                "text": "Case-by-case - evaluate each technology on its specific merits and risks",
                "loadings": { "mns": -0.1 },
                "tags": ["pragmatic", "selective"]
            },
            {
                "value": -0.5,
                "text": "Precautionary - proceed slowly, prioritize proving safety first",
                "loadings": { "tech": -0.15, "mns": 0.1 },
                "tags": ["precautionary", "risk_averse"]
            },
            {
                "value": -1.0,
                "text": "Skeptical - technology often creates more problems than it solves",
                "loadings": { "tech": -0.25, "ecol": 0.1 },
                "tags": ["tech_skeptic", "luddite"]
            }
        ],
        "distinguishes": ["Transhumanism", "Conservatism", "Anarcho-Primitivism", "Technoliberalism", "Solarpunk"]
    },
    {
        "id": 1012,
        "question": "How should environmental concerns be balanced with human needs?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Nature first - the environment has worth for its own sake and needs strict protection",
                "loadings": { "ecol": 0.3 },
                "tags": ["deep_ecology", "ecocentric"]
            },
            {
                "value": 0.5,
                "text": "Strong sustainability - transform economy to stay within planetary boundaries",
                "loadings": { "ecol": 0.2, "chng": 0.1 },
                "tags": ["sustainability", "green"]
            },
            {
                "value": 0.0,
                "text": "Balanced approach - protect environment while allowing economic development",
                "loadings": { "ecol": 0.05 },
                "tags": ["balanced", "sustainable_development"]
            },
            {
                "value": -0.5,
                "text": "Human welfare primary - environmental rules shouldn't harm livelihoods",
                "loadings": { "ecol": -0.15 },
                "tags": ["anthropocentric", "jobs_first"]
            },
            {
                "value": -1.0,
                "text": "Growth first - prosperity enables us to solve environmental problems later",
                "loadings": { "ecol": -0.25 },
                "tags": ["growth_first", "cornucopian"]
            }
        ],
        "distinguishes": ["Deep Ecology", "Green Politics", "Social Democracy", "Conservatism", "Libertarianism"]
    },

    // ========================================
    // SECURITY/INTERNATIONAL
    // ========================================
    {
        "id": 1013,
        "question": "How should international conflicts be resolved?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Strict non-intervention - never use military force abroad",
                "loadings": { "intv": -0.3, "mns": 0.1 },
                "tags": ["pacifist", "non_intervention"]
            },
            {
                "value": 0.5,
                "text": "Diplomacy first - exhaust all peaceful options before any force",
                "loadings": { "intv": -0.15, "mns": 0.05 },
                "tags": ["diplomatic", "peace_first"]
            },
            {
                "value": 0.0,
                "text": "Balanced approach - diplomacy preferred but force sometimes necessary",
                "loadings": {},
                "tags": ["realist", "balanced"]
            },
            {
                "value": -0.5,
                "text": "Strong deterrence - maintain power to prevent conflicts",
                "loadings": { "intv": 0.1 },
                "tags": ["deterrence", "strong_defense"]
            },
            {
                "value": -1.0,
                "text": "Proactive intervention - use force to prevent atrocities and protect interests",
                "loadings": { "intv": 0.25 },
                "tags": ["interventionist", "hawkish"]
            }
        ],
        "distinguishes": ["Anarcho-Pacifism", "Paleoconservatism", "Cosmopolitanism", "Neoconservatism", "Left-Wing Nationalism"]
    },
    {
        "id": 1014,
        "question": "How integrated should nations be internationally?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Global governance - international organizations that can enforce worldwide rules",
                "loadings": { "idnt": 0.25, "powr": -0.1 },
                "tags": ["globalist", "world_federalist"]
            },
            {
                "value": 0.5,
                "text": "Deep integration - expand international cooperation and shared standards",
                "loadings": { "idnt": 0.15 },
                "tags": ["internationalist", "integrationist"]
            },
            {
                "value": 0.0,
                "text": "Selective cooperation - international partnerships on specific shared interests",
                "loadings": {},
                "tags": ["pragmatic", "selective"]
            },
            {
                "value": -0.5,
                "text": "National sovereignty - limit international commitments to preserve autonomy",
                "loadings": { "idnt": -0.15 },
                "tags": ["sovereigntist", "nationalist"]
            },
            {
                "value": -1.0,
                "text": "Self-reliance - minimize international entanglements and dependencies",
                "loadings": { "idnt": -0.25, "intv": -0.1 },
                "tags": ["isolationist", "autarkic"]
            }
        ],
        "distinguishes": ["Cosmopolitanism", "Neoliberalism", "Left-Wing Nationalism", "Paleoconservatism", "Anti-Imperialism"]
    },
    {
        "id": 1015,
        "question": "What should form the basis of national identity?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Post-national - identity based on shared humanity, not nation-states",
                "loadings": { "idnt": 0.3, "intg": 0.1 },
                "tags": ["post_national", "cosmopolitan"]
            },
            {
                "value": 0.5,
                "text": "Civic nationalism - shared values and democratic participation",
                "loadings": { "idnt": 0.1, "lbrt": 0.1 },
                "tags": ["civic_nationalist", "constitutional_patriotism"]
            },
            {
                "value": 0.0,
                "text": "Cultural nationalism - shared language, history, and traditions",
                "loadings": { "idnt": -0.1 },
                "tags": ["cultural_nationalist"]
            },
            {
                "value": -0.5,
                "text": "National heritage - emphasis on historical roots and continuity",
                "loadings": { "idnt": -0.2, "prog": -0.1 },
                "tags": ["nationalist", "traditionalist"]
            },
            {
                "value": -1.0,
                "text": "Ethnic/ancestral - shared descent and bloodlines",
                "loadings": { "idnt": -0.3, "intg": -0.2 },
                "tags": ["ethno_nationalist", "blood_and_soil"]
            }
        ],
        "distinguishes": ["Cosmopolitanism", "Civic Nationalism", "National Conservatism", "Ethnonationalism", "Left-Wing Nationalism"]
    },

    // ========================================
    // HARD-TO-DISTINGUISH PAIRS
    // ========================================

    // Third Way vs Clintonism
    {
        "id": 1016,
        "question": "How should wealthy nations approach international economic policy?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 40, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Prioritize domestic workers through trade protections and industrial policy",
                "loadings": { "idnt": -0.2, "intv": -0.1 },
                "tags": ["protectionist", "domestic_first"]
            },
            {
                "value": 0.5,
                "text": "Balance free trade with strong labor and environmental standards",
                "loadings": { "intv": 0.1 },
                "tags": ["fair_trade", "conditional"]
            },
            {
                "value": 0.0,
                "text": "Expand free trade agreements while investing in worker retraining",
                "loadings": { "intv": 0.15, "mns": -0.1 },
                "tags": ["free_trade", "third_way"]
            },
            {
                "value": -0.5,
                "text": "Maximize free trade and market integration with minimal restrictions",
                "loadings": { "intv": 0.2, "eqlt": -0.1 },
                "tags": ["free_trade", "globalist"]
            },
            {
                "value": -1.0,
                "text": "Deregulate trade completely and let markets determine outcomes",
                "loadings": { "intv": 0.1, "eqlt": -0.2 },
                "tags": ["laissez_faire", "market_fundamentalist"]
            }
        ],
        "distinguishes": ["Third Way", "Clintonism", "Blairism", "Neoliberalism", "Social Democracy", "Libertarian Paternalism"]
    },
    {
        "id": 1017,
        "question": "How should welfare programs be structured?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "wlfr", "threshold": 45, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Universal programs available to all citizens regardless of income",
                "loadings": { "wlfr": 0.2, "eqlt": 0.1 },
                "tags": ["universal", "unconditional"]
            },
            {
                "value": 0.5,
                "text": "Broad social insurance with strong safety nets for those in need",
                "loadings": { "wlfr": 0.1 },
                "tags": ["social_insurance", "comprehensive"]
            },
            {
                "value": 0.0,
                "text": "Targeted programs focused on the most vulnerable populations",
                "loadings": { "mns": -0.1 },
                "tags": ["targeted", "means_tested"]
            },
            {
                "value": -0.5,
                "text": "Work-focused programs that incentivize employment and self-sufficiency",
                "loadings": { "wlfr": -0.1, "mns": -0.15 },
                "tags": ["workfare", "conditional"]
            },
            {
                "value": -1.0,
                "text": "Minimal government programs with private charity filling gaps",
                "loadings": { "wlfr": -0.2 },
                "tags": ["minimal", "private"]
            }
        ],
        "distinguishes": ["Third Way", "Clintonism", "Blairism", "Social Democracy", "Social Liberalism", "Nordic Model"]
    },

    // Anarcho-Syndicalism vs Anarcho-Collectivism
    {
        "id": 1018,
        "question": "What should be the primary organizing unit for a post-capitalist economy?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Industry-wide labor unions that coordinate production across workplaces",
                "loadings": { "popl": 0.2, "powr": 0.1 },
                "tags": ["syndicalist", "union_led"]
            },
            {
                "value": 0.5,
                "text": "Workplace councils with democratic control over individual enterprises",
                "loadings": { "powr": 0.15 },
                "tags": ["council", "workplace_democracy"]
            },
            {
                "value": 0.0,
                "text": "Local community assemblies that manage resources for their area",
                "loadings": { "powr": 0.2, "popl": -0.1 },
                "tags": ["communalist", "municipal"]
            },
            {
                "value": -0.5,
                "text": "Worker cooperatives competing in regulated markets",
                "loadings": { "eqlt": -0.05, "powr": 0.1 },
                "tags": ["cooperative", "market_socialism"]
            },
            {
                "value": -1.0,
                "text": "Federated communes with production based on need, not markets",
                "loadings": { "prty": 0.2, "eqlt": 0.1 },
                "tags": ["communist", "needs_based"]
            }
        ],
        "distinguishes": ["Anarcho-Syndicalism", "Anarcho-Collectivism", "Anarcho-Communism", "Council Communism"]
    },
    {
        "id": 1019,
        "question": "How should compensation work in a socialist economy?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "eqlt", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Equal shares for all members of the community regardless of contribution",
                "loadings": { "eqlt": 0.2, "hmnn": 0.1 },
                "tags": ["communist", "equal_shares"]
            },
            {
                "value": 0.5,
                "text": "Based on hours worked, with all labor valued equally",
                "loadings": { "eqlt": 0.1 },
                "tags": ["labor_vouchers", "time_based"]
            },
            {
                "value": 0.0,
                "text": "Based on contribution and effort, with differences in compensation allowed",
                "loadings": { "mns": 0.1 },
                "tags": ["collectivist", "contribution_based"]
            },
            {
                "value": -0.5,
                "text": "Democratically decided by worker assemblies based on role and skill",
                "loadings": { "powr": 0.1 },
                "tags": ["democratic", "skill_differentiated"]
            },
            {
                "value": -1.0,
                "text": "Market-determined based on supply and demand for different types of work",
                "loadings": { "eqlt": -0.15 },
                "tags": ["market_socialist", "market_wages"]
            }
        ],
        "distinguishes": ["Anarcho-Collectivism", "Anarcho-Communism", "Market Socialism", "Syndicalism"]
    },

    // Left Communism vs Luxemburgism
    {
        "id": 1020,
        "question": "What is the best strategy for revolutionary change?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "chng", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Spontaneous mass uprisings by workers when conditions are right, not led by parties",
                "loadings": { "popl": 0.15, "mns": 0.1 },
                "tags": ["spontaneous", "luxemburgist"]
            },
            {
                "value": 0.5,
                "text": "Building mass movements through existing unions and parties, however imperfect",
                "loadings": { "mns": -0.1, "popl": 0.1 },
                "tags": ["mass_movement", "reformist_tactics"]
            },
            {
                "value": 0.0,
                "text": "A disciplined vanguard party that can lead workers toward correct revolutionary action",
                "loadings": { "powr": -0.1, "mns": 0.15 },
                "tags": ["vanguard", "leninist"]
            },
            {
                "value": -0.5,
                "text": "Rejection of all existing organizations—only pure revolutionary action outside institutions",
                "loadings": { "mns": 0.2, "chng": 0.1 },
                "tags": ["left_communist", "anti_institutional"]
            },
            {
                "value": -1.0,
                "text": "Individual direct action and propaganda of the deed to spark revolution",
                "loadings": { "chng": 0.15, "popl": -0.1 },
                "tags": ["insurrectionary", "direct_action"]
            }
        ],
        "distinguishes": ["Left Communism", "Luxemburgism", "Post-Marxism", "Analytical Marxism", "Anarcho-Communism"]
    },
    {
        "id": 1021,
        "question": "Should revolutionaries work within existing labor organizations?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "chng", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Yes, unions and parties are where workers are—meet them there and radicalize them",
                "loadings": { "mns": -0.15, "popl": 0.1 },
                "tags": ["entryism", "pragmatic"]
            },
            {
                "value": 0.5,
                "text": "Work alongside them but maintain independent revolutionary organization",
                "loadings": { "mns": 0.05 },
                "tags": ["dual_power", "parallel"]
            },
            {
                "value": 0.0,
                "text": "Build entirely new organizations untainted by reformism",
                "loadings": { "mns": 0.1, "chng": 0.1 },
                "tags": ["new_organization", "purist"]
            },
            {
                "value": -0.5,
                "text": "Existing organizations inevitably corrupt—revolution must come from outside them",
                "loadings": { "mns": 0.15, "intv": -0.1 },
                "tags": ["anti_union", "left_communist"]
            },
            {
                "value": -1.0,
                "text": "All formal organization is authoritarian—rely on spontaneous worker councils only",
                "loadings": { "powr": 0.2, "mns": 0.1 },
                "tags": ["council_communist", "anti_party"]
            }
        ],
        "distinguishes": ["Left Communism", "Luxemburgism", "Marxism-Leninism", "Council Communism"]
    },

    // Social Liberalism vs Egalitarian Liberalism
    {
        "id": 1022,
        "question": "What should guide the design of social institutions?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Fairness principles—imagine you didn't know whether you'd be rich or poor in society",
                "loadings": { "mns": 0.2, "hmnn": 0.1 },
                "tags": ["rawlsian", "veil_of_ignorance"]
            },
            {
                "value": 0.5,
                "text": "Maximizing the position of the least advantaged members of society",
                "loadings": { "eqlt": 0.15, "mns": 0.1 },
                "tags": ["difference_principle", "egalitarian"]
            },
            {
                "value": 0.0,
                "text": "Evidence-based policy that maximizes overall welfare and well-being",
                "loadings": { "mns": -0.15 },
                "tags": ["utilitarian", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Practical compromises that achieve the most good given political constraints",
                "loadings": { "mns": -0.2 },
                "tags": ["pragmatic", "incremental"]
            },
            {
                "value": -1.0,
                "text": "Individual rights and freedoms that precede any social engineering",
                "loadings": { "lbrt": 0.15, "mns": 0.1 },
                "tags": ["libertarian", "rights_first"]
            }
        ],
        "distinguishes": ["Social Liberalism", "Egalitarian Liberalism", "Rawlsianism", "Libertarianism", "Left-Liberalism", "Utilitarianism (Political)"]
    },
    {
        "id": 1023,
        "question": "Are economic inequalities ever justified?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Never—all people deserve equal resources regardless of contribution",
                "loadings": { "eqlt": 0.25 },
                "tags": ["strict_equality", "communist"]
            },
            {
                "value": 0.5,
                "text": "Only if they benefit the least advantaged members of society",
                "loadings": { "eqlt": 0.15, "mns": 0.1 },
                "tags": ["difference_principle", "rawlsian"]
            },
            {
                "value": 0.0,
                "text": "If they result from fair processes and equal opportunity",
                "loadings": { "mns": -0.05 },
                "tags": ["procedural", "liberal"]
            },
            {
                "value": -0.5,
                "text": "If they reflect genuine differences in effort and contribution",
                "loadings": { "eqlt": -0.1, "hmnn": -0.1 },
                "tags": ["meritocratic", "desert_based"]
            },
            {
                "value": -1.0,
                "text": "Yes—inequality is natural and incentivizes productivity",
                "loadings": { "eqlt": -0.2, "hmnn": -0.15 },
                "tags": ["inegalitarian", "incentive_based"]
            }
        ],
        "distinguishes": ["Egalitarian Liberalism", "Social Liberalism", "Rawlsianism", "Libertarianism"]
    },

    // ========================================
    // HUMAN NATURE & SECULARISM MECHANISMS
    // ========================================

    // Human Nature Mechanisms
    {
        "id": 1024,
        "question": "What assumptions about human nature should guide institutional design?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "People are fundamentally cooperative and institutions should enable mutual aid",
                "loadings": { "hmnn": 0.25, "powr": 0.1 },
                "tags": ["cooperative", "optimistic"]
            },
            {
                "value": 0.5,
                "text": "People can be cooperative given the right incentives and accountability",
                "loadings": { "hmnn": 0.1 },
                "tags": ["conditional", "institutionalist"]
            },
            {
                "value": 0.0,
                "text": "Human nature is mixed—institutions must balance trust with accountability",
                "loadings": {},
                "tags": ["balanced", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Self-interest is primary—institutions should channel it toward social good",
                "loadings": { "hmnn": -0.15 },
                "tags": ["self_interest", "incentive_design"]
            },
            {
                "value": -1.0,
                "text": "People are inherently selfish—strong authority is needed to maintain order",
                "loadings": { "hmnn": -0.25, "powr": -0.15 },
                "tags": ["hobbesian", "authoritarian"]
            }
        ],
        "distinguishes": ["Anarcho-Communism", "Social Democracy", "Conservatism", "Social Authoritarianism"]
    },
    {
        "id": 1025,
        "question": "Can human behavior and values be significantly improved through social change?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Yes—proper education and social conditions can create fundamentally better people",
                "loadings": { "hmnn": 0.2, "prog": 0.1 },
                "tags": ["perfectionist", "utopian"]
            },
            {
                "value": 0.5,
                "text": "Significantly but not completely—we can reduce selfishness and violence",
                "loadings": { "hmnn": 0.1, "prog": 0.05 },
                "tags": ["meliorist", "progressive"]
            },
            {
                "value": 0.0,
                "text": "Somewhat—institutions shape behavior but human nature sets limits",
                "loadings": {},
                "tags": ["moderate", "realist"]
            },
            {
                "value": -0.5,
                "text": "Only marginally—core human traits are largely fixed by biology and culture",
                "loadings": { "hmnn": -0.1, "chng": -0.1 },
                "tags": ["constrained", "conservative"]
            },
            {
                "value": -1.0,
                "text": "No—attempts to remake human nature lead to tyranny and failure",
                "loadings": { "hmnn": -0.2, "chng": -0.15 },
                "tags": ["tragic", "anti_utopian"]
            }
        ],
        "distinguishes": ["Progressivism", "Conservatism", "Transhumanism", "Burkean Conservatism"]
    },

    // Secularism Mechanisms
    {
        "id": 1026,
        "question": "What role should religious and spiritual values play in public life?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "None—government and public institutions must be strictly secular",
                "loadings": { "scr": 0.25, "prog": 0.1 },
                "tags": ["militant_secular", "laicite"]
            },
            {
                "value": 0.5,
                "text": "Government neutral, but religious expression welcome in public life",
                "loadings": { "scr": 0.1, "lbrt": 0.1 },
                "tags": ["secular_liberal", "pluralist"]
            },
            {
                "value": 0.0,
                "text": "Respect all traditions equally while maintaining basic secular framework",
                "loadings": { "intg": 0.1 },
                "tags": ["accommodationist", "multicultural"]
            },
            {
                "value": -0.5,
                "text": "Religious values should inform public morality and policy debates",
                "loadings": { "scr": -0.15 },
                "tags": ["religious_voice", "traditionalist"]
            },
            {
                "value": -1.0,
                "text": "Religious principles should be foundational to law and governance",
                "loadings": { "scr": -0.25, "prog": -0.15 },
                "tags": ["theocratic", "religious_law"]
            }
        ],
        "distinguishes": ["Secular Humanism", "Social Conservatism", "Theocracy", "Liberalism"]
    },
    {
        "id": 1027,
        "question": "Where does moral authority ultimately come from?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Human reason and evidence—morality is discovered through rational inquiry",
                "loadings": { "scr": 0.2, "tech": 0.1 },
                "tags": ["rationalist", "secular_ethics"]
            },
            {
                "value": 0.5,
                "text": "Shared human experience and empathy—morality emerges from our common humanity",
                "loadings": { "scr": 0.1, "hmnn": 0.1 },
                "tags": ["humanist", "empathy_based"]
            },
            {
                "value": 0.0,
                "text": "Cultural traditions and social consensus—morality is what communities agree on",
                "loadings": { "intg": -0.1 },
                "tags": ["cultural", "relativist"]
            },
            {
                "value": -0.5,
                "text": "Religious and spiritual traditions that have stood the test of time",
                "loadings": { "scr": -0.15, "chng": -0.1 },
                "tags": ["traditional", "religious"]
            },
            {
                "value": -1.0,
                "text": "Sacred texts and divine guidance—moral truth comes from God or scripture",
                "loadings": { "scr": -0.25 },
                "tags": ["divine_command", "theistic"]
            }
        ],
        "distinguishes": ["Secular Humanism", "Social Conservatism", "Traditionalist Conservatism", "Christian Democracy"]
    },

    // ========================================
    // CLUSTER 1: CONSERVATIVE-RIGHT
    // ========================================
    {
        "id": 1028,
        "question": "What should form the primary basis of national identity and belonging?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "idnt", "threshold": 35, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Shared ethnicity, ancestry, and bloodlines that connect us to our forebears",
                "loadings": { "idnt": -0.3, "intg": -0.25 },
                "tags": ["ethnonationalist", "blood_soil"]
            },
            {
                "value": 0.5,
                "text": "A dominant culture and way of life that newcomers must fully adopt",
                "loadings": { "idnt": -0.2, "intg": -0.15 },
                "tags": ["cultural_nationalist", "assimilationist"]
            },
            {
                "value": 0.0,
                "text": "Shared history, language, and traditions that define our people",
                "loadings": { "idnt": -0.1 },
                "tags": ["national_identity", "traditionalist"]
            },
            {
                "value": -0.5,
                "text": "Civic values and constitutional principles that anyone can adopt",
                "loadings": { "idnt": 0.1, "lbrt": 0.1 },
                "tags": ["civic_nationalist", "constitutional"]
            },
            {
                "value": -1.0,
                "text": "Universal human values that transcend national boundaries",
                "loadings": { "idnt": 0.25, "intg": 0.15 },
                "tags": ["cosmopolitan", "universalist"]
            }
        ],
        "distinguishes": ["Ethnonationalism", "Identitarianism", "National Conservatism", "Civic Nationalism", "Interculturalism", "Alt-Right"]
    },
    {
        "id": 1029,
        "question": "How should a nation approach immigration and demographic change?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": { "axis": "intg", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Immigration fundamentally threatens national identity and should be drastically reduced",
                "loadings": { "intg": -0.3, "idnt": -0.2 },
                "tags": ["restrictionist", "nativist"]
            },
            {
                "value": 0.5,
                "text": "Immigration should be limited to those who can assimilate into the national culture",
                "loadings": { "intg": -0.15, "idnt": -0.1 },
                "tags": ["selective_immigration", "assimilationist"]
            },
            {
                "value": 0.0,
                "text": "Immigration should be managed based on economic needs and security concerns",
                "loadings": {},
                "tags": ["managed_immigration", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Immigration enriches society and should be welcomed with integration support",
                "loadings": { "intg": 0.15, "idnt": 0.1 },
                "tags": ["pro_immigration", "integrationist"]
            },
            {
                "value": -1.0,
                "text": "Borders are arbitrary—people should be free to move and live where they choose",
                "loadings": { "intg": 0.25, "idnt": 0.2, "lbrt": 0.1 },
                "tags": ["open_borders", "cosmopolitan"]
            }
        ],
        "distinguishes": ["Paleoconservatism", "Trumpism", "National Conservatism", "Right-Wing Populism", "National Populism", "Identitarianism"]
    },
    {
        "id": 1030,
        "question": "What makes political leadership legitimate and effective?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "powr", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "A strong leader who embodies the national will and can act decisively without obstruction",
                "loadings": { "powr": -0.3, "lbrt": -0.2, "popl": 0.1 },
                "tags": ["strongman", "caesarist"]
            },
            {
                "value": 0.5,
                "text": "Firm executive authority guided by national tradition and proven institutions",
                "loadings": { "powr": -0.15, "chng": -0.1 },
                "tags": ["authoritative", "institutional"]
            },
            {
                "value": 0.0,
                "text": "Balanced powers with strong leadership constrained by law and tradition",
                "loadings": {},
                "tags": ["balanced", "constitutional"]
            },
            {
                "value": -0.5,
                "text": "Distributed power with many checks and balances on executive authority",
                "loadings": { "powr": 0.15, "lbrt": 0.1 },
                "tags": ["limited_government", "liberal"]
            },
            {
                "value": -1.0,
                "text": "Power should be radically decentralized to local communities and individuals",
                "loadings": { "powr": 0.3, "lbrt": 0.2 },
                "tags": ["decentralist", "anti_authoritarian"]
            }
        ],
        "distinguishes": ["Fascism", "Neo-Fascism", "Italian Fascism", "Falangism", "Integralism", "National Socialism"]
    },
    {
        "id": 1031,
        "question": "How do you view your nation's current trajectory and what is needed?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "chng", "threshold": 65, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "The nation is in terminal decline—only radical rebirth can save it",
                "loadings": { "chng": 0.2, "idnt": -0.15 },
                "tags": ["palingenetic", "revolutionary_nationalist"]
            },
            {
                "value": 0.5,
                "text": "Corrupt elites have betrayed the people—we need to reclaim our country",
                "loadings": { "popl": 0.2, "chng": 0.1 },
                "tags": ["populist_revolt", "anti_elite"]
            },
            {
                "value": 0.0,
                "text": "Things have gone wrong but can be fixed through determined reform",
                "loadings": { "chng": 0.05 },
                "tags": ["reformist", "restorationist"]
            },
            {
                "value": -0.5,
                "text": "The nation faces challenges but our institutions remain fundamentally sound",
                "loadings": { "chng": -0.1, "mns": -0.1 },
                "tags": ["moderate", "institutionalist"]
            },
            {
                "value": -1.0,
                "text": "Progressive change is making society better—we should accelerate it",
                "loadings": { "prog": 0.2, "chng": 0.15 },
                "tags": ["progressive", "optimistic"]
            }
        ],
        "distinguishes": ["Fascism", "National Socialism", "Neo-Fascism", "National Bolshevism", "Strasserism", "Third Position", "National Syndicalism"]
    },
    {
        "id": 1032,
        "question": "What is your view on natural hierarchies and equality in society?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "hmnn", "threshold": 35, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Natural hierarchies reflect real differences—trying to make everyone equal often backfires",
                "loadings": { "hmnn": -0.25, "eqlt": -0.2 },
                "tags": ["inegalitarian", "hierarchist"]
            },
            {
                "value": 0.5,
                "text": "Some inequality is natural and functional—forced equality causes dysfunction",
                "loadings": { "hmnn": -0.15, "eqlt": -0.1 },
                "tags": ["natural_hierarchy", "realist"]
            },
            {
                "value": 0.0,
                "text": "Some hierarchies are justified, others are unjust—each must be evaluated",
                "loadings": {},
                "tags": ["nuanced", "selective"]
            },
            {
                "value": -0.5,
                "text": "Most hierarchies are socially constructed and can be reformed",
                "loadings": { "hmnn": 0.1, "eqlt": 0.1 },
                "tags": ["social_constructionist", "reformist"]
            },
            {
                "value": -1.0,
                "text": "All hierarchies are oppressive systems that must be dismantled",
                "loadings": { "hmnn": 0.2, "eqlt": 0.2 },
                "tags": ["radical_egalitarian", "anti_hierarchy"]
            }
        ],
        "distinguishes": ["Dark Enlightenment", "Neoreaction", "Traditionalist Conservatism", "Objectivism", "National Socialism", "Fascism"]
    },
    {
        "id": 1033,
        "question": "Where should moral and social values primarily come from?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "prog", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Sacred religious traditions and divine revelation that transcend human reason",
                "loadings": { "scr": -0.25, "prog": -0.15 },
                "tags": ["religious_traditionalist", "theocratic"]
            },
            {
                "value": 0.5,
                "text": "Inherited customs and institutions that embody accumulated wisdom",
                "loadings": { "prog": -0.15, "chng": -0.1 },
                "tags": ["burkean", "traditional"]
            },
            {
                "value": 0.0,
                "text": "A mix of tradition and reasoned adaptation to changing circumstances",
                "loadings": {},
                "tags": ["moderate_traditionalist", "adaptive"]
            },
            {
                "value": -0.5,
                "text": "Human reason and evidence, while respecting some traditional wisdom",
                "loadings": { "prog": 0.1, "scr": 0.1 },
                "tags": ["rational_traditionalist", "enlightened"]
            },
            {
                "value": -1.0,
                "text": "Pure reason, science, and individual autonomy—tradition has no inherent authority",
                "loadings": { "prog": 0.2, "scr": 0.2 },
                "tags": ["rationalist", "secular"]
            }
        ],
        "distinguishes": ["Social Conservatism", "Traditionalist Conservatism", "Burkean Conservatism", "Paleoconservatism", "One-Nation Conservatism", "Compassionate Conservatism", "Liberal Conservatism"]
    },
    {
        "id": 1034,
        "question": "Who truly represents the interests of the nation?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "popl", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "The common people, whose authentic voice has been suppressed by corrupt elites",
                "loadings": { "popl": 0.25, "powr": 0.1 },
                "tags": ["populist", "anti_elite"]
            },
            {
                "value": 0.5,
                "text": "Working and middle-class citizens who produce real value, not parasitic elites",
                "loadings": { "popl": 0.15 },
                "tags": ["producerist", "middle_class"]
            },
            {
                "value": 0.0,
                "text": "All citizens have legitimate interests that should be balanced",
                "loadings": {},
                "tags": ["pluralist", "balanced"]
            },
            {
                "value": -0.5,
                "text": "Informed citizens and responsible leaders working within institutions",
                "loadings": { "popl": -0.15, "mns": -0.1 },
                "tags": ["institutionalist", "moderate"]
            },
            {
                "value": -1.0,
                "text": "Qualified experts and experienced leaders who understand complex issues",
                "loadings": { "popl": -0.25, "tech": 0.1 },
                "tags": ["technocratic", "elitist"]
            }
        ],
        "distinguishes": ["Right-Wing Populism", "National Populism", "Left-Wing Populism", "Podemos-Style Left", "Producerism", "Longism"]
    },
    {
        "id": 1035,
        "question": "What role should military strength play in national policy?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "intv", "threshold": 60, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Military power is essential for national greatness and should be used proactively",
                "loadings": { "intv": 0.25, "idnt": -0.1 },
                "tags": ["militarist", "interventionist"]
            },
            {
                "value": 0.5,
                "text": "Strong military deters enemies and protects vital national interests abroad",
                "loadings": { "intv": 0.15 },
                "tags": ["strong_defense", "realist"]
            },
            {
                "value": 0.0,
                "text": "Military should be adequate for defense but used cautiously abroad",
                "loadings": {},
                "tags": ["moderate", "defensive"]
            },
            {
                "value": -0.5,
                "text": "Military should focus on defense—foreign interventions usually backfire",
                "loadings": { "intv": -0.15 },
                "tags": ["non_interventionist", "restrained"]
            },
            {
                "value": -1.0,
                "text": "Military spending and intervention cause more problems than they solve",
                "loadings": { "intv": -0.25, "idnt": 0.1 },
                "tags": ["anti_militarist", "pacifist_leaning"]
            }
        ],
        "distinguishes": ["Neoconservatism", "Fascism", "Reaganism", "National Conservatism", "Gaullism", "Paleoconservatism"]
    },

    // ========================================
    // CLUSTER 2: LIBERTARIAN-RIGHT
    // ========================================
    {
        "id": 1036,
        "question": "What is the foundation and proper extent of property rights?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "prty", "threshold": 25, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Property rights are absolute natural rights—taxation is essentially theft",
                "loadings": { "prty": -0.3, "lbrt": 0.2 },
                "tags": ["propertarian", "absolute_rights"]
            },
            {
                "value": 0.5,
                "text": "Strong property rights are essential but some minimal taxation is necessary",
                "loadings": { "prty": -0.15, "lbrt": 0.1 },
                "tags": ["strong_property", "minarchist"]
            },
            {
                "value": 0.0,
                "text": "Property rights are important but must be balanced with social needs",
                "loadings": {},
                "tags": ["balanced", "moderate"]
            },
            {
                "value": -0.5,
                "text": "Property rights are social conventions that can be modified for the common good",
                "loadings": { "prty": 0.15 },
                "tags": ["social_property", "reformist"]
            },
            {
                "value": -1.0,
                "text": "Private property in productive resources is the root of exploitation",
                "loadings": { "prty": 0.3, "eqlt": 0.2 },
                "tags": ["socialist_property", "collectivist"]
            }
        ],
        "distinguishes": ["Anarcho-Capitalism", "Minarchism", "Objectivism", "Right-Libertarianism", "Austrian School", "Laissez-Faire Capitalism"]
    },
    {
        "id": 1037,
        "question": "What functions, if any, should government perform?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": { "axis": "lbrt", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "None—all government functions can be provided through voluntary market exchange",
                "loadings": { "lbrt": 0.3, "powr": 0.2 },
                "tags": ["anarcho_capitalist", "stateless"]
            },
            {
                "value": 0.5,
                "text": "Only courts, police, and military—just enough government to protect people",
                "loadings": { "lbrt": 0.2, "powr": 0.1 },
                "tags": ["minarchist", "night_watchman"]
            },
            {
                "value": 0.0,
                "text": "Basic infrastructure and services in addition to protection of rights",
                "loadings": { "lbrt": 0.1 },
                "tags": ["classical_liberal", "limited_government"]
            },
            {
                "value": -0.5,
                "text": "Significant role in education, healthcare, and economic regulation",
                "loadings": { "wlfr": 0.15 },
                "tags": ["social_liberal", "welfare_state"]
            },
            {
                "value": -1.0,
                "text": "Comprehensive provision of services and economic coordination",
                "loadings": { "lbrt": -0.2, "wlfr": 0.25 },
                "tags": ["statist", "comprehensive"]
            }
        ],
        "distinguishes": ["Anarcho-Capitalism", "Minarchism", "Voluntaryism", "Agorism", "Classical Liberalism", "Paleolibertarianism"]
    },
    {
        "id": 1038,
        "question": "What role should government play in regulating markets?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 25, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Markets are self-regulating—government intervention always makes things worse",
                "loadings": { "eqlt": -0.25, "mns": 0.1 },
                "tags": ["laissez_faire", "market_fundamentalist"]
            },
            {
                "value": 0.5,
                "text": "Markets usually work best—intervention should be rare and rules-based",
                "loadings": { "eqlt": -0.15 },
                "tags": ["free_market", "rules_based"]
            },
            {
                "value": 0.0,
                "text": "Markets need a framework of competition rules to function properly",
                "loadings": {},
                "tags": ["ordoliberal", "regulated_competition"]
            },
            {
                "value": -0.5,
                "text": "Significant regulation needed to correct market failures and protect workers",
                "loadings": { "eqlt": 0.1, "wlfr": 0.1 },
                "tags": ["regulated_market", "social_market"]
            },
            {
                "value": -1.0,
                "text": "Markets must be heavily regulated or replaced with democratic planning",
                "loadings": { "eqlt": 0.25, "prty": 0.15 },
                "tags": ["anti_market", "planist"]
            }
        ],
        "distinguishes": ["Austrian School", "Chicago School", "Ordoliberalism", "Monetarism", "Neoliberalism", "Classical Liberalism"]
    },
    {
        "id": 1039,
        "question": "How should society view individual achievement and economic success?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "hmnn", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Individual achievement shows hard work and talent—successful people have earned what they have",
                "loadings": { "hmnn": -0.2, "eqlt": -0.2 },
                "tags": ["objectivist", "heroic_individualism"]
            },
            {
                "value": 0.5,
                "text": "Success usually reflects hard work and talent—redistribution undermines incentives",
                "loadings": { "hmnn": -0.1, "eqlt": -0.1 },
                "tags": ["meritocratic", "incentive_based"]
            },
            {
                "value": 0.0,
                "text": "Success reflects both individual effort and circumstances—some redistribution is fair",
                "loadings": {},
                "tags": ["moderate_meritocratic", "balanced"]
            },
            {
                "value": -0.5,
                "text": "Success depends heavily on luck and privilege—significant redistribution is just",
                "loadings": { "eqlt": 0.15, "hmnn": 0.1 },
                "tags": ["luck_egalitarian", "redistributive"]
            },
            {
                "value": -1.0,
                "text": "Wealth accumulation is inherently exploitative—resources should be shared equally",
                "loadings": { "eqlt": 0.25, "prty": 0.15 },
                "tags": ["egalitarian", "anti_wealth"]
            }
        ],
        "distinguishes": ["Objectivism", "Classical Liberalism", "Bleeding-Heart Libertarianism", "Right-Libertarianism", "Laissez-Faire Capitalism"]
    },
    {
        "id": 1040,
        "question": "Should libertarianism be combined with cultural traditionalism or progressivism?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "lbrt", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Liberty requires traditional values and communities—progressivism corrodes freedom",
                "loadings": { "prog": -0.2, "scr": -0.1 },
                "tags": ["paleolibertarian", "traditionalist_libertarian"]
            },
            {
                "value": 0.5,
                "text": "Economic freedom is primary—cultural issues are personal matters",
                "loadings": { "lbrt": 0.1 },
                "tags": ["fusionist", "economic_focus"]
            },
            {
                "value": 0.0,
                "text": "Liberty applies equally to economic and personal/cultural freedoms",
                "loadings": { "lbrt": 0.1, "prog": 0.05 },
                "tags": ["consistent_libertarian", "neutral"]
            },
            {
                "value": -0.5,
                "text": "Liberty must include concern for the disadvantaged and marginalized",
                "loadings": { "eqlt": 0.1, "prog": 0.1 },
                "tags": ["bleeding_heart", "left_libertarian"]
            },
            {
                "value": -1.0,
                "text": "True liberation requires dismantling both state AND traditional hierarchies",
                "loadings": { "prog": 0.2, "powr": 0.15 },
                "tags": ["libertarian_socialist", "radical"]
            }
        ],
        "distinguishes": ["Paleolibertarianism", "Libertarianism", "Left-Libertarianism", "Bleeding-Heart Libertarianism", "Fusionism", "Libertarian Conservatism"]
    },

    // ========================================
    // CLUSTER 3: RELIGIOUS
    // ========================================
    {
        "id": 1041,
        "question": "What should be the relationship between religious institutions and government?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": { "axis": "scr", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Religious law should be the foundation of the legal and political system",
                "loadings": { "scr": -0.3, "lbrt": -0.15 },
                "tags": ["theocratic", "religious_law"]
            },
            {
                "value": 0.5,
                "text": "Religious institutions should have a privileged advisory role in governance",
                "loadings": { "scr": -0.2 },
                "tags": ["confessional_state", "religious_establishment"]
            },
            {
                "value": 0.0,
                "text": "Government should respect religion and allow its public expression without establishment",
                "loadings": { "scr": -0.05 },
                "tags": ["accommodationist", "benevolent_neutrality"]
            },
            {
                "value": -0.5,
                "text": "Strict separation—religion is a private matter with no role in government",
                "loadings": { "scr": 0.15 },
                "tags": ["separationist", "secular_state"]
            },
            {
                "value": -1.0,
                "text": "Religious influence in politics is harmful and should be actively discouraged",
                "loadings": { "scr": 0.25, "prog": 0.1 },
                "tags": ["militant_secular", "anti_clerical"]
            }
        ],
        "distinguishes": ["Theocracy", "Catholic Integralism", "Dominionism", "Christian Democracy", "Political Islam", "Christian Nationalism"]
    },
    {
        "id": 1042,
        "question": "How should religious faith inform economic policy?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "scr", "threshold": 35, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Faith demands radical economic justice—preference for the poor and oppressed",
                "loadings": { "eqlt": 0.25, "scr": -0.1 },
                "tags": ["liberation_theology", "prophetic"]
            },
            {
                "value": 0.5,
                "text": "Faith calls for widespread property ownership and limits on concentrated wealth",
                "loadings": { "eqlt": 0.1, "powr": 0.1 },
                "tags": ["distributist", "third_way_economics"]
            },
            {
                "value": 0.0,
                "text": "Faith encourages charity and community care alongside market economics",
                "loadings": { "wlfr": 0.05 },
                "tags": ["compassionate", "mixed"]
            },
            {
                "value": -0.5,
                "text": "Faith supports traditional economic arrangements and voluntary charity",
                "loadings": { "eqlt": -0.1, "chng": -0.1 },
                "tags": ["traditional_economics", "charitable"]
            },
            {
                "value": -1.0,
                "text": "Economic success is a sign of divine favor—free markets align with faith",
                "loadings": { "eqlt": -0.2, "prty": -0.15 },
                "tags": ["prosperity_gospel", "market_faith"]
            }
        ],
        "distinguishes": ["Christian Socialism", "Liberation Theology", "Distributism", "Christian Democracy", "Islamic Socialism", "Buddhist Socialism"]
    },
    {
        "id": 1043,
        "question": "How should sacred texts and religious traditions guide political action?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "scr", "threshold": 25, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Sacred texts provide literal, binding commands that must shape law and policy",
                "loadings": { "scr": -0.3, "mns": 0.15 },
                "tags": ["fundamentalist", "literalist"]
            },
            {
                "value": 0.5,
                "text": "Religious tradition provides authoritative moral guidance for political life",
                "loadings": { "scr": -0.15 },
                "tags": ["traditionalist", "magisterial"]
            },
            {
                "value": 0.0,
                "text": "Faith offers important insights but must be interpreted for modern contexts",
                "loadings": {},
                "tags": ["moderate_religious", "contextual"]
            },
            {
                "value": -0.5,
                "text": "Religious texts inspire personal ethics but shouldn't directly shape law",
                "loadings": { "scr": 0.1, "lbrt": 0.1 },
                "tags": ["personal_faith", "pluralist"]
            },
            {
                "value": -1.0,
                "text": "Ancient religious texts have little relevant guidance for modern politics",
                "loadings": { "scr": 0.2, "prog": 0.15 },
                "tags": ["secular_ethics", "modernist"]
            }
        ],
        "distinguishes": ["Religious Fundamentalism", "Christian Anarchism", "Liberation Theology", "Theocracy", "Political Islam", "Dominionism"]
    },
    {
        "id": 1044,
        "question": "Does authentic faith require political activism for social justice?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "scr", "threshold": 40, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Yes—faith demands prophetic witness against injustice and solidarity with the oppressed",
                "loadings": { "eqlt": 0.2, "popl": 0.15 },
                "tags": ["prophetic_activism", "liberation"]
            },
            {
                "value": 0.5,
                "text": "Faith motivates work for the common good through both charity and structural reform",
                "loadings": { "wlfr": 0.15 },
                "tags": ["social_gospel", "reform"]
            },
            {
                "value": 0.0,
                "text": "Faith informs personal ethics and community service more than political activism",
                "loadings": {},
                "tags": ["personal_piety", "communal"]
            },
            {
                "value": -0.5,
                "text": "Faith focuses on spiritual salvation—political activism risks worldly corruption",
                "loadings": { "chng": -0.1 },
                "tags": ["quietist", "otherworldly"]
            },
            {
                "value": -1.0,
                "text": "Faith supports established order and traditional authorities",
                "loadings": { "chng": -0.2, "powr": -0.1 },
                "tags": ["establishment", "conservative"]
            }
        ],
        "distinguishes": ["Liberation Theology", "Christian Socialism", "Distributism", "Christian Democracy", "Buddhist Socialism", "Islamic Socialism"]
    },
    {
        "id": 1045,
        "question": "How should religious and national identity relate to each other?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "scr", "threshold": 25, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Our nation is defined by its religious heritage—other faiths are foreign",
                "loadings": { "scr": -0.2, "idnt": -0.2, "intg": -0.2 },
                "tags": ["religious_nationalism", "exclusivist"]
            },
            {
                "value": 0.5,
                "text": "Religious tradition is central to our national identity but others can participate",
                "loadings": { "scr": -0.1, "idnt": -0.1 },
                "tags": ["cultural_religion", "dominant"]
            },
            {
                "value": 0.0,
                "text": "Religion and nationality are connected but distinct aspects of identity",
                "loadings": {},
                "tags": ["moderate", "distinguished"]
            },
            {
                "value": -0.5,
                "text": "National identity should be civic, not religious—all faiths are welcome",
                "loadings": { "scr": 0.1, "intg": 0.1 },
                "tags": ["civic_secular", "pluralist"]
            },
            {
                "value": -1.0,
                "text": "Both national and religious identities are divisive—universal humanity matters most",
                "loadings": { "idnt": 0.2, "scr": 0.15 },
                "tags": ["universalist", "post_religious"]
            }
        ],
        "distinguishes": ["Christian Nationalism", "Hindu Nationalism", "Religious Zionism", "Clerical Fascism", "Catholic Integralism", "Political Islam"]
    },
    {
        "id": 1046,
        "question": "What is the proper basis for political authority and succession?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "powr", "threshold": 20, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Divine right of hereditary monarchy through legitimate succession",
                "loadings": { "powr": -0.3, "chng": -0.25 },
                "tags": ["legitimist", "divine_right"]
            },
            {
                "value": 0.5,
                "text": "Monarchy provides stability and continuity but should respect constitutional limits",
                "loadings": { "powr": -0.15, "chng": -0.1 },
                "tags": ["constitutional_monarch", "traditional"]
            },
            {
                "value": 0.0,
                "text": "Traditional institutions deserve respect but authority ultimately rests with the people",
                "loadings": {},
                "tags": ["mixed", "balanced"]
            },
            {
                "value": -0.5,
                "text": "Democratic consent is the only legitimate basis for political authority",
                "loadings": { "popl": 0.15, "powr": 0.1 },
                "tags": ["democratic", "popular_sovereignty"]
            },
            {
                "value": -1.0,
                "text": "All hierarchical authority is illegitimate—people should govern themselves directly",
                "loadings": { "powr": 0.25, "lbrt": 0.15 },
                "tags": ["anarchist", "anti_authority"]
            }
        ],
        "distinguishes": ["Absolute Monarchism", "Legitimism", "Jacobitism", "Carlism", "Constitutional Monarchism", "Neo-Monarchism", "Monarchism", "Reactionary"]
    },

    // ========================================
    // CLUSTER 4: GREEN/ECOLOGICAL
    // ========================================
    {
        "id": 1047,
        "question": "Can economic growth continue sustainably, or must we fundamentally change our relationship with growth?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "ecol", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Economic growth itself harms the environment—we should deliberately shrink the economy",
                "loadings": { "ecol": 0.25, "tech": -0.15 },
                "tags": ["degrowth", "post_growth"]
            },
            {
                "value": 0.5,
                "text": "We need to transition beyond growth-dependence while meeting human needs",
                "loadings": { "ecol": 0.15 },
                "tags": ["steady_state", "sufficiency"]
            },
            {
                "value": 0.0,
                "text": "Growth must be decoupled from environmental harm through green technology",
                "loadings": { "tech": 0.1 },
                "tags": ["green_growth", "decoupling"]
            },
            {
                "value": -0.5,
                "text": "Technology and innovation will solve environmental problems while enabling growth",
                "loadings": { "tech": 0.2, "ecol": -0.1 },
                "tags": ["ecomodernist", "tech_optimist"]
            },
            {
                "value": -1.0,
                "text": "Environmental concerns are overblown—economic growth should continue freely",
                "loadings": { "ecol": -0.2, "tech": 0.1 },
                "tags": ["growth_first", "skeptic"]
            }
        ],
        "distinguishes": ["Degrowth", "Bright Green Environmentalism", "Eco-Socialism", "Green Politics", "Solarpunk", "Technogaianism"]
    },
    {
        "id": 1048,
        "question": "What role should technology play in addressing environmental challenges?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "ecol", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Technology is the problem, not the solution—we need to return to simpler ways",
                "loadings": { "tech": -0.25, "ecol": 0.15 },
                "tags": ["anti_tech", "primitivist"]
            },
            {
                "value": 0.5,
                "text": "We should use appropriate technology cautiously while reducing overall consumption",
                "loadings": { "tech": -0.1, "ecol": 0.1 },
                "tags": ["appropriate_tech", "cautious"]
            },
            {
                "value": 0.0,
                "text": "A mix of technological innovation and lifestyle changes is needed",
                "loadings": {},
                "tags": ["balanced", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Clean technology is essential—solar, wind, and green innovation can save us",
                "loadings": { "tech": 0.15, "ecol": 0.1 },
                "tags": ["bright_green", "tech_solution"]
            },
            {
                "value": -1.0,
                "text": "Advanced technology like nuclear, biotech, and geoengineering are our best hope",
                "loadings": { "tech": 0.25 },
                "tags": ["techno_fix", "ecomodernist"]
            }
        ],
        "distinguishes": ["Solarpunk", "Bright Green Environmentalism", "Technogaianism", "Anarcho-Primitivism", "Deep Ecology", "Degrowth"]
    },
    {
        "id": 1049,
        "question": "What is the proper relationship between humanity and the natural world?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "ecol", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Nature has intrinsic value—humans have no right to dominate or exploit it",
                "loadings": { "ecol": 0.3, "hmnn": 0.1 },
                "tags": ["deep_ecology", "biocentric"]
            },
            {
                "value": 0.5,
                "text": "Humans are part of nature—we must live within ecological limits",
                "loadings": { "ecol": 0.2 },
                "tags": ["ecological", "limits"]
            },
            {
                "value": 0.0,
                "text": "We should protect nature for both its own sake and human benefit",
                "loadings": { "ecol": 0.1 },
                "tags": ["balanced", "mixed_value"]
            },
            {
                "value": -0.5,
                "text": "Nature is valuable primarily for the benefits it provides to humans",
                "loadings": { "ecol": -0.1 },
                "tags": ["anthropocentric", "utilitarian"]
            },
            {
                "value": -1.0,
                "text": "Humans should master nature through technology for our benefit",
                "loadings": { "ecol": -0.2, "tech": 0.15 },
                "tags": ["dominion", "promethean"]
            }
        ],
        "distinguishes": ["Deep Ecology", "Anarcho-Primitivism", "Anarcho-Naturism", "Green Anarchism", "Ecofeminism", "Green Politics"]
    },
    {
        "id": 1050,
        "question": "How do environmental and social justice issues relate?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "ecol", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Environmental destruction and social oppression have the same roots—both must be fought together",
                "loadings": { "ecol": 0.2, "eqlt": 0.2 },
                "tags": ["eco_socialist", "intersectional"]
            },
            {
                "value": 0.5,
                "text": "Environmental justice requires addressing how pollution and climate harm marginalized communities",
                "loadings": { "ecol": 0.15, "eqlt": 0.1 },
                "tags": ["environmental_justice", "equity"]
            },
            {
                "value": 0.0,
                "text": "Environmental and social issues are connected but each requires its own approach",
                "loadings": {},
                "tags": ["related", "distinct"]
            },
            {
                "value": -0.5,
                "text": "Environmental protection should be politically neutral—not tied to left or right",
                "loadings": { "eqlt": -0.05 },
                "tags": ["apolitical_green", "neutral"]
            },
            {
                "value": -1.0,
                "text": "Environmental protection through free markets and property rights is most effective",
                "loadings": { "eqlt": -0.15, "prty": -0.1 },
                "tags": ["free_market_environmentalism", "property_rights"]
            }
        ],
        "distinguishes": ["Ecofeminism", "Eco-Socialism", "Green Anarchism", "Green Politics", "Democratic Confederalism", "Solarpunk"]
    },
    {
        "id": 1051,
        "question": "Is civilization itself the problem, or can it be reformed?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "tech", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Civilization is inherently destructive—we should return to pre-agricultural ways",
                "loadings": { "tech": -0.3, "chng": 0.15 },
                "tags": ["anti_civ", "primitivist"]
            },
            {
                "value": 0.5,
                "text": "Industrial civilization must be abandoned for sustainable, low-tech alternatives",
                "loadings": { "tech": -0.2, "ecol": 0.15 },
                "tags": ["neo_luddite", "post_industrial"]
            },
            {
                "value": 0.0,
                "text": "Major changes are needed but civilization can be reformed to be sustainable",
                "loadings": { "ecol": 0.1 },
                "tags": ["reform", "transformation"]
            },
            {
                "value": -0.5,
                "text": "Civilization's benefits far outweigh its costs—we just need better technology",
                "loadings": { "tech": 0.15 },
                "tags": ["progressive", "tech_positive"]
            },
            {
                "value": -1.0,
                "text": "Civilization represents human achievement—we should expand and improve it",
                "loadings": { "tech": 0.2, "prog": 0.1 },
                "tags": ["pro_civilization", "progress"]
            }
        ],
        "distinguishes": ["Anarcho-Primitivism", "Deep Ecology", "Degrowth", "Green Anarchism", "Anarcho-Naturism", "Post-Liberalism"]
    },
    {
        "id": 1052,
        "question": "Should environmentalism align with the political left, right, or be independent?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "ecol", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Environmentalism requires anti-capitalism—ecological destruction stems from capitalism",
                "loadings": { "eqlt": 0.2, "prty": 0.15 },
                "tags": ["eco_socialist", "anti_capitalist"]
            },
            {
                "value": 0.5,
                "text": "Green politics should be left-leaning but not doctrinaire socialist",
                "loadings": { "eqlt": 0.1 },
                "tags": ["green_left", "progressive"]
            },
            {
                "value": 0.0,
                "text": "Environmentalism transcends left-right—it's a separate dimension",
                "loadings": {},
                "tags": ["independent_green", "post_ideological"]
            },
            {
                "value": -0.5,
                "text": "Conservation aligns with traditional values—protecting heritage and homeland",
                "loadings": { "prog": -0.1 },
                "tags": ["green_conservative", "traditionalist"]
            },
            {
                "value": -1.0,
                "text": "Free markets and property rights are the best environmental protections",
                "loadings": { "eqlt": -0.15, "prty": -0.15 },
                "tags": ["green_libertarian", "market_environmentalism"]
            }
        ],
        "distinguishes": ["Green Politics", "Green Liberalism", "Green Conservatism", "Eco-Socialism", "Bright Green Environmentalism", "Green Anarchism"]
    },

    // ========================================
    // CLUSTER 5: SOCIALIST-STATIST
    // ========================================
    {
        "id": 1053,
        "question": "What role should a revolutionary party play in socialist transformation?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "eqlt", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "A disciplined leading party must guide workers toward understanding their true interests",
                "loadings": { "powr": -0.2, "mns": 0.15 },
                "tags": ["vanguardist", "leninist"]
            },
            {
                "value": 0.5,
                "text": "A mass workers' party should guide but respond to the spontaneous movement",
                "loadings": { "popl": 0.1 },
                "tags": ["mass_party", "democratic_centralist"]
            },
            {
                "value": 0.0,
                "text": "Parties can help but workers' councils and movements should lead",
                "loadings": { "powr": 0.1 },
                "tags": ["council", "movement_led"]
            },
            {
                "value": -0.5,
                "text": "Electoral socialist parties within democratic systems can achieve change",
                "loadings": { "chng": -0.1, "mns": -0.1 },
                "tags": ["democratic_socialist", "electoral"]
            },
            {
                "value": -1.0,
                "text": "Parties are authoritarian—only federated workers' assemblies are legitimate",
                "loadings": { "powr": 0.2, "lbrt": 0.1 },
                "tags": ["anti_party", "libertarian_socialist"]
            }
        ],
        "distinguishes": ["Marxism-Leninism", "Trotskyism", "Bordigism", "Maoism", "Left Communism", "Council Communism"]
    },
    {
        "id": 1054,
        "question": "Can socialism succeed in one country, or does it require world revolution?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Socialism in one country won't work—revolutions must spread across borders",
                "loadings": { "idnt": 0.15, "intv": 0.1 },
                "tags": ["permanent_revolution", "internationalist"]
            },
            {
                "value": 0.5,
                "text": "National liberation struggles are part of world revolution but can succeed locally",
                "loadings": { "idnt": -0.05 },
                "tags": ["national_liberation", "anti_imperialist"]
            },
            {
                "value": 0.0,
                "text": "Socialism can be built nationally while supporting international movements",
                "loadings": {},
                "tags": ["socialism_one_country", "national_path"]
            },
            {
                "value": -0.5,
                "text": "Each nation must find its own path to socialism based on local conditions",
                "loadings": { "idnt": -0.1 },
                "tags": ["national_communism", "local_conditions"]
            },
            {
                "value": -1.0,
                "text": "National self-reliance is essential—avoid dependency on outside forces",
                "loadings": { "idnt": -0.2, "intv": -0.15 },
                "tags": ["autarkic_socialism", "self_reliance"]
            }
        ],
        "distinguishes": ["Stalinism", "Trotskyism", "Maoism", "Juche", "Marxism-Leninism", "Titoism"]
    },
    {
        "id": 1055,
        "question": "What should be the relationship between the communist party and the state?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "powr", "threshold": 25, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "The party IS the state—it must control all aspects of society to build socialism",
                "loadings": { "powr": -0.25, "lbrt": -0.2 },
                "tags": ["totalitarian", "party_state"]
            },
            {
                "value": 0.5,
                "text": "The party guides the state but allows some autonomy in economic management",
                "loadings": { "powr": -0.15 },
                "tags": ["guided_socialism", "managerial"]
            },
            {
                "value": 0.0,
                "text": "The party leads but should respect workers' organizations and civil society",
                "loadings": {},
                "tags": ["reformed_communist", "pluralist_tendency"]
            },
            {
                "value": -0.5,
                "text": "Multiple parties and democratic competition should exist within socialist framework",
                "loadings": { "lbrt": 0.1, "popl": 0.1 },
                "tags": ["democratic_socialism", "multi_party"]
            },
            {
                "value": -1.0,
                "text": "The state itself must be abolished—socialism means workers' self-management",
                "loadings": { "powr": 0.2, "lbrt": 0.15 },
                "tags": ["stateless_socialism", "anarchist"]
            }
        ],
        "distinguishes": ["Stalinism", "Dengism", "Xi Jinping Thought", "Eurocommunism", "Titoism", "Hoxhaism"]
    },
    {
        "id": 1056,
        "question": "What is the primary revolutionary base and agent of change?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "The peasantry and rural masses, especially in the Third World",
                "loadings": { "popl": 0.15, "idnt": -0.1 },
                "tags": ["peasant_revolution", "rural"]
            },
            {
                "value": 0.5,
                "text": "An alliance of workers and peasants under working-class leadership",
                "loadings": { "popl": 0.1 },
                "tags": ["worker_peasant_alliance", "broad_front"]
            },
            {
                "value": 0.0,
                "text": "The industrial working class organized in its workplaces",
                "loadings": {},
                "tags": ["proletarian", "industrial"]
            },
            {
                "value": -0.5,
                "text": "All oppressed groups including workers, women, minorities, students",
                "loadings": { "prog": 0.1 },
                "tags": ["new_left", "intersectional"]
            },
            {
                "value": -1.0,
                "text": "Revolutionary intellectuals and students who can spark consciousness",
                "loadings": { "popl": -0.15 },
                "tags": ["intellectual", "student"]
            }
        ],
        "distinguishes": ["Maoism", "Maoism-Third Worldism", "Orthodox Marxism", "Stalinism", "Castroism", "Guevarism"]
    },
    {
        "id": 1057,
        "question": "Should socialists pursue revolution or work within existing democratic systems?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "eqlt", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Democracy under capitalism is limited—only revolution can create real change",
                "loadings": { "chng": 0.25, "mns": 0.1 },
                "tags": ["revolutionary", "anti_parliamentarian"]
            },
            {
                "value": 0.5,
                "text": "Electoral work is tactical but revolution remains the ultimate goal",
                "loadings": { "chng": 0.1 },
                "tags": ["revolutionary_reformist", "tactical"]
            },
            {
                "value": 0.0,
                "text": "Both electoral and extra-parliamentary action are needed",
                "loadings": {},
                "tags": ["dual_approach", "flexible"]
            },
            {
                "value": -0.5,
                "text": "Gradual reform through democratic institutions can achieve socialism",
                "loadings": { "chng": -0.15, "mns": -0.1 },
                "tags": ["democratic_socialist", "gradualist"]
            },
            {
                "value": -1.0,
                "text": "Patient, incremental reform is the only responsible path forward",
                "loadings": { "chng": -0.25, "mns": -0.15 },
                "tags": ["fabian", "incrementalist"]
            }
        ],
        "distinguishes": ["Eurocommunism", "Democratic Socialism", "Fabianism", "Laborism", "De Leonism", "Nordic Model"]
    },
    {
        "id": 1058,
        "question": "How much autonomy should workers have in managing socialist enterprises?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "eqlt", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Full workers' self-management—enterprises controlled directly by their workers",
                "loadings": { "powr": 0.25, "prty": 0.1 },
                "tags": ["self_management", "autogestion"]
            },
            {
                "value": 0.5,
                "text": "Significant worker participation within a framework of social ownership",
                "loadings": { "powr": 0.15 },
                "tags": ["participatory", "co_management"]
            },
            {
                "value": 0.0,
                "text": "Workers' input through unions and councils, but expert management",
                "loadings": {},
                "tags": ["consultative", "managed"]
            },
            {
                "value": -0.5,
                "text": "Central planning with worker input through party and union structures",
                "loadings": { "powr": -0.1 },
                "tags": ["planned", "centralized"]
            },
            {
                "value": -1.0,
                "text": "Scientific central planning by experts serves workers' true interests",
                "loadings": { "powr": -0.2, "popl": -0.1 },
                "tags": ["technocratic_planning", "centralized"]
            }
        ],
        "distinguishes": ["Titoism", "Council Communism", "Syndicalism", "Market Socialism", "Participism", "Guild Socialism"]
    },
    {
        "id": 1059,
        "question": "What is the best path for Latin American social transformation?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "eqlt", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Armed revolutionary struggle against imperialism and local oligarchies",
                "loadings": { "chng": 0.2, "intv": -0.1 },
                "tags": ["guerrilla", "armed_struggle"]
            },
            {
                "value": 0.5,
                "text": "Bolivarian revolution—using state power for continental integration and socialism",
                "loadings": { "popl": 0.15, "idnt": -0.05 },
                "tags": ["bolivarian", "21st_century_socialism"]
            },
            {
                "value": 0.0,
                "text": "Progressive governments pursuing social reform within democratic systems",
                "loadings": { "chng": -0.05 },
                "tags": ["pink_tide", "social_democratic"]
            },
            {
                "value": -0.5,
                "text": "Mass movements and labor organizing to pressure for gradual change",
                "loadings": { "popl": 0.1, "chng": -0.1 },
                "tags": ["social_movement", "gradualist"]
            },
            {
                "value": -1.0,
                "text": "Indigenous and communal autonomy as an alternative to both capitalism and state socialism",
                "loadings": { "powr": 0.15, "intg": 0.1 },
                "tags": ["autonomist", "indigenous"]
            }
        ],
        "distinguishes": ["Bolivarianism", "Pink Tide", "Castroism", "Guevarism", "Sandinismo", "Zapatismo"]
    },
    {
        "id": 1060,
        "question": "What is your view on state-owned enterprises operating in market conditions?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "prty", "threshold": 50, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "State capitalism betrays socialism—profit motive corrupts regardless of ownership",
                "loadings": { "prty": 0.2, "eqlt": 0.15 },
                "tags": ["anti_state_capitalism", "purist"]
            },
            {
                "value": 0.5,
                "text": "Markets can be used tactically but the goal remains transcending them",
                "loadings": { "prty": 0.1 },
                "tags": ["transitional", "tactical_market"]
            },
            {
                "value": 0.0,
                "text": "Mixed economy with strong state sector can serve public purposes",
                "loadings": {},
                "tags": ["mixed_economy", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "State enterprises in markets can combine efficiency with public ownership",
                "loadings": { "prty": -0.05, "mns": -0.1 },
                "tags": ["market_socialism", "competitive_state"]
            },
            {
                "value": -1.0,
                "text": "State capitalism can build productive forces for eventual socialist transition",
                "loadings": { "prty": -0.1, "powr": -0.1 },
                "tags": ["state_capitalism", "developmental"]
            }
        ],
        "distinguishes": ["State Capitalism", "Dengism", "Xi Jinping Thought", "Corporatism", "Market Socialism", "Social Authoritarianism"]
    },

    // ========================================
    // CLUSTER 6: ANARCHIST VARIANTS
    // ========================================
    {
        "id": 1061,
        "question": "What role should markets play in a stateless society?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "powr", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Free markets without the state would be truly free—voluntary exchange for all",
                "loadings": { "prty": -0.2, "eqlt": -0.15 },
                "tags": ["market_anarchist", "free_market"]
            },
            {
                "value": 0.5,
                "text": "Markets with equal access to means of production—no wage labor or landlordism",
                "loadings": { "prty": -0.05 },
                "tags": ["mutualist", "freed_markets"]
            },
            {
                "value": 0.0,
                "text": "Some market exchange alongside communal and gift economies",
                "loadings": {},
                "tags": ["pluralist_economy", "mixed"]
            },
            {
                "value": -0.5,
                "text": "Collectivized production with distribution based on contribution",
                "loadings": { "prty": 0.15 },
                "tags": ["collectivist", "labor_exchange"]
            },
            {
                "value": -1.0,
                "text": "Production and distribution according to need—no markets at all",
                "loadings": { "prty": 0.25, "eqlt": 0.15 },
                "tags": ["communist_anarchist", "gift_economy"]
            }
        ],
        "distinguishes": ["Mutualism", "Anarcho-Capitalism", "Anarcho-Communism", "Anarcho-Collectivism", "Market Socialism", "Agorism"]
    },
    {
        "id": 1062,
        "question": "How should anarchists organize for social change?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "powr", "threshold": 90, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Through federated revolutionary organizations with shared strategy and discipline",
                "loadings": { "mns": -0.1 },
                "tags": ["platformist", "organized"]
            },
            {
                "value": 0.5,
                "text": "Through labor unions that can become the structure of the new society",
                "loadings": { "popl": 0.1 },
                "tags": ["syndicalist", "union"]
            },
            {
                "value": 0.0,
                "text": "Through diverse tactics—organizing, mutual aid, direct action as appropriate",
                "loadings": {},
                "tags": ["synthesist", "pluralist"]
            },
            {
                "value": -0.5,
                "text": "Reject formal organization—small affinity groups acting spontaneously",
                "loadings": { "mns": 0.1 },
                "tags": ["insurrectionary", "affinity_group"]
            },
            {
                "value": -1.0,
                "text": "Abandon leftist frameworks entirely—create autonomous zones and experiments",
                "loadings": { "mns": 0.15, "prog": 0.1 },
                "tags": ["post_left", "autonomous"]
            }
        ],
        "distinguishes": ["Platformism", "Insurrectionary Anarchism", "Anarcho-Syndicalism", "Post-Left Anarchism", "Situationism", "Autonomism"]
    },
    {
        "id": 1063,
        "question": "How should anarchism relate to identity-based struggles and liberation movements?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "powr", "threshold": 90, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Anarchism must center the struggles of the most marginalized—feminism, queer liberation, anti-racism",
                "loadings": { "prog": 0.2, "intg": 0.1 },
                "tags": ["intersectional_anarchist", "identity_focused"]
            },
            {
                "value": 0.5,
                "text": "All oppressions are interconnected—class, gender, race, sexuality must be fought together",
                "loadings": { "prog": 0.15 },
                "tags": ["social_anarchist", "holistic"]
            },
            {
                "value": 0.0,
                "text": "Economic class struggle is primary but other oppressions are real and important",
                "loadings": {},
                "tags": ["class_primary", "allied"]
            },
            {
                "value": -0.5,
                "text": "Individual liberation matters most—identity politics can be divisive",
                "loadings": { "lbrt": 0.1 },
                "tags": ["individualist", "skeptical"]
            },
            {
                "value": -1.0,
                "text": "Identity categories themselves should be abolished—only individual autonomy matters",
                "loadings": { "lbrt": 0.15, "intg": -0.1 },
                "tags": ["post_identity", "nihilist"]
            }
        ],
        "distinguishes": ["Anarcha-Feminism", "Queer Anarchism", "Post-Left Anarchism", "Post-Anarchism", "Individualist Anarchism", "Green Anarchism"]
    },
    {
        "id": 1064,
        "question": "Is violence ever justified in anarchist struggle?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "chng", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Propaganda of the deed—dramatic acts of violence can awaken revolutionary consciousness",
                "loadings": { "chng": 0.2, "mns": 0.15 },
                "tags": ["insurrectionary", "propaganda_deed"]
            },
            {
                "value": 0.5,
                "text": "Defensive violence and property destruction against oppressive systems are legitimate",
                "loadings": { "chng": 0.1 },
                "tags": ["militant", "defensive"]
            },
            {
                "value": 0.0,
                "text": "Tactical flexibility—violence may sometimes be necessary but isn't preferred",
                "loadings": {},
                "tags": ["tactical", "contextual"]
            },
            {
                "value": -0.5,
                "text": "Nonviolent direct action is more effective and consistent with anarchist values",
                "loadings": { "mns": -0.1 },
                "tags": ["nonviolent", "principled"]
            },
            {
                "value": -1.0,
                "text": "Violence reproduces the state's logic—only peaceful transformation is truly anarchist",
                "loadings": { "chng": -0.1, "mns": -0.15 },
                "tags": ["pacifist_anarchist", "anti_violence"]
            }
        ],
        "distinguishes": ["Insurrectionary Anarchism", "Anarcho-Pacifism", "Platformism", "Anarcho-Communism", "Guevarism", "Left Communism"]
    },
    {
        "id": 1065,
        "question": "What is the relationship between individual freedom and collective liberation?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "lbrt", "threshold": 90, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Only the unique individual matters—all collectives and causes are 'spooks'",
                "loadings": { "lbrt": 0.2, "eqlt": -0.1 },
                "tags": ["egoist", "individualist"]
            },
            {
                "value": 0.5,
                "text": "Individual autonomy is paramount but voluntary association serves individual flourishing",
                "loadings": { "lbrt": 0.15 },
                "tags": ["individualist_anarchist", "voluntary"]
            },
            {
                "value": 0.0,
                "text": "Individual and collective freedom are complementary and mutually reinforcing",
                "loadings": {},
                "tags": ["social_individualist", "balanced"]
            },
            {
                "value": -0.5,
                "text": "True individual freedom is only possible through collective liberation from oppression",
                "loadings": { "eqlt": 0.1 },
                "tags": ["social_anarchist", "collective"]
            },
            {
                "value": -1.0,
                "text": "The community's wellbeing should guide individual action—solidarity is essential",
                "loadings": { "eqlt": 0.15, "prty": 0.1 },
                "tags": ["communist_anarchist", "solidaristic"]
            }
        ],
        "distinguishes": ["Individualist Anarchism", "Egoism", "Anarcho-Communism", "Anarcho-Collectivism", "Post-Left Anarchism", "Anarcho-Nihilism"]
    },
    {
        "id": 1066,
        "question": "How should anarchists relate to technology?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "powr", "threshold": 85, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Technology enables liberation—cryptography, networks, and automation can build freedom",
                "loadings": { "tech": 0.25 },
                "tags": ["crypto_anarchist", "tech_positive"]
            },
            {
                "value": 0.5,
                "text": "Human enhancement and life extension are consistent with anarchist values",
                "loadings": { "tech": 0.15, "hmnn": 0.1 },
                "tags": ["anarcho_transhumanist", "enhancement"]
            },
            {
                "value": 0.0,
                "text": "Technology is a tool—it can serve liberation or domination depending on use",
                "loadings": {},
                "tags": ["neutral", "contextual"]
            },
            {
                "value": -0.5,
                "text": "Most technology serves domination—we need appropriate-scale, ecological alternatives",
                "loadings": { "tech": -0.15, "ecol": 0.1 },
                "tags": ["green_anarchist", "appropriate_tech"]
            },
            {
                "value": -1.0,
                "text": "Technology is inherently dominating—only a return to nature brings true freedom",
                "loadings": { "tech": -0.25, "ecol": 0.2 },
                "tags": ["anarcho_primitivist", "anti_tech"]
            }
        ],
        "distinguishes": ["Anarcho-Transhumanism", "Anarcho-Primitivism", "Crypto-Anarchism", "Green Anarchism", "Solarpunk", "Anarcho-Naturism"]
    },

    // ========================================
    // CLUSTER 7: ECONOMIC SCHOOLS
    // ========================================
    {
        "id": 1067,
        "question": "What role should central banks play in the economy?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Central banks should be abolished—money should emerge from free markets",
                "loadings": { "powr": 0.2, "prty": -0.15 },
                "tags": ["free_banking", "gold_standard"]
            },
            {
                "value": 0.5,
                "text": "Central banks should follow strict rules—no discretionary monetary policy",
                "loadings": { "mns": 0.1 },
                "tags": ["monetarist", "rules_based"]
            },
            {
                "value": 0.0,
                "text": "Central banks should have independence but focus on price stability",
                "loadings": {},
                "tags": ["inflation_targeting", "moderate"]
            },
            {
                "value": -0.5,
                "text": "Central banks should actively manage the economy and support full employment",
                "loadings": { "wlfr": 0.1 },
                "tags": ["keynesian", "active"]
            },
            {
                "value": -1.0,
                "text": "Currency is a public utility—government can't run out of its own money",
                "loadings": { "wlfr": 0.2, "eqlt": 0.1 },
                "tags": ["mmt", "functional_finance"]
            }
        ],
        "distinguishes": ["Austrian School", "Monetarism", "Modern Monetary Theory", "Keynesianism", "Chicago School", "Post-Keynesianism"]
    },
    {
        "id": 1068,
        "question": "What approach should government take to fiscal policy (taxing and spending)?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "wlfr", "threshold": 60, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Government spending creates money and drives the economy—deficits are usually too small",
                "loadings": { "wlfr": 0.2, "eqlt": 0.15 },
                "tags": ["mmt", "fiscal_expansion"]
            },
            {
                "value": 0.5,
                "text": "Counter-cyclical spending is essential—deficits in downturns, surpluses in booms",
                "loadings": { "wlfr": 0.1 },
                "tags": ["keynesian", "counter_cyclical"]
            },
            {
                "value": 0.0,
                "text": "Balanced budgets over the cycle with targeted spending on public goods",
                "loadings": {},
                "tags": ["balanced_budget", "moderate"]
            },
            {
                "value": -0.5,
                "text": "Tax cuts stimulate growth better than spending—reduce tax burden",
                "loadings": { "eqlt": -0.15, "wlfr": -0.1 },
                "tags": ["supply_side", "tax_cuts"]
            },
            {
                "value": -1.0,
                "text": "Government spending crowds out private activity—minimize the public sector",
                "loadings": { "wlfr": -0.2, "prty": -0.1 },
                "tags": ["fiscal_conservative", "minimal_state"]
            }
        ],
        "distinguishes": ["Keynesianism", "Modern Monetary Theory", "Supply-Side Economics", "Fiscal Conservatism", "Post-Keynesianism", "Ordoliberalism"]
    },
    {
        "id": 1069,
        "question": "What trade policy best serves national prosperity?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Protectionism—tariffs and industrial policy to build domestic capacity",
                "loadings": { "idnt": -0.15, "intv": -0.1 },
                "tags": ["protectionist", "industrial_policy"]
            },
            {
                "value": 0.5,
                "text": "Strategic trade—protect key industries while pursuing selective openness",
                "loadings": { "idnt": -0.05 },
                "tags": ["strategic_trade", "selective"]
            },
            {
                "value": 0.0,
                "text": "Managed trade with rules for fair competition and worker protections",
                "loadings": {},
                "tags": ["fair_trade", "regulated"]
            },
            {
                "value": -0.5,
                "text": "Free trade with minimal barriers—competition benefits everyone",
                "loadings": { "idnt": 0.1 },
                "tags": ["free_trade", "liberal"]
            },
            {
                "value": -1.0,
                "text": "Complete free trade—any restrictions harm prosperity",
                "loadings": { "idnt": 0.15, "eqlt": -0.1 },
                "tags": ["radical_free_trade", "globalist"]
            }
        ],
        "distinguishes": ["Neoliberalism", "Paleoconservatism", "Ordoliberalism", "National Conservatism", "Left-Wing Nationalism", "Third Way"]
    },
    {
        "id": 1070,
        "question": "How should government address monopoly and market concentration?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "prty", "threshold": 35, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Most monopolies result from government interference—remove barriers to competition",
                "loadings": { "prty": -0.15, "powr": 0.1 },
                "tags": ["austrian", "natural_competition"]
            },
            {
                "value": 0.5,
                "text": "Antitrust should be narrow—only block clearly harmful mergers",
                "loadings": { "prty": -0.1 },
                "tags": ["chicago_school", "consumer_welfare"]
            },
            {
                "value": 0.0,
                "text": "Strong antitrust enforcement to maintain competitive markets",
                "loadings": {},
                "tags": ["antitrust", "competition_policy"]
            },
            {
                "value": -0.5,
                "text": "Markets need a constitutional framework—competition rules are essential",
                "loadings": { "mns": 0.1 },
                "tags": ["ordoliberal", "framework"]
            },
            {
                "value": -1.0,
                "text": "Large corporations should be broken up or put under public control",
                "loadings": { "prty": 0.15, "eqlt": 0.1 },
                "tags": ["anti_monopoly", "public_control"]
            }
        ],
        "distinguishes": ["Ordoliberalism", "Chicago School", "Laissez-Faire Capitalism", "Austrian School", "Neoliberalism", "Corporatism"]
    },
    {
        "id": 1071,
        "question": "Should land be treated differently from other forms of property?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Land belongs to everyone—land value should be taxed fully and shared",
                "loadings": { "prty": 0.2, "eqlt": 0.15 },
                "tags": ["georgist", "land_value_tax"]
            },
            {
                "value": 0.5,
                "text": "Broad distribution of land ownership creates a stable property-owning democracy",
                "loadings": { "prty": 0.05, "powr": 0.1 },
                "tags": ["distributist", "broad_ownership"]
            },
            {
                "value": 0.0,
                "text": "Land should be private but with reasonable regulations and taxation",
                "loadings": {},
                "tags": ["regulated", "moderate"]
            },
            {
                "value": -0.5,
                "text": "Private property in land is essential—minimal interference is best",
                "loadings": { "prty": -0.1 },
                "tags": ["propertarian", "private"]
            },
            {
                "value": -1.0,
                "text": "Absolute property rights in land—owners should have complete control",
                "loadings": { "prty": -0.2, "lbrt": 0.1 },
                "tags": ["absolutist", "full_ownership"]
            }
        ],
        "distinguishes": ["Georgism", "Geolibertarianism", "Distributism", "Agrarianism", "Left-Libertarianism", "Mutualism"]
    },

    // ========================================
    // CLUSTER 8: AMERICAN POLITICAL TRADITIONS
    // ========================================
    {
        "id": 1072,
        "question": "How should power be distributed between federal and state/local governments?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "powr", "threshold": 60, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Power should rest primarily with states and localities—federal government is too distant",
                "loadings": { "powr": 0.25, "idnt": -0.1 },
                "tags": ["states_rights", "decentralist"]
            },
            {
                "value": 0.5,
                "text": "Federalism with significant state autonomy but federal protection of basic rights",
                "loadings": { "powr": 0.15 },
                "tags": ["federalist", "balanced"]
            },
            {
                "value": 0.0,
                "text": "Flexible federalism—some issues are federal, others local",
                "loadings": {},
                "tags": ["pragmatic_federalism", "flexible"]
            },
            {
                "value": -0.5,
                "text": "Strong federal government ensures equal rights and effective policy nationwide",
                "loadings": { "powr": -0.1, "eqlt": 0.1 },
                "tags": ["nationalist", "strong_federal"]
            },
            {
                "value": -1.0,
                "text": "National government should lead on major issues—state resistance often harmful",
                "loadings": { "powr": -0.2 },
                "tags": ["centralist", "hamiltonian"]
            }
        ],
        "distinguishes": ["Jeffersonianism", "Hamiltonianism", "Jacksonianism", "New Deal Liberalism", "Reaganism", "Paleoconservatism"]
    },
    {
        "id": 1073,
        "question": "What is the best approach to achieving progressive social reform?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "prog", "threshold": 65, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Bold government programs and direct intervention to solve social problems",
                "loadings": { "wlfr": 0.2, "prog": 0.1 },
                "tags": ["great_society", "programmatic"]
            },
            {
                "value": 0.5,
                "text": "New Deal-style coalition politics balancing labor, farmers, and middle class",
                "loadings": { "wlfr": 0.15, "popl": 0.1 },
                "tags": ["new_deal", "coalition"]
            },
            {
                "value": 0.0,
                "text": "Incremental reform working within institutions and building consensus",
                "loadings": { "mns": -0.1 },
                "tags": ["incrementalist", "centrist_reform"]
            },
            {
                "value": -0.5,
                "text": "Market-friendly reforms that expand opportunity without big government",
                "loadings": { "wlfr": -0.1, "mns": -0.15 },
                "tags": ["third_way", "neoliberal"]
            },
            {
                "value": -1.0,
                "text": "Progressive change comes through civil society and markets, not government",
                "loadings": { "wlfr": -0.15, "prty": -0.1 },
                "tags": ["private_progressivism", "market_reform"]
            }
        ],
        "distinguishes": ["American Progressivism", "New Deal Liberalism", "Great Society Liberalism", "Clintonism", "Third Way", "Progressivism"]
    },
    {
        "id": 1074,
        "question": "When is government intervention in the economy justified?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Government should actively manage the economy and provide universal programs",
                "loadings": { "eqlt": 0.2, "wlfr": 0.2 },
                "tags": ["interventionist", "activist_government"]
            },
            {
                "value": 0.5,
                "text": "Government should ensure fair competition, support infrastructure, and help the disadvantaged",
                "loadings": { "wlfr": 0.1 },
                "tags": ["moderate_liberal", "progressive_republican"]
            },
            {
                "value": 0.0,
                "text": "Government has a role in setting rules and correcting market failures",
                "loadings": {},
                "tags": ["moderate", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Government intervention usually backfires—markets work better",
                "loadings": { "eqlt": -0.15, "wlfr": -0.1 },
                "tags": ["market_preference", "conservative"]
            },
            {
                "value": -1.0,
                "text": "Government is the problem—economic freedom produces prosperity",
                "loadings": { "eqlt": -0.2, "wlfr": -0.15 },
                "tags": ["reaganite", "free_market"]
            }
        ],
        "distinguishes": ["New Deal Liberalism", "Reaganism", "Rockefeller Republicanism", "Thatcherism", "Great Society Liberalism", "Clintonism"]
    },
    {
        "id": 1075,
        "question": "How should the interests of rural and urban areas be balanced?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "popl", "threshold": 60, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Rural communities are the backbone of the nation and deserve priority protection",
                "loadings": { "popl": 0.15, "powr": 0.1 },
                "tags": ["agrarian", "rural_priority"]
            },
            {
                "value": 0.5,
                "text": "Small farmers and rural communities need support against corporate agriculture",
                "loadings": { "popl": 0.1, "eqlt": 0.1 },
                "tags": ["populist_agrarian", "family_farm"]
            },
            {
                "value": 0.0,
                "text": "Both rural and urban interests deserve fair representation and investment",
                "loadings": {},
                "tags": ["balanced", "fair_distribution"]
            },
            {
                "value": -0.5,
                "text": "Cities are economic engines—policy should support growth and innovation",
                "loadings": { "tech": 0.1 },
                "tags": ["urban_focused", "growth_center"]
            },
            {
                "value": -1.0,
                "text": "Rural overrepresentation distorts democracy—population should determine power",
                "loadings": { "popl": -0.1 },
                "tags": ["urban_democratic", "majoritarian"]
            }
        ],
        "distinguishes": ["Jeffersonianism", "Agrarianism", "Rural Populism", "Jacksonianism", "Peasant Politics", "Producerism"]
    },

    // ========================================
    // CLUSTER 9: THIRD-WORLD/REGIONAL
    // ========================================
    {
        "id": 1076,
        "question": "Should nations in a region unite across borders for common development?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "idnt", "threshold": 40, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Yes—pan-regional unity against imperialism and for collective development",
                "loadings": { "idnt": -0.1, "intv": -0.1 },
                "tags": ["pan_nationalist", "regional_unity"]
            },
            {
                "value": 0.5,
                "text": "Regional cooperation on economics and security while maintaining national sovereignty",
                "loadings": {},
                "tags": ["regional_cooperation", "sovereignty"]
            },
            {
                "value": 0.0,
                "text": "Selective regional partnerships based on shared interests",
                "loadings": {},
                "tags": ["pragmatic_regional", "bilateral"]
            },
            {
                "value": -0.5,
                "text": "National development should come first—regional ties can follow",
                "loadings": { "idnt": -0.15 },
                "tags": ["national_first", "development"]
            },
            {
                "value": -1.0,
                "text": "National uniqueness and sovereignty should be preserved above regional integration",
                "loadings": { "idnt": -0.2 },
                "tags": ["nationalist", "anti_integration"]
            }
        ],
        "distinguishes": ["Nasserism", "Ba'athism", "African Socialism", "Bolivarianism", "Left-Wing Nationalism", "Kemalism"]
    },
    {
        "id": 1077,
        "question": "What development path should post-colonial nations pursue?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "intv", "threshold": 40, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Socialist self-reliance—break dependency on former colonizers and global capital",
                "loadings": { "eqlt": 0.2, "idnt": -0.15 },
                "tags": ["socialist_development", "self_reliance"]
            },
            {
                "value": 0.5,
                "text": "Independent path—not following either capitalism or communism, adapted to local needs",
                "loadings": { "intv": -0.1 },
                "tags": ["non_aligned", "third_way_development"]
            },
            {
                "value": 0.0,
                "text": "Mixed economy with state guidance and openness to foreign investment",
                "loadings": {},
                "tags": ["developmental_state", "mixed"]
            },
            {
                "value": -0.5,
                "text": "Integration into global markets while building domestic capacity",
                "loadings": { "idnt": 0.1 },
                "tags": ["export_led", "globalization"]
            },
            {
                "value": -1.0,
                "text": "Free market development with minimal government interference",
                "loadings": { "eqlt": -0.15, "prty": -0.1 },
                "tags": ["neoliberal_development", "market_led"]
            }
        ],
        "distinguishes": ["African Socialism", "Ujamaa", "Anti-Imperialism", "Non-Aligned Movement", "Sandinismo", "Pink Tide"]
    },
    {
        "id": 1078,
        "question": "What role should strong leadership play in national development?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "powr", "threshold": 40, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "A strong leader embodying popular will can achieve what fractured democracy cannot",
                "loadings": { "powr": -0.2, "popl": 0.15 },
                "tags": ["strongman", "caesarist"]
            },
            {
                "value": 0.5,
                "text": "Executive leadership is needed for modernization, with mass support",
                "loadings": { "powr": -0.1 },
                "tags": ["authoritarian_modernizer", "developmental"]
            },
            {
                "value": 0.0,
                "text": "Strong leadership within constitutional constraints and eventual democratization",
                "loadings": {},
                "tags": ["guided_democracy", "transitional"]
            },
            {
                "value": -0.5,
                "text": "Democratic institutions are essential even if they slow development",
                "loadings": { "lbrt": 0.1 },
                "tags": ["democratic_development", "institutional"]
            },
            {
                "value": -1.0,
                "text": "Participatory democracy and local autonomy, not strong leaders",
                "loadings": { "powr": 0.2, "popl": 0.1 },
                "tags": ["grassroots", "anti_authoritarian"]
            }
        ],
        "distinguishes": ["Peronism", "Gaullism", "Nasserism", "Kemalism", "Ba'athism", "Bolivarianism"]
    },
    {
        "id": 1079,
        "question": "How should modernization relate to traditional culture and religion?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": { "axis": "prog", "threshold": 60, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Modernization requires secularization—traditional practices hold back progress",
                "loadings": { "prog": 0.2, "scr": 0.15 },
                "tags": ["secularizing_modernizer", "westernizing"]
            },
            {
                "value": 0.5,
                "text": "Adopt modern technology and institutions while maintaining cultural distinctiveness",
                "loadings": { "prog": 0.1 },
                "tags": ["selective_modernization", "cultural_preservation"]
            },
            {
                "value": 0.0,
                "text": "Balance modernization with respect for tradition on a case-by-case basis",
                "loadings": {},
                "tags": ["balanced", "pragmatic"]
            },
            {
                "value": -0.5,
                "text": "Traditional values and religion should guide how we adopt modern practices",
                "loadings": { "scr": -0.1, "prog": -0.1 },
                "tags": ["tradition_guided", "religious_modernization"]
            },
            {
                "value": -1.0,
                "text": "Western modernization is cultural imperialism—our traditions are our strength",
                "loadings": { "scr": -0.15, "intg": -0.1 },
                "tags": ["anti_western", "traditionalist"]
            }
        ],
        "distinguishes": ["Kemalism", "Nasserism", "Gaullism", "Hindu Nationalism", "Religious Zionism", "Ba'athism"]
    },
    {
        "id": 1080,
        "question": "What rights should indigenous peoples and local communities have?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "powr", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Full autonomy and self-governance—indigenous communities should control their territories",
                "loadings": { "powr": 0.25, "intg": 0.15 },
                "tags": ["indigenous_autonomy", "self_determination"]
            },
            {
                "value": 0.5,
                "text": "Significant autonomy with cultural rights and land protections",
                "loadings": { "powr": 0.15, "intg": 0.1 },
                "tags": ["cultural_autonomy", "protected"]
            },
            {
                "value": 0.0,
                "text": "Recognition of indigenous rights within a framework of national unity",
                "loadings": {},
                "tags": ["integrated_rights", "balanced"]
            },
            {
                "value": -0.5,
                "text": "Equal citizenship rights for all—special group rights create division",
                "loadings": { "intg": -0.1 },
                "tags": ["civic_equality", "integrationist"]
            },
            {
                "value": -1.0,
                "text": "National unity requires assimilation—separate identities weaken the nation",
                "loadings": { "intg": -0.2, "idnt": -0.1 },
                "tags": ["assimilationist", "nationalist"]
            }
        ],
        "distinguishes": ["Zapatismo", "Democratic Confederalism", "Ujamaa", "African Socialism", "Communalism", "Cooperative Socialism"]
    },

    // ========================================
    // CLUSTER 10: TECH/FUTURE
    // ========================================
    {
        "id": 1081,
        "question": "Should we use technology to enhance human capabilities beyond natural limits?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "tech", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Yes—human enhancement, life extension, and transcending biology are moral imperatives",
                "loadings": { "tech": 0.3, "hmnn": 0.15 },
                "tags": ["transhumanist", "enhancement"]
            },
            {
                "value": 0.5,
                "text": "Therapeutic enhancements are good—cognitive and physical improvements should be available",
                "loadings": { "tech": 0.2 },
                "tags": ["moderate_enhancement", "therapeutic_plus"]
            },
            {
                "value": 0.0,
                "text": "Medical therapy is fine but enhancement beyond normal raises concerns",
                "loadings": {},
                "tags": ["therapeutic_only", "cautious"]
            },
            {
                "value": -0.5,
                "text": "Enhancement technologies threaten human dignity and create inequality",
                "loadings": { "tech": -0.15, "eqlt": 0.1 },
                "tags": ["bioconservative", "dignity"]
            },
            {
                "value": -1.0,
                "text": "We should not play God—human nature should remain unmodified",
                "loadings": { "tech": -0.25, "hmnn": -0.1 },
                "tags": ["anti_enhancement", "natural_limits"]
            }
        ],
        "distinguishes": ["Transhumanism", "Anarcho-Transhumanism", "Technogaianism", "Post-Scarcity Politics", "Longtermism", "Libertarian Paternalism"]
    },
    {
        "id": 1082,
        "question": "How should society prepare for AI and automation potentially replacing most jobs?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "tech", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Embrace post-scarcity—automation should free humanity from toil entirely",
                "loadings": { "tech": 0.2, "wlfr": 0.2 },
                "tags": ["post_scarcity", "full_automation"]
            },
            {
                "value": 0.5,
                "text": "Universal basic income and reduced work time as technology increases productivity",
                "loadings": { "wlfr": 0.15, "tech": 0.1 },
                "tags": ["ubi", "leisure_society"]
            },
            {
                "value": 0.0,
                "text": "Retraining and education to help workers adapt to new types of jobs",
                "loadings": {},
                "tags": ["adaptation", "retraining"]
            },
            {
                "value": -0.5,
                "text": "Slow down automation to protect jobs and social stability",
                "loadings": { "tech": -0.1, "chng": -0.1 },
                "tags": ["protect_jobs", "cautious"]
            },
            {
                "value": -1.0,
                "text": "Resist automation—work gives life meaning and structure",
                "loadings": { "tech": -0.2, "chng": -0.15 },
                "tags": ["work_ethic", "anti_automation"]
            }
        ],
        "distinguishes": ["Post-Scarcity Politics", "Technocracy", "Left-Wing Accelerationism", "Transhumanism", "Technoliberalism", "Social Democracy"]
    },
    {
        "id": 1083,
        "question": "Should we accelerate or slow down the pace of social and technological change?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "chng", "threshold": 80, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Accelerate! Push capitalism/technology to its limits to bring about transformation faster",
                "loadings": { "chng": 0.25, "tech": 0.15 },
                "tags": ["accelerationist", "hyperstitional"]
            },
            {
                "value": 0.5,
                "text": "Embrace rapid change—technology and social progress should advance quickly",
                "loadings": { "chng": 0.15, "tech": 0.1 },
                "tags": ["techno_progressive", "fast_change"]
            },
            {
                "value": 0.0,
                "text": "Change at a sustainable pace—neither too fast nor too slow",
                "loadings": {},
                "tags": ["moderate_pace", "sustainable"]
            },
            {
                "value": -0.5,
                "text": "Slow down—rapid change causes social disruption and loss of meaning",
                "loadings": { "chng": -0.15 },
                "tags": ["deceleration", "stability"]
            },
            {
                "value": -1.0,
                "text": "Radically slow down or reverse—modern change is destroying what matters",
                "loadings": { "chng": -0.25, "tech": -0.1 },
                "tags": ["anti_modern", "degrowth"]
            }
        ],
        "distinguishes": ["Left-Wing Accelerationism", "Right-Wing Accelerationism", "Conservatism", "Transhumanism", "Degrowth", "Post-Liberalism"]
    },
    {
        "id": 1084,
        "question": "How much should we prioritize the welfare of future generations?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "tech", "threshold": 75, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Future people matter immensely—we should sacrifice significantly for their wellbeing",
                "loadings": { "tech": 0.15, "mns": 0.2 },
                "tags": ["longtermist", "future_focused"]
            },
            {
                "value": 0.5,
                "text": "We should make reasonable sacrifices for future generations, especially on existential risks",
                "loadings": { "mns": 0.1 },
                "tags": ["moderate_longtermism", "risk_focused"]
            },
            {
                "value": 0.0,
                "text": "Balance present and future—neither should dominate our priorities",
                "loadings": {},
                "tags": ["balanced", "intergenerational"]
            },
            {
                "value": -0.5,
                "text": "Focus on present problems—we can't predict the future well enough",
                "loadings": { "mns": -0.1 },
                "tags": ["presentist", "near_term"]
            },
            {
                "value": -1.0,
                "text": "The living matter most—future generations can solve their own problems",
                "loadings": { "mns": -0.15 },
                "tags": ["present_focused", "skeptical"]
            }
        ],
        "distinguishes": ["Longtermism", "Effective Altruism", "Transhumanism", "Deep Ecology", "Postmodernism", "Feminist Politics"]
    },
    {
        "id": 1085,
        "question": "How should digital rights and privacy be protected in the technological age?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "lbrt", "threshold": 70, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Encryption and distributed networks should make spying technically impossible",
                "loadings": { "lbrt": 0.2, "tech": 0.15 },
                "tags": ["crypto_anarchist", "technical_privacy"]
            },
            {
                "value": 0.5,
                "text": "Strong legal protections for privacy, transparency, and digital freedoms",
                "loadings": { "lbrt": 0.15 },
                "tags": ["digital_rights", "legal_protection"]
            },
            {
                "value": 0.0,
                "text": "Balance privacy with legitimate security and social needs",
                "loadings": {},
                "tags": ["balanced", "contextual"]
            },
            {
                "value": -0.5,
                "text": "Some surveillance is necessary for security—privacy has limits",
                "loadings": { "lbrt": -0.1 },
                "tags": ["security_first", "limited_privacy"]
            },
            {
                "value": -1.0,
                "text": "Transparency and data sharing benefit society—privacy is overrated",
                "loadings": { "lbrt": -0.2, "tech": 0.1 },
                "tags": ["post_privacy", "transparency"]
            }
        ],
        "distinguishes": ["Pirate Politics", "Crypto-Anarchism", "Technoliberalism", "Technocracy", "Libertarian Socialism", "Post-Liberalism"]
    },
    {
        "id": 1086,
        "question": "Who should make decisions about complex technical and social issues?",
        "type": "mechanism",
        "reliability": 0.83,
        "trigger": { "axis": "popl", "threshold": 30, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Expert analysis should guide policy—democracy is too slow and uninformed",
                "loadings": { "popl": -0.25, "tech": 0.15 },
                "tags": ["technocratic", "expert_rule"]
            },
            {
                "value": 0.5,
                "text": "Evidence-based policy guided by experts but with democratic accountability",
                "loadings": { "popl": -0.1, "mns": -0.1 },
                "tags": ["evidence_based", "accountable_expertise"]
            },
            {
                "value": 0.0,
                "text": "Experts advise but citizens and representatives make final decisions",
                "loadings": {},
                "tags": ["advisory_expertise", "democratic_final"]
            },
            {
                "value": -0.5,
                "text": "Participatory processes that combine citizen input with expert knowledge",
                "loadings": { "popl": 0.1 },
                "tags": ["deliberative", "participatory"]
            },
            {
                "value": -1.0,
                "text": "Direct democracy on all issues—experts are often wrong or biased",
                "loadings": { "popl": 0.2, "powr": 0.1 },
                "tags": ["direct_democracy", "anti_expert"]
            }
        ],
        "distinguishes": ["Technocracy", "Effective Altruism", "Managerialism", "Participism", "Deliberative Democracy", "Liquid Democracy"]
    },
    {
        "id": 1087,
        "question": "What is the proper purpose and responsibility of corporations?",
        "type": "mechanism",
        "reliability": 0.82,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Corporations should serve all stakeholders—workers, communities, environment, not just shareholders",
                "loadings": { "eqlt": 0.1, "ecol": 0.1 },
                "tags": ["stakeholder", "corporate_responsibility"]
            },
            {
                "value": 0.5,
                "text": "Corporations should consider social impact and adopt progressive values",
                "loadings": { "prog": 0.1 },
                "tags": ["woke_capitalism", "conscious_business"]
            },
            {
                "value": 0.0,
                "text": "Corporations should follow the law and respond to market incentives",
                "loadings": {},
                "tags": ["regulated_capitalism", "compliant"]
            },
            {
                "value": -0.5,
                "text": "Corporations' responsibility is profit—social issues are for government",
                "loadings": { "eqlt": -0.1 },
                "tags": ["shareholder_primary", "friedmanite"]
            },
            {
                "value": -1.0,
                "text": "The corporate form concentrates too much power—break them up or democratize them",
                "loadings": { "prty": 0.15, "powr": 0.1 },
                "tags": ["anti_corporate", "democratic_economy"]
            }
        ],
        "distinguishes": ["Stakeholder Capitalism", "Woke Capitalism", "Corporatism", "Corporatocracy", "Radical Centrism", "Libertarian Paternalism"]
    },

    // ========================================
    // ECONOMIC & POLITICAL "STOPPING POINTS"
    // Questions to capture nuanced conditional positions
    // ========================================
    {
        "id": 1088,
        "question": "What should be the primary goal of economic policy?",
        "type": "mechanism",
        "reliability": 0.87,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Replace capitalism entirely with democratic worker or community ownership of the economy",
                "loadings": { "eqlt": 0.25, "prty": 0.25, "chng": 0.15 },
                "tags": ["socialist", "replacement"]
            },
            {
                "value": 0.5,
                "text": "Gradually expand public and cooperative ownership until it becomes the dominant form",
                "loadings": { "eqlt": 0.15, "prty": 0.15, "chng": 0.05 },
                "tags": ["democratic_socialist", "gradual_transformation"]
            },
            {
                "value": 0.0,
                "text": "Keep capitalism but with strong regulation and redistribution to ensure fairness",
                "loadings": { "eqlt": 0.05, "wlfr": 0.1, "mns": -0.1 },
                "tags": ["social_democracy", "regulated_capitalism"]
            },
            {
                "value": -0.5,
                "text": "Maintain free markets with a basic safety net for those who fall through the cracks",
                "loadings": { "eqlt": -0.1, "prty": -0.1, "wlfr": -0.1 },
                "tags": ["liberal", "minimal_welfare"]
            },
            {
                "value": -1.0,
                "text": "Maximize economic freedom with minimal government intervention in markets",
                "loadings": { "eqlt": -0.2, "prty": -0.2, "lbrt": 0.1 },
                "tags": ["libertarian", "free_market"]
            }
        ],
        "distinguishes": ["Democratic Socialism", "Social Democracy", "Nordic Model", "Social Liberalism", "Liberalism", "Libertarianism"]
    },
    {
        "id": 1089,
        "question": "In your ideal society, what role would markets play?",
        "type": "mechanism",
        "reliability": 0.86,
        "trigger": { "axis": "eqlt", "threshold": 50, "direction": "high" },
        "options": [
            {
                "value": 1.0,
                "text": "Markets should be eliminated—democratic planning can coordinate the economy better",
                "loadings": { "prty": 0.25, "eqlt": 0.15, "chng": 0.1 },
                "tags": ["state_socialism", "planning"]
            },
            {
                "value": 0.5,
                "text": "Worker-owned firms should compete in regulated markets, combining cooperation with competition",
                "loadings": { "prty": 0.15, "powr": 0.1 },
                "tags": ["market_socialism", "cooperative_market"]
            },
            {
                "value": 0.0,
                "text": "Markets should be heavily regulated, with key sectors under public ownership",
                "loadings": { "prty": 0.05, "wlfr": 0.1 },
                "tags": ["mixed_economy", "social_democratic"]
            },
            {
                "value": -0.5,
                "text": "Markets should be the primary mechanism, generating wealth to fund public services",
                "loadings": { "prty": -0.1, "wlfr": 0.05, "mns": -0.1 },
                "tags": ["pro_market_welfare", "nordic"]
            },
            {
                "value": -1.0,
                "text": "Markets are valuable in themselves as expressions of freedom—redistribution should be minimal",
                "loadings": { "prty": -0.2, "eqlt": -0.15, "lbrt": 0.1 },
                "tags": ["market_freedom", "classical_liberal"]
            }
        ],
        "distinguishes": ["State Socialism", "Market Socialism", "Democratic Socialism", "Social Democracy", "Nordic Model", "Classical Liberalism"]
    },
    {
        "id": 1090,
        "question": "How should political authority be organized?",
        "type": "mechanism",
        "reliability": 0.88,
        "trigger": { "axis": "powr", "threshold": 55, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "A visionary leader who can transform the nation, unconstrained by institutions",
                "loadings": { "powr": -0.3, "lbrt": -0.2, "chng": 0.15 },
                "tags": ["strongman", "charismatic_authority"]
            },
            {
                "value": 0.5,
                "text": "A strong elected executive with broad powers to implement the people's mandate",
                "loadings": { "powr": -0.15, "lbrt": -0.1, "popl": 0.1 },
                "tags": ["delegative_democracy", "elected_strongman"]
            },
            {
                "value": 0.0,
                "text": "Expert-led governance with democratic oversight and periodic elections",
                "loadings": { "popl": -0.15, "tech": 0.1 },
                "tags": ["technocracy", "expert_governance"]
            },
            {
                "value": -0.5,
                "text": "Strong democratic institutions with checks and balances limiting executive power",
                "loadings": { "lbrt": 0.1, "powr": 0.1, "mns": 0.05 },
                "tags": ["liberal_democracy", "separation_of_powers"]
            },
            {
                "value": -1.0,
                "text": "Highly decentralized power with most decisions made at the local level",
                "loadings": { "powr": 0.25, "lbrt": 0.15 },
                "tags": ["decentralist", "localist"]
            }
        ],
        "distinguishes": ["Fascism", "Social Authoritarianism", "Delegative Democracy", "Technocracy", "Liberalism", "Libertarian Socialism"]
    },
    {
        "id": 1091,
        "question": "What makes a government legitimate?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": { "axis": "lbrt", "threshold": 55, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Results—a government is legitimate if it delivers prosperity, stability, and national greatness",
                "loadings": { "lbrt": -0.15, "mns": -0.2, "popl": -0.1 },
                "tags": ["performance_legitimacy", "results_based"]
            },
            {
                "value": 0.5,
                "text": "Popular mandate—a government is legitimate if it won elections, even with concentrated power",
                "loadings": { "popl": 0.15, "powr": -0.1 },
                "tags": ["electoral_legitimacy", "majoritarian"]
            },
            {
                "value": 0.0,
                "text": "Competence—experts should govern because they know best how to solve problems",
                "loadings": { "popl": -0.2, "tech": 0.15 },
                "tags": ["technocratic_legitimacy", "epistemic"]
            },
            {
                "value": -0.5,
                "text": "Process—a government is legitimate if it follows constitutional procedures and protects rights",
                "loadings": { "lbrt": 0.15, "mns": 0.1 },
                "tags": ["procedural_legitimacy", "constitutional"]
            },
            {
                "value": -1.0,
                "text": "Ongoing consent—authority must be continuously validated through direct participation",
                "loadings": { "powr": 0.2, "popl": 0.15 },
                "tags": ["participatory_legitimacy", "direct_democracy"]
            }
        ],
        "distinguishes": ["Social Authoritarianism", "Delegative Democracy", "Right-Wing Populism", "Technocracy", "Liberalism", "Participism", "Deliberative Democracy"]
    },
    {
        "id": 1092,
        "question": "How should civil liberties be treated during national emergencies?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "lbrt", "threshold": 45, "direction": "low" },
        "options": [
            {
                "value": 1.0,
                "text": "Security comes first—leaders should do whatever is necessary to protect the nation",
                "loadings": { "lbrt": -0.25, "mns": -0.15, "powr": -0.1 },
                "tags": ["security_first", "authoritarian"]
            },
            {
                "value": 0.5,
                "text": "Temporary restrictions are acceptable if approved through democratic processes",
                "loadings": { "lbrt": -0.1, "mns": -0.1 },
                "tags": ["democratic_emergency", "militant_democracy"]
            },
            {
                "value": 0.0,
                "text": "Only very limited, specific restrictions with strong judicial oversight",
                "loadings": { "lbrt": 0.05, "mns": 0.1 },
                "tags": ["constrained_emergency", "rule_of_law"]
            },
            {
                "value": -0.5,
                "text": "Core rights should never be compromised, even in emergencies",
                "loadings": { "lbrt": 0.15, "mns": 0.15 },
                "tags": ["rights_absolutist", "civil_libertarian"]
            },
            {
                "value": -1.0,
                "text": "Emergencies are usually pretexts for power grabs—be deeply skeptical of all restrictions",
                "loadings": { "lbrt": 0.2, "powr": 0.1, "popl": 0.05 },
                "tags": ["anti_authoritarian", "libertarian"]
            }
        ],
        "distinguishes": ["Social Authoritarianism", "Conservatism", "Liberalism", "Civil Libertarianism", "Libertarianism"]
    },

    // ========================================
    // CENTRIST MECHANISM QUESTIONS
    // Captures nuanced and moderate positions
    // ========================================
    {
        "id": 1093,
        "question": "How do you think society should balance competing values?",
        "type": "mechanism",
        "reliability": 0.85,
        "trigger": null,
        "options": [
            {
                "value": 1.0,
                "text": "Some values are absolute and should never be compromised",
                "loadings": { "mns": 0.25 },
                "tags": ["principled", "absolutist"]
            },
            {
                "value": 0.5,
                "text": "Core values should be protected, but details can be negotiated",
                "loadings": { "mns": 0.1 },
                "tags": ["core_values", "flexible_details"]
            },
            {
                "value": 0.0,
                "text": "Most issues require finding middle ground between competing goods",
                "loadings": { "mns": -0.15 },
                "tags": ["centrist", "compromiser"]
            },
            {
                "value": -0.5,
                "text": "Context matters—different situations call for different priorities",
                "loadings": { "mns": -0.1 },
                "tags": ["pragmatic", "contextual"]
            },
            {
                "value": -1.0,
                "text": "I'm genuinely uncertain about how to balance these tensions",
                "loadings": {},
                "tags": ["uncertain", "undecided"]
            }
        ],
        "distinguishes": ["Moderate", "Centrist", "Radical Center", "Third Way", "Pragmatism"]
    },
    {
        "id": 1094,
        "question": "When do you think significant change is appropriate?",
        "type": "mechanism",
        "reliability": 0.84,
        "trigger": { "axis": "chng", "threshold": 65, "direction": "low", "minimum": 35 },
        "options": [
            {
                "value": 1.0,
                "text": "Only when there's overwhelming evidence it's needed",
                "loadings": { "chng": -0.2, "mns": -0.1 },
                "tags": ["cautious", "evidence_based"]
            },
            {
                "value": 0.5,
                "text": "When problems persist despite attempts at reform",
                "loadings": { "chng": -0.05 },
                "tags": ["responsive", "failure_triggered"]
            },
            {
                "value": 0.0,
                "text": "When most people are ready for change",
                "loadings": { "popl": 0.1 },
                "tags": ["democratic_change", "consensus_driven"]
            },
            {
                "value": -0.5,
                "text": "When existing institutions have clearly failed",
                "loadings": { "chng": 0.1 },
                "tags": ["institutional_failure", "transformative"]
            },
            {
                "value": -1.0,
                "text": "Continuous small changes are better than occasional big ones",
                "loadings": { "chng": -0.15, "mns": -0.15 },
                "tags": ["gradualist", "incremental"]
            }
        ],
        "distinguishes": ["Conservatism", "Traditional Conservatism", "Progressive Liberalism", "Reformism", "Radical Center"]
    }
];

// Export for use in quiz
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mechanismQuestions;
}
