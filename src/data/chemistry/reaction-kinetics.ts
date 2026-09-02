export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const reactionKineticsQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-83",
      question: "Unit of rate constant for a particular reaction depends upon the:",
      options: [
        "temperature of reaction",
        "activation energy of reaction",
        "molecularity of reaction",
        "order of reaction"
      ],
      answer: 3,
      explanation: "The general unit for rate constant k is (mol/dm³)^(1-n) s⁻¹, which strictly depends on the overall order of the reaction (n)."
    },
    {
      id: "bumhs-2025-chem-84",
      question: "The activation energy of a reaction is usually:",
      options: [
        "Unaffected by the process of a catalyst.",
        "Low for the reaction that takes place slowly.",
        "Different for the forward and backward reaction.",
        "Increases with rise in temperature."
      ],
      answer: 2,
      explanation: "For any reversible reaction with non-zero enthalpy change (ΔH ≠ 0), the activation energy for the forward reaction (Ea_f) and reverse reaction (Ea_b) are different, related by ΔH = Ea_f − Ea_b."
    },
    {
      id: "bumhs-2025-chem-121",
      question: "Rate constant depends upon:",
      options: [
        "Volume",
        "Temperature",
        "Concentration",
        "Pressure"
      ],
      answer: 1,
      explanation: "According to the Arrhenius equation (k = A e^(−Ea/RT)), the specific rate constant k depends fundamentally on temperature and catalyst presence, but is independent of initial reactant concentrations, pressure, or volume."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-84",
      question: "The unit of rate constant for the first order reaction is:",
      options: [
        "conc.s⁻¹",
        "M²s⁻¹",
        "s⁻¹",
        "M⁻¹s⁻¹",
        "M·s⁻¹"
      ],
      answer: 2,
      explanation: "For a first-order reaction, Rate = k[A]. Thus, k = Rate / [A] = (M s⁻¹) / M = s⁻¹ (or time⁻¹)."
    },
    {
      id: "chem-sindh-24-101",
      question: "The rate of SN1 mechanism depends upon:",
      options: [
        "Concentration of nucleophile",
        "Concentration of both substrate and nucleophile",
        "Polar non-polar solvent",
        "Concentration of substrate only",
        "Concentration of reactant"
      ],
      answer: 3,
      explanation: "An SN1 reaction proceeds via a unimolecular rate-determining step involving carbocation formation. Therefore, Rate = k[Substrate], depending solely on substrate concentration."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-87",
      question: "K is called specific rate constant because it is:",
      options: [
        "Rate per unit concentration",
        "Temperature independent",
        "Depends on concentration",
        "Unitless"
      ],
      answer: 0,
      explanation: "The specific rate constant k is defined as the reaction rate when the concentration of each reactant is unity (1 mol/dm³)."
    },
    {
      id: "chem-sindh-25-109",
      question: "The formation of activated complex in a reaction is:",
      options: [
        "Exothermic process",
        "Endothermic process",
        "Either endo or exo",
        "Always energy released"
      ],
      answer: 1,
      explanation: "Forming the activated complex requires inputting activation energy to break/strain existing chemical bonds, making transition state formation an endothermic step."
    },
    {
      id: "chem-sindh-25-116",
      question: "When one mole of a substance is decomposed preferably as compared to evaporation, then decomposition has:",
      options: [
        "Low energy",
        "High energy",
        "Equal energy",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "Decomposition requires breaking strong chemical covalent/ionic bonds within molecules, demanding much higher activation/bond energy compared to simply overcoming weak intermolecular forces during evaporation."
    },
    {
      id: "chem-sindh-25-117",
      question: "At start of reaction:",
      options: [
        "Average rate is high",
        "Instantaneous rate is high",
        "Both rates are same",
        "Both rates are slow"
      ],
      answer: 1,
      explanation: "At t = 0, reactant concentrations are at their absolute maximum, producing the highest collision frequency and maximum instantaneous rate."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-134",
      question: "The rate of a chemical reaction changes with:",
      options: [
        "Concentration of reactant molecules",
        "Concentration of product molecules",
        "Concentration of both reactant and product",
        "Rate constant"
      ],
      answer: 0,
      explanation: "As a reaction proceeds, reactant molecules are consumed, leading to a continuous decrease in reactant concentration and consequently a decreasing reaction rate."
    },
    {
      id: "kmu-mdcat-25-chem-136",
      question: "The specific rate constant (k) of a reaction is related to the concentration of reactants:",
      options: [
        "Directly",
        "Inversely",
        "Exponentially",
        "Independently"
      ],
      answer: 3,
      explanation: "The rate constant k is a characteristic constant for a reaction at a given temperature and is independent of initial or changing reactant concentrations."
    },
    {
      id: "kmu-mdcat-25-chem-160",
      question: "On increasing the temperature, the rate of reaction increases mainly because:",
      options: [
        "The activation energy of the reaction increases",
        "The concentration of the reacting molecules increases",
        "The collisions frequency and effective collisions increase",
        "The energy of molecules decreases"
      ],
      answer: 2,
      explanation: "Increasing temperature raises the average kinetic energy of molecules, significantly increasing the proportion of effective collisions possessing energy ≥ activation energy (Ea)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-92",
      question: "For a first order reaction A → B, the rate constant is 0.0458 s⁻¹. Calculate rate of the reaction if the concentration of reactant is 0.35 mol dm⁻³.",
      options: [
        "0.012 mol dm⁻³ s⁻¹",
        "0.014 mol dm⁻³ s⁻¹",
        "0.016 mol dm⁻³ s⁻¹",
        "0.018 mol dm⁻³ s⁻¹"
      ],
      answer: 2,
      explanation: "Rate = k [A] = 0.0458 s⁻¹ × 0.35 mol dm⁻³ ≈ 0.01603 mol dm⁻³ s⁻¹."
    },
    {
      id: "kmu-mdcat-2024-93",
      question: "A reaction is first order with respect to A and second order with respect to B, the rate equation is",
      options: [
        "Rate = k [A]",
        "Rate = k [A][B]",
        "Rate = k [A]²[B]",
        "Rate = k [A][B]²"
      ],
      answer: 3,
      explanation: "The rate law exponents reflect individual reactant orders: exponent 1 for [A] and exponent 2 for [B] yields Rate = k [A][B]²."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-69",
      question: "Which of the following is the unit of rate of reaction?",
      options: [
        "(mol-dm⁻³)⁻¹s⁻¹",
        "mol(dm³)s⁻¹",
        "mol(dm³)⁻¹s",
        "mol(dm³)⁻¹s⁻¹"
      ],
      answer: 3,
      explanation: "Rate of reaction is defined as change in concentration per unit time: (mol/dm³) / s = mol dm⁻³ s⁻¹."
    },
    {
      id: "szambu-chem-24-102",
      question: "If half-life of a first-order chemical reaction is 30 minutes, how much time is required for its 87.5% completion?",
      options: [
        "30 min",
        "60 min",
        "90 min",
        "120 min"
      ],
      answer: 2,
      explanation: "87.5% completion leaves 12.5% (1/8) of the original reactant. (1/2)ⁿ = 1/8 → n = 3 half-lives. Total time = 3 × 30 min = 90 min."
    },
    {
      id: "szambu-chem-24-103",
      question: "Unimolecular nucleophilic substitution reaction involves __________.",
      options: [
        "1st order kinetics",
        "2nd order kinetics",
        "3rd order kinetics",
        "zero order kinetics"
      ],
      answer: 0,
      explanation: "Unimolecular nucleophilic substitution (SN1) proceeds through a single-molecule rate-determining step, exhibiting 1st order kinetics."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Reactions having high activation energy are generally:",
      options: [
        "spontaneous",
        "fast",
        "slow",
        "always exothermic"
      ],
      answer: 2,
      explanation: "A high activation energy barrier means very few colliding molecules have sufficient energy to react, resulting in a slow reaction rate."
    },
    {
      id: "szambu-chem-25-2",
      question: "The rate of a standard chemical reaction:",
      options: [
        "Increases as the reaction proceeds",
        "Decreases as the reaction proceeds",
        "Remains the same as the reaction proceeds",
        "May decrease or increase as the reaction proceeds"
      ],
      answer: 1,
      explanation: "As a reaction progresses, reactant concentration continually decreases, reducing collision frequency and slowing the reaction rate."
    },
    {
      id: "szambu-chem-25-3",
      question: "The order of chemical reaction is defined as:",
      options: [
        "The number of reactants involved in balanced equation",
        "The number of products formed in balanced equation",
        "The power to which the concentration of a reactant is raised in the rate equation",
        "The rate constant of the reaction"
      ],
      answer: 2,
      explanation: "The order of reaction with respect to a given component is the exponent to which its concentration term is raised in the experimental rate law."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-87",
      question: "Identify the correct formula to calculate rate of reaction:",
      options: [
        "Change in concentration of substance ÷ Time taken for the change",
        "Time taken for the change ÷ Change in concentration of substance",
        "Time taken for the change ÷ Change in concentration of substance × 100",
        "Time taken for the change × Change in concentration of substance"
      ],
      answer: 0,
      explanation: "Rate of reaction = ΔC / Δt, which is the change in concentration of a reactant or product divided by the time interval."
    },
    {
      id: "uhs-2024-chem-88",
      question: "Consider the hypothetical equation aA + bB → cC + dD: Which of the following represents correct generalized rate equation?",
      options: [
        "Rate = k[A][B]",
        "Rate = k[A]ᵃ[B]ᵇ",
        "Rate = k[A]ᵃ",
        "Rate = k[B]²"
      ],
      answer: 1,
      explanation: "In general elementary theoretical expressions, the rate law is written as Rate = k[A]ᵃ[B]ᵇ where exponents represent reaction orders."
    },
    {
      id: "uhs-2024-chem-89",
      question: "If a reaction rate does not change with concentration then it is",
      options: [
        "3rd order",
        "2nd order",
        "1st order",
        "Zero order"
      ],
      answer: 3,
      explanation: "For a zero-order reaction, Rate = k[A]⁰ = k, meaning the rate is completely independent of reactant concentration."
    },
    {
      id: "uhs-2024-chem-90",
      question: "Which of the following is CORRECT Arrhenius equation?",
      options: [
        "K = A e^(−Ea/QT)",
        "K = A e^(−Ea/RT)",
        "K = A e^(−Ea/ST)",
        "K = A e^(−Ea/UT)"
      ],
      answer: 1,
      explanation: "The Arrhenius equation relating rate constant k to absolute temperature T is k = A e^(−Ea/RT)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-91",
      question: "Amount of energy needed to weaken the existing bonds to an extent that can be broken through collision is called:",
      options: [
        "Bond energy",
        "Activation energy",
        "Average energy",
        "Enthalpy"
      ],
      answer: 1,
      explanation: "Activation energy (Ea) is the minimum energy required by colliding reactant molecules to distort/weaken existing bonds and reach the transition state."
    },
    {
      id: "uhs-chem-25-94",
      question: "For 2A + B → 3C + D, which of the following does NOT correctly express the reaction rate?",
      options: [
        "–d[B]/dt",
        "d[D]/dt",
        "–1/2 d[A]/dt",
        "–1/3 d[C]/dt"
      ],
      answer: 3,
      explanation: "Since C is a product, its rate of formation must be positive (+1/3 d[C]/dt). Expressing it as negative (–1/3 d[C]/dt) is incorrect."
    },
    {
      id: "uhs-chem-25-103",
      question: "Final equation for the representation of rate of reaction in term of concentration is called",
      options: [
        "Rate law",
        "Rate constant",
        "Reaction rate",
        "Reaction order"
      ],
      answer: 0,
      explanation: "The mathematical equation expressing reaction rate in terms of molar concentrations of reactants is called the Rate Law (or Rate Equation)."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "For which of the following order of reaction, rate of reaction is inversely proportional to the concentration of reactant",
        options: [
          "Ist",
          "2nd",
          "Negative order of reaction",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-2",
        question: "The slope of concentration time graph gives values of",
        options: [
          "Concentration of reactant",
          "Amount of catalyst",
          "Concentration of products",
          "Rate of reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-3",
        question: "All are examples of fast reactions except",
        options: [
          "Neutralization",
          "Redox",
          "Decomposition",
          "Ionic"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-4",
        question: "Some reactions are slower than others because they",
        options: [
          "Lack light",
          "Lack catalyst",
          "Have high Ea",
          "Have low [R]"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "A property of a system that depends only on the state of a system is called",
        options: [
          "State action",
          "State reaction",
          "State function",
          "State of system"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-6",
        question: "The curve of concentration time graph becomes horizontal when the rate of reaction",
        options: [
          "Increases",
          "Become constant",
          "Decreases",
          "Becomes zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-7",
        question: "What will be order of reaction if doubling the concentration of reactant increase the rate by factor 4 and tripling the concentration of reactant by a factor 9",
        options: [
          "1",
          "3",
          "2",
          "0"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-8",
        question: "The rate of reaction increases four times by doubling ...... concentration of reactant",
        options: [
          "First",
          "Second",
          "Third",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "Oxidation reduction reactions are ...... than ionic reactions",
        options: [
          "Faster",
          "Equal In speed",
          "Slower",
          "Comprised of lesser number of steps"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-10",
        question: "Unit of first order reaction is",
        options: [
          "S^-1",
          "Moles dm^-3 s^-1",
          "Moles dm^-3",
          "Mol^-1 dm^3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-11",
        question: "The order of reaction provides valuable information about ...... of reaction",
        options: [
          "Condition",
          "Mechanism",
          "Concentration",
          "Parameters"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-12",
        question: "What will be the effect on rate constant, if conc of NO is halved\n2NO + O2 → 2NO2\nRate = k[NO]²[O2]",
        options: [
          "1/4 times",
          "Doubled",
          "Unchanged",
          "Increase 4 times"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "Sum of all exponent of molar concentration of the reactant present in the rate equation is known as",
        options: [
          "Molecularity",
          "Order of reaction",
          "Rate of reaction",
          "Slope"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-14",
        question: "A substance which doesn’t lower the energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-15",
        question: "The reaction take place among the molecule when they have",
        options: [
          "Activation energy",
          "Properly oriented",
          "Concentrated",
          "Activation energy and proper orientation"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The concentration of gas can be increased by increasing ...... of the gas",
        options: [
          "Temperature",
          "Volume",
          "Pressure",
          "Specific gravity"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "Reaction kinetics is important to discover that ...... under which reaction will proceed most economically",
        options: [
          "Rate constant",
          "Volume",
          "Conditions",
          "Equilibrium point"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following reactions are usually slow",
        options: [
          "Neutralization of acid and base",
          "Organic substitution reactions",
          "Displacement reaction",
          "Free radical reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-19",
        question: "A substance which doesn’t lower energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-20",
        question: "If a buffer solution of higher pH than seven is to be made we use",
        options: [
          "Strong acid and strong base",
          "Weak acid and strong base",
          "Weak acid and strong base",
          "Weak acid and it’s salt with strong base"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "For the reaction 2NO + O2 → 2NO2 the order of reaction is",
        options: [
          "Fractional order",
          "First order",
          "Second order",
          "Third order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-22",
        question: "R = K[N2O5] has ...... of reaction",
        options: [
          "First order",
          "Pseudo first order",
          "Second order",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-23",
        question: "Some of the methods are used for determination of rate of reaction are called physical method because",
        options: [
          "They involve a simple chemical reaction",
          "They produce mass change",
          "They Ea physically",
          "They monitor some physical property"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-24",
        question: "The specific rate constant of a chemical reaction is the rate of reaction when the concentration of the reaction is",
        options: [
          "Less than unity",
          "Equal to unity",
          "Greater than unity",
          "Equal to the concentration of 2nd order reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "If the rate of reaction is equal to the rate constant, the order of reaction is",
        options: [
          "3",
          "1",
          "0",
          "2"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "Pulverized CsCu3 reacts faster because of the increase in",
        options: [
          "Pressure",
          "Surface area",
          "Volume",
          "Surface tension"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "If reactants are conductor of electricity, then .... method to used to measure the change in concentration of reaction",
        options: [
          "Optical rotation",
          "Dilatometric",
          "Refractometric",
          "Electrical conductivity"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "Which one of the following does not influence rate of reaction",
        options: [
          "Concentration",
          "Temperature",
          "Catalyst",
          "Activation energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "...... are units of rate of reaction",
        options: [
          "Moldm^-3 sec^-1",
          "Mol dm^-3 minute^-1",
          "Mol dm^-3 sec^-1",
          "Mol dm^-3 hour^-1"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-30",
        question: "For a chemical reaction A → B the rate if reaction doubles when the concentration of A is increased four times. The order of reaction for A is",
        options: [
          "Zero",
          "Two",
          "One",
          "Half"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Activation energy of a reaction",
        options: [
          "Excludes the average kinetic energy of the reactants",
          "Is in the addition to the total KE energy of the reactants",
          "Is in addition to the average KE of the products",
          "Is needed for effective collision"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "Arrhenius depends upon ...... reacting substance",
        options: [
          "Concentration",
          "Pressure",
          "Volume",
          "Collision frequency"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-33",
        question: "The reaction rate in forward direction decreases with the passage of time because",
        options: [
          "Concentration of reactant decreases",
          "Concentration of product decreases",
          "The order of reaction changes",
          "Temperature of system changes"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-34",
        question: "Amount of product formed increase with time, this statement is true for reactions with ...... kinetics",
        options: [
          "Ist order",
          "Zero order",
          "3rd order",
          "Any order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-35",
        question: "Which of the following is an element",
        options: [
          "Tape water",
          "Graphite",
          "Sea water",
          "Brass"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-36",
        question: "What is the speed of rate determining step",
        options: [
          "Very fast increasing",
          "Slow and decreasing",
          "Moderate and decreasing",
          "Continuously increasing"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-37",
        question: "At the start of chemical reaction, the instantaneous rate is ...... than average rate",
        options: [
          "Higher",
          "Equal to",
          "Lower",
          "Comparable"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-38",
        question: "If the energy of the activated complex lies close to energy of reactants, it means that reaction is",
        options: [
          "Slow",
          "Endothermic",
          "Exothermic",
          "Exothermic and fast"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-39",
        question: "Law of mass action expresses relationship between",
        options: [
          "Rate of reaction and concentration if reacting substance",
          "Rate of reaction and concentration of products",
          "Concentration of reactant and Concentration of products",
          "Concentration of reactant and catalyst"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "The reaction occurs due to",
        options: [
          "Slow moving molecules",
          "Polar molecules",
          "Collision b/w molecules",
          "High Ea"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "The rate at any one instant during the intervals called as",
        options: [
          "Average rate",
          "Instantaneous rate",
          "Reaction rate",
          "Limiting rate"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "Which of the following can give order of reaction",
        options: [
          "Balanced chemical equation",
          "Experimental in to law",
          "Magnitude of specific reaction rate",
          "Nature of reactants"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "If Ef and Er are activation energies of forward and reverse reaction. The reaction is known to be exothermic then",
        options: [
          "Ef > Er",
          "Er < Ef",
          "Ef >> Er",
          "Ef = Er"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "Which substance controls rate of reaction in method of large excess?",
        options: [
          "Substance in excess",
          "Catalyst",
          "Quantity of product",
          "Substance in small amount"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-45",
        question: "The effect of temperature on rate of reaction is given by",
        options: [
          "Arrhenius equation",
          "Newtons equation",
          "Change in degree of hydration",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-46",
        question: "The term dx/dt in the rate expression refers to the",
        options: [
          "Decrease in conc of the reactant",
          "Instantaneous rate of reaction",
          "Increase in concentration of reactant",
          "Increase in solubility of reactant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-47",
        question: "Reaction H2 + Cl2 → is a",
        options: [
          "Second order",
          "Ist order",
          "Third order",
          "Zero order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-48",
        question: "A certain chemical reaction follow the following rate law\nRate = K [A][B]^2\nThe order of reaction is",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-49",
        question: "A reaction is found to be second order with respect to B, if B is doubled, keeping every other substance constant. The rate of reaction will,",
        options: [
          "Remains unchanged",
          "Increase four times",
          "Increase three times",
          "Double"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following will increase the rate of reaction",
        options: [
          "Lowering the temperature",
          "Increasing volume",
          "Reducing activation energy",
          "Increasing activation energy"
        ],
        answer: 2
      }
  ];