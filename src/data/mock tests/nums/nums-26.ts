export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const nums2026Questions: Question[] = [
    // SECTION 1 — BIOLOGY
    {
      id: "nums-2026-bio-001",
      question: "Identify the type of glycoprotein, responsible for cell fusion process in HIV cycle:",
      options: ["gp 40", "gp 41", "gp 120", "gp 121"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-002",
      question: "Which of the following enzymes converts mRNA to complementary DNA (cDNA)?",
      options: ["Integrase", "Reverse transcriptase", "Protease", "DNAase"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-003",
      question: "Edward Jenner used material removed from the lesion on the hand of milkmaid and vaccinated a boy suffering from which of the following disease?",
      options: ["Small pox", "Chicken pox", "Cow pox", "Measles"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-004",
      question: "Adenovirus are classified as:",
      options: ["Helical capsid", "Polyhedral capsid", "Enveloped virus", "Coupler capsid"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-005",
      question: "If a person is doing strenuous exercise, how many ATPs are produced by cellular respiration?",
      options: ["2 ATPs", "3 ATPs", "4 ATPs", "6 ATPs"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-006",
      question: "The end product of non-cyclic electron pathway is:",
      options: ["ATP and NADPH", "ATP", "FADH₂", "NAOPH₂"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-007",
      question: "Pyruvic acid is converted into acetaldehyde through which step?",
      options: ["Decarboxylation", "Oxidation", "Addition of coenzyme A", "Reduction"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-008",
      question: "Choose the correct sequence of electron carrier in respiratory ETC:",
      options: [
        "Coenzyme Q → cytochrome a → cytochrome a₃ → cytochrome b → cytochrome c",
        "Coenzyme Q → cytochrome b → cytochrome c → cytochrome a → cytochrome a₃",
        "cytochrome a → cytochrome a₃ → cytochrome b → cytochrome c → coenzyme Q",
        "Cytochrome b → cytochrome c → coenzyme Q → cytochrome a → cytochrome a₃"
      ],
      answer: 1,
    },
    {
      id: "nums-2026-bio-009",
      question: "Pumping movement of protons occur from:",
      options: [
        "Outer membrane and inner membrane",
        "Matrix of mitochondria and mitochondrial intermembrane space",
        "Inner membrane and cisternae",
        "Inner membrane and intermembrane space"
      ],
      answer: 1,
    },
    {
      id: "nums-2026-bio-010",
      question: "Net product of Krebs cycle is:",
      options: [
        "2CO₂, 3ATP, 6NADH, 2FADH",
        "4CO₂, 2ATP, 6NADH, 2FADH",
        "4CO₂, 2ATP, 6NADH, 2FADH",
        "CO₂, NADH, FADH"
      ],
      answer: 1,
    },
    {
      id: "nums-2026-bio-011",
      question: "The electron carrier of mitochondria are found in:",
      options: ["Outer mitochondrial membrane", "Stroma", "Intermembrane space", "Inner mitochondrial membrane"],
      answer: 3,
    },
    {
      id: "nums-2026-bio-012",
      question: "Which one of the following is a monosaccharide?",
      options: ["Sucrose", "Maltose", "Lactose", "Fructose"],
      answer: 3,
    },
    {
      id: "nums-2026-bio-013",
      question: "What is percentage of water in brain cells?",
      options: ["20%", "70%", "85%", "30%"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-014",
      question: "Proportion of carbohydrate in bacterial and mammalian cell is:",
      options: ["2%, 4%", "3%, 4%", "4%, 2%", "3%, 2%"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-015",
      question: "Water has very high heat capacity due to its:",
      options: ["High polarity", "Hydrogen bonding", "High heat of vaporization", "Ionization"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-016",
      question: "Which one of the following biomolecule is involved in the transport of oxygen?",
      options: ["Protein", "Fats", "Carbohydrate", "Nucleic acid"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-017",
      question: "Which is the second most abundant organic molecule on earth?",
      options: ["Starch", "Glycogen", "Cellulose", "Chitin"],
      answer: 3,
    },
    {
      id: "nums-2026-bio-018",
      question: "Glycerol reacts with fatty acids to produce:",
      options: ["Phospholipids", "Terpenes", "Acyl glycerol", "Steroids"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-019",
      question: "During cell wall formation absence of magnesium results in:",
      options: ["Lack of primary cell wall", "Lack of secondary cell wall", "Lack of middle lamella", "No effect on cell wall formation"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-020",
      question: "Identify the mismatch in the following:",
      options: ["Mitochondria – cellular respiration", "Endoplasmic reticulum – detoxification", "Mitochondria – deamination", "Lysosome – autophagy"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-021",
      question: "Which organelle will increase in number, in muscles of athlete?",
      options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-022",
      question: "In secretary cells which pathway is followed for the transport of material?",
      options: ["Golgi complex → RER → SER", "RER → golgi complex → SER", "RER → SER → golgi complex", "SER → golgi complex → RER"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-023",
      question: "How many number of chromosomes are present in onion?",
      options: ["16", "8", "14", "26"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-024",
      question: "A cell is treated with a toxin that disrupts Golgi apparatus. Which function is affected?",
      options: ["Lipid metabolism", "Protein modification", "Chromosome separation during cell division", "ATP production"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-025",
      question: "Where modification and packaging occur in secretary cells?",
      options: ["Golgi apparatus", "Mitochondria", "Endoplasmic reticulum", "Nucleus"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-026",
      question: "A person continuously faces water imbalance in body due to damage of which part of the brain?",
      options: ["Amygdala", "Thalamus", "Medulla", "Hypothalamus"],
      answer: 3,
    },
    {
      id: "nums-2026-bio-027",
      question: "Which part of brain is activated to release excess CO₂ from body produced during strenuous exercise?",
      options: ["Pons", "Medulla", "Cerebellum", "Cerebrum"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-028",
      question: "The cerebrospinal fluid (CSF) is present between:",
      options: ["Dura matter & arachnoid matter", "Arachnoid matter & Pia matter", "Dura matter & Pia matter", "Arachnoid matter & Dura matter"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-029",
      question: "What is the role of growth hormone after adolescence?",
      options: ["Promotes protein synthesis", "Inhibits protein synthesis", "Decreases amino acid uptake", "Inhibits cell division"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-030",
      question: "Which of the following is correct function of calcitonin?",
      options: ["Resorption of calcium in bone matrix", "Inhibits Ca²⁺ absorption by intestine", "Increase reabsorption by kidneys", "Increase blood calcium level"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-031",
      question: "What is secreted when the levels of blood glucose get too low?",
      options: ["Calcitonin", "Glucagon", "Insulin", "Corticoid hormones"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-032",
      question: "Pathway followed by nerve impulse during reflex action is:",
      options: [
        "Interneuron → synapse → dendrites → cell body of motor neuron",
        "Interneuron → dendrite → synapse → cell body of motor neuron",
        "Interneuron → synapse → cell body of neuron",
        "Interneuron → dendrites → cell body of neuron"
      ],
      answer: 0,
    },
    {
      id: "nums-2026-bio-033",
      question: "Identify the animals having both mammalian and reptilian features:",
      options: ["Mice", "Spiny ant eater", "Opossum", "Bat"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-034",
      question: "An enzyme which requires a cofactor to become active is called:",
      options: ["Apoenzyme", "Holoenzyme", "Prosthetic group", "Co-enzyme"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-035",
      question: "Which statement best describes competitive inhibitors?",
      options: ["Denature enzyme permanently", "Used as drugs", "Prevent enzyme product complex", "Alter the shape of enzymes"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-036",
      question: "Due to snake bite a person’s heart stops working. Which type of venom will be found in his body?",
      options: ["Hemotoxic", "Hepatotoxic", "Neurotoxic", "Cytotoxic"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-037",
      question: "Identify the enzyme which shows absolute specificity:",
      options: ["Carbonic anhydrase", "Hexokinase", "Urease", "Isomerase"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-038",
      question: "Some industries are continuously polluting aquatic bodies. This can affect the metabolic pathway of plants by changing their pH.",
      options: ["More alkaline", "More acidic", "Less acidic", "Less alkaline"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-039",
      question: "All flowering plants are thought to be evolved from a common ancestor on the basis of which homologous structures?",
      options: ["Stamen, carpel, sepals, petals", "Stamen, carpel, thalamus, sepals", "Stamen, carpel, thalamus, sepals, petals, stalk", "Stamen, carpel, sepals, thalamus"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-040",
      question: "Barriers which effect geographical distribution of life are:",
      options: ["Physical and chemical", "Environmental & Physical", "Ecological & chemical", "Physical, Ecological or Environmental"],
      answer: 3,
    },
    {
      id: "nums-2026-bio-041",
      question: "Why are some genes called pseudoautosomal, even though they are present on sex chromosome?",
      options: [
        "They are present on X chromosomes only",
        "They are present on Y chromosomes only",
        "They are present on both X and Y chromosomes",
        "They are absent from both X and Y chromosomes"
      ],
      answer: 2,
    },
    {
      id: "nums-2026-bio-042",
      question: "As a result of natural disaster, few species continue to survive due to their characteristics. This results in:",
      options: ["Increase in favorable alleles", "Decrease in favorable alleles", "Increase in unfavorable alleles", "Decrease in unfavorable alleles"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-043",
      question: "Which of these correctly order the structure of arteries?",
      options: [
        "Connective tissues → Smooth muscle → Elastic tissue → Endothelium",
        "Connective tissues → Smooth muscle → Endothelium → Elastic tissue",
        "Elastic tissue → Smooth muscle → Connective tissue → Endothelium",
        "Smooth muscle → Connective tissues → Elastic tissue → Endothelium"
      ],
      answer: 0,
    },
    {
      id: "nums-2026-bio-044",
      question: "Epidermis is outer most layer of the skin, which is composed of:",
      options: ["Loosely packed cells", "Tightly packed cells", "Scattered cells", "Ciliated cells"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-045",
      question: "Which type of muscle controls the movement of substance through hollow organs?",
      options: ["Cardiac muscle", "Smooth muscles", "Sphincter muscles", "Skeleton muscle"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-046",
      question: "Smallest contractile unit of muscle fibers present between two lines is known as:",
      options: ["Sarcoplasm", "Sarcolemma", "Sarcomere", "Sarcodina"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-047",
      question: "Which ion is responsible for the attachment of tropomyosin with the head of myosin during cross bridge?",
      options: ["K⁺ ions", "Ca⁺⁺ ions", "Na⁺ ions", "Mg⁺"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-048",
      question: "During muscle contraction which type of events occurs respectively?",
      options: ["I band shorten → H-zone appears", "I band strengthen → H-zone disappears", "I band shorten → H-zone disappears", "I band strengthen → H-zone appears"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-049",
      question: "Which one of the following organism is responsible for transforming nitrogen gas into ammonium?",
      options: ["Cyanobacterium", "Nitrobacteria", "Rhizobium", "Nitrosomonas"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-050",
      question: "Identify one of the following chemo-therapeutic agent used to control bacterial infections:",
      options: ["Nitrofurans", "Hydrogen peroxide", "Sodium hypochlorite", "Potassium sorbate"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-051",
      question: "Why male gonads are present outside the body?",
      options: [
        "They need temperature equal to human body",
        "They need 2°C temperature higher than human body",
        "They need 2°C temperature less than human body",
        "They need environmental condition for sperm production"
      ],
      answer: 2,
    },
    {
      id: "nums-2026-bio-052",
      question: "Which set of events will occur if fusion of gametes does NOT take place?",
      options: [
        "Corpus luteum degenerate, LH increase, progesterone increase",
        "Corpus luteum degenerate, LH decline, progesterone increase",
        "Corpus luteum degenerate, LH increase, progesterone decline",
        "Corpus luteum degenerate, LH decline, progesterone decline"
      ],
      answer: 3,
    },
    {
      id: "nums-2026-bio-053",
      question: "Which of the following is correct order of the transport of bicarbonate from blood to lungs?",
      options: [
        "Capillaries → Alveoli → Red blood cells",
        "Red blood cells → Alveoli → Capillaries",
        "Alveoli → Capillaries → Red blood cells",
        "Red blood cells → Capillaries → Alveoli"
      ],
      answer: 3,
    },
    {
      id: "nums-2026-bio-054",
      question: "Which set of digestive enzymes play a vital role in breakdown of protein?",
      options: ["Pepsin, maltase, erepsin", "Pepsin, trypsin, amylase", "Pepsin, trypsin, erepsin", "Pepsin, amylase, lipase"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-055",
      question: "Gene of one allele which inhibits the effect of other allele at different locus is:",
      options: ["Hypostatic gene", "Hylostatic gene", "Polystatic gene", "Epistatic gene"],
      answer: 3,
    },
  
    // SECTION 2 — CHEMISTRY
    {
      id: "nums-2026-chem-056",
      question: "Which of the following is equal to 1 mole of Na⁺?",
      options: ["6.02 × 10²³ atoms", "6.02 × 10²³ ions", "6.02 × 10²³ atoms", "6.02 × 10²³ ions"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-057",
      question: "The e/m value for positive rays depends upon nature of gas used because:",
      options: ["Number of electrons", "Number of neutrons", "Number of protons", "Number of electrons and protons"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-058",
      question: "Select the correct increasing energy order of orbitals?",
      options: ["4s < 3d < 4p < 5s", "3d > 4s < 4p < 5s", "3d > 4s > 5s > 4p", "4s > 3d > 4p > 5s"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-059",
      question: "Which of the following expressions represent Boyle’s law?",
      options: ["V ∝ T", "P ∝ T", "V ∝ n", "P ∝ 1/V"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-060",
      question: "Which Celsius temperature represents zero kelvin or absolute zero?",
      options: ["0°C", "+273.16°C", "–273.16°C", "25°C"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-061",
      question: "An egg takes 5 minutes to boil at sea level while 10 minutes at Murree hills because of:",
      options: ["Low vapour pressure", "High vapour pressure", "High external pressure", "Low external pressure"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-062",
      question: "Fluorine is a gas and Iodine is a solid at room temperature due to:",
      options: ["High electronegativity", "Low electronegativity", "High polarizability", "Low polarizability"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-063",
      question: "Ionic solids are bad conductors of heat and electricity because:",
      options: [
        "They have strong covalent bonds",
        "They have strong intermolecular forces",
        "Ions can only vibrate about their fixed position",
        "Ions are free to move"
      ],
      answer: 2,
    },
    {
      id: "nums-2026-chem-064",
      question: "If 10% urea is present in aqueous solution of sodium chloride. What will be the shape of crystals obtained?",
      options: ["Octahedral", "Triclinic", "Cubic", "Hexagonal"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-065",
      question: "When [H⁺] is equal to [OH⁻], pH is equal to:",
      options: ["Zero", "+1", "–1", "–2"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-066",
      question: "The pH of human blood is maintained at:",
      options: ["5.37", "5.73", "7.53", "7.35"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-067",
      question: "The unit of rate constant is same as the rate of reaction in:",
      options: ["Third order reaction", "Second order reaction", "First order reaction", "Zero order reaction"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-068",
      question: "Which of the following represents Arrhenius constant expression?",
      options: ["k = A e^(Ea/RT)", "k = A e^(-Ea/RT)", "k = A e^(RT/Ea)", "k = A e^(-RT/Ea)"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-069",
      question: "Which expression is according to the Hess’s law?",
      options: ["ΣΔH(cycle) = 0", "ΣΔH(cycle) = 1", "ΣΔH(cycle) = 3", "ΣΔH(cycle) = –1"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-070",
      question: "Which of the following represents the expression of internal energy?",
      options: ["ΔE = q - w", "ΔE = q + w", "ΔE = q / w", "ΔE = w - q"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-071",
      question: "Which is added in the product side to balance equation?",
      options: ["1e⁻, H⁺", "2e⁻, 3H⁺", "5e⁻", "3e⁻"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-072",
      question: "The oxidation state of Mn in KMnO₄ is:",
      options: ["+6", "+3", "+7", "+4"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-073",
      question: "When atoms approaches each other for chemical bond formation, it leads to:",
      options: ["Decrease in energy", "Increase in energy", "Energy remains same", "Increase in bond length"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-074",
      question: "The number of bonds in oxygen molecules are:",
      options: ["Two σ bond", "Two σ one π bond", "One σ one π bond", "Two π one σ"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-075",
      question: "The decreasing order of ionization energy is:",
      options: ["O < S < N", "F > Cl > Br", "Br < Cl < F", "C < N < B"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-076",
      question: "The size of Ar is larger than Cl due to:",
      options: ["Stearic hindrance", "Inter-electronic repulsion", "High ionization energy", "High shielding effect"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-077",
      question: "Which element is lighter than water?",
      options: ["Cs", "Rb", "Fe", "K"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-078",
      question: "Which of the following decreases as we move from top to bottom in Group IA or IIA?",
      options: ["Metallic bond strength", "Electro-positivity", "Reactivity", "Ionic radii"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-079",
      question: "Which one of the following is the correct order of electronegativity of group II A elements?",
      options: ["Be < Mg < Ca < Sr < Ba", "Be < Ca < Mg < Ba < Sr", "Ba < Sr < Ca < Mg < Be", "Be < Sr > Mg < Ca < Ba"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-080",
      question: "Which one of the following is heteroatom?",
      options: ["Pyrrole", "Naphthalene", "Anthracene", "Cyclohexene"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-081",
      question: "The functional group of acid amide is:",
      options: ["-C(=O)-OH", "-C(=O)-NH", "-C(=O)-NH₂", "-C(OH)-NH₂"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-082",
      question: "When an alcohol is heated at 170°C in the presence of sulphuric acid, a water molecule is eliminated resulting in the formation of:",
      options: ["Alkyl halide", "Alkane", "Alkene", "Alkyne"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-083",
      question: "The IUPAC name of following compound is: CH₃ – CH = CH – (CH₂)₂ – CH₃",
      options: ["Hex-2-ene", "Hept-2-ene", "Hex-4-ene", "Hept-4-ene"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-084",
      question: "Most of the reactions shown by alkenes are:",
      options: ["Nucleophilic substitution", "Nucleophilic addition", "Electrophilic substitution", "Addition reactions"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-085",
      question: "What are the conditions required for polymerization of ethene to polyethene?",
      options: ["400°C and 1000 atm", "100°C and 400 atm", "450°C and 1000 atm", "450°C and 200 atm"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-086",
      question: "The reactivity order of alkyl halide is:",
      options: ["R – F > R – Cl > R – Br > R – I", "R – Cl > R – Br > R – I > R – F", "R – Br > R – I > R – F > R – Cl", "R – I > R – Br > R – Cl > R – F"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-087",
      question: "(CH₃)₃C–OH is an example of:",
      options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "Iso butyl alcohol"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-088",
      question: "Which one of the following is used in the manufacturing of plastics?",
      options: ["Methanol", "Ethanol", "Propanol", "Phenol"],
      answer: 3,
    },
    {
      id: "nums-2026-chem-089",
      question: "Which of the following will give formic acid as one of the product of oxidation?",
      options: ["Butanone", "Propanone", "Pentanone", "Hexanone"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-090",
      question: "What will be the IUPAC name of the given compound? CH₃–CH₂–CH(CH₃–CH₂)–CH(CH₃)–C(=O)–H",
      options: ["1 – Ethyl – 2 – methyl pentanal", "2 – Ethyl – 3 – methyl pentanal", "3 – Methyl – 4 – ethyl pentanal", "3 – Methyl pentanal"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-091",
      question: "What is the common name of 1,2-benzenedicarboxylic acid (two -COOH groups on benzene ring)?",
      options: ["Benzoic acid", "Malonic acid", "Phthalic acid", "Picric acid"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-092",
      question: "Acetic anhydride can be prepared when two molecules of carboxylic acids are dehydrated on heating strongly in the presence of:",
      options: ["V₂O₅", "P₂O₅", "H₂SO₄", "HgSO₄"],
      answer: 1,
    },
    {
      id: "nums-2026-chem-093",
      question: "Carboxylic acid react with metals to form salt with the evolution of which gas?",
      options: ["CO₂", "CO", "H₂", "CH₄"],
      answer: 2,
    },
    {
      id: "nums-2026-chem-094",
      question: "Which protein helps in muscles contractions and relaxation in our body?",
      options: ["Myosin", "Albumin", "Globulin", "Collagen"],
      answer: 0,
    },
    {
      id: "nums-2026-chem-095",
      question: "Various polypeptide chains in haemoglobin remain intact due to:",
      options: ["Chemical bonds", "London dispersion forces", "Salt bridges", "Peptide bonds"],
      answer: 2,
    },
  
    // SECTION 3 — PHYSICS
    {
      id: "nums-2026-phy-096",
      question: "The vertical height and horizontal range of projectiles are equal at angle:",
      options: ["30°", "45°", "75°", "90°"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-097",
      question: "Range of projectile is maximum at:",
      options: ["30°", "45°", "60°", "90°"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-098",
      question: "A ball is thrown vertically upward, the ball descends towards earth after achieving a certain height because:",
      options: [
        "Earth is exerting more gravitational force than ball",
        "The ball is exerting more gravitational force than earth",
        "The earth possesses more inertia",
        "The ball possesses more inertia"
      ],
      answer: 0,
    },
    {
      id: "nums-2026-phy-099",
      question: "A bomb is exploded into two fragments A and B moving in opposite direction. They conserve:",
      options: ["Kinetic Energy", "Potential Energy", "Momentum", "Both kinetic energy and potential energy"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-100",
      question: "Work done is negative, when the angle between force and displacement is:",
      options: ["0°", "60°", "90°", "180°"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-101",
      question: "When the speed of the car is doubled, what will be its kinetic energy?",
      options: ["Remains same", "Doubled", "Three times", "Four times"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-102",
      question: "The work efficiency of a dry cell battery is:",
      options: ["30%", "40%", "50%", "90%"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-103",
      question: "When distance r increases than gravitational P.E becomes:",
      options: ["Less positive", "More negative", "Less negative", "More positive"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-104",
      question: "How many Joules are there in 3KWh?",
      options: ["108MJ", "10.8MJ", "1.08MJ", "0.108MJ"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-105",
      question: "A car moving on a more steeply banked curves will require:",
      options: ["Large speed and large radii", "Large speed and small radii", "Small speed and large radii", "Small speed and small radii"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-106",
      question: "In a body angular acceleration is produced by:",
      options: ["Net force", "Power", "Pressure", "Net torque"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-107",
      question: "The analogue of force in circular / angular motion is:",
      options: ["Momentum", "Torque", "Angular acceleration", "Angular velocity"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-108",
      question: "1° is equals to:",
      options: ["π/90 radians", "π/180 radians", "π radians", "2π radians"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-109",
      question: "In uniform circular motion, the angle between centripetal acceleration and linear velocity of a particle is:",
      options: ["π/2", "π", "2π", "Zero"],
      answer: 0,
    },
    {
      id: "nums-2026-phy-110",
      question: "The distance between two consecutive nodes are:",
      options: ["λ", "λ/2", "2λ", "λ/4"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-111",
      question: "If a sound waves moves from air to water, there is NO change in:",
      options: ["Velocity", "Frequency", "Wavelength", "Temperature"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-112",
      question: "The star moving closer to earth will experience:",
      options: ["Blue shift", "Red shift", "Orange shift", "Yellow shift"],
      answer: 0,
    },
    {
      id: "nums-2026-phy-113",
      question: "If the amplitude of a wave is doubled, its intensity is:",
      options: ["Doubled", "Halved", "Quadrupled", "One quarter"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-114",
      question: "Which of the following is an example of first law of thermodynamics?",
      options: ["Thunderstorm", "Metabolism", "Rusting", "Earthquake"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-115",
      question: "Thermos flask containing tea as a system is shaken vigorously then there will be:",
      options: ["Increase in temperature only", "Increase in kinetic energy only", "Increase in temperature & kinetic energy", "No change in temperature & kinetic energy"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-116",
      question: "Difference between molar specific heat at constant pressure and molar specific heat at constant volume is equal to:",
      options: ["Boltzmann constant", "Universal gas constant", "Plank’s constant", "Rydberg constant"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-117",
      question: "Coulomb’s law of electrostatic induction is valid for:",
      options: ["Point charges", "Stationary charges", "Stationary & point charges", "Accelerated point charges"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-118",
      question: "If the positive charge is placed in a uniform electric field, the charge will move in the:",
      options: ["Opposite direction of electric field", "Direction of electric field", "Perpendicular to the direction of electric field", "Remains at rest"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-119",
      question: "For each element, value of half-life is:",
      options: ["Variable", "Constant", "Decrease", "Increase"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-120",
      question: "The unit of RC is:",
      options: ["Ohm", "Farad", "Second", "Ohm/Farad"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-121",
      question: "The fractional change in resistance per kelvin is known as the temperature coefficient of:",
      options: ["Conductance", "Resistance", "Inductance", "Conductivity"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-122",
      question: "Which of the following is an example of Ohmic in nature?",
      options: ["Thermistor", "Filament lamp", "Semiconductor", "Conductor"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-123",
      question: "The material whose resistance decreases with increase in temperature have:",
      options: ["Positive temperature coefficient", "Negative temperature coefficient", "Thermal coefficient", "Coefficient of friction"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-124",
      question: "The number of magnetic field lines passing through unit area is called:",
      options: ["Magnetic field", "Magnetic flux", "Magnetic flux density", "Magnetization"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-125",
      question: "The magnetic force of a charged particle moving in a uniform magnetic fields depends on:",
      options: ["Velocity, area & magnetic field", "Charge, current & velocity", "Magnetic field, voltage & charge", "Velocity, magnetic field & charge"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-126",
      question: "The magnetic force acting on a charged particle is maximum when the angle between velocity and magnetic field is:",
      options: ["0°", "45°", "90°", "180°"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-127",
      question: "Generator effect is practical application of:",
      options: ["Static e.m.f.", "Dynamic e.m.f.", "Mutual induction", "Back emf"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-128",
      question: "If number of turns of coil becomes double, the induced emf will be:",
      options: ["Double", "Reduced to half", "Remain same", "Quadruple"],
      answer: 0,
    },
    {
      id: "nums-2026-phy-129",
      question: "Electromagnetic sensor in seismograph converts ground movement into:",
      options: ["Magnetic signals", "Electric signals", "Audio signals", "Vibratory signals"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-130",
      question: "A full wave bridge rectifier consists of:",
      options: ["No diode", "Four diodes", "Two diodes", "One diode"],
      answer: 1,
    },
    {
      id: "nums-2026-phy-131",
      question: "An electrical component used to convert AC into DC is:",
      options: ["Transistor", "Capacitor", "Diode", "Resistor"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-132",
      question: "A photon has:",
      options: ["Zero mass, zero momentum", "Finite mass, finite momentum", "Zero mass, finite momentum", "Finite mass, zero momentum"],
      answer: 2,
    },
    {
      id: "nums-2026-phy-133",
      question: "Photo-conductive devices like photo cells and solar cells are application of:",
      options: ["Photo electric effect", "Compton’s effect", "Pair production", "Interference of light"],
      answer: 0,
    },
    {
      id: "nums-2026-phy-134",
      question: "Which of the following particle has smaller De Broglie wave length?",
      options: ["Gamma particle", "Beta particle", "Proton", "Alpha particle"],
      answer: 3,
    },
    {
      id: "nums-2026-phy-135",
      question: "In the spectrum of hydrogen atom which of the following series has smallest wavelength?",
      options: ["Paschen series", "Balmer series", "Lyman series", "Brackett series"],
      answer: 2,
    },
  
    // SECTION 4 — ENGLISH
    {
      id: "nums-2026-eng-136",
      question: "The antonym for the word clarity is:",
      options: ["Upright", "Understanding", "Vagueness", "Clear"],
      answer: 2,
    },
    {
      id: "nums-2026-eng-137",
      question: "Yasir Ameen could not pay the rent; accordingly, he was evicted. Meaning of the underlined word is:",
      options: ["Expelled from the house", "Investigated", "Threatened", "Rewarded"],
      answer: 0,
    },
    {
      id: "nums-2026-eng-138",
      question: "Fill in the blank with the correct verb.\nThe baby ______ all morning.",
      options: ["Is crying", "Has been crying", "Cry", "Have been crying"],
      answer: 1,
    },
    {
      id: "nums-2026-eng-139",
      question: "By 2040, robots ______ many of the jobs that people do today.",
      options: ["Will be taking over", "Will take over", "Will have taken over", "Has taken over"],
      answer: 2,
    },
    {
      id: "nums-2026-eng-140",
      question: "“Each time one of us touches the soil, we feel a sense of personal renewal”. The type of sentence is:",
      options: ["Compound", "Complex", "Compound Complex", "Simple"],
      answer: 1,
    },
    {
      id: "nums-2026-eng-141",
      question: "Identify the correctly punctuated sentence.",
      options: [
        "Milton the great English Poet, was blind",
        "Milton, the great English poet, was blind",
        "Milton the great English poet was, blind",
        "Milton the great. English poet was blind"
      ],
      answer: 1,
    },
    {
      id: "nums-2026-eng-142",
      question: "Identify the correct sentence.",
      options: [
        "A Sindhi woman is going through a bazaar with bear feet.",
        "A Sindhi woman are going through a bazaar with bare feet.",
        "A Sindhi woman is going through a bazaar with bare feet.",
        "A Sindhi woman is going through a bazaar with bare foot."
      ],
      answer: 2,
    },
    {
      id: "nums-2026-eng-143",
      question: "Complete the sentence using correct preposition.\nThe public are cautioned ______ pick pockets.",
      options: ["Against", "Of", "For", "With"],
      answer: 0,
    },
    {
      id: "nums-2026-eng-144",
      question: "Select the correct pair.\nLack of sleep can ____ your health and have a bad ____ on your grades.",
      options: ["Affect / affect", "Effect / effect", "Effect / affect", "Affect / effect"],
      answer: 3,
    },
    {
      id: "nums-2026-eng-145",
      question: "Select the correct sentence in style.",
      options: [
        "Having finished his exercise, the books were put away.",
        "Having finishing his exercise, the books were put away.",
        "Having finishing his exercise, he put his books away.",
        "Having finished his exercise, he put away his books."
      ],
      answer: 3,
    },
    {
      id: "nums-2026-eng-146",
      question: "Select the statement that best describes the given sentence.\n“He is anything but a liar.”",
      options: [
        "He is a liar.",
        "He can be anything but not a liar.",
        "He is not a good character and liar as well.",
        "He is good character but a liar to some extent."
      ],
      answer: 1,
    },
    {
      id: "nums-2026-eng-147",
      question: "Select the best option to describe the given sentence.\n“Unless you apologise I shall punish you.”",
      options: [
        "Without apology, you will be forgiven.",
        "With apology, you will be punished.",
        "There is no need of apology.",
        "Without apology you will be punished."
      ],
      answer: 3,
    },
    {
      id: "nums-2026-eng-148",
      question: "“From the attitude it is clear that he wants to pay off his old scores.” The sentence means that he wants to:",
      options: ["Improve his marks", "Pay off his debt", "Help needy people", "Have his revenge"],
      answer: 3,
    },
    {
      id: "nums-2026-eng-149",
      question: "A person needs to reflect profoundly on his/her life. The underlined word means:",
      options: ["Deeply", "Superficially", "Shallow", "Mirroring"],
      answer: 0,
    },
    {
      id: "nums-2026-eng-150",
      question: "Due to his non-serious attitude, Ali took the advice with a pinch of salt. It means:",
      options: ["Took it seriously.", "Did not take it seriously.", "Accept it candidly.", "Implemented it happily."],
      answer: 1,
    },
  ];