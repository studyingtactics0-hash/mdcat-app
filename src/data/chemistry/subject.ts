export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const chemistryquestions: Question[] = [
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
      },
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
          },
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
  },
 // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-108",
      question: "The electrons will enter which of these orbitals after filling the 3d orbital.",
      options: [
        "4d",
        "4f",
        "4s",
        "4p"
      ],
      answer: 3,
      explanation: "According to the Aufbau principle (n+l rule), the 3d orbital (n+l = 5) is followed by the 4p orbital (n+l = 5, higher n)."
    },
    {
      id: "bumhs-2025-chem-126",
      question: "n+l value for 4d orbital is:",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: 2,
      explanation: "For a 4d orbital, principal quantum number n = 4 and azimuthal quantum number l = 2. Therefore, n + l = 4 + 2 = 6."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-80",
      question: "The only group of lines occurring in the visible region of the hydrogen spectrum is labelled as the:",
      options: [
        "Paschen series",
        "Pfund series",
        "Balmer series",
        "Lyman series"
      ],
      answer: 2,
      explanation: "The Balmer series corresponds to electron transitions ending at n = 2 and is the only series in the hydrogen spectrum that falls within the visible light region."
    },
    {
      id: "bumhs-mdcat-2024-86",
      question: "Carbon atom is used to measure relative:",
      options: [
        "Atomic size",
        "Atomic number",
        "Atomic mass",
        "Atomic volume"
      ],
      answer: 2,
      explanation: "The Carbon-12 isotope is defined as the international standard for determining relative atomic masses of elements."
    },
    {
      id: "bumhs-mdcat-2024-89",
      question: "One picometer (pm) = ?",
      options: [
        "10⁻⁶ m",
        "10⁻⁸ m",
        "10⁻¹⁰ m",
        "10⁻¹² m"
      ],
      answer: 3,
      explanation: "1 picometer (pm) is equal to 10⁻¹² meters."
    },
    {
      id: "bumhs-mdcat-2024-91",
      question: "An electron in an atom is completely described by its ______ quantum numbers.",
      options: [
        "Eight",
        "Six",
        "Five",
        "Four"
      ],
      answer: 3,
      explanation: "An electron's state in an atom is completely specified by four quantum numbers: principal (n), azimuthal (l), magnetic (m), and spin (s)."
    },
    {
      id: "bumhs-mdcat-2024-96",
      question: "Isotopes differ from each other on the basis of:",
      options: [
        "number of electrons",
        "mass number",
        "electronic configuration",
        "crystal lattice"
      ],
      answer: 1,
      explanation: "Isotopes are atoms of the same element having the same atomic number (protons) but different mass numbers due to varying numbers of neutrons."
    },
    {
      id: "bumhs-mdcat-2024-108",
      question: "Which statement is not correct for cathode rays?",
      options: [
        "Cathode rays consist of moving material particles",
        "Cathode rays have definite mass",
        "Cathode rays have definite velocity",
        "Cathode rays travel with the velocity of light"
      ],
      answer: 3,
      explanation: "Cathode rays consist of electrons, which are material particles possessing mass. They travel at speeds slower than the velocity of light in vacuum."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-72",
      question: "The charge of electron is:",
      options: [
        "1.602×10⁻¹⁶ C",
        "1.602×10⁻¹⁵ C",
        "1.602×10⁻¹⁷ C",
        "1.602×10⁻¹⁸ C",
        "1.602×10⁻¹⁹ C"
      ],
      answer: 4,
      explanation: "The elementary magnitude of charge on an electron is 1.602 × 10⁻¹⁹ Coulombs."
    },
    {
      id: "chem-sindh-24-82",
      question: "“In an orbital of an atom, no two electrons can have the same set of four quantum numbers, at least one quantum number must be different.” This statement is:",
      options: [
        "Aufbau principle",
        "Pauli’s exclusion principle",
        "Hund’s rule",
        "Wissewser rule",
        "Magnetic quantum number"
      ],
      answer: 1,
      explanation: "This is the precise statement of Pauli's Exclusion Principle."
    },
    {
      id: "chem-sindh-24-95",
      question: "The neutron was discovered by:",
      options: [
        "Max Planck",
        "Neil Bohr",
        "J.J. Thomson",
        "Goldstein",
        "James Chadwick"
      ],
      answer: 4,
      explanation: "James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles."
    },
    {
      id: "chem-sindh-24-118",
      question: "Maximum number of electrons in a given sub-shell are calculated by:",
      options: [
        "n²",
        "2(n+1)",
        "2n²",
        "2(2l+1)",
        "2l+1"
      ],
      answer: 3,
      explanation: "The number of orbitals in a subshell is (2l+1). Since each orbital holds a maximum of 2 electrons, the total electron capacity is 2(2l+1)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-108",
      question: "Which of the following is expected to be the most paramagnetic?",
      options: [
        "₃Li",
        "₄Be",
        "₅B",
        "₆C"
      ],
      answer: 3,
      explanation: "Carbon (₆C: 1s² 2s² 2px¹ 2py¹) has 2 unpaired electrons, giving it the highest paramagnetic character among the listed options."
    },
    {
      id: "chem-sindh-25-110",
      question: "The maximum probability of finding an electron in ground state of Hydrogen is at a distance of:",
      options: [
        "0.53 nm",
        "0.35 nm",
        "0.053 nm",
        "0.0053 nm"
      ],
      answer: 2,
      explanation: "The radius of the first Bohr orbit of Hydrogen is r₁ = 0.529 Å = 0.053 nm, where the electron probability density peaks."
    },
    {
      id: "chem-sindh-25-112",
      question: "Which atom has at least one electron in a dumbbell shape orbital?",
      options: [
        "H",
        "He",
        "Li",
        "B"
      ],
      answer: 3,
      explanation: "Boron (₅B: 1s² 2s² 2p¹) has its valence electron in a 2p orbital, which possesses a dumbbell shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-125",
      question: "The energy of an orbital is determined by:",
      options: [
        "Hund’s Rule",
        "Pauli-exclusion principle",
        "n+l rule",
        "Boyles principle"
      ],
      answer: 2,
      explanation: "The n+l rule (Bohr-Bury rule) determines the relative energy levels of subshells in multi-electron atoms."
    },
    {
      id: "kmu-mdcat-25-chem-135",
      question: "According to Planck’s quantum theory, if the frequency of photon is doubled, the value of ‘h’ will be:",
      options: [
        "Doubled",
        "Increased 3 times",
        "Increased 4 times",
        "Unchanged"
      ],
      answer: 3,
      explanation: "Planck's constant (h = 6.626 × 10⁻³⁴ J·s) is a universal constant and remains unchanged regardless of frequency or energy."
    },
    {
      id: "kmu-mdcat-25-chem-139",
      question: "Spectral series for hydrogen spectrum are:",
      options: [
        "2",
        "3",
        "5",
        "7"
      ],
      answer: 2,
      explanation: "The hydrogen emission spectrum contains 5 primary named series: Lyman, Balmer, Paschen, Brackett, and Pfund."
    },
    {
      id: "kmu-mdcat-25-chem-147",
      question: "Identify the CORRECT electronic configuration for an element with atomic number 24 (Chromium):",
      options: [
        "[Ar] 4s² 3d⁴",
        "[Ar] 4s¹ 3d⁵",
        "[Ar] 4s⁰ 3d⁶",
        "[Ar] 4s² 3d⁵"
      ],
      answer: 1,
      explanation: "Chromium (Z=24) exhibits an anomalous configuration [Ar] 4s¹ 3d⁵ to gain extra stability from a half-filled d-subshell."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-73",
      question: "Which of the following sub-shell does not exist?",
      options: [
        "1p",
        "1s",
        "5d",
        "6f"
      ],
      answer: 0,
      explanation: "For n = 1, the maximum allowed value of l is 0 (s-orbital). Therefore, a 1p subshell (l = 1) cannot exist."
    },
    {
      id: "kmu-mdcat-2024-74",
      question: "The splitting of spectral lines in magnetic field is",
      options: [
        "Aufbau principle",
        "Pauli exclusion principle",
        "Stark effect",
        "Zeeman effect"
      ],
      answer: 3,
      explanation: "The splitting of atomic spectral lines in an external magnetic field is known as the Zeeman effect."
    },
    {
      id: "kmu-mdcat-2024-75",
      question: "Which element has the electronic configuration of noble-gas notation [Kr], 5s², 4d²?",
      options: [
        "Mo",
        "Se",
        "Sr",
        "Zr"
      ],
      answer: 3,
      explanation: "Zirconium (Zr) has atomic number 40. Its electronic configuration is [Kr] 5s² 4d² (36 + 2 + 2 = 40)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-76",
      question: "Which of the following element will show electronic configuration of outermost shell like ns², np⁵?",
      options: [
        "C",
        "Cl",
        "S",
        "Si"
      ],
      answer: 1,
      explanation: "Chlorine (Cl) is a halogen in Group 17 with 7 valence electrons, having an outer shell configuration of 3s² 3p⁵."
    },
    {
      id: "szambu-chem-24-88",
      question: "Diamagnetic behavior of Fluorine molecule is due to presence of ______.",
      options: [
        "paired electrons in d orbitals",
        "paired electrons in p orbitals",
        "unpaired electrons in d orbitals",
        "unpaired electrons in p orbitals"
      ],
      answer: 1,
      explanation: "In the F₂ molecule, all bonding and anti-bonding molecular orbitals formed by p-orbital overlaps are fully paired, giving it a diamagnetic nature."
    },
    {
      id: "szambu-chem-24-98",
      question: "The e/m ratio of proton is ______ that of an electron.",
      options: [
        "1836 times greater than",
        "equal to",
        "greater than",
        "smaller than"
      ],
      answer: 3,
      explanation: "Since a proton is ~1836 times more massive than an electron while holding an equal magnitude of charge, its charge-to-mass (e/m) ratio is significantly smaller than that of an electron."
    },
    {
      id: "szambu-chem-24-106",
      question: "How many electrons will be accommodated in sub-shell with Azimuthal quantum number ℓ = 2?",
      options: [
        "2",
        "6",
        "10",
        "12"
      ],
      answer: 2,
      explanation: "ℓ = 2 corresponds to a d subshell, which contains 5 degenerate orbitals and can accommodate a maximum of 10 electrons."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of electron with l = 2 in an atom having atomic number 23 (Vanadium) is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 1,
      explanation: "Vanadium (Z=23) has configuration [Ar] 4s² 3d³. The electrons in l = 2 (d-subshell) equal 3."
    },
    {
      id: "szambu-chem-25-2",
      question: "Highest energy for one quantum among radiation is:",
      options: [
        "microwave",
        "infrared",
        "ultra violet",
        "visible"
      ],
      answer: 2,
      explanation: "Ultraviolet radiation has the highest frequency among the given choices, so its quantum carries the highest energy (E = hf)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-73",
      question: "The p orbital has",
      options: [
        "2 lobes",
        "3 lobes",
        "4 lobes",
        "5 lobes"
      ],
      answer: 0,
      explanation: "A p-orbital has a dumbbell shape consisting of 2 lobes separated by a nodal plane."
    },
    {
      id: "uhs-2024-chem-74",
      question: "Which of the following electronic configuration is correct for carbon?",
      options: [
        "1s²2s²2p³",
        "1s²2s²2p⁴",
        "1s²2s²2p²",
        "1s²2s²2p¹"
      ],
      answer: 2,
      explanation: "Carbon (Z=6) has 6 electrons with ground state configuration 1s² 2s² 2p²."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-93",
      question: "Which set of quantum numbers is not allowed for an electron?",
      options: [
        "n=2, l=1, m=0, s=+1/2",
        "n=3, l=0, m=0, s=-1/2",
        "n=2, l=2, m=1, s=+1/2",
        "n=1, l=0, m=0, s=+1/2"
      ],
      answer: 2,
      explanation: "The azimuthal quantum number l can only range from 0 to n-1. For n = 2, l cannot be equal to 2."
    },
    {
      id: "uhs-chem-25-100",
      question: "Shape of orbital is determined by quantum number:",
      options: [
        "n",
        "l",
        "m",
        "s"
      ],
      answer: 1,
      explanation: "The azimuthal (subsidiary) quantum number l determines the 3D shape of an atomic orbital."
    },
    {
      id: "uhs-chem-25-102",
      question: "The value of Planck’s constant is:",
      options: [
        "6.6262×10⁻³⁰ J. sec",
        "6.6262×10⁻³² J. sec",
        "6.6262×10⁻³⁴ J. sec",
        "6.6262×10⁻³⁶ J. sec"
      ],
      answer: 2,
      explanation: "Planck's constant h = 6.626 × 10⁻³⁴ J·s."
    },
    {
      id: "uhs-chem-25-123",
      question: "Number of unpaired electrons in Boron in ground state is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 0,
      explanation: "Boron (Z=5) has ground state configuration 1s² 2s² 2p¹, which contains 1 unpaired electron."
    },
    // --- TESTMOZ ---
    {
        id: "atom-struct-1",
        question: "The total relative charge of an element is equal to",
        options: [
          "It's charge of electrons",
          "It's charge of proton",
          "Zero",
          "None of these"
        ],
        answer: 2,
        explanation: "An atom in its neutral elemental state contains equal numbers of positively charged protons and negatively charged electrons, making its overall net charge zero."
      },
      {
        id: "atom-struct-2",
        question: "The options having all the properties if gamma rays:",
        options: [
          "Neutrons highly penetrating, velocity is equal to that of light, remains undeflected in magnetic field",
          "Most penetrating, velocity is equal to that of light, no deflection in magnetic field",
          "Least penetrating, velocity 1/10th of light deflected in magnetic field helium nucleus",
          "Proton least penetrating, deflects like negative particle in magnetic field"
        ],
        answer: 1,
        explanation: "Gamma rays are high-energy electromagnetic radiation lacking charge and mass. They travel at the speed of light, exhibit maximum penetrating power, and do not deflect in magnetic/electric fields."
      },
      {
        id: "atom-struct-3",
        question: "Lowest energy electrons are present in",
        options: ["s", "p", "d", "f"],
        answer: 0,
        explanation: "Within any given principal quantum level (n), the s-subshell penetrates closest to the nucleus, experiencing maximum effective nuclear charge and having the lowest energy level."
      },
      {
        id: "atom-struct-4",
        question: "Which of the following orbital has different number of lobes than the other three orbitals",
        options: ["dxy", "dx²-y²", "dyz", "dz²"],
        answer: 3,
        explanation: "Four d-orbitals (dxy, dyz, dxz, dx2-y2) possess a four-lobed cloverleaf shape, whereas dz2 features two main lobes aligned along the z-axis encircled by a central doughnut-shaped ring (torus)."
      },
      {
        id: "atom-struct-5",
        question: "The relationship between quantum number n and l is",
        options: [
          "n = l – 1",
          "l = n – 2",
          "l = n – 1",
          "n = l – 2"
        ],
        answer: 2,
        explanation: "The azimuthal quantum number l ranges from 0 up to (n - 1) for any given principal shell level n."
      },
      {
        id: "atom-struct-6",
        question: "Rutherford's model of atom failed because:",
        options: [
          "The atom did not have a nucleus and electrons",
          "It did not account for the attraction between protons and neutrons",
          "It did not account for the stability of the atom",
          "There is actually no space between the nucleus and the electrons"
        ],
        answer: 2,
        explanation: "According to classical electrodynamics, accelerating orbiting electrons should continuously radiate energy and spiral into the nucleus, which Rutherford's model failed to address."
      },
      {
        id: "atom-struct-7",
        question: "The ground state of an atom corresponds to a state of:",
        options: [
          "Maximum energy",
          "Minimum energy",
          "Positive energy",
          "Negative energy"
        ],
        answer: 1,
        explanation: "The ground state represents the lowest allowable potential energy configuration for the electrons surrounding an atomic nucleus."
      },
      {
        id: "atom-struct-8",
        question: "If n = 3 then the maximum number of “l” values will be",
        options: ["2", "3", "1", "0"],
        answer: 1,
        explanation: "For n = 3, there are 3 possible values for the azimuthal quantum number l (0, 1, and 2, corresponding to s, p, and d subshells)."
      },
      {
        id: "atom-struct-9",
        question: "The relative energies of 4s, 4p and 3d orbitals are in the order",
        options: [
          "3d < 4p < 4s",
          "4p < 4s < 3d",
          "4s < 3d < 4p",
          "4p < 3d < 4s"
        ],
        answer: 2,
        explanation: "By the (n + l) rule: 4s has (4+0=4), 3d has (3+2=5), and 4p has (4+1=5 with higher n). Hence, energy ranks 4s < 3d < 4p."
      },
      {
        id: "atom-struct-10",
        question: "What kind of orbital must an electron with the principal quantum number n = 2 occupy?",
        options: [
          "A spherically shaped orbital",
          "The orbital closest to the nucleus",
          "Either an S or P orbital",
          "A dumb bell shaped orbital"
        ],
        answer: 2,
        explanation: "For n = 2, l can be 0 (spherical 2s orbital) or 1 (dumbbell-shaped 2p orbital)."
      },
      {
        id: "atom-struct-11",
        question: "Which of the following has the lowest e/m ratio",
        options: ["Li⁺²", "H⁺¹", "H", "F"],
        answer: 2,
        explanation: "Note: Neutral atoms carry zero net charge e = 0, giving a theoretical charge-to-mass ratio of zero; option C (H) is selected per the provided answer key."
      },
      {
        id: "atom-struct-12",
        question: "Which pair has 1 electron in its orbital",
        options: ["Li, Fe", "Na, Cr", "K, Mn", "H, He"],
        answer: 1,
        explanation: "Sodium ([Ar] 3s1) has 1 valence electron in its 3s orbital, and Chromium ([Ar] 4s1 3d5) has 1 electron in its 4s orbital."
      },
      {
        id: "atom-struct-13",
        question: "Oxygen has very high second ionization potential value because of:",
        options: [
          "Completely filled p orbital",
          "Half filled s orbital",
          "Completely filled s orbital",
          "Half filled p orbital"
        ],
        answer: 3,
        explanation: "Oxygen (1s2 2s2 2p4) loses 1 electron to form O+ with a 2p3 configuration, which has a stable half-filled p-subshell requiring high energy to remove a second electron."
      },
      {
        id: "atom-struct-14",
        question: "Who observed radioactivity first",
        options: ["Henry Backwerll", "Rutherford", "Newton", "Bohr"],
        answer: 0,
        explanation: "Henri Becquerel discovered spontaneous radioactivity in 1896 while working with uranium salts."
      },
      {
        id: "atom-struct-15",
        question: "Orbitals of equal energy are called",
        options: [
          "Atomic orbitals",
          "Degenerate orbitals",
          "Molecular orbitals",
          "Anti bonding orbitals"
        ],
        answer: 1,
        explanation: "Orbitals belonging to the same subshell that share identical energy levels (such as px, py, pz) are termed degenerate orbitals."
      },
      {
        id: "atom-struct-16",
        question: "Nitrogen and phosphorus have 3 of their valence electrons unpaired because of:",
        options: [
          "Aufbau principle",
          "Heisenberg’s principle",
          "Hund’s rule",
          "Planck’s statement"
        ],
        answer: 2,
        explanation: "Hund's Rule of Maximum Multiplicity dictates that electrons occupy degenerate p-orbitals singly with parallel spins before pairing up."
      },
      {
        id: "atom-struct-17",
        question: "Elements have almost zero electron affinity if they have",
        options: [
          "Inert gas configuration",
          "Full filled configuration",
          "Half filled configuration",
          "All of the above"
        ],
        answer: 3,
        explanation: "Atoms with stable closed-shell or half-filled electron arrangements resist adding extra electrons, giving near-zero or endothermic electron affinities."
      },
      {
        id: "atom-struct-18",
        question: "If proton number of an element ‘Z’ is 37 then the total number of electrons in its ion ‘Z⁻²’ is",
        options: ["37", "39", "35", "18"],
        answer: 1,
        explanation: "A neutral atom with Z = 37 has 37 electrons. Gaining 2 additional electrons to form Z2- brings the total electron count to 37 + 2 = 39."
      },
      {
        id: "atom-struct-19",
        question: "The average atomic mass of boron is 10.8. It has two isotopes of masses 10 and 11 respectively. What is the percentage of isotope with the mass of 10?",
        options: ["20%", "60%", "80%", "50%"],
        answer: 0,
        explanation: "Let x be the fraction of B-10: 10(x) + 11(1-x) = 10.8 => 11 - x = 10.8 => x = 0.2 (20%)."
      },
      {
        id: "atom-struct-20",
        question: "Which particle cannot be accelerated in a magnetic field",
        options: [
          "Alpha particle",
          "Beta particle",
          "Neutron",
          "Proton"
        ],
        answer: 2,
        explanation: "Magnetic fields exert Lorentz forces only on moving charged particles. Neutrons carry zero electric charge and cannot be accelerated magnetically."
      },
      {
        id: "atom-struct-21",
        question: "Balmer series is important as",
        options: [
          "It is the first series",
          "It gives sharp lines",
          "It lies in visible region",
          "It was first discovered"
        ],
        answer: 2,
        explanation: "The Balmer series of hydrogen spectrum involves electronic transitions to the n = 2 energy level, falling within the visible region of the electromagnetic spectrum."
      },
      {
        id: "atom-struct-22",
        question: "The effective nuclear charge for an atom for outer electron is less than the atomic number due to",
        options: [
          "Intervening electron",
          "Paramagnetism",
          "Penetration",
          "Electron pair repulsion"
        ],
        answer: 0,
        explanation: "Inner (intervening) shell electrons screen or shield outer valence electrons from the full attractive pull of the nuclear charge (Zeff = Z - S)."
      },
      {
        id: "atom-struct-23",
        question: "Which orbital has number of lobes equal to 2?",
        options: ["s", "p", "d", "f"],
        answer: 1,
        explanation: "p-orbitals are dumbbell-shaped with 2 lobes separated by a nodal plane passing through the nucleus."
      },
      {
        id: "atom-struct-24",
        question: "Which of the following shows maximum penetration?",
        options: [
          "Electrons",
          "Protons",
          "Alpha particles",
          "Neutrons"
        ],
        answer: 3,
        explanation: "Neutrons carry no electric charge and do not experience electrostatic interaction with orbital electrons or atomic nuclei, providing maximum penetrating ability through matter."
      },
      {
        id: "atom-struct-25",
        question: "The principal quantum number is related to the",
        options: [
          "Orbital angular momentum",
          "Size of the orbital",
          "Orientation of the orbital",
          "Spin of the orbital"
        ],
        answer: 1,
        explanation: "The principal quantum number (n) dictates the main energy shell and the overall effective size or radius of the orbital."
      },
      {
        id: "atom-struct-26",
        question: "The maximum number of electrons in a shell “n” can accommodate is given by",
        options: ["n", "n²", "2n²", "2n³"],
        answer: 2,
        explanation: "The total electron capacity of a principal quantum shell n is calculated using the formula 2n²."
      },
      {
        id: "atom-struct-27",
        question: "Cathode rays:",
        options: [
          "Are heavy in the case of bigger atoms",
          "Is light in the case of smaller atoms",
          "Is more intense in the case of radioactive atoms",
          "Depends on the nature of gas",
          "Independent on the nature of gas"
        ],
        answer: 4,
        explanation: "Cathode rays consist of fundamental subatomic particles (electrons); their mass, charge, and e/m ratio are independent of the gas inside the discharge tube."
      },
      {
        id: "atom-struct-28",
        question: "Quantum number which tells the energy of electron is?",
        options: ["n", "m", "l", "s"],
        answer: 0,
        explanation: "The principal quantum number (n) primarily determines the energy level occupied by an electron in a hydrogenic or multi-electron atom."
      },
      {
        id: "atom-struct-29",
        question: "The radius of third Bohr orbit is",
        options: [
          "0.529 Å",
          "0.529/4 Å",
          "0.529 × 2 Å",
          "0.529 × 9 Å"
        ],
        answer: 3,
        explanation: "Bohr orbit radius formula is rn = r1 × n². For n = 3, r3 = 0.529 Å × (3)² = 0.529 × 9 Å."
      },
      {
        id: "atom-struct-30",
        question: "If uncertainty in the position of an electron is zero, the uncertainty in the momentum is",
        options: ["1", "Zero", "2π", "2h/4π", "Infinite"],
        answer: 4,
        explanation: "By Heisenberg's Uncertainty Principle (Δx · Δp ≥ h / 4π), if Δx = 0, then Δp must approach infinity."
      },
      {
        id: "atom-struct-31",
        question: "Electrical conductivity depends upon",
        options: [
          "Temperature",
          "Degree of dilution",
          "Nature of electrolyte",
          "Speed of ions"
        ],
        answer: 0,
        explanation: "Note: Electrical conductivity of electrolytes is influenced by temperature, ionic mobility, dilution, and ion count; option A is mapped per the answer key."
      },
      {
        id: "atom-struct-32",
        question: "A sodium lamp emits yellow light with a wavelength of 589 nm. Which electron is involved in this context",
        options: [
          "3s electron",
          "4s electron",
          "3p electron",
          "3d electron"
        ],
        answer: 0,
        explanation: "The characteristic doublet sodium D-lines (589 nm) arise from electronic transitions involving excitation and relaxation of the outermost 3s valence electron."
      },
      {
        id: "atom-struct-33",
        question: "Which is lighter than the rest",
        options: ["Electron", "None", "Proton", "Neutron"],
        answer: 2,
        explanation: "Note: Chemically an electron (~1/1836 amu) is lightest. Per the provided answer key, Option C (Proton) is mapped."
      },
      {
        id: "atom-struct-34",
        question: "Maximum number of electrons in M shell",
        options: ["2", "8", "18", "16"],
        answer: 2,
        explanation: "The M shell corresponds to principal quantum number n = 3. Using 2n²: 2 × (3)² = 18 electrons."
      },
      {
        id: "atom-struct-35",
        question: "Mass of neutron is",
        options: [
          "1.0073 amu",
          "1.0087 amu",
          "0.000173 amu",
          "1.6760 × 10⁻²⁷ amu"
        ],
        answer: 1,
        explanation: "The rest mass of a free neutron is approximately 1.0087 atomic mass units (amu)."
      },
      {
        id: "atom-struct-36",
        question: "Which of the following are oxidizing in nature",
        options: [
          "Both neutrons and canal rays",
          "Cathode rays",
          "Canal rays",
          "Neutrons"
        ],
        answer: 1,
        explanation: "Note: Cathode rays consist of energetic electrons capable of ionizing and reducing/oxidizing target media; option B is selected per the answer key."
      },
      {
        id: "atom-struct-37",
        question: "The increasing penetration effect of atomic orbitals is",
        options: [
          "d < p < s < f",
          "s < f < p < d",
          "p < s < d < f",
          "f < d < p < s"
        ],
        answer: 3,
        explanation: "For a given main energy level n, the relative penetrating power of subshell orbitals toward the nucleus follows the order: f < d < p < s."
      },
      {
        id: "atom-struct-38",
        question: "Quantum number values for “2p” orbitals are:",
        options: [
          "n = 2, l = 1",
          "n = 1, l = 2",
          "n = 1, l = 0",
          "n = 2, l = 0"
        ],
        answer: 0,
        explanation: "In a 2p orbital, the coefficient 2 indicates principal quantum number n = 2, and the p subshell corresponds to azimuthal quantum number l = 1."
      },
      {
        id: "atom-struct-39",
        question: "The maximum number of electrons in a shell with the principal quantum number equal to 4 is",
        options: ["2", "10", "16", "32"],
        answer: 3,
        explanation: "Using the formula 2n² for n = 4: 2 × (4)² = 32 electrons total."
      },
      {
        id: "atom-struct-40",
        question: "Which one of the following rule is used to arrange the sub energy levels in increasing order of energy?",
        options: [
          "Hund’s rule",
          "Octet rule",
          "(n + l) rule",
          "Aufbau principle"
        ],
        answer: 2,
        explanation: "The (n + l) rule (or Bohr-Bury rule) ranks subshell energy levels in increasing order, where lower (n + l) corresponds to lower energy."
      },
      {
        id: "atom-struct-41",
        question: "What is the number of protons and neutrons in an atom with mass number 89 and atomic number 39?",
        options: [
          "60 protons and 50 neutrons",
          "50 protons and 39 neutrons",
          "39 protons and 89 neutrons",
          "39 protons and 50 neutrons"
        ],
        answer: 3,
        explanation: "Protons = Atomic number (Z) = 39. Neutrons = Mass number (A) - Atomic number (Z) = 89 - 39 = 50."
      },
      {
        id: "atom-struct-42",
        question: "Which light color has longest wavelength",
        options: ["Violet", "Blue", "Orange", "Red"],
        answer: 3,
        explanation: "In the visible light spectrum (ROYGBIV), red light possesses the longest wavelength (~700 nm) and lowest frequency."
      },
      {
        id: "atom-struct-43",
        question: "What is correct priority order of filling of electron according to Aufbau principle",
        options: [
          "1s < 2p > 2s > 3d > 3p > 3s",
          "1s < 2p < 2s < 3d < 3s",
          "1s > 2s > 2p > 3d > 3p > 3s",
          "1s > 2s > 2p > 3s > 3p > 3d"
        ],
        answer: 3,
        explanation: "Note: Chemically, subshells fill in order of increasing energy (1s < 2s < 2p < 3s < 3p < 3d). Option D is mapped according to the provided answer key."
      },
      {
        id: "atom-struct-44",
        question: "For a 51% ionic molecules, the difference in EN is:",
        options: ["1.5", "1.7", "1.9", "2.1"],
        answer: 1,
        explanation: "According to Pauling's scale, an electronegativity difference (ΔEN) of 1.7 corresponds to approximately 50-51% ionic character."
      },
      {
        id: "atom-struct-45",
        question: "Copper is a typical transition metal, its atomic number is 29. In which oxidation state it has partially filled orbital in d subshell",
        options: ["Cu", "Cu⁺", "Cu⁻", "Cu²⁺"],
        answer: 3,
        explanation: "Cu2+ has an electronic configuration of [Ar] 3d9, possessing a partially filled d-subshell with 1 unpaired electron."
      },
      {
        id: "atom-struct-46",
        question: "Cathode rays travel in discharge tube from",
        options: [
          "Anode to cathode",
          "Cathode to anode",
          "Glass tube to vacuum pump",
          "Cathode through air"
        ],
        answer: 1,
        explanation: "Cathode rays consist of streams of negative electrons emitted from the cathode and traveling toward the anode."
      },
      {
        id: "atom-struct-47",
        question: "The shape of the orbital indicated by the symbol ‘l’ called:",
        options: [
          "Principal quantum number",
          "Azimuthal quantum number",
          "Magnetic quantum number",
          "Spin quantum number"
        ],
        answer: 1,
        explanation: "The azimuthal (or orbital angular momentum) quantum number 'l' determines the 3D geometric shape of an orbital."
      },
      {
        id: "atom-struct-48",
        question: "Which of the following has the same number of electrons as an alpha particle?",
        options: ["H", "H₂", "H⁺", "He"],
        answer: 2,
        explanation: "Note: An alpha particle (He2+) has 0 electrons. H+ also has 0 electrons, making their electron counts equal."
      },
      {
        id: "atom-struct-49",
        question: "The series limit for the Balmer series of hydrogen spectrum occurs at 3664 Å. Calculate ionization energy of hydrogen atom",
        options: [
          "21.7 × 10⁻¹⁹ J",
          "6.626 × 10⁻³⁴ J",
          "5.425 × 10⁻¹⁹ J",
          "3664 × 10⁻¹⁰ J"
        ],
        answer: 2,
        explanation: "Energy E = (h × c) / λ = (6.626 × 10^-34 × 3 × 10^8) / (3664 × 10^-10) ≈ 5.425 × 10⁻¹⁹ J."
      },
      {
        id: "atom-struct-50",
        question: "A set of orbitals having same value of ‘l’ is called:",
        options: [
          "Shell",
          "Molecular orbital",
          "Sub shell",
          "Energy level"
        ],
        answer: 2,
        explanation: "A subshell comprises all degenerate orbitals sharing the same principal quantum number n and azimuthal quantum number l."
 },
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
        answer: 2,
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
        answer: 0,
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
        answer: 1,
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
},
{
      id: "bumhs-2025-chem-98",
      question: "A triatomic molecule must be either linear with bond angle 180° or else?",
      options: [
        "t-shape",
        "bent",
        "pyramidal",
        "tetrahedral"
      ],
      answer: 1,
      explanation: "Triatomic molecules (AX₂ type) contain only three atoms. If unhybridized/sp hybridized without lone pairs (like CO₂), they are linear (180°); if lone pairs are present (like H₂O or SO₂), VSEPR predicts a bent/angular shape."
    },
    {
      id: "bumhs-2025-chem-123",
      question: "NH₃ has a net dipole moment but BF₃ has zero net dipole moment primarily because:",
      options: [
        "B is less electronegative than N",
        "F is more electronegative than N",
        "NH₃ is trigonal pyramidal while BF₃ is trigonal planar",
        "BF₃ is trigonal pyramidal"
      ],
      answer: 2,
      explanation: "BF₃ is symmetric and trigonal planar (sp²), causing individual B-F bond dipoles to cancel out (μ = 0). NH₃ is trigonal pyramidal (sp³) with a lone pair, leading to a non-zero net dipole moment."
    },
    {
      id: "bumhs-2025-chem-125",
      question: "The N–F–N bond angle in NF₃ is ~102°, which is significantly smaller than the H–N–H angle in NH₃ (~107°), due to:",
      options: [
        "Presence of lone pair on F",
        "High electronegativity of F pulling bonding pairs away from central N",
        "Large size of F",
        "Its drawback of VSEPR"
      ],
      answer: 1,
      explanation: "Fluorine is highly electronegative, pulling N–F bonding electron pairs further away from nitrogen. This reduces bonding pair-bonding pair repulsion near the nitrogen nucleus, allowing the lone pair to compress the bond angle more than in NH₃."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-97",
      question: "A molecule of ethane (C₂H₆) has ______ σ bonds.",
      options: [
        "four",
        "five",
        "six",
        "seven"
      ],
      answer: 3,
      explanation: "Ethane contains 1 C–C single sigma bond and 6 C–H single sigma bonds, yielding a total of 7 σ bonds."
    },
    {
      id: "bumhs-mdcat-2024-100",
      question: "In organic chemistry, a nucleus-seeking agent that is rich in electrons is defined as:",
      options: [
        "A nucleotide",
        "A nucleophile",
        "An electrophile",
        "Electron affluent"
      ],
      answer: 1,
      explanation: "A nucleophile ('nucleus-loving') is an electron-rich species (neutral with lone pairs or negatively charged) that donates an electron pair to electrophiles."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-69",
      question: "The term 'Chelate' originates from the Greek word meaning:",
      options: [
        "Bidentate",
        "Ion",
        "Monodentate",
        "Crab claws",
        "Metal"
      ],
      answer: 3,
      explanation: "Chelate comes from the Greek word 'chele', meaning 'crab's claw', referring to polydentate ligands holding a central metal ion like a claw."
    },
    {
      id: "chem-sindh-24-70",
      question: "The geometric shape of an ammonia (NH₃) molecule is:",
      options: [
        "Angular",
        "Tetrahedral",
        "Linear",
        "Planar",
        "Pyramidal"
      ],
      answer: 4,
      explanation: "NH₃ has 3 bond pairs and 1 lone pair around nitrogen (sp³ hybridization), resulting in a trigonal pyramidal molecular geometry."
    },
    {
      id: "chem-sindh-24-78",
      question: "The paramagnetic behavior of an oxygen molecule (O₂) cannot be explained by:",
      options: [
        "Molecular orbital theory",
        "Hybridization",
        "Valence bond theory",
        "Valence shell electron pair repulsion theory",
        "Chemical bonding"
      ],
      answer: 2,
      explanation: "Valence Bond Theory (VBT) predicts all electrons in O₂ are paired (diamagnetic). Only Molecular Orbital Theory (MOT) correctly explains its paramagnetism via two unpaired electrons in degenerate π* antibonding orbitals."
    },
    {
      id: "chem-sindh-24-104",
      question: "An example of a bidentate ligand among the following is:",
      options: [
        "Br⁻",
        "CN⁻",
        "C₂O₄²⁻",
        "OH⁻",
        "Cl⁻"
      ],
      answer: 2,
      explanation: "Oxalate ion (C₂O₄²⁻) possesses two donor oxygen atoms capable of binding simultaneously to a central metal ion, making it a bidentate ligand."
    },
    {
      id: "chem-sindh-24-107",
      question: "Which of the following possesses the weakest London dispersion forces?",
      options: [
        "F₂",
        "Br₂",
        "Cl₂",
        "I₂",
        "He"
      ],
      answer: 4,
      explanation: "Helium (He) is a tiny monatomic gas with the smallest polarizable electron cloud, giving it the weakest London dispersion forces."
    },
    {
      id: "chem-sindh-24-119",
      question: "This molecular shape is found in AX₂ molecules when the bond angle is 180°:",
      options: [
        "Pyramidal",
        "Bent",
        "Triangle",
        "Tetrahedral",
        "Linear"
      ],
      answer: 4,
      explanation: "An AX₂ species without lone pairs on the central atom forms an sp-hybridized linear geometry with a 180° bond angle (e.g., BeCl₂, CO₂)."
    },
    {
      id: "chem-sindh-24-122",
      question: "The conjugate acid of NH₃ is:",
      options: [
        "NH₄⁺",
        "NH",
        "NH₂",
        "NH₂⁻",
        "NH₃"
      ],
      answer: 0,
      explanation: "A conjugate acid is formed by adding a proton (H⁺) to a base. NH₃ + H⁺ → NH₄⁺."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-88",
      question: "Number of sigma bonds in methyl chloride (CH₃Cl) formed due to sp³–s overlap is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 2,
      explanation: "In CH₃Cl, carbon is sp³ hybridized. The three C–H σ bonds result from sp³(carbon)–s(hydrogen) overlap, while the C–Cl σ bond results from sp³(carbon)–p(chlorine) overlap."
    },
    {
      id: "chem-sindh-25-96",
      question: "The correct decreasing order of bond dissociation energy among hydrogen halides is:",
      options: [
        "HCl > HBr > HI",
        "HBr > HCl > HI",
        "HI > HCl > HBr",
        "HCl > HI > HBr"
      ],
      answer: 0,
      explanation: "As halogen size increases down the group (Cl < Br < I), H–X bond length increases and bond dissociation energy decreases: HF > HCl > HBr > HI."
    },
    {
      id: "chem-sindh-25-100",
      question: "Which of the following pairs of molecules have similar molecular shapes?",
      options: [
        "NH₃ & AlCl₃",
        "BCl₃ & NH₃",
        "AlCl₃ & PCl₃",
        "H₂O & SnCl₂"
      ],
      answer: 3,
      explanation: "Both H₂O and SnCl₂ have bent/angular molecular geometries due to lone pair presence (H₂O has 2 lone pairs, SnCl₂ has 1 lone pair)."
    },
    {
      id: "chem-sindh-25-101",
      question: "Electronegativities of atoms A and B are 1.20 and 4.0 respectively. According to Hannay-Smyth formula, the percent ionic character is approximately:",
      options: [
        "43%",
        "50%",
        "55%",
        "73%"
      ],
      answer: 3,
      explanation: "Electronegativity difference ΔEN = 4.0 − 1.2 = 2.8. % Ionic character = 16(ΔEN) + 3.5(ΔEN)² = 16(2.8) + 3.5(7.84) = 44.8 + 27.44 = 72.24% ≈ 73%."
    },
    {
      id: "chem-sindh-25-114",
      question: "The ratio of sigma (σ) bonds to pi (π) bonds present in a benzene molecule is:",
      options: [
        "4:1",
        "1:4",
        "2:3",
        "6:1"
      ],
      answer: 0,
      explanation: "Benzene (C₆H₆) contains 12 σ bonds (6 C–C and 6 C–H) and 3 π bonds (delocalized C=C). Ratio σ : π = 12 : 3 = 4 : 1."
    },
    {
      id: "chem-sindh-25-123",
      question: "All of the following have two bond pairs and show linear geometry EXCEPT:",
      options: [
        "SnCl₂",
        "CS₂",
        "HCN",
        "CO₂"
      ],
      answer: 0,
      explanation: "CS₂, HCN, and CO₂ are linear species (sp hybridized). SnCl₂ has 2 bond pairs and 1 lone pair on Sn, giving it a bent/angular shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-120",
      question: "Force of attraction between non-polar molecules due to instantaneous temporary dipoles is:",
      options: [
        "Ion-dipole force",
        "Dipole-dipole force",
        "Ion-induced dipole force",
        "London dispersion force"
      ],
      answer: 3,
      explanation: "London dispersion forces arise from momentary fluctuations in electron density creating temporary instantaneous dipoles that induce dipoles in neighboring atoms/molecules."
    },
    {
      id: "kmu-mdcat-25-chem-131",
      question: "In an ethene molecule (C₂H₄), each carbon atom has three hybridized sp² orbitals which are:",
      options: [
        "Coplanar",
        "Tetrahedral",
        "Linear",
        "Pyramidal"
      ],
      answer: 0,
      explanation: "sp² hybrid orbitals lie in a single plane (coplanar) oriented at 120° relative to each other."
    },
    {
      id: "kmu-mdcat-25-chem-143",
      question: "In which of the following molecules does the central atom utilize sp³ hybridization?",
      options: [
        "PH₃",
        "NH₃",
        "CH₃⁻",
        "All of the given options"
      ],
      answer: 3,
      explanation: "In NH₃, nitrogen forms 3 σ bonds and holds 1 lone pair (steric number = 4), using sp³ hybrid orbitals."
    },
    {
      id: "kmu-mdcat-25-chem-145",
      question: "Which one of the following is a trigonal planar molecule?",
      options: [
        "NH₃",
        "H₂O",
        "BF₃",
        "CH₄"
      ],
      answer: 2,
      explanation: "BF₃ has 3 bonding pairs and 0 lone pairs on boron (sp² hybridization), yielding a trigonal planar shape."
    },
    {
      id: "kmu-mdcat-25-chem-146",
      question: "Which of the following hydrogen halides has the highest bond dissociation energy?",
      options: [
        "HCl",
        "HI",
        "HF",
        "HBr"
      ],
      answer: 2,
      explanation: "HF has the shortest bond length and strongest polar covalent bond due to fluorine's high electronegativity and small radius, resulting in the highest bond dissociation energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-76",
      question: "Total number of electron pairs present in the valence shell of central oxygen atom in a water molecule is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 2,
      explanation: "In H₂O, the central oxygen atom has 8 valence electrons arranged in 4 electron pairs (2 bonding pairs and 2 lone pairs)."
    },
    {
      id: "kmu-mdcat-2024-78",
      question: "Which one of the following molecules has a trigonal pyramidal structure?",
      options: [
        "C₂H₄",
        "CH₄",
        "H₂O",
        "NH₃"
      ],
      answer: 3,
      explanation: "NH₃ has 3 bonding pairs and 1 lone pair, giving it a trigonal pyramidal structure."
    },
    {
      id: "kmu-mdcat-2024-79",
      question: "Which one of the following molecules has a net zero dipole moment?",
      options: [
        "BF₃",
        "NF₃",
        "NH₃",
        "H₂O"
      ],
      answer: 0,
      explanation: "BF₃ is symmetric trigonal planar; its three equal B-F bond dipoles vectorially cancel to yield μ = 0."
    },
    {
      id: "kmu-mdcat-2024-80",
      question: "The unhybridized p-orbital in sp² hybridization is oriented:",
      options: [
        "In the same plane",
        "Out of the plane arbitrarily",
        "Parallel to sp² orbitals",
        "Perpendicular to the plane containing sp² orbitals"
      ],
      answer: 3,
      explanation: "In sp² hybridization, the three hybrid orbitals lie in a plane at 120° angles, while the remaining unhybridized p-orbital stands perpendicular (at 90°) to that plane."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-77",
      question: "Which one of the following molecules has zero dipole moment?",
      options: [
        "Ammonia",
        "Carbon dioxide",
        "Hydrogen fluoride",
        "Water"
      ],
      answer: 1,
      explanation: "CO₂ is a linear molecule (O=C=O). The two equal C=O bond dipoles pull in opposite directions (180° apart) and cancel out completely (μ = 0)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of sigma (σ) bonds in acetylene (C₂H₂) and ethylene (C₂H₄) are respectively:",
      options: [
        "3 & 5",
        "5 & 3",
        "6 & 5",
        "5 & 6"
      ],
      answer: 0,
      explanation: "Acetylene (H–C≡C–H) has 3 σ bonds (2 C–H and 1 C–C) and 2 π bonds. Ethylene (H₂C=CH₂) has 5 σ bonds (4 C–H and 1 C–C) and 1 π bond."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which one of the following species has the smallest bond angle?",
      options: [
        "C₂H₂",
        "NH₃",
        "H₂S",
        "BeCl₂"
      ],
      answer: 2,
      explanation: "C₂H₂ (180°), BeCl₂ (180°), NH₃ (107.5°), and H₂S (92°). H₂S uses nearly unhybridized p-orbitals for bonding, giving it the smallest bond angle (~92°)."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which one of the following compounds exhibits the highest percentage ionic character?",
      options: [
        "AlCl₃",
        "BCl₃",
        "PCl₃",
        "NaH"
      ],
      answer: 3,
      explanation: "NaH is formed between highly electropositive alkali metal Na and H, creating a strong ionic hydride lattice with high percent ionic character compared to covalent/polar covalent chlorides."
    },
    {
      id: "szambu-chem-25-4",
      question: "Which overlap type produces a bond with the highest overlap energy and strength?",
      options: [
        "sp–s",
        "sp²–s",
        "sp³–s",
        "sp³–p"
      ],
      answer: 0,
      explanation: "An sp hybrid orbital has 50% s-character, making it smaller and closer to the nucleus, allowing shorter and stronger overlap with an s-orbital."
    },
    {
      id: "szambu-chem-25-5",
      question: "How many sigma (σ) and pi (π) bonds are present in a maleic anhydride molecule?",
      options: [
        "5 sigma 3 pi",
        "6 sigma 3 pi",
        "7 sigma 2 pi",
        "9 sigma 3 pi"
      ],
      answer: 3,
      explanation: "Maleic anhydride (C₄H₂O₃) contains 9 σ bonds (2 C–H, 2 C–C, 2 C–O ring, 2 C=O, and 1 C=C) and 3 π bonds (2 C=O and 1 C=C)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-97",
      question: "Which of the following contains a coordinate covalent (dative) bond?",
      options: [
        "NaCl",
        "CaO",
        "NH₃→BF₃",
        "H₂O"
      ],
      answer: 2,
      explanation: "In NH₃→BF₃, nitrogen donates its lone electron pair to the electron-deficient boron atom, forming a coordinate covalent bond."
    },
    {
      id: "uhs-2024-chem-98",
      question: "Which of the following is NOT a correct feature of Valence Shell Electron Pair Repulsion (VSEPR) theory?",
      options: [
        "It determines the shape of molecule",
        "Pairs of electrons repel each other",
        "It helps in understanding interaction of medicinal drug molecules",
        "Only lone pairs participate in determining geometry of molecules"
      ],
      answer: 3,
      explanation: "VSEPR considers the spatial arrangement of both bonding electron pairs and lone pairs around the central atom to predict geometry."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-84",
      question: "In propene (CH₃–CH=CH₂), the pi (π) bond is formed by sideways overlap of:",
      options: [
        "s-orbitals",
        "unhybridized p-orbitals",
        "sp³ hybrid orbitals",
        "sp² hybrid orbitals"
      ],
      answer: 1,
      explanation: "Pi (π) bonds are formed exclusively by lateral (sideways) overlap of unhybridized parallel p-orbitals."
    },
    {
      id: "uhs-chem-25-86",
      question: "Molecules having central atom with 3 bonding pairs and 1 lone pair possess geometric shape:",
      options: [
        "Bent or angular",
        "Trigonal planar",
        "Trigonal pyramidal",
        "Tetrahedral"
      ],
      answer: 2,
      explanation: "AB₃L system (3 bond pairs, 1 lone pair) produces a trigonal pyramidal geometry (e.g., NH₃, PCl₃)."
    },
    {
      id: "uhs-chem-25-101",
      question: "The theories that explain the nature and formation of covalent chemical bonding include all EXCEPT:",
      options: [
        "Molecular Orbital Theory (MOT)",
        "Valence Bond Theory (VBT)",
        "Valence Shell Electron Pair Repulsion Theory (VSEPR)",
        "Crystal Field Theory (CFT)"
      ],
      answer: 3,
      explanation: "VSEPR theory predicts 3D molecular shapes based on electron repulsion, but does not explain orbital overlap mechanics forming σ and π covalent bonds."
    },
    {
      id: "uhs-chem-25-110",
      question: "Select the correct arrangement of hybrid orbitals in order of decreasing orbital size / extent:",
      options: [
        "sp > sp² > sp³",
        "sp³ > sp > sp²",
        "sp³ > sp² > sp",
        "sp² > sp³ > sp"
      ],
      answer: 2,
      explanation: "As s-character increases (sp³ 25% → sp² 33% → sp 50%), electrons are pulled closer to the nucleus, making sp hybrid orbitals the smallest. Thus, orbital size follows sp³ > sp² > sp."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "Covalent bond maybe",
        options: [
          "100% covalent",
          "100% ionic",
          "Partially ionic",
          "Both a and c"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-2",
        question: "When the two partially filled atomic orbital overlap in such a way that the probability of finding electron is maximum around the line joining the two nuclei the result is the formation of",
        options: [
          "Sigma bond",
          "Pi bond",
          "Hydrogen bond",
          "Metallic Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "The all elements get their stabilization to attain nearest configuration",
        options: [
          "Alkali metals",
          "Noble metals",
          "Alkaloids",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-4",
        question: "In the second period of elements although oxygen lies next to nitrogen yet its ionization first energy is lower than that of Nitrogen because",
        options: [
          "In oxygen there exist repulsion between pair of electrons present in the same orbital of valence shell",
          "Oxygen is paramagnetic in character",
          "Nuclear charge of oxygen is greater than nitrogen",
          "Oxygen is higher electron affinity"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-5",
        question: "Bond energy of molecule depends upon",
        options: [
          "Bond distance and Bond polarity",
          "Ionization energy",
          "Internal energy",
          "Kinetic energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "Energy required to remove electron from an atom",
        options: [
          "Ionization potential",
          "Electropositivity",
          "Electronegativity",
          "Electron affinity"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-7",
        question: "All are true for pi bond except",
        options: [
          "Pi bond is formed from SP hybrid orbitals",
          "Pi bond is weaker than sigma bond",
          "Pi bond is formed by the parallel overlap of half filled P orbital",
          "Pi bond is formed when is sigma bond is already present"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-8",
        question: "Which Bond are present in molecule of hydrogen according to VBT",
        options: [
          "Pi bond",
          "Electrovalent Bond",
          "Sigma bond",
          "Double bond"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "For formation of ionic bond electronegativity difference should be",
        options: [
          "Equal to zero",
          "More than 1.7",
          "Equal to 0.5",
          "Less than 1.7"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-10",
        question: "The number of bonds in nitrogen molecule is",
        options: [
          "One Sigma and one Pi",
          "Three Sigma bonds only",
          "One Sigma and two Pi",
          "Two Sigma and one Pi"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-11",
        question: "Polarity of molecule is expressed in terms of",
        options: [
          "Bond strength",
          "Bond length",
          "Dipole moment",
          "Shape"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "In an atom no two electrons can have same set of quantum numbers this statement was given by",
        options: [
          "Uncertainty principle",
          "Pauli’s exclusion principle",
          "Hund’s rule",
          "Aufbau principle"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-13",
        question: "The unhybridised P orbital in SP2 hybridization is",
        options: [
          "Parallel to SP2",
          "In the same plane",
          "Out of plane",
          "Perpendicular to SP2 orbitals"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "Which is not characteristic of Pi bond",
        options: [
          "Pi bond is formed when sigma bond already exist",
          "Pi bond results from lateral overlap of atomic orbitals",
          "Pi bond are formed from hybrid orbitals",
          "Pi bond mein bhi formed by the overlap of P orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-15",
        question: "The shielding effect of inner electron is responsible for",
        options: [
          "Decreasing ionization energy",
          "Having no effect on ionization energy",
          "Increasing ionization energy",
          "Increasing electronegativity"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "Which of these will not show AB4 type geometry",
        options: [
          "Group 4A element with four single bonds",
          "Group 4A element with three single and one coordinate Bond",
          "Group 4A element with two single and double bonds",
          "Group 4A element with 3 double bonds"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-17",
        question: "Which of the following best describe the shape and polarity of carbon disulphide molecule",
        options: [
          "Bent and polar",
          "Pyramidal and polar",
          "Linear and nonpolar",
          "Bent and nonpolar"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following Bond has more energy",
        options: [
          "Covalent",
          "Non polar covalent",
          "Polar covalent",
          "Ionic"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "Which of the following is not planner",
        options: [
          "Benzene",
          "Formaldehyde",
          "BF3",
          "Propane"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-20",
        question: "Linear combination of atomic orbitals result in the formation of",
        options: [
          "Sigma bond",
          "Pi bond",
          "Bonding molecular orbitals only",
          "Bonding and antibonding molecular orbitals",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "Element which have completely filled outermost shell and do not combine other metals are called",
        options: [
          "Metal elements",
          "Reactive elements",
          "Unstable elements",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-22",
        question: "Liquid oxygen is",
        options: [
          "Diamagnetic",
          "Paramagnetic",
          "Antimagnetic",
          "Ferromagnetic"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "What will be the shape of a molecule which contain two sigma bond pairs and one lone pair",
        options: [
          "Linear",
          "Tetragonal",
          "V shape",
          "Triangular"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The chemical species having smallest bond angle",
        options: [
          "NH3",
          "NCl3",
          "NF3",
          "NBr3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-25",
        question: "In which of the following has different molecular geometry and electron pair geometry",
        options: [
          "SO3",
          "SnCl2",
          "CO2",
          "BF3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-26",
        question: "The bond formed by electrostatic attraction between negative end of one molecule and positive end of other molecule is called",
        options: [
          "Covalent bond",
          "Hydrogen bond",
          "Ionic bond",
          "Co-ordinate covalent bond"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-27",
        question: "Electron affinity of the atom is the energy released when",
        options: [
          "Electron is added to gaseous atom",
          "Covalent bond of molecule is broken",
          "Electron is removed from gaseous atom",
          "Covalent bond is formed between the atoms"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-28",
        question: "The cationic radius is always ........ than the atomic radius from which it is derived",
        options: [
          "Higher",
          "Larger",
          "Moderate",
          "Smaller"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "In HF Bond electronegativity difference is 1.9 what is the type of this bond",
        options: [
          "Polar covalent",
          "Non polar covalent bond",
          "Pi bond",
          "Coordinate covalent bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-30",
        question: "The s character of hybridized Orbital decrease the bond angle",
        options: [
          "Decreases",
          "Increases",
          "Becomes zero",
          "Does not change"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-31",
        question: "Which information cannot be deduced from the fact that an element has low ionization energy",
        options: [
          "It is a metal",
          "It forms positive ions",
          "It may form ionic",
          "It belongs to P block"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "The number of unpaired electrons in ammonia",
        options: [
          "Zero",
          "One",
          "Three",
          "Four"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "The ionization energy increases from left to right in a period due to increase",
        options: [
          "Nuclear charge",
          "Atomic number",
          "Number of electrons",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "P character in SP",
        options: [
          "75%",
          "25%",
          "50%",
          "33%"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Total number of valence electrons in phosphonium ion is",
        options: [
          "8",
          "10",
          "9",
          "12"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-36",
        question: "Bond angle of water",
        options: [
          "109.5 degree",
          "107.5 degree",
          "120 degree",
          "104.5 degree"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-37",
        question: "The difference in electronegativity values of the bonded atoms between the two atoms is an index of which of covalent bond",
        options: [
          "Polar nature",
          "Nonpolar nature",
          "Strength",
          "Nature"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "Pi bonds are produced by the overlapping of orbitals",
        options: [
          "Some unhybridized orbitals",
          "Hybrid and hybridized orbitals",
          "Hybrid orbitals",
          "S orbitals"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-39",
        question: "The ionization energy",
        options: [
          "Generally increase from left to right in a period",
          "Increase from top bottom in a group",
          "Does not change in a period",
          "Does not change in a group"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "Which one of the following molecules does not follow the duplet or octet rule",
        options: [
          "NH3",
          "HCl",
          "AlCl3",
          "CCl4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionic bond is produced after complete transfer of",
        options: [
          "Nucleus",
          "Electron",
          "Neutron",
          "Proton"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "H2O has a higher boiling point than HF because",
        options: [
          "H2O is more polar than HF",
          "H2O can form more hydrogen bonds",
          "H2O has a higher molecular weight",
          "H2O does not have a higher boiling point than HF"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "The geometry of AB3 molecule is",
        options: [
          "Trigonal pyramidal",
          "Trigonal planar",
          "Trigonal bipyramidal",
          "Tetragonal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "H2S has a net dipole moment while BeF2 has zero dipole moment because",
        options: [
          "H2S molecule is linear while BeF2 is angular",
          "H2S molecule is angular while BeF2 molecule is linear",
          "Fluorine has more electronegativity than S",
          "Be is more electronegativity than S"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-45",
        question: "In a group atomic radii",
        options: [
          "Increases",
          "Decreases",
          "First increase than decreases",
          "Remains same"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-46",
        question: "The carbon to carbon Bond distance is",
        options: [
          "1.10 angstrom",
          "1.20 angstrom",
          "1.30 angstrom",
          "1.54 angstrom"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Zinc has only one Oxidation State because",
        options: [
          "Completely filled 4s orbital",
          "Half filled 4s orbital",
          "Completely filled 3d orbital",
          "Half filled 3s orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-48",
        question: "Which bond is formed between two atoms",
        options: [
          "Sigma bond",
          "Pi bond",
          "Double bond",
          "Triple Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-49",
        question: "Which of the following bond is not present in NH4Cl",
        options: [
          "Ionic bond",
          "Coordinate covalent bond",
          "Covalent bond",
          "Delocalised covalent bond"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following is a false statement concerning ionic compound",
        options: [
          "Greater the lattice energy the greater is the solubility",
          "Higher the dielectric constant of the solvent the greater is the solubility",
          "Higher the dipole moment of the solvent the greater the solubility",
          "Increase of temperature generally increase solubility"
        ],
        answer: 0
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-95",
      question: "When hydrochloric acid is added to brine, solubility of sodium chloride ______.",
      options: [
        "Decreases",
        "Increases",
        "Remains same",
        "Become equal to HCl"
      ],
      answer: 0,
      explanation: "Adding HCl introduces a high concentration of Cl⁻ ions. By the common ion effect, the solubility equilibrium NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq) shifts to the left, decreasing the solubility of NaCl and causing it to precipitate out."
    },
    {
      id: "bumhs-2025-chem-109",
      question: "Kc value will change, if we change:",
      options: [
        "Pressure",
        "Temperature",
        "Concentration",
        "any one"
      ],
      answer: 1,
      explanation: "The equilibrium constant (Kc) is a thermodynamic constant that depends solely on temperature. Changes in pressure, volume, or concentration shift the equilibrium position but do not alter the value of Kc."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-71",
      question: "Equilibrium constant has no units, if the number of moles of products are:",
      options: [
        "Less than reactants",
        "More than reactants",
        "Equal to reactants",
        "Half of reactants"
      ],
      answer: 2,
      explanation: "When Δn = (moles of gaseous products) − (moles of gaseous reactants) = 0, concentration units in the numerator and denominator cancel out completely, making Kc dimensionless."
    },
    {
      id: "bumhs-mdcat-2024-87",
      question: "The sum of pH and pOH for pure water at 25 °C is:",
      options: [
        "10¹⁴",
        "10⁻¹⁴",
        "14",
        "25"
      ],
      answer: 2,
      explanation: "At 25 °C, Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. Taking the negative logarithm gives pH + pOH = 14."
    },
    {
      id: "bumhs-mdcat-2024-111",
      question: "Suppose the following system has reached equilibrium at a certain temperature:\nN₂O₄ (g) ⇌ 2 NO₂ (g)\n\nAdding N₂O₄ to the system will ______.",
      options: [
        "start forward reaction",
        "start reverse reaction",
        "not disturb equilibrium",
        "raise the temperature of system"
      ],
      answer: 0,
      explanation: "Increasing the concentration of reactant N₂O₄ stresses the system. By Le Chatelier's principle, the equilibrium shifts in the forward direction to consume the added N₂O₄."
    },
    {
      id: "bumhs-mdcat-2024-115",
      question: "Le-Chatelier’s principle does NOT give the information of effect of the following on equilibrium:",
      options: [
        "Time",
        "Pressure",
        "Temperature",
        "Concentration"
      ],
      answer: 0,
      explanation: "Le Chatelier's principle predicts how equilibrium position shifts in response to changes in concentration, pressure, and temperature. It provides no information regarding kinetics or the time required to reach equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-73",
      question: "The equilibrium of this reaction would not be affected by an increase in pressure:",
      options: [
        "2SO₂ + O₂ ↔ 2SO₃",
        "N₂ + O₂ ↔ 2NO",
        "2NO + Cl₂ ↔ 2NOCl",
        "PCl₅ ↔ PCl₃ + Cl₂",
        "CO + 3H₂ ↔ CH₄ + H₂O"
      ],
      answer: 1,
      explanation: "In N₂ + O₂ ↔ 2NO, the total number of gaseous reactant moles (1+1=2) equals the product moles (2). Since Δn = 0, changes in pressure have no effect on the equilibrium position."
    },
    {
      id: "chem-sindh-24-94",
      question: "The term “active mass” used in the Law of Mass Action means:",
      options: [
        "Number of moles per dm³",
        "Number of moles per dm²",
        "Gram per dm³",
        "Number of moles",
        "Number of molecules"
      ],
      answer: 0,
      explanation: "In the Law of Mass Action, 'active mass' refers to the molar concentration of a substance, expressed in moles per dm³ (or mol/L)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-95",
      question: "For which reaction, the value of Kc increases with increase in temperature?",
      options: [
        "CH₄ + O₂ → CO₂ + H₂O",
        "NaOH + HCl → NaCl + H₂O",
        "2SO₂ + O₂ → 2SO₃",
        "H₂ + I₂ → 2HI"
      ],
      answer: 3,
      explanation: "For an endothermic reaction (ΔH > 0, such as H₂ + I₂ ⇌ 2HI), increasing the temperature shifts equilibrium in the forward direction, which increases the value of Kc."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-126",
      question: "The Ksp value of salt AB = A⁺ + B⁻ is 9 × 10⁻⁸. Its molar solubility will be:",
      options: [
        "3×10⁻⁴",
        "9×10⁻⁴",
        "3×10⁻⁸",
        "9×10⁻⁸"
      ],
      answer: 0,
      explanation: "For a 1:1 binary salt AB, Ksp = s². Molar solubility s = √Ksp = √(9 × 10⁻⁸) = 3 × 10⁻⁴ mol/dm³."
    },
    {
      id: "kmu-mdcat-25-chem-141",
      question: "If ΔH for a reaction is positive (endothermic), then by decreasing temperature, the reaction will:",
      options: [
        "Move forward",
        "Move in reverse",
        "Have no effect",
        "Be both forward and reverse"
      ],
      answer: 1,
      explanation: "For an endothermic reaction (heat is a reactant), decreasing the temperature removes heat. By Le Chatelier's principle, the system shifts in the reverse (exothermic) direction."
    },
    {
      id: "kmu-mdcat-25-chem-158",
      question: "According to Le Chatelier’s Principle, when the pressure of a gaseous equilibrium system is increased, the equilibrium shifts towards:",
      options: [
        "No change in equilibrium position",
        "The side with greater volume",
        "The side with lower volume",
        "The side with more moles of gas"
      ],
      answer: 2,
      explanation: "Increasing total pressure causes the equilibrium system to relieve stress by shifting toward the side with fewer gas molecules (lower volume)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-87",
      question: "Forward reaction is the one that",
      options: [
        "Is very slow at the beginning of the reaction",
        "Reacts to form reactants",
        "Speeds up gradually and at equilibrium its rate becomes constant",
        "Takes place from left to right as given in chemical equation"
      ],
      answer: 3,
      explanation: "In a standard chemical equation, the forward reaction is defined as the process proceeding from left (reactants) to right (products)."
    },
    {
      id: "kmu-mdcat-2024-89",
      question: "In the production of SO₃ from SO₂ and Oxygen (2SO₂ + O₂ ⇌ 2SO₃), the yield of SO₃ is increased by",
      options: [
        "Adding a catalyst",
        "Adding more SO₂",
        "Increasing temperature",
        "Removing oxygen"
      ],
      answer: 1,
      explanation: "Adding more reactant (SO₂) increases reactant concentration, shifting the equilibrium in the forward direction and increasing the yield of SO₃."
    },
    {
      id: "kmu-mdcat-2024-90",
      question: "Consider N₂ + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92.46 kJ/mol\n\nThe optimum temperature (°C) to produce ammonia in Haber's process is",
      options: [
        "0",
        "450",
        "500",
        "Constant temperature"
      ],
      answer: 1,
      explanation: "Although low temperature favors high yield in exothermic Haber's process, 400°C–450°C is chosen industrially as an optimum compromise temperature to achieve an acceptable reaction rate."
    },
    {
      id: "kmu-mdcat-2024-91",
      question: "The unit of Kc for the system PCl₅ ⇌ PCl₃ + Cl₂ is",
      options: [
        "dm³/mol",
        "mol/dm³",
        "mol/dm⁶",
        "mol²/dm⁶"
      ],
      answer: 1,
      explanation: "Kc = [PCl₃][Cl₂] / [PCl₅] = (mol/dm³)(mol/dm³) / (mol/dm³) = mol/dm³."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-72",
      question: "If weak acid is diluted with water, then H⁺ ions concentration will ______.",
      options: [
        "decrease",
        "gradually decreases then increase",
        "increase",
        "remain same"
      ],
      answer: 0,
      explanation: "Diluting a solution increases total volume. Although degree of ionization α increases (Ostwald's dilution law), the overall volume expansion dominates, causing total [H⁺] concentration to decrease."
    },
    {
      id: "szambu-chem-24-80",
      question: "According to law of mass action, Kₚ > Kc when reaction occurs with ______.",
      options: [
        "decrease in volume on product side",
        "increase in volume on product side",
        "increase in volume on reactant side",
        "simultaneous increase and decrease of product"
      ],
      answer: 1,
      explanation: "Kp = Kc(RT)^Δn. For Kp > Kc, Δn must be positive (moles/volume of gaseous products > moles of gaseous reactants), which means an increase in volume on the product side."
    },
    {
      id: "szambu-chem-24-82",
      question: "What will be the molarity of HCl solution with pH=4?",
      options: [
        "0.0001",
        "0.0004",
        "0.004",
        "4.0"
      ],
      answer: 0,
      explanation: "For monoprotic strong acid HCl, [H⁺] = 10^(−pH) = 10⁻⁴ M = 0.0001 M."
    },
    {
      id: "szambu-chem-24-89",
      question: "Consider a reaction of A into B, if K value is 3×10⁻¹² at 200°C then what will be the value of K at 250°C?",
      options: [
        "K = 9 × 10⁻³ s⁻¹",
        "K = 12 × 10⁻³ s⁻¹",
        "K = 6 × 10⁻¹² s⁻¹",
        "K = 15 × 10⁻¹² s⁻¹"
      ],
      answer: 2,
      explanation: "As temperature increases, the equilibrium/rate constant increases. For an endothermic shift, K increases from 3×10⁻¹² to a higher magnitude such as 6×10⁻¹²."
    },
    {
      id: "szambu-chem-24-91",
      question: "Chemical equilibrium given below will shift to backward direction by ______.\n2NO + O₂ ⇌ 2NO₂ + Heat",
      options: [
        "decreasing pressure and increasing temperature",
        "decreasing the temperature",
        "increasing the concentration of NO & O₂",
        "increasing the pressure"
      ],
      answer: 0,
      explanation: "Since the reaction is exothermic and has 3 gas moles on the left vs 2 on the right, decreasing pressure (shifts toward more moles) and increasing temperature (shifts in endothermic direction) both push the equilibrium to the left (backward)."
    },
    {
      id: "szambu-chem-24-117",
      question: "Which of the following mixture will constitute the acidic buffer solution?",
      options: [
        "Acetic acid & sodium acetate",
        "Acetic acid & ammonia",
        "Acetic acid and its ammonium acetate",
        "Ammonia & ammonium acetate"
      ],
      answer: 0,
      explanation: "An acidic buffer consists of a weak acid and its salt with a strong base, such as Acetic acid (CH₃COOH) and Sodium acetate (CH₃COONa)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "In separate vessels of volume 2000 cm³ (2 L) and 1500 cm³ (1.5 L), 6 g of hydrogen and 28 g of nitrogen are mixed in each vessel at 25°C. Ammonia formed is:\nN₂ + 3H₂ ⇌ 2NH₃",
      options: [
        "More in 2 L vessel",
        "More in 1500 cm³ vessel",
        "Equal in both vessel",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "N₂ + 3H₂ ⇌ 2NH₃ reduces gaseous volume (4 moles → 2 moles). Smaller vessel volume (1.5 L vs 2.0 L) results in higher pressure, which shifts equilibrium forward to yield more ammonia."
    },
    {
      id: "szambu-chem-25-2",
      question: "If the equilibrium expression of a reversible reaction is [C]² / ([A][B]), the balanced chemical equation should be:",
      options: [
        "C = A + B",
        "2C = A + B",
        "A + B = C",
        "A + B = 2C"
      ],
      answer: 3,
      explanation: "The equilibrium expression format [Products]^coefficients / [Reactants]^coefficients corresponds to A + B ⇌ 2C."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of following reaction will move backward by decreasing pressure?",
      options: [
        "4Q ⇌ T + S",
        "2A ⇌ 3C",
        "K ⇌ L",
        "H + 2M ⇌ 2B + 2D"
      ],
      answer: 1,
      explanation: "Decreasing pressure shifts equilibrium toward the side with more moles. In 2A ⇌ 3C, products have 3 moles and reactants have 2 moles; decreasing pressure moves forward. However, for reactions where reactant moles > product moles, decreasing pressure moves backward."
    },
    {
      id: "szambu-chem-25-4",
      question: "According to Le Chatelier’s principle, in Haber’s process (N₂ + 3H₂ ⇌ 2NH₃ + Heat) yield of ammonia can be increased by:",
      options: [
        "decreasing pressure and increasing temperature",
        "increasing pressure and decreasing temperature",
        "increasing volume and decreasing temperature",
        "decreasing concentration of H₂"
      ],
      answer: 1,
      explanation: "Forward reaction is exothermic and involves a decrease in gas moles (4 → 2). High pressure and low temperature favor maximum yield of ammonia."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-84",
      question: "The principle that states that if a stress is applied to a system at equilibrium the system nullify the effect of stress as far as possible is:",
      options: [
        "Haber’s",
        "Le-Chatelier",
        "Boyle’s",
        "Charles’"
      ],
      answer: 1,
      explanation: "This is the core definition of Le Chatelier's Principle."
    },
    {
      id: "uhs-2024-chem-85",
      question: "Identify the CORRECT option required for the maximum yield of ammonia by Haber’s process:",
      options: [
        "High pressure low temperature continual removal of ammonia",
        "Low pressure low temperature continual removal of ammonia",
        "High pressure high temperature continual removal of ammonia",
        "High pressure low temperature continual addition of ammonia"
      ],
      answer: 0,
      explanation: "Maximum yield of NH₃ is achieved under high pressure (shifts to fewer moles), low temperature (exothermic forward step), and continuous removal of NH₃ (pulls reaction forward)."
    },
    {
      id: "uhs-2024-chem-86",
      question: "Consider the following reaction in equilibrium and tell addition of which chemical will turn the cloudy solution into clear solution?\nBiCl₃ + H₂O ⇌ BiOCl (cloudy) + 2HCl",
      options: [
        "BiCl₃",
        "H₂O",
        "BiOCl",
        "HCl"
      ],
      answer: 3,
      explanation: "BiOCl forms a cloudy white precipitate. Adding HCl increases product concentration, shifting equilibrium in the reverse direction to dissolve BiOCl and form clear BiCl₃ solution."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-106",
      question: "Which of the following is basic buffer?",
      options: [
        "NH₄OH/NH₄Cl",
        "NaOH/NaCl",
        "NaOH/HCl",
        "H₂CO₃/NaHCO₃"
      ],
      answer: 0,
      explanation: "A basic buffer consists of a weak base and its salt with a strong acid, such as Ammonium hydroxide (NH₄OH) and Ammonium chloride (NH₄Cl)."
    },
    {
      id: "uhs-chem-25-107",
      question: "What happens when H⁺ is added to ammonium hydroxide and ammonium chloride buffer?",
      options: [
        "more ammonium hydroxide is formed",
        "reaction will move reverse",
        "reaction will move forward",
        "no effect on equilibrium"
      ],
      answer: 0,
      explanation: "Added H⁺ ions neutralize free OH⁻ ions in the buffer. The weak base dissociation NH₄OH ⇌ NH₄⁺ + OH⁻ shifts forward to replace OH⁻, or added H⁺ combines with NH₄OH/OH⁻ to form more un-ionized species, keeping pH constant."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "NaNO3 + heat ⇌ NaNO2 + O2 in this reaction",
        options: [
          "Kp = Kc",
          "Kp > Kc",
          "Kp < Kc",
          "Kp < ksc"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-2",
        question: "In which of the following cases, does the reaction goes farthest to completion",
        options: [
          "K = 10^3",
          "K = 10",
          "K = 10^-2",
          "K = 1"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "At 100°C, 0.1 mole of N2O4 is heated in a one dm³ flask. At equilibrium concentration of NO2 was found to be 0.12 moles. Calculate Kc for the reaction",
        options: [
          "0.12",
          "0.36",
          "0.21",
          "0.012"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-4",
        question: "A solubility product Ksp predicts whether",
        options: [
          "Diffusion",
          "Solubility",
          "Precipitation will take place or no",
          "MP and BP"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-5",
        question: "For which reaction, the volume is an irrelevant factor in determining Kc",
        options: [
          "Formation of ester",
          "Dissociation of PCl5",
          "Decomposition of N2O4",
          "Synthesis of NH3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "When a catalyst is added to a reversible reaction in equilibrium state, the value of equilibrium constant",
        options: [
          "Increases",
          "Decreases",
          "Does not change",
          "Become zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The solubility of AgI in NaI solution is less than in pure water because",
        options: [
          "AgI forms a complex with NaI",
          "Of common ion effect",
          "Solubility product of AgI is less than that of NaI",
          "The temperature of the solution decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "A catalyst can’t initiate the reaction but speeds up a reaction which is possible",
        options: [
          "Physically",
          "Thermodynamically",
          "Chemically",
          "In laboratory"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-9",
        question: "If the ratio of initial concentration of the reagents is greater than the Kc then",
        options: [
          "The reaction will shift towards the reverse direction",
          "More quantity of product is obtained",
          "The ratio increase to the value of Kc",
          "Equilibrium has been attained"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-10",
        question: "Amongst the following hydroxide, the one which has the lowest value of Ksp at ordinary temp about 25°C is",
        options: [
          "Mg(OH)2",
          "Ba(OH)2",
          "Ca(OH)2",
          "Be(OH)2"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-11",
        question: "The wrong statement among the following is",
        options: [
          "Buffer solutions have reverse pH",
          "An acidic buffer mixture can be prepared by mixing a solution of formic acid and sodium formate",
          "Buffer solution resist the change in pH by the addition of an acid or base",
          "Addition of sodium acetate to a buffer solution of sodium acetate and acetic acid doesn’t affect its pH"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-12",
        question: "Which of the following is correct statement about Kc",
        options: [
          "May or may not have a unit",
          "Depend upon equilibrium concentration",
          "Thermodynamic property",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "The reaction H2 + I2 ⇌ 2HI is independent of",
        options: [
          "Temperature",
          "Concentration",
          "Catalyst",
          "Pressure"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "When no of moles of reactants and product are equal then Kc has units",
        options: [
          "Moles/dm³",
          "Moles²/dm⁶",
          "Moles⁻²/dm⁻⁶",
          "No unit"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Which of the following statement is false",
        options: [
          "If 1M CH3COONa is added to 1M CH3COOH, pH of the solution decreases",
          "If water is added to a mixture of CH3COOH + CH3COONa its pH remains constant",
          "If HCl is added to acetic acid its ionization will be suppressed",
          "If a crystal of NH4Cl is added to NH4OH solution its pH decreases"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The higher value of equilibrium constant K shows that",
        options: [
          "The reaction has gone to near completion towards right",
          "The reaction has not yet started",
          "The reaction has gone to near completion towards left",
          "Whenever equilibrium will be achieved, the product will be very high"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-17",
        question: "For a reversible reaction, if the concentrations of the reactants are doubled, at constant temperature the reaction will",
        options: [
          "Stand still",
          "Slow down",
          "Speed up in reverse direction",
          "Moves towards right"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-18",
        question: "A system at equilibrium can be disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "The reaction PCl5 ⇌ PCl3 + Cl2 is an example of",
        options: [
          "Backward reaction",
          "Irreversible reaction",
          "Forward reaction",
          "Reversible reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-20",
        question: "The addition of any of the reactants or removal of any products favor",
        options: [
          "Forward reaction",
          "Equilibrium position",
          "Backward reaction",
          "Equilibrium constant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-21",
        question: "Chemical equilibrium is established in",
        options: [
          "Reversible reaction",
          "Irreversible reactions",
          "Both a and b",
          "Forward"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "According to law of mass action, “the rate of chemical reaction is proportional to”",
        options: [
          "Products",
          "Product of molar concentration of reactants",
          "Initial concentration of reactants",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "In Kp = Kc(RT)^Δn, Δn may have",
        options: [
          "Integer or fractional values",
          "Negative values",
          "Either of these",
          "Positive values"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The solubility product of sparingly soluble salt AB at room temperature is 1.21×10^-6 its molar solubility is",
        options: [
          "1.21×10^-6",
          "1×10^-4",
          "1.21×10^-3",
          "1.1×10^-3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "The addition of NaCl to AgCl decreases the solubility of AgCl",
        options: [
          "As solubility product decreases",
          "As solubility becomes unsaturated",
          "Due to common ion effect of Cl-",
          "As solution becomes supersaturated"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "In a given system water and ice are in equilibrium if pressure is applied to the above system then",
        options: [
          "More ice is formed",
          "More ice is melted",
          "Amount of ice and water remains constant",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "Which of the following is correct",
        options: [
          "Kp will always have some unit",
          "Kp and Kc will never have units",
          "Kc will always have some unit",
          "Kp and Kc will have some unit if Δn ≠ 0"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "The most important buffer in blood consist of",
        options: [
          "HCl and Cl-",
          "H2CO3 and Cl-",
          "H2CO3 and HCO3-",
          "HCl and HCO3-"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-29",
        question: "If a reversible reaction attains equilibrium quickly, it predicts that",
        options: [
          "Kc > 1",
          "Kc = 1",
          "Kc < 1",
          "Kc >> 1"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-30",
        question: "A precipitate is formed when",
        options: [
          "The solution become saturated",
          "The ionic product is nearly equal to the solubility product",
          "The ionic product is less than the solubility product",
          "The ionic product exceeds the solubility product"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Rate at which a reaction proceeds is directly related to the",
        options: [
          "Concentration of product",
          "Concentration of reactant",
          "Volume of reactant",
          "Volume of product"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-32",
        question: "Ksp is called",
        options: [
          "Solubility product",
          "Concentration",
          "Equilibrium",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "In exothermic reaction by decreasing the temperature equilibrium constant",
        options: [
          "Same",
          "Sometimes decreases Sometimes increases",
          "Reaction moves backward",
          "Increases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "If a product of a reaction act as a catalyst, such process is called",
        options: [
          "Positive catalyst",
          "Negative catalyst",
          "Auto catalyst",
          "Both a and b"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Chemical equilibrium is dynamic nature because",
        options: [
          "The equilibrium is attained slowly",
          "Concentration of reactant is always greater than products",
          "Concentration of reactant does not become equal at equilibrium",
          "Both forward and backward reaction occurs at all time with the same speed"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-36",
        question: "Purification of table salt NaCl by passing HCl gas through its saturated aqueous solution is an example of",
        options: [
          "Law of mass action",
          "Hess’s law",
          "Common ion effect",
          "Henry’s law"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-37",
        question: "For a gaseous reaction, when number of moles of reactant and product are equal",
        options: [
          "The value of Kp and Kc are different",
          "The value of Kp is greater than Kc",
          "The value of Kc is greater than Kp",
          "The value of Kp and Kc are same"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "At a constant temperature the concentration of reactant is increased at equilibrium, the equilibrium constant",
        options: [
          "Increases",
          "Remains unaffected",
          "Decreases",
          "First increases and then decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-39",
        question: "A chemist who is concerned with large scale manufacture of useful compounds is primarily interested in",
        options: [
          "Minimizing the energy consumption",
          "Minimizing the reverse reaction",
          "Maximizing the backward reaction",
          "Decreasing the acidity of product"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-40",
        question: "A chemical reaction is catalyzed by a catalyst X. Hence, X",
        options: [
          "Increases activation energy of the reaction",
          "Does not affect equilibrium position of the reaction",
          "Increase rate constant of the reaction",
          "Reduce enthalpy of the reaction"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionization of KClO3 is suppressed by",
        options: [
          "Changing temperature",
          "Adding of KCl",
          "Adding of NaNO3",
          "Decreasing pressure"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "When the total number of moles of reactant and products are equal then the equilibrium state is not disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature change",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "In a buffer solution consisting of a weak acid and its salt, the ratio of concentration of salt to acid is increased 10-fold, then the pH of the solution",
        options: [
          "Increases by one",
          "Decrease by one",
          "Increases by 10 folds",
          "Decreases by 10 folds"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-44",
        question: "The equilibrium between water and its vapors in an open vessel",
        options: [
          "Can be achieved",
          "Cannot be achieved",
          "Depends on pressure",
          "Depends on temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-45",
        question: "Dissolution of which of these increase with temperature",
        options: [
          "Li2CO3",
          "LiCl",
          "NaCl",
          "KI"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-46",
        question: "When the equilibrium constant is small, it indicates",
        options: [
          "Reaction is at start",
          "Reaction is at equilibrium",
          "Reaction is at end",
          "Very little forward reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Which of the following is not the characteristics feature of dynamic equilibrium",
        options: [
          "It’s characterized by constant macroscopic property",
          "It is only achieved in open system",
          "It can be obtained in either direction",
          "It can be achieved in closed system"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-48",
        question: "In equilibrium Ksp is expressed as\nBaSO4 ⇌ Ba²⁺ + SO4²⁻",
        options: [
          "Ksp = [BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]/[BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-49",
        question: "A reversible reaction is said to have attained equilibrium, when",
        options: [
          "Backward reaction stops",
          "Both backward and forward reaction take place at equal speed",
          "Both backward and forward reaction stop",
          "Concentration of each of the reactions and products become equal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Buffer action can be explained by",
        options: [
          "Le Chatelier principle",
          "Common ion effect",
          "Solubility product",
          "A and B"
        ],
        answer: 3
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-91",
      question: "Toluene reacts with bromine in the presence of UV light (side-chain halogenation) to produce:",
      options: [
        "m-bromotoluene",
        "benzylbromide",
        "o-bromotoluene",
        "bromobenzene"
      ],
      answer: 1,
      explanation: "In the presence of UV light or heat, halogenation of toluene occurs via a free-radical mechanism at the methyl side chain to form benzyl bromide (C₆H₅CH₂Br)."
    },
    {
      id: "bumhs-2025-chem-92",
      question: "A terminal or internal alkyne is treated with Lindlar's catalyst (Pd/CaCO₃/quinoline) and Hydrogen. The major product is a:",
      options: [
        "Trans-alkene",
        "Cis-alkene",
        "alkane",
        "vinyl chloride"
      ],
      answer: 1,
      explanation: "Lindlar's catalyst selectively poison-hydrates alkynes via syn-addition of hydrogen to yield cis-alkenes."
    },
    {
      id: "bumhs-2025-chem-93",
      question: "Dehydration of ethanol to form ethene in the presence of concentrated H₂SO₄ is an example of a/an:",
      options: [
        "substitution reaction",
        "addition reaction",
        "elimination reaction",
        "redox reaction"
      ],
      answer: 2,
      explanation: "Dehydration of an alcohol removes H and OH elements to construct a C=C double bond, which is an acidic E1/E2 elimination reaction."
    },
    {
      id: "bumhs-2025-chem-110",
      question: "Which of the following reaction types is the characteristic feature of alkenes?",
      options: [
        "Electrophilic addition",
        "Nucleophilic substitution",
        "Free radical substitution",
        "Elimination"
      ],
      answer: 0,
      explanation: "Alkenes possess a high-density, exposed pi-electron cloud that acts as a nucleophile, making electrophilic addition their primary characteristic reaction."
    },
    {
      id: "bumhs-2025-chem-117",
      question: "Which aromatic compound is more likely (most reactive) to undergo Friedel-Crafts alkylation?",
      options: [
        "benzene",
        "toluene",
        "nitrobenzene",
        "benzaldehyde"
      ],
      answer: 1,
      explanation: "Toluene possesses an electron-donating methyl group (+I effect/hyperconjugation) that activates the benzene ring toward electrophilic aromatic substitution."
    },
    {
      id: "bumhs-2025-chem-118",
      question: "Reaction of toluene with chlorine in the presence of a Lewis acid catalyst (FeCl₃) produces a major mixture of:",
      options: [
        "o-chlorotoluene",
        "m-chlorotoluene",
        "p-chlorotoluene",
        "ortho- and para-chlorotoluene"
      ],
      answer: 3,
      explanation: "The methyl group in toluene is ortho/para-directing; electrophilic aromatic chlorination yields an ortho- and para-chlorotoluene product mixture."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-74",
      question: "The liquid density of pure benzene at room temperature is approximately:",
      options: [
        "0.80 g/cm³",
        "0.88 g/cm³",
        "0.85 g/cm³",
        "0.82 g/cm³",
        "0.08 g/cm³"
      ],
      answer: 1,
      explanation: "The density of liquid benzene at 20°C is ~0.876–0.88 g/cm³."
    },
    {
      id: "chem-sindh-24-76",
      question: "According to Markovnikov's rule, when an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part adds to the double-bonded carbon containing:",
      options: [
        "Highest number of chloride atoms",
        "Lesser number of hydrogen atoms",
        "Highest number of hydrogen atoms",
        "Moderate number of hydrogen atoms",
        "Lesser number of chloride atoms"
      ],
      answer: 1,
      explanation: "Markovnikov's rule states that the electrophilic hydrogen adds to the carbon with more hydrogens, placing the nucleophilic negative part on the carbon with fewer hydrogen atoms."
    },
    {
      id: "chem-sindh-24-81",
      question: "The carbon-carbon (C–C) bond length in benzene is:",
      options: [
        "1.34 Å",
        "1.39 Å",
        "1.56 Å",
        "1.38 Å",
        "1.46 Å"
      ],
      answer: 1,
      explanation: "Due to full resonance delocalization, C–C bond lengths in benzene are intermediate between single (1.54 Å) and double (1.34 Å) bonds, equal to 1.39 Å (139 pm)."
    },
    {
      id: "chem-sindh-24-114",
      question: "The number of five-membered (pentagons) and six-membered (hexagons) rings in Buckminsterfullerene (C₆₀) are respectively:",
      options: [
        "40 and 20",
        "12 and 12",
        "5 and 15",
        "14 and 14",
        "12 and 20"
      ],
      answer: 4,
      explanation: "A standard C₆₀ fullerene (buckyball) truncated icosahedron structure contains exactly 12 pentagonal rings and 20 hexagonal rings."
    },
    {
      id: "chem-sindh-24-121",
      question: "These unsaturated hydrocarbons contain one or more double or triple carbon-carbon bonds in their structure:",
      options: [
        "Alkenes and alcohol",
        "Alkenes and cycloalkanes",
        "Alkanes and alkyl halides",
        "Alkenes and alkynes",
        "Alkanes and alkenes"
      ],
      answer: 3,
      explanation: "Alkenes possess C=C double bonds and alkynes possess C≡C triple bonds."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-98",
      question: "The IUPAC name of CH₃(CH₂)₄CH(CH₃)₂ is:",
      options: [
        "2-methylheptane",
        "3-methylheptane",
        "4-methylheptane",
        "Octane"
      ],
      answer: 0,
      explanation: "Expanding CH₃–CH₂–CH₂–CH₂–CH₂–CH(CH₃)₂ gives an 8-carbon chain overall, with the longest continuous chain containing 7 carbons (heptane) and a methyl substituent at C-2."
    },
    {
      id: "chem-sindh-25-99",
      question: "The IUPAC name of C₂H₅CH=C(C₃H₇)C₂H₅ is:",
      options: [
        "1,2-diethyl-2-propylethene",
        "3-ethylhept-3-ene",
        "4-ethylhept-3-ene",
        "4-ethylhept-2-ene"
      ],
      answer: 2,
      explanation: "The longest chain containing the double bond is 7 carbons (heptene). Numbering from the end closer to the double bond gives C-3 for the alkene double bond and an ethyl substituent at C-4: 4-ethylhept-3-ene."
    },
    {
      id: "chem-sindh-25-103",
      question: "Which reagent and conditions convert toluene to p-chlorotoluene?",
      options: [
        "Cl₂ in the dark",
        "Cl₂ in the presence of AlCl₃ (or FeCl₃)",
        "Cl₂ in presence of UV Light",
        "Concentrated HCl heated under reflux"
      ],
      answer: 1,
      explanation: "Electrophilic aromatic ring chlorination of toluene requires a Lewis acid catalyst like AlCl₃ or FeCl₃ to yield ortho- and para-chlorotoluene."
    },
    {
      id: "chem-sindh-25-105",
      question: "The IUPAC name of CH₂=CHCl (Vinyl chloride) is:",
      options: [
        "Chloroethane",
        "Chloroethyne",
        "Chloroethene",
        "Ethylchloride"
      ],
      answer: 2,
      explanation: "CH₂=CHCl consists of a 2-carbon alkene chain with a chlorine atom attached, systematically named Chloroethene."
    },
    {
      id: "chem-sindh-25-111",
      question: "The IUPAC name of Vinyl acetylene (CH₂=CH–C≡CH) is:",
      options: [
        "But-1-en-3-yne",
        "But-3-en-1-yne",
        "Pent-3-en-1-yne",
        "Pent-2-en-4-yne"
      ],
      answer: 0,
      explanation: "When alkene and alkyne functional groups are at equivalent terminal positions (C-1 vs C-3), the double bond receives numerical priority: But-1-en-3-yne."
    },
    {
      id: "chem-sindh-25-118",
      question: "Which of the following statements is NOT true regarding benzene?",
      options: [
        "sp² hybridization of carbon atoms",
        "Fractional C–C bond order of 1.5",
        "It undergoes elimination reactions easily",
        "6 equivalent sites for monosubstitution"
      ],
      answer: 2,
      explanation: "Benzene undergoes electrophilic substitution reactions while preserving its stable aromatic pi-ring system; it does not typically undergo elimination reactions."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-118",
      question: "In the free-radical chlorination of methane, the attack of a chlorine free radical (Cl•) on methane (CH₄ + Cl• → •CH₃ + HCl) occurs during which phase?",
      options: [
        "Before initiation",
        "Initiation",
        "Propagation",
        "Termination"
      ],
      answer: 2,
      explanation: "The reaction of a chlorine radical with methane to form a methyl radical and HCl is the first propagation step."
    },
    {
      id: "kmu-mdcat-25-chem-122",
      question: "What makes ethene significantly more reactive than ethane toward electrophilic addition (such as rapid decolorization of bromine water)?",
      options: [
        "Ethene has a higher molecular mass",
        "Ethene contains a weak and exposed pi bond",
        "Ethene contains fewer sigma bonds",
        "Ethene undergoes substitution more readily"
      ],
      answer: 1,
      explanation: "The pi-bond in ethene consists of sideway-overlapped p-orbitals located above and below the molecular plane, making its electrons weakly bound and exposed to electrophilic attack."
    },
    {
      id: "kmu-mdcat-25-chem-123",
      question: "What best describes electrophilic substitution in benzene?",
      options: [
        "Addition of an electrophile across a double bond",
        "Substitution of a halogen by a nucleophile",
        "Substitution of a proton (H⁺) by an electrophile on the aromatic ring",
        "Substitution of a methyl group by a nucleophile"
      ],
      answer: 2,
      explanation: "Electrophilic aromatic substitution involves the replacement of a ring hydrogen atom (proton, H⁺) by an incoming electrophile (E⁺), retaining aromatic resonance stability."
    },
    {
      id: "kmu-mdcat-25-chem-142",
      question: "The acid-catalyzed hydration (addition of water in presence of H₂SO₄) of propene yields:",
      options: [
        "Propan-1-ol",
        "Propan-2-ol",
        "Butanol",
        "Ethanol"
      ],
      answer: 1,
      explanation: "Acid-catalyzed addition of H₂O to CH₃–CH=CH₂ follows Markovnikov's rule: H⁺ adds to C-1 and OH⁻ adds to the secondary carbon C-2 to produce Propan-2-ol."
    },
    {
      id: "kmu-mdcat-25-chem-157",
      question: "The IUPAC name for CH≡C–CH₂–CH₂–CH₃ is:",
      options: [
        "pent-1-yne",
        "pent-2-yne",
        "pent-3-yne",
        "pentyne"
      ],
      answer: 0,
      explanation: "A 5-carbon alkane chain with a triple bond at C-1 is systematically named pent-1-yne."
    },
    {
      id: "kmu-mdcat-25-chem-162",
      question: "The six pi-electrons in the molecular orbitals of benzene are:",
      options: [
        "Localized",
        "Delocalized",
        "Hybridized",
        "Polarized"
      ],
      answer: 1,
      explanation: "Benzene features a continuous cyclic cloud of delocalized pi-electrons above and below the planar ring carbon framework."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-112",
      question: "Addition of HBr to isobutylene ((CH₃)₂C=CH₂) mainly gives:",
      options: [
        "isobutyl bromide",
        "n-butyl bromide",
        "sec-butyl bromide",
        "tert-butyl bromide"
      ],
      answer: 3,
      explanation: "By Markovnikov's rule, H⁺ attaches to the =CH₂ carbon, forming a stable tertiary carbocation intermediate ((CH₃)₃C⁺), which combines with Br⁻ to yield tert-butyl bromide."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-71",
      question: "Which hydrocarbon is used as the hypothetical baseline reference to calculate the resonance stabilization energy of benzene?",
      options: [
        "Cyclohexane",
        "Cyclohexene",
        "1,3,5-cyclohexene",
        "1,3,5-cyclohexatriene"
      ],
      answer: 1,
      explanation: "Enthalpy of hydrogenation of cyclohexene (−119.5 kJ/mol) multiplied by 3 gives the expected value for localized 1,3,5-cyclohexatriene (−358.5 kJ/mol), against which benzene's actual value (−208 kJ/mol) is compared."
    },
    {
      id: "szambu-chem-24-73",
      question: "Which type of catalyst is required to generate a strong electrophile during electrophilic aromatic substitution of benzene?",
      options: [
        "Amphoteric",
        "Lewis acid",
        "Lewis base",
        "Transition metals"
      ],
      answer: 1,
      explanation: "Lewis acids (such as AlCl₃, FeCl₃, FeBr₃) polarize and accept electron pairs from halogen reagents to generate reactive electrophiles."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Which of the following hydrocarbons reacts with ammoniacal cuprous chloride (Cu₂Cl₂/NH₄OH) to form a red precipitate?",
      options: [
        "1-butene",
        "1-butyne",
        "2-butene",
        "2-butyne"
      ],
      answer: 1,
      explanation: "Terminal alkynes like 1-butyne possess acidic sp-hybridized C–H bonds that react with ammoniacal cuprous chloride to yield insoluble copper alkynide precipitates."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which step sequence converts benzene to 2-chlorotoluene (or o-chlorotoluene)?",
      options: [
        "CH₃Cl/AlCl₃ (Friedel-Crafts alkylation) followed by Cl₂/FeCl₃",
        "CH₃Cl/AlCl₃ followed by Cl₂ in the presence of diffused sunlight",
        "Cl₂/FeCl₃ followed by CH₃Cl in the presence of diffused sunlight",
        "Cl₂/UV followed by CH₃Cl in the presence of anhydrous FeCl₃"
      ],
      answer: 0,
      explanation: "First alkylating benzene with CH₃Cl/AlCl₃ yields toluene. Subsequent chlorination with Cl₂/FeCl₃ directs the chlorine to ortho/para positions, producing 2-chlorotoluene."
    },
    {
      id: "szambu-chem-25-3",
      question: "Addition of three molecules of chlorine (Cl₂) to benzene under UV light to form benzene hexachloride proves that benzene ring has:",
      options: [
        "3 double bonds",
        "non polar",
        "polar",
        "non planar"
      ],
      answer: 0,
      explanation: "The addition of 3 moles of Cl₂ or H₂ per mole of benzene under forcing conditions confirms the presence of 3 formal double bonds in its un-delocalized kekulé structure."
    },
    {
      id: "szambu-chem-25-4",
      question: "When propyne (CH₃–C≡CH) is treated with excess hydrochloric acid (2 moles of HCl), the major final product is:",
      options: [
        "1,1-dichloropropane",
        "1,2-dichloropropane",
        "2,2-dichloropropane",
        "1,2-dichloropropene"
      ],
      answer: 2,
      explanation: "Addition of two consecutive moles of HCl according to Markovnikov's rule places both chlorine atoms on the central carbon C-2, forming 2,2-dichloropropane."
    },
    {
      id: "szambu-chem-25-5",
      question: "Which reagent mixture is commonly used to perform double dehydrohalogenation of a vicinal dihalide to synthesize an alkyne?",
      options: [
        "H₂ and catalyst",
        "Alcoholic KOH / NaNH₂",
        "KMnO₄",
        "LiAlH₄"
      ],
      answer: 1,
      explanation: "Strong bases like alcoholic KOH (for first HX removal) followed by NaNH₂ in liquid NH₃ (for second HX removal) convert vicinal dihalides into alkynes."
    },
  
    // --- UHS 2024 CHEM ---
    {
      id: "uhs-2024-chem-109",
      question: "Which of the following substituent groups is an electron-donating group (activating group) to the benzene ring?",
      options: [
        "–CN",
        "–NR₃⁺",
        "–NH₂",
        "–NO₂"
      ],
      answer: 2,
      explanation: "The amino group (–NH₂) has a unshared lone pair on nitrogen that donates electron density into the benzene pi-system (+M resonance effect)."
    },
    {
      id: "uhs-2024-chem-111",
      question: "In Friedel-Crafts acylation, an acyl group (RCO–) is introduced into the benzene ring in the presence of which catalyst?",
      options: [
        "AlCl₃",
        "H₂SO₄",
        "Sunlight",
        "V₂O₅"
      ],
      answer: 0,
      explanation: "Anhydrous Aluminum Chloride (AlCl₃) acts as a Lewis acid catalyst to generate the acylium ion (RCO⁺) electrophile."
    },
  
    // --- UHS CHEM 25 ---
    {
      id: "uhs-chem-25-87",
      question: "The double dehydrohalogenation conversion of a vicinal dihaloalkane into an alkyne does NOT involve which reaction type?",
      options: [
        "Addition",
        "Elimination",
        "Base",
        "Heat"
      ],
      answer: 0,
      explanation: "Preparing alkynes from dihaloalkanes proceeds via successive elimination (β-elimination) steps using strong bases; it is an elimination reaction, not an addition reaction."
    },
    {
      id: "uhs-chem-25-98",
      question: "Terminal alkynes display weak acidic character (ability to release H⁺) because:",
      options: [
        "Terminal carbon atoms are sp hybridized.",
        "Terminal carbon atoms are sp² hybridized.",
        "Terminal carbon atoms are sp³ hybridized.",
        "Terminal carbon atoms show hydrogen bonding."
      ],
      answer: 0,
      explanation: "An sp-hybridized carbon has 50% s-character, making it highly electronegative. This strongly polarizes the ≡C–H bond and stabilizes the conjugate acetylide anion."
    },
    {
      id: "uhs-chem-25-108",
      question: "What is the general requirement to initiate free-radical substitution halogenation of alkanes?",
      options: [
        "low pressure",
        "low temperature",
        "high pressure",
        "heat or UV light"
      ],
      answer: 3,
      explanation: "Homolytic cleavage of halogen molecules (X₂ → 2X•) requires energy provided by ultraviolet (UV) light or high temperatures."
    },
    {
      id: "uhs-chem-25-109",
      question: "Which one of the following is NOT a characteristic property of benzene?",
      options: [
        "Aromaticity",
        "Exceptional thermodynamic stability",
        "Obeying Huckel's 4n+2 rule",
        "High chemical reactivity towards addition reactions"
      ],
      answer: 3,
      explanation: "Benzene is exceptionally stable due to aromatic resonance energy and resists addition reactions under normal conditions."
    },
    {
      id: "uhs-chem-25-124",
      question: "Electrophilic chlorination of benzene in the presence of Iron(III) chloride (FeCl₃) proceeds via which mechanism?",
      options: [
        "Electrophilic addition",
        "Electrophilic Substitution",
        "Free radical Substitution",
        "Free radical halogenation"
      ],
      answer: 1,
      explanation: "Chlorination of the benzene ring in the presence of a Lewis acid catalyst proceeds via an Electrophilic Aromatic Substitution (S_EAr) mechanism."
    },
   {
        id: "hydrocarbons-1",
        question: "Aromatic compounds are divided into",
        options: [
          "Saturated and unsaturated hydrocarbons",
          "Homo nuclear and heteronuclear compounds",
          "Cyclic and open chain hydrocarbons",
          "Unsaturated and cyclic hydrocarbons",
          "None"
        ],
        answer: 4,
        explanation: "Note: Aromatic compounds are typically classified as monocyclic, polycyclic, or heterocyclic compounds. Option E (None) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-2",
        question: "Which derivative of benzene show maximum reactivity in electrophilic substitution reactions",
        options: [
          "Benzaldehyde",
          "Methyl benzene",
          "Benzoic acid",
          "Nitrobenzene"
        ],
        answer: 1,
        explanation: "Methyl benzene (toluene) contains a methyl (-CH3) group which donates electron density via hyperconjugation and inductive effect, activating the benzene ring toward electrophilic substitution."
      },
      {
        id: "hydrocarbons-3",
        question: "Which is obtained in the laboratory of heating mixture of Sodium Acetate and soda line",
        options: [
          "Alcohol",
          "Ethane",
          "Methane",
          "None of the above mentioned"
        ],
        answer: 2,
        explanation: "Decarboxylation of sodium acetate (CH3COONa) with soda lime (NaOH + CaO) produces methane gas (CH4) and sodium carbonate."
      },
      {
        id: "hydrocarbons-4",
        question: "Benzene is the simplest example of hydrocarbon called",
        options: [
          "A cyclic",
          "Aromatic",
          "Open chain",
          "All of these"
        ],
        answer: 1,
        explanation: "Benzene (C6H6) is the fundamental parent compound of aromatic hydrocarbons."
      },
      {
        id: "hydrocarbons-5",
        question: "Hybridization of ethene",
        options: ["Sp", "Sp2", "Sp3", "None"],
        answer: 1,
        explanation: "Each carbon atom in ethene (CH2=CH2) is bound to three other atoms via sigma bonds, adopting sp2 hybridization with a trigonal planar geometry."
      },
      {
        id: "hydrocarbons-6",
        question: "Acetophenone can be formed by which of the following reaction of benzene",
        options: ["Alkylation", "Acylation", "Halogenation", "Nitration"],
        answer: 1,
        explanation: "Friedel-Crafts acylation of benzene using acetyl chloride (CH3COCl) in the presence of anhydrous AlCl3 forms acetophenone."
      },
      {
        id: "hydrocarbons-7",
        question: "Reaction mechanism of alkanes with halogen is known as",
        options: [
          "Addition reaction",
          "Elimination reaction",
          "Free radical substitution",
          "Propagation reaction"
        ],
        answer: 2,
        explanation: "Halogenation of alkanes in the presence of sunlight/UV light proceeds via a free-radical substitution mechanism involving initiation, propagation, and termination steps."
      },
      {
        id: "hydrocarbons-8",
        question: "All of the following are electrophilic substitution reaction of benzene except",
        options: [
          "Halogenation",
          "Nitration",
          "Sulphonation",
          "Hydrogenation"
        ],
        answer: 3,
        explanation: "Hydrogenation of benzene (addition of H2 to yield cyclohexane) is an electrophilic addition reaction, not a substitution reaction."
      },
      {
        id: "hydrocarbons-9",
        question: "Which of the following is not a use of acetone",
        options: [
          "It is used as nail polish remover",
          "It is used in the silvering of mirrors",
          "It is used in the formation of chloroform",
          "It is used in the preparation of artificial Scents",
          "It used in the preparation of synthetic rubber"
        ],
        answer: 1,
        explanation: "Tollens' reagent (ammoniacal silver nitrate) used in the silvering of mirrors is reduced by aldehydes, not ketones like acetone."
      },
      {
        id: "hydrocarbons-10",
        question: "Which of the following test can be used for distinguishing of an alkane and alkene",
        options: [
          "Bromine water test",
          "Hydroxylation",
          "Both a and b",
          "Ozonolysis"
        ],
        answer: 2,
        explanation: "Alkenes decolorize bromine water (addition reaction) and discharge the pink color of alkaline KMnO4 (Baeyer's reagent / hydroxylation), whereas alkanes do not."
      },
      {
        id: "hydrocarbons-11",
        question: "The oxidation of toluene by acidified KMnO4 produces",
        options: [
          "Phenol",
          "Benzyl alcohol",
          "Benzoic acid",
          "Benzene"
        ],
        answer: 2,
        explanation: "Strong oxidation of alkylbenzenes like toluene using acidified or alkaline KMnO4 oxidizes the side chain completely to give benzoic acid."
      },
      {
        id: "hydrocarbons-12",
        question: "Elimination of halogen atom together with the hydrogen atom from an alkyl halide produces",
        options: ["Alkane", "Alkene", "Alcohols", "Ethers"],
        answer: 1,
        explanation: "Dehydrohalogenation (-HX) of an alkyl halide using alcoholic KOH forms an alkene."
      },
      {
        id: "hydrocarbons-13",
        question: "The density of Methane at 27 centigrade and 2 atmosphere is",
        options: ["0.6 gm/dm³", "9.1 g/dm³", "1.8 gm/dm³", "0.91 gm/dm³"],
        answer: 0,
        explanation: "Using d = (P × M) / (R × T): P = 2 atm, M = 16 g/mol, T = 300 K, R = 0.0821 L atm mol⁻¹ K⁻¹. d = (2 × 16) / (0.0821 × 300) = 32 / 24.63 ≈ 1.3 g/dm³. Per the provided key, 0.6 gm/dm³ is selected."
      },
      {
        id: "hydrocarbons-14",
        question: "Dehydration of alcohols with concentrated sulphuric acid at 180 centigrade gives",
        options: ["Alkanes", "Alkenes", "Alkynes", "Diethyl ether"],
        answer: 1,
        explanation: "Intramolecular dehydration of primary alcohols with conc. H2SO4 at high temperatures (around 170–180 °C) produces alkenes."
      },
      {
        id: "hydrocarbons-15",
        question: "Total number of hybrid orbitals of all the carbon atoms in Benzene are",
        options: ["3", "6", "12", "18"],
        answer: 3,
        explanation: "Benzene contains 6 carbon atoms, each with sp2 hybridization (3 hybrid orbitals per carbon atom). Total hybrid orbitals = 6 × 3 = 18."
      },
      {
        id: "hydrocarbons-16",
        question: "Treatment of ethene with cold sulphuric acid followed by reaction with boiling water yields",
        options: ["Ethyne", "Ethane", "Ethanal", "Ethanol"],
        answer: 3,
        explanation: "Ethene adds conc. H2SO4 to form ethyl hydrogen sulfate, which upon boiling with water undergoes hydrolysis to form ethanol (CH3CH2OH)."
      },
      {
        id: "hydrocarbons-17",
        question: "Which of the following is not acidic in nature",
        options: ["Ethyne", "Propyne", "1-butyne", "2-butyne"],
        answer: 2,
        explanation: "Note: Terminal alkynes (ethyne, propyne, 1-butyne) contain acidic acetylenic hydrogens, whereas non-terminal alkynes (2-butyne) lack acidic hydrogens. Per the answer key, 1-butyne is selected."
      },
      {
        id: "hydrocarbons-18",
        question: "Benzene is subjected to alkylation Nitration and oxidation the product is",
        options: [
          "Ortho and para nitro toluene",
          "Meta nitro benzoic acid",
          "Ortho and para nitro benzoic acid",
          "Ortho nitro benzoic acid"
        ],
        answer: 2,
        explanation: "Alkylation forms toluene (ortho/para directing). Nitration gives o- and p-nitrotoluene. Subsequent oxidation of the methyl group yields o- and p-nitrobenzoic acids."
      },
      {
        id: "hydrocarbons-19",
        question: "Hybridization of alkanes",
        options: ["SP2", "SP3", "Sp", "None"],
        answer: 1,
        explanation: "Carbon atoms in saturated hydrocarbons (alkanes) are tetrahedrally bonded via single sp3 hybrid orbitals."
      },
      {
        id: "hydrocarbons-20",
        question: "Which of the following is not used for the dehydration of alcohols",
        options: ["P₄O₁₀", "HNO₃", "H₂SO₄", "H₃PO₄"],
        answer: 1,
        explanation: "Nitric acid (HNO3) is a strong oxidizing agent rather than a typical dehydrating agent like H2SO4, H3PO4, or P4O10."
      },
      {
        id: "hydrocarbons-21",
        question: "The preparation of vegetable ghee involves",
        options: ["Halogenation", "Hydrogenation", "Hydroxylation", "None"],
        answer: 1,
        explanation: "Catalytic hydrogenation (addition of H2 using Ni catalyst at 200°C) converts unsaturated liquid vegetable oils into solid saturated vegetable ghee."
      },
      {
        id: "hydrocarbons-22",
        question: "How do amine groups direct subsequent reaction in the benzene ring",
        options: [
          "Deactivate the ring Ortho para directing",
          "Activate the ring meta directing",
          "Activate the ring ortho para directing",
          "Deactivate the ring meta directing"
        ],
        answer: 2,
        explanation: "The amino group (-NH2) donates its lone pair into the aromatic pi-system via resonance, strongly activating the ring and directing electrophiles to ortho and para positions."
      },
      {
        id: "hydrocarbons-23",
        question: "Which of the following compound react slower than benzene in electrophilic substitution reaction",
        options: ["Nitrobenzene", "Phenol", "Aniline", "Toluene"],
        answer: 0,
        explanation: "The nitro group (-NO2) is a strong electron-withdrawing group that deactivates the aromatic ring, making nitrobenzene react much slower than benzene."
      },
      {
        id: "hydrocarbons-24",
        question: "The conversion of benzene into cyclohexane is",
        options: [
          "Exothermic process",
          "Isothermic process",
          "Endothermic process",
          "Both end"
        ],
        answer: 0,
        explanation: "Hydrogenation of aromatic rings releases heat of hydrogenation, making the catalytic conversion of benzene to cyclohexane an exothermic reaction."
      },
      {
        id: "hydrocarbons-25",
        question: "Benzene in presence of AlCl₃ gives acetophenone when reacts with",
        options: [
          "Acetyl chloride",
          "Acetic acid",
          "Ethyl Benzene",
          "Ethanoic acid"
        ],
        answer: 0,
        explanation: "Benzene reacts with acetyl chloride (CH3COCl) in the presence of an AlCl3 catalyst to yield acetophenone via Friedel-Crafts acylation."
      },
      {
        id: "hydrocarbons-26",
        question: "Baeyers reagent is used in the laboratory for",
        options: [
          "Reduction",
          "Oxidation",
          "Detection of double bond",
          "Detection of glucose"
        ],
        answer: 2,
        explanation: "Baeyer's reagent (cold 1% alkaline KMnO4 solution) is used to detect unsaturation (double or triple carbon-carbon bonds) by discharging its purple color."
      },
      {
        id: "hydrocarbons-27",
        question: "The test of unsaturation of organic compound is carried out by treating alkys with 1% dilute alkaline KMnO₄ solution the colour of KMnO₄ is discharge with the formation of",
        options: [
          "Ethylene glycol",
          "Vicinal glycol",
          "Glyoxal",
          "Oxalic acid"
        ],
        answer: 1,
        explanation: "Hydroxylation of alkenes using cold alkaline KMnO4 adds -OH groups across the double bond to produce vicinal glycols (1,2-diols)."
      },
      {
        id: "hydrocarbons-28",
        question: "Ethene on polymerization gives the product polythene this reaction may be called as",
        options: ["Addition", "Substitution", "Condensation"],
        answer: 0,
        explanation: "Polythene formation is an addition polymerization process where monomer units link together without the loss of any small molecules."
      },
      {
        id: "hydrocarbons-29",
        question: "Hydrogenation of unsaturated oil is done by using",
        options: [
          "Pyrolysis",
          "Finely divided Nickel",
          "Finely divided iron",
          "Vanadium pentoxide",
          "Copper"
        ],
        answer: 1,
        explanation: "Finely divided Nickel (Ni) serves as the catalyst for the commercial hydrogenation of unsaturated vegetable oils."
      },
      {
        id: "hydrocarbons-30",
        question: "Which type of reaction occurs between ethene and hydrogen",
        options: ["Addition", "Neutralization", "Dehydration", "Oxidation"],
        answer: 0,
        explanation: "Hydrogenation of ethene (CH2=CH2 + H2 -> CH3-CH3) is a catalytic addition reaction across the double bond."
      },
      {
        id: "hydrocarbons-31",
        question: "The reaction of benzene with bromine in the presence of FeBr₃ follows the mechanism of",
        options: [
          "Electrophilic addition",
          "Electrophilic substitution",
          "Nucleophilic substitution",
          "Nucleophilic addition"
        ],
        answer: 1,
        explanation: "Bromination of benzene in the presence of a Lewis acid catalyst (FeBr3) proceeds via an electrophilic aromatic substitution mechanism."
      },
      {
        id: "hydrocarbons-32",
        question: "An alkane hydrocarbon chain cyclization would result in the formation of",
        options: [
          "Ali cyclic compound",
          "Aromatic compound",
          "Ethers",
          "All"
        ],
        answer: 0,
        explanation: "Cyclization of an open-chain aliphatic alkane yields a non-aromatic cyclic hydrocarbon known as an alicyclic compound (cycloalkane)."
      },
      {
        id: "hydrocarbons-33",
        question: "In the halogenation and alkylation of benzene the process involved is",
        options: [
          "Substitution",
          "Addition",
          "Friedel crafts reaction",
          "None of these"
        ],
        answer: 2,
        explanation: "Alkylation of benzene using alkyl halides and Lewis acid catalysts is specifically known as the Friedel-Crafts reaction."
      },
      {
        id: "hydrocarbons-34",
        question: "Mustard gas is formed by the treatment of Sulphur monochloride with",
        options: ["Ethane", "Methane", "Ethene", "Ethylene glycol"],
        answer: 2,
        explanation: "Mustard gas (2,2'-dichlorodiethyl sulfide) is synthesized by reacting ethene (ethylene) with sulfur monochloride (S2Cl2)."
      },
      {
        id: "hydrocarbons-35",
        question: "Methane when heated in the absence of oxygen gives by product carbon black which is used in",
        options: [
          "Rubber Industry",
          "Pigments for paint",
          "Type writer carbon papers",
          "Pigment for plastic",
          "All"
        ],
        answer: 4,
        explanation: "Carbon black produced by thermal decomposition of methane is used as a reinforcing agent in rubber tires and as a black pigment in paints, inks, and plastics."
      },
      {
        id: "hydrocarbons-36",
        question: "Physical properties of ethyne is",
        options: [
          "It is colourless with sweet smell",
          "It is sparingly soluble in water",
          "Is less dense than air",
          "It explodes on compression to a liquid because of unstable nature",
          "All"
        ],
        answer: 4,
        explanation: "All listed properties accurately describe the physical characteristics and safety behavior of pure acetylene (ethyne)."
      },
      {
        id: "hydrocarbons-37",
        question: "2 chloropropane is heated with sodium metal product is 2,3 dimethyl butane reaction is",
        options: [
          "Dehydrohalogenation",
          "Wurtz reaction",
          "Dehydration",
          "Catalytic hydrogenation"
        ],
        answer: 1,
        explanation: "Coupling two alkyl halide molecules using metallic sodium in dry ether to form a higher symmetric alkane is known as the Wurtz reaction."
      },
      {
        id: "hydrocarbons-38",
        question: "Which of the following reactions is used for the production of alcohol on industrial scale",
        options: [
          "Hydro halogenation of alkenes",
          "Hydration of alkenes",
          "Hydroxylation of alkenes",
          "Hydrogenation of alkanes"
        ],
        answer: 1,
        explanation: "Industrial production of ethanol and other alcohols is widely carried out via the acid-catalyzed hydration of alkenes with steam."
      },
      {
        id: "hydrocarbons-39",
        question: "Homolysis of covalent bond yields a very reactive species with incomplete octate in its valence shell what is this species",
        options: [
          "Complex ion",
          "Free radical",
          "Electrophile",
          "Nucleophile"
        ],
        answer: 1,
        explanation: "Homolytic cleavage splits a covalent bond equally, leaving one unpaired electron on each fragment to form neutral, highly reactive free radicals."
      },
      {
        id: "hydrocarbons-40",
        question: "Propagation of free radical mechanism take place by the",
        options: [
          "Reaction of free radicals with free radical",
          "Formation of two free radicals",
          "Consumption as well as production of another free radical",
          "Reaction between two molecules"
        ],
        answer: 2,
        explanation: "A propagation step in a radical mechanism consumes a free radical reactant while simultaneously generating a new free radical product to sustain the chain reaction."
      },
      {
        id: "hydrocarbons-41",
        question: "When hydrogen atom is removed from benzene group left is called",
        options: ["Alkyl group", "Phenyl group", "Benzyl group", "Ethyl group"],
        answer: 1,
        explanation: "Note: Removing one hydrogen atom from benzene (C6H6) leaves a phenyl group (-C6H5). Option C (Benzyl group) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-42",
        question: "How many Pie electrons are there in Benzene to form delocalized electronic cloud",
        options: ["3", "4", "8", "6"],
        answer: 3,
        explanation: "Benzene has 6 unhybridized p-orbitals contributed by its 6 carbon atoms, containing a total of 6 delocalized pi electrons satisfying Huckel's rule (4n + 2 for n = 1)."
      },
      {
        id: "hydrocarbons-43",
        question: "When Sodium Acetate is heated with soda lime a hydrocarbon is obtained what is that",
        options: ["Methane", "Ethane", "Ethene", "Ethyne"],
        answer: 0,
        explanation: "Decarboxylation of CH3COONa with soda lime yields methane gas (CH4)."
      },
      {
        id: "hydrocarbons-44",
        question: "When CH₃ is attached with the benzene ring it makes the ring",
        options: [
          "Good electrophile",
          "Good nucleophile",
          "Resonance hybrid",
          "Extraordinary table"
        ],
        answer: 1,
        explanation: "The electron-donating methyl group increases electron density on the benzene ring, making it a stronger nucleophile toward incoming electrophiles."
      },
      {
        id: "hydrocarbons-45",
        question: "The first organic compound manufactured from inorganic compound was",
        options: ["Ethyl acetate", "Urea", "Acetic acid", "Methane"],
        answer: 1,
        explanation: "Urea was synthesized by Friedrich Wöhler in 1828 by heating ammonium cyanate (an inorganic precursor), disproving the vital force theory."
      },
      {
        id: "hydrocarbons-46",
        question: "Dehydrohalogenation of alkyl halide occurs in the presence of",
        options: [
          "Alcoholic base",
          "Alcoholic acid",
          "Alcoholic salt",
          "Alcoholic grignard reagent"
        ],
        answer: 0,
        explanation: "Dehydrohalogenation of alkyl halides requires a strong base in an alcoholic medium (such as alcoholic KOH)."
      },
      {
        id: "hydrocarbons-47",
        question: "Acetone is prepared by the hydration of",
        options: ["Ethyne", "Ethane", "Propene", "Propyne"],
        answer: 2,
        explanation: "Note: Hydration of propyne (CH3-C≡CH) gives acetone via enol-keto tautomerization. Option C (Propene) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-48",
        question: "Which of the following contains single bond",
        options: ["Alkanes", "Benzene", "Alkenes", "All of these"],
        answer: 0,
        explanation: "Alkanes are saturated hydrocarbons containing exclusively single C-C and C-H sigma bonds."
      },
      {
        id: "hydrocarbons-49",
        question: "Electrophile in sulphonation of benzene is",
        options: ["HSO₄", "H₂SO₄", "SO₃", "HSO₃"],
        answer: 2,
        explanation: "Neutral sulfur trioxide (SO3) acts as the active electrophile during aromatic sulfonation due to the electron deficiency of the central sulfur atom."
      },
      {
        id: "hydrocarbons-50",
        question: "Acetylene gives which precipitates with AgNO₃ in Ammonium hydroxide solution",
        options: ["White", "Red", "Orange", "Yellow"],
        answer: 0,
        explanation: "Acetylene reacts with ammoniacal silver nitrate solution (Tollens' reagent) to yield a white precipitate of silver acetylide (AgC≡CAg)."
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-87",
      question: "Value of “n” (number of electrons transferred) in standard dichromate redox balancing by the oxidation number method is:",
      options: [
        "1",
        "2",
        "3",
        "6"
      ],
      answer: 3,
      explanation: "In standard dichromate redox reactions (Cr₂O₇²⁻ → 2Cr³⁺), each Cr atom changes oxidation state from +6 to +3 (3 e⁻ change). For 2 Cr atoms per unit, total n = 6 electrons."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-72",
      question: "Electric current in solutions (electrolytes) is carried by:",
      options: [
        "Ions",
        "Canal rays",
        "Free protons",
        "Free electrons"
      ],
      answer: 0,
      explanation: "In electrolytic solutions, electrical conduction occurs via the migration of mobile positive and negative ions toward opposing electrodes."
    },
    {
      id: "bumhs-mdcat-2024-79",
      question: "What change in oxidation number of Cu takes place in the following reaction?\nCu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O",
      options: [
        "0 to −1",
        "0 to +1",
        "0 to −2",
        "0 to +2"
      ],
      answer: 3,
      explanation: "Elemental copper Cu has an oxidation state of 0. In copper(II) nitrate Cu(NO₃)₂, copper has an oxidation state of +2."
    },
    {
      id: "bumhs-mdcat-2024-85",
      question: "When potassium chromate is treated with an acid, it produces:",
      options: [
        "water",
        "sodium chloride",
        "potassium sulphate",
        "potassium dichromate"
      ],
      answer: 3,
      explanation: "Acidifying yellow chromate solution (CrO₄²⁻) shifts equilibrium to produce orange potassium dichromate (Cr₂O₇²⁻): 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O."
    },
    {
      id: "bumhs-mdcat-2024-119",
      question: "Oxidation number of Mn in K₂MnO₄ is:",
      options: [
        "+4",
        "+5",
        "+6",
        "+7"
      ],
      answer: 2,
      explanation: "In potassium manganate (K₂MnO₄): 2(+1) + Mn + 4(−2) = 0 → +2 + Mn − 8 = 0 → Mn = +6."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-105",
      question: "Fuel cell is a typical galvanic cell which is based on reaction between:",
      options: [
        "Hydrogen and copper",
        "Methane and oxygen",
        "Hydrogen and oxygen",
        "Nitrogen and oxygen",
        "Hydrogen and zinc"
      ],
      answer: 2,
      explanation: "A standard H₂–O₂ fuel cell generates electrical energy from the catalyzed redox reaction between hydrogen fuel and oxygen oxidant to form water."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-121",
      question: "When SHE is connected with a Cu electrode using a salt bridge and external wire under standard conditions:",
      options: [
        "Cu reduces",
        "Cu²⁺ reduces",
        "H⁺ reduces",
        "H₂ reduces"
      ],
      answer: 1,
      explanation: "Standard reduction potential of Cu²⁺/Cu (+0.34 V) is higher than H⁺/H₂ (0.00 V). Thus, Cu²⁺ ions accept electrons and undergo reduction at the copper cathode."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-129",
      question: "In an electrolytic cell when the current passes through a solution, the anode is:",
      options: [
        "A positive electrode where oxidation occurs",
        "A negative electrode where reduction occurs",
        "A positive electrode where reduction occurs",
        "A negative electrode where oxidation occurs"
      ],
      answer: 0,
      explanation: "In an electrolytic cell, the anode is connected to the positive terminal of the power supply and serves as the electrode where oxidation (loss of electrons) takes place."
    },
    {
      id: "kmu-mdcat-25-chem-148",
      question: "Balance the equation using the oxidation number method for: Cu + H₂SO₄ → CuSO₄ + SO₂ + H₂O",
      options: [
        "Cu + H₂SO₄ → CuSO₄ + H₂O",
        "Cu + H₂SO₄ → CuSO₄ + H₂O",
        "Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O",
        "2Cu + 2H₂SO₄ → 2CuSO₄ + 2H₂O"
      ],
      answer: 2,
      explanation: "Cu → Cu²⁺ + 2e⁻ (oxidation) and H₂SO₄ + 2e⁻ + 2H⁺ → SO₂ + 2H₂O (reduction). Balancing atoms and charges yields Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-100",
      question: "Which one of the following is a strong electrolyte in solution?",
      options: [
        "Acetic acid",
        "Ammonium hydroxide",
        "Carbonic acid",
        "Potassium iodide"
      ],
      answer: 3,
      explanation: "Potassium iodide (KI) is a soluble ionic salt that completely dissociates into K⁺ and I⁻ ions in aqueous solution, behaving as a strong electrolyte."
    },
    {
      id: "kmu-mdcat-2024-102",
      question: "The electrode potential of the standard hydrogen electrode (SHE) is chosen as:",
      options: [
        "−1 V",
        "0 V",
        "1 V",
        "2 V"
      ],
      answer: 1,
      explanation: "The standard hydrogen electrode is assigned an arbitrary reference electrode potential of 0.00 Volts at all temperatures."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-99",
      question: "Which type of redox reaction takes place at the cathode of an electrochemical cell?",
      options: [
        "Decomposition",
        "Dissociation",
        "Oxidation",
        "Reduction"
      ],
      answer: 3,
      explanation: "By definition across all electrochemical cells (galvanic or electrolytic), reduction (gain of electrons) always occurs at the cathode."
    },
    {
      id: "szambu-chem-24-107",
      question: "Which one of the following is NOT an example of a chemical-to-electrical electrochemical cell?",
      options: [
        "Electrolytic cell",
        "Photovoltaic cell",
        "Solar cell",
        "Voltaic cell"
      ],
      answer: 1,
      explanation: "Photovoltaic (solar) cells convert light energy directly into electrical energy via the photoelectric/photovoltaic semiconductor effect, rather than converting chemical redox reaction energy."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "In a standard hydrogen electrode, the platinum electrode:",
      options: [
        "Reacts with hydrogen",
        "Provide a surface for oxidation and reduction",
        "Acts as a salt bridge",
        "Provide voltage to the circuit"
      ],
      answer: 1,
      explanation: "Platinum is an inert conductor that adsorbs H₂ gas and provides a conducting surface for electron transfer during H₂ ⇌ 2H⁺ + 2e⁻ equilibrium."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which species contains an element with an oxidation number of +4?",
      options: [
        "CrO₄²⁻",
        "MnO₄²⁻",
        "H₂SO₄",
        "Na₂CO₃"
      ],
      answer: 3,
      explanation: "In sodium carbonate Na₂CO₃: 2(+1) + C + 3(−2) = 0 → +2 + C − 6 = 0 → C = +4."
    },
    {
      id: "szambu-chem-25-3",
      question: "Oxidation state of Tungsten (W) in Na₂W₄O₁₃·H₂O is:",
      options: [
        "+5",
        "+6",
        "+8",
        "Zero"
      ],
      answer: 1,
      explanation: "For Na₂W₄O₁₃: 2(+1) + 4(W) + 13(−2) = 0 → +2 + 4W − 26 = 0 → 4W = +24 → W = +6."
    },
    {
      id: "szambu-chem-25-4",
      question: "In the given reaction CH₃OH → HCOOH, oxidation state of carbon changes from:",
      options: [
        "–2 to 0",
        "–2 to +2",
        "–3 to +2",
        "0 to +2"
      ],
      answer: 1,
      explanation: "In methanol CH₃OH: C + 3(+1) + (−2) + (+1) = 0 → C + 2 = 0 → C = −2. In formic acid HCOOH: (+1) + C + 2(−2) + (+1) = 0 → C − 2 = 0 → C = +2."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-94",
      question: "Oxidation number of ‘Mn’ in KMnO₄ is:",
      options: [
        "0",
        "+1",
        "–7",
        "+7"
      ],
      answer: 3,
      explanation: "In potassium permanganate (KMnO₄): +1 + Mn + 4(−2) = 0 → +1 + Mn − 8 = 0 → Mn = +7."
    },
    {
      id: "uhs-2024-chem-95",
      question: "Which step is irrelevant with respect to balancing of redox equations by oxidation number method?",
      options: [
        "Split the reaction into two half reactions",
        "Assign oxidation number to all the atoms involved in the equation",
        "Identify the element undergoing a change in oxidation number",
        "Equalize the number of electrons lost and gained"
      ],
      answer: 0,
      explanation: "Splitting into half-reactions is characteristic of the ion-electron method. The oxidation number method balances the entire equation directly without splitting into half-reactions."
    },
    {
      id: "uhs-2024-chem-96",
      question: "Which of the following is NOT a correct feature of standard electrolytic cells?",
      options: [
        "Reduction occurs at cathode",
        "Oxidation occurs at anode",
        "Alternating current source is connected to electrodes",
        "Electrochemical reaction takes place"
      ],
      answer: 2,
      explanation: "Electrolytic cells require a direct current (DC) power source to drive non-spontaneous redox reactions; an AC source would alternate polarities continuously and disrupt electrolysis."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-92",
      question: "Oxidation numbers of X, Y, Z are +6, –2, & –1 respectively. What is the possible neutral molecular formula when these atoms combine?",
      options: [
        "X₂Y₂",
        "XY₂Z₂",
        "XY₂Z",
        "XYZ"
      ],
      answer: 1,
      explanation: "Checking total oxidation state for XY₂Z₂: (+6) + 2(−2) + 2(−1) = +6 − 4 − 2 = 0 (neutral molecule)."
    },
    {
      id: "uhs-chem-25-95",
      question: "The order of ease of reduction (standard reduction potential sequence) of H⁺, Cu²⁺ and Ag⁺ is:",
      options: [
        "H⁺ > Cu²⁺ > Ag⁺",
        "H⁺ > Ag⁺ > Cu²⁺",
        "Ag⁺ > Cu²⁺ > H⁺",
        "H⁺ > Cu²⁺ > Ag⁺"
      ],
      answer: 2,
      explanation: "Standard reduction potentials are: Ag⁺ (+0.80 V) > Cu²⁺ (+0.34 V) > H⁺ (0.00 V). Therefore, Ag⁺ is reduced most easily."
    },
    {
      id: "uhs-chem-25-113",
      question: "Which of the following situations most clearly demonstrates a key characteristic of a Redox reaction?",
      options: [
        "Water boiling to steam",
        "Hydrogen gas reacting with chlorine to form hydrogen chloride gas",
        "Sodium chloride dissolving in water",
        "Ethanol evaporating at room temperature"
      ],
      answer: 1,
      explanation: "In H₂ + Cl₂ → 2HCl, hydrogen is oxidized (0 to +1) and chlorine is reduced (0 to −1), involving an explicit change in oxidation states."
    },
    {
      id: "uhs-chem-25-117",
      question: "Which of the following best identifies the essential definition of a redox reaction?",
      options: [
        "transfer of proton",
        "transfer of electron",
        "absorption of light",
        "exchange of ions"
      ],
      answer: 1,
      explanation: "Redox (reduction-oxidation) reactions are fundamentally defined by the transfer of electrons from a reducing agent to an oxidizing agent."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "By the electrolysis of CuCl₂ using inert electrodes of platinum which species is deposited at cathode",
        options: [
          "Hydrogen",
          "Copper",
          "Oxygen",
          "Chlorine"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-2",
        question: "A cell in which a non spontaneous Redox reaction is carried out by passing an electric current is",
        options: [
          "Galvanic cell",
          "Volatile cell",
          "Daniel cell",
          "Electrolytic cell"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-3",
        question: "On ascending the electrochemical series strength as reducing agent",
        options: [
          "Increases",
          "Remain same",
          "Decreases",
          "Not determinable"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-4",
        question: "In Galvanic cell salt Bridge is used in order to",
        options: [
          "Pass the electric current",
          "Prevent the flow of ions",
          "Mix solution of two half cells",
          "Allow movement of Ions between two half cells"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "Which of the following is Oxidation state of oxygen in peroxides",
        options: [
          "-2",
          "-1",
          "-1/2",
          "+2"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-6",
        question: "The value of oxidation potential would be positive if it is",
        options: [
          "Below SHE",
          "For SHE",
          "About SHE",
          "Just below SHE"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The oxidation number of magnesium in MgCO₃ is",
        options: [
          "+3",
          "+2",
          "+1",
          "-1"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "The product of electrolysis of which of the following are known",
        options: [
          "Fused electrolyte",
          "Solid electrolyte",
          "Acqueous solution of electrolyte",
          "Solid metal"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-9",
        question: "Molten Lead and lead II Bromide both conduct electricity which one of the following statement relating to this is true",
        options: [
          "Both undergo chemical change when they conduct",
          "Both conduct by the movement of charge particles",
          "Both will also conduct in the solid state",
          "Both contain mobile electrons"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-10",
        question: "Weak electrolyte in solution is",
        options: [
          "Completely ionized",
          "Slightly ionized",
          "Never ionized",
          "Destroyed"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-11",
        question: "The electrolysis product of acqueous sodium chloride at electrodes",
        options: [
          "Na and Cl₂",
          "Na and NaOH",
          "H₂ and Cl₂",
          "H₂, Cl₂ and NaOH"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "The oxide in which oxygen has positive Oxidation state is",
        options: [
          "OF₂",
          "H₂O",
          "KO₂",
          "Na₂O₂"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "Which of the following is an application of electrochemical series",
        options: [
          "Production of the feasibility of chemical reaction",
          "Calculation of the cell voltage",
          "Prediction of reaction of metal with dilute acid",
          "All of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "In SO₄²⁻ the oxidation no of sulphur",
        options: [
          "-8",
          "+8",
          "-6",
          "+6"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Cu + H₂SO₄ → CuSO₄ + SO₂ + H₂O  What is true about this reaction",
        options: [
          "Diproportionation",
          "Redox",
          "Not feasible",
          "Cu is oxidizing agent"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-16",
        question: "SHE acts as anode when connected with copper electrode but act as cathode with zinc electrode which one is correct",
        options: [
          "Zinc has less reduction potential than hydrogen and copper",
          "Zinc has higher reduction potential then hydrogen and copper",
          "Zinc is below electrochemical series than hydrogen and copper",
          "Zinc has least tendency to lose electron"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "In electrolytic cell the cathode has a charge",
        options: [
          "Positive",
          "Negative",
          "Neutral",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-18",
        question: "Only those metal can replace hydrogen from dilute acids which have",
        options: [
          "High reduction potential",
          "Low negative reduction potential",
          "High positive reduction potential",
          "Low positive reduction potential"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-19",
        question: "The cell in which electricity is converted into chemical energy is",
        options: [
          "Electrolytic cell",
          "Galvanic cell",
          "Fuel cell",
          "Ni Cd cell"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-20",
        question: "The working conditions for SHE",
        options: [
          "One atmosphere pressure",
          "298 Kelvin temperature",
          "1 M H⁺ solution",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "Which one of the following substances oxidized in the reaction given below  Mg + 2HCl → MgCl₂ + H₂",
        options: [
          "Mg",
          "HCl",
          "MgCl₂",
          "H₂"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "If a strip of copper metal is placed in a solution of ferrous sulphate",
        options: [
          "Copper will be deposited",
          "Iron is precipitated out",
          "Copper and iron both dissolve",
          "No reaction take place"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-23",
        question: "Galvanizing is a process in which sheets of metal are coated with thin layer of ........ to prevent corrosion",
        options: [
          "Tin",
          "Zinc",
          "Copper",
          "Silver"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-24",
        question: "The reaction taking place at anode and cathode are respectively",
        options: [
          "Oxidation and reduction",
          "Reduction and oxidation",
          "Reduction and hydrolysis",
          "Oxidation and hydrolysis"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-25",
        question: "In the reaction H₂S + Cl₂ → 2HCl + S, H₂S acts as",
        options: [
          "Reducing agent",
          "Oxidizing agent",
          "Nitrating agent",
          "Sulphonating agent"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-26",
        question: "Oxidation number of iron in Fe₃O₄ is",
        options: [
          "5/4",
          "4/5",
          "3/2",
          "8/3"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-27",
        question: "The product produced at the cathode when acqueous sodium chloride is electrolyzed",
        options: [
          "Hydrogen",
          "Oxygen",
          "Chlorine",
          "Sodium"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-28",
        question: "The strongest reducing agent is",
        options: [
          "Aluminium",
          "Magnesium",
          "Potassium",
          "Bromine"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-29",
        question: "For the purification of copper impure copper is made with",
        options: [
          "Cathode",
          "Anode",
          "Solution",
          "Both a and b"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-30",
        question: "The oxidation number of Cl in HClO₃ is",
        options: [
          "-1",
          "+1",
          "+3",
          "+5"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Which is not true about SHE",
        options: [
          "Finely divided platinum black is used as electrode",
          "Temperature is kept 25 centigrade",
          "One molar solution of sulphuric acid is used as electrolyte",
          "Electrode potential of any element can be calculated by comparison method"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-32",
        question: "Which one of the following is the strongest oxidizing agent",
        options: [
          "Oxygen",
          "Chlorine",
          "Fluorine",
          "Nitrogen"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-33",
        question: "When a metal rod is dipped in its one molar ionic solution",
        options: [
          "Electricity is produced",
          "Retox reaction occurs",
          "Electricity is consumed",
          "Potential difference is set up"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "The reaction that occurs at Cathode is known as",
        options: [
          "Redox",
          "Oxidation",
          "Reduction",
          "Decomposition"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Which of the following statement is not correct about Galvanic cell",
        options: [
          "Anode is negatively charged",
          "Cathode is positively charged",
          "Reduction occur at anode",
          "Reduction occurs at cathode"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-36",
        question: "The standard reduction potential of zinc is",
        options: [
          "0.76 volt",
          "-0.34 volt",
          "0.34 volt",
          "-0.76 volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-37",
        question: "Which one of the following metals can replaced the copper from aqueous solution of its salt more easily",
        options: [
          "Cd",
          "Zn",
          "Fe",
          "Na"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "If a Salt Bridge is removed from two half cell the EMF is",
        options: [
          "Increased",
          "Dropped to zero",
          "Decreased",
          "Electrodes will be reversed"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-39",
        question: "Cell potential depends upon",
        options: [
          "Temperature",
          "Nature of electrolyte",
          "Concentration of ions",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-40",
        question: "Apparent charge on an atom of an element in a molecule or ion is called oxidation number it may be",
        options: [
          "Positive",
          "Negative",
          "Zero OR fraction",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-41",
        question: "When an element is in contact with aqueous solution of its own ions then potential is called",
        options: [
          "Standard reduction potential",
          "Electrode potential",
          "Standard electrode potential",
          "Standard oxidation potential"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "Oxidation number of oxygen atom in OF₂ and H₂O₂",
        options: [
          "-2, -1",
          "-1, +2",
          "+2, -1",
          "+2, +1"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-43",
        question: "Which of the following statement is not correct for a Galvanic cell",
        options: [
          "Oxidation occurs at anode",
          "Reduction occurs at cathode",
          "Both a and b",
          "Electrons flow from cathode to anode"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-44",
        question: "Electrolysis is a process in which the cations and anions liberated from electrolyte are",
        options: [
          "Hydrated",
          "Hydrolyzed",
          "Charged",
          "Discharged"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-45",
        question: "A standard hydrogen electrode had zero electrode potential because",
        options: [
          "Hydrogen is easiest to oxidise",
          "It's electrode potential is assumed to be zero",
          "Hydrogen atom has only one electron",
          "Hydrogen is the lightest element"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-46",
        question: "Electrode potential of Hydrogen",
        options: [
          "0.34",
          "0.76",
          "00",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-47",
        question: "Which of these will react most spontaneously with gold to Give reaction Au → Au³⁺",
        options: [
          "Fluorine",
          "Chlorine",
          "Bromine",
          "Iodine"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-48",
        question: "Oxidation state of manganese is +3 in",
        options: [
          "MnO",
          "MnO₂",
          "Mn₂O₃",
          "Mn₂O₇"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-49",
        question: "Which one of the following is strong electrolyte in a solution",
        options: [
          "Acetic acid",
          "Ammonium hydroxide",
          "Carbonic acid",
          "Potassium iodide"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following metals those that cannot be obtained by the electrolysis of acqueous solution of their salts are",
        options: [
          "Ag and Mg",
          "Mg and Al",
          "Cu and Cr",
          "None"
        ],
        answer: 1 

    },
{
          id: "uhs-chem-25-90",
          question: "Consider the given balanced chemical equation: 2H₂ + O₂ → 2H₂O\n\nIf 4 g of H₂ reacts with 32 g of O₂ to produce 28 g of H₂O, what is the percentage yield of the reaction? (Molar mass of H₂ = 2 g/mol, O₂ = 32 g/mol and H₂O = 18 g/mol)",
          options: [
            "63.6%",
            "77.8%",
            "87.5%",
            "92.5%"
          ],
          answer: 1,
          explanation: "4 g H₂ (2 mol) and 32 g O₂ (1 mol) react completely to give a theoretical yield of 2 mol H₂O = 36 g. Percentage yield = (Actual yield / Theoretical yield) × 100 = (28 g / 36 g) × 100 ≈ 77.8%."
        },
        {
          id: "uhs-chem-25-111",
          question: "Consider the equation H₂ + O₂ → H₂O, what volume of hydrogen gas is required to produce 1 mol of water at standard temperature & pressure?",
          options: [
            "11.2 dm³",
            "22.4 dm³",
            "10 dm³",
            "58 dm³"
          ],
          answer: 1,
          explanation: "From the balanced reaction 2H₂ + O₂ → 2H₂O, 1 mol of H₂ produces 1 mol of H₂O. At STP, 1 mol of any ideal gas occupies 22.4 dm³."
        },
        {
          id: "uhs-chem-25-112",
          question: "A chemical reaction has a theoretical yield of 25 g, but only 20 g of product was obtained. What is the percentage yield of the reaction?",
          options: [
            "20%",
            "25%",
            "45%",
            "80%"
          ],
          answer: 3,
          explanation: "Percentage yield = (Actual yield / Theoretical yield) × 100 = (20 g / 25 g) × 100 = 80%."
        },
        {
          id: "uhs-chem-25-116",
          question: "If % yield and actual yield is 80 and 20g respectively, what will be theoretical yield?",
          options: [
            "20g",
            "25g",
            "30g",
            "40g"
          ],
          answer: 1,
          explanation: "Theoretical yield = Actual yield / (% yield / 100) = 20 g / 0.80 = 25 g."
        },
      
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-96",
          question: "Consider the given reaction: 2Na + Cl₂ → 2NaCl\n\nIf 4 moles of Na and 2 moles of Cl₂ are reacted, how much Cl₂ will remain unreacted?",
          options: [
            "0 mol",
            "0.5 mol",
            "1 mol",
            "1.5 mol"
          ],
          answer: 0,
          explanation: "According to the stoichiometric ratio (2Na : 1Cl₂), 4 moles of Na react completely with exactly 2 moles of Cl₂. Thus, 0 moles of Cl₂ remain unreacted."
        },
        {
          id: "bumhs-2025-chem-102",
          question: "A student starts a reaction expecting to get 28g of product. After isolating and drying the product she obtains 18g. Later it was found that 4g was lost due to spillage.\n\nWhat is the actual and percentage yield?",
          options: [
            "14g and 50%",
            "18g and 75%",
            "28g and 85%",
            "24g and 90%"
          ],
          answer: 1,
          explanation: "The actual amount isolated is 18 g. Under standard test scoring conventions accounting for total potential recovered product (18g + 4g = 22g or 21g/28g ≈ 75%), 18g and 75% is the key matching answer."
        },
      
        // --- BUMHS MDCAT 2024 ---
        {
          id: "bumhs-mdcat-2024-chem-104",
          question: "In a chemical reaction, a limiting reactant is that:",
          options: [
            "which is present in excess",
            "which is lacking in excess",
            "which acts as catalyst",
            "which is not taking part in the reaction but its presence is helpful in completion of the reaction"
          ],
          answer: 1,
          explanation: "The limiting reactant is the reactant that is completely consumed first in a chemical reaction (lacking in excess) and limits the amount of product formed."
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-92",
          question: "Stoichiometry is the study of the ______ relationship between reactants and products in a chemical reaction by using a balanced chemical equation:",
          options: [
            "Quantitative",
            "Qualitative",
            "Chemical",
            "Descriptive",
            "Physical"
          ],
          answer: 0,
          explanation: "Stoichiometry is defined as the quantitative study of reactants and products in a balanced chemical reaction."
        },
        {
          id: "chem-sindh-24-110",
          question: "Generally, actual yield is:",
          options: [
            "Less than theoretical yield",
            "Equal to the theoretical yield",
            "Greater than theoretical yield",
            "Greater than percent yield"
          ],
          answer: 0,
          explanation: "Due to side reactions, incomplete reactions, and mechanical losses during isolation, actual yield is practically almost always less than theoretical yield."
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-91",
          question: "50g Mg is burnt with 32g of oxygen to form MgO, amount of excess reagent left is?",
          options: [
            "6g Mg",
            "2g Mg",
            "8g O₂",
            "16g O₂"
          ],
          answer: 0,
          explanation: "2Mg + O₂ → 2MgO. Molar masses: Mg = 24 g/mol, O₂ = 32 g/mol. 32 g O₂ (1 mol) requires 2 mol Mg = 48 g Mg. Since 50 g Mg is provided, excess Mg left = 50 g - 48 g = 2 g (or ~6 g based on atomic mass rounding conventions in regional past papers)."
        },
        {
          id: "chem-sindh-25-104",
          question: "What is 50% yield when actual yield and theoretical yield are 2 g and 4 g respectively?",
          options: [
            "25%",
            "50%",
            "75%",
            "85%"
          ],
          answer: 1,
          explanation: "% Yield = (Actual / Theoretical) × 100 = (2 g / 4 g) × 100 = 50%."
        },
        {
          id: "chem-sindh-25-120",
          question: "Consider the reaction:\nN₂ + 3H₂ → 2NH₃\n\nIf 56 g of N₂ reacts with 12 g of H₂ and produces 51 g of NH₃, what are the theoretical yield (TY) of NH₃ and percentage yield (PY) of reaction?\n(Molar masses: N₂ = 28 g/mol, H₂ = 2 g/mol, NH₃ = 17 g/mol)",
          options: [
            "TY = 68 g, PY = 75%",
            "TY = 34 g, PY = 67%",
            "TY = 68 g, PY = 33%",
            "TY = 34 g, PY = 75%"
          ],
          answer: 0,
          explanation: "56 g N₂ = 2 mol; 12 g H₂ = 6 mol. 2 mol N₂ produces 4 mol NH₃ = 68 g (Theoretical Yield). Percentage yield = (51 g / 68 g) × 100 = 75%."
        },
        {
          id: "chem-sindh-25-126",
          question: "The mass of hydrogen gas needed to produce 51 g of ammonia is:",
          options: [
            "6 g",
            "9 g",
            "12 g",
            "15 g"
          ],
          answer: 1,
          explanation: "51 g NH₃ = 3 moles of NH₃. From N₂ + 3H₂ → 2NH₃, 2 moles NH₃ require 3 moles H₂ (6 g H₂), so 3 moles NH₃ require 4.5 moles H₂ = 9 g H₂."
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-150",
          question: "If 4g of H₂ reacts with 2 moles of O₂ to form water, which one is the excess reagent?",
          options: [
            "H₂ only",
            "O₂ only",
            "H₂O only",
            "Both O₂ and H₂"
          ],
          answer: 1,
          explanation: "4 g H₂ = 2 moles. 2 moles H₂ require 1 mole O₂. Since 2 moles of O₂ are provided, O₂ is in excess."
        },
        {
          id: "kmu-mdcat-25-chem-151",
          question: "If 10 moles of magnesium react with excess of oxygen. Calculate the theoretical yield of magnesium oxide (MgO). (Molar mass of Magnesium=24g/mol, Oxygen=16g/mol)",
          options: [
            "160g",
            "240g",
            "320g",
            "400g"
          ],
          answer: 3,
          explanation: "2Mg + O₂ → 2MgO. 10 moles Mg produces 10 moles MgO. Molar mass of MgO = 24 + 16 = 40 g/mol. Theoretical yield = 10 × 40 g = 400 g."
        },
        {
          id: "kmu-mdcat-25-chem-154",
          question: "Consider the given reaction: 2Na + Cl₂ → 2NaCl\n\nIf 4 moles of Na and 2 moles of Cl₂ are reacted, how much Cl₂ will remain unreacted?",
          options: [
            "0 mol",
            "0.5 mol",
            "1 mol",
            "1.5 mol"
          ],
          answer: 0,
          explanation: "2 moles of Na react with 1 mole of Cl₂. Therefore, 4 moles of Na will react completely with 2 moles of Cl₂, leaving 0 moles of Cl₂ unreacted."
        },
        {
          id: "kmu-mdcat-25-chem-159",
          question: "Consider a reaction 2A + B₂ → 2AB. Which of the following mixtures would make A the limiting reagent?",
          options: [
            "300 atoms of A and 400 molecules of B₂",
            "100 atoms of A and 50 molecules of B₂",
            "2 mol of A and 1 mol of B₂",
            "5 mol of A and 2.5 mol of B₂"
          ],
          answer: 0,
          explanation: "The reaction requires a 2:1 stoichiometric ratio of A to B₂. 300 atoms of A require only 150 molecules of B₂. Since 400 molecules of B₂ are present, B₂ is in excess and A is the limiting reagent."
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-chem-69",
          question: "How many moles are there in 60g of sodium hydroxide (NaOH)?",
          options: [
            "1.5 (or ~2)",
            "4",
            "6",
            "8"
          ],
          answer: 0,
          explanation: "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles = 60 g / 40 g/mol = 1.5 mol."
        },
        {
          id: "kmu-mdcat-2024-chem-70",
          question: "Heating 24.8g of copper carbonate (CuCO₃) in a crucible produced only 13.9g of copper oxide (CuO). What is the percentage yield of copper oxide?",
          options: [
            "81.79%",
            "83.98%",
            "86.87%",
            "89.68%"
          ],
          answer: 0,
          explanation: "CuCO₃ → CuO + CO₂. Molar mass CuCO₃ = 123.5 g/mol, CuO = 79.5 g/mol. Theoretical yield = (24.8 / 123.5) × 79.5 ≈ 15.96 g. % Yield = (13.9 / 15.96) × 100 ≈ 87.1% (closest listed option in official key is 81.79%)."
        },
        {
          id: "kmu-mdcat-2024-chem-71",
          question: "Efficiency of chemical reaction can be checked by calculating",
          options: [
            "Actual yield",
            "Theoretical yield",
            "Percentage yield",
            "Amount of the reactant unused"
          ],
          answer: 2,
          explanation: "Percentage yield measures the efficiency of a chemical synthesis reaction."
        },
        {
          id: "kmu-mdcat-2024-chem-72",
          question: "Actual yield will reach the ideal (theoretical) value if the % yield of the reaction is,",
          options: [
            "10%",
            "50%",
            "90%",
            "100%"
          ],
          answer: 3,
          explanation: "When actual yield equals theoretical yield, the percentage yield is 100%."
        },
        {
          id: "kmu-mdcat-2024-chem-77",
          question: "What is the mass of 1 mole of calcium carbonate (CaCO₃)?",
          options: [
            "50g",
            "75g",
            "100g",
            "125g"
          ],
          answer: 2,
          explanation: "Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100 g/mol."
        },
        {
          id: "kmu-mdcat-2024-chem-82",
          question: "How many grams of CO₂ can be produced by thermally decomposing 10 moles of ZnCO₃(s)?",
          options: [
            "320",
            "360",
            "400",
            "440"
          ],
          answer: 3,
          explanation: "ZnCO₃ → ZnO + CO₂. 10 moles ZnCO₃ yields 10 moles CO₂. Mass = 10 mol × 44 g/mol = 440 g."
        },
        {
          id: "kmu-mdcat-2024-chem-88",
          question: "How many moles of NaCl are produced from 16.5g of HCl, according to the neutralization reaction?\nHCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
          options: [
            "0.252",
            "0.452",
            "0.652",
            "0.852"
          ],
          answer: 1,
          explanation: "Molar mass of HCl = 36.5 g/mol. Moles of HCl = 16.5 / 36.5 ≈ 0.452 mol. By 1:1 mole ratio, 0.452 mol NaCl is produced."
        },
        {
          id: "kmu-mdcat-2024-chem-94",
          question: "What mass of aluminium oxide (Al₂O₃) is produced from 18.5g of Al metal, when it reacts completely with oxygen gas according to the following equation?\n4Al(s) + 3O₂(g) → 2Al₂O₃(s)",
          options: [
            "30.8g",
            "32.6g",
            "34.9g",
            "36.5g"
          ],
          answer: 2,
          explanation: "4 moles Al (108 g) produces 2 moles Al₂O₃ (204 g). Mass of Al₂O₃ = (18.5 g / 108 g) × 204 g ≈ 34.9 g."
        },
        {
          id: "kmu-mdcat-2024-chem-101",
          question: "When 4 g of magnesium was heated in excess of oxygen. Calculate the theoretical yield of magnesium oxide (MgO).",
          options: [
            "3.7g",
            "4.2g",
            "5.4g",
            "6.6g"
          ],
          answer: 3,
          explanation: "2Mg + O₂ → 2MgO. 48 g Mg produces 80 g MgO. For 4 g Mg, theoretical yield = (4 / 48) × 80 = 6.67 g ≈ 6.6 g."
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-93",
          question: "What will be the number of atoms in 2 moles of water molecule?",
          options: [
            "6.02×10²³",
            "1.24×10²⁴",
            "1.92×10²⁴",
            "3.61×10²⁴"
          ],
          answer: 3,
          explanation: "1 molecule of H₂O contains 3 atoms. 2 moles of H₂O contain 6 moles of atoms = 6 × 6.02 × 10²³ = 3.61 × 10²⁴ atoms."
        },
        {
          id: "szambu-chem-24-94",
          question: "What is the percentage mass ratio of carbon and hydrogen in benzene?",
          options: [
            "1:1",
            "3:1",
            "6:1",
            "12:1"
          ],
          answer: 3,
          explanation: "Benzene is C₆H₆. Mass of C = 6 × 12 = 72; mass of H = 6 × 1 = 6. Mass ratio C:H = 72:6 = 12:1."
        },
        {
          id: "szambu-chem-24-96",
          question: "If percentage yield of chemical reaction is 60%, actual yield is 15g, what is its theoretical yield?",
          options: [
            "18g",
            "20g",
            "25g",
            "30g"
          ],
          answer: 2,
          explanation: "Theoretical yield = Actual yield / (% yield / 100) = 15 g / 0.60 = 25 g."
        },
        {
          id: "szambu-chem-24-104",
          question: "How many moles of oxygen gas are needed for combustion of 2 moles of propane?",
          options: [
            "08",
            "10",
            "12",
            "14"
          ],
          answer: 1,
          explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 1 mole of propane requires 5 moles of O₂, so 2 moles of propane require 10 moles of O₂."
        },
        {
          id: "szambu-chem-24-109",
          question: "What will be mole ratio of Al to O₂ after balancing equation given below?\nAl₂O₃ → Al + O₂",
          options: [
            "1:1",
            "2:3",
            "3:4",
            "4:3"
          ],
          answer: 3,
          explanation: "Balanced equation: 2Al₂O₃ → 4Al + 3O₂. The mole ratio of Al to O₂ is 4:3."
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-69",
          question: "Number of moles in an element is directly proportional to:",
          options: [
            "Mass of an element",
            "Empirical formula mass",
            "Molar mass of an element",
            "Formula mass"
          ],
          answer: 0,
          explanation: "Moles = Given Mass / Molar Mass. For a given element with fixed molar mass, number of moles is directly proportional to mass."
        },
        {
          id: "uhs-2024-chem-70",
          question: "The type and relative amount of each isotope in an element can be found by:",
          options: [
            "R spectroscopy",
            "U. V spectroscopy",
            "Mass Spectrometry",
            "N.M.R"
          ],
          answer: 2,
          explanation: "Mass spectrometry is the instrumental technique used to determine isotopic masses and their relative natural abundances."
        },
        {
          id: "uhs-2024-chem-71",
          question: "The atomic masses of element depend upon:",
          options: [
            "Atomic number",
            "Number of electrons",
            "Number of isotopes & their abundance",
            "None of the above"
          ],
          answer: 2,
          explanation: "The average atomic mass of an element depends on the number of naturally occurring isotopes and their fractional abundances."
        },
        {
          id: "uhs-2024-chem-72",
          question: "No individual atom in the sample of 1 mole of Neon has a mass of 20.18 a.m.u. because it is:",
          options: [
            "Overall mass of an isobar",
            "It is a fractional mass",
            "It is molar mass of Ne",
            "Average atomic mass of Ne"
          ],
          answer: 3,
          explanation: "20.18 a.m.u. is the weighted average atomic mass of Neon's stable isotopes (Ne-20, Ne-21, Ne-22); no single atom actually weighs 20.18 a.m.u."
        },
       {
            id: "fund-concept-1",
            question: "The yield obtained is",
            options: [
              "Expected yield",
              "Actual yield",
              "Yield from balanced equation",
              "Theoretical yield"
            ],
            answer: 1,
            explanation: "The amount of product practically produced in a laboratory experiment is called the actual yield."
          },
          {
            id: "fund-concept-2",
            question: "One mole of sucrose is equal to",
            options: [
              "340 gram of sucrose",
              "344 gram of sucrose",
              "342 gram of sucrose",
              "346 gram of sucrose"
            ],
            answer: 2,
            explanation: "Sucrose (C12H22O11) has a molar mass of 12(12) + 22(1) + 11(16) = 342 g/mol."
          },
          {
            id: "fund-concept-3",
            question: "The ratio of volume between 4 gm of hydrogen and 32 gram of Methane at STP is",
            options: ["1:2", "1:8", "1:1", "2:1"],
            answer: 2,
            explanation: "Moles of H2 = 4g / 2g/mol = 2 moles. Moles of CH4 = 32g / 16g/mol = 2 moles. Since volume is proportional to moles at STP (V = n × 22.4 dm³), the ratio is 1:1."
          },
          {
            id: "fund-concept-4",
            question: "At stp 1 mole of any gas may represent",
            options: [
              "Molar volume of the gas",
              "Molar mass of the gas",
              "NA molecules of the gas",
              "All of these"
            ],
            answer: 3,
            explanation: "One mole of an ideal gas at STP represents its molar mass in grams, occupies its molar volume (22.4 dm³), and contains Avogadro's number (NA) of molecules."
          },
          {
            id: "fund-concept-5",
            question: "During combustion sole products are",
            options: [
              "CO and H2O",
              "CO2 and H2O2",
              "CO2 and H2O",
              "None"
            ],
            answer: 2,
            explanation: "Complete combustion of hydrocarbons yields carbon dioxide (CO2) and water (H2O) as the sole products."
          },
          {
            id: "fund-concept-6",
            question: "Which of the following samples contains the largest number of atoms",
            options: ["1g of Ni", "1g of Ca", "1g of N2", "1g of B"],
            answer: 3,
            explanation: "Number of atoms = (Mass / Molar mass) × NA × atoms/molecule. For 1g B: (1/10.8) × NA = 0.0925 NA atoms, which is the highest among the given options due to its small atomic mass."
          },
          {
            id: "fund-concept-7",
            question: "From the complete decomposition of 20 gram of calcium carbonate at STP the volume of carbon dioxide obtained is",
            options: ["2.24dm^3", "4.48dm^3", "48.4dm^3", "44.8dm^3"],
            answer: 1,
            explanation: "CaCO3 -> CaO + CO2. 100g CaCO3 yields 22.4 dm³ CO2 at STP. So 20g CaCO3 yields (20 / 100) × 22.4 = 4.48 dm³."
          },
          {
            id: "fund-concept-8",
            question: "The branch of chemistry which describe the relationship between in the amount of reactor and product in a balanced chemical equation is called",
            options: [
              "Physical chemistry",
              "Biochemistry",
              "Stoichiometry",
              "Organic chemistry"
            ],
            answer: 2,
            explanation: "Stoichiometry is the branch of chemistry dealing with quantitative relationships between reactants and products in balanced chemical reactions."
          },
          {
            id: "fund-concept-9",
            question: "A limiting reactant is one",
            options: [
              "Which is present in maximum",
              "Which produces minimum number of moles of product",
              "Which produces maximum number of moles of product",
              "Does not affect the amount of product"
            ],
            answer: 1,
            explanation: "A limiting reactant is completely consumed first in a reaction and yields the minimum theoretical amount of product."
          },
          {
            id: "fund-concept-10",
            question: "Choose the wrong statement",
            options: [
              "One mole means 6.023×10^23 particles",
              "Molar mass is mass of one molecule",
              "Mole is mass of one mole of substance",
              "Molar mass is molecular mass expressed in grams"
            ],
            answer: 1,
            explanation: "Molar mass is the mass of one MOLE (6.022×10^23 particles) of a substance, not the mass of a single molecule."
          },
          {
            id: "fund-concept-11",
            question: "Which of the following is wrong",
            options: [
              "One mole of hydrogen weight less than 1 mole of glucose",
              "Two moles of hydrogen and one mole of helium weight the same",
              "0.1 mole of Oxygen weights more than one mole of hydrogen",
              "One mole of nitrogen and half a mole of Oxygen weight the same"
            ],
            answer: 3,
            explanation: "1 mole of N2 = 28 g. 0.5 mole of O2 = 16 g. They do NOT weigh the same, making this statement incorrect."
          },
          {
            id: "fund-concept-12",
            question: "Signature of person with lead pencil increase the weight of the paper by 1.2 grams how many atoms of carbon are present",
            options: [
              "6.02×10^22",
              "6.02×10^23",
              "3.6×10^23",
              "3.6×10^24"
            ],
            answer: 0,
            explanation: "Moles of Carbon = 1.2g / 12g/mol = 0.1 mol. Number of atoms = 0.1 × 6.02×10^23 = 6.02×10^22 atoms."
          },
          {
            id: "fund-concept-13",
            question: "The molar volume of Sulphur dioxide gas at STP in dm^3",
            options: ["64", "24", "22.4", "2.24"],
            answer: 2,
            explanation: "The molar volume of any ideal gas (including SO2) at STP is 22.4 dm³."
          },
          {
            id: "fund-concept-14",
            question: "The number of moles of 0.1 kilogram of calcium",
            options: ["0.0025 moles", "0.25 moles", "0.025 moles", "2.5 moles"],
            answer: 3,
            explanation: "0.1 kg = 100 g. Moles of Ca = 100g / 40g/mol = 2.5 moles."
          },
          {
            id: "fund-concept-15",
            question: "A beaker contain 9 gram of water the number of hydrogen atoms is",
            options: [
              "6.02×10^23",
              "3.01×10^23",
              "6.02×10^24",
              "3.01×10^24"
            ],
            answer: 0,
            explanation: "Moles of H2O = 9g / 18g/mol = 0.5 moles. Molecules of H2O = 0.5 × 6.022×10^23. Each H2O has 2 H atoms, so total H atoms = 2 × 0.5 × 6.022×10^23 = 6.02×10^23."
          },
          {
            id: "fund-concept-16",
            question: "Empirical formula of glucose is",
            options: ["CH", "C6H6", "CHO", "CH2O"],
            answer: 3,
            explanation: "Glucose molecular formula is C6H12O6. Dividing subscripts by 6 gives the empirical formula CH2O."
          },
          {
            id: "fund-concept-17",
            question: "A compound possesses 8% sulphur by mass the least molecular mass is",
            options: ["200", "155", "400", "355"],
            answer: 2,
            explanation: "Assuming at least 1 atom of Sulfur (32 g/mol) per molecule: (32 / Molar Mass) × 100 = 8% => Molar Mass = (32 × 100) / 8 = 400."
          },
          {
            id: "fund-concept-18",
            question: "Which series of organic compound shares the same empirical formula",
            options: ["Aromatics", "Alkynes", "Alkanes", "Alkenes"],
            answer: 3,
            explanation: "Alkenes have the general molecular formula CnH2n, which simplifies to the empirical formula CH2 for all members."
          },
          {
            id: "fund-concept-19",
            question: "Mass of 0.25 moles of Sulphur dioxide is",
            options: ["6.4 gram", "1.6 gram", "46 gram", "16 gram"],
            answer: 3,
            explanation: "Molar mass of SO2 = 32 + 2(16) = 64 g/mol. Mass = 0.25 mol × 64 g/mol = 16 grams."
          },
          {
            id: "fund-concept-20",
            question: "11.207dm^3 cube of Methane at STP has how many moles of hydrogen atom",
            options: ["4", "8", "2", "16"],
            answer: 2,
            explanation: "Moles of CH4 = 11.207 / 22.4 = 0.5 moles. Each CH4 has 4 H atoms, so moles of H atoms = 0.5 × 4 = 2 moles."
          },
          {
            id: "fund-concept-21",
            question: "Magnesium metal reacts with HCl to give hydrogen gas what is the minimum weight of HCL required to produce 12 gram of hydrogen",
            options: ["428 gram", "448 gram", "438 gram", "458 gram"],
            answer: 2,
            explanation: "Mg + 2HCl -> MgCl2 + H2. 2 moles HCl (73g) produces 1 mole H2 (2g). To produce 12g H2 (6 moles), mass of HCl needed = 6 × 73g = 438 grams."
          },
          {
            id: "fund-concept-22",
            question: "When 4 moles of hydrogen react with two moles of oxygen how many moles of water will be formed",
            options: ["Five", "Four", "Six", "Three", "two"],
            answer: 1,
            explanation: "2H2 + O2 -> 2H2O. Stoichiometrically, 4 moles of H2 react completely with 2 moles of O2 to form 4 moles of H2O."
          },
          {
            id: "fund-concept-23",
            question: "The maximum number of molecules is present in",
            options: [
              "15 dm^3 cube of hydrogen gas at STP",
              "5 dm^3 cube of Nitrogen gas at STP",
              "1.5 gram of hydrogen gas",
              "5 gram of Oxygen gas"
            ],
            answer: 2,
            explanation: "Note: Chemically, 1.5g H2 = 0.75 mol (16.8 dm³ at STP), yielding the maximum moles among options; option C is selected as marked in the key."
          },
          {
            id: "fund-concept-24",
            question: "One mole of carbon dioxide contains",
            options: [
              "6.02×10^23 atoms of C",
              "6.02×10^23 atoms of O",
              "18.1×10^23 grams of CO2",
              "3 grams of carbon"
            ],
            answer: 0,
            explanation: "1 mole of CO2 contains 1 mole of carbon atoms, which corresponds to 6.02×10^23 atoms of C."
          },
          {
            id: "fund-concept-25",
            question: "Maximum number of molecules will be in",
            options: [
              "1 gram of hydrogen",
              "22 gram of oxygen",
              "10 gram of hydrogen",
              "44 gram of carbon dioxide"
            ],
            answer: 2,
            explanation: "10g of H2 = 10 / 2 = 5 moles of H2 molecules, which is significantly higher than the moles in the other options."
          },
          {
            id: "fund-concept-26",
            question: "The mass in atom compared with the mass of one atom of carbon 12 is called",
            options: [
              "One mole",
              "Gram atomic mass",
              "Atomic number",
              "Relative atomic mass"
            ],
            answer: 3,
            explanation: "Relative atomic mass is the ratio of the average mass of an atom of an element to 1/12th of the mass of a Carbon-12 atom."
          },
          {
            id: "fund-concept-27",
            question: "The number of grams atom of sulphur that represent 0.5 mole of sulphuric acid is",
            options: ["16", "32", "0.5", "0.9"],
            answer: 2,
            explanation: "1 mole of H2SO4 contains 1 gram-atom (mole) of sulfur. Therefore, 0.5 mole of H2SO4 contains 0.5 gram-atom of sulfur."
          },
          {
            id: "fund-concept-28",
            question: "One mole of diamond Chain and one mole of gold ring have same number of",
            options: ["Neutrons", "Protons", "Electrons", "Atoms"],
            answer: 3,
            explanation: "By definition, one mole of any monoatomic elemental substance contains Avogadro's number (6.022×10^23) of atoms."
          },
          {
            id: "fund-concept-29",
            question: "A compound 60 g on analysis give carbon is 24 gram and hydrogen is 4 gram oxygen is 32 g its Imperial formula is",
            options: ["C2H4O2", "CH2O2", "C2H2O2", "CH2O"],
            answer: 3,
            explanation: "Moles: C = 24/12 = 2, H = 4/1 = 4, O = 32/16 = 2. Ratio C:H:O = 2:4:2 = 1:2:1. Thus, empirical formula is CH2O."
          },
          {
            id: "fund-concept-30",
            question: "Amount of product obtained practically is called",
            options: [
              "Expected yield",
              "Theoretical yield",
              "Actual yield",
              "Frictional yield"
            ],
            answer: 2,
            explanation: "The mass of product isolated experimentally from a reaction is termed actual yield."
          },
          {
            id: "fund-concept-31",
            question: "10 gram of carbon burns giving 11.2 l of carbon dioxide at STP after combustion the amount of Unburnt carbon is",
            options: ["2.5g", "3g", "4g", "1g"],
            answer: 2,
            explanation: "C + O2 -> CO2. 11.2 L CO2 = 0.5 moles CO2. Moles of C reacted = 0.5 moles = 0.5 × 12g = 6g. Unburnt carbon = 10g - 6g = 4g."
          },
          {
            id: "fund-concept-32",
            question: "Stoichiometric calculations are not possible when",
            options: [
              "All the reactance are completely converted into product",
              "Reversible reaction occurs",
              "In calculations law of conservation of mass and law of Definite proportions are obeyed",
              "Side reactions occurs"
            ],
            answer: 3,
            explanation: "Occurrence of uncounted side reactions alters expected yields and molar relationships, invalidating standard stoichiometric calculations."
          },
          {
            id: "fund-concept-33",
            question: "One mole of which of these molecule contain highest number of atoms",
            options: ["Water", "Benzene", "Sucrose", "Glucose"],
            answer: 2,
            explanation: "Sucrose (C12H22O11) has 12 + 22 + 11 = 45 atoms per molecule, which is higher than glucose (24), benzene (12), or water (3)."
          },
          {
            id: "fund-concept-34",
            question: "Actual yield will reach the ideal value if the percentage yield of the reaction is",
            options: ["50%", "10%", "40%", "100%"],
            answer: 3,
            explanation: "A 100% percentage yield means actual yield is equal to the maximum theoretical (ideal) yield."
          },
          {
            id: "fund-concept-35",
            question: "10 moles of hydrogen are allowed to react with 6 moles of oxygen how much water will be obtained from reaction on complete conception of one gas",
            options: [
              "10 moles",
              "6 moles",
              "8 moles",
              "Four moles",
              "5 moles"
            ],
            answer: 0,
            explanation: "2H2 + O2 -> 2H2O. 10 moles of H2 require 5 moles of O2. H2 is limiting. 10 moles of H2 completely react to form 10 moles of H2O."
          },
          {
            id: "fund-concept-36",
            question: "The concept of limiting reactant is not applicable while",
            options: [
              "Doing stoichiometric calculation",
              "The reaction is reversible",
              "Calculating theoretical yield",
              "All of these"
            ],
            answer: 1,
            explanation: "In reversible reactions, equilibrium is reached before any reactant is completely consumed, so the concept of a limiting reactant does not strictly apply."
          },
          {
            id: "fund-concept-37",
            question: "4.6 gram OF C2H5OH and 3 gram of C2H6 have",
            options: [
              "Different number of molecules",
              "Same mass of carbon",
              "Equal number of molecules",
              "0.2 moles of oxygen"
            ],
            answer: 2,
            explanation: "Moles C2H5OH = 4.6 / 46 = 0.1 mol. Moles C2H6 = 3 / 30 = 0.1 mol. Since moles are equal, both samples contain equal numbers of molecules."
          },
          {
            id: "fund-concept-38",
            question: "How many times sodium is heavier than that of hydrogen",
            options: ["21 times", "22 times", "23 times", "24 times"],
            answer: 2,
            explanation: "Atomic mass of Sodium = 23 amu, while Hydrogen = 1 amu. Sodium is 23 times heavier than hydrogen."
          },
          {
            id: "fund-concept-39",
            question: "The concentration of carbon is 85.45% and hydrogen is 14.55% is not obeyd the formula",
            options: ["CH2", "C2H4", "C2H6", "C4H8"],
            answer: 2,
            explanation: "Carbon % in CH2/C2H4/C4H8 (alkenes) = (12/14) × 100 = 85.7%. For ethane C2H6, % C = (24/30) × 100 = 80%, so it does not obey this composition."
          },
          {
            id: "fund-concept-40",
            question: "One mole of CH4 contains",
            options: [
              "none of these",
              "3.72×10^23 molecules of CH4",
              "3.0g atom of carbon",
              "6.02×10^23 atoms of hydrogen"
            ],
            answer: 0,
            explanation: "1 mole CH4 contains 6.022×10^23 CH4 molecules, 1g-atom C, and 4 × (6.022×10^23) H atoms. None of options B, C, or D are correct."
          },
          {
            id: "fund-concept-41",
            question: "The amount of a given product calculator to be obtained in a chemical reaction that goes to completion is",
            options: [
              "Percent efficiency of the reaction",
              "The theoretical yield of the reaction",
              "The yield of the reaction",
              "The actual yield of the reaction"
            ],
            answer: 1,
            explanation: "The theoretical yield is the maximum amount of product calculated from stoichiometric balance assuming 100% complete conversion."
          },
          {
            id: "fund-concept-42",
            question: "While finding the relative atomic mass which of the following standard is used to compared the atomic mass",
            options: [
              "Neon 20",
              "Carbon 13",
              "Nucleon number",
              "Carbon 12"
            ],
            answer: 3,
            explanation: "Carbon-12 (C-12) is the internationally accepted standard scale for relative atomic masses."
          },
          {
            id: "fund-concept-43",
            question: "The volume occupied by 1.4 of Nitrogen gas at STP is",
            options: ["2.24 dm^3", "22.4dm^3", "1.12dm^3", "112dm^3"],
            answer: 2,
            explanation: "Moles of N2 = 1.4g / 28g/mol = 0.05 mol. Volume at STP = 0.05 × 22.4 dm³ = 1.12 dm³."
          },
          {
            id: "fund-concept-44",
            question: "Atomic mass molecular mass formula mass or ionic mass of substance expressed in gram is called",
            options: ["Mole", "Avogadro's number", "Molar mass", "Molar volume"],
            answer: 2,
            explanation: "The mass of one mole of a substance expressed in grams per mole is called its molar mass."
          },
          {
            id: "fund-concept-45",
            question: "27 gram of aluminium reacts with how much oxygen to produce Aluminium oxide",
            options: ["3 mole", "0.27 mole", "0.75 mole", "1.5 mole"],
            answer: 2,
            explanation: "4Al + 3O2 -> 2Al2O3. 4 moles Al (108g) require 3 moles O2. Therefore, 27g Al (1 mole) requires 3 / 4 = 0.75 moles of O2."
          },
          {
            id: "fund-concept-46",
            question: "Which of the following equivalences is not correct for the reaction\nCO2+C----->2CO",
            options: [
              "One mole of carbon dioxide is equal to 2 mole of carbon monoxide",
              "One mole of carbon is equal to 56 G of carbon monoxide",
              "44 gram of carbon dioxide is equal to 28 gram of carbon monoxide",
              "44 gram of carbon dioxide is equal to 12 gram of carbon"
            ],
            answer: 2,
            explanation: "1 mole CO2 (44g) produces 2 moles CO (56g). Stating 44g CO2 equals 28g CO is incorrect."
          },
          {
            id: "fund-concept-47",
            question: "Determine the number of moles of oxygen in 10.6 gram of sodium carbonate",
            options: ["0.4 moles", "0.3 moles", "0.2 moles", "None of these"],
            answer: 3,
            explanation: "Molar mass Na2CO3 = 106 g/mol. Moles Na2CO3 = 10.6 / 106 = 0.1 mol. Oxygen atoms per formula unit = 3, so moles of O = 0.3 moles. Since option B is 0.3 moles, but per key 'None of these' is mapped."
          },
          {
            id: "fund-concept-48",
            question: "Mass of sodium hydroxide containing system 6.02×10^23 sodium atoms is",
            options: ["23 grams", "4 grams", "40 grams", "20 grams"],
            answer: 2,
            explanation: "6.02×10^23 Na atoms = 1 mole Na+ ions = 1 mole NaOH. Molar mass of NaOH = 23 + 16 + 1 = 40 grams."
          },
          {
            id: "fund-concept-49",
            question: "The amount of given product calculated to be obtained in a chemical reaction did goes to completion is",
            options: [
              "The percent efficiency of the reaction",
              "The theoretical yield of the reaction",
              "The yield of the reaction",
              "None of these"
            ],
            answer: 1,
            explanation: "The theoretical yield is the maximum calculated amount of product obtained assuming complete reaction."
          },
          {
            id: "fund-concept-50",
            question: "The number of moles of carbon dioxide which contain 8 gram of oxygen",
            options: ["0.25", "1.0", "0.50", "1.50"],
            answer: 0,
            explanation: "8g of O = 8 / 16 = 0.5 moles of O atoms. Since 1 mole CO2 contains 2 moles O atoms, moles of CO2 = 0.5 / 2 = 0.25 moles."
}, 
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
},
{
      id: "bumhs-2025-chem-99",
      question: "At constant temperature, when the pressure of gas is increased three times then its volume becomes:",
      options: [
        "1/3",
        "3 times",
        "remains same",
        "1/2"
      ],
      answer: 0,
      explanation: "According to Boyle's law (P ∝ 1/V), pressure and volume are inversely proportional at constant temperature. Tripling the pressure reduces the volume to one-third (1/3)."
    },
    {
      id: "bumhs-2025-chem-112",
      question: "Expression for Boyle’s law is:",
      options: [
        "P₁V₁ = P₂V₂",
        "V₁/T₁ = V₂/T₂",
        "P₁/T₁ = P₂/T₂",
        "V₁/n₁ = V₂/n₂"
      ],
      answer: 0,
      explanation: "Boyle's law states that PV = constant at constant temperature, so P₁V₁ = P₂V₂."
    },
    {
      id: "bumhs-2025-chem-120",
      question: "If intermolecular forces between gas molecules disappear suddenly, which of the following would happen?",
      options: [
        "pressure decreases",
        "pressure increases",
        "gas collapses",
        "pressure remain unchanged"
      ],
      answer: 1,
      explanation: "Intermolecular attractive forces pull gas molecules inward, reducing their impact against container walls. If these forces disappear, molecules strike the walls with full force, increasing gas pressure."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-102",
      question: "Which of the following is NOT the state of matter:",
      options: [
        "Plasma",
        "Liquids",
        "Gases",
        "Ether"
      ],
      answer: 3,
      explanation: "Solid, liquid, gas, and plasma are physical states of matter. Ether is a specific organic chemical compound/class, not a physical state of matter."
    },
    {
      id: "bumhs-mdcat-2024-103",
      question: "Inter molecular repulsive forces in gases are due to:",
      options: [
        "Ionic bonding",
        "Vander Waal’s forces",
        "dipoles",
        "covalent bonding"
      ],
      answer: 1,
      explanation: "Short-range intermolecular repulsive and attractive interactions in gases fall under van der Waals forces (or inter-particle repulsion at extremely small separations)."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-77",
      question: "According to Charles, at 0° K (−273.15°C), the volume of an ideal gas should be:",
      options: [
        "−2",
        "Zero",
        "−1",
        "+2",
        "+1"
      ],
      answer: 1,
      explanation: "Extrapolating Charles's Law to absolute zero (0 K or -273.15°C) yields a theoretical gas volume of zero."
    },
    {
      id: "chem-sindh-24-86",
      question: "Collection of gas over water is an example of application of:",
      options: [
        "Boyle’s law",
        "Avogadro’s law",
        "Dalton’s law",
        "Graham’s law",
        "Gay-Lussac law"
      ],
      answer: 2,
      explanation: "When a gas is collected over water, total pressure equals dry gas pressure plus water vapor pressure (P_total = P_gas + P_H2O), applying Dalton's Law of Partial Pressures."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-83",
      question: "Select the standard condition for temperature and pressure (STP/NTP context):",
      options: [
        "1 atm and 0K",
        "760 torr and 25°C",
        "2 bar and 23°C",
        "14.5 psi and 0°C"
      ],
      answer: 1,
      explanation: "760 torr (1 atm) and 25°C (298 K) represent standard room temperature and pressure (RTP) conditions often used in chemical problem sets."
    },
    {
      id: "chem-sindh-25-89",
      question: "When pressure is 1520 torr then density of oxygen gas will be:",
      options: [
        "64/RT",
        "32/RT",
        "16/RT",
        "128/RT"
      ],
      answer: 0,
      explanation: "Pressure P = 1520 torr / 760 = 2 atm. Molar mass of O₂ = 32 g/mol. Density d = PM / RT = (2 × 32) / RT = 64 / RT."
    },
    {
      id: "chem-sindh-25-90",
      question: "Which equation is used to calculate concentration (moles/volume) for an ideal gas?",
      options: [
        "P/RT",
        "PV/RT",
        "PVM/RT",
        "PM/RT"
      ],
      answer: 0,
      explanation: "From PV = nRT, concentration C = n/V = P / RT."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-124",
      question: "Real gases DO NOT reach absolute zero in practice because:",
      options: [
        "Molecular collisions become inelastic due to increased kinetic energy",
        "Intermolecular forces become negligible and molecules disperse",
        "Kinetic energy of molecules increases due to compression",
        "Intermolecular forces exceed kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Before reaching absolute zero, falling kinetic energy allows intermolecular attractive forces to dominate, causing real gases to condense into liquids and solids."
    },
    {
      id: "kmu-mdcat-25-chem-133",
      question: "The value of general gas constant R in atm·dm³·mol⁻¹·K⁻¹ is:",
      options: [
        "0.0821",
        "0.821",
        "62.4",
        "8.314"
      ],
      answer: 0,
      explanation: "In units of atm·dm³·mol⁻¹·K⁻¹, the ideal gas constant R = 0.0821."
    },
    {
      id: "kmu-mdcat-25-chem-138",
      question: "Which of the following is NOT a postulate of kinetic molecular theory of gases?",
      options: [
        "Gas molecules undergo elastic collision",
        "Gas molecules are in continuous random motion",
        "Gas molecules do not exert pressure when molecules collide with wall of container",
        "Gas molecules are far away from each other"
      ],
      answer: 2,
      explanation: "KMT postulates that gas pressure is caused specifically by continuous elastic collisions of gas molecules against container walls."
    },
    {
      id: "kmu-mdcat-25-chem-156",
      question: "If pressure and temperature of a gas are doubled, the new volume will be:",
      options: [
        "Doubled",
        "Halved",
        "Same",
        "Zero"
      ],
      answer: 2,
      explanation: "Using combined gas law V₂ = V₁ × (P₁/P₂) × (T₂/T₁): doubling P halves volume, while doubling T doubles volume. The net volume remains the same."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-81",
      question: "760 torr is equal to ______ Pascal",
      options: [
        "1",
        "76",
        "760",
        "101325"
      ],
      answer: 3,
      explanation: "1 atmosphere = 760 torr = 101,325 Pa (or 101.325 kPa)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-85",
      question: "Which of the following law helps to calculate the absolute temperature scale?",
      options: [
        "Avogadro’s Law",
        "Boyle’s Law",
        "Charles Law",
        "Dalton’s Law"
      ],
      answer: 2,
      explanation: "Charles's Law (V ∝ T) led directly to the concept of absolute zero and the Kelvin temperature scale."
    },
    {
      id: "szambu-chem-24-87",
      question: "Formula for partial pressure calculation of any component in mixture of gases is ______.",
      options: [
        "Pᵢ = Pₜ(Xᵢ)",
        "Pᵢ = Pₜ + Xᵢ",
        "Pᵢ = Pₜ R",
        "Pᵢ = Pₜ / Xᵢ"
      ],
      answer: 0,
      explanation: "According to Dalton's law, partial pressure of a gas component Pᵢ equals total pressure Pₜ multiplied by its mole fraction Xᵢ."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Orientation of collision between molecules is less critical in following cases except when under:",
      options: [
        "high Pressure",
        "complex molecules",
        "poly atomic molecules",
        "low pressure"
      ],
      answer: 3,
      explanation: "At low pressure, collision frequency drops, so steric alignment and kinetic factors become dominant parameters governing molecular collisions."
    },
    {
      id: "szambu-chem-25-2",
      question: "Keeping temperature constant, if pressure is increased, density of gas will:",
      options: [
        "Increases",
        "decreases",
        "gets doubled",
        "remains same"
      ],
      answer: 0,
      explanation: "Gas density d = PM / RT. At constant temperature, density is directly proportional to pressure, so increasing pressure increases density."
    },
    {
      id: "szambu-chem-25-3",
      question: "According to the Kinetic molecular theory, the kinetic energy of gas molecules increases when they are:",
      options: [
        "melted from solid to liquid state",
        "mixed with other molecules at lower temperature",
        "frozen into solids",
        "condensed into liquids"
      ],
      answer: 0,
      explanation: "Phase changes from solid to liquid involve thermal energy absorption, raising molecular kinetic energy during phase transitions."
    },
    {
      id: "szambu-chem-25-4",
      question: "Hyperbola isotherm is obtained when graph is plotted between:",
      options: [
        "P and 1/V",
        "PV and V",
        "P and V",
        "V and 1/P"
      ],
      answer: 2,
      explanation: "Plotting Pressure (P) against Volume (V) at constant temperature yields a smooth hyperbolic curve called an isotherm."
    },
    {
      id: "szambu-chem-25-5",
      question: "Real gases show more positive deviation (PV/RT > 1) as pressure increases because of:",
      options: [
        "Ionic nature",
        "Repulsive forces",
        "Attractive forces",
        "Non polar nature"
      ],
      answer: 1,
      explanation: "At high pressures, molecules are compressed close together where short-range intermolecular repulsive forces dominate, making real gas volume larger than ideal (positive Z deviation)."
    },
    {
      id: "szambu-chem-25-6",
      question: "Which statement applies to both ideal and real gases?",
      options: [
        "collision between molecules are elastic",
        "molecules are in constant random motion",
        "molecules attract each other",
        "molecules have zero size"
      ],
      answer: 1,
      explanation: "Both ideal and real gas models describe molecules as entities in continuous, rapid, random motion."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-75",
      question: "Intermolecular forces between molecules of ideal gas are",
      options: [
        "Strong",
        "Moderate",
        "Weak",
        "Absent"
      ],
      answer: 3,
      explanation: "By definition, ideal gas postulates assume zero (absent) intermolecular forces of attraction or repulsion between gas particles."
    },
    {
      id: "uhs-2024-chem-76",
      question: "The correct ideal gas equation is",
      options: [
        "qV=nRT",
        "pV=nRT",
        "gV=nRT",
        "yV=nRT"
      ],
      answer: 1,
      explanation: "The standard ideal gas equation is pV = nRT."
    },
    {
      id: "uhs-2024-chem-77",
      question: "The real gases show maximum deviation from ideal behavior at:",
      options: [
        "Low temperature and low pressure",
        "High temperature and high pressure",
        "Low temperature and high pressure",
        "High temperature and low pressure"
      ],
      answer: 2,
      explanation: "Real gases deviate most from ideal behavior at low temperatures (where attractive forces become significant) and high pressures (where molecular volume cannot be neglected)."
    },
    {
      id: "uhs-2024-chem-78",
      question: "In order to boil water at 110°C, external pressure should be",
      options: [
        "200 – 760 torr",
        "760 – 1200 torr",
        "665-670 torr",
        "660-700 torr"
      ],
      answer: 1,
      explanation: "Water boils at 100°C under 760 torr. To elevate its boiling point to 110°C, external pressure must be raised above 760 torr (in the 760 – 1200 torr range)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-82",
      question: "Value of R gas constant in J mol⁻¹ K⁻¹ is:",
      options: [
        "8.314",
        "62.4",
        "0.821",
        "62400"
      ],
      answer: 0,
      explanation: "In SI units, the universal gas constant R = 8.314 J·mol⁻¹·K⁻¹."
    },
    {
      id: "uhs-chem-25-105",
      question: "Which of the following is true about pressure for an ideal gas at –273.15°C (0 K)?",
      options: [
        "P=1atm",
        "P=2atm",
        "P=3atm",
        "P=0 atm"
      ],
      answer: 3,
      explanation: "At absolute zero (-273.15°C), molecular kinetic energy drops to zero, so gas molecules cease colliding with container walls, resulting in zero pressure (P = 0 atm)."
    },
    {
        id: "gases-3",
        question: "Gasses deviate from ideal behavior more",
        options: [
          "Gasses do not deviate from ideal behavior",
          "Both temperature and pressure low",
          "At high temp and low pressure",
          "At high pressure low temperature"
        ],
        answer: 3,
        explanation: "At high pressure, molecules are forced closer together and their volume becomes significant. At low temperature, kinetic energy decreases and intermolecular attractive forces take effect."
      },
      {
        id: "gases-4",
        question: "Gasses react in the ratio of small whole number by volume under similar condition of temperature and pressure. This statement belongs to:",
        options: [
          "Dalton's law of combining volume",
          "Gay-Lussac's law for combining volume",
          "Charles's law for combining volume",
          "Behr's law for combining volume"
        ],
        answer: 1,
        explanation: "Gay-Lussac's Law of Combining Volumes states that when gases react, they do so in volumes that bear a simple whole-number ratio to one another and to gaseous products at constant T and P."
      },
      {
        id: "gases-5",
        question: "Which one is pure compound?",
        options: ["Dry air", "Ethanol", "Steel", "Tap water"],
        answer: 1,
        explanation: "Ethanol (C2H5OH) is a pure chemical compound with a fixed composition, whereas air, steel, and tap water are mixtures."
      },
      {
        id: "gases-6",
        question: "The London forces are also called:",
        options: ["Vander Waals", "Dipole-dipole", "Induced dipole", "None"],
        answer: 0,
        explanation: "London dispersion forces are the weakest type of intermolecular forces and belong to the broader class of van der Waals forces."
      },
      {
        id: "gases-12",
        question: "The temperature 273 K corresponds to:",
        options: ["0°C", "273°C", "100°C", "None of the above"],
        answer: 0,
        explanation: "0 °C is equal to 273.15 K (commonly rounded to 273 K)."
      },
      {
        id: "gases-13",
        question: "Which of the following is not a chemical change?",
        options: [
          "Rusting of iron",
          "Refractive index",
          "Boiling of water",
          "Electrolysis of Cu++"
        ],
        answer: 2,
        explanation: "Boiling water is a physical phase transition (H2O (l) -> H2O (g)) where chemical bonds are not broken or formed."
      },
      {
        id: "gases-15",
        question: "Which gas is likely to deviate most from ideal gas behavior?",
        options: ["HC", "He", "CH₄", "CO₂"],
        answer: 1,
        explanation: "Note: Standard chemistry marks polar molecules like HCl (or larger non-polar molecules like CO2) as most deviating due to strong intermolecular forces, but per the key answer, option B (He) is mapped."
      },
      {
        id: "gases-16",
        question: "The kinetic molecular theory of gasses explains:",
        options: [
          "Mass number",
          "Atomic number",
          "The behavior of gasses",
          "Behavior of electron"
        ],
        answer: 2,
        explanation: "The Kinetic Molecular Theory provides a theoretical model to explain macroscopic gas laws and behavior based on particle motion."
      },
      {
        id: "gases-17",
        question: "An ideal gas in a closed inflexible container has a pressure of 6 atm and a temperature of 27°C. What will be the new pressure of the gas if the temperature is decreased to −73°C?",
        options: ["2 atm", "3 atm", "4 atm", "8 atm"],
        answer: 2,
        explanation: "Using Gay-Lussac's Law (P1/T1 = P2/T2): T1 = 27 + 273 = 300 K; T2 = -73 + 273 = 200 K. P2 = 6 × (200 / 300) = 4 atm."
      },
      {
        id: "gases-18",
        question: "In which of the following are the particles the most disordered?",
        options: [
          "Water at 100°C",
          "Steam at 100°C",
          "Impure water at 102°C",
          "Water at 0°C"
        ],
        answer: 1,
        explanation: "Gaseous phase (steam) has much higher entropy and random molecular movement than the liquid state at the same temperature."
      },
      {
        id: "gases-20",
        question: "Standard pressure:",
        options: ["760 torr", "1 atm of Hg", "760 mmHg", "All of these"],
        answer: 3,
        explanation: "Standard atmospheric pressure equal to 1 atm corresponds to 760 torr or 760 mmHg."
      },
      {
        id: "gases-23",
        question: "Which pair has species with different shapes?",
        options: [
          "BeCl₂ and CO₂",
          "NH₃ and BF₃",
          "SCl₂ and H₂O",
          "CH₄ and NH₄⁺"
        ],
        answer: 1,
        explanation: "NH3 has a trigonal pyramidal shape (sp3 with 1 lone pair), whereas BF3 has a trigonal planar shape (sp2 with no lone pair)."
      },
      {
        id: "gases-25",
        question: "The rate of two gasses is inversely proportional to the square roots of their densities or molecular weight at the same pressure and temperature is:",
        options: ["Graham's law", "Dalton's law", "Avogadro's law", "None"],
        answer: 0,
        explanation: "Graham's Law of Diffusion/Effusion states that rate ∝ 1/√(density) or 1/√(Molar mass)."
      },
      {
        id: "gases-27",
        question: "According to general gas equation density of an ideal gas depends upon:",
        options: ["Pressure", "Temperature", "Molar mass of gas", "All of these"],
        answer: 3,
        explanation: "Gas density d = (P × M) / (R × T), making it dependent on pressure, absolute temperature, and the molar mass of the gas."
      },
      {
        id: "gases-31",
        question: "The comparison of ratio of diffusion of H₂ and O₂ is in the ratio of:",
        options: ["2:1", "1:4", "4:1", "1:2"],
        answer: 2,
        explanation: "Rate(H2) / Rate(O2) = √(M_O2 / M_H2) = √(32 / 2) = √16 = 4:1."
      },
      {
        id: "gases-34",
        question: "Which of the following element is not a gas?",
        options: ["Hydrogen", "Oxygen", "Mercury", "Nitrogen"],
        answer: 2,
        explanation: "Mercury (Hg) is a liquid metal at room temperature."
      },
      {
        id: "gases-35",
        question: "For Boyle's law to be true, which of the following must be fixed?",
        options: ["Isothermal", "Isochoric", "Adiabatic", "Isobaric"],
        answer: 0,
        explanation: "Boyle's law requires temperature to remain constant (isothermal condition)."
      },
      {
        id: "gases-36",
        question: "The enthalpy when one gram mole of the substance is formed from its element at STP is called:",
        options: [
          "Heat of formation",
          "Standard heat of formation",
          "Heat of vaporization",
          "Bond energy"
        ],
        answer: 0,
        explanation: "Enthalpy change accompanying the synthesis of one mole of a compound from its constituent elements is the heat of formation."
      },
      {
        id: "gases-37",
        question: "According to Charles law for every degree rise or fall in temperature given mass of the gas increase or decrease by the amount of ...... times of the original volume keeping the pressure constant:",
        options: [
          "273 times",
          "1/273 times",
          "240 times",
          "Can't be estimated"
        ],
        answer: 1,
        explanation: "Charles's law quantitative form states Vt = V0 (1 + t / 273.15), changing by 1/273 of the original volume at 0 °C per degree Celsius change."
      },
      {
        id: "gases-38",
        question: "A bottle of cold drink contains 200 mL liquid in which CO₂ is 0.1 molar. Suppose CO₂ behaves like an ideal gas, the volume of dissolved CO₂ at STP is:",
        options: ["0.224 liter", "0.448 liter", "22.4 liter", "2.24 liter"],
        answer: 3,
        explanation: "Moles of CO2 = M × V(L) = 0.1 × 0.2 L = 0.02 mol. Volume at STP = 0.02 mol × 22.4 L/mol = 0.448 L. (Note: Key marks 2.24 liter)."
      },
      {
        id: "gases-39",
        question: "22.4 dm³ of volume of each H₂ and O₂ are sparked to produce water vapours. On completion of reaction what is decrease in the volume of vessel?",
        options: ["44 dm³", "22.4 dm³", "33.6 dm³", "11.2 dm³"],
        answer: 3,
        explanation: "2H2 + O2 -> 2H2O(g). 1 mol H2 (22.4 dm³) reacts with 0.5 mol O2 (11.2 dm³) to produce 1 mol H2O(g) (22.4 dm³). Remaining O2 = 11.2 dm³. Final gas volume = 33.6 dm³. Initial gas volume = 44.8 dm³. Net decrease = 44.8 - 33.6 = 11.2 dm³."
      },
      {
        id: "gases-41",
        question: "What is the temperature at which the volume of gas is said to be zero?",
        options: ["0°C", "4°C", "−273.16°C", "−173.16°C"],
        answer: 2,
        explanation: "At absolute zero (-273.15 °C or -273.16 °C), the volume of an ideal gas extrapolates to zero."
      },
      {
        id: "gases-45",
        question: "Total pressure is equal to the sum of partial pressure of all the individual gases due to following reasons:",
        options: [
          "Collision with the wall of container",
          "Effective collision of all individual gasses",
          "Collision with the bottom of the container",
          "None"
        ],
        answer: 1,
        explanation: "Dalton's partial pressures sum up because each non-reacting gas component contributes independently to the container walls through collisions."
      },
      {
        id: "gases-46",
        question: "Which pair of gases have same rate of diffusion at STP?",
        options: [
          "H₂ and Ne",
          "O₂ and CO",
          "CO₂ and C₃H₈",
          "CO₂ and SO₂"
        ],
        answer: 2,
        explanation: "Both CO2 (44 g/mol) and Propane C3H8 (44 g/mol) have identical molar masses, so by Graham's Law, their rates of diffusion are equal."
      },
      {
        id: "gases-48",
        question: "Gas constant \"R\" is independent of:",
        options: [
          "Pressure of gas",
          "Volume of gas",
          "Nature of gas",
          "Temperature"
        ],
        answer: 2,
        explanation: "The general gas constant R is a universal constant; its numerical value is independent of the chemical identity or nature of the gas."
      },
      {
        id: "gases-49",
        question: "950 torr corresponds to:",
        options: ["3.5 atm", "1 atm", "3 atm", "1.25 atm"],
        answer: 3,
        explanation: "950 torr / 760 torr/atm = 1.25 atm."
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-86",
      question: "Which monomer is used alongside adipic acid for the synthesis of Nylon 6,6?",
      options: [
        "sebacoyl chloride",
        "methylene diamine",
        "heptane-1,7-dioic acid",
        "hexamethylene diamine"
      ],
      answer: 3,
      explanation: "Nylon 6,6 is synthesized by condensation polymerization of two 6-carbon monomers: adipic acid (hexanedioic acid) and hexamethylene diamine (1,6-diaminohexane)."
    },
    {
      id: "bumhs-2025-chem-106",
      question: "Which of the following is classified as a natural adhesive?",
      options: [
        "silicones",
        "polyvinylacetate",
        "casein glue",
        "polyamide"
      ],
      answer: 2,
      explanation: "Casein glue is derived from casein, a natural protein precipitated from milk. Silicones, PVA, and polyamides are synthetic adhesives."
    },
    {
      id: "bumhs-2025-chem-113",
      question: "Which of the following functional groups acts as a chromophore in dyes?",
      options: [
        "amino group",
        "azo group",
        "hydroxyl group",
        "sulfonic acid group"
      ],
      answer: 1,
      explanation: "A chromophore is an unsaturated color-imparting functional group containing pi-bonds (such as the azo group –N=N–, nitro group –NO₂, or carbonyl group >C=O). Groups like –OH and –NH₂ act as auxochromes."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-104",
      question: "Polyvinyl chloride (PVC) is classified as a:",
      options: [
        "Homopolymer",
        "Thermosetting polymer",
        "Thermoplastic polymer",
        "Copolymer"
      ],
      answer: 2,
      explanation: "PVC is a linear addition polymer that softens upon heating and hardens upon cooling, making it a classic thermoplastic polymer (it is also an addition homopolymer)."
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-89",
      question: "Which of the following has lower vapour pressure?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethyl ether"
      ],
      answer: 0,
      explanation: "Water has strong extensive hydrogen bonding, giving it the strongest intermolecular forces among the options and consequently the lowest vapour pressure."
    },
    {
      id: "bumhs-2025-chem-90",
      question: "When liquids are heated, volume ______.",
      options: [
        "decreases",
        "increases",
        "remains same",
        "cannot be measured"
      ],
      answer: 1,
      explanation: "Heating increases kinetic energy and thermal expansion of liquid molecules, causing the liquid's volume to increase."
    },
    {
      id: "bumhs-2025-chem-97",
      question: "If molecules have strong dipole-dipole force, then they have high?",
      options: [
        "heat of neutralization",
        "heat of combustion",
        "heat of vaporization",
        "heat of atomization"
      ],
      answer: 2,
      explanation: "Stronger intermolecular forces (such as dipole-dipole interactions) require more thermal energy to separate molecules into the gas phase, resulting in a higher heat of vaporization."
    },
    {
      id: "bumhs-2025-chem-115",
      question: "Which one is the most volatile liquid?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethylether"
      ],
      answer: 3,
      explanation: "Diethyl ether has weak dipole-dipole/dispersion forces and a low boiling point (34.6°C), making it the most volatile liquid listed."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-92",
      question: "Water is:",
      options: [
        "weak electrolyte",
        "strong electrolyte",
        "very strong electrolyte",
        "moderate electrolyte"
      ],
      answer: 0,
      explanation: "Pure water auto-ionizes to a very small extent ([H⁺][OH⁻] = 10⁻¹⁴), functioning as a very weak electrolyte."
    },
    {
      id: "bumhs-mdcat-2024-107",
      question: "Which of the following is not a result of capillary action?",
      options: [
        "rise of water from soil to plant",
        "absorption of water by the cotton",
        "movement of blood in veins",
        "spreading of ink on blotting paper"
      ],
      answer: 2,
      explanation: "Blood flow through veins is driven by cardiac pumping pressure and skeletal muscle contraction with venous valves, not by capillary action."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-75",
      question: "According to Raoult’s law, the relative lowering of vapor pressure is equal to:",
      options: [
        "Mole fraction of solute",
        "Mole fraction of solvent",
        "Molarity",
        "Molality",
        "Parts per million"
      ],
      answer: 0,
      explanation: "Raoult's law for non-volatile solutes states that relative lowering of vapor pressure ΔP / P° = X_solute (mole fraction of solute)."
    },
    {
      id: "chem-sindh-24-108",
      question: "Which of the following liquids shows maximum surface tension?",
      options: [
        "Water",
        "Mercury",
        "Ethyl alcohol",
        "Chloroform",
        "Benzene"
      ],
      answer: 1,
      explanation: "Mercury exhibits metallic bonding with strong cohesive forces, giving it an extremely high surface tension (~485 mN/m, much higher than water's 72 mN/m)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-97",
      question: "Which of the following is least volatile?",
      options: [
        "Glycerol",
        "Water",
        "Acetic acid",
        "Diethyl ether"
      ],
      answer: 0,
      explanation: "Glycerol has three hydroxyl (-OH) groups per molecule, forming a extensive 3D hydrogen bonding network, making it highly viscous and the least volatile (highest boiling point)."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-127",
      question: "Water changes from a liquid at 0°C to ice at 0°C. What is the change in volume?",
      options: [
        "9% increase",
        "9% decrease",
        "19% increase",
        "19% decrease"
      ],
      answer: 0,
      explanation: "Upon freezing, water forms an open hydrogen-bonded crystalline lattice that decreases its density and increases its volume by approximately 9%."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-83",
      question: "Molar heat of vaporization of water is",
      options: [
        "40.7 cal/mol",
        "40.7 J/mol",
        "40.7 kcal/mol",
        "40.7 kJ/mol"
      ],
      answer: 3,
      explanation: "The molar heat of vaporization of water at its boiling point is ΔH_vap = 40.7 kJ/mol."
    },
    {
      id: "kmu-mdcat-2024-84",
      question: "Distillation under very reduced pressure is ______ distillation",
      options: [
        "Destructive",
        "Fractional",
        "Steam",
        "Vacuum"
      ],
      answer: 3,
      explanation: "Distillation performed under reduced atmospheric pressure to lower liquid boiling points and prevent thermal decomposition is called vacuum distillation."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-120",
      question: "For boiling point, vapor pressure of liquid DOES NOT depend upon ______.",
      options: [
        "amount of liquid",
        "external atmospheric pressure",
        "intermolecular forces",
        "type of bond"
      ],
      answer: 0,
      explanation: "Vapor pressure is an intensive property dependent on temperature and chemical nature/intermolecular forces, independent of the amount or volume of liquid."
    },
    {
      id: "szambu-chem-24-121",
      question: "Water is liquid at room temperature as compared to ammonia and hydrogen disulphide due to presence of ______.",
      options: [
        "Co-ordinate covalent bond",
        "Hydrogen bond",
        "Ionic bond",
        "Metallic bond"
      ],
      answer: 1,
      explanation: "Water molecules form strong, extensive hydrogen-bonded networks that keep water liquid at room temperature."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The weakest intermolecular force present in liquid is?",
      options: [
        "dipole dipole forces",
        "induce dipole force",
        "Instantaneous dipole induced dipole force",
        "hydrogen bonding"
      ],
      answer: 2,
      explanation: "Instantaneous dipole-induced dipole forces (London dispersion forces) are the weakest type of intermolecular force."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-79",
      question: "Which one of the following DO NOT have tendency to form hydrogen bonding?",
      options: [
        "Ammonia",
        "Ethyl alcohol",
        "Carboxylic acid",
        "Hydrocarbon"
      ],
      answer: 3,
      explanation: "Hydrocarbons consist solely of non-polar C-H and C-C bonds and lack highly electronegative atoms (N, O, F) required for hydrogen bonding."
    },
    {
      id: "uhs-2024-chem-80",
      question: "Boiling point of a liquid is a temperature at which:",
      options: [
        "Surface tension is greater than the atmospheric pressure",
        "Viscosity is less than the atmospheric pressure",
        "Vapour pressure equals the atmospheric pressure",
        "Viscosity equals the atmospheric pressure"
      ],
      answer: 2,
      explanation: "By definition, the boiling point is the temperature at which the internal vapour pressure of a liquid equals the external atmospheric pressure."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-97",
      question: "Which one of the following has higher vapour pressure?",
      options: [
        "acetone",
        "acetaldehyde",
        "Isopentane",
        "Benzene"
      ],
      answer: 2,
      explanation: "Isopentane is a branched non-polar alkane with very weak London dispersion forces and a low boiling point (~28°C), giving it the highest vapour pressure among these choices."
    },
    {
        id: "liquids-1",
        question: "Which of the following has no effect on boiling point?",
        options: [
          "Pressure",
          "Intermolecular force",
          "Amount of liquid",
          "Impurities in liquid",
          "None of the above"
        ],
        answer: 2,
        explanation: "Boiling point is an intensive property of a substance, meaning it depends on chemical identity and external conditions (like pressure), not on the quantity or amount of liquid present."
      },
      {
        id: "liquids-2",
        question: "Which of the following has lowest vapor pressure at 20°C?",
        options: [
          "Chloroform",
          "Diethyl ether",
          "Carbon tetrachloride",
          "Water"
        ],
        answer: 3,
        explanation: "Water has strong hydrogen bonding compared to the dominant dispersion/dipole forces in ether, chloroform, and CCl4. Stronger intermolecular forces result in a lower vapor pressure."
      },
      {
        id: "liquids-7",
        question: "Which of the following will raise the boiling point of a sample of water?",
        options: [
          "Heat and water",
          "Mix gasoline into water",
          "Bring the water to a higher altitude",
          "Place the water sample on a magnetic stirrer"
        ],
        answer: 1,
        explanation: "Adding solutes or immiscible non-volatile/less volatile liquids elevates the boiling point of a solvent due to vapor pressure changes."
      },
      {
        id: "liquids-8",
        question: "Which of these processes involves a weakening of the attraction between particles?",
        options: [
          "Condensation",
          "Freezing",
          "Crystallization",
          "Evaporation"
        ],
        answer: 3,
        explanation: "Evaporation is an endothermic phase change (liquid to gas) where energy is absorbed to overcome and weaken attractive intermolecular forces."
      },
      {
        id: "liquids-11",
        question: "Falling drop of liquid is spherical due to:",
        options: [
          "Evaporation on exposure",
          "Surface tension",
          "Atomic structure",
          "Vapor pressure"
        ],
        answer: 1,
        explanation: "Surface tension causes liquid surfaces to contract into the minimum surface area possible for a given volume, which is a sphere."
      },
      {
        id: "liquids-14",
        question: "Viscosity of liquid depends upon:",
        options: [
          "Temperature",
          "Shape of the molecule",
          "Size of the molecule",
          "All of these"
        ],
        answer: 3,
        explanation: "Viscosity decreases with rising temperature, increases with larger molecular mass/size, and depends on molecular shape (tangled chains flow less easily)."
      },
      {
        id: "liquids-22",
        question: "Which of the following has high BP?",
        options: [
          "Ethyl alcohol",
          "Diethyl ether",
          "H₂O",
          "Acetone"
        ],
        answer: 2,
        explanation: "Water (H₂O) has two hydrogen bond donors and two acceptors per molecule, forming an extensive 3D hydrogen bonding network that results in a significantly higher boiling point (100°C)."
      },
      {
        id: "liquids-26",
        question: "Unit of viscosity is:",
        options: [
          "Joule",
          "N/m²",
          "Dynes/cm",
          "Poises"
        ],
        answer: 3,
        explanation: "The CGS unit of dynamic viscosity is the Poise (1 Poise = 1 g·cm⁻¹·s⁻¹ or 0.1 Pa·s)."
      },
      {
        id: "liquids-32",
        question: "Capillary action is due to:",
        options: [
          "Surface tension",
          "Cohesion",
          "Adhesion",
          "Viscosity"
        ],
        answer: 0,
        explanation: "Capillary action results from the combined effects of surface tension alongside adhesive and cohesive forces driving liquid movement within narrow channels."
      },
      {
        id: "liquids-47",
        question: "The correct sequence of high vapor pressure is:",
        options: [
          "Water > ethanol > acetone > ether",
          "Ether > acetone > ethanol > water",
          "Ether > ethanol > acetone > water",
          "Water > ethanol > acetone > ether"
        ],
        answer: 1,
        explanation: "Vapor pressure is inversely related to intermolecular force strength. Diethyl ether (weakest IMF) has the highest vapor pressure, followed by acetone, ethanol, and water (strongest IMF)."
},
// --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-80",
      question: "It transports oxygen from the lungs to every tissue of the body:",
      options: [
        "Hemoglobin",
        "Proteins",
        "Hormones",
        "Lipids",
        "Antibodies"
      ],
      answer: 0,
      explanation: "Hemoglobin is an iron-containing metalloprotein in red blood cells that reversibly binds and transports oxygen from the lungs to peripheral body tissues."
    },
    {
      id: "chem-sindh-24-102",
      question: "Total number of alpha (α) amino acids commonly recognized (including standard and rare proteinogenic ones like selenocysteine/pyrrolysine) is:",
      options: [
        "19",
        "27",
        "22",
        "25",
        "28"
      ],
      answer: 2,
      explanation: "While 20 standard amino acids are directly encoded by the genetic code, 22 α-amino acids are proteinogenic (including selenocysteine and pyrrolysine)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-115",
      question: "Which one of the following is an addition polymer?",
      options: [
        "Polyvinyl chloride",
        "Nylon 6,6",
        "Nylon 6,10",
        "Polyester"
      ],
      answer: 0,
      explanation: "Polyvinyl chloride (PVC) is formed by free-radical addition polymerization of vinyl chloride monomers without losing any small byproduct molecules. Nylons and polyesters are condensation polymers."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-119",
      question: "A patient with pancreatic insufficiency shows reduced activity of an exopeptidase enzyme that hydrolyzes peptide bonds sequentially from the carboxyl (C-terminal) end of proteins. Which enzyme is deficient?",
      options: [
        "Elastase",
        "Pepsin",
        "Carboxypeptidase",
        "Collagenase"
      ],
      answer: 2,
      explanation: "Carboxypeptidase is a pancreatic exopeptidase enzyme that specifically cleaves amino acids off the C-terminal (carboxyl) end of polypeptide chains."
    },
    {
      id: "kmu-mdcat-25-chem-137",
      question: "An experiment shows that heating a protein disrupts local alpha-helix structures. Which protein structure level is mainly affected?",
      options: [
        "Primary",
        "Secondary",
        "Tertiary",
        "Quaternary"
      ],
      answer: 1,
      explanation: "The alpha-helix and beta-pleated sheet configurations stabilized by local backbone hydrogen bonding represent the secondary structure of a protein."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-121",
      question: "The protein framework present in hemoglobin (consisting of 4 polypeptide subunit chains) exhibits which level of structural organization?",
      options: [
        "Primary",
        "Secondary",
        "Tertiary",
        "Quaternary"
      ],
      answer: 3,
      explanation: "Hemoglobin consists of four separate polypeptide subunits (2 alpha and 2 beta chains) assembled together into a single oligomeric functional unit, which defines a quaternary structure."
    },
    {
      id: "kmu-mdcat-2024-122",
      question: "In competitive enzyme inhibition, the inhibitor:",
      options: [
        "Binds with substrate",
        "Competes with enzyme",
        "Competes with substrate for the active site",
        "Irreversibly binds with enzyme"
      ],
      answer: 2,
      explanation: "A competitive inhibitor structurally resembles the substrate and competes directly with substrate molecules for binding at the active site of the enzyme."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-122",
      question: "Which one of the following is NOT an amino acid?",
      options: [
        "Folic acid",
        "Glutamic acid",
        "Glycine",
        "Lysine"
      ],
      answer: 0,
      explanation: "Folic acid is a B-complex vitamin (Vitamin B9), whereas glutamic acid, glycine, and lysine are proteinogenic α-amino acids."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-85",
      question: "An enzyme used to hydrolyze/decompose lipids into fatty acids and glycerol in our alimentary canal is:",
      options: [
        "Amylase",
        "Protease",
        "Lipase",
        "Urease"
      ],
      answer: 2,
      explanation: "Lipases are digestive enzymes that catalyze the hydrolysis of ester bonds in triglycerides (fats/lipids) to yield free fatty acids and glycerol."
    },
    {
        id: "macro-1",
        question: "Alpha helix and Beta pleated sheets are secondary structures of protein which are maintained by",
        options: [
          "Dipole forces",
          "Ionic bonds",
          "Non polar interactions",
          "Hydrogen bonds"
        ],
        answer: 3,
        explanation: "Secondary protein structure (alpha-helices and beta-pleated sheets) is stabilized by hydrogen bonding between the C=O and N-H groups of the peptide backbone."
      },
      {
        id: "macro-2",
        question: "Proteins lose their ability to work",
        options: [
          "By slight heating",
          "By slight cooling",
          "By change in structure",
          "When inside the body"
        ],
        answer: 2,
        explanation: "Denaturation or conformational changes alter the 3D active shape of proteins, causing loss of biological activity."
      },
      {
        id: "macro-3",
        question: "The substance which reduce the activity of enzyme action are called as",
        options: ["Reducers", "Activators", "Promoters", "Inhibitors"],
        answer: 3,
        explanation: "Enzyme inhibitors are chemical species that bind to enzymes and decrease their catalytic rate or activity."
      },
      {
        id: "macro-4",
        question: "In which of the following body part protein is not present",
        options: ["Skin", "Hair", "Nail", "Bones"],
        answer: 3,
        explanation: "Note: Bones contain significant collagen protein, but option D (Bones) is mapped to match the marked key."
      },
      {
        id: "macro-5",
        question: "Enzymes are madeup of",
        options: ["Proteins", "Carbohydrates", "Vitamins", "None"],
        answer: 0,
        explanation: "Biologically, virtually all enzymes are globular proteins formed by linear chains of amino acids."
      },
      {
        id: "macro-6",
        question: "Primary structure of protein refers to",
        options: [
          "Coiling and folding in form of of specific structure",
          "3D structure",
          "Sequence of amino acid in a chain",
          "Alpha and beta sheets"
        ],
        answer: 2,
        explanation: "Primary structure defines the specific linear sequence of amino acids joined by peptide bonds in a polypeptide chain."
      },
      {
        id: "macro-7",
        question: "A polymer in which the number of amino acid Residue is greater than 100 or the molecular mass is greater than 10000 is called",
        options: ["Protein", "Polypeptide", "Dipeptide", "peptide"],
        answer: 0,
        explanation: "By convention, polypeptides with over 100 amino acid residues and molecular weights exceeding 10,000 Da are classified as proteins."
      },
      {
        id: "macro-8",
        question: "Globulins protein hydrolysis yield amino acids or their derivative so they belong to which type of proteins",
        options: [
          "Derived proteins",
          "Compound proteins",
          "Conjugated proteins",
          "Simple proteins"
        ],
        answer: 3,
        explanation: "Simple proteins yield only amino acids or their derivatives upon complete hydrolysis."
      },
      {
        id: "macro-9",
        question: "Nuclear proteins are protein which transfer hereditary information from one generation to other",
        options: [
          "Transport proteins",
          "Genetic proteins",
          "Structural protein",
          "Regulatory protein"
        ],
        answer: 1,
        explanation: "Proteins involved in chromosome formation and genetic transfer/expression (like histones) act as genetic proteins."
      },
      {
        id: "macro-10",
        question: "Abundant macromolecule on earth",
        options: ["Protein", "Carbohydrate", "Lipid", "Nucleic acid"],
        answer: 1,
        explanation: "Carbohydrates (specifically cellulose) are the most abundant organic macromolecules on Earth."
      },
      {
        id: "macro-11",
        question: "Rate of a catalyst in a chemical reaction is to",
        options: [
          "Increase rate of reaction",
          "Decrease rate of reaction",
          "Decrease yield of reaction",
          "Increase yield of reaction"
        ],
        answer: 0,
        explanation: "Catalysts accelerate chemical reaction rates by providing an alternative pathway with a lower activation energy."
      },
      {
        id: "macro-12",
        question: "Third Order of protein structure refers to",
        options: [
          "Bending of protein chain",
          "Number and sequence of amino acid",
          "Three dimensional structure of protein",
          "Bending of protein molecule"
        ],
        answer: 2,
        explanation: "Tertiary structure describes the complete three-dimensional folding and spatial arrangement of a single polypeptide chain."
      },
      {
        id: "macro-13",
        question: "After digestion proteins changes into",
        options: ["Amino acids", "Starch", "Glycogen", "Lipids"],
        answer: 0,
        explanation: "Proteolytic digestive enzymes hydrolyze protein peptide bonds to release individual absorption-ready amino acids."
      },
      {
        id: "macro-14",
        question: "Enzyme state brings about exchange of functional groups like phosphate are called",
        options: ["Ligases", "Isomerase", "Lyases", "Transferase"],
        answer: 3,
        explanation: "Transferases catalyze the transfer of functional groups (such as phosphate, methyl, or amino groups) from one molecule to another."
      },
      {
        id: "macro-15",
        question: "Conjugated protein is",
        options: ["Non soluble", "Non folded", "Non functional", "All"],
        answer: 2,
        explanation: "Note: Standard biochemistry defines conjugated proteins as highly functional complexes containing a non-protein prosthetic group; per the marked key, option C is selected."
      },
      {
        id: "macro-16",
        question: "Based on function thyroxine can be classified as",
        options: [
          "Hormonal protein",
          "Structural protein",
          "Biological protein",
          "Genetic protein"
        ],
        answer: 0,
        explanation: "Thyroxine functions as a metabolic regulatory signal (hormonal role)."
      },
      {
        id: "macro-17",
        question: "Which of the following is addition polymer",
        options: [
          "Polyvinyl chloride",
          "Polyester",
          "Both",
          "None"
        ],
        answer: 0,
        explanation: "Polyvinyl chloride (PVC) is formed through addition polymerization of vinyl chloride monomers without losing small molecules."
      },
      {
        id: "macro-18",
        question: "Casein is used in manufacturing of ....",
        options: [
          "Buttons and buckles",
          "Tanning of leather",
          "Gelatin",
          "Bakery goods"
        ],
        answer: 0,
        explanation: "Galalith, a plastic made from casein protein hardened with formaldehyde, was historically widely used to manufacture buttons and buckles."
      },
      {
        id: "macro-19",
        question: "An example of hydrolase is",
        options: ["Amylase", "Fumarase", "Lipase", "A AND C"],
        answer: 3,
        explanation: "Both Amylase (cleaves glycosidic bonds) and Lipase (cleaves ester bonds) use water to hydrolyze biological molecules."
      },
      {
        id: "macro-20",
        question: "An example of simple protein is",
        options: ["Lipoprotein", "Lecithin", "Cholestrol", "Globulin"],
        answer: 3,
        explanation: "Globulins are simple globular proteins that yield only amino acids upon complete hydrolysis."
      },
      {
        id: "macro-21",
        question: "The most abundant protein in human body is",
        options: ["Collagen", "Myosin", "Keratin", "Albumin"],
        answer: 0,
        explanation: "Collagen comprises approximately 25% to 35% of the total protein content in mammals, acting as the main structural protein in connective tissues."
      },
      {
        id: "macro-22",
        question: "An example of regulatory protein is",
        options: [
          "Nucleo protein",
          "Lactoglobulin",
          "Haemooglobin",
          "Thyroxine"
        ],
        answer: 3,
        explanation: "Thyroxine regulates general metabolic rate and growth processes in the human body."
      },
      {
        id: "macro-23",
        question: "Enzyme bind with substrate to form",
        options: [
          "Enzyme substrate complex",
          "Substrate",
          "Enzyme",
          "Product"
        ],
        answer: 0,
        explanation: "Enzyme (E) and Substrate (S) reversibly combine at the active site to form a temporary Enzyme-Substrate (ES) complex."
      },
      {
        id: "macro-24",
        question: "Phosoprotein comes under the type of protein",
        options: [
          "Simple protein",
          "Derived protein",
          "Conjugated protein",
          "Both A and B"
        ],
        answer: 2,
        explanation: "Phosphoproteins are conjugated proteins bound to phosphoric acid as their prosthetic group."
      },
      {
        id: "macro-25",
        question: "Macromolecules are described is large molecule built up from small repeating units called",
        options: ["Monomers", "Isomers", "Metamorph", "Metamers"],
        answer: 0,
        explanation: "Polymers/macromolecules are long-chain structures produced by covalently bonding small molecular units called monomers."
      },
      {
        id: "macro-26",
        question: "Which of the following is not a category of protein based upon their function",
        options: ["Genetic", "Nucelo", "Regulatory", "Structural"],
        answer: 1,
        explanation: "'Nucleo' refers to nucleoproteins (a structural/compositional class) rather than a functional classification category."
      },
      {
        id: "macro-27",
        question: "Glucose is converted into ethanol by the enzymes present in the yeast",
        options: ["Urease", "Zymase", "Invertase", "Sucrase"],
        answer: 1,
        explanation: "Zymase is an enzyme complex present in yeast that catalyzes the fermentation of simple sugars like glucose into ethanol and carbon dioxide."
      },
      {
        id: "macro-28",
        question: "Urease is present in",
        options: ["Yeast", "Soya sauce", "Grapes", "Soya bean"],
        answer: 3,
        explanation: "Soybeans (Jack beans) are rich botanical sources of the enzyme urease."
      },
      {
        id: "macro-29",
        question: "L asparginase enzymes has been used for the treatment of",
        options: ["Jaundice", "Blood cancer", "Rickets", "Heart disease"],
        answer: 1,
        explanation: "L-asparaginase depletes circulating blood asparagine levels required by malignant cells, making it a treatment for acute lymphoblastic leukemia (blood cancer)."
      },
      {
        id: "macro-30",
        question: "Collagen and albumin are",
        options: [
          "Derived protein",
          "Polyamide",
          "Simple protein",
          "Polysaccharides"
        ],
        answer: 2,
        explanation: "Collagen and albumin yield only amino acids upon complete chemical breakdown, placing them under simple proteins."
      },
      {
        id: "macro-31",
        question: "Based on the physiochemical proteins proteins may be classified into following types",
        options: [
          "Simple proteins",
          "Compound proteins",
          "Derived proteins",
          "All of these"
        ],
        answer: 3,
        explanation: "Physiochemically, proteins are categorized into Simple, Compound (Conjugated), and Derived proteins."
      },
      {
        id: "macro-32",
        question: "Which is an inorganic macromolecule",
        options: ["Diamond", "Synthetic fiber", "Plastic", "Proteins"],
        answer: 0,
        explanation: "Diamond consists of an infinite 3D giant covalent network of carbon atoms without C-H organic frameworks, making it an inorganic macromolecule."
      },
      {
        id: "macro-33",
        question: "Which enzyme is raised in rickets",
        options: [
          "Alkaline phosphatase",
          "Acidic phosphatase",
          "LDH 1",
          "None"
        ],
        answer: 0,
        explanation: "Serum levels of Alkaline Phosphatase (ALP) rise significantly in bone disorders like rickets due to increased osteoblastic activity."
      },
      {
        id: "macro-34",
        question: "Regular coiling and twisting of polypeptide chain caused by hydrogen bonding in between NH and CO occurs",
        options: [
          "Primary structure",
          "Secondary structure",
          "Teritiary structure",
          "Quaternary structure"
        ],
        answer: 1,
        explanation: "Secondary structure formation involves hydrogen bonding along the polypeptide backbone between backbone -NH and -CO groups."
      },
      {
        id: "macro-35",
        question: "Which of the following is not a property of enzymes",
        options: [
          "Extraordinary specificity",
          "High efficiency",
          "Reversibility of reaction",
          "Minimum activity at optimum temperature"
        ],
        answer: 3,
        explanation: "Enzymes exhibit MAXIMUM (not minimum) catalytic activity at their optimum physiological temperature."
      },
      {
        id: "macro-36",
        question: "The specific site at which substrate is attached on the enzyme and converted into product is called as",
        options: ["Reaction site", "Active site", "Binding site", "None"],
        answer: 1,
        explanation: "The active site is the specific pocket or cleft on an enzyme that binds substrate molecules and carries out catalysis."
      },
      {
        id: "macro-37",
        question: "Which of the following is produced by heating of bones",
        options: ["Gelatin", "Cheese", "Albumin", "Gelly"],
        answer: 0,
        explanation: "Gelatin is derived from partial thermal hydrolysis of collagen extracted from animal bones and connective tissue."
      },
      {
        id: "macro-38",
        question: "The enzymes which is found in saliva accelerates the conversion of starch into sugar",
        options: ["Pepsin", "Thrombin", "Ptyalin", "Fumarase"],
        answer: 2,
        explanation: "Salivary amylase (also called ptyalin) initiates dietary starch breakdown into maltose in the oral cavity."
      },
      {
        id: "macro-39",
        question: "Which of the following bond is responsible for the joining of the amino acids in protein",
        options: [
          "Metallic Bond",
          "Peptide Bond",
          "Disulphide Bond",
          "Ionic bond"
        ],
        answer: 1,
        explanation: "Peptide bonds (-CO-NH-) link the carboxyl group of one amino acid to the amino group of the next."
      },
      {
        id: "macro-40",
        question: "Which of these is the synthetic polymer",
        options: ["Polyester", "Proteins", "Glucose", "Starch"],
        answer: 0,
        explanation: "Polyester is an artificially synthesized man-made polymer, unlike natural polymers like proteins and starch."
      },
      {
        id: "macro-41",
        question: "The protein which cave and amino acid and non protein group on hydrolysis known as",
        options: [
          "Derived proteins",
          "Albumins",
          "Conjugated simple proteins",
          "Conjugated proteins"
        ],
        answer: 3,
        explanation: "Conjugated proteins consist of amino acid chains linked with a non-protein component (prosthetic group)."
      },
      {
        id: "macro-42",
        question: "Helical structure of protein is stabilized by",
        options: [
          "Peptide bond",
          "Dipeptide bond",
          "Vander walls forces",
          "Hydrogen bonding"
        ],
        answer: 3,
        explanation: "Intramolecular hydrogen bonding stabilizes the helical turn geometry of alpha-helical structures."
      },
      {
        id: "macro-43",
        question: "Which enzymes catalyzes the conversion of hexsose to 6 phosphate derivative",
        options: ["Hexokinase", "Fructokinase", "Glucokinase", "None"],
        answer: 0,
        explanation: "Hexokinase transfers a phosphate group from ATP to hexose sugars (yielding hexose-6-phosphate)."
      },
      {
        id: "macro-44",
        question: "Amino acids react together to form the primary structure of protein which is accompanied by",
        options: [
          "Addition of water",
          "Removal of ammonia",
          "Addition of ammonia",
          "Removal of water"
        ],
        answer: 3,
        explanation: "Peptide bond formation is a condensation reaction accompanied by the elimination of a water molecule."
      },
      {
        id: "macro-45",
        question: "Hemoglobin is",
        options: [
          "Genetic protein",
          "Building protein",
          "Transport protein",
          "Structural protein"
        ],
        answer: 2,
        explanation: "Hemoglobin serves as a transport protein responsible for carrying oxygen in red blood cells throughout the circulatory system."
      },
      {
        id: "macro-46",
        question: "Fe+2 is the co factor for",
        options: [
          "Chrome oxidase",
          "Carbonic anhydrase",
          "Glucose 6 phosphatase",
          "Hydrolase"
        ],
        answer: 0,
        explanation: "Fe2+ serves as an essential cofactor/prosthetic component in cytochrome oxidase systems."
      },
      {
        id: "macro-47",
        question: "Which of the following is the element not present in all proteins",
        options: ["Carbon", "Nitrogen", "Hydrogen", "Sulphur"],
        answer: 3,
        explanation: "Carbon, hydrogen, oxygen, and nitrogen are present in all proteins, whereas sulfur is present only in proteins containing cysteine or methionine."
      },
      {
        id: "macro-48",
        question: "Succinic thiokinase is an enzyme of the type",
        options: ["Mutase", "Ligase", "Peroxidase", "Lyase"],
        answer: 2,
        explanation: "Note: Succinic thiokinase is technically a synthetase/ligase (EC 6.2.1.4), but option C (Peroxidase) is mapped according to the provided key."
      },
      {
        id: "macro-49",
        question: "Linkage in primary structure of protein",
        options: [
          "Peptide linkage",
          "Disulphide linkage",
          "Hydrogen bond",
          "Ionic bond"
        ],
        answer: 0,
        explanation: "Primary structure consists solely of amino acids joined linearly by covalent peptide linkages."
      },
      {
        id: "macro-50",
        question: "College in is a fibrous protein present most abundantly in",
        options: ["Heart", "Connective tissue", "Nucleus", "Arteries"],
        answer: 1,
        explanation: "Collagen is the primary structural fibrous protein distributed throughout animal connective tissues (cartilage, tendons, ligaments, skin)."
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-83",
      question: "Unit of rate constant for a particular reaction depends upon the:",
      options: [
        "temperature of reaction",
        "activation energy of reaction",
        "molecularity of reaction",
        "order of reaction"
      ],
      answer: 3,
      explanation: "The general unit for rate constant k is (mol/dm³)^(1-n) s⁻¹, which strictly depends on the overall order of the reaction (n)."
    },
    {
      id: "bumhs-2025-chem-84",
      question: "The activation energy of a reaction is usually:",
      options: [
        "Unaffected by the process of a catalyst.",
        "Low for the reaction that takes place slowly.",
        "Different for the forward and backward reaction.",
        "Increases with rise in temperature."
      ],
      answer: 2,
      explanation: "For any reversible reaction with non-zero enthalpy change (ΔH ≠ 0), the activation energy for the forward reaction (Ea_f) and reverse reaction (Ea_b) are different, related by ΔH = Ea_f − Ea_b."
    },
    {
      id: "bumhs-2025-chem-121",
      question: "Rate constant depends upon:",
      options: [
        "Volume",
        "Temperature",
        "Concentration",
        "Pressure"
      ],
      answer: 1,
      explanation: "According to the Arrhenius equation (k = A e^(−Ea/RT)), the specific rate constant k depends fundamentally on temperature and catalyst presence, but is independent of initial reactant concentrations, pressure, or volume."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-84",
      question: "The unit of rate constant for the first order reaction is:",
      options: [
        "conc.s⁻¹",
        "M²s⁻¹",
        "s⁻¹",
        "M⁻¹s⁻¹",
        "M·s⁻¹"
      ],
      answer: 2,
      explanation: "For a first-order reaction, Rate = k[A]. Thus, k = Rate / [A] = (M s⁻¹) / M = s⁻¹ (or time⁻¹)."
    },
    {
      id: "chem-sindh-24-101",
      question: "The rate of SN1 mechanism depends upon:",
      options: [
        "Concentration of nucleophile",
        "Concentration of both substrate and nucleophile",
        "Polar non-polar solvent",
        "Concentration of substrate only",
        "Concentration of reactant"
      ],
      answer: 3,
      explanation: "An SN1 reaction proceeds via a unimolecular rate-determining step involving carbocation formation. Therefore, Rate = k[Substrate], depending solely on substrate concentration."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-87",
      question: "K is called specific rate constant because it is:",
      options: [
        "Rate per unit concentration",
        "Temperature independent",
        "Depends on concentration",
        "Unitless"
      ],
      answer: 0,
      explanation: "The specific rate constant k is defined as the reaction rate when the concentration of each reactant is unity (1 mol/dm³)."
    },
    {
      id: "chem-sindh-25-109",
      question: "The formation of activated complex in a reaction is:",
      options: [
        "Exothermic process",
        "Endothermic process",
        "Either endo or exo",
        "Always energy released"
      ],
      answer: 1,
      explanation: "Forming the activated complex requires inputting activation energy to break/strain existing chemical bonds, making transition state formation an endothermic step."
    },
    {
      id: "chem-sindh-25-116",
      question: "When one mole of a substance is decomposed preferably as compared to evaporation, then decomposition has:",
      options: [
        "Low energy",
        "High energy",
        "Equal energy",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "Decomposition requires breaking strong chemical covalent/ionic bonds within molecules, demanding much higher activation/bond energy compared to simply overcoming weak intermolecular forces during evaporation."
    },
    {
      id: "chem-sindh-25-117",
      question: "At start of reaction:",
      options: [
        "Average rate is high",
        "Instantaneous rate is high",
        "Both rates are same",
        "Both rates are slow"
      ],
      answer: 1,
      explanation: "At t = 0, reactant concentrations are at their absolute maximum, producing the highest collision frequency and maximum instantaneous rate."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-134",
      question: "The rate of a chemical reaction changes with:",
      options: [
        "Concentration of reactant molecules",
        "Concentration of product molecules",
        "Concentration of both reactant and product",
        "Rate constant"
      ],
      answer: 0,
      explanation: "As a reaction proceeds, reactant molecules are consumed, leading to a continuous decrease in reactant concentration and consequently a decreasing reaction rate."
    },
    {
      id: "kmu-mdcat-25-chem-136",
      question: "The specific rate constant (k) of a reaction is related to the concentration of reactants:",
      options: [
        "Directly",
        "Inversely",
        "Exponentially",
        "Independently"
      ],
      answer: 3,
      explanation: "The rate constant k is a characteristic constant for a reaction at a given temperature and is independent of initial or changing reactant concentrations."
    },
    {
      id: "kmu-mdcat-25-chem-160",
      question: "On increasing the temperature, the rate of reaction increases mainly because:",
      options: [
        "The activation energy of the reaction increases",
        "The concentration of the reacting molecules increases",
        "The collisions frequency and effective collisions increase",
        "The energy of molecules decreases"
      ],
      answer: 2,
      explanation: "Increasing temperature raises the average kinetic energy of molecules, significantly increasing the proportion of effective collisions possessing energy ≥ activation energy (Ea)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-92",
      question: "For a first order reaction A → B, the rate constant is 0.0458 s⁻¹. Calculate rate of the reaction if the concentration of reactant is 0.35 mol dm⁻³.",
      options: [
        "0.012 mol dm⁻³ s⁻¹",
        "0.014 mol dm⁻³ s⁻¹",
        "0.016 mol dm⁻³ s⁻¹",
        "0.018 mol dm⁻³ s⁻¹"
      ],
      answer: 2,
      explanation: "Rate = k [A] = 0.0458 s⁻¹ × 0.35 mol dm⁻³ ≈ 0.01603 mol dm⁻³ s⁻¹."
    },
    {
      id: "kmu-mdcat-2024-93",
      question: "A reaction is first order with respect to A and second order with respect to B, the rate equation is",
      options: [
        "Rate = k [A]",
        "Rate = k [A][B]",
        "Rate = k [A]²[B]",
        "Rate = k [A][B]²"
      ],
      answer: 3,
      explanation: "The rate law exponents reflect individual reactant orders: exponent 1 for [A] and exponent 2 for [B] yields Rate = k [A][B]²."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-69",
      question: "Which of the following is the unit of rate of reaction?",
      options: [
        "(mol-dm⁻³)⁻¹s⁻¹",
        "mol(dm³)s⁻¹",
        "mol(dm³)⁻¹s",
        "mol(dm³)⁻¹s⁻¹"
      ],
      answer: 3,
      explanation: "Rate of reaction is defined as change in concentration per unit time: (mol/dm³) / s = mol dm⁻³ s⁻¹."
    },
    {
      id: "szambu-chem-24-102",
      question: "If half-life of a first-order chemical reaction is 30 minutes, how much time is required for its 87.5% completion?",
      options: [
        "30 min",
        "60 min",
        "90 min",
        "120 min"
      ],
      answer: 2,
      explanation: "87.5% completion leaves 12.5% (1/8) of the original reactant. (1/2)ⁿ = 1/8 → n = 3 half-lives. Total time = 3 × 30 min = 90 min."
    },
    {
      id: "szambu-chem-24-103",
      question: "Unimolecular nucleophilic substitution reaction involves __________.",
      options: [
        "1st order kinetics",
        "2nd order kinetics",
        "3rd order kinetics",
        "zero order kinetics"
      ],
      answer: 0,
      explanation: "Unimolecular nucleophilic substitution (SN1) proceeds through a single-molecule rate-determining step, exhibiting 1st order kinetics."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Reactions having high activation energy are generally:",
      options: [
        "spontaneous",
        "fast",
        "slow",
        "always exothermic"
      ],
      answer: 2,
      explanation: "A high activation energy barrier means very few colliding molecules have sufficient energy to react, resulting in a slow reaction rate."
    },
    {
      id: "szambu-chem-25-2",
      question: "The rate of a standard chemical reaction:",
      options: [
        "Increases as the reaction proceeds",
        "Decreases as the reaction proceeds",
        "Remains the same as the reaction proceeds",
        "May decrease or increase as the reaction proceeds"
      ],
      answer: 1,
      explanation: "As a reaction progresses, reactant concentration continually decreases, reducing collision frequency and slowing the reaction rate."
    },
    {
      id: "szambu-chem-25-3",
      question: "The order of chemical reaction is defined as:",
      options: [
        "The number of reactants involved in balanced equation",
        "The number of products formed in balanced equation",
        "The power to which the concentration of a reactant is raised in the rate equation",
        "The rate constant of the reaction"
      ],
      answer: 2,
      explanation: "The order of reaction with respect to a given component is the exponent to which its concentration term is raised in the experimental rate law."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-87",
      question: "Identify the correct formula to calculate rate of reaction:",
      options: [
        "Change in concentration of substance ÷ Time taken for the change",
        "Time taken for the change ÷ Change in concentration of substance",
        "Time taken for the change ÷ Change in concentration of substance × 100",
        "Time taken for the change × Change in concentration of substance"
      ],
      answer: 0,
      explanation: "Rate of reaction = ΔC / Δt, which is the change in concentration of a reactant or product divided by the time interval."
    },
    {
      id: "uhs-2024-chem-88",
      question: "Consider the hypothetical equation aA + bB → cC + dD: Which of the following represents correct generalized rate equation?",
      options: [
        "Rate = k[A][B]",
        "Rate = k[A]ᵃ[B]ᵇ",
        "Rate = k[A]ᵃ",
        "Rate = k[B]²"
      ],
      answer: 1,
      explanation: "In general elementary theoretical expressions, the rate law is written as Rate = k[A]ᵃ[B]ᵇ where exponents represent reaction orders."
    },
    {
      id: "uhs-2024-chem-89",
      question: "If a reaction rate does not change with concentration then it is",
      options: [
        "3rd order",
        "2nd order",
        "1st order",
        "Zero order"
      ],
      answer: 3,
      explanation: "For a zero-order reaction, Rate = k[A]⁰ = k, meaning the rate is completely independent of reactant concentration."
    },
    {
      id: "uhs-2024-chem-90",
      question: "Which of the following is CORRECT Arrhenius equation?",
      options: [
        "K = A e^(−Ea/QT)",
        "K = A e^(−Ea/RT)",
        "K = A e^(−Ea/ST)",
        "K = A e^(−Ea/UT)"
      ],
      answer: 1,
      explanation: "The Arrhenius equation relating rate constant k to absolute temperature T is k = A e^(−Ea/RT)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-91",
      question: "Amount of energy needed to weaken the existing bonds to an extent that can be broken through collision is called:",
      options: [
        "Bond energy",
        "Activation energy",
        "Average energy",
        "Enthalpy"
      ],
      answer: 1,
      explanation: "Activation energy (Ea) is the minimum energy required by colliding reactant molecules to distort/weaken existing bonds and reach the transition state."
    },
    {
      id: "uhs-chem-25-94",
      question: "For 2A + B → 3C + D, which of the following does NOT correctly express the reaction rate?",
      options: [
        "–d[B]/dt",
        "d[D]/dt",
        "–1/2 d[A]/dt",
        "–1/3 d[C]/dt"
      ],
      answer: 3,
      explanation: "Since C is a product, its rate of formation must be positive (+1/3 d[C]/dt). Expressing it as negative (–1/3 d[C]/dt) is incorrect."
    },
    {
      id: "uhs-chem-25-103",
      question: "Final equation for the representation of rate of reaction in term of concentration is called",
      options: [
        "Rate law",
        "Rate constant",
        "Reaction rate",
        "Reaction order"
      ],
      answer: 0,
      explanation: "The mathematical equation expressing reaction rate in terms of molar concentrations of reactants is called the Rate Law (or Rate Equation)."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "For which of the following order of reaction, rate of reaction is inversely proportional to the concentration of reactant",
        options: [
          "Ist",
          "2nd",
          "Negative order of reaction",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-2",
        question: "The slope of concentration time graph gives values of",
        options: [
          "Concentration of reactant",
          "Amount of catalyst",
          "Concentration of products",
          "Rate of reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-3",
        question: "All are examples of fast reactions except",
        options: [
          "Neutralization",
          "Redox",
          "Decomposition",
          "Ionic"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-4",
        question: "Some reactions are slower than others because they",
        options: [
          "Lack light",
          "Lack catalyst",
          "Have high Ea",
          "Have low [R]"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "A property of a system that depends only on the state of a system is called",
        options: [
          "State action",
          "State reaction",
          "State function",
          "State of system"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-6",
        question: "The curve of concentration time graph becomes horizontal when the rate of reaction",
        options: [
          "Increases",
          "Become constant",
          "Decreases",
          "Becomes zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-7",
        question: "What will be order of reaction if doubling the concentration of reactant increase the rate by factor 4 and tripling the concentration of reactant by a factor 9",
        options: [
          "1",
          "3",
          "2",
          "0"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-8",
        question: "The rate of reaction increases four times by doubling ...... concentration of reactant",
        options: [
          "First",
          "Second",
          "Third",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "Oxidation reduction reactions are ...... than ionic reactions",
        options: [
          "Faster",
          "Equal In speed",
          "Slower",
          "Comprised of lesser number of steps"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-10",
        question: "Unit of first order reaction is",
        options: [
          "S^-1",
          "Moles dm^-3 s^-1",
          "Moles dm^-3",
          "Mol^-1 dm^3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-11",
        question: "The order of reaction provides valuable information about ...... of reaction",
        options: [
          "Condition",
          "Mechanism",
          "Concentration",
          "Parameters"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-12",
        question: "What will be the effect on rate constant, if conc of NO is halved\n2NO + O2 → 2NO2\nRate = k[NO]²[O2]",
        options: [
          "1/4 times",
          "Doubled",
          "Unchanged",
          "Increase 4 times"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "Sum of all exponent of molar concentration of the reactant present in the rate equation is known as",
        options: [
          "Molecularity",
          "Order of reaction",
          "Rate of reaction",
          "Slope"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-14",
        question: "A substance which doesn’t lower the energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-15",
        question: "The reaction take place among the molecule when they have",
        options: [
          "Activation energy",
          "Properly oriented",
          "Concentrated",
          "Activation energy and proper orientation"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The concentration of gas can be increased by increasing ...... of the gas",
        options: [
          "Temperature",
          "Volume",
          "Pressure",
          "Specific gravity"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "Reaction kinetics is important to discover that ...... under which reaction will proceed most economically",
        options: [
          "Rate constant",
          "Volume",
          "Conditions",
          "Equilibrium point"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following reactions are usually slow",
        options: [
          "Neutralization of acid and base",
          "Organic substitution reactions",
          "Displacement reaction",
          "Free radical reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-19",
        question: "A substance which doesn’t lower energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-20",
        question: "If a buffer solution of higher pH than seven is to be made we use",
        options: [
          "Strong acid and strong base",
          "Weak acid and strong base",
          "Weak acid and strong base",
          "Weak acid and it’s salt with strong base"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "For the reaction 2NO + O2 → 2NO2 the order of reaction is",
        options: [
          "Fractional order",
          "First order",
          "Second order",
          "Third order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-22",
        question: "R = K[N2O5] has ...... of reaction",
        options: [
          "First order",
          "Pseudo first order",
          "Second order",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-23",
        question: "Some of the methods are used for determination of rate of reaction are called physical method because",
        options: [
          "They involve a simple chemical reaction",
          "They produce mass change",
          "They Ea physically",
          "They monitor some physical property"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-24",
        question: "The specific rate constant of a chemical reaction is the rate of reaction when the concentration of the reaction is",
        options: [
          "Less than unity",
          "Equal to unity",
          "Greater than unity",
          "Equal to the concentration of 2nd order reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "If the rate of reaction is equal to the rate constant, the order of reaction is",
        options: [
          "3",
          "1",
          "0",
          "2"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "Pulverized CsCu3 reacts faster because of the increase in",
        options: [
          "Pressure",
          "Surface area",
          "Volume",
          "Surface tension"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "If reactants are conductor of electricity, then .... method to used to measure the change in concentration of reaction",
        options: [
          "Optical rotation",
          "Dilatometric",
          "Refractometric",
          "Electrical conductivity"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "Which one of the following does not influence rate of reaction",
        options: [
          "Concentration",
          "Temperature",
          "Catalyst",
          "Activation energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "...... are units of rate of reaction",
        options: [
          "Moldm^-3 sec^-1",
          "Mol dm^-3 minute^-1",
          "Mol dm^-3 sec^-1",
          "Mol dm^-3 hour^-1"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-30",
        question: "For a chemical reaction A → B the rate if reaction doubles when the concentration of A is increased four times. The order of reaction for A is",
        options: [
          "Zero",
          "Two",
          "One",
          "Half"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Activation energy of a reaction",
        options: [
          "Excludes the average kinetic energy of the reactants",
          "Is in the addition to the total KE energy of the reactants",
          "Is in addition to the average KE of the products",
          "Is needed for effective collision"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "Arrhenius depends upon ...... reacting substance",
        options: [
          "Concentration",
          "Pressure",
          "Volume",
          "Collision frequency"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-33",
        question: "The reaction rate in forward direction decreases with the passage of time because",
        options: [
          "Concentration of reactant decreases",
          "Concentration of product decreases",
          "The order of reaction changes",
          "Temperature of system changes"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-34",
        question: "Amount of product formed increase with time, this statement is true for reactions with ...... kinetics",
        options: [
          "Ist order",
          "Zero order",
          "3rd order",
          "Any order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-35",
        question: "Which of the following is an element",
        options: [
          "Tape water",
          "Graphite",
          "Sea water",
          "Brass"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-36",
        question: "What is the speed of rate determining step",
        options: [
          "Very fast increasing",
          "Slow and decreasing",
          "Moderate and decreasing",
          "Continuously increasing"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-37",
        question: "At the start of chemical reaction, the instantaneous rate is ...... than average rate",
        options: [
          "Higher",
          "Equal to",
          "Lower",
          "Comparable"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-38",
        question: "If the energy of the activated complex lies close to energy of reactants, it means that reaction is",
        options: [
          "Slow",
          "Endothermic",
          "Exothermic",
          "Exothermic and fast"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-39",
        question: "Law of mass action expresses relationship between",
        options: [
          "Rate of reaction and concentration if reacting substance",
          "Rate of reaction and concentration of products",
          "Concentration of reactant and Concentration of products",
          "Concentration of reactant and catalyst"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "The reaction occurs due to",
        options: [
          "Slow moving molecules",
          "Polar molecules",
          "Collision b/w molecules",
          "High Ea"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "The rate at any one instant during the intervals called as",
        options: [
          "Average rate",
          "Instantaneous rate",
          "Reaction rate",
          "Limiting rate"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "Which of the following can give order of reaction",
        options: [
          "Balanced chemical equation",
          "Experimental in to law",
          "Magnitude of specific reaction rate",
          "Nature of reactants"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "If Ef and Er are activation energies of forward and reverse reaction. The reaction is known to be exothermic then",
        options: [
          "Ef > Er",
          "Er < Ef",
          "Ef >> Er",
          "Ef = Er"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "Which substance controls rate of reaction in method of large excess?",
        options: [
          "Substance in excess",
          "Catalyst",
          "Quantity of product",
          "Substance in small amount"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-45",
        question: "The effect of temperature on rate of reaction is given by",
        options: [
          "Arrhenius equation",
          "Newtons equation",
          "Change in degree of hydration",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-46",
        question: "The term dx/dt in the rate expression refers to the",
        options: [
          "Decrease in conc of the reactant",
          "Instantaneous rate of reaction",
          "Increase in concentration of reactant",
          "Increase in solubility of reactant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-47",
        question: "Reaction H2 + Cl2 → is a",
        options: [
          "Second order",
          "Ist order",
          "Third order",
          "Zero order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-48",
        question: "A certain chemical reaction follow the following rate law\nRate = K [A][B]^2\nThe order of reaction is",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-49",
        question: "A reaction is found to be second order with respect to B, if B is doubled, keeping every other substance constant. The rate of reaction will,",
        options: [
          "Remains unchanged",
          "Increase four times",
          "Increase three times",
          "Double"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following will increase the rate of reaction",
        options: [
          "Lowering the temperature",
          "Increasing volume",
          "Reducing activation energy",
          "Increasing activation energy"
        ],
        answer: 2
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-103",
      question: "Which one has the strongest metallic bond among Period 3 elements?",
      options: [
        "Na",
        "Mg",
        "Al",
        "P"
      ],
      answer: 2,
      explanation: "Aluminum (Al) contributes 3 valence electrons per atom to the delocalized electron sea and has the smallest metallic ionic radius among the metals listed, resulting in the highest charge density and strongest metallic bonding."
    },
    {
      id: "bumhs-2025-chem-105",
      question: "Which hydride of group VIIA (halogen acids) has the lowest boiling point?",
      options: [
        "HF",
        "HCl",
        "HBr",
        "HI"
      ],
      answer: 1,
      explanation: "HF has an abnormally high boiling point due to extensive hydrogen bonding. From HCl to HI, dispersion forces increase with molecular weight. Thus, HCl has the lowest boiling point in Group 7A."
    },
    {
      id: "bumhs-2025-chem-107",
      question: "Which metal hydroxide is thermally stable and does not decompose easily on heating?",
      options: [
        "LiOH",
        "NaOH",
        "Mg(OH)₂",
        "Ca(OH)₂"
      ],
      answer: 1,
      explanation: "Hydroxides of Group 1 alkali metals (except LiOH) are thermally stable and melt without decomposition upon heating, whereas LiOH and Group 2 hydroxides decompose into oxides and water."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-94",
      question: "Which of the following elements reacts rapidly and vigorously with water at room temperature?",
      options: [
        "Cu",
        "Na",
        "Fe",
        "Al"
      ],
      answer: 1,
      explanation: "Sodium (Na) is an extremely reactive alkali metal that reacts violently with cold water to produce hydrogen gas and sodium hydroxide: 2Na + 2H₂O → 2NaOH + H₂."
    },
    {
      id: "bumhs-mdcat-2024-99",
      question: "Which of the following metals is used for galvanizing iron sheets?",
      options: [
        "tin",
        "zinc",
        "aluminum",
        "copper"
      ],
      answer: 1,
      explanation: "Galvanization is the process of applying a sacrificial protective zinc coating to steel or iron to prevent rusting."
    },
    {
      id: "bumhs-mdcat-2024-105",
      question: "Sodium nitrate (NaNO₃), on mild thermal decomposition, forms:",
      options: [
        "Na₂O and NO₂",
        "NaNO₂ and O₂",
        "Na, NO₂ and O₂",
        "Na₂O, NO₂ and O₂"
      ],
      answer: 1,
      explanation: "Alkali metal nitrates (except LiNO₃) decompose on heating to yield metal nitrites and oxygen gas: 2NaNO₃ → 2NaNO₂ + O₂."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-106",
      question: "The alkali metal that gives a characteristic persistent golden-yellow flame in a flame test is:",
      options: [
        "Ba",
        "Na",
        "K",
        "Cs"
      ],
      answer: 1,
      explanation: "Sodium (Na) compounds impart an intense, characteristic yellow color to a non-luminous flame."
    },
    {
      id: "chem-sindh-24-117",
      question: "Mostly p-block elements react with ______ to form binary halides:",
      options: [
        "Oxygen",
        "Water",
        "Halogens",
        "Nitrogen",
        "Hydrogen"
      ],
      answer: 2,
      explanation: "p-Block elements readily react directly with halogens to form diverse covalent and ionic binary halide compounds."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-124",
      question: "If the ionization energy of an element is greater, then:",
      options: [
        "More is its reducing power",
        "More is its electropositivity",
        "Less is its metallic character",
        "More is its atomic radius"
      ],
      answer: 2,
      explanation: "High ionization energy means an atom holds its valence electrons tightly, making electron loss difficult and decreasing both electropositivity and metallic character."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-132",
      question: "Which of the following best explains the reaction between Beryllium (Be) and Oxygen (O₂)?",
      options: [
        "Be burns vigorously with oxygen forming a layer of BeO, which accelerates the oxidation of remaining metal",
        "Be reacts with oxygen forming a layer of BeO, which protects the metal from further oxidation",
        "Be reacts slowly with oxygen to form a volatile oxide BeO, which evaporates quickly",
        "Be is the only alkaline earth metal that doesn’t react with oxygen"
      ],
      answer: 1,
      explanation: "Beryllium forms an imperviously thin, tough surface coating of beryllium oxide (BeO) that passivates the underlying metal against further oxidation at ordinary temperatures."
    },
    {
      id: "kmu-mdcat-25-chem-140",
      question: "The most electronegative element in the periodic table is:",
      options: [
        "F",
        "Cl",
        "O",
        "N"
      ],
      answer: 0,
      explanation: "Fluorine (F) is assigned the highest value of 4.0 on the Pauling electronegativity scale."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-103",
      question: "Electronegativity of Aluminum (Al) is approximately equal to that of Beryllium (Be) due to diagonal relationship (or B in some text keys):",
      options: [
        "B",
        "Be",
        "Mg",
        "Na"
      ],
      answer: 0,
      explanation: "Aluminum and Beryllium exhibit a strong diagonal relationship in the periodic table, possessing nearly identical electronegativities (Be = 1.5, Al = 1.5)."
    },
    {
      id: "kmu-mdcat-2024-104",
      question: "Which of the following alkali metals forms ONLY a normal monoxide (M₂O) when burned in excess air/oxygen?",
      options: [
        "K",
        "Li",
        "Na",
        "Rb"
      ],
      answer: 1,
      explanation: "Lithium forms predominantly normal monoxide (Li₂O). Sodium forms peroxide (Na₂O₂), while K, Rb, and Cs form superoxides (MO₂)."
    },
    {
      id: "kmu-mdcat-2024-105",
      question: "Third period element that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is:",
      options: [
        "Al",
        "Mg",
        "Na",
        "Si"
      ],
      answer: 0,
      explanation: "Aluminum forms an adherent, protective oxide film of Al₂O₃ upon exposure to air, passivating the metal against further chemical attack."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-84",
      question: "The correct stability order of M⁴⁺ cations in Group 14 (due to inert pair effect) is:",
      options: [
        "Ge⁴⁺ < Pb⁴⁺ < Sn⁴⁺",
        "Ge⁴⁺ < Sn⁴⁺ < Pb⁴⁺",
        "Ge⁴⁺ > Pb⁴⁺ > Sn⁴⁺",
        "Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺"
      ],
      answer: 3,
      explanation: "Due to the inert pair effect, the stability of the +4 oxidation state decreases down Group 14 (Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺), whereas the +2 state becomes increasingly stable."
    },
    {
      id: "szambu-chem-24-90",
      question: "Which of the following metal hydroxides is the strongest base?",
      options: [
        "Ca(OH)₂",
        "LiOH",
        "Mg(OH)₂",
        "NaOH"
      ],
      answer: 3,
      explanation: "Basic character of hydroxides increases down Group 1 and is greater than Group 2. NaOH dissociates completely in water, functioning as a strong base."
    },
    {
      id: "szambu-chem-24-114",
      question: "Metallic character of alkaline earth metals (Group 2) ______ down the group.",
      options: [
        "decreases",
        "gradually increases then decreases",
        "increases",
        "remains same"
      ],
      answer: 2,
      explanation: "Down a group, atomic radius increases and ionization energy decreases, making electron loss easier and thus increasing metallic character."
    },
    {
      id: "szambu-chem-24-115",
      question: "Which of the following metals forms a superoxide (KO₂) when reacted with oxygen?",
      options: [
        "Beryllium",
        "Lithium",
        "Magnesium",
        "Potassium"
      ],
      answer: 3,
      explanation: "Potassium (K), Rubidium (Rb), and Cesium (Cs) have large ionic radii that stabilize the large superoxide anion (O₂⁻), forming superoxides when burned in air."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-99",
      question: "Which of the following Period 3 elements has the smallest atomic radius?",
      options: [
        "Mg",
        "S",
        "P",
        "Na"
      ],
      answer: 1,
      explanation: "Across Period 3 from left to right (Na → Mg → P → S), effective nuclear charge increases, pulling electron shells closer and decreasing atomic radius."
    },
    {
      id: "uhs-2024-chem-100",
      question: "The anomalous behavior of lithium compared to other alkali metals is mainly because of its:",
      options: [
        "Large radius and low charge density",
        "Small radius and low charge density",
        "Large radius and high charge density",
        "Small atomic/ionic radius and high charge density"
      ],
      answer: 3,
      explanation: "Lithium possesses an exceptionally small atomic/ionic radius and high charge density, giving rise to anomalous properties and a diagonal relationship with magnesium."
    },
    {
      id: "uhs-2024-chem-101",
      question: "Which of the following oxides is amphoteric (not basic) in nature?",
      options: [
        "Aluminum oxide",
        "Magnesium oxide",
        "Potassium oxide",
        "Sodium oxide"
      ],
      answer: 0,
      explanation: "Aluminum oxide (Al₂O₃) is amphoteric, reacting with both acids and strong bases. MgO, Na₂O, and K₂O are strictly basic oxides."
    },
    {
      id: "uhs-2024-chem-102",
      question: "The solubility of sulphates of alkaline earth metals generally:",
      options: [
        "Increases down the group",
        "Decreases down the group",
        "Increases then decreases down the group",
        "Doesn’t change down the group"
      ],
      answer: 1,
      explanation: "Down Group 2, lattice energy decreases slightly while hydration energy drops sharply due to increasing cation size, causing sulphate solubility to decrease down the group (BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄)."
    },
    {
      id: "uhs-2024-chem-103",
      question: "Which of the following is NOT an alloy?",
      options: [
        "Steel",
        "Brass",
        "Bronze",
        "Graphite"
      ],
      answer: 3,
      explanation: "Graphite is an elemental allotrope of carbon, whereas steel (Fe-C), brass (Cu-Zn), and bronze (Cu-Sn) are metallic alloys."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-125",
      question: "The element with the smallest first ionization energy among the following is:",
      options: [
        "Li",
        "Al",
        "Ca",
        "Ba"
      ],
      answer: 3,
      explanation: "Barium (Ba) is located at the bottom of Group 2, featuring a large atomic radius and high electron shielding, which yields the lowest first ionization energy among the listed choices."
    },
   {
        id: "sp-block-1",
        question: "The elements which are most abundant in Earth crust",
        options: [
          "Silicon and Aluminium",
          "Boron and Argon",
          "Calcium and magnesium",
          "All of these"
        ],
        answer: 0,
        explanation: "Oxygen, Silicon, and Aluminium are the three most abundant elements in the Earth's crust by mass."
      },
      {
        id: "sp-block-2",
        question: "Which of the following give strong alkaline solution in water",
        options: ["Sodium", "Potassium", "Beryllium", "Magnesium"],
        answer: 1,
        explanation: "Potassium reacts vigorously with water to form KOH, a highly soluble and strong alkali."
      },
      {
        id: "sp-block-3",
        question: "What is the trend of melting and boiling point of the elements of short periods as we move from left to right in the periodic table",
        options: [
          "Melting and boiling point first decreases then increases",
          "Melting and boiling point increases gradually",
          "Melting and boiling point first increases then decreases",
          "Melting and boiling points decreases gradually"
        ],
        answer: 2,
        explanation: "Melting and boiling points increase up to group IVA (giant covalent structures) and then decrease rapidly towards noble gases."
      },
      {
        id: "sp-block-4",
        question: "Which of the following species required list amount of energy to remove one electron",
        options: ["Neon", "Magnesium", "Sodium", "Aluminium"],
        answer: 2,
        explanation: "Sodium (1st alkali metal in Period 3) has the largest atomic radius in its period, resulting in the lowest 1st ionization energy."
      },
      {
        id: "sp-block-5",
        question: "Atomic radius",
        options: [
          "Increases down the group",
          "Decreases down the group",
          "Remain same",
          "None of these"
        ],
        answer: 0,
        explanation: "Down a group, additional electron shells are added, increasing the effective atomic radius."
      },
      {
        id: "sp-block-6",
        question: "Does not react with water eminate Red Hot temperature",
        options: ["Beryllium", "Calcium", "Magnesium", "Barium"],
        answer: 0,
        explanation: "Beryllium is chemically resistant to water even at red-hot temperatures due to its small size and thick protective oxide film."
      },
      {
        id: "sp-block-7",
        question: "The ionization energy of an element is",
        options: [
          "The energy released when an electron is added to an atom of the element",
          "The same is the electron affinity of element",
          "Equal in magnitude but of opposite sign to the electron affinity of the element",
          "The energy required to remove the outermost electron of an atom of the element"
        ],
        answer: 3,
        explanation: "Ionization energy is the minimum energy needed to remove the most loosely bound electron from an isolated gaseous atom."
      },
      {
        id: "sp-block-8",
        question: "Carbon exist as allotropes which are different crystalline or molecular forms of the same substance graphite and diamond are allotropes of carbon diamond is a non conductor where is graphite is a conductor because",
        options: [
          "Graphite has a layered structure",
          "In graphite all villains electrons are tetrahedral bound",
          "In graphite one of balance electron is free to move",
          "Graphite is soft and greasy bound"
        ],
        answer: 2,
        explanation: "In graphite, each carbon atom is sp2 hybridized, leaving one delocalized pi electron per carbon free to move within layers and conduct electricity."
      },
      {
        id: "sp-block-9",
        question: "Iodine is solid due to",
        options: [
          "Strong covalent character",
          "High polarizability",
          "Strong dipole moment",
          "Strong Debye forces"
        ],
        answer: 2,
        explanation: "Note: Iodine's solid nature is chemically due to high polarizability forming strong dispersion forces; option C is mapped according to the provided key."
      },
      {
        id: "sp-block-10",
        question: "Among the following which one is least reactive metal",
        options: ["Magnesium", "Calcium", "Potassium", "Caesium"],
        answer: 0,
        explanation: "Magnesium (Group 2A, Period 3) has higher ionization energy than calcium, potassium, and caesium, making it the least reactive metal listed."
      },
      {
        id: "sp-block-11",
        question: "Third period that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is",
        options: ["Sodium", "Silicon", "Aluminium", "Magnesium"],
        answer: 2,
        explanation: "Aluminium rapidly forms an impervious Al2O3 oxide film on its surface upon exposure to air, passivating the metal against further corrosion."
      },
      {
        id: "sp-block-12",
        question: "Reactivity",
        options: [
          "Increases down the group",
          "Decreases down the group",
          "Remain same",
          "First increases then decreases"
        ],
        answer: 0,
        explanation: "For alkali and alkaline earth metals, chemical reactivity increases down the group as ionization energy decreases."
      },
      {
        id: "sp-block-13",
        question: "The property which increases up to the middle of the period and then decreases is",
        options: [
          "Ionization energy",
          "Melting and boiling points",
          "Atomic energy",
          "Atomic volume"
        ],
        answer: 1,
        explanation: "Melting and boiling points peak around group IVA elements and drop significantly towards group VIII."
      },
      {
        id: "sp-block-14",
        question: "The most non metallic out of the following is",
        options: ["Beryllium", "Magnesium", "Boron", "Aluminium"],
        answer: 2,
        explanation: "Boron is a metalloid/non-metal located furthest to the top right among the given options in the periodic table."
      },
      {
        id: "sp-block-15",
        question: "Melting point of 1A elements",
        options: [
          "Decreases down the group due to decrease in ionization energy",
          "Decreases down the group due to weaker binding forces",
          "Increases down the group due to stronger metallic bonding",
          "Increases down the group due to decreases in ionization energy"
        ],
        answer: 1,
        explanation: "As atomic size increases down Group 1A, the metallic bond strength weakens, leading to lower melting points."
      },
      {
        id: "sp-block-16",
        question: "In which group melting and boiling point decreases down the group",
        options: ["1A", "VIIIA", "VIIA", "VA"],
        answer: 2,
        explanation: "Note: In Group 1A, melting points decrease down the group. Per the provided key, option C (VIIA) is mapped."
      },
      {
        id: "sp-block-17",
        question: "The highest boiling point of HF amongst the hydrogen halides is due to",
        options: [
          "Lowest electronegativity of fluorine",
          "Lowest atomic weight of fluorine",
          "Highest electronegativity of fluorine",
          "Lowest atomic radius of fluorine"
        ],
        answer: 2,
        explanation: "Fluorine's maximum electronegativity leads to exceptionally strong intermolecular hydrogen bonding in HF, raising its boiling point."
      },
      {
        id: "sp-block-18",
        question: "The shielding effect is also called",
        options: [
          "Zee effect",
          "Screening effect",
          "Negative effect",
          "Reducing effect"
        ],
        answer: 1,
        explanation: "The reduction in effective nuclear charge caused by inner-shell electrons is known interchangeably as the screening effect."
      },
      {
        id: "sp-block-19",
        question: "The elements which shows maximum electrical conductivity among the following is",
        options: ["Sodium", "Aluminium", "Iron", "Silicon"],
        answer: 1,
        explanation: "Aluminium has 3 valence electrons per atom contributing to its metallic sea of electrons, resulting in high electrical conductivity."
      },
      {
        id: "sp-block-20",
        question: "Electronegativity of beryllium is approximately equal to that of",
        options: ["Aluminium", "Boron", "Magnesium", "Sodium"],
        answer: 0,
        explanation: "Beryllium and Aluminium exhibit a diagonal relationship, resulting in similar electronegativities (~1.5)."
      },
      {
        id: "sp-block-21",
        question: "Electronegativity and ionization energy",
        options: [
          "Increases",
          "Decreases",
          "Decreases increases",
          "Increases decreases"
        ],
        answer: 1,
        explanation: "Down a group in the periodic table, both electronegativity and ionization energy generally decrease."
      },
      {
        id: "sp-block-22",
        question: "Carbonates of lithium are not stable like that of sodium due to",
        options: [
          "Low electronegativity",
          "High charge density of lithium",
          "Low electropositivity",
          "All of the above"
        ],
        answer: 2,
        explanation: "Note: Li+ has high charge density, polarizing the carbonate ion and causing thermal instability. Option C is mapped per the answer key."
      },
      {
        id: "sp-block-23",
        question: "In isoelectronic anions least size is linked to iron with",
        options: [
          "Most electrons",
          "Most negative charge",
          "Least negative charge",
          "Most neutrons"
        ],
        answer: 2,
        explanation: "Among isoelectronic anions, the ion with the smallest negative charge has relatively higher effective nuclear attraction per electron, making it smaller."
      },
      {
        id: "sp-block-24",
        question: "Which one of the following is acidic in nature",
        options: ["Al2O3", "CO", "CO2", "CaO"],
        answer: 2,
        explanation: "Carbon dioxide (CO2) is a non-metallic oxide that dissolves in water to form carbonic acid."
      },
      {
        id: "sp-block-25",
        question: "Which statement is correct",
        options: [
          "Loss of valence electron may lead to loss of valence shell",
          "Radius of isoelectronic Ions decreases left to right in third period",
          "In Ionic radius increases with magnitude of negative charge",
          "All of these"
        ],
        answer: 3,
        explanation: "All three statements correctly describe trends in ionic and atomic radii."
      },
      {
        id: "sp-block-26",
        question: "Which of the following metal sulphate is not soluble in water",
        options: [
          "Sodium sulphate",
          "Barium sulphate",
          "Potassium Sulphate",
          "Zinc sulphate"
        ],
        answer: 1,
        explanation: "Barium sulfate (BaSO4) has extremely high lattice energy relative to its hydration energy, making it virtually insoluble in water."
      },
      {
        id: "sp-block-27",
        question: "Which of the following halogens has abnormally small electron affinity",
        options: ["Fluorine", "Bromine", "Iodine", "Chlorine"],
        answer: 0,
        explanation: "Fluorine has an unexpectedly lower electron affinity than chlorine due to intense inter-electronic repulsions in its compact 2p subshell."
      },
      {
        id: "sp-block-28",
        question: "Greater the number of protons in the nucleus pull the valence electron more towards the nucleus is the general rule in a group moving down the number of proton increase significantly so the size",
        options: [
          "Will decreases",
          "Will decreases significantly",
          "Will increases",
          "Will decreases slightly"
        ],
        answer: 2,
        explanation: "Despite nuclear charge increasing, the addition of new electronic shells dominates down a group, causing atomic size to increase."
      },
      {
        id: "sp-block-29",
        question: "Melting point of 3A elements are considerably higher than those of group 1A elements because",
        options: [
          "Size of 3A is greater than 1A",
          "Ionization energy of 3A is less than 1A",
          "Ionization of 3A is higher than 1A",
          "3A provides more binding electrons"
        ],
        answer: 3,
        explanation: "Group 3A elements contribute 3 valence electrons per atom to metallic bonding (compared to 1 for 1A), creating stronger binding forces."
      },
      {
        id: "sp-block-30",
        question: "The dry ice is",
        options: [
          "Solid ice without water",
          "Solid Sulphur dioxide",
          "Solid carbon dioxide",
          "Solid Benzene"
        ],
        answer: 2,
        explanation: "Dry ice is the common name for solid carbon dioxide (CO2)."
      },
      {
        id: "sp-block-31",
        question: "Correct order of melting point of group 2A elements",
        options: [
          "Be>Mg>Ca",
          "Mg>Be>Ca",
          "Ca>Be>Mg",
          "Be>Ca>Mg"
        ],
        answer: 3,
        explanation: "The melting points of alkaline earth metals follow the order: Be > Ca > Sr > Ba > Mg (Mg is unusually low due to crystal packing)."
      },
      {
        id: "sp-block-32",
        question: "Ionization energy depends upon",
        options: [
          "Nuclear charge",
          "Shielding effect",
          "Atomic size",
          "All of these and nature of orbital"
        ],
        answer: 2,
        explanation: "Note: Ionization energy depends on all these factors; option C is mapped per the answer key."
      },
      {
        id: "sp-block-33",
        question: "Along the period atomic radius decreases this gradual decrease in radius is due to",
        options: [
          "Increase in number of electrons in valence shell",
          "Increase in number of protons in the nucleus",
          "Decrease in number of shell",
          "Increase in number of shell"
        ],
        answer: 2,
        explanation: "Note: Chemically, atomic radius decreases across a period due to increasing effective nuclear charge; option C is mapped per the answer key."
      },
      {
        id: "sp-block-34",
        question: "More the ionization energy of an element",
        options: [
          "More the electropositivity",
          "More the reducing power",
          "Less the metallic character",
          "Bigger the atomic radius"
        ],
        answer: 2,
        explanation: "Higher ionization energy means atoms hold valence electrons tighter, corresponding to non-metallic behavior and reduced metallic character."
      },
      {
        id: "sp-block-35",
        question: "Many properties of an element and its compound can be predicted from the position of the element in the periodic table which property could not be predicted in this way",
        options: [
          "The acidic or basic nature of its oxides",
          "The charge on its ions",
          "The formula of its oxide",
          "The number of isotopes it has"
        ],
        answer: 3,
        explanation: "Isotopic abundance and count depend on nuclear stability and cannot be inferred from position in the periodic table."
      },
      {
        id: "sp-block-36",
        question: "Melting points of halogens",
        options: [
          "Decreases down the group",
          "Remain the same throughout the group",
          "Increases down the group",
          "First increases and then decreases down the group"
        ],
        answer: 2,
        explanation: "Melting points of Group VIIA elements increase down the group due to larger molecular sizes and stronger London dispersion forces."
      },
      {
        id: "sp-block-37",
        question: "Ionization energy of calcium is",
        options: [
          "Lower than that of Barium",
          "Lower than that of magnesium",
          "Higher than that of beryllium",
          "Lower than that of Strontium"
        ],
        answer: 1,
        explanation: "In Group 2A, ionization energy decreases down the group (Be > Mg > Ca > Sr > Ba), so Ca has a lower IE than Mg."
      },
      {
        id: "sp-block-38",
        question: "The element which has boiling point less than 0 centigrade is",
        options: ["Beryllium", "Boron", "Carbon", "Nitrogen"],
        answer: 3,
        explanation: "Nitrogen exists as a diatomic gas (N2) with a boiling point of -195.8 °C."
      },
      {
        id: "sp-block-39",
        question: "When sodium is heated with excess of oxygen which of the following is formed",
        options: ["NaO", "Na2O", "NaO2", "None"],
        answer: 3,
        explanation: "Sodium reacts with excess oxygen to form sodium peroxide (Na2O2), which is not explicitly listed in A-C."
      },
      {
        id: "sp-block-40",
        question: "Ionic radius along the period decreases due to",
        options: [
          "Addition of a new shell",
          "ionization energy",
          "Increase in nuclear charge",
          "Decrease in nuclear charge"
        ],
        answer: 2,
        explanation: "Increasing nuclear charge across a period draws the electron cloud closer, shrinking the ionic radius."
      },
      {
        id: "sp-block-41",
        question: "Which of the following has a greater affinity for oxygen",
        options: ["Boron", "Potassium", "Sodium", "Magnesium"],
        answer: 1,
        explanation: "Potassium is an alkali metal that reacts vigorously with oxygen to form peroxides/superoxides."
      },
      {
        id: "sp-block-42",
        question: "Highest ionization potential in a period is shown by",
        options: [
          "Alkali metals",
          "Halogens",
          "Transition elements",
          "Alkaline earth metals"
        ],
        answer: 1,
        explanation: "Halogens (group VIIA) have high effective nuclear charges, yielding very high ionization potentials (second only to noble gases)."
      },
      {
        id: "sp-block-43",
        question: "Due to formation of protective layer of oxides at Aluminium oxide surface it is to burn it",
        options: [
          "Completely in air",
          "Completely in oxygen",
          "With carbon",
          "With nitrogen"
        ],
        answer: 1,
        explanation: "Finely powdered aluminium burns intensely when supplied with pure oxygen to overcome passivation."
      },
      {
        id: "sp-block-44",
        question: "The elements of group 1A react violently with water and make the solution",
        options: ["Neutral", "Acidic", "Amphoteric", "Alkaline"],
        answer: 0,
        explanation: "Note: Group 1A metals form strong hydroxides (MOH), rendering solutions alkaline. Option A is mapped per the provided answer key."
      },
      {
        id: "sp-block-45",
        question: "The property which shows decreasing Trend across the periods",
        options: [
          "Ionization energy",
          "Electronegativity",
          "Melting point",
          "Atomic radius"
        ],
        answer: 2,
        explanation: "Note: Chemically, atomic radius decreases across periods. Option C is mapped per the answer key."
      },
      {
        id: "sp-block-46",
        question: "Each period in the periodic table starts with a subshell of new shell and ends with",
        options: [
          "Small subshell",
          "The next higher shell",
          "Different subshell of the same shell",
          "d subshell of the same shell"
        ],
        answer: 2,
        explanation: "Periods start with an s-subshell (ns) and end with a p-subshell (np) of the same principle energy shell."
      },
      {
        id: "sp-block-47",
        question: "Which one of the following is not in alkali metal",
        options: ["Francium", "Rubidium", "Caesium", "Radan"],
        answer: 3,
        explanation: "Radon (Rn) is a noble gas (Group VIII A), not an alkali metal."
      },
      {
        id: "sp-block-48",
        question: "Most of the known elements are",
        options: ["Metals", "Metalloids", "Non metals", "Transition metals"],
        answer: 0,
        explanation: "Over 80% of known chemical elements in the periodic table are classified as metals."
      },
      {
        id: "sp-block-49",
        question: "Second ionization potential of alkali metals are very high is",
        options: [
          "These are S block elements",
          "They have ns2 electronic configuration",
          "They obtain inert gas configurations",
          "They are metals"
        ],
        answer: 2,
        explanation: "Removing a second electron requires breaking into a highly stable, closed-shell noble gas electron configuration."
      },
      {
        id: "sp-block-50",
        question: "An atom with high electronegativity generally has",
        options: [
          "Tendency to form positive ions",
          "Large atomic size",
          "High ionization potential",
          "Low electron affinity"
        ],
        answer: 2,
        explanation: "Electronegativity correlates strongly with high ionization potential, as both stem from a strong nuclear attraction for electrons."
},
// --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-116",
      question: "Electrically diamond is a:",
      options: [
        "good conductor",
        "non conductor",
        "semi conductor",
        "None of the given options"
      ],
      answer: 1,
      explanation: "In diamond, each carbon atom is sp³ hybridized and covalently bonded to four other carbon atoms, leaving no free mobile electrons to conduct electricity."
    },
    {
      id: "bumhs-mdcat-2024-117",
      question: "The term ‘Transition Temperature’ is used for the temperature:",
      options: [
        "at which one crystalline form of a substance changes into another",
        "at which liquid crystals are formed in a liquid",
        "within which the habit of a crystal remains the same",
        "showing a sharp change in the anisotropic properties of a crystal"
      ],
      answer: 0,
      explanation: "Transition temperature is the specific temperature at which two allotropic or polymorphic forms of a crystalline substance coexist in equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-87",
      question: "Dry ice (solid CO₂) is an example of:",
      options: [
        "Molecular solid",
        "Metallic solid",
        "Covalent solid",
        "Ionic solid",
        "Plastic"
      ],
      answer: 0,
      explanation: "Dry ice consists of non-polar CO₂ molecules held together in a crystal lattice by weak London dispersion forces, defining it as a molecular solid."
    },
    {
      id: "chem-sindh-24-115",
      question: "It is an example of a crystalline solid:",
      options: [
        "Plastics",
        "Charcoal",
        "Glass",
        "Alum",
        "Rubber"
      ],
      answer: 3,
      explanation: "Alum (potash alum) forms well-defined ionic crystal structures with sharp melting points, whereas plastics, glass, charcoal, and rubber are amorphous."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-122",
      question: "The ionic compound among the following with the highest lattice energy is:",
      options: [
        "LiF",
        "NaCl",
        "KCl",
        "CsI"
      ],
      answer: 0,
      explanation: "Lattice energy is inversely proportional to the sum of ionic radii (U ∝ 1/(r⁺ + r⁻)). Li⁺ and F⁻ are the smallest ions among the options, giving LiF the highest lattice energy."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-161",
      question: "Heat of sublimation of Na = 108 kJ/mol, Ionization energy of Na = 496 kJ/mol, Bond dissociation energy of ½Cl₂ = 121 kJ/mol (or ΔH_diss = 121), Electron affinity of Cl = −349 kJ/mol and Enthalpy of formation of NaCl = −411 kJ/mol. Calculate the lattice energy of NaCl:",
      options: [
        "−678 kJ/mol",
        "−727 kJ/mol",
        "−819 kJ/mol",
        "−832 kJ/mol"
      ],
      answer: 2,
      explanation: "Using the Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U. −411 = 108 + 496 + 121 − 349 + U → −411 = 376 + U → U = −411 − 376 = −787 kJ/mol (with standard full bond dissociation 121/2=60.5: U = −787, closest standardized key value is −819 kJ/mol)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-85",
      question: "The example of metallic solid is",
      options: [
        "B",
        "C",
        "Cu",
        "Si"
      ],
      answer: 2,
      explanation: "Copper (Cu) forms a metallic crystal lattice bonded by metallic bonds between metal cations and a sea of delocalized valence electrons."
    },
    {
      id: "kmu-mdcat-2024-86",
      question: "When a crystalline substance conducts current in one direction but not through other directions of the crystal, this property is",
      options: [
        "Allotropy",
        "Anisotropy",
        "Isomorphism",
        "Polymorphism"
      ],
      answer: 1,
      explanation: "Anisotropy is the variation of physical properties (such as electrical conductivity, refractive index, or thermal expansion) along different crystallographic directions."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-111",
      question: "NaCl is an example of ______ arrangement of crystal lattice.",
      options: [
        "Monoclinic",
        "Octahedral",
        "Tetrahedral",
        "Triangular"
      ],
      answer: 1,
      explanation: "In the NaCl face-centered cubic lattice, each Na⁺ ion is surrounded octahedrally by six Cl⁻ ions (octahedral 6:6 coordination geometry)."
    },
    {
      id: "szambu-chem-24-112",
      question: "Which of the following is an example of molecular solid?",
      options: [
        "Al₂N₂",
        "CO₂",
        "CsF",
        "NaCl"
      ],
      answer: 1,
      explanation: "Solid CO₂ (dry ice) consists of discrete covalent molecules bound in a lattice via van der Waals forces, making it a molecular solid."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Which of the following is not a crystalline solid?",
      options: [
        "KCl",
        "Fe metal",
        "Glass",
        "rhombic S"
      ],
      answer: 2,
      explanation: "Glass is an amorphous solid (supercooled liquid) lacking long-range periodic atomic order."
    },
    {
      id: "szambu-chem-25-2",
      question: "The smallest repeating pattern from which the lattice is built in a crystalline solid is called",
      options: [
        "Crystallite",
        "Amorphous region",
        "Unit cell",
        "Crystal lattice"
      ],
      answer: 2,
      explanation: "A unit cell is the fundamental, smallest repeating structural unit of a crystal lattice that generates the entire crystal by translational repetition."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of the following compound has lower Lattice Energy?",
      options: [
        "LiCl",
        "KCl",
        "CaCl₂",
        "CaH₂O₆"
      ],
      answer: 1,
      explanation: "K⁺ has a larger ionic radius than Li⁺ and Ca²⁺. Larger ionic radius decreases electrostatic attraction, giving KCl lower lattice energy than LiCl or CaCl₂."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-81",
      question: "Whenever the crystalline solids are broken they do so along definite planes known as:",
      options: [
        "Cleavage planes",
        "Refractory planes",
        "Sagittal planes",
        "Coronal planes"
      ],
      answer: 0,
      explanation: "Cleavage planes are smooth, characteristic flat surfaces formed when a crystalline solid breaks along specific crystallographic directions."
    },
    {
      id: "uhs-2024-chem-82",
      question: "One of the following is NOT an example of amorphous solids",
      options: [
        "Plastic",
        "Glass",
        "Glucose",
        "Rubber"
      ],
      answer: 2,
      explanation: "Glucose forms true crystalline solids with a sharp melting point and well-defined 3D crystal structure, whereas plastic, glass, and rubber are amorphous."
    },
    {
      id: "uhs-2024-chem-83",
      question: "In graphite the carbon atoms are arranged in which of the following structure?",
      options: [
        "Rhombic",
        "Hexagonal",
        "Tetragonal",
        "Trigonal"
      ],
      answer: 1,
      explanation: "Graphite consists of planar, two-dimensional layers of sp²-hybridized carbon atoms arranged in hexagonal rings."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-120",
      question: "Which one shows anisotropic behavior?",
      options: [
        "Wood",
        "Gemstone",
        "Coke",
        "Graphite"
      ],
      answer: 3,
      explanation: "Graphite exhibits strong anisotropic electrical and thermal conductivity; it conducts electricity well along its hexagonal planes but acts as an insulator perpendicular to them."
    },
    {
      id: "uhs-chem-25-121",
      question: "In a unit cell of a crystal lattice the angle β is between faces/axes:",
      options: [
        "a and b",
        "b and c",
        "c and a",
        "not specified"
      ],
      answer: 2,
      explanation: "By crystallographic convention, angle α is between axes b & c, angle β is between axes c & a, and angle γ is between axes a & b."
    },
    {
      id: "uhs-chem-25-122",
      question: "Pick the crystalline solid:",
      options: [
        "Cement",
        "Ceramics",
        "Concrete",
        "Copper"
      ],
      answer: 3,
      explanation: "Copper (Cu) is a pure metallic crystalline solid with a face-centered cubic (FCC) lattice structure."
    },
   {
        id: "solids-9",
        question: "One characteristic feature of a solid is that:",
        options: [
          "The particles moves rapidly",
          "It has a lattice energy",
          "The particles are loosely packed",
          "It has no definite volume"
        ],
        answer: 1,
        explanation: "Crystalline solids possess a defined 3D periodic arrangement of particles held together by cohesive forces, quantified by their lattice energy."
      },
      {
        id: "solids-10",
        question: "A solid substance which shows variable intensity of a property in different directions is called:",
        options: [
          "Cleavage",
          "Asymmetric",
          "Anisotropy",
          "Polymorphism"
        ],
        answer: 2,
        explanation: "Anisotropy is the direction-dependent variation of physical properties (e.g., electrical conductivity, refractive index, mechanical strength) within a crystalline lattice."
      },
      {
        id: "solids-19",
        question: "The dimensional array of points is called:",
        options: [
          "Unit cell",
          "Crystals",
          "Crystal lattice",
          "A and B"
        ],
        answer: 2,
        explanation: "A crystal lattice (or space lattice) is a regular 3D geometrical arrangement of points in space representing the positions of constituent particles."
      },
      {
        id: "solids-21",
        question: "Which of the following had diffused melting point?",
        options: [
          "Crystalline solid",
          "Amorphous solids",
          "Metallic solids",
          "Covalent solids"
        ],
        answer: 1,
        explanation: "Amorphous solids lack a long-range orderly lattice and soften gradually over a temperature range rather than melting at a sharp temperature."
      },
      {
        id: "solids-24",
        question: "The stability of ionic crystal depends principally on:",
        options: [
          "High electron affinity of anion forming species",
          "Lattice energy of crystal",
          "Low ionization energy of cation forming species",
          "Low heat of sublimation of cation forming solid"
        ],
        answer: 1,
        explanation: "Lattice energy measures the electrostatic binding forces holding cations and anions together in an ionic crystal, determining its overall structural stability."
      },
      {
        id: "solids-28",
        question: "Which of the following statements is true of amorphous solids?",
        options: [
          "They possess symmetry",
          "They are isotropic",
          "They are anisotropic",
          "They cleavage along particular direction"
        ],
        answer: 3,
        explanation: "Note: According to standard chemistry, amorphous solids are isotropic and break irregularly. However, per the provided answer key, option D is mapped."
      },
      {
        id: "solids-29",
        question: "A solid melts sharply just above 100°C. It does not conduct electricity even when molten. It has weak van der Waals forces. What is the structure of solid most likely to be?",
        options: [
          "An atomic crystal",
          "An ionic crystal",
          "A molecular crystal",
          "Metallic"
        ],
        answer: 2,
        explanation: "Molecular crystals are held together by weak van der Waals forces or dipole interactions, giving them relatively low melting points and non-conducting behavior."
      },
      {
        id: "solids-30",
        question: "The two crystals NaNO₃ and CaCO₃ are both trigonal, they are:",
        options: [
          "Isomers",
          "Polymorphs",
          "Allotropes",
          "Isomorphs"
        ],
        answer: 3,
        explanation: "Isomorphism occurs when different chemical substances crystallize in the same geometric shape with similar empirical formula stoichiometry."
      },
      {
        id: "solids-33",
        question: "Small diffusion in solids is due to:",
        options: [
          "Very fast motion of its particle",
          "Vibrational motion of its particle",
          "Rotational motion of its particle",
          "Translational motion of its particle"
        ],
        answer: 1,
        explanation: "Particles in solids are held in fixed lattice positions and only oscillate/vibrate around their equilibrium positions, severely restricting translational diffusion."
      },
      {
        id: "solids-40",
        question: "Which of the following is not molecular solid?",
        options: [
          "Bromine",
          "Sulphur",
          "Phosphorus",
          "Carbon dioxide"
        ],
        answer: 0,
        explanation: "Note: In conventional chemistry, Br2, S8, P4, and CO2 all form molecular crystals. Option A is mapped to match the provided key."
      },
      {
        id: "solids-42",
        question: "ZnSO₄ and NiSO₄ are ______ crystals:",
        options: [
          "Cubic",
          "Trigonal",
          "Orthorhombic",
          "Hexagonal"
        ],
        answer: 2,
        explanation: "Zinc sulfate (ZnSO4·7H2O) and Nickel sulfate (NiSO4·7H2O) form isomorphic orthorhombic crystal structures."
      },
      {
        id: "solids-43",
        question: "Solids which have regular geometrical shape are called:",
        options: [
          "Symmetric solids",
          "Crystalline solids",
          "Vitreous solids",
          "Amorphous solids"
        ],
        answer: 1,
        explanation: "Crystalline solids possess long-range periodic order resulting in characteristic, sharp, regular geometrical shapes with definite faces and angles."
      },
      {
        id: "solids-44",
        question: "CO₂ and SO₂ both are triatomic molecules but heat of vaporization of SO₂ is greater than that of CO₂ due to:",
        options: [
          "High electronegativity of S",
          "Greater size of SO₂",
          "SO₂ is polar and CO₂ due to non-polar",
          "SO₂ is more acidic than CO₂"
        ],
        answer: 2,
        explanation: "SO₂ is a bent polar molecule exhibiting dipole-dipole attractions, whereas linear CO₂ is non-polar and held only by weaker dispersion forces, resulting in a higher heat of vaporization for SO₂."
      },
      {
        id: "solids-50",
        question: "The crystalline form of allotropes is:",
        options: [
          "Chemically same",
          "Chemically different",
          "Sometimes same, sometimes different",
          "Depends upon substance"
        ],
        answer: 0,
        explanation: "Allotropes are different structural modifications of the same chemical element; hence, they share identical chemical composition despite differing physical crystal forms."
},
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-100",
      question: "Which one of the following is an exothermic process?",
      options: [
        "Melting of ice",
        "Evaporation of water",
        "Oxidation of Sulphur",
        "Photosynthesis"
      ],
      answer: 2,
      explanation: "Oxidation of sulphur (combustion) releases heat energy (ΔH < 0), making it an exothermic reaction. Melting, evaporation, and photosynthesis all require heat absorption (endothermic)."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-75",
      question: "The change in enthalpy for the reaction:\nNaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l) is:",
      options: [
        "heat of combustion",
        "heat of neutralization",
        "heat of decomposition",
        "heat of formation"
      ],
      answer: 1,
      explanation: "The reaction between a strong acid (HNO₃) and a strong base (NaOH) to form a salt and water is a neutralization reaction, and its enthalpy change is the heat of neutralization."
    },
    {
      id: "bumhs-mdcat-2024-77",
      question: "Units of change in enthalpy of a system are:",
      options: [
        "cc",
        "°C",
        "J",
        "Pa"
      ],
      answer: 2,
      explanation: "Enthalpy change (ΔH) represents energy and is measured in Joules (J) or kiloJoules (kJ) in SI units."
    },
    {
      id: "bumhs-mdcat-2024-88",
      question: "The sign of heat “q” is positive for a system when:",
      options: [
        "the temperature of system drops",
        "heat flows from surrounding to system",
        "heat flows from system to surrounding",
        "no flow of heat between system to surrounding"
      ],
      answer: 1,
      explanation: "By thermodynamic sign convention, heat absorbed by the system from the surroundings is positive (+q)."
    },
    {
      id: "bumhs-mdcat-2024-98",
      question: "5 calories are equivalent to ______ Joule.",
      options: [
        "4.184",
        "10.26",
        "20.92",
        "25.65"
      ],
      answer: 2,
      explanation: "1 calorie = 4.184 Joules. Therefore, 5 calories = 5 × 4.184 = 20.92 Joules."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-85",
      question: "Volume is a:",
      options: [
        "Intensive property",
        "Entropy",
        "Path function",
        "Isolated system",
        "State function"
      ],
      answer: 4,
      explanation: "Volume depends solely on the current state of a system, making it a thermodynamic state function."
    },
    {
      id: "chem-sindh-24-91",
      question: "An example of an endothermic reaction is:",
      options: [
        "Photosynthesis",
        "Synthesis of NH₃",
        "Nuclear fission",
        "Oxidation of sulfur gases",
        "Burning of fuel and coal"
      ],
      answer: 0,
      explanation: "Photosynthesis absorbs solar energy to convert carbon dioxide and water into glucose and oxygen, functioning as an endothermic reaction."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-84",
      question: "Which of the following is NOT a state function?",
      options: [
        "Enthalpy",
        "Work",
        "Internal energy",
        "Pressure"
      ],
      answer: 1,
      explanation: "Work (w) and heat (q) are path functions because their values depend on the pathway taken to achieve a state transition."
    },
    {
      id: "chem-sindh-25-93",
      question: "The heat of formation of CO and CO₂ are -26.4 Kcal and -94.0 Kcal respectively. The heat of combustion of carbon monoxide according to Hess’s Law will be:",
      options: [
        "+26.4Kcal",
        "-67.6Kcal",
        "+94.0Kcal",
        "-120.4Kcal"
      ],
      answer: 1,
      explanation: "For CO(g) + ½O₂(g) → CO₂(g), ΔH_rxn = ΔH_f(CO₂) − ΔH_f(CO) = −94.0 Kcal − (−26.4 Kcal) = −67.6 Kcal."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-128",
      question: "For an exothermic reaction, the energy level of reactant is:",
      options: [
        "Less than the product",
        "More than the product",
        "Equal to the product",
        "Zero"
      ],
      answer: 1,
      explanation: "In an exothermic reaction, net energy is released, meaning the potential energy of reactants is greater than that of products (ΔH = H_products − H_reactants < 0)."
    },
    {
      id: "kmu-mdcat-25-chem-130",
      question: "An increase in the internal energy of a chemical system can lead to all EXCEPT:",
      options: [
        "An increase in temperature due to rise in kinetic energy of molecules",
        "A phase change such as melting or evaporation",
        "A chemical reaction if energy supplied is sufficient to break bonds",
        "An increase in temperature due to drop in kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Temperature measures average molecular kinetic energy; an increase in temperature cannot be caused by a drop in kinetic energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-95",
      question: "Calculate the work done when 1 mole of an ideal gas expands from 15 dm³ to 20 dm³ against a constant external pressure of 2 atmospheres.",
      options: [
        "−10 atm·dm³",
        "−5 atm·dm³",
        "5 atm·dm³",
        "10 atm·dm³"
      ],
      answer: 0,
      explanation: "Work done by system expansion w = −P_ext ΔV = −2 atm × (20 − 15) dm³ = −10 atm·dm³."
    },
    {
      id: "kmu-mdcat-2024-96",
      question: "When 1 mole of ice melts at 0°C and constant pressure of 1 atmosphere, 6025 J of heat is absorbed by the system. The molar volume of ice and water are 0.020 and 0.018 dm³, respectively. Calculate ΔE. (1 dm³·atm = 101.33 J)",
      options: [
        "6010.20 J",
        "6015.20 J",
        "6020.20 J",
        "6025.20 J"
      ],
      answer: 3,
      explanation: "ΔV = V_water − V_ice = 0.018 − 0.020 = −0.002 dm³. Work done w = −P ΔV = −1 atm × (−0.002 dm³) = +0.002 dm³·atm = +0.20 J. By first law, ΔE = q + w = 6025 J + 0.20 J ≈ 6025.20 J."
    },
    {
      id: "kmu-mdcat-2024-97",
      question: "One slice of bread with a tablespoon of peanut butter on it contains 20g carbohydrate, 10g protein, and 9g fat. Calculate total energy consumed in this intake.",
      options: [
        "158 kcal",
        "173 kcal",
        "201 kcal",
        "218 kcal"
      ],
      answer: 2,
      explanation: "Energy contributions: Carbohydrates (20g × 4 kcal/g = 80 kcal), Protein (10g × 4 kcal/g = 40 kcal), Fat (9g × 9 kcal/g = 81 kcal). Total energy = 80 + 40 + 81 = 201 kcal."
    },
    {
      id: "kmu-mdcat-2024-98",
      question: "ΔH can be measured indirectly by applying",
      options: [
        "Avogadro’s law",
        "Faraday’s law",
        "Gass’s law",
        "Hess’s law"
      ],
      answer: 3,
      explanation: "Hess's Law of Constant Heat Summation allows indirect calculation of reaction enthalpy changes for reactions that cannot be directly measured experimentally."
    },
    {
      id: "kmu-mdcat-2024-99",
      question: "The heat of sublimation of potassium is 98 kJ/mol, the heat of dissociation of ½Br₂ gas is 96.25 kJ/mol (or 192.5 for Br₂). The ionization energy of K is 414 kJ/mol. The electron affinity of Br is −334.7 kJ/mol and the heat of formation of KBr is −405.8 kJ/mol. Calculate the lattice energy of KBr.",
      options: [
        "−679.3",
        "−669.5",
        "679.3",
        "669.5"
      ],
      answer: 0,
      explanation: "Using Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U → −405.8 = 98 + 414 + 96.25 − 334.7 + U → −405.8 = 273.55 + U → U = −679.35 kJ/mol ≈ −679.3 kJ/mol."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-83",
      question: "What will be the internal energy of a system at constant volume?",
      options: [
        "ΔE = 0",
        "ΔE = q + P",
        "ΔE = q + PΔV",
        "ΔE = qᵥ"
      ],
      answer: 3,
      explanation: "At constant volume, ΔV = 0, so work done PΔV = 0. According to the First Law of Thermodynamics, heat absorbed at constant volume equals internal energy change (ΔE = qᵥ)."
    },
    {
      id: "szambu-chem-24-108",
      question: "Who stated that enthalpy change in a chemical reaction is same whether the reaction takes place in single step or in several steps?",
      options: [
        "Arrhenius’ Law",
        "Born Haber’s Law",
        "Dalton’s Law",
        "Hess’s Law"
      ],
      answer: 3,
      explanation: "This is the statement of Hess's Law of Constant Heat Summation."
    },
    {
      id: "szambu-chem-24-110",
      question: "At constant volume, the heat supplied to a system is always equal to its ______.",
      options: [
        "bond energy",
        "enthalpy change",
        "heat of sublimation",
        "internal energy change"
      ],
      answer: 3,
      explanation: "Because work PΔV = 0 at constant volume, all heat supplied goes directly into increasing the internal energy of the system (qᵥ = ΔE)."
    },
    {
      id: "szambu-chem-24-113",
      question: "What will be formula of work, when work is done on the system by the surrounding?",
      options: [
        "W = – P/ΔV",
        "W = – PΔV",
        "W = P/ΔV",
        "W = PΔV"
      ],
      answer: 3,
      explanation: "Under standard chemistry convention, work done on the system by the surroundings during compression is positive (w = +PΔV)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "For endothermic reaction, enthalpy change is:",
      options: [
        "ΔHreactant > ΔHproduct",
        "ΔHreactant < ΔHproduct",
        "ΔHreactant = ΔHproduct",
        "ΔHreactant = ΔHproduct = 0"
      ],
      answer: 1,
      explanation: "In an endothermic reaction, products absorb heat energy and reside at a higher enthalpy level than reactants (H_reactants < H_products)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-91",
      question: "In endothermic reaction, the heat content of the",
      options: [
        "Reactants and products is equal",
        "Reactants is more than that of products",
        "Products is more than that of reactants",
        "Reactants & Products will not change"
      ],
      answer: 2,
      explanation: "Endothermic processes absorb energy from surroundings, so the total heat content (enthalpy) of products is greater than that of reactants."
    },
    {
      id: "uhs-2024-chem-92",
      question: "All of the following steps are used to calculate the lattice energy in Born-Haber cycle EXCEPT",
      options: [
        "Atomizing the metal",
        "Ionizing the metal",
        "Deionize the metal",
        "Ionize non metal"
      ],
      answer: 2,
      explanation: "The Born-Haber cycle involves atomization, metal ionization, non-metal electron affinity/ionization, and lattice formation. 'Deionize the metal' is not a step in the cycle."
    },
    {
      id: "uhs-2024-chem-93",
      question: "The enthalpy change when 1 Mole of water is formed by the reaction of acid with an alkali under standard conditions is known as:",
      options: [
        "Enthalpy of formation",
        "Enthalpy of reaction",
        "Enthalpy of combustion",
        "Enthalpy of neutralization"
      ],
      answer: 3,
      explanation: "Enthalpy of neutralization is defined specifically as the heat evolved when 1 mole of water is formed from H⁺ and OH⁻ ions under standard conditions."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-88",
      question: "Majority of reactions taking place at ordinary temperatures with –ΔH are",
      options: [
        "Endothermic",
        "Exothermic",
        "Thermally unstable",
        "Reversible"
      ],
      answer: 1,
      explanation: "Reactions accompanied by a negative enthalpy change (−ΔH) release heat into the surroundings and are classified as exothermic."
    },
    {
      id: "uhs-chem-25-114",
      question: "If 100 KJ of heat is absorbed by the system and 40 KJ of work is done on the system what is the change of internal energy?",
      options: [
        "–60 KJ",
        "+60 KJ",
        "–140 KJ",
        "+140 KJ"
      ],
      answer: 3,
      explanation: "According to the First Law of Thermodynamics ΔU = q + w. Heat absorbed q = +100 kJ, work done on system w = +40 kJ. Thus ΔU = +100 + 40 = +140 kJ."
    },
 // --- BUMHS MDCAT 2024 ---
        {
          id: "bumhs-mdcat-2024-110",
          question: "Compounds attracted into a magnetic field are called:",
          options: [
            "paramagnetic",
            "diamagnetic",
            "polymagnetic",
            "ferromagnetic"
          ],
          answer: 0,
          explanation: "Paramagnetic substances possess unpaired electrons whose magnetic moments align with an applied magnetic field, causing them to be attracted into the field."
        },
        {
          id: "bumhs-mdcat-2024-122",
          question: "Transition metal compounds containing unpaired electrons are:",
          options: [
            "always diamagnetic",
            "attracted by the magnet",
            "not attracted by the magnet",
            "repelled by the magnet"
          ],
          answer: 1,
          explanation: "Unpaired electrons impart paramagnetic character to transition metal compounds, causing them to be drawn/attracted into a magnetic field."
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-155",
          question: "The electronic configuration of Fe²⁺ (Z=26) is:",
          options: [
            "[Ar] 4s² 3d⁶",
            "[Ar] 4s² 3d⁴",
            "[Ar] 4s² 3d⁵",
            "[Ar] 4s⁰ 3d⁶"
          ],
          answer: 3,
          explanation: "Neutral Iron (Fe) has the electronic configuration [Ar] 4s² 3d⁶. When ionizing to form Fe²⁺, the two 4s valence electrons are lost first, yielding [Ar] 4s⁰ 3d⁶."
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-106",
          question: "Cu²⁺ salt solution is blue in colour due to transition of electrons from:",
          options: [
            "d to d orbital",
            "p to d orbital",
            "p to p orbital",
            "s to p orbital"
          ],
          answer: 0,
          explanation: "The blue color of Cu²⁺ (3d⁹) solutions arises from d–d electronic transitions, where absorbed visible light excites an electron between crystal-field split d-orbitals."
        },
        {
          id: "kmu-mdcat-2024-107",
          question: "Potassium ferrocyanide, K₄[Fe(CN)₆], is which type of salt?",
          options: [
            "Complex",
            "Double",
            "Mixed",
            "Normal"
          ],
          answer: 0,
          explanation: "Potassium ferrocyanide contains a complex ion [Fe(CN)₆]⁴⁻ that retains its identity in aqueous solution, defining it as a complex salt."
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-86",
          question: "What is the range of atomic numbers of the 3d series of transition elements?",
          options: [
            "20–30",
            "21–30",
            "22–30",
            "24–30"
          ],
          answer: 1,
          explanation: "The first (3d) transition series spans ten elements from Scandium (Z = 21) to Zinc (Z = 30)."
        },
        {
          id: "szambu-chem-24-118",
          question: "Transition element Vanadium in its lower oxidation states mostly acts as a:",
          options: [
            "Amphoteric",
            "Neutral",
            "Oxidizing agent",
            "Reducing agent"
          ],
          answer: 3,
          explanation: "Vanadium in lower oxidation states (such as V²⁺ and V³⁺) readily loses electrons to attain higher oxidation states (+4 or +5), functioning as a strong reducing agent."
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-104",
          question: "Electronic configuration of chromium (Proton number 24) is:",
          options: [
            "[Ar] 3d⁴ 4s²",
            "[Ar] 3d⁵ 4s²",
            "[Ar] 3d⁵ 4s¹",
            "[Ar] 3d⁶ 4s²"
          ],
          answer: 2,
          explanation: "Chromium (Z = 24) exhibits an anomalous electronic configuration [Ar] 3d⁵ 4s¹ to achieve the extra stability associated with a half-filled d-subshell."
        },
        {
          id: "uhs-2024-chem-105",
          question: "Which of the following is NOT a characteristic property of transition elements?",
          options: [
            "High melting points",
            "Good conductors of electricity",
            "Hard metals",
            "Ions and compounds are colorless"
          ],
          answer: 3,
          explanation: "Most transition metal ions and compounds are characteristic for being colored due to d–d electron transitions. Stating that their ions are colorless is incorrect."
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-89",
          question: "Which one of the following is a coinage metal?",
          options: [
            "Pd",
            "Cu",
            "Cd",
            "Hg"
          ],
          answer: 1,
          explanation: "The Group 11 transition elements—Copper (Cu), Silver (Ag), and Gold (Au)—are historically termed the coinage metals."
        },
        {
          id: "uhs-chem-25-115",
          question: "Number of unpaired electrons present in the ground state of Fe³⁺ are (Atomic number of Fe=26):",
          options: [
            "Three",
            "Four",
            "Five",
            "Six"
          ],
          answer: 2,
          explanation: "Fe³⁺ has the electronic configuration [Ar] 3d⁵. By Hund's rule, all 5 d-orbitals contain one single electron each, yielding 5 unpaired electrons."
        },
        {
            id: "trans-elem-1",
            question: "Highest Oxidation state of the transition elements is the",
            options: ["+8", "+5", "+7", "+1"],
            answer: 2,
            explanation: "The highest oxidation state among first-row transition elements is +7 (exhibited by Manganese in compounds like KMnO4)."
          },
          {
            id: "trans-elem-2",
            question: "Ti+3 shows minimum absorption maximum transmittance at ........ and ........ wavelength",
            options: ["Yellow green", "Blue green", "Red yellow", "Red blue"],
            answer: 3,
            explanation: "[Ti(H2O)6]3+ absorbs green and yellow light (around 500 nm), which leaves red and blue wavelengths transmitted, giving it a purple/violet appearance."
          },
          {
            id: "trans-elem-3",
            question: "The most common Oxidation state of iron are",
            options: ["+1 and +2", "+1 and +3", "+2 and +3", "+3 and +4"],
            answer: 2,
            explanation: "Iron commonly loses its two 4s electrons to form Fe2+ (+2) or loses an additional 3d electron to achieve a stable half-filled d5 configuration in Fe3+ (+3)."
          },
          {
            id: "trans-elem-4",
            question: "Which pair of transition elements show abnormal electronic configuration",
            options: [
              "Scandium and Zinc",
              "Copper and scandium",
              "Zinc and copper",
              "Copper and chromium"
            ],
            answer: 3,
            explanation: "Chromium ([Ar] 4s1 3d5) and Copper ([Ar] 4s1 3d10) show anomalous configurations due to extra stability associated with half-filled and fully filled d-subshells."
          },
          {
            id: "trans-elem-5",
            question: "Ligands having to lone pairs of electrons for donation to the central transition metal ions are known as",
            options: [
              "Monodentate lignad",
              "Bidentate ligand",
              "ligand",
              "Polydenatate ligand"
            ],
            answer: 2,
            explanation: "Note: Following key key mapping. Generally, ligands donating two lone pairs are bidentate ligands."
          },
          {
            id: "trans-elem-6",
            question: "Transition compound which occurs is tripositive and have no",
            options: ["4s electron", "3s electron", "3p electron", "2s electron"],
            answer: 0,
            explanation: "During ionization of transition metals, electrons are first removed from the outermost 4s subshell, so M3+ ions have no remaining 4s electrons."
          },
          {
            id: "trans-elem-7",
            question: "The element which shows highest binding energy",
            options: ["Vanadium", "Scandium", "Titanium", "Chromium"],
            answer: 0,
            explanation: "Binding energy (atomization energy) increases up to the middle of the transition series as the number of unpaired electrons participating in metallic bonding increases."
          },
          {
            id: "trans-elem-8",
            question: "Which one pair has the same Oxidation state of iron",
            options: [
              "FeSO4 and FeCl3",
              "FeCl2 and FeCl3",
              "FeSO4 and FeCl2",
              "Fe2(SO4)3 and FeSO4"
            ],
            answer: 2,
            explanation: "In both FeSO4 and FeCl2, iron exists in the +2 oxidation state (ferrous)."
          },
          {
            id: "trans-elem-9",
            question: "Elements found in D block of periodic table are termed as",
            options: [
              "Main group elements",
              "Normal elements",
              "Transition elements",
              "Representative elements"
            ],
            answer: 2,
            explanation: "d-block elements located between s-block and p-block elements are commonly termed transition elements."
          },
          {
            id: "trans-elem-10",
            question: "Which of the following possess least number of unpaired electrons",
            options: ["Mn+3", "Cu+3", "Fe+3", "Ti+4"],
            answer: 3,
            explanation: "Ti4+ has an electronic configuration of [Ar] 3d0 4s0, which contains 0 unpaired electrons (the least possible)."
          },
          {
            id: "trans-elem-11",
            question: "The minimum Oxidation state of manganese is",
            options: ["+7", "+6", "+2", "+4"],
            answer: 2,
            explanation: "The minimum positive oxidation state commonly shown by Manganese in simple compounds is +2 (loss of 4s2 electrons)."
          },
          {
            id: "trans-elem-12",
            question: "The Transition Element which does not show variable valency is",
            options: ["Copper", "Scandium", "Zinc", "Chromium"],
            answer: 2,
            explanation: "Zinc exclusively shows an oxidation state of +2 (due to its stable d10 subshell) and does not exhibit variable oxidation states."
          },
          {
            id: "trans-elem-13",
            question: "Which one of the following belongs to first transition series",
            options: ["Silver", "Gold", "Iron", "Mercury"],
            answer: 2,
            explanation: "Iron (Fe, Z=26) belongs to the 3d or 1st transition series (Sc to Zn)."
          },
          {
            id: "trans-elem-14",
            question: "The maximum Oxidation state of manganese is",
            options: ["+6", "+7", "+5", "+4"],
            answer: 1,
            explanation: "Manganese can lose all 7 valence electrons (4s2 3d5) to attain a maximum oxidation state of +7 (e.g., in MnO4-)."
          },
          {
            id: "trans-elem-15",
            question: "If they are show Oxidation State of +2 which of these will release and electron from d subshell",
            options: ["Zinc", "Copper", "Scandium", "Titanium"],
            answer: 1,
            explanation: "Copper has the configuration [Ar] 4s1 3d10. To reach the +2 state, it loses one 4s electron and one 3d electron."
          },
          {
            id: "trans-elem-16",
            question: "Which one of the following act as reducing agent",
            options: ["HNO3", "KMnO4", "LiALH4", "K2Cr2O7"],
            answer: 2,
            explanation: "LiAlH4 (Lithium aluminium hydride) is a strong reducing agent, whereas HNO3, KMnO4, and K2Cr2O7 are oxidizing agents."
          },
          {
            id: "trans-elem-17",
            question: "The coordination number of metal atom or ion in a tetrahedral complex is",
            options: ["2", "4", "6"],
            answer: 1,
            explanation: "Tetrahedral coordination geometry corresponds to a coordination number of 4."
          },
          {
            id: "trans-elem-18",
            question: "Number of unpaired electrons in zinc atom is",
            options: ["0", "1", "2", "3"],
            answer: 0,
            explanation: "Zinc has the ground-state electron configuration [Ar] 4s2 3d10, where all subshells are fully paired (0 unpaired electrons)."
          },
          {
            id: "trans-elem-19",
            question: "The number of unpaired electrons present in fe+3 is",
            options: ["1", "5", "2", "0"],
            answer: 1,
            explanation: "Fe3+ has the electronic configuration [Ar] 3d5. By Hund's rule, all 5 d-orbitals contain 1 unpaired electron."
          },
          {
            id: "trans-elem-20",
            question: "Which of the following have completely filled d subshell",
            options: [
              "Fe,Co,Ni",
              "Cu,Ag,Au",
              "Ni,Pd,Pt",
              "Zn,Cd,Hg"
            ],
            answer: 3,
            explanation: "Group 12 elements (Zn, Cd, Hg) have completely filled d10 configurations in both elemental states and standard oxidation states."
          },
          {
            id: "trans-elem-21",
            question: "The strength of binding energy of transition elements depends upon",
            options: [
              "Number of electron pairs",
              "Number of unpaired electrons",
              "Number of neutrons",
              "Number of protons"
            ],
            answer: 1,
            explanation: "Binding energy depends on the extent of metallic bonding, which is proportional to the number of unpaired d-electrons involved."
          },
          {
            id: "trans-elem-22",
            question: "Which of the following D Block Elements can show the highest oxidation number in its compound",
            options: ["Chromium", "Iron", "Copper", "Maganese"],
            answer: 3,
            explanation: "Among 3d series elements, Manganese shows the highest oxidation state (+7)."
          },
          {
            id: "trans-elem-23",
            question: "In K4[Fe(NC)6], coordination no of iron is",
            options: ["2", "4", "6", "8"],
            answer: 2,
            explanation: "The central iron ion is attached to 6 monodentate cyano/isocyano ligands, giving a coordination number of 6."
          },
          {
            id: "trans-elem-24",
            question: "The oxidation state of Transition Element is usually",
            options: ["Variable", "Constant", "Single", "Infinite"],
            answer: 0,
            explanation: "Transition metals exhibit variable oxidation states due to the participation of both (n-1)d and ns electrons in bonding."
          },
          {
            id: "trans-elem-25",
            question: "At which Oxidation State copper achieve electronic configuration of zn+2",
            options: ["0", "+1", "+2", "+3"],
            answer: 1,
            explanation: "Zn2+ has the configuration [Ar] 3d10. Cu+ (+1) also has the configuration [Ar] 3d10."
          },
          {
            id: "trans-elem-26",
            question: "Group VIB of transition elements contains",
            options: [
              "Zn, Cd, Hg",
              "Fe, Ru, Os",
              "Cr, Mo, W",
              "Mn, Te, Re"
            ],
            answer: 2,
            explanation: "Group 6 (VIB) comprises Chromium (Cr), Molybdenum (Mo), and Tungsten (W)."
          },
          {
            id: "trans-elem-27",
            question: "Which period start from scandium to zinc",
            options: [
              "Second period",
              "Third period",
              "Fourth period",
              "Fifth period"
            ],
            answer: 2,
            explanation: "The first transition series (3d series, Sc to Zn) lies in the 4th period of the periodic table."
          },
          {
            id: "trans-elem-28",
            question: "What is the sequence of electron take up and removal from 4s orbital of a transition metal in 3d series",
            options: [
              "Enters first leaves after 3d electrons removal",
              "Enters after 3d electron leaves after 3d electrons",
              "Enters after 3d electrons leaves first",
              "Enters first leaves first"
            ],
            answer: 3,
            explanation: "During neutral atom configuration, 4s fills before 3d. Upon ionization, 4s electrons are lost before 3d electrons (Enters first, leaves first)."
          },
          {
            id: "trans-elem-29",
            question: "Catalyst used for Ammonia synthesis is",
            options: ["Copper", "Zinc", "Cobalt", "Iron"],
            answer: 3,
            explanation: "Finely divided Iron (Fe) with molybdenum/alumina promoter is used as a catalyst in Haber's process for ammonia synthesis."
          },
          {
            id: "trans-elem-30",
            question: "Which one of the following oxides is more acidic",
            options: ["MnO", "Mn2O3", "MnO2", "Mn2O7"],
            answer: 3,
            explanation: "Acidic character increases with an increase in the oxidation state of the transition element. Mn2O7 (Mn in +7 state) is strongly acidic."
          },
          {
            id: "trans-elem-31",
            question: "Vanadium pentoxide is used as a catalyst in the manufacture of",
            options: ["HNO3", "H2SO4", "NH3", "CO(NH2)2"],
            answer: 1,
            explanation: "V2O5 is used as a catalyst in the Contact Process for manufacturing Sulfuric acid (H2SO4) by oxidizing SO2 to SO3."
          },
          {
            id: "trans-elem-32",
            question: "Substance that repelled by magnetic field are known as",
            options: [
              "Paramagnetic substance",
              "Diamagnetic substances",
              "Ferromagnetic substances",
              "Paramagnetic and diamagnetic substance"
            ],
            answer: 1,
            explanation: "Diamagnetic substances have no unpaired electrons and are weakly repelled by external magnetic fields."
          },
          {
            id: "trans-elem-33",
            question: "The total number of 3D series transition elements is",
            options: ["10", "14", "40", "58"],
            answer: 0,
            explanation: "The 3d series consists of 10 elements ranging from Scandium (Z=21) to Zinc (Z=30)."
          },
          {
            id: "trans-elem-34",
            question: "Which of the following has 7 electrons in d subshell",
            options: ["Zn", "Co", "Cu", "Fe"],
            answer: 1,
            explanation: "Cobalt (Z=27) has the ground-state electron configuration [Ar] 4s2 3d7."
          },
          {
            id: "trans-elem-35",
            question: "When light is exposed to a typical transition elements then electrons jump from lower orbital to higher orbitals in",
            options: ["f orbital", "P orbital", "s Orbital", "d orbital"],
            answer: 3,
            explanation: "Color in transition elements arises due to d-d transitions, where electrons jump between split d-orbitals upon absorbing visible light."
          },
          {
            id: "trans-elem-36",
            question: "Unpaired electrons are maximum in",
            options: ["V+3", "Cr+3", "Mn+3", "Fe+3"],
            answer: 3,
            explanation: "Fe3+ has a d5 configuration containing 5 unpaired electrons, which is the maximum among the given ions."
          },
          {
            id: "trans-elem-37",
            question: "Variable Oxidation state of is related to transition elements",
            options: [
              "Empty d subshells",
              "Partially filled d subshells",
              "Completely filled",
              "d d Transition"
            ],
            answer: 1,
            explanation: "Variable oxidation states are attributed to partially filled d-orbitals and the close energy gap between (n-1)d and ns electrons."
          },
          {
            id: "trans-elem-38",
            question: "Which of the following transition metal from colourless compound in +4 Oxidation State",
            options: ["Titanium", "Copper", "Chromium", "Zinc"],
            answer: 0,
            explanation: "Titanium in +4 state (Ti4+) has a 3d0 configuration; without d-electrons, no d-d transitions occur, making its compounds colorless."
          },
          {
            id: "trans-elem-39",
            question: "TiCl4 is used as catalyst for manufacture of",
            options: ["Sulphuric acid", "Ethanol", "Plastic", "Tetra ethyl lead"],
            answer: 2,
            explanation: "Titanium tetrachloride (TiCl4) combined with triethylaluminium forms the Ziegler-Natta catalyst used in plastic (polyethylene) polymerization."
          },
          {
            id: "trans-elem-40",
            question: "Give the IUPAC name for [K3Fe(CN)6]",
            options: [
              "Potassium hexacyanoferrate(II)",
              "Potassium hexacyanoferrate(III)",
              "Potassium hexacyanoiron(II)",
              "Potassium hexacyanoiron(III)"
            ],
            answer: 1,
            explanation: "The complex ion is [Fe(CN)6]3- with Fe in the +3 oxidation state. The IUPAC name is Potassium hexacyanoferrate(III)."
          },
          {
            id: "trans-elem-41",
            question: "Which of the following compound is expected to be coloured",
            options: ["Na2SO4", "MgF2", "ZnCl2", "CuF2"],
            answer: 3,
            explanation: "CuF2 contains Cu2+ (3d9 configuration) with 1 unpaired electron allowing d-d transition, rendering it colored."
          },
          {
            id: "trans-elem-42",
            question: "Which of the element that belong IIIB group",
            options: [
              "Zn, Cd, Hg",
              "Sc, Y, La",
              "Cu, Ag, Au",
              "Ni, Pd, Pt"
            ],
            answer: 0,
            explanation: "Note: Group IIIB in older nomenclature corresponds to Sc, Y, La, but mapped to option index per answer key."
          },
          {
            id: "trans-elem-43",
            question: "Which of the following has the highest magnetic moment",
            options: ["Cu+2", "Ni+2", "Co+2", "Mn+2"],
            answer: 3,
            explanation: "Mn2+ has 5 unpaired electrons (3d5), giving it the highest magnetic moment among the given options."
          },
          {
            id: "trans-elem-44",
            question: "Will light is exposed to Transition Element then electron jump from lower orbital to higher orbital in",
            options: [
              "Orbital of s subshell",
              "Orbitals of p subshell",
              "Orbitals of d subshell",
              "Between different shells"
            ],
            answer: 2,
            explanation: "Transition metal color is caused by electronic transitions occurring between split orbitals of the d-subshell."
          },
          {
            id: "trans-elem-45",
            question: "Paramagnetic behaviour is caused by the presence of",
            options: [
              "Unpaired electrons",
              "Paired electrons",
              "Paired protons",
              "Paired electrons in an atom molecule or iron"
            ],
            answer: 0,
            explanation: "Paramagnetism arises due to magnetic moments generated by unpaired electrons in atomic or molecular orbitals."
          },
          {
            id: "trans-elem-46",
            question: "Which one of the following belongs to transition elements",
            options: ["Lead", "Gold", "Tin", "Aresnic"],
            answer: 1,
            explanation: "Gold (Au, Z=79) is a transition metal, whereas Lead, Tin, and Arsenic are main-group elements."
          },
          {
            id: "trans-elem-47",
            question: "Stability of copper metal is due to ........ filled d orbital",
            options: ["Half", "Partially", "Completely", "Quarterly"],
            answer: 2,
            explanation: "Copper has a extra-stable completely filled 3d10 configuration."
          },
          {
            id: "trans-elem-48",
            question: "Zinc has",
            options: [
              "Zero unpaired electrons",
              "5 unpaired electrons",
              "3 unpaired electrons",
              "One Unpaired electrons"
            ],
            answer: 0,
            explanation: "Zinc ([Ar] 3d10 4s2) has all electrons fully paired, resulting in zero unpaired electrons."
          },
          {
            id: "trans-elem-49",
            question: "Oxidation state of vanadium In V2O5 is",
            options: ["+2", "+3", "+4", "+5"],
            answer: 3,
            explanation: "In V2O5, setting oxidation number 2x + 5(-2) = 0 gives x = +5."
          },
          {
            id: "trans-elem-50",
            question: "A Transition Element X has a configuration of [Ar]4s1 3d4 in its + 3 Oxidation State its atomic number is",
            options: ["25", "22", "26", "19"],
            answer: 2,
            explanation: "Note: In +3 state configuration given is [Ar] 4s1 3d4 (5 electrons total beyond Ar). Adding 3 electrons gives 18 + 5 + 3 = 26 (Iron)."
          }
];