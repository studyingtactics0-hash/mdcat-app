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
    },
    {
        id: "alkyl-halides-1",
        question: "In SN1 mechanism how many molecules take part in rate determining estate",
        options: ["One", "Two", "Three", "Multiples"],
        answer: 0,
        explanation: "SN1 is a unimolecular nucleophilic substitution where only one molecule (the alkyl halide substrate) is involved in the slow, rate-determining ionization step."
      },
      {
        id: "alkyl-halides-2",
        question: "During the SN1 reaction the first reaction does not involve:",
        options: [
          "Breakage of covalent bond",
          "Transition state",
          "Formation of carbocation",
          "Attack of nucleophile"
        ],
        answer: 3,
        explanation: "The first step of an SN1 reaction is the slow ionization of the substrate to form a carbocation intermediate; attack of the nucleophile occurs in the subsequent second step."
      },
      {
        id: "alkyl-halides-3",
        question: "Which alkyl halide gives SN1 reactions",
        options: [
          "Secondary alkyl halide",
          "Primary alkyl halide",
          "Tertiary alkyl halide",
          "All of these"
        ],
        answer: 2,
        explanation: "Tertiary alkyl halides predominantly react via the SN1 mechanism because the resulting tertiary carbocation intermediate is highly stabilized by hyperconjugation and steric relief."
      },
      {
        id: "alkyl-halides-4",
        question: "Alkyl halides generally gives which type of elimination reactions",
        options: [
          "Alpha elimination",
          "Gama elimination",
          "Beta elimination",
          "All of these"
        ],
        answer: 2,
        explanation: "Elimination in alkyl halides typically removes a hydrogen atom from the beta-carbon and a halogen from the alpha-carbon, resulting in 1,2- (or beta-) elimination to form an alkene."
      },
      {
        id: "alkyl-halides-5",
        question: "In SN1 reactions the rate of reaction depends upon the concentration of",
        options: [
          "One reactant molecule",
          "Two reactant molecules",
          "Nucleophile",
          "Both nucleophile and alkyl halide"
        ],
        answer: 0,
        explanation: "The rate law for SN1 is Rate = k[Substrate], making the reaction first-order and dependent solely on the concentration of the alkyl halide substrate."
      },
      {
        id: "alkyl-halides-6",
        question: "Which of the following is alkyl halide",
        options: ["CH2Cl2", "CH3Cl", "CCL4", "C2H6Cl"],
        answer: 1,
        explanation: "CH3Cl (chloromethane) is a monohaloalkane derived from an alkane by replacing one hydrogen atom with a halogen atom."
      },
      {
        id: "alkyl-halides-7",
        question: "Which is an intermediate in SN1 reaction",
        options: [
          "Ethoxide ion",
          "Alkyl halides",
          "Carbo cation",
          "Alkene"
        ],
        answer: 2,
        explanation: "Heterolytic cleavage of the C-X bond in the slow step of SN1 forms a planar carbocation intermediate."
      },
      {
        id: "alkyl-halides-8",
        question: "Girgnard reagent is reactive due to",
        options: [
          "Polarity of carbon magnesium Bond",
          "Presence of carbon magnesium Bond",
          "Presence of magnesium",
          "Polarity of magnesium chloride Bond"
        ],
        answer: 0,
        explanation: "Magnesium is electropositive relative to carbon, creating a strongly polar Cδ--Mgδ+ bond that gives the carbon atom strong nucleophilic/basic character."
      },
      {
        id: "alkyl-halides-9",
        question: "Reactivity of alkyl halide can be determined by",
        options: [
          "Carbon halogen Bond",
          "Carbon carbon Bond",
          "Carbon hydrogen bond",
          "Halogen halogen Bond"
        ],
        answer: 0,
        explanation: "The strength and polarity of the C-X (carbon-halogen) bond determine the ease of cleavage and the overall chemical reactivity of the alkyl halide."
      },
      {
        id: "alkyl-halides-10",
        question: "The compound which is the highest boiling point in the following is",
        options: [
          "Methyl chloride",
          "Methyl iodide",
          "Methyl Bromide",
          "Both a and b"
        ],
        answer: 1,
        explanation: "Methyl iodide (CH3I) has the largest molecular mass and electron cloud polarizability among the methyl halides, leading to stronger London dispersion forces and the highest boiling point."
      },
      {
        id: "alkyl-halides-11",
        question: "When 2-bromobutane reacts with alcoholic potassium Hydroxide the reaction is called",
        options: [
          "Chlorination",
          "Dehydrohalogenation",
          "Halogentaion",
          "Hydrogenation"
        ],
        answer: 1,
        explanation: "Alcoholic KOH acts as a strong base, eliminating HBr from 2-bromobutane to yield alkenes via dehydrohalogenation."
      },
      {
        id: "alkyl-halides-12",
        question: "In the transition state of SN2 mechanism reaction with alkyl halides which of the following orbital hybridization is involved",
        options: ["Sp3", "Sp", "Sp2", "dsp3"],
        answer: 2,
        explanation: "In the pentacoordinate SN2 transition state, the central carbon adopts a sp2-like geometry with the nucleophile and leaving group weakly interacting along a p-orbital perpendicular to the sp2 plane."
      },
      {
        id: "alkyl-halides-13",
        question: "Which are not directly prepared",
        options: ["RCL", "RI", "RF", "RBr"],
        answer: 2,
        explanation: "Alkyl fluorides (RF) are difficult to prepare by direct fluorination due to the violent exothermic nature of reaction with F2, requiring indirect halogen exchange methods (e.g., Swarts reaction)."
      },
      {
        id: "alkyl-halides-14",
        question: "The carbon atom of an alkyl group attached with halogen atom is called",
        options: [
          "Electrophile",
          "Nucleophile",
          "Free radical",
          "Nucleophilic centre"
        ],
        answer: 0,
        explanation: "Because halogen atoms are more electronegative than carbon, they pull electron density away, leaving the alpha-carbon electron-deficient (electrophilic)."
      },
      {
        id: "alkyl-halides-15",
        question: "Girginad reagents are made in the presence of",
        options: [
          "Dry Ether",
          "Hydrated Ether",
          "Acetone",
          "Chloroform"
        ],
        answer: 0,
        explanation: "Grignard reagents (RMgX) are prepared in dry (anhydrous) ether because water or moisture causes immediate protonation, converting the reagent into an alkane."
      },
      {
        id: "alkyl-halides-16",
        question: "During SN2 reaction configuration of alkyl halide molecules",
        options: [
          "Remain same",
          "Depends upon carbon atom",
          "Gets inverted",
          "Depends upon electronegativity of halide"
        ],
        answer: 2,
        explanation: "Backside attack by the nucleophile in SN2 reactions causes a complete inversion of stereochemical configuration (Walden inversion)."
      },
      {
        id: "alkyl-halides-17",
        question: "A mixture of 1 chloropropane and 2 chloropropane when treated with alcoholic potassium Hydroxide gives",
        options: [
          "Prop-2ene",
          "Propene",
          "Isopropylene",
          "A mixture of prop-1-ene"
        ],
        answer: 1,
        explanation: "Dehydrohalogenation of both 1-chloropropane and 2-chloropropane yields propene (CH3-CH=CH2) as the sole alkene product."
      },
      {
        id: "alkyl-halides-18",
        question: "Which one of the following is not a secondary alkyl halide",
        options: [
          "2 chloropropane",
          "3 bromo butane",
          "2,3- dichloro pentane",
          "2 Chloro- 2 -methyl pentane"
        ],
        answer: 3,
        explanation: "In 2-chloro-2-methylpentane, the carbon attached to the chlorine atom is bonded to three other carbon atoms, making it a tertiary (3°) alkyl halide."
      },
      {
        id: "alkyl-halides-19",
        question: "In nucleophilic substitution biomolecular reaction the order of reaction with respect to substrate",
        options: ["First order", "Second order", "Third order", "Zero order"],
        answer: 1,
        explanation: "Note: In SN2 (bimolecular substitution), the overall reaction is 2nd order, while the order with respect to the substrate alone is 1st order. Option B (Second order) is mapped according to the provided key."
      },
      {
        id: "alkyl-halides-20",
        question: "In elimination reaction the formation of alkene the reactivity of alkyl halide is in the order of",
        options: [
          "Cl>Br>I",
          "Br>Cl>I",
          "I>Br>Cl",
          "I>Cl>Br"
        ],
        answer: 2,
        explanation: "Iodide is the best leaving group due to its large ionic radius and weaker C-I bond strength, making reactivity order: RI > RBr > RCl."
      },
      {
        id: "alkyl-halides-21",
        question: "Which is true statement about basis",
        options: [
          "They are electron pair accepter species",
          "They can accept electrons from hydrogen",
          "Their is strength is measured by rate constant",
          "Their is strength is measured best by dissociation constant"
        ],
        answer: 3,
        explanation: "Thermodynamic base strength is quantitatively measured by the base dissociation constant (Kb or pKb)."
      },
      {
        id: "alkyl-halides-22",
        question: "Which of the following is more reactive",
        options: ["C2H5F", "C2H5Br", "C2H5I", "C2H5Cl"],
        answer: 2,
        explanation: "Ethyl iodide (C2H5I) has the weakest C-X bond energy among ethyl halides, rendering it the most reactive towards substitution and elimination."
      },
      {
        id: "alkyl-halides-23",
        question: "Which halide and has the capacity to act as both very good nucleophile and good living group in nucleophilic substitution reactions",
        options: [
          "Iodide ion",
          "Bromide ion",
          "Floride ion",
          "Chloride ion"
        ],
        answer: 0,
        explanation: "The iodide ion (I-) is highly polarizable (a strong nucleophile) and a weak base/stable anion (an excellent leaving group)."
      },
      {
        id: "alkyl-halides-24",
        question: "In primary alkyl halides the carbon atom to which the hello group is attached is in terms bonded directly to",
        options: [
          "One other carbon",
          "Three other carbons",
          "Two other carbons",
          "Four other carbons"
        ],
        answer: 0,
        explanation: "A primary (1°) alkyl halide features a halogenated alpha-carbon bonded to only one other carbon atom (or none, in the case of methyl halide)."
      },
      {
        id: "alkyl-halides-25",
        question: "Which of the following alkyl halides undergoes SN1 reaction fastest",
        options: [
          "Methyl chloride",
          "Ethyl chloride",
          "Isobutyl chloride",
          "Tertiary butyl chloride"
        ],
        answer: 3,
        explanation: "Tertiary butyl chloride ionizes rapidly to form a stable 3° carbocation, making its rate of SN1 substitution the fastest among the options."
      },
      {
        id: "alkyl-halides-26",
        question: "Primary alcohol is obtained by the reaction of girgnard reagent with",
        options: [
          "Aldehydes other than formaldehyde",
          "Formaldehyde",
          "Acetone",
          "Ethyl format"
        ],
        answer: 1,
        explanation: "Grignard addition to formaldehyde (HCHO) followed by acid hydrolysis adds a -CH2OH unit, generating a primary alcohol."
      },
      {
        id: "alkyl-halides-27",
        question: "In beta elimination reaction",
        options: [
          "Carbon number changes",
          "Hybridization of carbon remain same",
          "Unsaturated compound is formed",
          "Pi bond are decreased"
        ],
        answer: 2,
        explanation: "Beta elimination removes atoms from adjacent carbons to form a new C=C double bond, creating an unsaturated hydrocarbon (alkene)."
      },
      {
        id: "alkyl-halides-28",
        question: "SN1 reaction have which of the following species formed and consumed in the reaction",
        options: [
          "Transition state",
          "Intermediate",
          "Carbon ion",
          "Carbon"
        ],
        answer: 1,
        explanation: "SN1 proceeds via a distinct reaction step that generates a carbocation reaction intermediate, which is subsequently consumed in the second step."
      },
      {
        id: "alkyl-halides-29",
        question: "Reaction of ethyl Bromide with ammonia",
        options: [
          "Complete in a single step",
          "Continuous till nucleophile is left when no lone pair",
          "Complete in two steps",
          "It is reversible"
        ],
        answer: 1,
        explanation: "Nucleophilic substitution of alkyl halides with ammonia undergoes sequential alkylation forming 1°, 2°, 3° amines and quaternary ammonium salts until no unshared electron pairs remain."
      },
      {
        id: "alkyl-halides-30",
        question: "Which of the following is obtained by the elimination reaction on bromoethane",
        options: ["Butene", "Ethene", "Propene", "Propane"],
        answer: 1,
        explanation: "Dehydrohalogenation of bromoethane (CH3CH2Br) eliminates HBr to produce ethene (CH2=CH2)."
      },
      {
        id: "alkyl-halides-31",
        question: "Alkyl halides are considered to be very reactive compounds toward nucleophile because",
        options: [
          "They have an electrophilic carbon",
          "They have an electrophilic carbon and a bad leaving group",
          "They have electrophilic carbon and a good leaving group",
          "They have a nucleophilic carbon and a good leaving group"
        ],
        answer: 2,
        explanation: "The polar C-X bond makes carbon electrophilic, while the stable halide ion (X-) acts as a favorable leaving group."
      },
      {
        id: "alkyl-halides-32",
        question: "Which one of the following is an electrophile",
        options: ["Br+", "CH4", "NH3", "H2O"],
        answer: 0,
        explanation: "The bromonium cation (Br+) is positively charged and electron-deficient, seeking an electron pair as an electrophile."
      },
      {
        id: "alkyl-halides-33",
        question: "In a reaction having both alkyl halide and base the base will attack on",
        options: [
          "Electrophilic carbon",
          "Nucleophilic carbon",
          "Beta hydrogen",
          "None of these"
        ],
        answer: 2,
        explanation: "In elimination reactions, a strong base abstracts a proton from the beta-carbon position to form a double bond."
      },
      {
        id: "alkyl-halides-34",
        question: "Same first step in",
        options: ["E1 , E2", "E1 , SN1", "E2, SN2", "None"],
        answer: 1,
        explanation: "Both E1 and SN1 pathways share an identical rate-determining first step: heterolytic cleavage of the C-X bond to produce a carbocation intermediate."
      },
      {
        id: "alkyl-halides-35",
        question: "In which phase SN2 reactions are favored",
        options: ["Solid", "Liquid", "Gas"],
        answer: 1,
        explanation: "SN2 reactions are typically conducted in liquid solutions using polar aprotic solvents to solubilize reagents while keeping nucleophiles reactive."
      },
      {
        id: "alkyl-halides-36",
        question: "Gargnard reagent reacts with ...... to form alkane",
        options: ["Water", "Ammonia", "Alcohol", "All"],
        answer: 3,
        explanation: "Grignard reagents are strong bases that abstract acidic protons from water, ammonia, or alcohols to yield alkanes."
      },
      {
        id: "alkyl-halides-37",
        question: "The rate of SN1 reaction becomes double if",
        options: [
          "Concentration of nucleophile double",
          "Concentration of substrate doubled",
          "Concentration of substrate triple",
          "Concentration of substrate remain same"
        ],
        answer: 1,
        explanation: "Since the SN1 rate law is Rate = k[Substrate], doubling the concentration of the alkyl halide substrate directly doubles the reaction rate."
      },
      {
        id: "alkyl-halides-38",
        question: "In substitution reaction secondary halogenoalkans give show",
        options: [
          "SN1 mechanism",
          "Both E1 and E2",
          "SN2 mechanism",
          "Both SN1 and SN2"
        ],
        answer: 3,
        explanation: "Secondary alkyl halides can undergo substitution via either SN1 or SN2 mechanisms depending on solvent polarity, nucleophile strength, and reaction conditions."
      },
      {
        id: "alkyl-halides-39",
        question: "The alkyl halide molecule on which are nucleophile attacks is called",
        options: ["Nucleophilic centre", "Polar centre", "Substrate", "None"],
        answer: 2,
        explanation: "The organic reactant undergoing substitution/attack by an incoming nucleophile is referred to as the substrate."
      },
      {
        id: "alkyl-halides-40",
        question: "Which type of alkyl halide gives SN2 mechanism",
        options: [
          "Secondary alkyl halides",
          "Tertiary alkyl halides",
          "Vinyl halides",
          "Primary alkyl halides"
        ],
        answer: 3,
        explanation: "Primary alkyl halides possess minimal steric hindrance at the alpha-carbon, strongly favoring direct bimolecular SN2 backside attack."
      },
      {
        id: "alkyl-halides-41",
        question: "The type of isomerism shown by alkyl halides is",
        options: [
          "Geometric isomerism",
          "Positional isomerism",
          "Functional group isomerism",
          "None of the above mentioned"
        ],
        answer: 1,
        explanation: "Alkyl halides demonstrate positional isomerism by altering the location of the halogen substituent along the carbon chain (e.g., 1-chloropropane vs 2-chloropropane)."
      },
      {
        id: "alkyl-halides-42",
        question: "Among the following which one is nucleophile",
        options: ["H+", "OH-", "Ca+2", "Na+"],
        answer: 1,
        explanation: "The hydroxide ion (OH-) carries an unshared electron pair and negative charge, acting as a strong nucleophile."
      },
      {
        id: "alkyl-halides-43",
        question: "Alkyl halide is formed from alcohol by",
        options: [
          "Nucleophilic substitution reaction",
          "Electrophilic substitution reaction",
          "Nucleophilic addition reaction",
          "Elimination reaction"
        ],
        answer: 0,
        explanation: "Converting alcohols to alkyl halides using HX, SOCl2, or PCl5 involves nucleophilic substitution of the hydroxyl group (-OH) by a halide ion (-X)."
      },
      {
        id: "alkyl-halides-44",
        question: "Which of the following is primary alkyl halide",
        options: [
          "Isopropyl halide",
          "Secondary butyl halide",
          "Tertiary butyl halide",
          "Neo pentyl halide"
        ],
        answer: 3,
        explanation: "In neopentyl halide ((CH3)3C-CH2-X), the halogenated carbon is attached directly to only one other carbon atom, making it a primary alkyl halide."
      },
      {
        id: "alkyl-halides-45",
        question: "An electron pair Donor is classified is",
        options: [
          "Lewis acid",
          "Bronsted acid",
          "Lewis base",
          "Bronsted base"
        ],
        answer: 2,
        explanation: "By Lewis acid-base theory, a species that donates an electron pair to form a coordinate covalent bond is a Lewis base."
      },
      {
        id: "alkyl-halides-46",
        question: "The carbon atom caring positive charge and attached three other carbon atoms or group is called",
        options: [
          "Carbonium ion",
          "Oxonium ion",
          "Carbon ion",
          "Carbanion"
        ],
        answer: 0,
        explanation: "A positively charged trivalent carbon species is known as a carbocation or carbonium ion."
      },
      {
        id: "alkyl-halides-47",
        question: "Which one of the following is not a nucleophile",
        options: ["NH2-", "H2O", "BF3", "CH3-"],
        answer: 2,
        explanation: "Boron trifluoride (BF3) has an incomplete octet with 6 valence electrons around boron, rendering it an electron-deficient Lewis acid (electrophile), not a nucleophile."
      },
      {
        id: "alkyl-halides-48",
        question: "In beta elimination reaction",
        options: [
          "Carbon number changes",
          "Unsaturated compound is formed",
          "Hybridization of carbon remain same",
          "Pi bond are decreased"
        ],
        answer: 1,
        explanation: "Beta elimination converts saturated alkyl halides into unsaturated alkenes by introducing a pi bond."
      },
      {
        id: "alkyl-halides-49",
        question: "Which product is obtained by the hydrolysis of 1 chlorobutane with aqueous sodium hydroxide",
        options: ["1-butanol", "1-butanal", "1-butene", "Butanone"],
        answer: 0,
        explanation: "Aqueous NaOH causes nucleophilic substitution of 1-chlorobutane to produce the primary alcohol 1-butanol."
      },
      {
        id: "alkyl-halides-50",
        question: "Which one among the following is not a good leaving group",
        options: ["HSO4-", "OH-", "Cl-", "Br-"],
        answer: 1,
        explanation: "The hydroxide ion (OH-) is a strong base, making it a very poor leaving group in nucleophilic substitution reactions unless protonated first."
      }
  ];