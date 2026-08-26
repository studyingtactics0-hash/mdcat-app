export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const liquidsQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-89",
      question: "Which of the following has lower vapour pressure?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethyl ether"
      ],
      answer: 0,
      explanation: "Water has strong extensive hydrogen bonding, giving it the strongest intermolecular forces among the options and consequently the lowest vapour pressure."
    },
    {
      id: "bumhs-2025-chem-90",
      question: "When liquids are heated, volume ______.",
      options: [
        "decreases",
        "increases",
        "remains same",
        "cannot be measured"
      ],
      answer: 1,
      explanation: "Heating increases kinetic energy and thermal expansion of liquid molecules, causing the liquid's volume to increase."
    },
    {
      id: "bumhs-2025-chem-97",
      question: "If molecules have strong dipole-dipole force, then they have high?",
      options: [
        "heat of neutralization",
        "heat of combustion",
        "heat of vaporization",
        "heat of atomization"
      ],
      answer: 2,
      explanation: "Stronger intermolecular forces (such as dipole-dipole interactions) require more thermal energy to separate molecules into the gas phase, resulting in a higher heat of vaporization."
    },
    {
      id: "bumhs-2025-chem-115",
      question: "Which one is the most volatile liquid?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethylether"
      ],
      answer: 3,
      explanation: "Diethyl ether has weak dipole-dipole/dispersion forces and a low boiling point (34.6°C), making it the most volatile liquid listed."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-92",
      question: "Water is:",
      options: [
        "weak electrolyte",
        "strong electrolyte",
        "very strong electrolyte",
        "moderate electrolyte"
      ],
      answer: 0,
      explanation: "Pure water auto-ionizes to a very small extent ([H⁺][OH⁻] = 10⁻¹⁴), functioning as a very weak electrolyte."
    },
    {
      id: "bumhs-mdcat-2024-107",
      question: "Which of the following is not a result of capillary action?",
      options: [
        "rise of water from soil to plant",
        "absorption of water by the cotton",
        "movement of blood in veins",
        "spreading of ink on blotting paper"
      ],
      answer: 2,
      explanation: "Blood flow through veins is driven by cardiac pumping pressure and skeletal muscle contraction with venous valves, not by capillary action."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-75",
      question: "According to Raoult’s law, the relative lowering of vapor pressure is equal to:",
      options: [
        "Mole fraction of solute",
        "Mole fraction of solvent",
        "Molarity",
        "Molality",
        "Parts per million"
      ],
      answer: 0,
      explanation: "Raoult's law for non-volatile solutes states that relative lowering of vapor pressure ΔP / P° = X_solute (mole fraction of solute)."
    },
    {
      id: "chem-sindh-24-108",
      question: "Which of the following liquids shows maximum surface tension?",
      options: [
        "Water",
        "Mercury",
        "Ethyl alcohol",
        "Chloroform",
        "Benzene"
      ],
      answer: 1,
      explanation: "Mercury exhibits metallic bonding with strong cohesive forces, giving it an extremely high surface tension (~485 mN/m, much higher than water's 72 mN/m)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-97",
      question: "Which of the following is least volatile?",
      options: [
        "Glycerol",
        "Water",
        "Acetic acid",
        "Diethyl ether"
      ],
      answer: 0,
      explanation: "Glycerol has three hydroxyl (-OH) groups per molecule, forming a extensive 3D hydrogen bonding network, making it highly viscous and the least volatile (highest boiling point)."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-127",
      question: "Water changes from a liquid at 0°C to ice at 0°C. What is the change in volume?",
      options: [
        "9% increase",
        "9% decrease",
        "19% increase",
        "19% decrease"
      ],
      answer: 0,
      explanation: "Upon freezing, water forms an open hydrogen-bonded crystalline lattice that decreases its density and increases its volume by approximately 9%."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-83",
      question: "Molar heat of vaporization of water is",
      options: [
        "40.7 cal/mol",
        "40.7 J/mol",
        "40.7 kcal/mol",
        "40.7 kJ/mol"
      ],
      answer: 3,
      explanation: "The molar heat of vaporization of water at its boiling point is ΔH_vap = 40.7 kJ/mol."
    },
    {
      id: "kmu-mdcat-2024-84",
      question: "Distillation under very reduced pressure is ______ distillation",
      options: [
        "Destructive",
        "Fractional",
        "Steam",
        "Vacuum"
      ],
      answer: 3,
      explanation: "Distillation performed under reduced atmospheric pressure to lower liquid boiling points and prevent thermal decomposition is called vacuum distillation."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-120",
      question: "For boiling point, vapor pressure of liquid DOES NOT depend upon ______.",
      options: [
        "amount of liquid",
        "external atmospheric pressure",
        "intermolecular forces",
        "type of bond"
      ],
      answer: 0,
      explanation: "Vapor pressure is an intensive property dependent on temperature and chemical nature/intermolecular forces, independent of the amount or volume of liquid."
    },
    {
      id: "szambu-chem-24-121",
      question: "Water is liquid at room temperature as compared to ammonia and hydrogen disulphide due to presence of ______.",
      options: [
        "Co-ordinate covalent bond",
        "Hydrogen bond",
        "Ionic bond",
        "Metallic bond"
      ],
      answer: 1,
      explanation: "Water molecules form strong, extensive hydrogen-bonded networks that keep water liquid at room temperature."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The weakest intermolecular force present in liquid is?",
      options: [
        "dipole dipole forces",
        "induce dipole force",
        "Instantaneous dipole induced dipole force",
        "hydrogen bonding"
      ],
      answer: 2,
      explanation: "Instantaneous dipole-induced dipole forces (London dispersion forces) are the weakest type of intermolecular force."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-79",
      question: "Which one of the following DO NOT have tendency to form hydrogen bonding?",
      options: [
        "Ammonia",
        "Ethyl alcohol",
        "Carboxylic acid",
        "Hydrocarbon"
      ],
      answer: 3,
      explanation: "Hydrocarbons consist solely of non-polar C-H and C-C bonds and lack highly electronegative atoms (N, O, F) required for hydrogen bonding."
    },
    {
      id: "uhs-2024-chem-80",
      question: "Boiling point of a liquid is a temperature at which:",
      options: [
        "Surface tension is greater than the atmospheric pressure",
        "Viscosity is less than the atmospheric pressure",
        "Vapour pressure equals the atmospheric pressure",
        "Viscosity equals the atmospheric pressure"
      ],
      answer: 2,
      explanation: "By definition, the boiling point is the temperature at which the internal vapour pressure of a liquid equals the external atmospheric pressure."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-97",
      question: "Which one of the following has higher vapour pressure?",
      options: [
        "acetone",
        "acetaldehyde",
        "Isopentane",
        "Benzene"
      ],
      answer: 2,
      explanation: "Isopentane is a branched non-polar alkane with very weak London dispersion forces and a low boiling point (~28°C), giving it the highest vapour pressure among these choices."
    }
  ];