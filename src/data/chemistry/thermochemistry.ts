export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const thermochemistryQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-100",
      question: "Which one of the following is an exothermic process?",
      options: [
        "Melting of ice",
        "Evaporation of water",
        "Oxidation of Sulphur",
        "Photosynthesis"
      ],
      answer: 2,
      explanation: "Oxidation of sulphur (combustion) releases heat energy (ΔH < 0), making it an exothermic reaction. Melting, evaporation, and photosynthesis all require heat absorption (endothermic)."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-75",
      question: "The change in enthalpy for the reaction:\nNaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l) is:",
      options: [
        "heat of combustion",
        "heat of neutralization",
        "heat of decomposition",
        "heat of formation"
      ],
      answer: 1,
      explanation: "The reaction between a strong acid (HNO₃) and a strong base (NaOH) to form a salt and water is a neutralization reaction, and its enthalpy change is the heat of neutralization."
    },
    {
      id: "bumhs-mdcat-2024-77",
      question: "Units of change in enthalpy of a system are:",
      options: [
        "cc",
        "°C",
        "J",
        "Pa"
      ],
      answer: 2,
      explanation: "Enthalpy change (ΔH) represents energy and is measured in Joules (J) or kiloJoules (kJ) in SI units."
    },
    {
      id: "bumhs-mdcat-2024-88",
      question: "The sign of heat “q” is positive for a system when:",
      options: [
        "the temperature of system drops",
        "heat flows from surrounding to system",
        "heat flows from system to surrounding",
        "no flow of heat between system to surrounding"
      ],
      answer: 1,
      explanation: "By thermodynamic sign convention, heat absorbed by the system from the surroundings is positive (+q)."
    },
    {
      id: "bumhs-mdcat-2024-98",
      question: "5 calories are equivalent to ______ Joule.",
      options: [
        "4.184",
        "10.26",
        "20.92",
        "25.65"
      ],
      answer: 2,
      explanation: "1 calorie = 4.184 Joules. Therefore, 5 calories = 5 × 4.184 = 20.92 Joules."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-85",
      question: "Volume is a:",
      options: [
        "Intensive property",
        "Entropy",
        "Path function",
        "Isolated system",
        "State function"
      ],
      answer: 4,
      explanation: "Volume depends solely on the current state of a system, making it a thermodynamic state function."
    },
    {
      id: "chem-sindh-24-91",
      question: "An example of an endothermic reaction is:",
      options: [
        "Photosynthesis",
        "Synthesis of NH₃",
        "Nuclear fission",
        "Oxidation of sulfur gases",
        "Burning of fuel and coal"
      ],
      answer: 0,
      explanation: "Photosynthesis absorbs solar energy to convert carbon dioxide and water into glucose and oxygen, functioning as an endothermic reaction."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-84",
      question: "Which of the following is NOT a state function?",
      options: [
        "Enthalpy",
        "Work",
        "Internal energy",
        "Pressure"
      ],
      answer: 1,
      explanation: "Work (w) and heat (q) are path functions because their values depend on the pathway taken to achieve a state transition."
    },
    {
      id: "chem-sindh-25-93",
      question: "The heat of formation of CO and CO₂ are -26.4 Kcal and -94.0 Kcal respectively. The heat of combustion of carbon monoxide according to Hess’s Law will be:",
      options: [
        "+26.4Kcal",
        "-67.6Kcal",
        "+94.0Kcal",
        "-120.4Kcal"
      ],
      answer: 1,
      explanation: "For CO(g) + ½O₂(g) → CO₂(g), ΔH_rxn = ΔH_f(CO₂) − ΔH_f(CO) = −94.0 Kcal − (−26.4 Kcal) = −67.6 Kcal."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-128",
      question: "For an exothermic reaction, the energy level of reactant is:",
      options: [
        "Less than the product",
        "More than the product",
        "Equal to the product",
        "Zero"
      ],
      answer: 1,
      explanation: "In an exothermic reaction, net energy is released, meaning the potential energy of reactants is greater than that of products (ΔH = H_products − H_reactants < 0)."
    },
    {
      id: "kmu-mdcat-25-chem-130",
      question: "An increase in the internal energy of a chemical system can lead to all EXCEPT:",
      options: [
        "An increase in temperature due to rise in kinetic energy of molecules",
        "A phase change such as melting or evaporation",
        "A chemical reaction if energy supplied is sufficient to break bonds",
        "An increase in temperature due to drop in kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Temperature measures average molecular kinetic energy; an increase in temperature cannot be caused by a drop in kinetic energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-95",
      question: "Calculate the work done when 1 mole of an ideal gas expands from 15 dm³ to 20 dm³ against a constant external pressure of 2 atmospheres.",
      options: [
        "−10 atm·dm³",
        "−5 atm·dm³",
        "5 atm·dm³",
        "10 atm·dm³"
      ],
      answer: 0,
      explanation: "Work done by system expansion w = −P_ext ΔV = −2 atm × (20 − 15) dm³ = −10 atm·dm³."
    },
    {
      id: "kmu-mdcat-2024-96",
      question: "When 1 mole of ice melts at 0°C and constant pressure of 1 atmosphere, 6025 J of heat is absorbed by the system. The molar volume of ice and water are 0.020 and 0.018 dm³, respectively. Calculate ΔE. (1 dm³·atm = 101.33 J)",
      options: [
        "6010.20 J",
        "6015.20 J",
        "6020.20 J",
        "6025.20 J"
      ],
      answer: 3,
      explanation: "ΔV = V_water − V_ice = 0.018 − 0.020 = −0.002 dm³. Work done w = −P ΔV = −1 atm × (−0.002 dm³) = +0.002 dm³·atm = +0.20 J. By first law, ΔE = q + w = 6025 J + 0.20 J ≈ 6025.20 J."
    },
    {
      id: "kmu-mdcat-2024-97",
      question: "One slice of bread with a tablespoon of peanut butter on it contains 20g carbohydrate, 10g protein, and 9g fat. Calculate total energy consumed in this intake.",
      options: [
        "158 kcal",
        "173 kcal",
        "201 kcal",
        "218 kcal"
      ],
      answer: 2,
      explanation: "Energy contributions: Carbohydrates (20g × 4 kcal/g = 80 kcal), Protein (10g × 4 kcal/g = 40 kcal), Fat (9g × 9 kcal/g = 81 kcal). Total energy = 80 + 40 + 81 = 201 kcal."
    },
    {
      id: "kmu-mdcat-2024-98",
      question: "ΔH can be measured indirectly by applying",
      options: [
        "Avogadro’s law",
        "Faraday’s law",
        "Gass’s law",
        "Hess’s law"
      ],
      answer: 3,
      explanation: "Hess's Law of Constant Heat Summation allows indirect calculation of reaction enthalpy changes for reactions that cannot be directly measured experimentally."
    },
    {
      id: "kmu-mdcat-2024-99",
      question: "The heat of sublimation of potassium is 98 kJ/mol, the heat of dissociation of ½Br₂ gas is 96.25 kJ/mol (or 192.5 for Br₂). The ionization energy of K is 414 kJ/mol. The electron affinity of Br is −334.7 kJ/mol and the heat of formation of KBr is −405.8 kJ/mol. Calculate the lattice energy of KBr.",
      options: [
        "−679.3",
        "−669.5",
        "679.3",
        "669.5"
      ],
      answer: 0,
      explanation: "Using Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U → −405.8 = 98 + 414 + 96.25 − 334.7 + U → −405.8 = 273.55 + U → U = −679.35 kJ/mol ≈ −679.3 kJ/mol."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-83",
      question: "What will be the internal energy of a system at constant volume?",
      options: [
        "ΔE = 0",
        "ΔE = q + P",
        "ΔE = q + PΔV",
        "ΔE = qᵥ"
      ],
      answer: 3,
      explanation: "At constant volume, ΔV = 0, so work done PΔV = 0. According to the First Law of Thermodynamics, heat absorbed at constant volume equals internal energy change (ΔE = qᵥ)."
    },
    {
      id: "szambu-chem-24-108",
      question: "Who stated that enthalpy change in a chemical reaction is same whether the reaction takes place in single step or in several steps?",
      options: [
        "Arrhenius’ Law",
        "Born Haber’s Law",
        "Dalton’s Law",
        "Hess’s Law"
      ],
      answer: 3,
      explanation: "This is the statement of Hess's Law of Constant Heat Summation."
    },
    {
      id: "szambu-chem-24-110",
      question: "At constant volume, the heat supplied to a system is always equal to its ______.",
      options: [
        "bond energy",
        "enthalpy change",
        "heat of sublimation",
        "internal energy change"
      ],
      answer: 3,
      explanation: "Because work PΔV = 0 at constant volume, all heat supplied goes directly into increasing the internal energy of the system (qᵥ = ΔE)."
    },
    {
      id: "szambu-chem-24-113",
      question: "What will be formula of work, when work is done on the system by the surrounding?",
      options: [
        "W = – P/ΔV",
        "W = – PΔV",
        "W = P/ΔV",
        "W = PΔV"
      ],
      answer: 3,
      explanation: "Under standard chemistry convention, work done on the system by the surroundings during compression is positive (w = +PΔV)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "For endothermic reaction, enthalpy change is:",
      options: [
        "ΔHreactant > ΔHproduct",
        "ΔHreactant < ΔHproduct",
        "ΔHreactant = ΔHproduct",
        "ΔHreactant = ΔHproduct = 0"
      ],
      answer: 1,
      explanation: "In an endothermic reaction, products absorb heat energy and reside at a higher enthalpy level than reactants (H_reactants < H_products)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-91",
      question: "In endothermic reaction, the heat content of the",
      options: [
        "Reactants and products is equal",
        "Reactants is more than that of products",
        "Products is more than that of reactants",
        "Reactants & Products will not change"
      ],
      answer: 2,
      explanation: "Endothermic processes absorb energy from surroundings, so the total heat content (enthalpy) of products is greater than that of reactants."
    },
    {
      id: "uhs-2024-chem-92",
      question: "All of the following steps are used to calculate the lattice energy in Born-Haber cycle EXCEPT",
      options: [
        "Atomizing the metal",
        "Ionizing the metal",
        "Deionize the metal",
        "Ionize non metal"
      ],
      answer: 2,
      explanation: "The Born-Haber cycle involves atomization, metal ionization, non-metal electron affinity/ionization, and lattice formation. 'Deionize the metal' is not a step in the cycle."
    },
    {
      id: "uhs-2024-chem-93",
      question: "The enthalpy change when 1 Mole of water is formed by the reaction of acid with an alkali under standard conditions is known as:",
      options: [
        "Enthalpy of formation",
        "Enthalpy of reaction",
        "Enthalpy of combustion",
        "Enthalpy of neutralization"
      ],
      answer: 3,
      explanation: "Enthalpy of neutralization is defined specifically as the heat evolved when 1 mole of water is formed from H⁺ and OH⁻ ions under standard conditions."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-88",
      question: "Majority of reactions taking place at ordinary temperatures with –ΔH are",
      options: [
        "Endothermic",
        "Exothermic",
        "Thermally unstable",
        "Reversible"
      ],
      answer: 1,
      explanation: "Reactions accompanied by a negative enthalpy change (−ΔH) release heat into the surroundings and are classified as exothermic."
    },
    {
      id: "uhs-chem-25-114",
      question: "If 100 KJ of heat is absorbed by the system and 40 KJ of work is done on the system what is the change of internal energy?",
      options: [
        "–60 KJ",
        "+60 KJ",
        "–140 KJ",
        "+140 KJ"
      ],
      answer: 3,
      explanation: "According to the First Law of Thermodynamics ΔU = q + w. Heat absorbed q = +100 kJ, work done on system w = +40 kJ. Thus ΔU = +100 + 40 = +140 kJ."
    }
  ];