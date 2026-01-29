/*
 * Ideology Matrix - Comprehensive Ideologies Database
 *
 * Each ideology is mapped to 16 axes (0-100 scale):
 *
 * ORIGINAL 8 AXES:
 * ================
 * eqlt: Equality      - Free Market (0) ↔ Economic Equality (100)
 * lbrt: Liberty       - State Authority (0) ↔ Civil Liberty (100)
 * prog: Progress      - Traditional (0) ↔ Secular-Progressive (100)
 * idnt: Identity      - Nationalist (0) ↔ Cosmopolitan (100)
 * popl: Populism      - Pluralist/Elite (0) ↔ Populist/People (100)
 * intv: Intervention  - Non-interventionist (0) ↔ Interventionist (100)
 * ecol: Ecology       - Anthropocentric (0) ↔ Ecocentric (100)
 * powr: Power         - Concentrated (0) ↔ Distributed (100)
 *
 * NEW 8 AXES:
 * ===========
 * chng: Change        - Gradualist (0) ↔ Revolutionary (100)
 * hmnn: Human Nature  - Constrained (0) ↔ Unconstrained (100)
 * mns:  Means         - Pragmatic (0) ↔ Principled (100)
 * prty: Property      - Private (0) ↔ Commons (100)
 * scr:  Secularism    - Religious (0) ↔ Secular (100)
 * tech: Technology    - Skeptic (0) ↔ Enthusiast (100)
 * wlfr: Welfare       - Targeted (0) ↔ Universal (100)
 * intg: Integration   - Assimilationist (0) ↔ Pluralist (100)
 *
 * Includes common, obscure, and syncretic ideologies for tailored results.
 */

ideologies = [
    // ========================================
    // ANARCHIST TENDENCIES
    // ========================================
    {
        "name": "Anarcho-Communism",
        "description": "A stateless society where all property is held in common and resources are shared freely based on need, with no government, money, or class divisions.",
        "stats": { "eqlt": 100, "lbrt": 90, "prog": 85, "idnt": 80, "popl": 70, "intv": 20, "ecol": 70, "powr": 100,
                   "chng": 95, "hmnn": 85, "mns": 80, "prty": 100, "scr": 75, "tech": 50, "wlfr": 100, "intg": 85 },
        "salience": { "eqlt": 1.0, "lbrt": 0.9, "prog": 0.5, "idnt": 0.6, "popl": 0.5, "intv": 0.6, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.6, "prty": 1.0, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["cooperative"], "market_role": ["planning", "anti_market"], "change_velocity": ["revolutionary"], "decision_making": ["direct_democracy"], "power_structure": ["decentralized"] }
    },
    {
        "name": "Anarcho-Syndicalism",
        "description": "Workers should organize into unions that will eventually take over their workplaces and run society together, replacing both governments and private owners.",
        "stats": { "eqlt": 95, "lbrt": 85, "prog": 75, "idnt": 70, "popl": 80, "intv": 20, "ecol": 55, "powr": 100,
                   "chng": 85, "hmnn": 75, "mns": 70, "prty": 95, "scr": 70, "tech": 55, "wlfr": 95, "intg": 70 },
        "salience": { "eqlt": 0.9, "lbrt": 0.8, "prog": 0.4, "idnt": 0.5, "popl": 0.8, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.4 },
        "mechanisms": { "ownership_path": ["cooperative", "worker_ownership"], "market_role": ["anti_market"], "change_velocity": ["rapid_reform", "revolutionary"], "decision_making": ["direct_democracy"], "power_structure": ["decentralized"] }
    },
    {
        "name": "Anarcho-Collectivism",
        "description": "After abolishing the state, communities should collectively own farms, factories, and resources, with people paid based on how much work they actually contribute.",
        "stats": { "eqlt": 95, "lbrt": 88, "prog": 75, "idnt": 70, "popl": 70, "intv": 20, "ecol": 55, "powr": 100,
                   "chng": 85, "hmnn": 80, "mns": 75, "prty": 95, "scr": 70, "tech": 50, "wlfr": 95, "intg": 75 },
        "salience": { "eqlt": 0.9, "lbrt": 0.9, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Anarcho-Capitalism",
        "description": "Get rid of all government and let free markets handle everything—police, courts, roads, and all services would be provided by competing private businesses.",
        "stats": { "eqlt": 5, "lbrt": 95, "prog": 50, "idnt": 50, "popl": 45, "intv": 10, "ecol": 25, "powr": 80,
                   "chng": 70, "hmnn": 25, "mns": 80, "prty": 0, "scr": 60, "tech": 70, "wlfr": 5, "intg": 50 },
        "salience": { "eqlt": 0.8, "lbrt": 1.0, "prog": 0.3, "idnt": 0.3, "popl": 0.4, "intv": 0.6, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.7, "prty": 1.0, "scr": 0.3, "tech": 0.5, "wlfr": 0.7, "intg": 0.3 },
        "mechanisms": { "ownership_path": ["status_quo", "market_preference"], "market_role": ["free_market", "laissez_faire"], "change_velocity": ["radical"], "decision_making": ["individual"], "welfare_mechanism": ["charity", "voluntary"] }
    },
    {
        "name": "Mutualism",
        "description": "People should be able to own property they personally use and work on, with workers forming cooperatives and trading fairly with each other rather than through bosses or governments.",
        "stats": { "eqlt": 60, "lbrt": 90, "prog": 65, "idnt": 55, "popl": 55, "intv": 15, "ecol": 55, "powr": 100,
                   "chng": 60, "hmnn": 65, "mns": 65, "prty": 65, "scr": 65, "tech": 50, "wlfr": 60, "intg": 60 },
        "salience": { "eqlt": 0.7, "lbrt": 0.9, "prog": 0.3, "idnt": 0.3, "popl": 0.4, "intv": 0.5, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.3, "tech": 0.3, "wlfr": 0.5, "intg": 0.3 },
        "mechanisms": { "ownership_path": ["cooperative", "market_socialism"], "market_role": ["regulated_markets"], "change_velocity": ["gradual"], "decision_making": ["direct_democracy"], "power_structure": ["decentralized"] }
    },
    {
        "name": "Individualist Anarchism",
        "description": "Personal freedom is the highest priority—each person should be completely free to live as they choose without interference from governments, groups, or social pressure.",
        "stats": { "eqlt": 40, "lbrt": 95, "prog": 60, "idnt": 50, "popl": 50, "intv": 10, "ecol": 45, "powr": 100,
                   "chng": 65, "hmnn": 50, "mns": 85, "prty": 35, "scr": 65, "tech": 55, "wlfr": 30, "intg": 60 },
        "salience": { "eqlt": 0.5, "lbrt": 1.0, "prog": 0.4, "idnt": 0.3, "popl": 0.4, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.7, "prty": 0.6, "scr": 0.4, "tech": 0.3, "wlfr": 0.4, "intg": 0.3 }
    },
    {
        "name": "Egoism",
        "description": "People naturally act in their own self-interest, and that's fine—reject all moral rules and obligations imposed by society and do what benefits you.",
        "stats": { "eqlt": 30, "lbrt": 100, "prog": 55, "idnt": 50, "popl": 45, "intv": 10, "ecol": 30, "powr": 100,
                   "chng": 60, "hmnn": 80, "mns": 20, "prty": 25, "scr": 70, "tech": 50, "wlfr": 10, "intg": 50 },
        "salience": { "eqlt": 0.4, "lbrt": 1.0, "prog": 0.3, "idnt": 0.3, "popl": 0.4, "intv": 0.4, "ecol": 0.2, "powr": 1.0,
                      "chng": 0.4, "hmnn": 0.8, "mns": 0.8, "prty": 0.5, "scr": 0.4, "tech": 0.2, "wlfr": 0.3, "intg": 0.3 }
    },
    {
        "name": "Post-Left Anarchism",
        "description": "Traditional leftist ideas like organizing mass movements and class struggle are outdated traps; focus instead on personal liberation and reject all ideological systems.",
        "stats": { "eqlt": 70, "lbrt": 95, "prog": 80, "idnt": 60, "popl": 55, "intv": 10, "ecol": 60, "powr": 100,
                   "chng": 80, "hmnn": 70, "mns": 55, "prty": 70, "scr": 80, "tech": 45, "wlfr": 65, "intg": 75 },
        "salience": { "eqlt": 0.5, "lbrt": 1.0, "prog": 0.7, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.3, "wlfr": 0.4, "intg": 0.5 }
    },
    {
        "name": "Insurrectionary Anarchism",
        "description": "Don't wait around building organizations—take direct, sometimes violent action now to attack and undermine the state and capitalism immediately.",
        "stats": { "eqlt": 85, "lbrt": 92, "prog": 75, "idnt": 65, "popl": 75, "intv": 15, "ecol": 50, "powr": 100,
                   "chng": 100, "hmnn": 75, "mns": 85, "prty": 85, "scr": 70, "tech": 40, "wlfr": 80, "intg": 70 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.6, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 1.0, "hmnn": 0.5, "mns": 0.8, "prty": 0.6, "scr": 0.4, "tech": 0.3, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Platformism",
        "description": "Anarchists need to get organized with clear shared principles, coordinated strategies, and collective discipline to actually achieve their goals effectively.",
        "stats": { "eqlt": 95, "lbrt": 80, "prog": 75, "idnt": 70, "popl": 70, "intv": 25, "ecol": 55, "powr": 90,
                   "chng": 80, "hmnn": 75, "mns": 70, "prty": 90, "scr": 70, "tech": 50, "wlfr": 90, "intg": 70 },
        "salience": { "eqlt": 0.9, "lbrt": 0.8, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.3, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Anarcha-Feminism",
        "description": "Patriarchy and the state reinforce each other—true liberation requires fighting against both male domination and government authority at the same time.",
        "stats": { "eqlt": 90, "lbrt": 90, "prog": 95, "idnt": 75, "popl": 65, "intv": 20, "ecol": 70, "powr": 100,
                   "chng": 85, "hmnn": 85, "mns": 75, "prty": 85, "scr": 85, "tech": 50, "wlfr": 90, "intg": 90 },
        "salience": { "eqlt": 0.8, "lbrt": 0.9, "prog": 0.9, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.7, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.3, "wlfr": 0.6, "intg": 0.7 }
    },
    {
        "name": "Queer Anarchism",
        "description": "Rigid categories of gender and sexuality are tools of social control; breaking free from the state also means breaking free from imposed identities and norms.",
        "stats": { "eqlt": 85, "lbrt": 92, "prog": 100, "idnt": 80, "popl": 60, "intv": 15, "ecol": 65, "powr": 100,
                   "chng": 85, "hmnn": 90, "mns": 75, "prty": 80, "scr": 90, "tech": 55, "wlfr": 85, "intg": 95 },
        "salience": { "eqlt": 0.7, "lbrt": 0.9, "prog": 1.0, "idnt": 0.6, "popl": 0.4, "intv": 0.3, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.8, "mns": 0.5, "prty": 0.5, "scr": 0.7, "tech": 0.3, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Green Anarchism",
        "description": "Environmental destruction is directly tied to hierarchies and domination; dismantling the state must go hand-in-hand with protecting nature and living sustainably.",
        "stats": { "eqlt": 80, "lbrt": 90, "prog": 70, "idnt": 65, "popl": 60, "intv": 15, "ecol": 95, "powr": 100,
                   "chng": 80, "hmnn": 75, "mns": 80, "prty": 85, "scr": 65, "tech": 25, "wlfr": 80, "intg": 70 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 1.0, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.7, "scr": 0.3, "tech": 0.7, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Anarcho-Primitivism",
        "description": "Civilization itself—agriculture, industry, technology—is the root problem; humanity should return to a simpler hunter-gatherer way of living in harmony with nature.",
        "stats": { "eqlt": 70, "lbrt": 95, "prog": 5, "idnt": 40, "popl": 60, "intv": 5, "ecol": 100, "powr": 100,
                   "chng": 90, "hmnn": 50, "mns": 95, "prty": 90, "scr": 40, "tech": 0, "wlfr": 70, "intg": 50 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.8, "idnt": 0.3, "popl": 0.4, "intv": 0.4, "ecol": 1.0, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.7, "prty": 0.7, "scr": 0.3, "tech": 1.0, "wlfr": 0.4, "intg": 0.3 }
    },
    {
        "name": "Anarcho-Naturism",
        "description": "Living naturally—including nudism, vegetarianism, and simple living—is a form of resistance against artificial social rules and bodily repression.",
        "stats": { "eqlt": 70, "lbrt": 92, "prog": 65, "idnt": 60, "popl": 55, "intv": 10, "ecol": 90, "powr": 100,
                   "chng": 70, "hmnn": 75, "mns": 70, "prty": 80, "scr": 70, "tech": 20, "wlfr": 70, "intg": 65 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.5, "idnt": 0.4, "popl": 0.3, "intv": 0.4, "ecol": 0.9, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.6, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Anarcho-Pacifism",
        "description": "Oppose all forms of violence and coercion, including war and state force; social change should come only through peaceful resistance and nonviolent methods.",
        "stats": { "eqlt": 80, "lbrt": 90, "prog": 80, "idnt": 85, "popl": 55, "intv": 5, "ecol": 70, "powr": 100,
                   "chng": 60, "hmnn": 90, "mns": 100, "prty": 75, "scr": 70, "tech": 45, "wlfr": 80, "intg": 85 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.5, "idnt": 0.6, "popl": 0.3, "intv": 1.0, "ecol": 0.5, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.8, "mns": 1.0, "prty": 0.5, "scr": 0.4, "tech": 0.3, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Anarcho-Transhumanism",
        "description": "Use technology like genetic engineering, artificial intelligence, and body modification to free humans from biological limitations and social hierarchies alike.",
        "stats": { "eqlt": 70, "lbrt": 92, "prog": 100, "idnt": 70, "popl": 50, "intv": 15, "ecol": 45, "powr": 100,
                   "chng": 90, "hmnn": 85, "mns": 60, "prty": 70, "scr": 95, "tech": 100, "wlfr": 75, "intg": 75 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.9, "idnt": 0.5, "popl": 0.3, "intv": 0.4, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.8, "mns": 0.4, "prty": 0.5, "scr": 0.7, "tech": 1.0, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Christian Anarchism",
        "description": "Jesus's teachings about love, equality, and rejecting worldly power mean that true Christianity is incompatible with government authority and coercion.",
        "stats": { "eqlt": 80, "lbrt": 85, "prog": 40, "idnt": 65, "popl": 60, "intv": 10, "ecol": 60, "powr": 100,
                   "chng": 65, "hmnn": 80, "mns": 95, "prty": 80, "scr": 15, "tech": 40, "wlfr": 85, "intg": 65 },
        "salience": { "eqlt": 0.7, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.6, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.7, "mns": 0.8, "prty": 0.6, "scr": 0.9, "tech": 0.3, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Agorism",
        "description": "Avoid and undermine the state by doing all your economic activity in underground gray and black markets until the government becomes irrelevant.",
        "stats": { "eqlt": 20, "lbrt": 95, "prog": 55, "idnt": 50, "popl": 55, "intv": 10, "ecol": 35, "powr": 100,
                   "chng": 75, "hmnn": 40, "mns": 70, "prty": 15, "scr": 65, "tech": 75, "wlfr": 15, "intg": 55 },
        "salience": { "eqlt": 0.7, "lbrt": 1.0, "prog": 0.3, "idnt": 0.3, "popl": 0.5, "intv": 0.5, "ecol": 0.2, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.6, "prty": 0.8, "scr": 0.3, "tech": 0.5, "wlfr": 0.6, "intg": 0.3 }
    },
    {
        "name": "Voluntaryism",
        "description": "All human interactions should be completely voluntary—any institution, including government, that uses force or coercion against peaceful people is illegitimate.",
        "stats": { "eqlt": 15, "lbrt": 95, "prog": 55, "idnt": 50, "popl": 45, "intv": 10, "ecol": 35, "powr": 100,
                   "chng": 65, "hmnn": 40, "mns": 85, "prty": 10, "scr": 60, "tech": 60, "wlfr": 10, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 1.0, "prog": 0.3, "idnt": 0.3, "popl": 0.4, "intv": 0.6, "ecol": 0.2, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.8, "prty": 0.8, "scr": 0.3, "tech": 0.4, "wlfr": 0.6, "intg": 0.3 }
    },
    {
        "name": "Crypto-Anarchism",
        "description": "Use encryption, cryptocurrencies, and anonymous digital tools to make government surveillance and control impossible, creating freedom through technology.",
        "stats": { "eqlt": 25, "lbrt": 95, "prog": 80, "idnt": 60, "popl": 50, "intv": 10, "ecol": 35, "powr": 100,
                   "chng": 75, "hmnn": 45, "mns": 70, "prty": 25, "scr": 75, "tech": 95, "wlfr": 20, "intg": 60 },
        "salience": { "eqlt": 0.4, "lbrt": 1.0, "prog": 0.6, "idnt": 0.4, "popl": 0.4, "intv": 0.5, "ecol": 0.2, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.5, "tech": 1.0, "wlfr": 0.4, "intg": 0.4 }
    },

    // ========================================
    // LIBERTARIAN SOCIALISM
    // ========================================
    {
        "name": "Libertarian Socialism",
        "description": "Workers should own and control their workplaces directly, without bosses or government telling them what to do, through voluntary cooperation.",
        "stats": { "eqlt": 90, "lbrt": 85, "prog": 80, "idnt": 75, "popl": 65, "intv": 25, "ecol": 65, "powr": 90,
                   "chng": 75, "hmnn": 80, "mns": 70, "prty": 85, "scr": 75, "tech": 55, "wlfr": 90, "intg": 75 },
        "salience": { "eqlt": 0.9, "lbrt": 0.9, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Council Communism",
        "description": "Workers should run society through elected workplace councils rather than political parties—workers must lead themselves, not be led by a vanguard.",
        "stats": { "eqlt": 100, "lbrt": 70, "prog": 80, "idnt": 75, "popl": 85, "intv": 30, "ecol": 50, "powr": 85,
                   "chng": 90, "hmnn": 80, "mns": 75, "prty": 100, "scr": 75, "tech": 55, "wlfr": 100, "intg": 70 },
        "salience": { "eqlt": 1.0, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.8, "intv": 0.4, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.5, "prty": 1.0, "scr": 0.4, "tech": 0.3, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Autonomism",
        "description": "Workers should organize themselves outside of political parties and unions, resisting capitalism through everyday actions and independent movements.",
        "stats": { "eqlt": 90, "lbrt": 80, "prog": 85, "idnt": 70, "popl": 75, "intv": 25, "ecol": 60, "powr": 85,
                   "chng": 85, "hmnn": 80, "mns": 65, "prty": 85, "scr": 80, "tech": 55, "wlfr": 85, "intg": 75 },
        "salience": { "eqlt": 0.8, "lbrt": 0.8, "prog": 0.6, "idnt": 0.5, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.3, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Situationism",
        "description": "Modern capitalism controls people through media and consumerism. Real freedom means breaking through these distractions to create genuine experiences.",
        "stats": { "eqlt": 85, "lbrt": 85, "prog": 90, "idnt": 70, "popl": 70, "intv": 20, "ecol": 55, "powr": 85,
                   "chng": 85, "hmnn": 85, "mns": 60, "prty": 80, "scr": 85, "tech": 50, "wlfr": 80, "intg": 75 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.8, "idnt": 0.5, "popl": 0.5, "intv": 0.3, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.8, "hmnn": 0.8, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Communalism",
        "description": "Local communities should govern themselves through face-to-face democratic assemblies, confederating with other communities while keeping power at the grassroots.",
        "stats": { "eqlt": 85, "lbrt": 80, "prog": 85, "idnt": 65, "popl": 70, "intv": 25, "ecol": 85, "powr": 90,
                   "chng": 80, "hmnn": 80, "mns": 70, "prty": 85, "scr": 75, "tech": 50, "wlfr": 85, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 0.8, "prog": 0.5, "idnt": 0.4, "popl": 0.6, "intv": 0.4, "ecol": 0.9, "powr": 0.9,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Democratic Confederalism",
        "description": "Diverse communities should govern themselves through local councils while cooperating across regions, emphasizing ecology, feminism, and direct democracy.",
        "stats": { "eqlt": 85, "lbrt": 80, "prog": 80, "idnt": 55, "popl": 75, "intv": 35, "ecol": 80, "powr": 90,
                   "chng": 75, "hmnn": 75, "mns": 65, "prty": 80, "scr": 65, "tech": 50, "wlfr": 85, "intg": 80 },
        "salience": { "eqlt": 0.8, "lbrt": 0.8, "prog": 0.5, "idnt": 0.6, "popl": 0.7, "intv": 0.5, "ecol": 0.8, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.3, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Participism",
        "description": "Society should be reorganized around nested councils where everyone participates in decisions that affect them, with balanced jobs so no one has more power.",
        "stats": { "eqlt": 90, "lbrt": 75, "prog": 80, "idnt": 70, "popl": 70, "intv": 30, "ecol": 70, "powr": 85,
                   "chng": 70, "hmnn": 80, "mns": 65, "prty": 90, "scr": 75, "tech": 55, "wlfr": 95, "intg": 70 },
        "salience": { "eqlt": 0.9, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.7, "intv": 0.4, "ecol": 0.5, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Zapatismo",
        "description": "Indigenous communities should have autonomy to govern themselves according to their own traditions while resisting global capitalism and neoliberal policies.",
        "stats": { "eqlt": 85, "lbrt": 75, "prog": 65, "idnt": 40, "popl": 85, "intv": 20, "ecol": 80, "powr": 90,
                   "chng": 75, "hmnn": 75, "mns": 70, "prty": 85, "scr": 50, "tech": 35, "wlfr": 85, "intg": 85 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.4, "idnt": 0.7, "popl": 0.9, "intv": 0.5, "ecol": 0.8, "powr": 0.9,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.8 }
    },

    // ========================================
    // MARXIST / COMMUNIST
    // ========================================
    {
        "name": "Orthodox Marxism",
        "description": "Believes Marx was right that capitalism will eventually collapse under its own problems, and workers will naturally take over.",
        "stats": { "eqlt": 100, "lbrt": 50, "prog": 80, "idnt": 75, "popl": 60, "intv": 45, "ecol": 45, "powr": 50,
                   "chng": 90, "hmnn": 85, "mns": 75, "prty": 100, "scr": 90, "tech": 65, "wlfr": 100, "intg": 70 },
        "salience": { "eqlt": 1.0, "lbrt": 0.5, "prog": 0.6, "idnt": 0.7, "popl": 0.6, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.8, "hmnn": 0.8, "mns": 0.6, "prty": 1.0, "scr": 0.7, "tech": 0.5, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Marxism-Leninism",
        "description": "Combines Marx's economic theory with Lenin's party-led revolution, featuring a strong one-party state controlling the economy during transition to communism.",
        "stats": { "eqlt": 100, "lbrt": 20, "prog": 75, "idnt": 60, "popl": 50, "intv": 50, "ecol": 40, "powr": 15,
                   "chng": 90, "hmnn": 75, "mns": 50, "prty": 100, "scr": 85, "tech": 70, "wlfr": 95, "intg": 50 },
        "salience": { "eqlt": 1.0, "lbrt": 0.8, "prog": 0.5, "idnt": 0.6, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.5, "prty": 1.0, "scr": 0.6, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Trotskyism",
        "description": "Agrees with Lenin on revolutionary party leadership but insists socialism must spread worldwide to survive—strongly opposed Stalin's bureaucratic dictatorship.",
        "stats": { "eqlt": 100, "lbrt": 40, "prog": 85, "idnt": 90, "popl": 60, "intv": 70, "ecol": 45, "powr": 40,
                   "chng": 100, "hmnn": 85, "mns": 80, "prty": 100, "scr": 90, "tech": 65, "wlfr": 100, "intg": 80 },
        "salience": { "eqlt": 1.0, "lbrt": 0.6, "prog": 0.6, "idnt": 0.9, "popl": 0.5, "intv": 0.8, "ecol": 0.3, "powr": 0.6,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.7, "prty": 1.0, "scr": 0.6, "tech": 0.4, "wlfr": 0.9, "intg": 0.7 }
    },
    {
        "name": "Left Communism",
        "description": "Criticizes mainstream communist parties for compromising with capitalism through elections or unions—wants immediate, uncompromising revolution.",
        "stats": { "eqlt": 100, "lbrt": 60, "prog": 85, "idnt": 85, "popl": 65, "intv": 35, "ecol": 45, "powr": 70,
                   "chng": 95, "hmnn": 85, "mns": 85, "prty": 100, "scr": 85, "tech": 55, "wlfr": 100, "intg": 75 },
        "salience": { "eqlt": 1.0, "lbrt": 0.7, "prog": 0.6, "idnt": 0.7, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.8, "hmnn": 0.7, "mns": 0.8, "prty": 1.0, "scr": 0.6, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Bordigism",
        "description": "A strict communist view that says a disciplined revolutionary party must lead change, and compromising with capitalism or democracy won't work.",
        "stats": { "eqlt": 100, "lbrt": 45, "prog": 80, "idnt": 85, "popl": 40, "intv": 40, "ecol": 40, "powr": 40,
                   "chng": 95, "hmnn": 80, "mns": 90, "prty": 100, "scr": 85, "tech": 55, "wlfr": 100, "intg": 70 },
        "salience": { "eqlt": 1.0, "lbrt": 0.5, "prog": 0.5, "idnt": 0.8, "popl": 0.6, "intv": 0.4, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.9, "prty": 1.0, "scr": 0.6, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Luxemburgism",
        "description": "Supports revolution but emphasizes it must come from spontaneous mass action by workers, not commands from party leaders—democracy within the movement is essential.",
        "stats": { "eqlt": 100, "lbrt": 60, "prog": 85, "idnt": 80, "popl": 70, "intv": 45, "ecol": 45, "powr": 65,
                   "chng": 90, "hmnn": 85, "mns": 75, "prty": 100, "scr": 85, "tech": 55, "wlfr": 100, "intg": 75 },
        "salience": { "eqlt": 1.0, "lbrt": 0.7, "prog": 0.6, "idnt": 0.7, "popl": 0.7, "intv": 0.5, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.8, "hmnn": 0.7, "mns": 0.6, "prty": 1.0, "scr": 0.6, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "De Leonism",
        "description": "Socialist transformation should come through workers organizing industrial unions and winning elections, then using union power to take over production.",
        "stats": { "eqlt": 100, "lbrt": 55, "prog": 75, "idnt": 65, "popl": 70, "intv": 30, "ecol": 45, "powr": 70,
                   "chng": 80, "hmnn": 75, "mns": 70, "prty": 100, "scr": 80, "tech": 60, "wlfr": 100, "intg": 65 },
        "salience": { "eqlt": 1.0, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.7, "intv": 0.4, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.6, "prty": 1.0, "scr": 0.5, "tech": 0.4, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Stalinism",
        "description": "Emphasizes building socialism in one country through rapid industrialization and a powerful centralized state—meant total state control and authoritarian rule.",
        "stats": { "eqlt": 95, "lbrt": 5, "prog": 60, "idnt": 30, "popl": 40, "intv": 40, "ecol": 25, "powr": 5,
                   "chng": 70, "hmnn": 45, "mns": 25, "prty": 100, "scr": 70, "tech": 75, "wlfr": 80, "intg": 30 },
        "salience": { "eqlt": 0.8, "lbrt": 0.9, "prog": 0.5, "idnt": 0.7, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.6, "prty": 0.9, "scr": 0.5, "tech": 0.6, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Maoism",
        "description": "Revolution should be led by peasants and farmers since they're the majority in poor countries, with continuous cultural revolution to prevent new ruling classes.",
        "stats": { "eqlt": 100, "lbrt": 10, "prog": 65, "idnt": 25, "popl": 75, "intv": 35, "ecol": 30, "powr": 10,
                   "chng": 95, "hmnn": 70, "mns": 50, "prty": 100, "scr": 60, "tech": 55, "wlfr": 90, "intg": 35 },
        "salience": { "eqlt": 1.0, "lbrt": 0.7, "prog": 0.5, "idnt": 0.7, "popl": 0.9, "intv": 0.5, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.9, "hmnn": 0.6, "mns": 0.5, "prty": 1.0, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Maoism-Third Worldism",
        "description": "The real revolutionary potential lies in the poorest countries of the Global South, not in wealthy Western nations whose workers benefit from imperialism.",
        "stats": { "eqlt": 88, "lbrt": 15, "prog": 60, "idnt": 30, "popl": 80, "intv": 50, "ecol": 35, "powr": 15,
                   "chng": 100, "hmnn": 70, "mns": 55, "prty": 100, "scr": 60, "tech": 45, "wlfr": 90, "intg": 40 },
        "salience": { "eqlt": 1.0, "lbrt": 0.6, "prog": 0.5, "idnt": 0.8, "popl": 0.9, "intv": 0.7, "ecol": 0.3, "powr": 0.7,
                      "chng": 1.0, "hmnn": 0.6, "mns": 0.5, "prty": 1.0, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Hoxhaism",
        "description": "A strict Stalinist position that rejected both Soviet and Chinese revisionism, insisting on maintaining pure Marxist-Leninist principles.",
        "stats": { "eqlt": 100, "lbrt": 10, "prog": 65, "idnt": 35, "popl": 50, "intv": 35, "ecol": 30, "powr": 10,
                   "chng": 80, "hmnn": 55, "mns": 45, "prty": 100, "scr": 75, "tech": 55, "wlfr": 90, "intg": 30 },
        "salience": { "eqlt": 1.0, "lbrt": 0.8, "prog": 0.5, "idnt": 0.6, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 1.0, "scr": 0.6, "tech": 0.4, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Titoism",
        "description": "A more independent form of socialism featuring worker self-management of factories and more openness to markets and the West than the Soviet model.",
        "stats": { "eqlt": 85, "lbrt": 35, "prog": 65, "idnt": 50, "popl": 55, "intv": 40, "ecol": 40, "powr": 45,
                   "chng": 60, "hmnn": 60, "mns": 45, "prty": 80, "scr": 70, "tech": 55, "wlfr": 85, "intg": 60 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.5, "idnt": 0.7, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.5, "tech": 0.4, "wlfr": 0.8, "intg": 0.6 }
    },
    {
        "name": "Eurocommunism",
        "description": "Western European communist parties' attempt to pursue socialism through democratic elections, accepting political pluralism and human rights.",
        "stats": { "eqlt": 85, "lbrt": 55, "prog": 75, "idnt": 65, "popl": 50, "intv": 35, "ecol": 55, "powr": 55,
                   "chng": 55, "hmnn": 70, "mns": 50, "prty": 85, "scr": 80, "tech": 55, "wlfr": 90, "intg": 65 },
        "salience": { "eqlt": 0.9, "lbrt": 0.7, "prog": 0.6, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.8, "scr": 0.6, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Castroism",
        "description": "Revolutionary socialism adapted to Cuban conditions, featuring armed struggle, Latin American solidarity, and resistance to U.S. imperialism.",
        "stats": { "eqlt": 95, "lbrt": 20, "prog": 60, "idnt": 40, "popl": 65, "intv": 55, "ecol": 45, "powr": 20,
                   "chng": 80, "hmnn": 65, "mns": 50, "prty": 95, "scr": 55, "tech": 50, "wlfr": 95, "intg": 45 },
        "salience": { "eqlt": 0.9, "lbrt": 0.7, "prog": 0.5, "idnt": 0.7, "popl": 0.7, "intv": 0.7, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.8, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Guevarism",
        "description": "Revolution requires dedicated guerrilla fighters creating conditions for uprising, with emphasis on moral incentives and creating the new socialist person.",
        "stats": { "eqlt": 100, "lbrt": 30, "prog": 70, "idnt": 60, "popl": 75, "intv": 65, "ecol": 45, "powr": 35,
                   "chng": 100, "hmnn": 80, "mns": 85, "prty": 100, "scr": 65, "tech": 50, "wlfr": 100, "intg": 60 },
        "salience": { "eqlt": 1.0, "lbrt": 0.5, "prog": 0.5, "idnt": 0.7, "popl": 0.8, "intv": 0.9, "ecol": 0.3, "powr": 0.5,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.8, "prty": 1.0, "scr": 0.4, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Sandinismo",
        "description": "Nicaraguan revolutionary movement combining socialism with nationalism, Christianity, and indigenous rights, emphasizing popular participation.",
        "stats": { "eqlt": 80, "lbrt": 45, "prog": 60, "idnt": 40, "popl": 75, "intv": 40, "ecol": 55, "powr": 50,
                   "chng": 70, "hmnn": 70, "mns": 55, "prty": 75, "scr": 45, "tech": 45, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.7, "popl": 0.8, "intv": 0.6, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.3, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Juche",
        "description": "North Korea's official ideology emphasizing national self-reliance, military-first politics, and the supreme leadership of the Kim family dynasty.",
        "stats": { "eqlt": 50, "lbrt": 5, "prog": 40, "idnt": 5, "popl": 55, "intv": 25, "ecol": 30, "powr": 5,
                   "chng": 60, "hmnn": 40, "mns": 40, "prty": 95, "scr": 40, "tech": 55, "wlfr": 85, "intg": 10 },
        "salience": { "eqlt": 0.7, "lbrt": 0.8, "prog": 0.5, "idnt": 1.0, "popl": 0.6, "intv": 0.6, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.5, "tech": 0.5, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Dengism",
        "description": "China's approach of maintaining Communist Party control while opening up to market economics—socialism with Chinese characteristics.",
        "stats": { "eqlt": 45, "lbrt": 15, "prog": 55, "idnt": 30, "popl": 35, "intv": 45, "ecol": 35, "powr": 10,
                   "chng": 45, "hmnn": 40, "mns": 20, "prty": 50, "scr": 65, "tech": 80, "wlfr": 60, "intg": 30 },
        "salience": { "eqlt": 0.7, "lbrt": 0.7, "prog": 0.5, "idnt": 0.6, "popl": 0.4, "intv": 0.5, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.7, "prty": 0.8, "scr": 0.4, "tech": 0.7, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Xi Jinping Thought",
        "description": "Contemporary Chinese ideology emphasizing party leadership, national rejuvenation, technological advancement, and China's growing global role.",
        "stats": { "eqlt": 55, "lbrt": 10, "prog": 50, "idnt": 20, "popl": 45, "intv": 55, "ecol": 45, "powr": 5,
                   "chng": 40, "hmnn": 35, "mns": 30, "prty": 60, "scr": 55, "tech": 85, "wlfr": 65, "intg": 25 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.5, "idnt": 0.8, "popl": 0.5, "intv": 0.7, "ecol": 0.5, "powr": 1.0,
                      "chng": 0.5, "hmnn": 0.4, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.8, "wlfr": 0.6, "intg": 0.5 }
    },
    {
        "name": "Post-Marxism",
        "description": "Moves beyond traditional Marxist focus on economics and class to analyze how power works through culture, language, and identity.",
        "stats": { "eqlt": 75, "lbrt": 65, "prog": 85, "idnt": 70, "popl": 55, "intv": 35, "ecol": 60, "powr": 60,
                   "chng": 65, "hmnn": 80, "mns": 55, "prty": 70, "scr": 85, "tech": 55, "wlfr": 75, "intg": 80 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.7, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.8, "mns": 0.5, "prty": 0.7, "scr": 0.6, "tech": 0.4, "wlfr": 0.6, "intg": 0.7 }
    },
    {
        "name": "Analytical Marxism",
        "description": "Applies rigorous philosophical and social science methods to Marxist ideas, trying to make them more precise and testable.",
        "stats": { "eqlt": 85, "lbrt": 60, "prog": 80, "idnt": 70, "popl": 35, "intv": 40, "ecol": 55, "powr": 55,
                   "chng": 55, "hmnn": 70, "mns": 60, "prty": 85, "scr": 90, "tech": 60, "wlfr": 85, "intg": 65 },
        "salience": { "eqlt": 0.9, "lbrt": 0.6, "prog": 0.6, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.7, "prty": 0.9, "scr": 0.7, "tech": 0.5, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Communization",
        "description": "Revolution should immediately abolish wage labor, money, and the state rather than going through transitional stages—communism now, not later.",
        "stats": { "eqlt": 100, "lbrt": 75, "prog": 85, "idnt": 75, "popl": 65, "intv": 25, "ecol": 55, "powr": 80,
                   "chng": 100, "hmnn": 85, "mns": 80, "prty": 100, "scr": 80, "tech": 50, "wlfr": 100, "intg": 75 },
        "salience": { "eqlt": 1.0, "lbrt": 0.7, "prog": 0.6, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.8,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.7, "prty": 1.0, "scr": 0.5, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },

    // ========================================
    // DEMOCRATIC SOCIALISM / LABOR
    // ========================================
    {
        "name": "Democratic Socialism",
        "description": "Wants to replace capitalism with worker or public ownership of major industries, but only through democratic means—rejects authoritarian approaches.",
        "stats": { "eqlt": 85, "lbrt": 70, "prog": 80, "idnt": 65, "popl": 55, "intv": 35, "ecol": 70, "powr": 70,
                   "chng": 60, "hmnn": 75, "mns": 60, "prty": 75, "scr": 75, "tech": 55, "wlfr": 90, "intg": 70 },
        "salience": { "eqlt": 0.9, "lbrt": 0.8, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.5, "powr": 0.7,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.8, "scr": 0.5, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["nationalization", "cooperative", "worker_ownership"], "market_role": ["regulated_markets", "mixed_economy"], "economic_goal": ["gradual_transformation", "democratic_socialist"], "authority_preference": ["liberal_democracy"], "change_velocity": ["rapid_reform", "ambitious"], "decision_making": ["representative", "democratic"], "welfare_mechanism": ["universal_services"] }
    },
    {
        "name": "Social Democracy",
        "description": "Accepts capitalism but wants strong government regulation, taxes on the wealthy, and generous welfare programs to reduce inequality.",
        "stats": { "eqlt": 70, "lbrt": 70, "prog": 75, "idnt": 65, "popl": 40, "intv": 45, "ecol": 65, "powr": 60,
                   "chng": 35, "hmnn": 65, "mns": 40, "prty": 55, "scr": 75, "tech": 60, "wlfr": 85, "intg": 65 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.5, "tech": 0.4, "wlfr": 0.9, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["redistribution", "social_democracy"], "market_role": ["regulated_markets", "mixed_economy", "pro_market_welfare"], "economic_goal": ["regulated_capitalism"], "authority_preference": ["liberal_democracy", "separation_of_powers"], "change_velocity": ["gradual", "incremental"], "decision_making": ["representative", "democratic"], "welfare_mechanism": ["universal_services", "social_insurance"] }
    },
    {
        "name": "Fabianism",
        "description": "Socialism should come gradually through patient reform, education, and working within existing political systems—change society slowly, not through revolution.",
        "stats": { "eqlt": 75, "lbrt": 60, "prog": 70, "idnt": 60, "popl": 25, "intv": 45, "ecol": 55, "powr": 50,
                   "chng": 20, "hmnn": 70, "mns": 45, "prty": 65, "scr": 75, "tech": 65, "wlfr": 80, "intg": 60 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.4, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.4,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 },
        "mechanisms": { "ownership_path": ["social_wealth_fund", "gradual"], "market_role": ["regulated_markets"], "change_velocity": ["gradual", "generational", "incremental"], "decision_making": ["representative", "technocratic"], "welfare_mechanism": ["universal_services"] }
    },
    {
        "name": "Laborism",
        "description": "The labor movement and unions should be the main vehicle for advancing workers' interests through political action and collective bargaining.",
        "stats": { "eqlt": 70, "lbrt": 60, "prog": 65, "idnt": 55, "popl": 55, "intv": 45, "ecol": 55, "powr": 55,
                   "chng": 40, "hmnn": 60, "mns": 45, "prty": 60, "scr": 65, "tech": 55, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.4, "idnt": 0.4, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.4, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Nordic Model",
        "description": "Combines free market capitalism with strong unions, comprehensive welfare states, and high taxes to create low inequality and high quality of life.",
        "stats": { "eqlt": 70, "lbrt": 75, "prog": 80, "idnt": 65, "popl": 35, "intv": 40, "ecol": 70, "powr": 60,
                   "chng": 30, "hmnn": 70, "mns": 45, "prty": 55, "scr": 80, "tech": 70, "wlfr": 95, "intg": 70 },
        "salience": { "eqlt": 0.7, "lbrt": 0.7, "prog": 0.6, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.6, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.5, "wlfr": 1.0, "intg": 0.6 },
        "mechanisms": { "ownership_path": ["redistribution", "social_democracy"], "market_role": ["regulated_markets", "pragmatic", "pro_market_welfare", "nordic"], "economic_goal": ["regulated_capitalism"], "authority_preference": ["liberal_democracy", "separation_of_powers"], "change_velocity": ["gradual", "consensus"], "decision_making": ["representative", "democratic"], "welfare_mechanism": ["universal_services", "social_insurance"] }
    },
    {
        "name": "Eco-Socialism",
        "description": "Capitalism's need for endless growth is destroying the environment, so saving the planet requires replacing capitalism with democratic worker control.",
        "stats": { "eqlt": 85, "lbrt": 65, "prog": 80, "idnt": 70, "popl": 55, "intv": 35, "ecol": 95, "powr": 70,
                   "chng": 75, "hmnn": 80, "mns": 75, "prty": 85, "scr": 70, "tech": 35, "wlfr": 90, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 1.0, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.7, "mns": 0.6, "prty": 0.8, "scr": 0.4, "tech": 0.6, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Market Socialism",
        "description": "Businesses would be owned and run democratically by their workers, but they'd still compete with each other in a market economy.",
        "stats": { "eqlt": 75, "lbrt": 65, "prog": 65, "idnt": 55, "popl": 45, "intv": 35, "ecol": 55, "powr": 70,
                   "chng": 45, "hmnn": 65, "mns": 45, "prty": 75, "scr": 70, "tech": 60, "wlfr": 75, "intg": 60 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.4 },
        "mechanisms": { "ownership_path": ["cooperative", "worker_ownership", "market_socialism", "social_wealth_fund"], "market_role": ["regulated_markets", "cooperative_market"], "economic_goal": ["gradual_transformation"], "change_velocity": ["gradual", "incremental"], "decision_making": ["direct_democracy", "participatory"], "welfare_mechanism": ["universal_services"] }
    },
    {
        "name": "Guild Socialism",
        "description": "Industries should be run by democratic associations of workers in each trade, with guilds controlling production and the state representing consumers.",
        "stats": { "eqlt": 80, "lbrt": 65, "prog": 55, "idnt": 45, "popl": 60, "intv": 25, "ecol": 50, "powr": 80,
                   "chng": 55, "hmnn": 65, "mns": 60, "prty": 80, "scr": 60, "tech": 50, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.3, "idnt": 0.4, "popl": 0.6, "intv": 0.4, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.3, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Syndicalism",
        "description": "Workers organized in unions should take over their industries and run the economy themselves, eventually replacing both capitalism and the state.",
        "stats": { "eqlt": 90, "lbrt": 70, "prog": 70, "idnt": 55, "popl": 80, "intv": 25, "ecol": 50, "powr": 90,
                   "chng": 80, "hmnn": 75, "mns": 70, "prty": 90, "scr": 70, "tech": 55, "wlfr": 90, "intg": 60 },
        "salience": { "eqlt": 0.9, "lbrt": 0.7, "prog": 0.4, "idnt": 0.5, "popl": 0.8, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.6, "prty": 0.9, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Cooperative Socialism",
        "description": "The economy should be based on worker-owned cooperatives competing in markets, gradually replacing traditional corporations.",
        "stats": { "eqlt": 80, "lbrt": 70, "prog": 65, "idnt": 55, "popl": 55, "intv": 30, "ecol": 60, "powr": 80,
                   "chng": 50, "hmnn": 70, "mns": 55, "prty": 85, "scr": 65, "tech": 55, "wlfr": 80, "intg": 60 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.4, "idnt": 0.4, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.4 }
    },

    // ========================================
    // LEFT-WING POPULISM
    // ========================================
    {
        "name": "Left-Wing Populism",
        "description": "Fights for ordinary working people against wealthy elites and big corporations, pushing for more government programs and economic equality.",
        "stats": { "eqlt": 75, "lbrt": 55, "prog": 70, "idnt": 45, "popl": 90, "intv": 30, "ecol": 60, "powr": 65,
                   "chng": 70, "hmnn": 70, "mns": 60, "prty": 65, "scr": 60, "tech": 50, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 1.0, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Bolivarianism",
        "description": "Latin American movement combining socialism, anti-imperialism, and regional integration against U.S. influence.",
        "stats": { "eqlt": 80, "lbrt": 40, "prog": 55, "idnt": 35, "popl": 85, "intv": 45, "ecol": 50, "powr": 40,
                   "chng": 75, "hmnn": 65, "mns": 55, "prty": 70, "scr": 50, "tech": 45, "wlfr": 80, "intg": 50 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.4, "idnt": 0.7, "popl": 0.9, "intv": 0.6, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Pink Tide",
        "description": "The wave of left-leaning governments elected in Latin America in the 2000s, pursuing social programs while maintaining some market economics.",
        "stats": { "eqlt": 75, "lbrt": 50, "prog": 60, "idnt": 40, "popl": 80, "intv": 35, "ecol": 55, "powr": 50,
                   "chng": 65, "hmnn": 65, "mns": 50, "prty": 65, "scr": 55, "tech": 50, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.4, "idnt": 0.6, "popl": 0.9, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.3, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Longism",
        "description": "Named after Louisiana's Huey Long, combines populist redistribution of wealth with strong executive leadership and skepticism of big business.",
        "stats": { "eqlt": 80, "lbrt": 40, "prog": 50, "idnt": 30, "popl": 95, "intv": 35, "ecol": 40, "powr": 35,
                   "chng": 70, "hmnn": 60, "mns": 45, "prty": 65, "scr": 55, "tech": 55, "wlfr": 90, "intg": 40 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.4, "idnt": 0.5, "popl": 1.0, "intv": 0.4, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.4, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Podemos-Style Left",
        "description": "New left movements using grassroots organizing and direct democracy to challenge both traditional left parties and neoliberal economics.",
        "stats": { "eqlt": 75, "lbrt": 65, "prog": 80, "idnt": 60, "popl": 85, "intv": 30, "ecol": 70, "powr": 65,
                   "chng": 65, "hmnn": 75, "mns": 55, "prty": 65, "scr": 80, "tech": 60, "wlfr": 85, "intg": 75 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.6, "idnt": 0.5, "popl": 0.9, "intv": 0.4, "ecol": 0.6, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.4, "wlfr": 0.8, "intg": 0.6 }
    },

    // ========================================
    // PROGRESSIVISM / SOCIAL LIBERALISM
    // ========================================
    {
        "name": "Progressivism",
        "description": "Pushes for social reform to address inequality, expand rights for marginalized groups, and use government to solve problems like poverty and discrimination.",
        "stats": { "eqlt": 65, "lbrt": 70, "prog": 95, "idnt": 80, "popl": 45, "intv": 50, "ecol": 80, "powr": 60,
                   "chng": 65, "hmnn": 80, "mns": 55, "prty": 55, "scr": 85, "tech": 70, "wlfr": 75, "intg": 85 },
        "salience": { "eqlt": 0.6, "lbrt": 0.7, "prog": 1.0, "idnt": 0.7, "popl": 0.4, "intv": 0.4, "ecol": 0.7, "powr": 0.5,
                      "chng": 0.7, "hmnn": 0.7, "mns": 0.4, "prty": 0.5, "scr": 0.7, "tech": 0.5, "wlfr": 0.7, "intg": 0.8 },
        "mechanisms": { "ownership_path": ["redistribution"], "market_role": ["regulated_markets", "mixed_economy"], "change_velocity": ["ambitious", "progressive", "reformist"], "decision_making": ["representative", "democratic"], "welfare_mechanism": ["universal_services"], "integration_approach": ["pluralist", "multicultural"] }
    },
    {
        "name": "Social Liberalism",
        "description": "Supports personal freedoms but thinks government should help people through healthcare, education, and welfare to create a fairer society.",
        "stats": { "eqlt": 60, "lbrt": 75, "prog": 75, "idnt": 70, "popl": 35, "intv": 50, "ecol": 60, "powr": 55,
                   "chng": 45, "hmnn": 70, "mns": 50, "prty": 45, "scr": 80, "tech": 65, "wlfr": 70, "intg": 70 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.7, "idnt": 0.6, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.6, "tech": 0.5, "wlfr": 0.7, "intg": 0.6 },
        "mechanisms": { "ownership_path": ["redistribution", "social_democracy"], "market_role": ["regulated_markets"], "change_velocity": ["gradual", "moderate"], "decision_making": ["constitutional", "liberal_democracy"], "welfare_mechanism": ["social_insurance", "universal_services"] }
    },
    {
        "name": "Left-Liberalism",
        "description": "Combines support for personal freedoms with stronger emphasis on economic equality, favoring more government intervention to help workers.",
        "stats": { "eqlt": 60, "lbrt": 75, "prog": 80, "idnt": 75, "popl": 40, "intv": 45, "ecol": 65, "powr": 55,
                   "chng": 50, "hmnn": 75, "mns": 55, "prty": 50, "scr": 85, "tech": 65, "wlfr": 75, "intg": 80 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.8, "idnt": 0.7, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.7, "tech": 0.5, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Egalitarian Liberalism",
        "description": "Society should be organized to benefit the least advantaged members, with inequalities only justified if they help everyone.",
        "stats": { "eqlt": 65, "lbrt": 75, "prog": 75, "idnt": 70, "popl": 35, "intv": 45, "ecol": 60, "powr": 55,
                   "chng": 45, "hmnn": 75, "mns": 60, "prty": 50, "scr": 80, "tech": 60, "wlfr": 75, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 0.8, "prog": 0.6, "idnt": 0.6, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.6, "prty": 0.5, "scr": 0.6, "tech": 0.4, "wlfr": 0.8, "intg": 0.6 }
    },
    {
        "name": "Rawlsianism",
        "description": "Justice requires that social arrangements be designed as if we didn't know what position we'd hold—leading to strong protections for the worst off.",
        "stats": { "eqlt": 70, "lbrt": 70, "prog": 70, "idnt": 65, "popl": 30, "intv": 45, "ecol": 55, "powr": 55,
                   "chng": 40, "hmnn": 70, "mns": 70, "prty": 55, "scr": 80, "tech": 55, "wlfr": 80, "intg": 65 },
        "salience": { "eqlt": 0.9, "lbrt": 0.8, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.8, "mns": 0.8, "prty": 0.6, "scr": 0.6, "tech": 0.4, "wlfr": 0.9, "intg": 0.5 }
    },

    // ========================================
    // GREEN / ENVIRONMENTAL
    // ========================================
    {
        "name": "Green Politics",
        "description": "Environmental protection should be at the center of government policy, alongside social justice and peaceful conflict resolution.",
        "stats": { "eqlt": 70, "lbrt": 70, "prog": 85, "idnt": 75, "popl": 50, "intv": 40, "ecol": 100, "powr": 70,
                   "chng": 65, "hmnn": 75, "mns": 70, "prty": 65, "scr": 75, "tech": 50, "wlfr": 80, "intg": 75 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.6, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 1.0, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.6, "wlfr": 0.7, "intg": 0.6 }
    },
    {
        "name": "Green Liberalism",
        "description": "Combines support for free markets and individual rights with strong environmental protection and sustainable development.",
        "stats": { "eqlt": 55, "lbrt": 70, "prog": 80, "idnt": 70, "popl": 40, "intv": 45, "ecol": 85, "powr": 60,
                   "chng": 55, "hmnn": 70, "mns": 60, "prty": 50, "scr": 80, "tech": 60, "wlfr": 65, "intg": 70 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.6, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.9, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.6, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },
    {
        "name": "Green Conservatism",
        "description": "Protecting the natural environment is a conservative value—we should preserve nature just as we preserve traditional institutions.",
        "stats": { "eqlt": 45, "lbrt": 55, "prog": 45, "idnt": 45, "popl": 40, "intv": 40, "ecol": 75, "powr": 55,
                   "chng": 35, "hmnn": 50, "mns": 55, "prty": 40, "scr": 45, "tech": 50, "wlfr": 50, "intg": 50 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.6, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 0.9, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.4, "tech": 0.5, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Degrowth",
        "description": "The economy shouldn't keep growing forever; we need to deliberately shrink economic activity in wealthy countries to live within environmental limits.",
        "stats": { "eqlt": 75, "lbrt": 65, "prog": 70, "idnt": 65, "popl": 55, "intv": 30, "ecol": 100, "powr": 75,
                   "chng": 80, "hmnn": 75, "mns": 85, "prty": 80, "scr": 65, "tech": 20, "wlfr": 80, "intg": 65 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 1.0, "powr": 0.7,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.7, "prty": 0.7, "scr": 0.4, "tech": 0.9, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Deep Ecology",
        "description": "Nature has value in itself, not just because it's useful to humans—all living things have an equal right to exist and thrive.",
        "stats": { "eqlt": 65, "lbrt": 70, "prog": 60, "idnt": 60, "popl": 50, "intv": 25, "ecol": 100, "powr": 70,
                   "chng": 70, "hmnn": 70, "mns": 90, "prty": 75, "scr": 55, "tech": 15, "wlfr": 70, "intg": 60 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 1.0, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.7, "mns": 0.8, "prty": 0.6, "scr": 0.4, "tech": 0.8, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Solarpunk",
        "description": "An optimistic vision of the future where clean energy, community cooperation, and nature-friendly technology create beautiful, sustainable societies.",
        "stats": { "eqlt": 75, "lbrt": 75, "prog": 95, "idnt": 70, "popl": 55, "intv": 30, "ecol": 95, "powr": 80,
                   "chng": 75, "hmnn": 85, "mns": 70, "prty": 75, "scr": 75, "tech": 80, "wlfr": 85, "intg": 80 },
        "salience": { "eqlt": 0.6, "lbrt": 0.7, "prog": 0.8, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 1.0, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.8, "mns": 0.5, "prty": 0.6, "scr": 0.5, "tech": 0.9, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Bright Green Environmentalism",
        "description": "New technology and smart design can let us live well while helping the environment—embrace innovation as a tool for sustainability.",
        "stats": { "eqlt": 55, "lbrt": 65, "prog": 90, "idnt": 70, "popl": 35, "intv": 45, "ecol": 85, "powr": 55,
                   "chng": 60, "hmnn": 75, "mns": 50, "prty": 50, "scr": 85, "tech": 95, "wlfr": 65, "intg": 70 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.7, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.9, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.4, "prty": 0.4, "scr": 0.6, "tech": 1.0, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Ecofeminism",
        "description": "The domination of nature and the domination of women are connected; true environmentalism requires challenging patriarchal systems.",
        "stats": { "eqlt": 80, "lbrt": 70, "prog": 90, "idnt": 70, "popl": 55, "intv": 25, "ecol": 95, "powr": 75,
                   "chng": 70, "hmnn": 85, "mns": 75, "prty": 75, "scr": 70, "tech": 35, "wlfr": 80, "intg": 80 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.8, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 1.0, "powr": 0.7,
                      "chng": 0.6, "hmnn": 0.8, "mns": 0.6, "prty": 0.6, "scr": 0.5, "tech": 0.6, "wlfr": 0.7, "intg": 0.7 }
    },

    // ========================================
    // LIBERAL / CENTRIST
    // ========================================
    {
        "name": "Liberalism",
        "description": "Believes in individual rights, democracy, free markets, and the rule of law, with government protecting freedoms while providing some public services.",
        "stats": { "eqlt": 50, "lbrt": 75, "prog": 65, "idnt": 65, "popl": 30, "intv": 50, "ecol": 50, "powr": 55,
                   "chng": 45, "hmnn": 60, "mns": 55, "prty": 35, "scr": 75, "tech": 60, "wlfr": 55, "intg": 60 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Classical Liberalism",
        "description": "The government should mostly stay out of people's lives and the economy, letting individuals make their own choices and businesses compete freely.",
        "stats": { "eqlt": 30, "lbrt": 85, "prog": 70, "idnt": 60, "popl": 35, "intv": 35, "ecol": 40, "powr": 65,
                   "chng": 50, "hmnn": 50, "mns": 70, "prty": 15, "scr": 80, "tech": 60, "wlfr": 25, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 1.0, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.6, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 0.8, "scr": 0.6, "tech": 0.4, "wlfr": 0.7, "intg": 0.4 },
        "mechanisms": { "ownership_path": ["status_quo", "market_preference"], "market_role": ["free_market", "light_regulation"], "change_velocity": ["gradual", "moderate"], "decision_making": ["constitutional", "liberal_democracy"], "welfare_mechanism": ["means_tested", "targeted"] }
    },
    {
        "name": "Centrism",
        "description": "Favors moderate policies and compromise, avoiding the more dramatic changes proposed by either the left or the right.",
        "stats": { "eqlt": 50, "lbrt": 55, "prog": 50, "idnt": 50, "popl": 30, "intv": 50, "ecol": 50, "powr": 50,
                   "chng": 30, "hmnn": 50, "mns": 40, "prty": 40, "scr": 60, "tech": 55, "wlfr": 55, "intg": 50 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.4, "idnt": 0.4, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.4,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.4, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Radical Centrism",
        "description": "Rejects the traditional left-right divide and picks ideas from both sides based on what actually works, prioritizing practical solutions.",
        "stats": { "eqlt": 50, "lbrt": 60, "prog": 60, "idnt": 55, "popl": 25, "intv": 45, "ecol": 55, "powr": 55,
                   "chng": 55, "hmnn": 55, "mns": 35, "prty": 45, "scr": 70, "tech": 70, "wlfr": 55, "intg": 55 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.5, "idnt": 0.4, "popl": 0.5, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.7, "prty": 0.5, "scr": 0.5, "tech": 0.6, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Third Way",
        "description": "Tries to blend free-market economics with social programs, accepting capitalism while using government policy to reduce inequality.",
        "stats": { "eqlt": 45, "lbrt": 60, "prog": 65, "idnt": 65, "popl": 25, "intv": 55, "ecol": 50, "powr": 50,
                   "chng": 40, "hmnn": 55, "mns": 35, "prty": 40, "scr": 75, "tech": 70, "wlfr": 60, "intg": 60 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.7, "prty": 0.6, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["redistribution"], "market_role": ["pragmatic", "mixed_economy"], "change_velocity": ["incremental", "pragmatic"], "decision_making": ["representative", "technocratic"], "welfare_mechanism": ["means_tested", "social_insurance"] }
    },
    {
        "name": "Blairism",
        "description": "Tony Blair's approach of modernizing the center-left by accepting markets, emphasizing education, and pursuing an active foreign policy.",
        "stats": { "eqlt": 45, "lbrt": 60, "prog": 70, "idnt": 70, "popl": 25, "intv": 72, "ecol": 50, "powr": 45,
                   "chng": 45, "hmnn": 55, "mns": 30, "prty": 40, "scr": 80, "tech": 70, "wlfr": 60, "intg": 65 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.6, "idnt": 0.6, "popl": 0.5, "intv": 0.7, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.7, "prty": 0.5, "scr": 0.6, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },
    {
        "name": "Clintonism",
        "description": "Bill Clinton's centrist Democratic approach combining free trade, welfare reform, and fiscal responsibility with socially progressive positions.",
        "stats": { "eqlt": 45, "lbrt": 60, "prog": 65, "idnt": 70, "popl": 25, "intv": 60, "ecol": 50, "powr": 45,
                   "chng": 40, "hmnn": 55, "mns": 30, "prty": 35, "scr": 75, "tech": 70, "wlfr": 55, "intg": 60 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.5, "idnt": 0.6, "popl": 0.5, "intv": 0.6, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.7, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },

    // ========================================
    // TECHNOCRACY / FUTURISM
    // ========================================
    {
        "name": "Technocracy",
        "description": "Experts and scientists should have major influence in policy decisions, arguing that technical knowledge leads to better outcomes than political debates.",
        "stats": { "eqlt": 55, "lbrt": 45, "prog": 80, "idnt": 60, "popl": 5, "intv": 50, "ecol": 60, "powr": 30,
                   "chng": 55, "hmnn": 60, "mns": 35, "prty": 50, "scr": 95, "tech": 95, "wlfr": 70, "intg": 50 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.7, "idnt": 0.4, "popl": 0.9, "intv": 0.4, "ecol": 0.5, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.6, "prty": 0.5, "scr": 0.8, "tech": 1.0, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Transhumanism",
        "description": "Humans should use technology to overcome biological limits like aging and disease—enhancing human abilities through science is positive and inevitable.",
        "stats": { "eqlt": 50, "lbrt": 70, "prog": 100, "idnt": 70, "popl": 25, "intv": 45, "ecol": 40, "powr": 55,
                   "chng": 90, "hmnn": 90, "mns": 50, "prty": 45, "scr": 95, "tech": 100, "wlfr": 60, "intg": 70 },
        "salience": { "eqlt": 0.4, "lbrt": 0.6, "prog": 1.0, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.8, "hmnn": 1.0, "mns": 0.4, "prty": 0.4, "scr": 0.7, "tech": 1.0, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Technoliberalism",
        "description": "Technology and the internet should be free from government control, combining faith in technological progress with preference for individual freedom.",
        "stats": { "eqlt": 35, "lbrt": 70, "prog": 90, "idnt": 75, "popl": 20, "intv": 45, "ecol": 50, "powr": 50,
                   "chng": 65, "hmnn": 65, "mns": 40, "prty": 30, "scr": 90, "tech": 95, "wlfr": 50, "intg": 65 },
        "salience": { "eqlt": 0.4, "lbrt": 0.7, "prog": 0.8, "idnt": 0.6, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.7, "tech": 1.0, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Technogaianism",
        "description": "Technology can and should be used to restore and protect the environment—combines environmentalism with optimism about technological solutions.",
        "stats": { "eqlt": 55, "lbrt": 65, "prog": 95, "idnt": 70, "popl": 30, "intv": 40, "ecol": 90, "powr": 55,
                   "chng": 70, "hmnn": 80, "mns": 55, "prty": 55, "scr": 85, "tech": 95, "wlfr": 65, "intg": 70 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.7, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.9, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.7, "mns": 0.5, "prty": 0.5, "scr": 0.6, "tech": 1.0, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Effective Altruism",
        "description": "Use evidence and reason to figure out how to do the most good possible, then act on it—often focused on global poverty or future risks.",
        "stats": { "eqlt": 55, "lbrt": 65, "prog": 85, "idnt": 80, "popl": 15, "intv": 50, "ecol": 65, "powr": 45,
                   "chng": 55, "hmnn": 75, "mns": 40, "prty": 45, "scr": 90, "tech": 80, "wlfr": 75, "intg": 70 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.6, "idnt": 0.8, "popl": 0.5, "intv": 0.6, "ecol": 0.6, "powr": 0.4,
                      "chng": 0.5, "hmnn": 0.8, "mns": 0.8, "prty": 0.5, "scr": 0.7, "tech": 0.7, "wlfr": 0.9, "intg": 0.6 }
    },
    {
        "name": "Longtermism",
        "description": "The most important thing we can do is protect the long-term future of humanity, including managing risks from advanced technology.",
        "stats": { "eqlt": 50, "lbrt": 60, "prog": 90, "idnt": 75, "popl": 10, "intv": 45, "ecol": 70, "powr": 40,
                   "chng": 60, "hmnn": 70, "mns": 55, "prty": 45, "scr": 90, "tech": 90, "wlfr": 65, "intg": 65 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.8, "idnt": 0.7, "popl": 0.5, "intv": 0.5, "ecol": 0.7, "powr": 0.4,
                      "chng": 0.7, "hmnn": 0.8, "mns": 0.6, "prty": 0.4, "scr": 0.7, "tech": 0.8, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Post-Scarcity Politics",
        "description": "When automation produces enough for everyone, we'll need new political arrangements since scarcity has driven most political conflicts.",
        "stats": { "eqlt": 90, "lbrt": 85, "prog": 95, "idnt": 80, "popl": 55, "intv": 25, "ecol": 75, "powr": 90,
                   "chng": 85, "hmnn": 95, "mns": 60, "prty": 90, "scr": 85, "tech": 95, "wlfr": 100, "intg": 80 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.8, "idnt": 0.6, "popl": 0.4, "intv": 0.4, "ecol": 0.6, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.9, "mns": 0.5, "prty": 0.8, "scr": 0.6, "tech": 1.0, "wlfr": 1.0, "intg": 0.6 }
    },

    // ========================================
    // LIBERTARIANISM
    // ========================================
    {
        "name": "Libertarianism",
        "description": "People should have maximum freedom to live as they choose, with minimal government interference in both personal matters and the economy.",
        "stats": { "eqlt": 25, "lbrt": 90, "prog": 60, "idnt": 55, "popl": 45, "intv": 20, "ecol": 35, "powr": 80,
                   "chng": 55, "hmnn": 40, "mns": 75, "prty": 15, "scr": 70, "tech": 65, "wlfr": 15, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 1.0, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.6, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 0.8, "scr": 0.5, "tech": 0.4, "wlfr": 0.7, "intg": 0.4 },
        "mechanisms": { "ownership_path": ["status_quo", "market_preference"], "market_role": ["free_market", "light_regulation"], "change_velocity": ["moderate", "pragmatic"], "decision_making": ["constitutional", "liberal_democracy"], "welfare_mechanism": ["charity", "voluntary"] }
    },
    {
        "name": "Left-Libertarianism",
        "description": "Combines personal freedom with the belief that natural resources belong to everyone equally, not just whoever claims them first.",
        "stats": { "eqlt": 65, "lbrt": 90, "prog": 75, "idnt": 70, "popl": 50, "intv": 20, "ecol": 60, "powr": 85,
                   "chng": 60, "hmnn": 70, "mns": 70, "prty": 60, "scr": 75, "tech": 55, "wlfr": 60, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 1.0, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.4, "wlfr": 0.6, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["social_wealth_fund", "redistribution"], "market_role": ["regulated_markets", "light_regulation"], "change_velocity": ["gradual"], "decision_making": ["direct_democracy", "liberal_democracy"], "welfare_mechanism": ["ubi", "cash_transfers"] }
    },
    {
        "name": "Right-Libertarianism",
        "description": "Strongly emphasizes private property rights and free-market capitalism, believing individuals should own and trade property with few restrictions.",
        "stats": { "eqlt": 15, "lbrt": 90, "prog": 55, "idnt": 50, "popl": 40, "intv": 15, "ecol": 30, "powr": 80,
                   "chng": 55, "hmnn": 35, "mns": 80, "prty": 5, "scr": 65, "tech": 70, "wlfr": 10, "intg": 50 },
        "salience": { "eqlt": 0.7, "lbrt": 1.0, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.6, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.7, "prty": 0.9, "scr": 0.5, "tech": 0.5, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Paleolibertarianism",
        "description": "Blends libertarian economics with traditional conservative values, supporting free markets while emphasizing family, religion, and cultural traditions.",
        "stats": { "eqlt": 15, "lbrt": 85, "prog": 25, "idnt": 30, "popl": 50, "intv": 15, "ecol": 30, "powr": 80,
                   "chng": 45, "hmnn": 30, "mns": 75, "prty": 10, "scr": 35, "tech": 50, "wlfr": 10, "intg": 25 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.7, "idnt": 0.6, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.6, "prty": 0.8, "scr": 0.6, "tech": 0.4, "wlfr": 0.7, "intg": 0.6 }
    },
    {
        "name": "Bleeding-Heart Libertarianism",
        "description": "Free markets and limited government are the best ways to help the poor—cares about the disadvantaged but through libertarian means.",
        "stats": { "eqlt": 40, "lbrt": 85, "prog": 70, "idnt": 65, "popl": 40, "intv": 20, "ecol": 50, "powr": 75,
                   "chng": 50, "hmnn": 55, "mns": 65, "prty": 30, "scr": 75, "tech": 65, "wlfr": 45, "intg": 65 },
        "salience": { "eqlt": 0.7, "lbrt": 0.9, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.5, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 0.6, "scr": 0.5, "tech": 0.4, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Minarchism",
        "description": "Government should exist but be as small as possible, limited only to essential functions like police, courts, and military—nothing more.",
        "stats": { "eqlt": 15, "lbrt": 85, "prog": 55, "idnt": 50, "popl": 40, "intv": 25, "ecol": 30, "powr": 75,
                   "chng": 50, "hmnn": 35, "mns": 80, "prty": 10, "scr": 65, "tech": 60, "wlfr": 15, "intg": 50 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.6, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.7, "prty": 0.8, "scr": 0.5, "tech": 0.4, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Objectivism",
        "description": "Ayn Rand's philosophy celebrating rational self-interest and individual achievement—pursuing your own happiness through productive work is morally good.",
        "stats": { "eqlt": 5, "lbrt": 80, "prog": 65, "idnt": 45, "popl": 20, "intv": 30, "ecol": 20, "powr": 70,
                   "chng": 50, "hmnn": 70, "mns": 90, "prty": 0, "scr": 90, "tech": 75, "wlfr": 5, "intg": 45 },
        "salience": { "eqlt": 0.8, "lbrt": 0.9, "prog": 0.5, "idnt": 0.4, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.9, "mns": 1.0, "prty": 1.0, "scr": 0.7, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Geolibertarianism",
        "description": "Supports personal and economic freedom but believes landowners should pay the community for exclusive use of land, since land belongs to everyone.",
        "stats": { "eqlt": 40, "lbrt": 85, "prog": 60, "idnt": 55, "popl": 40, "intv": 20, "ecol": 60, "powr": 80,
                   "chng": 50, "hmnn": 50, "mns": 65, "prty": 50, "scr": 70, "tech": 60, "wlfr": 35, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.5, "ecol": 0.6, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Libertarian Paternalism",
        "description": "Gentle nudges can help people make better choices without restricting freedom—design systems that steer people toward good decisions.",
        "stats": { "eqlt": 40, "lbrt": 70, "prog": 65, "idnt": 60, "popl": 25, "intv": 40, "ecol": 55, "powr": 60,
                   "chng": 40, "hmnn": 50, "mns": 40, "prty": 35, "scr": 75, "tech": 70, "wlfr": 55, "intg": 55 },
        "salience": { "eqlt": 0.5, "lbrt": 0.8, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.7, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.4 }
    },

    // ========================================
    // CONSERVATISM
    // ========================================
    {
        "name": "Conservatism",
        "description": "Values tradition, stability, and gradual change over rapid reforms, wanting to preserve institutions and customs that have worked well.",
        "stats": { "eqlt": 35, "lbrt": 50, "prog": 25, "idnt": 35, "popl": 35, "intv": 50, "ecol": 35, "powr": 45,
                   "chng": 15, "hmnn": 35, "mns": 55, "prty": 25, "scr": 35, "tech": 45, "wlfr": 35, "intg": 35 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.8, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.9, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 },
        "mechanisms": { "ownership_path": ["status_quo", "market_preference"], "market_role": ["pragmatic", "light_regulation"], "change_velocity": ["conservative", "stability", "conservative_reform"], "decision_making": ["representative", "constitutional"], "welfare_mechanism": ["means_tested", "targeted"], "legitimacy": ["traditional"] }
    },
    {
        "name": "Liberal Conservatism",
        "description": "Mixes traditional conservative values with liberal support for individual rights and market economics, favoring gradual change.",
        "stats": { "eqlt": 35, "lbrt": 60, "prog": 35, "idnt": 45, "popl": 30, "intv": 45, "ecol": 40, "powr": 50,
                   "chng": 25, "hmnn": 40, "mns": 50, "prty": 25, "scr": 50, "tech": 55, "wlfr": 40, "intg": 45 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.6, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Libertarian Conservatism",
        "description": "Combines conservative social values with strong emphasis on economic freedom, limited government, and individual liberty.",
        "stats": { "eqlt": 20, "lbrt": 70, "prog": 40, "idnt": 45, "popl": 35, "intv": 35, "ecol": 35, "powr": 65,
                   "chng": 35, "hmnn": 35, "mns": 65, "prty": 15, "scr": 50, "tech": 55, "wlfr": 20, "intg": 40 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.5, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.4, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Fiscal Conservatism",
        "description": "Focuses on keeping government spending low, reducing taxes, and balancing budgets—government should be careful with taxpayer money.",
        "stats": { "eqlt": 20, "lbrt": 60, "prog": 45, "idnt": 45, "popl": 30, "intv": 40, "ecol": 35, "powr": 55,
                   "chng": 25, "hmnn": 35, "mns": 55, "prty": 15, "scr": 55, "tech": 55, "wlfr": 20, "intg": 45 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Social Conservatism",
        "description": "Wants to preserve traditional values around family, religion, and morality, often opposing rapid changes to social norms.",
        "stats": { "eqlt": 40, "lbrt": 40, "prog": 15, "idnt": 30, "popl": 45, "intv": 45, "ecol": 35, "powr": 40,
                   "chng": 10, "hmnn": 30, "mns": 60, "prty": 30, "scr": 15, "tech": 40, "wlfr": 40, "intg": 25 },
        "salience": { "eqlt": 0.4, "lbrt": 0.6, "prog": 1.0, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.6, "prty": 0.4, "scr": 0.8, "tech": 0.4, "wlfr": 0.5, "intg": 0.7 }
    },
    {
        "name": "Traditionalist Conservatism",
        "description": "Society should be guided by inherited wisdom, religious values, and long-established customs rather than abstract theories or rapid modernization.",
        "stats": { "eqlt": 40, "lbrt": 40, "prog": 10, "idnt": 25, "popl": 35, "intv": 35, "ecol": 40, "powr": 40,
                   "chng": 5, "hmnn": 25, "mns": 70, "prty": 30, "scr": 10, "tech": 30, "wlfr": 35, "intg": 20 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 1.0, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.7, "prty": 0.5, "scr": 0.7, "tech": 0.5, "wlfr": 0.4, "intg": 0.6 }
    },
    {
        "name": "Burkean Conservatism",
        "description": "Society is a complex evolved organism—change should be gradual and respect inherited institutions, skeptical of reform based on abstract reason.",
        "stats": { "eqlt": 40, "lbrt": 50, "prog": 20, "idnt": 35, "popl": 25, "intv": 40, "ecol": 45, "powr": 45,
                   "chng": 10, "hmnn": 30, "mns": 60, "prty": 30, "scr": 30, "tech": 40, "wlfr": 40, "intg": 35 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.8, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 1.0, "hmnn": 0.8, "mns": 0.6, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "One-Nation Conservatism",
        "description": "The wealthy and powerful have a duty to help the less fortunate—supports some welfare programs to keep society united rather than divided.",
        "stats": { "eqlt": 50, "lbrt": 50, "prog": 35, "idnt": 40, "popl": 40, "intv": 45, "ecol": 45, "powr": 45,
                   "chng": 25, "hmnn": 45, "mns": 50, "prty": 40, "scr": 40, "tech": 50, "wlfr": 55, "intg": 40 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.5, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Compassionate Conservatism",
        "description": "Conservative principles combined with government efforts to address social problems through faith-based and community initiatives.",
        "stats": { "eqlt": 45, "lbrt": 50, "prog": 35, "idnt": 45, "popl": 40, "intv": 55, "ecol": 40, "powr": 45,
                   "chng": 30, "hmnn": 50, "mns": 50, "prty": 35, "scr": 35, "tech": 50, "wlfr": 55, "intg": 45 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.7, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Neoconservatism",
        "description": "America should actively spread democracy and free markets around the world, including through military intervention when necessary.",
        "stats": { "eqlt": 30, "lbrt": 45, "prog": 40, "idnt": 35, "popl": 25, "intv": 90, "ecol": 30, "powr": 35,
                   "chng": 50, "hmnn": 40, "mns": 55, "prty": 20, "scr": 55, "tech": 65, "wlfr": 35, "intg": 40 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 1.0, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Paleoconservatism",
        "description": "Opposes foreign wars, mass immigration, and free trade, valuing small-town life, traditional Christianity, and staying out of international affairs.",
        "stats": { "eqlt": 35, "lbrt": 50, "prog": 15, "idnt": 15, "popl": 55, "intv": 15, "ecol": 40, "powr": 55,
                   "chng": 10, "hmnn": 25, "mns": 65, "prty": 25, "scr": 25, "tech": 40, "wlfr": 30, "intg": 15 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.8, "idnt": 0.9, "popl": 0.6, "intv": 0.8, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Thatcherism",
        "description": "Margaret Thatcher's approach of privatization, deregulation, reducing union power, and free-market economics combined with traditional values.",
        "stats": { "eqlt": 15, "lbrt": 55, "prog": 40, "idnt": 30, "popl": 45, "intv": 55, "ecol": 25, "powr": 40,
                   "chng": 55, "hmnn": 30, "mns": 55, "prty": 10, "scr": 55, "tech": 60, "wlfr": 20, "intg": 35 },
        "salience": { "eqlt": 0.9, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.5, "tech": 0.5, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Reaganism",
        "description": "Ronald Reagan's combination of tax cuts, reduced regulation, strong anti-communism, and optimistic faith in free markets and American greatness.",
        "stats": { "eqlt": 15, "lbrt": 55, "prog": 35, "idnt": 25, "popl": 50, "intv": 75, "ecol": 25, "powr": 45,
                   "chng": 50, "hmnn": 30, "mns": 55, "prty": 10, "scr": 45, "tech": 65, "wlfr": 25, "intg": 35 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.6, "intv": 0.9, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.5, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Fusionism",
        "description": "The American conservative movement's blend of traditional values with free-market economics and strong anti-communism.",
        "stats": { "eqlt": 20, "lbrt": 70, "prog": 30, "idnt": 35, "popl": 40, "intv": 55, "ecol": 30, "powr": 60,
                   "chng": 40, "hmnn": 35, "mns": 65, "prty": 15, "scr": 40, "tech": 55, "wlfr": 25, "intg": 35 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.6, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.4, "wlfr": 0.6, "intg": 0.4 }
    },

    // ========================================
    // CHRISTIAN / RELIGIOUS
    // ========================================
    {
        "name": "Christian Democracy",
        "description": "Applies Christian ethics to politics, supporting family values, worker protections, and a market economy with a social safety net.",
        "stats": { "eqlt": 55, "lbrt": 55, "prog": 30, "idnt": 50, "popl": 35, "intv": 45, "ecol": 50, "powr": 50,
                   "chng": 25, "hmnn": 50, "mns": 55, "prty": 45, "scr": 20, "tech": 50, "wlfr": 65, "intg": 45 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.9, "tech": 0.4, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Christian Socialism",
        "description": "Christianity calls for socialist economics—shared wealth and workers' rights, seeing Jesus's teachings as requiring systemic economic change.",
        "stats": { "eqlt": 75, "lbrt": 55, "prog": 35, "idnt": 50, "popl": 50, "intv": 30, "ecol": 55, "powr": 55,
                   "chng": 50, "hmnn": 70, "mns": 70, "prty": 70, "scr": 15, "tech": 45, "wlfr": 80, "intg": 50 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.7, "mns": 0.7, "prty": 0.7, "scr": 0.9, "tech": 0.3, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Liberation Theology",
        "description": "Christianity requires active work to free poor and oppressed people from unjust systems, blending faith with social justice activism.",
        "stats": { "eqlt": 80, "lbrt": 60, "prog": 50, "idnt": 55, "popl": 70, "intv": 30, "ecol": 55, "powr": 65,
                   "chng": 70, "hmnn": 80, "mns": 75, "prty": 75, "scr": 20, "tech": 40, "wlfr": 85, "intg": 60 },
        "salience": { "eqlt": 0.9, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.8, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.8, "mns": 0.7, "prty": 0.7, "scr": 0.8, "tech": 0.3, "wlfr": 0.9, "intg": 0.5 }
    },
    {
        "name": "Distributism",
        "description": "Property and resources should be spread widely among many small owners rather than concentrated in big corporations or the state.",
        "stats": { "eqlt": 60, "lbrt": 55, "prog": 25, "idnt": 40, "popl": 55, "intv": 30, "ecol": 55, "powr": 70,
                   "chng": 35, "hmnn": 55, "mns": 65, "prty": 65, "scr": 20, "tech": 40, "wlfr": 65, "intg": 45 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.5, "idnt": 0.4, "popl": 0.6, "intv": 0.4, "ecol": 0.5, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.6, "prty": 0.9, "scr": 0.8, "tech": 0.4, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Catholic Integralism",
        "description": "The Catholic Church should have authority over political matters, and civil law should align with Church doctrine.",
        "stats": { "eqlt": 50, "lbrt": 20, "prog": 5, "idnt": 30, "popl": 40, "intv": 45, "ecol": 45, "powr": 20,
                   "chng": 10, "hmnn": 30, "mns": 80, "prty": 45, "scr": 0, "tech": 35, "wlfr": 50, "intg": 20 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.8, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.6, "mns": 0.8, "prty": 0.5, "scr": 1.0, "tech": 0.4, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Dominionism",
        "description": "Christians should work to create a nation governed by Christian principles and biblical law.",
        "stats": { "eqlt": 35, "lbrt": 25, "prog": 5, "idnt": 25, "popl": 55, "intv": 55, "ecol": 30, "powr": 25,
                   "chng": 40, "hmnn": 25, "mns": 80, "prty": 30, "scr": 0, "tech": 45, "wlfr": 35, "intg": 15 },
        "salience": { "eqlt": 0.4, "lbrt": 0.7, "prog": 0.8, "idnt": 0.5, "popl": 0.6, "intv": 0.6, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.8, "prty": 0.4, "scr": 1.0, "tech": 0.4, "wlfr": 0.4, "intg": 0.5 }
    },
    {
        "name": "Christian Nationalism",
        "description": "A country's national identity should be explicitly tied to Christianity, with Christian values shaping laws and public policy.",
        "stats": { "eqlt": 40, "lbrt": 35, "prog": 10, "idnt": 15, "popl": 60, "intv": 50, "ecol": 30, "powr": 35,
                   "chng": 30, "hmnn": 30, "mns": 65, "prty": 30, "scr": 5, "tech": 45, "wlfr": 40, "intg": 10 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.7, "idnt": 0.9, "popl": 0.7, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.6, "prty": 0.4, "scr": 1.0, "tech": 0.4, "wlfr": 0.4, "intg": 0.8 }
    },
    {
        "name": "Theocracy",
        "description": "Religious leaders should run the government, and laws should be based on religious teachings rather than secular principles.",
        "stats": { "eqlt": 45, "lbrt": 15, "prog": 5, "idnt": 25, "popl": 40, "intv": 50, "ecol": 40, "powr": 10,
                   "chng": 15, "hmnn": 25, "mns": 90, "prty": 40, "scr": 0, "tech": 35, "wlfr": 45, "intg": 15 },
        "salience": { "eqlt": 0.4, "lbrt": 0.9, "prog": 0.8, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.9, "prty": 0.5, "scr": 1.0, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Religious Fundamentalism",
        "description": "Sacred texts should be taken literally, and traditional religious values should guide both personal life and public policy.",
        "stats": { "eqlt": 40, "lbrt": 15, "prog": 0, "idnt": 20, "popl": 55, "intv": 45, "ecol": 35, "powr": 30,
                   "chng": 20, "hmnn": 20, "mns": 95, "prty": 35, "scr": 0, "tech": 25, "wlfr": 40, "intg": 10 },
        "salience": { "eqlt": 0.4, "lbrt": 0.7, "prog": 1.0, "idnt": 0.5, "popl": 0.6, "intv": 0.5, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.7, "mns": 1.0, "prty": 0.4, "scr": 1.0, "tech": 0.6, "wlfr": 0.4, "intg": 0.6 }
    },
    {
        "name": "Islamic Socialism",
        "description": "Combines Islamic principles of social justice with socialist economics and opposition to exploitation.",
        "stats": { "eqlt": 75, "lbrt": 40, "prog": 30, "idnt": 40, "popl": 55, "intv": 35, "ecol": 45, "powr": 45,
                   "chng": 55, "hmnn": 60, "mns": 65, "prty": 70, "scr": 10, "tech": 45, "wlfr": 75, "intg": 45 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.9, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Political Islam",
        "description": "Islamic law and principles should be the foundation of government, though approaches range from democratic to authoritarian.",
        "stats": { "eqlt": 50, "lbrt": 25, "prog": 10, "idnt": 30, "popl": 55, "intv": 45, "ecol": 40, "powr": 30,
                   "chng": 40, "hmnn": 35, "mns": 80, "prty": 45, "scr": 5, "tech": 40, "wlfr": 50, "intg": 25 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.7, "idnt": 0.6, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.8, "prty": 0.5, "scr": 1.0, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Buddhist Socialism",
        "description": "Buddhist ethics like compassion and non-attachment combine naturally with socialist economics and reducing inequality.",
        "stats": { "eqlt": 75, "lbrt": 65, "prog": 50, "idnt": 60, "popl": 50, "intv": 20, "ecol": 75, "powr": 65,
                   "chng": 45, "hmnn": 80, "mns": 75, "prty": 70, "scr": 25, "tech": 40, "wlfr": 75, "intg": 65 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.4, "idnt": 0.5, "popl": 0.4, "intv": 0.6, "ecol": 0.7, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.9, "mns": 0.8, "prty": 0.7, "scr": 0.8, "tech": 0.4, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Hindu Nationalism",
        "description": "India should be defined by Hindu culture and values, with Hinduism central to national identity.",
        "stats": { "eqlt": 40, "lbrt": 35, "prog": 20, "idnt": 10, "popl": 65, "intv": 50, "ecol": 40, "powr": 35,
                   "chng": 40, "hmnn": 30, "mns": 60, "prty": 35, "scr": 10, "tech": 50, "wlfr": 45, "intg": 10 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.6, "idnt": 1.0, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.9, "tech": 0.4, "wlfr": 0.4, "intg": 0.9 }
    },
    {
        "name": "Religious Zionism",
        "description": "Jewish settlement in Israel is a religious duty commanded by God, combining traditional faith with nationalism.",
        "stats": { "eqlt": 45, "lbrt": 40, "prog": 20, "idnt": 10, "popl": 50, "intv": 60, "ecol": 40, "powr": 40,
                   "chng": 45, "hmnn": 35, "mns": 75, "prty": 40, "scr": 10, "tech": 50, "wlfr": 50, "intg": 15 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 1.0, "popl": 0.5, "intv": 0.7, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.7, "prty": 0.5, "scr": 0.9, "tech": 0.4, "wlfr": 0.5, "intg": 0.7 }
    },

    // ========================================
    // RIGHT-WING POPULISM / NATIONALISM
    // ========================================
    {
        "name": "Right-Wing Populism",
        "description": "Claims to represent regular folks against out-of-touch elites, focusing on reducing immigration and preserving traditional culture.",
        "stats": { "eqlt": 40, "lbrt": 40, "prog": 25, "idnt": 15, "popl": 90, "intv": 35, "ecol": 30, "powr": 45,
                   "chng": 55, "hmnn": 35, "mns": 55, "prty": 30, "scr": 35, "tech": 45, "wlfr": 45, "intg": 15 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.6, "idnt": 0.8, "popl": 1.0, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "National Populism",
        "description": "The government should put its own citizens first, skeptical of international organizations and policies seen as benefiting outsiders.",
        "stats": { "eqlt": 45, "lbrt": 40, "prog": 25, "idnt": 10, "popl": 90, "intv": 40, "ecol": 35, "powr": 40,
                   "chng": 55, "hmnn": 35, "mns": 55, "prty": 40, "scr": 35, "tech": 45, "wlfr": 50, "intg": 10 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 1.0, "popl": 1.0, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.9 }
    },
    {
        "name": "Trumpism",
        "description": "Prioritizes strict immigration control, economic nationalism, distrust of political and media establishments, and an America-first approach.",
        "stats": { "eqlt": 35, "lbrt": 45, "prog": 25, "idnt": 15, "popl": 90, "intv": 45, "ecol": 20, "powr": 40,
                   "chng": 55, "hmnn": 30, "mns": 40, "prty": 20, "scr": 35, "tech": 50, "wlfr": 35, "intg": 15 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 0.8, "popl": 1.0, "intv": 0.6, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.7 }
    },
    {
        "name": "National Conservatism",
        "description": "Emphasizes the nation's distinct culture and sovereignty, skeptical of both global markets and progressive social change.",
        "stats": { "eqlt": 40, "lbrt": 40, "prog": 20, "idnt": 10, "popl": 60, "intv": 40, "ecol": 35, "powr": 35,
                   "chng": 35, "hmnn": 30, "mns": 55, "prty": 30, "scr": 30, "tech": 50, "wlfr": 45, "intg": 15 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.7, "idnt": 0.9, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Civic Nationalism",
        "description": "National identity should be based on shared values and citizenship rather than ethnicity—anyone embracing the nation's principles can belong.",
        "stats": { "eqlt": 45, "lbrt": 55, "prog": 45, "idnt": 25, "popl": 50, "intv": 45, "ecol": 45, "powr": 50,
                   "chng": 35, "hmnn": 45, "mns": 55, "prty": 35, "scr": 55, "tech": 55, "wlfr": 50, "intg": 35 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.5, "idnt": 0.8, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.7 }
    },
    {
        "name": "Ethnonationalism",
        "description": "A nation should be defined by shared ethnicity or ancestry, with the country truly belonging to one particular ethnic group.",
        "stats": { "eqlt": 45, "lbrt": 25, "prog": 15, "idnt": 5, "popl": 60, "intv": 30, "ecol": 35, "powr": 30,
                   "chng": 45, "hmnn": 25, "mns": 60, "prty": 35, "scr": 25, "tech": 40, "wlfr": 50, "intg": 0 },
        "salience": { "eqlt": 0.4, "lbrt": 0.6, "prog": 0.6, "idnt": 1.0, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.4, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 1.0 }
    },
    {
        "name": "Identitarianism",
        "description": "European peoples have a right to preserve their ethnic and cultural identity, opposing immigration and multiculturalism as threats.",
        "stats": { "eqlt": 40, "lbrt": 35, "prog": 20, "idnt": 5, "popl": 65, "intv": 35, "ecol": 40, "powr": 35,
                   "chng": 50, "hmnn": 30, "mns": 60, "prty": 35, "scr": 30, "tech": 45, "wlfr": 45, "intg": 5 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.6, "idnt": 1.0, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.4, "tech": 0.4, "wlfr": 0.4, "intg": 1.0 }
    },
    {
        "name": "Producerism",
        "description": "Champions hardworking ordinary people—farmers, workers, small business owners—against both wealthy elites and those seen as not contributing.",
        "stats": { "eqlt": 50, "lbrt": 45, "prog": 30, "idnt": 25, "popl": 85, "intv": 35, "ecol": 40, "powr": 50,
                   "chng": 50, "hmnn": 40, "mns": 55, "prty": 45, "scr": 45, "tech": 50, "wlfr": 55, "intg": 30 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.4, "idnt": 0.5, "popl": 0.9, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.4, "wlfr": 0.6, "intg": 0.5 }
    },

    // ========================================
    // SYNCRETIC / THIRD POSITION
    // ========================================
    {
        "name": "National Bolshevism",
        "description": "Combines extreme nationalism with communist economics, wanting a strong nationalist state that abolishes private ownership of major industries.",
        "stats": { "eqlt": 85, "lbrt": 15, "prog": 30, "idnt": 5, "popl": 75, "intv": 50, "ecol": 35, "powr": 15,
                   "chng": 80, "hmnn": 45, "mns": 55, "prty": 90, "scr": 50, "tech": 55, "wlfr": 85, "intg": 10 },
        "salience": { "eqlt": 0.9, "lbrt": 0.7, "prog": 0.5, "idnt": 1.0, "popl": 0.7, "intv": 0.5, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.8 }
    },
    {
        "name": "Strasserism",
        "description": "A variant of early Nazi ideology that emphasized socialist economics and nationalizing industries, while retaining the movement's extreme nationalism and antisemitism.",
        "stats": { "eqlt": 75, "lbrt": 15, "prog": 25, "idnt": 5, "popl": 80, "intv": 50, "ecol": 35, "powr": 15,
                   "chng": 75, "hmnn": 40, "mns": 60, "prty": 80, "scr": 30, "tech": 50, "wlfr": 80, "intg": 5 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.5, "idnt": 1.0, "popl": 0.8, "intv": 0.5, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.9 }
    },
    {
        "name": "Third Position",
        "description": "Rejects both capitalism and communism, claiming to offer a third way combining nationalist ideas with some anti-capitalist economics.",
        "stats": { "eqlt": 55, "lbrt": 25, "prog": 20, "idnt": 10, "popl": 70, "intv": 45, "ecol": 40, "powr": 25,
                   "chng": 60, "hmnn": 35, "mns": 60, "prty": 55, "scr": 30, "tech": 45, "wlfr": 60, "intg": 15 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.5, "idnt": 0.9, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.7, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.8 }
    },
    {
        "name": "National Syndicalism",
        "description": "Workers organize into unions serving the nation rather than fighting employers, with the state coordinating for national interests.",
        "stats": { "eqlt": 70, "lbrt": 25, "prog": 30, "idnt": 10, "popl": 75, "intv": 55, "ecol": 35, "powr": 35,
                   "chng": 70, "hmnn": 45, "mns": 60, "prty": 75, "scr": 40, "tech": 55, "wlfr": 75, "intg": 15 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.4, "idnt": 0.9, "popl": 0.8, "intv": 0.6, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.6, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Peronism",
        "description": "Argentine movement mixing support for workers and unions with strong national pride and powerful central leadership.",
        "stats": { "eqlt": 60, "lbrt": 35, "prog": 40, "idnt": 25, "popl": 85, "intv": 40, "ecol": 40, "powr": 35,
                   "chng": 55, "hmnn": 50, "mns": 45, "prty": 55, "scr": 45, "tech": 55, "wlfr": 70, "intg": 40 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.4, "idnt": 0.7, "popl": 1.0, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Gaullism",
        "description": "French nationalism emphasizing national independence, strong presidential leadership, and a distinctive French role in world affairs.",
        "stats": { "eqlt": 50, "lbrt": 45, "prog": 45, "idnt": 20, "popl": 55, "intv": 55, "ecol": 40, "powr": 40,
                   "chng": 45, "hmnn": 40, "mns": 50, "prty": 40, "scr": 55, "tech": 60, "wlfr": 55, "intg": 35 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.4, "idnt": 0.9, "popl": 0.6, "intv": 0.6, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Kemalism",
        "description": "Turkish modernization emphasizing secularism, nationalism, and Western-style reforms while maintaining a strong state.",
        "stats": { "eqlt": 50, "lbrt": 40, "prog": 70, "idnt": 20, "popl": 50, "intv": 45, "ecol": 40, "powr": 30,
                   "chng": 70, "hmnn": 55, "mns": 50, "prty": 45, "scr": 90, "tech": 70, "wlfr": 55, "intg": 30 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.7, "idnt": 0.8, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 1.0, "tech": 0.6, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Nasserism",
        "description": "Arab nationalism combined with socialism, opposing Western imperialism and Israel while pursuing modernization and Arab unity.",
        "stats": { "eqlt": 70, "lbrt": 25, "prog": 55, "idnt": 25, "popl": 70, "intv": 55, "ecol": 35, "powr": 20,
                   "chng": 65, "hmnn": 55, "mns": 50, "prty": 70, "scr": 55, "tech": 55, "wlfr": 75, "intg": 35 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.5, "idnt": 0.8, "popl": 0.8, "intv": 0.7, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.6, "tech": 0.5, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "Ba'athism",
        "description": "Arab socialist nationalism seeking to unite Arab peoples across borders through state-led development; in practice, led to authoritarian one-party rule in Syria and Iraq.",
        "stats": { "eqlt": 65, "lbrt": 20, "prog": 50, "idnt": 20, "popl": 60, "intv": 55, "ecol": 35, "powr": 15,
                   "chng": 60, "hmnn": 50, "mns": 50, "prty": 65, "scr": 60, "tech": 55, "wlfr": 70, "intg": 30 },
        "salience": { "eqlt": 0.7, "lbrt": 0.7, "prog": 0.5, "idnt": 0.9, "popl": 0.6, "intv": 0.7, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.7, "tech": 0.5, "wlfr": 0.7, "intg": 0.5 }
    },
    {
        "name": "African Socialism",
        "description": "Adapts socialist ideas to African conditions, emphasizing communal traditions, anti-colonialism, and development.",
        "stats": { "eqlt": 75, "lbrt": 40, "prog": 55, "idnt": 35, "popl": 65, "intv": 35, "ecol": 50, "powr": 40,
                   "chng": 60, "hmnn": 65, "mns": 55, "prty": 70, "scr": 45, "tech": 45, "wlfr": 75, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.7, "popl": 0.7, "intv": 0.5, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.7, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.4, "wlfr": 0.8, "intg": 0.6 }
    },
    {
        "name": "Ujamaa",
        "description": "Tanzanian socialism based on African village traditions of extended family and mutual cooperation.",
        "stats": { "eqlt": 80, "lbrt": 40, "prog": 50, "idnt": 35, "popl": 65, "intv": 30, "ecol": 55, "powr": 50,
                   "chng": 55, "hmnn": 70, "mns": 60, "prty": 80, "scr": 40, "tech": 40, "wlfr": 80, "intg": 60 },
        "salience": { "eqlt": 0.9, "lbrt": 0.5, "prog": 0.4, "idnt": 0.6, "popl": 0.7, "intv": 0.4, "ecol": 0.5, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.8, "mns": 0.6, "prty": 0.9, "scr": 0.4, "tech": 0.4, "wlfr": 0.9, "intg": 0.6 }
    },

    // ========================================
    // FAR RIGHT / AUTHORITARIAN
    // ========================================
    {
        "name": "Fascism",
        "description": "A far-right system featuring a dictator with absolute power, suppression of opposition, strict control of society, and glorification of the nation.",
        "stats": { "eqlt": 40, "lbrt": 10, "prog": 20, "idnt": 5, "popl": 70, "intv": 88, "ecol": 30, "powr": 5,
                   "chng": 80, "hmnn": 25, "mns": 40, "prty": 40, "scr": 35, "tech": 65, "wlfr": 50, "intg": 5 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.6, "idnt": 1.0, "popl": 0.8, "intv": 0.8, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.5, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Italian Fascism",
        "description": "The original fascism under Mussolini, emphasizing national rebirth, totalitarian state control, and corporatist economics.",
        "stats": { "eqlt": 45, "lbrt": 10, "prog": 35, "idnt": 5, "popl": 70, "intv": 80, "ecol": 30, "powr": 5,
                   "chng": 80, "hmnn": 30, "mns": 40, "prty": 45, "scr": 45, "tech": 70, "wlfr": 50, "intg": 10 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.6, "idnt": 1.0, "popl": 0.8, "intv": 0.8, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.6, "wlfr": 0.5, "intg": 0.7 }
    },
    {
        "name": "National Socialism",
        "description": "Nazi Germany's ideology combining extreme racism, belief in a master race, totalitarian dictatorship, and aggressive expansion.",
        "stats": { "eqlt": 45, "lbrt": 5, "prog": 15, "idnt": 0, "popl": 75, "intv": 85, "ecol": 35, "powr": 5,
                   "chng": 85, "hmnn": 15, "mns": 45, "prty": 50, "scr": 25, "tech": 70, "wlfr": 55, "intg": 0 },
        "salience": { "eqlt": 0.5, "lbrt": 1.0, "prog": 0.6, "idnt": 1.0, "popl": 0.8, "intv": 0.9, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.8, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.6, "wlfr": 0.5, "intg": 1.0 }
    },
    {
        "name": "Clerical Fascism",
        "description": "Fascism combined with strong Catholic or religious elements, wanting both authoritarian nationalism and traditional religious values.",
        "stats": { "eqlt": 45, "lbrt": 10, "prog": 5, "idnt": 10, "popl": 60, "intv": 70, "ecol": 30, "powr": 5,
                   "chng": 65, "hmnn": 25, "mns": 50, "prty": 45, "scr": 5, "tech": 50, "wlfr": 50, "intg": 10 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.7, "idnt": 0.8, "popl": 0.7, "intv": 0.7, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 1.0, "tech": 0.4, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Falangism",
        "description": "Spanish fascism emphasizing national unity, Catholic traditionalism, authoritarian rule, and opposition to communism and liberal democracy.",
        "stats": { "eqlt": 50, "lbrt": 15, "prog": 15, "idnt": 10, "popl": 65, "intv": 65, "ecol": 35, "powr": 10,
                   "chng": 70, "hmnn": 30, "mns": 55, "prty": 55, "scr": 15, "tech": 55, "wlfr": 60, "intg": 15 },
        "salience": { "eqlt": 0.6, "lbrt": 0.8, "prog": 0.6, "idnt": 0.9, "popl": 0.7, "intv": 0.6, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.8, "tech": 0.5, "wlfr": 0.6, "intg": 0.6 }
    },
    {
        "name": "Integralism",
        "description": "Brazilian fascist movement combining nationalism, Catholicism, and corporatism, opposing both liberalism and communism.",
        "stats": { "eqlt": 50, "lbrt": 15, "prog": 10, "idnt": 15, "popl": 55, "intv": 55, "ecol": 40, "powr": 15,
                   "chng": 55, "hmnn": 30, "mns": 65, "prty": 50, "scr": 10, "tech": 45, "wlfr": 55, "intg": 20 },
        "salience": { "eqlt": 0.5, "lbrt": 0.8, "prog": 0.7, "idnt": 0.8, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.5, "scr": 0.9, "tech": 0.4, "wlfr": 0.6, "intg": 0.5 }
    },
    {
        "name": "Neo-Fascism",
        "description": "Modern movements reviving fascist ideas like authoritarian leadership and extreme nationalism, sometimes using updated language.",
        "stats": { "eqlt": 40, "lbrt": 20, "prog": 25, "idnt": 10, "popl": 65, "intv": 60, "ecol": 30, "powr": 15,
                   "chng": 65, "hmnn": 25, "mns": 45, "prty": 40, "scr": 40, "tech": 55, "wlfr": 45, "intg": 10 },
        "salience": { "eqlt": 0.5, "lbrt": 0.8, "prog": 0.5, "idnt": 0.9, "popl": 0.7, "intv": 0.6, "ecol": 0.3, "powr": 0.8,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.4, "tech": 0.5, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Alt-Right",
        "description": "A loose online movement combining white nationalism, opposition to mainstream conservatism, and provocative internet culture.",
        "stats": { "eqlt": 30, "lbrt": 40, "prog": 25, "idnt": 5, "popl": 75, "intv": 40, "ecol": 30, "powr": 40,
                   "chng": 60, "hmnn": 25, "mns": 45, "prty": 25, "scr": 45, "tech": 65, "wlfr": 30, "intg": 5 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.6, "idnt": 1.0, "popl": 0.8, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.5, "tech": 0.6, "wlfr": 0.4, "intg": 1.0 }
    },
    {
        "name": "Dark Enlightenment",
        "description": "Rejects democracy and equality, arguing society worked better under older hierarchical systems like monarchy or rule by elites.",
        "stats": { "eqlt": 15, "lbrt": 30, "prog": 40, "idnt": 30, "popl": 10, "intv": 35, "ecol": 30, "powr": 15,
                   "chng": 50, "hmnn": 15, "mns": 55, "prty": 15, "scr": 65, "tech": 85, "wlfr": 15, "intg": 30 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.6, "idnt": 0.5, "popl": 0.9, "intv": 0.4, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.6, "hmnn": 0.9, "mns": 0.6, "prty": 0.6, "scr": 0.6, "tech": 0.9, "wlfr": 0.6, "intg": 0.5 }
    },
    {
        "name": "Neoreaction",
        "description": "An intellectual movement arguing that modern liberal democracy is failing and should be replaced with authoritarian alternatives.",
        "stats": { "eqlt": 20, "lbrt": 25, "prog": 35, "idnt": 30, "popl": 10, "intv": 40, "ecol": 30, "powr": 10,
                   "chng": 45, "hmnn": 15, "mns": 60, "prty": 20, "scr": 60, "tech": 80, "wlfr": 20, "intg": 25 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.6, "idnt": 0.5, "popl": 0.9, "intv": 0.5, "ecol": 0.3, "powr": 0.9,
                      "chng": 0.6, "hmnn": 0.9, "mns": 0.7, "prty": 0.5, "scr": 0.6, "tech": 0.8, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Right-Wing Accelerationism",
        "description": "Believes societal collapse should be accelerated to bring about a new order, often through provoking conflict.",
        "stats": { "eqlt": 30, "lbrt": 30, "prog": 30, "idnt": 10, "popl": 60, "intv": 50, "ecol": 25, "powr": 25,
                   "chng": 100, "hmnn": 20, "mns": 55, "prty": 30, "scr": 40, "tech": 60, "wlfr": 30, "intg": 10 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.5, "idnt": 0.7, "popl": 0.6, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 1.0, "hmnn": 0.5, "mns": 0.5, "prty": 0.4, "scr": 0.4, "tech": 0.6, "wlfr": 0.4, "intg": 0.7 }
    },
    {
        "name": "Left-Wing Accelerationism",
        "description": "Believes pushing capitalism to its extremes will hasten its collapse and replacement with something better.",
        "stats": { "eqlt": 85, "lbrt": 55, "prog": 95, "idnt": 65, "popl": 55, "intv": 35, "ecol": 45, "powr": 55,
                   "chng": 100, "hmnn": 80, "mns": 50, "prty": 85, "scr": 85, "tech": 90, "wlfr": 85, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.8, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.5, "prty": 0.8, "scr": 0.6, "tech": 0.9, "wlfr": 0.7, "intg": 0.5 }
    },

    // ========================================
    // MONARCHISM / REACTIONARY
    // ========================================
    {
        "name": "Reactionary",
        "description": "Wants to return society to how it was in the past, rejecting modern changes and wanting to undo social or political progress.",
        "stats": { "eqlt": 35, "lbrt": 25, "prog": 5, "idnt": 20, "popl": 40, "intv": 40, "ecol": 40, "powr": 25,
                   "chng": 0, "hmnn": 20, "mns": 70, "prty": 30, "scr": 15, "tech": 30, "wlfr": 35, "intg": 20 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 1.0, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 1.0, "hmnn": 0.7, "mns": 0.7, "prty": 0.5, "scr": 0.6, "tech": 0.5, "wlfr": 0.4, "intg": 0.5 }
    },
    {
        "name": "Monarchism",
        "description": "A country should be ruled by a king or queen rather than by elected officials or other forms of government.",
        "stats": { "eqlt": 30, "lbrt": 30, "prog": 15, "idnt": 25, "popl": 15, "intv": 40, "ecol": 40, "powr": 10,
                   "chng": 10, "hmnn": 30, "mns": 70, "prty": 30, "scr": 20, "tech": 40, "wlfr": 40, "intg": 30 },
        "salience": { "eqlt": 0.4, "lbrt": 0.6, "prog": 0.7, "idnt": 0.5, "popl": 0.8, "intv": 0.4, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.7, "prty": 0.5, "scr": 0.6, "tech": 0.4, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Constitutional Monarchism",
        "description": "A country should have a king or queen, but their powers should be limited by laws and shared with an elected government.",
        "stats": { "eqlt": 40, "lbrt": 55, "prog": 30, "idnt": 35, "popl": 25, "intv": 40, "ecol": 45, "powr": 35,
                   "chng": 15, "hmnn": 40, "mns": 60, "prty": 35, "scr": 40, "tech": 50, "wlfr": 50, "intg": 40 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Absolute Monarchism",
        "description": "A king or queen should have complete, unlimited power over their country, with no parliament or constitution to restrict them.",
        "stats": { "eqlt": 25, "lbrt": 10, "prog": 10, "idnt": 20, "popl": 10, "intv": 50, "ecol": 35, "powr": 5,
                   "chng": 5, "hmnn": 20, "mns": 75, "prty": 25, "scr": 15, "tech": 35, "wlfr": 35, "intg": 25 },
        "salience": { "eqlt": 0.4, "lbrt": 0.9, "prog": 0.7, "idnt": 0.5, "popl": 0.9, "intv": 0.5, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.6, "mns": 0.7, "prty": 0.5, "scr": 0.6, "tech": 0.4, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Neo-Monarchism",
        "description": "Modern revival of support for monarchy, arguing that hereditary rule provides stability and long-term thinking that democracy lacks.",
        "stats": { "eqlt": 25, "lbrt": 30, "prog": 25, "idnt": 30, "popl": 15, "intv": 40, "ecol": 35, "powr": 15,
                   "chng": 30, "hmnn": 25, "mns": 60, "prty": 25, "scr": 45, "tech": 60, "wlfr": 30, "intg": 30 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.8, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.6, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Jacobitism",
        "description": "Historical British movement supporting the exiled Stuart royal family, believing they were the legitimate rulers of Britain.",
        "stats": { "eqlt": 35, "lbrt": 25, "prog": 10, "idnt": 25, "popl": 25, "intv": 35, "ecol": 40, "powr": 15,
                   "chng": 10, "hmnn": 30, "mns": 75, "prty": 35, "scr": 10, "tech": 35, "wlfr": 40, "intg": 25 },
        "salience": { "eqlt": 0.4, "lbrt": 0.5, "prog": 0.7, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.7, "hmnn": 0.5, "mns": 0.8, "prty": 0.5, "scr": 0.8, "tech": 0.4, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Legitimism",
        "description": "Only the rightful royal bloodline should rule, supporting heirs who were pushed aside or overthrown.",
        "stats": { "eqlt": 35, "lbrt": 20, "prog": 5, "idnt": 25, "popl": 20, "intv": 40, "ecol": 40, "powr": 10,
                   "chng": 5, "hmnn": 25, "mns": 85, "prty": 35, "scr": 10, "tech": 30, "wlfr": 40, "intg": 25 },
        "salience": { "eqlt": 0.4, "lbrt": 0.6, "prog": 0.8, "idnt": 0.5, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.9, "hmnn": 0.5, "mns": 0.9, "prty": 0.5, "scr": 0.7, "tech": 0.4, "wlfr": 0.4, "intg": 0.4 }
    },
    {
        "name": "Carlism",
        "description": "Spanish movement supporting a rival royal branch and favoring strong Catholic values, regional traditions, and opposition to liberalism.",
        "stats": { "eqlt": 45, "lbrt": 25, "prog": 5, "idnt": 20, "popl": 45, "intv": 35, "ecol": 45, "powr": 20,
                   "chng": 10, "hmnn": 30, "mns": 80, "prty": 50, "scr": 5, "tech": 30, "wlfr": 50, "intg": 30 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.8, "idnt": 0.6, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.8, "hmnn": 0.5, "mns": 0.8, "prty": 0.6, "scr": 0.9, "tech": 0.4, "wlfr": 0.5, "intg": 0.4 }
    },

    // ========================================
    // MARKET-ORIENTED / CAPITALIST
    // ========================================
    {
        "name": "Neoliberalism",
        "description": "Favors free markets, privatizing government services, reducing regulations, and global trade to create economic growth.",
        "stats": { "eqlt": 25, "lbrt": 55, "prog": 55, "idnt": 70, "popl": 15, "intv": 55, "ecol": 35, "powr": 45,
                   "chng": 55, "hmnn": 40, "mns": 35, "prty": 15, "scr": 75, "tech": 75, "wlfr": 30, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.5, "idnt": 0.6, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.6, "prty": 0.9, "scr": 0.5, "tech": 0.6, "wlfr": 0.7, "intg": 0.6 }
    },
    {
        "name": "Ordoliberalism",
        "description": "Likes free markets but insists government must set strong rules and enforce fair competition to prevent monopolies.",
        "stats": { "eqlt": 35, "lbrt": 60, "prog": 55, "idnt": 55, "popl": 20, "intv": 45, "ecol": 45, "powr": 50,
                   "chng": 35, "hmnn": 45, "mns": 55, "prty": 25, "scr": 70, "tech": 60, "wlfr": 45, "intg": 50 },
        "salience": { "eqlt": 0.6, "lbrt": 0.7, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Austrian School",
        "description": "Economics emphasizing individual choice, free markets, and skepticism of government intervention including central banking.",
        "stats": { "eqlt": 10, "lbrt": 80, "prog": 55, "idnt": 50, "popl": 35, "intv": 25, "ecol": 25, "powr": 70,
                   "chng": 50, "hmnn": 30, "mns": 85, "prty": 5, "scr": 70, "tech": 60, "wlfr": 10, "intg": 50 },
        "salience": { "eqlt": 0.8, "lbrt": 0.9, "prog": 0.4, "idnt": 0.4, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.9, "prty": 1.0, "scr": 0.5, "tech": 0.4, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Chicago School",
        "description": "Free-market economics emphasizing monetary policy, deregulation, and the efficiency of markets over government planning.",
        "stats": { "eqlt": 15, "lbrt": 65, "prog": 55, "idnt": 55, "popl": 25, "intv": 40, "ecol": 30, "powr": 55,
                   "chng": 45, "hmnn": 35, "mns": 50, "prty": 10, "scr": 75, "tech": 70, "wlfr": 25, "intg": 50 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.6, "prty": 0.9, "scr": 0.5, "tech": 0.5, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Monetarism",
        "description": "The money supply is the key factor in the economy; central banks should focus on controlling inflation through monetary policy.",
        "stats": { "eqlt": 20, "lbrt": 60, "prog": 50, "idnt": 55, "popl": 25, "intv": 45, "ecol": 35, "powr": 50,
                   "chng": 40, "hmnn": 35, "mns": 45, "prty": 15, "scr": 70, "tech": 65, "wlfr": 30, "intg": 50 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.6, "prty": 0.8, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Supply-Side Economics",
        "description": "Cutting taxes, especially on businesses and the wealthy, will stimulate economic growth that benefits everyone.",
        "stats": { "eqlt": 15, "lbrt": 55, "prog": 50, "idnt": 50, "popl": 25, "intv": 50, "ecol": 30, "powr": 45,
                   "chng": 45, "hmnn": 35, "mns": 40, "prty": 10, "scr": 65, "tech": 65, "wlfr": 25, "intg": 45 },
        "salience": { "eqlt": 0.9, "lbrt": 0.6, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.5, "ecol": 0.3, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.9, "scr": 0.4, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Keynesianism",
        "description": "Government should actively manage the economy, spending more during recessions and less during booms to smooth out cycles.",
        "stats": { "eqlt": 60, "lbrt": 55, "prog": 60, "idnt": 60, "popl": 35, "intv": 50, "ecol": 45, "powr": 45,
                   "chng": 40, "hmnn": 60, "mns": 40, "prty": 45, "scr": 75, "tech": 65, "wlfr": 70, "intg": 55 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Post-Keynesianism",
        "description": "Extends Keynesian ideas, emphasizing the role of uncertainty, debt, and financial markets in causing economic instability.",
        "stats": { "eqlt": 70, "lbrt": 55, "prog": 65, "idnt": 60, "popl": 40, "intv": 45, "ecol": 55, "powr": 50,
                   "chng": 50, "hmnn": 65, "mns": 45, "prty": 55, "scr": 75, "tech": 60, "wlfr": 75, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.4, "intv": 0.5, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.8, "intg": 0.4 }
    },
    {
        "name": "Modern Monetary Theory",
        "description": "Governments controlling their own currency can never run out of money; the real constraint is inflation, not debt.",
        "stats": { "eqlt": 75, "lbrt": 55, "prog": 70, "idnt": 55, "popl": 50, "intv": 45, "ecol": 60, "powr": 45,
                   "chng": 60, "hmnn": 70, "mns": 40, "prty": 55, "scr": 75, "tech": 65, "wlfr": 85, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "Laissez-Faire Capitalism",
        "description": "The government should have virtually no role in the economy—let markets operate completely freely without regulation.",
        "stats": { "eqlt": 5, "lbrt": 75, "prog": 50, "idnt": 55, "popl": 30, "intv": 30, "ecol": 20, "powr": 60,
                   "chng": 45, "hmnn": 25, "mns": 65, "prty": 0, "scr": 70, "tech": 70, "wlfr": 5, "intg": 50 },
        "salience": { "eqlt": 0.9, "lbrt": 0.8, "prog": 0.4, "idnt": 0.4, "popl": 0.5, "intv": 0.6, "ecol": 0.3, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 1.0, "scr": 0.5, "tech": 0.5, "wlfr": 0.9, "intg": 0.4 }
    },
    {
        "name": "State Capitalism",
        "description": "The government owns or controls major industries but operates them for profit, often alongside private enterprise.",
        "stats": { "eqlt": 30, "lbrt": 30, "prog": 50, "idnt": 35, "popl": 30, "intv": 55, "ecol": 35, "powr": 25,
                   "chng": 45, "hmnn": 40, "mns": 35, "prty": 35, "scr": 60, "tech": 70, "wlfr": 50, "intg": 40 },
        "salience": { "eqlt": 0.6, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.6, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.6, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Corporatism",
        "description": "Society organized into major interest groups that negotiate together with government oversight, rather than free market competition.",
        "stats": { "eqlt": 45, "lbrt": 35, "prog": 40, "idnt": 35, "popl": 25, "intv": 50, "ecol": 40, "powr": 30,
                   "chng": 35, "hmnn": 40, "mns": 45, "prty": 40, "scr": 50, "tech": 55, "wlfr": 55, "intg": 40 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.4, "idnt": 0.5, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.5, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Corporatocracy",
        "description": "A system where corporations have excessive influence over government, with business interests dominating political decisions.",
        "stats": { "eqlt": 15, "lbrt": 40, "prog": 50, "idnt": 60, "popl": 10, "intv": 60, "ecol": 25, "powr": 25,
                   "chng": 45, "hmnn": 30, "mns": 25, "prty": 10, "scr": 70, "tech": 75, "wlfr": 25, "intg": 50 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.4, "idnt": 0.5, "popl": 0.9, "intv": 0.6, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.6, "prty": 0.8, "scr": 0.5, "tech": 0.6, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Managerialism",
        "description": "Professional managers and administrators should have more power in running organizations based on their expertise.",
        "stats": { "eqlt": 35, "lbrt": 45, "prog": 55, "idnt": 55, "popl": 15, "intv": 50, "ecol": 40, "powr": 35,
                   "chng": 40, "hmnn": 45, "mns": 35, "prty": 30, "scr": 70, "tech": 70, "wlfr": 50, "intg": 50 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.8, "intv": 0.5, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.6, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Stakeholder Capitalism",
        "description": "Businesses should serve all stakeholders—workers, communities, environment—not just maximize profits for shareholders.",
        "stats": { "eqlt": 50, "lbrt": 55, "prog": 60, "idnt": 60, "popl": 30, "intv": 50, "ecol": 55, "powr": 45,
                   "chng": 40, "hmnn": 55, "mns": 45, "prty": 40, "scr": 70, "tech": 70, "wlfr": 55, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.6, "powr": 0.6,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },

    // ========================================
    // AMERICAN POLITICAL TRADITIONS
    // ========================================
    {
        "name": "Jeffersonianism",
        "description": "Believes in small, limited federal government with power kept close to local communities and farmers rather than big cities.",
        "stats": { "eqlt": 40, "lbrt": 75, "prog": 55, "idnt": 35, "popl": 60, "intv": 20, "ecol": 50, "powr": 80,
                   "chng": 50, "hmnn": 55, "mns": 70, "prty": 35, "scr": 70, "tech": 45, "wlfr": 35, "intg": 45 },
        "salience": { "eqlt": 0.5, "lbrt": 0.9, "prog": 0.5, "idnt": 0.5, "popl": 0.7, "intv": 0.7, "ecol": 0.5, "powr": 0.9,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.7, "prty": 0.6, "scr": 0.6, "tech": 0.5, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Jacksonianism",
        "description": "Champions the common man against privileged elites, favoring strong presidential leadership and distrust of banks.",
        "stats": { "eqlt": 45, "lbrt": 55, "prog": 40, "idnt": 25, "popl": 80, "intv": 45, "ecol": 35, "powr": 55,
                   "chng": 50, "hmnn": 40, "mns": 50, "prty": 35, "scr": 55, "tech": 50, "wlfr": 40, "intg": 30 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.5, "idnt": 0.6, "popl": 0.9, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Hamiltonianism",
        "description": "Supports a strong central government that actively helps build the economy through banks and partnerships with business.",
        "stats": { "eqlt": 30, "lbrt": 50, "prog": 55, "idnt": 40, "popl": 20, "intv": 50, "ecol": 35, "powr": 30,
                   "chng": 50, "hmnn": 40, "mns": 45, "prty": 25, "scr": 65, "tech": 65, "wlfr": 40, "intg": 45 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.5, "tech": 0.6, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "American Progressivism",
        "description": "Early 1900s reform movement addressing problems of industrialization through government regulation and social reform.",
        "stats": { "eqlt": 65, "lbrt": 55, "prog": 75, "idnt": 55, "popl": 60, "intv": 55, "ecol": 60, "powr": 50,
                   "chng": 60, "hmnn": 70, "mns": 50, "prty": 50, "scr": 75, "tech": 70, "wlfr": 70, "intg": 60 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.9, "idnt": 0.5, "popl": 0.6, "intv": 0.5, "ecol": 0.6, "powr": 0.5,
                      "chng": 0.7, "hmnn": 0.7, "mns": 0.5, "prty": 0.5, "scr": 0.6, "tech": 0.6, "wlfr": 0.8, "intg": 0.6 }
    },
    {
        "name": "New Deal Liberalism",
        "description": "FDR's approach of active government intervention to provide economic security, regulate business, and protect workers.",
        "stats": { "eqlt": 70, "lbrt": 55, "prog": 65, "idnt": 55, "popl": 55, "intv": 60, "ecol": 50, "powr": 45,
                   "chng": 55, "hmnn": 65, "mns": 45, "prty": 55, "scr": 70, "tech": 65, "wlfr": 80, "intg": 55 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.6, "intv": 0.6, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.5, "tech": 0.5, "wlfr": 1.0, "intg": 0.5 }
    },
    {
        "name": "Great Society Liberalism",
        "description": "LBJ's expansion of government programs to fight poverty, expand healthcare, and advance civil rights.",
        "stats": { "eqlt": 70, "lbrt": 60, "prog": 75, "idnt": 65, "popl": 45, "intv": 60, "ecol": 55, "powr": 45,
                   "chng": 55, "hmnn": 70, "mns": 45, "prty": 50, "scr": 75, "tech": 70, "wlfr": 85, "intg": 70 },
        "salience": { "eqlt": 0.8, "lbrt": 0.6, "prog": 0.7, "idnt": 0.6, "popl": 0.5, "intv": 0.6, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.7, "mns": 0.5, "prty": 0.5, "scr": 0.6, "tech": 0.5, "wlfr": 1.0, "intg": 0.7 }
    },
    {
        "name": "Rockefeller Republicanism",
        "description": "Moderate, business-friendly Republican who accepts some social programs and takes pragmatic positions.",
        "stats": { "eqlt": 50, "lbrt": 55, "prog": 55, "idnt": 55, "popl": 25, "intv": 55, "ecol": 50, "powr": 45,
                   "chng": 35, "hmnn": 50, "mns": 45, "prty": 35, "scr": 65, "tech": 65, "wlfr": 55, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },

    // ========================================
    // AGRARIAN / RURAL
    // ========================================
    {
        "name": "Agrarianism",
        "description": "Values farming, rural life, and connection to the land as the foundation of healthy society, skeptical of big cities.",
        "stats": { "eqlt": 55, "lbrt": 60, "prog": 30, "idnt": 35, "popl": 65, "intv": 25, "ecol": 70, "powr": 70,
                   "chng": 30, "hmnn": 50, "mns": 60, "prty": 55, "scr": 40, "tech": 30, "wlfr": 55, "intg": 40 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.6, "idnt": 0.5, "popl": 0.7, "intv": 0.5, "ecol": 0.8, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.6, "wlfr": 0.5, "intg": 0.4 }
    },
    {
        "name": "Georgism",
        "description": "Land values created by community should be taxed rather than income—people keep what they earn but share land's value.",
        "stats": { "eqlt": 55, "lbrt": 70, "prog": 65, "idnt": 55, "popl": 45, "intv": 35, "ecol": 65, "powr": 60,
                   "chng": 55, "hmnn": 60, "mns": 65, "prty": 60, "scr": 75, "tech": 60, "wlfr": 60, "intg": 55 },
        "salience": { "eqlt": 0.7, "lbrt": 0.8, "prog": 0.5, "idnt": 0.4, "popl": 0.4, "intv": 0.4, "ecol": 0.7, "powr": 0.6,
                      "chng": 0.5, "hmnn": 0.6, "mns": 0.6, "prty": 0.9, "scr": 0.5, "tech": 0.4, "wlfr": 0.6, "intg": 0.4 }
    },
    {
        "name": "Peasant Politics",
        "description": "Rural farmers and peasants have distinct interests that mainstream politics ignores, deserving their own political voice.",
        "stats": { "eqlt": 65, "lbrt": 55, "prog": 35, "idnt": 35, "popl": 75, "intv": 25, "ecol": 65, "powr": 65,
                   "chng": 45, "hmnn": 55, "mns": 60, "prty": 65, "scr": 35, "tech": 25, "wlfr": 65, "intg": 45 },
        "salience": { "eqlt": 0.7, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 0.9, "intv": 0.5, "ecol": 0.7, "powr": 0.7,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.8, "scr": 0.4, "tech": 0.5, "wlfr": 0.7, "intg": 0.4 }
    },
    {
        "name": "Rural Populism",
        "description": "Rural communities are being left behind by urban elites and big corporations—advocates for rural interests.",
        "stats": { "eqlt": 55, "lbrt": 55, "prog": 35, "idnt": 30, "popl": 85, "intv": 25, "ecol": 55, "powr": 65,
                   "chng": 50, "hmnn": 50, "mns": 55, "prty": 50, "scr": 40, "tech": 35, "wlfr": 55, "intg": 35 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.5, "idnt": 0.5, "popl": 1.0, "intv": 0.5, "ecol": 0.6, "powr": 0.7,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.6, "scr": 0.4, "tech": 0.5, "wlfr": 0.6, "intg": 0.5 }
    },

    // ========================================
    // MISCELLANEOUS / OTHER
    // ========================================
    {
        "name": "Communitarianism",
        "description": "Strong communities and shared responsibilities matter more than pure individual rights—people have duties to society.",
        "stats": { "eqlt": 55, "lbrt": 45, "prog": 40, "idnt": 40, "popl": 50, "intv": 35, "ecol": 55, "powr": 65,
                   "chng": 35, "hmnn": 55, "mns": 55, "prty": 55, "scr": 45, "tech": 50, "wlfr": 65, "intg": 55 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.4, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.5, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.6, "prty": 0.6, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.6 }
    },
    {
        "name": "Civic Republicanism",
        "description": "Citizens have a duty to participate in self-government and put the common good above personal interests.",
        "stats": { "eqlt": 50, "lbrt": 60, "prog": 55, "idnt": 45, "popl": 45, "intv": 45, "ecol": 50, "powr": 60,
                   "chng": 40, "hmnn": 50, "mns": 60, "prty": 45, "scr": 65, "tech": 55, "wlfr": 55, "intg": 50 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.7,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.7, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Deliberative Democracy",
        "description": "Democracy works best when citizens engage in thoughtful discussion and debate, not just vote based on preferences.",
        "stats": { "eqlt": 55, "lbrt": 65, "prog": 65, "idnt": 60, "popl": 55, "intv": 40, "ecol": 55, "powr": 70,
                   "chng": 45, "hmnn": 65, "mns": 60, "prty": 50, "scr": 70, "tech": 55, "wlfr": 60, "intg": 65 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.5, "idnt": 0.5, "popl": 0.7, "intv": 0.4, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.7, "prty": 0.5, "scr": 0.5, "tech": 0.5, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Liquid Democracy",
        "description": "A flexible system where you can vote directly on issues or delegate your vote to someone you trust on specific topics.",
        "stats": { "eqlt": 55, "lbrt": 70, "prog": 80, "idnt": 60, "popl": 65, "intv": 40, "ecol": 55, "powr": 85,
                   "chng": 60, "hmnn": 70, "mns": 55, "prty": 50, "scr": 75, "tech": 85, "wlfr": 60, "intg": 65 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.7, "idnt": 0.5, "popl": 0.7, "intv": 0.4, "ecol": 0.4, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.5, "scr": 0.5, "tech": 0.9, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Cosmopolitanism",
        "description": "All humans are part of one global community—national borders matter less than our shared humanity.",
        "stats": { "eqlt": 55, "lbrt": 70, "prog": 80, "idnt": 95, "popl": 30, "intv": 50, "ecol": 60, "powr": 55,
                   "chng": 55, "hmnn": 75, "mns": 60, "prty": 45, "scr": 80, "tech": 65, "wlfr": 65, "intg": 95 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.6, "idnt": 1.0, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.7, "mns": 0.5, "prty": 0.4, "scr": 0.6, "tech": 0.5, "wlfr": 0.5, "intg": 1.0 }
    },
    {
        "name": "Multiculturalism",
        "description": "Different cultural groups should maintain their distinct identities while participating equally in society.",
        "stats": { "eqlt": 60, "lbrt": 70, "prog": 85, "idnt": 85, "popl": 40, "intv": 40, "ecol": 55, "powr": 60,
                   "chng": 50, "hmnn": 75, "mns": 55, "prty": 45, "scr": 70, "tech": 55, "wlfr": 65, "intg": 100 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.7, "idnt": 0.9, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.4, "prty": 0.4, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 1.0 }
    },
    {
        "name": "Interculturalism",
        "description": "Different cultures should interact and influence each other while maintaining social cohesion through shared civic values.",
        "stats": { "eqlt": 55, "lbrt": 65, "prog": 75, "idnt": 70, "popl": 40, "intv": 40, "ecol": 55, "powr": 60,
                   "chng": 50, "hmnn": 70, "mns": 55, "prty": 45, "scr": 70, "tech": 55, "wlfr": 60, "intg": 85 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.6, "idnt": 0.7, "popl": 0.4, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.7, "mns": 0.5, "prty": 0.4, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.9 }
    },
    {
        "name": "Post-Liberalism",
        "description": "Liberal democracy has failed to deliver on its promises; we need new frameworks that take community and meaning seriously.",
        "stats": { "eqlt": 50, "lbrt": 45, "prog": 35, "idnt": 35, "popl": 50, "intv": 40, "ecol": 50, "powr": 50,
                   "chng": 35, "hmnn": 40, "mns": 55, "prty": 45, "scr": 45, "tech": 50, "wlfr": 55, "intg": 45 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.6, "idnt": 0.5, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.6, "prty": 0.5, "scr": 0.5, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Woke Capitalism",
        "description": "Corporations adopting progressive social positions on diversity and environmentalism as part of their brand.",
        "stats": { "eqlt": 35, "lbrt": 55, "prog": 85, "idnt": 80, "popl": 15, "intv": 50, "ecol": 55, "powr": 40,
                   "chng": 45, "hmnn": 60, "mns": 35, "prty": 25, "scr": 85, "tech": 75, "wlfr": 45, "intg": 80 },
        "salience": { "eqlt": 0.6, "lbrt": 0.5, "prog": 0.9, "idnt": 0.8, "popl": 0.7, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.6, "mns": 0.6, "prty": 0.7, "scr": 0.7, "tech": 0.6, "wlfr": 0.5, "intg": 0.8 }
    },
    {
        "name": "Postmodernism",
        "description": "Skeptical of grand narratives and universal truths, emphasizing how power shapes knowledge and questioning objective reality.",
        "stats": { "eqlt": 60, "lbrt": 70, "prog": 90, "idnt": 70, "popl": 45, "intv": 30, "ecol": 55, "powr": 65,
                   "chng": 60, "hmnn": 85, "mns": 45, "prty": 55, "scr": 85, "tech": 50, "wlfr": 60, "intg": 80 },
        "salience": { "eqlt": 0.5, "lbrt": 0.6, "prog": 0.9, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.9, "mns": 0.7, "prty": 0.5, "scr": 0.7, "tech": 0.4, "wlfr": 0.5, "intg": 0.7 }
    },
    {
        "name": "Feminist Politics",
        "description": "Political advocacy for gender equality, addressing discrimination, reproductive rights, and representation.",
        "stats": { "eqlt": 70, "lbrt": 70, "prog": 90, "idnt": 70, "popl": 50, "intv": 40, "ecol": 65, "powr": 65,
                   "chng": 65, "hmnn": 80, "mns": 65, "prty": 55, "scr": 80, "tech": 55, "wlfr": 75, "intg": 80 },
        "salience": { "eqlt": 0.8, "lbrt": 0.7, "prog": 0.9, "idnt": 0.6, "popl": 0.5, "intv": 0.4, "ecol": 0.5, "powr": 0.6,
                      "chng": 0.7, "hmnn": 0.8, "mns": 0.6, "prty": 0.5, "scr": 0.7, "tech": 0.4, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Anarcho-Nihilism",
        "description": "Combines rejection of the state with rejection of meaning itself—nothing matters, including political systems.",
        "stats": { "eqlt": 50, "lbrt": 95, "prog": 50, "idnt": 50, "popl": 50, "intv": 10, "ecol": 40, "powr": 100,
                   "chng": 85, "hmnn": 50, "mns": 30, "prty": 50, "scr": 70, "tech": 45, "wlfr": 40, "intg": 50 },
        "salience": { "eqlt": 0.4, "lbrt": 1.0, "prog": 0.4, "idnt": 0.4, "popl": 0.4, "intv": 0.5, "ecol": 0.3, "powr": 1.0,
                      "chng": 0.8, "hmnn": 0.7, "mns": 0.8, "prty": 0.4, "scr": 0.5, "tech": 0.3, "wlfr": 0.3, "intg": 0.4 }
    },
    {
        "name": "Post-Anarchism",
        "description": "Updates anarchist thought with postmodern philosophy, questioning fixed identities and universal theories.",
        "stats": { "eqlt": 75, "lbrt": 90, "prog": 85, "idnt": 65, "popl": 55, "intv": 15, "ecol": 60, "powr": 95,
                   "chng": 75, "hmnn": 80, "mns": 55, "prty": 75, "scr": 80, "tech": 50, "wlfr": 70, "intg": 75 },
        "salience": { "eqlt": 0.6, "lbrt": 0.9, "prog": 0.7, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 1.0,
                      "chng": 0.6, "hmnn": 0.8, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 0.4, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Utilitarianism (Political)",
        "description": "Policies should be judged by consequences—choose whatever produces the greatest good for the greatest number.",
        "stats": { "eqlt": 55, "lbrt": 60, "prog": 70, "idnt": 65, "popl": 35, "intv": 50, "ecol": 60, "powr": 50,
                   "chng": 50, "hmnn": 70, "mns": 30, "prty": 45, "scr": 85, "tech": 70, "wlfr": 70, "intg": 60 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.9, "mns": 0.9, "prty": 0.5, "scr": 0.7, "tech": 0.6, "wlfr": 0.8, "intg": 0.5 }
    },
    {
        "name": "Social Authoritarianism",
        "description": "Combines authoritarian politics with left-wing economics—strong state control to achieve socialist goals.",
        "stats": { "eqlt": 70, "lbrt": 20, "prog": 55, "idnt": 40, "popl": 50, "intv": 50, "ecol": 45, "powr": 20,
                   "chng": 55, "hmnn": 50, "mns": 40, "prty": 65, "scr": 60, "tech": 60, "wlfr": 75, "intg": 40 },
        "salience": { "eqlt": 0.8, "lbrt": 0.9, "prog": 0.5, "idnt": 0.5, "popl": 0.5, "intv": 0.5, "ecol": 0.4, "powr": 0.9,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.5, "tech": 0.5, "wlfr": 0.8, "intg": 0.5 },
        "mechanisms": { "authority_preference": ["delegative_democracy", "elected_strongman"], "legitimacy_source": ["performance_legitimacy", "electoral_legitimacy"], "economic_goal": ["regulated_capitalism"], "decision_making": ["centralized", "technocratic"], "welfare_mechanism": ["universal_services"] }
    },
    {
        "name": "Delegative Democracy",
        "description": "Elected leaders receive a broad mandate from voters and should have strong powers to implement their vision without excessive institutional constraints. Democracy means choosing a leader, then letting them lead.",
        "stats": { "eqlt": 50, "lbrt": 35, "prog": 45, "idnt": 35, "popl": 65, "intv": 50, "ecol": 40, "powr": 25,
                   "chng": 50, "hmnn": 40, "mns": 40, "prty": 45, "scr": 50, "tech": 55, "wlfr": 55, "intg": 40 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.4, "idnt": 0.4, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.4 },
        "mechanisms": { "authority_preference": ["delegative_democracy", "elected_strongman"], "legitimacy_source": ["electoral_legitimacy", "majoritarian"], "decision_making": ["representative", "centralized"], "change_velocity": ["ambitious", "electoral"] }
    },
    {
        "name": "Left-Wing Nationalism",
        "description": "Nationalism combined with left-wing economics, often emphasizing anti-imperialism and national liberation.",
        "stats": { "eqlt": 75, "lbrt": 50, "prog": 55, "idnt": 25, "popl": 70, "intv": 40, "ecol": 50, "powr": 45,
                   "chng": 60, "hmnn": 60, "mns": 55, "prty": 70, "scr": 55, "tech": 50, "wlfr": 75, "intg": 30 },
        "salience": { "eqlt": 0.8, "lbrt": 0.5, "prog": 0.5, "idnt": 0.9, "popl": 0.7, "intv": 0.5, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.5, "mns": 0.5, "prty": 0.7, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.7 }
    },
    {
        "name": "Anti-Imperialism",
        "description": "Opposition to powerful countries dominating weaker ones through military, economic, or cultural control.",
        "stats": { "eqlt": 70, "lbrt": 60, "prog": 65, "idnt": 50, "popl": 65, "intv": 15, "ecol": 55, "powr": 60,
                   "chng": 65, "hmnn": 70, "mns": 70, "prty": 60, "scr": 60, "tech": 45, "wlfr": 65, "intg": 60 },
        "salience": { "eqlt": 0.6, "lbrt": 0.6, "prog": 0.5, "idnt": 0.6, "popl": 0.6, "intv": 1.0, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.7, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Non-Aligned Movement",
        "description": "Countries should remain independent from major power blocs, charting their own course between competing superpowers.",
        "stats": { "eqlt": 60, "lbrt": 50, "prog": 55, "idnt": 40, "popl": 55, "intv": 25, "ecol": 50, "powr": 50,
                   "chng": 50, "hmnn": 55, "mns": 55, "prty": 55, "scr": 55, "tech": 50, "wlfr": 60, "intg": 50 },
        "salience": { "eqlt": 0.5, "lbrt": 0.5, "prog": 0.4, "idnt": 0.6, "popl": 0.5, "intv": 0.9, "ecol": 0.4, "powr": 0.5,
                      "chng": 0.4, "hmnn": 0.5, "mns": 0.5, "prty": 0.5, "scr": 0.4, "tech": 0.4, "wlfr": 0.5, "intg": 0.5 }
    },
    {
        "name": "Secular Humanism",
        "description": "Bases ethics on reason and human welfare rather than religion, supporting separation of church and state.",
        "stats": { "eqlt": 55, "lbrt": 75, "prog": 90, "idnt": 75, "popl": 35, "intv": 40, "ecol": 60, "powr": 55,
                   "chng": 55, "hmnn": 85, "mns": 60, "prty": 45, "scr": 100, "tech": 75, "wlfr": 65, "intg": 75 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.8, "idnt": 0.6, "popl": 0.4, "intv": 0.4, "ecol": 0.5, "powr": 0.5,
                      "chng": 0.5, "hmnn": 0.9, "mns": 0.6, "prty": 0.4, "scr": 1.0, "tech": 0.6, "wlfr": 0.5, "intg": 0.6 }
    },
    {
        "name": "Pirate Politics",
        "description": "Emphasizes digital rights, privacy, transparency, and copyright reform—originated from internet file-sharing debates.",
        "stats": { "eqlt": 55, "lbrt": 85, "prog": 90, "idnt": 70, "popl": 60, "intv": 30, "ecol": 55, "powr": 75,
                   "chng": 65, "hmnn": 75, "mns": 60, "prty": 60, "scr": 80, "tech": 95, "wlfr": 65, "intg": 75 },
        "salience": { "eqlt": 0.5, "lbrt": 0.8, "prog": 0.8, "idnt": 0.6, "popl": 0.6, "intv": 0.4, "ecol": 0.4, "powr": 0.8,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.5, "prty": 0.6, "scr": 0.6, "tech": 1.0, "wlfr": 0.5, "intg": 0.6 }
    },

    // ========================================
    // ADDITIONAL IDEOLOGIES - PHASE 3 ADDITIONS
    // ========================================
    {
        "name": "Islamism",
        "description": "Seeks to organize society according to Islamic principles, with varying views on how strictly religious law should govern politics and personal life.",
        "stats": { "eqlt": 55, "lbrt": 25, "prog": 15, "idnt": 30, "popl": 60, "intv": 50, "ecol": 45, "powr": 30,
                   "chng": 65, "hmnn": 35, "mns": 85, "prty": 50, "scr": 0, "tech": 45, "wlfr": 65, "intg": 25 },
        "salience": { "eqlt": 0.5, "lbrt": 0.7, "prog": 0.7, "idnt": 0.6, "popl": 0.6, "intv": 0.5, "ecol": 0.4, "powr": 0.6,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.8, "prty": 0.5, "scr": 1.0, "tech": 0.4, "wlfr": 0.6, "intg": 0.7 }
    },
    {
        "name": "Pan-Africanism",
        "description": "Advocates for solidarity among people of African descent worldwide, emphasizing shared heritage, opposing colonialism, and sometimes seeking political unity across African nations.",
        "stats": { "eqlt": 70, "lbrt": 55, "prog": 65, "idnt": 35, "popl": 70, "intv": 35, "ecol": 55, "powr": 60,
                   "chng": 65, "hmnn": 70, "mns": 65, "prty": 60, "scr": 55, "tech": 50, "wlfr": 70, "intg": 55 },
        "salience": { "eqlt": 0.7, "lbrt": 0.6, "prog": 0.6, "idnt": 0.9, "popl": 0.8, "intv": 0.7, "ecol": 0.5, "powr": 0.7,
                      "chng": 0.6, "hmnn": 0.6, "mns": 0.6, "prty": 0.6, "scr": 0.4, "tech": 0.4, "wlfr": 0.7, "intg": 0.6 }
    }
];
