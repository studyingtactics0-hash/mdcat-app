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
      id: "testmoz-bio-13",
      question: "In coughing the air is forcibly blown larynx while in sneezing it is blown through",
      options: ["Mouth", "Nasal cavities", "Both of them", "None of these"],
      answer: 2,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "testmoz-bio-17",
      question: "Sundew is an example of",
      options: ["Autotrophic plant", "Parasitic plant", "Saprophytic plant", "Carnivorous plant"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "biomolecules-019",
      question: "How are the phospholipid molecules arranged in the plasma membrane?",
      options: ["Hydrophilic heads face inwards and hydrophobic tails face outwards", "Both hydrophilic heads face each other in the membrane", "Hydrophilic heads face outwards and hydrophobic tails face inwards", "Hydrophilic heads and hydrophobic tails are randomly distributed"],
      answer: 2,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "acellularLifeQuestions-33",
      question: "On the basis of morphological classification, influenza virus is an example of:",
      options: ["Helical capsid virus", "Polyhedral capsid virus", "Enveloped capsid virus", "Non-enveloped capsid virus"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "testmoz-bio-1",
      question: "The thick filament in a muscle are made up of",
      options: ["Hemoglobin", "Myosin", "Thin", "Myoglobin"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-34",
      question: "ABO blood grouping is controlled by gene I which has three allele and show dominance there are 6 genotypes how many phenotypes are possible",
      options: ["Six", "Four", "Three", "Five"],
      answer: 1,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-45",
      question: "The function of Goblet cells is to secret",
      options: ["Gastric", "Hydrochloric acid", "Pepsinogen", "Mucus"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-47",
      question: "During swallowing the food travels from oral cavity to the stomach by the way of oesophagus",
      options: ["Very quickly", "By anti peristalsis", "Pushed down by pharynx", "Moving due to peristalsis"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-48",
      question: "Earliest form of muscles is",
      options: ["Cardiac muscles", "Skeletal muscles", "Smooth muscles", "Striated"],
      answer: 2,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-9",
      question: "The absorption of oxygen from the atmosphere into the blood take place in the",
      options: ["Pulmonary artery", "Pulmonary vein", "Alveoli", "Trachea"],
      answer: 2,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "support-and-movement-044",
      question: "Which muscle type is under conscious control and is multinucleated?",
      options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Ciliary muscle"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-36",
      question: "Amount of lipid in plasma membrane is about",
      options: ["20-40%", "20-60%", "40-69%", "40-80%"],
      answer: 1,
      chapter: "biologyQuestions"
    },
    {
      id: "bio-reprod-38",
      question: "Which one of the following cells produces the first polar body during oogenesis in female reproductive system?",
      options: ["Oogonia", "Ovum", "Primary oocytes", "Secondary oocytes"],
      answer: 2,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-16",
      question: "When oxygen is not available to a muscle cell, NADH formed during glycolysis does not pass electrons to the electron transport system; instead, it passes hydrogen atoms to",
      options: ["Acetyl coenzyme A", "Fructose", "ADP", "Pyruvic acid"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-2",
      question: "The category of organisms which are able to make their own food is called",
      options: ["Heterotrophs", "Autotrophs", "Consumers", "Decomposers"],
      answer: 1,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-9-circ",
      question: "The upward movement of sap by the xylem is",
      options: ["Ascent of SAP", "Deplasmolysis", "Plasmolysis", "Gutation"],
      answer: 0,
      chapter: "circulationQuestions"
    },
    {
      id: "szabmu-2025-1",
      question: "According to the Lamarck theory of evolution, the organ that has not been used in several generations will:",
      options: ["Become strong", "Get amputated", "Disappear", "Become developed"],
      answer: 2,
      explanation: "Lamarck's 'Use and Disuse' concept suggests that unused organs gradually deteriorate and eventually disappear over generations.",
      chapter: "evolutionQuestions"
    },
    {
      id: "coord-036",
      question: "The state when a neuron is NOT conducting an impulse during resting membrane potential is called:",
      options: ["Polarized", "Depolarized", "Repolarized", "Hyperpolarized"],
      answer: 0,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-2-biom",
      question: "Which monosaccharide will form a pyranose ring in solution?",
      options: ["Fructose", "Glucose", "Ribose", "Deoxyribose"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-14",
      question: "At the junction between oesophagus and the stomach there is a special ring of muscles called",
      options: ["Cardiac Sphincter", "Illoleic sphincter", "Esophagus inspector", "Pyloric sphincter"],
      answer: 0,
      chapter: "nutritionQuestions"
    },
    {
      id: "uhs-2024-39",
      question: "The idea of inheritance of acquired characteristics was presented by:",
      options: ["Jean Baptist Lamarck", "Charles Darwin", "Thomas Malthus", "Alfred Wallace"],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck proposed that characteristics acquired during an organism's lifetime could be inherited by its offspring.",
      chapter: "evolutionQuestions"
    },
    {
      id: "enzymes-009",
      question: "A covalently bonded inorganic ion with protein part of an enzyme is termed as __.",
      options: ["Apoenzyme", "Coenzyme", "Holoenzyme", "Prosthetic group"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-33",
      question: "Which of the following is genetically dominant in man",
      options: ["Color blindness", "Hemophilia", "Rh positive", "Albinism"],
      answer: 1,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-13-inh",
      question: "A person with antigens be present of membrane RBCs and anti A antibodies in the plasma will have",
      options: ["Blood group A", "Blood group AB", "Blood group B", "Blood group O"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-10",
      question: "The passageways of the respiratory system are linked by mucus secreting cells",
      options: ["Tracheal cells", "Goblet cells", "Surfactants cells", "Pleural cells"],
      answer: 1,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "testmoz-bio-36-nutr",
      question: "Incomplete or imperfect digestion is known as which of the following",
      options: ["Obesity", "Anorexia nervous", "Bulimia nervous", "Dyspepsia"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-12",
      question: "Insufficient thyroxine in adults leads to",
      options: ["Dwarfism", "Myxedema", "Graves disease", "Cretinism"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "bio-reprod-24",
      question: "The other name for interstitial cells in male testes is:",
      options: ["Leydig cell", "Spermatogonia cell", "Sertoli cell", "Spermatocyte"],
      answer: 0,
      chapter: "reproductionQuestions"
    },
    {
      id: "support-and-movement-024",
      question: "Which muscle type is under conscious control and is multinucleated?",
      options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Visceral muscle"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-2-gas",
      question: "Highly vascularised skin service respiratory surface is",
      options: ["Frog", "Fish", "Snake", "Newly born mammal"],
      answer: 0,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "circulation-006",
      question: "Atrial walls are thinner as compared to ventricles because:",
      options: ["Atria are small in size", "Atria are present above the ventricles", "Atria has to force blood into the ventricles which lie very close to them", "Blood enters into the atria by osmosis"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-6",
      question: "Which one of the following glands is involved in the production of lymphocytes",
      options: ["Pineal", "Thymus", "Pituitary", "Adrenal"],
      answer: 1,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-22",
      question: "Virus free plant from virus infected plant can be obtained from",
      options: ["Meristem culture", "Tissue culture", "Phloem culture", "Stem cutting"],
      answer: 0,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "nums-2025-103",
      question: "Which of the following idea is a part of Lamarckism?",
      options: ["Use and disuse of organs", "Survival of the fittest", "Origin of species", "Variation"],
      answer: 0,
      explanation: "The principle of 'Use and Disuse of Organs' is a key component of Lamarck's evolutionary framework.",
      chapter: "evolutionQuestions"
    },
    {
      id: "uhs-2025-51",
      question: "The main idea in Darwin’s Theory of “Origin of species by natural selection” is:",
      options: ["Inheritance of acquired traits", "Use and disuse of organs", "Species never change", "Evolution occurs through gradual accumulation of adaptation through successive generations"],
      answer: 3,
      explanation: "Darwin proposed that adaptation accumulates gradually over successive generations due to natural selection acting on favorable variations.",
      chapter: "evolutionQuestions"
    },
    {
      id: "circulation-004",
      question: "During ventricular systole, which pressure changes occur?",
      options: ["Ventricular pressure rises above atrial and arterial pressure", "Atrial pressure rises above ventricular pressure", "Ventricular pressure falls below arterial pressures", "Ventricular pressure falls below atrial pressure"],
      answer: 0,
      chapter: "circulationQuestions"
    },
    {
      id: "homeostasis-kmu-012",
      question: "By nature, human excretory system is:",
      options: ["Ammoniotelic", "Uricotelic", "Ureotelic", "Aminotelic"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "homeostasis-uhs-001",
      question: "Kidneys perform their osmoregulatory role under the effect of Antidiuretic Hormone, which type of urine is produced in this situation?",
      options: ["Hypotonic urine with decreased volume", "Hypotonic urine with increased volume", "Hypertonic urine with decreased volume", "Hypertonic urine with increased volume"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "acellularLifeQuestions-19",
      question: "HIV belongs to which class of virus with respect to genome type?",
      options: ["Single stranded DNA viruses", "Double stranded RNA viruses", "ssRNA; template for DNA synthesis", "ssRNA; template for mRNA synthesis"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "bioenergetics-011",
      question: "Which one of the following is the end product in electron transport chain taking place at inner mitochondrial membrane?",
      options: ["Carbon dioxide", "NADPH", "Oxygen", "Water"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-31",
      question: "Now a days every new born gets regular shots of vaccine ........ for polio it contains for polio to make a child immune against this disease",
      options: ["Anticira", "Antibiotics", "Antibodies", "Antigens"],
      answer: 3,
      chapter: "immunityQuestions"
    },
    {
      id: "kmu-2024-58",
      question: "According to Lamarckism, the basis of evolution is:",
      options: ["Inheritance of acquired characteristics", "Mutation", "Natural selection", "Survival of the fittest"],
      answer: 0,
      explanation: "The core postulate of Lamarckism is the inheritance of acquired characteristics.",
      chapter: "evolutionQuestions"
    },
    {
      id: "biomolecules-058",
      question: "Water is commonly known as a universal solvent because:",
      options: ["It dissolves polar and ionic substances effectively", "It supports chemical reactions without reacting itself", "It has a high specific heat capacity", "It dissolves many substances due to its small molecule size"],
      answer: 0,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-33-circ",
      question: "Pulse is found in",
      options: ["Arteries", "Capillaries", "Veins", "Both a and b"],
      answer: 0,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-34-imm",
      question: "A vaccine contains",
      options: ["Antigens", "Macrophages", "Antibodies", "All a b c"],
      answer: 0,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-18",
      question: "At a temperature below the freezing point an enzyme is:",
      options: ["Unaffected", "Slightly inactive", "Inactivated", "Killed"],
      answer: 2,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-4",
      question: "During spermatogenesis each primary is permatocytes forms for similar sperms where is in oogenesis each primary Oocyte forms",
      options: ["Two similar secondary oocytes and two polar bodies", "3 similar large mature ova and one polar body", "Four large and similar ova", "One large ovum and two or three polar bodies"],
      answer: 3,
      chapter: "reproductionQuestions"
    },
    {
      id: "bio-reprod-14",
      question: "If a normal person marries with colour blind female what will be the possibility of normal male child?",
      options: ["0%", "25%", "50%", "75%"],
      answer: 0,
      chapter: "reproductionQuestions"
    },
    {
      id: "homeostasis-siba-010",
      question: "Which class of animals excrete ammonia as their primary nitrogenous waste?",
      options: ["Uricotelic", "Ureotelic", "Ammonotelic", "Urotelic"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-47-supp",
      question: "Each muscle fibres contain long Threads that extend along its entire length these are called as",
      options: ["Myosin", "Microtubules", "Myofibrils"],
      answer: 2,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "support-and-movement-047",
      question: "Which of the following is an example of a fibrous joint?",
      options: ["Shoulder joint", "Elbow joint", "Intervertebral discs", "Skull sutures"],
      answer: 3,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "bio-cell-041",
      question: "Chloroplast are membrane bound bodies containing:",
      options: ["Enzymes", "Cisternae", "Pigment", "Cristae"],
      answer: 2,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-29",
      question: "To combat the active infections of tetanus rabies and snakes which method of immunization is used",
      options: ["Active", "Active artificial", "Humoral", "Passive"],
      answer: 3,
      chapter: "immunityQuestions"
    },
    {
      id: "enzymes-013",
      question: "The induced fit model differs from the Lock and Key model because the enzyme in this model:",
      options: ["Has a rigid and fixed active site", "Changes shape to fit the substrate", "Is non-specific in its action", "Is denatured during reaction"],
      answer: 1,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-13-cell",
      question: "Important site for formation of glycoprotein and glycolipids is",
      options: ["Plastids", "Vaccoules", "Lysosomes", "Golgi complex"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-1-gas",
      question: "Function of respiratory passages cilia is to keep the Airways clear of",
      options: ["Carbon dioxide", "Oxygen", "Dust", "Carbon monoxide"],
      answer: 2,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "enzymes-018",
      question: "The term enzyme was coined by:",
      options: ["Darwin", "Lamarck", "Friedrich Wilhelm Kühne", "Mendel", "Thomas Cech"],
      answer: 2,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-41",
      question: "Inner membrane of mitochondria is very selective about what it allows to leave the organelle. One molecule that regularly passes out of a mitochondrion is",
      options: ["ATP", "Pyruvic acid", "Glucose", "Citric acid"],
      answer: 0,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "homeostasis-kmu-005",
      question: "Which type of nephron is responsible for the development of osmotic gradients in the renal medulla?",
      options: ["Glomerular", "Cortical", "Juxtamedullary", "Medullary"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "uhs-2024-35",
      question: "Identify the correct pair of vestigial organs:",
      options: ["Ear Muscles & Vermiform appendix", "Heart & Liver", "Ear Muscles & Liver", "Vermiform appendix & Heart"],
      answer: 0,
      explanation: "Ear muscles (auricular muscles) and the vermiform appendix in humans are classic examples of vestigial structures with reduced original function.",
      chapter: "evolutionQuestions"
    },
    {
      id: "bioenergetics-010",
      question: "Enzyme NADP reductase is responsible for:",
      options: ["Reducing NADP⁺", "Oxidizing NADP⁺", "Reducing Ferredoxin", "Reducing P700"],
      answer: 0,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-18-inh",
      question: "Genes are present on chromosomes this was experimentally proved by",
      options: ["Sutton", "Fleming", "Morgan", "Landsteiner"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "coord-015",
      question: "Sensory input from auditory and visual pathways, skin and within the body is received by ___ and distributed to ___:",
      options: ["Hypothalamus : Cerebellum", "Thalamus : Cerebrum", "Cerebrum : Rest of the brain", "Cerebellum : Rest of the brain"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "biomolecules-006",
      question: "Each DNA nucleotide differs from the others based on its:",
      options: ["Nitrogenous bases", "Phosphate group", "Sugar molecule", "Number of phosphorus atoms"],
      answer: 0,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-16-coord",
      question: "A male body tense more towards the form of immature female after",
      options: ["Spermiogenesis", "Deficiency of dopamine", "Castration", "Hypergoandism"],
      answer: 2,
      chapter: "coordinationQuestions"
    },
    {
      id: "biomolecules-054",
      question: "All of the following properties of water are associated with its capillary action, EXCEPT:",
      options: ["Adhesion", "Density", "Cohesion", "Surface tension"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "homeostasis-siba-021",
      question: "Overconsumption of which of the following foods increases the risk of calcium oxalate stone?",
      options: ["Leafy vegetables", "Fruits contain Vitamin C", "Fruits contain high fiber", "Whole grains"],
      answer: 0,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-26-acell",
      question: "Which of the following is the simplest form of pathogens causing disease",
      options: ["Viruses", "Prions", "Fungus", "Amoeba"],
      answer: 1,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "nums-2025-105",
      question: "Which chronological sequence is correct among the classes of vertebrates as evidence of evolution?",
      options: ["Birds → fish → amphibians → reptiles", "Reptiles → birds → fishes → amphibians", "Fish → amphibians → reptiles → birds", "Amphibians → reptiles → birds → fish"],
      answer: 2,
      explanation: "The evolutionary sequence of vertebrate classes in fossil records proceeds from Fishes to Amphibians, then Reptiles, and subsequently Birds and Mammals.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-48-circ",
      question: "In roots the apoplast pathway of water is destructed when water reaches",
      options: ["Plasmodesmata", "Cortex", "Endodermis", "Pitb"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "coord-019",
      question: "Nodes of Ranvier along the length of axon fibers allow:",
      options: ["More diffusion of neurotransmitters", "Saltatory conduction of nerve impulse", "Formation of new synaptic connections", "Synthesis of new neurons"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "acellularLifeQuestions-30",
      question: "Which of the following accurately describes Helicobacter pylori?",
      options: ["Flagellated rod-shaped bacterium", "Flagellated chain bacterium", "Flagellated spiral-shaped bacterium", "Non-flagellated spiral-shaped bacterium", "Non-flagellated rod-shaped bacterium"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "bio-cell-009",
      question: "A mature duplicated chromosome consists of:",
      options: ["Two identical double helical DNA molecules", "Two different double helical DNA molecules", "A double helical DNA molecule distributed in both chromatids", "Histone chains wrapped around DNA core"],
      answer: 0,
      chapter: "biologyQuestions"
    },
    {
      id: "inheritance-041",
      question: "A pea plant which upon self fertilization produces all the offspring of its own phenotype is called:",
      options: ["Plant with homogenous genotype", "Plant with homozygous genotype", "Plant with homologous genotype", "Plant with hemizygous genotype"],
      answer: 1,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-30",
      question: "Lymphocytes function is",
      options: ["Produce histamine and heparin", "Produce antibodies", "Initiate blood clotting", "Engulf bacteria"],
      answer: 1,
      chapter: "immunityQuestions"
    },
    {
      id: "bumhs-2025-15",
      question: "Catastrophism explains that changes in life on earth are due to:",
      options: ["Gradual evolution", "Natural selection", "Mutation", "Sudden natural disasters"],
      answer: 3,
      explanation: "Catastrophism, proposed by Georges Cuvier, states that Earth's history was shaped by sudden, violent, large-scale natural events and disasters.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-12-cell",
      question: "Mitochondria is also called",
      options: ["Chondrosomes", "Dictyosomes", "Plasmalemma", "None"],
      answer: 0,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-26-reprod",
      question: "Yellowish glandular structure formed after the release of egg from follicle is called",
      options: ["Corpus luteum", "Corpus collasum", "Follicle atresia", "None"],
      answer: 0,
      chapter: "reproductionQuestions"
    },
    {
      id: "enzymes-023",
      question: "Transfer of phosphate from one compound to the other compound requires an enzyme called:",
      options: ["Oxidoreductase", "Transferase", "Hydrolase", "Ligase"],
      answer: 1,
      chapter: "enzymesQuestions"
    },
    {
      id: "coord-016",
      question: "The hormone, when overproduced, can lead to hypercalcemia and stone formation is:",
      options: ["Insulin", "Thyroxine", "Parathyroid hormone", "Antidiuretic hormone"],
      answer: 2,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-11",
      question: "How many molecules of oxygen are used during the glycolysis of one glucose molecule?",
      options: ["1", "16", "32", "0"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
];

export const chemistryQuestions: Question[] = [
    // Chemistry MCQs
    {
      id: "trans-elem-2",
      question: "Ti+3 shows minimum absorption maximum transmittance at ........ and ........ wavelength",
      options: [
        "Yellow green",
        "Blue green",
        "Red yellow",
        "Red blue"
      ],
      answer: 3,
      explanation: "[Ti(H2O)6]3+ absorbs green and yellow light (around 500 nm), which leaves red and blue wavelengths transmitted, giving it a purple/violet appearance."
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
      id: "carb-esters-8",
      question: "Which one of the following will react with both ethanol and ethanoic acid at room temperature",
      options: [
        "CaCO₃",
        "Na metal",
        "CuO",
        "CH₃OH"
      ],
      answer: 1,
      explanation: "Sodium metal reacts with both alcohols (ethanol) and carboxylic acids (ethanoic acid) to liberate hydrogen gas."
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
      id: "hydrocarbons-28",
      question: "Ethene on polymerization gives the product polythene this reaction may be called as",
      options: [
        "Addition",
        "Substitution",
        "Condensation"
      ],
      answer: 0,
      explanation: "Polythene formation is an addition polymerization process where monomer units link together without the loss of any small molecules."
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
      id: "hydrocarbons-48",
      question: "Which of the following contains single bond",
      options: [
        "Alkanes",
        "Benzene",
        "Alkenes",
        "All of these"
      ],
      answer: 0,
      explanation: "Alkanes are saturated hydrocarbons containing exclusively single C-C and C-H sigma bonds."
    },
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
      id: "gases-5",
      question: "Which one is pure compound?",
      options: [
        "Dry air",
        "Ethanol",
        "Steel",
        "Tap water"
      ],
      answer: 1,
      explanation: "Ethanol (C2H5OH) is a pure chemical compound with a fixed composition, whereas air, steel, and tap water are mixtures."
    },
    {
      id: "hydrocarbons-30",
      question: "Which type of reaction occurs between ethene and hydrogen",
      options: [
        "Addition",
        "Neutralization",
        "Dehydration",
        "Oxidation"
      ],
      answer: 0,
      explanation: "Hydrogenation of ethene (CH2=CH2 + H2 -> CH3-CH3) is a catalytic addition reaction across the double bond."
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
];
export const physicsQuestions: Question[] = [
    // Physics MCQs
    {
      id: "kmu-mdcat-2025-phys-83",
      question: "In a pure capacitance AC circuit, the current:",
      options: [
        "Lags behind voltage by 90°",
        "Leads the voltage by 90°",
        "Is in phase with the voltage",
        "Leads the voltage by 45°"
      ],
      answer: 1,
      explanation: "In a purely capacitive AC circuit, current leads voltage by a phase angle of 90° (π/2 radians).",
      chapter: "AC"
    },
    {
      id: "szambu-2025-phys-145",
      question: "According to the particle model of light, a photon is:",
      options: [
        "A Particle with mass and charge",
        "A quantum of energy with zero rest mass and zero charge",
        "A continuous energy wave",
        "A particle that travels slower than light"
      ],
      answer: 1,
      explanation: "A photon is a discrete quantum of electromagnetic energy possessing zero rest mass and zero electric charge.",
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-47",
      question: "For an ideal gas force of attraction between molecules is",
      options: [
        "Very large",
        "Infinite",
        "Very small",
        "Zero"
      ],
      answer: 3,
      chapter: "Thermo"
    },
    {
      id: "testmoz-phys-31",
      question: "A NOT gate is also known as an:",
      options: [
        "Inverter",
        "Buffer",
        "Follower",
        "Converter"
      ],
      answer: 0,
      chapter: "Electronics"
    },
    {
      id: "testmoz-phys-46",
      question: "For a good Transformer the material of the core should have the has the hysterics loop of",
      options: [
        "Small area",
        "Large area",
        "No area",
        "Moderate area"
      ],
      answer: 0,
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-49",
      question: "Alternating current changes",
      options: [
        "It's magnitude as well as direction",
        "Only magnitude but not direction",
        "Only direction but not magnitude",
        "Both remains same"
      ],
      answer: 0,
      chapter: "EMI"
    },
    {
      id: "kmu-phys-24-148",
      question: "According to Coulomb’s law, what happens to the electrostatic force between the 2-point charges if the distance between them is doubled?",
      options: [
        "The force becomes one-fourth",
        "The force becomes half",
        "The force doubles",
        "The force remains the same"
      ],
      answer: 0,
      explanation: "By the inverse-square law F ∝ 1/r², doubling distance (2r) reduces force to 1/(2)² = 1/4 of its initial value.",
      chapter: "Electrostatics"
    },
    {
      id: "testmoz-phys-25",
      question: "I hate Indian takes in 800 joule of heat at 1000 Kelvin and exhaust 600 joule of heat at 400 Kelvin what is the actual efficiency of this engine",
      options: [
        "25%",
        "40%",
        "50%",
        "75%"
      ],
      answer: 0,
      chapter: "Thermo"
    },
    {
      id: "szambu-phy-24-154",
      question: "The Lyman series contain the wavelengths in the",
      options: [
        "far-infrared region",
        "infrared region",
        "ultraviolet region",
        "visible region"
      ],
      answer: 2,
      explanation: "The Lyman series consists of transitions terminating at n = 1, which emit high-energy photons in the ultraviolet (UV) region.",
      chapter: "AtomicSpectra"
    },
    {
      id: "testmoz-phys-49-nuc",
      question: "An alpha particle travels a well-defined distance before coming to rest. This distance is known as the range of the particle. The range depends upon",
      options: [
        "Energy of the particle",
        "Charge of the particle",
        "Mass of the particle",
        "All of these"
      ],
      answer: 3,
      chapter: "Nuclear"
    },
    {
      id: "kmu-phys-24-163",
      question: "One-meter-long copper rod is moving with speed 20 m/sec in the magnetic field of strength 0.6 tesla what is the value of induced emf?",
      options: [
        "12 V",
        "19.4 V",
        "20.6 V",
        "25 V"
      ],
      answer: 0,
      explanation: "Motional EMF ε = v B L = (20 m/s) × (0.6 T) × (1 m) = 12 V.",
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-8",
      question: "Thomson’s experiment involving the motion of an electron in mutually perpendicular E and B fields gave the value of",
      options: [
        "Mass of an electron",
        "Earth magnetic field",
        "Charge of an electron",
        "Charge to mass ratio of an electron"
      ],
      answer: 3,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-32",
      question: "In a Photoelectric effect experiment at a frequency above cut off the stopping potential is proportional to",
      options: [
        "The energy of the least energetic electron before it is ejected",
        "The energy of the least energetic electron after it is ejected",
        "The energy of the most energetic electron before it is ejected",
        "The energy of the most energetic electron after it is ejected"
      ],
      answer: 3,
      chapter: "ModernPhysics"
    },
    {
      id: "szambu-phy-24-175",
      question: "The rate of change of linear momentum is equal to",
      options: [
        "Force",
        "Impulse",
        "Torque",
        "Velocity"
      ],
      answer: 0,
      explanation: "By Newton's second law, rate of change of linear momentum equals applied force.",
      chapter: "ForceMotion"
    },
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: [
        "p-n diode",
        "light emitting diode",
        "photo diode",
        "All of the given options"
      ],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode converts light energy directly into electrical energy, generating an output voltage across its electrodes.",
      chapter: "Electronics"
    },
    {
      id: "testmoz-phys-44",
      question: "If mass and speed of moving object is double, the KE will be",
      options: [
        "Eight times",
        "Four times",
        "Doubled",
        "Six times",
        "Sixteen times"
      ],
      answer: 0,
      chapter: "WorkEnergy"
    },
    {
      id: "siba-2024-phys-170",
      question: "A force of magnitude 10N is acting along x-axis, its component along y-axis is:",
      options: [
        "Zero",
        "5N",
        "20N",
        "10N",
        "25N"
      ],
      answer: 0,
      explanation: "A vector lying purely along the x-axis has θ = 0°, making its perpendicular y-component (F sin 0°) equal to zero.",
      chapter: "Vectors"
    },
    {
      id: "testmoz-phys-27",
      question: "Why should a resistance be introduced in a circuit in series deliberately",
      options: [
        "To increase current",
        "To control current",
        "Decrease current",
        "Just to give a good look to circuit"
      ],
      answer: 2,
      chapter: "CurrentElectricity"
    },
    {
      id: "bumhs-2025-phys-130",
      question: "Water flows through a horizontal pipe with area of 0.02 m² at 3m/s. The pipe narrows to 0.01 m². The velocity in the narrow section is:",
      options: [
        "0.5 m/s",
        "1.5 m/s",
        "3 m/s",
        "6 m/s"
      ],
      answer: 3,
      explanation: "By the equation of continuity, A₁v₁ = A₂v₂ → (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 0.06 / 0.01 = 6 m/s.",
      chapter: "FluidDynamics"
    },
    {
      id: "testmoz-phys-29",
      question: "The third law of motion given by Newton deals with action reaction pair of forces. Consider two bodies: if the action is due to one body, the reaction will be due to:",
      options: [
        "Both the bodies",
        "The other body",
        "The same body",
        "Atmosphere"
      ],
      answer: 1,
      chapter: "ForceMotion"
    },
    {
      id: "testmoz-phys-25-rot",
      question: "A small body of mass m tied to a string and revolved in vertical circle is just able to reach the top of the path and complete the circle. The tension in the string at lowest point of the path is",
      options: [
        "mg",
        "4mg",
        "2mg",
        "6mg"
      ],
      answer: 3,
      chapter: "Rotational"
    },
    {
      id: "szambu-2025-phys-136",
      question: "A capacitor is connected to an ac source. If the frequency of the AC source is doubled, the current in a purely capacitive circuit will:",
      options: [
        "Be doubled",
        "Remains Unchanged",
        "Become Half",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "Reactance X_c = 1 / (2π f C). Doubling frequency f halves X_c, which doubles the circuit current I = V / X_c.",
      chapter: "AC"
    },
    {
      id: "siba-2025-phys-139",
      question: "The path difference between two sound waves coming from a coherent source of wavelength 50 cm at a point is 100 cm. The superposition of the waves at that point produces:",
      options: [
        "Beats",
        "Echo",
        "Loudness",
        "Silence"
      ],
      answer: 2,
      explanation: "Path difference Δd = 100 cm = 2 × 50 cm = 2λ (an integer multiple of wavelength nλ). This produces constructive interference, yielding maximum intensity (loudness).",
      chapter: "Waves"
    },
    {
      id: "uhs-phys-24-133",
      question: "An electric motor is used to lift the weight of 2.0 N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
      options: [
        "0.25 W",
        "0.5 W",
        "0.75 W",
        "1 W"
      ],
      answer: 1,
      explanation: "Height h = 100 cm = 1 m. Work done = F × h = 2.0 N × 1 m = 2 J. Power = W / t = 2 J / 4 s = 0.5 W.",
      chapter: "WorkEnergy"
    },
    {
      id: "testmoz-phys-32-mag",
      question: "Which of the following is a vector quantity",
      options: [
        "Magnetic flux density",
        "Magnetic field intensity",
        "Magnetic flux",
        "Both a and b"
      ],
      answer: 3,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-2",
      question: "A newly prepared radioactive nucleoid has a decay constant of second inverse. What is the approximate half life of the nuclide?",
      options: [
        "1 hour",
        "1 day",
        "1 week",
        "1 month"
      ],
      answer: 2,
      chapter: "Nuclear"
    },
    {
      id: "testmoz-phys-48",
      question: "The driver of a 1000 kg car tries to turn through a circle of radius 100 m on an unbanked curve at a speed of 10 m/s. The actual frictional force between the tyres and slippery road has a magnitude of 900 N the car",
      options: [
        "Slides in to the inside of the curve",
        "Slides off to the outside of the curve",
        "Makes the turn",
        "Makes the turn only if it goes faster"
      ],
      answer: 1,
      chapter: "Rotational"
    },
    {
      id: "kmu-phys-24-137",
      question: "What happens when two waves of the same frequency and amplitude meet in phase?",
      options: [
        "They cancel each other out resulting in a destructive interference",
        "They combine to form a wave double the amplitude, resulting in constructive interference",
        "They produce a wave with zero amplitude",
        "They produce a wave with the same amplitude as the individual waves"
      ],
      answer: 1,
      explanation: "When two identical waves meet in phase (phase difference = 0°), their amplitudes add constructively: A_net = A + A = 2A.",
      chapter: "Waves"
    },
    {
      id: "siba-phy-24-149",
      question: "If the instantaneous velocity of a body is equal to the average velocity, then:",
      options: [
        "The body moves with decreasing velocity",
        "The body moves with variable acceleration",
        "The body moves with uniform velocity",
        "The body moves with uniform acceleration",
        "The body moves with increasing velocity"
      ],
      answer: 2,
      explanation: "When velocity remains constant throughout (uniform velocity), instantaneous velocity at any instant equal average velocity over any duration.",
      chapter: "ForceMotion"
    },
    {
      id: "testmoz-phys-38",
      question: "Two objects with different sizes masses and temperature are placed in thermal contact in which direction does the energy travel",
      options: [
        "Energy travels from the larger object to the smaller object",
        "Energy travels from the object with more mass to the one with less mass",
        "Energy travels from the object at Higher temperature to the object at lower temperature",
        "Energy does not travel"
      ],
      answer: 2,
      chapter: "Thermo"
    },
    {
      id: "testmoz-phys-19",
      question: "If the potential difference across a resistor is doubled",
      options: [
        "Only the current is doubled",
        "Only the resistance is doubled",
        "Only the current is half",
        "Only the resistance is half"
      ],
      answer: 0,
      chapter: "CurrentElectricity"
    },
    {
      id: "bumhs-2025-phys-136-vec",
      question: "The dot product of two vectors is negative. If one vector lies along the positive x-axis, then the projection of second vector is along:",
      options: [
        "x-axis",
        "-x-axis",
        "y-axis",
        "-y-axis"
      ],
      answer: 1,
      explanation: "A negative dot product implies an angle greater than 90° (in the 2nd or 3rd quadrant relative to the positive x-axis), so its component/projection along the x-axis points in the negative x direction (-x-axis).",
      chapter: "Vectors"
    },
    {
      id: "testmoz-phys-36",
      question: "The device working is based upon Photoelectric effect is",
      options: [
        "Photo voltaic cell",
        "Photocell",
        "Photo phone",
        "Photo door"
      ],
      answer: 1,
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-22",
      question: "If the potential difference across the two plates of parallel capacitor is doubled then its energy is stored in it will be",
      options: [
        "Two times",
        "16 times",
        "Four times",
        "Remain same"
      ],
      answer: 2,
      chapter: "Electrostatics"
    },
    {
      id: "uhs-phys-24-129",
      question: "1 kWh = ________ J?",
      options: [
        "3.6 J",
        "3.6 kJ",
        "3.6 MJ",
        "3.6 GJ"
      ],
      answer: 2,
      explanation: "1 kWh = 1 kW × 1 hr = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ.",
      chapter: "WorkEnergy"
    },
    {
      id: "kmu-phys-24-172",
      question: "If an electron in the hydrogen atom jumps from second to first orbit, the emitted radiation has a wavelength of?",
      options: [
        "4 / (3 R_H)",
        "3 / (4 R_H)",
        "R_H",
        "4 R_H"
      ],
      answer: 0,
      explanation: "Using Rydberg formula: 1/λ = R_H (1/1² - 1/2²) = R_H (1 - 1/4) = 3 R_H / 4. Solving for wavelength yields λ = 4 / (3 R_H).",
      chapter: "AtomicSpectra"
    },
];

export const englishQuestions: Question[] = [
    // English MCQs
    {
      id: "eng-001",
      question: "What does the word “SPILL” mean?",
      options: ["Coil", "Deliver", "Spoil", "Spread"],
      answer: 3
    },
    {
      id: "eng-002",
      question: "The purpose of using exaggerated language in parody is:",
      options: [
        "To create a serious tone",
        "To criticize societal norms",
        "To entertain and mock",
        "To confuse the reader"
      ],
      answer: 2
    },
    {
      id: "eng-003",
      question: "Pick out the sentence which illustrates the use of infinitive.",
      options: [
        "He refused to obey the orders.",
        "He refused obeying the orders.",
        "He refused obey the orders.",
        "He refused obeyed the orders."
      ],
      answer: 0
    },
    {
      id: "eng-004",
      question: "He isn’t good _______ French.",
      options: ["at", "in", "to", "of"],
      answer: 0
    },
    {
      id: "eng-005",
      question: "Despite the complicated situation, she remained _______, calmly assessing her options before deciding.",
      options: ["Composed", "Erratic", "Frantic", "Hysterical"],
      answer: 0
    },
    {
      id: "eng-006",
      question: "Choose the best possible antonym for the underlined word: The general’s problem was to get 20,000 troops swiftly across this river.",
      options: ["Slowly", "Expeditiously", "Thoroughly", "Anxiously", "Strongly"],
      answer: 0
    },
    {
      id: "eng-007",
      question: "_______ Danube is Austria’s longest river.",
      options: ["A", "An", "The", "No change required"],
      answer: 2
    },
    {
      id: "eng-008",
      question: "Identify the type of sentence given below: The caliph noticed the merchant.",
      options: ["Complex", "Compound", "Compound-complex", "Simple"],
      answer: 3
    },
    {
      id: "eng-009",
      question: "It is common knowledge to anyone who studies science, that the earth _______ on its own axis once every 24 hours.",
      options: ["revolves", "revolve", "has revolved", "has had revolved"],
      answer: 0
    },
];
export const logicalQuestions: Question[] = [
    // Logical Reasoning MCQs
      {
      id: "bumhs-2025-172",
      question: "Prohibiting smoking in public areas will reduce the occurrence of lung disease.\n\nWhat assumption is present here?",
      options: [
        "Banning smoking has no impact on lung disease rates.",
        "Hence all people live in public areas therefore, banning smoking will eliminate lung disease.",
        "Smoking is the sole cause of lung disease.",
        "Smoking in public places plays a major role in causing lung disease."
      ],
      answer: 3
    },
    {
      id: "iba-sindh-2025-172",
      question: "If A is mother of B and C is child of B, then what is the relationship between A and C?",
      options: [
        "Aunt",
        "Grandmother",
        "Sister",
        "Cousin"
      ],
      answer: 1
    },
    {
      id: "kmu-2025-172",
      question: "A medication dose starts at 100mg and halves each day. What will be the dose on day 4?",
      options: [
        "12.5mg",
        "25mg",
        "30mg",
        "50mg"
      ],
      answer: 0
    },
    {
      id: "szabmu-2025-173",
      question: "Find the next number: 5, 11, 23, 47, 95, ____?",
      options: [
        "190",
        "191",
        "192",
        "193"
      ],
      answer: 1
    },
    {
      id: "uhs-2025-172",
      question: "What will come next? 1, 4, 2, 5, 3, 6, 4, 7, ?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      answer: 0
    },
    {
      id: "iba-duhs-2024-197",
      question: "Look at the numbers below. Identify the pattern and logically deduce the correct option that should follow:\n\n1, 4, 9, 16, ____",
      options: [
        "54",
        "36",
        "49",
        "25"
      ],
      answer: 3
    },
    {
      id: "kmu-2024-195",
      question: "Find out the missing term in the sequence: 15, 14, 12, 9?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      answer: 0
    },
    {
      id: "szabmu-2024-195",
      question: "Who will be the new chairperson of math department?\n\n(The high school math department needs to appoint a new chairperson on the basis of seniority. Ms. Madiha is less senior than Mr. Tanvir but more than Ms. Aiyza. Mr. Rehan is more senior than Ms. Madiha but less than Mr. Tanvir. Mr. Tanvir doesn’t want the job.)",
      options: [
        "Mr. Rehan",
        "Mr. Tanvir",
        "Ms. Aiyza",
        "Ms. Madiha"
      ],
      answer: 0
    },
    {
      id: "uhs-2024-195",
      question: "Statement I: The government has increased the taxes on all businesses in Pakistan.\nStatement II: Many small businesses will have to close their operations in Pakistan.",
      options: [
        "Statement I is the cause and statement II is its effect",
        "Statement II is the cause and statement I is its effect",
        "Both the statements I and II are independent causes",
        "Both the statements I and II are effects of independent causes"
      ],
      answer: 0
    }
  ];