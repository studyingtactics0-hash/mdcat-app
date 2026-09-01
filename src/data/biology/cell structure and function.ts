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
    // --- TESTMOZ ---
      {
        id: "testmoz-bio-1",
        question: "Cell membrane is chemically composed of",
        options: [
          "Lipids and carbohydrates",
          "Lipids and proteins",
          "Proteins and carbohydrates",
          "Lipid, proteins and carbohydrates"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-2",
        question: "Which of the following is present in eukaryotic cells?",
        options: [
          "Cell wall",
          "Diploid nucleus",
          "Falgellum",
          "Membrane bounded organells"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-3",
        question: "Which of the following is concerned with cell secretions",
        options: [
          "Golgi complex",
          "Mitochondria",
          "Ribosomes",
          "Peroxisomes"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-4",
        question: "Smooth Endoplasmic reticulum helps to",
        options: [
          "Synthesis",
          "Prepare food",
          "Detoxify the harmful drugs",
          "Decompose proteins"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-5",
        question: "DNA is present in",
        options: [
          "Chromosomes and dictyosomes",
          "Mitochondria and chloroplast",
          "Chloroplast and lysosomes",
          "Mitochondria and Endoplasmic reticulum"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-6",
        question: "The outer membrane of the nuclear envelope is at places continous with the:",
        options: [
          "Golgi body",
          "Endoplasmic reticulum",
          "Lysosomes",
          "Peroxisomes"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-7",
        question: "What is sequence of organells that a secreted protein would have passed through on its journey out of the cell, m",
        options: [
          "Mitochondria, golgi complex, cell membrane",
          "Cell membrane, mitochondria, golgi complex",
          "Rough Endoplasmic reticulum, Golgi complex, cell membrane",
          "Golgi complex rough Endoplasmic reticulum, cell membrane"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-8",
        question: "The ribosome are attached to mRNA through ....... ribosomal subunit",
        options: [
          "Large",
          "Small",
          "Both a and b",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-9",
        question: "Unit specify sedimentation rate of a specific proteins or molecules In a medium during ultracentrifugation is",
        options: [
          "Micrometer",
          "Kcal/mol",
          "Svedberg",
          "Joule"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-10",
        question: "Kitchen of the cell",
        options: [
          "Mitochondria",
          "Chloroplast",
          "Lysosomes",
          "Golgi bodies"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-11",
        question: "Which of the following is the function of SER?",
        options: [
          "Detoxification of drugs",
          "Synthesis of steroids",
          "Storage of calcium",
          "All of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-12",
        question: "Mitochondria is also called",
        options: [
          "Chondrosomes",
          "Dictyosomes",
          "Plasmalemma",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-13",
        question: "Important site for formation of glycoprotein and glycolipids is",
        options: [
          "Plastids",
          "Vaccoules",
          "Lysosomes",
          "Golgi complex"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-14",
        question: "The inner membrane of mitochondria form extensive infoldings called",
        options: [
          "Centrioles",
          "Cristae",
          "Cisternae",
          "Lamella"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-15",
        question: "The complex of Sugar polymers and proteins which are patchilly distributed on the plasma membrane of animal cell is called",
        options: [
          "Cellulose",
          "Glycocalyx",
          "Chitin",
          "Cytoskeleton"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-16",
        question: "The elasticity of the plasma membrane demonstrates that it is madeup of",
        options: [
          "Lipids",
          "Nucleic acids",
          "Carbohydrates",
          "Proteins"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-17",
        question: "Protoplasm of plant cell is",
        options: [
          "Less viscous than animal cell",
          "Equal in viscosity to the animal cells",
          "More viscous than animal",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-18",
        question: "Which of the following in plasma membrane don't have transport function?",
        options: [
          "Channel protein",
          "Receptor molecule",
          "Carrier protein",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-19",
        question: "Prokaryotic cell wall is madeup of",
        options: [
          "Cellulose",
          "Chitin",
          "Muerin",
          "Lignin and pectin"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-20",
        question: "The ...... model of plasma membrane suggests that protein are embedded in lipid bilayer",
        options: [
          "Unit membrane",
          "Ultracentrifuge",
          "Permeable",
          "Fluid mosaic model"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-21",
        question: "Which of the following is responsible for mechanical support protein synthesis and enzyme transport",
        options: [
          "Cell membrane",
          "Dictyosomes",
          "Chondriosomes",
          "ER"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-22",
        question: "Which of the following structure in an organelle within an organelle?",
        options: [
          "Peroxisomes",
          "Mesosomes",
          "ER",
          "Ribosomes"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-23",
        question: "Main servant of the cell",
        options: [
          "Mitochondria",
          "Chloroplast",
          "DNA",
          "mRNA"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-24",
        question: "Which of the following is energy consuming process",
        options: [
          "Endocytosis",
          "Exocytosis",
          "Active transport",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-25",
        question: "Nucleus is only visible when the cells is in ...... stages",
        options: [
          "Non dividing",
          "Dividing",
          "Active",
          "Both a and b"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-26",
        question: "RNA is present in",
        options: [
          "Plasmalemma",
          "Ribosomes",
          "Chromosome",
          "Cytoplasm"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-27",
        question: "Which of the following best describes the fluid mosaic model of the plasma membrane ?",
        options: [
          "A single layer of protein surrounding a single layer of lipid",
          "A lipid bilayer with protein molecules dispersed within it",
          "A single layer of lipid surrounding a layer of protein",
          "A single layer of proteins with lipid molecules dispersed within"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-28",
        question: "The cell wall of plant cell is different from that of prokaryotes in",
        options: [
          "Both structure and chemical composition",
          "Structure only",
          "Chemical composition only",
          "Number of layers only"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-29",
        question: "Among the following which cellular organelle contains circular DNA similar to those found in bacteria?",
        options: [
          "Lysosomes",
          "Chloroplast",
          "Nucleus",
          "Ribosome"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-30",
        question: "The attachment of ribosomal subunits is controlled by ...... ions?",
        options: [
          "Mg ions",
          "Ca ions",
          "Na ions",
          "K ions"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-31",
        question: "A tadpole tail is gradually broken down during metamorphosis in to an adult frog. Which organelle increase in number in the cells of the tail at this time",
        options: [
          "Centrioles",
          "Endoplasmic reticulum",
          "Golgi complex",
          "Lysosomes"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-32",
        question: "A major site of lipid synthesis",
        options: [
          "RER",
          "SER",
          "Both",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-33",
        question: "Oxidative metabolism is carried out ...... of mitochondria",
        options: [
          "In the side of the outer membrane",
          "On the surface on the inner membrane",
          "In the inter membrane space",
          "In the matrix"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-34",
        question: "Which of the following always contain DNA",
        options: [
          "Centrioles",
          "Golgi body",
          "Endoplasmic reticulum",
          "Nucleus"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-35",
        question: "Movement of material against concentration gradient through plasma membrane is known as",
        options: [
          "Osmosis",
          "Passive transport",
          "Active transport",
          "Diffusion"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-36",
        question: "Amount of lipid in plasma membrane is about",
        options: [
          "20-40%",
          "20-60%",
          "40-69%",
          "40-80%"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-37",
        question: "Plasmodesmata are",
        options: [
          "Membrane connecting the nucleus with plasmalemma",
          "Connection between adjacent cells",
          "Lignified cemented layers between cells",
          "Locomotory structure"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-38",
        question: "Which of the following is present in prokaryotic cells",
        options: [
          "Chloroplast, DNA, nuclear envelope",
          "Chromosomes, mitochondria, nuclear envelope",
          "Cytoplasm, DNA, mitochondria",
          "Cytoplasm, DNA, ribosome"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-39",
        question: "The inner mitochondrial membrane is compartmentalized into numerous Cristae which",
        options: [
          "Expand the surface area of the inner mitochondrial membrane",
          "Enhance its ability to produce ATP",
          "Have F1 particles attached",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-40",
        question: "Power house of cell",
        options: [
          "Mitochondria",
          "Chloroplast",
          "Glyoxisomes",
          "Cytoplasm"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-41",
        question: "The cisternae breaks up into vesicles from ...... of golgi complex",
        options: [
          "Convex maturing face",
          "Concave forming face",
          "Convex forming face",
          "Concave maturing face"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-42",
        question: "Each cell of frog contains autosomes",
        options: [
          "18",
          "26",
          "24",
          "48"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-43",
        question: "Membranous units forming a series of continuous and discontinuous cavities in cell are called",
        options: [
          "Plasmodesmata",
          "Chromatin network",
          "Plasmalemma",
          "Endoplasmic reticulum"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-44",
        question: "Which one of the following is responsible for cyclosis?",
        options: [
          "Microtubule",
          "Microfilament",
          "Intermediate filament",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-45",
        question: "The soluble part of cytoplasm or liquid that remains when all organells are removed is known as",
        options: [
          "Cytosol",
          "Gelatin material",
          "Solution",
          "Cytoskeleton"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-46",
        question: "How many triplets of microtubules ads present in centrioles",
        options: [
          "Ten",
          "Nine",
          "Eight",
          "Seven"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-47",
        question: "Filaments present in flagella and Cillia are",
        options: [
          "Microfibrils",
          "Microtubule",
          "Microfilament",
          "Microvilli"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-48",
        question: "Ribosomal RNA is actively synthesized in",
        options: [
          "Nucleoplasm",
          "Lysosomes",
          "Ribosomes",
          "Nucleolus"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-49",
        question: "Ctyoskeleton is madeup of",
        options: [
          "Cellulosic microfibrils",
          "Calcium carbonate granules",
          "Protaneious filaments",
          "Callose deposits"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-50",
        question: "Centrioles are madeup of ...... microtubules",
        options: [
          "9",
          "12",
          "3",
          "27"
        ],
        answer: 3
      }
  ];