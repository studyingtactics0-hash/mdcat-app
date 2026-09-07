export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const aldehydeAndKetoneQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-88",
      question: "Ketones, when treated with Grignard reagent (RMgX) in the presence of dry ether followed by acid hydrolysis, are converted to:",
      options: [
        "Primary Alcohol",
        "Monohydric alcohol",
        "Secondary alcohol",
        "Tertiary alcohol"
      ],
      answer: 3,
      explanation: "Reaction of a ketone with a Grignard reagent yields a magnesium alkoxide complex, which upon hydrolysis yields a tertiary (3°) alcohol."
    },
    {
      id: "bumhs-2025-chem-111",
      question: "The IUPAC name for OHC–CH₂–CO–CH₂–CH₃ is:",
      options: [
        "3-one pentanal",
        "3-oxo pentanal",
        "3-one pentanol",
        "3-oxo pentanol"
      ],
      answer: 1,
      explanation: "Aldehyde (–CHO) has higher principal priority than ketone (>C=O). Numbering from the aldehyde carbon gives 3-oxopentanal."
    },
    {
      id: "bumhs-2025-chem-116",
      question: "Zn-Hg/conc. HCl (Clemmensen reduction) reduces acetaldehyde (CH₃CHO) to:",
      options: [
        "Ethane",
        "Ethene",
        "acetic acid",
        "Para aldehyde"
      ],
      answer: 0,
      explanation: "Clemmensen reduction completely reduces carbonyl (>C=O) groups of aldehydes and ketones into methylene (–CH₂–) groups, converting CH₃CHO into CH₃CH₃ (ethane)."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-93",
      question: "Ketones, when treated with lithium aluminum hydride (LiAlH₄), reduce to:",
      options: [
        "Primary alcohol",
        "Tertiary alcohol",
        "Alcohol",
        "Dihydric alcohol",
        "Secondary alcohol"
      ],
      answer: 4,
      explanation: "Reduction of ketones (R–CO–R') with hydride reducing agents like LiAlH₄ or NaBH₄ produces secondary alcohols (R–CH(OH)–R')."
    },
    {
      id: "chem-sindh-24-99",
      question: "Reduction of aldehydes & ketones by Zn-Hg amalgam and concentrated HCl results in conversion to an alkane. This reaction is known as:",
      options: [
        "Down Reduction",
        "Cope Reduction",
        "Wolff-Kishner Reduction",
        "Clemmensen Reduction",
        "Sodium tetrahydroboride"
      ],
      answer: 3,
      explanation: "Clemmensen reduction specifically uses zinc-mercury amalgam (Zn-Hg) in concentrated hydrochloric acid to reduce carbonyl compounds to alkanes."
    },
    {
      id: "chem-sindh-24-103",
      question: "Aldehydes & ketones can be converted directly to alkanes under acidic conditions using Zn-Hg/HCl. This reaction is called:",
      options: [
        "Ozonolysis",
        "Wolff-Kishner reaction",
        "Grignard reaction",
        "Friedel-Crafts reaction",
        "Clemmensen reaction"
      ],
      answer: 4,
      explanation: "The transformation of >C=O to >CH₂ using zinc amalgam and concentrated HCl is called the Clemmensen reduction."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-92",
      question: "Which carbonyl carbon is most electrophilic (most reactive towards nucleophilic attack)?",
      options: [
        "HCOOH",
        "HCHO",
        "CH₃COCH₃",
        "CH₃COOH"
      ],
      answer: 1,
      explanation: "Formaldehyde (HCHO) lacks electron-donating alkyl groups and exhibits minimal steric hindrance, making its carbonyl carbon the most electrophilic."
    },
    {
      id: "chem-sindh-25-107",
      question: "Among the following carboxylic acid derivatives and carbonyls, which is most susceptible to nucleophilic attack?",
      options: [
        "CH₃COCl",
        "CH₃CHO",
        "CH₃COOCH₃",
        "CH₃COOCOCH₃"
      ],
      answer: 0,
      explanation: "Acyl chlorides (CH₃COCl) have a highly electronegative chlorine atom that acts as an excellent leaving group and strongly withdraws electrons, making the carbonyl carbon exceptionally reactive."
    },
    {
      id: "chem-sindh-25-119",
      question: "During Clemmensen reduction of aldehydes and ketones, conversion of the carbonyl group into an alkane methylene group is carried out using:",
      options: [
        "H₂ and Pd",
        "LiAlH₄",
        "Zn/Hg, conc. HCl",
        "NH₂-NH₂ / KOH"
      ],
      answer: 2,
      explanation: "Zn/Hg in concentrated HCl is the signature reagent mixture for Clemmensen reduction."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-149",
      question: "The compound that reacts with phenylhydrazine (C₆H₅NHNH₂) to form a crystalline phenylhydrazone derivative is:",
      options: [
        "butanal",
        "1,3-butadiene",
        "Ethyl acetate",
        "Ethanol"
      ],
      answer: 0,
      explanation: "Aldehydes and ketones (like butanal) undergo condensation with ammonia derivatives like phenylhydrazine to yield crystalline phenylhydrazones."
    },
    {
      id: "kmu-mdcat-25-chem-152",
      question: "Acetaldehyde reacts with one equivalent of ethanol in the presence of an acid catalyst to initially produce a/an:",
      options: [
        "Acetal",
        "Hemiacetal",
        "Diol",
        "Diethoxyethane"
      ],
      answer: 1,
      explanation: "Nucleophilic addition of one molecule of alcohol to an aldehyde yields a hemiacetal (containing an –OH and –OR group on the same carbon)."
    },
    {
      id: "kmu-mdcat-25-chem-153",
      question: "The IUPAC name of Br–CH₂–CH₂–CO–CH₃ is:",
      options: [
        "1-bromobutan-1-one",
        "4-bromobutan-2-one",
        "1-bromobutan-3-one",
        "4-bromobutan-4-one"
      ],
      answer: 1,
      explanation: "Numbering begins from the right to give the ketone carbonyl carbon the lowest locant (C-2): Br–C⁴H₂–C³H₂–C²(=O)–C¹H₃, yielding 4-bromobutan-2-one."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-119",
      question: "Which aldehyde is most reactive towards nucleophilic addition reactions?",
      options: [
        "Acetaldehyde",
        "Butyraldehyde",
        "Formaldehyde",
        "Propionaldehyde"
      ],
      answer: 2,
      explanation: "Formaldehyde (HCHO) has no methyl/alkyl (+I) groups to reduce the partial positive charge on the carbonyl carbon and offers the least steric hindrance."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-70",
      question: "The mild oxidation of methanal (formaldehyde) results in the formation of:",
      options: [
        "Acetic acid",
        "Formic acid",
        "Methanol",
        "Propanoic acid"
      ],
      answer: 1,
      explanation: "Oxidation of single-carbon methanal (HCHO) yields single-carbon methanoic acid (formic acid, HCOOH)."
    },
    {
      id: "szambu-chem-24-78",
      question: "Which product is formed on the reduction of acetic acid (CH₃COOH) with LiAlH₄?",
      options: [
        "Ethanal",
        "Ethane",
        "Ethanoic acid",
        "Ethanol"
      ],
      answer: 3,
      explanation: "Carboxylic acids are reduced by strong reducing agents like LiAlH₄ to primary alcohols (acetic acid → ethanol)."
    },
    {
      id: "szambu-chem-24-122",
      question: "The correct relative reactivity order of carbonyl compounds towards nucleophilic addition is:",
      options: [
        "H–CO–H < H–CO–R < R–CO–R",
        "H–CO–H > H–CO–R > R–CO–R",
        "H–CO–R < H–CO–H < R–CO–R",
        "H–CO–H > R–CO–R > H–CO–R"
      ],
      answer: 1,
      explanation: "Reactivity decreases as steric hindrance and electron-donating (+I) alkyl groups increase: Formaldehyde > Aldehydes > Ketones."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The IUPAC name of the compound C₆H₅COCH₃ (acetophenone) is:",
      options: [
        "methylphenylketone",
        "phenylethanone",
        "octan-2-one",
        "benzylethanone"
      ],
      answer: 1,
      explanation: "C₆H₅COCH₃ consists of a 2-carbon ethanone chain with a phenyl substituent at position 1, systematically named phenylethanone."
    },
    {
      id: "szambu-chem-25-2",
      question: "During the nucleophilic addition of HCN to an aldehyde, the hybridization of the carbonyl carbon atom changes from:",
      options: [
        "sp → sp²",
        "sp³ → sp²",
        "sp² → sp³",
        "dsp² → sp³"
      ],
      answer: 2,
      explanation: "The planar sp²-hybridized carbonyl carbon (>C=O) is converted into a tetrahedral sp³-hybridized cyanohydrin carbon (>C(OH)CN)."
    },
    {
      id: "szambu-chem-25-3",
      question: "Acetone reacts with water in the presence of an acid/base catalyst to produce an unstable gem-diol named:",
      options: [
        "propan-2-ol",
        "propan-1,2-diol",
        "propan-2,2-diol",
        "propanol"
      ],
      answer: 2,
      explanation: "Hydration of acetone (CH₃COCH₃ + H₂O ⇌ CH₃C(OH)₂CH₃) forms propan-2,2-diol (acetone hydrate)."
    },
    {
      id: "szambu-chem-25-4",
      question: "Which of the following gives a positive brick-red precipitate test with Fehling's solution?",
      options: [
        "acetophenone",
        "metaformaldehyde",
        "acetaldehyde",
        "benzaldehyde"
      ],
      answer: 2,
      explanation: "Aliphatic aldehydes like acetaldehyde reduce Fehling's solution (Cu²⁺ → Cu₂O red ppt). Aromatic aldehydes like benzaldehyde and ketones do not."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-115",
      question: "CₙH₂ₙO is the general formula for aliphatic open-chain:",
      options: [
        "Ether",
        "Carboxylic acid",
        "Aldehydes and Ketones",
        "Carbolic acid"
      ],
      answer: 2,
      explanation: "Acyclic monocarbonyl aldehydes and ketones share the common general molecular formula CₙH₂ₙO."
    },
    {
      id: "uhs-2024-chem-116",
      question: "The deep blue color of Fehling's solution changes to a brick-red precipitate when warmed with an aliphatic aldehyde due to the formation of:",
      options: [
        "NO₂",
        "Cu₂O",
        "AgO",
        "SO₂"
      ],
      answer: 1,
      explanation: "Aldehydes reduce soluble blue copper(II) tartrate complex ions to insoluble red cuprous oxide (Cu₂O)."
    },
    {
      id: "uhs-2024-chem-117",
      question: "The reaction of HCN with formaldehyde to form cyanohydrin is classified as a:",
      options: [
        "Nucleophilic addition reaction",
        "Nucleophilic substitution reaction",
        "Electrophilic addition reaction",
        "Electrophilic substitution reaction"
      ],
      answer: 0,
      explanation: "Addition of HCN begins with nucleophilic attack of cyanide ion (:CN⁻) on the electron-deficient carbonyl carbon, making it a nucleophilic addition reaction."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-96",
      question: "Acetaldehyde undergoes oxidation to produce acetic acid. A standard laboratory oxidizing agent used for this reaction is:",
      options: [
        "HI",
        "LiAlH₄",
        "K₂Cr₂O₇ / H⁺",
        "NaBH₄"
      ],
      answer: 2,
      explanation: "Acidified potassium dichromate (K₂Cr₂O₇/H₂SO₄) oxidizes aldehydes to their corresponding carboxylic acids."
    },
    {
      id: "uhs-chem-25-118",
      question: "Methanol is produced by the reduction of:",
      options: [
        "Formaldehyde",
        "Acetaldehyde",
        "Propanal",
        "Propanone"
      ],
      answer: 0,
      explanation: "Reduction of single-carbon formaldehyde (HCHO) with H₂/Ni, LiAlH₄, or NaBH₄ yields methanol (CH₃OH)."
    },
   {
        id: "ald-ket-1",
        question: "2-propanol on oxidation yield",
        options: [
          "Propanaldehyde",
          "Propanal",
          "Propanone",
          "Butanal"
        ],
        answer: 1,
        explanation: "Note: Oxidation of secondary alcohol 2-propanol chemically forms propanone (acetone). Option B (Propanal) is mapped per the provided answer key."
      },
      {
        id: "ald-ket-2",
        question: "Acetaldehyde cyanohydrin upon hydrolysis produces",
        options: [
          "Tartaric acid",
          "Mailanic acid",
          "Formic acid",
          "Lactic acid"
        ],
        answer: 3,
        explanation: "Hydrolysis of acetaldehyde cyanohydrin (CH3-CH(OH)-CN) converts the nitrile group to a carboxyl group, forming lactic acid (2-hydroxypropanoic acid)."
      },
      {
        id: "ald-ket-3",
        question: "With acidified sodium dichromate what the product will be when secondary alcohol oxidized in same condition",
        options: [
          "Alkenes",
          "Alkyl halides",
          "Alkynes",
          "Ketones"
        ],
        answer: 3,
        explanation: "Oxidation of secondary alcohols using acidified sodium dichromate (Na2Cr2O7/H2SO4) produces ketones."
      },
      {
        id: "ald-ket-4",
        question: "I strong base is needed for canizzaros reactions as",
        options: [
          "There is no functional group",
          "There are two functional groups in reactant",
          "Base act as nucleophile as well",
          "Please take functional group H"
        ],
        answer: 2,
        explanation: "In the Cannizzaro reaction, hydroxide ion acts as a nucleophile, attacking the electron-deficient carbonyl carbon of an aldehyde lacking alpha-hydrogens."
      },
      {
        id: "ald-ket-5",
        question: "Reduction of acetone in presence of LiALH4 to form",
        options: [
          "Secondary alcohol",
          "Primary alcohol",
          "Tertiary alcohol",
          "None"
        ],
        answer: 0,
        explanation: "Reduction of ketones like acetone with hydride sources (LiAlH4 or NaBH4) produces secondary alcohols (propan-2-ol)."
      },
      {
        id: "ald-ket-6",
        question: "Which of the following will undergo nucleophilic addition reaction more easily",
        options: [
          "Aldehydes",
          "Alkenes",
          "Aldehyde and Ketone equally",
          "Neither aldehyde Nor ketone"
        ],
        answer: 0,
        explanation: "Aldehydes are more reactive toward nucleophilic addition than ketones due to lesser steric hindrance and greater electrophilicity of the carbonyl carbon."
      },
      {
        id: "ald-ket-7",
        question: "To distinguish aldehyde from Ketone which solution is used",
        options: [
          "Alkaline solution",
          "Fehling solution",
          "A solution containing potassium dichromate",
          "A solution containing acid only"
        ],
        answer: 1,
        explanation: "Fehling's solution oxidizes aliphatic aldehydes to give a brick-red precipitate of Cu2O, whereas ketones do not react."
      },
      {
        id: "ald-ket-8",
        question: "Which one of the following reagents can be used to detect an aldehyde",
        options: [
          "Tetra ethyl lead",
          "Alcoholic KOH",
          "Acidified CU2Cl2",
          "Tollens reagent"
        ],
        answer: 3,
        explanation: "Tollen's reagent (ammoniacal silver nitrate) reacts with aldehydes to produce a characteristic silver mirror on the inner wall of the test tube."
      },
      {
        id: "ald-ket-9",
        question: "Which reagent gives the same visible change for propanol and propanal",
        options: [
          "2,4 - DNPH",
          "Conc H2SO4",
          "K2Cr2O7",
          "Ag mirror test"
        ],
        answer: 2,
        explanation: "Acidified K2Cr2O7 oxidizes both primary alcohols (propanol) and aldehydes (propanal), turning from orange (Cr6+) to green (Cr3+)."
      },
      {
        id: "ald-ket-10",
        question: "Which reagent is responsible for the conversion of Ketone to secondary alcohol",
        options: [
          "NaCO3",
          "NaBH4",
          "Al",
          "Red P"
        ],
        answer: 1,
        explanation: "Sodium borohydride (NaBH4) selectively reduces ketones down to secondary alcohols."
      },
      {
        id: "ald-ket-11",
        question: "One of the following is application of iodoform reaction",
        options: [
          "Iodine is separated from reaction mixture",
          "Carboxylic acid are formed by methyl ketones",
          "Ketone are formed from this reaction",
          "Identification of methanol"
        ],
        answer: 1,
        explanation: "The iodoform reaction cleaves methyl ketones (CH3C=O) to form iodoform (CHI3) and the salt of a carboxylic acid."
      },
      {
        id: "ald-ket-12",
        question: "Glucose and Fructose are simple sugars chemically known as",
        options: [
          "Aldohexose",
          "Aldoketone",
          "Both",
          "None"
        ],
        answer: 2,
        explanation: "Glucose is an aldohexose and Fructose is a ketohexose; together they represent aldose/ketose simple hexose sugars."
      },
      {
        id: "ald-ket-13",
        question: "Oxidation of aldehyde to form",
        options: [
          "Ketone",
          "Carboxylic acids",
          "None of these",
          "Alkane"
        ],
        answer: 1,
        explanation: "Aldehydes are easily oxidized by mild or strong oxidizing agents to yield carboxylic acids containing the same number of carbon atoms."
      },
      {
        id: "ald-ket-14",
        question: "Acetone reacts with HCN to form a cyanohydrate it is an example of",
        options: [
          "Electrophilic addition",
          "Electrophilic substitution",
          "Nucleophilic addition",
          "Nucleophilic substitution"
        ],
        answer: 2,
        explanation: "Cyanide ion (CN-) attacks the carbonyl carbon followed by protonation, which is a classic nucleophilic addition reaction."
      },
      {
        id: "ald-ket-15",
        question: "The reaction of formaldehyde with HCN is",
        options: [
          "Nucleophilic substitution",
          "Nucleophilic addition",
          "Nucleophilic addition",
          "Free radical reaction"
        ],
        answer: 1,
        explanation: "Addition of HCN to formaldehyde proceeds via base-catalyzed nucleophilic addition across the polar C=O bond."
      },
      {
        id: "ald-ket-16",
        question: "In Benedict solution test aldehyde produce brick red color by reducing",
        options: [
          "Silver iron",
          "Tartrate ions",
          "Citrate ions",
          "Copper ions"
        ],
        answer: 3,
        explanation: "Benedict's reagent contains Cu2+ ions that are reduced by aldehydes to insoluble red cuprous oxide (Cu2O) precipitates."
      },
      {
        id: "ald-ket-17",
        question: "The oxidation of Ethanol the Alpha carbon changes",
        options: [
          "Methyl group",
          "Methylene group",
          "Functional group carbon",
          "Beta carbon"
        ],
        answer: 2,
        explanation: "The alpha carbon attached to the hydroxyl group in ethanol is oxidized into the functional group carbon (-CHO / -COOH)."
      },
      {
        id: "ald-ket-18",
        question: "Why is it necessary to distil aldehyde formed from oxidation of primary alcohol through acidified per dichromate solution or acidified sodium dichromate solution",
        options: [
          "Aldehyde formed is unstable and decompose backed original precursor primary alcohol",
          "Aldehyde formed react with alcohol the original reactant",
          "Oxidized further to a Ketone",
          "Aldehyde formed maybe oxidized further to carboxylic acid"
        ],
        answer: 3,
        explanation: "Aldehydes are readily oxidized further to carboxylic acids if left in contact with hot aqueous dichromate oxidants; immediate distillation isolates the aldehyde."
      },
      {
        id: "ald-ket-19",
        question: "Fehlling solution is a complex",
        options: [
          "Cupric and oxalate",
          "Curprous tartrate",
          "Cupric amine",
          "Cupric tartarate"
        ],
        answer: 3,
        explanation: "Fehling's solution contains Cu2+ ions complexed with tartrate ions (sodium potassium tartrate) in an alkaline medium."
      },
      {
        id: "ald-ket-20",
        question: "What is the final product when 2,3-dimethylbutane react with ozone",
        options: [
          "Acetone",
          "Formaldehyde",
          "Acetic acid",
          "None"
        ],
        answer: 0,
        explanation: "Ozonolysis of 2,3-dimethyl-2-butene cleaves the central alkene double bond to yield 2 moles of acetone."
      },
      {
        id: "ald-ket-21",
        question: "Lower aldehyde have",
        options: [
          "Sweet smell",
          "Pleasant smell",
          "Pungent smell",
          "None"
        ],
        answer: 2,
        explanation: "Lower aldehydes such as formaldehyde and acetaldehyde possess sharp, irritating, and pungent odors."
      },
      {
        id: "ald-ket-22",
        question: "The addition compound obtained by reacting acetaldehyde and HCN when hydrolysed give",
        options: [
          "Ethyl alcohol",
          "Two hydroxy propanoic acid",
          "Methylcyanide",
          "Ethylcyanide"
        ],
        answer: 1,
        explanation: "Acetaldehyde cyanohydrin CH3-CH(OH)-CN hydrolyzes under acidic conditions to 2-hydroxypropanoic acid (lactic acid)."
      },
      {
        id: "ald-ket-23",
        question: "In aldehyde and ketones carbon of carbonyl group is",
        options: [
          "SP3 hybridised",
          "SP2 hybridised",
          "SP hybridized",
          "Unhybridised"
        ],
        answer: 1,
        explanation: "The carbonyl carbon atom forms 3 sigma bonds and 1 pi bond, exhibiting sp2 hybridization with planar 120° bond geometry."
      },
      {
        id: "ald-ket-24",
        question: "Dry distillation of calcium Acetate result in the formation of",
        options: [
          "Formaldehyde",
          "Acetaldehyde",
          "Methyl ethyl ketone",
          "Acetone"
        ],
        answer: 3,
        explanation: "Dry distillation of calcium acetate ((CH3COO)2Ca) decomposes it into acetone (CH3COCH3) and calcium carbonate (CaCO3)."
      },
      {
        id: "ald-ket-25",
        question: "The conversion of tertiary alcohols into alkenes in the prisons of potassium dichromate and Sulphuric acid is",
        options: [
          "Addition reaction",
          "Carbon hydrogen bond cleavage",
          "Elimination reaction",
          "Combustion reaction"
        ],
        answer: 2,
        explanation: "Tertiary alcohols resist direct oxidation and instead undergo acid-catalyzed dehydration (elimination of water) to yield alkenes."
      },
      {
        id: "ald-ket-26",
        question: "Reaction of benzene which a acylchloride to form",
        options: [
          "Acetophenone",
          "Benzyl alcohol",
          "Formaldehyde",
          "None"
        ],
        answer: 0,
        explanation: "Friedel-Crafts acylation of benzene with acetyl chloride (CH3COCl) produces acetophenone."
      },
      {
        id: "ald-ket-27",
        question: "CH3CH2OH+[O]----->CH3CHO\nThe main reason to heat the reaction mixture is",
        options: [
          "To break hydrogen",
          "To increase collision frequency",
          "To distil product",
          "Provide any alcohol and reacted"
        ],
        answer: 2,
        explanation: "Heating allows immediate distillation of the formed acetaldehyde out of the oxidizing reaction mixture to prevent further oxidation into ethanoic acid."
      },
      {
        id: "ald-ket-28",
        question: "2-methyl butanal, upon reduction with hydrazine and potassium Hydroxide produces",
        options: [
          "Butane",
          "Pentane",
          "Isobutnaol",
          "Isopentanol"
        ],
        answer: 3,
        explanation: "Note: Wolff-Kishner reduction (NH2NH2 / KOH) converts 2-methylbutanal into 2-methylbutane (isopentane); Option D (Isopentanol) is mapped per the answer key."
      },
      {
        id: "ald-ket-29",
        question: "Which of the following reacts with tollens reagent but does not form silver mirror",
        options: [
          "Acetaldehyde",
          "Acetylene",
          "Formic acid",
          "Formaldehyde"
        ],
        answer: 1,
        explanation: "Acetylene reacts with Tollen's reagent to form a white precipitate of silver acetylide (AgC≡CAg) rather than a metallic silver mirror."
      },
      {
        id: "ald-ket-30",
        question: "Number of Alpha hydrogen in benzaldehyde are",
        options: ["3", "0", "1", "2"],
        answer: 1,
        explanation: "Benzaldehyde (C6H5CHO) has its carbonyl group attached to a phenyl ring carbon lacking any hydrogen atoms, so alpha-hydrogens = 0."
      },
      {
        id: "ald-ket-31",
        question: "Aldol condensation is possible because",
        options: [
          "Aldehydes are good oxidizing agent",
          "Alpha hydrogen in carbonyls are acidic",
          "Aldehydes are good reducing agents",
          "Aldehyde scan easily dehydrate"
        ],
        answer: 1,
        explanation: "Enolate formation in Aldol condensation relies on the acidity of alpha-hydrogens adjacent to electron-withdrawing carbonyl groups."
      },
      {
        id: "ald-ket-32",
        question: "Which compound is the easiest to oxidize",
        options: [
          "Alkane",
          "Alcohol",
          "Aldehyde",
          "Ketone"
        ],
        answer: 2,
        explanation: "Aldehydes possess a carbonyl hydrogen (-CHO) that is easily abstracted, making them far easier to oxidize than alkanes, alcohols, or ketones."
      },
      {
        id: "ald-ket-33",
        question: "One of the following compound will give iodoff form test on treatment with aqueous Iodine",
        options: [
          "3 pentannone",
          "Propanal",
          "Propanone",
          "Butanal"
        ],
        answer: 2,
        explanation: "Propanone contains a methyl ketone group (CH3-C=O), which yields a yellow CHI3 precipitate in the iodoform reaction."
      },
      {
        id: "ald-ket-34",
        question: "Brick red precipitate are formed when aldehyde reacts with",
        options: [
          "Sodium Boro hydride",
          "Sodium bisulphate",
          "Felling solution",
          "Formaldehyde"
        ],
        answer: 3,
        explanation: "Note: Chemically Fehling's solution forms red Cu2O precipitates; option D (Formaldehyde) is mapped according to the provided key."
      },
      {
        id: "ald-ket-35",
        question: "Propanone does not undergo",
        options: [
          "Exam formation",
          "Reduction with fehling solution",
          "Hydrazone formation with hydrazine",
          "Reaction with HCN"
        ],
        answer: 1,
        explanation: "Propanone (a ketone) cannot reduce mild oxidizing agents like Fehling's solution."
      },
      {
        id: "ald-ket-36",
        question: "Both aldehyde and Ketone gives",
        options: [
          "Tollens test",
          "2,4 DNPH test",
          "Benedict solution test",
          "Nitroprusside test"
        ],
        answer: 1,
        explanation: "2,4-Dinitrophenylhydrazine (Brady's reagent) reacts with both aldehydes and ketones to yield yellow/orange/red hydrazone precipitates."
      },
      {
        id: "ald-ket-37",
        question: "Hydration of hydrocarbon gives carbonyl compound the general formula of that hydrocarbon is",
        options: [
          "CnH2n+2",
          "CnH2n",
          "CnH2n-2",
          "Both b and c"
        ],
        answer: 2,
        explanation: "Acid-catalyzed hydration of alkynes (general formula CnH2n-2) yields enols that tautomerize into aldehydes or ketones."
      },
      {
        id: "ald-ket-38",
        question: "Which of these cannot discharge the colour of acidified potassium permagnet",
        options: [
          "Acetaldehyde",
          "Acetone",
          "Ethanoic acid",
          "Ethanol"
        ],
        answer: 2,
        explanation: "Ethanoic acid (a fully oxidized carboxylic acid) resists further oxidation and does not discharge the purple color of KMnO4."
      },
      {
        id: "ald-ket-39",
        question: "From formaldehyde we get formally in which is powerful",
        options: [
          "Painkiller",
          "Preservative and disinfectant",
          "Bleaching whitening agent",
          "Deodorant"
        ],
        answer: 1,
        explanation: "Formalin (a 37-40% aqueous solution of formaldehyde) is widely used to preserve biological specimens and as a disinfectant."
      },
      {
        id: "ald-ket-40",
        question: "A student mixed ethyl alcohol with small amount of sodium dichromate and add to the hot solution of dilute sulphuric acid a vigorous reaction took place he district the product formed immediately what was the product",
        options: [
          "Acetone",
          "Acetic acid",
          "dimethy ether",
          "Acetaldehyde"
        ],
        answer: 3,
        explanation: "Controlled oxidation and immediate distillation of ethyl alcohol produces acetaldehyde (ethanal)."
      },
      {
        id: "ald-ket-41",
        question: "Formation of lactic acid from acetaldehyde involves",
        options: [
          "Substitution and hydrolysis",
          "Addition and oxidation",
          "Addition and hydrolysis",
          "Addition and reduction"
        ],
        answer: 2,
        explanation: "Synthesis of lactic acid from acetaldehyde proceeds via nucleophilic addition of HCN followed by acid hydrolysis of the nitrile."
      },
      {
        id: "ald-ket-42",
        question: "Reaction of ethyne with water in presence of H2SO4 and HgSO4 to form",
        options: [
          "Acetaldehyde",
          "Acetone",
          "Carboxylic acid",
          "None"
        ],
        answer: 0,
        explanation: "Hydration of ethyne (CH≡CH) using H2SO4/HgSO4 yields vinyl alcohol, which rapidly tautomerizes to acetaldehyde."
      },
      {
        id: "ald-ket-43",
        question: "Dry distillation of calcium format result in the formation of",
        options: [
          "Formaldehyde",
          "Acetaldehyde",
          "Methyl ethyl ketone",
          "Acetone"
        ],
        answer: 0,
        explanation: "Thermal decomposition / dry distillation of calcium formate ((HCOO)2Ca) yields formaldehyde (HCHO) and calcium carbonate."
      },
      {
        id: "ald-ket-44",
        question: "Carbonyl compounds undergo nucleophilic addition reaction because of",
        options: [
          "Electronegativity difference and Pi bond",
          "More stable anion with negative charge on Oxygen and less stable carbocation",
          "Electronegative character of carbonyl carbon",
          "None of these"
        ],
        answer: 2,
        explanation: "Note: The electron deficiency/electrophilicity of the carbonyl carbon drives nucleophilic attack; option C is mapped per the answer key."
      },
      {
        id: "ald-ket-45",
        question: "Which of the following reagent will react with both aldehyde and ketone",
        options: [
          "Felling solution",
          "Tollens Regent",
          "Hydrazine",
          "Sodium nitroprusside"
        ],
        answer: 3,
        explanation: "Note: Hydrazine and sodium nitroprusside react with both; sodium nitroprusside is selected according to the provided answer key."
      },
      {
        id: "ald-ket-46",
        question: "Oxidation of aldehyde in presence of percrhomic acid to form",
        options: [
          "Acetic acid",
          "Ketone",
          "Alkanes",
          "None of these"
        ],
        answer: 0,
        explanation: "Oxidation of acetaldehyde yields acetic acid."
      },
      {
        id: "ald-ket-47",
        question: "Oxidation of primary alcohol in presence of PCC",
        options: [
          "Acetealdehyde",
          "Acetone",
          "Formaldehyde",
          "None"
        ],
        answer: 0,
        explanation: "Pyridinium chlorochromate (PCC) selectively oxidizes primary alcohols like ethanol to aldehydes (acetaldehyde) without over-oxidizing to carboxylic acids."
      },
      {
        id: "ald-ket-48",
        question: "Formalin is used as",
        options: [
          "Fungicide",
          "Sterilizing of surgical instrument",
          "Germicide",
          "All"
        ],
        answer: 3,
        explanation: "Formalin acts as an effective germicide, fungicide, and chemical sterilizing agent for laboratory/surgical equipment."
      },
      {
        id: "ald-ket-49",
        question: "Oxidation of secondary alcohol produces",
        options: [
          "Aldehyde",
          "Alkyl halide",
          "Ketone",
          "Ester"
        ],
        answer: 2,
        explanation: "Oxidation of secondary alcohols removes two hydrogen atoms to generate ketones."
      },
      {
        id: "ald-ket-50",
        question: "Which one of the following is resistant to oxidation under normal conditions",
        options: [
          "Methyl alcohol",
          "Acetaldehyde",
          "Ketone",
          "None"
        ],
        answer: 2,
        explanation: "Ketones lack a carbonyl hydrogen and resist oxidation under mild conditions, requiring strong oxidants and high heat to cleave C-C bonds."
      }
  ];