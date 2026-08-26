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
    }
  ];