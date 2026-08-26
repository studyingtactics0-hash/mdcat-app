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
    }
  ];