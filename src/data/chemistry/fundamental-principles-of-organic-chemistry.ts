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
    },
    {
        id: "org-fund-1",
        question: "Which of the following is a Ketone",
        options: [
          "CH3-O-CH2-CH3",
          "CH3COCOOH",
          "CH3-CO-CH2-CH3",
          "CH3-CH2-CHO"
        ],
        answer: 2,
        explanation: "CH3-CO-CH2-CH3 (butanone) contains a carbonyl group (C=O) bonded to two alkyl groups, which defines a ketone."
      },
      {
        id: "org-fund-2",
        question: "Mineral oil in its refined form is called",
        options: [
          "Kerosene oil",
          "Crude oil",
          "Petroleum",
          "Reforming"
        ],
        answer: 2,
        explanation: "Petroleum is the refined liquid mineral oil composed mainly of hydrocarbons extracted from geological formations."
      },
      {
        id: "org-fund-3",
        question: "Diethyl Ether and n butanol are",
        options: [
          "Position isomerism",
          "Functional group isomerism",
          "Chain isomerism",
          "Tautomerism"
        ],
        answer: 2,
        explanation: "Note: Chemically, diethyl ether (an ether) and n-butanol (an alcohol) are functional group isomers (C4H10O). Option C (Chain isomerism) is selected per the provided answer key."
      },
      {
        id: "org-fund-4",
        question: "Alkanes do not show geometric isomerism due to",
        options: [
          "Hyper conjugation",
          "Rotation around single",
          "Resonance",
          "Restricted rotation around double bonds"
        ],
        answer: 1,
        explanation: "Alkanes have free rotation around single carbon-carbon sigma bonds, which prevents the existence of fixed cis/trans geometric configurations."
      },
      {
        id: "org-fund-5",
        question: "The percentage of P character in SP hybrid orbital is",
        options: ["50%", "75%", "100%", "25%"],
        answer: 0,
        explanation: "An sp hybrid orbital is formed by combining one s and one p orbital, giving 50% s character and 50% p character."
      },
      {
        id: "org-fund-6",
        question: "Which of the following is not the major source of organic compound",
        options: [
          "Natural gas",
          "Petroleum",
          "Coal",
          "Ammoniacal liquor"
        ],
        answer: 3,
        explanation: "Coal, petroleum, and natural gas are the three major natural fossil fuel sources of organic compounds, whereas ammoniacal liquor is a byproduct."
      },
      {
        id: "org-fund-7",
        question: "Which is not present is heteroatom in heterocyclic compound",
        options: ["Sulphur", "Oxygen", "Nitrogen", "Chlorine"],
        answer: 3,
        explanation: "Heteroatoms incorporated directly into aromatic or non-aromatic rings are usually N, O, or S. Monovalent halogens like Chlorine cannot form ring linkages."
      },
      {
        id: "org-fund-8",
        question: "The percentage of is character in SP2 hybrid orbitals is",
        options: ["25%", "50%", "33.3%", "75%"],
        answer: 2,
        explanation: "An sp2 hybrid orbital is formed from one s and two p orbitals (1/3 s character), yielding 33.3% s character."
      },
      {
        id: "org-fund-9",
        question: "Anthracene contain how many number of fused benzene rings",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "Anthracene (C14H10) is a polycyclic aromatic hydrocarbon consisting of 3 linearly fused benzene rings."
      },
      {
        id: "org-fund-10",
        question: "What is the common name of this compound CH3-(CH2)3-CH2-Cl",
        options: [
          "Chloropentane",
          "n-chloropentane",
          "n-pentylchloride",
          "1-chloropentane"
        ],
        answer: 2,
        explanation: "The common name for a straight 5-carbon alkyl chain attached to chlorine is n-pentyl chloride (or n-amyl chloride)."
      },
      {
        id: "org-fund-11",
        question: "Propene exhibit",
        options: [
          "Cis isomerism",
          "Trans isomerism",
          "Geometric isomerism",
          "None"
        ],
        answer: 3,
        explanation: "Propene (CH3-CH=CH2) has two identical hydrogen atoms on the terminal double-bonded carbon (=CH2), making geometric isomerism impossible."
      },
      {
        id: "org-fund-12",
        question: "In SP2 hybridization the angle between two hybrid orbitals is",
        options: ["120 degree", "109.5 degree", "180 degree", "None of these"],
        answer: 0,
        explanation: "sp2 hybridization forms a trigonal planar geometry with bond angles of exactly 120° between hybrid orbitals."
      },
      {
        id: "org-fund-13",
        question: "The following compound cannot show positional isomerism",
        options: ["Alkanal", "Alkynes", "Alkene", "None"],
        answer: 0,
        explanation: "In alkanals (aldehydes), the carbonyl group (-CHO) is always situated at the terminal carbon (position 1) by definition, so it cannot show position isomerism."
      },
      {
        id: "org-fund-14",
        question: "Which of the following compounds does not exhibit position isomerism",
        options: [
          "Alkynes",
          "Nitro alkanes",
          "Carboxylic acids",
          "Alcohols"
        ],
        answer: 2,
        explanation: "Monocarboxylic acids contain a terminal carboxyl group (-COOH) that is always at position 1 of the carbon chain."
      },
      {
        id: "org-fund-15",
        question: "Which of the following is not inorganic",
        options: [
          "Diamond",
          "Graphite",
          "Synthetic rubber",
          "Solid Iodine"
        ],
        answer: 2,
        explanation: "Synthetic rubber is an organic polymer built from repeating hydrocarbon monomer chains, unlike elemental allotropes."
      },
      {
        id: "org-fund-16",
        question: "Frederick wohler prepared urea from",
        options: [
          "Amino acids",
          "Ammonium carbonate",
          "Ammonium cyanate",
          "Xanthin"
        ],
        answer: 2,
        explanation: "Friedrich Wöhler synthesized organic urea in 1828 by heating the inorganic salt ammonium cyanate (NH4OCN)."
      },
      {
        id: "org-fund-17",
        question: "Large hydrocarbons are converted into similar hydrocarbons by a process called",
        options: [
          "Reforming",
          "Cracking",
          "Distillation",
          "Decomposition"
        ],
        answer: 1,
        explanation: "Cracking (pyrolysis) breaks long-chain, high-boiling petroleum fractions into smaller, higher-value alkanes and alkenes."
      },
      {
        id: "org-fund-18",
        question: "Generic formula of cyclo alkane is",
        options: [
          "CnH2n+2",
          "CnH2n",
          "CnH2n-2",
          "CnH2n-1"
        ],
        answer: 1,
        explanation: "Monocyclic cycloalkanes possess the general molecular formula CnH2n (isomeric with open-chain alkenes)."
      },
      {
        id: "org-fund-19",
        question: "Cyclobutane structure is categorised under",
        options: [
          "Aromatic compounds",
          "Aliphatic compounds",
          "Alicyclic compounds",
          "Hetero cyclic compounds"
        ],
        answer: 2,
        explanation: "Cyclobutane is a non-aromatic, closed-ring aliphatic hydrocarbon, classifying it as an alicyclic compound."
      },
      {
        id: "org-fund-20",
        question: "Ethers shows the phenomena of",
        options: [
          "Metamerism",
          "Positional isomerism",
          "Functional group isomerism",
          "Cis trans isomerism"
        ],
        answer: 0,
        explanation: "Ethers (R-O-R') exhibit metamerism due to differing distribution of alkyl groups on either side of the polyvalent oxygen atom."
      },
      {
        id: "org-fund-21",
        question: "How many esters are possible for C4H8O2",
        options: ["2", "4", "3", "5"],
        answer: 1,
        explanation: "The 4 isomeric esters of C4H8O2 are: Methyl propanoate, Ethyl acetate, Propyl formate, and Isopropyl formate."
      },
      {
        id: "org-fund-22",
        question: "Butane molecule can have maximum number of isomers",
        options: ["2", "4", "6", "8"],
        answer: 0,
        explanation: "Butane (C4H10) has exactly 2 structural isomers: n-butane and isobutane (2-methylpropane)."
      },
      {
        id: "org-fund-23",
        question: "C-C bond is broken in",
        options: [
          "Hydrogenation",
          "Cracking",
          "Condensation",
          "Polymerization"
        ],
        answer: 1,
        explanation: "Cracking involves thermal or catalytic cleavage of carbon-carbon (C-C) single bonds in large alkanes."
      },
      {
        id: "org-fund-24",
        question: "What is the Octane number of Iso octane",
        options: ["40", "100", "0", "2"],
        answer: 1,
        explanation: "2,2,4-Trimethylpentane (isooctane) burns smoothly and is arbitrarily assigned an octane rating benchmark of 100."
      },
      {
        id: "org-fund-25",
        question: "Pyridine is an example of",
        options: [
          "Homocyclic compound",
          "Carbocyclic compound",
          "Heterocyclic compound",
          "Aliphatic compound"
        ],
        answer: 2,
        explanation: "Pyridine (C5H5N) contains a six-membered aromatic ring with five carbon atoms and one nitrogen atom, making it heterocyclic."
      },
      {
        id: "org-fund-26",
        question: "Which one is thioether",
        options: ["R-O-R", "R-S-R", "R-Se-R", "None"],
        answer: 1,
        explanation: "Thioethers (sulfides) are organosulfur compounds with the general linkage R-S-R'."
      },
      {
        id: "org-fund-27",
        question: "Organic compounds in which Tetra valency of carbon atom is satisfied are called",
        options: [
          "Saturated",
          "Unsaturated",
          "Alkenes",
          "Alkynes"
        ],
        answer: 0,
        explanation: "Saturated organic compounds contain only single C-C bonds where carbon valence is fully satisfied by single bonds."
      },
      {
        id: "org-fund-28",
        question: "What usually does not dissolve in water",
        options: ["Lipids", "Benzene", "Paraffins", "All of these"],
        answer: 3,
        explanation: "Lipids, benzene, and paraffins (alkanes) are non-polar hydrophobic substances insoluble in polar solvents like water."
      },
      {
        id: "org-fund-29",
        question: "An atom or group of atom that gives specific properties to the compound is called as",
        options: [
          "Functional group",
          "Alkanes",
          "Homologous series",
          "None"
        ],
        answer: 0,
        explanation: "A functional group is a specific reactive site or arrangement of atoms that governs the characteristic chemical properties of a compound."
      },
      {
        id: "org-fund-30",
        question: "The structural isomerism arises due to differences in the",
        options: [
          "Number of atoms in the molecule",
          "Arrangements of atoms in the molecule",
          "Numbers is well is arrangement of atoms in the molecule",
          "Spatial arrangements of atoms"
        ],
        answer: 3,
        explanation: "Note: Structural isomerism is due to atomic connectivity, whereas spatial arrangement defines stereoisomerism. Option D is selected per the provided answer key."
      },
      {
        id: "org-fund-31",
        question: "Which type of organic compounds are present in natural gas",
        options: [
          "High molecular mass",
          "Low molecular mass",
          "Low boiling point",
          "Both b and c"
        ],
        answer: 1,
        explanation: "Natural gas is composed mainly of low molecular weight gaseous alkanes (predominantly methane, CH4)."
      },
      {
        id: "org-fund-32",
        question: "Which of the following is not in organic compound",
        options: [
          "Ammonium cyanate",
          "Urea",
          "Glucose",
          "Methane"
        ],
        answer: 0,
        explanation: "Ammonium cyanate (NH4OCN) is classified as an inorganic ionic salt, unlike organic molecules."
      },
      {
        id: "org-fund-33",
        question: "Name the compound which shows geometric isomerism",
        options: [
          "1-bromo-2-chloropropene",
          "2,3-dimethylpropene",
          "2-pentene",
          "Both A and C"
        ],
        answer: 3,
        explanation: "Both 1-bromo-2-chloropropene and 2-pentene have restricted C=C rotation with different groups on each carbon, displaying geometric (cis/trans) isomerism."
      },
      {
        id: "org-fund-34",
        question: "The type of isomerism existing in a compound of molecular formula C2H6O is",
        options: [
          "Functional group",
          "Position isomerism",
          "Chain isomerism",
          "Metamerism"
        ],
        answer: 0,
        explanation: "C2H6O can represent either Ethanol (CH3CH2OH) or Dimethyl ether (CH3OCH3), which are functional group isomers."
      },
      {
        id: "org-fund-35",
        question: "1 Chloropropane and 2chloropropane are isomers of each other the type of isomerism is",
        options: [
          "Cis trans isomerism",
          "Chain isomerism",
          "Positional isomerism",
          "Functional group isomerism"
        ],
        answer: 2,
        explanation: "They differ only in the position of the chlorine functional group on the 3-carbon chain."
      },
      {
        id: "org-fund-36",
        question: "Select the organic compound which belong to arene family",
        options: ["CH2=CH2", "CH3-NH2", "CH3-O-CH3", "C6H6"],
        answer: 3,
        explanation: "Benzene (C6H6) is the fundamental member of the arene (aromatic hydrocarbon) family."
      },
      {
        id: "org-fund-37",
        question: "In alkanes each carbon has hybridization of",
        options: ["Sp2", "Sp3", "Sp", "None"],
        answer: 1,
        explanation: "All carbon atoms in alkanes are sp3 hybridized, forming 4 single sigma bonds."
      },
      {
        id: "org-fund-38",
        question: "The isomerism arising due to different carbon atom on both sides of different functional groups is called",
        options: [
          "Metamerism",
          "Functional group isomerism",
          "Chain isomerism",
          "Tautomerism"
        ],
        answer: 0,
        explanation: "Metamerism occurs when isomers have unequal alkyl chain lengths attached to a central polyvalent heteroatom or functional group (e.g., -O-, -S-, -NH-)."
      },
      {
        id: "org-fund-39",
        question: "Tetra ethyl lead addition to petrol is example of",
        options: [
          "Positive catalysis",
          "Negative catalysis",
          "Both a and b",
          "None of these"
        ],
        answer: 1,
        explanation: "Tetraethyl lead acts as an anti-knock agent by inhibiting explosive auto-ignition radical chain reactions in internal combustion engines (negative catalysis)."
      },
      {
        id: "org-fund-40",
        question: "Coal tar contains many organic compounds that can be separated by",
        options: [
          "Destructive distillation",
          "Fractional distillation",
          "Vacuum distillation",
          "Partial distillation"
        ],
        answer: 1,
        explanation: "Coal tar is separated into various aromatic chemical fractions (e.g., benzene, toluene, naphthalene, phenol) by fractional distillation."
      },
      {
        id: "org-fund-41",
        question: "How many chain isomers of pentane is possible",
        options: ["Two", "Four", "Three", "Five"],
        answer: 2,
        explanation: "Pentane (C5H12) has 3 chain isomers: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane)."
      },
      {
        id: "org-fund-42",
        question: "Which of the following is alicyclic in nature",
        options: ["Cyclobutane", "Isobutane", "n butane", "Toulene"],
        answer: 0,
        explanation: "Cyclobutane is a saturated ring hydrocarbon without aromatic character, making it alicyclic."
      },
      {
        id: "org-fund-43",
        question: "Which of the following does not show metamerism",
        options: [
          "Ethers",
          "Secondary amines",
          "Ketones",
          "Aldehydes"
        ],
        answer: 3,
        explanation: "Note: Chemically, aldehydes have a terminal functional group (-CHO) and cannot show metamerism. Option C (Ketones) is selected per the provided answer key."
      },
      {
        id: "org-fund-44",
        question: "Cyclobutane structure is categorised under",
        options: [
          "Aromatic compounds",
          "Aliphatic compounds",
          "Alicyclic compounds",
          "Heterocyclic compounds"
        ],
        answer: 2,
        explanation: "Cyclobutane is a non-aromatic carbocyclic compound, classified under alicyclic compounds."
      },
      {
        id: "org-fund-45",
        question: "The suffix is used for Carboxylic acids",
        options: ["-al", "-ol", "-oic", "None"],
        answer: 2,
        explanation: "In IUPAC nomenclature, carboxylic acids are named by adding the suffix '-oic acid' to the alkane parent stem."
      },
      {
        id: "org-fund-46",
        question: "In tertiary alcohols tertiary carbon is bonded to",
        options: [
          "Two hydrogen atoms",
          "Three hydrogen atoms",
          "One hydrogen atom",
          "No Hydrogen atoms"
        ],
        answer: 3,
        explanation: "In tertiary alcohols (R3C-OH), the central carbon bearing the -OH group is bonded to 3 alkyl groups and 0 hydrogen atoms."
      },
      {
        id: "org-fund-47",
        question: "How many secondary carbon atoms are present in methyl cyclopropane",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explanation: "Methylcyclopropane contains a ring with one tertiary carbon (attached to -CH3) and two secondary CH2 ring carbons."
      },
      {
        id: "org-fund-48",
        question: "C4H11N gives the type of isomerism",
        options: [
          "Metamerism",
          "Optical isomerism",
          "Tautomerism",
          "None"
        ],
        answer: 0,
        explanation: "C4H11N can exist as various primary, secondary, and tertiary amines with differing alkyl groups around nitrogen, exhibiting metamerism."
      },
      {
        id: "org-fund-49",
        question: "The smallest alkane that show isomerism is",
        options: ["Ethane", "Butane", "Pentane", "Isopropane"],
        answer: 1,
        explanation: "Butane (C4H10) is the smallest alkane capable of structural chain isomerism (n-butane and isobutane)."
      },
      {
        id: "org-fund-50",
        question: "Glycol and glycerol can be differentiated on the basis of",
        options: [
          "Number of carbon atoms",
          "Number of hydroxyl groups",
          "Position of hydroxyl groups",
          "All of the above mentioned"
        ],
        answer: 3,
        explanation: "Ethylene glycol (C2H6O2, diol) and Glycerol (C3H8O3, triol) differ in carbon count, number of -OH groups, and their structural positions."
      }
  ];