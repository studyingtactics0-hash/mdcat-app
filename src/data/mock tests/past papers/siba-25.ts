export type SibaQuestion = {
    id: string;
    question: string;
    options: string[];
    answer: number;
  };
  
  export const siba25Questions: SibaQuestion[] = [
    // =========================================================
    // PART I — BIOLOGY
    // =========================================================
  
    {
      id: "siba25-q1",
      question: "Which process uses mRNA to make protein at ribosomes?",
      options: [
        "Replication",
        "Transcription",
        "Translation",
        "Cell fractionation",
      ],
      answer: 2,
    },
    {
      id: "siba25-q2",
      question: "Which of the following is the sexually transmitted disease?",
      options: ["Syphilis", "Lung Cancer", "Tuberculosis", "Autoimmune disorders"],
      answer: 0,
    },
    {
      id: "siba25-q3",
      question:
        "The Golgi apparatus is structurally made of a series of flattened membrane bound sacs:",
      options: ["Grana", "Cristae", "Cisternae", "Vesicles"],
      answer: 2,
    },
    {
      id: "siba25-q4",
      question: "Which type of change is a nerve impulse?",
      options: [
        "Electrical and mechanical change",
        "Chemical and mechanical change",
        "Electrical and chemical change",
        "Chemical change only",
      ],
      answer: 2,
    },
    {
      id: "siba25-q5",
      question: "Which of the following fluid flows through the lymphatic vessels?",
      options: ["Plasma", "Lymph", "Serum", "Bile"],
      answer: 1,
    },
    {
      id: "siba25-q6",
      question:
        "Which one of the following is the most common nitrogenous waste excreted in urine of a healthy human?",
      options: ["Ammonia", "Urea", "Uric Acid", "Creatinine"],
      answer: 1,
    },
    {
      id: "siba25-q7",
      question: "Hippocampus mainly involved in:",
      options: [
        "Vision and hearing reflexes",
        "Voluntary muscles movement",
        "Memory storage",
        "Speech production",
      ],
      answer: 2,
    },
    {
      id: "siba25-q8",
      question:
        "The covalently bonded non protein part of enzyme is called:",
      options: ["Activator", "Prosthetic group", "Coenzyme", "Apoenzyme"],
      answer: 1,
    },
    {
      id: "siba25-q9",
      question: "The outer surface of the axon membrane in a resting neuron is:",
      options: [
        "Negative due to sodium ions",
        "Positive due to sodium ions",
        "Positive due to potassium ions",
        "Neutral due to balanced ions",
      ],
      answer: 1,
    },
    {
      id: "siba25-q10",
      question:
        "Which class of animals excrete ammonia as their primary nitrogenous waste?",
      options: ["Uricotelic", "Ureotelic", "Ammonotelic", "Urotelic"],
      answer: 2,
    },
    {
      id: "siba25-q11",
      question:
        "Which of the following best describes the direction of impulse traveling in a typical neuron?",
      options: [
        "Axon → dendrite → cell body",
        "Dendrite → axon → dendrite",
        "Synapse → dendrite → axon",
        "Cell body → dendrite",
      ],
      answer: 1,
    },
    {
      id: "siba25-q12",
      question:
        "Homopolysaccharide that is found in the cell wall of fungi and in the exoskeleton of arthropods is:",
      options: ["Cellulose", "Glycogen", "Starch", "Chitin"],
      answer: 3,
    },
    {
      id: "siba25-q13",
      question: "The most abundant lipids in living things are:",
      options: ["Terpenes", "Waxes", "Sterols", "Acylglycerols"],
      answer: 3,
    },
    {
      id: "siba25-q14",
      question:
        "Name the type of bond that join amino acids to form a polypeptide chain:",
      options: ["Ionic bond", "Covalent bond", "Glycosidic bond", "Peptide bond"],
      answer: 3,
    },
    {
      id: "siba25-q15",
      question: "Which of the following is not a globular protein?",
      options: ["Enzyme", "Hormone", "Channel protein", "Collagen"],
      answer: 3,
    },
    {
      id: "siba25-q16",
      question: "Which specialized cells of liver perform phagocytic function?",
      options: ["Kupffer cells", "Schwann cells", "Parietal cells", "Chief cells"],
      answer: 0,
    },
    {
      id: "siba25-q17",
      question: "According to Darwin, the main force behind evolution is:",
      options: [
        "Migration",
        "Genetic mutation",
        "Artificial selection",
        "Natural selection",
      ],
      answer: 3,
    },
    {
      id: "siba25-q18",
      question: "Beside fertilization, the function of fallopian tube is:",
      options: [
        "Nourishment of embryo",
        "Transport of ovum towards uterus",
        "Secretion of female hormones",
        "Implantation of zygote",
      ],
      answer: 1,
    },
    {
      id: "siba25-q19",
      question:
        "Which property of water allows it to stick to polar surface like wood?",
      options: ["Density", "Adhesion", "Cohesion", "Non-polar attraction"],
      answer: 1,
    },
    {
      id: "siba25-q20",
      question:
        "The water content of human kidney is regulated by ADH. Which of the following gland is involved in its secretion process?",
      options: [
        "Adrenal gland",
        "Pituitary gland",
        "Thyroid gland",
        "Parathyroid gland",
      ],
      answer: 1,
    },
    {
      id: "siba25-q21",
      question:
        "Overconsumption of which of the following foods increases the risk of calcium oxalate stone?",
      options: [
        "Leafy vegetables",
        "Fruits contain Vitamin C",
        "Fruits contain high fiber",
        "Whole grains",
      ],
      answer: 0,
    },
    {
      id: "siba25-q22",
      question:
        "Which product is produced by genetically modified bacteria for patients with Diabetes mellitus?",
      options: ["Insulin", "Erythropoietin", "Growth hormone", "Vaccine"],
      answer: 0,
    },
    {
      id: "siba25-q23",
      question:
        "Which changes occur in the endometrium during the proliferative phase of the menstrual cycle?",
      options: [
        "It begins to shed",
        "It regenerates and thickens",
        "It becomes secretory",
        "No change occurs",
      ],
      answer: 1,
    },
    {
      id: "siba25-q24",
      question:
        "Role of mRNA in COVID-19 vaccines like Pfizer and Moderna is to:",
      options: [
        "Helps the immune system recognize the virus",
        "Instructs cells to produce the viral spike protein",
        "Triggers immediate antibody release from memory cells",
        "Delivers enzymes that destroy the virus",
      ],
      answer: 1,
    },
    {
      id: "siba25-q25",
      question: "Living cells of cartilage are called as:",
      options: ["Osteocytes", "Thrombocytes", "Chondrocytes", "Osteoblasts"],
      answer: 2,
    },
    {
      id: "siba25-q26",
      question:
        "The regulator of muscle contraction, which is released from sarcoplasmic reticulum is:",
      options: ["Tropomyosin", "Troponin", "Calcium ions", "ATP"],
      answer: 2,
    },
    {
      id: "siba25-q27",
      question:
        "Automatic and rapid actions that do not involve the conscious part of brain is:",
      options: ["Reflex actions", "Conditioned reflexes", "Taxes", "Synapses"],
      answer: 0,
    },
    {
      id: "siba25-q28",
      question:
        "Crossing over involves exchange of genetic material between:",
      options: [
        "Sister chromatids of same chromosome",
        "Non-sister chromatids of homologous chromosomes",
        "Chromatids of non-homologous chromosomes",
        "Sister chromatids of homologous chromosomes",
      ],
      answer: 1,
    },
    {
      id: "siba25-q29",
      question:
        "Name the biomolecule essential for information storage and transmission within cells.",
      options: ["Carbohydrates", "Lipids", "Nucleic acids", "Proteins"],
      answer: 2,
    },
    {
      id: "siba25-q30",
      question: "What is the chemical composition of chromosomes?",
      options: [
        "RNA and lipids",
        "DNA and proteins",
        "Carbohydrates and nucleic acids",
        "Proteins and carbohydrates",
      ],
      answer: 1,
    },
    {
      id: "siba25-q31",
      question:
        "Which of the following surrounds myofibril in skeletal muscle that stores and distributes calcium ions during muscle functioning?",
      options: [
        "Sarcolemma",
        "Sarcoplasmic reticulum",
        "Transverse tubules",
        "Sarcoplasm",
      ],
      answer: 1,
    },
    {
      id: "siba25-q32",
      question: "Shivering thermogenesis involves:",
      options: [
        "Voluntary muscle contraction",
        "Involuntary muscle contraction",
        "Dehydration",
        "Hormone secretion",
      ],
      answer: 1,
    },
    {
      id: "siba25-q33",
      question:
        "Guanine - cytosine pairs enhance DNA stability due to:",
      options: [
        "Larger size",
        "Closer pairing",
        "More hydrogen bonds in both",
        "Double ring structure in both",
      ],
      answer: 2,
    },
    {
      id: "siba25-q34",
      question:
        "Which of the following neurons conduct impulses from sensory receptors to CNS:",
      options: [
        "Sensory neurons",
        "Motor neurons",
        "Interneurons",
        "Efferent neurons",
      ],
      answer: 0,
    },
    {
      id: "siba25-q35",
      question: "Why Lamarck being remembered till today?",
      options: [
        "Due to his rejected but appealing theory of heredity",
        "Due to his universally acceptable theory of evolution",
        "Due to his theory of evolution by natural selection",
        "Due to his theory of evolution by acquired characters",
      ],
      answer: 0,
    },
    {
      id: "siba25-q36",
      question: "Which of the following is NOT related to DNA?",
      options: ["Adenine", "Thymine", "Uracil", "Guanine"],
      answer: 2,
    },
    {
      id: "siba25-q37",
      question:
        "If a male with hemophilia marries a non-carrier female, what is the likelihood of their sons inheriting the condition?",
      options: ["50%", "100%", "0%", "25%"],
      answer: 2,
    },
    {
      id: "siba25-q38",
      question:
        "Which of the following is a characteristic of a non-competitive enzyme inhibitor?",
      options: [
        "Binds to the enzyme active site",
        "Can be overcome by increasing substrate concentration",
        "Increases the speed of the reaction",
        "Point of action is allosteric site",
      ],
      answer: 3,
    },
    {
      id: "siba25-q39",
      question:
        "Which of the following event prevent backflow of blood from ventricles to atria during ventricular systole?",
      options: [
        "Contraction of the atrial wall muscles",
        "Closure of tricuspid and bicuspid valves",
        "Opening of semilunar valve",
        "Opening of tricuspid and bicuspid valves",
      ],
      answer: 1,
    },
    {
      id: "siba25-q40",
      question:
        "In the following process the cells release energy from oxidation of food molecules?",
      options: [
        "Cellular respiration",
        "Photosynthesis",
        "DNA replication",
        "Protein synthesis",
      ],
      answer: 0,
    },
    {
      id: "siba25-q41",
      question:
        "How many NADH are produced, when one Acetyl Co A is oxidized during Kreb's cycle?",
      options: ["1", "2", "3", "6"],
      answer: 2,
    },
    {
      id: "siba25-q42",
      question: "Which of the following best describes glycoproteins?",
      options: [
        "Proteins linked with carbohydrates",
        "Proteins linked with DNA",
        "Proteins linked with lipids",
        "Proteins linked with minerals",
      ],
      answer: 0,
    },
    {
      id: "siba25-q43",
      question:
        "The function which is common between Cerebellum and Hippocampus is:",
      options: [
        "Equilibrium",
        "Memory formation",
        "Body positioning",
        "Sexual arousal",
      ],
      answer: 1,
    },
    {
      id: "siba25-q44",
      question: "In males, which of the following is considered a urogenital organ?",
      options: ["Urethra", "Ureter", "Urinary bladder", "Vas deferens"],
      answer: 0,
    },
    {
      id: "siba25-q45",
      question: "The most common type of arthritis is:",
      options: ["Gout", "Rheumatoid arthritis", "Osteoarthritis", "Spondylitis"],
      answer: 2,
    },
    {
      id: "siba25-q46",
      question: "The other name for interstitial cells in male testes is:",
      options: ["Leydig cell", "Spermatogonia cell", "Sertoli cell", "Spermatocyte"],
      answer: 0,
    },
    {
      id: "siba25-q47",
      question: "Binding of hemoglobin with oxygen is catalyzed by the enzyme:",
      options: ["Carbonic anhydrase", "Carboxylase", "Oxygenase", "Dehydrogenase"],
      answer: 0,
    },
    {
      id: "siba25-q48",
      question:
        "Transfer of phosphate from one compound to the other compound requires an enzyme called:",
      options: ["Oxidoreductase", "Transferase", "Hydrolase", "Ligase"],
      answer: 1,
    },
    {
      id: "siba25-q49",
      question: "Linkage of genes in Drosophila was first discovered by:",
      options: [
        "Thomas Hunt Morgan",
        "Alfred Sturtevant",
        "Gregor Mendel",
        "Hugo de Vries",
      ],
      answer: 0,
    },
    {
      id: "siba25-q50",
      question: "Which phenomenon increases the chances of variations?",
      options: ["Crossing Over", "Linkage", "Epistasis", "Dominance"],
      answer: 0,
    },
    {
      id: "siba25-q51",
      question:
        "When antibodies produced by B-cells, kill the antigens then it is called:",
      options: [
        "Cell mediated response",
        "Passive response",
        "Humoral response",
        "Cells collaborated response",
      ],
      answer: 2,
    },
    {
      id: "siba25-q52",
      question: "B-Lymphocytes are formed and matured in:",
      options: ["Liver", "Spleen", "Bone marrow", "Thymus"],
      answer: 2,
    },
    {
      id: "siba25-q53",
      question: "Which of the following is a route of HIV transmission?",
      options: [
        "Unhygienic living conditions",
        "Blood transfusion with contaminated blood",
        "Hand shaking",
        "Living together in the same room",
      ],
      answer: 1,
    },
    {
      id: "siba25-q54",
      question:
        "Which part of small intestine is responsible for nutrient absorption?",
      options: ["Duodenum", "Jejunum", "Ileum", "Rectum"],
      answer: 1,
    },
    {
      id: "siba25-q55",
      question: "Water can circulate in living organism due to:",
      options: [
        "Surface tension",
        "Cohesion and adhesion polarity",
        "Solubility in cellulose",
        "Stable liquid range",
      ],
      answer: 1,
    },
    {
      id: "siba25-q56",
      question:
        "If the disease is caused due to a defective gene located on the X chromosome, then defective genes can only be transmitted to male offspring by the:",
      options: ["Female gamete", "Male gamete", "Bacteria", "Mutation"],
      answer: 0,
    },
    {
      id: "siba25-q57",
      question:
        "Which group of viruses can cause diseases like influenza, measles and rabies?",
      options: ["Plant viruses", "Animal viruses", "Fungal viruses", "Bacterial viruses"],
      answer: 1,
    },
    {
      id: "siba25-q58",
      question:
        "Which of the following biological molecule releases highest energy from its own gram?",
      options: ["Carbohydrates", "Lipids", "Protein", "Water"],
      answer: 1,
    },
    {
      id: "siba25-q59",
      question: "The best way to avoid AIDS is:",
      options: ["Preventive measures", "Vaccination", "Medication", "Shots"],
      answer: 0,
    },
    {
      id: "siba25-q60",
      question:
        "Which of the following substances pass through the glomerulus into Bowman's capsule?",
      options: ["Glucose", "Red blood cells", "Platelets", "Albumin"],
      answer: 0,
    },
    {
      id: "siba25-q61",
      question: "The appendix is attached to which part of large intestine?",
      options: ["Rectum", "Caecum", "Colon", "Ileum"],
      answer: 1,
    },
    {
      id: "siba25-q62",
      question:
        "Which structural characteristic is most accurate for arteries?",
      options: [
        "Thin walls with valves",
        "Thick and muscular walls",
        "Highly permeable walls",
        "Large lumen lacking muscle",
      ],
      answer: 1,
    },
    {
      id: "siba25-q63",
      question:
        "A food sample contains long chains of amino acids bounded together. This indicates the presence of:",
      options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
      answer: 2,
    },
    {
      id: "siba25-q64",
      question: "Monoclonal antibodies are useful in cancer diagnosis by:",
      options: [
        "Replacing damaged tissue",
        "Changing the genetic code of cancer cells",
        "Killing healthy cells to reduce tumor spread",
        "Detecting specific tumor markers in samples",
      ],
      answer: 3,
    },
    {
      id: "siba25-q65",
      question: "The main function of the pharynx in respiratory system:",
      options: [
        "Serves as passage for both food and air",
        "Produces mucus",
        "Produces voice",
        "Filters air",
      ],
      answer: 0,
    },
    {
      id: "siba25-q66",
      question: "The main cause of acute kidney failure is:",
      options: ["Low blood pressure", "Hyperthermia", "Liver failure", "Drinking of excess water"],
      answer: 2,
    },
    {
      id: "siba25-q67",
      question: "During diastole, the heart chambers:",
      options: [
        "Relax and fill with blood",
        "Contract strongly",
        "Eject blood into arteries",
        "Remain closed",
      ],
      answer: 0,
    },
    {
      id: "siba25-q68",
      question:
        "Kidneys perform their osmoregulatory role under the effect of Antidiuretic Hormone, which type of urine is produced in this situation?",
      options: [
        "Hypotonic urine with decreased volume",
        "Hypotonic urine with increased volume",
        "Hypertonic urine with decreased volume",
        "Hypertonic urine with increased volume",
      ],
      answer: 2,
    },
    {
      id: "siba25-q69",
      question:
        "A person has swollen lymph nodes after throat infection. What does this indicate?",
      options: [
        "Failure of circulatory system",
        "Extra glucose storage",
        "Active immune response",
        "Blockage of digestive track",
      ],
      answer: 2,
    },
    {
      id: "siba25-q70",
      question: "Which of the following is correct about the structure of brain?",
      options: [
        "Cerebral cortex is outer part consists of grey matter",
        "Cerebral medulla is inner part consists of grey matter",
        "Cerebral cortex is inner part consists of white matter",
        "Cerebral medulla is outer part consists of white matter",
      ],
      answer: 0,
    },
    {
      id: "siba25-q71",
      question:
        "Under a microscope plant cells appeared rigid in shape, unlike flexible animal cells. Which structure explain this difference?",
      options: ["Cell wall", "Vacuole", "Cytoskeleton", "Plasma membrane"],
      answer: 0,
    },
    {
      id: "siba25-q72",
      question:
        "Which type of joint allows bending of the elbow joint and has a synovial cavity?",
      options: [
        "Cartilaginous joint",
        "Fibrous joint",
        "Pubic symphysis",
        "Hinge joint",
      ],
      answer: 3,
    },
    {
      id: "siba25-q73",
      question:
        "If a round seeded pea plant is self-fertilized and all of its offspring are also round seeded:",
      options: [
        "Both parents and offspring must be true breed",
        "Both parents may or not be true breed",
        "Only parents but not offspring will be true breed",
        "Only offspring but not parents will be true breed",
      ],
      answer: 0,
    },
    {
      id: "siba25-q74",
      question:
        "A student observes a microorganism under a microscope that lacks a nucleus and is made of a single cell. Which classification would best fit this organism?",
      options: [
        "Unicellular prokaryote",
        "Unicellular eukaryote",
        "Multicellular eukaryote",
        "Multicellular prokaryote",
      ],
      answer: 0,
    },
    {
      id: "siba25-q75",
      question: "In biotechnology vaccines are developed by cloning of:",
      options: [
        "Gene for antigen of pathogen",
        "Gene for receptor of the patient",
        "Gene for antigen of patient",
        "Gene for antibody of patient",
      ],
      answer: 0,
    },
    {
      id: "siba25-q76",
      question: "Atrioventricular valve closed during which phase of cardiac cycle:",
      options: [
        "Ventricular systole",
        "Ventricular diastole",
        "Atrial systole",
        "Atrial diastole",
      ],
      answer: 0,
    },
    {
      id: "siba25-q77",
      question:
        'If "RRYY" is crossed with "rryy", what will be the ratio of "RRYY" to "rryy" in F2 generation?',
      options: ["9:3:3:1", "3:1", "1:3", "1:1"],
      answer: 3,
    },
    {
      id: "siba25-q78",
      question:
        "Name the idea of Darwin that best explains the ability of populations to produce those individuals who possess beneficial traits.",
      options: [
        "Gene flow",
        "Genetic drift",
        "Artificial selection",
        "Natural selection",
      ],
      answer: 3,
    },
    {
      id: "siba25-q79",
      question: "At least how many saccharide units must be present in polysaccharide?",
      options: ["2", "0", "10", "11"],
      answer: 3,
    },
    {
      id: "siba25-q80",
      question:
        "A doctor taps below the knee and the leg kicks forward. What does this show?",
      options: [
        "A conditional response",
        "Voluntary muscle contractions",
        "An involuntary reflex to external stimuli",
        "A delayed response due to brain processing",
      ],
      answer: 2,
    },
    {
      id: "siba25-q81",
      question: "If fertilization does not occur, which part of uterus degenerate?",
      options: ["Myometrium", "Endometrium", "Perimetrium", "Cervix"],
      answer: 1,
    },
  
    // =========================================================
    // PART II — CHEMISTRY
    // =========================================================
  
    {
      id: "siba25-q82",
      question: "Digestion of protein started when food enters in:",
      options: ["Mouth", "Stomach", "Intestine", "Epiglottis"],
      answer: 1,
    },
    {
      id: "siba25-q83",
      question: "Select the standard condition for temperature and pressure:",
      options: [
        "1 atm and 0K",
        "760 torr and 25°C",
        "2 bar and 23°C",
        "14.5 psi and 0°C",
      ],
      answer: 3,
    },
    {
      id: "siba25-q84",
      question: "Which of the following is NOT a state function?",
      options: ["Enthalpy", "Work", "Internal energy", "Pressure"],
      answer: 1,
    },
    {
      id: "siba25-q85",
      question: "Which one is not a type of stereoisomerism?",
      options: [
        "Conformational isomerism",
        "Optical isomerism",
        "Geometrical isomerism",
        "Metamerism",
      ],
      answer: 3,
    },
    {
      id: "siba25-q86",
      question:
        "Formic acid reacts with ethanol in presence of acid catalyst produces:",
      options: ["Ester", "Ether", "Acid anhydride", "Phenol"],
      answer: 0,
    },
    {
      id: "siba25-q87",
      question: "K is called specific rate constant because it is:",
      options: [
        "Rate per unit concentration",
        "Temperature independent",
        "Depends on concentration",
        "Unitless",
      ],
      answer: 0,
    },
    {
      id: "siba25-q88",
      question:
        "Number of sigma bonds in methyl chloride is due to sp³-s overlap is/are.",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      id: "siba25-q89",
      question:
        "When pressure is 1520 torr then density of oxygen gas will be:",
      options: ["64/RT", "32/RT", "16/RT", "128/RT"],
      answer: 0,
    },
    {
      id: "siba25-q90",
      question:
        "Which equation is used to calculate concentration for n mole of an ideal gas?",
      options: ["P/RT", "PV/RT", "PVM/RT", "PM/RT"],
      answer: 0,
    },
    {
      id: "siba25-q91",
      question:
        "50g Mg is burnt with 32g of oxygen to form MgO, amount of excess reagent left is?",
      options: ["6g Mg", "2g Mg", "8g O₂", "16g O₂"],
      answer: 1,
    },
    {
      id: "siba25-q92",
      question: "Which carbonyl carbon is more electrophilic:",
      options: ["HCOOH", "HCHO", "CH₃COCH₃", "CH₃COOH"],
      answer: 1,
    },
    {
      id: "siba25-q93",
      question:
        "The heat of formation of CO and CO₂ are -26.4 Kcal and -94.0 Kcal respectively. The heat of combustion of carbon monoxide according to Hess's Law will be:",
      options: ["+26.4 Kcal", "-67.6 Kcal", "+94.0 Kcal", "-120.4 Kcal"],
      answer: 1,
    },
    {
      id: "siba25-q94",
      question: "Rate of dehydration of alcohol is:",
      options: ["3°>2°>1°", "1°>3°>2°", "2°>3°>1°", "3°>1°>2°"],
      answer: 0,
    },
    {
      id: "siba25-q95",
      question:
        "For which reaction, the value of Kc increases with increase in temperature?",
      options: [
        "CH₄ + O₂ → CO₂ + H₂O",
        "NaOH + HCl → NaCl + H₂O",
        "2SO₂ + O₂ → 2SO₃",
        "H₂ + I₂ → 2HI",
      ],
      answer: 3,
    },
    {
      id: "siba25-q96",
      question: "Correct order of bond energy will be:",
      options: ["HCl > HBr > HI", "HBr > HCl > HI", "HI > HCl > HBr", "HCl > HI > HBr"],
      answer: 0,
    },
    {
      id: "siba25-q97",
      question: "Which of the following is least volatile?",
      options: ["Glycerol", "Water", "Acetic acid", "Diethyl ether"],
      answer: 0,
    },
    {
      id: "siba25-q98",
      question: "IUPAC name of the compound CH₃(CH₂)₄CH(CH₃)₂:",
      options: ["2-methylheptane", "3-methylheptane", "4-methylheptane", "Octane"],
      answer: 0,
    },
    {
      id: "siba25-q99",
      question:
        "IUPAC name of the compound C₂H₅CH=C(C₃H₇)C₂H₅ is:",
      options: [
        "1,2-diethyl-2-propylethene",
        "3-ethylhept-3-ene",
        "4-ethylhept-3-ene",
        "4-ethylhept-2-ene",
      ],
      answer: 2,
    },
    {
      id: "siba25-q100",
      question: "Which of the following molecules have similar molecular shape?",
      options: ["NH₃ & AlCl₃", "BCl₃ & NH₃", "AlCl₃ & PCl₃", "H₂O & SnCl₂"],
      answer: 3,
    },
    {
      id: "siba25-q101",
      question:
        "Value of electronegativity of atom A and B are 1.20 and 4.0 respectively. the percent ionic character will be:",
      options: ["43%", "50%", "55%", "73%"],
      answer: 3,
    },
    {
      id: "siba25-q102",
      question: "Phenol differs from ethanol because it:",
      options: [
        "Forms stronger hydrogen bonds to its aromatic ring",
        "Is more acidic because of resonance stabilized conjugate base",
        "Readily undergoes nucleophilic substitution on the -OH group",
        "Is completely insoluble in water due to its benzene ring",
      ],
      answer: 1,
    },
    {
      id: "siba25-q103",
      question:
        "Which reagent and condition are used to bring about the reaction shown? Toluene → p-chloro toluene",
      options: [
        "Cl₂ in the dark",
        "Cl₂ in the presence of AlCl₃",
        "Cl₂ in presence of UV Light",
        "Concentrated HCl heated under reflux",
      ],
      answer: 1,
    },
    {
      id: "siba25-q104",
      question:
        "What is 50% yield when actual yield and theoretical yield are 2 g and 4 g respectively?",
      options: ["25%", "50%", "75%", "85%"],
      answer: 0,
    },
    {
      id: "siba25-q105",
      question: "IUPAC name of CHClCl",
      options: ["Chloroethane", "Chloroethyne", "Chloroethene", "Ethylchloride"],
      answer: 1,
    },
    {
      id: "siba25-q106",
      question: "The order of reactivity of following R-X for SN² reaction is:",
      options: ["RF>RCI>RBr>RI", "RBr>RF>RCI>RI", "RCI>RF>RBr>RI", "RI>RBr>RCI>RF"],
      answer: 3,
    },
    {
      id: "siba25-q107",
      question: "Among the following compound, the most susceptible to nucleophilic attack:",
      options: ["CH₃COCl", "CH₃CHO", "CH₃COOCH₃", "CH₃COOCOCH₃"],
      answer: 0,
    },
    {
      id: "siba25-q108",
      question: "Which of the following is expected to be the most paramagnetic?",
      options: ["₃Li", "₄Be", "₅B", "₆C"],
      answer: 3,
    },
    {
      id: "siba25-q109",
      question: "The formation of activated complex in a reaction is:",
      options: [
        "Exothermic process",
        "Endothermic process",
        "Either endo or exo",
        "Always energy released",
      ],
      answer: 1,
    },
    {
      id: "siba25-q110",
      question: "The maximum probability of finding an electron is at a distance of:",
      options: ["0.53 nm", "0.35 nm", "0.053 nm", "0.0053 nm"],
      answer: 2,
    },
    {
      id: "siba25-q111",
      question: "The IUPAC name of Vinyl acetylene is:",
      options: ["But-1-en-3-yne", "But-3-en-1-yne", "Pent-3-en-1-yne", "Pent-2-en-4-yne"],
      answer: 0,
    },
    {
      id: "siba25-q112",
      question: "Which atom has at least one electron in a dumbbell shape orbital?",
      options: ["H", "He", "Li", "B"],
      answer: 3,
    },
    {
      id: "siba25-q113",
      question: "Which of the following adhesives is used to bond broken pieces of jewelry?",
      options: ["Super glue", "Epoxy resin", "Silicon resin", "Starch"],
      answer: 0,
    },
    {
      id: "siba25-q114",
      question: "The ratio of sigma bonds to pi bonds present in benzene is:",
      options: ["4:1", "1:4", "2:3", "6:1"],
      answer: 0,
    },
    {
      id: "siba25-q115",
      question: "Which one is an addition polymer?",
      options: ["Polyvinyl chloride", "Nylon 6,6", "Nylon 6,10", "Polyester"],
      answer: 0,
    },
    {
      id: "siba25-q116",
      question:
        "When one mole of a substance is decomposed preferably as compared to evaporation, then decomposition has:",
      options: ["Low energy", "High energy", "Equal energy", "Cannot be predicted"],
      answer: 0,
    },
    {
      id: "siba25-q117",
      question: "At start of reaction:",
      options: [
        "Average rate is high",
        "Instantaneous rate is high",
        "Both rates are same",
        "Both rates are slow",
      ],
      answer: 1,
    },
    {
      id: "siba25-q118",
      question: "Which is not true about benzene:",
      options: [
        "sp² hybridization",
        "Fractional bond order",
        "No elimination reaction",
        "6 sites for monosubstitution",
      ],
      answer: 3,
    },
    {
      id: "siba25-q119",
      question:
        "During Clemmensen reduction of aldehyde and ketone, carbonyl group into an alkane group is carried out with:",
      options: ["H₂ and Pd", "LiAlH₄", "Zn/Hg, conc. HCl", "NH₂-NH₂ / KOH"],
      answer: 2,
    },
    {
      id: "siba25-q120",
      question:
        "Consider the reaction: N₂ + 3H₂ → 2NH₃. If 56 g of N₂ reacts with 12 g of H₂ and produces 51 g of NH₃, what are the theoretical yield (TY) of NH₃ and percentage yield (PY) of reaction? (Molar masses: N₂ = 28 g/mol, H₂ = 2 g/mol, NH₃ = 17 g/mol)",
      options: [
        "TY = 68 g, PY = 75%",
        "TY = 34 g, PY = 67%",
        "TY = 68 g, PY = 33%",
        "TY = 34 g, PY = 75%",
      ],
      answer: 0,
    },
    {
      id: "siba25-q121",
      question:
        "When SHE is connected with a Cu electrode using a salt bridge and external wire:",
      options: ["Cu reduces", "Cu²⁺ reduces", "H⁺ reduces", "H₂ reduces"],
      answer: 1,
    },
    {
      id: "siba25-q122",
      question:
        "The ionic compound among the following with the highest lattice energy is:",
      options: ["LiF", "NaCl", "KCl", "CsI"],
      answer: 0,
    },
    {
      id: "siba25-q123",
      question:
        "All of the following have two bond pairs and show linear geometry except:",
      options: ["SnCl₂", "CS₂", "HCN", "CO₂"],
      answer: 0,
    },
    {
      id: "siba25-q124",
      question:
        "If the ionization energy of an element is greater, then:",
      options: [
        "More is its reducing power",
        "More is its electropositivity",
        "Less is its metallic character",
        "More is its atomic radius",
      ],
      answer: 2,
    },
    {
      id: "siba25-q125",
      question: "Which compound will not show geometrical isomerism:",
      options: [
        "But-2-ene",
        "1,2-dimethylcyclopropane",
        "Pent-1-ene",
        "1,3-dimethylcyclopentane",
      ],
      answer: 2,
    },
    {
      id: "siba25-q126",
      question: "The mass of hydrogen gas needed to produce 51 g of ammonia is:",
      options: ["6 g", "9 g", "12 g", "15 g"],
      answer: 1,
    },
  
    // =========================================================
    // PART III — PHYSICS
    // =========================================================
  
    {
      id: "siba25-q127",
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
      id: "siba25-q128",
      question:
        "During the drilling of a metal surface, the drill bit heats up. This heat comes from the:",
      options: [
        "Vibration of the tool",
        "Work done against friction",
        "Flow of electric current",
        "Compression of air",
      ],
      answer: 1,
    },
    {
      id: "siba25-q129",
      question:
        "If 2J of work is done in moving two coulombs of charge from one point to another in an electric field, the potential difference between the points is:",
      options: ["1 J/C", "2 J/C", "1 J/C", "2 J/C"],
      answer: 2,
    },
    {
      id: "siba25-q130",
      question: "The motion of transverse waves involves particle's vibration:",
      options: [
        "Along the wave direction",
        "Opposite to energy flow",
        "Perpendicular to wave propagation",
        "In random directions at every point",
      ],
      answer: 2,
    },
    {
      id: "siba25-q131",
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
      id: "siba25-q132",
      question:
        "A body moving in a circle, half revolution in terms of radians is equivalent to:",
      options: ["π", "π/6", "π/2", "2π"],
      answer: 0,
    },
    {
      id: "siba25-q133",
      question:
        "If A = (aî + bĵ) and B = 4(aî + bĵ), then the magnitude of A × B is:",
      options: ["4(a² + b²)", "4abk̂", "8(a + b)", "0"],
      answer: 3,
    },
    {
      id: "siba25-q134",
      question:
        "A proton and an alpha particle enter a magnetic field with equal speeds, compared to the proton, the alpha particle's path will have:",
      options: [
        "Larger radius",
        "Smaller radius",
        "Smaller path length",
        "Greater deflection",
      ],
      answer: 0,
    },
    {
      id: "siba25-q135",
      question:
        "An electron is projected along the positive x-axis in a magnetic field lying in xz-plane. The magnetic force on the electron will act along the:",
      options: ["x-axis", "-x-axis", "y-axis", "-y-axis"],
      answer: 2,
    },
    {
      id: "siba25-q136",
      question:
        "The magnetic flux through a loop of 1m² in a 0.5T magnetic field is same as magnetic flux through a loop of 0.5 m² in a magnetic field of:",
      options: [
        "1.0 T at 0°",
        "1.0 T at 60°",
        "2.0 T at 90°",
        "0.5 T at 90°",
      ],
      answer: 0,
    },
    {
      id: "siba25-q137",
      question:
        "A body of mass 10 kg is falling through a viscous medium and reached terminal velocity. The net force on the body will be:",
      options: ["0 N", "9.8 N", "98 N", "980 N"],
      answer: 0,
    },
    {
      id: "siba25-q138",
      question:
        "The value of temperature co-efficient of a conductor is zero. This indicates that with the rise in temperature, resistance of conductor:",
      options: ["Increases", "Decreases", "Remain same", "Becomes zero"],
      answer: 2,
    },
    {
      id: "siba25-q139",
      question:
        "The path difference between two sound waves coming from a coherent source of wavelength 50 cm at a point is 100 cm. The superposition of the waves at that point produces:",
      options: ["Beats", "Echo", "Loudness", "Silence"],
      answer: 2,
    },
    {
      id: "siba25-q140",
      question: "Potential energy decreases in the process of:",
      options: [
        "Compressing a spring",
        "Stretching a spring",
        "Releasing a stretched spring",
        "Holding the spring at maximum extension",
      ],
      answer: 2,
    },
    {
      id: "siba25-q141",
      question:
        "A diver of mass m is swimming at a depth h below the sea level. If the reference level is taken at sea level, the gravitational potential energy of the diver is:",
      options: ["0", "mgh", "-mgh", "2mgh"],
      answer: 2,
    },
    {
      id: "siba25-q142",
      question:
        "A constant force F acts on a body and displaces it by distance Δd in a time Δt. The rate at which force is doing work is:",
      options: [
        "F × Δd",
        "F × Δt",
        "F × Δd / Δt",
        "F × Δt / Δd",
      ],
      answer: 2,
    },
    {
      id: "siba25-q143",
      question:
        "In circular motion, if angular displacement is kept constant, decreasing the radius will:",
      options: [
        "Increase linear displacement",
        "Increase linear velocity",
        "Decrease linear displacement",
        "Not affect linear displacement",
      ],
      answer: 2,
    },
    {
      id: "siba25-q144",
      question:
        "When force and displacement are in opposite direction then the work done is said to be:",
      options: ["Positive", "Negative", "Infinite", "Maximum"],
      answer: 1,
    },
    {
      id: "siba25-q145",
      question:
        "In a step-up transformer, if the secondary voltage is increased by a factor of 10, the current in secondary coil will be:",
      options: [
        "10 times higher than the primary current",
        "10 times lower than the primary current",
        "Equal to the primary current",
        "One-tenth of the primary current in transformer",
      ],
      answer: 3,
    },
    {
      id: "siba25-q146",
      question: "When a droplet reaches terminal velocity, its acceleration is:",
      options: ["Zero", "Variable", "Not changed", "Negative"],
      answer: 0,
    },
    {
      id: "siba25-q147",
      question:
        "Newton’s original formula underestimated speed of sound in air because he:",
      options: [
        "Ignored viscosity",
        "Assumed isothermal",
        "Considered vacuum conditions",
        "Assumed adiabatic",
      ],
      answer: 1,
    },
    {
      id: "siba25-q148",
      question:
        "The point where the electric field is zero between two opposite charge lies:",
      options: [
        "Closer to the positive charge",
        "At the mid-point",
        "Closer to the negative charge",
        "Nowhere between them",
      ],
      answer: 3,
    },
    {
      id: "siba25-q149",
      question:
        "Consider these two vectors A = 2î + 3ĵ and B = -6î + 4ĵ. The angle between these two vectors is:",
      options: ["0°", "90°", "120°", "180°"],
      answer: 1,
    },
    {
      id: "siba25-q150",
      question:
        "A displacement time graph is a straight line inclined up at angle of 45° with X-axis, velocity of body according to this graph is:",
      options: [
        "Increasing",
        "Decreasing",
        "Constant",
        "Decreasing at start and then may decrease",
      ],
      answer: 2,
    },
    {
      id: "siba25-q151",
      question:
        "A 150 kg car has its velocity reduced from 20 m/s to 10 m/s in 3.0 sec. How large was the average retarding force?",
      options: ["500 N", "2500 N", "1500 N", "1000 N"],
      answer: 0,
    },
    {
      id: "siba25-q152",
      question: "The phenomenon of interference of sound waves requires:",
      options: [
        "Two sources with different frequencies",
        "Two coherent sources",
        "A single source",
        "A single source and a reflecting surface",
      ],
      answer: 1,
    },
    {
      id: "siba25-q153",
      question:
        "A gas expands from 1 m³ to 3 m³ at constant pressure of 2 Pa. Work done is:",
      options: ["2J", "4J", "6J", "8J"],
      answer: 1,
    },
    {
      id: "siba25-q154",
      question: "If frequency of AC is doubled, the inductive reactance will:",
      options: ["Remain same", "Be halved", "Be doubled", "Become zero"],
      answer: 2,
    },
    {
      id: "siba25-q155",
      question:
        "The force between two charges is 28 N in vacuum. If paraffin wax of relative permittivity 2.8 is introduced between the charges as a medium, then the force reduces to:",
      options: ["25 N", "20 N", "15 N", "10 N"],
      answer: 3,
    },
    {
      id: "siba25-q156",
      question:
        "A body moves along a semicircular path of radius 10 m from one end of the diameter to the other. The ratio of distance to displacement is:",
      options: ["π : 1", "1 : π", "π : 2", "2 : π"],
      answer: 2,
    },
    {
      id: "siba25-q157",
      question:
        "A body is projected with speed v making an angle θ with the horizontal and covers a horizontal range R. If its speed is doubled, the new range will be:",
      options: ["R/2", "R", "2R", "4R"],
      answer: 3,
    },
    {
      id: "siba25-q158",
      question:
        "A ball of mass m strikes a wall and rebounds with the same speed in the opposite direction, taking the initial direction as positive. The change in momentum of the ball is:",
      options: ["0", "mv", "-2mv", "-mv"],
      answer: 2,
    },
    {
      id: "siba25-q159",
      question:
        "A point lies 3 m from a +5 µC charge and 4 m from a -3 µC charge. The most appropriate direction of the net electric field at this point is directed:",
      options: [
        "Away from +5 µC charge",
        "Towards +5 µC charge",
        "Away from the -3 µC charge",
        "Perpendicular to the line joining the charges",
      ],
      answer: 0,
    },
    {
      id: "siba25-q160",
      question:
        "The increase in kinetic energy associated with decreased pressure of a fluid in a horizontal pipe is a consequence of:",
      options: [
        "Bernoulli's Principle",
        "Equation of continuity",
        "Pascal’s principle",
        "Torricelli’s theorem",
      ],
      answer: 0,
    },
    {
      id: "siba25-q161",
      question:
        "The electric field at a point due to a point charge is 200 N/C. If a -4C test charge is placed at that point, then the magnitude of electric field and electric force on it is:",
      options: [
        "200 N/C and 50 N",
        "200 N/C and 200 N",
        "200 N/C and 800 N",
        "800 N/C and 800 N",
      ],
      answer: 2,
    },
    {
      id: "siba25-q162",
      question:
        "Internal resistance reduces the terminal voltage because it:",
      options: [
        "Produces back emf",
        "Causes power loss inside the battery",
        "Increases the current",
        "Decreases the emf",
      ],
      answer: 1,
    },
  
    // =========================================================
    // PART IV — ENGLISH
    // =========================================================
  
    {
      id: "siba25-q163",
      question: "Choose the word with incorrect spelling:",
      options: ["Immigrant", "Ancestors", "Montessori", "Pregmetic"],
      answer: 3,
    },
    {
      id: "siba25-q164",
      question:
        "He does his work without any care. The underlined part of the sentence is:",
      options: [
        "Adverb phrase",
        "Adjective phrase",
        "Noun phrase",
        "Appositive phrase",
      ],
      answer: 0,
    },
    {
      id: "siba25-q165",
      question:
        "The board will approve the budget only after the auditor verifies the accounts. The most appropriate passive voice for the given sentence is:",
      options: [
        "The budget will be approved by the board only after the accounts are verified by the auditor.",
        "The budget is approved by the board only after the accounts have been verified by the auditor.",
        "The budget is being approved by the board only after the accounts are verified by the auditor.",
        "The budget has been approved by the board only after the accounts were verified by the auditor.",
      ],
      answer: 0,
    },
    {
      id: "siba25-q166",
      question: "Identify the simile:",
      options: [
        "She trembled like a leaf in the wind.",
        "She was a statue, frozen in fear.",
        "She was drowning in doubt.",
        "Her thoughts were a whirlwind.",
      ],
      answer: 0,
    },
    {
      id: "siba25-q167",
      question:
        "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
      options: ["Joyful", "Weepy", "Monotonous", "Humorous"],
      answer: 1,
    },
    {
      id: "siba25-q168",
      question:
        'He said, “Will you listen to such a man?” Choose the most appropriate indirect speech conversion from the given options:',
      options: [
        "He asked them that they would listen to such a man.",
        "He asked them whether they would listen to such a man.",
        "He told them whether they will listen to such a man.",
        "He asked them to listen to such a man.",
      ],
      answer: 1,
    },
    {
      id: "siba25-q169",
      question:
        'Choose the sentence in which “only” indicates that Jamila was the only person who spoke about her tiredness.',
      options: [
        "Only Jamila said she was tired.",
        "Jamila only said she was tired.",
        "Jamila said only she was tired.",
        "Jamila said she was only tired.",
      ],
      answer: 0,
    },
    {
      id: "siba25-q170",
      question: "Choose the correct sentence:",
      options: [
        "The new policy aims at reduce waste, to promote recycling, and creating awareness among citizens.",
        "The new policy aims to reducing waste, promoting recycling, and create awareness among citizens.",
        "The new policy aims to reduce waste, to promote recycling, and creating awareness among citizens.",
        "The new policy aims to reduce waste, promote recycling, and create awareness among citizens.",
      ],
      answer: 3,
    },
    {
      id: "siba25-q171",
      question: "The purpose of using exaggerated language in parody is:",
      options: [
        "To create a serious tone",
        "To criticize societal norms",
        "To entertain and mock",
        "To confuse the reader",
      ],
      answer: 2,
    },
  
    // =========================================================
    // PART V — LOGICAL REASONING
    // =========================================================
  
    {
      id: "siba25-q172",
      question:
        "If A is mother of B and C is child of B, then what is the relationship between A and C?",
      options: ["Aunt", "Grandmother", "Sister", "Cousin"],
      answer: 1,
    },
    {
      id: "siba25-q173",
      question: "Which number comes in the missing place? 120, 119, 117, 114, 110, ___",
      options: ["95", "100", "105", "107"],
      answer: 2,
    },
    {
      id: "siba25-q174",
      question:
        "A spying agent coded POWER as QPXFS. Using this pattern, what will be the code for GUNED?",
      options: ["HVPFE", "HVRFE", "HVOFE", "IVRFG"],
      answer: 2,
    },
    {
      id: "siba25-q175",
      question:
        "A new virus is spreading rapidly in the city. The government should impose temporary travel restrictions. What is true about this course of action?",
      options: [
        "Travel restrictions help control the virus spread",
        "The government should promote travel to support the economy",
        "Travel restrictions do not affect virus transmission",
        "People should disregard government advice",
      ],
      answer: 0,
    },
    {
      id: "siba25-q176",
      question:
        "A tank can hold 240 liters of water. Currently, water is filled to one third of its capacity. How much more water can it hold?",
      options: ["60 liters", "80 liters", "100 liters", "160 liters"],
      answer: 3,
    },
    {
      id: "siba25-q177",
      question: "M, N, P, Q, S, ??",
      options: ["T", "U", "V", "W"],
      answer: 0,
    },
    {
      id: "siba25-q178",
      question:
        "If Amna is older than Muneeb, and Muneeb is younger than Jaffar, then Amna is:",
      options: [
        "Amna is older than Jaffar",
        "Amna is younger than Jaffar",
        "Amna and Jaffar are the same age",
        "There is not enough information to say",
      ],
      answer: 3,
    },
    {
      id: "siba25-q179",
      question:
        "Statements: All melons are apples. No apples are mangoes. Which of the following conclusions about the given statements are true? Conclusion I: All melons are mangoes. Conclusion II: Apples are not mangoes.",
      options: [
        "Only I",
        "Only II",
        "Both I and II",
        "Neither I nor II",
      ],
      answer: 1,
    },
    {
      id: "siba25-q180",
      question:
        "In a family of six members: P is the father of Q. R is the mother of Q. S is the sister of Q. T is the brother of P. Who is the uncle of Q?",
      options: ["P", "R", "S", "T"],
      answer: 3,
    },
  ];