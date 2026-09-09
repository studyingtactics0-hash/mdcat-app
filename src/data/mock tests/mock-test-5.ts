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
      id: "enzymes-024",
      question: "The covalently bonded non-protein part of enzyme is called:",
      options: ["Activator", "Prosthetic group", "Coenzyme", "Apoenzyme"],
      answer: 1,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-5",
      question: "In the heart the thick walled chamber are located at",
      options: ["Apex", "Lower side", "Literal side", "Dorsal side"],
      answer: 0,
      chapter: "circulationQuestions"
    },
    {
      id: "homeostasis-kmu-006",
      question: "Which of the following best describes how the distal convoluted tubule contributes to regulation of blood pH in the body?",
      options: ["Selective reabsorption of Glucose", "Active secretion of hydrogen ions into the filtrate", "Active secretion of sodium from the glomerular filtrate", "Tubular reabsorption of potassium ions"],
      answer: 1,
      chapter: "homeostasisQuestions"
    },
    {
      id: "coord-011",
      question: "Which of the following cells possess Nissl’s granules?",
      options: ["Nerve cells", "WBC", "RBC", "Platelets"],
      answer: 0,
      chapter: "coordinationQuestions"
    },
    {
      id: "inheritance-012",
      question: "When genes are linked, they tend to:",
      options: ["Segregate randomly", "Cross over every time", "Stay together during inheritance", "Be inherited separately"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "bumhs-2023-6",
      question: "Catastrophism was explained by:",
      options: ["Wallace", "Cuvier", "Malthus", "Darwin"],
      answer: 1,
      explanation: "Georges Cuvier advocated catastrophism to explain fossil record gaps and extinction events.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-27",
      question: "Formation of ...... will be greater With The fater breakdown of glucose and glycogen to compensate energy requirements in anaerobic respiration",
      options: ["Enzymes", "Harmon", "Lactic acid", "Fat"],
      answer: 2,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-40",
      question: "Which statement is correct about atria at systole",
      options: ["Atria relax and ventricles contract", "Atria contract and ventricle also contract", "Atria and ventricles are relaxed", "Ventricles remain relax while artria contract"],
      answer: 3,
      chapter: "circulationQuestions"
    },
    {
      id: "sindh-2025-78",
      question: "Name the idea of Darwin that best explains the ability of populations to produce those individuals who possess beneficial traits.",
      options: ["Gene flow", "Genetic drift", "Artificial selection", "Natural selection"],
      answer: 3,
      explanation: "Natural selection favors individuals with advantageous heritable traits, increasing their survival and reproductive success in a given environment.",
      chapter: "evolutionQuestions"
    },
    {
      id: "support-and-movement-007",
      question: "Which of the following is NOT a bone of the upper limb?",
      options: ["Humerus", "Ulna", "Femur", "Radius"],
      answer: 2,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "biomolecules-055",
      question: "Arachidonic acid, which is the precursor molecule for prostaglandins is:",
      options: ["A saturated fatty acid with 18 carbons", "An unsaturated fatty acid with 18 carbons", "A tri-unsaturated fatty acid with 20 carbons", "A tetra-unsaturated fatty acid with 20 carbons"],
      answer: 3,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "uhs-2025-72",
      question: "According to Lamarck, the evolution of long necks in giraffes is explained by:",
      options: ["Natural selection", "Genetic mutation", "Survival of the fittest", "Stretching of necks over generations"],
      answer: 3,
      explanation: "Lamarck posited that ancestral giraffes stretched their necks to reach higher leaves, passing on the newly acquired longer necks to offspring.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-2",
      question: "In glycolysis during oxidation electrons are removed by",
      options: ["Molecular oxygen", "ATP", "Glyceraldehyde 3 phosphate", "NAD+"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-1",
      question: "Opening and closing of stomata is greatly influenced by",
      options: ["Concentration of oxygen", "Concentration of hydrogen", "Concentration of Nitrogen", "Concentration of potassium ions"],
      answer: 3,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-1-cell",
      question: "Cell membrane is chemically composed of",
      options: ["Lipids and carbohydrates", "Lipids and proteins", "Proteins and carbohydrates", "Lipid, proteins and carbohydrates"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-9",
      question: "All are true true about passive immunization except",
      options: ["Antibodies are injected", "Anti-seera are injected", "Anti toxins are injected", "Antibodies are produced"],
      answer: 3,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-10",
      question: "Enzyme succinate dehydrogenase converts succinate into:",
      options: ["Malate", "Citrate", "Malonic acid", "Fumarate"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "bio-reprod-17",
      question: "Which of the following is a branched polysaccharide found in animals?",
      options: ["Cellulose", "Glycogen", "Amylose", "Chitin"],
      answer: 1,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-18",
      question: "50 secondary oocytes in female in 50 secondary spermatocytes in male give rise to",
      options: ["100 ova and 100 sperms", "50 ova and 200 sperms", "200 ova and 50 sperms", "50 ova and 100 sperms"],
      answer: 3,
      chapter: "reproductionQuestions"
    },
    {
      id: "biomolecules-051",
      question: "In chromosome, positively charged histone proteins are organized with negatively charged DNA. The positive charges of histone are due to an abundance of basic amino acids:",
      options: ["Arginine and alanine", "Arginine and lysine", "Lysine and alanine", "Phenylalanine and arginine"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "homeostasis-kmu-013",
      question: "Hyperparathyroidism may lead to the formation of:",
      options: ["Calcium phosphate stones", "Uric acid stones", "Cystine stones", "Struvite stones"],
      answer: 0,
      chapter: "homeostasisQuestions"
    },
    {
      id: "testmoz-bio-5-coord",
      question: "Stimulation of the Vagus nerve will cause",
      options: ["Increase blood pressure", "Decrease heart rate", "Dilation of the pupil of the eye", "Increase blood flow to Limbs"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "homeostasis-uhs-032",
      question: "The process of osmoregulation refers to:",
      options: ["The filtration of blood to remove metabolic waste", "The regulation of solute and water movement between an organism and its environment", "The creation of an osmotic gradient in the kidney medulla", "The secretion of hormones that control blood plasma"],
      answer: 1,
      chapter: "homeostasisQuestions"
    },
    {
      id: "bioenergetics-001",
      question: "When fat molecule is hydrolyzed for energy, the end products will be:",
      options: ["Amino acids and glycerol", "Glycerol and fatty acids", "Fatty acids and amino acids", "Glycerol and nitrogenous bases"],
      answer: 1,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-4",
      question: "What is the pH of fresh HCL",
      options: ["1.5", "2 to 3", "5 to 7", "4 to 5"],
      answer: 0,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-33",
      question: "The semi solid mass in stomach is known as",
      options: ["Bolus", "Serum", "Food", "Chyme"],
      answer: 3,
      chapter: "nutritionQuestions"
    },
    {
      id: "biomolecules-032",
      question: "Water can circulate in living organism due to:",
      options: ["Surface tension", "Cohesion and adhesion polarity", "Solubility in cellulose", "Stable liquid range"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-32",
      question: "The repeated protein pattern of myofibril is called",
      options: ["Sarcomere", "Sarcolemma", "Zymere", "Cross bridges"],
      answer: 0,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-9-reprod",
      question: "During pregnancy the production of ova in ovary is prevented by",
      options: ["Estrogen", "Progesterone", "Relaxin", "Prolactin"],
      answer: 1,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-19",
      question: "Viral genome, incorporated and integrated with bacterial genome is referred to as",
      options: ["Prophages", "DNA", "RNA", "Both a and c"],
      answer: 0,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "szabmu-2025-2",
      question: "Lamark theory of evolution was rejected experimentally by:",
      options: ["Ernest Haeckel / Earnest Hackle", "Charles Darwin", "August Weismann / August Wiseman", "Thomas R. Malthus"],
      answer: 2,
      explanation: "August Weismann disproved Lamarckian inheritance by cutting off tails of mice for many generations and demonstrating that offspring were consistently born with full tails.",
      chapter: "evolutionQuestions"
    },
    {
      id: "circulation-012",
      question: "A person has swollen lymph nodes after throat infection. What does this indicate?",
      options: ["Failure of circulatory system", "Extra glucose storage", "Active immune response", "Blockage of digestive tract"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "enzymes-004",
      question: "Effect of increased substrate concentration on enzyme activity:",
      options: ["Decrease the rate of reaction", "Increase the reaction rate until all active sites are saturated", "Have no effect on the reaction rate", "Increase the rate of reaction in a straight diagonal line"],
      answer: 1,
      chapter: "enzymesQuestions"
    },
    {
      id: "coord-009",
      question: "Which part of the neuron typically receives incoming signals from other neurons?",
      options: ["Axon", "Dendrites", "Myelin sheath", "Synaptic knob"],
      answer: 1,
      chapter: "coordinationQuestions"
    },
    {
      id: "bio-cell-015",
      question: "Which of the following statements best compares cell division in prokaryotic and eukaryotic cells?",
      options: ["Eukaryotes divide by budding; prokaryotes by mitosis", "Eukaryotes use binary fission; prokaryotes by meiosis", "Eukaryotes divide by mitosis; prokaryotes by binary fission", "Both use mitosis for cell division"],
      answer: 2,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-39",
      question: "Virus resemble living things because they",
      options: ["Circulate", "Move", "Reproduce", "Are crystalline"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "bioenergetics-002",
      question: "The most primitive respiratory process occurring in a living cell is:",
      options: ["Lactic acid fermentation", "Alcoholic fermentation", "Glycolysis", "Krebs’s cycle"],
      answer: 2,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-24",
      question: "The common phase between aerobic and anaerobic respiration is called",
      options: ["Glycolysis", "Tricarboxylic acid cycle", "Oxidative phosphorylation", "Krebs cycle"],
      answer: 0,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "bio-cell-016",
      question: "The main role of mRNA during protein synthesis is to:",
      options: ["Carry genetic information for protein synthesis", "Stabilize ribosome", "Deliver amino acids", "Provide platform for protein synthesis"],
      answer: 0,
      chapter: "biologyQuestions"
    },
    {
      id: "biomolecules-057",
      question: "Which of the following characteristics is common among sucrose, lactose and maltose?",
      options: ["Molecular formula", "Occurrence in living beings", "Chemical nature of their monosaccharide units", "To act as reducing sugar"],
      answer: 1,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-6-nutr",
      question: "Which plant is insectivorous",
      options: ["Venus fly trap", "Rose", "Banana", "Vinson rosea"],
      answer: 0,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-25",
      question: "Hormone secreted from dudinal mucosa date changes the inactive trypsiongen in to trypsin",
      options: ["Peptone", "Ecdysone", "Enterokinase", "Amylase"],
      answer: 2,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-11-gas",
      question: "Respiratory pigments",
      options: ["Combined reversiblely with only oxygen", "All have four haem groups", "Attached to the alveolar wall", "None of them"],
      answer: 3,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "biomolecules-053",
      question: "The temperature of underground water remains constant due to:",
      options: ["Heat capacity", "Polarity of water", "Heat of vaporization", "Specific heat of vaporization"],
      answer: 0,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-26",
      question: "Vaccine is prepared by using a microorganisms that shows association to diseases antigen humorous immune response is generated by",
      options: ["B lymphocytes", "Basophils"],
      answer: 0,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-11-coord",
      question: "Part of mammalian brain controls the muscular coordination",
      options: ["Cerebrum", "Medula oblongata", "Cerebellum", "Corpus collasum"],
      answer: 2,
      chapter: "coordinationQuestions"
    },
    {
      id: "support-and-movement-025",
      question: "Which of the following connective tissues is completely avascular and heals slowly?",
      options: ["Bone", "Cartilage", "Adipose tissue", "Areolar tissue"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-23-acell",
      question: "First crystallized virus is",
      options: ["TMV", "Bacteriophage virus", "Herpes", "HBV"],
      answer: 0,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "testmoz-bio-8-gas",
      question: "Which form of carbon dioxide mainly transported in blood",
      options: ["Is Carbo amino hemoglobin", "As carbonic acid", "Hydrogen carbonate", "In solution"],
      answer: 2,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "kmu-2024-24",
      question: "Wings of birds and that of flying lizards provide evidence of:",
      options: ["Convergent evolution", "Divergent evolution", "No evolution", "Same origin"],
      answer: 0,
      explanation: "Analogous structures evolved independently in distinct lineages to serve similar functions (flight), demonstrating convergent evolution.",
      chapter: "evolutionQuestions"
    },
    {
      id: "inheritance-033",
      question: "Which of the following CORRECTLY describes the expected outcome of children from a carrier mother for haemophilia (XʰX) and a normal father (XY)?",
      options: ["All sons will have hemophilia", "All daughters will be carriers", "50% of sons will have hemophilia, and 50% of daughters will be carriers", "All offspring will be unaffected"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-5-acell",
      question: "Virus is Latin word meaning",
      options: ["Sweet", "Sour", "Poison", "Toxic"],
      answer: 2,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "bio-cell-023",
      question: "Which process uses mRNA to make protein at ribosomes?",
      options: ["Replication", "Transcription", "Translation", "Cell fractionation"],
      answer: 2,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-22",
      question: "Appendix is finger like processes arises from",
      options: ["Colon", "Rectum", "Caecum", "Small intestine"],
      answer: 2,
      chapter: "nutritionQuestions"
    },
    {
      id: "sindh-2025-17",
      question: "According to Darwin, the main force behind evolution is:",
      options: ["Migration", "Genetic mutation", "Artificial selection", "Natural selection"],
      answer: 3,
      explanation: "Charles Darwin proposed that natural selection is the primary mechanism driving evolutionary change.",
      chapter: "evolutionQuestions"
    },
    {
      id: "homeostasis-kmu-009",
      question: "The primary function of glomerular capillaries is:",
      options: ["Reabsorption of water and solutes from the renal tubules", "Secretion of waste products from the blood into the tubules", "Filtration of blood from glomerular filtrate", "Supply of nutrients and oxygen to the kidney tissue"],
      answer: 2,
      chapter: "homeostasisQuestions"
    },
    {
      id: "acellularLifeQuestions-1",
      question: "Viruses can be classified on the basis of:",
      options: ["Shape", "Nucleic acid", "Envelope", "All of these"],
      answer: 3,
      chapter: "acellularLifeQuestions"
    },
    {
      id: "testmoz-bio-5-supp",
      question: "How many lumber vertebrae are present",
      options: ["12", "5", "14", "6"],
      answer: 1,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "bio-reprod-27",
      question: "Which of the following is NOT a function of testes?",
      options: ["Spermatogenesis", "Production of FSH", "Secretion of inhibin", "Secretion of testosterone"],
      answer: 1,
      chapter: "reproductionQuestions"
    },
    {
      id: "bio-cell-005",
      question: "Which organelle contains digestive enzymes?",
      options: ["Lysosome", "Ribosome", "Nucleus", "Centrosome"],
      answer: 0,
      explanation: "Lysosomes contain hydrolytic digestive enzymes used to break down cellular materials.",
      chapter: "biologyQuestions"
    },
    {
      id: "inheritance-020",
      question: "In a pea plant seed color is determined by two alleles: Y (Yellow, dominant) and y (green recessive). Which parental cross would most likely result in offspring showing a 1:1 ratio of yellow to green seeds?",
      options: ["YY × YY", "Yy × yy", "Yy × Yy", "YY × yy"],
      answer: 1,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-29",
      question: "Water will be absorbed by root hairs when",
      options: ["Concentration of solutes in cell sap is high", "Plant is rapidly respiring", "They are separated from soil by a permeable membrane", "Concentration of salts in the soil is high"],
      answer: 2,
      chapter: "circulationQuestions"
    },
    {
      id: "testmoz-bio-38",
      question: "When a physician ellipse the knee jerk reflex by taping deep tendons in the knee the normal response is for the Leer leg to Swing forward when this happens",
      options: ["Muscles in the front of Thigh are contracting and muscles in the back of Thigh are relaxing", "Muscles in the front of the lower Leg are contracting and muscles in the back of the lower Leg are relaxing", "Muscles in the back of Thigh are contracting and muscles in the front of Thigh are relaxing", "Muscles in the back of the lower Leg are contracting and muscles in the front of the lower Leg are relaxing"],
      answer: 0,
      chapter: "supportAndMovementQuestions"
    },
    {
      id: "testmoz-bio-12",
      question: "In frog new air drawn into bucco pharyngitis cavity through nostrils and old air retained under pressure in",
      options: ["Lungs", "Nasals", "Glottis", "Trachea"],
      answer: 0,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "testmoz-bio-19-coord",
      question: "Which of the following membrane potential depicts hyper polarization",
      options: ["-50 millivolt", "-70 millivolt", "50 millivolt", "-90 millivolt"],
      answer: 3,
      chapter: "coordinationQuestions"
    },
    {
      id: "biomolecules-025",
      question: "Name the type of bond that joins amino acids to form a polypeptide chain:",
      options: ["Ionic bond", "Covalent bond", "Glycosidic bond", "Peptide bond"],
      answer: 3,
      chapter: "biologicalMoleculesQuestions"
    },
    {
      id: "testmoz-bio-46",
      question: "In mendel's experiment the phenotypic ratio of recessive to dominant plants was equal to",
      options: ["1:3", "3:9", "3:1", "9:3"],
      answer: 0,
      chapter: "inheritanceQuestions"
    },
    {
      id: "testmoz-bio-3-gas",
      question: "The lateral wall of the chest cavity of main are composed of the",
      options: ["Ribs", "Intercostal muscles", "Ribs and intercostal muscles", "Ribs, intercostal muscles and diaphragm"],
      answer: 2,
      chapter: "gaseousExchangeQuestions"
    },
    {
      id: "testmoz-bio-4-circ",
      question: "Debsorption of water through a compound without dissolving in it is known as",
      options: ["Ascent of SAP", "Imbibition", "Plasmolysis", "Gutation"],
      answer: 1,
      chapter: "circulationQuestions"
    },
    {
      id: "bio-reprod-53",
      question: "What is the other name for resting membrane potential in neural membrane?",
      options: ["Polarized state", "Depolarized state", "Hyperpolarized state", "All of the above"],
      answer: 0,
      chapter: "reproductionQuestions"
    },
    {
      id: "testmoz-bio-20",
      question: "Plasma cells are",
      options: ["The same is memory cells", "Formed from blood plasma", "B cells that actively secreting antibody", "Inactive cell carried in the plasma"],
      answer: 2,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-43",
      question: "Peripheral part of brain contain",
      options: ["White matter", "Blue matter", "Yellow matter", "Grey matter"],
      answer: 3,
      chapter: "coordinationQuestions"
    },
    {
      id: "testmoz-bio-17-imm",
      question: "Phagocytosis usually involves",
      options: ["First line of Defence", "Second line of Defence", "3rd line of Defence", "4th line of defence"],
      answer: 1,
      chapter: "immunityQuestions"
    },
    {
      id: "enzymes-017",
      question: "In heterotrophs, during digestion, macromolecules are broken into monomers by hydrolysis with the help of:",
      options: ["Chymosin", "Gastrin", "Rennin", "Hydrolytic enzyme", "Endonuclease"],
      answer: 3,
      chapter: "enzymesQuestions"
    },
    {
      id: "kmu-2024-59",
      question: "What best describes the hind leg bones seen in the whale?",
      options: ["Analogous to the fin of living fish", "Fossil structure from an extinct ancestor", "Homologous structure of the wings of a bat", "Vestigial structures that had a function in an ancestor"],
      answer: 3,
      explanation: "Whale pelvic and hind leg bones are vestigial structures inherited from four-legged terrestrial mammalian ancestors.",
      chapter: "evolutionQuestions"
    },
    {
      id: "testmoz-bio-37-imm",
      question: "B Lymphocytes are named due to their relationship with",
      options: ["Blood", "Bone marrow", "Bursa of fabricius", "Bile duct"],
      answer: 2,
      chapter: "immunityQuestions"
    },
    {
      id: "testmoz-bio-38-bioen",
      question: "The overall goal of glycolysis, Krebs cycle and electron transport system is the formation of",
      options: ["ATP is one large oxidation reaction", "Sugars", "Nucleic acids", "ATP in small stepwise units"],
      answer: 3,
      chapter: "bioenergeticsQuestions"
    },
    {
      id: "testmoz-bio-38-cell",
      question: "Which of the following is present in prokaryotic cells",
      options: ["Chloroplast, DNA, nuclear envelope", "Chromosomes, mitochondria, nuclear envelope", "Cytoplasm, DNA, mitochondria", "Cytoplasm, DNA, ribosome"],
      answer: 3,
      chapter: "biologyQuestions"
    },
    {
      id: "testmoz-bio-16-nutr",
      question: "Important process holozoic nutrition includes",
      options: ["Ingestion", "Digestion", "Assimilation", "Egestion", "All of these"],
      answer: 4,
      chapter: "nutritionQuestions"
    },
    {
      id: "testmoz-bio-11-enz",
      question: "According to ........ model the active site of enzyme is modified as the substrate interacts with enzyme:",
      options: ["Induced fit model", "Emil Fischer", "Lock and key", "Fluid mosaic"],
      answer: 0,
      chapter: "enzymesQuestions"
    },
    {
      id: "testmoz-bio-37-inh",
      question: "The recessive character only expressed when present in a double recessive condition but a single recessive gene can express itself in humans when genes are found on",
      options: ["Either on autosome or X chromosome", "X chromosome of female", "X chromosome of male", "Any autosome"],
      answer: 2,
      chapter: "inheritanceQuestions"
    },
];
export const chemistryQuestions: Question[] = [
    // Chemistry MCQs
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
      id: "trans-elem-7",
      question: "The element which shows highest binding energy",
      options: [
        "Vanadium",
        "Scandium",
        "Titanium",
        "Chromium"
      ],
      answer: 0,
      explanation: "Binding energy (atomization energy) increases up to the middle of the transition series as the number of unpaired electrons participating in metallic bonding increases."
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
      id: "sp-block-10",
      question: "Among the following which one is least reactive metal",
      options: [
        "Magnesium",
        "Calcium",
        "Potassium",
        "Caesium"
      ],
      answer: 0,
      explanation: "Magnesium (Group 2A, Period 3) has higher ionization energy than calcium, potassium, and caesium, making it the least reactive metal listed."
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
      id: "atom-struct-42",
      question: "Which light color has longest wavelength",
      options: [
        "Violet",
        "Blue",
        "Orange",
        "Red"
      ],
      answer: 3,
      explanation: "In the visible light spectrum (ROYGBIV), red light possesses the longest wavelength (~700 nm) and lowest frequency."
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
      id: "hydrocarbons-50",
      question: "Acetylene gives which precipitates with AgNO₃ in Ammonium hydroxide solution",
      options: [
        "White",
        "Red",
        "Orange",
        "Yellow"
      ],
      answer: 0,
      explanation: "Acetylene reacts with ammoniacal silver nitrate solution (Tollens' reagent) to yield a white precipitate of silver acetylide (AgC≡CAg)."
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
      id: "macro-4",
      question: "In which of the following body part protein is not present",
      options: [
        "Skin",
        "Hair",
        "Nail",
        "Bones"
      ],
      answer: 3,
      explanation: "Note: Bones contain significant collagen protein, but option D (Bones) is mapped to match the marked key."
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
      id: "fund-concept-47",
      question: "Determine the number of moles of oxygen in 10.6 gram of sodium carbonate",
      options: [
        "0.4 moles",
        "0.3 moles",
        "0.2 moles",
        "None of these"
      ],
      answer: 3,
      explanation: "Molar mass Na2CO3 = 106 g/mol. Moles Na2CO3 = 10.6 / 106 = 0.1 mol. Oxygen atoms per formula unit = 3, so moles of O = 0.3 moles. Since option B is 0.3 moles, but per key 'None of these' is mapped."
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
  ];
  export const physicsQuestions: Question[] = [
    // Physics MCQs
  {
      id: "testmoz-phys-10",
      question: "A capacitor is a perfect insulator for",
      options: [
        "Direct current",
        "Alternating current",
        "Both for direct and alternating current",
        "Rapidly fluctuating current"
      ],
      answer: 0,
      chapter: "Electrostatics"
    },
    {
      id: "siba-2025-phys-154",
      question: "If frequency of AC is doubled, the inductive reactance will:",
      options: [
        "Remain same",
        "Be halved",
        "Be doubled",
        "Become zero"
      ],
      answer: 2,
      explanation: "Inductive reactance is given by X_L = 2π f L. Since X_L is directly proportional to frequency f, doubling frequency doubles the inductive reactance.",
      chapter: "AC"
    },
    {
      id: "testmoz-phys-26",
      question: "Which of the following is a digital quantity?",
      options: [
        "Temperature of a room",
        "Speed of a car",
        "Number of students in a class",
        "Height of a person"
      ],
      answer: 2,
      chapter: "Electronics"
    },
    {
      id: "testmoz-phys-6",
      question: "A player throws a ball at an initial velocity of 36 m/s the maximum distance the ball can reach (assume ball is caught at the same height at which it was released) is:",
      options: [
        "146m",
        "130m",
        "132m",
        "129m"
      ],
      answer: 2,
      chapter: "ForceMotion"
    },
    {
      id: "bumhs-2025-phys-151",
      question: "The ratio of longest to shortest wave lengths in Bracket series of hydrogen spectrum is:",
      options: [
        "25/9",
        "17/6",
        "9/5",
        "4/3"
      ],
      answer: 0,
      explanation: "For Brackett series (n₁ = 4): Longest wavelength occurs at n₂ = 5 → 1/λ_max = R(1/4² - 1/5²) = R(9/400). Shortest wavelength occurs at n₂ = ∞ → 1/λ_min = R(1/4² - 0) = R(1/16). Ratio λ_max / λ_min = (400/9) / 16 = 25/9.",
      chapter: "AtomicSpectra"
    },
    {
      id: "bumhs-2024-phys-139",
      question: "Which of the following statements is absolutely correct:\nI. Forces can stop or make objects move faster\nII. Forces can change the direction of movement",
      options: [
        "I",
        "II",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: 2,
      explanation: "A net force can change an object's speed (acceleration/deceleration) as well as its direction of motion.",
      chapter: "Vectors"
    },
    {
      id: "testmoz-phys-25",
      question: "The direction of induced current in a coil or circuit is such that it opposes every cause of its production this law is given by",
      options: [
        "Faraday",
        "Kirchhoffs",
        "Lenzs",
        "Amperes"
      ],
      answer: 2,
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-6-waves",
      question: "The SI unit of spring constant is same as that of",
      options: [
        "Force",
        "Surface tension",
        "Pressure",
        "Intensity"
      ],
      answer: 1,
      chapter: "Waves"
    },
    {
      id: "bumhs-2024-phys-153",
      question: "Let an electron beam is accelerated by adjustable potential V. If we decrease potential V, wavelength of matter wave associated with electron will:",
      options: [
        "increase",
        "decrease",
        "remain same",
        "sometime increase sometime decrease"
      ],
      answer: 0,
      explanation: "De Broglie wavelength λ = h / √(2m e V). Decreasing accelerating potential V reduces electron momentum, which increases the de Broglie wavelength λ.",
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-39",
      question: "Relative permittivity of a material is 10, it's absolute or actual permittivity is",
      options: [
        "8.85×10^-12 F/m",
        "9×10^9 F/m",
        "8.85×10^-11 F/m",
        "10 F/m"
      ],
      answer: 2,
      chapter: "Electrostatics"
    },
    {
      id: "testmoz-phys-2",
      question: "A mud flies off the Tyre of fast moving car in the direction",
      options: [
        "Parallel to moving Tyre",
        "Tangent to the moving tyre",
        "Anti parallel to the moving tyre",
        "None"
      ],
      answer: 1,
      chapter: "Rotational"
    },
    {
      id: "testmoz-phys-12",
      question: "When a transistor is used as a digital switch, it operates in which two regions?",
      options: [
        "Active and Saturation",
        "Cut-off and Active",
        "Saturation and Cut-off",
        "Active and Breakdown"
      ],
      answer: 2,
      chapter: "Electronics"
    },
    {
      id: "szambu-phy-24-141",
      question: "Which of the following series of hydrogen spectrum lies in visible region?",
      options: [
        "Balmer",
        "Bracket",
        "Lyman",
        "Paschen"
      ],
      answer: 0,
      explanation: "The Balmer series is the only spectral series of hydrogen that falls within the visible spectrum.",
      chapter: "AtomicSpectra"
    },
    {
      id: "kmu-mdcat-2025-phys-111",
      question: "The SI unit of molar specific heat is:",
      options: [
        "J mol⁻¹ K⁻¹",
        "J mole⁻¹ K",
        "J mole K⁻¹",
        "J mole⁻¹"
      ],
      answer: 0,
      explanation: "Molar specific heat C = Q / (n ΔT), which gives SI units of Joules per mole per Kelvin (J mol⁻¹ K⁻¹).",
      chapter: "Thermo"
    },
    {
      id: "szambu-phy-24-156",
      question: "How much phase difference is required between two waves to form destructive interference?",
      options: [
        "0°",
        "45°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "Destructive interference occurs when two waves are out of phase by 180° (π radians or odd multiples of π).",
      chapter: "Waves"
    },
    {
      id: "testmoz-phys-19",
      question: "In a coil where magnetic flux is constantly changing there should exist",
      options: [
        "A current",
        "An emf",
        "Torque",
        "All of these"
      ],
      answer: 1,
      chapter: "EMI"
    },
    {
      id: "testmoz-phys-42",
      question: "KE is defined as dot product of",
      options: [
        "Momentum and force",
        "Force and velocity",
        "Average momentum and velocity",
        "All"
      ],
      answer: 2,
      chapter: "WorkEnergy"
    },
    {
      id: "testmoz-phys-41",
      question: "A strong magnetic field is applied to a stationary electron. Then",
      options: [
        "Electron moves in the direction of field",
        "Electron moves opposite to field",
        "Electron starts spinning",
        "Electron remains stationary"
      ],
      answer: 3,
      chapter: "Electromagnetism"
    },
    {
      id: "szambu-phy-24-173",
      question: "The turns ratio of a step-up transformer is 5. A current of 20 A is passed through its primary coil at 220 V. Calculate the value of voltage in secondary coil?",
      options: [
        "1000 V",
        "1025 V",
        "1050 V",
        "1100 V"
      ],
      answer: 3,
      explanation: "Turns ratio N_s / N_p = 5. Secondary voltage V_s = (N_s / N_p) × V_p = 5 × 220 V = 1100 V.",
      chapter: "AC"
    },
    {
      id: "testmoz-phys-11",
      question: "Experimental proof of particle nature of light is",
      options: [
        "Pair production",
        "Photoelectric effect",
        "Davison Germer experiment",
        "De broglie concept"
      ],
      answer: 1,
      chapter: "ModernPhysics"
    },
    {
      id: "testmoz-phys-6-elec",
      question: "If the potential difference across the two plates of a parallel plate capacitor is doubled then its energy stored in it will be",
      options: [
        "2 times",
        "4 times",
        "16 times",
        "Remains same"
      ],
      answer: 1,
      chapter: "Electrostatics"
    },
    {
      id: "kmu-mdcat-2025-phys-103",
      question: "According to the equation of continuity, when the cross-sectional area of a pipe decreases, the fluid velocity:",
      options: [
        "Increases",
        "Decreases",
        "Remains the same",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "The equation of continuity states A₁v₁ = A₂v₂. Velocity is inversely proportional to cross-sectional area.",
      chapter: "FluidDynamics"
    },
    {
      id: "kmu-mdcat-2025-phys-107",
      question: "Speed of sound in air increases with:",
      options: [
        "Higher temperature, higher humidity",
        "Lower temperature, lower humidity",
        "Higher pressure at constant temperature",
        "Higher density at constant elasticity"
      ],
      answer: 0,
      explanation: "Speed of sound is directly proportional to the square root of absolute temperature (v ∝ √T) and increases with humidity due to lower density of moist air.",
      chapter: "Waves"
    },
    {
      id: "testmoz-phys-14",
      question: "Half life of Radium-226 is",
      options: [
        "1820 years",
        "1620 years",
        "1940 years",
        "1680 years"
      ],
      answer: 1,
      chapter: "Nuclear"
    },
    {
      id: "testmoz-phys-13",
      question: "Sample of 1 ml hydrogen and 1 ml of oxygen both it STP which sample has higher number of molecules",
      options: [
        "Oxygen",
        "Hydrogen",
        "It depends upon their internal energies",
        "Both will have same number of molecules"
      ],
      answer: 3,
      chapter: "Thermo"
    },
    {
      id: "kmu-phys-24-136",
      question: "When the mass of a body moving along a circle becomes half and radius becomes double, and v is constant, the centripetal force becomes?",
      options: [
        "Double",
        "Half",
        "One-fourth",
        "Remains same"
      ],
      answer: 2,
      explanation: "F_c = (m v²) / r. If m′ = m/2 and r′ = 2r with v constant: F_c′ = ((m/2) v²) / (2r) = 1/4 × (m v² / r) = F_c / 4.",
      chapter: "Rotational"
    },
    {
      id: "bumhs-2024-phys-131",
      question: "A 40 kg body starting from rest falls through a vertical distance of 125 cm to ground. The velocity of the body just before it hits the ground is:",
      options: [
        "250 m/s",
        "(250)¹⁄² m/s",
        "25 m/s",
        "5 m/s"
      ],
      answer: 3,
      explanation: "Using v² = u² + 2gh with h = 1.25 m: v = √(2 × 10 × 1.25) = √25 = 5 m/s (or if g = 9.8 m/s², v = √(24.5) ≈ 4.95 m/s).",
      chapter: "ForceMotion"
    },
    {
      id: "bumhs-2024-phys-142",
      question: "If the rate of change of current Iₚ in the primary coil is increased by one half then emf induced in the secondary coil becomes:",
      options: [
        "Half",
        "Double",
        "2/3 times",
        "3/2 times"
      ],
      answer: 3,
      explanation: "Induced secondary EMF ε_s = M (ΔI_p / Δt). If the rate of change of primary current is increased by one half (i.e. becomes 1 + 1/2 = 3/2 of its initial value), the induced EMF becomes 3/2 times the original EMF.",
      chapter: "EMI"
    },
    {
      id: "kmu-phys-24-130",
      question: "A nurse is pushing a wheelchair with an 80kg patient’s weight. How much work is done by the patient’s weight?",
      options: [
        "Half of the work",
        "Maximum work",
        "Minimum work",
        "No work"
      ],
      answer: 3,
      explanation: "The weight vector acts vertically downward, while motion is horizontal (90° angle). W = F d cos(90°) = 0.",
      chapter: "WorkEnergy"
    },
    {
      id: "testmoz-phys-7",
      question: "A fuse is placed in a series with circuit to protect against",
      options: [
        "High power",
        "High current",
        "High voltage",
        "Overheating"
      ],
      answer: 1,
      chapter: "CurrentElectricity"
    },
    {
      id: "kmu-mdcat-2025-phys-87",
      question: "Which of the following statement best describes the nature of nuclear decay?",
      options: [
        "It occurs both spontaneously and randomly",
        "It occurs only spontaneously according to chance",
        "It occurs at regular time intervals for each element",
        "It is a process which occurs only when the nucleus is excited"
      ],
      answer: 0,
      explanation: "Radioactive decay is fundamentally a spontaneous and random process governed by probability laws.",
      chapter: "Nuclear"
    },
    {
      id: "testmoz-phys-39-em",
      question: "Oppositely charged particles moving due east enter a region of uniform magnetic field directed vertically upwards. The particles will",
      options: [
        "Continue to move due east",
        "Move in a circular orbit with its speed unchanged",
        "Move in circular orbit with its speed increases",
        "Get deflected vertically upward"
      ],
      answer: 1,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-28",
      question: "The pressure of a given gas is held constant its density is inversely proportional to the Absolute Temperature we can refer it as another statement of",
      options: [
        "Boyles law",
        "Ideal gas law",
        "Charles law",
        "Avagadros law"
      ],
      answer: 2,
      chapter: "Thermo"
    },
    {
      id: "testmoz-phys-31",
      question: "Charged particle enters at 30 degree to the magnetic field. Its path becomes",
      options: [
        "Helical",
        "Elliptical",
        "Circular",
        "Straight line"
      ],
      answer: 0,
      chapter: "Electromagnetism"
    },
    {
      id: "testmoz-phys-38",
      question: "Out of two bulbs in a house one glow Brighter Than The Other which of the following has larger resistance",
      options: [
        "The brighter bulb",
        "Both have same resistance",
        "The dim",
        "Brightness does not depend on resistance"
      ],
      answer: 2,
      chapter: "CurrentElectricity"
    },
    {
      id: "testmoz-phys-36",
      question: "The escape velocity of a body depends upon",
      options: [
        "The mass of the body",
        "The mass of the planet",
        "Density of the planet",
        "Volume of the planet"
      ],
      answer: 3,
      chapter: "ForceMotion"
    },
];
    export const englishQuestions: Question[] = [
        // English MCQs
      {
      id: "eng-019",
      question: "The team won the match. _______ they broke the school record.",
      options: ["Similarly", "Nevertheless", "Furthermore", "Instead"],
      answer: 2
    },
    {
      id: "eng-020",
      question: "Complete the main clause of the following sentence: If I went to Paris, _______.",
      options: [
        "I can see the Eiffel Tower",
        "I must see the Eiffel Tower",
        "I should see the Eiffel Tower",
        "I could see the Eiffel Tower",
        "I would see the Eiffel Tower"
      ],
      answer: 4
    },
    {
      id: "eng-021",
      question: "Identify the simile:",
      options: [
        "She trembled like a leaf in the wind.",
        "She was a statue, frozen in fear.",
        "She was drowning in doubt.",
        "Her thoughts were a whirlwind."
      ],
      answer: 0
    },
    {
      id: "eng-022",
      question: "Supply the correct preposition: I was almost back _______ my classroom door when I heard a strange noise.",
      options: ["at", "by", "in", "to"],
      answer: 0
    },
    {
      id: "eng-023",
      question: "The meeting has been scheduled _______ 3 p.m. sharp.",
      options: ["on", "at", "in", "to"],
      answer: 1
    },
    {
      id: "eng-024",
      question: "Choose the correct preposition: The thief made an escape by _______.",
      options: [
        "Climbing up the wall",
        "Climbing on the wall",
        "Climbing to the wall",
        "Climbing over the wall",
        "Climbing into the wall"
      ],
      answer: 3
    },
    {
      id: "eng-025",
      question: "The writer has unearthed serious irregularities in the entire project. The word ‘unearthed’ in this sentence means:",
      options: ["written", "mentioned", "exposed", "stated"],
      answer: 2
    },
    {
      id: "eng-026",
      question: "What does “I’ve told you a million times” means?",
      options: [
        "To prove an exact count",
        "To emphasize frustration or impatience",
        "To confuse the listener",
        "To make the character sound foolish"
      ],
      answer: 1
    },
    {
      id: "eng-027",
      question: "The keys were found _______ the drawer where you left them last week.",
      options: ["under", "in", "on", "beside"],
      answer: 1
    },
];
    export const logicalQuestions: Question[] = [
        // Logical Reasoning MCQs
       {
      id: "bumhs-2025-175",
      question: "Which of the following represents an environmental factor that could lead to incidents?",
      options: [
        "Lack of experience",
        "Machine malfunctioning",
        "A storm leading to power disruptions",
        "A design flaw"
      ],
      answer: 2
    },
    {
      id: "iba-sindh-2025-174",
      question: "A spying agent coded POWER as QPXFS. Using this pattern, what will be the code for GUNED?",
      options: [
        "HVPFE",
        "HVRFE",
        "HVOFE",
        "IVRFG"
      ],
      answer: 2
    },
    {
      id: "kmu-2025-174",
      question: "Ahmed ranks 10th in the class of 46 students. There are only 7 students below Bilal rank wise. How many students are there between Ahmed and Bilal?",
      options: [
        "27",
        "28",
        "30",
        "32"
      ],
      answer: 1
    },
    {
      id: "szabmu-2025-175",
      question: "Every alphabet in the word “SURGEON” represent a fixed numerical value and the numbers when added, sum up to 99. Based on this, what will the sum of the word “FORGIVEN” be?",
      options: [
        "102",
        "78",
        "99",
        "56"
      ],
      answer: 2
    },
    {
      id: "uhs-2025-174",
      question: "One apple pie has 10 slices, and each apple pie feeds five people. Henry is having a party with 200 people. How many slices of pie does he need?",
      options: [
        "200",
        "50",
        "400",
        "100"
      ],
      answer: 2
    },
    {
      id: "iba-duhs-2024-199",
      question: "Which number is a multiple of its digits?",
      options: [
        "21",
        "44",
        "52",
        "24",
        "13"
      ],
      answer: 3
    },
    {
      id: "kmu-2024-197",
      question: "Read the following statements and identify the best cause-and-effect relation:\n\ni. Sara’s productivity at work has significantly decreased over the past month.\nii. Sara has been experiencing frequent interruptions due to ongoing construction work near her office.",
      options: [
        "Sara’s decreased productivity is causing the construction work.",
        "The ongoing construction work is causing Sara’s decreased productivity.",
        "Sara’s productivity was already decreasing before the construction work began.",
        "The construction work is unrelated to Sara’s productivity."
      ],
      answer: 1
    },
    {
      id: "szabmu-2024-197",
      question: "“All practical numbers are even” is a false statement then the true statement is ____.",
      options: [
        "all practical numbers are odd",
        "some practical numbers are not even",
        "some practical numbers are even",
        "some practical numbers are not odd"
      ],
      answer: 1
    },
    {
      id: "bumhs-2024-196",
      question: "Five cities P, Q, R, S and T are connected by different modes of transport as follows:\n• P and Q are connected by boat as well as by rail\n• S and R are connected by bus and by boat\n• Q and T are connected only by air\n• P and R are connected only by boat\n• T and R are connected by rail and by bus\n\nWhich mode of transport would help one to reach R starting from Q but without changing mode of transport?",
      options: [
        "Boat",
        "Rail",
        "Bus",
        "Air"
      ],
      answer: 0
    }
  ];