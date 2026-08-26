export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const fundamentalPrinciplesOrganicChemistryQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-104",
      question: "What is formed by homolysis of a covalent bond?",
      options: [
        "free radical",
        "molecule",
        "ion",
        "atom"
      ],
      answer: 0,
      explanation: "Homolytic fission (homolysis) involves symmetrical breaking of a covalent bond, where each bonded atom takes one electron, producing neutral species with unpaired electrons called free radicals."
    },
    {
      id: "bumhs-2025-chem-114",
      question: "A molecule will be chiral, if it has:",
      options: [
        "three different group",
        "no element of symmetry",
        "superimposed",
        "mirror image"
      ],
      answer: 1,
      explanation: "Chirality requires molecular asymmetry—a chiral molecule lacks elements of symmetry (such as a plane or center of symmetry), making it non-superimposable on its mirror image."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-112",
      question: "Urea was first synthesized in the laboratory by Friedrich Wöhler by heating an inorganic material named:",
      options: [
        "Ammonium bicarbonate",
        "Ammonium nitrate",
        "Ammonium oxalate",
        "Ammonium cyanate",
        "Ammonium chloride"
      ],
      answer: 3,
      explanation: "In 1828, Wöhler synthesized organic urea by heating inorganic ammonium cyanate (NH₄OCN → NH₂CONH₂), disproving the vital force theory."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-85",
      question: "Which one is NOT a type of stereoisomerism?",
      options: [
        "Conformational isomerism",
        "Optical isomerism",
        "Geometrical isomerism",
        "Metamerism"
      ],
      answer: 3,
      explanation: "Stereoisomerism includes optical, geometrical (cis-trans), and conformational isomers. Metamerism is a type of structural (constitutional) isomerism involving unequal distribution of carbon atoms on either side of a polyvalent functional group."
    },
    {
      id: "chem-sindh-25-125",
      question: "Which compound will NOT show geometrical (cis-trans) isomerism?",
      options: [
        "But-2-ene",
        "1,2-dimethylcyclopropane",
        "Pent-1-ene",
        "1,3-dimethylcyclopentane"
      ],
      answer: 2,
      explanation: "Geometrical isomerism requires both double-bonded carbon atoms to hold two different substituent groups. In Pent-1-ene (CH₂=CH–CH₂–CH₂–CH₃), C-1 has two identical hydrogen atoms, preventing cis-trans isomerism."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-108",
      question: "Name of ketone functional group >C=O is:",
      options: [
        "Amino",
        "Carbonyl",
        "Carboxyl",
        "Formyl"
      ],
      answer: 1,
      explanation: "The >C=O group present in aldehydes and ketones is called the carbonyl group."
    },
    {
      id: "kmu-mdcat-2024-109",
      question: "Pyridine belongs to which class of organic compounds?",
      options: [
        "Alicyclic",
        "Heterocyclic",
        "Homocyclic",
        "Hydrocarbon"
      ],
      answer: 1,
      explanation: "Pyridine (C₅H₅N) is a aromatic heterocyclic organic compound because its cyclic ring contains a heteroatom (nitrogen) in addition to carbon."
    },
    {
      id: "kmu-mdcat-2024-110",
      question: "Which of the following elements cannot be detected directly in a given organic compound by Lassaigne’s test?",
      options: [
        "Chlorine",
        "Nitrogen",
        "Oxygen",
        "Phosphorous"
      ],
      answer: 2,
      explanation: "There is no direct qualitative elemental sodium fusion (Lassaigne's) test for oxygen. It is typically determined by percentage difference or functional group chemical tests."
    },
    {
      id: "kmu-mdcat-2024-111",
      question: "The homolytic fission of a C–H bond in an alkane results in:",
      options: [
        "Alkyl free radical",
        "Carbanion",
        "Carbocation",
        "Methylpropane"
      ],
      answer: 0,
      explanation: "Homolytic cleavage of R–H → R• + H• yields an alkyl free radical and a hydrogen atom radical."
    },
    {
      id: "kmu-mdcat-2024-115",
      question: "The carbon atom carrying a positive charge and bonded to three other atoms or groups is called:",
      options: [
        "Carbanion",
        "Carbene",
        "Carbocation",
        "Oxonium"
      ],
      answer: 2,
      explanation: "A carbocation (carbonium ion) features a trivalent, sp²-hybridized carbon carrying a net positive charge (+1)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-74",
      question: "What is the IUPAC name of given compound? CH₃–CH=CH–CH₂–C≡CH",
      options: [
        "2-Hexen-5-yne",
        "2-Hexen-6-yne",
        "4-Hexen-1-yne",
        "5-Hexen-1-yne"
      ],
      answer: 3,
      explanation: "Numbering starts from the end giving lower locant to unsaturation priority (alkyne at C-1 over alkene at C-4): C¹≡C²–C³H₂–C⁴H=C⁵H–C⁶H₃ gives 5-Hexen-1-yne (or Hex-5-en-1-yne)."
    },
    {
      id: "szambu-chem-24-75",
      question: "What will be the IUPAC name of neopentane?",
      options: [
        "2,2-Dimethylpentane",
        "2,2-Dimethylpropane",
        "2-Methylbutane",
        "3-Methylbutane"
      ],
      answer: 1,
      explanation: "Neopentane has a central carbon bonded to four methyl groups (C(CH₃)₄). Its longest continuous carbon chain contains 3 carbons, yielding 2,2-Dimethylpropane."
    },
    {
      id: "szambu-chem-24-97",
      question: "Which type of isomerism is shown by fumaric acid and maleic acid?",
      options: [
        "Functional group isomers",
        "Geometrical isomers",
        "Optical isomers",
        "Position isomers"
      ],
      answer: 1,
      explanation: "Maleic acid is the cis-isomer and fumaric acid is the trans-isomer of HOOC–CH=CH–COOH, making them geometrical isomers."
    },
    {
      id: "szambu-chem-24-100",
      question: "The IUPAC name of CH₃–CH(Cl)–CH₂–CH₂–CHO is:",
      options: [
        "2-Chloropentanal",
        "2-Chloropentanol",
        "4-Chloropentanal",
        "4-Chloropentanol"
      ],
      answer: 2,
      explanation: "Numbering begins at the aldehyde carbon: C¹HO–C²H₂–C³H₂–C⁴H(Cl)–C⁵H₃. The chlorine substituent is at C-4, giving 4-Chloropentanal."
    },
    {
      id: "szambu-chem-24-101",
      question: "The saturated alicyclic hydrocarbons (cycloalkanes) have the general formula:",
      options: [
        "CₙH₂ₙ",
        "CₙH₂ₙ₊₁",
        "CₙH₂ₙ₊₂",
        "CₙH₂ₙ₋₂"
      ],
      answer: 0,
      explanation: "Monocyclic saturated alicyclic hydrocarbons (cycloalkanes) share the same general formula as mono-alkenes: CₙH₂ₙ."
    },
    {
      id: "szambu-chem-24-105",
      question: "The IUPAC name of Malonic acid CH₂(COOH)₂ is:",
      options: [
        "1,2-Ethanedioic acid",
        "1,3-Propanedioic acid",
        "1,4-butanedioic acid",
        "1,6-Hexadecanoic acid"
      ],
      answer: 1,
      explanation: "Malonic acid contains a 3-carbon chain with two carboxylic acid terminal groups (HOOC–CH₂–COOH), systematically named 1,3-Propanedioic acid (or propanedioic acid)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The structural relationship of (+)-tartaric acid and (–)-tartaric acid is that they are:",
      options: [
        "geometric isomers",
        "enantiomers",
        "diastereomers",
        "Planar"
      ],
      answer: 1,
      explanation: "(+)-Tartaric acid (dextrorotatory) and (–)-tartaric acid (levorotatory) are non-superimposable mirror images of each other, known as enantiomers."
    },
    {
      id: "szambu-chem-25-2",
      question: "Diethyl ether (CH₃CH₂–O–CH₂CH₃) and Methyl n-propyl ether (CH₃–O–CH₂CH₂CH₃) are:",
      options: [
        "position isomers",
        "functional group isomers",
        "metamers",
        "tautomer"
      ],
      answer: 2,
      explanation: "Metamerism occurs when isomers have the same functional group (ether -O-) but unequal distribution of alkyl chains attached to the polyvalent heteroatom."
    },
  
    // --- UHS 2024 CHEM ---
    {
      id: "uhs-2024-chem-106",
      question: "1-Butene and 2-Butene display which type of isomerism?",
      options: [
        "Functional Group",
        "Position",
        "Metamerism",
        "Chain"
      ],
      answer: 1,
      explanation: "1-Butene (CH₂=CH–CH₂–CH₃) and 2-Butene (CH₃–CH=CH–CH₃) differ only in the location of the carbon-carbon double bond, making them position isomers."
    },
    {
      id: "uhs-2024-chem-107",
      question: "Which type of isomerism is displayed by compounds having the same molecular formula but different distribution of carbon atoms/alkyl groups on either side of a polyvalent functional group?",
      options: [
        "Chain",
        "Metamerism",
        "Geometric",
        "Tautomerism"
      ],
      answer: 1,
      explanation: "Metamerism is structural isomerism caused by varying alkyl group lengths on either side of a heteroatom/polyvalent group (like -O-, -S-, -NH-)."
    },
    {
      id: "uhs-2024-chem-108",
      question: "Homocyclic organic compounds are sub-divided into two main categories, namely:",
      options: [
        "Alicyclic and Aromatic",
        "Alkenes & Alkynes",
        "Aromatic and Non aromatic",
        "Saturated & Unsaturated"
      ],
      answer: 0,
      explanation: "Homocyclic (carbocyclic) compounds contain rings composed entirely of carbon atoms and are divided into Alicyclic (e.g., cyclohexane) and Aromatic (e.g., benzene) compounds."
    }
  ];