/*
 * Ideology Matrix - Questions with Psychometric Metadata
 *
 * Enhanced Structure:
 * - id: Unique question identifier
 * - question: The question text
 * - reliability: Discrimination coefficient (0-1) - how well this question separates positions
 * - loadings: Axis loadings with type classification
 *   - type: "primary" (full weight), "secondary" (0.6x), "tertiary" (0.3x)
 *   - weight: Base effect magnitude (typically 5-10)
 * - validationPair: Question ID that should correlate (positive) or anti-correlate (negative ID)
 *
 * 16 Axes:
 * eqlt: Equality (Free Market ↔ Economic Equality)
 * lbrt: Liberty (State Authority ↔ Civil Liberty)
 * prog: Progress (Traditional ↔ Progressive)
 * idnt: Identity (Nationalist ↔ Cosmopolitan)
 * popl: Populism (Pluralist ↔ Populist)
 * intv: Intervention (Non-interventionist ↔ Interventionist)
 * ecol: Ecology (Anthropocentric ↔ Ecocentric)
 * powr: Power (Concentrated ↔ Distributed)
 * chng: Change (Gradualist ↔ Revolutionary)
 * hmnn: Human Nature (Constrained ↔ Unconstrained)
 * mns:  Means (Pragmatic ↔ Principled)
 * prty: Property (Private ↔ Commons)
 * scr:  Secularism (Religious ↔ Secular)
 * tech: Technology (Skeptic ↔ Enthusiast)
 * wlfr: Welfare (Targeted ↔ Universal)
 * intg: Integration (Assimilationist ↔ Pluralist)
 */

questions = [
    // ========================================
    // EQUALITY (Economic Left-Right)
    // ========================================
    {
        "id": 1,
        "question": "Government should redistribute wealth from higher earners to lower earners.",
        "reliability": 0.92,
        "phase1Priority": 1,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 2
    },
    {
        "id": 2,
        "question": "The free market is the best way to allocate resources in society.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "prty": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -1
    },
    {
        "id": 3,
        "question": "Healthcare should be provided by the government to all citizens.",
        "reliability": 0.88,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 10, "type": "primary" },
            "prty": { "weight": 10, "type": "primary" }
        },
        "validationPair": 15
    },
    {
        "id": 4,
        "question": "Minimum wage laws do more harm than good.",
        "reliability": 0.85,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "wlfr": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 5,
        "question": "Workers should own and control the companies they work for.",
        "reliability": 0.87,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "prty": { "weight": 10, "type": "primary" },
            "powr": { "weight": 5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 6,
        "question": "Inheritance taxes should be high to prevent wealthy families from passing fortunes down for generations.",
        "reliability": 0.83,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 7,
        "question": "Private property rights are fundamental to a free society.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "prty": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "tertiary" }
        },
        "validationPair": -5
    },
    {
        "id": 8,
        "question": "Essential services like water, electricity, and internet should be publicly owned.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "wlfr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 9,
        "question": "Economic inequality is acceptable if everyone has equal opportunity.",
        "reliability": 0.84,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "prty": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 10,
        "question": "The government should guarantee a basic income for all citizens.",
        "reliability": 0.89,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "hmnn": { "weight": 5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 3
    },
    {
        "id": 11,
        "question": "Corporations should be free to operate with minimal government regulation.",
        "reliability": 0.88,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "prty": { "weight": -8, "type": "secondary" },
            "ecol": { "weight": -5, "type": "secondary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -12
    },
    {
        "id": 12,
        "question": "Labor unions are essential for protecting workers' interests.",
        "reliability": 0.85,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "popl": { "weight": 5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -11
    },
    {
        "id": 13,
        "question": "Progressive taxation, where the rich pay higher rates, is fair.",
        "reliability": 0.87,
        "loadings": {
            "eqlt": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 1
    },
    {
        "id": 14,
        "question": "Competition between private companies leads to better outcomes than government provision.",
        "reliability": 0.86,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "prty": { "weight": -10, "type": "primary" },
            "wlfr": { "weight": -5, "type": "secondary" }
        },
        "validationPair": 2
    },
    {
        "id": 15,
        "question": "Housing should be treated as a human right, not a commodity.",
        "reliability": 0.88,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 3
    },

    // ========================================
    // LIBERTY (Civil Liberties)
    // ========================================
    {
        "id": 16,
        "question": "Government surveillance of citizens is acceptable to prevent crime and terrorism.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": -24
    },
    {
        "id": 17,
        "question": "People should be free to say anything, even if it offends others.",
        "reliability": 0.89,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "mns": { "weight": 8, "type": "secondary" }
        },
        "validationPair": -18
    },
    {
        "id": 18,
        "question": "The government should have the power to censor media that spreads dangerous misinformation.",
        "reliability": 0.88,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -17
    },
    {
        "id": 19,
        "question": "Drug use should be a personal choice, not a criminal matter.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "prog": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 29
    },
    {
        "id": 20,
        "question": "A national ID system using fingerprints or facial recognition would make society safer.",
        "reliability": 0.85,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "powr": { "weight": -5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" },
            "intg": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 21,
        "question": "Citizens should be able to own firearms with minimal restrictions.",
        "reliability": 0.87,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 22,
        "question": "The death penalty is an acceptable form of punishment for the most serious crimes.",
        "reliability": 0.86,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -10, "type": "primary" },
            "prog": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 23,
        "question": "Privacy is a fundamental right that should be protected even at the cost of security.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "primary" }
        },
        "validationPair": -16
    },
    {
        "id": 24,
        "question": "The police should have broad powers to maintain public order.",
        "reliability": 0.88,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "powr": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" },
            "intg": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -16
    },
    {
        "id": 25,
        "question": "People should be free to end their own lives with medical assistance.",
        "reliability": 0.85,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "prog": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 26,
        "question": "Mandatory military or civil service builds character and national unity.",
        "reliability": 0.83,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" },
            "intg": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 27,
        "question": "The government should be able to limit who can have children.",
        "reliability": 0.82,
        "loadings": {
            "lbrt": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -10, "type": "primary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 28,
        "question": "Victimless crimes should not be crimes at all.",
        "reliability": 0.88,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "mns": { "weight": 8, "type": "secondary" },
            "prog": { "weight": 3, "type": "tertiary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 19
    },
    {
        "id": 29,
        "question": "Strong encryption that the government cannot break should be legal.",
        "reliability": 0.84,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "powr": { "weight": 5, "type": "secondary" },
            "tech": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 23
    },

    // ========================================
    // PROGRESS (Cultural Values)
    // ========================================
    {
        "id": 30,
        "question": "Traditional gender roles are natural and should be encouraged.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "scr": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "intg": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -43
    },
    {
        "id": 31,
        "question": "Religion should play no role in government or public policy.",
        "reliability": 0.93,
        "phase1Priority": 1,
        "loadings": {
            "scr": { "weight": 10, "type": "primary" },
            "prog": { "weight": 8, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -44
    },
    {
        "id": 32,
        "question": "Marriage should only be between a man and a woman.",
        "reliability": 0.92,
        "phase1Priority": 1,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "scr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": -37
    },
    {
        "id": 33,
        "question": "Society would be better off if we returned to traditional values.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "chng": { "weight": -10, "type": "primary" },
            "scr": { "weight": -5, "type": "secondary" },
            "idnt": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -43
    },
    {
        "id": 34,
        "question": "Sex education should be comprehensive and include information about contraception.",
        "reliability": 0.86,
        "loadings": {
            "prog": { "weight": 10, "type": "primary" },
            "scr": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 35,
        "question": "Abortion should be legal and accessible.",
        "reliability": 0.93,
        "phase1Priority": 1,
        "loadings": {
            "prog": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 36,
        "question": "The nuclear family is the foundation of a healthy society.",
        "reliability": 0.85,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "scr": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 30
    },
    {
        "id": 37,
        "question": "Gender is a spectrum, not a binary.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "prog": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": 10, "type": "primary" },
            "scr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -32
    },
    {
        "id": 38,
        "question": "Religious institutions provide essential moral guidance for society.",
        "reliability": 0.89,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -31
    },
    {
        "id": 39,
        "question": "Schools should teach children to respect and take pride in their nation's traditions.",
        "reliability": 0.84,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 40,
        "question": "Science and reason should guide society more than tradition or religion.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "scr": { "weight": 10, "type": "primary" },
            "prog": { "weight": 8, "type": "secondary" },
            "tech": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 31
    },
    {
        "id": 41,
        "question": "Sex work between consenting adults should be legal.",
        "reliability": 0.87,
        "loadings": {
            "prog": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 19
    },
    {
        "id": 42,
        "question": "Children do best when raised by a mother and a father.",
        "reliability": 0.86,
        "loadings": {
            "prog": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 36
    },
    {
        "id": 43,
        "question": "Cultural change over the past few decades has generally been for the better.",
        "reliability": 0.88,
        "loadings": {
            "prog": { "weight": 10, "type": "primary" },
            "chng": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": 3, "type": "tertiary" },
            "intg": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -33
    },

    // ========================================
    // IDENTITY (Nationalism vs Cosmopolitanism)
    // ========================================
    {
        "id": 44,
        "question": "Immigration enriches our society and should be encouraged.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "intg": { "weight": 10, "type": "primary" },
            "prog": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -45
    },
    {
        "id": 45,
        "question": "Citizens of my country should be prioritized over foreigners in all matters.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "wlfr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -44
    },
    {
        "id": 46,
        "question": "International organizations like the UN undermine the sovereignty of individual countries.",
        "reliability": 0.86,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "popl": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -47
    },
    {
        "id": 47,
        "question": "A single world government would be better than the current system of independent nations.",
        "reliability": 0.85,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "chng": { "weight": 10, "type": "secondary" },
            "popl": { "weight": -5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -46
    },
    {
        "id": 48,
        "question": "Immigrants should be required to assimilate to the culture of their new country.",
        "reliability": 0.89,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -8, "type": "secondary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -44
    },
    {
        "id": 49,
        "question": "I feel more connected to humanity as a whole than to my own nation.",
        "reliability": 0.88,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "intg": { "weight": 8, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 56
    },
    {
        "id": 50,
        "question": "The government should limit imports to protect local businesses and jobs from foreign competition.",
        "reliability": 0.83,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "popl": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 51,
        "question": "National borders are largely arbitrary and should be more open.",
        "reliability": 0.89,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "intg": { "weight": 8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 44
    },
    {
        "id": 52,
        "question": "My country's culture is superior to most others.",
        "reliability": 0.87,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 53,
        "question": "Foreign aid is a waste of taxpayer money.",
        "reliability": 0.82,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "wlfr": { "weight": -5, "type": "secondary" },
            "popl": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 54,
        "question": "Multinational corporations benefit the world by spreading wealth and opportunity.",
        "reliability": 0.80,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": -5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 55,
        "question": "Preserving national identity and heritage is important.",
        "reliability": 0.86,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "prog": { "weight": -3, "type": "tertiary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -51
    },
    {
        "id": 56,
        "question": "We should think of ourselves as citizens of the world first and foremost.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "intg": { "weight": 8, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 49
    },

    // ========================================
    // POPULISM (Anti-elite vs Pluralist)
    // ========================================
    {
        "id": 57,
        "question": "The will of the people should always prevail over the judgments of experts.",
        "reliability": 0.88,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "powr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" },
            "tech": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -59
    },
    {
        "id": 58,
        "question": "Most politicians prioritize special interests over ordinary citizens.",
        "reliability": 0.85,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 61
    },
    {
        "id": 59,
        "question": "Difficult government decisions should be made by trained specialists rather than voters.",
        "reliability": 0.87,
        "loadings": {
            "popl": { "weight": -10, "type": "primary" },
            "powr": { "weight": -5, "type": "secondary" },
            "tech": { "weight": 5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -57
    },
    {
        "id": 60,
        "question": "The mainstream media cannot be trusted to tell the truth.",
        "reliability": 0.83,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 64
    },
    {
        "id": 61,
        "question": "There is a fundamental divide between ordinary people and the corrupt elite.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "chng": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 58
    },
    {
        "id": 62,
        "question": "Citizens voting directly on laws is better than electing politicians to vote on our behalf.",
        "reliability": 0.86,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "powr": { "weight": 10, "type": "primary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 63,
        "question": "Central banks and courts should be independent from direct political control.",
        "reliability": 0.85,
        "loadings": {
            "popl": { "weight": -10, "type": "primary" },
            "powr": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -62
    },
    {
        "id": 64,
        "question": "Academic and scientific institutions have become too politicized to trust.",
        "reliability": 0.81,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "tech": { "weight": -5, "type": "secondary" },
            "ecol": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 60
    },
    {
        "id": 65,
        "question": "We need leaders who will shake up the system, even if they break some rules.",
        "reliability": 0.87,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "chng": { "weight": 10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 66,
        "question": "Compromise between different political groups is essential for good governance.",
        "reliability": 0.84,
        "loadings": {
            "popl": { "weight": -10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" },
            "intg": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 67,
        "question": "The economic system is rigged in favor of the wealthy and powerful.",
        "reliability": 0.86,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "prty": { "weight": 3, "type": "tertiary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 61
    },
    {
        "id": 68,
        "question": "A strong leader who truly represents the people is better than slow democratic processes.",
        "reliability": 0.89,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },

    // ========================================
    // INTERVENTION (Foreign Policy)
    // ========================================
    {
        "id": 69,
        "question": "Military intervention is sometimes necessary to protect human rights abroad.",
        "reliability": 0.88,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" },
            "idnt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -70
    },
    {
        "id": 70,
        "question": "My country should focus on its own problems rather than getting involved in foreign conflicts.",
        "reliability": 0.87,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -69
    },
    {
        "id": 71,
        "question": "A strong military is essential for national security.",
        "reliability": 0.85,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -73
    },
    {
        "id": 72,
        "question": "We should help remove dictators in other countries and replace them with democratic governments.",
        "reliability": 0.84,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 73,
        "question": "Defense spending should be significantly reduced.",
        "reliability": 0.86,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -71
    },
    {
        "id": 74,
        "question": "Sanctions and diplomatic pressure are preferable to military action.",
        "reliability": 0.82,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "mns": { "weight": -3, "type": "tertiary" },
            "hmnn": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 75,
        "question": "My country has a responsibility to promote democracy around the world.",
        "reliability": 0.85,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 69
    },
    {
        "id": 76,
        "question": "Joining military alliances makes my country safer.",
        "reliability": 0.83,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "idnt": { "weight": 5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 77,
        "question": "Wars only benefit arms manufacturers and the political elite.",
        "reliability": 0.84,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "popl": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 78,
        "question": "It is not our responsibility to solve other countries' problems.",
        "reliability": 0.86,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 70
    },
    {
        "id": 79,
        "question": "Preemptive military strikes can be justified to prevent future threats.",
        "reliability": 0.85,
        "loadings": {
            "intv": { "weight": 10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 80,
        "question": "Peace should be pursued at almost any cost.",
        "reliability": 0.84,
        "loadings": {
            "intv": { "weight": -10, "type": "primary" },
            "mns": { "weight": 10, "type": "primary" },
            "idnt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },

    // ========================================
    // ECOLOGY (Environmental Values)
    // ========================================
    {
        "id": 81,
        "question": "Protecting the environment should be a top priority, even at the cost of economic growth.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" },
            "prty": { "weight": 3, "type": "tertiary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -84
    },
    {
        "id": 82,
        "question": "Climate change is an existential threat that requires immediate, drastic action.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "chng": { "weight": 10, "type": "secondary" },
            "tech": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 81
    },
    {
        "id": 83,
        "question": "Humans have the right to use natural resources as they see fit.",
        "reliability": 0.88,
        "loadings": {
            "ecol": { "weight": -10, "type": "primary" },
            "prty": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -85
    },
    {
        "id": 84,
        "question": "Economic development should not be restricted by environmental concerns.",
        "reliability": 0.89,
        "loadings": {
            "ecol": { "weight": -10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" },
            "prty": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -81
    },
    {
        "id": 85,
        "question": "Nature is valuable in itself, not just for what humans can get from it.",
        "reliability": 0.87,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "primary" },
            "prty": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -83
    },
    {
        "id": 86,
        "question": "We should transition away from fossil fuels as quickly as possible.",
        "reliability": 0.88,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 82
    },
    {
        "id": 87,
        "question": "Environmental regulations often go too far and hurt businesses unnecessarily.",
        "reliability": 0.86,
        "loadings": {
            "ecol": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -5, "type": "secondary" },
            "prty": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -81
    },
    {
        "id": 88,
        "question": "Future generations have an equal right to a clean environment as we do.",
        "reliability": 0.89,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 85
    },
    {
        "id": 89,
        "question": "Technology will solve environmental problems without requiring major lifestyle changes.",
        "reliability": 0.85,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "ecol": { "weight": -8, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 90,
        "question": "Eating less meat is an important way to reduce environmental impact.",
        "reliability": 0.84,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "chng": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 91,
        "question": "Animals have rights that should be legally protected.",
        "reliability": 0.86,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "secondary" },
            "prog": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 85
    },
    {
        "id": 92,
        "question": "Nuclear energy is an important part of addressing climate change.",
        "reliability": 0.82,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "ecol": { "weight": 5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 93,
        "question": "Population growth is a major environmental problem.",
        "reliability": 0.80,
        "loadings": {
            "ecol": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },

    // ========================================
    // POWER (Democratic Distribution)
    // ========================================
    {
        "id": 94,
        "question": "Power should be decentralized and held at the most local level possible.",
        "reliability": 0.89,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -95
    },
    {
        "id": 95,
        "question": "A country needs a strong central authority to function effectively.",
        "reliability": 0.88,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -94
    },
    {
        "id": 96,
        "question": "Citizens should be able to vote directly on major policy decisions.",
        "reliability": 0.87,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "popl": { "weight": 10, "type": "primary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 62
    },
    {
        "id": 97,
        "question": "Representative democracy is preferable to direct democracy.",
        "reliability": 0.83,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "popl": { "weight": -10, "type": "primary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -96
    },
    {
        "id": 98,
        "question": "Dividing power between national and regional governments helps protect against tyranny.",
        "reliability": 0.85,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 94
    },
    {
        "id": 99,
        "question": "Some decisions require unified national action, not local fragmentation.",
        "reliability": 0.84,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 100,
        "question": "Checks and balances between branches of government are essential.",
        "reliability": 0.88,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 101,
        "question": "Government efficiency is more important than democratic processes.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -10, "type": "primary" },
            "mns": { "weight": -10, "type": "primary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 102,
        "question": "Communities should have more say in decisions that affect them.",
        "reliability": 0.86,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 94
    },
    {
        "id": 103,
        "question": "Constitutional rights should be protected even if most people vote against them.",
        "reliability": 0.85,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "popl": { "weight": -5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 104,
        "question": "Single-party rule can be effective if the party represents the people's interests.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -10, "type": "primary" },
            "mns": { "weight": -8, "type": "secondary" },
            "chng": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -100
    },
    {
        "id": 105,
        "question": "Workplace democracy, where employees vote on company decisions, should be more common.",
        "reliability": 0.85,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "prty": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 5
    },

    // ========================================
    // CHANGE (Pace of Reform)
    // ========================================
    {
        "id": 106,
        "question": "Radical change is sometimes necessary to fix deep-rooted problems in society.",
        "reliability": 0.88,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": 5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -107
    },
    {
        "id": 107,
        "question": "Incremental reform is usually more effective than sweeping change.",
        "reliability": 0.86,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -106
    },
    {
        "id": 108,
        "question": "Revolution is sometimes the only way to achieve justice.",
        "reliability": 0.89,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "primary" },
            "popl": { "weight": 8, "type": "secondary" },
            "eqlt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 106
    },
    {
        "id": 109,
        "question": "Stability and continuity are more valuable than rapid progress.",
        "reliability": 0.87,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "prog": { "weight": -5, "type": "secondary" },
            "scr": { "weight": -3, "type": "tertiary" },
            "tech": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -106
    },
    {
        "id": 110,
        "question": "Existing institutions have accumulated wisdom that we should respect.",
        "reliability": 0.84,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "popl": { "weight": -5, "type": "secondary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 63
    },
    {
        "id": 111,
        "question": "Sometimes you have to break the system to build something better.",
        "reliability": 0.87,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 108
    },
    {
        "id": 112,
        "question": "Caution and careful planning should guide any social change.",
        "reliability": 0.83,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "mns": { "weight": -3, "type": "tertiary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 107
    },
    {
        "id": 113,
        "question": "Tradition constrains us from making necessary progress.",
        "reliability": 0.86,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "prog": { "weight": 10, "type": "primary" },
            "scr": { "weight": 5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -109
    },

    // ========================================
    // HUMAN NATURE
    // ========================================
    {
        "id": 114,
        "question": "Human nature is fundamentally selfish, and society must account for this.",
        "reliability": 0.88,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -5, "type": "secondary" },
            "wlfr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -115
    },
    {
        "id": 115,
        "question": "People are inherently good and will generally do the right thing if given the opportunity.",
        "reliability": 0.87,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -114
    },
    {
        "id": 116,
        "question": "Social problems are mainly caused by bad institutions, not bad people.",
        "reliability": 0.89,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "chng": { "weight": 5, "type": "secondary" },
            "prty": { "weight": 3, "type": "tertiary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -117
    },
    {
        "id": 117,
        "question": "Crime is primarily the result of individual moral failing, not social conditions.",
        "reliability": 0.86,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "wlfr": { "weight": -5, "type": "secondary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -116
    },
    {
        "id": 118,
        "question": "With the right education and environment, most human problems can be solved.",
        "reliability": 0.88,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 116
    },
    {
        "id": 119,
        "question": "Human behavior is shaped more by biology than by culture or environment.",
        "reliability": 0.85,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "prog": { "weight": -5, "type": "secondary" },
            "intg": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 120,
        "question": "Inequality is a natural and inevitable part of human society.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -10, "type": "primary" },
            "prty": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -1
    },
    {
        "id": 121,
        "question": "Society can be fundamentally reorganized to eliminate most suffering.",
        "reliability": 0.87,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "chng": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 106
    },

    // ========================================
    // MEANS (Pragmatism vs Principle)
    // ========================================
    {
        "id": 122,
        "question": "It is better to achieve partial success through compromise than to fail pursuing perfection.",
        "reliability": 0.86,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "chng": { "weight": -5, "type": "secondary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -126
    },
    {
        "id": 123,
        "question": "Some things are simply right or wrong, regardless of the consequences.",
        "reliability": 0.88,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -124
    },
    {
        "id": 124,
        "question": "The ends can justify the means if the cause is just.",
        "reliability": 0.87,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "chng": { "weight": 5, "type": "secondary" },
            "intv": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -123
    },
    {
        "id": 125,
        "question": "Following rules and procedures is important even when they seem inefficient.",
        "reliability": 0.83,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "chng": { "weight": -5, "type": "secondary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 126,
        "question": "Principles without practical results are worthless.",
        "reliability": 0.84,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "tech": { "weight": 3, "type": "tertiary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -122
    },
    {
        "id": 127,
        "question": "Moral consistency is more important than political effectiveness.",
        "reliability": 0.86,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 123
    },
    {
        "id": 128,
        "question": "What works in practice matters more than theoretical purity.",
        "reliability": 0.85,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 126
    },
    {
        "id": 129,
        "question": "Rights should never be violated, even for the greater good.",
        "reliability": 0.89,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 10, "type": "primary" },
            "intv": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -124
    },

    // ========================================
    // PROPERTY (Ownership Models)
    // ========================================
    {
        "id": 130,
        "question": "Common resources like land and water should be managed collectively, not privately owned.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "ecol": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -7
    },
    {
        "id": 131,
        "question": "Copyright and patent laws should be weaker or abolished.",
        "reliability": 0.84,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" },
            "eqlt": { "weight": 3, "type": "tertiary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 132,
        "question": "Personal ownership of property creates responsibility and care for resources.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "ecol": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 7
    },
    {
        "id": 134,
        "question": "There are some things that should never be bought or sold.",
        "reliability": 0.83,
        "loadings": {
            "prty": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 10, "type": "primary" },
            "ecol": { "weight": 3, "type": "tertiary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 135,
        "question": "Open source and public domain resources benefit society more than proprietary ones.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 131
    },
    {
        "id": 136,
        "question": "Land ownership is a fundamental right that should not be restricted.",
        "reliability": 0.88,
        "loadings": {
            "prty": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -130
    },
    {
        "id": 137,
        "question": "Community ownership leads to better stewardship than individual ownership.",
        "reliability": 0.84,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": 5, "type": "secondary" },
            "ecol": { "weight": 3, "type": "tertiary" },
            "powr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -132
    },

    // ========================================
    // SECULARISM
    // ========================================
    {
        "id": 138,
        "question": "Religious values should inform laws and public policy.",
        "reliability": 0.92,
        "phase1Priority": 1,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": -3, "type": "tertiary" },
            "intg": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -139
    },
    {
        "id": 139,
        "question": "Government should be completely neutral between religious and secular worldviews.",
        "reliability": 0.89,
        "loadings": {
            "scr": { "weight": 10, "type": "primary" },
            "intg": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -138
    },
    {
        "id": 140,
        "question": "Prayer and religious activities have a place in public schools.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" }
        },
        "validationPair": -31
    },
    {
        "id": 141,
        "question": "Morality does not require religious belief.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "scr": { "weight": 10, "type": "primary" },
            "prog": { "weight": 8, "type": "secondary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 31
    },
    {
        "id": 142,
        "question": "Religious organizations should receive tax exemptions.",
        "reliability": 0.82,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 143,
        "question": "A society needs shared religious or spiritual values to hold it together.",
        "reliability": 0.88,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "intg": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" }
        },
        "validationPair": 38
    },
    {
        "id": 144,
        "question": "Religious dress and symbols should be permitted in all public settings.",
        "reliability": 0.84,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "intg": { "weight": 10, "type": "primary" },
            "scr": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 145,
        "question": "The decline of religion has been harmful to society.",
        "reliability": 0.87,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "tech": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -141
    },

    // ========================================
    // TECHNOLOGY
    // ========================================
    {
        "id": 146,
        "question": "Technological progress is generally beneficial for humanity.",
        "reliability": 0.88,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": 5, "type": "secondary" },
            "prog": { "weight": 3, "type": "tertiary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -147
    },
    {
        "id": 147,
        "question": "Artificial intelligence poses serious risks that we may not be able to control.",
        "reliability": 0.85,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "mns": { "weight": 3, "type": "tertiary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -146
    },
    {
        "id": 148,
        "question": "Automation and technology will create more problems than they solve.",
        "reliability": 0.86,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "popl": { "weight": 5, "type": "secondary" },
            "ecol": { "weight": 3, "type": "tertiary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -146
    },
    {
        "id": 149,
        "question": "We should embrace genetic engineering and human enhancement technologies.",
        "reliability": 0.89,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "prog": { "weight": 10, "type": "primary" },
            "chng": { "weight": 8, "type": "secondary" },
            "scr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 146
    },
    {
        "id": 150,
        "question": "Traditional ways of living are often healthier than modern technological life.",
        "reliability": 0.85,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "prog": { "weight": -10, "type": "primary" },
            "chng": { "weight": -8, "type": "secondary" },
            "ecol": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -149
    },
    {
        "id": 151,
        "question": "Social media has done more harm than good to society.",
        "reliability": 0.82,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "popl": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 152,
        "question": "Space exploration and colonization should be a priority for humanity.",
        "reliability": 0.86,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "chng": { "weight": 8, "type": "secondary" },
            "scr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 146
    },
    {
        "id": 153,
        "question": "Digital privacy should be protected even if it makes law enforcement harder.",
        "reliability": 0.87,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "mns": { "weight": 10, "type": "primary" },
            "tech": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 23
    },

    // ========================================
    // WELFARE (Universalism vs Targeting)
    // ========================================
    {
        "id": 154,
        "question": "Social programs should be available to everyone, not just the poor.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "prty": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -158
    },
    {
        "id": 155,
        "question": "Welfare should be conditional on recipients working or seeking work.",
        "reliability": 0.88,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -10, "type": "primary" }
        },
        "validationPair": -154
    },
    {
        "id": 156,
        "question": "The government providing free services like healthcare and education is better than giving people money directly.",
        "reliability": 0.84,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "prty": { "weight": 10, "type": "primary" }
        },
        "validationPair": 3
    },
    {
        "id": 157,
        "question": "Aid should only go to those who truly need it, not to everyone.",
        "reliability": 0.87,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -154
    },
    {
        "id": 158,
        "question": "Public education should be free at all levels, including university.",
        "reliability": 0.89,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 10, "type": "primary" },
            "scr": { "weight": 3, "type": "tertiary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 154
    },
    {
        "id": 159,
        "question": "Requiring people to prove they are poor enough to qualify for benefits creates unnecessary paperwork and shame.",
        "reliability": 0.85,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "hmnn": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 154
    },
    {
        "id": 160,
        "question": "People should be responsible for their own retirement savings.",
        "reliability": 0.88,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -8, "type": "secondary" },
            "prty": { "weight": -3, "type": "tertiary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -10
    },
    {
        "id": 161,
        "question": "Universal programs build a stronger sense of shared community than programs that only help the poor.",
        "reliability": 0.86,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "intg": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 154
    },

    // ========================================
    // INTEGRATION (Multiculturalism)
    // ========================================
    {
        "id": 162,
        "question": "A common national culture is more important than preserving minority cultures.",
        "reliability": 0.90,
        "phase1Priority": 1,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -8, "type": "secondary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -163
    },
    {
        "id": 163,
        "question": "Minority languages and cultures should be actively supported by the state.",
        "reliability": 0.88,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "prog": { "weight": 5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -162
    },
    {
        "id": 164,
        "question": "Schools should emphasize our shared national identity over group identities.",
        "reliability": 0.87,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -10, "type": "secondary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 39
    },
    {
        "id": 165,
        "question": "Diversity of cultures and perspectives strengthens society.",
        "reliability": 0.91,
        "phase1Priority": 1,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "idnt": { "weight": 8, "type": "secondary" },
            "hmnn": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 44
    },
    {
        "id": 166,
        "question": "People should primarily identify with their nation rather than their ethnic or cultural group.",
        "reliability": 0.86,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -8, "type": "secondary" },
            "chng": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -165
    },
    {
        "id": 167,
        "question": "Religious and cultural practices should be accommodated in public institutions.",
        "reliability": 0.85,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "powr": { "weight": 3, "type": "tertiary" },
            "scr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": 144
    },
    {
        "id": 168,
        "question": "Neighborhoods where one ethnic group dominates are signs of failed integration.",
        "reliability": 0.84,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "idnt": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -163
    },
    {
        "id": 169,
        "question": "There is no single correct way to be a citizen of this country.",
        "reliability": 0.88,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" },
            "prog": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 165
    },

    // ========================================
    // COVERAGE GAP QUESTIONS (170-177)
    // Targeting weak axis directions
    // ========================================

    // SECULARISM - Positive Direction (secular)
    // Needed: 13 ideologies require scr >= 90
    {
        "id": 171,
        "question": "Religious organizations should receive no special legal exemptions or tax benefits.",
        "reliability": 0.88,
        "loadings": {
            "scr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -62
    },

    // POPULISM - Negative Direction (elite/technocratic)
    // Needed: 6 ideologies require popl <= 10
    {
        "id": 173,
        "question": "The average citizen lacks the knowledge to make informed decisions about economic and foreign policy.",
        "reliability": 0.85,
        "loadings": {
            "popl": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -8, "type": "secondary" },
            "powr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -70
    },

    // WELFARE - Negative Direction (targeted/minimal)
    // Needed: 8 ideologies require wlfr <= 10
    {
        "id": 174,
        "question": "Private charity and voluntary mutual aid should replace government welfare programs.",
        "reliability": 0.89,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -8, "type": "secondary" },
            "powr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -10
    },
    {
        "id": 175,
        "question": "Government assistance programs create dependency and discourage personal responsibility.",
        "reliability": 0.86,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -8, "type": "secondary" },
            "eqlt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": -3
    },

    // TECHNOLOGY - Negative Direction (skeptic/primitivist)
    // Needed: Anarcho-Primitivism and tech-skeptic ideologies
    {
        "id": 176,
        "question": "Industrial technology has fundamentally damaged human communities and our connection to nature.",
        "reliability": 0.84,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "ecol": { "weight": 8, "type": "secondary" },
            "chng": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -91
    },
    {
        "id": 177,
        "question": "Society would be better off returning to simpler, pre-industrial ways of living.",
        "reliability": 0.82,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" },
            "chng": { "weight": 5, "type": "secondary" },
            "ecol": { "weight": 5, "type": "tertiary" }
        },
        "validationPair": 176
    },

    // ========================================
    // IDEOLOGY CLUSTER DISTINGUISHING QUESTIONS (178-189)
    // Plain English questions to separate similar ideologies
    // ========================================

    // MARXIST VARIANT DISTINGUISHERS
    // Separates: Trotskyism, Orthodox Marxism, Left Communism, Bordigism, Luxemburgism
    {
        "id": 178,
        "question": "Major social change needs to happen across many countries at once, not just in one country first.",
        "reliability": 0.83,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "chng": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 179,
        "question": "Ordinary working people will naturally organize themselves when conditions are right, without needing a dedicated leadership group to guide them.",
        "reliability": 0.85,
        "loadings": {
            "popl": { "weight": 10, "type": "primary" },
            "powr": { "weight": 8, "type": "secondary" },
            "hmnn": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -180
    },
    {
        "id": 180,
        "question": "A small, disciplined group of dedicated activists is essential to lead society toward meaningful change.",
        "reliability": 0.84,
        "loadings": {
            "popl": { "weight": -10, "type": "primary" },
            "powr": { "weight": -8, "type": "secondary" },
            "hmnn": { "weight": -5, "type": "secondary" }
        },
        "validationPair": -179
    },
    {
        "id": 181,
        "question": "Working within existing organizations like unions and political parties, even imperfect ones, is a valid path to change.",
        "reliability": 0.82,
        "loadings": {
            "chng": { "weight": -8, "type": "primary" },
            "mns": { "weight": -8, "type": "primary" },
            "powr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 182,
        "question": "History moves through predictable stages that cannot be skipped, and we must wait for the right conditions before major change is possible.",
        "reliability": 0.81,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },

    // ANARCHIST VARIANT DISTINGUISHERS
    // Separates: Anarcho-Communism, Mutualism, Anarcho-Syndicalism, Individualist Anarchism, Anarcho-Pacifism
    {
        "id": 183,
        "question": "Even without government, markets where people freely buy and sell goods would be valuable for society.",
        "reliability": 0.86,
        "loadings": {
            "eqlt": { "weight": -10, "type": "primary" },
            "prty": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 184,
        "question": "Workplace unions and worker organizations should be the main building blocks of how society is structured.",
        "reliability": 0.84,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "prty": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 12
    },
    {
        "id": 185,
        "question": "Violence is never acceptable as a means of achieving political change, even against deeply unjust systems.",
        "reliability": 0.88,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "chng": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -186
    },
    {
        "id": 186,
        "question": "Sometimes force is necessary to overthrow unjust systems that will never give up power peacefully.",
        "reliability": 0.87,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "chng": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -185
    },
    {
        "id": 187,
        "question": "My individual freedom to live as I choose matters more than being part of a tight-knit community.",
        "reliability": 0.85,
        "loadings": {
            "lbrt": { "weight": 10, "type": "primary" },
            "intg": { "weight": -5, "type": "secondary" },
            "prty": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 188,
        "question": "Small, self-sufficient local communities are better than large, interconnected societies.",
        "reliability": 0.83,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "idnt": { "weight": -8, "type": "secondary" },
            "tech": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 189,
        "question": "All goods and resources should be shared freely based on need, with no buying or selling.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -183
    },

    // ========================================
    // HUMAN NATURE (hmnn) - Coverage Enhancement
    // ========================================
    {
        "id": 190,
        "question": "Most people lack the knowledge or capacity to make informed decisions about complex policy issues.",
        "reliability": 0.85,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "popl": { "weight": -8, "type": "secondary" },
            "powr": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 191,
        "question": "People will contribute fairly to collective projects if they feel genuine ownership and aren't afraid others will shirk.",
        "reliability": 0.86,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "eqlt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 192,
        "question": "Human nature is too fixed to be fundamentally changed by political or economic systems.",
        "reliability": 0.84,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "chng": { "weight": -5, "type": "secondary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 193,
        "question": "People are capable of self-governance without hierarchical authority if they have stake in the outcome.",
        "reliability": 0.85,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "powr": { "weight": 8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },

    // ========================================
    // INTEGRATION (intg) - Coverage Enhancement
    // ========================================
    {
        "id": 194,
        "question": "It's natural to prefer and preserve one's own cultural traditions without believing they're superior to others.",
        "reliability": 0.83,
        "loadings": {
            "intg": { "weight": -5, "type": "primary" },
            "idnt": { "weight": -5, "type": "primary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 195,
        "question": "Successful integration requires intentional effort by both the receiving society and newcomers, not just legal equality.",
        "reliability": 0.84,
        "loadings": {
            "intg": { "weight": 8, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 196,
        "question": "Some cultural and religious practices are incompatible with modern liberal values and shouldn't be accommodated.",
        "reliability": 0.86,
        "loadings": {
            "intg": { "weight": -10, "type": "primary" },
            "prog": { "weight": 5, "type": "tertiary" },
            "scr": { "weight": 5, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 197,
        "question": "Regional and local cultural identities matter as much as national identity for social cohesion.",
        "reliability": 0.82,
        "loadings": {
            "intg": { "weight": 5, "type": "primary" },
            "powr": { "weight": 8, "type": "secondary" },
            "idnt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },

    // ========================================
    // ECONOMIC & POLITICAL "STOPPING POINTS"
    // Questions to capture nuanced conditional positions
    // ========================================

    // --- Economic Stopping Points ---
    {
        "id": 198,
        "question": "Markets are useful primarily because they generate wealth that can be taxed and redistributed.",
        "reliability": 0.85,
        "loadings": {
            "eqlt": { "weight": 8, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 199,
        "question": "Some industries like healthcare and education should be publicly owned, while others can remain private.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 5, "type": "secondary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" },
            "wlfr": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 200,
        "question": "Capitalism's fundamental problems can be fixed through regulation and redistribution rather than replacing the system.",
        "reliability": 0.88,
        "phase1Priority": 1,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "prty": { "weight": -8, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" },
            "eqlt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 201,
        "question": "Worker-owned businesses competing in a market economy would be better than both traditional capitalism and central planning.",
        "reliability": 0.84,
        "loadings": {
            "prty": { "weight": 8, "type": "primary" },
            "powr": { "weight": 8, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 202,
        "question": "A thriving private economy is essential to fund generous public services.",
        "reliability": 0.85,
        "loadings": {
            "eqlt": { "weight": -5, "type": "secondary" },
            "prty": { "weight": -8, "type": "secondary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },

    // --- Political Stopping Points ---
    {
        "id": 203,
        "question": "A democratically elected leader should have strong powers to act decisively, even if it means fewer checks on their authority.",
        "reliability": 0.89,
        "phase1Priority": 1,
        "loadings": {
            "powr": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" },
            "popl": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 204,
        "question": "Important economic and technical decisions should be made by qualified experts, but those experts should be accountable through democratic elections.",
        "reliability": 0.84,
        "loadings": {
            "popl": { "weight": -8, "type": "primary" },
            "powr": { "weight": -3, "type": "tertiary" },
            "tech": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 205,
        "question": "During serious national crises, some restrictions on civil liberties may be temporarily acceptable if decided through proper democratic processes.",
        "reliability": 0.86,
        "loadings": {
            "lbrt": { "weight": -8, "type": "primary" },
            "mns": { "weight": -8, "type": "primary" },
            "powr": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 206,
        "question": "Multiple competing political parties are essential, even if they slow down decision-making.",
        "reliability": 0.88,
        "phase1Priority": 1,
        "loadings": {
            "powr": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 8, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -104
    },

    // ========================================
    // PHASE 2: NUANCE & COVERAGE IMPROVEMENTS
    // New questions for under-measured axes
    // ========================================

    // INTEGRATION (intg) +6 questions
    {
        "id": 207,
        "question": "A country can have a shared national identity while celebrating its internal cultural differences.",
        "reliability": 0.85,
        "loadings": {
            "intg": { "weight": 5, "type": "primary" },
            "idnt": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 208,
        "question": "Immigrants should keep their own traditions while also learning local customs.",
        "reliability": 0.84,
        "loadings": {
            "intg": { "weight": 8, "type": "primary" },
            "idnt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 209,
        "question": "Different cultural communities should have some autonomy to govern their own affairs.",
        "reliability": 0.83,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "powr": { "weight": 8, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 210,
        "question": "Schools should teach children about many cultures, not just the dominant one.",
        "reliability": 0.86,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "prog": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 211,
        "question": "Having many languages spoken in a country is a strength, not a weakness.",
        "reliability": 0.87,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "idnt": { "weight": 8, "type": "secondary" }
        },
        "validationPair": 165
    },
    {
        "id": 212,
        "question": "Communities should be able to make their own rules, even if they differ from national norms.",
        "reliability": 0.82,
        "loadings": {
            "intg": { "weight": 10, "type": "primary" },
            "powr": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },

    // CHANGE (chng) +5 questions
    {
        "id": 213,
        "question": "Small, careful reforms are safer than trying to change everything at once.",
        "reliability": 0.86,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": 107
    },
    {
        "id": 214,
        "question": "Sometimes old systems need to be completely replaced, not just improved.",
        "reliability": 0.87,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 106
    },
    {
        "id": 215,
        "question": "The best changes happen through existing political processes, not protests or revolution.",
        "reliability": 0.84,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" },
            "popl": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 216,
        "question": "Major social problems require urgent, dramatic action rather than gradual improvement.",
        "reliability": 0.85,
        "loadings": {
            "chng": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -107
    },
    {
        "id": 217,
        "question": "It's better to experiment with small changes before making big commitments.",
        "reliability": 0.83,
        "loadings": {
            "chng": { "weight": -10, "type": "primary" },
            "tech": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },

    // HUMAN NATURE (hmnn) +4 questions
    {
        "id": 218,
        "question": "Given the right conditions, people will naturally cooperate and help each other.",
        "reliability": 0.86,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "prty": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 115
    },
    {
        "id": 219,
        "question": "Competition brings out the best in people more than cooperation does.",
        "reliability": 0.85,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -5, "type": "secondary" },
            "prty": { "weight": -5, "type": "secondary" }
        },
        "validationPair": -115
    },
    {
        "id": 220,
        "question": "Most people need rules and oversight to behave well.",
        "reliability": 0.84,
        "loadings": {
            "hmnn": { "weight": -10, "type": "primary" },
            "lbrt": { "weight": -5, "type": "secondary" }
        },
        "validationPair": 114
    },
    {
        "id": 221,
        "question": "People's basic character can be changed through education and good institutions.",
        "reliability": 0.87,
        "loadings": {
            "hmnn": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "prog": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 118
    },

    // MEANS (mns) +4 questions
    {
        "id": 222,
        "question": "It's acceptable to compromise on your ideals if it leads to practical improvements.",
        "reliability": 0.86,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" }
        },
        "validationPair": 122
    },
    {
        "id": 223,
        "question": "Sticking to your principles matters more than achieving short-term results.",
        "reliability": 0.85,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" }
        },
        "validationPair": 123
    },
    {
        "id": 224,
        "question": "Good intentions don't justify bad methods.",
        "reliability": 0.88,
        "loadings": {
            "mns": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": -124
    },
    {
        "id": 225,
        "question": "Sometimes you have to make deals with people you disagree with to get things done.",
        "reliability": 0.84,
        "loadings": {
            "mns": { "weight": -10, "type": "primary" },
            "intg": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },

    // PROPERTY (prty) +4 questions
    {
        "id": 226,
        "question": "Large corporations should be broken up or turned into cooperatives.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 8, "type": "secondary" },
            "powr": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 227,
        "question": "Natural resources like water and minerals should belong to everyone, not private owners.",
        "reliability": 0.88,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "ecol": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 130
    },
    {
        "id": 228,
        "question": "People should be able to own and rent out as many properties as they want.",
        "reliability": 0.85,
        "loadings": {
            "prty": { "weight": -10, "type": "primary" },
            "eqlt": { "weight": -8, "type": "secondary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": -130
    },
    {
        "id": 229,
        "question": "Some things like healthcare and education should never be run for profit.",
        "reliability": 0.87,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 10, "type": "primary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },

    // WELFARE (wlfr) +4 questions
    {
        "id": 230,
        "question": "Government benefits should be available to everyone, not just those who qualify.",
        "reliability": 0.86,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "eqlt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 154
    },
    {
        "id": 231,
        "question": "People should have to work to receive government assistance.",
        "reliability": 0.85,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -8, "type": "secondary" }
        },
        "validationPair": 155
    },
    {
        "id": 232,
        "question": "Direct cash payments are more effective than government-provided services like housing assistance.",
        "reliability": 0.82,
        "loadings": {
            "wlfr": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" },
            "prty": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 233,
        "question": "Welfare should be designed to get people back to work as quickly as possible.",
        "reliability": 0.84,
        "loadings": {
            "wlfr": { "weight": -10, "type": "primary" },
            "hmnn": { "weight": -5, "type": "secondary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": -154
    },

    // TECHNOLOGY (tech) +4 questions
    {
        "id": 234,
        "question": "New technologies usually create more problems than they solve.",
        "reliability": 0.86,
        "loadings": {
            "tech": { "weight": -10, "type": "primary" },
            "ecol": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": 148
    },
    {
        "id": 235,
        "question": "We should embrace automation even if it eliminates jobs.",
        "reliability": 0.84,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "chng": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 236,
        "question": "Online platforms need much stricter government regulation.",
        "reliability": 0.83,
        "loadings": {
            "tech": { "weight": -5, "type": "secondary" },
            "lbrt": { "weight": -5, "type": "secondary" },
            "eqlt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 237,
        "question": "Technological progress is essential for solving our biggest problems.",
        "reliability": 0.87,
        "loadings": {
            "tech": { "weight": 10, "type": "primary" },
            "ecol": { "weight": 3, "type": "tertiary" },
            "hmnn": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 146
    },

    // SECULARISM (scr) +2 questions
    {
        "id": 238,
        "question": "Religious communities should be able to run their own schools with their own curriculum.",
        "reliability": 0.84,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "intg": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 239,
        "question": "Religious leaders should have a formal advisory role in government decisions.",
        "reliability": 0.86,
        "loadings": {
            "scr": { "weight": -10, "type": "primary" },
            "prog": { "weight": -8, "type": "secondary" }
        },
        "validationPair": 138
    },

    // DISCRIMINATING QUESTIONS - PRTY-only (not EQLT)
    {
        "id": 240,
        "question": "Whether workers own their company matters more than how profits are distributed.",
        "reliability": 0.83,
        "loadings": {
            "prty": { "weight": 10, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 241,
        "question": "The form of ownership matters less than whether outcomes are fair.",
        "reliability": 0.82,
        "loadings": {
            "prty": { "weight": -5, "type": "secondary" },
            "eqlt": { "weight": 10, "type": "primary" },
            "mns": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },

    // DISCRIMINATING QUESTIONS - IDNT-only (not INTG)
    {
        "id": 242,
        "question": "I feel a special connection to my country's history and traditions.",
        "reliability": 0.85,
        "loadings": {
            "idnt": { "weight": -10, "type": "primary" },
            "prog": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 243,
        "question": "National borders are just lines on a map with no deeper meaning.",
        "reliability": 0.86,
        "loadings": {
            "idnt": { "weight": 10, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": 51
    },

    // ========================================
    // CENTRIST-AFFIRMING QUESTIONS
    // Targeting 40-60 range on major axes
    // ========================================
    {
        "id": 244,
        "question": "Both free markets and government programs have important roles in a healthy economy.",
        "reliability": 0.85,
        "loadings": {
            "mns": { "weight": -8, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 245,
        "question": "There are good arguments on both sides of the immigration debate.",
        "reliability": 0.84,
        "loadings": {
            "mns": { "weight": -5, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 246,
        "question": "Tradition and progress both contribute to a good society.",
        "reliability": 0.86,
        "loadings": {
            "mns": { "weight": -5, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 247,
        "question": "Some government surveillance is necessary, but it needs strict limits.",
        "reliability": 0.87,
        "loadings": {
            "mns": { "weight": 5, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 248,
        "question": "The appropriate pace of social change depends on the specific circumstances.",
        "reliability": 0.83,
        "loadings": {
            "mns": { "weight": -8, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 249,
        "question": "Expert guidance and democratic input should both shape policy decisions.",
        "reliability": 0.86,
        "loadings": {
            "mns": { "weight": -5, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 250,
        "question": "Individual rights and community needs both deserve protection.",
        "reliability": 0.85,
        "loadings": {
            "mns": { "weight": -3, "type": "primary" }
        },
        "validationPair": null
    },
    {
        "id": 251,
        "question": "Environmental protection and economic development can usually be balanced.",
        "reliability": 0.84,
        "loadings": {
            "mns": { "weight": -8, "type": "primary" }
        },
        "validationPair": null
    },

    // ========================================
    // CONDITIONAL/STOPPING POINT QUESTIONS
    // Captures "I support X but only to point Y"
    // ========================================
    {
        "id": 252,
        "question": "I support higher taxes on the wealthy, but not so high that they reduce economic incentives.",
        "reliability": 0.86,
        "loadings": {
            "eqlt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" },
            "hmnn": { "weight": -3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 253,
        "question": "I support free speech, but not when it directly incites violence.",
        "reliability": 0.88,
        "loadings": {
            "lbrt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 254,
        "question": "I'm open to tradition, but it shouldn't override basic human rights.",
        "reliability": 0.87,
        "loadings": {
            "prog": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" },
            "lbrt": { "weight": 3, "type": "tertiary" }
        },
        "validationPair": null
    },
    {
        "id": 255,
        "question": "I support environmental protection, but not if it destroys working-class jobs.",
        "reliability": 0.85,
        "loadings": {
            "ecol": { "weight": 5, "type": "secondary" },
            "eqlt": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 256,
        "question": "I favor local control, but some issues need national solutions.",
        "reliability": 0.84,
        "loadings": {
            "powr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 257,
        "question": "I respect religious views, but they shouldn't be imposed through law.",
        "reliability": 0.88,
        "loadings": {
            "scr": { "weight": 8, "type": "primary" },
            "lbrt": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 258,
        "question": "I support helping immigrants, but countries need some control over their borders.",
        "reliability": 0.86,
        "loadings": {
            "intg": { "weight": 5, "type": "primary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 259,
        "question": "I believe in gradual reform, but some injustices demand immediate action.",
        "reliability": 0.85,
        "loadings": {
            "chng": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 260,
        "question": "I value expertise, but experts shouldn't override democratic decisions.",
        "reliability": 0.87,
        "loadings": {
            "popl": { "weight": 5, "type": "secondary" },
            "mns": { "weight": 5, "type": "secondary" }
        },
        "validationPair": null
    },
    {
        "id": 261,
        "question": "Markets work well for most things, but some services should be public.",
        "reliability": 0.86,
        "loadings": {
            "prty": { "weight": 5, "type": "secondary" },
            "wlfr": { "weight": 5, "type": "secondary" },
            "mns": { "weight": -5, "type": "secondary" }
        },
        "validationPair": null
    }
];
