export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const alcohol-and-phenolQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-94",
      question: "Reaction of Phenol with Acetyl chloride will yield:",
      options: [
        "Alcohol",
        "Ester",
        "Carboxylic acid",
        "Ether"
      ],
      answer: 1,
      explanation: "Phenol reacts with acetyl chloride (an acyl halide) in the presence of a base like pyridine to form phenyl acetate, which is an ester."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-83",
      question: "IUPAC name of isopropyl alcohol is:",
      options: [
        "1-butanol",
        "2-propanol",
        "1-propanol",
        "2-butanol",
        "propanol"
      ],
      answer: 1,
      explanation: "Isopropyl alcohol has a 3-carbon chain with the hydroxyl group (–OH) on the second carbon, giving it the systematic IUPAC name 2-propanol."
    },
    {
      id: "chem-sindh-24-90",
      question: "Which reagent is used to distinguish between primary, secondary, and tertiary alcohols?",
      options: [
        "Tollens Reagent",
        "Grignard Reagent",
        "Benedict Reagent",
        "Bloor Reagent",
        "Lucas Reagent"
      ],
      answer: 4,
      explanation: "Lucas reagent (conc. HCl + anhydrous ZnCl₂) tests the rate of alkyl chloride formation: 3° alcohols react instantly, 2° alcohols react within 5–10 minutes, and 1° alcohols do not react at room temperature."
    },
    {
      id: "chem-sindh-24-96",
      question: "When chlorobenzene reacts with sodium hydroxide at 350°C and 150 atmospheric pressure (Dow's Process), it gives rise to the formation of:",
      options: [
        "Sodium chromate",
        "Phenol",
        "Sodium phenoxide",
        "Sodium sulfate",
        "Phenoxide"
      ],
      answer: 2,
      explanation: "Under severe conditions in Dow's process, chlorobenzene reacts with concentrated NaOH to first form sodium phenoxide, which yields phenol upon subsequent acidification."
    },
    {
      id: "chem-sindh-24-109",
      question: "Hydroquinone is a benzenediol; it contains two –OH groups attached to the benzene ring at positions:",
      options: [
        "1 and 2",
        "1 and 3",
        "1 and 4",
        "2 and 3"
      ],
      answer: 2,
      explanation: "Hydroquinone is benzene-1,4-diol, possessing two –OH groups at para positions (1 and 4) on the benzene ring."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-94",
      question: "The rate of acid-catalyzed dehydration of alcohols follows the order:",
      options: [
        "3° > 2° > 1°",
        "1° > 3° > 2°",
        "2° > 3° > 1°",
        "3° > 1° > 2°"
      ],
      answer: 0,
      explanation: "Dehydration proceeds via a carbocation intermediate; since carbocation stability follows 3° > 2° > 1°, the rate of dehydration is highest for tertiary alcohols."
    },
    {
      id: "chem-sindh-25-102",
      question: "Phenol differs significantly from ethanol in chemical behavior because phenol:",
      options: [
        "Forms stronger hydrogen bonds to its aromatic ring",
        "Is more acidic because of resonance-stabilized phenoxide conjugate base",
        "Readily undergoes nucleophilic substitution on the -OH group",
        "Is completely insoluble in water due to its benzene ring"
      ],
      answer: 1,
      explanation: "Deprotonation of phenol produces the phenoxide ion, which is stabilized by delocalization of the negative charge into the aromatic pi-system, making phenol far more acidic than ethanol."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-116",
      question: "Which of the following alcohols has the highest boiling point?",
      options: [
        "ethyl alcohol",
        "isopropyl alcohol",
        "n-propyl alcohol",
        "tert-butyl alcohol"
      ],
      answer: 2,
      explanation: "Among the 3-carbon and 4-carbon alcohols listed, n-propyl alcohol has a unbranched linear chain providing a larger surface area and stronger intermolecular London dispersion/hydrogen bonding forces compared to branched isomers."
    },
    {
      id: "kmu-mdcat-2024-117",
      question: "The reaction of an alcohol with metallic sodium produces hydrogen gas and a/an:",
      options: [
        "Aldehyde",
        "Alkoxide",
        "Ethane",
        "Ethene"
      ],
      answer: 1,
      explanation: "Alcohols react with active metals like Na to release H₂ gas and form sodium alkoxides: 2R–OH + 2Na → 2R–ONa + H₂."
    },
    {
      id: "kmu-mdcat-2024-118",
      question: "Oxidation of a secondary alcohol using an oxidizing agent like K₂Cr₂O₇/H⁺ gives a/an:",
      options: [
        "Carboxylic acid",
        "Ether",
        "Ketone",
        "Phenol"
      ],
      answer: 2,
      explanation: "Secondary alcohols (R₂CHOH) undergo oxidation to yield ketones (R₂C=O), which resist further oxidation under mild conditions."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-144",
      question: "In a molecule of phenol, the ring carbon atom attached to the –OH group is:",
      options: [
        "sp hybridized",
        "sp² hybridized",
        "sp³ hybridized",
        "unhybridized"
      ],
      answer: 1,
      explanation: "All six carbon atoms forming the aromatic benzene ring in phenol are sp² hybridized."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-81",
      question: "Which product is formed by the reaction of phenol with concentrated nitric acid in the presence of concentrated sulfuric acid?",
      options: [
        "Adipic acid",
        "m-Nitrophenol",
        "Picric acid",
        "p-Nitrophenol"
      ],
      answer: 2,
      explanation: "Nitrating phenol with concentrated HNO₃/H₂SO₄ results in multi-substitution yielding 2,4,6-trinitrophenol, commonly known as picric acid."
    },
    {
      id: "szambu-chem-24-92",
      question: "The alkoxide anion (R–O⁻) derived by deprotonation of an alcohol acts as a strong:",
      options: [
        "Acidic moiety",
        "Electrophile",
        "Lewis acid",
        "Lewis base"
      ],
      answer: 3,
      explanation: "An alkoxide ion carries an unshared electron pair on oxygen with a negative charge, functioning as an electron-pair donor (Lewis base) and a strong nucleophile."
    },
    {
      id: "szambu-chem-24-95",
      question: "Which type of substituent attached to the benzene ring will increase the acidic strength of phenols?",
      options: [
        "Electron donating substituents",
        "Electron withdrawing substituents",
        "Lewis bases",
        "Nucleophiles"
      ],
      answer: 1,
      explanation: "Electron-withdrawing groups (like –NO₂, –CN, halogens) delocalize and stabilize the negative charge of the phenoxide ion, thereby increasing the acidity of phenol."
    },
    {
      id: "szambu-chem-24-116",
      question: "The melting and boiling points of alcohols are much higher compared to alkanes of similar molar mass due to:",
      options: [
        "Dipole-dipole interaction",
        "Hydrogen bonding",
        "Ionic interactions",
        "Van der Waals interactions"
      ],
      answer: 1,
      explanation: "Alcohols contain polar O–H bonds that form strong intermolecular hydrogen bonds, requiring extra energy to break during phase changes."
    },
    {
      id: "szambu-chem-24-119",
      question: "Which type of reaction occurs when an alcohol reacts with a carboxylic acid in an acidic medium?",
      options: [
        "Dehydration reaction",
        "Dehydrogenation reaction",
        "Esterification reaction",
        "Reduction reaction"
      ],
      answer: 2,
      explanation: "The reaction between an alcohol and a carboxylic acid to produce an ester and water is known as Fischer esterification."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The common name of 1,3-benzenediol is:",
      options: [
        "Pyrogallol",
        "Cresol",
        "Resorcinol",
        "Catechol"
      ],
      answer: 2,
      explanation: "1,2-benzenediol is catechol, 1,3-benzenediol is resorcinol, and 1,4-benzenediol is hydroquinone."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-118",
      question: "Which of the following alcohols responds positively to the Iodoform test (forming a yellow CHI₃ precipitate)?",
      options: [
        "Methanol",
        "1-Butanol",
        "1-Propanol",
        "Ethanol"
      ],
      answer: 3,
      explanation: "The iodoform test requires a CH₃CH(OH)– group. Ethanol (CH₃CH₂OH) is the only primary alcohol that possesses this group and yields iodoform."
    },
    {
      id: "uhs-2024-chem-120",
      question: "Which of the following is correct regarding the relative acidity of phenol?",
      options: [
        "Phenol and water are equally acidic",
        "Phenol is less acidic than carboxylic acids",
        "Phenol is less acidic than water",
        "Phenol is less acidic than ethanol"
      ],
      answer: 1,
      explanation: "Acidity order: Carboxylic acids > Phenol > Water > Alcohols. Phenol is less acidic than carboxylic acids but more acidic than water and ethanol."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-83",
      question: "Which of the following best explains why phenol reacts with aqueous NaOH solution, whereas alcohols do not?",
      options: [
        "Phenol has a lower boiling point than alcohol.",
        "Alcohols contain a strong O-H bond that cannot be broken by weak bases.",
        "Phenol forms hydrogen bonding that facilitates ionization.",
        "Phenol is weakly acidic due to resonance stabilization of the phenoxide ion."
      ],
      answer: 3,
      explanation: "Phenol's phenoxide ion is resonance-stabilized, making it acidic enough (Ka ~ 10⁻¹⁰) to react with NaOH. Alcohols are much weaker acids (Ka ~ 10⁻¹⁶) and cannot react with NaOH."
    },
    {
      id: "uhs-chem-25-99",
      question: "Fischer esterification (reaction between alcohol and carboxylic acid releasing water) is classified as a:",
      options: [
        "Condensation reaction",
        "Substitution reaction",
        "Elimination reaction",
        "Dehydrogenation reaction"
      ],
      answer: 0,
      explanation: "Fischer esterification combines two reactant molecules with the elimination of a small water molecule, defining it as a condensation reaction."
    }
  ];