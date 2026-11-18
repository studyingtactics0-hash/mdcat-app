export interface Question {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }
  
  export const kmu2026Questions: Question[] = [
    // BIOLOGY (81 MCQs)
    {
      id: "kmu-2026-001",
      question: "Which of the following is correctly matched with its morphological type?",
      options: [
        "Tobacco mosaic virus - Polyhedral virus",
        "Poliovirus - Rod shaped virus",
        "Bacteriophage - Tadpole virus",
        "Tobacco mosaic virus - Spherical virus"
      ],
      answer: 2,
      explanation: "Bacteriophages typically have a complex tadpole-like morphology consisting of a polyhedral head and a helical tail, whereas Tobacco mosaic virus is rod-shaped and Poliovirus is spherical/polyhedral."
    },
    {
      id: "kmu-2026-002",
      question: "A patient diagnosed with AIDS has an increased susceptibility to infections due to:",
      options: [
        "Destruction of red blood cells",
        "Excess production of antibodies",
        "Weakening of the immune system",
        "Overproduction of digestive enzymes"
      ],
      answer: 2,
      explanation: "HIV targets and destroys helper T-lymphocytes (CD4+ T cells), leading to progressive weakening of the immune system and vulnerability to opportunistic infections."
    },
    {
      id: "kmu-2026-003",
      question: "Which of the following is converted into a two-carbon molecule with the release of carbon dioxide?",
      options: [
        "Acetyl-CoA",
        "Lactate",
        "Pyruvate",
        "Glycerol"
      ],
      answer: 2,
      explanation: "During pyruvate oxidation (the link reaction), three-carbon pyruvate is decarboxylated to release one molecule of CO₂ and forms the two-carbon acetyl group of Acetyl-CoA."
    },
    {
      id: "kmu-2026-004",
      question: "Metabolism of an 18 carbon fatty acid results in ______ number of Acetyl-CoA?",
      options: [
        "3",
        "6",
        "9",
        "18"
      ],
      answer: 2,
      explanation: "Beta-oxidation cleaves a fatty acid into 2-carbon Acetyl-CoA units; therefore, an 18-carbon fatty acid yields 18 / 2 = 9 molecules of Acetyl-CoA."
    },
    {
      id: "kmu-2026-005",
      question: "Which of the following are classified as organic molecules in humans?",
      options: [
        "Water, mineral, oxygen, carbon dioxide",
        "Carbohydrates, proteins, lipids, nucleic acids",
        "Vitamins, minerals, water, oxygen",
        "Glucose, sodium chloride, water, calcium"
      ],
      answer: 1,
      explanation: "Carbohydrates, proteins, lipids, and nucleic acids are the four major classes of carbon-containing biological macromolecules (organic compounds) in living organisms."
    },
    {
      id: "kmu-2026-006",
      question: "The structural similarity between DNA and RNA nucleotides is due to the presence of:",
      options: [
        "Thymine",
        "Ribose",
        "Deoxyribose",
        "Phosphoric acid"
      ],
      answer: 3,
      explanation: "Both DNA and RNA nucleotides contain a phosphate group derived from phosphoric acid, whereas they differ in their pentose sugars (deoxyribose vs. ribose) and one nitrogenous base (thymine vs. uracil)."
    },
    {
      id: "kmu-2026-007",
      question: "Which property of water is primarily helpful in providing a cooling effect to plants and animals?",
      options: [
        "Heat Capacity",
        "Heat of Vaporization",
        "Solvent Properties",
        "Force of Cohesion"
      ],
      answer: 1,
      explanation: "Water has a high heat of vaporization, meaning it absorbs a large amount of heat energy when evaporating (via sweating or transpiration), effectively cooling the organism."
    },
    {
      id: "kmu-2026-008",
      question: "The reduction of water content in protoplasm to about 10% results in:",
      options: [
        "Increased metabolic activity",
        "Faster cell division",
        "Loss of survival of protoplasm",
        "Increased protein synthesis"
      ],
      answer: 2,
      explanation: "Water is essential for enzymatic reactions and maintaining cellular structure; reducing protoplasmic water content to ~10% halts metabolism and leads to loss of viability/survival."
    },
    {
      id: "kmu-2026-009",
      question: "Maltose is classified as:",
      options: [
        "Monosaccharide",
        "Disaccharide",
        "Trisaccharide",
        "Polysaccharide"
      ],
      answer: 1,
      explanation: "Maltose (malt sugar) is a disaccharide composed of two glucose units joined by an α-1,4-glycosidic bond."
    },
    {
      id: "kmu-2026-010",
      question: "Haemoglobin is an example of which level of protein structure?",
      options: [
        "Primary",
        "Secondary",
        "Tertiary",
        "Quaternary"
      ],
      answer: 3,
      explanation: "Haemoglobin consists of four polypeptide subunits (two alpha and two beta chains) assembled together, representing quaternary protein structure."
    },
    {
      id: "kmu-2026-011",
      question: "In a cell, glycoproteins are found in the:",
      options: [
        "Mitochondria",
        "DNA",
        "RNA",
        "Plasma membrane"
      ],
      answer: 3,
      explanation: "Glycoproteins are embedded on the extracellular surface of the plasma membrane, where they play key roles in cell recognition, signaling, and adhesion."
    },
    {
      id: "kmu-2026-012",
      question: "A DNA molecule has a length of 340 nm. How many base pairs does it contain?",
      options: [
        "100",
        "340",
        "500",
        "1000"
      ],
      answer: 3,
      explanation: "In B-DNA, the distance between two adjacent base pairs is 0.34 nm. Thus, 340 nm / 0.34 nm = 1000 base pairs."
    },
    {
      id: "kmu-2026-013",
      question: "Fatty acids and glycerol are related to ______, whereas ______ are related to protein.",
      options: [
        "Nucleic acids; amino acids",
        "Lipids; amino acids",
        "Polymers; polypeptides",
        "Amino acids; polypeptides"
      ],
      answer: 1,
      explanation: "Fatty acids and glycerol are the building blocks of simple lipids (triglycerides), while amino acids are the monomer building blocks of proteins."
    },
    {
      id: "kmu-2026-014",
      question: "A student observes a discoid organelle with a double membrane, stroma and thylakoids in a plant cell. Which organelle is this?",
      options: [
        "Golgi apparatus",
        "Endoplasmic reticulum",
        "Chloroplast",
        "Mitochondria"
      ],
      answer: 2,
      explanation: "Chloroplasts are double-membrane-bound organelles in plant cells containing a fluid matrix (stroma) and flattened membrane sacs (thylakoids) where photosynthesis takes place."
    },
    {
      id: "kmu-2026-015",
      question: "Which of the following is a COMMON FEATURE of Prokaryotic and Eukaryotic cells?",
      options: [
        "Mitochondria",
        "Ribosomes",
        "Endoplasmic reticulum",
        "Golgi complex"
      ],
      answer: 1,
      explanation: "Ribosomes are non-membrane-bound organelles present in both prokaryotic (70S) and eukaryotic (80S) cells for protein synthesis; the other listed organelles are membrane-bound and exclusive to eukaryotes."
    },
    {
      id: "kmu-2026-016",
      question: "Which one of the following is a self-replicating organelle?",
      options: [
        "Golgi apparatus",
        "Lysosome",
        "Peroxisome",
        "Mitochondria"
      ],
      answer: 3,
      explanation: "Mitochondria contain their own circular DNA and 70S ribosomes, enabling them to replicate independently by binary fission within the cell."
    },
    {
      id: "kmu-2026-017",
      question: "If a cell’s smooth endoplasmic reticulum is destroyed, which processes will be most affected?",
      options: [
        "Protein synthesis and protein folding",
        "Lipid synthesis and detoxification",
        "ATP production and aerobic respiration",
        "DNA replication and cell division"
      ],
      answer: 1,
      explanation: "The smooth endoplasmic reticulum (SER) is primarily responsible for the synthesis of lipids/steroids, carbohydrate metabolism, and detoxification of drugs and poisons."
    },
    {
      id: "kmu-2026-018",
      question: "The centromere is important because it:",
      options: [
        "Synthesizes proteins",
        "Holds identical chromatids together",
        "Replicates DNA",
        "Produces ATP"
      ],
      answer: 1,
      explanation: "The centromere is the constricted region of a chromosome that links sister chromatids together and serves as the attachment site for spindle fibers via the kinetochore."
    },
    {
      id: "kmu-2026-019",
      question: "Which of the following correctly describes the action of the sodium-potassium pump in a resting neuron?",
      options: [
        "Two Na⁺ ions are pumped in and three K⁺ ions are pumped out",
        "Three Na⁺ ions are pumped in and two K⁺ ions are pumped out",
        "Three Na⁺ ions are pumped out and two K⁺ ions are pumped in",
        "Equal numbers of Na⁺ and K⁺ ions are exchanged"
      ],
      answer: 2,
      explanation: "Using ATP, the Na⁺/K⁺-ATPase pump actively transports 3 Na⁺ ions out of the neuron and 2 K⁺ ions into the neuron per cycle to maintain the resting membrane potential."
    },
    {
      id: "kmu-2026-020",
      question: "Which of the following structures can be found in a typical neuron?",
      options: [
        "Dendrites, cell body, cilia",
        "Dendrites, cell body, axon",
        "Dendrites, cell body, ganglion",
        "Cauda equina, cell body, myelin sheath"
      ],
      answer: 1,
      explanation: "A typical neuron consists of three primary anatomical parts: dendrites (receive signals), a cell body/soma (integrates signals), and an axon (transmits impulses)."
    },
    {
      id: "kmu-2026-021",
      question: "The reversal of polarity across two sides of a membrane from –70 mV to +50 mV is called ______.",
      options: [
        "Polarization",
        "Hyperpolarization",
        "Repolarization",
        "Depolarization"
      ],
      answer: 3,
      explanation: "Depolarization occurs when voltage-gated Na⁺ channels open and Na⁺ rushes into the axon, shifting the membrane potential from its resting –70 mV to a positive action potential peak (+50 mV)."
    },
    {
      id: "kmu-2026-022",
      question: "A student quickly pulls his hand away from a hot iron after accidentally touching it. This response is best classified as:",
      options: [
        "Conditioned reflex",
        "Cranial reflex",
        "Spinal reflex",
        "Voluntary action"
      ],
      answer: 2,
      explanation: "Withdrawal of a limb from a painful stimulus is an involuntary, rapid protective reflex arc processed directly within the spinal cord (a spinal reflex)."
    },
    {
      id: "kmu-2026-023",
      question: "A patient suffers a brain injury following a head trauma. During recovery, the patient experiences disturbed sleep patterns and is unable to dream normally. Which part of the brain is most likely affected?",
      options: [
        "Cerebellum",
        "Medulla oblongata",
        "Pons",
        "Thalamus"
      ],
      answer: 2,
      explanation: "The pons contains key neural centers that regulate sleep-wake transitions and generate REM sleep, the phase during which vivid dreaming occurs."
    },
    {
      id: "kmu-2026-024",
      question: "Damage to the area containing dopamine-releasing neurons would most likely affect the:",
      options: [
        "Midbrain",
        "Cerebellum",
        "Pons",
        "Medulla"
      ],
      answer: 0,
      explanation: "The substantia nigra and ventral tegmental area (VTA), which are the primary sources of dopamine-producing neurons in the brain, are located in the midbrain."
    },
    {
      id: "kmu-2026-025",
      question: "The amygdala is a part of the:",
      options: [
        "Cerebellum",
        "Limbic system",
        "Reticular formation",
        "Medulla oblongata"
      ],
      answer: 1,
      explanation: "The amygdala is an almond-shaped cluster of nuclei situated within the temporal lobe that forms a core component of the limbic system, regulating emotions such as fear and pleasure."
    },
    {
      id: "kmu-2026-026",
      question: "Which characteristic distinguishes enzymes during a chemical reaction?",
      options: [
        "They change the final product",
        "They slow down metabolic steps",
        "They remain chemically unchanged",
        "They become part of reaction product"
      ],
      answer: 2,
      explanation: "Enzymes act as biological catalysts that lower activation energy without being consumed or permanently chemically altered by the reaction."
    },
    {
      id: "kmu-2026-027",
      question: "According to the lock and key hypothesis, the active site in enzyme action is regarded as ______ structure.",
      options: [
        "Rigid",
        "Flexible",
        "Dynamic",
        "Elastic"
      ],
      answer: 0,
      explanation: "Emil Fischer's lock-and-key model proposes that the enzyme's active site is a rigid, pre-shaped structure into which only a specific complementary substrate fits."
    },
    {
      id: "kmu-2026-028",
      question: "The enzyme pepsin shows maximum activity at pH:",
      options: [
        "1.5 – 1.6",
        "4.5 – 4.7",
        "7.8 – 8.7",
        "8.7 – 9.1"
      ],
      answer: 0,
      explanation: "Pepsin is a gastric protease adapted to the strongly acidic environment of the stomach, exhibiting optimal catalytic activity around pH 1.5–2.0."
    },
    {
      id: "kmu-2026-029",
      question: "pH affects the activity of an enzyme by causing the:",
      options: [
        "Ionization of an active site",
        "Increase in the activation energy",
        "Removal of prosthetic group from enzyme",
        "Decreasing the temperature of reaction mixture"
      ],
      answer: 0,
      explanation: "Changes in pH alter the ionization state of acidic and basic amino acid R-groups at the active site (and throughout the enzyme), disrupting substrate binding and catalysis."
    },
    {
      id: "kmu-2026-030",
      question: "Which molecule has a structure similar to the normal substrate?",
      options: [
        "Competitive inhibitor",
        "Non-competitive inhibitor",
        "Heavy metal ion",
        "Cyanide"
      ],
      answer: 0,
      explanation: "A competitive inhibitor structurally mimics the normal substrate, allowing it to bind directly to the enzyme's active site and block substrate attachment."
    },
    {
      id: "kmu-2026-031",
      question: "Human beings are involved in an intense struggle for existence because resources such as food, water and space:",
      options: [
        "Double every year",
        "Cannot increase at the same rate",
        "Increase at the same rate",
        "Remain constant"
      ],
      answer: 1,
      explanation: "According to Malthusian and Darwinian principles, populations grow geometrically while limited resources like food and space cannot increase at the same rate, creating competition."
    },
    {
      id: "kmu-2026-032",
      question: "Lamarck explained the long neck of the giraffe on the basis of:",
      options: [
        "Mutation",
        "Natural selection",
        "Inheritance of acquired characteristics",
        "Genetic drift"
      ],
      answer: 2,
      explanation: "Lamarck proposed that ancestral giraffes stretched their necks to reach high foliage (use and disuse) and passed this acquired longer-neck trait directly to their offspring."
    },
    {
      id: "kmu-2026-033",
      question: "A population of rabbits shows variation in fur colour. During snowy winters, white rabbits are less visible to predators and survive in greater numbers than brown rabbits. According to Darwin, this is an example of:",
      options: [
        "Overproduction",
        "Natural selection",
        "Artificial selection",
        "Genetic drift"
      ],
      answer: 1,
      explanation: "Differential survival and reproduction of individuals with advantageous heritable traits (white camouflage in snow) in a given environment is the core mechanism of natural selection."
    },
    {
      id: "kmu-2026-034",
      question: "According to Lamarck, what would be expected if an organism loses or modifies a body part during its lifetime?",
      options: [
        "It is passed to offspring",
        "It has no effect on offspring",
        "It causes genetic mutation",
        "It occurs through natural selection"
      ],
      answer: 0,
      explanation: "Under Lamarck's theory of inheritance of acquired characteristics, traits gained, lost, or modified during an organism's lifetime are transmitted directly to its progeny."
    },
    {
      id: "kmu-2026-035",
      question: "Post ovulation, the ruptured follicle is transformed into a glandular structure called ______.",
      options: [
        "Cervix",
        "Fimbriae",
        "Endometrium",
        "Corpus luteum"
      ],
      answer: 3,
      explanation: "Following ovulation, luteinizing hormone (LH) stimulates the remaining follicular cells to develop into the corpus luteum, which secretes progesterone and estrogen."
    },
    {
      id: "kmu-2026-036",
      question: "Both vas deferens of a male are surgically cut (vasectomy done). Which process remains unaffected after the procedure?",
      options: [
        "Testosterone secretion",
        "Sperm transport",
        "Ejaculation of sperms",
        "Fertilisation ability"
      ],
      answer: 0,
      explanation: "Testosterone is secreted directly into the bloodstream by the interstitial (Leydig) cells of the testes, so endocrine hormone secretion is completely unaffected by cutting the vas deferens."
    },
    {
      id: "kmu-2026-037",
      question: "A woman has irregular menstruation due to failure of proliferative endometrial thickening. Which hormone is deficient in her body?",
      options: [
        "Estrogen",
        "Oxytocin",
        "Luteinizing",
        "Follicle stimulating"
      ],
      answer: 0,
      explanation: "Estrogen secreted by developing ovarian follicles stimulates the repair and proliferation (thickening) of the endometrial lining during the proliferative phase of the menstrual cycle."
    },
    {
      id: "kmu-2026-038",
      question: "A patient having a painless, non-itching ulcerated sore with hard edges on genitals is most likely suffering from:",
      options: [
        "Gonorrhea",
        "Syphilis",
        "Genital Herpes",
        "AIDS"
      ],
      answer: 1,
      explanation: "A firm, round, painless ulcer known as a chancre is the hallmark lesion of primary syphilis, caused by the spirochete bacterium Treponema pallidum."
    },
    {
      id: "kmu-2026-039",
      question: "The ribs not attached to the sternum are called:",
      options: [
        "True ribs",
        "False ribs",
        "Floating ribs",
        "Vertebro-sternal ribs"
      ],
      answer: 2,
      explanation: "The last two pairs of ribs (pairs 11 and 12) have no anterior attachment to either the sternum or costal cartilages above them, hence they are called floating ribs."
    },
    {
      id: "kmu-2026-040",
      question: "A tissue is found to have cells embedded in a firm matrix, lacks blood vessels and receives nutrients by diffusion. It also resists compression forces in joints. This tissue is most likely:",
      options: [
        "Compact bone",
        "Spongy bone",
        "Adipose",
        "Cartilage"
      ],
      answer: 3,
      explanation: "Cartilage is an avascular connective tissue with chondrocytes embedded in a firm chondroitin-rich matrix that cushions joints against compression and receives nutrients via diffusion."
    },
    {
      id: "kmu-2026-041",
      question: "A tissue sample shows striated, multinucleated cells and has voluntary control. Which fundamental role is most associated with this tissue?",
      options: [
        "Pumping blood",
        "Movement of internal organs",
        "Maintenance of posture and locomotion",
        "Production of digestive enzymes"
      ],
      answer: 2,
      explanation: "Striated, multinucleated, voluntary muscle tissue is skeletal muscle, which attaches to bones to drive locomotion and maintain body posture."
    },
    {
      id: "kmu-2026-042",
      question: "The T-tubule and the terminal portion of the adjacent sarcoplasmic reticulum collectively form:",
      options: [
        "Sarcomere",
        "Triad",
        "Sarcoplasm",
        "Sarcolemma"
      ],
      answer: 1,
      explanation: "In skeletal muscle fibers, one transverse tubule (T-tubule) flanked on both sides by two terminal cisternae of the sarcoplasmic reticulum forms a structure called a triad."
    },
    {
      id: "kmu-2026-043",
      question: "During skeletal muscle contraction, the A-band of a fiber:",
      options: [
        "Shortens",
        "Elongates",
        "Disappears",
        "Remains constant"
      ],
      answer: 3,
      explanation: "According to the sliding filament model, actin filaments slide over myosin filaments; since the A-band corresponds to the length of the thick myosin filaments, its width remains constant."
    },
    {
      id: "kmu-2026-044",
      question: "The joint formed between adjacent vertebrae, which allows slight movement and has no synovial cavity, is classified as:",
      options: [
        "Synovial joint",
        "Fibrous joint",
        "Hinge joint",
        "Cartilaginous joint"
      ],
      answer: 3,
      explanation: "Adjacent vertebral bodies are joined by fibrocartilaginous intervertebral discs without a synovial cavity, allowing slight movement (amphiarthrosis) characteristic of cartilaginous joints."
    },
    {
      id: "kmu-2026-045",
      question: "A cricketer rotates his shoulder joint to throw the ball in any direction. What type of joint is this?",
      options: [
        "Pivot joint",
        "Ball and socket joint",
        "Hinge joint",
        "Condyloid joint"
      ],
      answer: 1,
      explanation: "The shoulder (glenohumeral) joint is a multiaxial ball-and-socket synovial joint that permits movement in multiple planes, including full circumduction and rotation."
    },
    {
      id: "kmu-2026-046",
      question: "In arthritis, friction and inflammation of joints primarily affects which body function?",
      options: [
        "Exchange of gases",
        "Production of RBCs",
        "Deposition of calcium in bones",
        "Smooth movement of joints"
      ],
      answer: 3,
      explanation: "Arthritis involves degeneration of articular cartilage and inflammation of the synovial membrane, causing pain, stiffness, and impaired smooth articulation of joints."
    },
    {
      id: "kmu-2026-047",
      question: "If green is a dominant and yellow is a recessive trait, then what percentage of the F₂ generation will be homozygous recessive?",
      options: [
        "0%",
        "25%",
        "50%",
        "75%"
      ],
      answer: 1,
      explanation: "In a standard Mendelian monohybrid cross between two F₁ heterozygotes (Gg × Gg), the F₂ genotypic ratio is 1 GG : 2 Gg : 1 gg, meaning 1/4 or 25% are homozygous recessive (gg)."
    },
    {
      id: "kmu-2026-048",
      question: "In a monohybrid cross of round seeded (RR) and wrinkled seeded (rr) pea plants, all F₁ offspring are round seeded (Rr). If an F₁ plant is crossed with a homozygous recessive (rr) plant, what will be the phenotypic ratio of round to wrinkled offspring?",
      options: [
        "1:3",
        "1:4",
        "0:4",
        "1:1"
      ],
      answer: 3,
      explanation: "Crossing an F₁ heterozygote (Rr) with a homozygous recessive tester (rr) yields 50% Rr (round) and 50% rr (wrinkled), giving a 1:1 phenotypic ratio."
    },
    {
      id: "kmu-2026-049",
      question: "Which condition results in a 1:1:1:1 phenotypic ratio in the offspring of a dihybrid test cross?",
      options: [
        "Complete linkage",
        "No linkage",
        "Sex linkage",
        "Mutation"
      ],
      answer: 1,
      explanation: "When two genes are unlinked (located on different chromosomes or far apart), they assort independently, so a dihybrid test cross (AaBb × aabb) produces equal proportions (1:1:1:1) of all four phenotypes."
    },
    {
      id: "kmu-2026-050",
      question: "An X-linked recessive allele inherited from a carrier mother (father is unaffected) is most likely to be expressed in which child?",
      options: [
        "Son",
        "Daughter",
        "Both equally",
        "None of them"
      ],
      answer: 0,
      explanation: "Males are hemizygous (XY) for X-linked genes, so a son inheriting the single recessive allele on his mother's X chromosome will express the trait, whereas daughters receive a normal dominant X from the unaffected father."
    },
    {
      id: "kmu-2026-051",
      question: "Which of the following is a disorder caused by a recessive X-linked trait?",
      options: [
        "Vitamin D resistant rickets",
        "Anemia",
        "Colour blindness",
        "Cystic fibrosis"
      ],
      answer: 2,
      explanation: "Red-green colour blindness is a classic X-linked recessive genetic disorder, whereas vitamin D-resistant rickets is X-linked dominant and cystic fibrosis is autosomal recessive."
    },
    {
      id: "kmu-2026-052",
      question: "Identify the X-linked dominant disorder from the following:",
      options: [
        "Haemophilia",
        "Colour blindness",
        "Baldness",
        "Hypophosphatemic rickets"
      ],
      answer: 3,
      explanation: "Hypophosphatemic rickets (vitamin D-resistant rickets) is inherited as an X-linked dominant trait, whereas haemophilia and colour blindness are X-linked recessive."
    },
    {
      id: "kmu-2026-053",
      question: "The genetic basis of haemophilia is:",
      options: [
        "A dominant allele on chromosome 21",
        "A recessive allele on the X chromosome",
        "A recessive allele on the Y chromosome",
        "A mitochondrial mutation"
      ],
      answer: 1,
      explanation: "Haemophilia A and B are caused by mutations (recessive alleles) in clotting factor genes (Factor VIII and Factor IX) located on the X chromosome."
    },
    {
      id: "kmu-2026-054",
      question: "The fluid present in the pericardial cavity functions to:",
      options: [
        "Nourish the heart muscles",
        "Prevent blood clotting",
        "Reduce friction during heart movement",
        "Generate electrical impulse"
      ],
      answer: 2,
      explanation: "Pericardial fluid lubricates the serous membranes of the pericardium, minimizing friction as the heart contracts and relaxes within the thoracic cavity."
    },
    {
      id: "kmu-2026-055",
      question: "The phase of the cardiac cycle during which blood is pumped to lungs and the entire body is called:",
      options: [
        "Atrial systole",
        "Atrial diastole",
        "Ventricular systole",
        "Ventricular diastole"
      ],
      answer: 2,
      explanation: "During ventricular systole, the right ventricle pumps deoxygenated blood into the pulmonary trunk toward the lungs while the left ventricle pumps oxygenated blood into the aorta for systemic circulation."
    },
    {
      id: "kmu-2026-056",
      question: "Hepatic portal subsystem carries nutrients from the small intestine to the:",
      options: [
        "Vena cava",
        "Liver",
        "Pancreas",
        "Kidney"
      ],
      answer: 1,
      explanation: "The hepatic portal vein drains nutrient-rich venous blood from the gastrointestinal tract (including the small intestine) directly into the liver for metabolic processing and detoxification."
    },
    {
      id: "kmu-2026-057",
      question: "Why are arteries thicker than veins?",
      options: [
        "To store more blood",
        "To prevent back flow",
        "To increase diffusion rate",
        "To withstand high pressure"
      ],
      answer: 3,
      explanation: "Arteries possess thick walls rich in smooth muscle and elastic fibers to withstand and maintain the high hydrostatic pressure generated by ventricular contraction."
    },
    {
      id: "kmu-2026-058",
      question: "Lymph is most closely related to:",
      options: [
        "Blood plasma",
        "Interstitial fluid",
        "Sweat",
        "Saliva"
      ],
      answer: 1,
      explanation: "Lymph is formed when excess interstitial (tissue) fluid enters lymphatic capillaries, making its composition nearly identical to interstitial fluid."
    },
    {
      id: "kmu-2026-059",
      question: "B-Lymphocytes produce a small, soluble and specific protein called ______.",
      options: [
        "Antigen",
        "Antibody",
        "Prostaglandin",
        "Perforin"
      ],
      answer: 1,
      explanation: "Activated B-lymphocytes differentiate into plasma cells that secrete specific immunoglobulins (antibodies) capable of binding and neutralizing target antigens."
    },
    {
      id: "kmu-2026-060",
      question: "A vaccine containing weakened microbes is administered to a person. Which aspect of adaptive immunity is responsible for providing long-lasting protection against future infections?",
      options: [
        "Inflammatory response",
        "Rise in body temperature",
        "Engulfment by phagocytes",
        "Formation of memory cells"
      ],
      answer: 3,
      explanation: "Vaccines stimulate clonal expansion of lymphocytes into long-lived memory B and T cells, enabling a rapid and heightened secondary immune response upon future exposure to the pathogen."
    },
    {
      id: "kmu-2026-061",
      question: "Which has NO cartilage in its structure?",
      options: [
        "Larynx",
        "Trachea",
        "Bronchioles",
        "Bronchi"
      ],
      answer: 2,
      explanation: "Bronchioles are small conducting airways (less than 1 mm in diameter) whose walls consist of smooth muscle and elastic fibers, completely lacking cartilage rings or plates."
    },
    {
      id: "kmu-2026-062",
      question: "The mucus and cilia of the nasal cavity work together to:",
      options: [
        "Increase the rate of diffusion of oxygen",
        "Produce mucus for vocal cord lubrication",
        "Filter air and prevent the entry of microorganisms",
        "Exchange oxygen and carbon dioxide with blood"
      ],
      answer: 2,
      explanation: "Sticky mucus traps inhaled dust, pollen, and microbes, while the rhythmic beating of cilia sweeps the trapped debris toward the pharynx to be swallowed or expelled."
    },
    {
      id: "kmu-2026-063",
      question: "During gaseous exchange in human body, maximum percentage of CO₂ is transported from body tissues to lungs as:",
      options: [
        "Bicarbonate ion",
        "Carbaminohemoglobin",
        "Dissolved CO₂ in plasma",
        "Gaseous form as bubbles"
      ],
      answer: 0,
      explanation: "Approximately 70% of carbon dioxide is transported in the blood plasma as bicarbonate ions (HCO₃⁻), about 23% as carbaminohemoglobin, and 7% dissolved in plasma."
    },
    {
      id: "kmu-2026-064",
      question: "Smoking causes alveolar destruction in:",
      options: [
        "Pneumonia",
        "Chronic bronchitis",
        "Emphysema",
        "Asthma"
      ],
      answer: 2,
      explanation: "Emphysema is a chronic obstructive pulmonary disease (commonly caused by smoking) characterized by irreversible destruction of alveolar walls, reducing surface area for gas exchange."
    },
    {
      id: "kmu-2026-065",
      question: "Which of the following is NOT a function of liver?",
      options: [
        "Detoxification",
        "Insulin synthesis",
        "Producing bile",
        "Storage of Vitamin A"
      ],
      answer: 1,
      explanation: "Insulin is synthesized and secreted by the beta cells of the islets of Langerhans in the pancreas, not by the liver."
    },
    {
      id: "kmu-2026-066",
      question: "Find the correct sequence of phases in the swallowing mechanism. 1. Pharyngeal 2. Oral 3. Esophageal",
      options: [
        "2-1-3",
        "1-2-3",
        "2-3-1",
        "3-1-2"
      ],
      answer: 0,
      explanation: "Deglutition (swallowing) occurs in three sequential stages: the voluntary oral phase (2), followed by the involuntary pharyngeal phase (1), and finally the esophageal phase (3)."
    },
    {
      id: "kmu-2026-067",
      question: "The release of bicarbonate rich fluid from the pancreas is stimulated by the action of:",
      options: [
        "Pepsin",
        "Gastrin",
        "Secretin",
        "Trypsin"
      ],
      answer: 2,
      explanation: "Secretin is released by S-cells of the duodenum in response to acidic chyme and stimulates pancreatic ductal cells to secrete bicarbonate-rich juice to neutralize stomach acid."
    },
    {
      id: "kmu-2026-068",
      question: "Which structures in the intestinal villus are directly involved in nutrient absorption?",
      options: [
        "Blood capillaries and lacteals",
        "Arteries and goblet cells",
        "Circular and longitudinal muscles",
        "Crypts of Lieberkühn and microvilli"
      ],
      answer: 0,
      explanation: "Each intestinal villus contains a dense network of blood capillaries (which absorb monosaccharides and amino acids) and a central lymphatic capillary called a lacteal (which absorbs chylomicrons/fats)."
    },
    {
      id: "kmu-2026-069",
      question: "The primary function of peristalsis in the large intestine is to:",
      options: [
        "Digest carbohydrates",
        "Move undigested food toward the rectum",
        "Absorb fats",
        "Secrete digestive enzymes"
      ],
      answer: 1,
      explanation: "Peristaltic and mass movements in the colon propel undigested waste material (feces) along the large intestine toward the rectum for elimination."
    },
    {
      id: "kmu-2026-070",
      question: "A patient experiences chronic gastric discomfort and endoscopy confirms gastric ulcers. Which finding best explains the underlying cause?",
      options: [
        "Deficiency of pepsinogen secretion",
        "Excess absorption of hydrochloric acid",
        "Spread of Helicobacter pylori into stomach wall",
        "Lack of intrinsic factor and Vitamin B12"
      ],
      answer: 2,
      explanation: "Infection by the bacterium Helicobacter pylori damages the protective mucous layer of the stomach lining, allowing gastric acid and pepsin to erode the mucosa and form peptic ulcers."
    },
    {
      id: "kmu-2026-071",
      question: "Which region of kidney contains glomeruli and Bowman’s capsules?",
      options: [
        "Renal medulla",
        "Renal cortex",
        "Renal pelvis",
        "Hilum"
      ],
      answer: 1,
      explanation: "The outer renal cortex houses all the renal corpuscles (glomeruli and Bowman's capsules) as well as the proximal and distal convoluted tubules of nephrons."
    },
    {
      id: "kmu-2026-072",
      question: "If glucose appears in urine of a patient, it indicates failure of which process?",
      options: [
        "Pressure filtration",
        "Selective reabsorption",
        "Tubular secretion",
        "Osmoregulation"
      ],
      answer: 1,
      explanation: "Under normal physiological conditions, 100% of filtered glucose is reabsorbed in the proximal convoluted tubule via selective reabsorption; glucosuria indicates this process is overwhelmed or impaired."
    },
    {
      id: "kmu-2026-073",
      question: "Which part of nephron is impermeable to water?",
      options: [
        "Glomerulus",
        "Descending limb",
        "Ascending limb",
        "Proximal tubule"
      ],
      answer: 2,
      explanation: "The ascending limb of the loop of Henle actively transports Na⁺ and Cl⁻ out into the medulla while remaining impermeable to water, diluting the tubular fluid."
    },
    {
      id: "kmu-2026-074",
      question: "When water intake is high:",
      options: [
        "ADH secretion increases, producing concentrated urine",
        "Aldosterone secretion increases, producing concentrated urine",
        "ADH release is inhibited, resulting in a large volume of dilute urine",
        "Ultrafiltration stops until water balance is restored"
      ],
      answer: 2,
      explanation: "High water intake lowers blood osmolarity, inhibiting antidiuretic hormone (ADH) release from the posterior pituitary so collecting ducts remain impermeable to water and excrete copious dilute urine."
    },
    {
      id: "kmu-2026-075",
      question: "Peritubular capillaries are formed from:",
      options: [
        "Glomerulus",
        "Afferent arteriole",
        "Efferent arteriole",
        "Interlobular artery"
      ],
      answer: 2,
      explanation: "Blood exits the glomerulus via the efferent arteriole, which subsequently branches into the low-pressure peritubular capillary network surrounding the renal tubules."
    },
    {
      id: "kmu-2026-076",
      question: "Dialysis or kidney transplantation is usually required when kidney function falls below ______ of normal.",
      options: [
        "70%",
        "50%",
        "25%",
        "10%"
      ],
      answer: 3,
      explanation: "End-stage renal disease (ESRD), requiring renal replacement therapy such as dialysis or kidney transplantation, typically occurs when kidney function drops below 10–15% of normal capacity."
    },
    {
      id: "kmu-2026-077",
      question: "Which nitrogenous waste is the MAIN excretory product in humans, and has relatively low toxicity compared to ammonia?",
      options: [
        "Urea",
        "Uric acid",
        "Creatinine",
        "Ammonia"
      ],
      answer: 0,
      explanation: "Humans are ureotelic; the liver converts toxic ammonia into water-soluble, far less toxic urea via the urea cycle for excretion by the kidneys."
    },
    {
      id: "kmu-2026-078",
      question: "DNA probes enable faster identification of disease causing bacteria than conventional methods because of advances in:",
      options: [
        "Non-biological methods",
        "Biotechnology",
        "Antibiotics",
        "Surgery"
      ],
      answer: 1,
      explanation: "Modern molecular biotechnology techniques use labeled single-stranded DNA probes that hybridize specifically with pathogen DNA sequences for rapid, accurate diagnosis."
    },
    {
      id: "kmu-2026-079",
      question: "The most common vector used to deliver a therapeutic gene into target cells is:",
      options: [
        "Plasmid",
        "Liposome",
        "Genetically altered virus",
        "Restriction enzyme"
      ],
      answer: 2,
      explanation: "In human gene therapy, genetically engineered viruses (such as retroviruses, adenoviruses, or adeno-associated viruses) are the most widely used vectors due to their high efficiency at entering target cells."
    },
    {
      id: "kmu-2026-080",
      question: "Monoclonal antibodies are:",
      options: [
        "A mixture of different antibodies",
        "A group of identical antibodies produced by identical immune cells",
        "Antibodies produced only by T-lymphocytes",
        "Radioactively labelled antibodies"
      ],
      answer: 1,
      explanation: "Monoclonal antibodies are homogeneous antibodies generated by a single clone of hybridoma cells, all recognizing the exact same epitope on an antigen."
    },
    {
      id: "kmu-2026-081",
      question: "Which of the following correctly matches the biotechnology product with its application?",
      options: [
        "Biochips: Supply biologically fixed nitrogen to crops",
        "Mycorrhiza: Deliver drugs to target cells using nanoparticles",
        "Nanoparticles: Efficient drug delivery at target cells and diagnosis of disease",
        "Biofertilizers: Detect bioterrorism agents using miniaturized laboratories"
      ],
      answer: 2,
      explanation: "Nanoparticles are engineered at the nanoscale for targeted drug delivery to specific diseased tissues (such as tumors) and enhanced diagnostic imaging."
    },
  
    // PHYSICS (36 MCQs)
    {
      id: "kmu-2026-082",
      question: "When two vectors A and B are added, which statement is correct?",
      options: [
        "A + B and B + A have different magnitudes but the same direction",
        "The resultant depends on which vector is drawn first",
        "A + B = B + A, so changing the order does not change the resultant",
        "The commutative law applies only when the vectors are perpendicular"
      ],
      answer: 2,
      explanation: "Vector addition obeys the commutative law (A + B = B + A), meaning the magnitude and direction of the resultant vector are independent of the order in which vectors are added."
    },
    {
      id: "kmu-2026-083",
      question: "The direction of linear momentum is the same as the direction of:",
      options: [
        "Force",
        "Acceleration",
        "Velocity",
        "Displacement"
      ],
      answer: 2,
      explanation: "Linear momentum is defined as p = mv; since mass (m) is a positive scalar, the momentum vector p always points in the exact same direction as the velocity vector v."
    },
    {
      id: "kmu-2026-084",
      question: "Which situation represents uniform acceleration?",
      options: [
        "Velocity changes by unequal amounts during equal time intervals",
        "Acceleration changes continuously with time",
        "Velocity changes by equal amount in equal intervals of time",
        "Velocity remains constant throughout the motion"
      ],
      answer: 2,
      explanation: "Uniform (constant) acceleration is defined as a constant rate of change of velocity, meaning velocity changes by equal amounts in equal intervals of time."
    },
    {
      id: "kmu-2026-085",
      question: "A particle moves from 40 m at 10 s to 20 m at 15 s. Its average velocity is:",
      options: [
        "4 m/s",
        "–4 m/s",
        "0.04 m/s",
        "–0.04 m/s"
      ],
      answer: 1,
      explanation: "Average velocity v_avg = Δx / Δt = (20 m - 40 m) / (15 s - 10 s) = -20 m / 5 s = -4 m/s."
    },
    {
      id: "kmu-2026-086",
      question: "A 4 kg block and an 8 kg block are pushed with the same force on a frictionless surface. Which statement is CORRECT?",
      options: [
        "Both blocks have the same acceleration",
        "The 4 kg block has double the acceleration of the 8 kg block",
        "The 8 kg block has double the acceleration of the 4 kg block",
        "Both blocks move with the same velocity"
      ],
      answer: 1,
      explanation: "By Newton's second law (a = F/m), acceleration is inversely proportional to mass for a constant force; therefore, the 4 kg block has twice the acceleration of the 8 kg block."
    },
    {
      id: "kmu-2026-087",
      question: "The maximum height reached by a projectile is directly proportional to:",
      options: [
        "sin²θ",
        "cos²θ",
        "cosθ",
        "sinθ"
      ],
      answer: 0,
      explanation: "The maximum height of a projectile is given by H = (vᵢ² sin²θ) / (2g), showing that H is directly proportional to sin²θ."
    },
    {
      id: "kmu-2026-088",
      question: "In an isolated system, total energy and momentum is ______ in all situations.",
      options: [
        "Conserved",
        "Lost",
        "Doubled",
        "Halved"
      ],
      answer: 0,
      explanation: "By fundamental conservation laws, an isolated system experiences no net external force or energy exchange, so its total energy and total linear momentum remain conserved."
    },
    {
      id: "kmu-2026-089",
      question: "A person pushes against a stationary wall with a constant force for 2 mins. The work done on the wall is:",
      options: [
        "Positive",
        "Negative",
        "Zero",
        "Equal to the applied force"
      ],
      answer: 2,
      explanation: "Mechanical work is W = F · d · cosθ; since the stationary wall undergoes zero displacement (d = 0), the work done on the wall is zero."
    },
    {
      id: "kmu-2026-090",
      question: "A motor performs 2400 J of work in 2 minutes. The power generated is:",
      options: [
        "10 W",
        "20 W",
        "1200 W",
        "4800 W"
      ],
      answer: 1,
      explanation: "Convert time to seconds: t = 2 min × 60 s/min = 120 s. Power P = W / t = 2400 J / 120 s = 20 W."
    },
    {
      id: "kmu-2026-091",
      question: "The equation P.E = mgh is NOT applicable when:",
      options: [
        "The body’s height is much lesser than earth’s radius",
        "The body’s height is much greater than earth’s radius",
        "The mass is zero",
        "Gravity is constant"
      ],
      answer: 1,
      explanation: "The formula P.E = mgh assumes a uniform gravitational field (constant g), which breaks down when the height h is comparable to or much greater than Earth's radius."
    },
    {
      id: "kmu-2026-092",
      question: "If the string breaks while a ball is moving in a circle, the ball will:",
      options: [
        "Continue moving in a circle",
        "Stop immediately",
        "Move in a straight line tangent to the circle",
        "Fall directly towards the centre"
      ],
      answer: 2,
      explanation: "When the centripetal force (tension in the string) vanishes, by Newton's first law the ball continues with its instantaneous linear velocity along a straight line tangent to the circle."
    },
    {
      id: "kmu-2026-093",
      question: "One radian is the angle subtended at the centre by an arc whose length is equal to the ______ of the circle.",
      options: [
        "Diameter",
        "Radius",
        "Circumference",
        "Chord"
      ],
      answer: 1,
      explanation: "From θ = s / r, when the arc length s equals the radius r of the circle, the subtended central angle θ is defined as 1 radian."
    },
    {
      id: "kmu-2026-094",
      question: "The SI unit of angular displacement is:",
      options: [
        "Degree",
        "Revolution",
        "Radian",
        "Rad/s"
      ],
      answer: 2,
      explanation: "The radian (rad) is the standard SI unit for measuring plane angles and angular displacement."
    },
    {
      id: "kmu-2026-095",
      question: "A raindrop falls through the air and eventually reaches terminal velocity. At this instant, the net force acting on the raindrop is:",
      options: [
        "Zero",
        "Greater than its weight",
        "Equal to the air resistance",
        "Equal to the weight"
      ],
      answer: 0,
      explanation: "At terminal velocity, the upward viscous drag force balances the downward gravitational weight (F_drag = mg), resulting in zero net force and zero acceleration."
    },
    {
      id: "kmu-2026-096",
      question: "As the skydiver slows down after opening the parachute and approaches terminal velocity, the air resistance is:",
      options: [
        "Zero",
        "Increased",
        "Reduced",
        "Not changed"
      ],
      answer: 2,
      explanation: "Opening the parachute initially creates a huge upward drag force that decelerates the skydiver; because air resistance is proportional to speed, as the skydiver slows down toward the new lower terminal velocity, the air resistance decreases until it equals weight."
    },
    {
      id: "kmu-2026-097",
      question: "A hosepipe ejects water with a velocity of 2 m/s from an opening of 0.05 m². To double the velocity the cross-sectional area should be:",
      options: [
        "0.025 m²",
        "0.0125 m²",
        "0.05 m²",
        "0.10 m²"
      ],
      answer: 0,
      explanation: "By the equation of continuity (A₁v₁ = A₂v₂), doubling the velocity (v₂ = 4 m/s) requires halving the cross-sectional area: A₂ = (0.05 × 2) / 4 = 0.025 m²."
    },
    {
      id: "kmu-2026-098",
      question: "If the radius of an artery is reduced due to arteriosclerosis, the heart must increase blood pressure to:",
      options: [
        "Increase the blood flow rate",
        "Maintain the same blood flow rate",
        "Reduce the blood flow rate",
        "Increase the radius of the artery"
      ],
      answer: 1,
      explanation: "According to Poiseuille's law (Q = ΔP π r⁴ / 8ηL), narrowing of an artery dramatically increases vascular resistance, so the heart must generate higher blood pressure to maintain the normal blood flow rate."
    },
    {
      id: "kmu-2026-099",
      question: "In a progressive wave, a wave crest moves a distance of ______ during one complete period (T).",
      options: [
        "Half a wavelength",
        "One wavelength",
        "Two wavelengths",
        "Multiple wavelengths"
      ],
      answer: 1,
      explanation: "By definition, the wavelength (λ) is the distance traveled by a wave profile (such as a crest) in the time of one complete oscillation period (T)."
    },
    {
      id: "kmu-2026-100",
      question: "In transverse waves, the particles of the medium vibrate ______ to the direction of wave propagation, whereas in longitudinal waves they vibrate ______.",
      options: [
        "Perpendicular; parallel",
        "Parallel; perpendicular",
        "Parallel; parallel",
        "Perpendicular; perpendicular"
      ],
      answer: 0,
      explanation: "Transverse waves involve particle oscillations perpendicular to the direction of energy propagation, while longitudinal waves involve particle oscillations parallel to the direction of propagation."
    },
    {
      id: "kmu-2026-101",
      question: "A wave travels through a string with a frequency of 25 Hz and a wavelength of 1.6 m. How far does the wave travel in 8 seconds?",
      options: [
        "160 m",
        "240 m",
        "320 m",
        "400 m"
      ],
      answer: 2,
      explanation: "First find wave speed: v = fλ = 25 Hz × 1.6 m = 40 m/s. Distance traveled in 8 s is d = v × t = 40 m/s × 8 s = 320 m."
    },
    {
      id: "kmu-2026-102",
      question: "The increase in speed of sound in gas for each 1°C rise in temperature is:",
      options: [
        "0.2 m/s",
        "0.6 m/s",
        "1.2 m/s",
        "2.0 m/s"
      ],
      answer: 1,
      explanation: "Using v_t = v₀ + 0.61t, the speed of sound in air increases by approximately 0.6 m/s (0.61 m/s) for every 1°C rise in temperature."
    },
    {
      id: "kmu-2026-103",
      question: "According to Laplace, sound waves travel through air so rapidly that:",
      options: [
        "Heat is completely lost to the surroundings",
        "Heat is completely gained from the surroundings",
        "No heat is exchanged with the surroundings",
        "Heat is exchanged slowly with the surroundings"
      ],
      answer: 2,
      explanation: "Laplace corrected Newton's formula by recognizing that compressions and rarefactions in sound waves occur so rapidly—and air is a poor conductor—that the process is adiabatic (no heat is exchanged with the surroundings)."
    },
    {
      id: "kmu-2026-104",
      question: "A gas absorbs 1.5 × 10³ J of heat and performs 5.0 × 10² J of work. Its change in internal energy (ΔU) is:",
      options: [
        "1.0 × 10³ J",
        "–1.0 × 10³ J",
        "2.0 × 10³ J",
        "–2.0 × 10³ J"
      ],
      answer: 0,
      explanation: "By the First Law of Thermodynamics, ΔU = Q - W = 1500 J - 500 J = 1000 J = 1.0 × 10³ J."
    },
    {
      id: "kmu-2026-105",
      question: "One mole of an ideal gas is heated through 20 K at constant pressure, where R = 8.315 J mol⁻¹ K⁻¹. If Cᵥ = 21 J mol⁻¹ K⁻¹, the heat supplied is:",
      options: [
        "166 J",
        "420 J",
        "586 J",
        "752 J"
      ],
      answer: 2,
      explanation: "Using Mayer's relation, Cₚ = Cᵥ + R = 21 + 8.315 = 29.315 J mol⁻¹ K⁻¹. At constant pressure, Q = n Cₚ ΔT = 1 × 29.315 × 20 = 586.3 J ≈ 586 J."
    },
    {
      id: "kmu-2026-106",
      question: "In an adiabatic process if a gas is allowed to expand suddenly, its temperature will:",
      options: [
        "Decrease",
        "Increase",
        "Remain constant",
        "Become absolute zero"
      ],
      answer: 0,
      explanation: "In an adiabatic expansion (Q = 0), the gas does positive work against its surroundings at the expense of its own internal energy (ΔU = -W), causing its temperature to drop."
    },
    {
      id: "kmu-2026-107",
      question: "According to Coulomb’s law, if the distance between two point charges is doubled while their magnitudes remain unchanged, the electrostatic force between them becomes:",
      options: [
        "One-fourth of its original value",
        "One-half of its original value",
        "Twice its original value",
        "Four times its original value"
      ],
      answer: 0,
      explanation: "Coulomb's force follows an inverse-square law (F ∝ 1/r²); doubling the distance (2r) reduces the force by a factor of 2² = 4, to one-fourth of its original value."
    },
    {
      id: "kmu-2026-108",
      question: "A 12 V battery transfers 5000 C of charge through a circuit. The energy delivered is:",
      options: [
        "4.17 × 10² J",
        "4.17 × 10³ J",
        "6.0 × 10⁴ J",
        "6.0 × 10⁵ J"
      ],
      answer: 2,
      explanation: "Electrical energy delivered is W = q × V = 5000 C × 12 V = 60,000 J = 6.0 × 10⁴ J."
    },
    {
      id: "kmu-2026-109",
      question: "An infinite plane sheet has a surface charge density σ = 8.85 × 10⁻⁶ C m⁻². The electric field on either side of the sheet is:",
      options: [
        "0.25 × 10⁶ N C⁻¹",
        "0.5 × 10⁶ N C⁻¹",
        "1 × 10⁶ N C⁻¹",
        "2 × 10⁶ N C⁻¹"
      ],
      answer: 1,
      explanation: "For an infinite plane sheet of charge, E = σ / (2ε₀) = (8.85 × 10⁻⁶) / (2 × 8.85 × 10⁻¹²) = 0.5 × 10⁶ N C⁻¹."
    },
    {
      id: "kmu-2026-110",
      question: "Steady current in a metallic conductor is due to the ______ under an electric field.",
      options: [
        "Directed flow of free electrons",
        "Random electron motion",
        "Positive ion movement",
        "Continuously changing electron flow"
      ],
      answer: 0,
      explanation: "When a steady potential difference establishes a constant electric field across a metal, free conduction electrons experience a net drift velocity in a single direction, producing a steady current."
    },
    {
      id: "kmu-2026-111",
      question: "Which expression correctly represents the SI unit of magnetic flux density?",
      options: [
        "N A⁻¹ m⁻¹",
        "N A⁻¹ m",
        "N C⁻¹",
        "Wb m²"
      ],
      answer: 0,
      explanation: "From the magnetic force on a current-carrying wire F = I L B sinθ, B = F / (I L), giving the SI unit Tesla (T) = N / (A · m) = N A⁻¹ m⁻¹."
    },
    {
      id: "kmu-2026-112",
      question: "If the number of turns of a coil is doubled while the rate of change of magnetic flux remains constant, the induced e.m.f. will be:",
      options: [
        "Halved",
        "Unchanged",
        "Doubled",
        "One-fourth"
      ],
      answer: 2,
      explanation: "By Faraday's law of electromagnetic induction, ε = -N (ΔΦ / Δt); thus, doubling the number of turns (N) directly doubles the induced e.m.f."
    },
    {
      id: "kmu-2026-113",
      question: "In an alternating current wave, the phase of the maximum positive value is:",
      options: [
        "0°",
        "90°",
        "180°",
        "270°"
      ],
      answer: 1,
      explanation: "For a sinusoidal alternating current I = I₀ sinθ, the current reaches its positive peak (+I₀) when sinθ = 1, which corresponds to a phase angle θ = 90° (or π/2 rad)."
    },
    {
      id: "kmu-2026-114",
      question: "When a diode is reverse biased, it:",
      options: [
        "Almost stops the current",
        "Reduces the resistance of the junction",
        "Allows current to pass",
        "Increases the current"
      ],
      answer: 0,
      explanation: "Reverse biasing widens the depletion region and increases the potential barrier across the p-n junction, blocking majority carriers and almost completely stopping current flow."
    },
    {
      id: "kmu-2026-115",
      question: "According to Planck’s theory, an atom in one quantum state:",
      options: [
        "Emits energy continuously",
        "Absorbs energy continuously",
        "Neither emits nor absorbs energy",
        "Emits one photon every second"
      ],
      answer: 2,
      explanation: "According to quantum theory (Planck/Bohr), an atomic oscillator or electron remaining in a stationary quantum energy state neither emits nor absorbs electromagnetic energy; radiation only occurs during transitions between states."
    },
    {
      id: "kmu-2026-116",
      question: "Which type of spectrum consists of bright lines of various frequencies?",
      options: [
        "Line emission",
        "Line absorption",
        "Continuous",
        "Band"
      ],
      answer: 0,
      explanation: "A line emission spectrum is produced when excited atoms emit photons of discrete wavelengths, appearing as distinct bright colored lines separated by dark spaces."
    },
    {
      id: "kmu-2026-117",
      question: "The half-life of a radioactive element is:",
      options: [
        "Constant",
        "Variable",
        "Dependent on the quantity",
        "Dependent on temperature and pressure"
      ],
      answer: 0,
      explanation: "Radioactive decay is a spontaneous nuclear process; the half-life (T₁/₂ = 0.693 / λ) is a fixed constant characteristic of each radionuclide and is unaffected by temperature, pressure, or sample mass."
    },
  
    // CHEMISTRY (45 MCQs)
    {
      id: "kmu-2026-118",
      question: "What is the mass of 1 mole of calcium carbonate (CaCO₃)? (Molar mass of calcium: 40 g/mol, carbon: 12 g/mol, oxygen: 16 g/mol)",
      options: [
        "25 g",
        "50 g",
        "75 g",
        "100 g"
      ],
      answer: 3,
      explanation: "Molar mass of CaCO₃ = 40 + 12 + (3 × 16) = 40 + 12 + 48 = 100 g/mol, so 1 mole has a mass of 100 g."
    },
    {
      id: "kmu-2026-119",
      question: "A limiting reagent:",
      options: [
        "Is present in maximum amount",
        "Produces minimum number of moles of product",
        "Produces maximum number of moles of product",
        "Does not affect the amount of product"
      ],
      answer: 1,
      explanation: "The limiting reagent is the reactant that is completely consumed first during a chemical reaction, thereby limiting the reaction and producing the minimum number of moles of product."
    },
    {
      id: "kmu-2026-120",
      question: "Which of the following is a CORRECT statement about yield?",
      options: [
        "Theoretical yield is the amount of product that is actually produced experimentally during a chemical reaction",
        "The percent yield tells us the total mass of the reactants used in the reaction",
        "Chemists use percentage yield to express the efficiency of a chemical reaction",
        "Actual yield is the amount of the product calculated based on a balanced chemical equation"
      ],
      answer: 2,
      explanation: "Percentage yield = (Actual yield / Theoretical yield) × 100%, which chemists use to evaluate the practical efficiency of a chemical reaction."
    },
    {
      id: "kmu-2026-121",
      question: "The shape of an orbital depends on the ______ quantum number.",
      options: [
        "Azimuthal",
        "Magnetic",
        "Principal",
        "Spin"
      ],
      answer: 0,
      explanation: "The azimuthal (subsidiary or angular momentum) quantum number (l) defines the subshell (s, p, d, f) and determines the three-dimensional shape of an atomic orbital."
    },
    {
      id: "kmu-2026-122",
      question: "According to Pauli’s Exclusion Principle, no two electrons in an atom can have the same set of ______ quantum numbers.",
      options: [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      answer: 2,
      explanation: "Pauli's Exclusion Principle states that no two electrons in the same atom can have identical values for all four quantum numbers (n, l, m, and s)."
    },
    {
      id: "kmu-2026-123",
      question: "What is the electronic configuration of Calcium?",
      options: [
        "[Ar] 4s¹",
        "[Ar] 4s²",
        "[Ne] 3s²",
        "[He] 2s²"
      ],
      answer: 1,
      explanation: "Calcium has atomic number Z = 20; following the Argon core ([Ar], 18 electrons), its two valence electrons occupy the 4s orbital: [Ar] 4s²."
    },
    {
      id: "kmu-2026-124",
      question: "The average kinetic energy of gas molecules is directly proportional to ______ of the gas.",
      options: [
        "Density",
        "Pressure",
        "Absolute temperature",
        "Volume"
      ],
      answer: 2,
      explanation: "According to the kinetic molecular theory of gases, the average translational kinetic energy of gas molecules is directly proportional to the absolute Kelvin temperature (KE_avg = 3/2 k_B T)."
    },
    {
      id: "kmu-2026-125",
      question: "If the pressure of a gas is doubled at constant temperature, its volume will:",
      options: [
        "Double",
        "Halve",
        "Remain unchanged",
        "Triple"
      ],
      answer: 1,
      explanation: "By Boyle's Law (P₁V₁ = P₂V₂ at constant T), volume is inversely proportional to pressure; doubling the pressure halves the volume."
    },
    {
      id: "kmu-2026-126",
      question: "If the absolute temperature of a gas doubles at constant pressure, its volume will:",
      options: [
        "Remain unchanged",
        "Double",
        "Halve",
        "Triple"
      ],
      answer: 1,
      explanation: "By Charles's Law (V₁/T₁ = V₂/T₂ at constant P), the volume of a fixed mass of gas is directly proportional to its absolute temperature, so doubling T doubles V."
    },
    {
      id: "kmu-2026-127",
      question: "Absolute zero is equal to ______ °C.",
      options: [
        "–100",
        "–173",
        "–273",
        "–373"
      ],
      answer: 2,
      explanation: "Absolute zero (0 K), the theoretical temperature at which molecular translational motion ceases, equals –273.15 °C (commonly rounded to –273 °C)."
    },
    {
      id: "kmu-2026-128",
      question: "The kinetic energy of liquid molecules is ______ compared to that of solids.",
      options: [
        "Constant",
        "Equal",
        "Greater",
        "Lower"
      ],
      answer: 2,
      explanation: "Molecules in a liquid possess greater thermal kinetic energy than those in a solid, allowing them to overcome rigid lattice positions and slide past one another."
    },
    {
      id: "kmu-2026-129",
      question: "At the boiling point, added heat is used to break ______ forces.",
      options: [
        "Intermolecular",
        "Ionic",
        "Magnetic",
        "Nuclear"
      ],
      answer: 0,
      explanation: "During boiling at constant temperature, the latent heat of vaporization is absorbed solely to overcome attractive intermolecular forces so molecules can escape into the gas phase."
    },
    {
      id: "kmu-2026-130",
      question: "Hydrogen bonding occurs between hydrogen and a highly ______ atom.",
      options: [
        "Electronegative",
        "Electropositive",
        "Nonpolar",
        "Radioactive"
      ],
      answer: 0,
      explanation: "Hydrogen bonding occurs when a hydrogen atom covalently bonded to a small, highly electronegative atom (F, O, or N) is attracted to a lone pair on another electronegative atom."
    },
    {
      id: "kmu-2026-131",
      question: "In a sodium chloride lattice, each ion is surrounded by ions of ______ charge.",
      options: [
        "Equal",
        "Negative",
        "Opposite",
        "Positive"
      ],
      answer: 2,
      explanation: "In the face-centered cubic NaCl crystal lattice, each Na⁺ ion is octahedrally surrounded by six Cl⁻ ions and each Cl⁻ ion by six Na⁺ ions (ions of opposite charge)."
    },
    {
      id: "kmu-2026-132",
      question: "Ionic solids conduct electricity in ______ state.",
      options: [
        "Frozen",
        "Molten",
        "Solid",
        "Vapour"
      ],
      answer: 1,
      explanation: "In the solid state, ions are locked in fixed lattice positions, whereas in the molten (fused) state or aqueous solution, ions are free to move and conduct electric current."
    },
    {
      id: "kmu-2026-133",
      question: "A unit cell of crystal lattice is characterized by ______ parameters.",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: 2,
      explanation: "A unit cell is defined by 6 crystallographic parameters: three edge lengths (a, b, c) and three interaxial angles (α, β, γ)."
    },
    {
      id: "kmu-2026-134",
      question: "When gaseous ions of opposite charge combine to form an ionic crystal, lattice energy is ______.",
      options: [
        "Absorbed",
        "Released",
        "Stored",
        "Vaporized"
      ],
      answer: 1,
      explanation: "The formation of strong electrostatic attractions when gaseous cations and anions condense into an ordered ionic crystal lattice is an exothermic process, so lattice energy is released."
    },
    {
      id: "kmu-2026-135",
      question: "An increase in temperature shifts the equilibrium in favor of the ______ reaction.",
      options: [
        "Endothermic",
        "Exothermic",
        "Irreversible",
        "Static"
      ],
      answer: 0,
      explanation: "According to Le Chatelier's principle, raising the temperature adds heat to the system, shifting equilibrium in the endothermic direction to absorb the added thermal energy."
    },
    {
      id: "kmu-2026-136",
      question: "Addition of sodium acetate to aqueous solution of acetic acid suppresses its:",
      options: [
        "Condensation",
        "Ionization",
        "Evaporation",
        "Reduction"
      ],
      answer: 1,
      explanation: "Due to the common ion effect, adding acetate ions (CH₃COO⁻) from sodium acetate shifts the acetic acid dissociation equilibrium (CH₃COOH ⇌ CH₃COO⁻ + H⁺) to the left, suppressing its ionization."
    },
    {
      id: "kmu-2026-137",
      question: "The Haber process is exothermic; therefore, decreasing the temperature favors:",
      options: [
        "Decomposition of ammonia",
        "Formation of ammonia",
        "Formation of nitrogen gas",
        "No change in equilibrium"
      ],
      answer: 1,
      explanation: "In N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = –92.4 kJ/mol), the forward synthesis of ammonia is exothermic, so lowering the temperature shifts equilibrium toward the formation of ammonia."
    },
    {
      id: "kmu-2026-138",
      question: "Activation energy is the minimum energy to:",
      options: [
        "Increase the reaction yield",
        "Break all chemical bonds in the reactants",
        "Initiate a chemical reaction",
        "Separate mixture"
      ],
      answer: 2,
      explanation: "Activation energy (Eₐ) is the minimum threshold energy that colliding reactant molecules must possess to form the activated complex and initiate a chemical reaction."
    },
    {
      id: "kmu-2026-139",
      question: "A reaction with a lower activation energy proceeds at a ______ rate.",
      options: [
        "Faster",
        "Later",
        "Slower",
        "Unchanged"
      ],
      answer: 0,
      explanation: "When activation energy is lower, a greater fraction of reactant molecules possesses sufficient energy to overcome the barrier per unit time, resulting in a faster reaction rate."
    },
    {
      id: "kmu-2026-140",
      question: "When heat is absorbed by the system from the surroundings, the sign of heat (q) is:",
      options: [
        "Negative",
        "Positive",
        "Variable",
        "Zero"
      ],
      answer: 1,
      explanation: "By IUPAC thermochemical convention, heat absorbed by a system from its surroundings (an endothermic process) increases the system's energy and is assigned a positive sign (+q)."
    },
    {
      id: "kmu-2026-141",
      question: "According to Hess’s Law, the overall enthalpy change depends only on the:",
      options: [
        "Activation energy",
        "Reaction pathway",
        "Initial and final states",
        "Reaction mechanism"
      ],
      answer: 2,
      explanation: "Enthalpy is a state function; Hess's Law states that the total enthalpy change of a reaction is independent of the route or number of steps and depends solely on the initial and final states."
    },
    {
      id: "kmu-2026-142",
      question: "Which change in oxidation number represents reduction?",
      options: [
        "+1 → +3",
        "+2 → 0",
        "0 → +2",
        "–1 → +1"
      ],
      answer: 1,
      explanation: "Reduction is the gain of electrons, which results in a decrease in oxidation number (such as +2 decreasing to 0)."
    },
    {
      id: "kmu-2026-143",
      question: "According to VSEPR theory, what determines the shape of a molecule?",
      options: [
        "Electron charge",
        "Electron mass",
        "Electron pairs",
        "Electron volume"
      ],
      answer: 2,
      explanation: "Valence Shell Electron Pair Repulsion (VSEPR) theory states that molecular geometry is determined by electrostatic repulsions between bonding and lone electron pairs surrounding the central atom."
    },
    {
      id: "kmu-2026-144",
      question: "In the excited state, carbon has ______ half-filled orbitals.",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 3,
      explanation: "Promoting one 2s electron to the empty 2p_z orbital gives carbon the excited configuration 1s² 2s¹ 2pₓ¹ 2pᵧ¹ 2p_z¹, providing 4 half-filled orbitals to form four covalent bonds."
    },
    {
      id: "kmu-2026-145",
      question: "The dipole moment is used to estimate the ______ character of a bond.",
      options: [
        "Acidic",
        "Basic",
        "Ionic",
        "Organic"
      ],
      answer: 2,
      explanation: "Comparing the experimentally observed dipole moment of a covalent bond with the theoretical dipole moment for complete electron transfer allows calculation of its percentage ionic character."
    },
    {
      id: "kmu-2026-146",
      question: "Which Group IV-A tetrachloride DOES NOT react with water at room temperature?",
      options: [
        "CCl₄",
        "GeCl₄",
        "PbCl₄",
        "SiCl₄"
      ],
      answer: 0,
      explanation: "Carbon tetrachloride (CCl₄) resists hydrolysis at room temperature because carbon lacks vacant d-orbitals to accept lone pairs from water molecules and is sterically shielded by four chlorine atoms."
    },
    {
      id: "kmu-2026-147",
      question: "Copper shows an exceptional electronic configuration because it has a more stable ______ subshell.",
      options: [
        "Half-filled",
        "Filled",
        "Paired",
        "Vacant"
      ],
      answer: 1,
      explanation: "Copper (Z = 29) has the configuration [Ar] 3d¹⁰ 4s¹ rather than [Ar] 3d⁹ 4s² because a completely filled 3d¹⁰ subshell provides extra exchange energy and symmetrical stability."
    },
    {
      id: "kmu-2026-148",
      question: "When chlorine is present in excess during chlorination of methane, the major product is:",
      options: [
        "Carbon tetrachloride",
        "Chloroform",
        "Methyl chloride",
        "Methylene chloride"
      ],
      answer: 0,
      explanation: "In the presence of excess Cl₂ and UV light, free-radical substitution continues until all four hydrogen atoms of methane are replaced, yielding carbon tetrachloride (CCl₄) as the major product."
    },
    {
      id: "kmu-2026-149",
      question: "Which carbon chain is selected first when assigning the IUPAC name of an alkene?",
      options: [
        "Cyclic carbon chain",
        "Most highly branched carbon chains",
        "Longest with maximum number of double bonds",
        "Longest with maximum number of triple bonds"
      ],
      answer: 2,
      explanation: "According to IUPAC nomenclature rules for alkenes, the parent chain must be the longest continuous carbon chain that contains the maximum number of carbon-carbon double bonds."
    },
    {
      id: "kmu-2026-150",
      question: "Which method prepares an alkene by removing water from an alcohol?",
      options: [
        "Dehydration",
        "Dehydrohalogenation",
        "Halogenation",
        "Hydrogenation"
      ],
      answer: 0,
      explanation: "Acid-catalyzed dehydration of an alcohol (e.g., heating with concentrated H₂SO₄ or Al₂O₃) eliminates a molecule of H₂O to generate an alkene."
    },
    {
      id: "kmu-2026-151",
      question: "Which statement best describes the structure of benzene? It is a:",
      options: [
        "Planar molecule with six sp² hybridized carbon atoms",
        "Tetrahedral molecule with six sp³ hybridized carbon atoms",
        "Linear molecule with sp hybridized carbon atoms",
        "Non-planar molecule with alternating single and double bonds"
      ],
      answer: 0,
      explanation: "Benzene (C₆H₆) is a flat, regular hexagonal planar ring in which all six carbon atoms are sp² hybridized with delocalized π-electrons above and below the ring."
    },
    {
      id: "kmu-2026-152",
      question: "Compared with alkenes, benzene undergoes ______ reaction to retain its aromatic character.",
      options: [
        "Addition",
        "Elimination",
        "Polymerization",
        "Substitution"
      ],
      answer: 3,
      explanation: "Because addition would destroy its resonance-stabilized aromatic sextet, benzene preferentially undergoes electrophilic aromatic substitution reactions."
    },
    {
      id: "kmu-2026-153",
      question: "Hydration of ethyne in the presence of H₂SO₄ and HgSO₄ (100°C) ultimately gives:",
      options: [
        "Acetaldehyde",
        "Acetic acid",
        "Ethanol",
        "Ethene"
      ],
      answer: 0,
      explanation: "Water adds across the triple bond of ethyne to form an unstable enol intermediate (vinyl alcohol), which rapidly tautomerizes into acetaldehyde (ethanal)."
    },
    {
      id: "kmu-2026-154",
      question: "According to IUPAC, when two different halogens are present in a haloalkane at the same position, which rule is used to decide which substituent is written first?",
      options: [
        "Alphabetical",
        "Branching",
        "Chain length",
        "Molecular mass"
      ],
      answer: 0,
      explanation: "IUPAC rules specify that halo substituents are listed as prefixes in strict alphabetical order (e.g., bromo before chloro), and numbering also gives priority alphabetically when positions are equivalent."
    },
    {
      id: "kmu-2026-155",
      question: "Which alkyl halide has the highest carbon-halogen bond energy?",
      options: [
        "C–Br",
        "C–Cl",
        "C–F",
        "C–I"
      ],
      answer: 2,
      explanation: "Because fluorine has the smallest atomic radius among halogens, the C–F bond is the shortest and strongest, possessing the highest bond dissociation energy (~485 kJ/mol)."
    },
    {
      id: "kmu-2026-156",
      question: "An alcohol that produces cloudiness immediately with Lucas reagent is:",
      options: [
        "Primary",
        "Secondary",
        "Tertiary",
        "Trihydric"
      ],
      answer: 2,
      explanation: "Tertiary alcohols react rapidly via an Sₙ1 carbocation mechanism with Lucas reagent (conc. HCl + anhydrous ZnCl₂), producing immediate turbidity (insoluble alkyl chloride) at room temperature."
    },
    {
      id: "kmu-2026-157",
      question: "Reduction of an ester with lithium aluminium hydride mainly produces:",
      options: [
        "Alkene",
        "Alcohol",
        "Aldehyde",
        "Ketone"
      ],
      answer: 1,
      explanation: "Lithium aluminium hydride (LiAlH₄) is a strong reducing agent that cleaves esters completely into two alcohol molecules (a primary alcohol from the acyl portion and the alcohol from the alkoxy group)."
    },
    {
      id: "kmu-2026-158",
      question: "Which carbonyl compound is generally more reactive toward nucleophilic addition?",
      options: [
        "Aldehyde",
        "Alcohol",
        "Ether",
        "Ketone"
      ],
      answer: 0,
      explanation: "Aldehydes are more reactive than ketones toward nucleophilic addition because they experience less steric hindrance and have only one electron-donating alkyl group, leaving the carbonyl carbon more electrophilic."
    },
    {
      id: "kmu-2026-159",
      question: "Which reagent distinguishes aldehydes from ketones by producing a silver mirror?",
      options: [
        "Benedict’s",
        "Clemmensen",
        "Fehling’s",
        "Tollen’s"
      ],
      answer: 3,
      explanation: "Tollen's reagent (ammoniacal silver nitrate, [Ag(NH₃)₂]⁺) oxidizes aldehydes to carboxylate ions while reducing Ag⁺ to metallic silver, forming a characteristic silver mirror."
    },
    {
      id: "kmu-2026-160",
      question: "Which of the following protein-prosthetic group combinations is correctly matched?",
      options: [
        "Chromoproteins – Carbohydrates",
        "Glycoproteins – Lipids",
        "Lipoproteins – Lipids",
        "Nucleoproteins – Carbohydrates"
      ],
      answer: 2,
      explanation: "Lipoproteins are conjugated proteins containing lipids as their prosthetic group, whereas glycoproteins contain carbohydrates, nucleoproteins contain nucleic acids, and chromoproteins contain colored pigments."
    },
    {
      id: "kmu-2026-161",
      question: "A manufacturer needs an adhesive that solidifies on cooling and is widely used in bookbinding and packaging. Which type of adhesive is most suitable?",
      options: [
        "Contact",
        "Hot-melt",
        "Pressure-sensitive",
        "Solvent-based"
      ],
      answer: 1,
      explanation: "Hot-melt adhesives are thermoplastic polymers applied in a molten state that rapidly solidify upon cooling to form a strong bond, making them standard in bookbinding and carton sealing."
    },
    {
      id: "kmu-2026-162",
      question: "Which polymer is produced through condensation polymerization?",
      options: [
        "Nylon-6,6",
        "Polyethene",
        "Polyvinyl chloride",
        "Polystyrene"
      ],
      answer: 0,
      explanation: "Nylon-6,6 is a polyamide synthesized by step-growth condensation polymerization of hexamethylenediamine and adipic acid with the elimination of water molecules."
    },
  
    // ENGLISH (9 MCQs)
    {
      id: "kmu-2026-163",
      question: "I like cake, however my friend likes chocolate. The transitional device is used for:",
      options: [
        "Exception",
        "Sequence",
        "Addition",
        "Contrast"
      ],
      answer: 3,
      explanation: "The conjunctive adverb 'however' introduces a contrasting idea between two clauses."
    },
    {
      id: "kmu-2026-164",
      question: "Electric cars are becoming increasingly popular due to concerns about air pollution and fossil fuels. They produce zero emissions and are powered by rechargeable batteries. According to the passage, why are electric cars becoming popular?",
      options: [
        "They are faster than other cars.",
        "They are cheaper to manufacture.",
        "They reduce air pollution.",
        "They use petrol efficiently."
      ],
      answer: 2,
      explanation: "The passage explicitly states that electric cars are becoming popular due to concerns about air pollution and fossil fuels because they produce zero emissions."
    },
    {
      id: "kmu-2026-165",
      question: "Which of the following sentences uses the gerund as a subject?",
      options: [
        "I love singing in the shower.",
        "Singing is my favorite hobby.",
        "She is singing a beautiful song.",
        "The singing bird is a nightingale."
      ],
      answer: 1,
      explanation: "In 'Singing is my favorite hobby,' the verb form 'Singing' functions as a noun at the beginning of the sentence, acting as the subject of the verb 'is'."
    },
    {
      id: "kmu-2026-166",
      question: "My cat is hiding ______ the bed. Use correct preposition.",
      options: [
        "From",
        "Inside",
        "Under",
        "To"
      ],
      answer: 2,
      explanation: "The preposition 'under' properly indicates a position beneath the bed."
    },
    {
      id: "kmu-2026-167",
      question: "Turn left ______ the traffic signal and the cafe will be on your right.",
      options: [
        "Into",
        "On",
        "At",
        "Between"
      ],
      answer: 2,
      explanation: "The preposition 'at' is used to designate a specific point, intersection, or landmark such as a traffic signal."
    },
    {
      id: "kmu-2026-168",
      question: "Which one of the following options contains the appropriate use of tense?",
      options: [
        "The light went out while I am reading.",
        "The light has gone out while I was reading.",
        "The light went out while I was reading.",
        "The light goes out while I am reading."
      ],
      answer: 2,
      explanation: "When a shorter past action ('went out', simple past) interrupts an ongoing past action ('was reading', past continuous), both clauses must remain consistently in the past tense."
    },
    {
      id: "kmu-2026-169",
      question: "Which one of the following sentences employs CORRECT subject-verb agreement?",
      options: [
        "The number of students in Class 9 is twenty.",
        "The number of students in Class 9 are twenty.",
        "The numbers of students in Class 9 is twenty.",
        "The numbers of student in Class 9 are twenty."
      ],
      answer: 0,
      explanation: "The expression 'The number of + plural noun' refers to a single numerical figure and therefore takes a singular verb ('is')."
    },
    {
      id: "kmu-2026-170",
      question: "My parents do not allow me to stay out ______.",
      options: [
        "Latter",
        "Lately",
        "Late",
        "Later"
      ],
      answer: 2,
      explanation: "'Late' functions as an adverb of time meaning after the expected or usual hour ('stay out late'), whereas 'lately' means recently."
    },
    {
      id: "kmu-2026-171",
      question: "Which of the following is the FALSE cause and effect claim?",
      options: [
        "Smoking causes lung cancer.",
        "Rain causes wet roads.",
        "Wearing red clothes causes intelligence.",
        "Exercise improves health."
      ],
      answer: 2,
      explanation: "There is no causal relationship between the color of clothing worn and human intelligence, making 'Wearing red clothes causes intelligence' a false cause-and-effect claim."
    },
  
    // LOGICAL REASONING (9 MCQs)
    {
      id: "kmu-2026-172",
      question: "In how many different ways can four persons be seated on four chairs for a photograph?",
      options: [
        "8",
        "12",
        "16",
        "24"
      ],
      answer: 3,
      explanation: "The number of linear permutations of 4 distinct people in 4 chairs is 4! = 4 × 3 × 2 × 1 = 24 ways."
    },
    {
      id: "kmu-2026-173",
      question: "What is the missing term of the sequence? 1, 3, 6, 10, 15, 21, 28, ______",
      options: [
        "30",
        "32",
        "34",
        "36"
      ],
      answer: 3,
      explanation: "This is the sequence of triangular numbers where consecutive differences increase by 1 (+2, +3, +4, +5, +6, +7, +8): 28 + 8 = 36."
    },
    {
      id: "kmu-2026-174",
      question: "Meetings are at 9am, 11am, and 2pm. HR meets before Finance. IT meets last. HR does not meet at 11am. Which team meets at 9am?",
      options: [
        "HR",
        "IT",
        "Finance",
        "Cannot be determined"
      ],
      answer: 0,
      explanation: "IT meets last (2 pm). Since HR meets before Finance, HR must be at 9 am and Finance at 11 am (which also satisfies HR not meeting at 11 am)."
    },
    {
      id: "kmu-2026-175",
      question: "Aimen is Amna’s daughter and Salman is Amna’s father. Sarah is Salman’s daughter. What is Aimen to Salman?",
      options: [
        "Grandmother",
        "Granddaughter",
        "Daughter",
        "Mother"
      ],
      answer: 1,
      explanation: "Salman is the father of Amna, and Aimen is the daughter of Amna; therefore, Aimen is Salman's granddaughter."
    },
    {
      id: "kmu-2026-176",
      question: "A hospital performs 25 surgeries daily for 6 days a week. How many surgeries are performed weekly?",
      options: [
        "120",
        "145",
        "150",
        "175"
      ],
      answer: 2,
      explanation: "Weekly surgeries = 25 surgeries/day × 6 days = 150 surgeries."
    },
    {
      id: "kmu-2026-177",
      question: "You park your car in a no-parking zone and are approached by a traffic police officer. What is the most appropriate response?",
      options: [
        "Argue with the officer to resolve the issue",
        "Leave immediately without permission",
        "Cooperate with the officer and comply with traffic regulations",
        "Try to run away from the location"
      ],
      answer: 2,
      explanation: "Cooperating respectfully with law enforcement and complying with traffic regulations is the responsible and lawful course of action."
    },
    {
      id: "kmu-2026-178",
      question: "Why is it important to monitor the implementation of a decision?",
      options: [
        "To hinder progress",
        "To improve and adapt",
        "To assign blame for mistakes",
        "To shut down feedback"
      ],
      answer: 1,
      explanation: "Monitoring decision implementation allows leaders and teams to evaluate outcomes, identify issues early, and make necessary improvements or adaptations."
    },
    {
      id: "kmu-2026-179",
      question: "Human rights protection leads to economic growth. In light of the statement, Pakistan improved its labor laws for protection of rights of labors. However, economic growth is still low. Therefore, human rights protection does not support economic growth. What is the weakness in the argument?",
      options: [
        "Human rights are only one of many factors influencing economic growth.",
        "Labor laws alone guarantee economic growth.",
        "Economic growth depends only on labor rights.",
        "Human rights have no impact on national development."
      ],
      answer: 0,
      explanation: "The argument commits a causal oversimplification fallacy by overlooking that macroeconomic growth depends on multiple variables (investment, inflation, governance, trade), not labor rights alone."
    },
    {
      id: "kmu-2026-180",
      question: "In a shop having 3 fruits, the oranges are cheaper than grapefruit and pricier than grapes, then ______.",
      options: [
        "Grapefruit is more expensive than grapes",
        "Grapes are more expensive than grapefruit",
        "Oranges are cheaper than grapes",
        "Grapefruit and grapes cost the same"
      ],
      answer: 0,
      explanation: "From the price ordering Grapes < Oranges < Grapefruit, it logically follows by transitivity that grapefruit is more expensive than grapes."
    }
  ];