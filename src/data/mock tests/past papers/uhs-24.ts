export type PastPaperQuestion = {
    id: string;
    question: string;
    options: string[];
    answer: number;
  };
  
  export const uhs2024Questions: PastPaperQuestion[] = [
    // =========================
    // BIOLOGY
    // =========================
  
    {
      id: "uhs2024-q1",
      question:
        "Example of viruses having a polyhedral capsid that is with 252 capsomeres is:",
      options: [
        "Adenovirus",
        "Tobacco Mosaic Virus",
        "Influenza virus",
        "Bacteriophage",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q3",
      question: "The causative organism of measles is:",
      options: [
        "Poxivirus",
        "Papovivirus",
        "Picornovirus",
        "Paramyxovirus",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q4",
      question:
        "In the life cycle of a bacteriophage, the lysozymes are required in which of the following steps of infection process?",
      options: [
        "Genome injection",
        "Penetration",
        "Replication",
        "Adsorption",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q5",
      question:
        "_____ is transmitted through infected blood and hypodermic syringes.",
      options: [
        "HIV",
        "Influenza Virus",
        "Morbilli Virus (Measles)",
        "Vibrio Cholerae (Cholera)",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q6",
      question:
        "In Calvin cycle CO₂ reacts with RuBP to produce _____",
      options: [
        "3-PGA",
        "G3P",
        "6-Carbon Unstable intermediate",
        "1,3 bisphosphoglycerate",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q7",
      question: "Which option is correct about a chlorophyll molecule?",
      options: [
        "Chemical formula C₅₅H₇₀O₆N₄Mg",
        "Porphyrin ring with nitrogen in centre",
        "Methyl group on second pyrrole ring",
        "Aldehyde group on second pyrrole ring",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q8",
      question:
        "In the journey of electrons from photosystem II to photosystem I plastocyanine is reduced by:",
      options: [
        "Plastoquinone",
        "Cytochrome complex",
        "P700",
        "Primary electron acceptor of PSI",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q9",
      question: "Enzyme NADP reductase is responsible for:",
      options: [
        "Reducing NADP⁺",
        "Oxidizing NADP⁺",
        "Reducing Ferredoxin",
        "Reducing P700",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q10",
      question:
        "The PS II during light reactions receives electrons from splitting:",
      options: ["Water", "Plastoquinone", "Plastocyanin", "Ferridoxin"],
      answer: 0,
    },
    {
      id: "uhs2024-q11",
      question:
        "Mono-saccharides have a general formula represented by:",
      options: ["Cn(H₂O)n", "C(H₂O)n", "C₂(H₂O)n", "Cⁿ(H₂O)n"],
      answer: 1,
    },
    {
      id: "uhs2024-q12",
      question: "What is the percentage of H₂O in bone cells?",
      options: ["70 %", "20 %", "99 %", "60 %"],
      answer: 1,
    },
    {
      id: "uhs2024-q13",
      question:
        "When glycerol reacts with fatty acid, which type of chemical bond will form?",
      options: ["Ester Bond", "Ether Linkage", "Hydrogen Bond", "Ionic Bond"],
      answer: 0,
    },
    {
      id: "uhs2024-q14",
      question:
        "Polysaccharides in plants are synthesized by the process of:",
      options: ["Hydrolysis", "Oxidation", "Condensation", "Glycolysis"],
      answer: 2,
    },
    {
      id: "uhs2024-q15",
      question:
        "Which of the following process is involved in breakdown of protein into Amino acids?",
      options: ["Condensation", "Hydrolysis", "Glycolysis", "Fixation"],
      answer: 1,
    },
    {
      id: "uhs2024-q16",
      question:
        "The hydrophilic end of phospholipid molecule is polar because of the presence of:",
      options: ["Glycerol", "Amine group", "Fatty Acid", "Phosphate group"],
      answer: 3,
    },
    {
      id: "uhs2024-q17",
      question:
        "Which monosaccharide will form a glucopyranose ring in solution?",
      options: ["Fructose", "Glucose", "Ribose", "Deoxyribose"],
      answer: 1,
    },
    {
      id: "uhs2024-q18",
      question: "Chloroplast are membrane bound bodies containing:",
      options: ["Enzymes", "Cisternae", "Pigment", "Cristae"],
      answer: 0,
    },
    {
      id: "uhs2024-q19",
      question: "Which of the following is the function of Golgi Complex?",
      options: [
        "Intracellular digestion",
        "Autophagy",
        "Autolysis",
        "Processing of cell secretions",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q20",
      question: "The nucleus takes dyes due to the presence of:",
      options: ["Chromatin", "Lipid", "Metal ions", "Thylakoids"],
      answer: 0,
    },
    {
      id: "uhs2024-q21",
      question:
        "The organelles only found at seeding stage in oil seed plants are:",
      options: ["Peroxisomes", "Glyoxisomes", "Microbodies", "Vacuoles"],
      answer: 1,
    },
    {
      id: "uhs2024-q22",
      question: "Posterior lobe of pituitary produce:",
      options: [
        "Antidiuretic Hormone (ADH)",
        "Thyroid Stimulating Hormone (TSH)",
        "Adreno Corticufratric Hormone (ACH)",
        "Follicle Stimulating Hormone (FSH)",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q23",
      question:
        "In human myelinated fibers nerve impulse travels at ____ meters per second.",
      options: ["100-120", "130-150", "160-180", "190-210"],
      answer: 0,
    },
    {
      id: "uhs2024-q24",
      question: "Nissl’s granules are groups of:",
      options: ["Mesosomes", "Lysosomes", "Ribosomes", "Chromosome"],
      answer: 2,
    },
    {
      id: "uhs2024-q25",
      question:
        "During non-conducting state, the neuron membrane is permeable to efflux of:",
      options: ["K⁺", "Na⁺", "Ca⁺", "Cl⁻"],
      answer: 0,
    },
    {
      id: "uhs2024-q26",
      question:
        "Which of the following neurotransmitters is lying outside the central nervous system?",
      options: [
        "Acetylcholine",
        "Endorphins",
        "Dopamine",
        "Gamma – aminobutyric acid",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q27",
      question: "Depolarization during conduction of nerve impulse is due to:",
      options: [
        "Inward movement of Na⁺",
        "Inward movement of K⁺",
        "Outward movement of K⁺",
        "Outward movement of Na⁺",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q28",
      question:
        "Which of the following is NOT a feature of Autonomic Nervous System?",
      options: [
        "Regulate response of visceral organs",
        "Regulate response of skeletal muscles",
        "Regulate response of glands",
        "Regulate response of smooth muscles",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q29",
      question: "Taste receptor is an example of:",
      options: [
        "Mechano receptors",
        "Nociceptors",
        "Photo receptors",
        "Chemo receptors",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q30",
      question: "Which of the following belongs to chordates?",
      options: ["Spider", "Earthworm", "Trout Fish", "Star Fish"],
      answer: 2,
    },
    {
      id: "uhs2024-q31",
      question:
        "Which of the following statement is incorrect regarding rate of enzymatic action?",
      options: [
        "Increase in enzyme concentration increases the rate",
        "Increase in enzyme concentration reduces the rate",
        "All enzymes work at their maximum rate at optimum temperature",
        "All enzymes work at their maximum rate at optimum pH",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q32",
      question:
        "Induced fit model of enzyme activity suggests that an enzyme:",
      options: [
        "Cannot modify its active sites",
        "Can bind to a single substrate",
        "Can catalyze related reaction",
        "Usually belongs to non-regulatory enzyme",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q33",
      question:
        "Chromosomal abnormality in Turner syndrome is represented by?",
      options: ["XXX", "XYY", "XO", "XXY"],
      answer: 2,
    },
    {
      id: "uhs2024-q34",
      question:
        "The change in frequency of alleles at a locus that occurs by chance is known as:",
      options: ["Mutation", "Genetic Drift", "Non Random mating", "Speciation"],
      answer: 1,
    },
    {
      id: "uhs2024-q35",
      question: "Identify the correct pair of vestigial organs:",
      options: [
        "Ear Muscles & Vermiform appendix",
        "Heart & Liver",
        "Ear Muscles & Liver",
        "Vermiform appendix & Heart",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q36",
      question: "Which of the following increases variation within a gene pool?",
      options: [
        "Chromosome inversion",
        "Crossing over",
        "Gene mutation",
        "Random fusion of gametes",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q37",
      question:
        "Which of the following statements about natural selection is not true?",
      options: [
        "It affects variations that are heritable",
        "It is selected by a breeder",
        "It can improve the adaptation of species",
        "It is regional in nature",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q38",
      question:
        "The formula calculating the frequency of genotypes and alleles in a population gene pool is known as:",
      options: [
        "Hardy-Weinberg Equation",
        "Lamarck Equation",
        "Darwin Equation",
        "James Hutton Equation",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q39",
      question:
        "The idea of inheritance of acquired characteristics was presented by:",
      options: [
        "Jean Baptist Lamarck",
        "Charles Darwin",
        "Thomas Malthus",
        "Alfred Wallace",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q40",
      question:
        "According to endosymbiosis theory, flagella may have derived by the ingestion of prokaryotes similar to:",
      options: [
        "Amoeboid prokaryote",
        "Aerobic bacterium",
        "Spirochete",
        "Spirillum",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q41",
      question: "Insulin converts glucose into:",
      options: ["Vitamins", "Minerals", "Lipids", "Cortisone"],
      answer: 2,
    },
    {
      id: "uhs2024-q42",
      question: "About 70% of the carbon dioxide is carried in blood as:",
      options: [
        "Carbonate",
        "Bicarbonate",
        "Tricarbonate",
        "Carbonic anhydrase",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q43",
      question: "Range of normal total lung capacity in humans is:",
      options: ["5-6 liter", "8-9 liter", "10-11 liter", "12-13 liter"],
      answer: 0,
    },
    {
      id: "uhs2024-q44",
      question: "Respiration in Pseudomonas bacteria is:",
      options: ["Aerobic", "Anaerobic", "Facultative", "Microaerophili"],
      answer: 0,
    },
    {
      id: "uhs2024-q45",
      question:
        "Autotrophic mode of nutrition in organism depends upon:",
      options: [
        "Saproptrophic mode",
        "Parasitic mode",
        "Photosynthesis mode",
        "Obligate mode",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q46",
      question: "Prokaryotic cells lack:",
      options: [
        "Mesosomes",
        "Ribosomes",
        "Storage bodies",
        "Membrane bound organelles",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q47",
      question: "Bacterial genome becomes diploid:",
      options: [
        "After fertilization of gametes",
        "Before spore formation",
        "During binary fission",
        "After binary fission",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q48",
      question: "One of the following is CORRECT regarding flagella:",
      options: [
        "Made up of macrofilaments",
        "Contains centriole",
        "Originates from basal bodies",
        "They are immotile",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q49",
      question: "Which option is CORRECT about endospore?",
      options: [
        "Has a short dormant period",
        "Contains moisture for survival",
        "Metabolically actively",
        "Endures extreme condition",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q50",
      question:
        "Bacteria divide at exponential rate during which growth phase?",
      options: ["Lag", "Log", "Stationary", "Decline"],
      answer: 1,
    },
    {
      id: "uhs2024-q51",
      question:
        "Mesosomes are the invagination of bacterial cell structure:",
      options: ["Cell wall", "Cell membrane", "Plasmid", "Cysts"],
      answer: 1,
    },
    {
      id: "uhs2024-q52",
      question:
        "Female reproductive system consists all of the following EXCEPT:",
      options: ["Ovaries", "Oviduct", "Cervix", "Seminiferous tubules"],
      answer: 3,
    },
    {
      id: "uhs2024-q53",
      question:
        "Which one of the following hormone is responsible for the labor pains in human female at the time of birth of baby?",
      options: ["Estrogen", "Progesterone", "Oxytocin", "Corticosteroid"],
      answer: 2,
    },
    {
      id: "uhs2024-q54",
      question:
        "Fluid secreted by sertoli cells provides liquid medium, protection and nourishment to:",
      options: ["Oocyte", "Sperms", "Polar body", "Spermatogonia"],
      answer: 1,
    },
    {
      id: "uhs2024-q55",
      question:
        "Corpus luteum during female reproductive cycle produces:",
      options: [
        "Testosterone",
        "Follicle stimulating hormone",
        "Luteinizing Hormone",
        "Progesterone",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q56",
      question: "Due to the process of follicle atresia:",
      options: [
        "Follicles reach maximum size",
        "Follicle degenerates",
        "Graafian follicle ovulates",
        "Follicle starts to mature",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q57",
      question: "Main function of the epididymis is to:",
      options: [
        "Transport sperms",
        "Connect with urethra",
        "Produce semen",
        "Hold the process of spermatogenesis",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q58",
      question:
        "Immediate next stage of spermatogonia differentiation is:",
      options: [
        "Secondary spermatocyte",
        "Spermatids",
        "Primary spermatocytes",
        "Sperms",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q59",
      question: "Which of the following is included in paired cranial bones?",
      options: ["Temporal", "Occipital", "Frontal", "Vomer"],
      answer: 0,
    },
    {
      id: "uhs2024-q60",
      question:
        "Which of the following skeletal disorder is an example of autoimmune disorder?",
      options: ["Sciatica", "Spondylosis", "Rheumatoid arthritis", "Rickets"],
      answer: 2,
    },
    {
      id: "uhs2024-q61",
      question: "Which feature is possessed by smooth muscles?",
      options: ["Voluntary", "Branched", "Uni-nucleate", "Striated appearance"],
      answer: 2,
    },
    {
      id: "uhs2024-q62",
      question:
        "The accumulation of ‘lactic acid’ in the muscles results in:",
      options: ["Extreme fatigue", "Muscle contraction", "Paralysis", "Convulsion"],
      answer: 0,
    },
    {
      id: "uhs2024-q63",
      question: "Thick filaments in skeletal muscles are composed of:",
      options: ["Actin", "Myosin", "Tropomyosin", "Troponin"],
      answer: 1,
    },
    {
      id: "uhs2024-q64",
      question: "Sarcomere is part of myofibril between:",
      options: ["Two I bands", "Two A bands", "Two M lines", "Two Z lines"],
      answer: 3,
    },
    {
      id: "uhs2024-q65",
      question: "Medulla Oblongata is a part of:",
      options: ["Forebrain", "Mid brain", "Hind brain", "Hippocampus"],
      answer: 2,
    },
    {
      id: "uhs2024-q66",
      question: "Which of the following is NOT a bone of upper limb?",
      options: ["Humerus", "Ulna", "Femur", "Radius"],
      answer: 2,
    },
    {
      id: "uhs2024-q67",
      question: "Bone forming cells are:",
      options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Osteons"],
      answer: 0,
    },
    {
      id: "uhs2024-q68",
      question: "The chromosomes was first observed by:",
      options: ["T. H Morgan", "Griffith", "Walther", "Mendel"],
      answer: 2,
    },
  
    // =========================
    // CHEMISTRY
    // =========================
  
    {
      id: "uhs2024-q69",
      question: "Number of moles in an element is directly proportional to:",
      options: [
        "Mass of an element",
        "Empirical formula mass",
        "Molar mass of an element",
        "Formula mass",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q70",
      question:
        "The type and relative amount of each isotope in an element can be found by:",
      options: ["R spectroscopy", "U. V spectroscopy", "Mass Spectrometry", "N.M.R"],
      answer: 2,
    },
    {
      id: "uhs2024-q71",
      question: "The atomic masses of element depend upon:",
      options: [
        "Atomic number",
        "Number of electrons",
        "Number of isotopes & their abundance",
        "None of the above",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q72",
      question:
        "No individual atom in the sample of 1 mole of Neon has a mass of 20.18 a.m.u. because it is:",
      options: [
        "Overall mass of an isobar",
        "It is a fractional mass",
        "It is molar mass of Ne",
        "Average atomic mass of Ne",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q73",
      question: "The p orbital has:",
      options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"],
      answer: 0,
    },
    {
      id: "uhs2024-q74",
      question:
        "Which of the following electronic configuration is correct for carbon?",
      options: [
        "1s²2s²2p³",
        "1s²2s²2p⁴",
        "1s²2s²2p²",
        "1s²2s²2p¹",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q75",
      question: "Intermolecular forces between molecules of ideal gas are:",
      options: ["Strong", "Moderate", "Weak", "Absent"],
      answer: 3,
    },
    {
      id: "uhs2024-q76",
      question: "The correct ideal gas equation is:",
      options: ["qV=nRT", "pV=nRT", "qV=nRT", "yV=nRT"],
      answer: 1,
    },
    {
      id: "uhs2024-q77",
      question: "The real gases show deviation from ideal behavior at:",
      options: [
        "Low temperature and low pressure",
        "High temperature and high pressure",
        "Low temperature and high pressure",
        "High temperature and low pressure",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q78",
      question:
        "In order to boil water at 110°C, external pressure should be:",
      options: [
        "200 – 760 torr",
        "760 – 1200 torr",
        "665-670 torr",
        "660-700 torr",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q79",
      question:
        "Which one of the following DO NOT have tendency to form hydrogen bonding?",
      options: ["Ammonia", "Ethyl alcohol", "Carboxylic acid", "Hydrocarbon"],
      answer: 3,
    },
    {
      id: "uhs2024-q80",
      question:
        "Boiling point of a liquid is a temperature at which:",
      options: [
        "Surface tension is greater than the atmospheric pressure",
        "Viscosity is less than the atmospheric pressure",
        "Vapour pressure equals the atmospheric pressure",
        "Viscosity equals the atmospheric pressure",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q81",
      question:
        "Whenever the crystalline solids are broken they do so along definite planes known as:",
      options: [
        "Cleavage planes",
        "Refractory planes",
        "Sagittal planes",
        "Coronal planes",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q82",
      question: "One of the following is NOT an example of amorphous solids:",
      options: ["Plastic", "Glass", "Glucose", "Rubber"],
      answer: 2,
    },
    {
      id: "uhs2024-q83",
      question:
        "In graphite the carbon atoms are arranged in which of the following structure?",
      options: ["Rhombic", "Hexagonal", "Tetragonal", "Trigonal"],
      answer: 1,
    },
    {
      id: "uhs2024-q84",
      question:
        "The principle that states that if a stress is applied to a system at equilibrium the system nullify the effect of stress as far as possible is:",
      options: ["Haber’s", "Le-Chatelier", "Boyle’s", "Charles’"],
      answer: 1,
    },
    {
      id: "uhs2024-q85",
      question:
        "Identify the CORRECT option required for the maximum yield of ammonia by Haber’s process:",
      options: [
        "High pressure low temperature continual removal of ammonia",
        "Low pressure low temperature continual removal of ammonia",
        "High pressure high temperature continual removal of ammonia",
        "High pressure low temperature continual addition of ammonia",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q86",
      question:
        "Consider the following reaction in equilibrium and tell addition of which chemical will turn the cloudy solution into clear solution? BiCl₃ + H₂O ⇌ BiOCl + 2HCl",
      options: ["BiCl₃", "H₂O", "BiOCl", "HCl"],
      answer: 3,
    },
    {
      id: "uhs2024-q87",
      question: "Identify the correct formula to calculate rate of reaction:",
      options: [
        "Change in concentration of substance ÷ Time taken for the change",
        "Time taken for the change ÷ Change in concentration of substance",
        "Time taken for the change ÷ Change in concentration of substance × 100",
        "Time taken for the change × Change in concentration of substance",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q88",
      question:
        "Consider the hypothetical equation aA + bB → cC+Dd: Which of the following represents correct rate equation?",
      options: [
        "Rate = k[A][B]",
        "Rate = k[A]²[B]",
        "Rate = k[A]³",
        "Rate = k[B]²",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q89",
      question:
        "If a reaction rate does not change with concentration then it is:",
      options: ["3rd order", "2nd order", "1st order", "Zero order"],
      answer: 3,
    },
    {
      id: "uhs2024-q90",
      question: "Which of the following is CORRECT Arrhenius equation?",
      options: [
        "K=Ae -Ea/QT",
        "K=Ae -Ea/RT",
        "K=Ae -Ea/ST",
        "K=Ae -Ea/UT",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q91",
      question: "In endothermic reaction, the heat content of the:",
      options: [
        "Reactants and products is equal",
        "Reactants is more than that of products",
        "Products is more than that of reactants",
        "Reactants & Products will not change",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q92",
      question:
        "All of the following steps are used to calculate the lattice energy in Born-Haber cycle EXCEPT:",
      options: [
        "Atomizing the metal",
        "Ionizing the metal",
        "Deionize the metal",
        "Ionize non metal",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q93",
      question:
        "The enthalpy change when 1 Mole of water is formed by the reaction of acid with an alkali under standard conditions is known as:",
      options: [
        "Enthalpy of formation",
        "Enthalpy of reaction",
        "Enthalpy of combustion",
        "Enthalpy of neutralization",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q94",
      question: "Oxidation number of ‘Mn’ in KMnO₄ is:",
      options: ["0", "+1", "-7", "+7"],
      answer: 3,
    },
    {
      id: "uhs2024-q95",
      question:
        "Which step is irrelevant with respect to balancing of redox equations by oxidation number method?",
      options: [
        "Split the reaction into two half reactions",
        "Assign oxidation number to all the atoms involved in the equation",
        "Identify the element undergoing a change in oxidation number",
        "Equalize the number of electrons lost and gained",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q96",
      question:
        "Which of the following is NOT a correct feature of electrolytic cells?",
      options: [
        "Reduction occurs at cathode",
        "Oxidation occurs at anode",
        "Alternating current source is connected to electrodes",
        "Electrochemical reaction takes place",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q97",
      question: "Which of the following has a coordinate bond?",
      options: ["NaCl", "CaO", "NH₃BF₃", "H₂O"],
      answer: 2,
    },
    {
      id: "uhs2024-q98",
      question:
        "Which of the following is NOT a feature of Valence Shell Electron Pair Repulsion theory?",
      options: [
        "It determines the shape of molecule",
        "Pairs of electrons repel each other",
        "It helps in understanding interaction of medicinal drug molecules",
        "Only lone pairs participate in determining geometry of molecules",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q99",
      question: "Which of the following has smallest atomic radius?",
      options: ["Mg", "S", "P", "Na"],
      answer: 1,
    },
    {
      id: "uhs2024-q100",
      question:
        "The difference of lithium from the other alkali metals is mainly because of:",
      options: [
        "Large radius and low charge density",
        "Small radius and low charge density",
        "Large radius and high charge density",
        "Small radius and high charge density",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q101",
      question: "Which of the following is not Basic in nature?",
      options: [
        "Aluminum oxide",
        "Magnesium oxide",
        "Potassium oxide",
        "Sodium oxide",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q102",
      question:
        "The solubility of sulphates of alkaline metals generally:",
      options: [
        "Increase down the group",
        "Decrease down the group",
        "Increase then decrease down the group",
        "Doesn’t change down the group",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q103",
      question: "Which of the following is NOT an Alloy?",
      options: ["Steel", "Brass", "Bronze", "Graphite"],
      answer: 3,
    },
    {
      id: "uhs2024-q104",
      question:
        "Electronic configuration of chromium (Proton number 24) is:",
      options: [
        "[Ar] 3d⁴ 4s²",
        "[Ar] 3d⁵ 4s²",
        "[Ar] 3d⁵ 4s¹",
        "[Ar] 3d⁶ 4s²",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q105",
      question:
        "Which of the following is NOT a property of transition elements?",
      options: [
        "High melting points",
        "Good conductors of electricity",
        "Hard metals",
        "Ions and compounds are colorless",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q106",
      question:
        "I-Butene and two Butene are showing which type of isomerism?",
      options: ["Functional Group", "Position", "Metamerism", "Chain"],
      answer: 1,
    },
    {
      id: "uhs2024-q107",
      question:
        "Which type of isomerism is displayed by compounds having same structural formula but different position of atoms on both sides of carbon bond?",
      options: ["Chain", "Metamerism", "Geometric", "Tautomerism"],
      answer: 2,
    },
    {
      id: "uhs2024-q108",
      question:
        "Homocyclic organic compounds are sub divided into two types namely:",
      options: [
        "Alicyclic and Aromatic",
        "Alkenes & Alkynes",
        "Aromatic and Non aromatic",
        "Saturated & Unsaturated",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q109",
      question:
        "Which of the following is an example of substituent group which release electrons to benzene ring:",
      options: ["–CN", "–NR₃⁺", "–NH₂", "–NO₂"],
      answer: 2,
    },
    {
      id: "uhs2024-q110",
      question:
        "Which one of the following represents nitration of benzene correctly?",
      options: [
        "Reaction producing an incorrect product",
        "Correct benzene nitration product",
        "Reaction producing an incorrect product",
        "Reaction producing an incorrect product",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q111",
      question:
        "In Friedel Craft acylation an acyl group is introduced in benzene ring in the presence of catalyst:",
      options: ["AlCl₃", "H₂SO₄", "Sunlight", "V₂O₅"],
      answer: 0,
    },
    {
      id: "uhs2024-q112",
      question:
        "Identify correct ascending order of reactivity of alkyl halides:",
      options: ["Cl, Br, I, F", "F, Cl, Br, I", "Br, I, F, Cl", "I, F, Cl, Br"],
      answer: 1,
    },
    {
      id: "uhs2024-q113",
      question:
        "Identify the correct statement related to substitution and elimination of alkyl halides:",
      options: [
        "Strong bases causes substitution in preference to elimination",
        "Role of leaving groups in elimination is similar to substitution",
        "Substitution is favored more than elimination by decreasing solvent polarity",
        "Decrease in temperature will favor elimination more than substitution",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q114",
      question:
        "Alkyl Halides involving –C–X bond breakage and –C–Nu bond formation simultaneously would follow which one of the following mechanisms:",
      options: ["SN₁", "SN₂", "E₁", "E₂"],
      answer: 1,
    },
    {
      id: "uhs2024-q115",
      question: "CₙH₂ₙO is the general formula of:",
      options: ["Ether", "Carboxylic acid", "Ketones", "Carbolic acid"],
      answer: 2,
    },
    {
      id: "uhs2024-q116",
      question:
        "The blue color of Fehling solution is changed to red when warmed with an aldehyde due to formation of which of the following?",
      options: ["NO₂", "Cu₂O", "AgO", "SO₂"],
      answer: 1,
    },
    {
      id: "uhs2024-q117",
      question: "Reaction of HCN with formaldehyde is a:",
      options: [
        "Nucleophilic addition reaction",
        "Nucleophilic substitution reaction",
        "Electrophilic addition reaction",
        "Electrophilic substitution reaction",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q118",
      question: "Which of the following alcohol can give Iodoform reaction?",
      options: ["Methanol", "1-Butanol", "1-Propanol", "Ethanol"],
      answer: 3,
    },
    {
      id: "uhs2024-q119",
      question: "Common name of 2-hydroxy propanoic acid is:",
      options: ["Tartaric acid", "Lactic acid", "Phthalic acid", "Formic acid"],
      answer: 1,
    },
    {
      id: "uhs2024-q120",
      question: "Which of the following is correct regarding phenol?",
      options: [
        "Phenol and water are equally acidic",
        "Phenol is less acidic than carboxylic acid",
        "Phenol is less acidic than water",
        "Phenol is less acidic than ethanol",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q121",
      question:
        "When carboxylic acid are heated with alcohol in the presence of sulphuric acid one of the following is formed:",
      options: ["Amides", "Acyl chloride", "Esters", "Acid Anhydride"],
      answer: 2,
    },
    {
      id: "uhs2024-q122",
      question: "Which one of the following is not an amino acid?",
      options: ["Folic acid", "Glutamic acid", "Glycine", "Lysine"],
      answer: 0,
    },
  
    // =========================
    // PHYSICS
    // =========================
  
    {
      id: "uhs2024-q123",
      question: "In an elastic collision the total kinetic energy:",
      options: [
        "Dissipates after collision",
        "Increases after the collision",
        "Reduces after the collision",
        "Before and after collision remains the same",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q124",
      question: "The instantaneous velocity along the curved path is:",
      options: [
        "Along the tangent",
        "Perpendicular to the slop",
        "Parallel to the radius",
        "Anti-parallel to the radius",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q125",
      question:
        "The range of projectile will be maximum if the factor sin2θ becomes:",
      options: ["Zero", "1", "-1", "2"],
      answer: 1,
    },
    {
      id: "uhs2024-q126",
      question:
        "The two dimensional motion under constant acceleration due to gravity is called:",
      options: [
        "Circular motion",
        "Rotational motion",
        "Projectile motion",
        "Vibratory motion",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q127",
      question:
        "In velocity time graph the area under graph is equal to the:",
      options: [
        "Speed of an object",
        "Velocity of an object",
        "Distance covered by object",
        "Acceleration of an object",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q128",
      question:
        "According to Newton’s Law of Motion the mass of the object is a quantitative measure of its:",
      options: ["Weight", "Inertia", "Speed", "Acceleration"],
      answer: 1,
    },
    {
      id: "uhs2024-q129",
      question: "1KWh = _________ J?",
      options: ["3.6J", "3.6KJ", "3.6 MJ", "3.6 GJ"],
      answer: 2,
    },
    {
      id: "uhs2024-q130",
      question: "Which of the following is a non-conservative force?",
      options: [
        "Frictional force",
        "Electric force",
        "Elastic spring force",
        "Gravitational force",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q131",
      question: "Work done is equal to:",
      options: [
        "Effort × distance",
        "Effort + distance",
        "Effort – distance",
        "Effort ÷ distance",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q132",
      question:
        "When a force of 1N displaces its point of application by 1m in the direction of force, the work done is:",
      options: ["1 J", "10 J", "0 J", "1"],
      answer: 0,
    },
    {
      id: "uhs2024-q133",
      question:
        "An electric motor is used to lift the weight of 2.0N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
      options: ["0.25 W", "0.5 W", "0.75 W", "1 W"],
      answer: 1,
    },
    {
      id: "uhs2024-q134",
      question:
        "The centripetal acceleration of an object moving along a circle of radius ‘r’ with an angular speed ‘w’ is given by the formula:",
      options: ["a = rω²", "a = rω", "a = r²ω", "A = r²ω²"],
      answer: 0,
    },
    {
      id: "uhs2024-q135",
      question:
        "An aircraft makes a turn in a horizontal circle of radius 100m. It is travelling with a velocity of 250m/sec. The angular velocity of the aircraft will be:",
      options: ["1.5 rad/sec", "2.5 rad/sec", "3 rad/sec", "3.5 rad/sec"],
      answer: 1,
    },
    {
      id: "uhs2024-q136",
      question:
        "A particle of mass ‘m’ is moving on a circular path of radius ‘r’ with velocity ‘v’, then centripetal force acting on it is F. if the velocity of particle increases by 2 times and radius of circular path increases by 4 times then new centripetal force F’ will be:",
      options: ["F’ = 2F", "F’ = 1/2 F", "F’ = 4 F", "F’ = F"],
      answer: 3,
    },
    {
      id: "uhs2024-q137",
      question:
        "A roller coaster is moving with 30 ms⁻¹ on a circular track of radius 30m. the net mass of coaster + passengers is ‘m’ the centripetal force acting on it is:",
      options: ["900m", "m", "450 m", "30m"],
      answer: 3,
    },
    {
      id: "uhs2024-q138",
      question: "Amplitude in the following figure is given as: (Figure of a wave)",
      options: ["2m", "1/2m", "1/4 m", "1m"],
      answer: 3,
    },
    {
      id: "uhs2024-q139",
      question:
        "Which one of the following is INCORRECT about the nodes when the string is plucked?",
      options: [
        "Amplitude of vibration is zero",
        "Do not move along the string",
        "Produced at the fixed ends of strings",
        "Distance between consecutive nodes is 1 wavelength",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q140",
      question:
        "In transverse waves the portion above the mean level is called:",
      options: ["Wave front", "Wave crest", "Wave trough", "Wave length"],
      answer: 1,
    },
    {
      id: "uhs2024-q141",
      question: "Which one of the following does not cause stationary waves?",
      options: [
        "Two waves of equal frequency",
        "Two waves of same speed",
        "Two waves of unequal amplitude",
        "Two waves travelling in opposite directions",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q142",
      question:
        "Select the appropriate Doppler equation when source is approaching the stationary observer where f₀ is the observed frequency, fₛ is frequency of source, v is the speed of sound, vₛ is the speed of source relative to observer.",
      options: [
        "f₀ = (v / (v + vₛ)) fₛ",
        "f₀ = (v / (v – vₛ)) fₛ",
        "f₀ = ((v – vₛ) / (v + vₛ)) fₛ",
        "f₀ = (v / (v + vₛ)) fₛ",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q143",
      question:
        "The distance between two successive particles which are exactly in the same state of vibration is called:",
      options: ["Frequency", "Amplitude", "Wavelength", "Time period"],
      answer: 2,
    },
    {
      id: "uhs2024-q144",
      question:
        "During the isothermal process, the temperature:",
      options: [
        "remains constant during the initial phase of the process",
        "remains constant throughout the process",
        "alters throughout the process",
        "increases throughout the process",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q145",
      question: "What is the value of heat energy (Q) in an adiabatic process?",
      options: ["+1", "-1", "0", "+2"],
      answer: 2,
    },
    {
      id: "uhs2024-q146",
      question: "The Coulomb’s law states:",
      options: [
        "Force between two point charges is inversely proportional to the product of the charges and directly proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and the square of the distance between them",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q147",
      question: "The formula V = W / q₀ represents:",
      options: [
        "Electric intensity",
        "Electric power",
        "Electric potential",
        "Electric field gradient",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q148",
      question: "The S.I unit of capacitance of a capacitor is:",
      options: ["Coulomb", "Volt", "Farad", "Ampere"],
      answer: 2,
    },
    {
      id: "uhs2024-q149",
      question:
        "Electric intensity between two oppositely charge plates in the middle region is_____",
      options: ["Non-uniform", "Uniform", "Cannot be predicted", "Variable"],
      answer: 1,
    },
    {
      id: "uhs2024-q150",
      question:
        "Find potential difference in moving 2 C charge which requires 600J of work between two points.",
      options: ["1200V", "300V", "150V", "2400V"],
      answer: 1,
    },
    {
      id: "uhs2024-q151",
      question: "Which one of the following is NOT a feature of electric forces?",
      options: [
        "They act on charges",
        "They act on masses",
        "They can be attractive",
        "They can be repulsive",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q152",
      question:
        "A charge of 90 C passes through a wire for 30 seconds. Then the current in the wire will be:",
      options: ["3A", "0.3 A", "3 mA", "0.3 mA"],
      answer: 0,
    },
    {
      id: "uhs2024-q153",
      question:
        "The magnitude of the current in metals is proportional to the potential difference across it as long as temperature of conductor is kept constant is known as:",
      options: ["Joule’s Law", "Gauss Law", "Ohm’s Law", "Ampere’s Law"],
      answer: 2,
    },
    {
      id: "uhs2024-q154",
      question:
        "When length of copper wire is doubled then resistivity becomes:",
      options: ["Double", "Half", "Remains same", "Four times"],
      answer: 2,
    },
    {
      id: "uhs2024-q155",
      question: "The resistance of semi-conductor with rise in temperature:",
      options: ["Increases", "Decreases", "Remain same", "Infinite"],
      answer: 1,
    },
    {
      id: "uhs2024-q156",
      question: "Volt × Ampere is the measure of:",
      options: ["Current", "Volt", "Resistance", "Power"],
      answer: 3,
    },
    {
      id: "uhs2024-q157",
      question: "The formula φ = B.A represents:",
      options: [
        "Electric flux",
        "Magnetic flux",
        "Electric flux density",
        "Gravitational flux",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q158",
      question:
        "Which of the following statement is incorrect for any magnetic field lines?",
      options: [
        "Lines start at north pole and ends at south pole",
        "Lines never touch or cross each other",
        "The lines are curved",
        "Magnetic field is strongest when the lines are farthest",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q159",
      question: "The unit of magnetic flux density is:",
      options: ["Wbm⁻¹", "Wbm", "Wbm⁻²", "Wb"],
      answer: 2,
    },
    {
      id: "uhs2024-q160",
      question:
        "The induced current will flow in such a direction so as to oppose the cause that produces it is statement of:",
      options: ["Ampere’s Law", "Faraday’s Law", "Lenz’s Law", "Joule’s Law"],
      answer: 2,
    },
    {
      id: "uhs2024-q161",
      question:
        "In an AC generator the emf will be maximum when factor sinωt is equal to:",
      options: ["Zero", "1", "2", "1/2"],
      answer: 1,
    },
    {
      id: "uhs2024-q162",
      question:
        "Electric generators and transformers are based on the principles of:",
      options: ["Coulomb’s law", "Faraday’s law", "Ampere’s law", "Hook’s law"],
      answer: 1,
    },
    {
      id: "uhs2024-q163",
      question: "In an ideal transformer:",
      options: [
        "Power input is equal to Power output",
        "Power input is less than half of the power output",
        "Power input is greater than Power output",
        "Power input is more than half of the power output",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q164",
      question:
        "The conversion of A.C into D.C is called rectification and circuit is called rectifier. Which component of electronics acts as a rectifier?",
      options: ["Diode", "Transistor", "Transformer", "Inductor"],
      answer: 0,
    },
    {
      id: "uhs2024-q165",
      question: "Full wave rectification is given by:",
      options: [
        "One diode connected in bridge type arrangements",
        "Two diodes connected in bridge type arrangements",
        "Three diodes connected in bridge type arrangement",
        "Four diodes connected in bridge type arrangements",
      ],
      answer: 3,
    },
    {
      id: "uhs2024-q166",
      question: "A diode characteristic curve is a plot between:",
      options: [
        "Current and time",
        "Voltage time",
        "Voltage and current",
        "Reverse voltage forward voltage",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q167",
      question: "The value of Planck constant is:",
      options: [
        "6.63×10⁻³⁴ Js",
        "6.63×10³⁴ Js",
        "6.63×10⁻³⁴ Js⁻¹",
        "6.63×10³⁴ Js⁻¹",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q168",
      question:
        "The de-Broglie wavelength associated with a particle moving at 10⁶ m/s and having mass 10⁻³⁰ Kg:",
      options: [
        "6.6×10⁻¹⁰ m",
        "1.5×10⁹ m",
        "1.9×10⁻⁵ m",
        "7.2×10⁻⁸ m",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q169",
      question:
        "Light propagates through space as a wave is evident by all of the following EXCEPT:",
      options: [
        "Interference",
        "Photoelectric effect",
        "Diffraction",
        "Polarization",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q170",
      question: "Which series falls in ultra violet region?",
      options: ["Lyman", "Brachett", "Pfund", "Paschen"],
      answer: 0,
    },
    {
      id: "uhs2024-q171",
      question:
        "The potential through which an electron should be accelerated, so that, on collision it can lift the electron in the atom from its ground state to some higher state is known as:",
      options: [
        "Ionization potential",
        "Excitation potential",
        "String potential",
        "Acceleration potential",
      ],
      answer: 1,
    },
    {
      id: "uhs2024-q172",
      question: "Which of the following regarding X Rays is INCORRECT?",
      options: [
        "Have higher wavelength than visible light",
        "They are part of electromagnetic spectrum",
        "They are highly penetrating in soft body tissues",
        "They are high energy photons",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q173",
      question: "The unit of decay constant is:",
      options: ["m", "s", "s⁻¹", "m⁻¹"],
      answer: 2,
    },
    {
      id: "uhs2024-q174",
      question:
        "If we have “N₀” number of any radioactive element then after a period of “n” half-lives the number of atoms left behind is:",
      options: ["2ⁿ N₀", "(1/2)ⁿ N₀", "(1/2 N₀)ⁿ", "(2N₀)ⁿ"],
      answer: 1,
    },
    {
      id: "uhs2024-q175",
      question:
        "Which of the following is NOT the Somatic biological effect of radiation?",
      options: ["Skin burn", "Loss of hair", "Induction of cancer", "Genes mutation"],
      answer: 3,
    },
    {
      id: "uhs2024-q176",
      question:
        "An artificial radioactive element can be made by bombarding:",
      options: [
        "High energy particles on unstable elements",
        "Low energy particles on unstable elements",
        "High energy particles on stable elements",
        "Low energy particles on stable elements",
      ],
      answer: 2,
    },
  
    // =========================
    // ENGLISH
    // =========================
  
    {
      id: "uhs2024-q177",
      question: 'What does the word "SURPLUS" mean?',
      options: [
        "In excess",
        "A mathematical term",
        "Within reach",
        "Salutation",
      ],
      answer: 0,
    },
    {
      id: "uhs2024-q178",
      question: 'What does the word "ANCESTOR" mean?',
      options: [
        "Collection of stars",
        "Branch of astrology",
        "Forefathers",
        "Type of receptors",
      ],
      answer: 2,
    },
    {
      id: "uhs2024-q179",
      question: 'What does the word "SPILL" mean?',
      options: ["Coil", "Deliver", "Spoil", "Spread"],
      answer: 3,
    },
    {
      id: "uhs2024-q180",
      question: "Pick the CORRECT option:",
      options: [
        "The supervisor has nor will ever compromise.",
        "The supervisor have nor will ever compromise.",
        "The supervisor has not compromised nor will ever compromise.",
        "The supervisor has nor will ever compromised.",
      ],
      answer: 2,
    },
  ];