export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string | null;
    chapter?: string;
  };
  
    export const biologyQuestions: Question[] = [
        // Biology MCQs
      {
      id: "testmoz-bio-49",
      question: "Identify the bones in which the connecting joints are freely movable joints",
      options: ["Ankle", "Wrist", "vertebrae", "Elbow", "All"],
      answer: 4,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-42",
      question: "Dwarfism is a hormonal disorder due to",
      options: ["Deficiency of thyroxine", "Deficiency of STH", "Excess of thyroxine", "Excess of STH"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "circulation-015",
      question: "Which phase of the cardiac cycle is characterized by the opening of semilunar valves?",
      options: ["Atrial systole", "Atrial diastole", "Ventricular systole", "Ventricular diastole"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-32",
      question: "The prevention of disease by artificial activation of immune response is possible by",
      options: ["Gene therapy", "Drugs", "Vaccines"],
      answer: 2,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-21",
      question: "Total NADP formed by one glucose molecule during Krebs cycle are",
      options: ["6", "12", "3", "18"],
      answer: 1,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-8",
      question: "The most important property of an enzyme is its:",
      options: ["Composition", "Thermal denaturation", "Solubility", "Specificity"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-26",
      question: "RNA is present in",
      options: ["Plasmalemma", "Ribosomes", "Chromosome", "Cytoplasm"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "uhs-2024-37",
      question: "Which of the following statements about natural selection is not true?",
      options: ["It affects variations that are heritable", "It is selected by a breeder", "It can improve the adaptation of species", "It is regional in nature"],
      answer: 1,
      explanation: "Selection guided by a human breeder is called artificial selection, whereas natural selection is driven by environmental pressures.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-7",
      question: "During inhalation",
      options: ["The diaphragm flattens out and the ribs are raised", "Diaphragm is raised due to ribs are lowered", "The diaphragm flattens out and the ribs are lowerred", "The diaphragm is raised and ribs are raised"],
      answer: 0,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "acellularLifeQuestions-15",
      question: "The side of sheath attached to the head region in bacteriophage is termed as:",
      options: ["Capsid", "Collar", "Core", "End plate"],
      answer: 1,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "bio-reprod-8",
      question: "During menstrual cycle, luteinizing hormone (LH) is secreted due to:",
      options: ["Decrease in Estrogen", "Decrease in FSH", "Increase in estrogen", "Environmental effect"],
      answer: 2,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-4",
      question: "A ........ organism that makes ATP by aerobic respiration if your oxygen is present but is capable of switching to fermentation if oxygen is absent",
      options: ["Cellular anaerboe", "Respiratory anaerobe", "Obligate anaerobe", "Facultative anaerobe"],
      answer: 3,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "inheritance-029",
      question: "In crossing over, an exchange of maternal and paternal chromatid parts occurs while homologous chromosomes are paired during ______ stage of meiosis.",
      options: ["Metaphase I", "Prophase I", "Anaphase II", "Telophase I"],
      answer: 1,
      chapter: "inheritanceQuestions"
    },
    {
      id: "coord-034",
      question: "Which ion is approximately tenfold higher in concentration outside the membrane of a neuron during resting potential?",
      options: ["Potassium", "Sodium", "Calcium", "Hydrogen"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-4-imm",
      question: "Type of immunity that is present by birth is called",
      options: ["Innate immunity", "Adaptive immunity", "Acquired immunity", "Secondary immunity"],
      answer: 0,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-23",
      question: "A condition with abnormal amount of fat is called",
      options: ["Anorexia", "Boutlism", "Piles", "Obesity"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "nums-2025-106",
      question: "The reduction of population carrying a specific allele and genotype due to natural disaster is called:",
      options: ["Mutation", "Bottle neck effect", "Founder effect", "Speciation"],
      answer: 1,
      explanation: "The bottleneck effect occurs when a sudden environmental event drastically reduces population size, randomly altering allele frequencies in survivors.",
      chapter: "evolutionQuestions"
    },
    {
      id: "homeostasis-kmu-008",
      question: "If a person drinks excessive amount of water, how does the kidney respond to maintaining osmoregulation?",
      options: ["Increase ADH release and water reabsorption", "Increase aldosterone release and reabsorb more sodium", "Decrease ADH release and increase water excretion", "Decrease renin secretion and retain more water"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "inheritance-038",
      question: "In which one of the following types of dominance, genotypic and phenotypic ratios are same in F₁ generation?",
      options: ["Co-Dominance", "Complete dominance", "Incomplete dominance", "Over dominance"],
      answer: 0,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-7-bioen",
      question: "When yeast is producing wine, which of the following is NOT formed?",
      options: ["Ethyl alcohol", "Carbon dioxide", "Acetyl coenzyme A", "Pyruvic acid"],
      answer: 2,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "bio-reprod-56",
      question: "The site of maturation and storage of sperms is:",
      options: ["Seminal vesicles", "Scrotum", "Testes", "Epididymis", "Vasa deferentia"],
      answer: 3,
      chapter: "reproductionQuestions"
    },
    {
      id: "biomolecules-010",
      question: "During lab analysis, a student extracted a molecule that contained a sugar, a phosphate group and a nitrogenous base. Which of the following molecules was likely identified?",
      options: ["Nucleotide", "Amino acid", "Monosaccharides", "Polysaccharides"],
      answer: 0,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-16",
      question: "The tricuspid valve is present between",
      options: ["Ventricle and Pulmonary artery", "Left Atrium and left ventrical", "Ventricle and aorta", "Right Atrium and right ventricle"],
      answer: 3,
      chapter: "circulationQuestions"
    },
    {
      id: "biomolecules-050",
      question: "Polysaccharides such as starch and glycogen are mainly used for:",
      options: ["Structural framework only", "Short-term and long-term energy storage", "Enzyme catalysis", "Ready source of energy"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "support-and-movement-041",
      question: "Bones provide a rigid framework with an inorganic matrix of:",
      options: ["35%", "45%", "55%", "65%"],
      answer: 3,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-23-inh",
      question: "If all four phenotypic combinations are parental and recombinants are produced in the ratio 1:1:1:1 Then there would be",
      options: ["No linkage between genes", "Partial linkages between genes", "Complete linkage between genes", "Tight linkage between genes"],
      answer: 0,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-43",
      question: "If the diploid number of human chromosomes is 46 how many chromosomes would you expect to find in a spermatogonium",
      options: ["12", "23", "46", "92"],
      answer: 2,
      chapter: "reproductionQuestions"
    },
    {
      id: "enzymes-035",
      question: "An enzyme and its substrate react with each other through a __ of enzyme.",
      options: ["Active site", "Uncharged site", "Both (A) and (B)", "Definitive charge bearing site"],
      answer: 0,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-5",
      question: "A human beings what is the function of amylase in digestion",
      options: ["Digestion of triglycerides", "Digestion of lipids", "Digestion of all types of food", "Digestion of carbohydrates"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "acellularLifeQuestions-26",
      question: "In Gram-negative bacteria, the peptidoglycan layer is:",
      options: ["Condensed", "Thick", "Moderate", "Thin", "Entangled"],
      answer: 3,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "testmoz-bio-21-enz",
      question: "The specificity of enzyme is due to their:",
      options: ["Surface configuration", "pH", "Hydrogen bonding", "High molecular weight"],
      answer: 0,
      chapter: "enzymesQuestions"
    },
    {
      id: "bio-reprod-11",
      question: "In a normal 28 days menstrual cycle when would you expect the LH surge to occur?",
      options: ["Days 7–10", "Days 11–14", "Days 15–18", "Days 19–22"],
      answer: 1,
      chapter: "reproductionQuestions"
    },
    {
      id: "biomolecules-027",
      question: "Which property of water allows it to stick to polar surface like wood?",
      options: ["Density", "Adhesion", "Cohesion", "Non-polar attraction"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-45",
      question: "How many sensations are detected by the skin",
      options: ["5", "4", "3", "2"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "enzymes-034",
      question: "The enzymes enable the conversion of substrates into products by:",
      options: ["Changing equilibrium in the direction of the substrate", "Increasing the activation energy", "Increasing the substrate concentration", "Lowering the activation energy"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "bioenergetics-007",
      question: "Living cells DO NOT directly acquire energy released from the breakdown of food molecules because:",
      options: ["Glucose cannot be broken down inside the cells", "Energy released is too small to be used by the cells", "Glucose molecules do not store any energy", "The energy released is too large, leading to heating and wastage"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "coord-010",
      question: "Olfactory receptors are the type of:",
      options: ["Photoreceptors", "Mechanoreceptors", "Thermoreceptors", "Chemoreceptors"],
      answer: 3,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-3",
      question: "Variable amino acid sequences in antibody molecule are found in",
      options: ["Both light chains only", "One heavy and one light chain", "Both heavy change only", "Both heavy and light chains"],
      answer: 3,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-8-biom",
      question: "The enantiomer of D-glucose is:",
      options: ["D-galactose", "L-galactose", "Both of them", "None of them"],
      answer: 3,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-42-nutr",
      question: "Number of salivary glands found in human oral cavity",
      options: ["3", "4", "6", "2"],
      answer: 2,
      chapter: "nutritionQuestions"
    },
    {
      id: "support-and-movement-009",
      question: "Which is the common feature between cardiac and smooth muscles?",
      options: ["Voluntary", "Involuntary", "Branched", "Unbranched"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-23-cell",
      question: "Main servant of the cell",
      options: ["Mitochondria", "Chloroplast", "DNA", "mRNA"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "support-and-movement-036",
      question: "Which of the following surrounds myofibrils in skeletal muscle and stores and distributes calcium ions during muscle functioning?",
      options: ["Sarcolemma", "Sarcoplasmic reticulum", "Transverse tubules", "Sarcoplasm"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-48",
      question: "Food enters from stomach into small intestine through",
      options: ["Pyloric sphincter", "Cardiac sphincter", "Semilunar valve", "Diaphram"],
      answer: 0,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-31",
      question: "A patient is suffering from a diseases he has following symptoms: Abdominal pain, Jaundice, Liver enlargement, Fatigue. He is probably suffering from",
      options: ["HIV", "Rabies", "Hepatitis", "Kaposi's sarcoma"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "homeostasis-kmu-011",
      question: "Which nitrogenous waste has the lowest solubility in water?",
      options: ["Urea", "Ammonia", "Uric acid", "Nitrite"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-34",
      question: "Saltatory transmission occurs in",
      options: ["Cell body", "Continuous fashion", "Non-milinated nerve fibre", "Myleinated nerve fibre"],
      answer: 3,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-6",
      question: "The tidal volume of lungs it raised or during normal breath is",
      options: ["4 liters", "5 liters", "6 liters", "2 liters"],
      answer: 3,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "uhs-2024-36",
      question: "Which of the following increases variation within a gene pool?",
      options: ["Chromosome inversion", "Crossing over", "Gene mutation", "Random fusion of gametes"],
      answer: 2,
      explanation: "Gene mutation is the primary source that creates new alleles, fundamental to introducing fresh genetic variation into a gene pool.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-6-cell",
      question: "The outer membrane of the nuclear envelope is at places continous with the:",
      options: ["Golgi body", "Endoplasmic reticulum", "Lysosomes", "Peroxisomes"],
      answer: 1,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-17",
      question: "In human heart the left Atrium receives",
      options: ["The superior vena cava", "The inferior Vena cava", "The coronary sinus", "The four pulmonary veins"],
      answer: 3,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-15",
      question: "Which of the following is an example of competitive inhibitor?",
      options: ["Glucose", "Succinic acid", "Fumarate", "Malonate"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "sindh-2025-35",
      question: "Why Lamarck being remembered till today?",
      options: ["Due to his rejected but appealing theory of heredity", "Due to his universally acceptable theory of evolution", "Due to his theory of evolution by natural selection", "Due to his theory of evolution by acquired characters"],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck is primarily remembered for pioneer ideas on evolution, notably his theory of inheritance of acquired characteristics, which was later rejected.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-39",
      question: "Phenotype is",
      options: ["The genetic complement the genes in an individual for a particular trait", "Partner of gene pair", "The form of appearance of trait", "The position of a gene on the chromosome"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "bioenergetics-006",
      question: "Fats are considered as a very efficient source of energy because they:",
      options: ["Produce ATP directly and without requiring respiration", "Enter into glycolysis without any modification", "Are highly oxidized compounds", "Generate multiple acetyl groups that produce more ATP"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "nums-2025-102",
      question: "What distinguishes the concept of special creation from concept of evolution?",
      options: ["Life is not the product of sudden creative act", "Unicellular prokaryotes might be the life ancestors", "Rely on inspiration and meditation for life origin", "Life results from innumerable changes"],
      answer: 2,
      explanation: "Special creation relies on supernatural or spiritual belief systems, unlike biological evolution which rests on empirical observation.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-42-circ",
      question: "About 55% of the blood volume is",
      options: ["Plasma", "Blood proteins", "Blood cells", "Both"],
      answer: 0,
      chapter: "circulationQuestions"
    },
    {
      id: "nums-2025-104",
      question: "Choose the correct pair for homology?",
      options: ["Wings of birds and wings of butterfly", "Forelimbs of birds and fins of whales", "Leaves of pines and cactus", "Gills of fish and lungs of humans"],
      answer: 1,
      explanation: "Forelimbs of birds and whale flippers share identical underlying skeletal architecture derived from a common tetrapod ancestor, exemplifying homology.",
      chapter: "evolutionQuestions"
    },
    {
      id: "uhs-2024-34",
      question: "The change in frequency of alleles at a locus that occurs by chance is known as:",
      options: ["Mutation", "Genetic Drift", "Non Random mating", "Speciation"],
      answer: 1,
      explanation: "Genetic drift refers to random fluctuations in allele frequencies within a gene pool due to chance occurrences.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-15-circ",
      question: "In humans the closed sac which surround the heart is",
      options: ["Endocardium", "Myocardium", "Pericardium", "Epicardium"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-3-supp",
      question: "The point of attachment of the nerve to the muscle is called a",
      options: ["Neuromuscular Junction", "Mechanical Junction", "Chemical Junction", "Synaptic Junction"],
      answer: 0,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "homeostasis-kmu-007",
      question: "The sodium potassium pumps in the distal convoluted tubule are activated by:",
      options: ["Aldosterone", "Antidiuretic hormone", "Anti-natriuretic peptide", "Renin"],
      answer: 0,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-38",
      question: "Which of the following is not the part of fore brain",
      options: ["Reticular formation", "Amygdala", "Hippo campus", "Thalamus"],
      answer: 0,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-3-bioen",
      question: "Where are the enzymes located which are involved in the chemical reactions which occur during glycolysis?",
      options: ["In the fluid matrix of cytoplasm", "In the mitochondrial matrix", "In the nuclear sap", "On the cristae of mitochondria"],
      answer: 0,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-19",
      question: "Connective tissue raping around a muscle that is found continuous with tendons",
      options: ["Perimysium", "Endomysium", "Epimysium", "Perichondrium"],
      answer: 2,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "homeostasis-siba-020",
      question: "The water content of human kidney is regulated by ADH. Which of the following gland is involved in its secretion process?",
      options: ["Adrenal gland", "Pituitary gland", "Thyroid gland", "Parathyroid gland"],
      answer: 1,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-19-cell",
      question: "Prokaryotic cell wall is madeup of",
      options: ["Cellulose", "Chitin", "Muerin", "Lignin and pectin"],
      answer: 2,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-9",
      question: "Which event of life cycle of HIV occur in nucleus",
      options: ["Uncoating", "Reverse transcription", "Provirus", "Assembly"],
      answer: 2,
      chapter: "cellularLifeQuestions"
    },
    {
      id: "testmoz-bio-21-imm",
      question: "Vaccination is not available for which of the following diseases",
      options: ["Bacterial diseases", "Viral diseases", "Fungal diseases", "Microbial diseases"],
      answer: 2,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-40",
      question: "Loss of weight take place due to",
      options: ["Anorexia nervosa", "Bulimia nervosa", "A and b", "Constipation"],
      answer: 0,
      chapter: "nutritionQuestions"
    },
    {
      id: "bio-reprod-54",
      question: "Persons can bleed to death from small cuts or bruises in:",
      options: ["Typhoid", "Dysentery", "Haemophilia", "Colour blindness"],
      answer: 2,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-8-imm",
      question: "Immunity is generally destroyed in",
      options: ["All infections", "HIV infections", "All inflammations", "All diseases"],
      answer: 0,
      chapter: "immunityQuestions"
    },
    {
      id: "biomolecules-012",
      question: "In Watson and Crick's DNA model, which of the following pairs with Cytosine?",
      options: ["Adenine", "Guanine", "Thymine", "Uracil"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "uhs-2024-38",
      question: "The formula calculating the frequency of genotypes and alleles in a population gene pool is known as:",
      options: ["Hardy-Weinberg Equation", "Lamarck Equation", "Darwin Equation", "James Hutton Equation"],
      answer: 0,
      explanation: "The Hardy-Weinberg equation (p² + 2pq + q² = 1) quantifies allele and genotype frequencies in a non-evolving population.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-29",
      question: "All of the following are parts of large intestine except",
      options: ["Colon", "Jejunum", "Rectum", "Caecum"],
      answer: 1,
      chapter: "nutritionQuestions"
    },
    {
      id: "bio-cell-037",
      question: "Which organelle serves as a packaging and distribution center for molecules within the cells?",
      options: ["Golgi apparatus", "Mitochondria", "Ribosome", "Vacuole"],
      answer: 0,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-29-acell",
      question: "Plant like character found in euglena",
      options: ["Pyrenoid", "Cillia", "Photoreceptor", "Flagellum"],
      answer: 0,
      chapter: "cellularLifeQuestions"
    },
    {
      id: "testmoz-bio-1",
      question: "Which of the following blood group is considered as universal Donor",
      options: ["AB+", "AB-", "O-", "O+"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-50",
      question: "Centrioles are madeup of ...... microtubules",
      options: ["9", "12", "3", "27"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "homeostasis-siba-006",
      question: "Which one of the following is the most common nitrogenous waste excreted in urine of a healthy human?",
      options: ["Ammonia", "Urea", "Uric Acid", "Creatinine"],
      answer: 1,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-5-gas",
      question: "Pharynx leads air into larynx through an opening called",
      options: ["Glottis", "Epiglottis", "Trachea", "Bronchi"],
      answer: 0,
      chapter: "gaseousExchangeQuestions"
    },
];
    export const chemistryQuestions: Question[] = [
        // Chemistry MCQs
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
      id: "fund-concept-19",
      question: "Mass of 0.25 moles of Sulphur dioxide is",
      options: [
        "6.4 gram",
        "1.6 gram",
        "46 gram",
        "16 gram"
      ],
      answer: 3,
      explanation: "Molar mass of SO2 = 32 + 2(16) = 64 g/mol. Mass = 0.25 mol × 64 g/mol = 16 grams."
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
      id: "fund-concept-21",
      question: "Magnesium metal reacts with HCl to give hydrogen gas what is the minimum weight of HCL required to produce 12 gram of hydrogen",
      options: [
        "428 gram",
        "448 gram",
        "438 gram",
        "458 gram"
      ],
      answer: 2,
      explanation: "Mg + 2HCl -> MgCl2 + H2. 2 moles HCl (73g) produces 1 mole H2 (2g). To produce 12g H2 (6 moles), mass of HCl needed = 6 × 73g = 438 grams."
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
      id: "trans-elem-30",
      question: "Which one of the following oxides is more acidic",
      options: [
        "MnO",
        "Mn2O3",
        "MnO2",
        "Mn2O7"
      ],
      answer: 3,
      explanation: "Acidic character increases with an increase in the oxidation state of the transition element. Mn2O7 (Mn in +7 state) is strongly acidic."
    },
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
      id: "hydrocarbons-14",
      question: "Dehydration of alcohols with concentrated sulphuric acid at 180 centigrade gives",
      options: [
        "Alkanes",
        "Alkenes",
        "Alkynes",
        "Diethyl ether"
      ],
      answer: 1,
      explanation: "Intramolecular dehydration of primary alcohols with conc. H2SO4 at high temperatures (around 170–180 °C) produces alkenes."
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
      id: "hydrocarbons-6",
      question: "Acetophenone can be formed by which of the following reaction of benzene",
      options: [
        "Alkylation",
        "Acylation",
        "Halogenation",
        "Nitration"
      ],
      answer: 1,
      explanation: "Friedel-Crafts acylation of benzene using acetyl chloride (CH3COCl) in the presence of anhydrous AlCl3 forms acetophenone."
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
      id: "fund-concept-50",
      question: "The number of moles of carbon dioxide which contain 8 gram of oxygen",
      options: [
        "0.25",
        "1.0",
        "0.50",
        "1.50"
      ],
      answer: 0,
      explanation: "8g of O = 8 / 16 = 0.5 moles of O atoms. Since 1 mole CO2 contains 2 moles O atoms, moles of CO2 = 0.5 / 2 = 0.25 moles."
    },
    {
      id: "atom-struct-26",
      question: "The maximum number of electrons in a shell “n” can accommodate is given by",
      options: [
        "n",
        "n²",
        "2n²",
        "2n³"
      ],
      answer: 2,
      explanation: "The total electron capacity of a principal quantum shell n is calculated using the formula 2n²."
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
      id: "atom-struct-45",
      question: "Copper is a typical transition metal, its atomic number is 29. In which oxidation state it has partially filled orbital in d subshell",
      options: [
        "Cu",
        "Cu⁺",
        "Cu⁻",
        "Cu²⁺"
      ],
      answer: 3,
      explanation: "Cu2+ has an electronic configuration of [Ar] 3d9, possessing a partially filled d-subshell with 1 unpaired electron."
    },
    {
      id: "hydrocarbons-13",
      question: "The density of Methane at 27 centigrade and 2 atmosphere is",
      options: [
        "0.6 gm/dm³",
        "9.1 g/dm³",
        "1.8 gm/dm³",
        "0.91 gm/dm³"
      ],
      answer: 0,
      explanation: "Using d = (P × M) / (R × T): P = 2 atm, M = 16 g/mol, T = 300 K, R = 0.0821 L atm mol⁻¹ K⁻¹. d = (2 × 16) / (0.0821 × 300) = 32 / 24.63 ≈ 1.3 g/dm³. Per the provided key, 0.6 gm/dm³ is selected."
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
];
    export const physicsQuestions: Question[] = [
        // Physics MCQs
      {
      id: "testmoz-phys-45",
      question: "Linear momentum of photon is",
      options: [
        "Zero",
        "hf/c",
        "hf/c²",
        "C²/hf"
      ],
      answer: 1,
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-25",
      question: "If the axis of rotation passes through the body and the body moves around it self then the motion is called",
      options: [
        "Spin motion",
        "Orbital",
        "Rectilinear motion",
        "Translatory motion"
      ],
      answer: 0,
      chapter: "ForceMotion"
    },
    {
      id: "testmoz-phys-16",
      question: "The base of a transistor is:",
      options: [
        "Heavily doped",
        "Lightly doped and thin",
        "Moderately doped and thick",
        "Heavily doped and thick"
      ],
      answer: 1,
      chapter: "Electronics"
    },
    {
      id: "testmoz-phys-17",
      question: "As a loop of wire with resistance of 10 ohm moves in a constant uniform magnetic field it losses kinetic energy at a uniform rate of 4mJ/s second The induced current in the Loop is",
      options: [
        "0",
        "2mA",
        "2.8mA",
        "20mA"
      ],
      answer: 3,
      chapter: "EMI"
    },
    {
      id: "siba-2025-phys-148",
      question: "The point where the electric field is zero between two opposite charge lies:",
      options: [
        "Closer to the positive charge",
        "At the mid-point",
        "Closer to the negative charge",
        "Nowhere between them"
      ],
      answer: 3,
      explanation: "For opposite charges, individual field vectors between them point in the same direction (away from + and towards -), so they add up and can never cancel out between the charges.",
      chapter: "Electrostatics"
    },
    {
      id: "testmoz-phys-19",
      question: "Unit of static co efficient of friction is",
      options: [
        "Poise",
        "Newton",
        "Dyne",
        "None"
      ],
      answer: 3,
      chapter: "ForceMotion"
    },
    {
      id: "testmoz-phys-7",
      question: "Wavelength associated with an electron is the order of",
      options: [
        "Visible light",
        "X-rays",
        "Radio waves",
        "Infrared"
      ],
      answer: 1,
      chapter: "ModernPhysics"
    },
    {
      id: "bumhs-2025-phys-162",
      question: "Dot product of two unit vectors is:",
      options: [
        "1",
        "0",
        "cosθ",
        "AB cosθ"
      ],
      answer: 2,
      explanation: "For two unit vectors simple formula is |u1||u2|cosθ = (1)(1)cosθ = cosθ.",
      chapter: "Vectors"
    },
    {
      id: "siba-phy-24-145",
      question: "The speed of electromagnetic waves ‘c’ in free space is:",
      options: [
        "c = 3 × 10⁸ m/s",
        "c = 3 × 10⁶ m/s",
        "c = 3 × 10¹⁰ m/s",
        "c = 3 × 10⁵ m/s"
      ],
      answer: 0,
      explanation: "The speed of light/electromagnetic waves in vacuum is c ≈ 3 × 10⁸ m/s.",
      chapter: "Waves"
    },
    {
      id: "testmoz-phys-47",
      question: "Which one of the following quantities cannot be used as a unit of potential energy",
      options: [
        "Watt sec",
        "Kgm^2/s^2",
        "gcm/s^2",
        "ft lb"
      ],
      answer: 2,
      chapter: "WorkEnergy"
    },
    {
      id: "testmoz-phys-42",
      question: "Electron volt is the unit of",
      options: [
        "Energy",
        "Charge",
        "Current",
        "Electric potential"
      ],
      answer: 0,
      chapter: "Electrostatics"
    },
    {
      id: "testmoz-phys-50",
      question: "At 30 centigrade and atmospheric pressure the volume of a given mass is 100 cm^3 pressure remaining same the volume will be doubled if the temperature becomes",
      options: [
        "15°C",
        "606°C",
        "60°C",
        "333°C"
      ],
      answer: 3,
      chapter: "Thermo"
    },
    {
      id: "uhs-phys-24-126",
      question: "The two dimensional motion under constant acceleration due to gravity is called",
      options: [
        "Circular motion",
        "Rotational motion",
        "Projectile motion",
        "Vibratory motion"
      ],
      answer: 2,
      explanation: "Projectile motion is two-dimensional motion operating under constant acceleration (gravity).",
      chapter: "ForceMotion"
    },
    {
      id: "testmoz-phys-16-rot",
      question: "Work done due to centripetal force for circular motion will be",
      options: [
        "Reduced",
        "Maximum",
        "Half",
        "Zero"
      ],
      answer: 3,
      chapter: "Rotational"
    },
    {
      id: "testmoz-phys-33",
      question: "In a common-base amplifier, the current gain alpha is always:",
      options: [
        "Greater than 1",
        "Less than 1",
        "Equal to 1",
        "Infinite"
      ],
      answer: 1,
      chapter: "Electronics"
    },
    {
      id: "bumhs-2025-phys-140",
      question: "If the capacitance in a purely capacitive AC circuit is doubled, the current will be:",
      options: [
        "Double",
        "Become half",
        "Remain same",
        "Decrease to the fourth"
      ],
      answer: 0,
      explanation: "Capacitive reactance is X_c = 1 / (2π f C). Doubling capacitance C halves the reactance X_c. Consequently, the current I = V / X_c doubles.",
      chapter: "AC"
    },
    {
      id: "testmoz-phys-16-em",
      question: "When a charged particle moves through a magnetic field it suffers change in",
      options: [
        "Direction",
        "Speed",
        "Energy",
        "No change"
      ],
      answer: 0,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-27",
      question: "To induce an EMF in a coil the linking magnetic flux",
      options: [
        "Must decreases",
        "Must increases",
        "Must remain constant",
        "Can either increases or decreases"
      ],
      answer: 3,
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-48",
      question: "The primary of an ideal Transformer his 100 turns in the secondary has 600 turns then",
      options: [
        "The power in the primary circuit is less than that and the secondary circuit",
        "The current in the two circuits are the same",
        "The voltages in the two circuits are same",
        "The primary current is 6 times the secondary current"
      ],
      answer: 3,
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-34",
      question: "Hot milk is shaking in a thermoplast whose lid is closed the temperature of milk will",
      options: [
        "Increase",
        "Decrease",
        "Is not effected",
        "Cannot be predicted"
      ],
      answer: 0,
      chapter: "Thermo"
    },
    {
      id: "szambu-2025-phys-139",
      question: "When two identical waves arrive in phase at same point in a region at the same time the resultant displacement is equal to:",
      options: [
        "Displacement of a single wave",
        "Difference of their displacements",
        "Sum of their displacements",
        "Product of their displacements"
      ],
      answer: 2,
      explanation: "Constructive interference occurs when waves arrive in phase, making resultant displacement equal to the algebraic sum of individual displacements.",
      chapter: "Waves"
    },
    {
      id: "testmoz-phys-11",
      question: "When a current conductor is placed in a magnetic field it moves from region of",
      options: [
        "Stronger to weak field",
        "Strong field if current is large",
        "Weak to strong field",
        "Weak to strong if current is large"
      ],
      answer: 0,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-50-mod",
      question: "Rest mass of photon is",
      options: [
        "Infinite",
        "Very small",
        "Very large",
        "Zero"
      ],
      answer: 3,
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-26",
      question: "Bohr's model of the atom successfully explained:",
      options: [
        "The spectrum of all atoms and molecules.",
        "The line spectrum of the hydrogen atom.",
        "The Zeeman effect (splitting of spectral lines in a magnetic field).",
        "The relative intensities of spectral lines."
      ],
      answer: 1,
      chapter: "AtomicSpectra"
    },
    {
      id: "uhs-phys-24-174",
      question: "If we have “N₀” number of any radioactive element then after a period of “n” half-lives the number of atoms left behind is",
      options: [
        "2ⁿ N₀",
        "(1/2)ⁿ N₀",
        "(1/2 N₀)ⁿ",
        "(2 N₀)ⁿ"
      ],
      answer: 1,
      explanation: "The standard decay formula after n half-lives is N = (1/2)ⁿ N₀.",
      chapter: "Nuclear"
    },
    {
      id: "kmu-mdcat-2025-phys-104",
      question: "Water flows steadily through a pipe that gradually narrows. At the wider end, the velocity of water is 3 m/s. Which statement is CORRECT about the pressure in the narrower end compared to the wider end?",
      options: [
        "Pressure is lower at the narrow end because velocity is higher",
        "Pressure is higher at the narrow end because velocity is higher",
        "Pressure is the same at both ends since flow is continuous",
        "Pressure is independent of velocity of water"
      ],
      answer: 0,
      explanation: "In the narrower section, fluid speed increases due to continuity, which leads to lower static pressure according to Bernoulli's principle.",
      chapter: "FluidDynamics"
    },
    {
      id: "bumhs-2025-phys-127",
      question: "If vector A = 2î + ĵ + 3k̂ is perpendicular to B = î + ĵ + xk̂ then x =",
      options: [
        "3",
        "-3",
        "1",
        "-1"
      ],
      answer: 3,
      explanation: "Perpendicular vectors have a dot product of zero: A · B = (2)(1) + (1)(1) + (3)(x) = 2 + 1 + 3x = 0 → 3x = -3 → x = -1.",
      chapter: "Vectors"
    },
    {
      id: "testmoz-phys-24",
      question: "In inelastic collision .... remains conserved .... but .... changes",
      options: [
        "KE and momentum",
        "Momentum and KE",
        "None",
        "Direction and momentum"
      ],
      answer: 1,
      chapter: "WorkEnergy"
    },
    {
      id: "testmoz-phys-4",
      question: "The angular velocity of a rotating wheel increases by 2 rev/s every minute. The angular acceleration in rad/s² of this wheel is",
      options: [
        "4π²",
        "1/30",
        "2π",
        "π/15"
      ],
      answer: 3,
      chapter: "Rotational"
    },
    {
      id: "testmoz-phys-13",
      question: "A state in which an excited atom can stay for a relatively long time (e.g., 10⁻³ s) is called a:",
      options: [
        "Ground state",
        "Excited state",
        "Ionized state",
        "Metastable state"
      ],
      answer: 3,
      chapter: "AtomicSpectra"
    },
    {
      id: "testmoz-phys-5",
      question: "When a p-n junction is forward biased, the width of the depletion region:",
      options: [
        "Increases",
        "Decreases",
        "Remains the same",
        "Becomes zero"
      ],
      answer: 1,
      chapter: "Electronics"
    },
    {
      id: "kmu-phys-24-156",
      question: "For metals, the temperature coefficient of resistance is:",
      options: [
        "Infinity",
        "Negative",
        "Positive",
        "Zero"
      ],
      answer: 2,
      explanation: "For metallic conductors, resistance increases as temperature rises due to increased lattice vibrations, giving a positive temperature coefficient.",
      chapter: "CurrentElectricity"
    },
    {
      id: "testmoz-phys-48-work",
      question: "The average power and instantaneous power become equal if work is done at",
      options: [
        "Any rate",
        "Uniform rate",
        "Variable rate",
        "High rate"
      ],
      answer: 1,
      chapter: "WorkEnergy"
    },
    {
      id: "siba-phy-24-147",
      question: "The process in which all the supplied heat is converted into work is called:",
      options: [
        "Isochoric",
        "Isobaric",
        "Adiabatic",
        "Isotropic",
        "Isothermal"
      ],
      answer: 4,
      explanation: "In an isothermal process, ΔT = 0, so ΔU = 0. According to Q = ΔU + W, Q = W, meaning all heat supplied is converted into work.",
      chapter: "Thermo"
    },
    {
      id: "siba-2025-phys-138",
      question: "The value of temperature co-efficient of a conductor is zero. This indicates that with the rise in temperature, resistance of conductor:",
      options: [
        "Increases",
        "Decreases",
        "Remain same",
        "Becomes zero"
      ],
      answer: 2,
      explanation: "When α = 0, ΔR = α R₀ ΔT = 0, meaning resistance remains constant with changes in temperature.",
      chapter: "CurrentElectricity"
    },
    {
      id: "testmoz-phys-6",
      question: "Half life period of Radium is 1600 years. Its average lifetime will be",
      options: [
        "3200 years",
        "4800 years",
        "2319 years",
        "4217 years"
      ],
      answer: 2,
      chapter: "Nuclear"
    },
];
    export const englishQuestions: Question[] = [
        // English MCQs
      {
      id: "eng-010",
      question: "The book was written by Rashid Khan. Identify the correct usage of voice.",
      options: [
        "Rashid Khan writes the book.",
        "Rashid Khan wrote the book.",
        "Rashid Khan written the book.",
        "Rashid Khan has write the book."
      ],
      answer: 1
    },
    {
      id: "eng-011",
      question: "What is the effect of using synonyms with different shades of meaning in satire?",
      options: [
        "To create a serious tone",
        "To highlight the absurdity or irony of a situation",
        "To confuse the reader",
        "To add complexity to the language"
      ],
      answer: 1
    },
    {
      id: "eng-012",
      question: "Antonym of HEGEMONY is:",
      options: [
        "lack of energy",
        "lack of precision",
        "lack of authority",
        "lack of confidence"
      ],
      answer: 2
    },
    {
      id: "eng-013",
      question: "All of the players forgot _______ jerseys.",
      options: ["his", "her", "there", "their"],
      answer: 3
    },
    {
      id: "eng-014",
      question: "Supply the correct antonym for the capitalized word: Your RECKLESS behavior is not acceptable. You have to be more _______.",
      options: ["careful", "happy", "hardworking", "kind"],
      answer: 0
    },
    {
      id: "eng-015",
      question: "Which literary device involves using words or phrases that convey the opposite of their literal meaning?",
      options: ["Irony", "Parody", "Satire", "Sarcasm"],
      answer: 0
    },
    {
      id: "eng-016",
      question: "Choose the CORRECT sentence",
      options: [
        "“The unexamined life”, said Socrates, “is unfit to be lived by man.”",
        "The Inexamined life, said Socrates, “Is unfit to be lived by man”",
        "“The unexamined life said Socrates”, is disfit to be lived by man.",
        "“The disexamined life” said Socrates is unfit to be lived by man."
      ],
      answer: 0
    },
    {
      id: "eng-017",
      question: "“Revenge is a kind of wild justice.” The sentence illustrates the use of:",
      options: ["Personification", "Pun", "Metaphor", "Hyperbole"],
      answer: 2
    },
    {
      id: "eng-018",
      question: "Order is the law of civilization as chaos is the law of the ______.",
      options: ["City", "Metropolis", "Universe", "Wilderness"],
      answer: 3
    },
];

    export const logicalQuestions: Question[] = [
        // Logical Reasoning MCQs

    {
      id: "bumhs-2025-174",
      question: "The age of a man is twice that of his daughter. If the man is 36 years old, what was the daughter’s age 4 years ago?",
      options: [
        "14 years",
        "18 years",
        "20 years",
        "10 years"
      ],
      answer: 0
    },
    {
      id: "iba-sindh-2025-173",
      question: "Which number comes in the missing place?\n\n120, 119, 117, 114, 110, ___",
      options: [
        "95",
        "100",
        "105",
        "107"
      ],
      answer: 2
    },
    {
      id: "kmu-2025-173",
      question: "A library has 4 books on Shelf A, and 8 books on Shelf B. Some books are removed from Shelf B such that both shelves now have exactly the same number of books. How many books were removed from Shelf B?",
      options: [
        "2 books",
        "3 books",
        "4 books",
        "6 books"
      ],
      answer: 2
    },
    {
      id: "szabmu-2025-174",
      question: "Which number comes in the missing place?\n\n1, 3, 7, 15, 31, ____",
      options: [
        "61",
        "63",
        "65",
        "67"
      ],
      answer: 1
    },
    {
      id: "uhs-2025-173",
      question: "All daffodils are plants. All plants are living things. Some living things are real.\n\nConclusions:\nI. All daffodils are living things.\nII. Some living things are flowers.\nIII. All daffodils are real.\n\nWhich conclusions follow?",
      options: [
        "Only I",
        "Only I and II",
        "Only II and III",
        "All follow"
      ],
      answer: 0
    },
    {
      id: "iba-duhs-2024-198",
      question: "Read the two statements given and select the correct option:\n\nA. Advances in cancer chemotherapy have made more drugs available today.\nB. A large number of cancer patients now have a better outcome.",
      options: [
        "Both statements A and B are effects of some common cause.",
        "Statement A is the cause and statement B is the effect.",
        "Both statements A and B are effects of independent causes.",
        "Statement B is the cause and statement A is the effect.",
        "Both statements A and B are independent causes."
      ],
      answer: 1
    },
    {
      id: "kmu-2024-196",
      question: "All omnivores are herbivores. No herbivores are carnivores. Some carnivores are humans. Which of the following conclusions are TRUE?\n\nCONCLUSIONS:\nI. Some humans are carnivores.\nII. No carnivores are omnivores.\nIII. Some omnivores are carnivores.",
      options: [
        "I and II",
        "I and III",
        "II and III",
        "III"
      ],
      answer: 0
    },
    {
      id: "szabmu-2024-196",
      question: "What are the missing alphabets in the sequence EZFA, GBHY, IXJC, ____?",
      options: [
        "KDLW",
        "KLDW",
        "KWLD",
        "LDKW"
      ],
      answer: 0
    },
    {
      id: "bumhs-2024-195",
      question: "Statements:\nI. The university authority has instructed all the colleges under its jurisdiction to ban use of all phones inside the college premises.\nII. Majority of the teachers of the colleges signed a joint petition to the university complaining the disturbances caused by cell phone ring-tones inside the classrooms.\n\nWhich of the following is correct?",
      options: [
        "Statement I is the cause and statement II is its effect",
        "Statement II is the cause and statement I is its effect",
        "Both the statements I and II are independent causes",
        "Both the statements I and II are effects of independent causes"
      ],
      answer: 1
    }
  ];