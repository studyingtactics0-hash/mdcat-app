export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const alkylHalidesQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-101",
      question: "If an electrophile (or nucleophile attacking electrophilic carbon) is the attacking reagent, which alkyl halide is the most reactive?",
      options: [
        "R-I",
        "R-F",
        "R-Br",
        "R-Cl"
      ],
      answer: 0,
      explanation: "R-I has the longest, weakest C-X bond and iodide (I⁻) is the best leaving group, making alkyl iodides the most reactive among alkyl halides."
    },
    {
      id: "bumhs-2025-chem-124",
      question: "Which of the following mechanisms involves a carbocation intermediate?",
      options: [
        "SN1 mechanism",
        "SN2 mechanism",
        "E1 mechanism",
        "Both SN1 and E1 mechanisms"
      ],
      answer: 0,
      explanation: "Unimolecular reactions (SN1 and E1) proceed in two steps via a carbocation intermediate formed in the slow rate-determining heterolysis step."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-101",
      question: "The rate of an SN1 mechanism depends upon:",
      options: [
        "Concentration of nucleophile",
        "Concentration of both substrate and nucleophile",
        "Polar non-polar solvent",
        "Concentration of substrate only",
        "Concentration of reactant"
      ],
      answer: 3,
      explanation: "SN1 is a unimolecular nucleophilic substitution process where the rate-determining step involves only the substrate. Thus, Rate = k[Substrate]."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-106",
      question: "The order of reactivity of the following R-X alkyl halides for an SN2 reaction is:",
      options: [
        "RF > RCl > RBr > RI",
        "RBr > RF > RCl > RI",
        "RCl > RF > RBr > RI",
        "RI > RBr > RCl > RF"
      ],
      answer: 3,
      explanation: "SN2 reactivity increases with leaving-group ability (weaker C–X bond and better stability of halide ion): RI > RBr > RCl > RF."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-113",
      question: "Dehydrohalogenation of an alkyl halide to form an alkene is carried out in the presence of:",
      options: [
        "Alcoholic KOH",
        "Aqueous KOH",
        "Conc. H₂SO₄",
        "Zn dust"
      ],
      answer: 0,
      explanation: "Alcoholic KOH provides the alkoxide base (RO⁻) necessary to induce β-elimination (dehydrohalogenation), whereas aqueous KOH favors substitution."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The IUPAC name of chloroform (CHCl₃) is:",
      options: [
        "methylchloride",
        "methyltrichloride",
        "trichloromethane",
        "chloromethane"
      ],
      answer: 2,
      explanation: "Chloroform consists of a single carbon atom attached to three chlorine atoms and one hydrogen atom, systematically named trichloromethane."
    },
    {
      id: "szambu-chem-25-2",
      question: "Consider the four chloroalkanes:\nW: (CH₃)₂CHCH(Cl)CH₃\nX: CH₃CH(Cl)CH₃\nY: (CH₃)₂CHCH₂Cl\nZ: (CH₃)₂C(Cl)CH₃\n\nSelect the chloroalkane classified as tertiary:",
      options: [
        "W only",
        "X only",
        "Y only",
        "Z only"
      ],
      answer: 3,
      explanation: "In Z, (CH₃)₃CCl (2-chloro-2-methylpropane), the carbon attached to chlorine is directly bonded to three other carbon atoms, making it a tertiary alkyl halide."
    },
    {
      id: "szambu-chem-25-3",
      question: "Reaction of 2-bromobutane with alcoholic KOH yields which major product?",
      options: [
        "2-Butanol",
        "2-Butene",
        "2-Butyne",
        "1-Butanol"
      ],
      answer: 1,
      explanation: "Alcoholic KOH causes β-elimination of 2-bromobutane. By Zaitsev's rule, the more substituted and stable alkene, 2-butene, is formed as the major product."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-112",
      question: "Identify the correct ascending order of reactivity of alkyl halides:",
      options: [
        "Cl, Br, I, F",
        "F, Cl, Br, I",
        "Br, I, F, Cl",
        "I, F, Cl, Br"
      ],
      answer: 1,
      explanation: "Reactivity increases as bond dissociation energy decreases down the halogen group: R-F < R-Cl < R-Br < R-I."
    },
    {
      id: "uhs-2024-chem-113",
      question: "Identify the correct statement related to substitution and elimination of alkyl halides:",
      options: [
        "Strong bases cause substitution in preference to elimination",
        "Role of leaving groups in elimination is similar to substitution",
        "Substitution is favored more than elimination by decreasing solvent polarity",
        "Decrease in temperature will favor elimination more than substitution"
      ],
      answer: 1,
      explanation: "Good leaving groups enhance both nucleophilic substitution and elimination reactions because the rate-determining step in both pathways involves C-X bond cleavage."
    },
    {
      id: "uhs-2024-chem-114",
      question: "Alkyl halides involving –C–X bond breakage and –C–Nu bond formation simultaneously follow which mechanism?",
      options: [
        "SN1",
        "SN2",
        "E1",
        "E2"
      ],
      answer: 1,
      explanation: "The SN2 mechanism is a single-step concerted process where nucleophilic attack and leaving group departure occur simultaneously."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-119",
      question: "The IUPAC name of (CH₃)₃CCH₂Br (neopentyl bromide) is:",
      options: [
        "1-bromopentane",
        "1-bromo-2,2,2-trimethylethane",
        "1-bromo-2,2-dimethylpropane",
        "2-bromopentane"
      ],
      answer: 2,
      explanation: "The longest carbon chain containing the bromine atom has 3 carbons (propane). Numbering from the bromine end gives 1-bromo-2,2-dimethylpropane."
    },
    {
      id: "uhs-chem-25-87",
      question: "Conversion of a dihaloalkane into an alkyne does NOT involve:",
      options: [
        "Addition",
        "Elimination",
        "Base",
        "Heat"
      ],
      answer: 0,
      explanation: "Converting a vicinal/geminal dihaloalkane to an alkyne requires double dehydrohalogenation using a strong base with heat (elimination reaction), not addition."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-103",
      question: "Unimolecular nucleophilic substitution (SN1) reaction involves:",
      options: [
        "1st order kinetics",
        "2nd order kinetics",
        "3rd order kinetics",
        "zero order kinetics"
      ],
      answer: 0,
      explanation: "SN1 reactions follow first-order (1st order) kinetics because the rate depends solely on the concentration of the alkyl halide substrate."
    }
  ];