export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const biologyQuestions: Question[] = [
    {
      id: "bio-cell-001",
      question: "Which organelle is known as the powerhouse of the cell?",
      options: [
        "Nucleus",
        "Mitochondrion",
        "Ribosome",
        "Golgi apparatus",
      ],
      answer: 1,
      explanation:
        "Mitochondria produce most of the cell's ATP through cellular respiration.",
    },
  
    {
      id: "bio-cell-002",
      question: "Which structure controls the activities of the cell?",
      options: [
        "Cell wall",
        "Nucleus",
        "Vacuole",
        "Lysosome",
      ],
      answer: 1,
      explanation:
        "The nucleus contains the genetic material and regulates many cellular activities.",
    },
  
    {
      id: "bio-cell-003",
      question:
        "Which organelle is primarily responsible for protein synthesis?",
      options: [
        "Ribosome",
        "Mitochondrion",
        "Chloroplast",
        "Lysosome",
      ],
      answer: 0,
      explanation:
        "Ribosomes are the cellular structures responsible for protein synthesis.",
    },
  
    {
      id: "bio-cell-004",
      question: "The plasma membrane is mainly composed of:",
      options: [
        "Carbohydrates only",
        "Proteins only",
        "Lipids and proteins",
        "DNA and proteins",
      ],
      answer: 2,
      explanation:
        "The plasma membrane is primarily a phospholipid bilayer containing proteins.",
    },
  
    {
      id: "bio-cell-005",
      question: "Which organelle contains digestive enzymes?",
      options: [
        "Lysosome",
        "Ribosome",
        "Nucleus",
        "Centrosome",
      ],
      answer: 0,
      explanation:
        "Lysosomes contain hydrolytic digestive enzymes used to break down cellular materials.",
    },

    {
      id: "bio-cell-006",
      question:
        "Nissl’s granule is a specialized structure in neuron formed by modification of:",
      options: [
        "Golgi bodies & Smooth ER",
        "Peroxisome & Mitochondria",
        "Lysosome & Vacuole",
        "Ribosome & Rough ER",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-007",
      question: "What is the function of a centromere?",
      options: [
        "To protect the ends of chromosomes",
        "To hold sister chromatids together",
        "To carry genetic information",
        "To initiate DNA replication",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-008",
      question:
        "All are the functions of lysosome EXCEPT:",
      options: [
        "Intracellular digestion",
        "Removal of the waste",
        "Autophagy",
        "Lipid synthesis",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-009",
      question:
        "A mature duplicated chromosome consists of:",
      options: [
        "Two identical double helical DNA molecules",
        "Two different double helical DNA molecules",
        "A double helical DNA molecule distributed in both chromatids",
        "Histone chains wrapped around DNA core",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-010",
      question:
        "Identify the most appropriate function of chromosomes.",
      options: [
        "Energy production and storage",
        "Protein synthesis and regulation",
        "Storage of genetic information",
        "Lipid metabolism and transport",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-011",
      question:
        "_____ arranges the DNA into the chromosomes in a eukaryotic cell.",
      options: [
        "Hormones",
        "Elastin",
        "Histone",
        "Nucleosome",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-012",
      question:
        "The function of nucleolus is to make:",
      options: [
        "rDNA",
        "Lysosomes",
        "Ribosomes",
        "Chromosomes",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-013",
      question:
        "An active athlete has more stamina for running compared to an officer of the same age with a physically inactive lifestyle. Which of the following organelles has greatly increased in the muscle cells of the athlete?",
      options: [
        "Nucleus",
        "Mitochondria",
        "Golgi bodies",
        "Smooth endoplasmic reticulum (SER)",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-014",
      question:
        "Which of the following is the correct higher (left) to lower (right) sequence of molecules with respect to their arrangement in the cell?",
      options: [
        "DNA → rRNA → tRNA → mRNA",
        "rRNA → tRNA → mRNA → DNA",
        "mRNA → tRNA → rRNA → DNA",
        "DNA → mRNA → tRNA → rRNA",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-015",
      question:
        "Which of the following statements best compares cell division in prokaryotic and eukaryotic cells?",
      options: [
        "Eukaryotes divide by budding; prokaryotes by mitosis",
        "Eukaryotes use binary fission; prokaryotes by meiosis",
        "Eukaryotes divide by mitosis; prokaryotes by binary fission",
        "Both use mitosis for cell division",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-016",
      question:
        "The main role of mRNA during protein synthesis is to:",
      options: [
        "Carry genetic information for protein synthesis",
        "Stabilize ribosome",
        "Deliver amino acids",
        "Provide platform for protein synthesis",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-017",
      question:
        "A student observed a boundary in both plant and animal cells that controls entry and exit of substances. Which of the following structures is likely being observed?",
      options: [
        "Mitochondria",
        "Golgi apparatus",
        "Plasma membrane",
        "Cell wall",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-018",
      question:
        "All of the following are the functions of Golgi bodies EXCEPT:",
      options: [
        "Processing of protein",
        "Plasma membrane formation",
        "Cellular respiration",
        "Lysosome formation",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-019",
      question:
        "Which organelle of the cell is involved in the detoxification of toxins and poisonous compounds?",
      options: [
        "Lysosomes",
        "Smooth Endoplasmic Reticulum",
        "Ribosomes",
        "Mitochondria",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-020",
      question:
        "Which structure enables the exchange of material between nucleus and cytoplasm?",
      options: [
        "Plasma membrane",
        "Nuclear pores",
        "Lysosomes",
        "Mitochondria",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-021",
      question:
        "The contracted region of a chromosome that attaches to spindle fiber is called:",
      options: [
        "Telomere",
        "Chromatin",
        "Centromere",
        "Nucleosomes",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-022",
      question:
        "The number of chromosomes in a haploid cell are:",
      options: [
        "Half the chromosomes in a normal body cell",
        "Double the chromosomes in a normal body cell",
        "Quarter the chromosomes in a normal body cell",
        "Equal to the chromosomes in a normal body cell",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-023",
      question:
        "Which process uses mRNA to make protein at ribosomes?",
      options: [
        "Replication",
        "Transcription",
        "Translation",
        "Cell fractionation",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-024",
      question:
        "The Golgi apparatus is structurally made of a series of flattened membrane-bound sacs:",
      options: [
        "Grana",
        "Cristae",
        "Cisternae",
        "Vesicles",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-025",
      question:
        "What is the chemical composition of chromosomes?",
      options: [
        "RNA and lipids",
        "DNA and proteins",
        "Carbohydrates and nucleic acids",
        "Proteins and carbohydrates",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-026",
      question:
        "Under a microscope plant cells appeared rigid in shape, unlike flexible animal cells. Which structure explains this difference?",
      options: [
        "Cell wall",
        "Vacuole",
        "Cytoskeleton",
        "Plasma membrane",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-027",
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
      id: "bio-cell-028",
      question:
        "If a polypeptide of 20 amino acids is made up of all different amino acids, at least how many types of tRNA must take part in its synthesis?",
      options: [
        "20",
        "45",
        "61",
        "64",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-029",
      question:
        "A cell shows green structures and a large fluid-filled area under the microscope. What does this indicate?",
      options: [
        "Plant cell with chloroplasts and vacuole",
        "Fungal cell without chloroplasts",
        "Algal cells with chloroplasts but lacking large vacuole",
        "Animal cell with small vacuoles",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-030",
      question:
        "Which option best reflects species-specific chromosome number?",
      options: [
        "Same in all animals",
        "Varies by tissue type",
        "Fixed for each species",
        "More in larger organisms",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-031",
      question:
        "During vesicle formation, endoplasmic reticulum membrane:",
      options: [
        "Dissolves into the cytosol",
        "Breaks down into its chemical components",
        "Expands and contributes to vesicle formation",
        "Moves directly into Golgi apparatus",
      ],
      answer: 2,
    },
  
    {
      id: "bio-cell-032",
      question:
        "In humans, how many kinds of tRNA are present for the synthesis of proteins?",
      options: [
        "40",
        "45",
        "43",
        "50",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-033",
      question:
        "Cholesterol and phospholipids are mainly synthesized in liver cells by:",
      options: [
        "Golgi complex",
        "Mitochondria",
        "Rough endoplasmic reticulum (RER)",
        "Smooth endoplasmic reticulum (SER)",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-034",
      question:
        "Thread-like single strand of a chromosome that is made of DNA and protein is known as:",
      options: [
        "Chromosome arm",
        "Nucleosome",
        "Chromosome",
        "Chromatid",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-035",
      question:
        "Which organelle gives rise to primary lysosomes through budding in eukaryotic cells?",
      options: [
        "Smooth endoplasmic reticulum (SER)",
        "Rough endoplasmic reticulum (RER)",
        "Plasma membrane",
        "Golgi cisternae",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-036",
      question:
        "Which of the following best describes the relationship between endoplasmic reticulum (ER) and Golgi apparatus?",
      options: [
        "Both ER and Golgi apparatus are completely separate organelles with no interaction",
        "ER is precursor organelle to Golgi apparatus because materials are transported from ER to Golgi",
        "Golgi apparatus is precursor organelle to ER because material is transported from Golgi to ER",
        "ER and Golgi apparatus have similar roles",
      ],
      answer: 1,
    },
  
    {
      id: "bio-cell-037",
      question:
        "Which organelle serves as a packaging and distribution center for molecules within the cells?",
      options: [
        "Golgi apparatus",
        "Mitochondria",
        "Ribosome",
        "Vacuole",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-038",
      question:
        "Which of the following statements correctly describes the organelle that is not membrane bound?",
      options: [
        "Presence of cristae",
        "Modification and packaging of proteins",
        "Presence of digestive enzymes",
        "Made of rRNA and protein",
      ],
      answer: 3,
    },
  
    {
      id: "bio-cell-039",
      question:
        "Which organelle is usually referred to as the post office of the cell and why?",
      options: [
        "Golgi apparatus, because it receives, sorts and packages material for transport to other parts of the cell",
        "Rough endoplasmic reticulum because it synthesizes protein used by the cell",
        "Mitochondria, because it synthesizes and provides energy to other parts of the cells",
        "Nucleus, because it controls other organelles of the cell",
      ],
      answer: 0,
    },
  
    {
      id: "bio-cell-040",
      question:
        "This given organelle is involved in the synthesis of oil, phospholipids and steroids:",
      options: [
        "Mitochondria",
        "Golgi complex",
        "Endoplasmic reticulum",
        "Ribosomes",
      ],
      answer: 2,
    },

    {
      id: "bio-cell-041",
      question:
        "Chloroplast are membrane bound bodies containing:",
      options: [
        "Enzymes",
        "Cisternae",
        "Pigment",
        "Cristae",
      ],
      answer: 2,
    },

    {
      id: "bio-cell-042",
      question:
        "Which of the following is the function of Golgi Complex?",
      options: [
        "Intracellular digestion",
        "Autophagy",
        "Autolysis",
        "Processing of cell secretions",
      ],
      answer: 3,
    },

    {
      id: "bio-cell-043",
      question:
        "The nucleus takes dyes due to the presence of:",
      options: [
        "Chromatin",
        "Lipid",
        "Metal ions",
        "Thylakoids",
      ],
      answer: 0,
    },

    {
      id: "bio-cell-044",
      question:
        "The organelles only found at seeding stage in oil seed plants are:",
      options: [
        "Peroxisomes",
        "Glyoxisomes",
        "Microbodies",
        "Vacuoles",
      ],
      answer: 1,
    },

    {
      id: "bio-cell-045",
      question:
        "Which one of the following organelles is ONLY present in Cyanobacteria?",
      options: [
        "Heterocyst",
        "Lysosomes",
        "Mitochondria",
        "Ribosomes",
      ],
      answer: 0,
    },

    {
      id: "bio-cell-046",
      question:
        "Who purified filterable agents for the first time?",
      options: [
        "Charles Chamberland",
        "Ivanowski",
        "Louis Pasteur",
        "Stanley",
      ],
      answer: 1,
    },

    {
      id: "bio-cell-047",
      question:
        "Groups of ribosomes associated with rough endoplasmic reticulum and Golgi apparatus present in the cell body of neurons, is termed as ____.",
      options: [
        "Axoplasm",
        "Nissl’s granules",
        "Node",
        "Polysomes",
      ],
      answer: 1,
    },

    {
      id: "bio-cell-048",
      question:
        "In eukaryotic cells, autophagosomes are being originate from ____.",
      options: [
        "Endoplasmic reticulum",
        "Golgi bodies",
        "Mitochondria",
        "Ribosomes",
      ],
      answer: 0,
    },

    {
      id: "bio-cell-049",
      question:
        "Which one of the following malfunctioned organelles is mainly related to Tay-Sachs disease?",
      options: [
        "Endoplasmic reticulum",
        "Glyoxysomes",
        "Golgi bodies",
        "Lysosomes",
      ],
      answer: 3,
    },

    {
      id: "bio-cell-050",
      question:
        "What is the correct order of organelles in ultracentrifugation?",
      options: [
        "Ribosome → Nuclei → Mitochondria",
        "Lysosome → Ribosome → Mitochondria",
        "Nuclei → Mitochondria → Ribosome",
        "Mitochondria → Nuclei → Golgi bodies",
        "Golgi bodies → Ribosome → Nuclei",
      ],
      answer: 2,
    },

    {
      id: "bio-cell-051",
      question:
        "Name the protein complex which stabilizes the separated strand of DNA during replication:",
      options: [
        "Double-stranded binding proteins",
        "Double-stranded binding enzymes",
        "Single-stranded binding proteins",
        "Single-stranded binding enzyme",
        "Non-stranded binding proteins",
      ],
      answer: 2,
    },

    {
      id: "bio-cell-052",
      question:
        "Isolation of cellular components to determine their structure and chemical composition is:",
      options: [
        "Cell fractionation",
        "Chromatography",
        "Microscopy",
        "Spectrometry",
        "Electrophoresis",
      ],
      answer: 0,
    },

    {
      id: "bio-cell-053",
      question:
        "Which cells are responsible for the formation of cartilage?",
      options: [
        "Neurosecretory cells",
        "Lymphocytes",
        "Osteocytes",
        "Leukocytes",
        "Chondrocytes",
      ],
      answer: 4,
    },
  ];