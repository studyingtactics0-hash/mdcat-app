export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const alcoholAndPhenolQuestions: Question[] = [
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
    },
    {
        id: "alc-phen-eth-1",
        question: "Phenol and alcohol reacts with sodium metal to form salt and both form",
        options: [
          "Both form water",
          "Both form hydrogen gas",
          "Ethanol form hydrogen and phenol form water",
          "Both form water"
        ],
        answer: 2,
        explanation: "Note: Chemically, both alcohols and phenols liberate hydrogen gas when reacting with active metals like sodium. Option C is mapped per the provided answer key."
      },
      {
        id: "alc-phen-eth-2",
        question: "The dehydration of ethyl alcohol with concentrated sulphuric acid at 140 centigrade gives",
        options: [
          "Diethyl Ether",
          "Ethene",
          "Alcohol",
          "Carboxylic acid"
        ],
        answer: 0,
        explanation: "Intermolecular dehydration of ethanol with conc. H2SO4 at 140 °C produces diethyl ether (CH3CH2OCH2CH3)."
      },
      {
        id: "alc-phen-eth-3",
        question: "Reaction of phenol with concentrated nitric acid gives",
        options: [
          "Palmetric acid",
          "Steric acid",
          "Linolec acid",
          "Picric acid"
        ],
        answer: 3,
        explanation: "Nitration of phenol using concentrated HNO3 in the presence of conc. H2SO4 yields 2,4,6-trinitrophenol (Picric acid)."
      },
      {
        id: "alc-phen-eth-4",
        question: "Which of the following catalyst is used in the industrial preparation of methanol",
        options: [
          "Zinc oxide and Alumina",
          "Alumina and silica",
          "Silica and chromium oxide",
          "Zinc oxide and chromium oxide"
        ],
        answer: 3,
        explanation: "Industrial synthesis of methanol from water gas (CO + H2) uses a mixture of ZnO and Cr2O3 as catalysts at 400°C and 200 atm."
      },
      {
        id: "alc-phen-eth-5",
        question: "1,3,5-pentanetriol has secondary carbons",
        options: ["3", "2", "1", "0"],
        answer: 0,
        explanation: "In 1,3,5-pentanetriol (HO-CH2-CH2-CH(OH)-CH2-CH2-OH), carbons 2, 3, and 4 are bonded to two other carbon atoms, making them secondary carbons."
      },
      {
        id: "alc-phen-eth-6",
        question: "Which one of the following alcohol is indicated by formation of yellow crystals in iodoform test",
        options: ["Methanol", "Ethanol", "Butanol", "Propanol"],
        answer: 1,
        explanation: "Ethanol contains the CH3-CH(OH)- structural unit required to undergo oxidation and cleavage to yield yellow iodoform (CHI3) crystals."
      },
      {
        id: "alc-phen-eth-7",
        question: "Alcohols are prepared by the",
        options: [
          "Hydration of alkenes",
          "Hydrogenation of alkenes",
          "Halogenation of alkanes",
          "Oxidation of alkenes"
        ],
        answer: 0,
        explanation: "Acid-catalyzed addition of water across the carbon-carbon double bond of alkenes (hydration) yields alcohols."
      },
      {
        id: "alc-phen-eth-8",
        question: "The compounds which are formed by the replacement of one of the hydrogen of water by alkyl groups are called as",
        options: ["Ethers", "Alcohols", "Phenols", "Carboxylic acids"],
        answer: 1,
        explanation: "Replacing one hydrogen atom of a water molecule (H-O-H) with an alkyl group (R) gives an alcohol (R-O-H)."
      },
      {
        id: "alc-phen-eth-9",
        question: "Phenol reacts with Sodium Hydroxide to form",
        options: ["Salt", "Acid", "Base", "Ester"],
        answer: 0,
        explanation: "Phenol acts as a weak acid and reacts with NaOH base to form sodium phenoxide salt and water."
      },
      {
        id: "alc-phen-eth-10",
        question: "Phenol is completely soluble in water",
        options: [
          "25 centigrade",
          "68.5 centigrade",
          "62.3 centigrade",
          "66.5 centigrade"
        ],
        answer: 1,
        explanation: "Phenol and water form a partially miscible system with an upper critical solution temperature (UCST) of 68.5 °C, above which they are miscible in all proportions."
      },
      {
        id: "alc-phen-eth-11",
        question: "The number of resonating structures of phenoxide Ions are",
        options: ["3", "5", "4", "6"],
        answer: 2,
        explanation: "Note: The phenoxide ion possesses 5 canonical resonance forms; option C (4) is mapped according to the provided answer key."
      },
      {
        id: "alc-phen-eth-12",
        question: "2,4,6-tri nitrophenol is commonly called as",
        options: ["Pthalic acid", "Malonic acid", "Picric acid", "None"],
        answer: 2,
        explanation: "2,4,6-Trinitrophenol is known by the common name picric acid."
      },
      {
        id: "alc-phen-eth-13",
        question: "Phenol gives benzene on heating with",
        options: ["Zinc", "Iron", "Meganese", "Silver"],
        answer: 0,
        explanation: "Heating phenol with zinc dust reduces it to benzene, forming zinc oxide (ZnO) as a byproduct."
      },
      {
        id: "alc-phen-eth-14",
        question: "Oxidation of alcohols to form",
        options: ["Aldehydes", "Ketones", "Both", "None"],
        answer: 2,
        explanation: "Oxidation of primary alcohols yields aldehydes, while oxidation of secondary alcohols yields ketones."
      },
      {
        id: "alc-phen-eth-15",
        question: "Which alcohol is more reactive towards sodium metal",
        options: [
          "Tertiary butyl alcohol",
          "n propyl alcohol",
          "Isopropyl alcohol",
          "Have same reactivity"
        ],
        answer: 1,
        explanation: "Reactivity of alcohols toward active metals depends on O-H bond acidity (1° > 2° > 3°). n-Propyl alcohol (primary) is the most reactive choice."
      },
      {
        id: "alc-phen-eth-16",
        question: "An electron with drawing group attached to Ortho position in phenol",
        options: [
          "Makes it basic",
          "Decreases its basicity",
          "Stabilis the phenoxide ion",
          "Allow it to precipitate in aqueous solution"
        ],
        answer: 2,
        explanation: "Electron-withdrawing groups (-NO2, -CN) at ortho or para positions delocalize the negative charge on the phenoxide ion, stabilizing it and increasing acidity."
      },
      {
        id: "alc-phen-eth-17",
        question: "Phenol on hydrogenation with hydrogen in presence of nickel catalyst",
        options: ["Benzene", "Cyclohexanol", "Toulene", "Aldehydes"],
        answer: 1,
        explanation: "Catalytic hydrogenation of phenol at high temperature and pressure reduces the aromatic ring to give cyclohexanol."
      },
      {
        id: "alc-phen-eth-18",
        question: "Tertiary alcohols are not oxidize into carbon compound because",
        options: [
          "They contain more alkyl group",
          "They have no Alpha hydrogen",
          "Suitable oxidation agent is not available",
          "None of the above"
        ],
        answer: 1,
        explanation: "Tertiary alcohols lack an alpha-hydrogen atom on the carbon bearing the -OH group, preventing standard oxidation without breaking C-C bonds."
      },
      {
        id: "alc-phen-eth-19",
        question: "Reaction of girgnard reagent with formaldehyde to form",
        options: [
          "Primary alcohol",
          "Secondary alcohol",
          "Tertiary alcohol",
          "Do not form alcohol"
        ],
        answer: 0,
        explanation: "Grignard reagent addition to formaldehyde (HCHO) followed by acid hydrolysis generates a primary alcohol."
      },
      {
        id: "alc-phen-eth-20",
        question: "Which one of the following is more acidic",
        options: ["Phenols", "Alcohols", "Carboxylic acids", "Amines"],
        answer: 2,
        explanation: "Carboxylic acids are significantly more acidic (pKa ~4-5) than phenols (pKa ~10), alcohols (pKa ~16), or amines."
      },
      {
        id: "alc-phen-eth-21",
        question: "Oxidation of secondary alcohol gives",
        options: ["Aldehydes", "Ketones", "Melaonic acid", "All of these"],
        answer: 1,
        explanation: "Oxidation of secondary alcohols removes hydrogen to form ketones."
      },
      {
        id: "alc-phen-eth-22",
        question: "The alcohols having one hydroxyl group attached to the alkyl group are called",
        options: [
          "Monohydric alcohols",
          "Dihydricalcohol",
          "Trihydric alcohols",
          "Polyhydric alcohols"
        ],
        answer: 0,
        explanation: "Alcohols containing a single -OH group in their molecular structure are monohydric alcohols."
      },
      {
        id: "alc-phen-eth-23",
        question: "Which of the following is more reactive when O-H Bond breaks",
        options: [
          "Primary alcohol",
          "Secondary alcohol",
          "Tertiary alcohol",
          "None of these"
        ],
        answer: 0,
        explanation: "When the O-H bond breaks, reactivity follows acid strength: 1° > 2° > 3° due to lesser electron-donating inductive effect from fewer alkyl groups."
      },
      {
        id: "alc-phen-eth-24",
        question: "The acidity of phenol is due to its",
        options: [
          "Nature of benzene",
          "Double bond in benzene ring",
          "Nature of phenoxide ion",
          "Hydroxyl group"
        ],
        answer: 2,
        explanation: "The high acidity of phenol stems from the resonance stabilization of its conjugate base, the phenoxide ion."
      },
      {
        id: "alc-phen-eth-25",
        question: "Denatured alcohol is known as",
        options: [
          "Absolute alcohol",
          "Methylated spirit",
          "Wood spirit",
          "Rectified spirit"
        ],
        answer: 1,
        explanation: "Ethanol rendered unfit for drinking by adding toxic methanol (~10%) and pyridine is called methylated spirit."
      },
      {
        id: "alc-phen-eth-26",
        question: "Alcohols of lower molecular weight are",
        options: [
          "Soluble in water",
          "Insoluble in water",
          "Soluble in water on heating",
          "Insoluble in all solvents"
        ],
        answer: 0,
        explanation: "Lower alcohols (like methanol, ethanol, propanol) form strong hydrogen bonds with water molecules, making them readily soluble."
      },
      {
        id: "alc-phen-eth-27",
        question: "Which reactant does not laborate water on reaction with alcohol",
        options: ["NH3", "HCL", "K2Cr2O7", "PCL3"],
        answer: 3,
        explanation: "Reaction of alcohol with PCl3 forms alkyl chloride and phosphorous acid (H3PO3), without producing water."
      },
      {
        id: "alc-phen-eth-28",
        question: "Which of the following group is indicated when HCL is formed by reaction of Ethanol with Phosphorus pentachloride",
        options: [
          "Amino group",
          "Halide group",
          "Hydroxyl group",
          "Hydride group"
        ],
        answer: 1,
        explanation: "Note: Testing for the presence of -OH yields HCl gas; per the provided answer key, Option B (Halide group) is mapped."
      },
      {
        id: "alc-phen-eth-29",
        question: "Temperature required for the dehydration of Ethanol into ethene in the presence of sulphuric acid is",
        options: [
          "130 centigrade",
          "140 centigrade",
          "170 centigrade",
          "180 centigrade"
        ],
        answer: 3,
        explanation: "Dehydration of ethanol to form ethene requires strong acidic conditions and high temperature (~170–180 °C)."
      },
      {
        id: "alc-phen-eth-30",
        question: "Which of the following is an appropriate indication of positive iodoform test",
        options: [
          "Formation of water",
          "Release of hydrogen gas",
          "Brick red precipitate",
          "Yellow precipitate"
        ],
        answer: 3,
        explanation: "A positive iodoform test is confirmed by the formation of a antiseptic-smelling pale yellow precipitate of iodoform (CHI3)."
      },
      {
        id: "alc-phen-eth-31",
        question: "What forces operate between ethyl group of ethyl alcohol and oxygen of water",
        options: [
          "Hydrogen bonding",
          "Repulsive forces",
          "Attractive forces",
          "Dipole forces"
        ],
        answer: 0,
        explanation: "The hydroxyl group of ethanol forms intermolecular hydrogen bonds with water molecules."
      },
      {
        id: "alc-phen-eth-32",
        question: "Picric acid is",
        options: [
          "Monocarboxylic acid",
          "Dicarboxylic acid",
          "Tricarboxylic acid",
          "None of these"
        ],
        answer: 3,
        explanation: "Picric acid is 2,4,6-trinitrophenol; despite its acidic properties, it contains no carboxylic acid (-COOH) groups."
      },
      {
        id: "alc-phen-eth-33",
        question: "The phenoxide ion is more stable than eth oxide ion is",
        options: [
          "Lone pair of an oxygen atom overlap with the d localised Pi bonding system in Benzene",
          "Oxygen atom is directly bonded with benzene ring in phenoxide ion",
          "The negative charge is localised on Oxygen atom of phenoxide ion",
          "The negative charge is the localised on Oxygen atom of ethy oxide ion"
        ],
        answer: 0,
        explanation: "The negative charge on oxygen in phenoxide is delocalized over the aromatic pi-system of the benzene ring, whereas in ethoxide it remains localized."
      },
      {
        id: "alc-phen-eth-34",
        question: "Primary secondary and tertiary alcohol can be identified by",
        options: [
          "Lucas test",
          "Iodoform test",
          "Tolens reagent",
          "Silver mirror test"
        ],
        answer: 0,
        explanation: "The Lucas reagent (conc. HCl + ZnCl2) distinguishes 1°, 2°, and 3° alcohols based on the rate of formation of insoluble alkyl chloride turbidity."
      },
      {
        id: "alc-phen-eth-35",
        question: "Ethanol is prepared on a large scale by",
        options: [
          "Hydration of alkanes",
          "Fermentation",
          "Distillation of wood",
          "Williamson synthesis"
        ],
        answer: 1,
        explanation: "Fermentation of carbohydrates (molasses or starch) by yeast enzymes (invertase and zymase) produces ethanol commercially."
      },
      {
        id: "alc-phen-eth-36",
        question: "Ethanol ethanoic acid and finol all contain acidic function functional group the order of the acetic strength is ethanoic acid > phenol > ethanol this is mainly due to",
        options: [
          "Electron releasing effect of ethanoic acid is greater than that of ethanol",
          "Electron releasing effect of phenol is greater than that of ethanol",
          "Electron with drawing effect of phenol is greater than that of ethanol",
          "Electron with drawing effect of ethanoic acid is greater than that of phenol"
        ],
        answer: 3,
        explanation: "The resonance stabilization in the carboxylate ion of ethanoic acid is far greater than the resonance stabilization in the phenoxide ion of phenol."
      },
      {
        id: "alc-phen-eth-37",
        question: "Distinction between ethanol and phenol can be ascertained by",
        options: [
          "Lucas test",
          "Iodoform test",
          "Tollens test",
          "Bromine test"
        ],
        answer: 3,
        explanation: "Phenol reacts with bromine water to produce a white precipitate of 2,4,6-tribromophenol, whereas ethanol gives no reaction."
      },
      {
        id: "alc-phen-eth-38",
        question: "Alcohol is less acidic than phenol due to",
        options: [
          "Higher ka value",
          "Stability of carbocation",
          "Unstability of alcohol ion",
          "Stability of phenol"
        ],
        answer: 2,
        explanation: "The alkoxide ion (RO-) formed from alcohol lacks resonance stabilization and is destabilized by electron-donating alkyl groups."
      },
      {
        id: "alc-phen-eth-39",
        question: "Esterification of CH3COOH is which reaction",
        options: [
          "Acid base",
          "Redox",
          "Electrophilic",
          "Nucleophillic"
        ],
        answer: 3,
        explanation: "Esterification proceeds via nucleophilic acyl substitution where the alcohol acts as a nucleophile."
      },
      {
        id: "alc-phen-eth-40",
        question: "Reacts with sodium metal to liberate",
        options: [
          "Carbon dioxide gas",
          "monoxide gas",
          "Hydrogen gas",
          "Steam"
        ],
        answer: 2,
        explanation: "Alcohols and phenols react with sodium metal to displace acidic hydrogen, releasing hydrogen gas (H2)."
      },
      {
        id: "alc-phen-eth-41",
        question: "Which statement is true about phenol",
        options: [
          "It is more acidic than acetic acid",
          "It is more acidic than ethyl alcohol",
          "It returns red litmus blue",
          "It does not react with sodium"
        ],
        answer: 1,
        explanation: "Phenol (pKa ~10) is stronger acid than ethanol (pKa ~16), though weaker than acetic acid (pKa ~4.8)."
      },
      {
        id: "alc-phen-eth-42",
        question: "One of the following can produce greater number of moles of ethyl chloride or reacting with excess of ethanol",
        options: ["PCl5", "PCl3", "HCl/ZnCl2", "SOCl2"],
        answer: 1,
        explanation: "1 mole of PCl3 reacts with 3 moles of ethanol to yield 3 moles of ethyl chloride (PCl3 + 3C2H5OH -> 3C2H5Cl + H3PO3)."
      },
      {
        id: "alc-phen-eth-43",
        question: "Phenol is more acidic than alcohol because of the following reasons",
        options: [
          "Delocalization of negative charge in the OH group",
          "Delocalization of positive charge on the carbon atom in the ring",
          "Delocalization of negative charge in the ring",
          "Delocalization of positive charge in the OH group"
        ],
        answer: 2,
        explanation: "In the phenoxide ion, the negative charge on the oxygen atom is delocalized over the ortho and para positions of the benzene ring."
      },
      {
        id: "alc-phen-eth-44",
        question: "The best reagent for the oxidation of alcohol is",
        options: [
          "Zinc chloride",
          "Acid dichromate",
          "Ethers",
          "Pyridine"
        ],
        answer: 1,
        explanation: "Acidified potassium/sodium dichromate (H+/Cr2O7^2-) is a standard oxidizing agent for converting primary and secondary alcohols."
      },
      {
        id: "alc-phen-eth-45",
        question: "Reaction of bromine With water 100 centigrade gives major product",
        options: [
          "Orthobromophenol",
          "Para bromo phenol",
          "Metabramophenol",
          "Mixture of orthopara and meta bromophenol"
        ],
        answer: 1,
        explanation: "Monobromination of phenol at elevated temperature gives para-bromophenol as the predominant product due to lesser steric hindrance."
      },
      {
        id: "alc-phen-eth-46",
        question: "Example of aromatic alcohol is",
        options: [
          "Benzyl alcohol",
          "Benzene",
          "Phenol",
          "Both a and c"
        ],
        answer: 3,
        explanation: "Note: Benzyl alcohol is a true aromatic alcohol, and phenol is an aryl alcohol. Option D (Both a and c) is selected per the provided key."
      },
      {
        id: "alc-phen-eth-47",
        question: "The protonated Ether is called",
        options: [
          "Oxide ion",
          "Carbon ion",
          "Hydronium",
          "Oxonium ion"
        ],
        answer: 3,
        explanation: "When ether accepts a proton on its oxygen atom, it forms a dialkyloxonium ion [R-OH+-R]."
      },
      {
        id: "alc-phen-eth-48",
        question: "Reaction alcohol with carboxylic acid to form",
        options: ["Ethers", "Esters", "Aldehydes", "Ketones"],
        answer: 1,
        explanation: "Condensation of an alcohol with a carboxylic acid in the presence of an acid catalyst produces an ester and water."
      },
      {
        id: "alc-phen-eth-49",
        question: "The compound X when treated with sodium metal and the product formed is react with alkyl halide forms Ether compound X",
        options: ["Alcohol", "Alkyl halides", "Phenols", "Ethers"],
        answer: 0,
        explanation: "In Williamson ether synthesis, alcohol (ROH) reacts with Na to form sodium alkoxide (RONa), which reacts with R'X to form ether (R-O-R')."
      },
      {
        id: "alc-phen-eth-50",
        question: "Phenol is",
        options: ["Dense", "Hard", "Deliquescent", "Intermediate"],
        answer: 2,
        explanation: "Phenol is a colorless, crystalline deliquescent solid that absorbs moisture from the air and turns pinkish on exposure."
      } 
  ];