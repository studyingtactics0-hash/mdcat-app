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
    }
  ];