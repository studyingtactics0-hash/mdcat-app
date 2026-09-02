export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const carboxylicAcidsQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-85",
      question: "Common name of pentanoic acid (CH₃–CH₂–CH₂–CH₂–COOH) is:",
      options: [
        "valeric acid",
        "caproic acid",
        "stearic acid",
        "oxalic acid"
      ],
      answer: 0,
      explanation: "Pentanoic acid is a 5-carbon straight-chain carboxylic acid commonly known as valeric acid."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-71",
      question: "It is used as a preservative and antibacterial agent in livestock feed:",
      options: [
        "Butyric acid",
        "Formic acid",
        "Caproic acid",
        "Propionic acid",
        "Valeric acid"
      ],
      answer: 3,
      explanation: "Propionic acid (propanoic acid) and its salts are widely used as preservatives and antimicrobial agents in animal feed and grain storage."
    },
    {
      id: "chem-sindh-24-97",
      question: "Carboxylic acids are organic acids that are stronger acids than:",
      options: [
        "PCl₅",
        "H₂SO₄",
        "HNO₃",
        "HCl",
        "CH₃OH"
      ],
      answer: 4,
      explanation: "Carboxylic acids (pKa ~ 4–5) are weaker than mineral acids (H₂SO₄, HNO₃, HCl), but significantly stronger acids than alcohols like methanol (pKa ~ 15.5)."
    },
    {
      id: "chem-sindh-24-111",
      question: "Formic acid (HCOOH) is naturally found in:",
      options: [
        "Butter",
        "Goat",
        "Milk",
        "Vinegar",
        "Ants"
      ],
      answer: 4,
      explanation: "Formic acid takes its name from the Latin word 'formica' (ant) because it was first isolated by the distillation of ant bodies."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-86",
      question: "Formic acid reacts with ethanol in the presence of an acid catalyst to produce a/an:",
      options: [
        "Ester",
        "Ether",
        "Acid anhydride",
        "Phenol"
      ],
      answer: 0,
      explanation: "Reaction between a carboxylic acid (formic acid) and an alcohol (ethanol) in an acid-catalyzed Fischer esterification produces an ester (ethyl formate) and water."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-120",
      question: "Acetic acid (CH₃COOH) can be prepared by the complete acid hydrolysis of:",
      options: [
        "Ethanol",
        "Ethanal",
        "Methanoic acid",
        "Methyl cyanide"
      ],
      answer: 3,
      explanation: "Acidic or basic hydrolysis of nitriles (methyl cyanide / acetonitrile, CH₃CN + 2H₂O + H⁺ → CH₃COOH + NH₄⁺) yields ethanoic acid (acetic acid)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-79",
      question: "When CO₂ reacts with propyl magnesium chloride (CH₃CH₂CH₂MgCl) followed by acid hydrolysis, the product formed is:",
      options: [
        "Butanoic acid",
        "Ethanoic acid",
        "Pentanoic acid",
        "Propanoic acid"
      ],
      answer: 0,
      explanation: "Carboxylation of a Grignard reagent adds one carbon to the alkyl chain: 3-carbon propyl group + CO₂ (1 carbon) → 4-carbon carboxylic acid (butanoic acid)."
    },
    {
      id: "szambu-chem-24-105",
      question: "The IUPAC name of Malonic acid HOOC–CH₂–COOH is:",
      options: [
        "1,2-Ethanedioic acid",
        "1,3-Propanedioic acid",
        "1,4-butanedioic acid",
        "1,6-Hexadecanoic acid"
      ],
      answer: 1,
      explanation: "Malonic acid contains 3 carbon atoms with two terminal carboxylic acid groups, systematically named 1,3-propanedioic acid."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Reduction of carboxylic acids using lithium aluminum hydride (LiAlH₄) followed by hydrolysis produces a primary:",
      options: [
        "Alcohol",
        "acid halide",
        "ester",
        "alkane"
      ],
      answer: 0,
      explanation: "Lithium aluminum hydride (LiAlH₄) is a powerful reducing agent that reduces carboxylic acids completely to 1° alcohols (R–COOH → R–CH₂OH)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-119",
      question: "Common name of 2-hydroxypropanoic acid (CH₃–CH(OH)–COOH) is:",
      options: [
        "Tartaric acid",
        "Lactic acid",
        "Phthalic acid",
        "Formic acid"
      ],
      answer: 1,
      explanation: "2-hydroxypropanoic acid is commonly known as lactic acid, found in sour milk and muscle tissues during anaerobic respiration."
    },
    {
      id: "uhs-2024-chem-121",
      question: "When carboxylic acids are heated with an alcohol in the presence of concentrated sulfuric acid, one of the following is formed:",
      options: [
        "Amides",
        "Acyl chloride",
        "Esters",
        "Acid Anhydride"
      ],
      answer: 2,
      explanation: "Heating a carboxylic acid with an alcohol in the presence of H₂SO₄ catalyst yields an ester via Fischer esterification."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-126",
      question: "Carboxylic acid reacts with ammonia to form ammonium carboxylate salts, which on dry heating produce:",
      options: [
        "Carbonates",
        "Alkane",
        "Ester",
        "Amide"
      ],
      answer: 3,
      explanation: "R–COOH + NH₃ → R–COONH₄. Thermal dehydration of the ammonium carboxylate salt (R–COONH₄ → R–CONH₂ + H₂O) yields an acid amide."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "Propanoic acid is the functional group isomer of",
        options: [
          "Methyl acetate",
          "Propanal",
          "Ethyl acetate",
          "Propanone"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-2",
        question: "Esters have fruity smell and are used as artificial flavours. Amyl acetate gives flavour of",
        options: [
          "Banana",
          "Pineapple",
          "Jasmine",
          "Orange"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "The formula of caproic acid is",
        options: [
          "C4H9COOH",
          "C6H13COOH",
          "C5H11COOH",
          "C7H15COOH"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-4",
        question: "In esterification the OH group of carboxylic acid departs as",
        options: [
          "O and carbonyl C",
          "O and carbonyl O",
          "N and carbonyl C",
          "N and carbonyl O"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-5",
        question: "Formic acid is obtained from",
        options: [
          "Apples",
          "Butter",
          "Ants sting",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-6",
        question: "Solubility of carboxylic acids decreases in water with increase in molar mass because",
        options: [
          "Bigger molecules are more polar",
          "Bigger molecules have bigger nonpolar group",
          "Bigger molecules make more hydrogen bonds",
          "Bigger molecules can form lesser hydrogen bonds"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-7",
        question: "Final product of hydrolysis of nitrile is",
        options: [
          "Ketone",
          "Aldehydes",
          "Alcohol",
          "Carboxylic acid"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-8",
        question: "Which one of the following will react with both ethanol and ethanoic acid at room temperature",
        options: [
          "CaCO3",
          "Na metal",
          "CuO",
          "CH3OH"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "Carboxylic acid is more acidic than phenol because of the greater stability of",
        options: [
          "Carboxylic acid",
          "Proton",
          "Phenoxide ion",
          "Carboxylate ion"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-10",
        question: "Carboxylic acid can be reduced into corresponding alcohol. Which of the following reagent can be used for this purpose",
        options: [
          "K2Cr2O7",
          "LiAlH4",
          "H2SO4",
          "KMnO4"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-11",
        question: "When ethyl magnesium bromide is treated with carbon dioxide and the product hydrolysed we get",
        options: [
          "Formic acid",
          "Oxalic acid",
          "Propionic acid",
          "Acetic acid"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "How Carboxylic acids are formed from alcohol",
        options: [
          "Hydrolysis",
          "Reduction",
          "Oxidation",
          "Protonation"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-13",
        question: "Which compound shows the highest melting point",
        options: [
          "Water",
          "Propanoic acid",
          "Methanoic acid",
          "Ethanoic acid"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "Which of the following is weaker acid",
        options: [
          "HCl",
          "H2SO4",
          "CH3COOH",
          "H3PO4"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Octyl acetate has the flavour of",
        options: [
          "Orange",
          "Pineapple",
          "Banana",
          "Apple"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "All are dicarboxylic acid except",
        options: [
          "Oxalic acid",
          "Picric acid",
          "Malonic acid",
          "Tartaric acid"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-17",
        question: "Acetyl chloride is used in the synthesis of organic compound. It is prepared by treating acetic acid with",
        options: [
          "SOCl2",
          "HCl",
          "CH3Cl",
          "ClNH2"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-18",
        question: "Formation of acyl halide and amide by carboxylic acid involved",
        options: [
          "Replacement of hydrogen",
          "Replacement of carbonyl group",
          "Replacement of hydroxyl group",
          "Replacement of oxygen"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-19",
        question: "Reverse process of esterification is",
        options: [
          "Saponification",
          "Hydrolysis",
          "Rancidity",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-20",
        question: "When fat react with Sodium Hydroxide the reaction is called",
        options: [
          "Esterification",
          "Saponification",
          "Hydrolysis",
          "Hardening"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-21",
        question: "Reduction of Carboxylic acid to form",
        options: [
          "Aldehydes",
          "Ketones",
          "Acetic anhydride",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "Propanone on oxidation gives",
        options: [
          "Acetic acid",
          "Formic acid and acetic acid",
          "Formic acid",
          "Propionic acid"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "In carboxylic acid molecules the bond angle between alkyl group and hydroxyl group is",
        options: [
          "90 degree",
          "180 degree",
          "60 degree",
          "120 degree"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-24",
        question: "The complete oxidation of Ethanol produces first ethanal then",
        options: [
          "Ethanal",
          "Ethanoic acid",
          "Propanone",
          "Benzoic acid"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "A compound X has all of the properties below: it is a liquid at 25°C, it mixes completely with water, it reacts with aqueous Sodium Hydroxide. What could X be",
        options: [
          "Ethanoic acid",
          "Ethene",
          "Ethanol",
          "Ethyl ethanoate"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "Which of the following causes complete reduction of Carboxylic acids into alkanes",
        options: [
          "H2/Ni",
          "HI/P",
          "Pd/C",
          "LiAlH4"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "Highest boiling point is observed in",
        options: [
          "Butanoic acid",
          "Pentanoic acid",
          "Propanoic acid",
          "HCl"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-28",
        question: "Valeric acid is obtained from a herb valerian. Its IUPAC name is",
        options: [
          "Propionic acid",
          "Butyric acid",
          "Pentanoic acid",
          "Caproic acid"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-29",
        question: "Methyl cyanide on boiling with mineral acid yield",
        options: [
          "Acetic acid",
          "Propanoic acid",
          "Formic acid",
          "Butanoic acid"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-30",
        question: "Ethanoic acid reacts with all of these to produce water except",
        options: [
          "Ethanol",
          "Caustic soda",
          "Sodium",
          "Sodium hydrogen carbonate"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-31",
        question: "Which one of the following reaction of Carboxylic acid is reversible",
        options: [
          "Esterification",
          "Reaction with PCl5",
          "Salt formation",
          "Reaction with SOCl2"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-32",
        question: "Formamide is formed by the reaction of which acid with ammonia",
        options: [
          "Oxalic acid",
          "Formic acid",
          "Ethanoic acid",
          "Propanoic acid"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-33",
        question: "The reagent that cannot produce an acyl halide in reaction with a carboxylic acid is",
        options: [
          "PCl3",
          "PCl5",
          "HCl",
          "SOCl2"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-34",
        question: "The most common compound found in pineapple is",
        options: [
          "Acetic acid",
          "Ethanol",
          "Acetone",
          "Ethyl butanoate"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-35",
        question: "Lowest boiling point is shown by",
        options: [
          "Acetic acid",
          "Formic acid",
          "Propionic acid",
          "Gallary cassette"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-36",
        question: "Two molecules of Acetic Acid on condensation gives",
        options: [
          "Ethyl acetate",
          "Acetic amide",
          "Acetic anhydride",
          "Tartaric acid"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-37",
        question: "Benzoic acid is the product of oxidation of",
        options: [
          "Benzene",
          "Ethylbenzene",
          "Aniline",
          "Phenol"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-38",
        question: "The formation of Ester from acetic acid in presence of acid and ethanol is a",
        options: [
          "Nucleophilic substitution reaction",
          "Electrophilic substitution reaction",
          "Nucleophilic addition reaction",
          "Electrophilic addition reaction"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-39",
        question: "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
        options: [
          "Propanal",
          "1-propanol",
          "Propanone",
          "Propanoic acid"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "What will be the outcome of reaction of methanol with ethanoic acid in the presence of concentrated sulphuric acid",
        options: [
          "Propanone is formed",
          "Propenoic acid is formed",
          "Methyl ethanoate is formed",
          "Propanol is formed"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "CH3CH2COOH is named according to IUPAC nomenclature as",
        options: [
          "Propionic acid",
          "Oxalic acid",
          "1-propanoic acid",
          "Propanoic acid"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-42",
        question: "The reaction of carboxylic acids which involve hydrogen atom removal of hydroxyl group from ...... as major product in all reactions",
        options: [
          "Esters",
          "Nitriles",
          "Ketones",
          "Salts"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-43",
        question: "In the presence of hot alkaline potassium permanganate solution 2-butene will give",
        options: [
          "Formic acid + acetic acid",
          "Two moles of methanoic acid",
          "Two moles of ethanoic acid",
          "Ethylene glycol"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-44",
        question: "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
        options: [
          "Propanal",
          "1-propanol",
          "Propanone",
          "Propanoic acid"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-45",
        question: "Which of the following is used as coagulant for latex in Rubber Industry",
        options: [
          "Formic acid",
          "Acetaldehyde",
          "Acetic acid"
        ],
        answer: 2
      }
  ];