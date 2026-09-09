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
        id: "carb-esters-1",
        question: "Propanoic acid is the functional group isomer of",
        options: ["Methyl acetate", "Propanal", "Ethyl acetate", "Propanone"],
        answer: 0,
        explanation: "Propanoic acid (C3H6O2) and methyl acetate (CH3COOCH3, C3H6O2) are functional group isomers as both share the same molecular formula."
      },
      {
        id: "carb-esters-2",
        question: "Esters have fruity smell and are used as artificial flavours. Amyl acetate gives flavour of",
        options: ["Banana", "Pineapple", "Jasmine", "Orange"],
        answer: 0,
        explanation: "Amyl acetate (pentyl acetate) is widely recognized for its characteristic banana flavor and aroma."
      },
      {
        id: "carb-esters-3",
        question: "The formula of caproic acid is",
        options: ["C₄H₉COOH", "C₆H₁₃COOH", "C₅H₁₁COOH", "C₇H₁₅COOH"],
        answer: 2,
        explanation: "Caproic acid (hexanoic acid) contains a total of 6 carbon atoms, represented by the formula C5H11COOH."
      },
      {
        id: "carb-esters-4",
        question: "In esterification the OH group of carboxylic acid departs as",
        options: [
          "O and carbonyl C",
          "O and carbonyl O",
          "N and carbonyl C",
          "N and carbonyl O"
        ],
        answer: 0,
        explanation: "Note: In esterification mechanism, the -OH group leaves the carbonyl carbon upon nucleophilic attack; option C is mapped according to the provided key."
      },
      {
        id: "carb-esters-5",
        question: "Formic acid is obtained from",
        options: ["Apples", "Butter", "Ants sting", "None"],
        answer: 2,
        explanation: "Formic acid derives its name from 'Formica' (red ant), as it is present in ant stings and bee venom."
      },
      {
        id: "carb-esters-6",
        question: "Solubility of carboxylic acids decreases in water with increase in molar mass because",
        options: [
          "Bigger molecules are more polar",
          "Bigger molecules have bigger nonpolar group",
          "Bigger molecules make more hydrogen bonds",
          "Bigger molecules can form lesser hydrogen bonds"
        ],
        answer: 1,
        explanation: "As molar mass increases, the length of the non-polar hydrophobic alkyl chain increases, suppressing water solubility."
      },
      {
        id: "carb-esters-7",
        question: "Final product of hydrolysis of nitrile is",
        options: ["Ketone", "Aldehydes", "Alcohol", "Carboxylic acid"],
        answer: 3,
        explanation: "Complete acid or base hydrolysis of nitriles (-C≡N) converts them into carboxylic acids (-COOH) and ammonium salts."
      },
      {
        id: "carb-esters-8",
        question: "Which one of the following will react with both ethanol and ethanoic acid at room temperature",
        options: ["CaCO₃", "Na metal", "CuO", "CH₃OH"],
        answer: 1,
        explanation: "Sodium metal reacts with both alcohols (ethanol) and carboxylic acids (ethanoic acid) to liberate hydrogen gas."
      },
      {
        id: "carb-esters-9",
        question: "Carboxylic acid is more acidic than phenol because of the greater stability of",
        options: [
          "Carboxylic acid",
          "Proton",
          "Phenoxide ion",
          "Carboxylate ion"
        ],
        answer: 3,
        explanation: "The carboxylate ion is stabilized by two equivalent resonance structures where negative charge is delocalized over two electronegative oxygen atoms."
      },
      {
        id: "carb-esters-10",
        question: "Carboxylic acid can be reduced into corresponding alcohol. Which of the following reagent can be used for this purpose",
        options: ["K₂Cr₂O₇", "LiAlH₄", "H₂SO₄", "KMnO₄"],
        answer: 1,
        explanation: "Lithium aluminium hydride (LiAlH4) is a powerful reducing agent that selectively reduces carboxylic acids directly to primary alcohols."
      },
      {
        id: "carb-esters-11",
        question: "When ethyl magnesium bromide is treated with carbon dioxide and the product hydrolysed we get",
        options: ["Formic acid", "Oxalic acid", "Propionic acid", "Acetic acid"],
        answer: 2,
        explanation: "CH3CH2MgBr + CO2 -> CH3CH2COOMgBr. Acid hydrolysis yields propionic acid (propanoic acid, C2H5COOH)."
      },
      {
        id: "carb-esters-12",
        question: "How carboxylic acids are formed from alcohol",
        options: ["Hydrolysis", "Reduction", "Oxidation", "Protonation"],
        answer: 2,
        explanation: "Primary alcohols undergo oxidation via aldehydes to yield carboxylic acids using strong oxidizing agents."
      },
      {
        id: "carb-esters-13",
        question: "Which compound shows the highest melting point",
        options: [
          "Water",
          "Propanoic acid",
          "Methanoic acid",
          "Ethanoic acid"
        ],
        answer: 3,
        explanation: "Ethanoic acid exhibits high symmetry and effective crystal lattice packing alongside hydrogen-bonded dimer formation, yielding a higher melting point among the given choices."
      },
      {
        id: "carb-esters-14",
        question: "Which of the following is weaker acid",
        options: ["HCl", "H₂SO₄", "CH₃COOH", "H₃PO₄"],
        answer: 3,
        explanation: "Note: Acetic acid (CH3COOH) is an organic weak acid, but H3PO4 (a moderately weak mineral acid) is mapped per the provided answer key."
      },
      {
        id: "carb-esters-15",
        question: "Octyl acetate has the flavour of",
        options: ["Orange", "Pineapple", "Banana", "Apple"],
        answer: 0,
        explanation: "Octyl acetate is an ester possessing a distinct citrus orange flavor and aroma."
      },
      {
        id: "carb-esters-16",
        question: "All are dicarboxylic acid except",
        options: ["Oxalic acid", "Picric acid", "Malonic acid", "Tartaric acid"],
        answer: 1,
        explanation: "Picric acid is 2,4,6-trinitrophenol (a phenolic compound), not a carboxylic acid."
      },
      {
        id: "carb-esters-17",
        question: "Acetyl chloride is used in the synthesis of organic compound. It is prepared by treating acetic acid with",
        options: ["SOCl₂", "HCl", "CH₃Cl", "ClNH₂"],
        answer: 0,
        explanation: "Thionyl chloride (SOCl2) reacts with acetic acid to form acetyl chloride, releasing SO2 and HCl gases."
      },
      {
        id: "carb-esters-18",
        question: "Formation of acyl halide and amide by carboxylic acid involves",
        options: [
          "Replacement of hydrogen",
          "Replacement of carbonyl group",
          "Replacement of hydroxyl group",
          "Replacement of oxygen"
        ],
        answer: 2,
        explanation: "Conversion of -COOH to -COX (acyl halide) or -CONH2 (amide) involves nucleophilic substitution replacing the -OH group."
      },
      {
        id: "carb-esters-19",
        question: "Reverse process of esterification is",
        options: ["Saponification", "Hydrolysis", "Rancidity", "None"],
        answer: 1,
        explanation: "Note: Acid hydrolysis is the direct reverse of esterification; alkaline hydrolysis of esters is termed saponification (mapped per key)."
      },
      {
        id: "carb-esters-20",
        question: "When fat reacts with sodium hydroxide the reaction is called",
        options: ["Esterification", "Saponification", "Hydrolysis", "Hardening"],
        answer: 1,
        explanation: "Alkaline hydrolysis of triglyceride fats/oils using NaOH to yield glycerol and soap (sodium salts of fatty acids) is termed saponification."
      },
      {
        id: "carb-esters-21",
        question: "Reduction of carboxylic acid to form",
        options: ["Aldehydes", "Ketones", "Acetic anhydride", "None"],
        answer: 0,
        explanation: "Controlled or partial reduction of carboxylic acid derivatives yields aldehydes."
      },
      {
        id: "carb-esters-22",
        question: "Propanone on oxidation gives",
        options: [
          "Acetic acid",
          "Formic acid and acetic acid",
          "Formic acid",
          "Propionic acid"
        ],
        answer: 1,
        explanation: "Vigorous oxidation of unsymmetrical or symmetrical ketones like propanone involves C-C bond cleavage (Popoff's rule), yielding acetic acid and formic acid (which further oxidizes to CO2/H2O)."
      },
      {
        id: "carb-esters-23",
        question: "In carboxylic acid molecules the bond angle between alkyl group and hydroxyl group is",
        options: ["90 degree", "180 degree", "60 degree", "120 degree"],
        answer: 3,
        explanation: "The carbonyl carbon in carboxylic acids is sp2 hybridized, establishing a trigonal planar geometry with ~120° bond angles."
      },
      {
        id: "carb-esters-24",
        question: "The complete oxidation of ethanol produces first ethanal then",
        options: ["Ethanal", "Ethanoic acid", "Propanone", "Benzoic acid"],
        answer: 1,
        explanation: "Oxidation of ethanol (primary alcohol) progresses to ethanal (aldehyde) and ultimately to ethanoic acid (carboxylic acid)."
      },
      {
        id: "carb-esters-25",
        question: "A compound X has all of the properties below: it is a liquid at 25°C, it mixes completely with water, it reacts with aqueous sodium hydroxide. What could X be",
        options: [
          "Ethanoic acid",
          "Ethene",
          "Ethanol",
          "Ethyl ethanoate"
        ],
        answer: 2,
        explanation: "Note: Ethanoic acid fits all three properties (liquid, miscible, reacts with NaOH base). Option C (Ethanol) is mapped per the provided answer key."
      },
      {
        id: "carb-esters-26",
        question: "Which of the following causes complete reduction of carboxylic acids into alkanes",
        options: ["H₂/Ni", "HI/P", "Pd/C", "LiAlH₄"],
        answer: 1,
        explanation: "Concentrated hydroiodic acid in the presence of red phosphorus (HI/P) reduces carboxylic acids completely down to alkanes."
      },
      {
        id: "carb-esters-27",
        question: "Highest boiling point is observed in",
        options: [
          "Butanoic acid",
          "Pentanoic acid",
          "Propanoic acid",
          "HCl"
        ],
        answer: 1,
        explanation: "Boiling point increases with molecular mass due to increasing London dispersion forces among carboxylic acid dimers; pentanoic acid has the highest mass listed."
      },
      {
        id: "carb-esters-28",
        question: "Valeric acid is obtained from a herb valerian. Its IUPAC name is",
        options: [
          "Propionic acid",
          "Butyric acid",
          "Pentanoic acid",
          "Caproic acid"
        ],
        answer: 2,
        explanation: "Valeric acid is the trivial name for pentanoic acid (5-carbon straight-chain carboxylic acid)."
      },
      {
        id: "carb-esters-29",
        question: "Methyl cyanide on boiling with mineral acid yields",
        options: [
          "Acetic acid",
          "Propanoic acid",
          "Formic acid",
          "Butanoic acid"
        ],
        answer: 0,
        explanation: "Methyl cyanide (acetonitrile, CH3CN) undergoes acid hydrolysis to yield acetic acid (CH3COOH)."
      },
      {
        id: "carb-esters-30",
        question: "Ethanoic acid reacts with all of these to produce water except",
        options: [
          "Ethanol",
          "Caustic soda",
          "Sodium",
          "Sodium hydrogen carbonate"
        ],
        answer: 2,
        explanation: "Reaction of ethanoic acid with sodium metal produces sodium ethanoate and hydrogen gas (H2), NOT water."
      },
      {
        id: "carb-esters-31",
        question: "Which one of the following reaction of carboxylic acid is reversible",
        options: [
          "Esterification",
          "Reaction with PCl₅",
          "Salt formation",
          "Reaction with SOCl₂"
        ],
        answer: 0,
        explanation: "Acid-catalyzed esterification between a carboxylic acid and an alcohol is an equilibrium-controlled reversible reaction."
      },
      {
        id: "carb-esters-32",
        question: "Formamide is formed by the reaction of which acid with ammonia",
        options: [
          "Oxalic acid",
          "Formic acid",
          "Ethanoic acid",
          "Propanoic acid"
        ],
        answer: 1,
        explanation: "Formic acid (HCOOH) reacts with ammonia (NH3) upon heating to yield formamide (HCONH2)."
      },
      {
        id: "carb-esters-33",
        question: "The reagent that cannot produce an acyl halide in reaction with a carboxylic acid is",
        options: ["PCl₃", "PCl₅", "HCl", "SOCl₂"],
        answer: 2,
        explanation: "Hydrochloric acid (HCl) cannot convert carboxylic acids to acyl chlorides; PCl3, PCl5, or SOCl2 are required."
      },
      {
        id: "carb-esters-34",
        question: "The most common compound found in pineapple is",
        options: [
          "Acetic acid",
          "Ethanol",
          "Acetone",
          "Ethyl butanoate"
        ],
        answer: 3,
        explanation: "Ethyl butanoate is an ester responsible for the characteristic sweet pineapple fragrance and flavor."
      },
      {
        id: "carb-esters-35",
        question: "Lowest boiling point is shown by",
        options: [
          "Acetic acid",
          "Formic acid",
          "Propionic acid",
          "Gallery cassette"
        ],
        answer: 1,
        explanation: "Formic acid (HCOOH) has the smallest molecular mass among simple carboxylic acids, giving it the lowest boiling point."
      },
      {
        id: "carb-esters-36",
        question: "Two molecules of acetic acid on condensation give",
        options: [
          "Ethyl acetate",
          "Acetic amide",
          "Acetic anhydride",
          "Tartaric acid"
        ],
        answer: 2,
        explanation: "Note: Dehydration of two acetic acid molecules yields acetic anhydride. Option B (Acetic amide) is mapped per the provided key."
      },
      {
        id: "carb-esters-37",
        question: "Benzoic acid is the product of oxidation of",
        options: ["Benzene", "Ethylbenzene", "Aniline", "Phenol"],
        answer: 1,
        explanation: "Oxidation of alkylbenzenes like ethylbenzene using strong oxidizing agents yields benzoic acid."
      },
      {
        id: "carb-esters-38",
        question: "The formation of ester from acetic acid in presence of acid and ethanol is a",
        options: [
          "Nucleophilic substitution reaction",
          "Electrophilic substitution reaction",
          "Nucleophilic addition reaction",
          "Electrophilic addition reaction"
        ],
        answer: 0,
        explanation: "Esterification follows an acyl nucleophilic substitution mechanism where the alcohol acts as a nucleophile attacking the protonated carbonyl."
      },
      {
        id: "carb-esters-39",
        question: "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
        options: ["Propanal", "1-propanol", "Propanone", "Propanoic acid"],
        answer: 0,
        explanation: "Note: Primary alcohols (like 1-propanol) oxidize to acids and react together to form sweet-smelling esters; option A (Propanal) is mapped per the answer key."
      },
      {
        id: "carb-esters-40",
        question: "What will be the outcome of reaction of methanol with ethanoic acid in the presence of concentrated sulphuric acid",
        options: [
          "Propanone is formed",
          "Propenoic acid is formed",
          "Methyl ethanoate is formed",
          "Propanol is formed"
        ],
        answer: 2,
        explanation: "Methanol + Ethanoic acid --(H2SO4)--> Methyl ethanoate (ester) + Water."
      },
      {
        id: "carb-esters-41",
        question: "CH₃CH₂COOH is named according to IUPAC nomenclature as",
        options: [
          "Propionic acid",
          "Oxalic acid",
          "1-propanoic acid",
          "Propanoic acid"
        ],
        answer: 3,
        explanation: "The 3-carbon carboxylic acid is designated as propanoic acid under IUPAC rules."
      },
      {
        id: "carb-esters-42",
        question: "The reaction of carboxylic acids which involve hydrogen atom removal of hydroxyl group form …… as major product in all reactions",
        options: ["Esters", "Nitriles", "Ketones", "Salts"],
        answer: 3,
        explanation: "Reactions breaking the O-H bond in carboxylic acids behave as acid-base reactions to produce carboxylate salts."
      },
      {
        id: "carb-esters-43",
        question: "In the presence of hot alkaline potassium permanganate solution 2-butene will give",
        options: [
          "Formic acid + acetic acid",
          "Two moles of methanoic acid",
          "Two moles of ethanoic acid",
          "Ethylene glycol"
        ],
        answer: 2,
        explanation: "Oxidative cleavage of symmetric 2-butene (CH3-CH=CH-CH3) across the double bond yields 2 moles of ethanoic acid (acetic acid)."
      },
      {
        id: "carb-esters-44",
        question: "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
        options: ["Propanal", "1-propanol", "Propanone", "Propanoic acid"],
        answer: 0,
        explanation: "Duplicate question in source key mapped to Option A (Propanal)."
      },
      {
        id: "carb-esters-45",
        question: "Which of the following is used as coagulant for latex in rubber industry",
        options: [
          "Formic acid",
          "Acetaldehyde",
          "Acetic acid",
          "None of the above mentioned"
        ],
        answer: 2,
        explanation: "Note: Both formic acid and acetic acid serve as rubber latex coagulants; acetic acid is mapped per the answer key."
      },
      {
        id: "carb-esters-46",
        question: "Glycine is an amino acid which is present in solution as",
        options: ["Acid", "Base", "Zwitter ion", "All"],
        answer: 2,
        explanation: "At physiological pH, amino acids exist primarily as dipolar zwitterions (+NH3-CH2-COO-)."
      },
      {
        id: "carb-esters-47",
        question: "When two carboxylic acids are strongly heated in the presence of P₂O₅ which product is formed",
        options: ["Acid halides", "Dimer", "Acid anhydride", "None"],
        answer: 2,
        explanation: "Phosphorus pentoxide (P2O5) acts as a powerful dehydrating agent, abstracting water from two carboxylic acid molecules to yield an acid anhydride."
      },
      {
        id: "carb-esters-48",
        question: "Which of the following is used in perfumes",
        options: ["Alcohol", "Aldehydes", "Ketone", "Carboxylic acids"],
        answer: 0,
        explanation: "Note: Esters and fragrant aldehydes/alcohols are extensively utilized in perfumery; option A (Alcohol) is mapped per the key."
      },
      {
        id: "carb-esters-49",
        question: "Relative strength of alcohol, phenol, water and carboxylic acid is",
        options: [
          "Carboxylic acid > alcohol > phenol > water",
          "Carboxylic acid > phenol > water > alcohol",
          "Phenol > carboxylic acid > alcohol > water",
          "Water > phenol > alcohol > carboxylic acid"
        ],
        answer: 1,
        explanation: "Relative acid strengths follow the decreasing order: Carboxylic acid (pKa ~4-5) > Phenol (pKa ~10) > Water (pKa 15.7) > Alcohol (pKa ~16-18)."
      },
      {
        id: "carb-esters-50",
        question: "All are aliphatic carboxylic acids except",
        options: [
          "Methanoic acid",
          "Ethanoic acid",
          "Benzoic acid",
          "Lactic acid"
        ],
        answer: 2,
        explanation: "Benzoic acid (C6H5COOH) contains a carboxyl group directly bonded to an aromatic benzene ring, making it an aromatic carboxylic acid."
      }
  ];