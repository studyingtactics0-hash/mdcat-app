export type MockQuestion = {
    id: string;
    question: string;
    options: string[];
    answer: number;
  };
  
  /* =========================================================
     BIOLOGY — 81 QUESTIONS
     ========================================================= */
  
  export const biologyQuestions: MockQuestion[] = [
    {
      id: "mock1-bio-001",
      question: "The hormonal factor produced by parietal cells is:",
      options: ["Gastrin", "Intrinsic factor", "Secretin", "Cholecystokinin"],
      answer: 1,
    },
    {
      id: "mock1-bio-002",
      question: "Lipid-based hormones are derived from:",
      options: ["Amino acids", "Cholesterol", "Proteins", "Carbohydrates"],
      answer: 1,
    },
    {
      id: "mock1-bio-003",
      question: "In a reflex arc, the sensory neuron carries impulses:",
      options: [
        "From receptor to CNS",
        "From CNS to effector",
        "Between interneurons",
        "From effector to receptor",
      ],
      answer: 0,
    },
    {
      id: "mock1-bio-004",
      question: "The process of conversion of mRNA into protein is called:",
      options: ["Transcription", "Translation", "Replication", "Transduction"],
      answer: 1,
    },
    {
      id: "mock1-bio-005",
      question: "Under the influence of ADH, the kidney produces:",
      options: ["Dilute urine", "Concentrated urine", "No urine", "Isotonic urine"],
      answer: 1,
    },
    {
      id: "mock1-bio-006",
      question: "Islets of Langerhans are present in:",
      options: ["Liver", "Pancreas", "Kidney", "Spleen"],
      answer: 1,
    },
    {
      id: "mock1-bio-007",
      question: "Which of the following is a steroid hormone?",
      options: ["Insulin", "Thyroxine", "Estrogen", "Adrenaline"],
      answer: 2,
    },
    {
      id: "mock1-bio-008",
      question: "Crossing over occurs during:",
      options: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase II"],
      answer: 0,
    },
    {
      id: "mock1-bio-009",
      question: "The functional unit of kidney is:",
      options: ["Neuron", "Nephron", "Alveolus", "Osteon"],
      answer: 1,
    },
    {
      id: "mock1-bio-010",
      question: "DNA base pairing is:",
      options: ["A-G and C-T", "A-T and G-C", "A-C and G-T", "A-U and G-C"],
      answer: 1,
    },
    {
      id: "mock1-bio-011",
      question: "Enzyme activity is maximum at:",
      options: [
        "Very high temperature",
        "Optimum temperature",
        "Freezing point",
        "Boiling point",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-012",
      question: "Lamarckism is based on:",
      options: [
        "Natural selection",
        "Inheritance of acquired characters",
        "Mutation",
        "Genetic drift",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-013",
      question: "Sarcomere is the functional unit of:",
      options: ["Nerve", "Muscle", "Bone", "Cartilage"],
      answer: 1,
    },
    {
      id: "mock1-bio-014",
      question: "X-linked disorders are more common in:",
      options: ["Females", "Males", "Both equally", "Children only"],
      answer: 1,
    },
    {
      id: "mock1-bio-015",
      question: "Antibodies are produced by:",
      options: ["T-lymphocytes", "B-lymphocytes", "Macrophages", "Neutrophils"],
      answer: 1,
    },
    {
      id: "mock1-bio-016",
      question: "Nitrogenous waste in humans is mainly:",
      options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
      answer: 1,
    },
    {
      id: "mock1-bio-017",
      question: "Which hormone is secreted by posterior pituitary?",
      options: ["Growth hormone", "ADH", "TSH", "ACTH"],
      answer: 1,
    },
    {
      id: "mock1-bio-018",
      question: "The site of protein synthesis is:",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
      answer: 2,
    },
    {
      id: "mock1-bio-019",
      question: "Mendel's law of independent assortment is applicable when genes are:",
      options: [
        "Linked",
        "On different chromosomes",
        "Allelic",
        "On same chromosome",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-020",
      question: "Which of the following is a non-membranous organelle?",
      options: ["Mitochondria", "Ribosome", "Lysosome", "Golgi complex"],
      answer: 1,
    },
    {
      id: "mock1-bio-021",
      question: "The process of formation of gametes is called:",
      options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
      answer: 1,
    },
    {
      id: "mock1-bio-022",
      question: "Haemophilia is an example of:",
      options: [
        "Autosomal dominant",
        "Autosomal recessive",
        "X-linked recessive",
        "Y-linked",
      ],
      answer: 2,
    },
    {
      id: "mock1-bio-023",
      question: "Which vitamin is synthesized by skin?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
      answer: 2,
    },
    {
      id: "mock1-bio-024",
      question: "The pacemaker of the heart is:",
      options: ["AV node", "SA node", "Bundle of His", "Purkinje fibres"],
      answer: 1,
    },
    {
      id: "mock1-bio-025",
      question: "Photosynthesis occurs in:",
      options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
      answer: 1,
    },
    {
      id: "mock1-bio-026",
      question: "Which blood group is universal donor?",
      options: ["A", "B", "AB", "O"],
      answer: 3,
    },
    {
      id: "mock1-bio-027",
      question: "The basic unit of classification is:",
      options: ["Genus", "Species", "Family", "Order"],
      answer: 1,
    },
    {
      id: "mock1-bio-028",
      question: "Insulin is secreted by:",
      options: ["Alpha cells", "Beta cells", "Delta cells", "Acinar cells"],
      answer: 1,
    },
    {
      id: "mock1-bio-029",
      question: "Which of the following is a connective tissue?",
      options: ["Muscle", "Blood", "Nerve", "Epithelium"],
      answer: 1,
    },
    {
      id: "mock1-bio-030",
      question: "The largest organ of the human body is:",
      options: ["Liver", "Brain", "Skin", "Heart"],
      answer: 2,
    },
    {
      id: "mock1-bio-031",
      question: "Double fertilization is characteristic of:",
      options: ["Gymnosperms", "Angiosperms", "Pteridophytes", "Bryophytes"],
      answer: 1,
    },
    {
      id: "mock1-bio-032",
      question: "Which enzyme digests proteins in stomach?",
      options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
      answer: 2,
    },
    {
      id: "mock1-bio-033",
      question: "The respiratory pigment in human blood is:",
      options: ["Haemocyanin", "Haemoglobin", "Myoglobin", "Chlorocruorin"],
      answer: 1,
    },
    {
      id: "mock1-bio-034",
      question: "Which of the following is a vestigial organ in humans?",
      options: ["Heart", "Appendix", "Liver", "Kidney"],
      answer: 1,
    },
    {
      id: "mock1-bio-035",
      question: "The theory of natural selection was proposed by:",
      options: ["Lamarck", "Darwin", "Mendel", "de Vries"],
      answer: 1,
    },
    {
      id: "mock1-bio-036",
      question: "Which structure is responsible for maintaining balance in humans?",
      options: [
        "Cochlea",
        "Semicircular canals",
        "Tympanic membrane",
        "Eustachian tube",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-037",
      question: "The number of chromosomes in human somatic cells is:",
      options: ["23", "46", "22", "44"],
      answer: 1,
    },
    {
      id: "mock1-bio-038",
      question: "Which of the following is an example of active transport?",
      options: [
        "Diffusion",
        "Osmosis",
        "Sodium-potassium pump",
        "Facilitated diffusion",
      ],
      answer: 2,
    },
    {
      id: "mock1-bio-039",
      question: "The power house of the cell is:",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      answer: 1,
    },
    {
      id: "mock1-bio-040",
      question: "Which hormone regulates blood calcium level?",
      options: ["Insulin", "Parathyroid hormone", "Thyroxine", "Adrenaline"],
      answer: 1,
    },
    {
      id: "mock1-bio-041",
      question: "The process of cell division in somatic cells is:",
      options: ["Meiosis", "Mitosis", "Amitosis", "Binary fission"],
      answer: 1,
    },
    {
      id: "mock1-bio-042",
      question: "Which of the following is a water-soluble vitamin?",
      options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin E"],
      answer: 2,
    },
    {
      id: "mock1-bio-043",
      question: "The functional unit of lung is:",
      options: ["Bronchiole", "Alveolus", "Trachea", "Bronchus"],
      answer: 1,
    },
    {
      id: "mock1-bio-044",
      question: "Which blood cells are involved in clotting?",
      options: ["RBC", "WBC", "Platelets", "Lymphocytes"],
      answer: 2,
    },
    {
      id: "mock1-bio-045",
      question: "The site of fertilization in human female is:",
      options: ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
      answer: 2,
    },
    {
      id: "mock1-bio-046",
      question: "Which of the following is a diploid structure?",
      options: ["Sperm", "Egg", "Zygote", "Pollen"],
      answer: 2,
    },
    {
      id: "mock1-bio-047",
      question: "The disease caused by deficiency of insulin is:",
      options: ["Goitre", "Diabetes mellitus", "Scurvy", "Rickets"],
      answer: 1,
    },
    {
      id: "mock1-bio-048",
      question: "Which organelle contains digestive enzymes?",
      options: ["Mitochondria", "Lysosome", "Ribosome", "Golgi apparatus"],
      answer: 1,
    },
    {
      id: "mock1-bio-049",
      question: "The process of loss of water from leaves is called:",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Guttation"],
      answer: 1,
    },
    {
      id: "mock1-bio-050",
      question: "Which of the following is a parasitic protozoan?",
      options: ["Amoeba", "Plasmodium", "Paramecium", "Euglena"],
      answer: 1,
    },
    {
      id: "mock1-bio-051",
      question: "The backbone of DNA is made up of:",
      options: [
        "Sugar and phosphate",
        "Nitrogenous bases",
        "Amino acids",
        "Fatty acids",
      ],
      answer: 0,
    },
    {
      id: "mock1-bio-052",
      question: "Which of the following is an example of homologous organs?",
      options: [
        "Wings of bat and insect",
        "Forelimbs of man and whale",
        "Wings of bird and butterfly",
        "Eyes of octopus and mammal",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-053",
      question: "The hormone that stimulates milk production is:",
      options: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
      answer: 1,
    },
    {
      id: "mock1-bio-054",
      question: "Which of the following is a non-renewable resource?",
      options: [
        "Solar energy",
        "Wind energy",
        "Fossil fuels",
        "Hydroelectricity",
      ],
      answer: 2,
    },
    {
      id: "mock1-bio-055",
      question: "The outermost layer of skin is:",
      options: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"],
      answer: 1,
    },
    {
      id: "mock1-bio-056",
      question: "Which of the following is a viral disease?",
      options: ["Tuberculosis", "Malaria", "Influenza", "Cholera"],
      answer: 2,
    },
    {
      id: "mock1-bio-057",
      question: "The process of conversion of glucose into pyruvate is called:",
      options: [
        "Krebs cycle",
        "Glycolysis",
        "Electron transport chain",
        "Fermentation",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-058",
      question: "Which of the following is a prokaryotic organism?",
      options: ["Amoeba", "Bacteria", "Yeast", "Paramecium"],
      answer: 1,
    },
    {
      id: "mock1-bio-059",
      question: "The valve present between left atrium and left ventricle is:",
      options: ["Tricuspid", "Bicuspid", "Semilunar", "Pulmonary"],
      answer: 1,
    },
    {
      id: "mock1-bio-060",
      question: "Which of the following is an example of passive immunity?",
      options: ["Vaccination", "Colostrum", "Recovery from disease", "Booster dose"],
      answer: 1,
    },
    {
      id: "mock1-bio-061",
      question:
        "The number of ATP molecules produced from one glucose in aerobic respiration is approximately:",
      options: ["2", "8", "36–38", "18"],
      answer: 2,
    },
    {
      id: "mock1-bio-062",
      question: "Which of the following is a plant hormone?",
      options: ["Insulin", "Auxin", "Thyroxine", "Adrenaline"],
      answer: 1,
    },
    {
      id: "mock1-bio-063",
      question: "The structure that connects muscle to bone is:",
      options: ["Ligament", "Tendon", "Cartilage", "Joint"],
      answer: 1,
    },
    {
      id: "mock1-bio-064",
      question: "Which of the following is a sexually transmitted disease?",
      options: ["Tuberculosis", "Syphilis", "Malaria", "Typhoid"],
      answer: 1,
    },
    {
      id: "mock1-bio-065",
      question: "The process of synthesis of RNA from DNA is called:",
      options: ["Translation", "Transcription", "Replication", "Transduction"],
      answer: 1,
    },
    {
      id: "mock1-bio-066",
      question: "Which of the following is a cold-blooded animal?",
      options: ["Man", "Bird", "Fish", "Whale"],
      answer: 2,
    },
    {
      id: "mock1-bio-067",
      question: "The largest gland in the human body is:",
      options: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
      answer: 1,
    },
    {
      id: "mock1-bio-068",
      question: "Which of the following is an example of discontinuous variation?",
      options: ["Height", "Weight", "Blood group", "Skin colour"],
      answer: 2,
    },
    {
      id: "mock1-bio-069",
      question: "The fluid present in the joint cavity is:",
      options: [
        "Cerebrospinal fluid",
        "Synovial fluid",
        "Lymph",
        "Plasma",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-070",
      question: "Which of the following is a deficiency disease?",
      options: ["Malaria", "Scurvy", "Tuberculosis", "Influenza"],
      answer: 1,
    },
    {
      id: "mock1-bio-071",
      question: "The process of formation of solid waste in plants is called:",
      options: ["Excretion", "Secretion", "Transpiration", "Guttation"],
      answer: 0,
    },
    {
      id: "mock1-bio-072",
      question: "Which of the following is a monocot plant?",
      options: ["Mango", "Wheat", "Pea", "Rose"],
      answer: 1,
    },
    {
      id: "mock1-bio-073",
      question: "The part of brain that controls balance is:",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
      answer: 1,
    },
    {
      id: "mock1-bio-074",
      question: "Which of the following is an example of mutualism?",
      options: ["Lice on human", "Cuscuta on plant", "Lichen", "Mosquito and human"],
      answer: 2,
    },
    {
      id: "mock1-bio-075",
      question: "The pigment responsible for yellow colour of urine is:",
      options: ["Haemoglobin", "Bilirubin", "Melanin", "Carotene"],
      answer: 1,
    },
    {
      id: "mock1-bio-076",
      question: "Which of the following is a nitrogen-fixing bacterium?",
      options: ["E. coli", "Rhizobium", "Lactobacillus", "Streptococcus"],
      answer: 1,
    },
    {
      id: "mock1-bio-077",
      question: "The process of breakdown of food in the presence of oxygen is called:",
      options: [
        "Anaerobic respiration",
        "Aerobic respiration",
        "Fermentation",
        "Glycolysis",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-078",
      question: "Which of the following is a male reproductive hormone?",
      options: ["Estrogen", "Progesterone", "Testosterone", "Prolactin"],
      answer: 2,
    },
    {
      id: "mock1-bio-079",
      question: "The smallest blood vessels are:",
      options: ["Arteries", "Veins", "Capillaries", "Arterioles"],
      answer: 2,
    },
    {
      id: "mock1-bio-080",
      question: "Which of the following is an example of analogous organs?",
      options: [
        "Forelimbs of man and bat",
        "Wings of bird and insect",
        "Heart of man and fish",
        "Eyes of man and octopus",
      ],
      answer: 1,
    },
    {
      id: "mock1-bio-081",
      question: "The disease caused by deficiency of iodine is:",
      options: ["Scurvy", "Goitre", "Rickets", "Beriberi"],
      answer: 1,
    },
  ];
  
  
  /* =========================================================
     CHEMISTRY — 45 QUESTIONS
     ========================================================= */
  
  export const chemistryQuestions: MockQuestion[] = [
    {
      id: "mock1-chem-082",
      question: "Which of the following is an electrolytic cell process?",
      options: [
        "Anode is positive",
        "Cathode is positive",
        "Electrons flow from cathode to anode",
        "Oxidation occurs at cathode",
      ],
      answer: 0,
    },
    {
      id: "mock1-chem-083",
      question: "Carboxylic acids can be reduced to alcohols by:",
      options: ["LiAlH₄", "NaBH₄", "H₂/Ni", "Zn/HCl"],
      answer: 0,
    },
    {
      id: "mock1-chem-084",
      question: "Tartaric acid shows which type of isomerism?",
      options: ["Geometrical", "Optical", "Structural", "Conformational"],
      answer: 1,
    },
    {
      id: "mock1-chem-085",
      question: "The dipole moment of CO₂ is zero because:",
      options: ["It is linear", "It is polar", "It has lone pairs", "It is tetrahedral"],
      answer: 0,
    },
    {
      id: "mock1-chem-086",
      question: "The unit of rate constant for a first-order reaction is:",
      options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻¹ L s⁻¹"],
      answer: 1,
    },
    {
      id: "mock1-chem-087",
      question: "Which of the following is a state function?",
      options: ["Heat", "Work", "Enthalpy", "Distance"],
      answer: 2,
    },
    {
      id: "mock1-chem-088",
      question: "Formic acid on heating with conc. H₂SO₄ gives:",
      options: ["CO", "CO₂", "H₂", "H₂O"],
      answer: 0,
    },
    {
      id: "mock1-chem-089",
      question: "The pH of a neutral solution at 25°C is:",
      options: ["0", "7", "14", "1"],
      answer: 1,
    },
    {
      id: "mock1-chem-090",
      question: "Which of the following has the highest boiling point?",
      options: ["HF", "HCl", "HBr", "HI"],
      answer: 0,
    },
    {
      id: "mock1-chem-091",
      question: "The hybridization of carbon in ethyne is:",
      options: ["sp", "sp²", "sp³", "dsp²"],
      answer: 0,
    },
    {
      id: "mock1-chem-092",
      question: "Which of the following is an example of addition polymer?",
      options: ["Nylon", "Polyester", "Polyethene", "Bakelite"],
      answer: 2,
    },
    {
      id: "mock1-chem-093",
      question: "The oxidation number of Cr in K₂Cr₂O₇ is:",
      options: ["+3", "+6", "+2", "+7"],
      answer: 1,
    },
    {
      id: "mock1-chem-094",
      question: "Which of the following is a Lewis acid?",
      options: ["NH₃", "BF₃", "H₂O", "OH⁻"],
      answer: 1,
    },
    {
      id: "mock1-chem-095",
      question: "The shape of NH₃ molecule is:",
      options: ["Trigonal planar", "Tetrahedral", "Pyramidal", "Linear"],
      answer: 2,
    },
    {
      id: "mock1-chem-096",
      question: "Which of the following is the strongest acid?",
      options: ["HF", "HCl", "HBr", "HI"],
      answer: 3,
    },
    {
      id: "mock1-chem-097",
      question: "The number of sigma bonds in ethene is:",
      options: ["4", "5", "6", "3"],
      answer: 1,
    },
    {
      id: "mock1-chem-098",
      question: "Which of the following is used in the Haber process as catalyst?",
      options: ["Pt", "Fe", "Ni", "V₂O₅"],
      answer: 1,
    },
    {
      id: "mock1-chem-099",
      question: "The IUPAC name of CH₃COOH is:",
      options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Formic acid"],
      answer: 1,
    },
    {
      id: "mock1-chem-100",
      question: "Which of the following shows hydrogen bonding?",
      options: ["CH₄", "H₂O", "HCl", "H₂S"],
      answer: 1,
    },
    {
      id: "mock1-chem-101",
      question: "The molecular formula of benzene is:",
      options: ["C₆H₆", "C₆H₁₂", "C₆H₁₄", "C₆H₁₀"],
      answer: 0,
    },
    {
      id: "mock1-chem-102",
      question: "Which of the following is an oxidizing agent?",
      options: ["H₂", "CO", "KMnO₄", "Na"],
      answer: 2,
    },
    {
      id: "mock1-chem-103",
      question: "The gas evolved when zinc reacts with dilute HCl is:",
      options: ["O₂", "H₂", "Cl₂", "CO₂"],
      answer: 1,
    },
    {
      id: "mock1-chem-104",
      question: "Which of the following is a primary alcohol?",
      options: ["CH₃OH", "(CH₃)₂CHOH", "(CH₃)₃COH", "C₆H₅OH"],
      answer: 0,
    },
    {
      id: "mock1-chem-105",
      question: "The coordination number of Na⁺ in NaCl is:",
      options: ["4", "6", "8", "12"],
      answer: 1,
    },
    {
      id: "mock1-chem-106",
      question: "Which of the following is an amphoteric oxide?",
      options: ["Na₂O", "MgO", "Al₂O₃", "SO₂"],
      answer: 2,
    },
    {
      id: "mock1-chem-107",
      question: "The bond angle in water molecule is approximately:",
      options: ["109.5°", "104.5°", "120°", "180°"],
      answer: 1,
    },
    {
      id: "mock1-chem-108",
      question: "Which of the following is used for the purification of water?",
      options: ["Cl₂", "O₂", "N₂", "H₂"],
      answer: 0,
    },
    {
      id: "mock1-chem-109",
      question: "The monomer of PVC is:",
      options: ["Ethene", "Vinyl chloride", "Propene", "Styrene"],
      answer: 1,
    },
    {
      id: "mock1-chem-110",
      question: "Which of the following has the highest electronegativity?",
      options: ["F", "Cl", "Br", "I"],
      answer: 0,
    },
    {
      id: "mock1-chem-111",
      question: "The product formed when ethene reacts with Br₂ is:",
      options: [
        "1,2-dibromoethane",
        "Bromoethane",
        "1,1-dibromoethane",
        "Ethane",
      ],
      answer: 0,
    },
    {
      id: "mock1-chem-112",
      question: "Which of the following is a buffer solution?",
      options: [
        "HCl + NaCl",
        "CH₃COOH + CH₃COONa",
        "NaOH + NaCl",
        "H₂SO₄ + Na₂SO₄",
      ],
      answer: 1,
    },
    {
      id: "mock1-chem-113",
      question: "The oxidation state of oxygen in OF₂ is:",
      options: ["-2", "+2", "-1", "+1"],
      answer: 1,
    },
    {
      id: "mock1-chem-114",
      question: "Which of the following is the correct order of acidic strength?",
      options: [
        "HF > HCl > HBr > HI",
        "HI > HBr > HCl > HF",
        "HCl > HF > HBr > HI",
        "HBr > HI > HCl > HF",
      ],
      answer: 1,
    },
    {
      id: "mock1-chem-115",
      question: "The number of unpaired electrons in Fe³⁺ is:",
      options: ["3", "4", "5", "6"],
      answer: 2,
    },
    {
      id: "mock1-chem-116",
      question: "Which of the following is used as an antifreeze?",
      options: ["Methanol", "Ethylene glycol", "Ethanol", "Glycerol"],
      answer: 1,
    },
    {
      id: "mock1-chem-117",
      question: "The shape of SF₆ molecule is:",
      options: [
        "Tetrahedral",
        "Octahedral",
        "Trigonal bipyramidal",
        "Square planar",
      ],
      answer: 1,
    },
    {
      id: "mock1-chem-118",
      question: "Which of the following is a greenhouse gas?",
      options: ["N₂", "O₂", "CO₂", "Ar"],
      answer: 2,
    },
    {
      id: "mock1-chem-119",
      question: "The reagent used to distinguish aldehydes from ketones is:",
      options: [
        "Tollen’s reagent",
        "Lucas reagent",
        "Fehling’s solution",
        "Both A and C",
      ],
      answer: 3,
    },
    {
      id: "mock1-chem-120",
      question: "Which of the following has the highest ionization energy?",
      options: ["Li", "Na", "K", "Cs"],
      answer: 0,
    },
    {
      id: "mock1-chem-121",
      question: "The catalyst used in Contact process is:",
      options: ["Fe", "V₂O₅", "Ni", "Pt"],
      answer: 1,
    },
    {
      id: "mock1-chem-122",
      question: "Which of the following is an example of nucleophilic substitution?",
      options: [
        "CH₃Cl + OH⁻ → CH₃OH + Cl⁻",
        "C₂H₄ + Br₂ → C₂H₄Br₂",
        "C₆H₆ + Cl₂ → C₆H₅Cl + HCl",
        "CH₄ + Cl₂ → CH₃Cl + HCl",
      ],
      answer: 0,
    },
    {
      id: "mock1-chem-123",
      question: "The pH of 0.001 M HCl is:",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      id: "mock1-chem-124",
      question: "Which of the following is a secondary amine?",
      options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "C₆H₅NH₂"],
      answer: 1,
    },
    {
      id: "mock1-chem-125",
      question: "The gas responsible for the depletion of ozone layer is:",
      options: ["CO₂", "CFCs", "CH₄", "N₂O"],
      answer: 1,
    },
    {
      id: "mock1-chem-126",
      question: "Which of the following is the correct electronic configuration of Cr²⁺?",
      options: [
        "[Ar] 3d⁴ 4s²",
        "[Ar] 3d⁵ 4s¹",
        "[Ar] 3d⁶ 4s⁰",
        "[Ar] 3d³ 4s³",
      ],
      answer: 0,
    },
  ];
  
  
  /* =========================================================
     PHYSICS — 36 QUESTIONS
     ========================================================= */
  
  export const physicsQuestions: MockQuestion[] = [
    {
      id: "mock1-phys-127",
      question:
        "According to Lenz’s Law, the direction of induced current in a conductor is such that it:",
      options: [
        "Opposes the change in magnetic flux",
        "Enhances the change in magnetic flux",
        "Is perpendicular to the magnetic field",
        "Is parallel to the magnetic field",
      ],
      answer: 0,
    },
    {
      id: "mock1-phys-128",
      question:
        "If voltage across a resistor is doubled then its resistance will become (temperature and physical state of the conductor remains constant).",
      options: ["Doubled", "Half", "Four times", "Remains constant"],
      answer: 3,
    },
    {
      id: "mock1-phys-129",
      question:
        "If vector A = 2î + ĵ + 3k̂ is perpendicular to B = î + ĵ + xk̂ then x =",
      options: ["3", "-3", "1", "-1"],
      answer: 1,
    },
    {
      id: "mock1-phys-130",
      question:
        "The angle formed at the center of a circle as a body moves from one position to another is:",
      options: [
        "Angular displacement",
        "Angular velocity",
        "Angular acceleration",
        "Angular momentum",
      ],
      answer: 0,
    },
    {
      id: "mock1-phys-131",
      question:
        "If p is the momentum of an object and m is its mass, then its kinetic energy is:",
      options: ["p/2m", "p²/2m", "1/2 pm²", "1/2 p²m"],
      answer: 1,
    },
    {
      id: "mock1-phys-132",
      question: "In a pure capacitance AC circuit, the current:",
      options: [
        "Lags behind the voltage by 90°",
        "Leads the voltage by 90°",
        "Is in phase with the voltage",
        "Leads the voltage by 45°",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-133",
      question:
        "A particle is moving in a uniform circular path whose projection is executing simple harmonic motion on horizontal diameter. The ratio of instantaneous velocity to the maximum velocity of the projection while passing through the center is:",
      options: ["1 : 1", "1 : 2", "2 : 1", "1 : 4"],
      answer: 0,
    },
    {
      id: "mock1-phys-134",
      question:
        "Two standing waves vibrate in fundamental mode in two organ pipes A (open) and B (closed) each of length 60 cm. The ratio of frequency of A to B is:",
      options: ["1 : 2", "1 : 1", "2 : 1", "2 : 3"],
      answer: 2,
    },
    {
      id: "mock1-phys-135",
      question:
        "During the drilling of a metal surface, the drill bit heats up. This heat comes from:",
      options: [
        "Vibration of the tool",
        "Work done against friction",
        "Flow of electric current",
        "Compression of air",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-136",
      question:
        "The electric field at a point due to two equal and opposite charges is 100 N/C. If the magnitude of each charge is doubled then the electric field at that point becomes:",
      options: ["50 N/C", "100 N/C", "200 N/C", "400 N/C"],
      answer: 2,
    },
    {
      id: "mock1-phys-137",
      question:
        "In a full-wave rectifier using two diodes, the diodes:",
      options: [
        "Simultaneously both half-cycles",
        "In alternate switching mode",
        "Only when both ends of transformer are positive",
        "Only in reverse bias condition",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-138",
      question:
        "The option that shows the conditions used by Laplace for connecting the velocity of sound is (medium used / thermodynamic process):",
      options: [
        "solid adiabatic",
        "liquids isobaric",
        "gas adiabatic",
        "gas isothermal",
      ],
      answer: 2,
    },
    {
      id: "mock1-phys-139",
      question:
        "The efficiency of an emf source becomes 50% when the load resistance is equal to:",
      options: [
        "internal resistance",
        "double the internal resistance",
        "half the internal resistance",
        "zero",
      ],
      answer: 0,
    },
    {
      id: "mock1-phys-140",
      question:
        "If 2J of work is done in moving two coulombs of charge from one point to another in an electric field, the potential difference between the points is:",
      options: ["1 J/C", "2 J/C", "3 J/C", "4 J/C"],
      answer: 0,
    },
    {
      id: "mock1-phys-141",
      question:
        "If a plastic sheet of relative permittivity 2.5 is inserted between two-point charges placed in vacuum, then the electrostatic force between them:",
      options: [
        "Increases by a factor of 2.5",
        "Decreases by a factor of 2.5",
        "Increases by a factor of 5",
        "Decreases by a factor of 5",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-142",
      question: "The energy (E) of a quantum is given by which equation?",
      options: ["E = mc²", "E = hf", "E = ½mv²", "E = qV"],
      answer: 1,
    },
    {
      id: "mock1-phys-143",
      question:
        "If different colored light beams have same total energy, which color beam will contain the smallest number of photons?",
      options: ["Violet", "Blue", "Green", "Red"],
      answer: 0,
    },
    {
      id: "mock1-phys-144",
      question:
        "Water flows through a horizontal pipe with area of 0.02 m² at 3m/s. The pipe narrows to 0.01 m². The velocity in the narrow section is:",
      options: ["0.5 m/s", "1.5 m/s", "3 m/s", "6 m/s"],
      answer: 3,
    },
    {
      id: "mock1-phys-145",
      question:
        "The motion of transverse waves involves particle’s vibration:",
      options: [
        "Along the wave direction",
        "Opposite to energy flow",
        "Perpendicular to wave propagation",
        "In random directions at every point",
      ],
      answer: 2,
    },
    {
      id: "mock1-phys-146",
      question:
        "After 3 half-lives, the remaining fraction of a radioactive sample is:",
      options: ["1/2", "1/4", "1/8", "1/16"],
      answer: 2,
    },
    {
      id: "mock1-phys-147",
      question:
        "A 5kg body falls from the height of 30m towards the ground. All its potential energy is converted into heat on impact. What is the heat energy produced?",
      options: ["1270J", "1570J", "1470J", "1370J"],
      answer: 2,
    },
    {
      id: "mock1-phys-148",
      question:
        "Water flows through a pipe of 0.02 m² with a speed 3 m/s. The pipe narrows to 0.01 m². The speed in narrower section is:",
      options: ["1.5 m/s", "3 m/s", "6 m/s", "9 m/s"],
      answer: 2,
    },
    {
      id: "mock1-phys-149",
      question:
        "The coulomb repulsive force between two protons inside a nucleus is much higher than the gravitational attractive force by a factor of approximately ______.",
      options: ["10³⁶", "10⁻³⁶", "10⁻¹⁵", "10¹²"],
      answer: 0,
    },
    {
      id: "mock1-phys-150",
      question: "In laminar flow of a fluid, its adjacent layers:",
      options: [
        "Resist each other",
        "Mix with each other",
        "Slide smoothly pass each other",
        "Produce turbulence",
      ],
      answer: 2,
    },
    {
      id: "mock1-phys-151",
      question:
        "If the horizontal range of a projectile becomes half of its maximum possible horizontal range, the probable angle of projection is:",
      options: ["15°", "30°", "45°", "60°"],
      answer: 0,
    },
    {
      id: "mock1-phys-152",
      question:
        "Two students, A and B, each carry a 20kg load to the top of a 10m high staircase. Student A takes 10sec, while student B takes 20sec. Which statement is CORRECT?",
      options: [
        "Student A does more work than student B",
        "Student B uses more power than student A",
        "Both students do the same amount of work, but student A uses more power",
        "Student A and B use the same power since they lifted the same weight",
      ],
      answer: 2,
    },
    {
      id: "mock1-phys-153",
      question:
        "A conducting ring is placed near a current-carrying coil. As the current in the coil increases, the induced current in the ring flows:",
      options: [
        "In the direction of magnetic field",
        "To increases the magnetic flux",
        "To oppose increasing magnetic flux",
        "Randomly without a definite direction",
      ],
      answer: 2,
    },
    {
      id: "mock1-phys-154",
      question:
        "A progressive wave differs from a stationary wave because in progressive wave:",
      options: [
        "particles remain at fixed nodes",
        "particles oscillate and transfer energy",
        "particles stay at anti-nodes",
        "particles move forward with the wave",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-155",
      question:
        "A body moving in a circle, half revolution in terms of radians is equivalent to:",
      options: ["π", "π/6", "π/2", "2π"],
      answer: 0,
    },
    {
      id: "mock1-phys-156",
      question:
        "In an ideal transformer, if the primary voltage is doubled and the turns ratio remains the same, what happens to the secondary current?",
      options: ["Doubles", "Halves", "Remains the same", "Becomes four times"],
      answer: 1,
    },
    {
      id: "mock1-phys-157",
      question:
        "A wheel of radius 0.4m has an angular acceleration of 6 rad/s². The linear acceleration is:",
      options: ["1.2 m/s²", "3.6 m/s²", "2.4 m/s²", "4.8 m/s²"],
      answer: 2,
    },
    {
      id: "mock1-phys-158",
      question:
        "In progressive waves, energy is transferred from one point to another through:",
      options: [
        "Circular motion of particles",
        "Oscillatory motion of particles",
        "Rotation of particles",
        "Translation of particles",
      ],
      answer: 1,
    },
    {
      id: "mock1-phys-159",
      question:
        "A particle is moving in a uniform circular path of radius 4cm with velocity 4cm/s. The maximum acceleration of its projection executing simple harmonic motion on horizontal diameter is:",
      options: ["4 cm/s²", "8 cm/s²", "12 cm/s²", "16 cm/s²"],
      answer: 0,
    },
    {
      id: "mock1-phys-160",
      question:
        "If A = (â + b̂) and B = 4(â + b̂), then the magnitude of A × B is:",
      options: [
        "4(a² + b²)",
        "4abk̂",
        "8(a + b)",
        "0",
      ],
      answer: 3,
    },
    {
      id: "mock1-phys-161",
      question: "An angular displacement of 90° is equal to:",
      options: [
        "One-fourth revolution",
        "One-third revolution",
        "One-half revolution",
        "One complete revolution",
      ],
      answer: 0,
    },
    {
      id: "mock1-phys-162",
      question:
        "If an object is moving anticlockwise along a circular path, in a horizontal plane on a page then the direction of its angular velocity is:",
      options: [
        "Tangential to any point on the circle",
        "Towards centre of the circle",
        "Perpendicular to the plane and pointing out of the page",
        "Perpendicular to the plane and pointing into the page",
      ],
      answer: 2,
    },
  ];
  
  
  /* =========================================================
     ENGLISH — 9 QUESTIONS
     ========================================================= */
  
  export const englishQuestions: MockQuestion[] = [
    {
      id: "mock1-eng-163",
      question:
        "In the sentence “Jogging every morning improves my mood,” what role does the gerund phrase play?",
      options: [
        "Object of a verb",
        "Direct object",
        "Predicate noun",
        "Subject",
      ],
      answer: 3,
    },
    {
      id: "mock1-eng-164",
      question:
        "The book was written by Rashid Khan. Identify the correct usage of voice.",
      options: [
        "Rashid Khan writes the book.",
        "Rashid Khan wrote the book.",
        "Rashid Khan written the book.",
        "Rashid Khan has write the book.",
      ],
      answer: 1,
    },
    {
      id: "mock1-eng-165",
      question:
        "Which sentence implies that it was unexpected that she took the test?",
      options: [
        "She even took the test.",
        "She took even the test.",
        "Even she took the test.",
        "She took the test even.",
      ],
      answer: 2,
    },
    {
      id: "mock1-eng-166",
      question: "Choose the word with incorrect spelling:",
      options: ["Immigrant", "Ancestors", "Montessori", "Pregmetic"],
      answer: 3,
    },
    {
      id: "mock1-eng-167",
      question:
        "Which of the following sentences has correct subject verb agreement?",
      options: [
        "The teacher give the students homework.",
        "The teacher gives the students homework.",
        "The teachers gives the student homework.",
        "The teachers given the student homework.",
      ],
      answer: 1,
    },
    {
      id: "mock1-eng-168",
      question:
        "“She studied hard; ________, she passed the exam with distinction.” Choose the CORRECT transitional device:",
      options: ["however", "for instance", "consequently", "in contrast"],
      answer: 2,
    },
    {
      id: "mock1-eng-169",
      question: "Identify the example of complex sentence.",
      options: [
        "I both thanked him and rewarded him.",
        "Life is what we make it.",
        "He owed his success to his father.",
        "Jumping up, he ran away.",
      ],
      answer: 1,
    },
    {
      id: "mock1-eng-170",
      question:
        "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of the underlined word.",
      options: ["Anxious", "Resilient", "Angry", "Confused"],
      answer: 1,
    },
    {
      id: "mock1-eng-171",
      question: "Identify the simile:",
      options: [
        "She trembled like a leaf in the wind.",
        "She was a statue, frozen in fear.",
        "She was drowning in doubt.",
        "Her thoughts were a whirlwind.",
      ],
      answer: 0,
    },
  ];
  
  
  /* =========================================================
     LOGICAL REASONING — 9 QUESTIONS
     ========================================================= */
  
  export const logicalQuestions: MockQuestion[] = [
    {
      id: "mock1-logical-172",
      question:
        "A medication dose starts at 100mg and halves each day. What will be the dose on day 4?",
      options: ["12.5mg", "25mg", "30mg", "50mg"],
      answer: 0,
    },
    {
      id: "mock1-logical-173",
      question:
        "An outbreak of a corona disease is reported in the city. What should be the first course of action?",
      options: [
        "Develop a vaccination plan.",
        "Conduct research on the disease.",
        "Implement quarantine measures.",
        "Inform the public by using all means.",
      ],
      answer: 2,
    },
    {
      id: "mock1-logical-174",
      question:
        "Prohibiting smoking in public areas will reduce the occurrence of lung disease. What assumption is present here?",
      options: [
        "Banning smoking has no impact on lung disease rates.",
        "Hence all people live in public areas therefore, banning smoking will eliminate lung disease.",
        "Smoking is the sole cause of lung disease.",
        "Smoking in public places plays a major role in causing lung disease.",
      ],
      answer: 3,
    },
    {
      id: "mock1-logical-175",
      question:
        "If A is mother of B, C is child of B, then what is the relationship between A and C?",
      options: ["Aunt", "Grandmother", "Sister", "Cousin"],
      answer: 1,
    },
    {
      id: "mock1-logical-176",
      question:
        "Find the next number: 5, 11, 23, 47, 95, ______?",
      options: ["190", "191", "192", "193"],
      answer: 1,
    },
    {
      id: "mock1-logical-177",
      question:
        "The age of a man is twice that of his daughter. If the man is 36 years old, what was the daughter’s age 4 years ago?",
      options: ["14 years", "18 years", "20 years", "10 years"],
      answer: 0,
    },
    {
      id: "mock1-logical-178",
      question:
        "A library has 4 books on Shelf A, and 8 books on Shelf B. Some books are removed from Shelf B such that both shelves now have exactly the same number of books. How many books were removed from Shelf B?",
      options: ["2 books", "3 books", "4 books", "6 books"],
      answer: 2,
    },
    {
      id: "mock1-logical-179",
      question:
        "In a row of students, a student is at 13th position from the left end and at 20th position from the right end. How many students are there in the row?",
      options: ["30", "31", "32", "33"],
      answer: 2,
    },
    {
      id: "mock1-logical-180",
      question:
        "Which number comes in the missing place? 1, 3, 7, 15, 31, _______",
      options: ["61", "63", "65", "67"],
      answer: 1,
    },
  ];
  
  
  /* =========================================================
     COMPLETE MOCK TEST
     ========================================================= */
  
  export const mockTest1Sections = {
    biology: biologyQuestions,
    chemistry: chemistryQuestions,
    physics: physicsQuestions,
    english: englishQuestions,
    logical: logicalQuestions,
  };
  
  export const mockTest1 = [
    ...biologyQuestions,
    ...chemistryQuestions,
    ...physicsQuestions,
    ...englishQuestions,
    ...logicalQuestions,
  ];