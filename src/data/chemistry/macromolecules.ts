export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const macromoleculesQuestions: Question[] = [
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
      }
  ];