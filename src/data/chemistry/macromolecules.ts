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
    }
  ];