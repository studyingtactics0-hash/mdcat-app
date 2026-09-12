export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
    image?: string;
  };
  
  // ==========================================
  // BIOTECHNOLOGY QUESTIONS
  // ==========================================
  
  export const biotechnologyQuestions: Question[] = [
    {
      id: "22",
      question: "Which product is produced by genetically modified bacteria for patients with Diabetes mellitus?",
      options: ["Insulin", "Erythropoietin", "Growth hormone", "Vaccine"],
      answer: 0,
    },
    {
      id: "24",
      question: "Role of mRNA in COVID-19 vaccines like Pfizer and Moderna is to:",
      options: [
        "Helps the immune system recognize the virus",
        "Instructs cells to produce the viral spike protein",
        "Triggers immediate antibody release from memory cells",
        "Delivers enzymes that destroy the virus"
      ],
      answer: 1,
    },
    {
      id: "64",
      question: "Monoclonal antibodies are useful in cancer diagnosis by:",
      options: [
        "Replacing damaged tissue",
        "Changing the genetic code of cancer cells",
        "Killing healthy cells to reduce tumor spread",
        "Detecting specific tumor markers in samples"
      ],
      answer: 3,
    },
    {
      id: "75",
      question: "In biotechnology vaccines are developed by cloning of:",
      options: [
        "Gene for antigen of pathogen",
        "Gene for receptor of the patient",
        "Gene for antigen of patient",
        "Gene for antibody of patient"
      ],
      answer: 0,
    },
    {
      id: "15",
      question: "In molecular diagnostics, the primary function of DNA/RNA probes is to:",
      options: [
        "Replace malfunctioning genes in effected cells",
        "Bind to specific DNA or RNA sequences for identification",
        "Cut genetic material at precise locations",
        "Stimulate immune responses against disease-causing organisms"
      ],
      answer: 1,
    },
    {
      id: "17",
      question: "Which biotechnological product is used to replace an abnormal gene in a patient's cells?",
      options: ["Antibiotic", "Vaccine", "Vector", "Interferon"],
      answer: 2,
    },
    {
      id: "8",
      question: "Key benefit of using biotechnology in development of vaccine for malaria is:",
      options: [
        "its ability to develop endosymbiotic relationship with host",
        "its ability to work as antimalarial drugs",
        "its ability to directly kills the malaria parasite in mosquitoes",
        "to create a targeted immune response against the parasite"
      ],
      answer: 3,
    },
    {
      id: "13_1",
      question: "DNA/RNA probes are most commonly used as:",
      options: [
        "diagnostic tools of infectious diseases",
        "carrier in gene cloning experiments",
        "cementing material in somatic cell hybridization",
        "carrier or vector in gene therapy"
      ],
      answer: 0,
    },
    {
      id: "50",
      question: "CFTR gene that encode a protein which regulate:",
      options: ["Protein and salt", "Salt and Water", "Sugar and Water", "Liquid and Protein"],
      answer: 1,
    },
    {
      id: "61",
      question: "A patient with a genetic disorder undergoes treatment where a normal gene is inserted into their cells. This is called:",
      options: ["Gene therapy", "Genetic testing", "Protein engineering", "DNA fingerprinting"],
      answer: 0,
    },
    {
      id: "13_2",
      question: "Which one of the following group of chemicals are used to kill or inhibit the growth of microorganisms in living tissues?",
      options: ["Antiseptics", "Disinfectants", "Chemotherapeutics", "Antibiotics"],
      answer: 0,
    },
    {
      id: "16",
      question: "Which virus kills cancer cells and aids immunity?",
      options: ["Saccharomyces", "Lactobacillus", "Penicillium", "Lymphobacterium", "Oncolytic"],
      answer: 4,
    },
    {
      id: "22_2",
      question: "This technique is used to determine growth of bacteria, rate of photosynthesis, and minute quantity of DNA:",
      options: ["Electrophoresis", "Micrometry", "Microscopy", "Chromatography", "Spectrophotometry"],
      answer: 4,
    },
    {
      id: "29",
      question: "F.C Steward used this plant for his experiment i.e (tissue culture):",
      options: ["Radish", "Corn", "Maize", "Carrot", "Mango"],
      answer: 3,
    },
    {
      id: "48",
      question: "In gel electrophoresis, how do molecules migrate through the gel?",
      options: [
        "Under the influence of agar",
        "By diffusion",
        "Under the influence of an electric field",
        "By gravity",
        "By osmosis"
      ],
      answer: 2,
    },
    {
      id: "52",
      question: "Isolation of cellular components to determine their structure and chemical composition is:",
      options: [
        "Cell fractionation",
        "Chromatography",
        "Microscopy",
        "Spectrometry",
        "Electrophoresis"
      ],
      answer: 0,
    },
    {
      id: "31",
      question: "Antibiotics can be used against:",
      options: ["Herpes simplex", "Influenza", "Polio", "Salmonella typhi"],
      answer: 3,
    },
    {
      id: "64_2",
      question: "________ is used in the production of Humulin?",
      options: ["Bacteria", "Fungi", "Protozoa", "Virus"],
      answer: 0,
    },
    {
      id: "10",
      question: "A disadvantage of animal cloning is:",
      options: ["rapid growth", "rapid aging", "identical offspring", "absence of mitosis"],
      answer: 1,
    },
  ];