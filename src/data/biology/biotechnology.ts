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
      id: "nums-2026-bio-003",
      question: "Edward Jenner used material removed from the lesion on the hand of milkmaid and vaccinated a boy suffering from which of the following disease?",
      options: ["Small pox", "Chicken pox", "Cow pox", "Measles"],
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
    {
      id: "uhs-26-bio-033",
      question: "This enzyme is used to synthesize cDNA from RNA:",
      options: [
        "Restriction Endonuclease",
        "Reverse Transcriptase",
        "Ligase",
        "Helicase",
      ],
      answer: 1,
    },
    {
      id: "szambu-2026-bio-019",
      question: "When monoclonal antibodies are combined with fluorescent labels, this technique is known as:",
      options: [
        "Fluorescence microscopy",
        "Fluorescence crystallography",
        "Fluorescence therapy",
        "Fluorescence biography"
      ],
      answer: 0,
      explanation: "Conjugating monoclonal antibodies with fluorescent dyes (immunofluorescence) allows specific cellular antigens or pathogens to be visualized using fluorescence microscopy."
    },
    {
      id: "szambu-2026-bio-020",
      question: "The enzyme which joins two pieces of DNA is:",
      options: [
        "DNA Polymerase I",
        "DNA Polymerase III",
        "DNA Ligase",
        "Restriction Endonuclease"
      ],
      answer: 2,
      explanation: "DNA ligase catalyzes the formation of phosphodiester bonds between the 3'-hydroxyl and 5'-phosphate ends of adjacent DNA fragments, sealing nicks and joining recombinant DNA pieces."
    },
    {
      id: "szambu-2026-bio-021",
      question: "DNA probes are best described as:",
      options: [
        "Enzymes that cut DNA",
        "Short, single-stranded DNA sequences complementary to target DNA",
        "Double-stranded RNA molecules",
        "Antibodies that bind proteins"
      ],
      answer: 1,
      explanation: "A DNA probe is a short, single-stranded oligonucleotide labeled with a radioactive isotope or fluorescent tag that hybridizes specifically to a complementary target nucleotide sequence."
    },
    {
      id: "kmu-2026-bio-078",
      question: "DNA probes enable faster identification of disease causing bacteria than conventional methods because of advances in:",
      options: [
        "Non-biological methods",
        "Biotechnology",
        "Antibiotics",
        "Surgery"
      ],
      answer: 1,
      explanation: "DNA probes are short, single-stranded, labeled nucleic acid sequences developed through molecular biotechnology that hybridize specifically with complementary DNA sequences of pathogenic bacteria, enabling rapid and accurate diagnosis without waiting for slow bacterial cultures."
    },
    {
      id: "kmu-2026-bio-079",
      question: "The most common vector used to deliver a therapeutic gene into target cells is:",
      options: [
        "Plasmid",
        "Liposome",
        "Genetically altered virus",
        "Restriction enzyme"
      ],
      answer: 2,
      explanation: "In human gene therapy, genetically altered (modified, non-pathogenic) viruses such as retroviruses, adenoviruses, and adeno-associated viruses are the most commonly used vectors because they naturally infect host cells efficiently to deliver the therapeutic gene."
    },
    {
      id: "kmu-2026-bio-080",
      question: "Monoclonal antibodies are:",
      options: [
        "A mixture of different antibodies",
        "A group of identical antibodies produced by identical immune cells",
        "Antibodies produced only by T-lymphocytes",
        "Radioactively labelled antibodies"
      ],
      answer: 1,
      explanation: "Monoclonal antibodies are homogeneous, identical immunoglobulin molecules produced by a single clone of identical hybridoma cells (formed by fusing a specific B-lymphocyte with a myeloma cell), all targeting the exact same epitope on an antigen."
    },
    {
      id: "kmu-2026-bio-081",
      question: "Which of the following correctly matches the biotechnology product with its application?",
      options: [
        "Biochips: Supply biologically fixed nitrogen to crops",
        "Mycorrhiza: Deliver drugs to target cells using nanoparticles",
        "Nanoparticles: Efficient drug delivery at target cells and diagnosis of disease",
        "Biofertilizers: Detect bioterrorism agents using miniaturized laboratories"
      ],
      answer: 2,
      explanation: "Nanoparticles are engineered nanoscale carriers used in nanomedicine for targeted drug delivery directly to diseased cells (such as tumors) and sensitive diagnostic imaging/detection. In contrast, biofertilizers/mycorrhiza aid plant nutrient uptake and nitrogen fixation, while biochips are used for genetic screening and pathogen detection."
    },
    {
      id: "bumhs-bio-2026-040",
      question: "___________ is used to infect the stem cells with normal genes in gene therapy.",
      options: [
        "Agrobacterium",
        "Retroviruses",
        "Bacteriophages",
        "Bacterial plasmids"
      ],
      answer: 1,
      explanation: "Retroviruses are commonly used as viral vectors in ex vivo gene therapy (such as for SCID) to deliver and integrate functional normal genes into the DNA of patient bone marrow stem cells."
    },
    {
      id: "bumhs-bio-2026-068",
      question: "Interferons produced through biotechnology are primarily used to:",
      options: [
        "Kill bacteria directly",
        "Stimulate antiviral responses in cells",
        "Digest proteins",
        "Transport oxygen"
      ],
      answer: 1,
      explanation: "Interferons are antiviral cytokines produced via recombinant DNA technology that bind to cell surface receptors and stimulate neighboring host cells to synthesize antiviral proteins that inhibit viral replication."
    },
    {
      id: "bumhs-bio-2026-081",
      question: "The principle underlying the use of DNA / RNA probes in diagnosis is:",
      options: [
        "Translation",
        "Mutation",
        "Complimentary base pairing",
        "Protein folding"
      ],
      answer: 2,
      explanation: "Nucleic acid hybridization with labeled DNA or RNA probes relies on complementary base pairing (A-T/U and G-C) between the single-stranded probe and the target pathogen or mutant gene sequence."
    }
  ];