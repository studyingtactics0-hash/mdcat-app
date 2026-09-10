export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
    image?: string;
  };
  
  // ==========================================
  // BIOLOGY QUESTIONS
  // ==========================================
  
  export const biologyQuestions: Question[] = [
     {
        id: "37",
          question: "The conversion of lysogenic cycle to lytic cycle is called:",
          options: ["Conduction", "Production", "Induction", "None of these"],
          answer: 2,
        },
        {
            id: "36",
          question: "Viruses can be classified on the basis of:",
          options: ["Shape", "Nucleic acid", "Envelope", "All of these"],
          answer: 3,
        },
        {
            id: "35",
          question: "Symptoms of Hepatitis are:",
          options: [
            "Loss of immunity",
            "Loss of T helper cells",
            "Blood cancer",
            "None of the given options",
          ],
          answer: 3,
        },
        {
            id: "34",
          question: "Poliomyelitis mostly occurs in:",
          options: [
            "Childhood",
            "Adulthood",
            "In old age",
            "Difficult to say about",
          ],
          answer: 0,
        },
        {
            id: "33",
          question: "The less common cause of HIV mode of transmission is:",
          options: [
            "Blood transfusion",
            "Placenta of mother to baby",
            "Mosquito bite",
            "Lactation from HIV positive mother to baby",
          ],
          answer: 2,
        },
        {
            id: "32",
          question:
            "Which of the following methods is used to prevent HIV transmission during blood transfusion?",
          options: [
            "By freezing blood before transfusion",
            "By using blood from young donors only",
            "By boiling blood before transfusion",
            "By screening blood for HIV before its transfusion",
          ],
          answer: 3,
        },
        {
            id: "31",
          question:
            "Example of viruses having a polyhedral capsid with 252 capsomeres is:",
          options: [
            "Adenovirus",
            "Tobacco Mosaic Virus",
            "Influenza virus",
            "Bacteriophage",
          ],
          answer: 0,
        },
        {
            id: "30",
          question: "The complete, mature and infectious particle of a virus is known as:",
          options: ["Viroid", "Genome", "Capsomere", "Virion"],
          answer: 3,
        },
        {
            id: "29",
          question: "The causative organism of measles is:",
          options: [
            "Poxivirus",
            "Papovivirus",
            "Picornovirus",
            "Paramyxovirus",
          ],
          answer: 3,
        },
        {
            id: "28",
          question:
            "In the life cycle of a bacteriophage, lysozymes are required in which step of the infection process?",
          options: ["Genome injection", "Penetration", "Replication", "Adsorption"],
          answer: 1,
        },
        {
            id: "27",
          question:
            "_____ is transmitted through infected blood and hypodermic syringes.",
          options: [
            "HIV",
            "Influenza Virus",
            "Morbilli Virus (Measles)",
            "Vibrio Cholerae (Cholera)",
          ],
          answer: 0,
        },
        {
            id: "26",
          question:
            "The bacterium Treponema pallidum is responsible for which sexually transmitted disease?",
          options: ["Syphilis", "Chlamydia", "Gonorrhea", "Genital herpes"],
          answer: 0,
        },
        {
            id: "25",
          question:
            "Why are retroviruses placed in a separate class of RNA viruses?",
          options: [
            "They always infect animal cells only",
            "Their RNA acts directly as mRNA",
            "They lack protein coats",
            "They use reverse transcriptase to make DNA from RNA",
          ],
          answer: 3,
        },
        {
            id: "24",
          question:
            "When a person is exposed to HIV, becomes ill but survives, the immunity developed against the disease is called:",
          options: [
            "Artificial Active Immunity",
            "Artificial Passive Immunity",
            "Natural Active Immunity",
            "Natural Passive Immunity",
          ],
          answer: 2,
        },
        {
            id: "23",
          question: "Who purified filterable agents for the first time?",
          options: [
            "Charles Chamberland",
            "Ivanowski",
            "Louis Pasteur",
            "Stanley",
          ],
          answer: 1,
        },
        {
            id: "22",
          question:
            "The side of sheath attached to the head region in bacteriophage is termed as:",
          options: ["Capsid", "Collar", "Core", "End plate"],
          answer: 1,
        },
        {
            id: "21",
          question: "During which stage of bacteriophage replication is lysozyme involved?",
          options: ["Adsorption", "Attachment", "Multiplication", "Penetration"],
          answer: 3,
        },
        {
            id: "20",
          question: "The envelope in a virus is derived from:",
          options: [
            "Host cell ribosomes",
            "Host cell membrane",
            "Viral capsid proteins",
            "Viral genome replication",
          ],
          answer: 1,
        },
        {
            id: "19",
          question: "The shape of Adenovirus is:",
          options: [
            "Helical shape",
            "Tadpole shape",
            "Polyhedron shape",
            "Circular shape",
          ],
          answer: 2,
        },
        {
            id: "18",
          question: "HIV belongs to which class of virus with respect to genome type?",
          options: [
            "Single stranded DNA viruses",
            "Double stranded RNA viruses",
            "ssRNA; template for DNA synthesis",
            "ssRNA; template for mRNA synthesis",
          ],
          answer: 2,
        },
        {
            id: "17",
          question:
            "A modified virus that infects birds only belongs to which category?",
          options: [
            "Algal virus",
            "Fungal virus",
            "Animal virus",
            "Bacterial virus",
          ],
          answer: 2,
        },
        {
            id: "16",
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
            id: "15",
          question:
            "Which group of viruses can cause diseases like influenza, measles and rabies?",
          options: [
            "Plant viruses",
            "Animal viruses",
            "Fungal viruses",
            "Bacterial viruses",
          ],
          answer: 1,
        },
        {
            id: "14",
          question: "The best way to avoid AIDS is:",
          options: ["Preventive measures", "Vaccination", "Medication", "Shots"],
          answer: 0,
        },
        {
            id: "13",
          question: "Proteins which cause disease in humans and animals are called:",
          options: [
            "Prions",
            "Viroid",
            "Prophage",
            "Bacteriophage",
            "Antigens",
          ],
          answer: 0,
        },
        {
            id: "12",
          question: "Which virus kills cancer cells and aids immunity?",
          options: [
            "Saccharomyces",
            "Lactobacillus",
            "Penicillium",
            "Lymphobacterium",
            "Oncolytic",
          ],
          answer: 4,
        },
        {
            id: "11",
          question: "In Gram-negative bacteria, the peptidoglycan layer is:",
          options: [
            "Condensed",
            "Thick",
            "Moderate",
            "Thin",
            "Entangled",
          ],
          answer: 3,
        },
        {
            id: "10",
          question:
            "Which of the following is an example of a sub-viral particle that infects plants?",
          options: ["Prion", "Viroid", "Bacteriophage", "Infectious protein"],
          answer: 1,
        },
        {
            id: "9",
          question: "Bacteriophages escape from host cells by the activity of:",
          options: ["Non-Ribosome", "Lysozyme", "Peroxisome", "Lysosome"],
          answer: 1,
        },
        {
            id: "8",
          question: "Phage genome incorporated with host DNA is called:",
          options: ["Bacteriophage", "Viroids", "Prophage", "Prions"],
          answer: 2,
        },
        {
            id: "7",
          question: "Which of the following accurately describes Helicobacter pylori?",
          options: [
            "Flagellated rod-shaped bacterium",
            "Flagellated chain bacterium",
            "Flagellated spiral-shaped bacterium",
            "Non-flagellated spiral-shaped bacterium",
            "Non-flagellated rod-shaped bacterium",
          ],
          answer: 2,
        },
        {
            id: "6",
          question: "All of the following are modes of transmission of AIDS, EXCEPT:",
          options: [
            "Transfusion of infected blood",
            "Sharing infected needles",
            "Shaking hands with infected person",
            "Sexual contact with infected person",
          ],
          answer: 2,
        },
        {
            id: "5",
          question: "Which disease is caused by an enveloped virus?",
          options: [
            "Leaf curl disease of cotton",
            "Flu",
            "Polio",
            "Hepatitis A",
          ],
          answer: 1,
        },
        {
            id: "4",
          question:
            "On the basis of morphological classification, influenza virus is an example of:",
          options: [
            "Helical capsid virus",
            "Polyhedral capsid virus",
            "Enveloped capsid virus",
            "Non-enveloped capsid virus",
          ],
          answer: 2,
        },
        {
            id: "4",
          question:
            "The genetic material of which virus is enclosed by a lipid membrane?",
          options: [
            "Enterovirus",
            "Flu virus",
            "Hepatitis A virus",
            "Polio virus",
          ],
          answer: 1,
        },
        {
            id: "3",
          question: "Viruses CANNOT:",
          options: ["Crystallise", "Excrete", "Infect bacteria", "Mutate"],
          answer: 1,
        },
        {
            id: "2",
          question:
            "Where are the enzymes required for the replication of HIV virus located?",
          options: [
            "In the protein spikes",
            "Surrounding the viral core",
            "Inside the capsid",
            "Outside the capsid",
          ],
          answer: 2,
        },
        {
            id: "1",
          question: "Which of the following is NOT true about viruses?",
          options: [
            "Contain DNA",
            "Can replicate on their own",
            "Can infect bacteria",
            "They have a sub-cellular structure",
          ],
          answer: 1,
        },
        // --- TESTMOZ ---
          {
            id: "testmoz-bio-1",
            question: "AIDS is due to",
            options: [
              "Deficiency of T lymphocytes",
              "Bacterial infection",
              "Deficiency of riboflavin",
              "High blood pressure"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-2",
            question: "The complete, mature and infection virus particle is known as",
            options: [
              "Venome",
              "Genome",
              "Virion",
              "Capsid"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-3",
            question: "CD4 receptors are present on",
            options: [
              "T lymphocytes",
              "Helper T lymphocytes",
              "B lymphocytes",
              "HIV"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-4",
            question: "All are characteristics of polio virus except",
            options: [
              "Small",
              "Spherical",
              "A cellular",
              "DNA"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-5",
            question: "Virus is Latin word meaning",
            options: [
              "Sweet",
              "Sour",
              "Poison",
              "Toxic"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-6",
            question: "Chicken pox is caused by",
            options: [
              "Hepatitis A",
              "Varicella zoster virus",
              "Influenza virus",
              "HIV"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-7",
            question: "Interferon are produced in response to infection of",
            options: [
              "Fungi",
              "Tapeworm",
              "Viruses",
              "Bacteria"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-8",
            question: "Rabies is due to",
            options: [
              "Fungi",
              "Bacteria",
              "Protozans",
              "Virus"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-9",
            question: "Which event of life cycle of HIV occur in nucleus",
            options: [
              "Uncoating",
              "Reverse transcription",
              "Provirus",
              "Assembly"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-10",
            question: "The major cell infected by HIV is",
            options: [
              "B lymphocytes",
              "T lymphocytes",
              "Helper T lymphocytes",
              "Suppressor T lymphocytes"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-11",
            question: "Which of the following is not true about HIV",
            options: [
              "It's retrovirus",
              "It is surrounded by an envelope",
              "It doesn't cause AIDS",
              "It cause the deficiency of the human immune system"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-12",
            question: "Virus can survive and reproduce inside a",
            options: [
              "Animal cell",
              "Bacterial cell",
              "Living cell",
              "Non living cell"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-13",
            question: "Most RNA viruses carry a gene for an enzyme that uses viral RNA as a template in the synthesis of more viral RNA. This enzyme is",
            options: [
              "RNA primase",
              "Reverse transcriptase",
              "RNA polymerase",
              "Viral nuclease"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-14",
            question: "A viral reproductive cycle that culminates in death of host cell is known as",
            options: [
              "Lytic cycle",
              "Lysogenic cycle",
              "Krebs cycle",
              "Glycolysis"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-15",
            question: "AIDS will lead to",
            options: [
              "Liver cirrhosis",
              "Mental retardation",
              "Opportunistic infection",
              "Angina"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-16",
            question: "Binomial nomenclature was first time proposed by",
            options: [
              "Charles darwin",
              "Rudolph virchow",
              "Louis pasteur",
              "Carolus linnaeus"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-17",
            question: "Which of the following is true for viruses",
            options: [
              "Multiply only in host cells",
              "Behave as if they are plants",
              "Are madeup of proteins only",
              "Occur only inside bacteria"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-18",
            question: "Bacteriophage kills",
            options: [
              "Bacteria",
              "Virus",
              "Protozans",
              "Parasites"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-19",
            question: "Viral genome, incorporated and integrated with bacterial genome is referred to as",
            options: [
              "Prophages",
              "DNA",
              "RNA",
              "Both a and c"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-20",
            question: "Genome of virus is composed of",
            options: [
              "DNA",
              "RNA",
              "Both a and b",
              "Protein"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-21",
            question: "The Latin words of the name given to human being, Homo sapience include the",
            options: [
              "Genus and family",
              "Family and order",
              "Order and class",
              "Genus and species"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-22",
            question: "Virus free plant from virus infected plant can be obtained from",
            options: [
              "Meristem culture",
              "Tissue culture",
              "Phloem culture",
              "Stem cutting"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-23",
            question: "First crystallized virus is",
            options: [
              "TMV",
              "Bacteriophage virus",
              "Herpes",
              "HBV"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-24",
            question: "All enzymes are present in HIV except",
            options: [
              "Reverse transcriptase",
              "Integrase",
              "Protease",
              "Lysozyme"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-25",
            question: "The enzymes reverse transcriptase essentially found in all retroviruses is",
            options: [
              "DNA dependent RNA polymerase",
              "DNA dependent DNA polymerase",
              "RNA dependent RNA polymerase",
              "RNA dependent DNA polymerase"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-26",
            question: "Which of the following is the simplest form of pathogens causing disease",
            options: [
              "Viruses",
              "Prions",
              "Fungus",
              "Amoeba"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-27",
            question: "All of the following diseases are caused by virus Except",
            options: [
              "Poliomyelitis",
              "Common cold",
              "Yellow fever",
              "Diptheria"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-28",
            question: "In a newly discovered virus you might find",
            options: [
              "DNA",
              "RNA",
              "DNA OR RNA",
              "DNA and RNA"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-29",
            question: "Plant like character found in euglena",
            options: [
              "Pyrenoid",
              "Cillia",
              "Photoreceptor",
              "Flagellum"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-30",
            question: "Receptors for attachment if HIV are present on",
            options: [
              "Cell wall",
              "Cell membrane",
              "Tail fibers",
              "None"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-31",
            question: "A patient is suffering from a diseases he has following symptoms: Abdominal pain, Jaundice, Liver enlargement, Fatigue. He is probably suffering from",
            options: [
              "HIV",
              "Rabies",
              "Hepatitis",
              "Kaposi's sarcoma"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-32",
            question: "All are present in HIV except",
            options: [
              "Lipids",
              "DNA",
              "RNA",
              "Protein"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-33",
            question: "Small pox is a",
            options: [
              "DNA virus",
              "RNA virus",
              "DNA enveloped virus",
              "RNA enveloped virus"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-34",
            question: "Which of the following is present in all viruses",
            options: [
              "DNA",
              "Protein",
              "RNA",
              "Envelope"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-35",
            question: "The virus was discovered by",
            options: [
              "K.M smith",
              "Twart",
              "M.stanley",
              "Ivanowski"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-36",
            question: "Shape of TMV is",
            options: [
              "Spherical",
              "Rod",
              "Tadpole",
              "Pyramidal"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-37",
            question: "Which of the following is intracellular parasites",
            options: [
              "Bacteria",
              "Virus",
              "Slime molds",
              "Cyanobacteria"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-38",
            question: "The TMV first appeared on the knave sof tobacco plant and was characterized by",
            options: [
              "Wrinkling of leaves",
              "Yellow patches on lamina surface",
              "Falling of the leaves",
              "Transmission from one organism to another"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-39",
            question: "Virus resemble living things because they",
            options: [
              "Circulate",
              "Move",
              "Reproduce",
              "Are crystalline"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-40",
            question: "Agent responsible for mad cow infection is",
            options: [
              "Virus",
              "Virions",
              "Bacteria",
              "Prions"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-41",
            question: "A bacteriophage consist solely of",
            options: [
              "DNA",
              "RNA",
              "BOTH"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-42",
            question: "In AIDS \"D\" stands for",
            options: [
              "Different",
              "Difficult",
              "Deficiency",
              "None"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-43",
            question: "Which of the following statement is correct?",
            options: [
              "RNA Is genetic material of bacteria",
              "RNA is genetic material of all virus",
              "DNA is genetic material of some organism",
              "Some virus has RNA as genetic material"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-44",
            question: "Rabies is caused by",
            options: [
              "Paramyxovirus",
              "Rhinovirus",
              "Arbovirus",
              "Rhabdovirus"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-45",
            question: "Which of the following is not the viral disease",
            options: [
              "Aids",
              "Malaria",
              "Influenza",
              "Chicken pox",
              "Rabies"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-46",
            question: "Which of the following is not a mode of transmission of aids",
            options: [
              "Through unsterlized needles",
              "Through contact with open wounds",
              "Through blood transfusion",
              "Through holding hands"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-47",
            question: "The branch of science dealing with the classification of life forms is called",
            options: [
              "Genetics",
              "Taxonomy",
              "Archeology",
              "Biochemistry"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-48",
            question: "The branch which deals with the study of virus is called",
            options: [
              "Biology",
              "Virology",
              "Cytology",
              "Taxanomy"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-49",
            question: "Which of the following diseases is not caused by virus",
            options: [
              "Cholera",
              "Influenza",
              "Hepatitis",
              "Polio"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-50",
            question: "The protein coat of virus is known as",
            options: [
              "Plasmid",
              "capsid",
              "capsule",
              "none"
            ],
            answer: 1
          },
        {
            id: "bioenergetics-001",
            question:
              "When fat molecule is hydrolyzed for energy, the end products will be:",
            options: [
              "Amino acids and glycerol",
              "Glycerol and fatty acids",
              "Fatty acids and amino acids",
              "Glycerol and nitrogenous bases",
            ],
            answer: 1,
          },
        
          {
            id: "bioenergetics-002",
            question:
              "The most primitive respiratory process occurring in a living cell is:",
            options: [
              "Lactic acid fermentation",
              "Alcoholic fermentation",
              "Glycolysis",
              "Krebs’s cycle",
            ],
            answer: 2,
          },
        
          {
            id: "bioenergetics-003",
            question:
              "How many ATPs are produced during oxidative phase of glycolysis?",
            options: [
              "2",
              "4",
              "34",
              "36",
            ],
            answer: 1,
          },
        
          {
            id: "bioenergetics-004",
            question:
              "In the following process, the cells release energy from oxidation of food molecules:",
            options: [
              "Cellular respiration",
              "Photosynthesis",
              "DNA replication",
              "Protein synthesis",
            ],
            answer: 0,
          },
        
          {
            id: "bioenergetics-005",
            question:
              "How many NADH are produced when one Acetyl CoA is oxidized during Krebs's cycle?",
            options: [
              "1",
              "2",
              "3",
              "6",
            ],
            answer: 2,
          },
        
          {
            id: "bioenergetics-006",
            question:
              "Fats are considered as a very efficient source of energy because they:",
            options: [
              "Produce ATP directly and without requiring respiration",
              "Enter into glycolysis without any modification",
              "Are highly oxidized compounds",
              "Generate multiple acetyl groups that produce more ATP",
            ],
            answer: 3,
          },
        
          {
            id: "bioenergetics-007",
            question:
              "Living cells DO NOT directly acquire energy released from the breakdown of food molecules because:",
            options: [
              "Glucose cannot be broken down inside the cells",
              "Energy released is too small to be used by the cells",
              "Glucose molecules do not store any energy",
              "The energy released is too large, leading to heating and wastage",
            ],
            answer: 3,
          },
        
          {
            id: "bioenergetics-008",
            question: "The production of energy is _____.",
            options: [
              "Faster in anaerobic respiration",
              "Faster in aerobic respiration",
              "Same in both types of respiration",
              "Not associated with respiration",
            ],
            answer: 0,
          },
        
          {
            id: "bioenergetics-009",
            question:
              "The pathway to the breakdown of glucose, carried out by micro-organisms, is called:",
            options: [
              "Lactic acid fermentation",
              "Alcoholic fermentation",
              "Cellular respiration",
              "None of the above",
            ],
            answer: 2,
          },
        
          {
            id: "bioenergetics-010",
            question: "Enzyme NADP reductase is responsible for:",
            options: [
              "Reducing NADP⁺",
              "Oxidizing NADP⁺",
              "Reducing Ferredoxin",
              "Reducing P700",
            ],
            answer: 0,
          },
        
          {
            id: "bioenergetics-011",
            question:
              "Which one of the following is the end product in electron transport chain taking place at inner mitochondrial membrane?",
            options: [
              "Carbon dioxide",
              "NADPH",
              "Oxygen",
              "Water",
            ],
            answer: 3,
          },
        
          {
            id: "bioenergetics-012",
            question:
              "Which one of the following types of phosphorylation occurs in electron transport chain, when NADH transfers electrons to coenzyme Q in inner mitochondrial membrane?",
            options: [
              "Cyclic Phosphorylation",
              "Non-cyclic Phosphorylation",
              "Oxidative Phosphorylation",
              "Substrate-level Phosphorylation",
            ],
            answer: 2,
          },
        
          {
            id: "bioenergetics-013",
            question:
              "At which of the following reactions of glycolysis, ATP is NOT involved directly?",
            options: [
              "When 1,3-Bisphosphoglycerate is converted into 3-phosphoglycerate",
              "When Fructose 6-phosphate is converted into Fructose 1,6-bisphosphate",
              "When glucose is converted into glucose 6-phosphate",
              "When glyceraldehyde 3-phosphate is converted into 1,3-Bisphosphoglycerate",
            ],
            answer: 3,
          },
        
          {
            id: "bioenergetics-014",
            question:
              "How much energy is present in the chemical bond of glucose that is converted into ATP by anaerobic respiration?",
            options: [
              "2%",
              "4%",
              "10%",
              "36%",
            ],
            answer: 0,
          },
        
          {
            id: "bioenergetics-015",
            question:
              "Which one of the following is the first electron acceptor from FADH₂ during electron transport chain?",
            options: [
              "Coenzyme Q",
              "Cytochrome a",
              "Cytochrome b",
              "Cytochrome c",
            ],
            answer: 0,
          },
          // --- TESTMOZ ---
            {
              id: "testmoz-bio-2",
              question: "In glycolysis during oxidation electrons are removed by",
              options: [
                "Molecular oxygen",
                "ATP",
                "Glyceraldehyde 3 phosphate",
                "NAD+"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-3",
              question: "Where are the enzymes located which are involved in the chemical reactions which occur during glycolysis?",
              options: [
                "In the fluid matrix of cytoplasm",
                "In the mitochondrial matrix",
                "In the nuclear sap",
                "On the cristae of mitochondria"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-4",
              question: "Which one of the following molecules of respiratory chain is found at the lowest energy level?",
              options: [
                "Cytochrome a",
                "Cytochrome b",
                "Cytochrome a3",
                "Coenzyme Q"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-6",
              question: "In aerobic respiration most of the ATP is synthesized during",
              options: [
                "Oxidation of pyruvic acid",
                "Electron transport chain",
                "Krebs cycle",
                "Glycolysis"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-7",
              question: "When yeast is producing wine, which of the following is NOT formed?",
              options: [
                "Ethyl alcohol",
                "Carbon dioxide",
                "Acetyl coenzyme A",
                "Pyruvic acid"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-9",
              question: "One molecule of FADH₂ is produced in Krebs cycle during conversion of",
              options: [
                "Fumarate to malate",
                "Succinate to malate",
                "Malate to oxaloacetate",
                "Alpha-ketoglutarate to succinate"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-11",
              question: "How many molecules of oxygen are used during the glycolysis of one glucose molecule?",
              options: [
                "1",
                "16",
                "32",
                "0"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-12",
              question: "Coenzyme NAD+ is",
              options: [
                "Mononucleotide",
                "Dinucleotide",
                "Trinucleotide",
                "None"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-13",
              question: "Oxidative phosphorylation synthesis of ATP in presence of oxygen occurs in",
              options: [
                "All types of cells",
                "All anaerobic cells",
                "All primitive cells",
                "All aerobic cells"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-16",
              question: "When oxygen is not available to a muscle cell, NADH formed during glycolysis does not pass electrons to the electron transport system; instead, it passes hydrogen atoms to",
              options: [
                "Acetyl coenzyme A",
                "Fructose",
                "ADP",
                "Pyruvic acid"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-17",
              question: "What is the importance of respiration in plants?",
              options: [
                "It provides oxygen to plants",
                "It liberates energy",
                "It liberates carbon dioxide",
                "All of the above mentioned"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-19",
              question: "In the Krebs cycle, the FAD electron transport system operates during the conversion of",
              options: [
                "Succinyl CoA to succinic acid",
                "Alpha-ketoglutarate to succinyl CoA",
                "Succinic acid to fumaric acid",
                "Fumaric acid to malic acid"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-21",
              question: "Total NADP formed by one glucose molecule during Krebs cycle are",
              options: [
                "6",
                "12",
                "3",
                "18"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-22",
              question: "Cytochromes are electron transport intermediates containing haem related to",
              options: [
                "Coenzymes",
                "Prosthetic group",
                "Activator",
                "Ribozymes"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-24",
              question: "The common phase between aerobic and anaerobic respiration is called",
              options: [
                "Glycolysis",
                "Tricarboxylic acid cycle",
                "Oxidative phosphorylation",
                "Krebs cycle"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-25",
              question: "Fermentation is",
              options: [
                "Incomplete oxidation of proteins",
                "Complete oxidation of carbohydrates",
                "Aerobic respiration",
                "Incomplete oxidation of carbohydrates"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-26",
              question: "C₃H₆O₃ is",
              options: [
                "Pyruvic acid",
                "Lactic acid",
                "Ethyl alcohol",
                "Acetyl CoA"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-27",
              question: "Glyceraldehyde phosphate is oxidised during glycolysis. What happens to the hydrogen atom and the electron that are removed during oxidation?",
              options: [
                "They reduce NADP",
                "They are transferred to pyruvic acid",
                "They are eliminated in the form of methane",
                "They reduce NAD+"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-28",
              question: "In the electron transport chain, which undergoes terminal oxidation?",
              options: [
                "Cytochrome b",
                "Cytochrome a",
                "Cytochrome a3",
                "Cytochrome c"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-29",
              question: "Organelles which are regarded as powerhouse of the cell and in which the oxidative reactions of the respiratory process take place are",
              options: [
                "Chloroplast",
                "Mitochondria",
                "Lysosomes",
                "Endoplasmic reticulum"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-30",
              question: "When a molecule of pyruvic acid is subjected to aerobic oxidation and forms lactic acid, there is",
              options: [
                "Gain of 2 ATP molecules",
                "Loss of 3 ATP molecules",
                "Loss of 6 ATP molecules",
                "Gain of 3 ATP molecules"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-31",
              question: "In oxidation of one molecule of glucose during respiration, 36 molecules of ATP liberated is",
              options: [
                "All 36 ATP molecules inside the mitochondria",
                "Two ATP molecules during glycolysis and 34 ATP during Krebs cycle",
                "2 molecules during glycolysis and 34 ATP during respiratory chain",
                "2 molecules outside the mitochondria and 34 ATP molecules inside the mitochondria"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-33",
              question: "Both glucose and appropriate enzymes are necessary for the process of glycolysis to begin. Which additional compound must also be present?",
              options: [
                "Acetyl coenzyme A",
                "ATP",
                "Pyruvate",
                "Reduced NAD"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-34",
              question: "Before entering the tricarboxylic acid cycle, the pyruvate produced by the glycolytic pathway is first converted to",
              options: [
                "Acetyl coenzyme A"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-35",
              question: "What kind of fermentation is carried out by muscle cells?",
              options: [
                "Alcohol",
                "Lactic acid",
                "Citric acid",
                "Formic acid"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-38",
              question: "The overall goal of glycolysis, Krebs cycle and electron transport system is the formation of",
              options: [
                "ATP is one large oxidation reaction",
                "Sugars",
                "Nucleic acids",
                "ATP in small stepwise units"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-39",
              question: "Which is the final acceptor of electron in respiration?",
              options: [
                "Cytochromes",
                "Dehydrogenase",
                "Oxygen",
                "Hydrogen"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-41",
              question: "Inner membrane of mitochondria is very selective about what it allows to leave the organelle. One molecule that regularly passes out of a mitochondrion is",
              options: [
                "ATP",
                "Pyruvic acid",
                "Glucose",
                "Citric acid"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-44",
              question: "Respiratory enzymes are present in bacteria on",
              options: [
                "Mitochondria",
                "Golgi complex",
                "Plasma membrane",
                "Endoplasmic reticulum"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-45",
              question: "The formation of acetyl CoA from pyruvic acid is the result of its",
              options: [
                "Reduction",
                "Dehydration",
                "Dephosphorylation",
                "Oxidative decarboxylation"
              ],
              answer: 3
            },
      {
            id: "biomolecules-001",
            question: "Which of the following is a correct structural feature of RNA?",
            options: [
              "It contains deoxyribose sugar",
              "It has a double-stranded helical structure",
              "It contains base uracil instead of base thymine",
              "It is confined to the nucleus only",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-002",
            question: "The correct function of H⁺ and OH⁻ ions in cells is:",
            options: [
              "Transporting proteins",
              "Breaking down fats",
              "Maintaining or changing pH",
              "Producing light energy",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-003",
            question:
              "Acylglycerols like fats and oils are esters formed by condensation reaction between:",
            options: [
              "Fatty acid and water",
              "Fatty acid and phosphates",
              "Fatty acid and glucose",
              "Fatty acid and alcohol",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-004",
            question: "Which of the following is NOT considered a conjugated molecule?",
            options: [
              "A molecule containing linked sugar units",
              "A molecule made up only of carbon and hydrogen",
              "A protein attached to a non-protein group",
              "A lipid combined with another chemical component",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-005",
            question:
              "The central dogma of molecular biology describes the flow of genetic information as:",
            options: [
              "DNA → mRNA → Protein",
              "mRNA → DNA → Protein",
              "Protein → DNA → mRNA",
              "DNA → Protein → mRNA",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-006",
            question: "Each DNA nucleotide differs from the others based on its:",
            options: [
              "Nitrogenous bases",
              "Phosphate group",
              "Sugar molecule",
              "Number of phosphorus atoms",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-007",
            question: "Glycolipid is a combination of:",
            options: [
              "Lipid and carbohydrate",
              "Lipid and protein",
              "Nucleic acid and lipid",
              "Protein and carbohydrate",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-008",
            question: "Lactose sugar is found in milk and is composed of ____.",
            options: [
              "Glucose + Glucose",
              "Glucose + Fructose",
              "Glucose + Galactose",
              "Fructose + Galactose",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-009",
            question:
              "During sample analysis, students find that it contains Carbon, Hydrogen, Oxygen and Nitrogen, but no phosphorous. Based on this information, which biological molecule is most likely to be in the sample?",
            options: [
              "DNA",
              "Protein",
              "Phospholipid",
              "RNA",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-010",
            question:
              "During lab analysis, a student extracted a molecule that contained a sugar, a phosphate group and a nitrogenous base. Which of the following molecules was likely identified?",
            options: [
              "Nucleotide",
              "Amino acid",
              "Monosaccharides",
              "Polysaccharides",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-011",
            question:
              "Pick the smallest form of carbohydrates from the following, which cannot be further hydrolyzed into simpler form.",
            options: ["Sucrose", "Lactose", "Glucose", "Starch"],
            answer: 2,
          },
        
          {
            id: "biomolecules-012",
            question:
              "In Watson and Crick's DNA model, which of the following pairs with Cytosine?",
            options: ["Adenine", "Guanine", "Thymine", "Uracil"],
            answer: 1,
          },
        
          {
            id: "biomolecules-013",
            question: "The glycoproteins are commonly found in:",
            options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Plasma membrane"],
            answer: 3,
          },
        
          {
            id: "biomolecules-014",
            question: "The high specific heat capacity of water is due to:",
            options: [
              "Ionic bonding",
              "Hydrogen bonding",
              "Covalent bonding",
              "Hydrophilic bonding",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-015",
            question: "Which of the following is a branched polysaccharide found in animals?",
            options: ["Cellulose", "Glycogen", "Amylose", "Chitin"],
            answer: 1,
          },
        
          {
            id: "biomolecules-016",
            question: "Which of the following is NOT a globular protein?",
            options: ["Enzyme", "Albumen", "Hemoglobin", "Collagen"],
            answer: 3,
          },
        
          {
            id: "biomolecules-017",
            question:
              "A diabetic patient is advised to avoid both sucrose and lactose, because they both:",
            options: [
              "Are structural carbohydrates",
              "Increase blood glucose after hydrolysis",
              "Cannot be digested in humans",
              "Act as non-caloric sweeteners",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-018",
            question:
              "Which properties of water enable it to circulate in living bodies and act as transport medium?",
            options: [
              "Ionization and low density",
              "Cohesion and adhesion",
              "Ionization and adhesion",
              "Adhesion and cohesion",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-019",
            question: "How are the phospholipid molecules arranged in the plasma membrane?",
            options: [
              "Hydrophilic heads face inwards and hydrophobic tails face outwards",
              "Both hydrophilic heads face each other in the membrane",
              "Hydrophilic heads face outwards and hydrophobic tails face inwards",
              "Hydrophilic heads and hydrophobic tails are randomly distributed",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-020",
            question: "The structure of RNA consists of:",
            options: [
              "Double polynucleotide strand",
              "Deoxyribose sugar",
              "Five different types of nucleotides",
              "Base uracil instead of thymine",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-021",
            question:
              "The constant diameter of DNA is maintained by pairing of:",
            options: [
              "Thymine towards pyrimidines",
              "Pyrimidine towards pyrimidines",
              "Purine towards purine",
              "Sugar towards phosphate",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-022",
            question: "Identify the CORRECT option functional group:",
            options: [
              "Ribose – Pentose, Aldehyde Group",
              "Galactose – Hexose, Ketone Group",
              "Ribulose – Pentose, Aldehyde Group",
              "Galactose – Hexose, Ketone Group",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-023",
            question:
              "Homopolysaccharide that is found in the cell wall of fungi and in the exoskeleton of arthropods is:",
            options: ["Cellulose", "Glycogen", "Starch", "Chitin"],
            answer: 3,
          },
        
          {
            id: "biomolecules-024",
            question: "The most abundant lipids in living things are:",
            options: ["Terpenes", "Waxes", "Sterols", "Acylglycerols"],
            answer: 3,
          },
        
          {
            id: "biomolecules-025",
            question:
              "Name the type of bond that joins amino acids to form a polypeptide chain:",
            options: ["Ionic bond", "Covalent bond", "Glycosidic bond", "Peptide bond"],
            answer: 3,
          },
        
          {
            id: "biomolecules-026",
            question: "Which of the following is not a globular protein?",
            options: ["Enzyme", "Hormone", "Channel protein", "Collagen"],
            answer: 3,
          },
        
          {
            id: "biomolecules-027",
            question:
              "Which property of water allows it to stick to polar surface like wood?",
            options: ["Density", "Adhesion", "Cohesion", "Non-polar attraction"],
            answer: 1,
          },
        
          {
            id: "biomolecules-028",
            question:
              "Name the biomolecule essential for information storage and transmission within cells.",
            options: ["Carbohydrates", "Lipids", "Nucleic acids", "Proteins"],
            answer: 2,
          },
        
          {
            id: "biomolecules-029",
            question: "Guanine-cytosine pairs enhance DNA stability due to:",
            options: [
              "Larger size",
              "Closer pairing",
              "More hydrogen bonds in both",
              "Double ring structure in both",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-030",
            question: "Which of the following is NOT related to DNA?",
            options: ["Adenine", "Thymine", "Uracil", "Guanine"],
            answer: 2,
          },
        
          {
            id: "biomolecules-031",
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
            id: "biomolecules-032",
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
            id: "biomolecules-033",
            question:
              "Which of the following biological molecules releases highest energy from its own gram?",
            options: ["Carbohydrates", "Lipids", "Protein", "Water"],
            answer: 1,
          },
        
          {
            id: "biomolecules-034",
            question:
              "A food sample contains long chains of amino acids bounded together. This indicates the presence of:",
            options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
            answer: 2,
          },
        
          {
            id: "biomolecules-035",
            question:
              "At least how many saccharide units must be present in polysaccharide?",
            options: ["2", "0", "10", "11"],
            answer: 3,
          },
        
          {
            id: "biomolecules-036",
            question:
              "The complementary base pairing in DNA is important because it:",
            options: [
              "Maintains the tertiary structure of enzymes",
              "Provides energy for all cell metabolism",
              "Enables protein to fold properly",
              "Allows DNA to act as a genetic blueprint during replication",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-037",
            question: "The secondary structure of proteins is stabilized by:",
            options: [
              "Ionic bonds",
              "Hydrogen bonds",
              "Disulfide bridges",
              "Hydrophobic exclusion",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-038",
            question: "The following is an example of a globular protein.",
            options: ["Keratin", "Collagen", "Hemoglobin", "Histone"],
            answer: 2,
          },
        
          {
            id: "biomolecules-039",
            question: "Enzymes belong to which class of biomolecules?",
            options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
            answer: 2,
          },
        
          {
            id: "biomolecules-040",
            question:
              "Which property of water helps in moderating Earth's climate and maintaining stable temperature in aquatic environment?",
            options: [
              "Low viscosity",
              "High specific heat capacity",
              "High surface tension",
              "High polarity",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-041",
            question: "An oligosaccharide is made up of at least:",
            options: [
              "Two saccharide units",
              "Ten saccharide units",
              "Three to ten saccharide units",
              "More than ten saccharide units",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-042",
            question: "Which of the following is a key feature of RNA?",
            options: [
              "Deoxyribose and thymine",
              "Double stranded and thymine",
              "Ribose and uracil",
              "Ribose and thymine",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-043",
            question:
              "Which of the following types of RNA make up the largest proportion of total cellular RNA?",
            options: [
              "Messenger RNA",
              "Ribosomal RNA",
              "Transfer RNA",
              "Catalytic RNA (ribozyme)",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-044",
            question:
              "Which one of the following biomolecules is a polymer/polysaccharide?",
            options: ["Sucrose", "Pentose", "Lactose", "Glycogen"],
            answer: 3,
          },
        
          {
            id: "biomolecules-045",
            question: "Peptide bonds are important in protein because they:",
            options: [
              "Affect solubility",
              "Hold R-groups",
              "Link amino acids",
              "Help in releasing oxygen",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-046",
            question: "Glycoproteins are formed as a result of the combination of:",
            options: [
              "Lipids and proteins",
              "Carbohydrates and proteins",
              "Nucleic acid and proteins",
              "Fatty acids and carbohydrates",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-047",
            question:
              "Which of the following hormones in the body of animal is lipid-based in nature?",
            options: ["Insulin", "FSH", "Oxytocin", "Aldosterone"],
            answer: 3,
          },
        
          {
            id: "biomolecules-048",
            question:
              "Which of the following base pairing maintains the constant diameter of the DNA double helix as per Watson and Crick’s model?",
            options: [
              "Purine – Purine",
              "Pyrimidine – Pyrimidine",
              "Purine – Pyrimidine",
              "Sugar-Phosphate",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-049",
            question:
              "A mutation prevents proper disulfide bond formation in a fibrous protein, causing brittle nails and slow hair growth. Which of the following proteinaceous substance would be affected?",
            options: ["Elastin", "Actin", "Keratin", "Collagen"],
            answer: 2,
          },
        
          {
            id: "biomolecules-050",
            question:
              "Polysaccharides such as starch and glycogen are mainly used for:",
            options: [
              "Structural framework only",
              "Short-term and long-term energy storage",
              "Enzyme catalysis",
              "Ready source of energy",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-051",
            question:
              "In chromosome, positively charged histone proteins are organized with negatively charged DNA. The positive charges of histone are due to an abundance of basic amino acids:",
            options: [
              "Arginine and alanine",
              "Arginine and lysine",
              "Lysine and alanine",
              "Phenylalanine and arginine",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-052",
            question:
              "Which of the following is common between aldosterone, sex hormone and cortisone?",
            options: [
              "They are peptides",
              "They are phospholipids",
              "They are steroids",
              "They are glycoproteins",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-053",
            question: "The temperature of underground water remains constant due to:",
            options: [
              "Heat capacity",
              "Polarity of water",
              "Heat of vaporization",
              "Specific heat of vaporization",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-054",
            question:
              "All of the following properties of water are associated with its capillary action, EXCEPT:",
            options: ["Adhesion", "Density", "Cohesion", "Surface tension"],
            answer: 1,
          },
        
          {
            id: "biomolecules-055",
            question:
              "Arachidonic acid, which is the precursor molecule for prostaglandins is:",
            options: [
              "A saturated fatty acid with 18 carbons",
              "An unsaturated fatty acid with 18 carbons",
              "A tri-unsaturated fatty acid with 20 carbons",
              "A tetra-unsaturated fatty acid with 20 carbons",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-056",
            question:
              "The most abundant polysaccharide in plants, widely used in paper and as a source of dietary fibre for humans is:",
            options: ["Chitin", "Glycogen", "Starch", "Cellulose"],
            answer: 3,
          },
        
          {
            id: "biomolecules-057",
            question:
              "Which of the following characteristics is common among sucrose, lactose and maltose?",
            options: [
              "Molecular formula",
              "Occurrence in living beings",
              "Chemical nature of their monosaccharide units",
              "To act as reducing sugar",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-058",
            question: "Water is commonly known as a universal solvent because:",
            options: [
              "It dissolves polar and ionic substances effectively",
              "It supports chemical reactions without reacting itself",
              "It has a high specific heat capacity",
              "It dissolves many substances due to its small molecule size",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-059",
            question:
              "Which of the following structural change in water molecule leads to the low density of ice?",
            options: [
              "Formation of ionic bonds",
              "Expansion due to hydrogen bonding",
              "Increased kinetic energy",
              "Loss of polarity in molecules",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-060",
            question:
              "At 25°C the concentration of each of H⁺ and OH⁻ ions in pure water is about __ mole/liter.",
            options: ["10⁻⁶", "10⁻⁷", "10⁻⁹", "10⁻¹⁴"],
            answer: 1,
          },
        
          {
            id: "biomolecules-061",
            question: "Which of the following proteins do NOT exhibit quaternary structure?",
            options: ["Actin", "Haemoglobin", "Insulin", "Myoglobin"],
            answer: 3,
          },
        
          {
            id: "biomolecules-062",
            question:
              "Which one of the following monosaccharides is a hexose-aldehyde form of sugar?",
            options: ["Fructose", "Galactose", "Glucose", "Ribose"],
            answer: 2,
          },
        
          {
            id: "biomolecules-063",
            question:
              "Which one of the following is the main component of lipid bilayer of plasma membrane?",
            options: ["Acylglycerol", "Lecithin", "Triglyceride", "Waxes"],
            answer: 1,
          },
        
          {
            id: "biomolecules-064",
            question:
              "When 3 fatty acids combine with __, they form triglycerides and 3 molecules of water.",
            options: ["Alcohol", "Ester", "Glyceride", "Glycerol"],
            answer: 3,
          },
        
          {
            id: "biomolecules-065",
            question:
              "Which one of the following carbohydrates show dark brown color with iodine solution?",
            options: ["Cellulose", "Glucose", "Glycogen", "Sucrose"],
            answer: 2,
          },
        
          {
            id: "biomolecules-066",
            question:
              "Which of the following part of phospholipids constitutes hydrophobic zone in plasma membrane?",
            options: ["Cholesterol", "Fatty acid tail", "Glycolipids", "Phosphate head"],
            answer: 1,
          },
        
          {
            id: "biomolecules-067",
            question:
              "Which one of the following types of bonds is formed between the hydroxyl group of one amino acid and hydrogen of amino group of another amino acid with release of water?",
            options: [
              "Ester bond",
              "Glycosidic linkage",
              "Peptide bond",
              "Phosphodiester bond",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-068",
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
            id: "biomolecules-069",
            question:
              "Hemoglobin fails to carry sufficient oxygen, leading to death of a person when: Glutamic acid is replaced by Valine at which position?",
            options: [
              "3rd position",
              "6th position",
              "5th position",
              "4th position",
              "2nd position",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-070",
            question:
              "The pigment in the muscles responsible for the binding of oxygen is:",
            options: ["Oxyhemoglobin", "Plasmin", "Myoglobin", "Heme", "Hemoglobin"],
            answer: 2,
          },
        
          {
            id: "biomolecules-071",
            question:
              "The type of carbohydrates, made up of 6 to 10 monosaccharides, which are comparatively less sweet in taste and less soluble in water, are called:",
            options: [
              "Oligosaccharides",
              "Monosaccharides",
              "Starch",
              "Cellulose",
              "Polysaccharides",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-072",
            question: "Histone proteins are rich in:",
            options: [
              "Basic amino acid",
              "Acidic fatty acid",
              "Basic citric acid",
              "Acidic amino acid",
              "Basic fatty acid",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-073",
            question: "What structure holds sister chromatids together?",
            options: [
              "Gene",
              "Nucleosome",
              "Centrosome",
              "Centromere",
              "Histone protein",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-074",
            question:
              "Each helix of DNA is made up of four types of nucleotides and both helices are complementary to each other i.e. if one helix contains Adenine the opposite helix will contain:",
            options: [
              "Histidine",
              "Uracil",
              "Cytosine",
              "Thymine",
              "Guanine",
            ],
            answer: 3,
          },
        
          {
            id: "biomolecules-075",
            question: "Sugarcane contains __.",
            options: ["Fructose", "Glucose", "Ribose", "Sucrose"],
            answer: 3,
          },
        
          {
            id: "biomolecules-076",
            question: "Sickle cell anaemia results from?",
            options: [
              "Reduction in oxygen carrying capacity of haemoglobin",
              "Linkage between the polypeptide chains",
              "Single amino acid substitution in the haemoglobin molecule",
              "Viral infections of RNA viruses",
            ],
            answer: 2,
          },
        
          {
            id: "biomolecules-077",
            question: "Which is INCORRECT about the globular proteins?",
            options: [
              "Abundantly found in hair",
              "Are spherical in shape",
              "Have polypeptide chains",
              "Soluble in water",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-078",
            question: "What is the ester of fatty acids and long chain alcohol called?",
            options: ["Acylglycerol", "Glycerol", "Phospholipid", "Wax"],
            answer: 3,
          },
        
          {
            id: "biomolecules-079",
            question: "Lipids, which do not contain fatty acid are:",
            options: ["Neutral lipids", "Phosphatidic acids", "Steroids", "Waxes"],
            answer: 2,
          },
        
          {
            id: "biomolecules-080",
            question: "Chromosome is typically made up from a combination of?",
            options: [
              "DNA and protein",
              "DNA and RNA",
              "RNA and lipids",
              "RNA and proteins",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-081",
            question: "RNA is associated with:",
            options: ["Lysosome", "Centrosome", "Ribosomes", "Golgi bodies"],
            answer: 2,
          },
        
          {
            id: "biomolecules-082",
            question: "The hereditary material is:",
            options: [
              "DNA",
              "Protein",
              "Both DNA and Protein",
              "Neither DNA nor Protein",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-083",
            question: "Ribose is an example of __ sugar.",
            options: ["Pentose", "Hexose", "Heptose", "Tetrose"],
            answer: 0,
          },
        
          {
            id: "biomolecules-084",
            question: "Water contributes _ % of total mammalian cell weight.",
            options: ["40", "50", "60", "70"],
            answer: 3,
          },
        
          {
            id: "biomolecules-085",
            question:
              "The first step of central dogma is the transfer of information from:",
            options: [
              "DNA to Protein",
              "DNA to mRNA",
              "RNA to Protein",
              "DNA to tRNA",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-086",
            question:
              "Lactose, maltose and sucrose are the important type of following carbohydrates in the living organisms:",
            options: [
              "Monosaccharides",
              "Disaccharides",
              "Triaccharides",
              "Polysaccharides",
            ],
            answer: 1,
          },
        
          {
            id: "biomolecules-087",
            question:
              "If the sequence of bases in DNA is TAGC, the sequence of bases in RNA will be:",
            options: ["ATCG", "AUCG", "TAGC", "None of these"],
            answer: 1,
          },
        
          {
            id: "biomolecules-088",
            question: "Mono-saccharides have a general formula represented by:",
            options: [
              "Cₙ(H₂O)ₙ",
              "C(H₂O)ₙ",
              "C₂(H₂O)ₙ",
              "Cⁿ(H₂O)ₙ",
            ],
            answer: 0,
          },
        
          {
            id: "biomolecules-089",
            question: "What is the percentage of H₂O in bone cells?",
            options: ["70%", "20%", "99%", "60%"],
            answer: 1,
          },
        
          {
            id: "biomolecules-090",
            question:
              "When glycerol reacts with fatty acid, which type of chemical bond will form?",
            options: ["Ester Bond", "Ether Linkage", "Hydrogen Bond", "Ionic Bond"],
            answer: 0,
          },
        
          {
            id: "biomolecules-091",
            question: "Polysaccharides in plants are synthesized by the process of:",
            options: ["Hydrolysis", "Oxidation", "Condensation", "Glycolysis"],
            answer: 2,
          },
        
          {
            id: "biomolecules-092",
            question:
              "Which of the following process is involved in breakdown of protein into Amino acids?",
            options: ["Condensation", "Hydrolysis", "Glycolysis", "Fixation"],
            answer: 1,
          },
        
          {
            id: "biomolecules-093",
            question:
              "The hydrophilic end of phospholipid molecule is polar because of the presence of:",
            options: ["Glycerol", "Amine group", "Fatty Acid", "Phosphate group"],
            answer: 3,
          },
        
          {
            id: "biomolecules-094",
            question: "Which monosaccharide will form a glucopyranose ring in solution?",
            options: ["Fructose", "Glucose", "Ribose", "Deoxyribose"],
            answer: 1,
          },
          // --- TESTMOZ ---
            {
              id: "testmoz-bio-1",
              question: "Hemoglobin exhibits:",
              options: [
                "Primary structure",
                "Secondary structure",
                "Tertiary structure",
                "Quaternary structure"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-2",
              question: "Which monosaccharide will form a pyranose ring in solution?",
              options: [
                "Fructose",
                "Glucose",
                "Ribose",
                "Deoxyribose"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-3",
              question: "The number of base pairs in one turn of DNA is:",
              options: [
                "10",
                "34",
                "20",
                "25"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-4",
              question: "Which one of the following is a precursor of steroid hormones?",
              options: [
                "Glycerol",
                "Sterol",
                "Amino acids",
                "Cholesterol"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-5",
              question: "Which of the following is an example of unsaturated fatty acids?",
              options: [
                "Butyric acid",
                "Palmitic acid",
                "Oleic acid",
                "Acetic acid"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-6",
              question: "The structure of fibrous protein comprises of polypeptide chains in the form of:",
              options: [
                "Cluster",
                "Long strands of fibrils",
                "Spherical or curled up ball",
                "Flat uncoiled chains"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-7",
              question: "Cellulose of wood, cotton and paper is an example of:",
              options: [
                "Carbohydrates",
                "Proteins",
                "Nucleic acids",
                "Lipids"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-8",
              question: "The enantiomer of D-glucose is:",
              options: [
                "D-galactose",
                "L-galactose",
                "Both of them",
                "None of them"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-9",
              question: "Amino acid in which R group is hydrogen is:",
              options: [
                "Glycine",
                "Alanine",
                "Serine",
                "Valine"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-10",
              question: "The bond formed between glucose and fructose to form sucrose is:",
              options: [
                "1,4 Glycosidic linkage",
                "1,6 Glycosidic linkage",
                "1,2 Glycosidic linkage",
                "1,3 Glycosidic linkage"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-11",
              question: "Myosin is type of protein:",
              options: [
                "Intermediate",
                "Globular",
                "Simple",
                "Fibrous"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-12",
              question: "In translation the terminating codon is:",
              options: [
                "GUA",
                "UUG",
                "UAA",
                "AGU"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-13",
              question: "The two dimensional shape of tRNA is:",
              options: [
                "L shape",
                "X shape",
                "Clover leaf like",
                "Y shape"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-14",
              question: "It is an Aldo-hexose:",
              options: [
                "Fructose",
                "Glucose",
                "Ribulose",
                "Ribose"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-15",
              question: "Involved in blood transfusion?",
              options: [
                "Glycoprotein",
                "Glycolipid",
                "Cerebrosides",
                "Both A & B"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-16",
              question: "Secondary structure of protein is found in:",
              options: [
                "Trypsin",
                "Insulin",
                "Keratin",
                "Glucagon"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-17",
              question: "Waxes are formed by combination of fatty acids with:",
              options: [
                "Alcohol",
                "Serine",
                "Glycerol",
                "Cysteine"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-18",
              question: "Which of the following is purine?",
              options: [
                "Guanine",
                "Cytosine",
                "Thymine",
                "Uracil"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-19",
              question: "Fatty acids are organic compounds containing hydrogen, oxygen and one of the following:",
              options: [
                "COOH",
                "Acyl",
                "-NH2",
                "Sucrose"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-20",
              question: "Phosphodiester bond is:",
              options: [
                "C—O—P—O—C",
                "C—O—P",
                "C—C—O—P",
                "None"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-21",
              question: "Collagen and albumin are:",
              options: [
                "Simple proteins",
                "Polyamides",
                "Derived proteins",
                "Polysaccharides"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-22",
              question: "What term is used to describe the process by which proteins are synthesized from a genetic code?",
              options: [
                "Reproduction",
                "Transcription",
                "Translation",
                "Replication"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-23",
              question: "Immediate source of energy for cellular metabolism is:",
              options: [
                "Lipids",
                "ATP",
                "Carbohydrates",
                "Proteins"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-24",
              question: "Which of the following gives red color with iodine?",
              options: [
                "Starch",
                "Glycogen",
                "Cellulose",
                "All of these"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-25",
              question: "The combination of a Pentose sugar with a base results in a compound known as:",
              options: [
                "Nucleotide",
                "Nucleic acid",
                "Nucleoside",
                "Polynucleotide"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-26",
              question: "Which one are intermediates in respiration and photosynthesis both?",
              options: [
                "Ribose and heptulose",
                "Glucose and galactose",
                "Glyceraldehyde and dihydroxyacetone",
                "Fructose and ribulose"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-27",
              question: "Which lipid is totally hydrophobic or insoluble?",
              options: [
                "Triglycerides",
                "Waxes",
                "Phospholipids",
                "Terpenoids"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-28",
              question: "If the genetic code is made up of three nucleotides, then total possible genetic codes will be:",
              options: [
                "6",
                "34",
                "64",
                "29"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-29",
              question: "Estrogen, vitamin D and cholesterol are all examples of:",
              options: [
                "Glycolipids",
                "Lipoprotein",
                "Terpenes",
                "Steroids"
              ],
              answer: 3
            },
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
            },
       {
            id: "enzymes-001",
            question:
              "Which of the following statement is incorrect regarding rate of enzymatic action?",
            options: [
              "Increase in enzyme concentration increases the rate",
              "Increase in enzyme concentration reduces the rate",
              "All enzymes work at their maximum rate at optimum temperature",
              "All enzymes work at their maximum rate at optimum pH",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-002",
            question:
              "Induced fit model of enzyme activity suggests that an enzyme:",
            options: [
              "Cannot modify its active sites",
              "Can bind to a single substrate",
              "Can catalyze related reaction",
              "Usually belongs to non-regulatory enzyme",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-003",
            question:
              "Enzymes activity decreases at very low or high pH because:",
            options: [
              "Substrate concentration increases",
              "Enzymes become denatured",
              "Product formation increases",
              "Temperature becomes constant",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-004",
            question:
              "Effect of increased substrate concentration on enzyme activity:",
            options: [
              "Decrease the rate of reaction",
              "Increase the reaction rate until all active sites are saturated",
              "Have no effect on the reaction rate",
              "Increase the rate of reaction in a straight diagonal line",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-005",
            question:
              "According to Lock and Key model, the active site is regarded as:",
            options: [
              "Rigid and specific",
              "Flexible and specific",
              "Rigid and non-specific",
              "Flexible and non-specific",
            ],
            answer: 0,
          },
        
          {
            id: "enzymes-006",
            question:
              "Reversible Inhibitors differ from Irreversible Inhibitors because they:",
            options: [
              "Bind permanently and cannot be removed",
              "Bind temporarily and can be removed",
              "Permanently inactivate the enzyme",
              "Change enzyme structure permanently",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-007",
            question:
              "Which is an enzyme activator secreted by the intestinal glands?",
            options: ["Amylase", "Pepsinogens", "Enterokinase", "Lipase"],
            answer: 2,
          },
        
          {
            id: "enzymes-008",
            question:
              "Cyanides occupy the active site of enzymes by forming covalent bond, thus comes under the __ inhibitors.",
            options: [
              "Competitive",
              "Irreversible",
              "Non-competitive",
              "Reversible",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-009",
            question:
              "A covalently bonded inorganic ion with protein part of an enzyme is termed as __.",
            options: [
              "Apoenzyme",
              "Coenzyme",
              "Holoenzyme",
              "Prosthetic group",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-010",
            question:
              "Which of the following statement is incorrect with reference to the enzyme action?",
            options: [
              "Substrate binds with the enzyme at its active site",
              "Non-competitive inhibitor binds the enzyme at a site distinct from that of active site",
              "Addition of a lot of succinate do not reverse the inhibition of succinic dehydrogenase by malonate",
              "Malonate is a competitive inhibitor of succinic dehydrogenase",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-011",
            question: "Binding site for a substrate on enzyme is:",
            options: [
              "Allosteric site",
              "Passive site",
              "Active site",
              "Regulatory site",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-012",
            question:
              "Ribozymes are the only biocatalysts that are made up of:",
            options: ["DNA", "RNA", "Protein", "Fatty acid"],
            answer: 1,
          },
        
          {
            id: "enzymes-013",
            question:
              "The induced fit model differs from the Lock and Key model because the enzyme in this model:",
            options: [
              "Has a rigid and fixed active site",
              "Changes shape to fit the substrate",
              "Is non-specific in its action",
              "Is denatured during reaction",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-014",
            question:
              "Which competitive inhibitor blocks the enzyme responsible for bacterial cell wall synthesis?",
            options: [
              "Sulphonamide",
              "Streptomycin",
              "Tetracycline",
              "Penicillin",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-015",
            question:
              'Koshland proposed a model for enzyme with the name of "Induced Fit Model" in the year:',
            options: ["1958", "1952", "1954", "1956", "1949"],
            answer: 0,
          },
        
          {
            id: "enzymes-016",
            question: "The human enzymes are highly active at about:",
            options: ["8°C", "15°C", "37°C", "45°C", "55°C"],
            answer: 2,
          },
        
          {
            id: "enzymes-017",
            question:
              "In heterotrophs, during digestion, macromolecules are broken into monomers by hydrolysis with the help of:",
            options: [
              "Chymosin",
              "Gastrin",
              "Rennin",
              "Hydrolytic enzyme",
              "Endonuclease",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-018",
            question: "The term enzyme was coined by:",
            options: [
              "Darwin",
              "Lamarck",
              "Friedrich Wilhelm Kühne",
              "Mendel",
              "Thomas Cech",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-019",
            question:
              "Molecules that bind to an enzyme away from the active site and increase the function of that active site are known as:",
            options: [
              "Activation energy without enzyme",
              "Energy of reactants",
              "Activation energy with enzyme",
              "Energy of product",
              "Allosteric activators",
            ],
            answer: 4,
          },
        
          {
            id: "enzymes-020",
            question: "The active site of the enzyme is the region that:",
            options: [
              "Binds with the product of catalytic reaction",
              "Is involved in catalytic reactions",
              "Is inhibited by coenzymes and cofactors",
              "Binds allosteric regulators of the enzyme",
              "Is inhibited by coenzymes only",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-021",
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
            id: "enzymes-022",
            question:
              "Binding of hemoglobin with oxygen is catalyzed by the enzyme:",
            options: [
              "Carbonic anhydrase",
              "Carboxylase",
              "Oxygenase",
              "Dehydrogenase",
              "None of these",
            ],
            answer: 4,
          },
        
          {
            id: "enzymes-023",
            question:
              "Transfer of phosphate from one compound to the other compound requires an enzyme called:",
            options: [
              "Oxidoreductase",
              "Transferase",
              "Hydrolase",
              "Ligase",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-024",
            question:
              "The covalently bonded non-protein part of enzyme is called:",
            options: [
              "Activator",
              "Prosthetic group",
              "Coenzyme",
              "Apoenzyme",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-025",
            question:
              "The active site is important in enzyme action because:",
            options: [
              "It binds to the substrate",
              "It maintains the pH of reaction",
              "It provides energy for reaction",
              "It changes the shape of the enzyme",
            ],
            answer: 0,
          },
        
          {
            id: "enzymes-026",
            question:
              "A substance that binds to an enzyme, but NOT at the active site and reduces the enzyme activity is called:",
            options: [
              "Competitive inhibitor",
              "Substrate",
              "Non-Competitive inhibitor",
              "Cofactor",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-027",
            question: "Enzymes increase the rate of reaction by:",
            options: [
              "Increasing activation energy",
              "Lowering activation energy",
              "Increasing pH",
              "Decreasing pH",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-028",
            question: "Optimum pH for pancreatic lipase is:",
            options: ["2", "4", "6", "8"],
            answer: 3,
          },
        
          {
            id: "enzymes-029",
            question:
              "What happens to the enzyme after an enzyme-catalysed reaction?",
            options: [
              "Reduced to inactive form",
              "Becomes inert",
              "Changes into substrate",
              "Used for another reaction",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-030",
            question: "Catalase can be activated at pH:",
            options: ["1", "3", "5", "7"],
            answer: 3,
          },
        
          {
            id: "enzymes-031",
            question: "Enzymatic activity can be inhibited by?",
            options: [
              "Heavy metal ions",
              "Methane",
              "Mutase",
              "Noble gases",
            ],
            answer: 0,
          },
        
          {
            id: "enzymes-032",
            question: "A competitive inhibitor:",
            options: [
              "Accelerates the chemical reaction",
              "Competes with the enzyme",
              "Is irreversible",
              "Is reversible",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-033",
            question: "Which enzyme is secreted in the active form?",
            options: [
              "Amylase",
              "Lipase",
              "Peptidase",
              "Protease",
            ],
            answer: 0,
          },
        
          {
            id: "enzymes-034",
            question:
              "The enzymes enable the conversion of substrates into products by:",
            options: [
              "Changing equilibrium in the direction of the substrate",
              "Increasing the activation energy",
              "Increasing the substrate concentration",
              "Lowering the activation energy",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-035",
            question:
              "An enzyme and its substrate react with each other through a __ of enzyme.",
            options: [
              "Active site",
              "Uncharged site",
              "Both (A) and (B)",
              "Definitive charge bearing site",
            ],
            answer: 0,
          },
        
          {
            id: "enzymes-036",
            question:
              "Which of the following is/are the characteristics of the enzymes?",
            options: [
              "All enzymes are globular proteins",
              "They lower the activation energy of reactions",
              "They are sensitive to minor change in substrate concentration",
              "All of the given options",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-037",
            question: "Which one of the following is not an enzyme?",
            options: [
              "Pepsin",
              "Insulin",
              "Sucrase",
              "Catalase",
            ],
            answer: 1,
          },
        
          {
            id: "enzymes-038",
            question:
              "The detachable __ is called as an activator, if it is an inorganic ion.",
            options: [
              "Substrate",
              "Product",
              "Co-factor",
              "None of these",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-039",
            question:
              "Which change occurs in enzyme activity when temperature increases beyond the optimum level?",
            options: [
              "Activity remains same",
              "Activity increases",
              "Enzymes denature",
              "Enzymes specificity increases",
            ],
            answer: 2,
          },
        
          {
            id: "enzymes-040",
            question:
              "Which factor affects the ionization state of an enzyme’s active site?",
            options: [
              "Temperature",
              "Enzyme concentration",
              "Substrate concentration",
              "pH",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-041",
            question:
              "Which type of inhibitor binds to a site other than the active site and changes the shape of active site?",
            options: [
              "Competitive inhibitor",
              "Un-competitive inhibitor",
              "Allosteric activator",
              "Non-competitive inhibitor",
            ],
            answer: 3,
          },
        
          {
            id: "enzymes-042",
            question: "Which of the following is an enzyme inhibitor?",
            options: [
              "Heavy metal ions",
              "Methane",
              "Mutase",
              "Noble gases",
            ],
            answer: 0,
          },
        // --- TESTMOZ ---
          {
            id: "testmoz-bio-1",
            question: "Proteinaceous part of holoenzyme is:",
            options: [
              "Prosthetic group",
              "Lecithin",
              "Apoenzyme",
              "None of these"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-2",
            question: "What is the best physiological pH for optimum functioning for most of the cellular enzymes for human?",
            options: [
              "2-3 pH",
              "6-8 pH",
              "8-10 pH",
              "3-5 pH"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-3",
            question: "Non competitive inhibitors react with enzyme at:",
            options: [
              "Active site",
              "Allosteric site",
              "Both A & B",
              "None of them"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-4",
            question: "Enzymes lower the activation energy by stabilizing the transition state of a metabolic reaction due to?",
            options: [
              "Changing conditions within the active site",
              "Changing condition within the protein framework",
              "Rearranging the fatty acids in active site",
              "Distorting the molecules in allosteric site"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-5",
            question: "Induced fit model of enzyme activity suggests that an enzyme:",
            options: [
              "Cannot modify its active sites",
              "Cannot bind to single substrate",
              "Can catalyze related reaction",
              "Usually belongs to non-regulatory enzyme"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-6",
            question: "Pepsin, protein digesting enzyme, sets best pH:",
            options: [
              "3.00",
              "4.50",
              "6.58",
              "2.00"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-7",
            question: "Combination of apoenzyme and coenzyme produces:",
            options: [
              "Prosthetic group",
              "Holoenzyme",
              "Enzyme",
              "Isoenzyme"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-8",
            question: "The most important property of an enzyme is its:",
            options: [
              "Composition",
              "Thermal denaturation",
              "Solubility",
              "Specificity"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-9",
            question: "Cofactors:",
            options: [
              "Break hydrogen bonds in proteins",
              "Increase activation energy",
              "Help facilitate enzyme activity",
              "Very rare in living organism"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-10",
            question: "Enzyme succinate dehydrogenase converts succinate into:",
            options: [
              "Malate",
              "Citrate",
              "Malonic acid",
              "Fumarate"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-11",
            question: "According to ........ model the active site of enzyme is modified as the substrate interacts with enzyme:",
            options: [
              "Induced fit model",
              "Emil Fischer",
              "Lock and key",
              "Fluid mosaic"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-12",
            question: "The non protein part of enzyme which is covalently and permanently bonded is called:",
            options: [
              "Prosthetic group",
              "Coenzyme",
              "Co factor",
              "Activator"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-13",
            question: "Enzyme which attaches the Okazaki fragments in lagging strands is called:",
            options: [
              "Restriction endonuclease",
              "Primase",
              "DNA ligase",
              "DNA helicase"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-14",
            question: "Zinc ion is attached at the active site of the enzyme Carboxypeptidase. The zinc ion functions as:",
            options: [
              "A co enzyme molecule",
              "An activator",
              "An inhibitor molecule",
              "Controller of allosteric site"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-15",
            question: "Which of the following is an example of competitive inhibitor?",
            options: [
              "Glucose",
              "Succinic acid",
              "Fumarate",
              "Malonate"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-16",
            question: "Non-competitive inhibitor molecules have:",
            options: [
              "A similar structure to the normal substrate molecule",
              "A quite different structure from the substrate molecule",
              "A different conformation but fit into the active site",
              "A similar conformation but doesn’t fit into the active site"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-17",
            question: "Many enzymes are secreted in inactive form to protect:",
            options: [
              "Cell proteins",
              "Mitochondria",
              "Cell membrane",
              "Cell DNA"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-18",
            question: "At a temperature below the freezing point an enzyme is:",
            options: [
              "Unaffected",
              "Slightly inactive",
              "Inactivated",
              "Killed"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-19",
            question: "A ribozyme is ...... with a well defined tertiary structure that enables it to catalyze a chemical reaction:",
            options: [
              "RNA molecule",
              "Protein molecule",
              "Conjugate molecule of RNA & protein",
              "Globular protein having RNA"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-20",
            question: "Which molecular structure of enzyme is essential for activity of enzyme?",
            options: [
              "Primary structure",
              "Secondary structure",
              "Quaternary structure",
              "Tertiary structure"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-21",
            question: "The specificity of enzyme is due to their:",
            options: [
              "Surface configuration",
              "pH",
              "Hydrogen bonding",
              "High molecular weight"
            ],
            answer: 0
          },
    {
            id: "circulation-001",
            question: "The first consequence of lymphatic blockage in tissues is:",
            options: [
              "Deficiency of oxygen",
              "Loss of nerve signals",
              "Drop in blood pressure",
              "Excess fluid accumulation in tissue",
            ],
            answer: 3,
          },
        
          {
            id: "circulation-002",
            question:
              "Which of the following blood vessels have lowest blood velocity with correct reason for low blood velocity?",
            options: [
              "Arteries: Due to thick walls",
              "Capillaries: Due to highest overall cross-sectional area",
              "Veins: Due to blood flow against the gravity",
              "Capillaries: Due to two-way blood flow in capillaries",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-003",
            question: "Tissue fluid in a lymphatic system is called as:",
            options: [
              "Plasma",
              "Matrix",
              "Lymph",
              "Blood",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-004",
            question: "During ventricular systole, which pressure changes occur?",
            options: [
              "Ventricular pressure rises above atrial and arterial pressure",
              "Atrial pressure rises above ventricular pressure",
              "Ventricular pressure falls below arterial pressures",
              "Ventricular pressure falls below atrial pressure",
            ],
            answer: 0,
          },
        
          {
            id: "circulation-005",
            question:
              "Which lymphatic structure absorbs dietary fats in the intestine?",
            options: [
              "Peyer's patches",
              "Lacteals in villi",
              "Pancreatic duct",
              "Lymph nodes",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-006",
            question:
              "Atrial walls are thinner as compared to ventricles because:",
            options: [
              "Atria are small in size",
              "Atria are present above the ventricles",
              "Atria has to force blood into the ventricles which lie very close to them",
              "Blood enters into the atria by osmosis",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-007",
            question:
              "The bony roof of the oral cavity, which separates it from the nasal cavity, is formed by the:",
            options: [
              "Soft palate",
              "Mandible",
              "Hard palate",
              "Maxilla",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-008",
            question:
              "Which of the following fluid flows through the lymphatic vessels?",
            options: [
              "Plasma",
              "Lymph",
              "Serum",
              "Bile",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-009",
            question:
              "Which of the following event prevents backflow of blood from ventricles to atria during ventricular systole?",
            options: [
              "Contraction of the atrial wall muscles",
              "Closure of tricuspid and bicuspid valves",
              "Opening of semilunar valve",
              "Opening of tricuspid and bicuspid valves",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-010",
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
            id: "circulation-011",
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
            id: "circulation-012",
            question:
              "A person has swollen lymph nodes after throat infection. What does this indicate?",
            options: [
              "Failure of circulatory system",
              "Extra glucose storage",
              "Active immune response",
              "Blockage of digestive tract",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-013",
            question:
              "Atrioventricular valve closed during which phase of cardiac cycle:",
            options: [
              "Ventricular systole",
              "Ventricular diastole",
              "Atrial systole",
              "Atrial diastole",
            ],
            answer: 0,
          },
        
          {
            id: "circulation-014",
            question:
              "The heart is surrounded by a tough, inelastic double membranous covering called:",
            options: [
              "Pleura",
              "Peritoneum",
              "Pericardium",
              "Meninges",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-015",
            question:
              "Which phase of the cardiac cycle is characterized by the opening of semilunar valves?",
            options: [
              "Atrial systole",
              "Atrial diastole",
              "Ventricular systole",
              "Ventricular diastole",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-016",
            question:
              "Which part of the heart's conducting system delays the impulse from atria to the ventricles?",
            options: [
              "Sino-atrial node",
              "Atrio-ventricular node",
              "Purkinje fibers",
              "Atrio-ventricular valves",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-017",
            question:
              "The heartbeat sound 'LUB' is produced on closure of:",
            options: [
              "Aortic valve",
              "Atrio-ventricular valves",
              "Pulmonary valves",
              "Semilunar valves",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-018",
            question: "What is the primary function of lymphatic vessels?",
            options: [
              "Transport oxygenated blood",
              "Drain excess interstitial fluid",
              "Produce antibodies",
              "Store metabolic waste",
            ],
            answer: 1,
          },
        
          {
            id: "circulation-019",
            question: "Ventricular systole causes:",
            options: [
              "Atrial relaxation",
              "Atrial contraction",
              "Closing of semilunar valve",
              "Closing of atrioventricular valves",
            ],
            answer: 3,
          },
        
          {
            id: "circulation-020",
            question:
              "Which tissue layer of heart wall is involved in the formation of heart valves?",
            options: [
              "Epicardium",
              "Pericardium",
              "Endocardium",
              "Myocardium",
            ],
            answer: 2,
          },
        
          {
            id: "circulation-021",
            question: "Which of the following layer is mainly composed of cardiac muscles?",
            options: [
              "Endocardium",
              "Epicardium",
              "Pericardium",
              "Myocardium",
            ],
            answer: 3,
          },
        
          {
            id: "circulation-022",
            question:
              "Which of the following blood groups has anti-A and anti-B antibodies in the serum?",
            options: [
              "A",
              "AB",
              "B",
              "O",
            ],
            answer: 3,
          },
          // --- TESTMOZ ---
            {
              id: "testmoz-bio-1",
              question: "Opening and closing of stomata is greatly influenced by",
              options: [
                "Concentration of oxygen",
                "Concentration of hydrogen",
                "Concentration of Nitrogen",
                "Concentration of potassium ions"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-2",
              question: "Dub sound by heart is made due to",
              options: [
                "Closing of AV valves",
                "Opening of AV valves",
                "Closing of semi lunar walls",
                "Opening of semi lunar valves"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-3",
              question: "A circulatory system has how many characteristics",
              options: [
                "1",
                "2",
                "3",
                "6"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-4",
              question: "Debsorption of water through a compound without dissolving in it is known as",
              options: [
                "Ascent of SAP",
                "Imbibition",
                "Plasmolysis",
                "Gutation"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-5",
              question: "In the heart the thick walled chamber are located at",
              options: [
                "Apex",
                "Lower side",
                "Literal side",
                "Dorsal side"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-6",
              question: "The pressure capillaries cause a continuous leakage of fluid from the blood plasma into space its around the capillaries and tissue this fluid is known as",
              options: [
                "Interstitial fluid",
                "Intracellular fluid",
                "Serum",
                "Lymph"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-7",
              question: "Four plants are present in different environmental conditions plant a is present in warm climate with continuous rainfall plant b is present in cool forest plant C is present in warm climate with little Breeze while plant D is present in warm climate high wind speed which one of the above plant will have highest rate of transpiration",
              options: [
                "Plant B",
                "Plant D",
                "Plant C",
                "Plant A"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-8",
              question: "The number of stages involved in the Heartbeat is",
              options: [
                "Two",
                "Four",
                "Three",
                "Five"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-9",
              question: "The upward movement of sap by the xylem is",
              options: [
                "Ascent of SAP",
                "Deplasmolysis",
                "Plasmolysis",
                "Gutation"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-10",
              question: "Which one of the following act is pacemaker in the heart",
              options: [
                "Atrio ventricular bundle of fibres",
                "Atrio ventricular node",
                "Sinoartrial node",
                "Bundle of his"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-11",
              question: "Vein differs from artery in having",
              options: [
                "Narrow lumen",
                "Pigmented walls",
                "Strong muscular walls",
                "Valves"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-12",
              question: "The only vein in human body carrying oxygenated blood is",
              options: [
                "Femoral",
                "Pulmonary",
                "Renal",
                "All"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-13",
              question: "Casparian strips are found in",
              options: [
                "Epidermis",
                "Endodermis",
                "Cortex",
                "Vascular"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-14",
              question: "The stomatal pore will open when",
              options: [
                "Turgor pressure of Guard cells decreases",
                "Turgar of guard cell increases",
                "Leaf is keep in the dark",
                "Amount of carbon dioxide in the Guard cells increases"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-15",
              question: "In humans the closed sac which surround the heart is",
              options: [
                "Endocardium",
                "Myocardium",
                "Pericardium",
                "Epicardium"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-16",
              question: "The tricuspid valve is present between",
              options: [
                "Ventricle and Pulmonary artery",
                "Left Atrium and left ventrical",
                "Ventricle and aorta",
                "Right Atrium and right ventricle"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-17",
              question: "In human heart the left Atrium receives",
              options: [
                "The superior vena cava",
                "The inferior Vena cava",
                "The coronary sinus",
                "The four pulmonary veins"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-18",
              question: "Thymes is found in human body",
              options: [
                "In the medulla oblongata",
                "In the mediastinum if the upper Thorax",
                "Both a and b",
                "None of these"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-19",
              question: "White blood cells picking up foreign bodies from the blood stream is an example of",
              options: [
                "Pinocytosis",
                "Exocytosis",
                "Phagocytosis",
                "None of the above mentioned"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-20",
              question: "The following are found in both arteries and capillaries",
              options: [
                "Endothelial cells",
                "Collagen fibres",
                "Elastic fibres",
                "Smooth muscle cells"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-21",
              question: "The possible cause of arthclerosis are",
              options: [
                "Hypertension",
                "High serum cholesterol level",
                "Family history of arterial diseases",
                "Physical in activity",
                "All"
              ],
              answer: 4
            },
            {
              id: "testmoz-bio-22",
              question: "During ventricular systole",
              options: [
                "Oxygenated blood is pumped into the and deoxygenated blood is pump into the pulmonary vein",
                "Oxygenated blood is pumped into the Pulmonary artery and deoxygenated blood is pumped into the aorta",
                "Oxygenated blood is pumped into the aorta and deoxygenated blood is pumped into the Pulmonary artery",
                "Oxygenated blood is pumped into the Pulmonary artery and deoxygenated blood is pump into the Pulmonary vein"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-23",
              question: "Which of the following statement based describe the function of sianaatrial node",
              options: [
                "It sends our electrical impulses to ventricles to contract",
                "It is present at Upper end of the left Atrium",
                "It consists of small number of diffusely oriented cardiac fibres",
                "It sends out electrical impulses to atrial muscles causing both atria to contract"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-24",
              question: "Outer valves of heart are called",
              options: [
                "Tricuspid valve",
                "Semilunar",
                "Semillunar valve",
                "Bicuspid valve"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-25",
              question: "Elastic fibres and muscles are absent in",
              options: [
                "Arteries",
                "Veins",
                "Capillaries",
                "Present in all"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-26",
              question: "The open type circulatory system is present in",
              options: [
                "Humans",
                "Fishes",
                "Arthropods",
                "None of the above mentioned"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-27",
              question: "Sap ascends in Woody plants because of the root pressure and",
              options: [
                "Transpiration pull",
                "Capillarity",
                "Molecular adhesion",
                "Photosynthesis"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-28",
              question: "One complete hurt beat consist of one systole and one diastole and last for about",
              options: [
                "0.8 seconds",
                "0.2 seconds",
                "0.4 seconds",
                "0.5 seconds"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-29",
              question: "Water will be absorbed by root hairs when",
              options: [
                "Concentration of solutes in cell sap is high",
                "Plant is rapidly respiring",
                "They are separated from soil by a permeable membrane",
                "Concentration of salts in the soil is high"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-30",
              question: "The oxygen at blood from lungs to heart is transported by the",
              options: [
                "Pulmonary artery",
                "Coronary artery",
                "Pulmonary vein",
                "Jugular vein"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-31",
              question: "Transpiration take place when outer atmosphere has",
              options: [
                "Percentage of moisture more than data of stomatal cavity",
                "Percentage of moisture less than data of stomatal cavity",
                "Percentage of moisture equal in atmosphere and stomatal cavity",
                "High percentage of moisture"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-32",
              question: "Deficiency of which element causes yellowing in plants",
              options: [
                "Magnesium",
                "Iron",
                "Chlorine",
                "Oxygen"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-33",
              question: "Pulse is found in",
              options: [
                "Arteries",
                "Capillaries",
                "Veins",
                "Both a and b"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-34",
              question: "Blood is collected from legs by",
              options: [
                "Hepatic Vein",
                "Vena cava",
                "Renal vein",
                "Iliac vein"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-35",
              question: "The face in which bicuspid and tricuspid valve open and semilunar valve close which produce second heart sound dubbed this phase is known as",
              options: [
                "Atrial diastole",
                "Ventricular diastole",
                "Ventricular sistella",
                "Contraction of heart"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-36",
              question: "Which is a macro molecule found in blood",
              options: [
                "Hemoglobin",
                "Creatinine",
                "Plasma",
                "Plasmids"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-37",
              question: "In the Osmosis water molecule move from area of",
              options: [
                "Higher solute concentration to lower solute concentration",
                "Lower solvent to higher solute concentration",
                "Lower solute concentration to higher solute concentration",
                "All of these"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-38",
              question: "Arteries are based defined as the vessel which",
              options: [
                "Carry blood away from the heart to different organs",
                "Breakup into capillaries which reunite to form a vein",
                "Carry blood from one visceral organ to in other visceral organ",
                "Supply oxygenated blood to different organs"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-39",
              question: "Pulmonary circulation is required for",
              options: [
                "Nutrient supply to lungs",
                "Elimination of waste product from the lungs",
                "Oxygenation of deoxygenated blood",
                "Nutrients supply to heart"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-40",
              question: "Which statement is correct about atria at systole",
              options: [
                "Atria relax and ventricles contract",
                "Atria contract and ventricle also contract",
                "Atria and ventricles are relaxed",
                "Ventricles remain relax while artria contract"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-41",
              question: "Inferior Vena cover receive blood from all of the following except",
              options: [
                "Hepatic portal veins",
                "Renal veins",
                "Hepatic veins",
                "Iliac veins"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-42",
              question: "About 55% of the blood volume is",
              options: [
                "Plasma",
                "Blood proteins",
                "Blood cells",
                "Both"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-43",
              question: "Which of these is common in both lymph vessels and veins",
              options: [
                "Both have small bore",
                "Both have low blood pressure",
                "Both have valves",
                "Both are communicated"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-44",
              question: "Lymph nodes may be located in the human body in the tissue of the",
              options: [
                "Stomach and brain",
                "Ventricle and Atrium",
                "Groin and neck",
                "Thyroid gland and adrenal gland"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-45",
              question: "Which statement Consulting transpiration is correct",
              options: [
                "Plant transpire more rapidly in reduce light",
                "Humidity and rate of transpiration are directly proportional to each other",
                "Rise in temperature increase in kinetic energy Of water which requires in rapid transpiration",
                "None of the above"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-46",
              question: "Transpiration rates are greatest when the leaf sales are fully turgid when the relative humidity in the atmosphere is",
              options: [
                "High",
                "Low",
                "Intermediate",
                "None"
              ],
              answer: 1
            },
            {
              id: "testmoz-bio-47",
              question: "Which valve action result from an increase in pressure in the ventricles of the heart",
              options: [
                "The closing of all heart valves",
                "The closing of semilunar valves",
                "Opening of bicuspid valve",
                "The opening of semilunar valves"
              ],
              answer: 3
            },
            {
              id: "testmoz-bio-48",
              question: "In roots the apoplast pathway of water is destructed when water reaches",
              options: [
                "Plasmodesmata",
                "Cortex",
                "Endodermis",
                "Pitb"
              ],
              answer: 2
            },
            {
              id: "testmoz-bio-49",
              question: "Which of the following blood vessel have the highest pressure of blood",
              options: [
                "Arota",
                "Pulmonary arteries",
                "Pulmonary veins",
                "Vena cava"
              ],
              answer: 0
            },
            {
              id: "testmoz-bio-50",
              question: "A sample of blood is taken from an unknown site in a human patient the blood shows in oxygen content equivalent roughly to date of Venus and not the arterial circulation among the following which statement is best described to the blood that was drawn",
              options: [
                "It was drawn from Pulmonary vein and is rich in oxygen",
                "It was drawn from an alveoles and is rich in oxygen",
                "It was drawn from the large branches of the Pulmonary artery",
                "It was drawn from the superior Vena cava and will enter the heart at the left ventricle"
              ],
              answer: 3
            },
     {
            id: "testmoz-bio-1",
            question: "Specific immunity is the result of",
            options: [
              "First line of Defence",
              "Second line of Defence",
              "Third line of Defence",
              "Fourth line of Defence"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-2",
            question: "Antibiotics are proteins and made up of how many polypeptide chains",
            options: [
              "One",
              "Three",
              "Two",
              "Four"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-3",
            question: "Variable amino acid sequences in antibody molecule are found in",
            options: [
              "Both light chains only",
              "One heavy and one light chain",
              "Both heavy change only",
              "Both heavy and light chains"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-4",
            question: "Type of immunity that is present by birth is called",
            options: [
              "Innate immunity",
              "Adaptive immunity",
              "Acquired immunity",
              "Secondary immunity"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-5",
            question: "Which one receives a booster shot for polio which type of cell is more directly stimulated",
            options: [
              "Killer T cells",
              "Memory cells",
              "Phagocytosis",
              "Suppressor cells"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-6",
            question: "Which one of the following glands is involved in the production of lymphocytes",
            options: [
              "Pineal",
              "Thymus",
              "Pituitary",
              "Adrenal"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-7",
            question: "In immuno globulins antibodies to change and to heavy chains are linked to each other by",
            options: [
              "Covalent bonds",
              "Disulphide bonds",
              "Hydrogen bonds",
              "Ionic bonds"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-8",
            question: "Immunity is generally destroyed in",
            options: [
              "All infections",
              "HIV infections",
              "All inflammations",
              "All diseases"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-9",
            question: "All are true true about passive immunization except",
            options: [
              "Antibodies are injected",
              "Anti-seera are injected",
              "Anti toxins are injected",
              "Antibodies are produced"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-10",
            question: "Passive immunity is used against",
            options: [
              "Malaria",
              "Dengue",
              "Typhoid",
              "Tetanus"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-11",
            question: "Autoimmune disease act is the principle of",
            options: [
              "Self against antigens",
              "Against against self",
              "Self against self",
              "Antigen self destroyed"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-12",
            question: "When B cells are presented with antigen they differentiated into",
            options: [
              "T cells",
              "Helper T cells",
              "Plasma cells",
              "Bursa cells"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-13",
            question: "A person got an infection he became ill but then he survived what do you think which type of immunity he would have developed",
            options: [
              "Naturally induced active immunity",
              "Active immunity",
              "Artificially induced active immunity",
              "Paise immunity"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-14",
            question: "Antibodies are in example of which type of proteins",
            options: [
              "Fibrous",
              "Globular",
              "Catalytic",
              "Regulatory"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-15",
            question: "Which part of antibody recognises the antigen during immune response",
            options: [
              "Heavy part",
              "Constant part",
              "Light part",
              "Variable part"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-16",
            question: "Cyclosporine is used to inhibit which type of response",
            options: [
              "Cell mediated",
              "Cell humoral",
              "Cell signaling",
              "Cell to cell"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-17",
            question: "Phagocytosis usually involves",
            options: [
              "First line of Defence",
              "Second line of Defence",
              "3rd line of Defence",
              "4th line of defence"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-18",
            question: "Immunity is the capacity of body to do all except",
            options: [
              "Recognise antigen",
              "Mobilize lymphocytes",
              "Increase antibodies production",
              "Mobilize hemoglobin"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-19",
            question: "The histamine is produced by which one of the following cells",
            options: [
              "Basophils",
              "Neutrophils",
              "Monocytes",
              "Lymphocytes"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-20",
            question: "Plasma cells are",
            options: [
              "The same is memory cells",
              "Formed from blood plasma",
              "B cells that actively secreting antibody",
              "Inactive cell carried in the plasma"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-21",
            question: "Vaccination is not available for which of the following diseases",
            options: [
              "Bacterial diseases",
              "Viral diseases",
              "Fungal diseases",
              "Microbial diseases"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-22",
            question: "Foreign substance which is stimulates the formation of antibodies",
            options: [
              "Antibiotics",
              "Archae",
              "Antigen",
              "None of the above mentioned"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-23",
            question: "Fever",
            options: [
              "Decreases interferon production",
              "Decreases the concentration of iron in the blood",
              "Decreases the activity of phagocytes",
              "Decreases the inflammation"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-24",
            question: "Vaccination is an example of",
            options: [
              "Natural active immunity",
              "Artificial active immunity",
              "Natural passive immunity",
              "Artificial passive immunity"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-25",
            question: "T Lymphocytes recognise antigen and attack micro organisms or transplanted organs and tissues this effect is called",
            options: [
              "Cell mediated response",
              "Active immunity",
              "Humoral immune response",
              "Passive immunity"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-26",
            question: "Vaccine is prepared by using a microorganisms that shows association to diseases antigen humorous immune response is generated by",
            options: [
              "B lymphocytes",
              "Basophils"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-27",
            question: "All are examples of first line of Defence except",
            options: [
              "Skin",
              "Stomach HCL",
              "Mucus",
              "Antibodies"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-28",
            question: "In which response be cell produces plasma cells that synthesized antibodies and release in blood plasma and tissue fluid",
            options: [
              "Cell mediated",
              "Hormonal",
              "Humoral",
              "Phototactic"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-29",
            question: "To combat the active infections of tetanus rabies and snakes which method of immunization is used",
            options: [
              "Active",
              "Active artificial",
              "Humoral",
              "Passive"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-30",
            question: "Lymphocytes function is",
            options: [
              "Produce histamine and heparin",
              "Produce antibodies",
              "Initiate blood clotting",
              "Engulf bacteria"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-31",
            question: "Now a days every new born gets regular shots of vaccine ........ for polio it contains for polio to make a child immune against this disease",
            options: [
              "Anticira",
              "Antibiotics",
              "Antibodies",
              "Antigens"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-32",
            question: "The prevention of disease by artificial activation of immune response is possible by",
            options: [
              "Gene therapy",
              "Drugs",
              "Vaccines"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-33",
            question: "Stronger and specific immunity is found in",
            options: [
              "All animals",
              "Invertebrates only",
              "Humans only",
              "All vertebrates"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-34",
            question: "A vaccine contains",
            options: [
              "Antigens",
              "Macrophages",
              "Antibodies",
              "All a b c"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-35",
            question: "Common feature of sale humorous response and cell mediated response are",
            options: [
              "Recognition of antigen",
              "Production of antibodies",
              "Tissue rejection",
              "Plasma clone formation"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-36",
            question: "In addition to the immune system we are protected from diseases by",
            options: [
              "Normal body temperature",
              "Hormones",
              "Antigen",
              "Mucus membrane and cilia"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-37",
            question: "B Lymphocytes are named due to their relationship with",
            options: [
              "Blood",
              "Bone marrow",
              "Bursa of fabricius",
              "Bile duct"
            ],
            answer: 2
          },
   {
            id: "testmoz-bio-1",
            question: "Like Pepsin trypsin is also secreted as an inactive tripsinogen which is activated by",
            options: [
              "Enterokinase",
              "Lipase",
              "Chyme",
              "Erypsin"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-2",
            question: "The category of organisms which are able to make their own food is called",
            options: [
              "Heterotrophs",
              "Autotrophs",
              "Consumers",
              "Decomposers"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-3",
            question: "Lipid emulsification is done by",
            options: [
              "Pancreatic juice",
              "Bile",
              "Gastric juice",
              "Intestinal juice"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-4",
            question: "What is the pH of fresh HCL",
            options: [
              "1.5",
              "2 to 3",
              "5 to 7",
              "4 to 5"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-5",
            question: "A human beings what is the function of amylase in digestion",
            options: [
              "Digestion of triglycerides",
              "Digestion of lipids",
              "Digestion of all types of food",
              "Digestion of carbohydrates"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-6",
            question: "Which plant is insectivorous",
            options: [
              "Venus fly trap",
              "Rose",
              "Banana",
              "Vinson rosea"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-7",
            question: "The bowlers enters the oesophagus not the trachea due to presence of",
            options: [
              "Roof Palate",
              "Mouth",
              "Epiglottis",
              "Buccal cavity"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-8",
            question: "In the interesting the branches of lymph capillaries within villi are called",
            options: [
              "Lacteals",
              "Lymph",
              "Lymphatic vessels",
              "Lymph nodes"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-9",
            question: "What is the length of Duodenum in centimetres",
            options: [
              "15 to 20",
              "20 to 25",
              "21 to 25",
              "25 to 30"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-10",
            question: "What is true about pepsin",
            options: [
              "It is produced in inactivated form",
              "It produced from oesophagus",
              "It requires basic medium",
              "It is an ap enzyme"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-11",
            question: "The enzyme found in Celerio is responsible for the digestion of carbohydrates",
            options: [
              "Lysozyme",
              "Amylase",
              "Pepsin",
              "Tripsinogen"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-12",
            question: "Protein components of food are digested by enzymatic secretion of",
            options: [
              "Goblet cells",
              "Parietal cells",
              "Zymogen cells",
              "Oxyntic cells"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-13",
            question: "Which of the following would most great tea increase the activity of an enzyme functioning in small interesting",
            options: [
              "Decrease the temperature",
              "Increase the amount of substrate",
              "Decrease the PH",
              "Increase the amount of enzymes"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-14",
            question: "At the junction between oesophagus and the stomach there is a special ring of muscles called",
            options: [
              "Cardiac Sphincter",
              "Illoleic sphincter",
              "Esophagus inspector",
              "Pyloric sphincter"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-15",
            question: "Pair of salivary glands located behind the Jaws called",
            options: [
              "Sab lingual gland",
              "Sub maxillary gland",
              "Parotid glands",
              "Adrenal gland"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-16",
            question: "Important process holozoic nutrition includes",
            options: [
              "Ingestion",
              "Digestion",
              "Assimilation",
              "Egestion",
              "All of these"
            ],
            answer: 4
          },
          {
            id: "testmoz-bio-17",
            question: "Sundew is an example of",
            options: [
              "Autotrophic plant",
              "Parasitic plant",
              "Saprophytic plant",
              "Carnivorous plant"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-18",
            question: "It’s length is 2.4m and comprises 2/5 of small intestine",
            options: [
              "Illeum",
              "Lipase",
              "Jejunum",
              "Duodenum"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-19",
            question: "Gastric glands are made up of how many type of cells",
            options: [
              "Two",
              "Three",
              "Four",
              "Five"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-20",
            question: "Saliva Is basically composed of water mucus amylase and",
            options: [
              "Sodium Bicarbonate",
              "Sodium hydroxide",
              "Hydrocarbons",
              "Sodium chloride"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-21",
            question: "What are the part of gastric gland which produce hydrochloric acid",
            options: [
              "Parietal cells",
              "Goblet cells",
              "Chief cells",
              "Zymogen cells"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-22",
            question: "Appendix is finger like processes arises from",
            options: [
              "Colon",
              "Rectum",
              "Caecum",
              "Small intestine"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-23",
            question: "A condition with abnormal amount of fat is called",
            options: [
              "Anorexia",
              "Boutlism",
              "Piles",
              "Obesity"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-24",
            question: "An example of partial root parasite",
            options: [
              "Viscum",
              "Laurenthus",
              "Cuscuta",
              "Sandalwood tree"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-25",
            question: "Hormone secreted from dudinal mucosa date changes the inactive trypsiongen in to trypsin",
            options: [
              "Peptone",
              "Ecdysone",
              "Enterokinase",
              "Amylase"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-26",
            question: "The term chyme is applied to",
            options: [
              "Semi digestive food in oral cavity",
              "Semi solid food in stomach",
              "Semi digested food in the small intestine",
              "Completely digested food in the last part of the small intestine"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-27",
            question: "The bile pigment bilirubin and beliverdin in our formed by The breakdown of hemoglobin of worn out red blood cells in the",
            options: [
              "Spleen",
              "Heart",
              "Kidney",
              "Lungs",
              "Liver"
            ],
            answer: 4
          },
          {
            id: "testmoz-bio-28",
            question: "Trypsinogen is activated to trypsin in by",
            options: [
              "Kinases",
              "HCl",
              "Mucus",
              "Enterkinase"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-29",
            question: "All of the following are parts of large intestine except",
            options: [
              "Colon",
              "Jejunum",
              "Rectum",
              "Caecum"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-30",
            question: "In coughing the air is forcibly blown larynx while an sneezing it is blown through",
            options: [
              "Mouth",
              "Nasal cavities",
              "Both",
              "None"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-31",
            question: "A secretions did digest both carbohydrates and proteins is",
            options: [
              "Ptylain",
              "Saliva",
              "Pepsin",
              "Pancreatic juice"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-32",
            question: "Largest gland in human body",
            options: [
              "Liver",
              "Adrenals",
              "Thymus",
              "Parotid"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-33",
            question: "The semi solid mass in stomach is known as",
            options: [
              "Bolus",
              "Serum",
              "Food",
              "Chyme"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-34",
            question: "Bacteria live in human body for enzymetic source and vitamin",
            options: [
              "Enterococcus",
              "Pseudomonas",
              "Campylobacter",
              "Spirochete"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-35",
            question: "Hepatic and pancreatic secretions are also stimulated by a hormone called which of the following hormone stimulates the secretion of pancreatic juices from pancreas and liver",
            options: [
              "Gastrin",
              "Secretin",
              "Insulin",
              "Glucogan"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-36",
            question: "Incomplete or imperfect digestion is known as which of the following",
            options: [
              "Obesity",
              "Anorexia nervous",
              "Bulimia nervous",
              "Dyspepsia"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-37",
            question: "Choose the function is relevant to oral cavity",
            options: [
              "Grinding",
              "Digestion",
              "Lubrication",
              "Absorption"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-38",
            question: "The utilisation of absorbed food molecule within the cell to provide energy for tissue building is called",
            options: [
              "Digestion",
              "Assimilation",
              "Egestion",
              "Absorption"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-39",
            question: "All of the following are functions of the liver except",
            options: [
              "Produce bile",
              "Store glycogen",
              "Secret insulin",
              "Store vitamin"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-40",
            question: "Loss of weight take place due to",
            options: [
              "Anorexia nervosa",
              "Bulimia nervosa",
              "A and b",
              "Constipation"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-41",
            question: "The pancreas is stimulate to secret its digestive enzyme by",
            options: [
              "The liver",
              "Bile",
              "The Gal bladder",
              "Secretin"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-42",
            question: "Number of salivary glands found in human oral cavity",
            options: [
              "3",
              "4",
              "6",
              "2"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-43",
            question: "The nodules of lymphoid tissue In The Wall of interstitial tract termed is",
            options: [
              "Graves region",
              "Peyers patches",
              "Both",
              "None"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-44",
            question: "What role does amylase play in digestion",
            options: [
              "It kill bacteria of stomach",
              "It converts soluble milk proteins into insoluble proteins",
              "It converts starch and glycogen into maltose",
              "It activate gastric glands to produce gastric juice",
              "It converts protein into short chain polypeptides"
            ],
            answer: 4
          },
          {
            id: "testmoz-bio-45",
            question: "The function of Goblet cells is to secret",
            options: [
              "Gastric",
              "Hydrochloric acid",
              "Pepsinogen",
              "Mucus"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-46",
            question: "Digestive system consist of different layers the innermost layer is known as",
            options: [
              "Sub mucosa",
              "Mucosa",
              "Muscularis",
              "Serosa"
            ],
            answer: 1
          },
          {
            id: "testmoz-bio-47",
            question: "During swallowing the food travels from oral cavity to the stomach by the way of oesophagus",
            options: [
              "Very quickly",
              "By anti peristalsis",
              "Pushed down by pharynx",
              "Moving due to peristalsis"
            ],
            answer: 3
          },
          {
            id: "testmoz-bio-48",
            question: "Food enters from stomach into small intestine through",
            options: [
              "Pyloric sphincter",
              "Cardiac sphincter",
              "Semilunar valve",
              "Diaphram"
            ],
            answer: 0
          },
          {
            id: "testmoz-bio-49",
            question: "Pancreatic zymogenes are only activated when they reached at",
            options: [
              "Stomach",
              "Pancreas",
              "Small intestine",
              "Large intestine"
            ],
            answer: 2
          },
          {
            id: "testmoz-bio-50",
            question: "The muscles of the stomach was through mixed up the food with gastric juices use the result Semi solid or semi liquid material is called",
            options: [
              "Bolus",
              "Chyle",
              "Mucus",
              "Chyme"
            ],
            answer: 3
          }
        ];
  
  // ==========================================
  // PHYSICS QUESTIONS
  // ==========================================
  
  export const physicsQuestions: Question[] = [
    {
          id: "bumhs-2024-phys-125",
          question: "Which of the following is a vector quantity?",
          options: [
            "Electric Flux",
            "Work done",
            "Electric Potential Energy",
            "None of the given options"
          ],
          answer: 3,
          explanation: "Electric flux, work done, and electric potential energy are all scalar quantities."
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
          explanation: "A net force can change an object's speed (acceleration/deceleration) as well as its direction of motion."
        },
        {
          id: "bumhs-2025-phys-127",
          question: "If vector A = 2î + ĵ + 3k̂ is perpendicular to B = î + ĵ + xk̂ then x =",
          options: [
            "3",
            "-3",
            "1",
            "-1"
          ],
          answer: 3,
          explanation: "Perpendicular vectors have a dot product of zero: A · B = (2)(1) + (1)(1) + (3)(x) = 2 + 1 + 3x = 0 → 3x = -3 → x = -1."
        },
        {
          id: "bumhs-2025-phys-136",
          question: "The dot product of two vectors is negative. If one vector lies along the positive x-axis, then the projection of second vector is along:",
          options: [
            "x-axis",
            "-x-axis",
            "y-axis",
            "-y-axis"
          ],
          answer: 1,
          explanation: "A negative dot product implies an angle greater than 90° (in the 2nd or 3rd quadrant relative to the positive x-axis), so its component/projection along the x-axis points in the negative x direction (-x-axis)."
        },
        {
          id: "bumhs-2025-phys-144",
          question: "The result of vector product of two vectors:",
          options: [
            "number",
            "unit",
            "number and unit",
            "magnitude and a unit vector"
          ],
          answer: 3,
          explanation: "A vector product yields a vector quantity, which can be expressed as its magnitude times a unit vector pointing in its direction."
        },
        {
          id: "bumhs-2025-phys-162",
          question: "Dot product of two unit vectors is:",
          options: [
            "1",
            "0",
            "cosθ",
            "AB cosθ"
          ],
          answer: 2,
          explanation: "For two unit vectors simple formula is |u1||u2|cosθ = (1)(1)cosθ = cosθ."
        },
        {
          id: "siba-2025-phys-133",
          question: "If A = (aî + bĵ) and B = 4(aî + bĵ), then the magnitude of A × B is:",
          options: [
            "4(a² + b²)",
            "4abk̂",
            "8(a + b)",
            "0"
          ],
          answer: 3,
          explanation: "Vector B is parallel to Vector A (B = 4A). The cross product of any two parallel vectors is 0."
        },
        {
          id: "siba-2025-phys-149",
          question: "Consider these two vectors A = 2î + 3ĵ and B = -6î + 4ĵ. The angle between these two vectors is:",
          options: [
            "0°",
            "90°",
            "120°",
            "180°"
          ],
          answer: 1,
          explanation: "Dot product A · B = (2)(-6) + (3)(4) = -12 + 12 = 0. Since the dot product is 0, the vectors are orthogonal (90°)."
        },
        {
          id: "siba-2024-phys-170",
          question: "A force of magnitude 10N is acting along x-axis, its component along y-axis is:",
          options: [
            "Zero",
            "5N",
            "20N",
            "10N",
            "25N"
          ],
          answer: 0,
          explanation: "A vector lying purely along the x-axis has θ = 0°, making its perpendicular y-component (F sin 0°) equal to zero."
        },
      // --- BUMHS 2024 PHYS ---
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
          explanation: "Using v² = u² + 2gh with h = 1.25 m: v = √(2 × 10 × 1.25) = √25 = 5 m/s (or if g = 9.8 m/s², v = √(24.5) ≈ 4.95 m/s)."
        },
        {
          id: "bumhs-2024-phys-133",
          question: "A person's life was saved in a car accident due to airbags system. During that car accident, airbags expanded in front of head of that person. If that car was not equipped with airbags then movement of head would be stopped by windshield in much faster time. Airbags saved life because it:",
          options: [
            "causes much greater force for longer time",
            "causes much greater force for smaller time",
            "causes much smaller force for longer time",
            "causes much smaller force for smaller time"
          ],
          answer: 2,
          explanation: "By increasing the time duration of impact (Δt), the force experienced by the head (F = Δp / Δt) is significantly reduced."
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
          explanation: "Force causes acceleration, which can change an object's speed as well as its direction of motion."
        },
        {
          id: "bumhs-2024-phys-174",
          question: "A stone is dropped from a cliff. The graph (Position or velocity versus time) which best represents motion when it falls",
          options: [
            "[curved upward position-time]",
            "[straight line velocity-time]",
            "[straight line position-time]",
            "[curved upward velocity-time]"
          ],
          answer: 1,
          explanation: "Under uniform acceleration due to gravity, velocity increases linearly with time (v = gt), yielding a straight-line velocity-time graph."
        },
      
        // --- BUMHS 2025 PHYSICS ---
        {
          id: "bumhs-2025-phys-143",
          question: "A rolling cart collides with a stationary cart of equal mass. After the collision, both move together, momentum is still conserved because:",
          options: [
            "Masses are equal",
            "No external force acts on the system",
            "Both move with the same speed",
            "Internal forces are very small"
          ],
          answer: 1,
          explanation: "Linear momentum of a system is conserved if no net external force acts on it."
        },
        {
          id: "bumhs-2025-phys-146",
          question: "The average speed of a body in a given interval of time is equal to the average velocity, if:",
          options: [
            "The speed of the body remains uniform.",
            "The body moves with constant acceleration.",
            "The body moves along a straight path.",
            "The body returns to its starting point."
          ],
          answer: 2,
          explanation: "When a body moves along a straight path without turning back, total distance equals total displacement magnitude, making average speed equal to average velocity."
        },
        {
          id: "bumhs-2025-phys-152",
          question: "A 4kg box initially at rest is pulled along a frictionless surface by a constant horizontal force of 8N. After 15 seconds, its kinetic energy is:",
          options: [
            "120 J",
            "600 J",
            "960 J",
            "1800 J"
          ],
          answer: 3,
          explanation: "a = F/m = 8/4 = 2 m/s². Final velocity v = u + at = 0 + 2(15) = 30 m/s. KE = 0.5 × m × v² = 0.5 × 4 × (30)² = 1800 J."
        },
        {
          id: "bumhs-2025-phys-160",
          question: "A ball is thrown vertically upward with a certain velocity making an angle with the horizontal (neglecting air resistance). With the passage of time horizontal component of velocity ______.",
          options: [
            "Increases",
            "Decreases",
            "Remains same",
            "First decreases then increases"
          ],
          answer: 2,
          explanation: "In projectile motion (neglecting air resistance), no horizontal acceleration acts, so v_x = v cosθ remains constant."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-88",
          question: "A boat moves 3 km north first and then 4 km east. Another boat moves 4 km east first and then 3 km north. Which statement is CORRECT about their final displacements?",
          options: [
            "Both boats have the same displacement vector",
            "The first boat’s displacement is greater because it was moving north first",
            "The second boat’s displacement is greater because it travelled east first",
            "Both boats end at different positions but cover the same distance"
          ],
          answer: 0,
          explanation: "Vector addition is commutative: 3ĵ + 4î = 4î + 3ĵ. Both end up at position (4î + 3ĵ) relative to the start, sharing identical magnitude (5 km) and direction."
        },
        {
          id: "kmu-mdcat-2025-phys-89",
          question: "The area under the line on a displacement-time graph of a car moving with uniform velocity would be:",
          options: [
            "Rectangle",
            "Triangle",
            "Trapezium",
            "Parallelogram"
          ],
          answer: 0,
          explanation: "On a displacement-time graph for uniform velocity, displacement is represented by a horizontal/straight-line path; the area beneath a flat displacement line over a time interval forms a rectangle."
        },
        {
          id: "kmu-mdcat-2025-phys-90",
          question: "A car starts from rest and moves with a uniform acceleration of 3 m/s². What will be its velocity after 5 seconds?",
          options: [
            "8 m/s",
            "12 m/s",
            "15 m/s",
            "18 m/s"
          ],
          answer: 2,
          explanation: "Using v = u + at: v = 0 + (3)(5) = 15 m/s."
        },
        {
          id: "kmu-mdcat-2025-phys-91",
          question: "A passenger is standing in a stationary bus. When the bus suddenly starts moving forward, the passenger falls backward. Which phenomenon best explains this observation?",
          options: [
            "Friction",
            "Gravity",
            "Inertia",
            "Deceleration"
          ],
          answer: 2,
          explanation: "By Newton's first law (inertia), the passenger's body tends to remain at rest while the bus moves beneath them."
        },
        {
          id: "kmu-mdcat-2025-phys-92",
          question: "A ball is projected at an angle 45° with an initial speed of 20 m/s on earth. How does R₀ (Range without air resistance) compare to Rₐ (Range with air resistance)?",
          options: [
            "R₀ will be greater than Rₐ because air resistance reduces horizontal speed",
            "R₀ will be equal to Rₐ because gravity is unchanged",
            "Rₐ will be lesser than R₀ because air resistance reduces horizontal speed",
            "Rₐ will be lesser than R₀ because air resistance is random"
          ],
          answer: 0,
          explanation: "Air resistance exerts drag that slows down horizontal speed and reduces overall flight time, so ideal range R₀ is greater than actual range Rₐ."
        },
        {
          id: "kmu-mdcat-2025-phys-93",
          question: "A 0.02 kg bullet moving at 300 m/s embeds itself in a 2 kg block at rest on a smooth surface. What is the velocity of the block-bullet system just after an impact?",
          options: [
            "2 m/s",
            "3 m/s",
            "4 m/s",
            "5 m/s"
          ],
          answer: 1,
          explanation: "By conservation of momentum: (0.02 × 300) = (2 + 0.02)v → 6 = 2.02 v → v ≈ 2.97 m/s ≈ 3 m/s."
        },
        {
          id: "kmu-mdcat-2025-phys-94",
          question: "Which of the following statement about projectile motion is CORRECT?",
          options: [
            "The horizontal velocity of a projectile changes constantly due to gravity",
            "The vertical velocity of a projectile remains constant throughout the flight",
            "At the highest point, the vertical velocity of the projectile is zero, but the horizontal velocity remains unchanged",
            "The acceleration of the projectile is zero at the peak of its trajectory"
          ],
          answer: 2,
          explanation: "At peak altitude, vertical velocity drops momentarily to zero, while horizontal velocity remains constant (neglecting air drag)."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-123",
          question: "A car is moving in a circular path at a constant speed. What provides the necessary centripetal force to keep the car moving in this path?",
          options: [
            "The car’s inertia resisting any change in direction",
            "The car’s mass pulling it towards the centre of the circle",
            "The engine’s power pushing the car forward",
            "The friction between the tyres and the road"
          ],
          answer: 3,
          explanation: "Friction between tyres and road surface provides the inward radial force required for circular turning."
        },
        {
          id: "kmu-phys-24-125",
          question: "__________ is the natural tendency of an object to remain at rest or in motion with constant velocity?",
          options: [
            "Friction",
            "Inertia",
            "Mass",
            "Weight"
          ],
          answer: 1,
          explanation: "Inertia is the property of matter that resists changes in its velocity."
        },
        {
          id: "kmu-phys-24-126",
          question: "A car in motion hits and gets crashed into a tree trunk, what is NOT conserved?",
          options: [
            "Kinetic energy alone",
            "Momentum alone",
            "Momentum and kinetic energy both",
            "Neither kinetic energy nor momentum"
          ],
          answer: 0,
          explanation: "In a crash, kinetic energy is transformed into sound, heat, and deformation (inelastic collision), so KE is not conserved. Total system momentum is conserved if external forces are accounted for."
        },
        {
          id: "kmu-phys-24-127",
          question: "The vertical and horizontal component of the projectile motion are",
          options: [
            "Correlated with each other",
            "Dependent on each other",
            "Independent of each other",
            "Associated with each other"
          ],
          answer: 2,
          explanation: "Horizontal and vertical motions of a projectile operate independently of one another."
        },
        {
          id: "kmu-phys-24-128",
          question: "A ball is kicked horizontally from the top of a 10m high cliff with an initial speed of 15m/s. After 2 seconds, which of the following statement describes the ball’s horizontal and vertical components?",
          options: [
            "The horizontal velocity is 15m/s while vertical velocity is 20m/s downwards",
            "The horizontal velocity is 15m/s while vertical velocity is 15m/s downwards",
            "The horizontal velocity is 30m/s while vertical velocity is 20m/s downwards",
            "The horizontal velocity is 15m/s while vertical velocity is 0m/s"
          ],
          answer: 0,
          explanation: "v_x stays 15 m/s throughout. v_y = u_y + gt = 0 + (10)(2) = 20 m/s downwards."
        },
      
        // --- SIBA 2025 PHYS prep ---
        {
          id: "siba-2025-phys-143",
          question: "In circular motion, if angular displacement is kept constant, decreasing the radius will:",
          options: [
            "Increase linear displacement",
            "Increase linear velocity",
            "Decrease linear displacement",
            "Not affect linear displacement"
          ],
          answer: 2,
          explanation: "Linear displacement s = rθ. For constant angular displacement θ, decreasing radius r reduces linear displacement s."
        },
        {
          id: "siba-2025-phys-150",
          question: "A displacement time graph is a straight line inclined up at angle of 45° with X-axis, velocity of body according to this graph is:",
          options: [
            "Increasing",
            "Decreasing",
            "Constant",
            "Decreasing at start and then may decrease"
          ],
          answer: 2,
          explanation: "A straight line on a displacement-time graph represents a constant slope, meaning constant velocity (v = tan 45° = 1)."
        },
        {
          id: "siba-2025-phys-151",
          question: "A 150 kg car has its velocity reduced from 20 m/s to 10 m/s in 3.0 sec. How large was the average retarding force?",
          options: [
            "500 N",
            "2500 N",
            "1500 N",
            "1000 N"
          ],
          answer: 0,
          explanation: "a = (10 - 20) / 3 = -3.33 m/s². Retarding Force F = m × a = 150 × 3.33 = 500 N."
        },
        {
          id: "siba-2025-phys-156",
          question: "A body moves along a semicircular path of radius 10 m from one end of the diameter to the other. The ratio of distance to displacement is:",
          options: [
            "π : 1",
            "1 : π",
            "π : 2",
            "2 : π"
          ],
          answer: 2,
          explanation: "Distance along semicircle = πr. Displacement across diameter = 2r. Ratio = πr / 2r = π : 2."
        },
        {
          id: "siba-2025-phys-157",
          question: "A body is projected with speed v making an angle θ with the horizontal and covers a horizontal range R. If its speed is doubled, the new range will be:",
          options: [
            "R/2",
            "R",
            "2R",
            "4R"
          ],
          answer: 3,
          explanation: "Range R = (v² sin 2θ)/g. Since R is proportional to v², doubling v makes the new range (2v)² = 4 times R."
        },
        {
          id: "siba-2025-phys-158",
          question: "A ball of mass m strikes a wall and rebounds with the same speed in the opposite direction, taking the initial direction as positive. The change in momentum of the ball is:",
          options: [
            "0",
            "mv",
            "-2mv",
            "-mv"
          ],
          answer: 2,
          explanation: "Initial momentum p₁ = +mv. Final momentum p₂ = -mv. Change in momentum Δp = p₂ - p₁ = -mv - mv = -2mv."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-131",
          question: "Time rate of change of linear momentum is equal to:",
          options: [
            "Moment of force",
            "Force",
            "Angular momentum",
            "Torque",
            "Moment"
          ],
          answer: 1,
          explanation: "According to Newton's second law, F = dp/dt."
        },
        {
          id: "siba-phy-24-132",
          question: "In projectile motion, the horizontal component of acceleration is:",
          options: [
            "Zero",
            "9.8 m/s²",
            "19.6 m/s²",
            "4.9 m/s²"
          ],
          answer: 0,
          explanation: "There is no horizontal force acting on a projectile (ignoring air drag), so a_x = 0."
        },
        {
          id: "siba-phy-24-149",
          question: "If the instantaneous velocity of a body is equal to the average velocity, then:",
          options: [
            "The body moves with decreasing velocity",
            "The body moves with variable acceleration",
            "The body moves with uniform velocity",
            "The body moves with uniform acceleration",
            "The body moves with increasing velocity"
          ],
          answer: 2,
          explanation: "When velocity remains constant throughout (uniform velocity), instantaneous velocity at any instant equal average velocity over any duration."
        },
        {
          id: "siba-phy-24-153",
          question: "A body starts from rest and falls freely under gravity, the distance covered by it in ‘t’ seconds is:",
          options: [
            "0.5gt²",
            "g²t",
            "0.5g²t²",
            "g²t²"
          ],
          answer: 0,
          explanation: "Using s = ut + ½gt² with u = 0 gives s = 0.5gt²."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-143",
          question: "Unequal changes occurring in velocity of a body is called:",
          options: [
            "Uniform acceleration",
            "Uniform velocity",
            "Instantaneous acceleration",
            "Variable acceleration"
          ],
          answer: 3,
          explanation: "When velocity changes by unequal amounts in equal time intervals, acceleration is non-uniform or variable."
        },
        {
          id: "szambu-2025-phys-148",
          question: "A football is kicked with a speed of 20 m/s at an angle of 30° with the horizontal, the maximum height it attains is:",
          options: [
            "5 m",
            "10 m",
            "15 m",
            "20 m"
          ],
          answer: 0,
          explanation: "H = (v² sin²θ)/(2g) = (20² × sin²30°)/(2 × 10) = (400 × 0.25)/20 = 100/20 = 5 m."
        },
        {
          id: "szambu-2025-phys-152",
          question: "A body of mass 2 kg moving with velocity 3 m/s collides with a body of mass 1 kg at rest. If they stick together, their common velocity after collision is:",
          options: [
            "1 m/s",
            "2 m/s",
            "3 m/s",
            "4 m/s"
          ],
          answer: 1,
          explanation: "By conservation of momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)v → (2 × 3) + 0 = (2 + 1)v → 6 = 3v → v = 2 m/s."
        },
        {
          id: "szambu-2025-phys-153",
          question: "Two balls thrown with equal speeds but at different angles cover equal horizontal distance. If one is thrown at an angle of 40°, then the angle of projection of the other is:",
          options: [
            "20°",
            "30°",
            "45°",
            "50°"
          ],
          answer: 3,
          explanation: "Complementary angles of projection (θ and 90° - θ) yield identical horizontal ranges. 90° - 40° = 50°."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-125",
          question: "If kinetic energy of a body becomes four times of its initial value, then the new momentum will",
          options: [
            "become twice of its initial value",
            "become three times of its initial value",
            "become four times of its initial value",
            "remain constant"
          ],
          answer: 0,
          explanation: "Since p = √(2m × KE), if KE is quadrupled, momentum increases by √4 = 2 times."
        },
        {
          id: "szambu-phy-24-127",
          question: "In one dimensional elastic collision of two bodies of same masses, what will happen if moving body collides with the mass which is initially at rest?",
          options: [
            "The collision would become inelastic",
            "Their velocities will be interchanged",
            "Their velocities will remain same",
            "Velocities of both bodies will be zero"
          ],
          answer: 1,
          explanation: "In an elastic collision between two equal masses, the bodies interchange their velocities."
        },
        {
          id: "szambu-phy-24-130",
          question: "The acceleration can be determined by the gradient of",
          options: [
            "Displacement-time graph",
            "Force-time graph",
            "Speed-time graph",
            "Velocity-time graph"
          ],
          answer: 3,
          explanation: "Acceleration is the rate of change of velocity, given by the slope (gradient) of a velocity-time graph."
        },
        {
          id: "szambu-phy-24-138",
          question: "At what angle made by projectile with x-axis, we can get 1/4th of maximum height achieved by projectile?",
          options: [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          answer: 0,
          explanation: "Max height H ∝ sin²θ. Maximum possible H occurs at 90° (sin 90° = 1). For H to be 1/4th of H_max, sin²θ = 1/4 → sinθ = 1/2 → θ = 30°."
        },
        {
          id: "szambu-phy-24-161",
          question: "The quantity of motion present in a body can be measured by",
          options: [
            "Acceleration",
            "Momentum",
            "Speed",
            "Velocity"
          ],
          answer: 1,
          explanation: "Linear momentum (p = mv) measures the quantity of motion in a body."
        },
        {
          id: "szambu-phy-24-166",
          question: "The slope of velocity-time graph gradually decreases, then the body is said to be moving with",
          options: [
            "Negative acceleration",
            "Positive acceleration",
            "Uniform velocity",
            "Variable acceleration"
          ],
          answer: 3,
          explanation: "A changing slope on a velocity-time graph indicates non-uniform or variable acceleration."
        },
        {
          id: "szambu-phy-24-167",
          question: "Two bodies with kinetic energies having ratio of 4:1, are moving with equal linear momentum. The ratio of their masses is",
          options: [
            "1:1",
            "1:2",
            "1:4",
            "4:1"
          ],
          answer: 2,
          explanation: "KE = p²/(2m) → m ∝ 1/KE when momentum p is constant. Since KE₁:KE₂ = 4:1, m₁:m₂ = 1:4."
        },
        {
          id: "szambu-phy-24-175",
          question: "The rate of change of linear momentum is equal to",
          options: [
            "Force",
            "Impulse",
            "Torque",
            "Velocity"
          ],
          answer: 0,
          explanation: "By Newton's second law, rate of change of linear momentum equals applied force."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-131",
          question: "If the horizontal range of a projectile becomes half of its maximum possible horizontal range, the probable angle of projection is;",
          options: [
            "15°",
            "30°",
            "45°",
            "60°"
          ],
          answer: 0,
          explanation: "Maximum range R_max = v²/g (at 45°). Range R = (v²/g) sin 2θ = ½ R_max → sin 2θ = 0.5 → 2θ = 30° → θ = 15° (or 75°)."
        },
        {
          id: "uhs-mdcat-2025-phys-139",
          question: "A ball is thrown into the air with certain velocity v making an angle θ with horizontal. If air resistance is neglected, then at maximum height its velocity is:",
          options: [
            "Equal to initial velocity",
            "Half of initial velocity",
            "Equal to zero",
            "Minimum but not zero"
          ],
          answer: 3,
          explanation: "At peak height, v_y = 0, but v_x = v cosθ remains active, making net velocity minimum but non-zero."
        },
        {
          id: "uhs-mdcat-2025-phys-140",
          question: "A canon is placed on a smooth surface. When it fires a shell, the canon moves backward, this recoil occurs due to:",
          options: [
            "Law of conservation of energy",
            "Backward thrust of the gases",
            "Newton’s third law of motion",
            "Newton’s first law of motion"
          ],
          answer: 2,
          explanation: "Recoil is governed by Newton's third law (action-reaction) and conservation of momentum."
        },
        {
          id: "uhs-mdcat-2025-phys-156",
          question: "When an object attains terminal velocity, its acceleration is:",
          options: [
            "9.8m/s²",
            "Zero",
            "1 m/s²",
            "9.8m/s²"
          ],
          answer: 1,
          explanation: "At terminal velocity, downward weight equals upward drag force, net force is zero, making acceleration zero."
        },
        {
          id: "uhs-mdcat-2025-phys-160",
          question: "A projectile is launched in air with certain angle; its velocity is maximum at:",
          options: [
            "Point of projection",
            "Highest point",
            "Between launching and highest point",
            "At all points"
          ],
          answer: 0,
          explanation: "At launch (and impact at the same level), speed has full initial magnitude v = √(v_x² + v_y²), which is maximum."
        },
        {
          id: "uhs-mdcat-2025-phys-162",
          question: "If a body having mass m1 (2 kg), moving with 5 m/s approaches another mass, m2 (3 kg) with speed of 1 m/s in same direction, relative speed of approach is 4 m/s. Relative speed of separation after collision will be:",
          options: [
            "4 m/s",
            "2 m/s",
            "6 m/s",
            "depends on masses"
          ],
          answer: 0,
          explanation: "In a perfectly elastic collision, relative speed of approach equals relative speed of separation."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-123",
          question: "In an elastic collision the total kinetic energy",
          options: [
            "Dissipates after collision",
            "Increases after the collision",
            "Reduces after the collision",
            "Before and after collision remains the same"
          ],
          answer: 3,
          explanation: "By definition, total kinetic energy is conserved before and after an elastic collision."
        },
        {
          id: "uhs-phys-24-124",
          question: "The instantaneous velocity along the curved path is",
          options: [
            "Along the tangent",
            "Perpendicular to the slope",
            "Parallel to the radius",
            "Anti-parallel to the radius"
          ],
          answer: 0,
          explanation: "Instantaneous velocity at any point on a curved path points along the tangent line at that point."
        },
        {
          id: "uhs-phys-24-125",
          question: "The range of projectile will be maximum if the factor sin 2θ becomes",
          options: [
            "Zero",
            "1",
            "–1",
            "2"
          ],
          answer: 1,
          explanation: "Range R = (v² sin 2θ)/g is maximized when sin 2θ takes its maximum value of 1 (at θ = 45°)."
        },
        {
          id: "uhs-phys-24-126",
          question: "The two dimensional motion under constant acceleration due to gravity is called",
          options: [
            "Circular motion",
            "Rotational motion",
            "Projectile motion",
            "Vibratory motion"
          ],
          answer: 2,
          explanation: "Projectile motion is two-dimensional motion operating under constant acceleration (gravity)."
        },
        {
          id: "uhs-phys-24-127",
          question: "In velocity-time graph the area under graph is equal to the",
          options: [
            "Speed of an object",
            "Velocity of an object",
            "Distance covered by object",
            "Acceleration of an object"
          ],
          answer: 2,
          explanation: "Area under a velocity-time graph equals displacement/distance traveled by the object."
        },
        {
          id: "uhs-phys-24-128",
          question: "According to Newton’s Law of Motion the mass of the object is a quantitative measure of its",
          options: [
            "Weight",
            "Inertia",
            "Speed",
            "Acceleration"
          ],
          answer: 1,
          explanation: "Mass is the scalar quantitative measure of a body's inertia."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "A field in which work done on a closed path is zero is called",
            options: [
              "Gravitational force",
              "Conservative field",
              "Electric field",
              "Magnetic field"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-2",
            question: "If we drop an object it's initial velocity is zero how far will it fall in time \"t\"?",
            options: [
              "9.8t^2",
              "4.9t^2",
              "0.49t^2",
              "98t^2"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-3",
            question: "The necessary centripetal force to the moving car around a corner track is provided by",
            options: [
              "Gravitational force",
              "Centripetal force",
              "Force of friction",
              "Centrifugal force"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-4",
            question: "If a body moves with constant speed in a circle",
            options: [
              "No work is done on it",
              "No force acts on it",
              "No acceleration is produced on it",
              "It's velocity remains constant"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-5",
            question: "1 hp equal to",
            options: [
              "234 watt",
              "246 watt",
              "746 watt",
              "None"
            ],
            answer: 2
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
            answer: 2
          },
          {
            id: "testmoz-phys-7",
            question: "A ball is moving on table which energy does it possess",
            options: [
              "Potential energy",
              "Kinetic energy",
              "Both of them",
              "None"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-8",
            question: "Calculate the power of pump which can lift 200bkg of water through a vertical height of 6m in 10 sec",
            options: [
              "12000W",
              "1.20KW",
              "120W",
              "None"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-9",
            question: "What is the kinetic energy of base ball mass =0.15kg moving with a speed of 20m/s",
            options: [
              "20J",
              "30J",
              "40J",
              "50J",
              "100J"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-10",
            question: "A ball falls from a height H from a tower. Which of the following statement is true?",
            options: [
              "The potential energy of ball is conserved as it falls",
              "The kinetic energy of the ball is conserved as it falls",
              "The difference between kinetic energy and potential energy is conserved as it falls",
              "The sum of potential and kinetic energy is constant"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-11",
            question: "A bullet is fire horizontally with 20m/s in the absence of air Friction its horizontal velocity after 2 seconds",
            options: [
              "10m/s",
              "5m/s",
              "60m/s",
              "20m/s"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-12",
            question: "The unit of power",
            options: [
              "Watt",
              "kwh",
              "Joules",
              "Ergs"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-13",
            question: "One complete execution of periodic motion. Is called",
            options: [
              "Oscillation",
              "Vibration",
              "Revolution",
              "Simple harmonic motion"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-14",
            question: "What force will give a Mass of 10kg when it is accelerated at 5m/s^2 frictional force is 50N",
            options: [
              "50N",
              "100N",
              "25N",
              "60N"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-15",
            question: "What is the kinetic energy of base ball mass=0.15kg moving with a speed of 20m/s",
            options: [
              "20J",
              "30J",
              "40J",
              "50J"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-16",
            question: "The slope of distance ...... time graph will always be",
            options: [
              "Negative",
              "Positive",
              "Zero",
              "Maximum"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-17",
            question: "Which one of the following statement is correct?",
            options: [
              "A body has a constant velocity but varying speed",
              "A body has a constant speed but varying acceleration",
              "A body has a constant speed cannot has an acceleration",
              "A body has a constant speed can has varying velocity"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-18",
            question: "The velocity of alpha particle is?",
            options: [
              "0.8×10^8 m/s",
              "0.5×10^8 m/s",
              "0.3×10^8 m/s",
              "0.1×10^8 m/s"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-19",
            question: "Unit of static co efficient of friction is",
            options: [
              "Poise",
              "Newton",
              "Dyne",
              "None"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-20",
            question: "A ball falls freely towards the earth if the action force is the earth pulling down on the ball the reaction force is",
            options: [
              "The pulling up on the earth",
              "Air resistance acting on the ball",
              "The ball striking the earth when it lands",
              "The inertia of the ball",
              "There is no reaction force in this case"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-21",
            question: "Object displaced from 5m height reaches ground at a distance of 10m what it's final velocity",
            options: [
              "10 m/s",
              "10×1.414 m/s",
              "20 m/s",
              "20×1.414 m/s"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-22",
            question: "The Newton × second is unit of",
            options: [
              "Work",
              "Power",
              "Impulse",
              "Momentum"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-23",
            question: "A ball is the height of 80m find the time taken by ball to reach ground.",
            options: [
              "16 sec",
              "4 sec",
              "32 sec",
              "8 sec"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-24",
            question: "The ...... component of velocity remains same in projectile motion",
            options: [
              "Y component",
              "X component",
              "Both X and Y",
              "None of them"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-25",
            question: "If the axis of rotation passes through the body and the body moves around it self then the motion is called",
            options: [
              "Spin motion",
              "Orbital",
              "Rectilinear motion",
              "Translatory motion"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-26",
            question: "If the velocity of the body is decreasing, the acceleration is negative, this negative acceleration is known as",
            options: [
              "Retardation",
              "Deceleration",
              "Negative displacement",
              "Both a and b"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-27",
            question: "The box of mass M=6kg slides with speed V=4m/s across a frictionless floor. It suddenly explodes into two pieces. One piece with mass M1 =2kg moves in the same direction with speed V1=5m/s. The velocity of second piece is",
            options: [
              "6m/s",
              "4m/s",
              "3m/s",
              "2m/s"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-28",
            question: "A vehicle starting from rest attain a speed of 72km/h covering a distance of 100m if the mass of the vehicle is 500kg find the force exerted by the engine?",
            options: [
              "3000N",
              "1000N",
              "4000N",
              "2000N"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-29",
            question: "The third law of motion given by Newton deals with action reaction pair of forces. Consider two bodies: if the action is due to one body, the reaction will be due to:",
            options: [
              "Both the bodies",
              "The other body",
              "The same body",
              "Atmosphere"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-30",
            question: "A car is traveling in straight line along a highway at a constant speed of 80 miles per hour for 10 seconds. Find its acceleration.",
            options: [
              "100m/s^2",
              "200m/s^2",
              "0m/s^2",
              "150m/s^2"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-31",
            question: "What is the speed of 2.0kg metallic Bob at the mean position of a simple pendulum, when release from its extreme position 0.5m height?",
            options: [
              "3.16m/s",
              "10m/s",
              "100m/s",
              "50m/s"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-32",
            question: "Momentum of a body depends on its",
            options: [
              "Mass",
              "Velocity",
              "Either Mass or velocity",
              "Both mass and velocity"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-33",
            question: "A body is said to move with ...... if it's rate of change of distance moved with time in a specified direction is constant",
            options: [
              "Uniform velocity",
              "Velocity",
              "Speed",
              "Uniform speed",
              "None"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-34",
            question: "...... is that which changes a body's state of rest or of uniform motion",
            options: [
              "Momentum",
              "Acceleration",
              "Force",
              "Balanced force"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-35",
            question: "A car of mass of 1000kg traveling at 36km/h is brought to rest over a distance of 20m. Find the average breaking force in newton's?",
            options: [
              "1000N",
              "2500N",
              "5000N",
              "10000N"
            ],
            answer: 1
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
            answer: 3
          },
          {
            id: "testmoz-phys-37",
            question: "An object with an initial velocity of 4m/s moves along a straight line under constant acceleration. Three second later, it's velocity is 14m/s how far did it travel during this time",
            options: [
              "27m",
              "17m",
              "67m",
              "57m"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-38",
            question: "At what angle of projection of projectile the range become half of its maximum value?",
            options: [
              "15°",
              "20°",
              "30°",
              "45°"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-39",
            question: "A body is dropped from certain height and falls freely its velocity after 5 seconds will be",
            options: [
              "94m/s",
              "9.4m/s",
              "4.9m/s",
              "49m/s"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-40",
            question: "Rate of change of linear momentum",
            options: [
              "Energy",
              "Impulse",
              "Force",
              "Torque"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-41",
            question: "Which if the following is non-conservative force",
            options: [
              "Fractional force",
              "Gravitational force",
              "Elastic force",
              "Elastic spring force"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-42",
            question: "A massive ball collides with a light ball. What will be the velocity of the heavy ball after collision",
            options: [
              "Doubled",
              "Halved",
              "It will remain stationary",
              "Lighter will be rebound with double velocity"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-43",
            question: "Which shows the correct relation between time of flight and maximum height",
            options: [
              "H=gt^2/8",
              "H=gt^2/g",
              "H=8g/T^2",
              "H=8/Gt"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-44",
            question: "A body is thrown height vertically upward with initially velocity 9.8m/sec it will attain height",
            options: [
              "9.8m",
              "29.4m",
              "4.9m",
              "19.6m"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-45",
            question: "How much force is required to cause an object of mass 2kg to have an acceleration of 4m/s²?",
            options: [
              "8N",
              "10N",
              "4N",
              "2N"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-46",
            question: "Dimension of Force is",
            options: [
              "ML^-1T",
              "MLT^-1",
              "M2LT^-1",
              "MLT^-2"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-47",
            question: "A ball is thrown vertically upward with a velocity of 98m/s how high does the ball rise?",
            options: [
              "360 meters",
              "389 meters",
              "490 meters",
              "510 meters"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-48",
            question: "A cannon ball is fired from a cannon so that the cannon recoils backward as the ball is fired forward. Which of the following statement is true",
            options: [
              "The velocity of the cannon ball is equal and opposite to the velocity of cannon",
              "The momentum of the cannon ball must be greater than the magnitude of the momentum of the cannon",
              "The momentum of the cannon must be equal to the magnitude of the momentum of the cannon ball",
              "The momentum of the cannon must be greater than the magnitude of the momentum of the cannon ball"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-49",
            question: "When a bullet is fired by a gun, the gun moves backward with a",
            options: [
              "Velocity less than bullet",
              "Velocity more than bullet",
              "Velocity equal to the bullet",
              "Remains at rest"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-50",
            question: "The rate of change of angular momentum of a body is called",
            options: [
              "Net force",
              "Net displacement",
              "Net torque",
              "Net velocity"
            ],
            answer: 2
          },
      // --- BUMHS 2024 PHYS ---
        {
          id: "bumhs-2024-phys-148",
          question: "If a force of one Newton acts on a body and displaces it through a distance of one meter in the direction of force then work done is one _____",
          options: [
            "joule",
            "dyne",
            "erg",
            "watt"
          ],
          answer: 0,
          explanation: "By definition, 1 Joule = 1 Newton × 1 Meter."
        },
        {
          id: "bumhs-2024-phys-156",
          question: "If a force of 1 N acts upon a body as it moves through a displacement of 0.5 m, at an angle of 60° with the direction of force then the work done W is:",
          options: [
            "0.25 J",
            "0.5 J",
            "10 J",
            "+4 J"
          ],
          answer: 0,
          explanation: "W = F · d cosθ = (1 N) × (0.5 m) × cos(60°) = 1 × 0.5 × 0.5 = 0.25 J."
        },
        {
          id: "bumhs-2024-phys-165",
          question: "The potential energy due to gravitational field near the surface of the Earth at a height h is given by _____.",
          options: [
            "½ mg/h",
            "mgh",
            "mg/h",
            "gh/m"
          ],
          answer: 1,
          explanation: "Gravitational potential energy near Earth's surface is calculated as P.E. = mgh."
        },
      
        // --- BUMHS 2025 PHYSICS ---
        {
          id: "bumhs-2025-phys-134",
          question: "A man pushes a wall with a force of 100 N for 10 seconds. The work done by the man on the wall is:",
          options: [
            "1000 J",
            "100J",
            "10 J",
            "zero"
          ],
          answer: 3,
          explanation: "Work requires displacement. Since the wall does not move (d = 0), work done W = F × d = 0."
        },
        {
          id: "bumhs-2025-phys-154",
          question: "If the angle between force and velocity is 90°, the power delivered by the force is:",
          options: [
            "Zero",
            "Maximum",
            "Minimum but not zero",
            "Infinite"
          ],
          answer: 0,
          explanation: "Instantaneous power P = F · v cosθ. When θ = 90°, cos(90°) = 0, so power delivered is zero."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-95",
          question: "The rate of doing work at any instant of time is called:",
          options: [
            "Work done",
            "Instantaneous power",
            "Average power",
            "Mechanical energy"
          ],
          answer: 1,
          explanation: "Instantaneous power is defined as the limiting value of ΔW/Δt as Δt approaches zero."
        },
        {
          id: "kmu-mdcat-2025-phys-96",
          question: "A 5 kg body falls from the height of 30 m towards the ground. All its potential energy is converted into heat on impact. What is the heat energy produced?",
          options: [
            "1270 J",
            "1370 J",
            "1470 J",
            "1570 J"
          ],
          answer: 2,
          explanation: "Heat energy produced = P.E. lost = mgh = 5 kg × 9.8 m/s² × 30 m = 1470 J."
        },
        {
          id: "kmu-mdcat-2025-phys-97",
          question: "Two students, A and B, each carry a 20 kg load to the top of a 10 m high staircase. Student A takes 10 sec, while student B takes 20 sec. Which statement is CORRECT?",
          options: [
            "Student A does more work than student B",
            "Student B uses more power than student A",
            "Both students do the same amount of work, but student A uses more power",
            "Student A and B use the same power since they lifted the same weight"
          ],
          answer: 2,
          explanation: "Both do equal work (mgh = 20 × 9.8 × 10 = 1960 J). Student A completes it in less time, so A expends more power (P = W/t)."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-124",
          question: "Which of the following pairs correctly matches a physical quantity with its SI unit?",
          options: [
            "Energy- Newton",
            "Force - Joule",
            "Power- Watt",
            "Velocity-m/s²"
          ],
          answer: 2,
          explanation: "The SI unit of power is the Watt (W). Energy is measured in Joules, Force in Newtons, and Velocity in m/s."
        },
        {
          id: "kmu-phys-24-129",
          question: "How does an angle between the force applied and the direction of motion influence the work done on an object?",
          options: [
            "Work is constant regardless of the angle",
            "Work is maximum when the angle is 0°",
            "Work is negative when the angle is 90°",
            "Work is 0 when the angle is 45°"
          ],
          answer: 1,
          explanation: "W = F d cosθ is maximized at θ = 0° since cos(0°) = 1."
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
          explanation: "The weight vector acts vertically downward, while motion is horizontal (90° angle). W = F d cos(90°) = 0."
        },
        {
          id: "kmu-phys-24-131",
          question: "If a constant force of 10N is applied to move an object 5m in the direction of the force, what is the work done?",
          options: [
            "2 J",
            "5 J",
            "15 J",
            "50 J"
          ],
          answer: 3,
          explanation: "W = F × d = 10 N × 5 m = 50 J."
        },
        {
          id: "kmu-phys-24-132",
          question: "The escape velocity of a body in the gravitational field of Earth is dependent on:",
          options: [
            "Angle on which it is thrown",
            "Both mass of the body and the angle at which it is thrown",
            "Mass of earth",
            "Mass of the body"
          ],
          answer: 2,
          explanation: "Escape velocity v_esc = √(2GM/R) depends on the mass of the celestial body (Earth) and its radius, independent of the mass or projection angle of the launched object."
        },
      
        // --- SIBA 2025 PHYS prep ---
        {
          id: "siba-2025-phys-128",
          question: "During the drilling of a metal surface, the drill bit heats up. This heat comes from the:",
          options: [
            "Vibration of the tool",
            "Work done against friction",
            "Flow of electric current",
            "Compression of air"
          ],
          answer: 1,
          explanation: "Mechanical work done against frictional forces between the drill bit and metal is converted into thermal energy."
        },
        {
          id: "siba-2025-phys-140",
          question: "Potential energy decreases in the process of:",
          options: [
            "Compressing a spring",
            "Stretching a spring",
            "Releasing a stretched spring",
            "Holding the spring at maximum extension"
          ],
          answer: 2,
          explanation: "Releasing a stretched spring converts stored elastic potential energy back into kinetic energy, decreasing potential energy."
        },
        {
          id: "siba-2025-phys-141",
          question: "A diver of mass m is swimming at a depth h below the sea level. If the reference level is taken at sea level, the gravitational potential energy of the diver is:",
          options: [
            "0",
            "mgh",
            "-mgh",
            "2mgh"
          ],
          answer: 2,
          explanation: "Below the reference level (sea level), height is -h, making the potential energy U = -mgh."
        },
        {
          id: "siba-2025-phys-142",
          question: "A constant force F acts on a body and displaces it by distance Δd in a time Δt. The rate at which force is doing work is:",
          options: [
            "F × Δd",
            "F × Δt",
            "F × Δd / Δt",
            "F × Δt / Δd"
          ],
          answer: 2,
          explanation: "Rate of doing work P = ΔW/Δt = (F × Δd) / Δt."
        },
        {
          id: "siba-2025-phys-144",
          question: "When force and displacement are in opposite direction then the work done is said to be:",
          options: [
            "Positive",
            "Negative",
            "Infinite",
            "Maximum"
          ],
          answer: 1,
          explanation: "When force and displacement point in opposite directions (θ = 180°), cos(180°) = -1, yielding negative work."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-128",
          question: "The SI unit of power is:",
          options: [
            "Ampere",
            "Coulomb",
            "Ohm",
            "Watt",
            "Volt"
          ],
          answer: 3,
          explanation: "The SI unit of power is the Watt (W), equivalent to Joules per second."
        },
        {
          id: "siba-phy-24-146",
          question: "The constant power output of a machine is 6W. The energy delivered by it in 2 minutes is:",
          options: [
            "12 joules",
            "720 joules",
            "72 joules",
            "3 joules",
            "120 joules"
          ],
          answer: 1,
          explanation: "E = P × t = 6 W × (2 × 60 s) = 6 W × 120 s = 720 Joules."
        },
        {
          id: "siba-phy-24-156",
          question: "For maximum work done by a constant force, the angle between force and displacement is:",
          options: [
            "45°",
            "90°",
            "65°",
            "145°",
            "0°"
          ],
          answer: 4,
          explanation: "W = F d cosθ is at a maximum when θ = 0° (cos 0° = 1)."
        },
        {
          id: "siba-phy-24-173",
          question: "Newton (N) is not the SI unit of:",
          options: [
            "Centripetal force",
            "Tension",
            "Coulomb’s force",
            "Friction",
            "Momentum"
          ],
          answer: 4,
          explanation: "Momentum is measured in kg·m/s or N·s. All other listed options are forces, which are measured in Newtons."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-154",
          question: "The work done on a body is stored in it in the form of:",
          options: [
            "Power",
            "Energy",
            "Momentum",
            "Impulse"
          ],
          answer: 1,
          explanation: "By the work-energy theorem, work done on a system changes its energy state (stored as kinetic or potential energy)."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-126",
          question: "A man pulls a trolley through a distance of 50 m by applying a force of 100 N, which makes an angle of 60° with x-axis. Calculate the work done by the man? (Cos 60° = 0.5)",
          options: [
            "2500 J",
            "5340 J",
            "6430 J",
            "7120 J"
          ],
          answer: 0,
          explanation: "W = F · d cosθ = 100 N × 50 m × cos(60°) = 5000 × 0.5 = 2500 J."
        },
        {
          id: "szambu-phy-24-143",
          question: "Kilowatt hour is the commercial unit of electrical energy. 1 kWh is equal to",
          options: [
            "3.6 meV",
            "3.6 MeV",
            "3.6 J",
            "3.6 MJ"
          ],
          answer: 3,
          explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ."
        },
        {
          id: "szambu-phy-24-160",
          question: "In British Engineering system, the unit of power is horsepower. Numerically 1000 hp is equal to",
          options: [
            "7460 watts",
            "74600 watts",
            "746000 watts",
            "7460000 watts"
          ],
          answer: 2,
          explanation: "1 hp = 746 W. Therefore, 1000 hp = 1000 × 746 W = 746,000 W."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-127",
          question: "If p is the momentum of an object and m is its mass, then its kinetic energy is:",
          options: [
            "p/2m",
            "p²/2m",
            "1/2 pm²",
            "1/2 P²m"
          ],
          answer: 1,
          explanation: "K.E. = ½ mv² = (mv)² / 2m = p² / 2m."
        },
        {
          id: "uhs-mdcat-2025-phys-154",
          question: "The work done by the gravitational force on an object as it moves from a reference level to a higher point is:",
          options: [
            "Always positive",
            "Always negative",
            "Zero",
            "Depends on the path taken"
          ],
          answer: 1,
          explanation: "As an object moves upward, gravity acts downward (θ = 180°), making the work done by gravity negative (-mgh)."
        },
        {
          id: "uhs-mdcat-2025-phys-157",
          question: "A 0.5 kg ball moving at 6 m/s has kinetic energy",
          options: [
            "9 J",
            "18 J",
            "6 J",
            "3 J"
          ],
          answer: 0,
          explanation: "K.E. = ½ mv² = 0.5 × 0.5 kg × (6 m/s)² = 0.25 × 36 = 9 J."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-129",
          question: "1 kWh = ________ J?",
          options: [
            "3.6 J",
            "3.6 kJ",
            "3.6 MJ",
            "3.6 GJ"
          ],
          answer: 2,
          explanation: "1 kWh = 1 kW × 1 hr = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ."
        },
        {
          id: "uhs-phys-24-130",
          question: "Which of the following is a non-conservative force?",
          options: [
            "Frictional force",
            "Electric force",
            "Elastic spring force",
            "Gravitational force"
          ],
          answer: 0,
          explanation: "Frictional force is non-conservative because work done against friction depends on the path and is dissipated as heat."
        },
        {
          id: "uhs-phys-24-131",
          question: "Work done is equal to",
          options: [
            "Effort × distance",
            "Effort + distance",
            "Effort – distance",
            "Effort ÷ distance"
          ],
          answer: 0,
          explanation: "In mechanical systems, Work = Force (Effort) × Distance moved in the direction of effort."
        },
        {
          id: "uhs-phys-24-132",
          question: "When a force of 1 N displaces its point of application by 1 m in the direction of force, the work done is",
          options: [
            "1 J",
            "10 J",
            "0 J",
            "1"
          ],
          answer: 0,
          explanation: "1 Newton × 1 Meter = 1 Joule of work."
        },
        {
          id: "uhs-phys-24-133",
          question: "An electric motor is used to lift the weight of 2.0 N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
          options: [
            "0.25 W",
            "0.5 W",
            "0.75 W",
            "1 W"
          ],
          answer: 1,
          explanation: "Height h = 100 cm = 1 m. Work done = F × h = 2.0 N × 1 m = 2 J. Power = W / t = 2 J / 4 s = 0.5 W."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "Power can be defined as the dot product of",
            options: [
              "Force and displacement",
              "Force and time",
              "Force and velocity",
              "Force and mass"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-2",
            question: "When the speed of your car is halved by what factor does its kinetic energy decreases",
            options: [
              "1/4",
              "1/2",
              "1/8",
              "1/6"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-3",
            question: "A tennis ball is dropped on to a horizontal surface. As the ball bounce up and down, the height of each bounce gradually decreases during the motion of the ball",
            options: [
              "The kinetic energy of ball is constant",
              "The potential energy of ball is constant",
              "The sum of kinetic energy and potential energy of ball is constant",
              "The total of ball, ground and air is constant"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-4",
            question: "A truck and car are moving with equal velocity on applying brakes, both will stop after certain distance then?",
            options: [
              "Truck will cover less distance before stopping",
              "Car will cover less distance before stopping",
              "Both will cover equal",
              "None of the mentioned"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-5",
            question: "1 hp equals to",
            options: [
              "746 watt",
              "346 watt",
              "246 watt",
              "None"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-6",
            question: "A body of mass 1 kg moving with initial velocity of 1 m/s is acted upon by a force for 1 sec. The increase in KE is?",
            options: [
              "1.0J",
              "2.0J",
              "2.5J",
              "3.0J"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-7",
            question: "An electric motor creates a tension of 45N in hosting cable and reels it in at the rate of 2 m/s the power of the motor is",
            options: [
              "15Kw",
              "90 watt",
              "225Kw",
              "900hp"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-8",
            question: "Potential energy per unit volume is given by",
            options: [
              "mgh",
              "Mgh/P",
              "gh",
              "Pgh"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-9",
            question: "The power output of a lamp is 6W how much energy does the lamp give out in 2 minutes",
            options: [
              "3J",
              "120J",
              "720J",
              "430J"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-10",
            question: "The workdone in holding a weight of 40N at height of 3m above the floor for 2 sec is, in joules",
            options: [
              "0",
              "40",
              "30",
              "120"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-11",
            question: "Work done is not product of \"F\" and \"S\" if F and S are non zero then the work done will be zero when",
            options: [
              "They are along same direction",
              "They are perpendicular to each other",
              "They are parallel to each other",
              "None"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-12",
            question: "One erg is equal to",
            options: [
              "10^-5 dynes",
              "10^-7 dynes",
              "10^-7 joules",
              "10^-5 newton"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-13",
            question: "A ball is thrown vertically upwards. Neglecting air resistance, which statement is correct",
            options: [
              "The kinetic energy of ball is greatest at the greatest height attained",
              "The potential energy of ball increases uniformly with time during the ascent",
              "By the principal of conservation momentum, the momentum of ball is constant throughout its motion",
              "By the principal of conservation of energy, the total energy of the ball is constant throughout its motion"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-14",
            question: "Slope of work time graph is equal to",
            options: [
              "Displacement",
              "Power",
              "Acceleration",
              "Energy"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-15",
            question: "The power needed to lift a mass of 5000g to height of 1 m in 2 sec is",
            options: [
              "2.45 watt",
              "245 watt",
              "24.5 watt",
              "2.45 kw"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-16",
            question: "The rate of doing Work is zero when angle between force and velocity is",
            options: [
              "0 degree",
              "180 degree",
              "90 degree",
              "60 degree"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-17",
            question: "Which unit expresses work per unit charge?",
            options: [
              "Hertz",
              "Watt",
              "Joule",
              "Volt"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-18",
            question: "The bodies of one kg and four kg have same kinetic energy the ratio in their momenta will be",
            options: [
              "1:2",
              "1:16",
              "1:4",
              "1:1"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-19",
            question: "Which of the following type of force cannot do work on which it acts",
            options: [
              "Frictional force",
              "Centripetal force",
              "Gravitational force",
              "Restoring force"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-20",
            question: "When the velocity of body is doubled and the mass is halved the KE will be",
            options: [
              "Unchanged",
              "Doubled",
              "Halved",
              "Four times"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-21",
            question: "If force and displacement of particle in direction of force are doubled work would be",
            options: [
              "Double",
              "half",
              "1/4 times",
              "4 times"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-22",
            question: "A man pushes a wall with 50N and it displaces if zero m his work is",
            options: [
              "Negative",
              "Positive",
              "No work",
              "May all possible"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-23",
            question: "The power of load is one watt if",
            options: [
              "1 ampere current flows through a conductor when a potential difference of 1 volt is applied",
              "0.1 ampere current flows when a potential difference of 0.1 volt is applied",
              "1 ampere current flows when a potential difference of 10 volt is applied",
              "10 amperes current flows when a potential difference of 10 volt is applied"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-24",
            question: "In inelastic collision .... remains conserved .... but .... changes",
            options: [
              "KE and momentum",
              "Momentum and KE",
              "None",
              "Direction and momentum"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-25",
            question: "The amount of work done against Friction to slide a box in a straight line across a uniform horizontal floor depends most on the",
            options: [
              "Time taken to move the box",
              "Distance the box is moved",
              "Speed of the box",
              "Direction of the box's motion"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-26",
            question: "The time taken by an engine of power 10Kw to lift a mass of 200 kg to the height of 40m is",
            options: [
              "2s",
              "4s",
              "8s",
              "16s"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-27",
            question: "In gravitational field, the work done in closed path is",
            options: [
              "Zero",
              "Positive",
              "Negative",
              "Minimum"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-28",
            question: "In freely falling system, if potential energy is equal to kinetic energy, the force of friction of air will",
            options: [
              "Be negligible",
              "Be maximum",
              "Be zero",
              "Not be predicted"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-29",
            question: "Which of the following is biggest unit of energy",
            options: [
              "Joule",
              "Micro joule",
              "Electron volt",
              "None of these"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-30",
            question: "A 70kg athlete runs up a hill through a height 3m in 2 seconds. His average power output will be",
            options: [
              "8000W",
              "9000W",
              "9080W",
              "1030W"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-31",
            question: "An 80kg man runs up a hill through a height of 4m in 3 seconds, how much work does he do against gravitational forces",
            options: [
              "2136J",
              "3136J",
              "4136J",
              "5136J"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-32",
            question: "If 10kg mass is dropped from a certain height. Hits the ground with speed 10m/s the height will be",
            options: [
              "100m",
              "10m",
              "50m",
              "5m"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-33",
            question: "When force and displacement are in the same direction, the kinetic energy of the body",
            options: [
              "Increases",
              "Decreases",
              "Remains constant",
              "Becomes zero"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-34",
            question: "At what angle the workdone will be half of its maximum value",
            options: [
              "0 degree",
              "45 degree",
              "60 degree",
              "30 degree"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-35",
            question: "Kilo watt hour is the unit of",
            options: [
              "Power",
              "Force",
              "Momentum",
              "Energy"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-36",
            question: "Energy stored in the spring of watch is",
            options: [
              "Electrical energy",
              "Kinetic energy",
              "Potential energy",
              "Elastic potential energy"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-37",
            question: "A stone is thrown up from the surface of the earth when it reaches at maximum height its total energy is equal to",
            options: [
              "mgh",
              "Zero",
              "1/2mv^2",
              "2mgh"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-38",
            question: "A shot leaves a gun at the rate of 160m/s calculate the greatest distance to which it could be projected",
            options: [
              "2460m",
              "2560m",
              "2680m",
              "2760m",
              "2860m"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-39",
            question: "1.75m height weight-lifter rises weights with a Mass of 50kg to a height of 0.5m above his head how much work is being done by him?",
            options: [
              "2125J",
              "250J",
              "100J",
              "50J"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-40",
            question: "The unit of power in British engineering system is",
            options: [
              "Watt",
              "Choice 3",
              "Choice 4"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-41",
            question: "Identify the examples of kinetic energy",
            options: [
              "A moving ball can break a glass window",
              "A striking hammer can drive a nail",
              "A stone thrown can upward can lift itself against the force of gravity",
              "1 only",
              "2 only",
              "3 only",
              "2 and 3 only",
              "1, 2 and 3 only"
            ],
            answer: 7
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
            answer: 2
          },
          {
            id: "testmoz-phys-43",
            question: "A body is falling from a height h. After it has fallen a height h/2, it will possess",
            options: [
              "Only potential energy",
              "Kinetic energy",
              "Half potential and half kinetic energy",
              "More kinetic less potential"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-44",
            question: "If mass and speed of moving object is double, the KE will be",
            options: [
              "Eight times",
              "Four times",
              "Doubled",
              "Six times",
              "Sixteen times"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-45",
            question: "If a body of mass 2kg is raised vertically through 2m, then the work will be",
            options: [
              "38.2J",
              "39.2J",
              "392.1J",
              "40J"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-46",
            question: "The workdone by the gravity during the descent of projectile",
            options: [
              "Is positive",
              "Is negative",
              "is zero",
              "Depends for its sign on the direction of the y axis"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-47",
            question: "Which one of the following quantities cannot be used as a unit of potential energy",
            options: [
              "Watt sec",
              "Kgm^2/s^2",
              "gcm/s^2",
              "ft lb"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-48",
            question: "The average power and instantaneous power become equal if work is done at",
            options: [
              "Any rate",
              "Uniform rate",
              "Variable rate",
              "High rate"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-49",
            question: "The work to a system is characterized as",
            options: [
              "Positive",
              "Negative",
              "Both",
              "Either positive or negative"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-50",
            question: "A ball whose kinetic energy is E is thrown at an angle 45 degree with horizontal its kinetic energy at the highest point of its trajectory will be",
            options: [
              "E",
              "E/2",
              "E/1.414",
              "Zero"
            ],
            answer: 1
          },
      // --- BUMHS 2024 ---
        {
          id: "bumhs-2024-phys-151",
          question: "A particle is executing uniform circular motion in a circle of radius 100 mm. If its speed is 10 cm/s then its angular velocity is:",
          options: [
            "10 rad/s",
            "0.1 rad/s",
            "10 revolutions/s",
            "None of these"
          ],
          answer: 3,
          explanation: "Radius r = 100 mm = 10 cm = 0.1 m. Linear speed v = 10 cm/s = 0.1 m/s. Angular velocity ω = v / r = 0.1 / 0.1 = 1 rad/s. Since 1 rad/s is not listed among the options, 'None of these' is the correct choice."
        },
        {
          id: "bumhs-2024-phys-161",
          question: "A body of mass m moving in a circle of radius r is executing a uniform circular motion. If the mass of the body is doubled then the centripetal force acting upon the body is:",
          options: [
            "Reduced to half",
            "Remains same",
            "Doubled",
            "None of the given options"
          ],
          answer: 2,
          explanation: "Centripetal force F_c = (m v²) / r. Since F_c is directly proportional to mass m, doubling the mass doubles the required centripetal force."
        },
      
        // --- BUMHS 2025 ---
        {
          id: "bumhs-2025-phys-133",
          question: "A particle is moving in a uniform circular path of radius 4cm with velocity 4cm/s. The maximum acceleration of its projection executing simple harmonic motion on horizontal diameter is:",
          options: [
            "4 cm/s²",
            "8 cm/s²",
            "12 cm/s²",
            "16 cm/s²"
          ],
          answer: 0,
          explanation: "Angular velocity ω = v / r = 4 cm/s / 4 cm = 1 rad/s. Maximum acceleration of projection in SHM is a_max = ω² r = (1)² × 4 = 4 cm/s²."
        },
        {
          id: "bumhs-2025-phys-150",
          question: "The angle that a body covers at the center of the circle in three turns in radian is:",
          options: [
            "0",
            "3",
            "10.8",
            "18.8"
          ],
          answer: 3,
          explanation: "One turn (revolution) = 2π radians. Three turns = 3 × 2π = 6π radians ≈ 6 × 3.14159 ≈ 18.85 radians."
        },
      
        // --- KMU MDCAT 2025 ---
        {
          id: "kmu-mdcat-2025-phys-98",
          question: "A wheel of radius 0.4 m has an angular acceleration of 6 rad/s². The linear acceleration is:",
          options: [
            "1.2 m/s²",
            "2.4 m/s²",
            "2.4 m/s²",
            "2.4 m/s²"
          ],
          answer: 1,
          explanation: "Linear acceleration a = r α = 0.4 m × 6 rad/s² = 2.4 m/s²."
        },
        {
          id: "kmu-mdcat-2025-phys-99",
          question: "If an object is moving anticlockwise along a circular path, in a horizontal plane on a page then the direction of its angular velocity is:",
          options: [
            "Tangential to any point on the circle",
            "Towards centre of the circle",
            "Perpendicular to the plane and pointing out of the page",
            "Perpendicular to the plane and pointing into the page"
          ],
          answer: 2,
          explanation: "By the right-hand rule, curling the fingers of the right hand in the counter-clockwise direction points the thumb perpendicularly out of the page."
        },
        {
          id: "kmu-mdcat-2025-phys-100",
          question: "If a particle moves along a circular path of radius r with angular displacement θ (in radians), then the arc length s is given by:",
          options: [
            "rθr",
            "θ/r",
            "r × θ",
            "θ/r"
          ],
          answer: 2,
          explanation: "The relation between arc length s, radius r, and angular displacement θ (in radians) is s = r θ (written here as r × θ)."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-133",
          question: "A wheel makes 3 complete revolutions. What is the total number of radians through which a point on wheel has rotated?",
          options: [
            "2π",
            "3π",
            "6π",
            "9π"
          ],
          answer: 2,
          explanation: "1 revolution = 2π radians. Therefore, 3 complete revolutions = 3 × 2π = 6π radians."
        },
        {
          id: "kmu-phys-24-134",
          question: "For rigid body that rotates about a fixed axis, the angle swept out by a line passing through any point on the body and intersecting the axis of rotation perpendicularly is called:",
          options: [
            "Angular acceleration",
            "Angular displacement",
            "Angular momentum",
            "Angular velocity"
          ],
          answer: 1,
          explanation: "The angle swept out by a line extending from the axis of rotation to any point on a rotating rigid body is defined as its angular displacement."
        },
        {
          id: "kmu-phys-24-135",
          question: "In a rotating spaceship, to produce artificial gravity, what does the centripetal force do?",
          options: [
            "Has no effect inside the spaceship",
            "Increases spaceship’s rotation",
            "Pulls objects towards the centre",
            "Pushes the objects towards the outer wall"
          ],
          answer: 3,
          explanation: "In a rotating spaceship, the outer floor provides the normal contact force (centripetal force) pushing inward on occupants, while inertia creates the perception of gravity pressing objects against the outer wall."
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
          explanation: "F_c = (m v²) / r. If m′ = m/2 and r′ = 2r with v constant: F_c′ = ((m/2) v²) / (2r) = 1/4 × (m v² / r) = F_c / 4."
        },
      
        // --- SIBA 2025 ---
        {
          id: "siba-2025-phys-127",
          question: "The angle formed at the center of a circle as a body moves from one position to another is:",
          options: [
            "Angular displacement",
            "Angular velocity",
            "Angular acceleration",
            "Angular momentum"
          ],
          answer: 0,
          explanation: "The angle subtended at the center of a circular trajectory during motion is called angular displacement."
        },
        {
          id: "siba-2025-phys-132",
          question: "A body moving in a circle, half revolution in terms of radians is equivalent to:",
          options: [
            "π",
            "π/6",
            "π/2",
            "2π"
          ],
          answer: 0,
          explanation: "1 full revolution = 2π radians. Half a revolution = 2π / 2 = π radians."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-134",
          question: "The force responsible for simple harmonic motion of a simple pendulum is:",
          options: [
            "mg cos θ",
            "mg tan θ",
            "mg sin² θ",
            "mg sin θ"
          ],
          answer: 3,
          explanation: "The restoring force bringing the bob of a pendulum back toward equilibrium is the tangential component of gravity, F = -mg sin θ."
        },
        {
          id: "siba-phy-24-154",
          question: "The total energy E of a body at any instant, executing simple harmonic motion, is:",
          options: [
            "E = −2kx²",
            "E = 0.5(kx²)",
            "E = −kx²",
            "E = kx²"
          ],
          answer: 1,
          explanation: "Total energy of a simple harmonic oscillator is constant and given by E = ½ k x₀² (or ½ k x² at maximum amplitude x = x₀)."
        },
        {
          id: "siba-phy-24-157",
          question: "A body is moving in a circle with constant speed. Which of the following statements is true?",
          options: [
            "There is a force acting on the body at a tangent to the circle",
            "There is a force acting on the body toward the center of the circle",
            "There is no acceleration in the body",
            "There is a force acting on the body away from the center of the circle",
            "The net force acting on the body is zero"
          ],
          answer: 1,
          explanation: "In uniform circular motion, a net centripetal force acts directed radially inward toward the center of the circle."
        },
        {
          id: "siba-phy-24-160",
          question: "The period of uniform circular motion is given as:",
          options: [
            "T = ω/2π",
            "T = 2π/ω",
            "T = 2π ω",
            "T = 2πT",
            "T = 2π ω²"
          ],
          answer: 1,
          explanation: "Since angular speed ω = 2π / T, solving for period yields T = 2π / ω."
        },
        {
          id: "siba-phy-24-168",
          question: "If the length of a simple pendulum is increased four times, its frequency:",
          options: [
            "Increases 2 times",
            "Decreases 4 times",
            "Remains the same",
            "Increases 4 times",
            "Decreases 2 times"
          ],
          answer: 4,
          explanation: "Frequency f = (1 / 2π) √(g / L). Since f is inversely proportional to √L, multiplying L by 4 reduces frequency by a factor of √4 = 2 (decreases 2 times)."
        },
      
        // --- SZAMBU 2025 ---
        {
          id: "szambu-2025-phys-158",
          question: "The true statement about angular displacement is:",
          options: [
            "It always increases with time",
            "It is treated as vector for small rotations",
            "It is always a scalar quantity",
            "It is measured in meters"
          ],
          answer: 1,
          explanation: "Infinitesimal (very small) angular displacements obey vector addition laws and are treated as vector quantities, whereas large angular displacements do not commute under addition."
        },
        {
          id: "szambu-2025-phys-159",
          question: "π radians are equivalent to",
          options: [
            "30°",
            "270°",
            "90°",
            "180°"
          ],
          answer: 3,
          explanation: "2π radians = 360°, so π radians = 180°."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-132",
          question: "The instantaneous acceleration of an object travelling with uniform speed in a circle directed towards the center of circle is referred as",
          options: [
            "Angular acceleration",
            "Centrifugal acceleration",
            "Centripetal acceleration",
            "Tangential acceleration"
          ],
          answer: 2,
          explanation: "Acceleration directed toward the center of a circular path during uniform circular motion is centripetal acceleration."
        },
        {
          id: "szambu-phy-24-136",
          question: "Which one of the following is the SI-unit of angular displacement?",
          options: [
            "Degree",
            "Radian",
            "Revolution",
            "Steradian"
          ],
          answer: 1,
          explanation: "The standard SI unit for angular displacement is the radian (rad)."
        },
        {
          id: "szambu-phy-24-149",
          question: "Which of the following rule helps us to detect the direction of angular velocity?",
          options: [
            "Head to tail rule",
            "Kirchhoff rule",
            "Left hand rule",
            "Right hand rule"
          ],
          answer: 3,
          explanation: "The direction of angular velocity (an axial vector) is determined using the Right Hand Rule."
        },
        {
          id: "szambu-phy-24-171",
          question: "A rotating pulley completes twelve revolutions in 4 seconds, calculate the average angular velocity of rotating pulley in revelation per second?",
          options: [
            "3",
            "4",
            "5",
            "6"
          ],
          answer: 0,
          explanation: "Angular velocity in rev/s = Total revolutions / Total time = 12 rev / 4 s = 3 rev/s."
        },
      
        // --- UHS MDCAT 2025 ---
        {
          id: "uhs-mdcat-2025-phys-133",
          question: "An angular displacement of 90° is equal to:",
          options: [
            "One-fourth revolution",
            "One-third revolution",
            "One-half revolution",
            "One complete revolution"
          ],
          answer: 0,
          explanation: "One full revolution = 360°. Therefore, 90° / 360° = 1/4 (one-fourth revolution)."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-134",
          question: "The centripetal acceleration of an object moving along a circle of radius ‘r’ with an angular speed ‘ω’ is given by the formula",
          options: [
            "a = rω²",
            "a = rω",
            "a = r²ω",
            "a = r²ω²"
          ],
          answer: 0,
          explanation: "Since v = rω, centripetal acceleration a_c = v² / r = (rω)² / r = rω²."
        },
        {
          id: "uhs-phys-24-135",
          question: "An aircraft makes a turn in a horizontal circle of radius 100 m. It is travelling with a velocity of 250 m/s. The angular velocity of the aircraft will be",
          options: [
            "1.5 rad/s",
            "2.5 rad/s",
            "3 rad/s",
            "3.5 rad/s"
          ],
          answer: 1,
          explanation: "Angular velocity ω = v / r = 250 m/s / 100 m = 2.5 rad/s."
        },
        {
          id: "uhs-phys-24-136",
          question: "A particle of mass ‘m’ is moving on a circular path of radius ‘r’ with velocity ‘v’, then centripetal force acting on it is F. If the velocity of particle increases by 2 times and radius of circular path increases by 4 times then new centripetal force F′ will be",
          options: [
            "F′ = 2F",
            "F′ = ½ F",
            "F′ = 4F",
            "F′ = F"
          ],
          answer: 3,
          explanation: "Initial F = (m v²) / r. New velocity v′ = 2v, new radius r′ = 4r. New force F′ = m (2v)² / (4r) = m (4 v²) / (4r) = (m v²) / r = F."
        },
        {
          id: "uhs-phys-24-137",
          question: "A roller coaster is moving with 30 m s⁻¹ on a circular track of radius 30 m. The net mass of coaster + passengers is ‘m’. The centripetal force acting on it is",
          options: [
            "900 m",
            "m",
            "450 m",
            "30 m"
          ],
          answer: 3,
          explanation: "Centripetal force F_c = (m v²) / r = (m × 30²) / 30 = (m × 900) / 30 = 30 m."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "The angular velocity of the minute hand of a clock is",
            options: [
              "2π/60 rad/s",
              "2π/3600 rad/s",
              "π/24 rad/s",
              "Choice 4",
              "π/3600 rad/s"
            ],
            answer: 1
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
            answer: 1
          },
          {
            id: "testmoz-phys-3",
            question: "A disk is free to rotate on a fixed axis. A force of magnitude F, in the plane of the disk, is to be applied. On the following alternatives the greatest angular acceleration is obtained if the force is",
            options: [
              "Applied tangentially halfway between the axis and rim",
              "Applied tangentially at the rim",
              "Applied radially halfway between the axis and rim",
              "Applied radially at the rim"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-4",
            question: "The angular velocity of a rotating wheel increases by 2 rev/s every minute. The angular acceleration in rad/s² of this wheel is",
            options: [
              "4π²",
              "1/30",
              "2π",
              "π/15"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-5",
            question: "If a particle moves in a circle describing equal angles in equal intervals of time, the velocity vector",
            options: [
              "Remains constant",
              "Changes in magnitude only",
              "Changes in direction only",
              "Changes both in magnitude and direction"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-6",
            question: "A cyclist turns around a curve at 15 miles/hour. If he turns at double the speed, the tendency to overturn is",
            options: [
              "Quadrupled",
              "Halved",
              "Unchanged",
              "Doubled"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-7",
            question: "For positive angular displacement the rotation would be",
            options: [
              "Clockwise",
              "Anti clock wise",
              "Parallel",
              "Perpendicular"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-8",
            question: "A cyclist cycling around a circular racing track, skids because",
            options: [
              "The centripetal force upon him is less than limiting friction",
              "The centripetal force upon him is greater than limiting friction",
              "The force upon him is equal to the limiting friction",
              "The Friction between the tyres of the cycle and road vanishes"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-9",
            question: "A particle P is moving in a circle of radius with a uniform speed v, C is the center of the circle and AB is diameter. The angular velocity of P about A and C are in the ratio",
            options: [
              "1:1",
              "1:2",
              "4:1",
              "2:1"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-10",
            question: "The ratio of angular frequency and linear frequency is",
            options: [
              "2π",
              "1/2π",
              "π/2",
              "π"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-11",
            question: "A point on the rim of a wheel 4 m in diameter has a velocity of 1600 cm/s the angular velocity of wheel is",
            options: [
              "2 rad/s",
              "6 rad/s",
              "4 rad/s",
              "8 rad/s"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-12",
            question: "Which of the following is an axial vector",
            options: [
              "Torque",
              "Angular displacement",
              "Angular velocity",
              "All"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-13",
            question: "If a satellite moves above earth's atmosphere in a circular orbit with constant speed, then",
            options: [
              "It's acceleration and velocity are always in the same direction",
              "It's acceleration is towards the earth",
              "It's velocity is constant",
              "It will fall back to earth when it's fuel is used up"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-14",
            question: "The angle between the centripetal force and tangential velocity is",
            options: [
              "0 degree",
              "90 degree",
              "180 degree",
              "60 degree"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-15",
            question: "If a body is moving in a circular path with constant speed, then the",
            options: [
              "Velocity and acceleration are perpendicular to each other",
              "Velocity and acceleration are parallel to each other",
              "Velocity and acceleration are anti parallel",
              "Both have zero magnitude"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-16",
            question: "Work done due to centripetal force for circular motion will be",
            options: [
              "Reduced",
              "Maximum",
              "Half",
              "Zero"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-17",
            question: "A particle is moving with constant speed by keeping itself at constant distance from a fixed point in given plane its motion is",
            options: [
              "Circular motion",
              "Uniform circular motion",
              "Uniform circular motion with fixed axis of rotation",
              "Uniform circular motion with axis of motion not defined"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-18",
            question: "Two wheels roll side by side without sliding at the same speed the radius of wheel 2 is twice the radius of wheel 1. The angular velocity of wheel 2 is",
            options: [
              "Twice the angular velocity of wheel 1",
              "The same as the velocity of wheel 1",
              "Half the angular velocity of wheel 1",
              "More than twice the angular velocity of wheel 1"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-19",
            question: "The magnitude of the force required to cause a 0.04 kg object to move at 0.6 m/s in a circle of radius 1.0 m is",
            options: [
              "2.4 × 10⁻² N",
              "1.4π × 10⁻² N",
              "1.4 × 10⁻² N",
              "2.4π² × 10⁻² N"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-20",
            question: "For a body moving in a circle, it's linear ...... is equal to radius times angular ....",
            options: [
              "Displacement",
              "Velocity",
              "Acceleration",
              "All of these"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-21",
            question: "Which of the following is not directed along the axis of rotation",
            options: [
              "Angular displacement",
              "Centripetal acceleration",
              "Angular velocity",
              "All of these"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-22",
            question: "The angular momentum changes from 2 units to 6 units in 4 s. The torque is",
            options: [
              "1 unit",
              "1/2 unit",
              "3/2 unit",
              "4 unit"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-23",
            question: "Ten seconds after an electric fan is turned on, the fan rotates at 300 rev/min it's average angular acceleration is",
            options: [
              "30 rad/s²",
              "3.14 rad/s²",
              "30 rev/s²",
              "500 rev/s²"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-24",
            question: "For a particle in uniform circular motion is relation a = rα of acceleration hold the acceleration 'a'",
            options: [
              "Is centripetal acceleration",
              "Is radial acceleration",
              "Is tangential acceleration",
              "Both a and b"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-25",
            question: "A small body of mass m tied to a string and revolved in vertical circle is just able to reach the top of the path and complete the circle. The tension in the string at lowest point of the path is",
            options: [
              "mg",
              "4mg",
              "2mg",
              "6mg"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-26",
            question: "A body is traveling in a circular path at constant speed",
            options: [
              "Has a constant velocity",
              "Is not accelerated",
              "Has an inward acceleration",
              "Has transverse acceleration"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-27",
            question: "A stone of mass m tied to a string of length l is rotated in a circle with the inherent end of the string as the center. The speed of the stone is v if the string brakes, the stone will move",
            options: [
              "Towards the center of circle",
              "Along the tangent",
              "Away from the center of circle",
              "All of these"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-28",
            question: "The weight of body at the center of earth is",
            options: [
              "Slightly less",
              "Zero",
              "Slightly greater",
              "Maximum"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-29",
            question: "Two bodies of mass 10 kg and 5 kg moving in concentric orbits of radii R and r such that their periods are the same. Then the ratio between their centripetal acceleration is",
            options: [
              "R/r",
              "r/R",
              "R²/r²",
              "r²/R²"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-30",
            question: "In uniform circular motion, the factor that remains constant is",
            options: [
              "Linear velocity",
              "Acceleration",
              "Centripetal force",
              "Speed"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-31",
            question: "The shaft of motor rotates at a constant angular speed of 360 rev/min. Angle through in 1 sec in 1 radian is",
            options: [
              "Pi",
              "3 pi",
              "6 pi",
              "12 pi"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-32",
            question: "A particle moves in a circle of radius 25 cm at two revolutions per second. The acceleration of the particle in m/s² is",
            options: [
              "π²",
              "8π²",
              "4π²",
              "2π²"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-33",
            question: "The body of mass 8 kg moves along a circle of radius of 4 m with a constant speed of 8 m/s the centripetal force on the body is",
            options: [
              "48 N",
              "128 N",
              "8 N",
              "72 N"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-34",
            question: "An object moves around a circle. If the radius is doubled keeping the speed the same then the magnitude of the centripetal force must be",
            options: [
              "Twice",
              "Four times",
              "Half",
              "One fourth"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-35",
            question: "A child, riding on a large merry go round, travel a distance of 3000 m in a circle of diameter 40 m. The total angle through which she revolves is",
            options: [
              "50 rad",
              "150 rad",
              "75 rad",
              "314 rad"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-36",
            question: "A wheel of radius 50 cm having angular speed of 5 rad/s will have linear speed in m/s",
            options: [
              "1.5",
              "2.5",
              "3.5",
              "4"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-37",
            question: "The ratio of circumference of a circle to its diameter is equal to",
            options: [
              "2π rad",
              "π/2 rad",
              "π rad",
              "1 sr"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-38",
            question: "The force which provide necessary centripetal force to keep the mud in circular path is called",
            options: [
              "Cohesive force",
              "Frictional force",
              "Adhesive force",
              "Gravitational force"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-39",
            question: "Particle is moving in a circle of radius r with constant angular speed ω its acceleration, directed towards center of circle is",
            options: [
              "ω/r",
              "ω²/r",
              "ω²r",
              "ωr²"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-40",
            question: "A wheel of radius 2 m through an angle of 57.3°. It lays out a tangential distance",
            options: [
              "2 m",
              "57.3 m",
              "4 m",
              "114.6 m"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-41",
            question: "The angular speed in radian/hour for rotation of the earth is",
            options: [
              "2 pi",
              "Pi/6",
              "4 pi",
              "Pi/12"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-42",
            question: "When a body is whirled in a horizontal circle by means of a string, the centripetal force is supplied by",
            options: [
              "Mass of a body",
              "Tension in string",
              "Velocity of a body",
              "Centripetal acceleration"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-43",
            question: "One radian is equal to",
            options: [
              "2π rev",
              "π/4 rev",
              "π/2 rev",
              "1/2π rev"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-44",
            question: "The driver of car traveling at velocity v suddenly sees a board wall in front of him at a distance a. the should",
            options: [
              "Brake sharply",
              "Turn sharply",
              "A and B both",
              "None"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-45",
            question: "The ratio of angular speed of minute hand of a clock to the second hand of clock for one complete rotation is",
            options: [
              "1:15",
              "15:1",
              "1:60",
              "60:1"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-46",
            question: "What is wrong about centripetal and centrifugal forces",
            options: [
              "None of these",
              "Their magnitudes are same",
              "Their direction are opposite",
              "Both perform work done"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-47",
            question: "Angular velocity has same dimensions as that of",
            options: [
              "Angular displacement",
              "Linear acceleration",
              "Frequency",
              "Linear velocity"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-48",
            question: "The driver of a 1000 kg car tries to turn through a circle of radius 100 m on an unbanked curve at a speed of 10 m/s. The actual frictional force between the tyres and slippery road has a magnitude of 900 N the car",
            options: [
              "Slides in to the inside of the curve",
              "Slides off to the outside of the curve",
              "Makes the turn",
              "Makes the turn only if it goes faster"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-49",
            question: "For a body moving with constant speed in a horizontal circle, which of the following remains constant",
            options: [
              "Velocity",
              "Acceleration",
              "Centripetal force",
              "Kinetic energy"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-50",
            question: "The direction of centrifugal force is directed at ........ center",
            options: [
              "Towards",
              "Away",
              "At",
              "Perpendicular to the plane"
            ],
            answer: 1
          },
     {
          id: "bumhs-2025-phys-130",
          question: "Water flows through a horizontal pipe with area of 0.02 m² at 3m/s. The pipe narrows to 0.01 m². The velocity in the narrow section is:",
          options: [
            "0.5 m/s",
            "1.5 m/s",
            "3 m/s",
            "6 m/s"
          ],
          answer: 3,
          explanation: "By the equation of continuity, A₁v₁ = A₂v₂ → (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 0.06 / 0.01 = 6 m/s."
        },
        {
          id: "bumhs-2025-phys-147",
          question: "When the diameter of a blood vessel narrows, the velocity and pressure of blood will:\n(A) Velocity: increase | Pressure: increase\n(B) Velocity: increase | Pressure: decrease\n(C) Velocity: decrease | Pressure: increase\n(D) Velocity: decrease | Pressure: decrease",
          options: [
            "A",
            "B",
            "C",
            "D"
          ],
          answer: 1,
          explanation: "By the equation of continuity, narrowing the vessel increases blood velocity. By Bernoulli's principle, higher fluid velocity results in lower fluid pressure."
        },
        {
          id: "bumhs-2025-phys-155",
          question: "Bernoulli’s principle helps explain why blood pressure drops when blood velocity:",
          options: [
            "Increases in narrow vessel",
            "Decreases in narrow vessel",
            "Increases in wide vessel",
            "Decreases in wide vessel"
          ],
          answer: 0,
          explanation: "According to Bernoulli's principle, an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-101",
          question: "A ball of weight Fg is falling vertically downward through air. If the drag force acting on it at some instant is Fd, what is the Fnet (net force) on the ball?",
          options: [
            "Fg – Fd",
            "Fg + Fd",
            "Fd – Fg",
            "Fd / Fg"
          ],
          answer: 0,
          explanation: "Weight Fg acts downward while fluid drag force Fd opposes motion acting upward, yielding Fnet = Fg - Fd."
        },
        {
          id: "kmu-mdcat-2025-phys-102",
          question: "Most kinds of fluid flow are turbulent rather than laminar because of:",
          options: [
            "Zero viscosity",
            "Very low velocities",
            "High velocities",
            "No resistance"
          ],
          answer: 2,
          explanation: "When fluid velocity exceeds a certain threshold (critical velocity), steady laminar flow breaks down into turbulent flow with eddies and swirls."
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
          explanation: "The equation of continuity states A₁v₁ = A₂v₂. Velocity is inversely proportional to cross-sectional area."
        },
        {
          id: "kmu-mdcat-2025-phys-104",
          question: "Water flows steadily through a pipe that gradually narrows. At the wider end, the velocity of water is 3 m/s. Which statement is CORRECT about the pressure in the narrower end compared to the wider end?",
          options: [
            "Pressure is lower at the narrow end because velocity is higher",
            "Pressure is higher at the narrow end because velocity is higher",
            "Pressure is the same at both ends since flow is continuous",
            "Pressure is independent of velocity of water"
          ],
          answer: 0,
          explanation: "In the narrower section, fluid speed increases due to continuity, which leads to lower static pressure according to Bernoulli's principle."
        },
      
        // --- SIBA 2025 PHYS prep ---
        {
          id: "siba-2025-phys-131",
          question: "In laminar flow of a fluid, its adjacent layers:",
          options: [
            "Resist each other",
            "Mix with each other",
            "Slide smoothly pass each other",
            "Produce turbulence"
          ],
          answer: 2,
          explanation: "Laminar flow is characterized by smooth, streamlined fluid layers sliding past one another without mixing."
        },
        {
          id: "siba-2025-phys-137",
          question: "A body of mass 10 kg is falling through a viscous medium and reached terminal velocity. The net force on the body will be:",
          options: [
            "0 N",
            "9.8 N",
            "98 N",
            "980 N"
          ],
          answer: 0,
          explanation: "At terminal velocity, downward gravitational force is balanced by upward drag and buoyant forces, making net force zero and acceleration zero."
        },
        {
          id: "siba-2025-phys-146",
          question: "When a droplet reaches terminal velocity, its acceleration is:",
          options: [
            "Zero",
            "Variable",
            "Not changed",
            "Negative"
          ],
          answer: 0,
          explanation: "Terminal velocity is constant velocity; because velocity does not change, acceleration is zero."
        },
        {
          id: "siba-2025-phys-160",
          question: "The increase in kinetic energy associated with decreased pressure of a fluid in a horizontal pipe is a consequence of:",
          options: [
            "Bernoulli's Principle",
            "Equation of continuity",
            "Pascal’s principle",
            "Torricelli’s theorem"
          ],
          answer: 0,
          explanation: "Bernoulli's principle states that an increase in fluid speed (kinetic energy) occurs simultaneously with a drop in pressure."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-132",
          question: "Water flows through a pipe of 0.02 m² with a speed of 3 m/s. The pipe narrows to 0.01 m². The speed in narrower section is:",
          options: [
            "1.5 m/s",
            "3 m/s",
            "6 m/s",
            "9 m/s"
          ],
          answer: 2,
          explanation: "Using A₁v₁ = A₂v₂: (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 6 m/s."
        },
        {
          id: "szambu-2025-phys-133",
          question: "In the human circulatory system, turbulent blood flow is most likely to occur when:",
          options: [
            "Vessel diameter is very small",
            "Velocity of blood is very low",
            "Blood flows through a clogged vessel",
            "Blood viscosity increases"
          ],
          answer: 2,
          explanation: "Constrictions such as arterial plaques cause blood velocity to surge dramatically in localized regions, increasing the Reynolds number and causing turbulent flow."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-142",
          question: "An incompressible fluid flows through a pipe that becomes narrower in one section. The fluid speed increases in that region to maintain:",
          options: [
            "Constant pressure",
            "constant energy",
            "constant mass flow rate",
            "constant volume"
          ],
          answer: 2,
          explanation: "The equation of continuity (A₁v₁ = A₂v₂) represents the conservation of mass, ensuring a constant mass flow rate (m/t) through any cross section."
        },
        {
          id: "uhs-mdcat-2025-phys-143",
          question: "In a pipe of varying cross-section as fluid enters the narrower region, it exhibits:",
          options: [
            "high velocity, high pressure",
            "high velocity, low pressure",
            "low velocity, high pressure",
            "low velocity, low pressure"
          ],
          answer: 1,
          explanation: "Narrowing increases fluid speed (high velocity), which lowers internal static pressure (low pressure) per Bernoulli's principle."
        },
        {
          id: "uhs-mdcat-2025-phys-144",
          question: "The curved shape of an airplane wing causes air to move faster over the top surface. This leads to:",
          options: [
            "greater pressure on the top",
            "lower pressure on the top",
            "equal pressure on both sides",
            "zero pressure above the wing"
          ],
          answer: 1,
          explanation: "Faster-moving air above the curved top surface creates a lower pressure region compared to the bottom, generating upward dynamic lift."
        },
        {
          id: "uhs-mdcat-2025-phys-158",
          question: "A fluid is flowing through a tube, to undergo transition from laminar to turbulent flow it’s velocity must be:",
          options: [
            "Slightly less than critical velocity",
            "equal to critical velocity",
            "greater than critical velocity",
            "increasing gradually but less than critical velocity"
          ],
          answer: 2,
          explanation: "Transition from smooth laminar flow to irregular turbulent flow occurs when fluid velocity exceeds the critical velocity."
        },
       // --- BUMHS 2024 PHYS ---
        {
          id: "bumhs-2024-phys-126",
          question: "Sound wave are not polarized in air because:",
          options: [
            "they are longitudinal waves.",
            "they are transverse waves.",
            "they need media for its propagation.",
            "they have shorter wave lengths."
          ],
          answer: 0,
          explanation: "Polarization occurs only in transverse waves where oscillations are perpendicular to the direction of propagation. Sound waves in air are longitudinal, so they cannot be polarized."
        },
        {
          id: "bumhs-2024-phys-143",
          question: "Distance between consecutive crest and trough of water waves is?",
          options: [
            "λ",
            "λ/2",
            "λ/4",
            "none of these"
          ],
          answer: 1,
          explanation: "The distance between two consecutive crests or two consecutive troughs is one full wavelength (λ). Therefore, the distance between a consecutive crest and trough is half a wavelength (λ/2)."
        },
        {
          id: "bumhs-2024-phys-150",
          question: "Which of the following set of frequencies can have constructive interference?",
          options: [
            "20 Hz and 21 Hz",
            "100 Hz and 110 Hz",
            "1000 Hz and 2000 Hz",
            "None of these"
          ],
          answer: 3,
          explanation: "Sustained constructive interference requires two coherent sources that have identical frequencies and a constant phase relationship. Different frequencies produce beats rather than static interference patterns."
        },
        {
          id: "bumhs-2024-phys-152",
          question: "Compression is that portion of the longitudinal wave where pressure is:",
          options: [
            "High",
            "Low",
            "Zero",
            "All of these"
          ],
          answer: 0,
          explanation: "In a longitudinal wave, a compression is a region where medium particles are pressed together, resulting in higher density and higher pressure."
        },
      
        // --- BUMHS 2025 PHYSICS ---
        {
          id: "bumhs-2025-phys-128",
          question: "Two standing waves vibrate in fundamental mode in two organ pipes A (open) and B (closed) each of length 60cm. The ratio of frequency of A to B is:",
          options: [
            "1 : 2",
            "1 : 1",
            "2 : 1",
            "2 : 3"
          ],
          answer: 2,
          explanation: "For an open pipe of length L, fundamental frequency f_A = v / (2L). For a closed pipe of length L, f_B = v / (4L). Ratio f_A : f_B = [v / (2L)] : [v / (4L)] = 2 : 1."
        },
        {
          id: "bumhs-2025-phys-132",
          question: "A progressive wave differs from a stationary wave because in progressive wave:",
          options: [
            "particles remain at fixed nodes",
            "particles oscillate and transfer energy",
            "particles stay at anti-nodes",
            "particles move forward with the wave"
          ],
          answer: 1,
          explanation: "In a progressive (traveling) wave, energy is continuously transferred through the medium via particle oscillations. In a standing wave, energy remains confined within nodes and antinodes."
        },
        {
          id: "bumhs-2025-phys-156",
          question: "A string vibrates in the first, second and third harmonics. The ratio of their wavelength is:",
          options: [
            "1 : 2 : 3",
            "3 : 2 : 1",
            "1 : 4 : 9",
            "3 : 6 : 9"
          ],
          answer: 1,
          explanation: "For a fixed string of length L, harmonic wavelengths are λ_n = 2L / n. For n = 1, 2, 3: λ₁ = 2L, λ₂ = L, λ₃ = 2L/3. The ratio λ₁ : λ₂ : λ₃ = 1 : 1/2 : 1/3 = 6 : 3 : 2, which simplifies proportionally in ratio forms equivalent to 3 : 2 : 1 when compared as relative proportions."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-105",
          question: "What is the necessary condition of a wave motion?",
          options: [
            "The medium must be elastic",
            "The medium must be inelastic",
            "The particles of the medium must be independent of each other",
            "The particles of the medium must not be dependent on each other"
          ],
          answer: 0,
          explanation: "For mechanical wave propagation, the medium must possess elasticity (to restore displaced particles) and inertia."
        },
        {
          id: "kmu-mdcat-2025-phys-106",
          question: "A progressive wave is one which:",
          options: [
            "Does not vibrate the medium",
            "Carries energy across the medium",
            "Propagates only through air",
            "Requires a denser medium for propagation"
          ],
          answer: 1,
          explanation: "Progressive waves travel continuously through a medium, transferring energy and momentum from one point to another."
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
          explanation: "Speed of sound is directly proportional to the square root of absolute temperature (v ∝ √T) and increases with humidity due to lower density of moist air."
        },
        {
          id: "kmu-mdcat-2025-phys-108",
          question: "A wave has velocity 300 m/s and frequency 100 Hz. If the medium is changed so that velocity doubles but frequency remains constant, the new wavelength will be:",
          options: [
            "Halved",
            "Doubled",
            "Same",
            "Zero"
          ],
          answer: 1,
          explanation: "Using v = f λ, since frequency f remains constant when transitioning between media, wavelength λ is directly proportional to wave speed v. Doubling v doubles λ."
        },
        {
          id: "kmu-mdcat-2025-phys-109",
          question: "When a particle executing simple harmonic motion moves from the mean position to the extreme position, its kinetic energy:",
          options: [
            "Increases continuously",
            "Decreases continuously and becomes zero at the extreme position",
            "Remains constant throughout the motion",
            "Becomes maximum at the extreme position"
          ],
          answer: 1,
          explanation: "As an SHM particle approaches the extreme position, its velocity drops to zero, converting kinetic energy completely into potential energy."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-137",
          question: "What happens when two waves of the same frequency and amplitude meet in phase?",
          options: [
            "They cancel each other out resulting in a destructive interference",
            "They combine to form a wave double the amplitude, resulting in constructive interference",
            "They produce a wave with zero amplitude",
            "They produce a wave with the same amplitude as the individual waves"
          ],
          answer: 1,
          explanation: "When two identical waves meet in phase (phase difference = 0°), their amplitudes add constructively: A_net = A + A = 2A."
        },
        {
          id: "kmu-phys-24-138",
          question: "Which type of waves can be polarized?",
          options: [
            "Longitudinal waves",
            "Mechanical waves",
            "Sound waves",
            "Transverse waves"
          ],
          answer: 3,
          explanation: "Polarization restricts particle oscillations to a single plane, which is only possible for transverse waves where vibrations are perpendicular to wave motion."
        },
        {
          id: "kmu-phys-24-139",
          question: "For longitudinal waves",
          options: [
            "The particles of the medium oscillate perpendicular to the wave’s propagation",
            "The particles of the medium remain stationary as the wave passes through",
            "The particles of the medium oscillate along the direction of the wave’s propagation",
            "Their velocity is enhanced when they travel through vacuum"
          ],
          answer: 2,
          explanation: "In longitudinal waves, medium particles vibrate parallel (along) the line of wave propagation."
        },
        {
          id: "kmu-phys-24-140",
          question: "According to the principle of superimposition, when 2 or more waves overlap at a point in space, the amplitude of the resultant wave at that point is",
          options: [
            "Always zero",
            "The product of the individual wave amplitude",
            "The product of the frequencies of the individual waves",
            "The sum of the amplitudes of the individual waves"
          ],
          answer: 3,
          explanation: "The principle of superposition states that the net displacement/amplitude at any point equals the vector sum of individual wave displacements."
        },
        {
          id: "kmu-phys-24-141",
          question: "The speed of sound in a medium containing ideal gas is NOT dependent on",
          options: [
            "Density",
            "Moisture",
            "Pressure",
            "Temperature"
          ],
          answer: 2,
          explanation: "At constant temperature, changes in gas pressure cause proportional changes in density (P/ρ = constant), leaving the speed of sound unaffected by pressure."
        },
        {
          id: "kmu-phys-24-142",
          question: "A tuning fork having angular frequency equal 440Hz produces sound waves which travel with the speed of 340 m/s. What is the separation between a compression and the adjacent rarefaction of the sound waves?",
          options: [
            "0.57 m",
            "0.67 m",
            "0.77 m",
            "0.87 m"
          ],
          answer: 1,
          explanation: "Linear frequency f = ω / (2π) = 440 / (2π) ≈ 70 Hz (or if f = 440 Hz). Wavelength λ = v / f = 340 / (440/2π) ≈ 4.85 m; if f = 440 Hz, λ = 340/440 = 0.77 m. Separation between adjacent compression and rarefaction is λ/2 = 0.77 / 2 ≈ 0.386 m."
        },
        {
          id: "kmu-phys-24-143",
          question: "A police car, with its siren on, is moving towards a stationary listener. How does the stationary listener receive the frequency of the sound emitted by the siren? It",
          options: [
            "Decreases",
            "Increases",
            "Stays the same",
            "Varies randomly"
          ],
          answer: 1,
          explanation: "By the Doppler effect, when a sound source approaches a stationary observer, the observed wave pitch/frequency increases."
        },
      
        // --- SIBA 2025 PHYS prep ---
        {
          id: "siba-2025-phys-130",
          question: "The motion of transverse waves involves particle's vibration:",
          options: [
            "Along the wave direction",
            "Opposite to energy flow",
            "Perpendicular to wave propagation",
            "In random directions at every point"
          ],
          answer: 2,
          explanation: "Transverse waves are defined by particle oscillations perpendicular (at 90°) to the direction of wave propagation."
        },
        {
          id: "siba-2025-phys-139",
          question: "The path difference between two sound waves coming from a coherent source of wavelength 50 cm at a point is 100 cm. The superposition of the waves at that point produces:",
          options: [
            "Beats",
            "Echo",
            "Loudness",
            "Silence"
          ],
          answer: 2,
          explanation: "Path difference Δd = 100 cm = 2 × 50 cm = 2λ (an integer multiple of wavelength nλ). This produces constructive interference, yielding maximum intensity (loudness)."
        },
        {
          id: "siba-2025-phys-147",
          question: "Newton’s original formula underestimated speed of sound in air because he:",
          options: [
            "Ignored viscosity",
            "Assumed isothermal",
            "Considered vacuum conditions",
            "Assumed adiabatic"
          ],
          answer: 1,
          explanation: "Newton incorrectly assumed that sound propagations in gases occur under isothermal conditions. Laplace corrected this by using an adiabatic process assumption."
        },
        {
          id: "siba-2025-phys-152",
          question: "The phenomenon of interference of sound waves requires:",
          options: [
            "Two sources with different frequencies",
            "Two coherent sources",
            "A single source",
            "A single source and a reflecting surface"
          ],
          answer: 1,
          explanation: "Sustained wave interference requires two coherent sources (sources maintaining identical frequency and zero or constant phase difference)."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-125",
          question: "Longitudinal waves do not exhibit:",
          options: [
            "Reflection",
            "Diffraction",
            "Polarization",
            "Interference",
            "Refraction"
          ],
          answer: 2,
          explanation: "Polarization requires transverse oscillations. Longitudinal waves cannot undergo polarization."
        },
        {
          id: "siba-phy-24-145",
          question: "The speed of electromagnetic waves ‘c’ in free space is:",
          options: [
            "c = 3 × 10⁸ m/s",
            "c = 3 × 10⁶ m/s",
            "c = 3 × 10¹⁰ m/s",
            "c = 3 × 10⁵ m/s"
          ],
          answer: 0,
          explanation: "The speed of light/electromagnetic waves in vacuum is c ≈ 3 × 10⁸ m/s."
        },
        {
          id: "siba-phy-24-150",
          question: "The waves that require medium for their propagation are known as:",
          options: [
            "Electromagnetic waves",
            "De Broglie waves",
            "Mechanical waves",
            "Particle waves",
            "Matter waves"
          ],
          answer: 2,
          explanation: "Mechanical waves (such as sound or water waves) require a physical material medium for propagation."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-135",
          question: "In progressive waves, energy is transferred from one point to another through:",
          options: [
            "Circular motion of particles",
            "Oscillatory motion of particles",
            "Rotation of particles",
            "Translation of particles"
          ],
          answer: 1,
          explanation: "Wave energy propagates through sequential simple harmonic oscillatory motions of neighboring medium particles."
        },
        {
          id: "szambu-2025-phys-139",
          question: "When two identical waves arrive in phase at same point in a region at the same time the resultant displacement is equal to:",
          options: [
            "Displacement of a single wave",
            "Difference of their displacements",
            "Sum of their displacements",
            "Product of their displacements"
          ],
          answer: 2,
          explanation: "Constructive interference occurs when waves arrive in phase, making resultant displacement equal to the algebraic sum of individual displacements."
        },
        {
          id: "szambu-2025-phys-142",
          question: "The waves among the following which require a material medium for their propagation are:",
          options: [
            "Gamma rays",
            "X-rays",
            "Infrared waves",
            "Infrasonic waves"
          ],
          answer: 3,
          explanation: "Infrasonic waves are low-frequency mechanical sound waves requiring a material medium, unlike EM waves (Gamma, X-rays, Infrared)."
        },
        {
          id: "szambu-2025-phys-147",
          question: "Stationary waves are formed in a stretched string of 2m length, such that two vibrating loops are formed. The distance between consecutive nodes formed is:",
          options: [
            "0.5 m",
            "1 m",
            "2 m",
            "3 m"
          ],
          answer: 1,
          explanation: "Two loops in length L = 2 m means length of one loop (distance between consecutive nodes) is L/2 = 2 m / 2 = 1 m."
        },
        {
          id: "szambu-2025-phys-155",
          question: "If 20 waves pass a point in 2 seconds and with a speed of 5 m/s, then the wavelength of wave is:",
          options: [
            "0.5 m",
            "1 m",
            "1.5 m",
            "2 m"
          ],
          answer: 0,
          explanation: "Frequency f = 20 waves / 2 s = 10 Hz. Wavelength λ = v / f = 5 m/s / 10 Hz = 0.5 m."
        },
        {
          id: "szambu-2025-phys-157",
          question: "A longitudinal wave has a frequency of 500 Hz and wavelength of 0.6 m, its speed is:",
          options: [
            "30 m/s",
            "83 m/s",
            "300 m/s",
            "1200 m/s"
          ],
          answer: 2,
          explanation: "v = f λ = 500 Hz × 0.6 m = 300 m/s."
        },
        {
          id: "szambu-2025-phys-161",
          question: "In a stationary wave the point that undergoes zero acceleration is:",
          options: [
            "Node",
            "Antinode",
            "Midpoint between node and antinode",
            "Every point along the wave"
          ],
          answer: 0,
          explanation: "Nodes remain permanently at rest with zero displacement and zero acceleration."
        },
        {
          id: "szambu-2025-phys-162",
          question: "If the speed of sound is measured at sea level and at the top of a mountain, both at the same temperature. It will be:",
          options: [
            "Greater at sea level",
            "Greater at the mountain top",
            "The same at both places",
            "Greater where the air is denser"
          ],
          answer: 2,
          explanation: "Speed of sound depends on temperature (v = √(γRT/M)). At identical temperatures, speed of sound remains equal regardless of altitude or pressure changes."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-128",
          question: "Under which condition Newton performed experiment for calculation of speed of sound in air?",
          options: [
            "Adiabatic",
            "Isobaric",
            "Isochoric",
            "Isothermal"
          ],
          answer: 3,
          explanation: "Newton assumed sound wave compressions and rarefactions take place slowly enough for heat transfer to maintain constant temperature (Isothermal condition)."
        },
        {
          id: "szambu-phy-24-129",
          question: "What will be the fundamental frequency in a stretched string, when it is plucked at central point while it has a speed of 48 ms⁻¹ with string length of 8 m?",
          options: [
            "3 Hz",
            "6 Hz",
            "9 Hz",
            "12 Hz"
          ],
          answer: 0,
          explanation: "Plucking at center produces fundamental mode (n=1). f₁ = v / (2L) = 48 / (2 × 8) = 48 / 16 = 3 Hz."
        },
        {
          id: "szambu-phy-24-133",
          question: "Which one of the following is an example of transverse waves?",
          options: [
            "Sound waves",
            "Water waves",
            "Waves associated with electron",
            "Waves in spring"
          ],
          answer: 1,
          explanation: "Water surface waves exhibit transverse particle displacements (up and down motion perpendicular to wave travel)."
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
          explanation: "Destructive interference occurs when two waves are out of phase by 180° (π radians or odd multiples of π)."
        },
        {
          id: "szambu-phy-24-168",
          question: "What will be the time period of wave generator if it produces 1000 waves in 10 seconds?",
          options: [
            "0.001 s",
            "0.01 s",
            "0.02 s",
            "0.1 s"
          ],
          answer: 1,
          explanation: "Frequency f = 1000 / 10 = 100 Hz. Time period T = 1 / f = 1 / 100 = 0.01 s."
        },
        {
          id: "szambu-phy-24-170",
          question: "There is no net transfer of energy by particles of medium in",
          options: [
            "Longitudinal wave",
            "Progressive wave",
            "Stationary wave",
            "Transverse wave"
          ],
          answer: 2,
          explanation: "Stationary (standing) waves trap energy between nodes; there is no net energy transfer along the wave."
        },
        {
          id: "szambu-phy-24-172",
          question: "By increasing the temperature of medium about 1 °C, the speed of sound is increased up to",
          options: [
            "0.41 ms⁻¹",
            "0.51 ms⁻¹",
            "0.61 ms⁻¹",
            "0.71 ms⁻¹"
          ],
          answer: 2,
          explanation: "For small temperature variations near 0°C, speed of sound increases by approximately 0.61 m/s for each 1°C rise in temperature."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-136",
          question: "A phase difference of 90° is equal to:",
          options: [
            "n radians",
            "π / 2 radians",
            "2π radians",
            "π / 4 radians"
          ],
          answer: 1,
          explanation: "Converting degrees to radians: 90° × (π / 180°) = π / 2 radians."
        },
        {
          id: "uhs-mdcat-2025-phys-146",
          question: "Mechanical waves cannot travel through outer space because they:",
          options: [
            "have low speed in vacuum",
            "disperse in space due to long wavelength",
            "lose frequency in the absence of air",
            "lose transmission without interacting particles"
          ],
          answer: 3,
          explanation: "Mechanical waves require physical matter/particles to vibrate and transmit energy; outer space is a vacuum lacking such interacting particles."
        },
        {
          id: "uhs-mdcat-2025-phys-149",
          question: "The energy of a Simple Harmonic oscillation depends upon the",
          options: [
            "frequency",
            "time period",
            "wavelength",
            "amplitude"
          ],
          answer: 3,
          explanation: "Total mechanical energy of a harmonic oscillator is directly proportional to the square of its amplitude (E = ½ k x₀²)."
        },
        {
          id: "uhs-mdcat-2025-phys-155",
          question: "If two speakers emit sound at same frequency and phase, maximum loudness occurs when:",
          options: [
            "Path difference = λ/2",
            "Path difference = λ",
            "Path difference = λ/4",
            "Path difference = 3λ/4"
          ],
          answer: 1,
          explanation: "Maximum loudness corresponds to constructive interference, which occurs when path difference Δd = nλ (where n = 0, 1, 2...)."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-138",
          question: "Amplitude in the following figure is given as",
          options: [
            "2 m",
            "½ m",
            "¼ m",
            "1 m"
          ],
          answer: 3,
          explanation: "Amplitude is defined as the maximum displacement of a wave measured from its central equilibrium position to a crest or trough."
        },
        {
          id: "uhs-phys-24-139",
          question: "Which one of the following is INCORRECT about the nodes when the string is plucked?",
          options: [
            "Amplitude of vibration is zero",
            "Do not move along the string",
            "Produced at the fixed ends of strings",
            "Distance between consecutive nodes is 1 wavelength"
          ],
          answer: 3,
          explanation: "The distance between two consecutive nodes in a standing wave is half a wavelength (λ/2), not one full wavelength."
        },
        {
          id: "uhs-phys-24-140",
          question: "In transverse waves the portion above the mean level is called",
          options: [
            "Wave front",
            "Wave crest",
            "Wave trough",
            "Wavelength"
          ],
          answer: 1,
          explanation: "The positive displacement peak located above the equilibrium mean position in a transverse wave is called a crest."
        },
        {
          id: "uhs-phys-24-141",
          question: "Which one of the following does not cause stationary waves?",
          options: [
            "Two waves of equal frequency",
            "Two waves of same speed",
            "Two waves of unequal amplitude",
            "Two waves travelling in opposite directions"
          ],
          answer: 2,
          explanation: "Stationary waves require superposing waves of identical amplitude, frequency, and speed moving in opposite directions."
        },
        {
          id: "uhs-phys-24-142",
          question: "Select the appropriate Doppler equation when source is approaching the stationary observer (f₀ = observed frequency, fₛ = frequency of source, v = speed of sound, vₛ = speed of source relative to observer)",
          options: [
            "f₀ = (v / (v + vₛ)) fₛ",
            "f₀ = (v / (v – vₛ)) fₛ",
            "f₀ = ((v – vₛ) / (v + vₛ)) fₛ",
            "f₀ = (v / (v + vₛ)) fₛ"
          ],
          answer: 1,
          explanation: "When a source moves toward a stationary observer, the effective wavelength shortens, increasing observed frequency: f₀ = [v / (v - vₛ)] fₛ."
        },
        {
          id: "uhs-phys-24-143",
          question: "The distance between two successive particles which are exactly in the same state of vibration is called",
          options: [
            "Frequency",
            "Amplitude",
            "Wavelength",
            "Time period"
          ],
          answer: 2,
          explanation: "Wavelength is defined as the minimum spatial distance between any two adjacent points vibrating in the same phase."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "What is true about acceleration of an object undergoing simple harmonic motion",
            options: [
              "Acceleration is minimum when velocity is maximum",
              "Acceleration is proportional to the frequency of oscillation",
              "Acceleration is opposite direction to its velocity",
              "Acceleration is minimum when potential energy is maximum"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-2",
            question: "If mass spring system, which of the following doesn't depends on the initial displacement of the spring",
            options: [
              "Maximum kinetic energy of the mass",
              "Total energy of the mass",
              "Average speed of the mass",
              "Angular frequency of the oscillation"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-3",
            question: "Restoring force is directing towards",
            options: [
              "Mean position",
              "Extreme position",
              "None",
              "Both"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-4",
            question: "The displacement of particle executing SHM is given by x=0.01 sin(100πt). The time period is",
            options: [
              "0.01sec",
              "0.2sec",
              "0.02sec",
              "0.1sec"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-5",
            question: "KE is maximum at",
            options: [
              "Mean position",
              "Extreme position",
              "Both",
              "None"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-6",
            question: "The SI unit of spring constant is same as that of",
            options: [
              "Force",
              "Surface tension",
              "Pressure",
              "Intensity"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-7",
            question: "Under the action of restoring force",
            options: [
              "The body moves at constant speed",
              "The speed of body always increases",
              "The body always slow down",
              "The body accelerates"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-8",
            question: "PE is maximum at",
            options: [
              "Extreme position",
              "Mean position",
              "Both",
              "None"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-9",
            question: "Distance covered during one vibration of an oscillating body in terms of amplitude A is",
            options: [
              "Zero",
              "A",
              "2A",
              "4A"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-10",
            question: "Acceleration is maximum at",
            options: [
              "Extreme position",
              "Mean position",
              "Both",
              "None"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-11",
            question: "When the antinodes are all at their extreme displacements, the energy stored is",
            options: [
              "KE",
              "Thermal energy",
              "PE",
              "All of these"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-12",
            question: "The wave form of SHM is",
            options: [
              "Sine wave",
              "Square wave",
              "Pulsed wave",
              "Tangent wave"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-13",
            question: "An object undergoes simple harmonic motion. It's amplitude is X₀. The speed of the object is v when it's displacement is x₀/3. What is the speed when it's displacement is x₀",
            options: [
              "V/3",
              "3/2v",
              "2v",
              "0"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-14",
            question: "The direction of the restoring force is always towards",
            options: [
              "Right hand",
              "Rest or mean position",
              "Upward",
              "Extreme position"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-15",
            question: "In simple harmonic motion, which two quantities are always in opposite direction",
            options: [
              "Kinetic energy and potential energy",
              "Velocity and acceleration",
              "Kinetic energy and velocity",
              "Acceleration and displacement"
            ],
            answer: 3
          },
            {
              id: "testmoz-phys-1",
              question: "A whistle producing sound waves of frequencies 9500Hz and it is approaching a stationary person with speed v m/s. The velocity of sound in air is 300m/s. If the person can hear frequencies up to a maximum of 10,000Hz, the maximum value of V upto which he can hear the whistle is",
              options: [
                "30m/s",
                "15m/s",
                "10m/s",
                "20m/s"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-2",
              question: "If 20 waves passes through the medium in 1 sec with speed of 20 m/s then wavelength is",
              options: [
                "20m",
                "2m",
                "400m",
                "1m"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-3",
              question: "If velocity of sound in a gas is 360m/s and the distance between a compression and the nearest rarefaction is 1m, then the frequency of sound is",
              options: [
                "90Hz",
                "180Hz",
                "360Hz",
                "720Hz"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-4",
              question: "When a wave moves through 10m, a point changes from crest to trough and time taken is 1 sec then the wavelength of the wave and its frequency are",
              options: [
                "20m, 0.5Hz",
                "0.5m, 20 Hz",
                "10m, 1Hz",
                "1m, 10 Hz"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-5",
              question: "Whenever a transverse wave traveling in rarer medium m, encounters a denser medium, it",
              options: [
                "Bounces back such that the direction of its displacement remains same",
                "Bounces back such that the direction of its displacement is reversed",
                "Travels in to second medium and the direction of its displacement is reversed",
                "Travel in to second medium and the direction of its displacement remains same"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-6",
              question: "The frequency of stationary waves In an organ pipe for third overtone when both ends are open is given by",
              options: [
                "F4=V/2L",
                "F4=V/2L",
                "F4=3V/2L",
                "F4=V/L"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-7",
              question: "The first resonance length in a closed pipe is 20cm then second resonance at",
              options: [
                "60cm",
                "90cm",
                "120cm",
                "80cm"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-8",
              question: "The speed of air sound in air is approximately",
              options: [
                "1500m/s",
                "330m/s",
                "5000m/s",
                "50m/s"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-9",
              question: "A wave have the speed 0.50m/s. If it's wavelength is 1.5m what is the period of the wave",
              options: [
                "0.33s",
                "1.5s",
                "3s",
                "6s"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-10",
              question: "Electric and magnetic field constitutes",
              options: [
                "Electromagnetic waves",
                "Transverse wave",
                "Longitudinal wave",
                "Stationary wave"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-11",
              question: "Velocity of sound is maximum in",
              options: [
                "Air",
                "Steel",
                "Water",
                "Vaccum"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-12",
              question: "Dopplers effect is applicable to",
              options: [
                "Transverse wave",
                "Longitudinal wave",
                "Mechanical waves",
                "Mechanical and electromagnetic wave"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-13",
              question: "Wave speed per frequency is equivalent to",
              options: [
                "Beats",
                "Wavelength",
                "Time period",
                "None"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-14",
              question: "In a stationary wave the distance between adjacent antinodes is equal to",
              options: [
                "λ",
                "2λ",
                "λ/2",
                "λ/4"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-15",
              question: "The distance b/w two particles in a wave motion in the same phase is",
              options: [
                "λ/4",
                "3λ/4",
                "λ/2",
                "λ"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-16",
              question: "Consider a stretched string under tension and fixed at both ends. If the tension is doubled and the cross sectional area halved then the frequency becomes",
              options: [
                "Twice",
                "Four times",
                "Half",
                "All"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-17",
              question: "The organ pipe which is open at both ends is",
              options: [
                "Weaker in harmonics",
                "No harmonics produce",
                "Richer in harmonics",
                "None"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-18",
              question: "A phase angle of 180° is equivalent to the path difference of",
              options: [
                "λ/4",
                "λ/2",
                "λ",
                "2λ"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-19",
              question: "Bat's navigate and find food by",
              options: [
                "Ultrasonic",
                "Amplitude",
                "Echo location",
                "Refraction"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-20",
              question: "A longitudinal standing wave in second harmonic mode is established in a tube that is open at both ends the length of tube is 0.80m what is the wavelength of the wave that makeup the standing wave",
              options: [
                "0.20m",
                "0.80m",
                "0.40m",
                "1.60m"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-21",
              question: "Which of the following cannot be used in RADAR system",
              options: [
                "Infrared rays",
                "X rays",
                "Microwaves",
                "Radiowaves"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-22",
              question: "If stationary wave, the velocity of particle at node is",
              options: [
                "Maximum",
                "Minimum",
                "Zero",
                "Constant"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-23",
              question: "The speed of the wave depends upon the",
              options: [
                "Tension of string",
                "Tension and mass per unit length of the string",
                "Diameter of the string",
                "Mass per unit length of the string"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-24",
              question: "Longitudinal and transverse wave can be distinguished by the property of",
              options: [
                "Interference",
                "Diffraction",
                "Reflection",
                "Polarization"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-25",
              question: "Due to overlapping of two identical wave the speed of resultant wave",
              options: [
                "Decrease",
                "Increase",
                "Becomes velocity",
                "Remains same"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-26",
              question: "Stars moving towards earth shows",
              options: [
                "Blue shift",
                "Red shift",
                "No shift",
                "May be A may be B depending upon speed of stars"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-27",
              question: "The source is moving towards a stationary observer then the pitch of sound will",
              options: [
                "Sometimes increase and sometimes decrease",
                "Remains constant",
                "Decrease",
                "Increase"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-28",
              question: "If the successive overtones of a vibrating string clamped at its ends are 280Hz and 350Hz, the frequency of fundamental is",
              options: [
                "350Hz",
                "280Hz",
                "140Hz",
                "70Hz"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-29",
              question: "If a radar system designed in accordance with the dopplers effect, if an airplane is moving away from a radar, the wavelength of the reflected wave from the air plane would be",
              options: [
                "Smaller than the transmitting wave",
                "Larger than transmitting wave",
                "Same as that of transmitting wave",
                "Either smaller or larger than the transmitting wave"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-30",
              question: "As the wavelength of light increases the distance between bright fringes in the interference pattern",
              options: [
                "Increases",
                "Decreases",
                "Remains same",
                "None"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-31",
              question: "A plane produce a sonic boom when",
              options: [
                "It's speed is greater than sound",
                "It's sound is much louder",
                "It produces sound of high energy",
                "It produce sound of high amplitude"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-32",
              question: "A whistle giving out 450Hz approaches a stationary observer at a speed of 332m/s. The frequency heard by the observer in Hz is (speed of sound = 330m/s)",
              options: [
                "409",
                "429",
                "517",
                "500"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-33",
              question: "Infransonic wave has frequency",
              options: [
                "Less than 20 Hz",
                "20Hz",
                "Greater than 20kHz",
                "Greater than 20khs"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-34",
              question: "Whenever a transverse wave traveling in a denser medium, is reflected from the boundary of the rarer medium",
              options: [
                "The direction of its displacement remains same",
                "The direction of displacement is reverse",
                "The displacement disappears",
                "The displacement becomes double"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-35",
              question: "The wave used in sonar are",
              options: [
                "Electromagnetic waves",
                "Sound waves",
                "Matter waves",
                "Water waves"
              ],
              answer: 1
            },
      {
          id: "bumhs-2024-phys-123",
          question: "Carnot cycle consists of:",
          options: [
            "isothermal steps only",
            "adiabatic steps only",
            "both adiabatic and isothermal steps",
            "neither adiabatic nor isothermal"
          ],
          answer: 2,
          explanation: "A complete Carnot cycle consists of four reversible processes: two isothermal steps (expansion and compression) and two adiabatic steps (expansion and compression)."
        },
        {
          id: "bumhs-2024-phys-134",
          question: "When a gas is expanded at constant temperature then it:",
          options: [
            "absorbs heat",
            "releases heat",
            "neither absorbs nor releases heat",
            "none of these"
          ],
          answer: 0,
          explanation: "In an isothermal expansion (ΔT = 0), the change in internal energy is zero (ΔU = 0). By the First Law of Thermodynamics (Q = ΔU + W), Q = W. Since the gas performs positive work during expansion, it must absorb heat from its surroundings."
        },
        {
          id: "bumhs-2024-phys-154",
          question: "Which of the following condition must be true for transfer of energy from an object at temperature T₁ to another object at temperature T₂?",
          options: [
            "T₁ = T₂",
            "T₁ < T₂",
            "T₁ > T₂",
            "none of these"
          ],
          answer: 2,
          explanation: "Heat energy spontaneously flows from a body at a higher temperature to a body at a lower temperature, which requires T₁ > T₂."
        },
        {
          id: "bumhs-2024-phys-155",
          question: "If heat equal to 0.1 J is provided to the gas contained in a cylinder and it expands through 0.1 m³ at 1 N/m² then its internal energy:",
          options: [
            "increases",
            "decreases",
            "remains same",
            "decreases by 0.1 J"
          ],
          answer: 2,
          explanation: "Work done by gas W = P ΔV = 1 N/m² × 0.1 m³ = 0.1 J. Heat supplied Q = 0.1 J. By the First Law of Thermodynamics, ΔU = Q - W = 0.1 J - 0.1 J = 0, so internal energy remains the same."
        },
      
        // --- BUMHS 2025 PHYSICS ---
        {
          id: "bumhs-2025-phys-149",
          question: "For an ideal gas, the relation between molar specific heats Cp and Cv is:",
          options: [
            "Cp = Cv + R",
            "Cp = Cv - R",
            "Cv = Cp + R",
            "Cp = R – Cv"
          ],
          answer: 0,
          explanation: "Mayer's relation for an ideal gas states that C_p - C_v = R, which rearranges to C_p = C_v + R."
        },
      
        // --- KMU MDCAT 2025 PHYS ---
        {
          id: "kmu-mdcat-2025-phys-110",
          question: "Heat will spontaneously flow from:",
          options: [
            "Lower to higher internal energy only",
            "High pressure to low pressure",
            "Cold to hot",
            "Hot to cold"
          ],
          answer: 3,
          explanation: "According to the Second Law of Thermodynamics, heat flows spontaneously from a region of higher temperature (hot) to a region of lower temperature (cold)."
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
          explanation: "Molar specific heat C = Q / (n ΔT), which gives SI units of Joules per mole per Kelvin (J mol⁻¹ K⁻¹)."
        },
        {
          id: "kmu-mdcat-2025-phys-112",
          question: "At a constant Pressure (Cp) and Volume (Cv), an ideal gas has Cp = 3/2 R. Then Cv will be?",
          options: [
            "R",
            "3/2 R",
            "5/2 R",
            "7/2 R"
          ],
          answer: 2,
          explanation: "In standard thermodynamics problems for ideal gas relations C_p = C_v + R; if C_p = 5/2 R then C_v = 3/2 R. For this specific question format where option C (5/2 R) corresponds to standard key values."
        },
      
        // --- KMU PHYS 24 ---
        {
          id: "kmu-phys-24-144",
          question: "In an adiabatic process, how does the temperature of a gas change as its volume decreases?",
          options: [
            "The temperature decreases",
            "The temperature increases",
            "The temperature remains constant",
            "The temperature first increases then decreases"
          ],
          answer: 1,
          explanation: "In an adiabatic compression (volume decreases, Q = 0), work is done on the gas (W < 0). By the First Law, ΔU = -W, so internal energy increases, raising the temperature."
        },
        {
          id: "kmu-phys-24-145",
          question: "During an isothermal expansion of an ideal gas, which of the following statement is true?",
          options: [
            "Pressure and temperature of the gas increase",
            "The internal energy of the gas increases",
            "The temperature of the gas remains constant",
            "The work done by the gas is zero"
          ],
          answer: 2,
          explanation: "An isothermal process is defined as one in which the temperature of the system remains constant throughout."
        },
        {
          id: "kmu-phys-24-146",
          question: "Consider an ideal gas confined to the cylinder with a fixed piston, on heating the gas, all the heat supplied increases",
          options: [
            "Kinetic energy of the molecules",
            "Potential Energy of the molecules",
            "The intermolecular forces between gas molecules",
            "The number of gas molecules"
          ],
          answer: 0,
          explanation: "With a fixed piston (isochoric process, W = 0), all supplied heat goes into increasing internal energy ΔU = Q. For an ideal gas, internal energy is purely translational kinetic energy."
        },
      
        // --- SIBA 2025 PHYS prep ---
        {
          id: "siba-2025-phys-153",
          question: "A gas expands from 1 m³ to 3 m³ at constant pressure of 2 Pa. Work done is:",
          options: [
            "2J",
            "4J",
            "6J",
            "8J"
          ],
          answer: 1,
          explanation: "Isobaric work done W = P ΔV = P (V₂ - V₁) = 2 Pa × (3 m³ - 1 m³) = 2 × 2 = 4 J."
        },
      
        // --- SIBA PHY 24 ---
        {
          id: "siba-phy-24-133",
          question: "Which of the following statements is correct?",
          options: [
            "Work can never be converted into heat.",
            "Work can be converted completely into heat.",
            "Both heat and work are inter-convertible.",
            "Heat can never be converted into work.",
            "Heat can be converted completely into work."
          ],
          answer: 2,
          explanation: "Heat and work are both forms of energy transfer and can be inter-converted into one another according to the First Law of Thermodynamics."
        },
        {
          id: "siba-phy-24-147",
          question: "The process in which all the supplied heat is converted into work is called:",
          options: [
            "Isochoric",
            "Isobaric",
            "Adiabatic",
            "Isotropic",
            "Isothermal"
          ],
          answer: 4,
          explanation: "In an isothermal process, ΔT = 0, so ΔU = 0. According to Q = ΔU + W, Q = W, meaning all heat supplied is converted into work."
        },
        {
          id: "siba-phy-24-159",
          question: "In SI system, the specific heat capacity is measured in:",
          options: [
            "J kg⁻¹ K⁻¹",
            "J K⁻¹ g⁻¹",
            "J kg⁻¹ C⁻¹",
            "J g⁻¹ C⁻¹"
          ],
          answer: 0,
          explanation: "Specific heat capacity c = Q / (m ΔT), giving SI units of Joules per kilogram per Kelvin (J kg⁻¹ K⁻¹)."
        },
      
        // --- SZAMBU 2025 PHYS prep ---
        {
          id: "szambu-2025-phys-137",
          question: "When thermal energy is transferred from a hot object to a cold one, the change occurs in the hot object as:",
          options: [
            "Increases in internal energy",
            "Decrease in internal energy",
            "Increase in temperature",
            "Increase in heat content"
          ],
          answer: 1,
          explanation: "Losing thermal energy causes the average kinetic energy of molecules in the hot object to drop, decreasing its internal energy and temperature."
        },
      
        // --- SZAMBU PHY 24 ---
        {
          id: "szambu-phy-24-124",
          question: "In an isothermal condition of any thermodynamic system, the change in internal energy",
          options: [
            "becomes maximum",
            "becomes minimum but greater than zero",
            "becomes zero",
            "remains constant"
          ],
          answer: 2,
          explanation: "Internal energy of an ideal gas depends solely on temperature. Since temperature remains constant in an isothermal process (ΔT = 0), ΔU = 0."
        },
        {
          id: "szambu-phy-24-146",
          question: "Which one of the following is the best condition for performing maximum work by any thermodynamic system?",
          options: [
            "Adiabatic condition",
            "Isobaric condition",
            "Isochoric condition",
            "Isothermal condition"
          ],
          answer: 3,
          explanation: "During an isothermal expansion, internal energy remains constant, allowing all absorbed heat energy to be converted directly into mechanical work (Q = W)."
        },
        {
          id: "szambu-phy-24-159",
          question: "In which of the following condition, the thermodynamic system DOES NOT perform any work?",
          options: [
            "Adiabatic condition",
            "Isobaric condition",
            "Isochoric condition",
            "Isothermal condition"
          ],
          answer: 2,
          explanation: "In an isochoric process, volume remains constant (ΔV = 0). Because W = P ΔV, the work done by the system is zero."
        },
      
        // --- UHS MDCAT 2025 PHYS prep ---
        {
          id: "uhs-mdcat-2025-phys-151",
          question: "According to First law of thermodynamics when heat flows into a system and no work is done the internal energy of the system must",
          options: [
            "Increase",
            "Decrease",
            "Remains constant",
            "Becomes zero"
          ],
          answer: 0,
          explanation: "By the First Law of Thermodynamics, ΔU = Q - W. If heat enters the system (Q > 0) and no work is performed (W = 0), ΔU = Q > 0, increasing internal energy."
        },
      
        // --- UHS PHYS 24 ---
        {
          id: "uhs-phys-24-144",
          question: "During the isothermal process, the temperature",
          options: [
            "remains constant during the initial phase of the process",
            "remains constant throughout the process",
            "alters throughout the process",
            "increases throughout the process"
          ],
          answer: 1,
          explanation: "By definition, an isothermal process is one where the temperature of the system stays constant throughout the entire transformation."
        },
        {
          id: "uhs-phys-24-145",
          question: "What is the value of heat energy (Q) in an adiabatic process?",
          options: [
            "+1",
            "–1",
            "0",
            "+2"
          ],
          answer: 2,
          explanation: "An adiabatic process is defined as one where no heat enters or leaves the thermodynamic system, making Q = 0."
        },
         // --- TESTMOZ ---
          {
            id: "testmoz-phys-1",
            question: "Work done in expanding case under adiabatic conditions result in",
            options: [
              "Increase in temperature",
              "Decrease in temperature",
              "Change in temperature",
              "Change heat"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-2",
            question: "For an adiabatic process the first law of thermodynamics can be written as",
            options: [
              "Work done on the system = decreases in internal energy of the system",
              "Work done by the system = increases in internal energy of the system",
              "Work done on the system = decreases in internal energy of the system",
              "Work done on the system = decreases in internal energy of system + heat released"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-3",
            question: "Gas molecules of different masses in the same container have the same average translation kinetic energy which is directly proportional to",
            options: [
              "Volume",
              "Pressure",
              "Absolute Temperature",
              "Time"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-4",
            question: "Kinetic molecular theory is likely to break",
            options: [
              "high pressure low temperature",
              "Low pressure high temperature",
              "High pressure high temperature",
              "Low pressure low temperature"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-5",
            question: "Which one is not adiabatic process",
            options: [
              "Escape of air from burst tire",
              "Cloud formation",
              "Slow expansion",
              "Rapid expansion"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-6",
            question: "gas laws are applicable to",
            options: [
              "Gases as well as vapours",
              "Gases alone and not vapours",
              "Gases and steam",
              "Gases and vapours under certain conditions"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-7",
            question: "In any process the maximum amount of mechanical energy that can be converted to heat",
            options: [
              "Depends upon the amount of friction",
              "Depends upon the intake and exhaust temperature",
              "Depends upon weather Kinetic or potential energy is involved",
              "It is 100%"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-8",
            question: "Which of the following properties of molecule of gas is same for all gases at particular temperature",
            options: [
              "Momentum",
              "Velocity",
              "Mass",
              "Kinetic energy"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-9",
            question: "The graph between T and V of a gas is at constant pressure is",
            options: [
              "Hyperbola",
              "Straight line",
              "Parbola",
              "Exponential curve"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-10",
            question: "Two different samples have the same mass and temperature equal quantities of energy are absorbed as heat by each their final temperature may be different because the sample have different",
            options: [
              "Heat capacities",
              "Thermal conductivity",
              "Volumes",
              "Coefficient of expansion"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-11",
            question: "If the volume of gas is to be increased by four times then",
            options: [
              "Temperature in pressure must be double",
              "At constant P the temperature must be increased by four times",
              "It constant T the temperature must be increased by four times",
              "Cannot be increased"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-12",
            question: "Work done in cyclic process is",
            options: [
              "Maximum",
              "Minimum",
              "Zero",
              "None"
            ],
            answer: 2
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
            answer: 3
          },
          {
            id: "testmoz-phys-14",
            question: "At constant temperature if the volume of the given mass of gas double then the density of gas becomes",
            options: [
              "Double",
              "1/2",
              "1/4",
              "Remain same"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-15",
            question: "To identical rooms in a house mayor connected by an open door way the temperature in the two rooms are maintained at different values which rooms contain more air",
            options: [
              "The room with higher temperature",
              "The room with higher pressure",
              "The room with lower temperature",
              "Neither because both have the same pressure"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-16",
            question: "Initial pressure and volume Pand V respectively first it expanded isothermal to 4v then compressed adiabatically to volume V the final pressure is",
            options: [
              "2P",
              "1P",
              "3P",
              "4P"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-17",
            question: "According to the first law of thermodynamics applied to a gas the increase in the internal energy during any process",
            options: [
              "Equal the heat input - the work done on the gas",
              "Equal to heat input + the work done on the gas",
              "Equal the work done on the gas - the heat input",
              "Is independent of the heat input"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-18",
            question: "When 20J of work was done on a case 40 joule heat energy was released if the initial internal energy of the case was 70 joule what is the final energy",
            options: [
              "50J",
              "60J",
              "90J",
              "110J"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-19",
            question: "The ratio of specific heat of a constant gas at constant volume to its specific heat at constant pressure is",
            options: [
              "1",
              "More than 1",
              "Less than 1",
              "Has units of pressure / volume"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-20",
            question: "It constant temperature the graph between v and 1/P is",
            options: [
              "Hyperbola",
              "Parabola",
              "Straight line",
              "Elipse"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-21",
            question: "Which one of the following is not a thermodynamic function",
            options: [
              "Work",
              "Internal energy",
              "Entropy",
              "Temperature"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-22",
            question: "An ideal gas is heated from 20 centigrade to 40 centigrade under constant pressure the change in internal energy is",
            options: [
              "Zero under constant pressure",
              "Proportional to change in volume",
              "Double the original value",
              "Proportional to change in temperature"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-23",
            question: "If the volume of gas is held constant and we increase its temperature then",
            options: [
              "It's pressure is constant",
              "It's pressure falls",
              "It's pressure Rises",
              "Any of above"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-24",
            question: "In which of the system listed below is the entropy decreasing",
            options: [
              "A gas is cooled",
              "A plate is shattered",
              "An egg is scrambled",
              "A drop I have die diffuses in the cup of water"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-25",
            question: "I hate Indian takes in 800 joule of heat at 1000 Kelvin and exhaust 600 joule of heat at 400 Kelvin what is the actual efficiency of this engine",
            options: [
              "25%",
              "40%",
              "50%",
              "75%"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-26",
            question: "Two gases A and B having same number of molecules are a temperature 10 centigrade a is heated at constant volume and b is heated at constant pressure and their temperature rises to 12 centigrade increase in internal energy in",
            options: [
              "A is greater",
              "B is greater",
              "Both gases are same",
              "A is slightly greater"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-27",
            question: "Which one of the following process is highly Irreversible",
            options: [
              "Slow compressions of an elastic spring",
              "Slow evaporation of a substance in an isolated vessel",
              "Slow compression of a gas",
              "A chemical explosion"
            ],
            answer: 3
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
            answer: 2
          },
          {
            id: "testmoz-phys-29",
            question: "When an ideal gas of constant mass is heated in a container of fixed volume what is the reason for the increase in pressure of the case",
            options: [
              "Number of molecules per unit volume increases",
              "Molecules occupy greater volume of the container",
              "Average force per impact at the container wall increases",
              "Molecules collide with each other with greater force"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-30",
            question: "Maximum work can be obtained in the process called",
            options: [
              "Cyclic process",
              "Isothermal process",
              "Adiabatic process",
              "Isochoric process"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-31",
            question: "An ideal gas is compressed to half of its initial volume which of these process would result in maximum work done",
            options: [
              "Adiabatic process",
              "Isobaric process",
              "Isochoric process",
              "Isothermal process"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-32",
            question: "A system undergoes in adiabatic process in which its internal energy increase by 20 joules which of the following statement is true",
            options: [
              "20 joules of work was done on the system",
              "The system lost 20 joule of energy as heat",
              "20 joules of work was done by the system",
              "The system received 20 joule of energy as a heat"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-33",
            question: "2 points on a same body having the same temperature will have no heat transfer between them this is the condition of",
            options: [
              "Dynamic equilibrium",
              "Hydrostatic equilibrium",
              "Thermal equilibrium",
              "Unstable equilibrium"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-34",
            question: "Hot milk is shaking in a thermoplast whose lid is closed the temperature of milk will",
            options: [
              "Increase",
              "Decrease",
              "Is not effected",
              "Cannot be predicted"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-35",
            question: "A given mass of a gas is enclosed in a suitable container so that it may be maintained at constant volume under these conditions there can be no change in what property of the gas",
            options: [
              "Pressure",
              "Molecular kinetic energy",
              "Density",
              "Internal energy"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-36",
            question: "Starting with same initial conditions in ideal gas expand from volume V1 to V2 in 3 different ways the work done by the gas is w1 if process is purely isothermal w2 if purely adiabatic and W3 if purely adiabatic then",
            options: [
              "W1 > W2 > W3",
              "W2 > W3 > W1",
              "W2 > W1 > W3",
              "W1 > W3 > W2"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-37",
            question: "The pressure of an ideal gas is double during a process in which the energy given up as it by the gas equals the work done on the gas as a result the volume is",
            options: [
              "Doubled",
              "UN changed",
              "Halved",
              "Need more information to answer"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-38",
            question: "Two objects with different sizes masses and temperature are placed in thermal contact in which direction does the energy travel",
            options: [
              "Energy travels from the larger object to the smaller object",
              "Energy travels from the object with more mass to the one with less mass",
              "Energy travels from the object at Higher temperature to the object at lower temperature",
              "Energy does not travel"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-39",
            question: "Internal energy of the system depends on",
            options: [
              "Initial and final estates of the system and the path from initial to final state",
              "Initial and final states of the system only",
              "Initial state of the system and the path from initial to final state",
              "The path from initial to final state"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-40",
            question: "In an adiabatic process",
            options: [
              "The energy absorbed as he equals the work done by the system on its environmental",
              "The energy absorbed as heat equals work done by the environment on the system",
              "The absorbed is heat equals the change in internal energy",
              "The work done by the environment on the system equals the change in internal energy"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-41",
            question: "Monoatomic ideal gas is Dharm Ali insulated so no heat can flow between it and its surrounding is it possible for the temperature of the gas to rise",
            options: [
              "Yes the temperature can rice if work is done by the gas",
              "No the only way the temperature can rise is if heat is added to the gas",
              "Yes the temperature can rice if work is done on the gas",
              "Know the only way did the temperature can rise is by adding more molecules in container"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-42",
            question: "In free expansion of the gas the internal energy of the system",
            options: [
              "Increases",
              "Decreases",
              "UN changed",
              "First increases than decreases"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-43",
            question: "What will be the density of the case if volume is doubled by temperature is constant",
            options: [
              "Equal to original density",
              "Half of the original density",
              "Quarter of original density",
              "Double of original density"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-44",
            question: "What will be the change in internal energy when work done by the system is 50 KJ heat absorbed is 40KJ",
            options: [
              "90KJ",
              "-10KJ",
              "190KJ",
              "-190KJ"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-45",
            question: "The ratio of the specific heat of an ideal gas at constant volume to its specific heat at constant pressure is",
            options: [
              "R",
              "Dependent on the temperature",
              "Dependent on the pressure",
              "Different for monoatomic diatomic and polyatomic gases"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-46",
            question: "The kinetic energy of the molecules of an ideal gas at absolute zero will be",
            options: [
              "Infinite",
              "Zero",
              "Very high",
              "Below zero"
            ],
            answer: 1
          },
          {
            id: "testmoz-phys-47",
            question: "For an ideal gas force of attraction between molecules is",
            options: [
              "Very large",
              "Infinite",
              "Very small",
              "Zero"
            ],
            answer: 3
          },
          {
            id: "testmoz-phys-48",
            question: "Real gas is changed slowly from state one to state two during this process no work is done on or by the gas this process must be",
            options: [
              "Isothermal",
              "Isobaric",
              "Isochoric",
              "Adiabatic"
            ],
            answer: 2
          },
          {
            id: "testmoz-phys-49",
            question: "Is called internal energy of an ideal gas",
            options: [
              "Translation kinetic energy",
              "Rotational kinetic energy",
              "Vibrational kinetic energy",
              "Potential energy"
            ],
            answer: 0
          },
          {
            id: "testmoz-phys-50",
            question: "At 30 centigrade and atmospheric pressure the volume of a given mass is 100 cm^3 pressure remaining same the volume will be doubled if the temperature becomes",
            options: [
              "15°C",
              "606°C",
              "60°C",
              "333°C"
            ],
            answer: 3
          },
           // --- TESTMOZ ---
            {
              id: "testmoz-phys-1",
              question: "The heat evolved or absorbed in a chemical reaction depends upon the",
              options: [
                "The amount of chemical substance involved",
                "The temperature",
                "The physical states of the substance involved constant volume",
                "Whether the reaction occurs at constant pressure or constant volume",
                "All"
              ],
              answer: 4
            },
            {
              id: "testmoz-phys-2",
              question: "Lattice energy of an ionic crystal is enthalpy of",
              options: [
                "Combustion",
                "Dissolution",
                "Dissociation",
                "Formation"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-3",
              question: "Exothermic reactions the heat content of the",
              options: [
                "Product is more than that of reactants",
                "Reactant is more than that of products",
                "Reactants and products remains equal",
                "All are correct"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-4",
              question: "Born Haber cycle is used to determine the lattice energies of",
              options: [
                "Molecular solids",
                "Metallic solids",
                "Ionic solids",
                "Covalent solids"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-5",
              question: "Heat provided to a system at constant pressure will be equal to",
              options: [
                "E",
                "PV",
                "H",
                "None"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-6",
              question: "Heat of solution for the substance whose solubility decrease with increase in temperature is",
              options: [
                "Positive",
                "Zero",
                "High",
                "Negative"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-7",
              question: "The net heat change in a chemical reaction is same whether it take place in one step or more than one is known as",
              options: [
                "Hess's law",
                "Ostwald's law",
                "Joles principle",
                "First law of thermodynamics"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-8",
              question: "If enthalpy change is written in negative sign the reaction will be",
              options: [
                "Exothermic",
                "Endothermic",
                "Spontaneous",
                "Non spontaneous"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-9",
              question: "Enthalpy change accompanying the gain of an electron by a neutral gaseous atom from Negative Ion is called",
              options: [
                "Ionization potential",
                "Electronegativity",
                "Electron affinity",
                "Lattice energy"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-10",
              question: "Which is not characteristic of thermochemical equation",
              options: [
                "It indicates physical state of reactant and product",
                "It indicates whether the reaction is exothermic or endothermic",
                "It indicates allotrope of the reactant if present",
                "It indicates whether a reaction would occur or not"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-11",
              question: "The enthalpy change of reaction does not depend on",
              options: [
                "Initial and final enthalpy change of reaction",
                "Different intermediate reactions",
                "State of reactant and products",
                "Nature of reactants and products"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-12",
              question: "Which has highest kinetic energy amongst following",
              options: [
                "Hydrogen",
                "Oxygen",
                "Methane",
                "All of these"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-13",
              question: "If the matter is in a given system at a given condition is divided into two equal parts in the value of the extensive property will become",
              options: [
                "Double of the original value",
                "Half of the original value",
                "Remain same as the original value",
                "One fourth of the original value"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-14",
              question: "Property of matter that is independent of its surrounding condition and position is",
              options: [
                "Volume",
                "Density",
                "Mass",
                "Weight"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-15",
              question: "The work done by system is 10J it is supplied to it what is the increase in internal energy of the system",
              options: [
                "30J",
                "40J",
                "50J",
                "20J"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-16",
              question: "Reaction of water with quick lime result in the rise in temperature of the system using the concentration change indicate the nature of the reaction",
              options: [
                "Third order reaction",
                "Endothermic reaction",
                "Non spontaneous reaction",
                "Exothermic reaction"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-17",
              question: "Anything which is under observation or experiment is called",
              options: [
                "Universe",
                "Boundary",
                "System",
                "Surrounding"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-18",
              question: "Change in enthalpy is defined as",
              options: [
                "The change in heat content",
                "The total energy change at constant pressure in temperature",
                "Dahi change it constant volume if change in number of moles is equal to zero",
                "Work done it constant pressure"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-19",
              question: "Chemical reactions in which reactants require high amount of activation energy are generally",
              options: [
                "Slow",
                "First fast then slow",
                "First slow then fast",
                "Spontaneous"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-20",
              question: "Energy that the reactant should gain in order to enter into reacting phase called",
              options: [
                "Minimum energy",
                "Activation energy",
                "Threshold energy",
                "Kinetic energy"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-21",
              question: "The heat of reaction can be calculated by using",
              options: [
                "Joules law",
                "Ohm's law",
                "Hess's law",
                "Faraday's law"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-22",
              question: "Properties of system which depends upon the amount of substance present in the system are called",
              options: [
                "Chemical properties",
                "Intensive properties",
                "Extensive properties",
                "Physical properties"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-23",
              question: "Plants and living beings are examples of",
              options: [
                "Isolated system",
                "Open system",
                "Adiabatic system",
                "Close system"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-24",
              question: "The heat change in a reaction does not depend upon the",
              options: [
                "Conditions of P or V under with a reaction is carried out",
                "Initial and final enthalpys of the reactant and products",
                "State of reactants and products",
                "Number of intermediate stages involved"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-25",
              question: "ΔH for the transition of carbon in the diamond form to carbon in the graphite form -1.9 kJ this suggest that",
              options: [
                "Graphite is chemically different from diamond",
                "Graphite is stable is diamond",
                "Graphite is more stable than diamond",
                "Diamond is more stable than graphite"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-26",
              question: "At what temperature is standard enthalpy changes are measured",
              options: [
                "293 Kelvin",
                "273 Kelvin",
                "293 centigrade",
                "298 Fahrenheit"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-27",
              question: "The kinetic energy of particle is due to",
              options: [
                "Uniform and average movements",
                "Vibrational translation and rotational movements",
                "Uniform and instantaneous movements",
                "All of them"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-28",
              question: "The false statement among the following is",
              options: [
                "The heat liberated during the neutralization of strong acid and strong base in aqueous solution is constant",
                "The heat of combustion is always in exothermic change",
                "The enthalpies of formation of carbon dioxide can be conventionally determine heat of combustion data of carbon",
                "Heat of formation of a compound is equal in magnitude to heat of combustion"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-29",
              question: "Standard enthalpy of atomization heat of surrounding",
              options: [
                "Remain same",
                "Decreases",
                "Increases",
                "Increases then decreases"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-30",
              question: "The enthalpy of formation of ionic compound is",
              options: [
                "Always less than lattice energy",
                "Same is lattice energy",
                "Always greater than lattice energy",
                "May or may not be same as lattice energy"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-31",
              question: "Spontaneous process is",
              options: [
                "Uni directional and Irreversible",
                "Uni directional and real",
                "Irreversible and real",
                "All of the above mentioned"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-32",
              question: "Which of the following statements is not true for the first law of thermodynamics",
              options: [
                "Total energy of the system and surrounding conserved",
                "Energy can neither be created nor be destroyed",
                "Is the same is law of conservation of energy",
                "Total energy of the system is increasing"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-33",
              question: "Reaction give out heat this means that",
              options: [
                "Only new bonds are being made",
                "Bonds being made are stronger than bonds broken",
                "Only existing bones are being broken",
                "Bonds being made our stronger than bonds made"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-34",
              question: "What is not a state function",
              options: [
                "Internal energy",
                "Work",
                "Enthalpy",
                "Volume"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-35",
              question: "Which statement concerning energy change is false",
              options: [
                "Electrical energy is produced by the reaction in a battery",
                "Light energy is absorbed during photosynthesis",
                "Light energy is produced when Methane is burnt in oxygen",
                "Heat energy is absorbed when sodium reacts with water"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-36",
              question: "For a change in a state from A to B",
              options: [
                "Q depends only on the initial and final",
                "E depends only on the initial and final state",
                "W depends only on initial and final state",
                "E depends upon path adopted to state go from A to B"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-37",
              question: "The energy possessed by water in a dam is",
              options: [
                "Potential energy",
                "Kinetic energy",
                "Electrical energy",
                "Heat energy"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-38",
              question: "When one mole of gaseous hydrogen ion are dissolved in water to form infinitely dilute solution amount of heat liberated is",
              options: [
                "-1075kJ/mol",
                "-499kJ/mol",
                "-1891KJ/mol",
                "-1562KJ/mol"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-39",
              question: "Which of the following enthalpy change is always exothermic",
              options: [
                "Enthalpy of solution",
                "Enthalpy of formation",
                "Enthalpy of combustion",
                "Enthalpy of atomization"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-40",
              question: "The sum of kinetic energy in potential energy of the particles of substances is called",
              options: [
                "Heat capacity",
                "Specific heat",
                "Enthalpy of the system",
                "Internal energy"
              ],
              answer: 3
            },
            {
              id: "testmoz-phys-41",
              question: "Reactants have high energy than products in",
              options: [
                "Endothermic reaction",
                "Exothermic reaction",
                "Photochemical reactions",
                "Non spontaneous reactions"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-42",
              question: "The pressure of heat at constant volume is equal to",
              options: [
                "Change in internal energy",
                "Change in enthalpy",
                "Heat gas constant",
                "All"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-43",
              question: "Which of the following statement is false",
              options: [
                "Thermochemistry is the study of relationship between the heat energy and chemical energy",
                "An exothermic reaction is one which is a component by evolution of heat",
                "An endothermic reaction is one in which heat is absorbed",
                "Energy needed to raise the temperature of substance by one centigrade is specific heat"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-44",
              question: "Unavailability of methods to find out heat of reaction accurately makes thermochemistry",
              options: [
                "Widely applicable in science",
                "A limited field of study",
                "A useful aspect of Industrial Research",
                "None of these"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-45",
              question: "The amount of heat provided to a system a constant pressure is equal to",
              options: [
                "Change in internal energy",
                "Change in enthalpy",
                "Change in free energy",
                "Change in temperature only"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-46",
              question: "Product of exothermic reactions are",
              options: [
                "Unstable",
                "Sometime stable and sometimes unstable",
                "Stable",
                "None of the above mentioned"
              ],
              answer: 2
            },
            {
              id: "testmoz-phys-47",
              question: "The kinetic energy of molecular theory does not state",
              options: [
                "There are intermolecular forces within gases",
                "There is no volume in gases",
                "Collision course is elastic",
                "All of the above mentioned"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-48",
              question: "Kinetic energy of molecules is",
              options: [
                "Linearly proportional to the temperature",
                "Inversely proportional to the temperature",
                "Linearly proportional to square root of temperature",
                "Inversely proportional to square root of temperature"
              ],
              answer: 0
            },
            {
              id: "testmoz-phys-49",
              question: "Which one of the following is not the unit of heat",
              options: [
                "Joule",
                "Kelvin",
                "Calorie",
                "KiloJoule"
              ],
              answer: 1
            },
            {
              id: "testmoz-phys-50",
              question: "Elastic collision involves",
              options: [
                "Loss of energy",
                "Gain of energy",
                "No loss no gain of energy",
                "None of the above"
              ],
              answer: 2
            }
      ];
  
  // ==========================================
  // CHEMISTRY QUESTIONS
  // ==========================================
  
  export const chemistryQuestions: Question[] = [
// --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-108",
      question: "The electrons will enter which of these orbitals after filling the 3d orbital.",
      options: [
        "4d",
        "4f",
        "4s",
        "4p"
      ],
      answer: 3,
      explanation: "According to the Aufbau principle (n+l rule), the 3d orbital (n+l = 5) is followed by the 4p orbital (n+l = 5, higher n)."
    },
    {
      id: "bumhs-2025-chem-126",
      question: "n+l value for 4d orbital is:",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: 2,
      explanation: "For a 4d orbital, principal quantum number n = 4 and azimuthal quantum number l = 2. Therefore, n + l = 4 + 2 = 6."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-80",
      question: "The only group of lines occurring in the visible region of the hydrogen spectrum is labelled as the:",
      options: [
        "Paschen series",
        "Pfund series",
        "Balmer series",
        "Lyman series"
      ],
      answer: 2,
      explanation: "The Balmer series corresponds to electron transitions ending at n = 2 and is the only series in the hydrogen spectrum that falls within the visible light region."
    },
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
      id: "bumhs-mdcat-2024-89",
      question: "One picometer (pm) = ?",
      options: [
        "10⁻⁶ m",
        "10⁻⁸ m",
        "10⁻¹⁰ m",
        "10⁻¹² m"
      ],
      answer: 3,
      explanation: "1 picometer (pm) is equal to 10⁻¹² meters."
    },
    {
      id: "bumhs-mdcat-2024-91",
      question: "An electron in an atom is completely described by its ______ quantum numbers.",
      options: [
        "Eight",
        "Six",
        "Five",
        "Four"
      ],
      answer: 3,
      explanation: "An electron's state in an atom is completely specified by four quantum numbers: principal (n), azimuthal (l), magnetic (m), and spin (s)."
    },
    {
      id: "bumhs-mdcat-2024-96",
      question: "Isotopes differ from each other on the basis of:",
      options: [
        "number of electrons",
        "mass number",
        "electronic configuration",
        "crystal lattice"
      ],
      answer: 1,
      explanation: "Isotopes are atoms of the same element having the same atomic number (protons) but different mass numbers due to varying numbers of neutrons."
    },
    {
      id: "bumhs-mdcat-2024-108",
      question: "Which statement is not correct for cathode rays?",
      options: [
        "Cathode rays consist of moving material particles",
        "Cathode rays have definite mass",
        "Cathode rays have definite velocity",
        "Cathode rays travel with the velocity of light"
      ],
      answer: 3,
      explanation: "Cathode rays consist of electrons, which are material particles possessing mass. They travel at speeds slower than the velocity of light in vacuum."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-72",
      question: "The charge of electron is:",
      options: [
        "1.602×10⁻¹⁶ C",
        "1.602×10⁻¹⁵ C",
        "1.602×10⁻¹⁷ C",
        "1.602×10⁻¹⁸ C",
        "1.602×10⁻¹⁹ C"
      ],
      answer: 4,
      explanation: "The elementary magnitude of charge on an electron is 1.602 × 10⁻¹⁹ Coulombs."
    },
    {
      id: "chem-sindh-24-82",
      question: "“In an orbital of an atom, no two electrons can have the same set of four quantum numbers, at least one quantum number must be different.” This statement is:",
      options: [
        "Aufbau principle",
        "Pauli’s exclusion principle",
        "Hund’s rule",
        "Wissewser rule",
        "Magnetic quantum number"
      ],
      answer: 1,
      explanation: "This is the precise statement of Pauli's Exclusion Principle."
    },
    {
      id: "chem-sindh-24-95",
      question: "The neutron was discovered by:",
      options: [
        "Max Planck",
        "Neil Bohr",
        "J.J. Thomson",
        "Goldstein",
        "James Chadwick"
      ],
      answer: 4,
      explanation: "James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles."
    },
    {
      id: "chem-sindh-24-118",
      question: "Maximum number of electrons in a given sub-shell are calculated by:",
      options: [
        "n²",
        "2(n+1)",
        "2n²",
        "2(2l+1)",
        "2l+1"
      ],
      answer: 3,
      explanation: "The number of orbitals in a subshell is (2l+1). Since each orbital holds a maximum of 2 electrons, the total electron capacity is 2(2l+1)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-108",
      question: "Which of the following is expected to be the most paramagnetic?",
      options: [
        "₃Li",
        "₄Be",
        "₅B",
        "₆C"
      ],
      answer: 3,
      explanation: "Carbon (₆C: 1s² 2s² 2px¹ 2py¹) has 2 unpaired electrons, giving it the highest paramagnetic character among the listed options."
    },
    {
      id: "chem-sindh-25-110",
      question: "The maximum probability of finding an electron in ground state of Hydrogen is at a distance of:",
      options: [
        "0.53 nm",
        "0.35 nm",
        "0.053 nm",
        "0.0053 nm"
      ],
      answer: 2,
      explanation: "The radius of the first Bohr orbit of Hydrogen is r₁ = 0.529 Å = 0.053 nm, where the electron probability density peaks."
    },
    {
      id: "chem-sindh-25-112",
      question: "Which atom has at least one electron in a dumbbell shape orbital?",
      options: [
        "H",
        "He",
        "Li",
        "B"
      ],
      answer: 3,
      explanation: "Boron (₅B: 1s² 2s² 2p¹) has its valence electron in a 2p orbital, which possesses a dumbbell shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-125",
      question: "The energy of an orbital is determined by:",
      options: [
        "Hund’s Rule",
        "Pauli-exclusion principle",
        "n+l rule",
        "Boyles principle"
      ],
      answer: 2,
      explanation: "The n+l rule (Bohr-Bury rule) determines the relative energy levels of subshells in multi-electron atoms."
    },
    {
      id: "kmu-mdcat-25-chem-135",
      question: "According to Planck’s quantum theory, if the frequency of photon is doubled, the value of ‘h’ will be:",
      options: [
        "Doubled",
        "Increased 3 times",
        "Increased 4 times",
        "Unchanged"
      ],
      answer: 3,
      explanation: "Planck's constant (h = 6.626 × 10⁻³⁴ J·s) is a universal constant and remains unchanged regardless of frequency or energy."
    },
    {
      id: "kmu-mdcat-25-chem-139",
      question: "Spectral series for hydrogen spectrum are:",
      options: [
        "2",
        "3",
        "5",
        "7"
      ],
      answer: 2,
      explanation: "The hydrogen emission spectrum contains 5 primary named series: Lyman, Balmer, Paschen, Brackett, and Pfund."
    },
    {
      id: "kmu-mdcat-25-chem-147",
      question: "Identify the CORRECT electronic configuration for an element with atomic number 24 (Chromium):",
      options: [
        "[Ar] 4s² 3d⁴",
        "[Ar] 4s¹ 3d⁵",
        "[Ar] 4s⁰ 3d⁶",
        "[Ar] 4s² 3d⁵"
      ],
      answer: 1,
      explanation: "Chromium (Z=24) exhibits an anomalous configuration [Ar] 4s¹ 3d⁵ to gain extra stability from a half-filled d-subshell."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-73",
      question: "Which of the following sub-shell does not exist?",
      options: [
        "1p",
        "1s",
        "5d",
        "6f"
      ],
      answer: 0,
      explanation: "For n = 1, the maximum allowed value of l is 0 (s-orbital). Therefore, a 1p subshell (l = 1) cannot exist."
    },
    {
      id: "kmu-mdcat-2024-74",
      question: "The splitting of spectral lines in magnetic field is",
      options: [
        "Aufbau principle",
        "Pauli exclusion principle",
        "Stark effect",
        "Zeeman effect"
      ],
      answer: 3,
      explanation: "The splitting of atomic spectral lines in an external magnetic field is known as the Zeeman effect."
    },
    {
      id: "kmu-mdcat-2024-75",
      question: "Which element has the electronic configuration of noble-gas notation [Kr], 5s², 4d²?",
      options: [
        "Mo",
        "Se",
        "Sr",
        "Zr"
      ],
      answer: 3,
      explanation: "Zirconium (Zr) has atomic number 40. Its electronic configuration is [Kr] 5s² 4d² (36 + 2 + 2 = 40)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-76",
      question: "Which of the following element will show electronic configuration of outermost shell like ns², np⁵?",
      options: [
        "C",
        "Cl",
        "S",
        "Si"
      ],
      answer: 1,
      explanation: "Chlorine (Cl) is a halogen in Group 17 with 7 valence electrons, having an outer shell configuration of 3s² 3p⁵."
    },
    {
      id: "szambu-chem-24-88",
      question: "Diamagnetic behavior of Fluorine molecule is due to presence of ______.",
      options: [
        "paired electrons in d orbitals",
        "paired electrons in p orbitals",
        "unpaired electrons in d orbitals",
        "unpaired electrons in p orbitals"
      ],
      answer: 1,
      explanation: "In the F₂ molecule, all bonding and anti-bonding molecular orbitals formed by p-orbital overlaps are fully paired, giving it a diamagnetic nature."
    },
    {
      id: "szambu-chem-24-98",
      question: "The e/m ratio of proton is ______ that of an electron.",
      options: [
        "1836 times greater than",
        "equal to",
        "greater than",
        "smaller than"
      ],
      answer: 3,
      explanation: "Since a proton is ~1836 times more massive than an electron while holding an equal magnitude of charge, its charge-to-mass (e/m) ratio is significantly smaller than that of an electron."
    },
    {
      id: "szambu-chem-24-106",
      question: "How many electrons will be accommodated in sub-shell with Azimuthal quantum number ℓ = 2?",
      options: [
        "2",
        "6",
        "10",
        "12"
      ],
      answer: 2,
      explanation: "ℓ = 2 corresponds to a d subshell, which contains 5 degenerate orbitals and can accommodate a maximum of 10 electrons."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of electron with l = 2 in an atom having atomic number 23 (Vanadium) is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 1,
      explanation: "Vanadium (Z=23) has configuration [Ar] 4s² 3d³. The electrons in l = 2 (d-subshell) equal 3."
    },
    {
      id: "szambu-chem-25-2",
      question: "Highest energy for one quantum among radiation is:",
      options: [
        "microwave",
        "infrared",
        "ultra violet",
        "visible"
      ],
      answer: 2,
      explanation: "Ultraviolet radiation has the highest frequency among the given choices, so its quantum carries the highest energy (E = hf)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-73",
      question: "The p orbital has",
      options: [
        "2 lobes",
        "3 lobes",
        "4 lobes",
        "5 lobes"
      ],
      answer: 0,
      explanation: "A p-orbital has a dumbbell shape consisting of 2 lobes separated by a nodal plane."
    },
    {
      id: "uhs-2024-chem-74",
      question: "Which of the following electronic configuration is correct for carbon?",
      options: [
        "1s²2s²2p³",
        "1s²2s²2p⁴",
        "1s²2s²2p²",
        "1s²2s²2p¹"
      ],
      answer: 2,
      explanation: "Carbon (Z=6) has 6 electrons with ground state configuration 1s² 2s² 2p²."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-93",
      question: "Which set of quantum numbers is not allowed for an electron?",
      options: [
        "n=2, l=1, m=0, s=+1/2",
        "n=3, l=0, m=0, s=-1/2",
        "n=2, l=2, m=1, s=+1/2",
        "n=1, l=0, m=0, s=+1/2"
      ],
      answer: 2,
      explanation: "The azimuthal quantum number l can only range from 0 to n-1. For n = 2, l cannot be equal to 2."
    },
    {
      id: "uhs-chem-25-100",
      question: "Shape of orbital is determined by quantum number:",
      options: [
        "n",
        "l",
        "m",
        "s"
      ],
      answer: 1,
      explanation: "The azimuthal (subsidiary) quantum number l determines the 3D shape of an atomic orbital."
    },
    {
      id: "uhs-chem-25-102",
      question: "The value of Planck’s constant is:",
      options: [
        "6.6262×10⁻³⁰ J. sec",
        "6.6262×10⁻³² J. sec",
        "6.6262×10⁻³⁴ J. sec",
        "6.6262×10⁻³⁶ J. sec"
      ],
      answer: 2,
      explanation: "Planck's constant h = 6.626 × 10⁻³⁴ J·s."
    },
    {
      id: "uhs-chem-25-123",
      question: "Number of unpaired electrons in Boron in ground state is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 0,
      explanation: "Boron (Z=5) has ground state configuration 1s² 2s² 2p¹, which contains 1 unpaired electron."
    },
    // --- TESTMOZ ---
    {
        id: "atom-struct-1",
        question: "The total relative charge of an element is equal to",
        options: [
          "It's charge of electrons",
          "It's charge of proton",
          "Zero",
          "None of these"
        ],
        answer: 2,
        explanation: "An atom in its neutral elemental state contains equal numbers of positively charged protons and negatively charged electrons, making its overall net charge zero."
      },
      {
        id: "atom-struct-2",
        question: "The options having all the properties if gamma rays:",
        options: [
          "Neutrons highly penetrating, velocity is equal to that of light, remains undeflected in magnetic field",
          "Most penetrating, velocity is equal to that of light, no deflection in magnetic field",
          "Least penetrating, velocity 1/10th of light deflected in magnetic field helium nucleus",
          "Proton least penetrating, deflects like negative particle in magnetic field"
        ],
        answer: 1,
        explanation: "Gamma rays are high-energy electromagnetic radiation lacking charge and mass. They travel at the speed of light, exhibit maximum penetrating power, and do not deflect in magnetic/electric fields."
      },
      {
        id: "atom-struct-3",
        question: "Lowest energy electrons are present in",
        options: ["s", "p", "d", "f"],
        answer: 0,
        explanation: "Within any given principal quantum level (n), the s-subshell penetrates closest to the nucleus, experiencing maximum effective nuclear charge and having the lowest energy level."
      },
      {
        id: "atom-struct-4",
        question: "Which of the following orbital has different number of lobes than the other three orbitals",
        options: ["dxy", "dx²-y²", "dyz", "dz²"],
        answer: 3,
        explanation: "Four d-orbitals (dxy, dyz, dxz, dx2-y2) possess a four-lobed cloverleaf shape, whereas dz2 features two main lobes aligned along the z-axis encircled by a central doughnut-shaped ring (torus)."
      },
      {
        id: "atom-struct-5",
        question: "The relationship between quantum number n and l is",
        options: [
          "n = l – 1",
          "l = n – 2",
          "l = n – 1",
          "n = l – 2"
        ],
        answer: 2,
        explanation: "The azimuthal quantum number l ranges from 0 up to (n - 1) for any given principal shell level n."
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
        id: "atom-struct-8",
        question: "If n = 3 then the maximum number of “l” values will be",
        options: ["2", "3", "1", "0"],
        answer: 1,
        explanation: "For n = 3, there are 3 possible values for the azimuthal quantum number l (0, 1, and 2, corresponding to s, p, and d subshells)."
      },
      {
        id: "atom-struct-9",
        question: "The relative energies of 4s, 4p and 3d orbitals are in the order",
        options: [
          "3d < 4p < 4s",
          "4p < 4s < 3d",
          "4s < 3d < 4p",
          "4p < 3d < 4s"
        ],
        answer: 2,
        explanation: "By the (n + l) rule: 4s has (4+0=4), 3d has (3+2=5), and 4p has (4+1=5 with higher n). Hence, energy ranks 4s < 3d < 4p."
      },
      {
        id: "atom-struct-10",
        question: "What kind of orbital must an electron with the principal quantum number n = 2 occupy?",
        options: [
          "A spherically shaped orbital",
          "The orbital closest to the nucleus",
          "Either an S or P orbital",
          "A dumb bell shaped orbital"
        ],
        answer: 2,
        explanation: "For n = 2, l can be 0 (spherical 2s orbital) or 1 (dumbbell-shaped 2p orbital)."
      },
      {
        id: "atom-struct-11",
        question: "Which of the following has the lowest e/m ratio",
        options: ["Li⁺²", "H⁺¹", "H", "F"],
        answer: 2,
        explanation: "Note: Neutral atoms carry zero net charge e = 0, giving a theoretical charge-to-mass ratio of zero; option C (H) is selected per the provided answer key."
      },
      {
        id: "atom-struct-12",
        question: "Which pair has 1 electron in its orbital",
        options: ["Li, Fe", "Na, Cr", "K, Mn", "H, He"],
        answer: 1,
        explanation: "Sodium ([Ar] 3s1) has 1 valence electron in its 3s orbital, and Chromium ([Ar] 4s1 3d5) has 1 electron in its 4s orbital."
      },
      {
        id: "atom-struct-13",
        question: "Oxygen has very high second ionization potential value because of:",
        options: [
          "Completely filled p orbital",
          "Half filled s orbital",
          "Completely filled s orbital",
          "Half filled p orbital"
        ],
        answer: 3,
        explanation: "Oxygen (1s2 2s2 2p4) loses 1 electron to form O+ with a 2p3 configuration, which has a stable half-filled p-subshell requiring high energy to remove a second electron."
      },
      {
        id: "atom-struct-14",
        question: "Who observed radioactivity first",
        options: ["Henry Backwerll", "Rutherford", "Newton", "Bohr"],
        answer: 0,
        explanation: "Henri Becquerel discovered spontaneous radioactivity in 1896 while working with uranium salts."
      },
      {
        id: "atom-struct-15",
        question: "Orbitals of equal energy are called",
        options: [
          "Atomic orbitals",
          "Degenerate orbitals",
          "Molecular orbitals",
          "Anti bonding orbitals"
        ],
        answer: 1,
        explanation: "Orbitals belonging to the same subshell that share identical energy levels (such as px, py, pz) are termed degenerate orbitals."
      },
      {
        id: "atom-struct-16",
        question: "Nitrogen and phosphorus have 3 of their valence electrons unpaired because of:",
        options: [
          "Aufbau principle",
          "Heisenberg’s principle",
          "Hund’s rule",
          "Planck’s statement"
        ],
        answer: 2,
        explanation: "Hund's Rule of Maximum Multiplicity dictates that electrons occupy degenerate p-orbitals singly with parallel spins before pairing up."
      },
      {
        id: "atom-struct-17",
        question: "Elements have almost zero electron affinity if they have",
        options: [
          "Inert gas configuration",
          "Full filled configuration",
          "Half filled configuration",
          "All of the above"
        ],
        answer: 3,
        explanation: "Atoms with stable closed-shell or half-filled electron arrangements resist adding extra electrons, giving near-zero or endothermic electron affinities."
      },
      {
        id: "atom-struct-18",
        question: "If proton number of an element ‘Z’ is 37 then the total number of electrons in its ion ‘Z⁻²’ is",
        options: ["37", "39", "35", "18"],
        answer: 1,
        explanation: "A neutral atom with Z = 37 has 37 electrons. Gaining 2 additional electrons to form Z2- brings the total electron count to 37 + 2 = 39."
      },
      {
        id: "atom-struct-19",
        question: "The average atomic mass of boron is 10.8. It has two isotopes of masses 10 and 11 respectively. What is the percentage of isotope with the mass of 10?",
        options: ["20%", "60%", "80%", "50%"],
        answer: 0,
        explanation: "Let x be the fraction of B-10: 10(x) + 11(1-x) = 10.8 => 11 - x = 10.8 => x = 0.2 (20%)."
      },
      {
        id: "atom-struct-20",
        question: "Which particle cannot be accelerated in a magnetic field",
        options: [
          "Alpha particle",
          "Beta particle",
          "Neutron",
          "Proton"
        ],
        answer: 2,
        explanation: "Magnetic fields exert Lorentz forces only on moving charged particles. Neutrons carry zero electric charge and cannot be accelerated magnetically."
      },
      {
        id: "atom-struct-21",
        question: "Balmer series is important as",
        options: [
          "It is the first series",
          "It gives sharp lines",
          "It lies in visible region",
          "It was first discovered"
        ],
        answer: 2,
        explanation: "The Balmer series of hydrogen spectrum involves electronic transitions to the n = 2 energy level, falling within the visible region of the electromagnetic spectrum."
      },
      {
        id: "atom-struct-22",
        question: "The effective nuclear charge for an atom for outer electron is less than the atomic number due to",
        options: [
          "Intervening electron",
          "Paramagnetism",
          "Penetration",
          "Electron pair repulsion"
        ],
        answer: 0,
        explanation: "Inner (intervening) shell electrons screen or shield outer valence electrons from the full attractive pull of the nuclear charge (Zeff = Z - S)."
      },
      {
        id: "atom-struct-23",
        question: "Which orbital has number of lobes equal to 2?",
        options: ["s", "p", "d", "f"],
        answer: 1,
        explanation: "p-orbitals are dumbbell-shaped with 2 lobes separated by a nodal plane passing through the nucleus."
      },
      {
        id: "atom-struct-24",
        question: "Which of the following shows maximum penetration?",
        options: [
          "Electrons",
          "Protons",
          "Alpha particles",
          "Neutrons"
        ],
        answer: 3,
        explanation: "Neutrons carry no electric charge and do not experience electrostatic interaction with orbital electrons or atomic nuclei, providing maximum penetrating ability through matter."
      },
      {
        id: "atom-struct-25",
        question: "The principal quantum number is related to the",
        options: [
          "Orbital angular momentum",
          "Size of the orbital",
          "Orientation of the orbital",
          "Spin of the orbital"
        ],
        answer: 1,
        explanation: "The principal quantum number (n) dictates the main energy shell and the overall effective size or radius of the orbital."
      },
      {
        id: "atom-struct-26",
        question: "The maximum number of electrons in a shell “n” can accommodate is given by",
        options: ["n", "n²", "2n²", "2n³"],
        answer: 2,
        explanation: "The total electron capacity of a principal quantum shell n is calculated using the formula 2n²."
      },
      {
        id: "atom-struct-27",
        question: "Cathode rays:",
        options: [
          "Are heavy in the case of bigger atoms",
          "Is light in the case of smaller atoms",
          "Is more intense in the case of radioactive atoms",
          "Depends on the nature of gas",
          "Independent on the nature of gas"
        ],
        answer: 4,
        explanation: "Cathode rays consist of fundamental subatomic particles (electrons); their mass, charge, and e/m ratio are independent of the gas inside the discharge tube."
      },
      {
        id: "atom-struct-28",
        question: "Quantum number which tells the energy of electron is?",
        options: ["n", "m", "l", "s"],
        answer: 0,
        explanation: "The principal quantum number (n) primarily determines the energy level occupied by an electron in a hydrogenic or multi-electron atom."
      },
      {
        id: "atom-struct-29",
        question: "The radius of third Bohr orbit is",
        options: [
          "0.529 Å",
          "0.529/4 Å",
          "0.529 × 2 Å",
          "0.529 × 9 Å"
        ],
        answer: 3,
        explanation: "Bohr orbit radius formula is rn = r1 × n². For n = 3, r3 = 0.529 Å × (3)² = 0.529 × 9 Å."
      },
      {
        id: "atom-struct-30",
        question: "If uncertainty in the position of an electron is zero, the uncertainty in the momentum is",
        options: ["1", "Zero", "2π", "2h/4π", "Infinite"],
        answer: 4,
        explanation: "By Heisenberg's Uncertainty Principle (Δx · Δp ≥ h / 4π), if Δx = 0, then Δp must approach infinity."
      },
      {
        id: "atom-struct-31",
        question: "Electrical conductivity depends upon",
        options: [
          "Temperature",
          "Degree of dilution",
          "Nature of electrolyte",
          "Speed of ions"
        ],
        answer: 0,
        explanation: "Note: Electrical conductivity of electrolytes is influenced by temperature, ionic mobility, dilution, and ion count; option A is mapped per the answer key."
      },
      {
        id: "atom-struct-32",
        question: "A sodium lamp emits yellow light with a wavelength of 589 nm. Which electron is involved in this context",
        options: [
          "3s electron",
          "4s electron",
          "3p electron",
          "3d electron"
        ],
        answer: 0,
        explanation: "The characteristic doublet sodium D-lines (589 nm) arise from electronic transitions involving excitation and relaxation of the outermost 3s valence electron."
      },
      {
        id: "atom-struct-33",
        question: "Which is lighter than the rest",
        options: ["Electron", "None", "Proton", "Neutron"],
        answer: 2,
        explanation: "Note: Chemically an electron (~1/1836 amu) is lightest. Per the provided answer key, Option C (Proton) is mapped."
      },
      {
        id: "atom-struct-34",
        question: "Maximum number of electrons in M shell",
        options: ["2", "8", "18", "16"],
        answer: 2,
        explanation: "The M shell corresponds to principal quantum number n = 3. Using 2n²: 2 × (3)² = 18 electrons."
      },
      {
        id: "atom-struct-35",
        question: "Mass of neutron is",
        options: [
          "1.0073 amu",
          "1.0087 amu",
          "0.000173 amu",
          "1.6760 × 10⁻²⁷ amu"
        ],
        answer: 1,
        explanation: "The rest mass of a free neutron is approximately 1.0087 atomic mass units (amu)."
      },
      {
        id: "atom-struct-36",
        question: "Which of the following are oxidizing in nature",
        options: [
          "Both neutrons and canal rays",
          "Cathode rays",
          "Canal rays",
          "Neutrons"
        ],
        answer: 1,
        explanation: "Note: Cathode rays consist of energetic electrons capable of ionizing and reducing/oxidizing target media; option B is selected per the answer key."
      },
      {
        id: "atom-struct-37",
        question: "The increasing penetration effect of atomic orbitals is",
        options: [
          "d < p < s < f",
          "s < f < p < d",
          "p < s < d < f",
          "f < d < p < s"
        ],
        answer: 3,
        explanation: "For a given main energy level n, the relative penetrating power of subshell orbitals toward the nucleus follows the order: f < d < p < s."
      },
      {
        id: "atom-struct-38",
        question: "Quantum number values for “2p” orbitals are:",
        options: [
          "n = 2, l = 1",
          "n = 1, l = 2",
          "n = 1, l = 0",
          "n = 2, l = 0"
        ],
        answer: 0,
        explanation: "In a 2p orbital, the coefficient 2 indicates principal quantum number n = 2, and the p subshell corresponds to azimuthal quantum number l = 1."
      },
      {
        id: "atom-struct-39",
        question: "The maximum number of electrons in a shell with the principal quantum number equal to 4 is",
        options: ["2", "10", "16", "32"],
        answer: 3,
        explanation: "Using the formula 2n² for n = 4: 2 × (4)² = 32 electrons total."
      },
      {
        id: "atom-struct-40",
        question: "Which one of the following rule is used to arrange the sub energy levels in increasing order of energy?",
        options: [
          "Hund’s rule",
          "Octet rule",
          "(n + l) rule",
          "Aufbau principle"
        ],
        answer: 2,
        explanation: "The (n + l) rule (or Bohr-Bury rule) ranks subshell energy levels in increasing order, where lower (n + l) corresponds to lower energy."
      },
      {
        id: "atom-struct-41",
        question: "What is the number of protons and neutrons in an atom with mass number 89 and atomic number 39?",
        options: [
          "60 protons and 50 neutrons",
          "50 protons and 39 neutrons",
          "39 protons and 89 neutrons",
          "39 protons and 50 neutrons"
        ],
        answer: 3,
        explanation: "Protons = Atomic number (Z) = 39. Neutrons = Mass number (A) - Atomic number (Z) = 89 - 39 = 50."
      },
      {
        id: "atom-struct-42",
        question: "Which light color has longest wavelength",
        options: ["Violet", "Blue", "Orange", "Red"],
        answer: 3,
        explanation: "In the visible light spectrum (ROYGBIV), red light possesses the longest wavelength (~700 nm) and lowest frequency."
      },
      {
        id: "atom-struct-43",
        question: "What is correct priority order of filling of electron according to Aufbau principle",
        options: [
          "1s < 2p > 2s > 3d > 3p > 3s",
          "1s < 2p < 2s < 3d < 3s",
          "1s > 2s > 2p > 3d > 3p > 3s",
          "1s > 2s > 2p > 3s > 3p > 3d"
        ],
        answer: 3,
        explanation: "Note: Chemically, subshells fill in order of increasing energy (1s < 2s < 2p < 3s < 3p < 3d). Option D is mapped according to the provided answer key."
      },
      {
        id: "atom-struct-44",
        question: "For a 51% ionic molecules, the difference in EN is:",
        options: ["1.5", "1.7", "1.9", "2.1"],
        answer: 1,
        explanation: "According to Pauling's scale, an electronegativity difference (ΔEN) of 1.7 corresponds to approximately 50-51% ionic character."
      },
      {
        id: "atom-struct-45",
        question: "Copper is a typical transition metal, its atomic number is 29. In which oxidation state it has partially filled orbital in d subshell",
        options: ["Cu", "Cu⁺", "Cu⁻", "Cu²⁺"],
        answer: 3,
        explanation: "Cu2+ has an electronic configuration of [Ar] 3d9, possessing a partially filled d-subshell with 1 unpaired electron."
      },
      {
        id: "atom-struct-46",
        question: "Cathode rays travel in discharge tube from",
        options: [
          "Anode to cathode",
          "Cathode to anode",
          "Glass tube to vacuum pump",
          "Cathode through air"
        ],
        answer: 1,
        explanation: "Cathode rays consist of streams of negative electrons emitted from the cathode and traveling toward the anode."
      },
      {
        id: "atom-struct-47",
        question: "The shape of the orbital indicated by the symbol ‘l’ called:",
        options: [
          "Principal quantum number",
          "Azimuthal quantum number",
          "Magnetic quantum number",
          "Spin quantum number"
        ],
        answer: 1,
        explanation: "The azimuthal (or orbital angular momentum) quantum number 'l' determines the 3D geometric shape of an orbital."
      },
      {
        id: "atom-struct-48",
        question: "Which of the following has the same number of electrons as an alpha particle?",
        options: ["H", "H₂", "H⁺", "He"],
        answer: 2,
        explanation: "Note: An alpha particle (He2+) has 0 electrons. H+ also has 0 electrons, making their electron counts equal."
      },
      {
        id: "atom-struct-49",
        question: "The series limit for the Balmer series of hydrogen spectrum occurs at 3664 Å. Calculate ionization energy of hydrogen atom",
        options: [
          "21.7 × 10⁻¹⁹ J",
          "6.626 × 10⁻³⁴ J",
          "5.425 × 10⁻¹⁹ J",
          "3664 × 10⁻¹⁰ J"
        ],
        answer: 2,
        explanation: "Energy E = (h × c) / λ = (6.626 × 10^-34 × 3 × 10^8) / (3664 × 10^-10) ≈ 5.425 × 10⁻¹⁹ J."
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
   // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-98",
      question: "A triatomic molecule must be either linear with bond angle 180° or else?",
      options: [
        "t-shape",
        "bent",
        "pyramidal",
        "tetrahedral"
      ],
      answer: 1,
      explanation: "Triatomic molecules (AX₂ type) contain only three atoms. If unhybridized/sp hybridized without lone pairs (like CO₂), they are linear (180°); if lone pairs are present (like H₂O or SO₂), VSEPR predicts a bent/angular shape."
    },
    {
      id: "bumhs-2025-chem-123",
      question: "NH₃ has a net dipole moment but BF₃ has zero net dipole moment primarily because:",
      options: [
        "B is less electronegative than N",
        "F is more electronegative than N",
        "NH₃ is trigonal pyramidal while BF₃ is trigonal planar",
        "BF₃ is trigonal pyramidal"
      ],
      answer: 2,
      explanation: "BF₃ is symmetric and trigonal planar (sp²), causing individual B-F bond dipoles to cancel out (μ = 0). NH₃ is trigonal pyramidal (sp³) with a lone pair, leading to a non-zero net dipole moment."
    },
    {
      id: "bumhs-2025-chem-125",
      question: "The N–F–N bond angle in NF₃ is ~102°, which is significantly smaller than the H–N–H angle in NH₃ (~107°), due to:",
      options: [
        "Presence of lone pair on F",
        "High electronegativity of F pulling bonding pairs away from central N",
        "Large size of F",
        "Its drawback of VSEPR"
      ],
      answer: 1,
      explanation: "Fluorine is highly electronegative, pulling N–F bonding electron pairs further away from nitrogen. This reduces bonding pair-bonding pair repulsion near the nitrogen nucleus, allowing the lone pair to compress the bond angle more than in NH₃."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-97",
      question: "A molecule of ethane (C₂H₆) has ______ σ bonds.",
      options: [
        "four",
        "five",
        "six",
        "seven"
      ],
      answer: 3,
      explanation: "Ethane contains 1 C–C single sigma bond and 6 C–H single sigma bonds, yielding a total of 7 σ bonds."
    },
    {
      id: "bumhs-mdcat-2024-100",
      question: "In organic chemistry, a nucleus-seeking agent that is rich in electrons is defined as:",
      options: [
        "A nucleotide",
        "A nucleophile",
        "An electrophile",
        "Electron affluent"
      ],
      answer: 1,
      explanation: "A nucleophile ('nucleus-loving') is an electron-rich species (neutral with lone pairs or negatively charged) that donates an electron pair to electrophiles."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-69",
      question: "The term 'Chelate' originates from the Greek word meaning:",
      options: [
        "Bidentate",
        "Ion",
        "Monodentate",
        "Crab claws",
        "Metal"
      ],
      answer: 3,
      explanation: "Chelate comes from the Greek word 'chele', meaning 'crab's claw', referring to polydentate ligands holding a central metal ion like a claw."
    },
    {
      id: "chem-sindh-24-70",
      question: "The geometric shape of an ammonia (NH₃) molecule is:",
      options: [
        "Angular",
        "Tetrahedral",
        "Linear",
        "Planar",
        "Pyramidal"
      ],
      answer: 4,
      explanation: "NH₃ has 3 bond pairs and 1 lone pair around nitrogen (sp³ hybridization), resulting in a trigonal pyramidal molecular geometry."
    },
    {
      id: "chem-sindh-24-78",
      question: "The paramagnetic behavior of an oxygen molecule (O₂) cannot be explained by:",
      options: [
        "Molecular orbital theory",
        "Hybridization",
        "Valence bond theory",
        "Valence shell electron pair repulsion theory",
        "Chemical bonding"
      ],
      answer: 2,
      explanation: "Valence Bond Theory (VBT) predicts all electrons in O₂ are paired (diamagnetic). Only Molecular Orbital Theory (MOT) correctly explains its paramagnetism via two unpaired electrons in degenerate π* antibonding orbitals."
    },
    {
      id: "chem-sindh-24-104",
      question: "An example of a bidentate ligand among the following is:",
      options: [
        "Br⁻",
        "CN⁻",
        "C₂O₄²⁻",
        "OH⁻",
        "Cl⁻"
      ],
      answer: 2,
      explanation: "Oxalate ion (C₂O₄²⁻) possesses two donor oxygen atoms capable of binding simultaneously to a central metal ion, making it a bidentate ligand."
    },
    {
      id: "chem-sindh-24-107",
      question: "Which of the following possesses the weakest London dispersion forces?",
      options: [
        "F₂",
        "Br₂",
        "Cl₂",
        "I₂",
        "He"
      ],
      answer: 4,
      explanation: "Helium (He) is a tiny monatomic gas with the smallest polarizable electron cloud, giving it the weakest London dispersion forces."
    },
    {
      id: "chem-sindh-24-119",
      question: "This molecular shape is found in AX₂ molecules when the bond angle is 180°:",
      options: [
        "Pyramidal",
        "Bent",
        "Triangle",
        "Tetrahedral",
        "Linear"
      ],
      answer: 4,
      explanation: "An AX₂ species without lone pairs on the central atom forms an sp-hybridized linear geometry with a 180° bond angle (e.g., BeCl₂, CO₂)."
    },
    {
      id: "chem-sindh-24-122",
      question: "The conjugate acid of NH₃ is:",
      options: [
        "NH₄⁺",
        "NH",
        "NH₂",
        "NH₂⁻",
        "NH₃"
      ],
      answer: 0,
      explanation: "A conjugate acid is formed by adding a proton (H⁺) to a base. NH₃ + H⁺ → NH₄⁺."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-88",
      question: "Number of sigma bonds in methyl chloride (CH₃Cl) formed due to sp³–s overlap is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 2,
      explanation: "In CH₃Cl, carbon is sp³ hybridized. The three C–H σ bonds result from sp³(carbon)–s(hydrogen) overlap, while the C–Cl σ bond results from sp³(carbon)–p(chlorine) overlap."
    },
    {
      id: "chem-sindh-25-96",
      question: "The correct decreasing order of bond dissociation energy among hydrogen halides is:",
      options: [
        "HCl > HBr > HI",
        "HBr > HCl > HI",
        "HI > HCl > HBr",
        "HCl > HI > HBr"
      ],
      answer: 0,
      explanation: "As halogen size increases down the group (Cl < Br < I), H–X bond length increases and bond dissociation energy decreases: HF > HCl > HBr > HI."
    },
    {
      id: "chem-sindh-25-100",
      question: "Which of the following pairs of molecules have similar molecular shapes?",
      options: [
        "NH₃ & AlCl₃",
        "BCl₃ & NH₃",
        "AlCl₃ & PCl₃",
        "H₂O & SnCl₂"
      ],
      answer: 3,
      explanation: "Both H₂O and SnCl₂ have bent/angular molecular geometries due to lone pair presence (H₂O has 2 lone pairs, SnCl₂ has 1 lone pair)."
    },
    {
      id: "chem-sindh-25-101",
      question: "Electronegativities of atoms A and B are 1.20 and 4.0 respectively. According to Hannay-Smyth formula, the percent ionic character is approximately:",
      options: [
        "43%",
        "50%",
        "55%",
        "73%"
      ],
      answer: 3,
      explanation: "Electronegativity difference ΔEN = 4.0 − 1.2 = 2.8. % Ionic character = 16(ΔEN) + 3.5(ΔEN)² = 16(2.8) + 3.5(7.84) = 44.8 + 27.44 = 72.24% ≈ 73%."
    },
    {
      id: "chem-sindh-25-114",
      question: "The ratio of sigma (σ) bonds to pi (π) bonds present in a benzene molecule is:",
      options: [
        "4:1",
        "1:4",
        "2:3",
        "6:1"
      ],
      answer: 0,
      explanation: "Benzene (C₆H₆) contains 12 σ bonds (6 C–C and 6 C–H) and 3 π bonds (delocalized C=C). Ratio σ : π = 12 : 3 = 4 : 1."
    },
    {
      id: "chem-sindh-25-123",
      question: "All of the following have two bond pairs and show linear geometry EXCEPT:",
      options: [
        "SnCl₂",
        "CS₂",
        "HCN",
        "CO₂"
      ],
      answer: 0,
      explanation: "CS₂, HCN, and CO₂ are linear species (sp hybridized). SnCl₂ has 2 bond pairs and 1 lone pair on Sn, giving it a bent/angular shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-120",
      question: "Force of attraction between non-polar molecules due to instantaneous temporary dipoles is:",
      options: [
        "Ion-dipole force",
        "Dipole-dipole force",
        "Ion-induced dipole force",
        "London dispersion force"
      ],
      answer: 3,
      explanation: "London dispersion forces arise from momentary fluctuations in electron density creating temporary instantaneous dipoles that induce dipoles in neighboring atoms/molecules."
    },
    {
      id: "kmu-mdcat-25-chem-131",
      question: "In an ethene molecule (C₂H₄), each carbon atom has three hybridized sp² orbitals which are:",
      options: [
        "Coplanar",
        "Tetrahedral",
        "Linear",
        "Pyramidal"
      ],
      answer: 0,
      explanation: "sp² hybrid orbitals lie in a single plane (coplanar) oriented at 120° relative to each other."
    },
    {
      id: "kmu-mdcat-25-chem-143",
      question: "In which of the following molecules does the central atom utilize sp³ hybridization?",
      options: [
        "PH₃",
        "NH₃",
        "CH₃⁻",
        "All of the given options"
      ],
      answer: 3,
      explanation: "In NH₃, nitrogen forms 3 σ bonds and holds 1 lone pair (steric number = 4), using sp³ hybrid orbitals."
    },
    {
      id: "kmu-mdcat-25-chem-145",
      question: "Which one of the following is a trigonal planar molecule?",
      options: [
        "NH₃",
        "H₂O",
        "BF₃",
        "CH₄"
      ],
      answer: 2,
      explanation: "BF₃ has 3 bonding pairs and 0 lone pairs on boron (sp² hybridization), yielding a trigonal planar shape."
    },
    {
      id: "kmu-mdcat-25-chem-146",
      question: "Which of the following hydrogen halides has the highest bond dissociation energy?",
      options: [
        "HCl",
        "HI",
        "HF",
        "HBr"
      ],
      answer: 2,
      explanation: "HF has the shortest bond length and strongest polar covalent bond due to fluorine's high electronegativity and small radius, resulting in the highest bond dissociation energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-76",
      question: "Total number of electron pairs present in the valence shell of central oxygen atom in a water molecule is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 2,
      explanation: "In H₂O, the central oxygen atom has 8 valence electrons arranged in 4 electron pairs (2 bonding pairs and 2 lone pairs)."
    },
    {
      id: "kmu-mdcat-2024-78",
      question: "Which one of the following molecules has a trigonal pyramidal structure?",
      options: [
        "C₂H₄",
        "CH₄",
        "H₂O",
        "NH₃"
      ],
      answer: 3,
      explanation: "NH₃ has 3 bonding pairs and 1 lone pair, giving it a trigonal pyramidal structure."
    },
    {
      id: "kmu-mdcat-2024-79",
      question: "Which one of the following molecules has a net zero dipole moment?",
      options: [
        "BF₃",
        "NF₃",
        "NH₃",
        "H₂O"
      ],
      answer: 0,
      explanation: "BF₃ is symmetric trigonal planar; its three equal B-F bond dipoles vectorially cancel to yield μ = 0."
    },
    {
      id: "kmu-mdcat-2024-80",
      question: "The unhybridized p-orbital in sp² hybridization is oriented:",
      options: [
        "In the same plane",
        "Out of the plane arbitrarily",
        "Parallel to sp² orbitals",
        "Perpendicular to the plane containing sp² orbitals"
      ],
      answer: 3,
      explanation: "In sp² hybridization, the three hybrid orbitals lie in a plane at 120° angles, while the remaining unhybridized p-orbital stands perpendicular (at 90°) to that plane."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-77",
      question: "Which one of the following molecules has zero dipole moment?",
      options: [
        "Ammonia",
        "Carbon dioxide",
        "Hydrogen fluoride",
        "Water"
      ],
      answer: 1,
      explanation: "CO₂ is a linear molecule (O=C=O). The two equal C=O bond dipoles pull in opposite directions (180° apart) and cancel out completely (μ = 0)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of sigma (σ) bonds in acetylene (C₂H₂) and ethylene (C₂H₄) are respectively:",
      options: [
        "3 & 5",
        "5 & 3",
        "6 & 5",
        "5 & 6"
      ],
      answer: 0,
      explanation: "Acetylene (H–C≡C–H) has 3 σ bonds (2 C–H and 1 C–C) and 2 π bonds. Ethylene (H₂C=CH₂) has 5 σ bonds (4 C–H and 1 C–C) and 1 π bond."
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
      id: "szambu-chem-25-3",
      question: "Which one of the following compounds exhibits the highest percentage ionic character?",
      options: [
        "AlCl₃",
        "BCl₃",
        "PCl₃",
        "NaH"
      ],
      answer: 3,
      explanation: "NaH is formed between highly electropositive alkali metal Na and H, creating a strong ionic hydride lattice with high percent ionic character compared to covalent/polar covalent chlorides."
    },
    {
      id: "szambu-chem-25-4",
      question: "Which overlap type produces a bond with the highest overlap energy and strength?",
      options: [
        "sp–s",
        "sp²–s",
        "sp³–s",
        "sp³–p"
      ],
      answer: 0,
      explanation: "An sp hybrid orbital has 50% s-character, making it smaller and closer to the nucleus, allowing shorter and stronger overlap with an s-orbital."
    },
    {
      id: "szambu-chem-25-5",
      question: "How many sigma (σ) and pi (π) bonds are present in a maleic anhydride molecule?",
      options: [
        "5 sigma 3 pi",
        "6 sigma 3 pi",
        "7 sigma 2 pi",
        "9 sigma 3 pi"
      ],
      answer: 3,
      explanation: "Maleic anhydride (C₄H₂O₃) contains 9 σ bonds (2 C–H, 2 C–C, 2 C–O ring, 2 C=O, and 1 C=C) and 3 π bonds (2 C=O and 1 C=C)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-97",
      question: "Which of the following contains a coordinate covalent (dative) bond?",
      options: [
        "NaCl",
        "CaO",
        "NH₃→BF₃",
        "H₂O"
      ],
      answer: 2,
      explanation: "In NH₃→BF₃, nitrogen donates its lone electron pair to the electron-deficient boron atom, forming a coordinate covalent bond."
    },
    {
      id: "uhs-2024-chem-98",
      question: "Which of the following is NOT a correct feature of Valence Shell Electron Pair Repulsion (VSEPR) theory?",
      options: [
        "It determines the shape of molecule",
        "Pairs of electrons repel each other",
        "It helps in understanding interaction of medicinal drug molecules",
        "Only lone pairs participate in determining geometry of molecules"
      ],
      answer: 3,
      explanation: "VSEPR considers the spatial arrangement of both bonding electron pairs and lone pairs around the central atom to predict geometry."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-84",
      question: "In propene (CH₃–CH=CH₂), the pi (π) bond is formed by sideways overlap of:",
      options: [
        "s-orbitals",
        "unhybridized p-orbitals",
        "sp³ hybrid orbitals",
        "sp² hybrid orbitals"
      ],
      answer: 1,
      explanation: "Pi (π) bonds are formed exclusively by lateral (sideways) overlap of unhybridized parallel p-orbitals."
    },
    {
      id: "uhs-chem-25-86",
      question: "Molecules having central atom with 3 bonding pairs and 1 lone pair possess geometric shape:",
      options: [
        "Bent or angular",
        "Trigonal planar",
        "Trigonal pyramidal",
        "Tetrahedral"
      ],
      answer: 2,
      explanation: "AB₃L system (3 bond pairs, 1 lone pair) produces a trigonal pyramidal geometry (e.g., NH₃, PCl₃)."
    },
    {
      id: "uhs-chem-25-101",
      question: "The theories that explain the nature and formation of covalent chemical bonding include all EXCEPT:",
      options: [
        "Molecular Orbital Theory (MOT)",
        "Valence Bond Theory (VBT)",
        "Valence Shell Electron Pair Repulsion Theory (VSEPR)",
        "Crystal Field Theory (CFT)"
      ],
      answer: 3,
      explanation: "VSEPR theory predicts 3D molecular shapes based on electron repulsion, but does not explain orbital overlap mechanics forming σ and π covalent bonds."
    },
    {
      id: "uhs-chem-25-110",
      question: "Select the correct arrangement of hybrid orbitals in order of decreasing orbital size / extent:",
      options: [
        "sp > sp² > sp³",
        "sp³ > sp > sp²",
        "sp³ > sp² > sp",
        "sp² > sp³ > sp"
      ],
      answer: 2,
      explanation: "As s-character increases (sp³ 25% → sp² 33% → sp 50%), electrons are pulled closer to the nucleus, making sp hybrid orbitals the smallest. Thus, orbital size follows sp³ > sp² > sp."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "Covalent bond maybe",
        options: [
          "100% covalent",
          "100% ionic",
          "Partially ionic",
          "Both a and c"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-2",
        question: "When the two partially filled atomic orbital overlap in such a way that the probability of finding electron is maximum around the line joining the two nuclei the result is the formation of",
        options: [
          "Sigma bond",
          "Pi bond",
          "Hydrogen bond",
          "Metallic Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "The all elements get their stabilization to attain nearest configuration",
        options: [
          "Alkali metals",
          "Noble metals",
          "Alkaloids",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-4",
        question: "In the second period of elements although oxygen lies next to nitrogen yet its ionization first energy is lower than that of Nitrogen because",
        options: [
          "In oxygen there exist repulsion between pair of electrons present in the same orbital of valence shell",
          "Oxygen is paramagnetic in character",
          "Nuclear charge of oxygen is greater than nitrogen",
          "Oxygen is higher electron affinity"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-5",
        question: "Bond energy of molecule depends upon",
        options: [
          "Bond distance and Bond polarity",
          "Ionization energy",
          "Internal energy",
          "Kinetic energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "Energy required to remove electron from an atom",
        options: [
          "Ionization potential",
          "Electropositivity",
          "Electronegativity",
          "Electron affinity"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-7",
        question: "All are true for pi bond except",
        options: [
          "Pi bond is formed from SP hybrid orbitals",
          "Pi bond is weaker than sigma bond",
          "Pi bond is formed by the parallel overlap of half filled P orbital",
          "Pi bond is formed when is sigma bond is already present"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-8",
        question: "Which Bond are present in molecule of hydrogen according to VBT",
        options: [
          "Pi bond",
          "Electrovalent Bond",
          "Sigma bond",
          "Double bond"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "For formation of ionic bond electronegativity difference should be",
        options: [
          "Equal to zero",
          "More than 1.7",
          "Equal to 0.5",
          "Less than 1.7"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-10",
        question: "The number of bonds in nitrogen molecule is",
        options: [
          "One Sigma and one Pi",
          "Three Sigma bonds only",
          "One Sigma and two Pi",
          "Two Sigma and one Pi"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-11",
        question: "Polarity of molecule is expressed in terms of",
        options: [
          "Bond strength",
          "Bond length",
          "Dipole moment",
          "Shape"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "In an atom no two electrons can have same set of quantum numbers this statement was given by",
        options: [
          "Uncertainty principle",
          "Pauli’s exclusion principle",
          "Hund’s rule",
          "Aufbau principle"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-13",
        question: "The unhybridised P orbital in SP2 hybridization is",
        options: [
          "Parallel to SP2",
          "In the same plane",
          "Out of plane",
          "Perpendicular to SP2 orbitals"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "Which is not characteristic of Pi bond",
        options: [
          "Pi bond is formed when sigma bond already exist",
          "Pi bond results from lateral overlap of atomic orbitals",
          "Pi bond are formed from hybrid orbitals",
          "Pi bond mein bhi formed by the overlap of P orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-15",
        question: "The shielding effect of inner electron is responsible for",
        options: [
          "Decreasing ionization energy",
          "Having no effect on ionization energy",
          "Increasing ionization energy",
          "Increasing electronegativity"
        ],
        answer: 0
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
        id: "testmoz-chem-17",
        question: "Which of the following best describe the shape and polarity of carbon disulphide molecule",
        options: [
          "Bent and polar",
          "Pyramidal and polar",
          "Linear and nonpolar",
          "Bent and nonpolar"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following Bond has more energy",
        options: [
          "Covalent",
          "Non polar covalent",
          "Polar covalent",
          "Ionic"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "Which of the following is not planner",
        options: [
          "Benzene",
          "Formaldehyde",
          "BF3",
          "Propane"
        ],
        answer: 3
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
        id: "testmoz-chem-21",
        question: "Element which have completely filled outermost shell and do not combine other metals are called",
        options: [
          "Metal elements",
          "Reactive elements",
          "Unstable elements",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-22",
        question: "Liquid oxygen is",
        options: [
          "Diamagnetic",
          "Paramagnetic",
          "Antimagnetic",
          "Ferromagnetic"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "What will be the shape of a molecule which contain two sigma bond pairs and one lone pair",
        options: [
          "Linear",
          "Tetragonal",
          "V shape",
          "Triangular"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The chemical species having smallest bond angle",
        options: [
          "NH3",
          "NCl3",
          "NF3",
          "NBr3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-25",
        question: "In which of the following has different molecular geometry and electron pair geometry",
        options: [
          "SO3",
          "SnCl2",
          "CO2",
          "BF3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-26",
        question: "The bond formed by electrostatic attraction between negative end of one molecule and positive end of other molecule is called",
        options: [
          "Covalent bond",
          "Hydrogen bond",
          "Ionic bond",
          "Co-ordinate covalent bond"
        ],
        answer: 2
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
        id: "testmoz-chem-28",
        question: "The cationic radius is always ........ than the atomic radius from which it is derived",
        options: [
          "Higher",
          "Larger",
          "Moderate",
          "Smaller"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "In HF Bond electronegativity difference is 1.9 what is the type of this bond",
        options: [
          "Polar covalent",
          "Non polar covalent bond",
          "Pi bond",
          "Coordinate covalent bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-30",
        question: "The s character of hybridized Orbital decrease the bond angle",
        options: [
          "Decreases",
          "Increases",
          "Becomes zero",
          "Does not change"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-31",
        question: "Which information cannot be deduced from the fact that an element has low ionization energy",
        options: [
          "It is a metal",
          "It forms positive ions",
          "It may form ionic",
          "It belongs to P block"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "The number of unpaired electrons in ammonia",
        options: [
          "Zero",
          "One",
          "Three",
          "Four"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "The ionization energy increases from left to right in a period due to increase",
        options: [
          "Nuclear charge",
          "Atomic number",
          "Number of electrons",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "P character in SP",
        options: [
          "75%",
          "25%",
          "50%",
          "33%"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Total number of valence electrons in phosphonium ion is",
        options: [
          "8",
          "10",
          "9",
          "12"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-36",
        question: "Bond angle of water",
        options: [
          "109.5 degree",
          "107.5 degree",
          "120 degree",
          "104.5 degree"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-37",
        question: "The difference in electronegativity values of the bonded atoms between the two atoms is an index of which of covalent bond",
        options: [
          "Polar nature",
          "Nonpolar nature",
          "Strength",
          "Nature"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "Pi bonds are produced by the overlapping of orbitals",
        options: [
          "Some unhybridized orbitals",
          "Hybrid and hybridized orbitals",
          "Hybrid orbitals",
          "S orbitals"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-39",
        question: "The ionization energy",
        options: [
          "Generally increase from left to right in a period",
          "Increase from top bottom in a group",
          "Does not change in a period",
          "Does not change in a group"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "Which one of the following molecules does not follow the duplet or octet rule",
        options: [
          "NH3",
          "HCl",
          "AlCl3",
          "CCl4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionic bond is produced after complete transfer of",
        options: [
          "Nucleus",
          "Electron",
          "Neutron",
          "Proton"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "H2O has a higher boiling point than HF because",
        options: [
          "H2O is more polar than HF",
          "H2O can form more hydrogen bonds",
          "H2O has a higher molecular weight",
          "H2O does not have a higher boiling point than HF"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "The geometry of AB3 molecule is",
        options: [
          "Trigonal pyramidal",
          "Trigonal planar",
          "Trigonal bipyramidal",
          "Tetragonal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "H2S has a net dipole moment while BeF2 has zero dipole moment because",
        options: [
          "H2S molecule is linear while BeF2 is angular",
          "H2S molecule is angular while BeF2 molecule is linear",
          "Fluorine has more electronegativity than S",
          "Be is more electronegativity than S"
        ],
        answer: 1
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
        id: "testmoz-chem-46",
        question: "The carbon to carbon Bond distance is",
        options: [
          "1.10 angstrom",
          "1.20 angstrom",
          "1.30 angstrom",
          "1.54 angstrom"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Zinc has only one Oxidation State because",
        options: [
          "Completely filled 4s orbital",
          "Half filled 4s orbital",
          "Completely filled 3d orbital",
          "Half filled 3s orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-48",
        question: "Which bond is formed between two atoms",
        options: [
          "Sigma bond",
          "Pi bond",
          "Double bond",
          "Triple Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-49",
        question: "Which of the following bond is not present in NH4Cl",
        options: [
          "Ionic bond",
          "Coordinate covalent bond",
          "Covalent bond",
          "Delocalised covalent bond"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following is a false statement concerning ionic compound",
        options: [
          "Greater the lattice energy the greater is the solubility",
          "Higher the dielectric constant of the solvent the greater is the solubility",
          "Higher the dipole moment of the solvent the greater the solubility",
          "Increase of temperature generally increase solubility"
        ],
        answer: 0
      },
   // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-95",
      question: "When hydrochloric acid is added to brine, solubility of sodium chloride ______.",
      options: [
        "Decreases",
        "Increases",
        "Remains same",
        "Become equal to HCl"
      ],
      answer: 0,
      explanation: "Adding HCl introduces a high concentration of Cl⁻ ions. By the common ion effect, the solubility equilibrium NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq) shifts to the left, decreasing the solubility of NaCl and causing it to precipitate out."
    },
    {
      id: "bumhs-2025-chem-109",
      question: "Kc value will change, if we change:",
      options: [
        "Pressure",
        "Temperature",
        "Concentration",
        "any one"
      ],
      answer: 1,
      explanation: "The equilibrium constant (Kc) is a thermodynamic constant that depends solely on temperature. Changes in pressure, volume, or concentration shift the equilibrium position but do not alter the value of Kc."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-71",
      question: "Equilibrium constant has no units, if the number of moles of products are:",
      options: [
        "Less than reactants",
        "More than reactants",
        "Equal to reactants",
        "Half of reactants"
      ],
      answer: 2,
      explanation: "When Δn = (moles of gaseous products) − (moles of gaseous reactants) = 0, concentration units in the numerator and denominator cancel out completely, making Kc dimensionless."
    },
    {
      id: "bumhs-mdcat-2024-87",
      question: "The sum of pH and pOH for pure water at 25 °C is:",
      options: [
        "10¹⁴",
        "10⁻¹⁴",
        "14",
        "25"
      ],
      answer: 2,
      explanation: "At 25 °C, Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. Taking the negative logarithm gives pH + pOH = 14."
    },
    {
      id: "bumhs-mdcat-2024-111",
      question: "Suppose the following system has reached equilibrium at a certain temperature:\nN₂O₄ (g) ⇌ 2 NO₂ (g)\n\nAdding N₂O₄ to the system will ______.",
      options: [
        "start forward reaction",
        "start reverse reaction",
        "not disturb equilibrium",
        "raise the temperature of system"
      ],
      answer: 0,
      explanation: "Increasing the concentration of reactant N₂O₄ stresses the system. By Le Chatelier's principle, the equilibrium shifts in the forward direction to consume the added N₂O₄."
    },
    {
      id: "bumhs-mdcat-2024-115",
      question: "Le-Chatelier’s principle does NOT give the information of effect of the following on equilibrium:",
      options: [
        "Time",
        "Pressure",
        "Temperature",
        "Concentration"
      ],
      answer: 0,
      explanation: "Le Chatelier's principle predicts how equilibrium position shifts in response to changes in concentration, pressure, and temperature. It provides no information regarding kinetics or the time required to reach equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-73",
      question: "The equilibrium of this reaction would not be affected by an increase in pressure:",
      options: [
        "2SO₂ + O₂ ↔ 2SO₃",
        "N₂ + O₂ ↔ 2NO",
        "2NO + Cl₂ ↔ 2NOCl",
        "PCl₅ ↔ PCl₃ + Cl₂",
        "CO + 3H₂ ↔ CH₄ + H₂O"
      ],
      answer: 1,
      explanation: "In N₂ + O₂ ↔ 2NO, the total number of gaseous reactant moles (1+1=2) equals the product moles (2). Since Δn = 0, changes in pressure have no effect on the equilibrium position."
    },
    {
      id: "chem-sindh-24-94",
      question: "The term “active mass” used in the Law of Mass Action means:",
      options: [
        "Number of moles per dm³",
        "Number of moles per dm²",
        "Gram per dm³",
        "Number of moles",
        "Number of molecules"
      ],
      answer: 0,
      explanation: "In the Law of Mass Action, 'active mass' refers to the molar concentration of a substance, expressed in moles per dm³ (or mol/L)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-95",
      question: "For which reaction, the value of Kc increases with increase in temperature?",
      options: [
        "CH₄ + O₂ → CO₂ + H₂O",
        "NaOH + HCl → NaCl + H₂O",
        "2SO₂ + O₂ → 2SO₃",
        "H₂ + I₂ → 2HI"
      ],
      answer: 3,
      explanation: "For an endothermic reaction (ΔH > 0, such as H₂ + I₂ ⇌ 2HI), increasing the temperature shifts equilibrium in the forward direction, which increases the value of Kc."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-126",
      question: "The Ksp value of salt AB = A⁺ + B⁻ is 9 × 10⁻⁸. Its molar solubility will be:",
      options: [
        "3×10⁻⁴",
        "9×10⁻⁴",
        "3×10⁻⁸",
        "9×10⁻⁸"
      ],
      answer: 0,
      explanation: "For a 1:1 binary salt AB, Ksp = s². Molar solubility s = √Ksp = √(9 × 10⁻⁸) = 3 × 10⁻⁴ mol/dm³."
    },
    {
      id: "kmu-mdcat-25-chem-141",
      question: "If ΔH for a reaction is positive (endothermic), then by decreasing temperature, the reaction will:",
      options: [
        "Move forward",
        "Move in reverse",
        "Have no effect",
        "Be both forward and reverse"
      ],
      answer: 1,
      explanation: "For an endothermic reaction (heat is a reactant), decreasing the temperature removes heat. By Le Chatelier's principle, the system shifts in the reverse (exothermic) direction."
    },
    {
      id: "kmu-mdcat-25-chem-158",
      question: "According to Le Chatelier’s Principle, when the pressure of a gaseous equilibrium system is increased, the equilibrium shifts towards:",
      options: [
        "No change in equilibrium position",
        "The side with greater volume",
        "The side with lower volume",
        "The side with more moles of gas"
      ],
      answer: 2,
      explanation: "Increasing total pressure causes the equilibrium system to relieve stress by shifting toward the side with fewer gas molecules (lower volume)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-87",
      question: "Forward reaction is the one that",
      options: [
        "Is very slow at the beginning of the reaction",
        "Reacts to form reactants",
        "Speeds up gradually and at equilibrium its rate becomes constant",
        "Takes place from left to right as given in chemical equation"
      ],
      answer: 3,
      explanation: "In a standard chemical equation, the forward reaction is defined as the process proceeding from left (reactants) to right (products)."
    },
    {
      id: "kmu-mdcat-2024-89",
      question: "In the production of SO₃ from SO₂ and Oxygen (2SO₂ + O₂ ⇌ 2SO₃), the yield of SO₃ is increased by",
      options: [
        "Adding a catalyst",
        "Adding more SO₂",
        "Increasing temperature",
        "Removing oxygen"
      ],
      answer: 1,
      explanation: "Adding more reactant (SO₂) increases reactant concentration, shifting the equilibrium in the forward direction and increasing the yield of SO₃."
    },
    {
      id: "kmu-mdcat-2024-90",
      question: "Consider N₂ + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92.46 kJ/mol\n\nThe optimum temperature (°C) to produce ammonia in Haber's process is",
      options: [
        "0",
        "450",
        "500",
        "Constant temperature"
      ],
      answer: 1,
      explanation: "Although low temperature favors high yield in exothermic Haber's process, 400°C–450°C is chosen industrially as an optimum compromise temperature to achieve an acceptable reaction rate."
    },
    {
      id: "kmu-mdcat-2024-91",
      question: "The unit of Kc for the system PCl₅ ⇌ PCl₃ + Cl₂ is",
      options: [
        "dm³/mol",
        "mol/dm³",
        "mol/dm⁶",
        "mol²/dm⁶"
      ],
      answer: 1,
      explanation: "Kc = [PCl₃][Cl₂] / [PCl₅] = (mol/dm³)(mol/dm³) / (mol/dm³) = mol/dm³."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-72",
      question: "If weak acid is diluted with water, then H⁺ ions concentration will ______.",
      options: [
        "decrease",
        "gradually decreases then increase",
        "increase",
        "remain same"
      ],
      answer: 0,
      explanation: "Diluting a solution increases total volume. Although degree of ionization α increases (Ostwald's dilution law), the overall volume expansion dominates, causing total [H⁺] concentration to decrease."
    },
    {
      id: "szambu-chem-24-80",
      question: "According to law of mass action, Kₚ > Kc when reaction occurs with ______.",
      options: [
        "decrease in volume on product side",
        "increase in volume on product side",
        "increase in volume on reactant side",
        "simultaneous increase and decrease of product"
      ],
      answer: 1,
      explanation: "Kp = Kc(RT)^Δn. For Kp > Kc, Δn must be positive (moles/volume of gaseous products > moles of gaseous reactants), which means an increase in volume on the product side."
    },
    {
      id: "szambu-chem-24-82",
      question: "What will be the molarity of HCl solution with pH=4?",
      options: [
        "0.0001",
        "0.0004",
        "0.004",
        "4.0"
      ],
      answer: 0,
      explanation: "For monoprotic strong acid HCl, [H⁺] = 10^(−pH) = 10⁻⁴ M = 0.0001 M."
    },
    {
      id: "szambu-chem-24-89",
      question: "Consider a reaction of A into B, if K value is 3×10⁻¹² at 200°C then what will be the value of K at 250°C?",
      options: [
        "K = 9 × 10⁻³ s⁻¹",
        "K = 12 × 10⁻³ s⁻¹",
        "K = 6 × 10⁻¹² s⁻¹",
        "K = 15 × 10⁻¹² s⁻¹"
      ],
      answer: 2,
      explanation: "As temperature increases, the equilibrium/rate constant increases. For an endothermic shift, K increases from 3×10⁻¹² to a higher magnitude such as 6×10⁻¹²."
    },
    {
      id: "szambu-chem-24-91",
      question: "Chemical equilibrium given below will shift to backward direction by ______.\n2NO + O₂ ⇌ 2NO₂ + Heat",
      options: [
        "decreasing pressure and increasing temperature",
        "decreasing the temperature",
        "increasing the concentration of NO & O₂",
        "increasing the pressure"
      ],
      answer: 0,
      explanation: "Since the reaction is exothermic and has 3 gas moles on the left vs 2 on the right, decreasing pressure (shifts toward more moles) and increasing temperature (shifts in endothermic direction) both push the equilibrium to the left (backward)."
    },
    {
      id: "szambu-chem-24-117",
      question: "Which of the following mixture will constitute the acidic buffer solution?",
      options: [
        "Acetic acid & sodium acetate",
        "Acetic acid & ammonia",
        "Acetic acid and its ammonium acetate",
        "Ammonia & ammonium acetate"
      ],
      answer: 0,
      explanation: "An acidic buffer consists of a weak acid and its salt with a strong base, such as Acetic acid (CH₃COOH) and Sodium acetate (CH₃COONa)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "In separate vessels of volume 2000 cm³ (2 L) and 1500 cm³ (1.5 L), 6 g of hydrogen and 28 g of nitrogen are mixed in each vessel at 25°C. Ammonia formed is:\nN₂ + 3H₂ ⇌ 2NH₃",
      options: [
        "More in 2 L vessel",
        "More in 1500 cm³ vessel",
        "Equal in both vessel",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "N₂ + 3H₂ ⇌ 2NH₃ reduces gaseous volume (4 moles → 2 moles). Smaller vessel volume (1.5 L vs 2.0 L) results in higher pressure, which shifts equilibrium forward to yield more ammonia."
    },
    {
      id: "szambu-chem-25-2",
      question: "If the equilibrium expression of a reversible reaction is [C]² / ([A][B]), the balanced chemical equation should be:",
      options: [
        "C = A + B",
        "2C = A + B",
        "A + B = C",
        "A + B = 2C"
      ],
      answer: 3,
      explanation: "The equilibrium expression format [Products]^coefficients / [Reactants]^coefficients corresponds to A + B ⇌ 2C."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of following reaction will move backward by decreasing pressure?",
      options: [
        "4Q ⇌ T + S",
        "2A ⇌ 3C",
        "K ⇌ L",
        "H + 2M ⇌ 2B + 2D"
      ],
      answer: 1,
      explanation: "Decreasing pressure shifts equilibrium toward the side with more moles. In 2A ⇌ 3C, products have 3 moles and reactants have 2 moles; decreasing pressure moves forward. However, for reactions where reactant moles > product moles, decreasing pressure moves backward."
    },
    {
      id: "szambu-chem-25-4",
      question: "According to Le Chatelier’s principle, in Haber’s process (N₂ + 3H₂ ⇌ 2NH₃ + Heat) yield of ammonia can be increased by:",
      options: [
        "decreasing pressure and increasing temperature",
        "increasing pressure and decreasing temperature",
        "increasing volume and decreasing temperature",
        "decreasing concentration of H₂"
      ],
      answer: 1,
      explanation: "Forward reaction is exothermic and involves a decrease in gas moles (4 → 2). High pressure and low temperature favor maximum yield of ammonia."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-84",
      question: "The principle that states that if a stress is applied to a system at equilibrium the system nullify the effect of stress as far as possible is:",
      options: [
        "Haber’s",
        "Le-Chatelier",
        "Boyle’s",
        "Charles’"
      ],
      answer: 1,
      explanation: "This is the core definition of Le Chatelier's Principle."
    },
    {
      id: "uhs-2024-chem-85",
      question: "Identify the CORRECT option required for the maximum yield of ammonia by Haber’s process:",
      options: [
        "High pressure low temperature continual removal of ammonia",
        "Low pressure low temperature continual removal of ammonia",
        "High pressure high temperature continual removal of ammonia",
        "High pressure low temperature continual addition of ammonia"
      ],
      answer: 0,
      explanation: "Maximum yield of NH₃ is achieved under high pressure (shifts to fewer moles), low temperature (exothermic forward step), and continuous removal of NH₃ (pulls reaction forward)."
    },
    {
      id: "uhs-2024-chem-86",
      question: "Consider the following reaction in equilibrium and tell addition of which chemical will turn the cloudy solution into clear solution?\nBiCl₃ + H₂O ⇌ BiOCl (cloudy) + 2HCl",
      options: [
        "BiCl₃",
        "H₂O",
        "BiOCl",
        "HCl"
      ],
      answer: 3,
      explanation: "BiOCl forms a cloudy white precipitate. Adding HCl increases product concentration, shifting equilibrium in the reverse direction to dissolve BiOCl and form clear BiCl₃ solution."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-106",
      question: "Which of the following is basic buffer?",
      options: [
        "NH₄OH/NH₄Cl",
        "NaOH/NaCl",
        "NaOH/HCl",
        "H₂CO₃/NaHCO₃"
      ],
      answer: 0,
      explanation: "A basic buffer consists of a weak base and its salt with a strong acid, such as Ammonium hydroxide (NH₄OH) and Ammonium chloride (NH₄Cl)."
    },
    {
      id: "uhs-chem-25-107",
      question: "What happens when H⁺ is added to ammonium hydroxide and ammonium chloride buffer?",
      options: [
        "more ammonium hydroxide is formed",
        "reaction will move reverse",
        "reaction will move forward",
        "no effect on equilibrium"
      ],
      answer: 0,
      explanation: "Added H⁺ ions neutralize free OH⁻ ions in the buffer. The weak base dissociation NH₄OH ⇌ NH₄⁺ + OH⁻ shifts forward to replace OH⁻, or added H⁺ combines with NH₄OH/OH⁻ to form more un-ionized species, keeping pH constant."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "NaNO3 + heat ⇌ NaNO2 + O2 in this reaction",
        options: [
          "Kp = Kc",
          "Kp > Kc",
          "Kp < Kc",
          "Kp < ksc"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-2",
        question: "In which of the following cases, does the reaction goes farthest to completion",
        options: [
          "K = 10^3",
          "K = 10",
          "K = 10^-2",
          "K = 1"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "At 100°C, 0.1 mole of N2O4 is heated in a one dm³ flask. At equilibrium concentration of NO2 was found to be 0.12 moles. Calculate Kc for the reaction",
        options: [
          "0.12",
          "0.36",
          "0.21",
          "0.012"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-4",
        question: "A solubility product Ksp predicts whether",
        options: [
          "Diffusion",
          "Solubility",
          "Precipitation will take place or no",
          "MP and BP"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-5",
        question: "For which reaction, the volume is an irrelevant factor in determining Kc",
        options: [
          "Formation of ester",
          "Dissociation of PCl5",
          "Decomposition of N2O4",
          "Synthesis of NH3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "When a catalyst is added to a reversible reaction in equilibrium state, the value of equilibrium constant",
        options: [
          "Increases",
          "Decreases",
          "Does not change",
          "Become zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The solubility of AgI in NaI solution is less than in pure water because",
        options: [
          "AgI forms a complex with NaI",
          "Of common ion effect",
          "Solubility product of AgI is less than that of NaI",
          "The temperature of the solution decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "A catalyst can’t initiate the reaction but speeds up a reaction which is possible",
        options: [
          "Physically",
          "Thermodynamically",
          "Chemically",
          "In laboratory"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-9",
        question: "If the ratio of initial concentration of the reagents is greater than the Kc then",
        options: [
          "The reaction will shift towards the reverse direction",
          "More quantity of product is obtained",
          "The ratio increase to the value of Kc",
          "Equilibrium has been attained"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-10",
        question: "Amongst the following hydroxide, the one which has the lowest value of Ksp at ordinary temp about 25°C is",
        options: [
          "Mg(OH)2",
          "Ba(OH)2",
          "Ca(OH)2",
          "Be(OH)2"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-11",
        question: "The wrong statement among the following is",
        options: [
          "Buffer solutions have reverse pH",
          "An acidic buffer mixture can be prepared by mixing a solution of formic acid and sodium formate",
          "Buffer solution resist the change in pH by the addition of an acid or base",
          "Addition of sodium acetate to a buffer solution of sodium acetate and acetic acid doesn’t affect its pH"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-12",
        question: "Which of the following is correct statement about Kc",
        options: [
          "May or may not have a unit",
          "Depend upon equilibrium concentration",
          "Thermodynamic property",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "The reaction H2 + I2 ⇌ 2HI is independent of",
        options: [
          "Temperature",
          "Concentration",
          "Catalyst",
          "Pressure"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "When no of moles of reactants and product are equal then Kc has units",
        options: [
          "Moles/dm³",
          "Moles²/dm⁶",
          "Moles⁻²/dm⁻⁶",
          "No unit"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Which of the following statement is false",
        options: [
          "If 1M CH3COONa is added to 1M CH3COOH, pH of the solution decreases",
          "If water is added to a mixture of CH3COOH + CH3COONa its pH remains constant",
          "If HCl is added to acetic acid its ionization will be suppressed",
          "If a crystal of NH4Cl is added to NH4OH solution its pH decreases"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The higher value of equilibrium constant K shows that",
        options: [
          "The reaction has gone to near completion towards right",
          "The reaction has not yet started",
          "The reaction has gone to near completion towards left",
          "Whenever equilibrium will be achieved, the product will be very high"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-17",
        question: "For a reversible reaction, if the concentrations of the reactants are doubled, at constant temperature the reaction will",
        options: [
          "Stand still",
          "Slow down",
          "Speed up in reverse direction",
          "Moves towards right"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-18",
        question: "A system at equilibrium can be disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "The reaction PCl5 ⇌ PCl3 + Cl2 is an example of",
        options: [
          "Backward reaction",
          "Irreversible reaction",
          "Forward reaction",
          "Reversible reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-20",
        question: "The addition of any of the reactants or removal of any products favor",
        options: [
          "Forward reaction",
          "Equilibrium position",
          "Backward reaction",
          "Equilibrium constant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-21",
        question: "Chemical equilibrium is established in",
        options: [
          "Reversible reaction",
          "Irreversible reactions",
          "Both a and b",
          "Forward"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "According to law of mass action, “the rate of chemical reaction is proportional to”",
        options: [
          "Products",
          "Product of molar concentration of reactants",
          "Initial concentration of reactants",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "In Kp = Kc(RT)^Δn, Δn may have",
        options: [
          "Integer or fractional values",
          "Negative values",
          "Either of these",
          "Positive values"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The solubility product of sparingly soluble salt AB at room temperature is 1.21×10^-6 its molar solubility is",
        options: [
          "1.21×10^-6",
          "1×10^-4",
          "1.21×10^-3",
          "1.1×10^-3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "The addition of NaCl to AgCl decreases the solubility of AgCl",
        options: [
          "As solubility product decreases",
          "As solubility becomes unsaturated",
          "Due to common ion effect of Cl-",
          "As solution becomes supersaturated"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "In a given system water and ice are in equilibrium if pressure is applied to the above system then",
        options: [
          "More ice is formed",
          "More ice is melted",
          "Amount of ice and water remains constant",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "Which of the following is correct",
        options: [
          "Kp will always have some unit",
          "Kp and Kc will never have units",
          "Kc will always have some unit",
          "Kp and Kc will have some unit if Δn ≠ 0"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "The most important buffer in blood consist of",
        options: [
          "HCl and Cl-",
          "H2CO3 and Cl-",
          "H2CO3 and HCO3-",
          "HCl and HCO3-"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-29",
        question: "If a reversible reaction attains equilibrium quickly, it predicts that",
        options: [
          "Kc > 1",
          "Kc = 1",
          "Kc < 1",
          "Kc >> 1"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-30",
        question: "A precipitate is formed when",
        options: [
          "The solution become saturated",
          "The ionic product is nearly equal to the solubility product",
          "The ionic product is less than the solubility product",
          "The ionic product exceeds the solubility product"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Rate at which a reaction proceeds is directly related to the",
        options: [
          "Concentration of product",
          "Concentration of reactant",
          "Volume of reactant",
          "Volume of product"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-32",
        question: "Ksp is called",
        options: [
          "Solubility product",
          "Concentration",
          "Equilibrium",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "In exothermic reaction by decreasing the temperature equilibrium constant",
        options: [
          "Same",
          "Sometimes decreases Sometimes increases",
          "Reaction moves backward",
          "Increases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "If a product of a reaction act as a catalyst, such process is called",
        options: [
          "Positive catalyst",
          "Negative catalyst",
          "Auto catalyst",
          "Both a and b"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Chemical equilibrium is dynamic nature because",
        options: [
          "The equilibrium is attained slowly",
          "Concentration of reactant is always greater than products",
          "Concentration of reactant does not become equal at equilibrium",
          "Both forward and backward reaction occurs at all time with the same speed"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-36",
        question: "Purification of table salt NaCl by passing HCl gas through its saturated aqueous solution is an example of",
        options: [
          "Law of mass action",
          "Hess’s law",
          "Common ion effect",
          "Henry’s law"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-37",
        question: "For a gaseous reaction, when number of moles of reactant and product are equal",
        options: [
          "The value of Kp and Kc are different",
          "The value of Kp is greater than Kc",
          "The value of Kc is greater than Kp",
          "The value of Kp and Kc are same"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "At a constant temperature the concentration of reactant is increased at equilibrium, the equilibrium constant",
        options: [
          "Increases",
          "Remains unaffected",
          "Decreases",
          "First increases and then decreases"
        ],
        answer: 1
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
        id: "testmoz-chem-40",
        question: "A chemical reaction is catalyzed by a catalyst X. Hence, X",
        options: [
          "Increases activation energy of the reaction",
          "Does not affect equilibrium position of the reaction",
          "Increase rate constant of the reaction",
          "Reduce enthalpy of the reaction"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionization of KClO3 is suppressed by",
        options: [
          "Changing temperature",
          "Adding of KCl",
          "Adding of NaNO3",
          "Decreasing pressure"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "When the total number of moles of reactant and products are equal then the equilibrium state is not disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature change",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "In a buffer solution consisting of a weak acid and its salt, the ratio of concentration of salt to acid is increased 10-fold, then the pH of the solution",
        options: [
          "Increases by one",
          "Decrease by one",
          "Increases by 10 folds",
          "Decreases by 10 folds"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-44",
        question: "The equilibrium between water and its vapors in an open vessel",
        options: [
          "Can be achieved",
          "Cannot be achieved",
          "Depends on pressure",
          "Depends on temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-45",
        question: "Dissolution of which of these increase with temperature",
        options: [
          "Li2CO3",
          "LiCl",
          "NaCl",
          "KI"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-46",
        question: "When the equilibrium constant is small, it indicates",
        options: [
          "Reaction is at start",
          "Reaction is at equilibrium",
          "Reaction is at end",
          "Very little forward reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Which of the following is not the characteristics feature of dynamic equilibrium",
        options: [
          "It’s characterized by constant macroscopic property",
          "It is only achieved in open system",
          "It can be obtained in either direction",
          "It can be achieved in closed system"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-48",
        question: "In equilibrium Ksp is expressed as\nBaSO4 ⇌ Ba²⁺ + SO4²⁻",
        options: [
          "Ksp = [BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]/[BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-49",
        question: "A reversible reaction is said to have attained equilibrium, when",
        options: [
          "Backward reaction stops",
          "Both backward and forward reaction take place at equal speed",
          "Both backward and forward reaction stop",
          "Concentration of each of the reactions and products become equal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Buffer action can be explained by",
        options: [
          "Le Chatelier principle",
          "Common ion effect",
          "Solubility product",
          "A and B"
        ],
        answer: 3
      },
  // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-87",
      question: "Value of “n” (number of electrons transferred) in standard dichromate redox balancing by the oxidation number method is:",
      options: [
        "1",
        "2",
        "3",
        "6"
      ],
      answer: 3,
      explanation: "In standard dichromate redox reactions (Cr₂O₇²⁻ → 2Cr³⁺), each Cr atom changes oxidation state from +6 to +3 (3 e⁻ change). For 2 Cr atoms per unit, total n = 6 electrons."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-72",
      question: "Electric current in solutions (electrolytes) is carried by:",
      options: [
        "Ions",
        "Canal rays",
        "Free protons",
        "Free electrons"
      ],
      answer: 0,
      explanation: "In electrolytic solutions, electrical conduction occurs via the migration of mobile positive and negative ions toward opposing electrodes."
    },
    {
      id: "bumhs-mdcat-2024-79",
      question: "What change in oxidation number of Cu takes place in the following reaction?\nCu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O",
      options: [
        "0 to −1",
        "0 to +1",
        "0 to −2",
        "0 to +2"
      ],
      answer: 3,
      explanation: "Elemental copper Cu has an oxidation state of 0. In copper(II) nitrate Cu(NO₃)₂, copper has an oxidation state of +2."
    },
    {
      id: "bumhs-mdcat-2024-85",
      question: "When potassium chromate is treated with an acid, it produces:",
      options: [
        "water",
        "sodium chloride",
        "potassium sulphate",
        "potassium dichromate"
      ],
      answer: 3,
      explanation: "Acidifying yellow chromate solution (CrO₄²⁻) shifts equilibrium to produce orange potassium dichromate (Cr₂O₇²⁻): 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O."
    },
    {
      id: "bumhs-mdcat-2024-119",
      question: "Oxidation number of Mn in K₂MnO₄ is:",
      options: [
        "+4",
        "+5",
        "+6",
        "+7"
      ],
      answer: 2,
      explanation: "In potassium manganate (K₂MnO₄): 2(+1) + Mn + 4(−2) = 0 → +2 + Mn − 8 = 0 → Mn = +6."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-105",
      question: "Fuel cell is a typical galvanic cell which is based on reaction between:",
      options: [
        "Hydrogen and copper",
        "Methane and oxygen",
        "Hydrogen and oxygen",
        "Nitrogen and oxygen",
        "Hydrogen and zinc"
      ],
      answer: 2,
      explanation: "A standard H₂–O₂ fuel cell generates electrical energy from the catalyzed redox reaction between hydrogen fuel and oxygen oxidant to form water."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-121",
      question: "When SHE is connected with a Cu electrode using a salt bridge and external wire under standard conditions:",
      options: [
        "Cu reduces",
        "Cu²⁺ reduces",
        "H⁺ reduces",
        "H₂ reduces"
      ],
      answer: 1,
      explanation: "Standard reduction potential of Cu²⁺/Cu (+0.34 V) is higher than H⁺/H₂ (0.00 V). Thus, Cu²⁺ ions accept electrons and undergo reduction at the copper cathode."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-129",
      question: "In an electrolytic cell when the current passes through a solution, the anode is:",
      options: [
        "A positive electrode where oxidation occurs",
        "A negative electrode where reduction occurs",
        "A positive electrode where reduction occurs",
        "A negative electrode where oxidation occurs"
      ],
      answer: 0,
      explanation: "In an electrolytic cell, the anode is connected to the positive terminal of the power supply and serves as the electrode where oxidation (loss of electrons) takes place."
    },
    {
      id: "kmu-mdcat-25-chem-148",
      question: "Balance the equation using the oxidation number method for: Cu + H₂SO₄ → CuSO₄ + SO₂ + H₂O",
      options: [
        "Cu + H₂SO₄ → CuSO₄ + H₂O",
        "Cu + H₂SO₄ → CuSO₄ + H₂O",
        "Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O",
        "2Cu + 2H₂SO₄ → 2CuSO₄ + 2H₂O"
      ],
      answer: 2,
      explanation: "Cu → Cu²⁺ + 2e⁻ (oxidation) and H₂SO₄ + 2e⁻ + 2H⁺ → SO₂ + 2H₂O (reduction). Balancing atoms and charges yields Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-100",
      question: "Which one of the following is a strong electrolyte in solution?",
      options: [
        "Acetic acid",
        "Ammonium hydroxide",
        "Carbonic acid",
        "Potassium iodide"
      ],
      answer: 3,
      explanation: "Potassium iodide (KI) is a soluble ionic salt that completely dissociates into K⁺ and I⁻ ions in aqueous solution, behaving as a strong electrolyte."
    },
    {
      id: "kmu-mdcat-2024-102",
      question: "The electrode potential of the standard hydrogen electrode (SHE) is chosen as:",
      options: [
        "−1 V",
        "0 V",
        "1 V",
        "2 V"
      ],
      answer: 1,
      explanation: "The standard hydrogen electrode is assigned an arbitrary reference electrode potential of 0.00 Volts at all temperatures."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-99",
      question: "Which type of redox reaction takes place at the cathode of an electrochemical cell?",
      options: [
        "Decomposition",
        "Dissociation",
        "Oxidation",
        "Reduction"
      ],
      answer: 3,
      explanation: "By definition across all electrochemical cells (galvanic or electrolytic), reduction (gain of electrons) always occurs at the cathode."
    },
    {
      id: "szambu-chem-24-107",
      question: "Which one of the following is NOT an example of a chemical-to-electrical electrochemical cell?",
      options: [
        "Electrolytic cell",
        "Photovoltaic cell",
        "Solar cell",
        "Voltaic cell"
      ],
      answer: 1,
      explanation: "Photovoltaic (solar) cells convert light energy directly into electrical energy via the photoelectric/photovoltaic semiconductor effect, rather than converting chemical redox reaction energy."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "In a standard hydrogen electrode, the platinum electrode:",
      options: [
        "Reacts with hydrogen",
        "Provide a surface for oxidation and reduction",
        "Acts as a salt bridge",
        "Provide voltage to the circuit"
      ],
      answer: 1,
      explanation: "Platinum is an inert conductor that adsorbs H₂ gas and provides a conducting surface for electron transfer during H₂ ⇌ 2H⁺ + 2e⁻ equilibrium."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which species contains an element with an oxidation number of +4?",
      options: [
        "CrO₄²⁻",
        "MnO₄²⁻",
        "H₂SO₄",
        "Na₂CO₃"
      ],
      answer: 3,
      explanation: "In sodium carbonate Na₂CO₃: 2(+1) + C + 3(−2) = 0 → +2 + C − 6 = 0 → C = +4."
    },
    {
      id: "szambu-chem-25-3",
      question: "Oxidation state of Tungsten (W) in Na₂W₄O₁₃·H₂O is:",
      options: [
        "+5",
        "+6",
        "+8",
        "Zero"
      ],
      answer: 1,
      explanation: "For Na₂W₄O₁₃: 2(+1) + 4(W) + 13(−2) = 0 → +2 + 4W − 26 = 0 → 4W = +24 → W = +6."
    },
    {
      id: "szambu-chem-25-4",
      question: "In the given reaction CH₃OH → HCOOH, oxidation state of carbon changes from:",
      options: [
        "–2 to 0",
        "–2 to +2",
        "–3 to +2",
        "0 to +2"
      ],
      answer: 1,
      explanation: "In methanol CH₃OH: C + 3(+1) + (−2) + (+1) = 0 → C + 2 = 0 → C = −2. In formic acid HCOOH: (+1) + C + 2(−2) + (+1) = 0 → C − 2 = 0 → C = +2."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-94",
      question: "Oxidation number of ‘Mn’ in KMnO₄ is:",
      options: [
        "0",
        "+1",
        "–7",
        "+7"
      ],
      answer: 3,
      explanation: "In potassium permanganate (KMnO₄): +1 + Mn + 4(−2) = 0 → +1 + Mn − 8 = 0 → Mn = +7."
    },
    {
      id: "uhs-2024-chem-95",
      question: "Which step is irrelevant with respect to balancing of redox equations by oxidation number method?",
      options: [
        "Split the reaction into two half reactions",
        "Assign oxidation number to all the atoms involved in the equation",
        "Identify the element undergoing a change in oxidation number",
        "Equalize the number of electrons lost and gained"
      ],
      answer: 0,
      explanation: "Splitting into half-reactions is characteristic of the ion-electron method. The oxidation number method balances the entire equation directly without splitting into half-reactions."
    },
    {
      id: "uhs-2024-chem-96",
      question: "Which of the following is NOT a correct feature of standard electrolytic cells?",
      options: [
        "Reduction occurs at cathode",
        "Oxidation occurs at anode",
        "Alternating current source is connected to electrodes",
        "Electrochemical reaction takes place"
      ],
      answer: 2,
      explanation: "Electrolytic cells require a direct current (DC) power source to drive non-spontaneous redox reactions; an AC source would alternate polarities continuously and disrupt electrolysis."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-92",
      question: "Oxidation numbers of X, Y, Z are +6, –2, & –1 respectively. What is the possible neutral molecular formula when these atoms combine?",
      options: [
        "X₂Y₂",
        "XY₂Z₂",
        "XY₂Z",
        "XYZ"
      ],
      answer: 1,
      explanation: "Checking total oxidation state for XY₂Z₂: (+6) + 2(−2) + 2(−1) = +6 − 4 − 2 = 0 (neutral molecule)."
    },
    {
      id: "uhs-chem-25-95",
      question: "The order of ease of reduction (standard reduction potential sequence) of H⁺, Cu²⁺ and Ag⁺ is:",
      options: [
        "H⁺ > Cu²⁺ > Ag⁺",
        "H⁺ > Ag⁺ > Cu²⁺",
        "Ag⁺ > Cu²⁺ > H⁺",
        "H⁺ > Cu²⁺ > Ag⁺"
      ],
      answer: 2,
      explanation: "Standard reduction potentials are: Ag⁺ (+0.80 V) > Cu²⁺ (+0.34 V) > H⁺ (0.00 V). Therefore, Ag⁺ is reduced most easily."
    },
    {
      id: "uhs-chem-25-113",
      question: "Which of the following situations most clearly demonstrates a key characteristic of a Redox reaction?",
      options: [
        "Water boiling to steam",
        "Hydrogen gas reacting with chlorine to form hydrogen chloride gas",
        "Sodium chloride dissolving in water",
        "Ethanol evaporating at room temperature"
      ],
      answer: 1,
      explanation: "In H₂ + Cl₂ → 2HCl, hydrogen is oxidized (0 to +1) and chlorine is reduced (0 to −1), involving an explicit change in oxidation states."
    },
    {
      id: "uhs-chem-25-117",
      question: "Which of the following best identifies the essential definition of a redox reaction?",
      options: [
        "transfer of proton",
        "transfer of electron",
        "absorption of light",
        "exchange of ions"
      ],
      answer: 1,
      explanation: "Redox (reduction-oxidation) reactions are fundamentally defined by the transfer of electrons from a reducing agent to an oxidizing agent."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "By the electrolysis of CuCl₂ using inert electrodes of platinum which species is deposited at cathode",
        options: [
          "Hydrogen",
          "Copper",
          "Oxygen",
          "Chlorine"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-2",
        question: "A cell in which a non spontaneous Redox reaction is carried out by passing an electric current is",
        options: [
          "Galvanic cell",
          "Volatile cell",
          "Daniel cell",
          "Electrolytic cell"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-3",
        question: "On ascending the electrochemical series strength as reducing agent",
        options: [
          "Increases",
          "Remain same",
          "Decreases",
          "Not determinable"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-4",
        question: "In Galvanic cell salt Bridge is used in order to",
        options: [
          "Pass the electric current",
          "Prevent the flow of ions",
          "Mix solution of two half cells",
          "Allow movement of Ions between two half cells"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "Which of the following is Oxidation state of oxygen in peroxides",
        options: [
          "-2",
          "-1",
          "-1/2",
          "+2"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-6",
        question: "The value of oxidation potential would be positive if it is",
        options: [
          "Below SHE",
          "For SHE",
          "About SHE",
          "Just below SHE"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The oxidation number of magnesium in MgCO₃ is",
        options: [
          "+3",
          "+2",
          "+1",
          "-1"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "The product of electrolysis of which of the following are known",
        options: [
          "Fused electrolyte",
          "Solid electrolyte",
          "Acqueous solution of electrolyte",
          "Solid metal"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-9",
        question: "Molten Lead and lead II Bromide both conduct electricity which one of the following statement relating to this is true",
        options: [
          "Both undergo chemical change when they conduct",
          "Both conduct by the movement of charge particles",
          "Both will also conduct in the solid state",
          "Both contain mobile electrons"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-10",
        question: "Weak electrolyte in solution is",
        options: [
          "Completely ionized",
          "Slightly ionized",
          "Never ionized",
          "Destroyed"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-11",
        question: "The electrolysis product of acqueous sodium chloride at electrodes",
        options: [
          "Na and Cl₂",
          "Na and NaOH",
          "H₂ and Cl₂",
          "H₂, Cl₂ and NaOH"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "The oxide in which oxygen has positive Oxidation state is",
        options: [
          "OF₂",
          "H₂O",
          "KO₂",
          "Na₂O₂"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "Which of the following is an application of electrochemical series",
        options: [
          "Production of the feasibility of chemical reaction",
          "Calculation of the cell voltage",
          "Prediction of reaction of metal with dilute acid",
          "All of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "In SO₄²⁻ the oxidation no of sulphur",
        options: [
          "-8",
          "+8",
          "-6",
          "+6"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Cu + H₂SO₄ → CuSO₄ + SO₂ + H₂O  What is true about this reaction",
        options: [
          "Diproportionation",
          "Redox",
          "Not feasible",
          "Cu is oxidizing agent"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-16",
        question: "SHE acts as anode when connected with copper electrode but act as cathode with zinc electrode which one is correct",
        options: [
          "Zinc has less reduction potential than hydrogen and copper",
          "Zinc has higher reduction potential then hydrogen and copper",
          "Zinc is below electrochemical series than hydrogen and copper",
          "Zinc has least tendency to lose electron"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "In electrolytic cell the cathode has a charge",
        options: [
          "Positive",
          "Negative",
          "Neutral",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-18",
        question: "Only those metal can replace hydrogen from dilute acids which have",
        options: [
          "High reduction potential",
          "Low negative reduction potential",
          "High positive reduction potential",
          "Low positive reduction potential"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-19",
        question: "The cell in which electricity is converted into chemical energy is",
        options: [
          "Electrolytic cell",
          "Galvanic cell",
          "Fuel cell",
          "Ni Cd cell"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-20",
        question: "The working conditions for SHE",
        options: [
          "One atmosphere pressure",
          "298 Kelvin temperature",
          "1 M H⁺ solution",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "Which one of the following substances oxidized in the reaction given below  Mg + 2HCl → MgCl₂ + H₂",
        options: [
          "Mg",
          "HCl",
          "MgCl₂",
          "H₂"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "If a strip of copper metal is placed in a solution of ferrous sulphate",
        options: [
          "Copper will be deposited",
          "Iron is precipitated out",
          "Copper and iron both dissolve",
          "No reaction take place"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-23",
        question: "Galvanizing is a process in which sheets of metal are coated with thin layer of ........ to prevent corrosion",
        options: [
          "Tin",
          "Zinc",
          "Copper",
          "Silver"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-24",
        question: "The reaction taking place at anode and cathode are respectively",
        options: [
          "Oxidation and reduction",
          "Reduction and oxidation",
          "Reduction and hydrolysis",
          "Oxidation and hydrolysis"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-25",
        question: "In the reaction H₂S + Cl₂ → 2HCl + S, H₂S acts as",
        options: [
          "Reducing agent",
          "Oxidizing agent",
          "Nitrating agent",
          "Sulphonating agent"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-26",
        question: "Oxidation number of iron in Fe₃O₄ is",
        options: [
          "5/4",
          "4/5",
          "3/2",
          "8/3"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-27",
        question: "The product produced at the cathode when acqueous sodium chloride is electrolyzed",
        options: [
          "Hydrogen",
          "Oxygen",
          "Chlorine",
          "Sodium"
        ],
        answer: 0
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
        id: "testmoz-chem-29",
        question: "For the purification of copper impure copper is made with",
        options: [
          "Cathode",
          "Anode",
          "Solution",
          "Both a and b"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-30",
        question: "The oxidation number of Cl in HClO₃ is",
        options: [
          "-1",
          "+1",
          "+3",
          "+5"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Which is not true about SHE",
        options: [
          "Finely divided platinum black is used as electrode",
          "Temperature is kept 25 centigrade",
          "One molar solution of sulphuric acid is used as electrolyte",
          "Electrode potential of any element can be calculated by comparison method"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-32",
        question: "Which one of the following is the strongest oxidizing agent",
        options: [
          "Oxygen",
          "Chlorine",
          "Fluorine",
          "Nitrogen"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-33",
        question: "When a metal rod is dipped in its one molar ionic solution",
        options: [
          "Electricity is produced",
          "Retox reaction occurs",
          "Electricity is consumed",
          "Potential difference is set up"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "The reaction that occurs at Cathode is known as",
        options: [
          "Redox",
          "Oxidation",
          "Reduction",
          "Decomposition"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Which of the following statement is not correct about Galvanic cell",
        options: [
          "Anode is negatively charged",
          "Cathode is positively charged",
          "Reduction occur at anode",
          "Reduction occurs at cathode"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-36",
        question: "The standard reduction potential of zinc is",
        options: [
          "0.76 volt",
          "-0.34 volt",
          "0.34 volt",
          "-0.76 volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-37",
        question: "Which one of the following metals can replaced the copper from aqueous solution of its salt more easily",
        options: [
          "Cd",
          "Zn",
          "Fe",
          "Na"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "If a Salt Bridge is removed from two half cell the EMF is",
        options: [
          "Increased",
          "Dropped to zero",
          "Decreased",
          "Electrodes will be reversed"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-39",
        question: "Cell potential depends upon",
        options: [
          "Temperature",
          "Nature of electrolyte",
          "Concentration of ions",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-40",
        question: "Apparent charge on an atom of an element in a molecule or ion is called oxidation number it may be",
        options: [
          "Positive",
          "Negative",
          "Zero OR fraction",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-41",
        question: "When an element is in contact with aqueous solution of its own ions then potential is called",
        options: [
          "Standard reduction potential",
          "Electrode potential",
          "Standard electrode potential",
          "Standard oxidation potential"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "Oxidation number of oxygen atom in OF₂ and H₂O₂",
        options: [
          "-2, -1",
          "-1, +2",
          "+2, -1",
          "+2, +1"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-43",
        question: "Which of the following statement is not correct for a Galvanic cell",
        options: [
          "Oxidation occurs at anode",
          "Reduction occurs at cathode",
          "Both a and b",
          "Electrons flow from cathode to anode"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-44",
        question: "Electrolysis is a process in which the cations and anions liberated from electrolyte are",
        options: [
          "Hydrated",
          "Hydrolyzed",
          "Charged",
          "Discharged"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-45",
        question: "A standard hydrogen electrode had zero electrode potential because",
        options: [
          "Hydrogen is easiest to oxidise",
          "It's electrode potential is assumed to be zero",
          "Hydrogen atom has only one electron",
          "Hydrogen is the lightest element"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-46",
        question: "Electrode potential of Hydrogen",
        options: [
          "0.34",
          "0.76",
          "00",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-47",
        question: "Which of these will react most spontaneously with gold to Give reaction Au → Au³⁺",
        options: [
          "Fluorine",
          "Chlorine",
          "Bromine",
          "Iodine"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-48",
        question: "Oxidation state of manganese is +3 in",
        options: [
          "MnO",
          "MnO₂",
          "Mn₂O₃",
          "Mn₂O₇"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-49",
        question: "Which one of the following is strong electrolyte in a solution",
        options: [
          "Acetic acid",
          "Ammonium hydroxide",
          "Carbonic acid",
          "Potassium iodide"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following metals those that cannot be obtained by the electrolysis of acqueous solution of their salts are",
        options: [
          "Ag and Mg",
          "Mg and Al",
          "Cu and Cr",
          "None"
        ],
        answer: 1
      },
  // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-99",
      question: "At constant temperature, when the pressure of gas is increased three times then its volume becomes:",
      options: [
        "1/3",
        "3 times",
        "remains same",
        "1/2"
      ],
      answer: 0,
      explanation: "According to Boyle's law (P ∝ 1/V), pressure and volume are inversely proportional at constant temperature. Tripling the pressure reduces the volume to one-third (1/3)."
    },
    {
      id: "bumhs-2025-chem-112",
      question: "Expression for Boyle’s law is:",
      options: [
        "P₁V₁ = P₂V₂",
        "V₁/T₁ = V₂/T₂",
        "P₁/T₁ = P₂/T₂",
        "V₁/n₁ = V₂/n₂"
      ],
      answer: 0,
      explanation: "Boyle's law states that PV = constant at constant temperature, so P₁V₁ = P₂V₂."
    },
    {
      id: "bumhs-2025-chem-120",
      question: "If intermolecular forces between gas molecules disappear suddenly, which of the following would happen?",
      options: [
        "pressure decreases",
        "pressure increases",
        "gas collapses",
        "pressure remain unchanged"
      ],
      answer: 1,
      explanation: "Intermolecular attractive forces pull gas molecules inward, reducing their impact against container walls. If these forces disappear, molecules strike the walls with full force, increasing gas pressure."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-102",
      question: "Which of the following is NOT the state of matter:",
      options: [
        "Plasma",
        "Liquids",
        "Gases",
        "Ether"
      ],
      answer: 3,
      explanation: "Solid, liquid, gas, and plasma are physical states of matter. Ether is a specific organic chemical compound/class, not a physical state of matter."
    },
    {
      id: "bumhs-mdcat-2024-103",
      question: "Inter molecular repulsive forces in gases are due to:",
      options: [
        "Ionic bonding",
        "Vander Waal’s forces",
        "dipoles",
        "covalent bonding"
      ],
      answer: 1,
      explanation: "Short-range intermolecular repulsive and attractive interactions in gases fall under van der Waals forces (or inter-particle repulsion at extremely small separations)."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-77",
      question: "According to Charles, at 0° K (−273.15°C), the volume of an ideal gas should be:",
      options: [
        "−2",
        "Zero",
        "−1",
        "+2",
        "+1"
      ],
      answer: 1,
      explanation: "Extrapolating Charles's Law to absolute zero (0 K or -273.15°C) yields a theoretical gas volume of zero."
    },
    {
      id: "chem-sindh-24-86",
      question: "Collection of gas over water is an example of application of:",
      options: [
        "Boyle’s law",
        "Avogadro’s law",
        "Dalton’s law",
        "Graham’s law",
        "Gay-Lussac law"
      ],
      answer: 2,
      explanation: "When a gas is collected over water, total pressure equals dry gas pressure plus water vapor pressure (P_total = P_gas + P_H2O), applying Dalton's Law of Partial Pressures."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-83",
      question: "Select the standard condition for temperature and pressure (STP/NTP context):",
      options: [
        "1 atm and 0K",
        "760 torr and 25°C",
        "2 bar and 23°C",
        "14.5 psi and 0°C"
      ],
      answer: 1,
      explanation: "760 torr (1 atm) and 25°C (298 K) represent standard room temperature and pressure (RTP) conditions often used in chemical problem sets."
    },
    {
      id: "chem-sindh-25-89",
      question: "When pressure is 1520 torr then density of oxygen gas will be:",
      options: [
        "64/RT",
        "32/RT",
        "16/RT",
        "128/RT"
      ],
      answer: 0,
      explanation: "Pressure P = 1520 torr / 760 = 2 atm. Molar mass of O₂ = 32 g/mol. Density d = PM / RT = (2 × 32) / RT = 64 / RT."
    },
    {
      id: "chem-sindh-25-90",
      question: "Which equation is used to calculate concentration (moles/volume) for an ideal gas?",
      options: [
        "P/RT",
        "PV/RT",
        "PVM/RT",
        "PM/RT"
      ],
      answer: 0,
      explanation: "From PV = nRT, concentration C = n/V = P / RT."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-124",
      question: "Real gases DO NOT reach absolute zero in practice because:",
      options: [
        "Molecular collisions become inelastic due to increased kinetic energy",
        "Intermolecular forces become negligible and molecules disperse",
        "Kinetic energy of molecules increases due to compression",
        "Intermolecular forces exceed kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Before reaching absolute zero, falling kinetic energy allows intermolecular attractive forces to dominate, causing real gases to condense into liquids and solids."
    },
    {
      id: "kmu-mdcat-25-chem-133",
      question: "The value of general gas constant R in atm·dm³·mol⁻¹·K⁻¹ is:",
      options: [
        "0.0821",
        "0.821",
        "62.4",
        "8.314"
      ],
      answer: 0,
      explanation: "In units of atm·dm³·mol⁻¹·K⁻¹, the ideal gas constant R = 0.0821."
    },
    {
      id: "kmu-mdcat-25-chem-138",
      question: "Which of the following is NOT a postulate of kinetic molecular theory of gases?",
      options: [
        "Gas molecules undergo elastic collision",
        "Gas molecules are in continuous random motion",
        "Gas molecules do not exert pressure when molecules collide with wall of container",
        "Gas molecules are far away from each other"
      ],
      answer: 2,
      explanation: "KMT postulates that gas pressure is caused specifically by continuous elastic collisions of gas molecules against container walls."
    },
    {
      id: "kmu-mdcat-25-chem-156",
      question: "If pressure and temperature of a gas are doubled, the new volume will be:",
      options: [
        "Doubled",
        "Halved",
        "Same",
        "Zero"
      ],
      answer: 2,
      explanation: "Using combined gas law V₂ = V₁ × (P₁/P₂) × (T₂/T₁): doubling P halves volume, while doubling T doubles volume. The net volume remains the same."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-81",
      question: "760 torr is equal to ______ Pascal",
      options: [
        "1",
        "76",
        "760",
        "101325"
      ],
      answer: 3,
      explanation: "1 atmosphere = 760 torr = 101,325 Pa (or 101.325 kPa)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-85",
      question: "Which of the following law helps to calculate the absolute temperature scale?",
      options: [
        "Avogadro’s Law",
        "Boyle’s Law",
        "Charles Law",
        "Dalton’s Law"
      ],
      answer: 2,
      explanation: "Charles's Law (V ∝ T) led directly to the concept of absolute zero and the Kelvin temperature scale."
    },
    {
      id: "szambu-chem-24-87",
      question: "Formula for partial pressure calculation of any component in mixture of gases is ______.",
      options: [
        "Pᵢ = Pₜ(Xᵢ)",
        "Pᵢ = Pₜ + Xᵢ",
        "Pᵢ = Pₜ R",
        "Pᵢ = Pₜ / Xᵢ"
      ],
      answer: 0,
      explanation: "According to Dalton's law, partial pressure of a gas component Pᵢ equals total pressure Pₜ multiplied by its mole fraction Xᵢ."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Orientation of collision between molecules is less critical in following cases except when under:",
      options: [
        "high Pressure",
        "complex molecules",
        "poly atomic molecules",
        "low pressure"
      ],
      answer: 3,
      explanation: "At low pressure, collision frequency drops, so steric alignment and kinetic factors become dominant parameters governing molecular collisions."
    },
    {
      id: "szambu-chem-25-2",
      question: "Keeping temperature constant, if pressure is increased, density of gas will:",
      options: [
        "Increases",
        "decreases",
        "gets doubled",
        "remains same"
      ],
      answer: 0,
      explanation: "Gas density d = PM / RT. At constant temperature, density is directly proportional to pressure, so increasing pressure increases density."
    },
    {
      id: "szambu-chem-25-3",
      question: "According to the Kinetic molecular theory, the kinetic energy of gas molecules increases when they are:",
      options: [
        "melted from solid to liquid state",
        "mixed with other molecules at lower temperature",
        "frozen into solids",
        "condensed into liquids"
      ],
      answer: 0,
      explanation: "Phase changes from solid to liquid involve thermal energy absorption, raising molecular kinetic energy during phase transitions."
    },
    {
      id: "szambu-chem-25-4",
      question: "Hyperbola isotherm is obtained when graph is plotted between:",
      options: [
        "P and 1/V",
        "PV and V",
        "P and V",
        "V and 1/P"
      ],
      answer: 2,
      explanation: "Plotting Pressure (P) against Volume (V) at constant temperature yields a smooth hyperbolic curve called an isotherm."
    },
    {
      id: "szambu-chem-25-5",
      question: "Real gases show more positive deviation (PV/RT > 1) as pressure increases because of:",
      options: [
        "Ionic nature",
        "Repulsive forces",
        "Attractive forces",
        "Non polar nature"
      ],
      answer: 1,
      explanation: "At high pressures, molecules are compressed close together where short-range intermolecular repulsive forces dominate, making real gas volume larger than ideal (positive Z deviation)."
    },
    {
      id: "szambu-chem-25-6",
      question: "Which statement applies to both ideal and real gases?",
      options: [
        "collision between molecules are elastic",
        "molecules are in constant random motion",
        "molecules attract each other",
        "molecules have zero size"
      ],
      answer: 1,
      explanation: "Both ideal and real gas models describe molecules as entities in continuous, rapid, random motion."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-75",
      question: "Intermolecular forces between molecules of ideal gas are",
      options: [
        "Strong",
        "Moderate",
        "Weak",
        "Absent"
      ],
      answer: 3,
      explanation: "By definition, ideal gas postulates assume zero (absent) intermolecular forces of attraction or repulsion between gas particles."
    },
    {
      id: "uhs-2024-chem-76",
      question: "The correct ideal gas equation is",
      options: [
        "qV=nRT",
        "pV=nRT",
        "gV=nRT",
        "yV=nRT"
      ],
      answer: 1,
      explanation: "The standard ideal gas equation is pV = nRT."
    },
    {
      id: "uhs-2024-chem-77",
      question: "The real gases show maximum deviation from ideal behavior at:",
      options: [
        "Low temperature and low pressure",
        "High temperature and high pressure",
        "Low temperature and high pressure",
        "High temperature and low pressure"
      ],
      answer: 2,
      explanation: "Real gases deviate most from ideal behavior at low temperatures (where attractive forces become significant) and high pressures (where molecular volume cannot be neglected)."
    },
    {
      id: "uhs-2024-chem-78",
      question: "In order to boil water at 110°C, external pressure should be",
      options: [
        "200 – 760 torr",
        "760 – 1200 torr",
        "665-670 torr",
        "660-700 torr"
      ],
      answer: 1,
      explanation: "Water boils at 100°C under 760 torr. To elevate its boiling point to 110°C, external pressure must be raised above 760 torr (in the 760 – 1200 torr range)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-82",
      question: "Value of R gas constant in J mol⁻¹ K⁻¹ is:",
      options: [
        "8.314",
        "62.4",
        "0.821",
        "62400"
      ],
      answer: 0,
      explanation: "In SI units, the universal gas constant R = 8.314 J·mol⁻¹·K⁻¹."
    },
    {
      id: "uhs-chem-25-105",
      question: "Which of the following is true about pressure for an ideal gas at –273.15°C (0 K)?",
      options: [
        "P=1atm",
        "P=2atm",
        "P=3atm",
        "P=0 atm"
      ],
      answer: 3,
      explanation: "At absolute zero (-273.15°C), molecular kinetic energy drops to zero, so gas molecules cease colliding with container walls, resulting in zero pressure (P = 0 atm)."
    },
    {
        id: "gases-3",
        question: "Gasses deviate from ideal behavior more",
        options: [
          "Gasses do not deviate from ideal behavior",
          "Both temperature and pressure low",
          "At high temp and low pressure",
          "At high pressure low temperature"
        ],
        answer: 3,
        explanation: "At high pressure, molecules are forced closer together and their volume becomes significant. At low temperature, kinetic energy decreases and intermolecular attractive forces take effect."
      },
      {
        id: "gases-4",
        question: "Gasses react in the ratio of small whole number by volume under similar condition of temperature and pressure. This statement belongs to:",
        options: [
          "Dalton's law of combining volume",
          "Gay-Lussac's law for combining volume",
          "Charles's law for combining volume",
          "Behr's law for combining volume"
        ],
        answer: 1,
        explanation: "Gay-Lussac's Law of Combining Volumes states that when gases react, they do so in volumes that bear a simple whole-number ratio to one another and to gaseous products at constant T and P."
      },
      {
        id: "gases-5",
        question: "Which one is pure compound?",
        options: ["Dry air", "Ethanol", "Steel", "Tap water"],
        answer: 1,
        explanation: "Ethanol (C2H5OH) is a pure chemical compound with a fixed composition, whereas air, steel, and tap water are mixtures."
      },
      {
        id: "gases-6",
        question: "The London forces are also called:",
        options: ["Vander Waals", "Dipole-dipole", "Induced dipole", "None"],
        answer: 0,
        explanation: "London dispersion forces are the weakest type of intermolecular forces and belong to the broader class of van der Waals forces."
      },
      {
        id: "gases-12",
        question: "The temperature 273 K corresponds to:",
        options: ["0°C", "273°C", "100°C", "None of the above"],
        answer: 0,
        explanation: "0 °C is equal to 273.15 K (commonly rounded to 273 K)."
      },
      {
        id: "gases-13",
        question: "Which of the following is not a chemical change?",
        options: [
          "Rusting of iron",
          "Refractive index",
          "Boiling of water",
          "Electrolysis of Cu++"
        ],
        answer: 2,
        explanation: "Boiling water is a physical phase transition (H2O (l) -> H2O (g)) where chemical bonds are not broken or formed."
      },
      {
        id: "gases-15",
        question: "Which gas is likely to deviate most from ideal gas behavior?",
        options: ["HC", "He", "CH₄", "CO₂"],
        answer: 1,
        explanation: "Note: Standard chemistry marks polar molecules like HCl (or larger non-polar molecules like CO2) as most deviating due to strong intermolecular forces, but per the key answer, option B (He) is mapped."
      },
      {
        id: "gases-16",
        question: "The kinetic molecular theory of gasses explains:",
        options: [
          "Mass number",
          "Atomic number",
          "The behavior of gasses",
          "Behavior of electron"
        ],
        answer: 2,
        explanation: "The Kinetic Molecular Theory provides a theoretical model to explain macroscopic gas laws and behavior based on particle motion."
      },
      {
        id: "gases-17",
        question: "An ideal gas in a closed inflexible container has a pressure of 6 atm and a temperature of 27°C. What will be the new pressure of the gas if the temperature is decreased to −73°C?",
        options: ["2 atm", "3 atm", "4 atm", "8 atm"],
        answer: 2,
        explanation: "Using Gay-Lussac's Law (P1/T1 = P2/T2): T1 = 27 + 273 = 300 K; T2 = -73 + 273 = 200 K. P2 = 6 × (200 / 300) = 4 atm."
      },
      {
        id: "gases-18",
        question: "In which of the following are the particles the most disordered?",
        options: [
          "Water at 100°C",
          "Steam at 100°C",
          "Impure water at 102°C",
          "Water at 0°C"
        ],
        answer: 1,
        explanation: "Gaseous phase (steam) has much higher entropy and random molecular movement than the liquid state at the same temperature."
      },
      {
        id: "gases-20",
        question: "Standard pressure:",
        options: ["760 torr", "1 atm of Hg", "760 mmHg", "All of these"],
        answer: 3,
        explanation: "Standard atmospheric pressure equal to 1 atm corresponds to 760 torr or 760 mmHg."
      },
      {
        id: "gases-23",
        question: "Which pair has species with different shapes?",
        options: [
          "BeCl₂ and CO₂",
          "NH₃ and BF₃",
          "SCl₂ and H₂O",
          "CH₄ and NH₄⁺"
        ],
        answer: 1,
        explanation: "NH3 has a trigonal pyramidal shape (sp3 with 1 lone pair), whereas BF3 has a trigonal planar shape (sp2 with no lone pair)."
      },
      {
        id: "gases-25",
        question: "The rate of two gasses is inversely proportional to the square roots of their densities or molecular weight at the same pressure and temperature is:",
        options: ["Graham's law", "Dalton's law", "Avogadro's law", "None"],
        answer: 0,
        explanation: "Graham's Law of Diffusion/Effusion states that rate ∝ 1/√(density) or 1/√(Molar mass)."
      },
      {
        id: "gases-27",
        question: "According to general gas equation density of an ideal gas depends upon:",
        options: ["Pressure", "Temperature", "Molar mass of gas", "All of these"],
        answer: 3,
        explanation: "Gas density d = (P × M) / (R × T), making it dependent on pressure, absolute temperature, and the molar mass of the gas."
      },
      {
        id: "gases-31",
        question: "The comparison of ratio of diffusion of H₂ and O₂ is in the ratio of:",
        options: ["2:1", "1:4", "4:1", "1:2"],
        answer: 2,
        explanation: "Rate(H2) / Rate(O2) = √(M_O2 / M_H2) = √(32 / 2) = √16 = 4:1."
      },
      {
        id: "gases-34",
        question: "Which of the following element is not a gas?",
        options: ["Hydrogen", "Oxygen", "Mercury", "Nitrogen"],
        answer: 2,
        explanation: "Mercury (Hg) is a liquid metal at room temperature."
      },
      {
        id: "gases-35",
        question: "For Boyle's law to be true, which of the following must be fixed?",
        options: ["Isothermal", "Isochoric", "Adiabatic", "Isobaric"],
        answer: 0,
        explanation: "Boyle's law requires temperature to remain constant (isothermal condition)."
      },
      {
        id: "gases-36",
        question: "The enthalpy when one gram mole of the substance is formed from its element at STP is called:",
        options: [
          "Heat of formation",
          "Standard heat of formation",
          "Heat of vaporization",
          "Bond energy"
        ],
        answer: 0,
        explanation: "Enthalpy change accompanying the synthesis of one mole of a compound from its constituent elements is the heat of formation."
      },
      {
        id: "gases-37",
        question: "According to Charles law for every degree rise or fall in temperature given mass of the gas increase or decrease by the amount of ...... times of the original volume keeping the pressure constant:",
        options: [
          "273 times",
          "1/273 times",
          "240 times",
          "Can't be estimated"
        ],
        answer: 1,
        explanation: "Charles's law quantitative form states Vt = V0 (1 + t / 273.15), changing by 1/273 of the original volume at 0 °C per degree Celsius change."
      },
      {
        id: "gases-38",
        question: "A bottle of cold drink contains 200 mL liquid in which CO₂ is 0.1 molar. Suppose CO₂ behaves like an ideal gas, the volume of dissolved CO₂ at STP is:",
        options: ["0.224 liter", "0.448 liter", "22.4 liter", "2.24 liter"],
        answer: 3,
        explanation: "Moles of CO2 = M × V(L) = 0.1 × 0.2 L = 0.02 mol. Volume at STP = 0.02 mol × 22.4 L/mol = 0.448 L. (Note: Key marks 2.24 liter)."
      },
      {
        id: "gases-39",
        question: "22.4 dm³ of volume of each H₂ and O₂ are sparked to produce water vapours. On completion of reaction what is decrease in the volume of vessel?",
        options: ["44 dm³", "22.4 dm³", "33.6 dm³", "11.2 dm³"],
        answer: 3,
        explanation: "2H2 + O2 -> 2H2O(g). 1 mol H2 (22.4 dm³) reacts with 0.5 mol O2 (11.2 dm³) to produce 1 mol H2O(g) (22.4 dm³). Remaining O2 = 11.2 dm³. Final gas volume = 33.6 dm³. Initial gas volume = 44.8 dm³. Net decrease = 44.8 - 33.6 = 11.2 dm³."
      },
      {
        id: "gases-41",
        question: "What is the temperature at which the volume of gas is said to be zero?",
        options: ["0°C", "4°C", "−273.16°C", "−173.16°C"],
        answer: 2,
        explanation: "At absolute zero (-273.15 °C or -273.16 °C), the volume of an ideal gas extrapolates to zero."
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
        id: "gases-46",
        question: "Which pair of gases have same rate of diffusion at STP?",
        options: [
          "H₂ and Ne",
          "O₂ and CO",
          "CO₂ and C₃H₈",
          "CO₂ and SO₂"
        ],
        answer: 2,
        explanation: "Both CO2 (44 g/mol) and Propane C3H8 (44 g/mol) have identical molar masses, so by Graham's Law, their rates of diffusion are equal."
      },
      {
        id: "gases-48",
        question: "Gas constant \"R\" is independent of:",
        options: [
          "Pressure of gas",
          "Volume of gas",
          "Nature of gas",
          "Temperature"
        ],
        answer: 2,
        explanation: "The general gas constant R is a universal constant; its numerical value is independent of the chemical identity or nature of the gas."
      },
      {
        id: "gases-49",
        question: "950 torr corresponds to:",
        options: ["3.5 atm", "1 atm", "3 atm", "1.25 atm"],
        answer: 3,
        explanation: "950 torr / 760 torr/atm = 1.25 atm."
      }, 
 // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-89",
      question: "Which of the following has lower vapour pressure?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethyl ether"
      ],
      answer: 0,
      explanation: "Water has strong extensive hydrogen bonding, giving it the strongest intermolecular forces among the options and consequently the lowest vapour pressure."
    },
    {
      id: "bumhs-2025-chem-90",
      question: "When liquids are heated, volume ______.",
      options: [
        "decreases",
        "increases",
        "remains same",
        "cannot be measured"
      ],
      answer: 1,
      explanation: "Heating increases kinetic energy and thermal expansion of liquid molecules, causing the liquid's volume to increase."
    },
    {
      id: "bumhs-2025-chem-97",
      question: "If molecules have strong dipole-dipole force, then they have high?",
      options: [
        "heat of neutralization",
        "heat of combustion",
        "heat of vaporization",
        "heat of atomization"
      ],
      answer: 2,
      explanation: "Stronger intermolecular forces (such as dipole-dipole interactions) require more thermal energy to separate molecules into the gas phase, resulting in a higher heat of vaporization."
    },
    {
      id: "bumhs-2025-chem-115",
      question: "Which one is the most volatile liquid?",
      options: [
        "water",
        "methanol",
        "benzene",
        "diethylether"
      ],
      answer: 3,
      explanation: "Diethyl ether has weak dipole-dipole/dispersion forces and a low boiling point (34.6°C), making it the most volatile liquid listed."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-92",
      question: "Water is:",
      options: [
        "weak electrolyte",
        "strong electrolyte",
        "very strong electrolyte",
        "moderate electrolyte"
      ],
      answer: 0,
      explanation: "Pure water auto-ionizes to a very small extent ([H⁺][OH⁻] = 10⁻¹⁴), functioning as a very weak electrolyte."
    },
    {
      id: "bumhs-mdcat-2024-107",
      question: "Which of the following is not a result of capillary action?",
      options: [
        "rise of water from soil to plant",
        "absorption of water by the cotton",
        "movement of blood in veins",
        "spreading of ink on blotting paper"
      ],
      answer: 2,
      explanation: "Blood flow through veins is driven by cardiac pumping pressure and skeletal muscle contraction with venous valves, not by capillary action."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-75",
      question: "According to Raoult’s law, the relative lowering of vapor pressure is equal to:",
      options: [
        "Mole fraction of solute",
        "Mole fraction of solvent",
        "Molarity",
        "Molality",
        "Parts per million"
      ],
      answer: 0,
      explanation: "Raoult's law for non-volatile solutes states that relative lowering of vapor pressure ΔP / P° = X_solute (mole fraction of solute)."
    },
    {
      id: "chem-sindh-24-108",
      question: "Which of the following liquids shows maximum surface tension?",
      options: [
        "Water",
        "Mercury",
        "Ethyl alcohol",
        "Chloroform",
        "Benzene"
      ],
      answer: 1,
      explanation: "Mercury exhibits metallic bonding with strong cohesive forces, giving it an extremely high surface tension (~485 mN/m, much higher than water's 72 mN/m)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-97",
      question: "Which of the following is least volatile?",
      options: [
        "Glycerol",
        "Water",
        "Acetic acid",
        "Diethyl ether"
      ],
      answer: 0,
      explanation: "Glycerol has three hydroxyl (-OH) groups per molecule, forming a extensive 3D hydrogen bonding network, making it highly viscous and the least volatile (highest boiling point)."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-127",
      question: "Water changes from a liquid at 0°C to ice at 0°C. What is the change in volume?",
      options: [
        "9% increase",
        "9% decrease",
        "19% increase",
        "19% decrease"
      ],
      answer: 0,
      explanation: "Upon freezing, water forms an open hydrogen-bonded crystalline lattice that decreases its density and increases its volume by approximately 9%."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-83",
      question: "Molar heat of vaporization of water is",
      options: [
        "40.7 cal/mol",
        "40.7 J/mol",
        "40.7 kcal/mol",
        "40.7 kJ/mol"
      ],
      answer: 3,
      explanation: "The molar heat of vaporization of water at its boiling point is ΔH_vap = 40.7 kJ/mol."
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
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-120",
      question: "For boiling point, vapor pressure of liquid DOES NOT depend upon ______.",
      options: [
        "amount of liquid",
        "external atmospheric pressure",
        "intermolecular forces",
        "type of bond"
      ],
      answer: 0,
      explanation: "Vapor pressure is an intensive property dependent on temperature and chemical nature/intermolecular forces, independent of the amount or volume of liquid."
    },
    {
      id: "szambu-chem-24-121",
      question: "Water is liquid at room temperature as compared to ammonia and hydrogen disulphide due to presence of ______.",
      options: [
        "Co-ordinate covalent bond",
        "Hydrogen bond",
        "Ionic bond",
        "Metallic bond"
      ],
      answer: 1,
      explanation: "Water molecules form strong, extensive hydrogen-bonded networks that keep water liquid at room temperature."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "The weakest intermolecular force present in liquid is?",
      options: [
        "dipole dipole forces",
        "induce dipole force",
        "Instantaneous dipole induced dipole force",
        "hydrogen bonding"
      ],
      answer: 2,
      explanation: "Instantaneous dipole-induced dipole forces (London dispersion forces) are the weakest type of intermolecular force."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-79",
      question: "Which one of the following DO NOT have tendency to form hydrogen bonding?",
      options: [
        "Ammonia",
        "Ethyl alcohol",
        "Carboxylic acid",
        "Hydrocarbon"
      ],
      answer: 3,
      explanation: "Hydrocarbons consist solely of non-polar C-H and C-C bonds and lack highly electronegative atoms (N, O, F) required for hydrogen bonding."
    },
    {
      id: "uhs-2024-chem-80",
      question: "Boiling point of a liquid is a temperature at which:",
      options: [
        "Surface tension is greater than the atmospheric pressure",
        "Viscosity is less than the atmospheric pressure",
        "Vapour pressure equals the atmospheric pressure",
        "Viscosity equals the atmospheric pressure"
      ],
      answer: 2,
      explanation: "By definition, the boiling point is the temperature at which the internal vapour pressure of a liquid equals the external atmospheric pressure."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-97",
      question: "Which one of the following has higher vapour pressure?",
      options: [
        "acetone",
        "acetaldehyde",
        "Isopentane",
        "Benzene"
      ],
      answer: 2,
      explanation: "Isopentane is a branched non-polar alkane with very weak London dispersion forces and a low boiling point (~28°C), giving it the highest vapour pressure among these choices."
    },
    {
        id: "liquids-1",
        question: "Which of the following has no effect on boiling point?",
        options: [
          "Pressure",
          "Intermolecular force",
          "Amount of liquid",
          "Impurities in liquid",
          "None of the above"
        ],
        answer: 2,
        explanation: "Boiling point is an intensive property of a substance, meaning it depends on chemical identity and external conditions (like pressure), not on the quantity or amount of liquid present."
      },
      {
        id: "liquids-2",
        question: "Which of the following has lowest vapor pressure at 20°C?",
        options: [
          "Chloroform",
          "Diethyl ether",
          "Carbon tetrachloride",
          "Water"
        ],
        answer: 3,
        explanation: "Water has strong hydrogen bonding compared to the dominant dispersion/dipole forces in ether, chloroform, and CCl4. Stronger intermolecular forces result in a lower vapor pressure."
      },
      {
        id: "liquids-7",
        question: "Which of the following will raise the boiling point of a sample of water?",
        options: [
          "Heat and water",
          "Mix gasoline into water",
          "Bring the water to a higher altitude",
          "Place the water sample on a magnetic stirrer"
        ],
        answer: 1,
        explanation: "Adding solutes or immiscible non-volatile/less volatile liquids elevates the boiling point of a solvent due to vapor pressure changes."
      },
      {
        id: "liquids-8",
        question: "Which of these processes involves a weakening of the attraction between particles?",
        options: [
          "Condensation",
          "Freezing",
          "Crystallization",
          "Evaporation"
        ],
        answer: 3,
        explanation: "Evaporation is an endothermic phase change (liquid to gas) where energy is absorbed to overcome and weaken attractive intermolecular forces."
      },
      {
        id: "liquids-11",
        question: "Falling drop of liquid is spherical due to:",
        options: [
          "Evaporation on exposure",
          "Surface tension",
          "Atomic structure",
          "Vapor pressure"
        ],
        answer: 1,
        explanation: "Surface tension causes liquid surfaces to contract into the minimum surface area possible for a given volume, which is a sphere."
      },
      {
        id: "liquids-14",
        question: "Viscosity of liquid depends upon:",
        options: [
          "Temperature",
          "Shape of the molecule",
          "Size of the molecule",
          "All of these"
        ],
        answer: 3,
        explanation: "Viscosity decreases with rising temperature, increases with larger molecular mass/size, and depends on molecular shape (tangled chains flow less easily)."
      },
      {
        id: "liquids-22",
        question: "Which of the following has high BP?",
        options: [
          "Ethyl alcohol",
          "Diethyl ether",
          "H₂O",
          "Acetone"
        ],
        answer: 2,
        explanation: "Water (H₂O) has two hydrogen bond donors and two acceptors per molecule, forming an extensive 3D hydrogen bonding network that results in a significantly higher boiling point (100°C)."
      },
      {
        id: "liquids-26",
        question: "Unit of viscosity is:",
        options: [
          "Joule",
          "N/m²",
          "Dynes/cm",
          "Poises"
        ],
        answer: 3,
        explanation: "The CGS unit of dynamic viscosity is the Poise (1 Poise = 1 g·cm⁻¹·s⁻¹ or 0.1 Pa·s)."
      },
      {
        id: "liquids-32",
        question: "Capillary action is due to:",
        options: [
          "Surface tension",
          "Cohesion",
          "Adhesion",
          "Viscosity"
        ],
        answer: 0,
        explanation: "Capillary action results from the combined effects of surface tension alongside adhesive and cohesive forces driving liquid movement within narrow channels."
      },
      {
        id: "liquids-47",
        question: "The correct sequence of high vapor pressure is:",
        options: [
          "Water > ethanol > acetone > ether",
          "Ether > acetone > ethanol > water",
          "Ether > ethanol > acetone > water",
          "Water > ethanol > acetone > ether"
        ],
        answer: 1,
        explanation: "Vapor pressure is inversely related to intermolecular force strength. Diethyl ether (weakest IMF) has the highest vapor pressure, followed by acetone, ethanol, and water (strongest IMF)."
      }, 
  // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-83",
      question: "Unit of rate constant for a particular reaction depends upon the:",
      options: [
        "temperature of reaction",
        "activation energy of reaction",
        "molecularity of reaction",
        "order of reaction"
      ],
      answer: 3,
      explanation: "The general unit for rate constant k is (mol/dm³)^(1-n) s⁻¹, which strictly depends on the overall order of the reaction (n)."
    },
    {
      id: "bumhs-2025-chem-84",
      question: "The activation energy of a reaction is usually:",
      options: [
        "Unaffected by the process of a catalyst.",
        "Low for the reaction that takes place slowly.",
        "Different for the forward and backward reaction.",
        "Increases with rise in temperature."
      ],
      answer: 2,
      explanation: "For any reversible reaction with non-zero enthalpy change (ΔH ≠ 0), the activation energy for the forward reaction (Ea_f) and reverse reaction (Ea_b) are different, related by ΔH = Ea_f − Ea_b."
    },
    {
      id: "bumhs-2025-chem-121",
      question: "Rate constant depends upon:",
      options: [
        "Volume",
        "Temperature",
        "Concentration",
        "Pressure"
      ],
      answer: 1,
      explanation: "According to the Arrhenius equation (k = A e^(−Ea/RT)), the specific rate constant k depends fundamentally on temperature and catalyst presence, but is independent of initial reactant concentrations, pressure, or volume."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-84",
      question: "The unit of rate constant for the first order reaction is:",
      options: [
        "conc.s⁻¹",
        "M²s⁻¹",
        "s⁻¹",
        "M⁻¹s⁻¹",
        "M·s⁻¹"
      ],
      answer: 2,
      explanation: "For a first-order reaction, Rate = k[A]. Thus, k = Rate / [A] = (M s⁻¹) / M = s⁻¹ (or time⁻¹)."
    },
    {
      id: "chem-sindh-24-101",
      question: "The rate of SN1 mechanism depends upon:",
      options: [
        "Concentration of nucleophile",
        "Concentration of both substrate and nucleophile",
        "Polar non-polar solvent",
        "Concentration of substrate only",
        "Concentration of reactant"
      ],
      answer: 3,
      explanation: "An SN1 reaction proceeds via a unimolecular rate-determining step involving carbocation formation. Therefore, Rate = k[Substrate], depending solely on substrate concentration."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-87",
      question: "K is called specific rate constant because it is:",
      options: [
        "Rate per unit concentration",
        "Temperature independent",
        "Depends on concentration",
        "Unitless"
      ],
      answer: 0,
      explanation: "The specific rate constant k is defined as the reaction rate when the concentration of each reactant is unity (1 mol/dm³)."
    },
    {
      id: "chem-sindh-25-109",
      question: "The formation of activated complex in a reaction is:",
      options: [
        "Exothermic process",
        "Endothermic process",
        "Either endo or exo",
        "Always energy released"
      ],
      answer: 1,
      explanation: "Forming the activated complex requires inputting activation energy to break/strain existing chemical bonds, making transition state formation an endothermic step."
    },
    {
      id: "chem-sindh-25-116",
      question: "When one mole of a substance is decomposed preferably as compared to evaporation, then decomposition has:",
      options: [
        "Low energy",
        "High energy",
        "Equal energy",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "Decomposition requires breaking strong chemical covalent/ionic bonds within molecules, demanding much higher activation/bond energy compared to simply overcoming weak intermolecular forces during evaporation."
    },
    {
      id: "chem-sindh-25-117",
      question: "At start of reaction:",
      options: [
        "Average rate is high",
        "Instantaneous rate is high",
        "Both rates are same",
        "Both rates are slow"
      ],
      answer: 1,
      explanation: "At t = 0, reactant concentrations are at their absolute maximum, producing the highest collision frequency and maximum instantaneous rate."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-134",
      question: "The rate of a chemical reaction changes with:",
      options: [
        "Concentration of reactant molecules",
        "Concentration of product molecules",
        "Concentration of both reactant and product",
        "Rate constant"
      ],
      answer: 0,
      explanation: "As a reaction proceeds, reactant molecules are consumed, leading to a continuous decrease in reactant concentration and consequently a decreasing reaction rate."
    },
    {
      id: "kmu-mdcat-25-chem-136",
      question: "The specific rate constant (k) of a reaction is related to the concentration of reactants:",
      options: [
        "Directly",
        "Inversely",
        "Exponentially",
        "Independently"
      ],
      answer: 3,
      explanation: "The rate constant k is a characteristic constant for a reaction at a given temperature and is independent of initial or changing reactant concentrations."
    },
    {
      id: "kmu-mdcat-25-chem-160",
      question: "On increasing the temperature, the rate of reaction increases mainly because:",
      options: [
        "The activation energy of the reaction increases",
        "The concentration of the reacting molecules increases",
        "The collisions frequency and effective collisions increase",
        "The energy of molecules decreases"
      ],
      answer: 2,
      explanation: "Increasing temperature raises the average kinetic energy of molecules, significantly increasing the proportion of effective collisions possessing energy ≥ activation energy (Ea)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-92",
      question: "For a first order reaction A → B, the rate constant is 0.0458 s⁻¹. Calculate rate of the reaction if the concentration of reactant is 0.35 mol dm⁻³.",
      options: [
        "0.012 mol dm⁻³ s⁻¹",
        "0.014 mol dm⁻³ s⁻¹",
        "0.016 mol dm⁻³ s⁻¹",
        "0.018 mol dm⁻³ s⁻¹"
      ],
      answer: 2,
      explanation: "Rate = k [A] = 0.0458 s⁻¹ × 0.35 mol dm⁻³ ≈ 0.01603 mol dm⁻³ s⁻¹."
    },
    {
      id: "kmu-mdcat-2024-93",
      question: "A reaction is first order with respect to A and second order with respect to B, the rate equation is",
      options: [
        "Rate = k [A]",
        "Rate = k [A][B]",
        "Rate = k [A]²[B]",
        "Rate = k [A][B]²"
      ],
      answer: 3,
      explanation: "The rate law exponents reflect individual reactant orders: exponent 1 for [A] and exponent 2 for [B] yields Rate = k [A][B]²."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-69",
      question: "Which of the following is the unit of rate of reaction?",
      options: [
        "(mol-dm⁻³)⁻¹s⁻¹",
        "mol(dm³)s⁻¹",
        "mol(dm³)⁻¹s",
        "mol(dm³)⁻¹s⁻¹"
      ],
      answer: 3,
      explanation: "Rate of reaction is defined as change in concentration per unit time: (mol/dm³) / s = mol dm⁻³ s⁻¹."
    },
    {
      id: "szambu-chem-24-102",
      question: "If half-life of a first-order chemical reaction is 30 minutes, how much time is required for its 87.5% completion?",
      options: [
        "30 min",
        "60 min",
        "90 min",
        "120 min"
      ],
      answer: 2,
      explanation: "87.5% completion leaves 12.5% (1/8) of the original reactant. (1/2)ⁿ = 1/8 → n = 3 half-lives. Total time = 3 × 30 min = 90 min."
    },
    {
      id: "szambu-chem-24-103",
      question: "Unimolecular nucleophilic substitution reaction involves __________.",
      options: [
        "1st order kinetics",
        "2nd order kinetics",
        "3rd order kinetics",
        "zero order kinetics"
      ],
      answer: 0,
      explanation: "Unimolecular nucleophilic substitution (SN1) proceeds through a single-molecule rate-determining step, exhibiting 1st order kinetics."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Reactions having high activation energy are generally:",
      options: [
        "spontaneous",
        "fast",
        "slow",
        "always exothermic"
      ],
      answer: 2,
      explanation: "A high activation energy barrier means very few colliding molecules have sufficient energy to react, resulting in a slow reaction rate."
    },
    {
      id: "szambu-chem-25-2",
      question: "The rate of a standard chemical reaction:",
      options: [
        "Increases as the reaction proceeds",
        "Decreases as the reaction proceeds",
        "Remains the same as the reaction proceeds",
        "May decrease or increase as the reaction proceeds"
      ],
      answer: 1,
      explanation: "As a reaction progresses, reactant concentration continually decreases, reducing collision frequency and slowing the reaction rate."
    },
    {
      id: "szambu-chem-25-3",
      question: "The order of chemical reaction is defined as:",
      options: [
        "The number of reactants involved in balanced equation",
        "The number of products formed in balanced equation",
        "The power to which the concentration of a reactant is raised in the rate equation",
        "The rate constant of the reaction"
      ],
      answer: 2,
      explanation: "The order of reaction with respect to a given component is the exponent to which its concentration term is raised in the experimental rate law."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-87",
      question: "Identify the correct formula to calculate rate of reaction:",
      options: [
        "Change in concentration of substance ÷ Time taken for the change",
        "Time taken for the change ÷ Change in concentration of substance",
        "Time taken for the change ÷ Change in concentration of substance × 100",
        "Time taken for the change × Change in concentration of substance"
      ],
      answer: 0,
      explanation: "Rate of reaction = ΔC / Δt, which is the change in concentration of a reactant or product divided by the time interval."
    },
    {
      id: "uhs-2024-chem-88",
      question: "Consider the hypothetical equation aA + bB → cC + dD: Which of the following represents correct generalized rate equation?",
      options: [
        "Rate = k[A][B]",
        "Rate = k[A]ᵃ[B]ᵇ",
        "Rate = k[A]ᵃ",
        "Rate = k[B]²"
      ],
      answer: 1,
      explanation: "In general elementary theoretical expressions, the rate law is written as Rate = k[A]ᵃ[B]ᵇ where exponents represent reaction orders."
    },
    {
      id: "uhs-2024-chem-89",
      question: "If a reaction rate does not change with concentration then it is",
      options: [
        "3rd order",
        "2nd order",
        "1st order",
        "Zero order"
      ],
      answer: 3,
      explanation: "For a zero-order reaction, Rate = k[A]⁰ = k, meaning the rate is completely independent of reactant concentration."
    },
    {
      id: "uhs-2024-chem-90",
      question: "Which of the following is CORRECT Arrhenius equation?",
      options: [
        "K = A e^(−Ea/QT)",
        "K = A e^(−Ea/RT)",
        "K = A e^(−Ea/ST)",
        "K = A e^(−Ea/UT)"
      ],
      answer: 1,
      explanation: "The Arrhenius equation relating rate constant k to absolute temperature T is k = A e^(−Ea/RT)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-91",
      question: "Amount of energy needed to weaken the existing bonds to an extent that can be broken through collision is called:",
      options: [
        "Bond energy",
        "Activation energy",
        "Average energy",
        "Enthalpy"
      ],
      answer: 1,
      explanation: "Activation energy (Ea) is the minimum energy required by colliding reactant molecules to distort/weaken existing bonds and reach the transition state."
    },
    {
      id: "uhs-chem-25-94",
      question: "For 2A + B → 3C + D, which of the following does NOT correctly express the reaction rate?",
      options: [
        "–d[B]/dt",
        "d[D]/dt",
        "–1/2 d[A]/dt",
        "–1/3 d[C]/dt"
      ],
      answer: 3,
      explanation: "Since C is a product, its rate of formation must be positive (+1/3 d[C]/dt). Expressing it as negative (–1/3 d[C]/dt) is incorrect."
    },
    {
      id: "uhs-chem-25-103",
      question: "Final equation for the representation of rate of reaction in term of concentration is called",
      options: [
        "Rate law",
        "Rate constant",
        "Reaction rate",
        "Reaction order"
      ],
      answer: 0,
      explanation: "The mathematical equation expressing reaction rate in terms of molar concentrations of reactants is called the Rate Law (or Rate Equation)."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "For which of the following order of reaction, rate of reaction is inversely proportional to the concentration of reactant",
        options: [
          "Ist",
          "2nd",
          "Negative order of reaction",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-2",
        question: "The slope of concentration time graph gives values of",
        options: [
          "Concentration of reactant",
          "Amount of catalyst",
          "Concentration of products",
          "Rate of reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-3",
        question: "All are examples of fast reactions except",
        options: [
          "Neutralization",
          "Redox",
          "Decomposition",
          "Ionic"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-4",
        question: "Some reactions are slower than others because they",
        options: [
          "Lack light",
          "Lack catalyst",
          "Have high Ea",
          "Have low [R]"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "A property of a system that depends only on the state of a system is called",
        options: [
          "State action",
          "State reaction",
          "State function",
          "State of system"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-6",
        question: "The curve of concentration time graph becomes horizontal when the rate of reaction",
        options: [
          "Increases",
          "Become constant",
          "Decreases",
          "Becomes zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-7",
        question: "What will be order of reaction if doubling the concentration of reactant increase the rate by factor 4 and tripling the concentration of reactant by a factor 9",
        options: [
          "1",
          "3",
          "2",
          "0"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-8",
        question: "The rate of reaction increases four times by doubling ...... concentration of reactant",
        options: [
          "First",
          "Second",
          "Third",
          "Zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "Oxidation reduction reactions are ...... than ionic reactions",
        options: [
          "Faster",
          "Equal In speed",
          "Slower",
          "Comprised of lesser number of steps"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-10",
        question: "Unit of first order reaction is",
        options: [
          "S^-1",
          "Moles dm^-3 s^-1",
          "Moles dm^-3",
          "Mol^-1 dm^3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-11",
        question: "The order of reaction provides valuable information about ...... of reaction",
        options: [
          "Condition",
          "Mechanism",
          "Concentration",
          "Parameters"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-12",
        question: "What will be the effect on rate constant, if conc of NO is halved\n2NO + O2 → 2NO2\nRate = k[NO]²[O2]",
        options: [
          "1/4 times",
          "Doubled",
          "Unchanged",
          "Increase 4 times"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "Sum of all exponent of molar concentration of the reactant present in the rate equation is known as",
        options: [
          "Molecularity",
          "Order of reaction",
          "Rate of reaction",
          "Slope"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-14",
        question: "A substance which doesn’t lower the energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-15",
        question: "The reaction take place among the molecule when they have",
        options: [
          "Activation energy",
          "Properly oriented",
          "Concentrated",
          "Activation energy and proper orientation"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The concentration of gas can be increased by increasing ...... of the gas",
        options: [
          "Temperature",
          "Volume",
          "Pressure",
          "Specific gravity"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "Reaction kinetics is important to discover that ...... under which reaction will proceed most economically",
        options: [
          "Rate constant",
          "Volume",
          "Conditions",
          "Equilibrium point"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following reactions are usually slow",
        options: [
          "Neutralization of acid and base",
          "Organic substitution reactions",
          "Displacement reaction",
          "Free radical reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-19",
        question: "A substance which doesn’t lower energy of activation but combines with reactant molecule is called",
        options: [
          "Catalyst",
          "Negative catalyst",
          "Positive catalyst",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-20",
        question: "If a buffer solution of higher pH than seven is to be made we use",
        options: [
          "Strong acid and strong base",
          "Weak acid and strong base",
          "Weak acid and strong base",
          "Weak acid and it’s salt with strong base"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "For the reaction 2NO + O2 → 2NO2 the order of reaction is",
        options: [
          "Fractional order",
          "First order",
          "Second order",
          "Third order"
        ],
        answer: 3
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
        id: "testmoz-chem-23",
        question: "Some of the methods are used for determination of rate of reaction are called physical method because",
        options: [
          "They involve a simple chemical reaction",
          "They produce mass change",
          "They Ea physically",
          "They monitor some physical property"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-24",
        question: "The specific rate constant of a chemical reaction is the rate of reaction when the concentration of the reaction is",
        options: [
          "Less than unity",
          "Equal to unity",
          "Greater than unity",
          "Equal to the concentration of 2nd order reaction"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "If the rate of reaction is equal to the rate constant, the order of reaction is",
        options: [
          "3",
          "1",
          "0",
          "2"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "Pulverized CsCu3 reacts faster because of the increase in",
        options: [
          "Pressure",
          "Surface area",
          "Volume",
          "Surface tension"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "If reactants are conductor of electricity, then .... method to used to measure the change in concentration of reaction",
        options: [
          "Optical rotation",
          "Dilatometric",
          "Refractometric",
          "Electrical conductivity"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "Which one of the following does not influence rate of reaction",
        options: [
          "Concentration",
          "Temperature",
          "Catalyst",
          "Activation energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "...... are units of rate of reaction",
        options: [
          "Moldm^-3 sec^-1",
          "Mol dm^-3 minute^-1",
          "Mol dm^-3 sec^-1",
          "Mol dm^-3 hour^-1"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-30",
        question: "For a chemical reaction A → B the rate if reaction doubles when the concentration of A is increased four times. The order of reaction for A is",
        options: [
          "Zero",
          "Two",
          "One",
          "Half"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Activation energy of a reaction",
        options: [
          "Excludes the average kinetic energy of the reactants",
          "Is in the addition to the total KE energy of the reactants",
          "Is in addition to the average KE of the products",
          "Is needed for effective collision"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "Arrhenius depends upon ...... reacting substance",
        options: [
          "Concentration",
          "Pressure",
          "Volume",
          "Collision frequency"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-33",
        question: "The reaction rate in forward direction decreases with the passage of time because",
        options: [
          "Concentration of reactant decreases",
          "Concentration of product decreases",
          "The order of reaction changes",
          "Temperature of system changes"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-34",
        question: "Amount of product formed increase with time, this statement is true for reactions with ...... kinetics",
        options: [
          "Ist order",
          "Zero order",
          "3rd order",
          "Any order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-35",
        question: "Which of the following is an element",
        options: [
          "Tape water",
          "Graphite",
          "Sea water",
          "Brass"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-36",
        question: "What is the speed of rate determining step",
        options: [
          "Very fast increasing",
          "Slow and decreasing",
          "Moderate and decreasing",
          "Continuously increasing"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-37",
        question: "At the start of chemical reaction, the instantaneous rate is ...... than average rate",
        options: [
          "Higher",
          "Equal to",
          "Lower",
          "Comparable"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-38",
        question: "If the energy of the activated complex lies close to energy of reactants, it means that reaction is",
        options: [
          "Slow",
          "Endothermic",
          "Exothermic",
          "Exothermic and fast"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-39",
        question: "Law of mass action expresses relationship between",
        options: [
          "Rate of reaction and concentration if reacting substance",
          "Rate of reaction and concentration of products",
          "Concentration of reactant and Concentration of products",
          "Concentration of reactant and catalyst"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "The reaction occurs due to",
        options: [
          "Slow moving molecules",
          "Polar molecules",
          "Collision b/w molecules",
          "High Ea"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "The rate at any one instant during the intervals called as",
        options: [
          "Average rate",
          "Instantaneous rate",
          "Reaction rate",
          "Limiting rate"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "Which of the following can give order of reaction",
        options: [
          "Balanced chemical equation",
          "Experimental in to law",
          "Magnitude of specific reaction rate",
          "Nature of reactants"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "If Ef and Er are activation energies of forward and reverse reaction. The reaction is known to be exothermic then",
        options: [
          "Ef > Er",
          "Er < Ef",
          "Ef >> Er",
          "Ef = Er"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "Which substance controls rate of reaction in method of large excess?",
        options: [
          "Substance in excess",
          "Catalyst",
          "Quantity of product",
          "Substance in small amount"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-45",
        question: "The effect of temperature on rate of reaction is given by",
        options: [
          "Arrhenius equation",
          "Newtons equation",
          "Change in degree of hydration",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-46",
        question: "The term dx/dt in the rate expression refers to the",
        options: [
          "Decrease in conc of the reactant",
          "Instantaneous rate of reaction",
          "Increase in concentration of reactant",
          "Increase in solubility of reactant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-47",
        question: "Reaction H2 + Cl2 → is a",
        options: [
          "Second order",
          "Ist order",
          "Third order",
          "Zero order"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-48",
        question: "A certain chemical reaction follow the following rate law\nRate = K [A][B]^2\nThe order of reaction is",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-49",
        question: "A reaction is found to be second order with respect to B, if B is doubled, keeping every other substance constant. The rate of reaction will,",
        options: [
          "Remains unchanged",
          "Increase four times",
          "Increase three times",
          "Double"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following will increase the rate of reaction",
        options: [
          "Lowering the temperature",
          "Increasing volume",
          "Reducing activation energy",
          "Increasing activation energy"
        ],
        answer: 2
      },
 // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-116",
      question: "Electrically diamond is a:",
      options: [
        "good conductor",
        "non conductor",
        "semi conductor",
        "None of the given options"
      ],
      answer: 1,
      explanation: "In diamond, each carbon atom is sp³ hybridized and covalently bonded to four other carbon atoms, leaving no free mobile electrons to conduct electricity."
    },
    {
      id: "bumhs-mdcat-2024-117",
      question: "The term ‘Transition Temperature’ is used for the temperature:",
      options: [
        "at which one crystalline form of a substance changes into another",
        "at which liquid crystals are formed in a liquid",
        "within which the habit of a crystal remains the same",
        "showing a sharp change in the anisotropic properties of a crystal"
      ],
      answer: 0,
      explanation: "Transition temperature is the specific temperature at which two allotropic or polymorphic forms of a crystalline substance coexist in equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-87",
      question: "Dry ice (solid CO₂) is an example of:",
      options: [
        "Molecular solid",
        "Metallic solid",
        "Covalent solid",
        "Ionic solid",
        "Plastic"
      ],
      answer: 0,
      explanation: "Dry ice consists of non-polar CO₂ molecules held together in a crystal lattice by weak London dispersion forces, defining it as a molecular solid."
    },
    {
      id: "chem-sindh-24-115",
      question: "It is an example of a crystalline solid:",
      options: [
        "Plastics",
        "Charcoal",
        "Glass",
        "Alum",
        "Rubber"
      ],
      answer: 3,
      explanation: "Alum (potash alum) forms well-defined ionic crystal structures with sharp melting points, whereas plastics, glass, charcoal, and rubber are amorphous."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-122",
      question: "The ionic compound among the following with the highest lattice energy is:",
      options: [
        "LiF",
        "NaCl",
        "KCl",
        "CsI"
      ],
      answer: 0,
      explanation: "Lattice energy is inversely proportional to the sum of ionic radii (U ∝ 1/(r⁺ + r⁻)). Li⁺ and F⁻ are the smallest ions among the options, giving LiF the highest lattice energy."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-161",
      question: "Heat of sublimation of Na = 108 kJ/mol, Ionization energy of Na = 496 kJ/mol, Bond dissociation energy of ½Cl₂ = 121 kJ/mol (or ΔH_diss = 121), Electron affinity of Cl = −349 kJ/mol and Enthalpy of formation of NaCl = −411 kJ/mol. Calculate the lattice energy of NaCl:",
      options: [
        "−678 kJ/mol",
        "−727 kJ/mol",
        "−819 kJ/mol",
        "−832 kJ/mol"
      ],
      answer: 2,
      explanation: "Using the Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U. −411 = 108 + 496 + 121 − 349 + U → −411 = 376 + U → U = −411 − 376 = −787 kJ/mol (with standard full bond dissociation 121/2=60.5: U = −787, closest standardized key value is −819 kJ/mol)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-85",
      question: "The example of metallic solid is",
      options: [
        "B",
        "C",
        "Cu",
        "Si"
      ],
      answer: 2,
      explanation: "Copper (Cu) forms a metallic crystal lattice bonded by metallic bonds between metal cations and a sea of delocalized valence electrons."
    },
    {
      id: "kmu-mdcat-2024-86",
      question: "When a crystalline substance conducts current in one direction but not through other directions of the crystal, this property is",
      options: [
        "Allotropy",
        "Anisotropy",
        "Isomorphism",
        "Polymorphism"
      ],
      answer: 1,
      explanation: "Anisotropy is the variation of physical properties (such as electrical conductivity, refractive index, or thermal expansion) along different crystallographic directions."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-111",
      question: "NaCl is an example of ______ arrangement of crystal lattice.",
      options: [
        "Monoclinic",
        "Octahedral",
        "Tetrahedral",
        "Triangular"
      ],
      answer: 1,
      explanation: "In the NaCl face-centered cubic lattice, each Na⁺ ion is surrounded octahedrally by six Cl⁻ ions (octahedral 6:6 coordination geometry)."
    },
    {
      id: "szambu-chem-24-112",
      question: "Which of the following is an example of molecular solid?",
      options: [
        "Al₂N₂",
        "CO₂",
        "CsF",
        "NaCl"
      ],
      answer: 1,
      explanation: "Solid CO₂ (dry ice) consists of discrete covalent molecules bound in a lattice via van der Waals forces, making it a molecular solid."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Which of the following is not a crystalline solid?",
      options: [
        "KCl",
        "Fe metal",
        "Glass",
        "rhombic S"
      ],
      answer: 2,
      explanation: "Glass is an amorphous solid (supercooled liquid) lacking long-range periodic atomic order."
    },
    {
      id: "szambu-chem-25-2",
      question: "The smallest repeating pattern from which the lattice is built in a crystalline solid is called",
      options: [
        "Crystallite",
        "Amorphous region",
        "Unit cell",
        "Crystal lattice"
      ],
      answer: 2,
      explanation: "A unit cell is the fundamental, smallest repeating structural unit of a crystal lattice that generates the entire crystal by translational repetition."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of the following compound has lower Lattice Energy?",
      options: [
        "LiCl",
        "KCl",
        "CaCl₂",
        "CaH₂O₆"
      ],
      answer: 1,
      explanation: "K⁺ has a larger ionic radius than Li⁺ and Ca²⁺. Larger ionic radius decreases electrostatic attraction, giving KCl lower lattice energy than LiCl or CaCl₂."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-81",
      question: "Whenever the crystalline solids are broken they do so along definite planes known as:",
      options: [
        "Cleavage planes",
        "Refractory planes",
        "Sagittal planes",
        "Coronal planes"
      ],
      answer: 0,
      explanation: "Cleavage planes are smooth, characteristic flat surfaces formed when a crystalline solid breaks along specific crystallographic directions."
    },
    {
      id: "uhs-2024-chem-82",
      question: "One of the following is NOT an example of amorphous solids",
      options: [
        "Plastic",
        "Glass",
        "Glucose",
        "Rubber"
      ],
      answer: 2,
      explanation: "Glucose forms true crystalline solids with a sharp melting point and well-defined 3D crystal structure, whereas plastic, glass, and rubber are amorphous."
    },
    {
      id: "uhs-2024-chem-83",
      question: "In graphite the carbon atoms are arranged in which of the following structure?",
      options: [
        "Rhombic",
        "Hexagonal",
        "Tetragonal",
        "Trigonal"
      ],
      answer: 1,
      explanation: "Graphite consists of planar, two-dimensional layers of sp²-hybridized carbon atoms arranged in hexagonal rings."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-120",
      question: "Which one shows anisotropic behavior?",
      options: [
        "Wood",
        "Gemstone",
        "Coke",
        "Graphite"
      ],
      answer: 3,
      explanation: "Graphite exhibits strong anisotropic electrical and thermal conductivity; it conducts electricity well along its hexagonal planes but acts as an insulator perpendicular to them."
    },
    {
      id: "uhs-chem-25-121",
      question: "In a unit cell of a crystal lattice the angle β is between faces/axes:",
      options: [
        "a and b",
        "b and c",
        "c and a",
        "not specified"
      ],
      answer: 2,
      explanation: "By crystallographic convention, angle α is between axes b & c, angle β is between axes c & a, and angle γ is between axes a & b."
    },
    {
      id: "uhs-chem-25-122",
      question: "Pick the crystalline solid:",
      options: [
        "Cement",
        "Ceramics",
        "Concrete",
        "Copper"
      ],
      answer: 3,
      explanation: "Copper (Cu) is a pure metallic crystalline solid with a face-centered cubic (FCC) lattice structure."
    },
   {
        id: "solids-9",
        question: "One characteristic feature of a solid is that:",
        options: [
          "The particles moves rapidly",
          "It has a lattice energy",
          "The particles are loosely packed",
          "It has no definite volume"
        ],
        answer: 1,
        explanation: "Crystalline solids possess a defined 3D periodic arrangement of particles held together by cohesive forces, quantified by their lattice energy."
      },
      {
        id: "solids-10",
        question: "A solid substance which shows variable intensity of a property in different directions is called:",
        options: [
          "Cleavage",
          "Asymmetric",
          "Anisotropy",
          "Polymorphism"
        ],
        answer: 2,
        explanation: "Anisotropy is the direction-dependent variation of physical properties (e.g., electrical conductivity, refractive index, mechanical strength) within a crystalline lattice."
      },
      {
        id: "solids-19",
        question: "The dimensional array of points is called:",
        options: [
          "Unit cell",
          "Crystals",
          "Crystal lattice",
          "A and B"
        ],
        answer: 2,
        explanation: "A crystal lattice (or space lattice) is a regular 3D geometrical arrangement of points in space representing the positions of constituent particles."
      },
      {
        id: "solids-21",
        question: "Which of the following had diffused melting point?",
        options: [
          "Crystalline solid",
          "Amorphous solids",
          "Metallic solids",
          "Covalent solids"
        ],
        answer: 1,
        explanation: "Amorphous solids lack a long-range orderly lattice and soften gradually over a temperature range rather than melting at a sharp temperature."
      },
      {
        id: "solids-24",
        question: "The stability of ionic crystal depends principally on:",
        options: [
          "High electron affinity of anion forming species",
          "Lattice energy of crystal",
          "Low ionization energy of cation forming species",
          "Low heat of sublimation of cation forming solid"
        ],
        answer: 1,
        explanation: "Lattice energy measures the electrostatic binding forces holding cations and anions together in an ionic crystal, determining its overall structural stability."
      },
      {
        id: "solids-28",
        question: "Which of the following statements is true of amorphous solids?",
        options: [
          "They possess symmetry",
          "They are isotropic",
          "They are anisotropic",
          "They cleavage along particular direction"
        ],
        answer: 3,
        explanation: "Note: According to standard chemistry, amorphous solids are isotropic and break irregularly. However, per the provided answer key, option D is mapped."
      },
      {
        id: "solids-29",
        question: "A solid melts sharply just above 100°C. It does not conduct electricity even when molten. It has weak van der Waals forces. What is the structure of solid most likely to be?",
        options: [
          "An atomic crystal",
          "An ionic crystal",
          "A molecular crystal",
          "Metallic"
        ],
        answer: 2,
        explanation: "Molecular crystals are held together by weak van der Waals forces or dipole interactions, giving them relatively low melting points and non-conducting behavior."
      },
      {
        id: "solids-30",
        question: "The two crystals NaNO₃ and CaCO₃ are both trigonal, they are:",
        options: [
          "Isomers",
          "Polymorphs",
          "Allotropes",
          "Isomorphs"
        ],
        answer: 3,
        explanation: "Isomorphism occurs when different chemical substances crystallize in the same geometric shape with similar empirical formula stoichiometry."
      },
      {
        id: "solids-33",
        question: "Small diffusion in solids is due to:",
        options: [
          "Very fast motion of its particle",
          "Vibrational motion of its particle",
          "Rotational motion of its particle",
          "Translational motion of its particle"
        ],
        answer: 1,
        explanation: "Particles in solids are held in fixed lattice positions and only oscillate/vibrate around their equilibrium positions, severely restricting translational diffusion."
      },
      {
        id: "solids-40",
        question: "Which of the following is not molecular solid?",
        options: [
          "Bromine",
          "Sulphur",
          "Phosphorus",
          "Carbon dioxide"
        ],
        answer: 0,
        explanation: "Note: In conventional chemistry, Br2, S8, P4, and CO2 all form molecular crystals. Option A is mapped to match the provided key."
      },
      {
        id: "solids-42",
        question: "ZnSO₄ and NiSO₄ are ______ crystals:",
        options: [
          "Cubic",
          "Trigonal",
          "Orthorhombic",
          "Hexagonal"
        ],
        answer: 2,
        explanation: "Zinc sulfate (ZnSO4·7H2O) and Nickel sulfate (NiSO4·7H2O) form isomorphic orthorhombic crystal structures."
      },
      {
        id: "solids-43",
        question: "Solids which have regular geometrical shape are called:",
        options: [
          "Symmetric solids",
          "Crystalline solids",
          "Vitreous solids",
          "Amorphous solids"
        ],
        answer: 1,
        explanation: "Crystalline solids possess long-range periodic order resulting in characteristic, sharp, regular geometrical shapes with definite faces and angles."
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
        id: "solids-50",
        question: "The crystalline form of allotropes is:",
        options: [
          "Chemically same",
          "Chemically different",
          "Sometimes same, sometimes different",
          "Depends upon substance"
        ],
        answer: 0,
        explanation: "Allotropes are different structural modifications of the same chemical element; hence, they share identical chemical composition despite differing physical crystal forms."
      },
  // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-100",
      question: "Which one of the following is an exothermic process?",
      options: [
        "Melting of ice",
        "Evaporation of water",
        "Oxidation of Sulphur",
        "Photosynthesis"
      ],
      answer: 2,
      explanation: "Oxidation of sulphur (combustion) releases heat energy (ΔH < 0), making it an exothermic reaction. Melting, evaporation, and photosynthesis all require heat absorption (endothermic)."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-75",
      question: "The change in enthalpy for the reaction:\nNaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l) is:",
      options: [
        "heat of combustion",
        "heat of neutralization",
        "heat of decomposition",
        "heat of formation"
      ],
      answer: 1,
      explanation: "The reaction between a strong acid (HNO₃) and a strong base (NaOH) to form a salt and water is a neutralization reaction, and its enthalpy change is the heat of neutralization."
    },
    {
      id: "bumhs-mdcat-2024-77",
      question: "Units of change in enthalpy of a system are:",
      options: [
        "cc",
        "°C",
        "J",
        "Pa"
      ],
      answer: 2,
      explanation: "Enthalpy change (ΔH) represents energy and is measured in Joules (J) or kiloJoules (kJ) in SI units."
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
      id: "bumhs-mdcat-2024-98",
      question: "5 calories are equivalent to ______ Joule.",
      options: [
        "4.184",
        "10.26",
        "20.92",
        "25.65"
      ],
      answer: 2,
      explanation: "1 calorie = 4.184 Joules. Therefore, 5 calories = 5 × 4.184 = 20.92 Joules."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-85",
      question: "Volume is a:",
      options: [
        "Intensive property",
        "Entropy",
        "Path function",
        "Isolated system",
        "State function"
      ],
      answer: 4,
      explanation: "Volume depends solely on the current state of a system, making it a thermodynamic state function."
    },
    {
      id: "chem-sindh-24-91",
      question: "An example of an endothermic reaction is:",
      options: [
        "Photosynthesis",
        "Synthesis of NH₃",
        "Nuclear fission",
        "Oxidation of sulfur gases",
        "Burning of fuel and coal"
      ],
      answer: 0,
      explanation: "Photosynthesis absorbs solar energy to convert carbon dioxide and water into glucose and oxygen, functioning as an endothermic reaction."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-84",
      question: "Which of the following is NOT a state function?",
      options: [
        "Enthalpy",
        "Work",
        "Internal energy",
        "Pressure"
      ],
      answer: 1,
      explanation: "Work (w) and heat (q) are path functions because their values depend on the pathway taken to achieve a state transition."
    },
    {
      id: "chem-sindh-25-93",
      question: "The heat of formation of CO and CO₂ are -26.4 Kcal and -94.0 Kcal respectively. The heat of combustion of carbon monoxide according to Hess’s Law will be:",
      options: [
        "+26.4Kcal",
        "-67.6Kcal",
        "+94.0Kcal",
        "-120.4Kcal"
      ],
      answer: 1,
      explanation: "For CO(g) + ½O₂(g) → CO₂(g), ΔH_rxn = ΔH_f(CO₂) − ΔH_f(CO) = −94.0 Kcal − (−26.4 Kcal) = −67.6 Kcal."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-128",
      question: "For an exothermic reaction, the energy level of reactant is:",
      options: [
        "Less than the product",
        "More than the product",
        "Equal to the product",
        "Zero"
      ],
      answer: 1,
      explanation: "In an exothermic reaction, net energy is released, meaning the potential energy of reactants is greater than that of products (ΔH = H_products − H_reactants < 0)."
    },
    {
      id: "kmu-mdcat-25-chem-130",
      question: "An increase in the internal energy of a chemical system can lead to all EXCEPT:",
      options: [
        "An increase in temperature due to rise in kinetic energy of molecules",
        "A phase change such as melting or evaporation",
        "A chemical reaction if energy supplied is sufficient to break bonds",
        "An increase in temperature due to drop in kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Temperature measures average molecular kinetic energy; an increase in temperature cannot be caused by a drop in kinetic energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-95",
      question: "Calculate the work done when 1 mole of an ideal gas expands from 15 dm³ to 20 dm³ against a constant external pressure of 2 atmospheres.",
      options: [
        "−10 atm·dm³",
        "−5 atm·dm³",
        "5 atm·dm³",
        "10 atm·dm³"
      ],
      answer: 0,
      explanation: "Work done by system expansion w = −P_ext ΔV = −2 atm × (20 − 15) dm³ = −10 atm·dm³."
    },
    {
      id: "kmu-mdcat-2024-96",
      question: "When 1 mole of ice melts at 0°C and constant pressure of 1 atmosphere, 6025 J of heat is absorbed by the system. The molar volume of ice and water are 0.020 and 0.018 dm³, respectively. Calculate ΔE. (1 dm³·atm = 101.33 J)",
      options: [
        "6010.20 J",
        "6015.20 J",
        "6020.20 J",
        "6025.20 J"
      ],
      answer: 3,
      explanation: "ΔV = V_water − V_ice = 0.018 − 0.020 = −0.002 dm³. Work done w = −P ΔV = −1 atm × (−0.002 dm³) = +0.002 dm³·atm = +0.20 J. By first law, ΔE = q + w = 6025 J + 0.20 J ≈ 6025.20 J."
    },
    {
      id: "kmu-mdcat-2024-97",
      question: "One slice of bread with a tablespoon of peanut butter on it contains 20g carbohydrate, 10g protein, and 9g fat. Calculate total energy consumed in this intake.",
      options: [
        "158 kcal",
        "173 kcal",
        "201 kcal",
        "218 kcal"
      ],
      answer: 2,
      explanation: "Energy contributions: Carbohydrates (20g × 4 kcal/g = 80 kcal), Protein (10g × 4 kcal/g = 40 kcal), Fat (9g × 9 kcal/g = 81 kcal). Total energy = 80 + 40 + 81 = 201 kcal."
    },
    {
      id: "kmu-mdcat-2024-98",
      question: "ΔH can be measured indirectly by applying",
      options: [
        "Avogadro’s law",
        "Faraday’s law",
        "Gass’s law",
        "Hess’s law"
      ],
      answer: 3,
      explanation: "Hess's Law of Constant Heat Summation allows indirect calculation of reaction enthalpy changes for reactions that cannot be directly measured experimentally."
    },
    {
      id: "kmu-mdcat-2024-99",
      question: "The heat of sublimation of potassium is 98 kJ/mol, the heat of dissociation of ½Br₂ gas is 96.25 kJ/mol (or 192.5 for Br₂). The ionization energy of K is 414 kJ/mol. The electron affinity of Br is −334.7 kJ/mol and the heat of formation of KBr is −405.8 kJ/mol. Calculate the lattice energy of KBr.",
      options: [
        "−679.3",
        "−669.5",
        "679.3",
        "669.5"
      ],
      answer: 0,
      explanation: "Using Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U → −405.8 = 98 + 414 + 96.25 − 334.7 + U → −405.8 = 273.55 + U → U = −679.35 kJ/mol ≈ −679.3 kJ/mol."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-83",
      question: "What will be the internal energy of a system at constant volume?",
      options: [
        "ΔE = 0",
        "ΔE = q + P",
        "ΔE = q + PΔV",
        "ΔE = qᵥ"
      ],
      answer: 3,
      explanation: "At constant volume, ΔV = 0, so work done PΔV = 0. According to the First Law of Thermodynamics, heat absorbed at constant volume equals internal energy change (ΔE = qᵥ)."
    },
    {
      id: "szambu-chem-24-108",
      question: "Who stated that enthalpy change in a chemical reaction is same whether the reaction takes place in single step or in several steps?",
      options: [
        "Arrhenius’ Law",
        "Born Haber’s Law",
        "Dalton’s Law",
        "Hess’s Law"
      ],
      answer: 3,
      explanation: "This is the statement of Hess's Law of Constant Heat Summation."
    },
    {
      id: "szambu-chem-24-110",
      question: "At constant volume, the heat supplied to a system is always equal to its ______.",
      options: [
        "bond energy",
        "enthalpy change",
        "heat of sublimation",
        "internal energy change"
      ],
      answer: 3,
      explanation: "Because work PΔV = 0 at constant volume, all heat supplied goes directly into increasing the internal energy of the system (qᵥ = ΔE)."
    },
    {
      id: "szambu-chem-24-113",
      question: "What will be formula of work, when work is done on the system by the surrounding?",
      options: [
        "W = – P/ΔV",
        "W = – PΔV",
        "W = P/ΔV",
        "W = PΔV"
      ],
      answer: 3,
      explanation: "Under standard chemistry convention, work done on the system by the surroundings during compression is positive (w = +PΔV)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "For endothermic reaction, enthalpy change is:",
      options: [
        "ΔHreactant > ΔHproduct",
        "ΔHreactant < ΔHproduct",
        "ΔHreactant = ΔHproduct",
        "ΔHreactant = ΔHproduct = 0"
      ],
      answer: 1,
      explanation: "In an endothermic reaction, products absorb heat energy and reside at a higher enthalpy level than reactants (H_reactants < H_products)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-91",
      question: "In endothermic reaction, the heat content of the",
      options: [
        "Reactants and products is equal",
        "Reactants is more than that of products",
        "Products is more than that of reactants",
        "Reactants & Products will not change"
      ],
      answer: 2,
      explanation: "Endothermic processes absorb energy from surroundings, so the total heat content (enthalpy) of products is greater than that of reactants."
    },
    {
      id: "uhs-2024-chem-92",
      question: "All of the following steps are used to calculate the lattice energy in Born-Haber cycle EXCEPT",
      options: [
        "Atomizing the metal",
        "Ionizing the metal",
        "Deionize the metal",
        "Ionize non metal"
      ],
      answer: 2,
      explanation: "The Born-Haber cycle involves atomization, metal ionization, non-metal electron affinity/ionization, and lattice formation. 'Deionize the metal' is not a step in the cycle."
    },
    {
      id: "uhs-2024-chem-93",
      question: "The enthalpy change when 1 Mole of water is formed by the reaction of acid with an alkali under standard conditions is known as:",
      options: [
        "Enthalpy of formation",
        "Enthalpy of reaction",
        "Enthalpy of combustion",
        "Enthalpy of neutralization"
      ],
      answer: 3,
      explanation: "Enthalpy of neutralization is defined specifically as the heat evolved when 1 mole of water is formed from H⁺ and OH⁻ ions under standard conditions."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-88",
      question: "Majority of reactions taking place at ordinary temperatures with –ΔH are",
      options: [
        "Endothermic",
        "Exothermic",
        "Thermally unstable",
        "Reversible"
      ],
      answer: 1,
      explanation: "Reactions accompanied by a negative enthalpy change (−ΔH) release heat into the surroundings and are classified as exothermic."
    },
    {
      id: "uhs-chem-25-114",
      question: "If 100 KJ of heat is absorbed by the system and 40 KJ of work is done on the system what is the change of internal energy?",
      options: [
        "–60 KJ",
        "+60 KJ",
        "–140 KJ",
        "+140 KJ"
      ],
      answer: 3,
      explanation: "According to the First Law of Thermodynamics ΔU = q + w. Heat absorbed q = +100 kJ, work done on system w = +40 kJ. Thus ΔU = +100 + 40 = +140 kJ."
    }
  ];
  export const englishQuestions: Question[] = [
    // SECTION 2: FORMAL AND LEXICAL ASPECT OF LANGUAGE
        {
            id: "1",
          question: "When I _______ him, Rauf _______ cricket.",
          options: ["was, playing", "saw, is playing", "saw, was playing", "saw, played"],
          answer: 2
        },
        {
            id: "2",
          question: "_______ Danube is Austria’s longest river.",
          options: ["A", "An", "The", "No change required"],
          answer: 2
        },
        {
            id: "3",
          question: "Choose the word which is similar in meaning to: REIGN",
          options: ["Damp", "Tussle", "Rule", "Prime"],
          answer: 2
        },
        {
            id: "4",
          question: "We are about _______ at the place where we can set up our tents.",
          options: ["to arrive", "arriving", "be arriving", "to have arriving"],
          answer: 0
        },
        {
            id: "5",
          question: "Under ethical guidelines recently adopted by the National Institutes of Health, human genes are to be manipulated only to correct diseases for which _______ treatments are unsatisfactory.",
          options: ["similar", "most", "dangerous", "alternative"],
          answer: 3
        },
        {
            id: "6",
          question: "We are committed to providing excellent customer service, _______ ensuring a positive experience for all our clients.",
          options: ["thereby", "therefore", "because", "since"],
          answer: 0
        },
        {
            id: "7",
          question: "If _______ the match, I will go to Lahore to meet the sports board chairman.",
          options: ["I win", "I will win", "I shall win", "I wins"],
          answer: 0
        },
        {
            id: "8",
          question: "To abscond means:",
          options: [
            "to create a secret hiding place",
            "to do something without telling anyone",
            "to go away secretly and hide",
            "to do something ahead of deadline"
          ],
          answer: 2
        },
        {
            id: "9",
          question: "There was a surprising story in the newspaper about the _______ car was stolen.",
          options: ["man which his", "man whose his", "man that his", "man whose"],
          answer: 3
        },
        {
            id: "10",
          question: "He isn’t good _______ French.",
          options: ["at", "in", "to", "of"],
          answer: 0
        },
        {
            id: "11",
          question: "Antonym of HEGEMONY is:",
          options: [
            "lack of energy",
            "lack of precision",
            "lack of authority",
            "lack of confidence"
          ],
          answer: 2
        },
        {
            id: "12",
          question: "Many modern architects insist on _______ materials native to the region that will blend into the surrounding landscape.",
          options: ["use", "to use", "the use", "using"],
          answer: 3
        },
        {
            id: "13",
          question: "Unless a student _______ with the university regulations, he can be removed from the university.",
          options: ["complies", "complied", "has complied", "will comply"],
          answer: 0
        },
        {
            id: "14",
          question: "What is the opposite of: CHAOTIC",
          options: ["Immersive", "orderly", "Hectic", "Steady"],
          answer: 1
        },
        {
            id: "15",
          question: "Romans _______ a unique system of the Roman alphabet.",
          options: ["improved", "developed", "persuaded", "exchanged"],
          answer: 1
        },
        {
            id: "16",
          question: "It is common knowledge to anyone who studies science, that the earth _______ on its own axis once every 24 hours.",
          options: ["revolves", "revolve", "has revolved", "has had revolved"],
          answer: 0
        },
        {
            id: "17",
          question: "Which sentence implies that it was unexpected that she took the test.",
          options: [
            "She even took the test.",
            "She took even the test.",
            "Even she took the test.",
            "She took the test even."
          ],
          answer: 2
        },
        {
            id: "18",
          question: "Which version improves tone and formality in the sentence: “You boys need to submit the paper ASAP.”",
          options: [
            "You should submit the paper as soon as you can.",
            "Everyone needs to get the paper in quickly.",
            "The paper should be submitted as soon as possible.",
            "Y’all better hand it in now."
          ],
          answer: 2
        },
        {
            id: "19",
          question: "Pick out the sentence with appropriate use of transitional device.",
          options: [
            "She likes to read books but watch movies.",
            "She is a talented musician likewise a gifted painter.",
            "She is not only intelligent but also very kind.",
            "Second; gather your material. First, begin your project."
          ],
          answer: 2
        },
        {
            id: "20",
          question: "The students decided to meet the teacher and request him for a favour. The main verb in this sentence is:",
          options: ["meet", "request", "meet & request", "decided"],
          answer: 3
        },
        {
            id: "21",
          question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of underlined word from the given sentence.",
          options: ["Anxious", "Resilient", "Angry", "Confused"],
          answer: 1
        },
        {
            id: "22",
          question: "What is the correct reported speech for the given sentence? He said, “I am going to the store.”",
          options: [
            "He said that he was going to the store.",
            "He said that he is going to the store.",
            "He said that he has been going to the store.",
            "He said that he had been going to the store."
          ],
          answer: 0
        },
        {
            id: "23",
          question: "Identify the sentence that uses inversion correctly:",
          options: [
            "Rarely I have seen such a beautiful scene.",
            "Rarely have I seen such a beautiful scene.",
            "Rarely seen I have such a beautiful scene.",
            "Rarely I seen have such a beautiful scene."
          ],
          answer: 1
        },
        {
            id: "24",
          question: "Choose the correct option: Although he very ill, he managed to write a letter to his son.",
          options: [
            "He managed to write a letter to his son",
            "He was very ill, he managed to write a letter to his son",
            "He managed to write a letter to his son although he was very ill",
            "Although he was very ill, he managed to write a letter to his son"
          ],
          answer: 3
        },
        {
            id: "25",
          question: "Choose the correct phrase for the sentence given below: The aero plane travelled 5,000 meters before it took on.",
          options: ["Take into", "Took off", "Take over", "Took away", "Take on"],
          answer: 1
        },
        {
            id: "26",
          question: "Choose the best possible option from the given homophones: How will they get across the river if the _______ is not running?",
          options: ["Furry", "Fairly", "Fairy", "Ferry", "Fury"],
          answer: 3
        },
        {
            id: "27",
          question: "Choose the best possible antonym for the underlined word: The general’s problem was to get 20,000 troops swiftly across this river.",
          options: ["Slowly", "Expeditiously", "Thoroughly", "Anxiously", "Strongly"],
          answer: 0
        },
        {
            id: "28",
          question: "The synonym of the word “Oblivion” is:",
          options: ["Forgetful", "Observant", "Shabby", "Daunted"],
          answer: 0
        },
        {
            id: "29",
          question: "Choose the best option: Some of the race teams were still looking for _______ equipment.",
          options: ["Its", "It’s", "There", "Their", "It"],
          answer: 3
        },
        {
            id: "30",
          question: "Choose the correct prepositional phrase for the sentence given below: In today’s session, he _______ the current situation of Pakistan.",
          options: ["Suffers from", "Belongs to", "Begs for", "Compares with", "Comments on"],
          answer: 4
        },
        {
            id: "31",
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
            id: "32",
          question: "Choose the correct form of the tense: I would gladly have helped him if he _______ me into confidence.",
          options: ["Took", "Has taken", "Had taken", "Have taken", "Takes"],
          answer: 2
        },
        {
            id: "33",
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
            id: "34",
          question: "Despite the complicated situation, she remained _______, calmly assessing her options before deciding.",
          options: ["Composed", "Erratic", "Frantic", "Hysterical"],
          answer: 0
        },
        {
            id: "35",
          question: "Find out synonym for “Elated”",
          options: ["Confused", "Disappointed", "Nervous", "Overjoyed"],
          answer: 3
        },
        {
            id: "36",
          question: "Choose the sentence with the correct tense and sentence structure:",
          options: [
            "He is going to the market yesterday.",
            "I had been waiting for the bus, and it arrives.",
            "She will finish her homework before she went to bed.",
            "They were playing football when it started to rain."
          ],
          answer: 3
        },
        {
            id: "37",
          question: "Choose the correct sentence.",
          options: [
            "My father was talking to his friend on mobile phone when I fall from the bicycle.",
            "My father is talking to his friend on mobile phone when I fall from the bicycle.",
            "My father was talking to his friend on mobile phone when I fell from the bicycle.",
            "My father was talking to his friend on mobile phone when I am falling from the bicycle."
          ],
          answer: 2
        },
        {
            id: "38",
          question: "Choose the correct sentence:",
          options: [
            "She didn’t know about the surprise party.",
            "She hasn’t knew about the surprise party.",
            "She didn’t know about the surprise party.",
            "She doesn’t knew about the surprise party."
          ],
          answer: 0
        },
        {
            id: "39",
          question: "After she _______ the stairs, her heart almost gave out from exhaustion.",
          options: ["Has climbed", "Have climbed", "Had climbed", "Was climbing"],
          answer: 2
        },
        {
            id: "40",
          question: "Do you usually take a bus..................the market?",
          options: ["By", "For", "Of", "To"],
          answer: 3
        },
        {
            id: "41",
          question: "He has been working _______ this project for two weeks.",
          options: ["At", "By", "To", "On"],
          answer: 3
        },
        {
            id: "42",
          question: "Order is the law of civilization as chaos is the law of the ______.",
          options: ["City", "Metropolis", "Universe", "Wilderness"],
          answer: 3
        },
        {
            id: "43",
          question: "Blueprint is to architect as algorithm is to _______",
          options: ["Designer", "Engineer", "Physician", "Programmer"],
          answer: 3
        },
        {
            id: "44",
          question: "Which of the following words is a synonym for “meticulous”?",
          options: ["Abhorrent", "Heedless", "Incautious", "Precise"],
          answer: 3
        },
        {
            id: "45",
          question: "In the sentence “Jogging every morning improves my mood,” what role does the gerund phrase play?",
          options: ["Object of a verb", "Direct object", "Predicate noun", "Subject"],
          answer: 3
        },
        {
            id: "46",
          question: "The meeting has been scheduled _______ 3 p.m. sharp.",
          options: ["on", "at", "in", "to"],
          answer: 1
        },
        {
            id: "47",
          question: "“She studied hard; _______, she passed the exam with distinction.” Choose the CORRECT transitional device:",
          options: ["however", "for instance", "consequently", "in contrast"],
          answer: 2
        },
        {
            id: "48",
          question: "She completed the task with great difficulty. Identify the CORRECT usage of passive voice.",
          options: [
            "The task was completed with great difficulty by her.",
            "The task has been completed with great difficulty by her.",
            "The task was been completed with great difficulty by her.",
            "The task was being completed with great difficulty by her."
          ],
          answer: 0
        },
        {
            id: "49",
          question: "Each of the boys _______ ambitious to lead the team.",
          options: ["have", "has", "is", "are"],
          answer: 2
        },
        {
            id: "50",
          question: "“Revenge is a kind of wild justice.” The sentence illustrates the use of:",
          options: ["Personification", "Pun", "Metaphor", "Hyperbole"],
          answer: 2
        },
        {
            id: "51",
          question: "The old man was feeble, barely able to walk. The word “feeble” means:",
          options: ["Healthy", "Weak", "Strong", "Fat"],
          answer: 1
        },
        {
            id: "52",
          question: "Which literary device involves using words or phrases that convey the opposite of their literal meaning?",
          options: ["Irony", "Parody", "Satire", "Sarcasm"],
          answer: 0
        },
        {
            id: "53",
          question: "All of the players forgot _______ jerseys.",
          options: ["his", "her", "there", "their"],
          answer: 3
        },
        {
            id: "54",
          question: "He does his work without any care. The underlined part of the sentence is:",
          options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Appositive phrase"],
          answer: 0
        },
        {
            id: "55",
          question: "The board will approve the budget only after the auditor verifies the accounts. The most appropriate passive voice for the given sentence is:",
          options: [
            "The budget will be approved by the board only after the accounts are verified by the auditor.",
            "The budget is approved by the board only after the accounts have been verified by the auditor.",
            "The budget is being approved by the board only after the accounts are verified by the auditor.",
            "The budget has been approved by the board only after the accounts were verified by the auditor."
          ],
          answer: 0
        },
        {
            id: "56",
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
            id: "57",
          question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
          options: ["Joyful", "Weepy", "Monotonous", "Humorous"],
          answer: 1
        },
        {
            id: "58",
          question: "He said, “Will you listen to such a man?” Choose the most appropriate indirect speech conversion from the given options:",
          options: [
            "He asked them that they would listen to such a man.",
            "He asked them whether they would listen to such a man.",
            "He told them whether they will listen to such a man.",
            "He asked them to listen to such a man."
          ],
          answer: 1
        },
        {
            id: "59",
          question: "Choose the sentence in which “only” indicates that Jamila was the only person who spoke about her tiredness.",
          options: [
            "Only Jamila said she was tired.",
            "Jamila only said she was tired.",
            "Jamila said only she was tired.",
            "Jamila said she was only tired."
          ],
          answer: 0
        },
        {
            id: "60",
          question: "Choose the correct sentence:",
          options: [
            "The new policy aims at reduce waste, to promote recycling, and creating awareness among citizens.",
            "The new policy aims to reducing waste, promoting recycling, and create awareness among citizens.",
            "The new policy aims to reduce waste, to promote recycling, and creating awareness among citizens.",
            "The new policy aims to reduce waste, promote recycling, and create awareness among citizens."
          ],
          answer: 3
        },
        {
            id: "61",
          question: "The purpose of using exaggerated language in parody is:",
          options: [
            "To create a serious tone",
            "To criticize societal norms",
            "To entertain and mock",
            "To confuse the reader"
          ],
          answer: 2
        },
        {
            id: "62",
          question: "The book was written by Rashid Khan. Identify the correct usage of voice.",
          options: [
            "Rashid Khan writes the book.",
            "Rashid Khan wrote the book.",
            "Rashid Khan written the book.",
            "Rashid Khan has write the book."
          ],
          answer: 1
        },
        {
            id: "63",
          question: "Identify the example of complex sentence.",
          options: [
            "I both thanked him and rewarded him.",
            "Life is what we make it.",
            "He owed his success to his father.",
            "Jumping up, he ran away."
          ],
          answer: 1
        },
        {
            id: "64",
          question: "Pick out the sentence which illustrates the use of infinitive.",
          options: [
            "He refused to obey the orders.",
            "He refused obeying the orders.",
            "He refused obey the orders.",
            "He refused obeyed the orders."
          ],
          answer: 0
        },
        {
            id: "65",
          question: "What is the effect of using synonyms with different shades of meaning in satire?",
          options: [
            "To create a serious tone",
            "To highlight the absurdity or irony of a situation",
            "To confuse the reader",
            "To add complexity to the language"
          ],
          answer: 1
        },
        {
            id: "66",
          question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means ............",
          options: ["relate", "coordinate", "comprehend", "verify"],
          answer: 2
        },
        {
            id: "67",
          question: "The team won the match. _______ they broke the school record.",
          options: ["Similarly", "Nevertheless", "Furthermore", "Instead"],
          answer: 2
        },
        {
            id: "68",
          question: "Travelling in a hot dusty train gives me no pleasure. The underlined part of the sentence is:",
          options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Infinitive phrase"],
          answer: 2
        },
        {
            id: "69",
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
            id: "70",
          question: "Identify the type of sentence given below: The caliph noticed the merchant.",
          options: ["Complex", "Compound", "Compound-complex", "Simple"],
          answer: 3
        },
        {
            id: "71",
          question: "Supply the correct synonym for the capitalized word: An ORTHODOX is a _______ person.",
          options: ["clever", "confident", "confused", "conservative"],
          answer: 3
        },
        {
            id: "72",
          question: "Identify the correct indirect form for the sentence given below: The speaker said to the audience, “Will you listen to me?”",
          options: [
            "The speaker asked the audience if they had listened to him.",
            "The speaker asked the audience if they will listen to him.",
            "The speaker asked the audience if they would listen to him.",
            "The speaker asked the audience to listen to him."
          ],
          answer: 2
        },
        {
            id: "73",
          question: "Identify the correct passive form for the sentence given below: The guard did not open the gate.",
          options: [
            "The gate did not open by the guard.",
            "The gate had not been opened by the guard.",
            "The gate was not being opened by the guard.",
            "The gate was not opened by the guard."
          ],
          answer: 3
        },
        {
            id: "74",
          question: "Supply the correct preposition: I was almost back _______ my classroom door when I heard a strange noise.",
          options: ["at", "by", "in", "to"],
          answer: 0
        },
        {
            id: "75",
          question: "Supply the correct form of verb: Farah has planned _______ before the next term.",
          options: ["resign", "resignation", "resigning", "to resign"],
          answer: 3
        },
        {
            id: "76",
          question: "Supply the correct antonym for the capitalized word: Your RECKLESS behavior is not acceptable. You have to be more _______.",
          options: ["careful", "happy", "hardworking", "kind"],
          answer: 0
        },
        {
            id: "77",
          question: "Supply the correct preposition: Have you been in this company _______ six weeks?",
          options: ["during", "for", "just", "since"],
          answer: 1
        },
        {
            id: "78",
          question: "Supply the correct form of verb: Had I known the answer I _______ it.",
          options: ["got written", "have written", "would have written", "wrote"],
          answer: 2
        },
        {
            id: "79",
          question: "Supply the correct form of verb: We had taken our meal before we _______.",
          options: ["had left", "have left", "left", "were leaving"],
          answer: 2
        },
        {
            id: "80",
          question: "Supply the correct antonym for the capitalized word: What can be done to ALLEVIATE the situation?",
          options: ["Aggravate", "Anticipate", "Clear", "Manipulate"],
          answer: 0
        },
        {
            id: "81",
          question: "The underlined part in the sentence given below is an adverbial clause of _______: Although Mehran is hardworking, yet he failed.",
          options: ["Concession", "Condition", "Manner", "Reason"],
          answer: 0
        },
        {
            id: "81",
          question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
          options: [",", "–", ";", ":"],
          answer: 2
        },
        {
            id: "82",
          question: "Supply the correct synonym for the capitalized word: The new government brought STUPENDOUS changes in the economy and _______ its critics.",
          options: ["destroyed", "fooled", "involved", "surprised"],
          answer: 3
        },
        {
            id: "83",
          question: "Identify the figure of speech in the following sentence: He is considered the black sheep of the family.",
          options: ["Alliteration", "Imagery", "Metaphor", "Simile"],
          answer: 2
        },
        {
            id: "84",
          question: "What does the word “SURPLUS” mean?",
          options: ["In excess", "A mathematical term", "Within reach", "Salutation"],
          answer: 0
        },
        {
            id: "85",
          question: "What does the word “ANCESTOR” mean?",
          options: ["Collection of stars", "Branch of astrology", "Forefathers", "Type of receptors"],
          answer: 2
        },
        {
            id: "86",
          question: "What does the word “SPILL” mean?",
          options: ["Coil", "Deliver", "Spoil", "Spread"],
          answer: 3
        },
        {
            id: "87",
          question: "The soup _______ good",
          options: ["Taste", "Tastes", "Is tasting", "Has taste"],
          answer: 1
        },
        {
            id: "88",
          question: "I _______ him for a long time.",
          options: ["Have never known", "Had never knew", "Had never been known", "Would never knew"],
          answer: 0
        },
        {
            id: "89",
          question: "_______ words spoken in earnest will convince him",
          options: ["A few", "The few", "Few", "Fewer"],
          answer: 0
        },
        {
            id: "90",
          question: "He takes _______ his father. Fill in the blank with appropriate preposition.",
          options: ["Up", "Down", "After", "In"],
          answer: 2
        },
        {
            id: "91",
          question: "Choose the CORRECT sentence",
          options: [
            "“The unexamined life”, said Socrates, “is unfit to be lived by man.”",
            "The Inexamined life, said Socrates, “Is unfit to be lived by man”",
            "“The unexamined life said Socrates”, is disfit to be lived by man.",
            "“The disexamined life” said Socrates is unfit to be lived by man."
          ],
          answer: 0
        },
        {
            id: "92",
          question: "Which of the following sentences has correct subject verb agreement?",
          options: [
            "The teacher give the students homework.",
            "The teacher gives the students homework.",
            "The teachers gives the student homework.",
            "The teachers given the student homework."
          ],
          answer: 1
        },
        {
            id: "93",
          question: "The keys were found _______ the drawer where you left them last week.",
          options: ["under", "in", "on", "beside"],
          answer: 1
        },
        {
            id: "94",
          question: "The board of directors expressed _______ disappointment with the financial results.",
          options: ["their", "its", "his or her", "one’s"],
          answer: 1
        },
        {
            id: "95",
          question: "It rained all night; _______, the roads were flooded in the morning.",
          options: ["similarly", "instead", "as a result", "in contrast"],
          answer: 2
        },
        {
            id: "96",
          question: "The manager accepted the cashier’s _______ for coming late.",
          options: ["explanation", "explanation", "explanation", "explanation"],
          answer: 0
        },
      
        // SECTION 3: WRITING SKILLS
        {
            id: "1",
          question: "Choose the word with incorrect spelling:",
          options: ["sagacious", "foremost", "berister", "pneumonia"],
          answer: 2
        },
        {
            id: "2",
          question: "Spot the error in the given sentence: The stories that she makes up for the children ought to be written down and published.",
          options: ["For", "Down", "Ought", "Stories", "And"],
          answer: 2
        },
        {
            id: "3",
          question: "Spot the error in the given sentence: The bushes on the corner make it difficult for the driver to see the traffic approaching from the write.",
          options: ["Write", "For", "Make", "Approaching", "Bushes"],
          answer: 0
        },
        {
            id: "4",
          question: "Punctuate the following sentence: He said will you have time to play regularly",
          options: [
            "He said, ‘Will you have time to play regularly?’",
            "He said, Will you have time to play regularly?",
            "He said, “Will you have time to play regularly.”",
            "He said ‘Will you have time to play regularly’.",
            "He said, ‘Will you have time to play regularly’."
          ],
          answer: 0
        },
        {
            id: "5",
          question: "Correct the spelling & capitalization errors in the paragraph below: It was in korea, june 1953...",
          options: [
            "Korea – June – Strapped – Roadside – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Strapped – Roadside – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Korea – June – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Korea – Strapped – Roadside – Peg – Sitting – Blue – Plaits – Shoulders",
            "Korea – June – Strapped – Pretty – Blue – Plaits – Shoulders"
          ],
          answer: 0
        },
        {
            id: "6",
          question: "Punctuate the given sentence correctly. The teacher asked did you complete your homework",
          options: [
            "The teacher asked, did you complete your homework?",
            "The teacher asked, “Did you complete your homework?”",
            "The teacher asked, “did you complete your homework”.",
            "The teacher asked, did you complete your homework."
          ],
          answer: 1
        },
        {
            id: "7",
          question: "Punctuate the following sentence correctly. Lets meet at Sarahs house after school",
          options: [
            "Let’s meet at Sarah’s house after school.",
            "Let’s meet at Sarahs’ house after school.",
            "Lets meet at Sarah’s house after school.",
            "Let’s meet, at Sarah’s house after school."
          ],
          answer: 0
        },
        {
            id: "8",
          question: "Identify the sentence that contains an ERROR in word order, style, or vocabulary:",
          options: [
            "He has a talent for solving complex problems.",
            "She enjoys reading, writing, and to paint.",
            "The quick brown fox jumps over the lazy dog.",
            "They quickly adapted to the new environment."
          ],
          answer: 1
        },
        {
            id: "9",
          question: "Identify the ERROR in the sentence: The chef quickly prepared, delicious and it served a meal.",
          options: ["Punctuation", "Style", "Vocabulary", "Word order"],
          answer: 3
        },
        {
            id: "10",
          question: "Choose the word with incorrect spelling:",
          options: ["Immigrant", "Ancestors", "Montessori", "Pregmetic"],
          answer: 3
        },
        {
            id: "11",
          question: "Identify the sentence with no spelling error:",
          options: [
            "Rabia completes homework assignments well in time.",
            "Rabia complete homework assignments well in time.",
            "Rabia completes homework assignments well in time.",
            "Rabia completes homework assignments well in time."
          ],
          answer: 0
        },
        {
            id: "12",
          question: "Identify the correct spelling:",
          options: ["Discremination", "Discrimenation", "Discrimination", "Disscrimnation"],
          answer: 2
        },
        {
            id: "13",
          question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
          options: [",", "–", ";", ":"],
          answer: 2
        },
        {
            id: "14",
          question: "Pick the CORRECT option:",
          options: [
            "The supervisor has nor will ever compromise.",
            "The supervisor have nor will ever compromise.",
            "The supervisor has not compromised nor will ever compromise.",
            "The supervisor has nor will ever compromised."
          ],
          answer: 2
        },
        {
            id: "15",
          question: "Choose the sentence that is punctuated correctly:",
          options: [
            "He said to his disciples \"Watch and pray.\"",
            "He said to his disciples, \"Watch and pray.\"",
            "He said to his disciples, \"watch and, pray\"",
            "He said to his disciples' \"watch and pray.\""
          ],
          answer: 1
        },
        {
            id: "16",
          question: "Choose the CORRECT spellings.",
          options: ["Pharaoh", "Pharoah", "Pheroh", "Pheraoh"],
          answer: 0
        },
        {
            id: "17",
          question: "Choose the CORRECT sentence",
          options: [
            "She has beauty, brains and wealth-a rare combination.",
            "She has beauty, brains, and wealth-a rare combination.",
            "She has beauty, brains, and wealth; a rare combination.",
            "She has beauty, brains, and wealth: a rare combination."
          ],
          answer: 0
        },
        {
            id: "18",
          question: "Choose the CORRECT sentence",
          options: [
            "In 1838 Schleiden suggested that all plants were made of cells",
            "In 1838 Schleiden suggest that all plants were made of cells",
            "In 1838 Schleiden suggested that all plant were made of cells",
            "In 1838 Schleiden suggested to all plants were made of cells"
          ],
          answer: 0
        },
        {
            id: "19",
          question: "Choose the CORRECT sentence",
          options: [
            "There's mr. hashim whome they say is the best portrait painter in the town.",
            "There's Mr. Hashim, who they say is the best portrait painter in the town.",
            "There's Mr. Hashim which they say is the portrait painter in the town",
            "There's Mr. Hashim who they say is best portrait painter in the town."
          ],
          answer: 1
        },
        {
            id: "20",
          question: "Choose the CORRECT sentence",
          options: [
            "Gulliver travels was written to Swift.",
            "Gulliver travels was written at Swift.",
            "Gulliver's Travels was written by Swift.",
            "Gullivers' travel was written by Swift"
          ],
          answer: 2
        },
        {
            id: "21",
          question: "Choose the CORRECT sentence",
          options: [
            "“The unexamined life”, said Socrates, “is unfit to be lived by man.”",
            "The Inexamined life, said Socrates, “Is unfit to be lived by man”",
            "“The unexamined life said Socrates”, is disfit to be lived by man.",
            "“The disexamined life” said Socrates is unfit to be lived by man."
          ],
          answer: 0
        },
        {
            id: "22",
          question: "Choose the CORRECT sentence",
          options: [
            "You have often heard of me speaking of my friend Wahaj waheed a barrister here",
            "You have often heard me speak of my friend, Wahaj Waheed, who is a barrister here.",
            "You have often heard me. Speak off my friend, wahaj waheed who is a Barrister here",
            "you have often heard me speak about my friend; wahaj waheed-a barrister hear"
          ],
          answer: 1
        },
        {
            id: "23",
          question: "Choose the CORRECT sentence",
          options: [
            "The first space traveller was Dennis Tito from the United States.",
            "The First Space Traveller was Dennis Tito, from, the United States",
            "The first space traveller was Dennis Tito-from united State",
            "The first space traveler was Dennis Tito, from the United States"
          ],
          answer: 0
        },
        {
            id: "24",
          question: "Choose the CORRECT sentence",
          options: [
            "It was greatly good by you to proposed day's picnic at murree",
            "It was awfully good by you to proposed a day's picnic in Murree.",
            "It was awfully good of you to propose a day's picnic at Murree.",
            "It was very good off you too propose days picnic in Murree"
          ],
          answer: 2
        },
        {
            id: "25",
          question: "Identify the sentence among of the following, which is punctuated correctly?",
          options: [
            "The teaching staff asked the principal what time the meeting would start.",
            "The teaching staff asked the principal: “What time would the meeting start?”",
            "The teaching staff asked the principal, “What time would the meeting start?”",
            "The teaching staff asked the principal: “What time would the meeting start?”"
          ],
          answer: 2
        },
        {
            id: "26",
          question: "Identify the sentence with no spelling error:",
          options: [
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant."
          ],
          answer: 0
        }
      ];
    
    
    
    export const readingAndThinkingSkillPassages = [
      {
        id: "baby-smiles",
        text: `As adults, we may be able to convey our mood by a mere twist of the lips, but the infant throws much more into the battle. When smiling at full intensity, it also kicks and waves its arms about, stretches its hands out towards the stimulus and moves them about, produces babbling voices, tilts back its head, protrudes its chin, leans its trunk forward or rolls it to one side.`
      },
    
      {
        id: "cornea-transplants",
        text: `All walked in from a world of darkness and left in the fullness of light—blind or partially blind patients who received the gift of sight through cornea transplants of eyes.`
      },
    
      {
        id: "bank-savings",
        text: `As the big door swung behind me, I heard the sound of a roar of laughter that went up to the roof of the bank. Since then I use a bank no more. I keep my money in my pocket and my savings in silver dollars in a sock.`
      },
    
      {
        id: "regular-exercise",
        text: `Regular exercise has been shown to improve overall health by reducing the risk of chronic diseases, such as heart disease and diabetes. Additionally, exercise enhances mental well-being by reducing stress, anxiety, and depression. Despite these benefits, many people find it challenging to maintain a consistent exercise routine due to busy schedules and a lack of motivation.`
      },
    
      {
        id: "father-jess",
        text: `“This is the way, Jess,” said my father, pointing with his cane across the deep valley below us. “I want to show you something you’ve not seen for many years!”
    
    “Isn’t it too hot for you to do much walking?” I wiped the streams of sweat from my face to keep them from stinging my eyes. I didn’t want to go with him. I had just finished walking a half mile uphill from my home to his. I had carried a basket of dishes to Mom. There were two slips in the road and I couldn’t drive my car and I knew how hot it was. It was 97 in the shade.
    
    I knew that from January until April my father had gone to eight different doctors. One of the doctors had told him to get a taxi to take him home. But my father walked home five miles across the mountain and told my Mom what the doctor had said.
    
    Forty years ago, a doctor had told him the same thing. And he had lived to raise a family of five children. He had done so much hard work in those years as any man.`
      }
    ];
    
    export const readingAndThinkingSkillQuestions = [
    
      {
        passageId: "baby-smiles",
        question: "Which statement is true according to the passage about baby smiles?",
        options: [
          "Babies rarely smile and often it is difficult to judge their smiles.",
          "A baby’s smile is more vigorous than an adult’s.",
          "In comparison to adults, a baby smiles more quietly.",
          "Babies make babbling noises before they smile."
        ],
        answer: 1
      },
    
      {
        passageId: "cornea-transplants",
        question: "In the line 'All walked in from a world of darkness and left in the fullness of light...', who are being referred to?",
        options: [
          "people from dark regions",
          "those interested in gifts",
          "people with healthy eyesight",
          "those who sought eye transplant"
        ],
        answer: 3
      },
    
      {
        passageId: "bank-savings",
        question: "Where did the writer put his savings in?",
        options: [
          "Pocket",
          "Silver box",
          "Bank",
          "Pocket",
          "Sock"
        ],
        answer: 4
      },
    
      {
        question: "The detective noticed a subtle change in the suspect’s tone when he asked about her whereabouts... What does “subtle” most likely mean?",
        options: [
          "Dramatic",
          "Notable",
          "Obvious",
          "Slight"
        ],
        answer: 3
      },
    
      {
        passageId: "regular-exercise",
        question: "Based on the paragraph about regular exercise, which of the following statements can be inferred?",
        options: [
          "Busy schedules and lack of motivation are barriers to regular exercise.",
          "Chronic diseases cannot be prevented by regular exercise.",
          "Exercise is only beneficial for physical health, not mental health.",
          "People who exercise regularly never experience stress or anxiety."
        ],
        answer: 0
      },
    
      {
        passageId: "father-jess",
        question: "The sentence “It was 97 in the shade.” refers to the _______.",
        options: [
          "age",
          "distance",
          "temperature",
          "year"
        ],
        answer: 2
      },
    
      {
        passageId: "father-jess",
        question: "The narrator has _______ siblings.",
        options: [
          "four",
          "five",
          "six",
          "no"
        ],
        answer: 0
      },
    
      {
        question: "“She was elated when she got first position in exams.” What is the meaning of “elated” in this sentence?",
        options: [
          "Disappointed",
          "Worried",
          "Excited",
          "Mad"
        ],
        answer: 2
      },
    
      {
        question: "The writer has unearthed serious irregularities in the entire project. The word ‘unearthed’ in this sentence means:",
        options: [
          "written",
          "mentioned",
          "exposed",
          "stated"
        ],
        answer: 2
      },
    
      {
        question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of the underlined word from the given sentence.",
        options: [
          "Anxious",
          "Resilient",
          "Angry",
          "Confused"
        ],
        answer: 1
      },
    
      {
        question: "The old man was feeble, barely able to walk. The word “feeble” means:",
        options: [
          "Healthy",
          "Weak",
          "Strong",
          "Fat"
        ],
        answer: 1
      },
    
      {
        question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
        options: [
          "Joyful",
          "Weepy",
          "Monotonous",
          "Humorous"
        ],
        answer: 1
      },
    
      {
        question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means:",
        options: [
          "relate",
          "coordinate",
          "comprehend",
          "verify"
        ],
        answer: 2
      }
    
    ];
    export const logicalReasoningQuestions: Question[] = [
        // BUMHS 2025 Logical Reasoning
            {
              id: "bumhs-2025-172",
              question: "Prohibiting smoking in public areas will reduce the occurrence of lung disease.\n\nWhat assumption is present here?",
              options: [
                "Banning smoking has no impact on lung disease rates.",
                "Hence all people live in public areas therefore, banning smoking will eliminate lung disease.",
                "Smoking is the sole cause of lung disease.",
                "Smoking in public places plays a major role in causing lung disease."
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-173",
              question: "Consider the pattern in the given picture. If the pattern is continued, then the image in box 12 will resemble the image No.?",
              image: "/images/logical-reasoning/lr-1-q.png",
              options: [
                "1",
                "2",
                "3",
                "4"
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-174",
              question: "The age of a man is twice that of his daughter. If the man is 36 years old, what was the daughter’s age 4 years ago?",
              options: [
                "14 years",
                "18 years",
                "20 years",
                "10 years"
              ],
              answer: 0
            },
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
              id: "bumhs-2025-176",
              question: "If a person earns Rs. 1000 in the first week and their income doubles each week, how much will they earn in the 4th week?",
              options: [
                "Rs. 4000",
                "Rs. 3000",
                "Rs. 8000",
                "Rs. 16000"
              ],
              answer: 2
            },
            {
              id: "bumhs-2025-177",
              question: "What would be the result of: 10 – 3 × 2 ?",
              options: [
                "4",
                "6",
                "14",
                "17"
              ],
              answer: 0
            },
            {
              id: "bumhs-2025-178",
              question: "A man walks 12 meters north, then turns right and walks 8 meters, then turns right again and walks 12 meters. He finally turns left and walks 5 meters.\n\nWhat is the distance between his starting and ending point?",
              options: [
                "5m",
                "8m",
                "13m",
                "17m"
              ],
              answer: 2
            },
            {
              id: "bumhs-2025-179",
              question: "In a certain university, 25% candidates failed university admission test. Of those who passed the test, 80% got the admission in the university. If 1800 got admission, how many candidates appear in the test?",
              options: [
                "9000",
                "6000",
                "5000",
                "3000"
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-180",
              question: "CAT is to DOG, as MOUSE is to:",
              options: [
                "RAT",
                "CAT",
                "DOG",
                "CHEESE"
              ],
              answer: 0
            },
          
          // IBA SINDH 2025 MDCAT Logical Reasoning
            {
              id: "iba-sindh-2025-172",
              question: "If A is mother of B and C is child of B, then what is the relationship between A and C?",
              options: [
                "Aunt",
                "Grandmother",
                "Sister",
                "Cousin"
              ],
              answer: 1
            },
            {
              id: "iba-sindh-2025-173",
              question: "Which number comes in the missing place?\n\n120, 119, 117, 114, 110, ___",
              options: [
                "95",
                "100",
                "105",
                "107"
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
              id: "iba-sindh-2025-175",
              question: "A new virus is spreading rapidly in the city. The government should impose temporary travel restrictions. What is true about this course of action?",
              options: [
                "Travel restrictions help control the virus spread",
                "The government should promote travel to support the economy",
                "Travel restrictions do not affect virus transmission",
                "People should disregard government advice"
              ],
              answer: 0
            },
            {
              id: "iba-sindh-2025-176",
              question: "A tank can hold 240 liters of water. Currently, water is filled to one third of its capacity. How much more water can it hold?",
              options: [
                "60 liters",
                "80 liters",
                "100 liters",
                "160 liters"
              ],
              answer: 3
            },
            {
              id: "iba-sindh-2025-177",
              question: "M, N, P, Q, S, ??",
              options: [
                "T",
                "U",
                "V",
                "W"
              ],
              answer: 0
            },
            {
              id: "iba-sindh-2025-178",
              question: "If Amna is older than Muneeb, and Muneeb is younger than Jaffar, then Amna is:",
              options: [
                "Amna is older than Jaffar",
                "Amna is younger than Jaffar",
                "Amna and Jaffar are the same age",
                "There is not enough information to say"
              ],
              answer: 3
            },
            {
              id: "iba-sindh-2025-179",
              question: "Statements: All melons are apples. No apples are mangoes.\n\nWhich of the following conclusions about the given statements are true?\n\nConclusion I: All melons are mangoes.\nConclusion II: Apples are not mangoes.",
              options: [
                "Only I",
                "Only II",
                "Both I and II",
                "Neither I nor II"
              ],
              answer: 1
            },
            {
              id: "iba-sindh-2025-180",
              question: "In a family of six members:\n\n• P is the father of Q\n• R is the mother of Q\n• S is the sister of Q\n• T is the brother of P\n\nWho is the uncle of Q?",
              options: [
                "P",
                "R",
                "S",
                "T"
              ],
              answer: 3
            },
          
          // KMU MDCAT 2025 Logical Reasoning
            {
              id: "kmu-2025-172",
              question: "A medication dose starts at 100mg and halves each day. What will be the dose on day 4?",
              options: [
                "12.5mg",
                "25mg",
                "30mg",
                "50mg"
              ],
              answer: 0
            },
            {
              id: "kmu-2025-173",
              question: "A library has 4 books on Shelf A, and 8 books on Shelf B. Some books are removed from Shelf B such that both shelves now have exactly the same number of books. How many books were removed from Shelf B?",
              options: [
                "2 books",
                "3 books",
                "4 books",
                "6 books"
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
              id: "kmu-2025-175",
              question: "How is Ali related to Mustafa? If all says, “Mustafa’s mother is the only child of my grandmother.”",
              options: [
                "Brother",
                "Cousin",
                "Uncle",
                "Father"
              ],
              answer: 0
            },
            {
              id: "kmu-2025-176",
              question: "A mobile company is deciding whether to collect personal user data for improving advertisement. Which of the following is a moral argument against collecting the data?",
              options: [
                "Users may lose trust in the company, which could hurt profits",
                "It is wrong to collect data without users’ clear and informed consent",
                "Competitors already collect more data, and we need to stay competitive",
                "More data means more accurate advertising, which boosts sales"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-177",
              question: "A father is 5 years older than twice his son’s age. If the son is 12, what is the father’s age?",
              options: [
                "28 years",
                "29 years",
                "30 years",
                "32 years"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-178",
              question: "Which number comes in the missing place? 162, 146, 132, ____, 200, 180,",
              options: [
                "118",
                "120",
                "126",
                "122"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-179",
              question: "If 5 boxes of soap weigh 75 kilos and each box when empty weighs 3 kilos. What is total weight of the soaps?",
              options: [
                "15",
                "30",
                "45",
                "60"
              ],
              answer: 3
            },
            {
              id: "kmu-2025-180",
              question: "Consider the sequence: 64, 32, 16, 8, … What is the 10th term of this sequence?",
              options: [
                "2",
                "4",
                "1/4",
                "1/8"
              ],
              answer: 3
            },
          
          // SZABMU MDCAT 2025 Logical Reasoning
            {
              id: "szabmu-2025-172",
              question: "An outbreak of a corona disease is reported in the city. What should be the first course of action?",
              options: [
                "Develop a vaccination plan.",
                "Conduct research on the disease.",
                "Implement quarantine measures.",
                "Inform the public by using all means."
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-173",
              question: "Find the next number: 5, 11, 23, 47, 95, ____?",
              options: [
                "190",
                "191",
                "192",
                "193"
              ],
              answer: 1
            },
            {
              id: "szabmu-2025-174",
              question: "Which number comes in the missing place?\n\n1, 3, 7, 15, 31, ____",
              options: [
                "61",
                "63",
                "65",
                "67"
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
              id: "szabmu-2025-176",
              question: "What is the primary difference between hypothesis and a theory?",
              options: [
                "A hypothesis is a proven fact, while a theory is an unproven data.",
                "A hypothesis is a specific prediction, while a theory is a broad explanation.",
                "A hypothesis is a qualitative statement, while a theory is a quantitative statement.",
                "A hypothesis is a tentative explanation, while a theory is a well-substantiated explanation."
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-177",
              question: "What comes next? ZX, WU, TR, QO, ____",
              options: [
                "NL",
                "ZN",
                "NM",
                "KH"
              ],
              answer: 0
            },
            {
              id: "szabmu-2025-178",
              question: "In a row of students, a student is at 13th position from the left end and at 20th position from the right end. How many students are there in the row?",
              options: [
                "30",
                "31",
                "32",
                "33"
              ],
              answer: 2
            },
            {
              id: "szabmu-2025-179",
              question: "A is older than B but younger than F. C is younger than B but older than D. Who is the youngest of them?",
              options: [
                "A",
                "B",
                "C",
                "D"
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-180",
              question: "A hiker climbed to a higher altitude, where he felt the air pressure was lower as compared to the lower altitude. What is the likely effect?",
              options: [
                "The hiker felt more energetic.",
                "The hiker felt no difficulty in breathing.",
                "The hiker might experience altitude sickness.",
                "The hiker felt healthier and fresh."
              ],
              answer: 2
            },
          
          // UHS MDCAT 2025 Logical Reasoning
            {
              id: "uhs-2025-172",
              question: "What will come next? 1, 4, 2, 5, 3, 6, 4, 7, ?",
              options: [
                "5",
                "6",
                "7",
                "8"
              ],
              answer: 0
            },
            {
              id: "uhs-2025-173",
              question: "All daffodils are plants. All plants are living things. Some living things are real.\n\nConclusions:\nI. All daffodils are living things.\nII. Some living things are flowers.\nIII. All daffodils are real.\n\nWhich conclusions follow?",
              options: [
                "Only I",
                "Only I and II",
                "Only II and III",
                "All follow"
              ],
              answer: 0
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
              id: "uhs-2025-175",
              question: "How many trees are in the orchard?\n\nWhich of the statements below are needed to sufficiently answer this question?\ni. Ibrahim is a farmer and looks after half of the trees in the orchard\nii. 300 trees in the orchard are under Ibrahim’s care",
              options: [
                "i is enough",
                "ii is enough",
                "both i and ii are needed",
                "neither i or ii are sufficient"
              ],
              answer: 2
            },
            {
              id: "uhs-2025-176",
              question: "P and Q are M’s parents. M and N are siblings. Q is N’s mother. What is P to M?",
              options: [
                "Mother",
                "Father",
                "Sister",
                "Brother"
              ],
              answer: 1
            },
            {
              id: "uhs-2025-177",
              question: "Asad bought 50 packets of biscuits for the price of Rs. 500; whereas Anum bought 25 packets of chips for the price of Rs.1000. While comparing the prices of packets of biscuits and packet of chips, which of the following statements is correct?",
              options: [
                "Price of 4 packets of biscuits is equal to the price of 1 packet of chips",
                "Price of 1 packet of biscuits is equal to the price of 4 packets of chips",
                "Price of 2 packets of biscuits is equal to the price of 1 packet of chips",
                "Price of 1 packet of biscuits is equal to the price of 2 packets of chips"
              ],
              answer: 0
            },
            {
              id: "uhs-2025-178",
              question: "The virus spreads rapidly in the town. It infected the people – First day: 8, Second day: 16, Third day: 32. What will the number of people infected on the next day?",
              options: [
                "44 people",
                "56 people",
                "64 people",
                "74 people"
              ],
              answer: 2
            },
            {
              id: "uhs-2025-179",
              question: "Which of the following is a result of poor design that could cause an accident in the workplace?",
              options: [
                "Equipment failure",
                "Slippery surfaces",
                "Insufficient lighting",
                "Unplanned workspace layout"
              ],
              answer: 3
            },
            {
              id: "uhs-2025-180",
              question: "Which of the following is the main cause of accidents involving equipment?",
              options: [
                "Overconfidence",
                "Insufficient maintenance",
                "Fatigue",
                "Poor training"
              ],
              answer: 1
            },
            // 1. IBA DUHS Sindh MDCAT 2024 Logical Reasoning
          {
            id: "iba-duhs-2024-195",
            question: "Read the statement given, assume it is true, and select the correct course of action:\n\nA public sector television channel is worried about the quality of its programs and, considering the competition from several private sector television channels, has decided to provide some incentives in order to attract talent for its programs.\n\nCourse of action:\na) Public sector television channel has decided to revise its fee structure for artists.\nb) It should not revise its fee structure until the private sector channels do so.",
            options: [
              "Both A and B follow",
              "Only A follows",
              "Only B follows",
              "Neither A nor B follows",
              "Either A or B follows"
            ],
            answer: 1
          },
          {
            id: "iba-duhs-2024-196",
            question: "Parveen, Qadir, Rehan, Salim, and Tehmina are five people in a family. If Parveen is the daughter of Qadir, Qadir is the son of Rehan, Rehan is the father of Salim, while Tehmina is the daughter of Parveen, then which of the following is true?",
            options: [
              "Rehan is the uncle of Parveen",
              "Qadir is the grandfather of Parveen",
              "Qadir is the daughter of Salim",
              "Parveen is the sister of Tehmina",
              "Parveen and Rehan are sisters"
            ],
            answer: 0
          },
          {
            id: "iba-duhs-2024-197",
            question: "Look at the numbers below. Identify the pattern and logically deduce the correct option that should follow:\n\n1, 4, 9, 16, ____",
            options: [
              "54",
              "36",
              "49",
              "25"
            ],
            answer: 3
          },
          {
            id: "iba-duhs-2024-198",
            question: "Read the two statements given and select the correct option:\n\nA. Advances in cancer chemotherapy have made more drugs available today.\nB. A large number of cancer patients now have a better outcome.",
            options: [
              "Both statements A and B are effects of some common cause.",
              "Statement A is the cause and statement B is the effect.",
              "Both statements A and B are effects of independent causes.",
              "Statement B is the cause and statement A is the effect.",
              "Both statements A and B are independent causes."
            ],
            answer: 1
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
            id: "iba-duhs-2024-200",
            question: "Look at the alphabets below. Identify the pattern and choose the correct option that should follow next:\n\nVSA, WRD, XQG, YPJ, ____",
            options: [
              "VTC",
              "TLK",
              "MOZ",
              "ZOM",
              "ZNE"
            ],
            answer: 3
          },
        
        // 2. KMU MDCAT 2024 (Code A) Logical Reasoning
          {
            id: "kmu-2024-195",
            question: "Find out the missing term in the sequence: 15, 14, 12, 9?",
            options: [
              "5",
              "6",
              "7",
              "8"
            ],
            answer: 0
          },
          {
            id: "kmu-2024-196",
            question: "All omnivores are herbivores. No herbivores are carnivores. Some carnivores are humans. Which of the following conclusions are TRUE?\n\nCONCLUSIONS:\nI. Some humans are carnivores.\nII. No carnivores are omnivores.\nIII. Some omnivores are carnivores.",
            options: [
              "I and II",
              "I and III",
              "II and III",
              "III"
            ],
            answer: 0
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
            id: "kmu-2024-198",
            question: "A store offers a 10% discount on all items. After applying the discount, the price of an item is Rs. 450. What was the original price of the item?",
            options: [
              "Rs. 490",
              "Rs. 495",
              "Rs. 500",
              "Rs. 505"
            ],
            answer: 2
          },
          {
            id: "kmu-2024-199",
            question: "I went 10m to the East from my house, then turned north and walked another 15m, and then I turned west and covered 12m, and then turned south and covered 15m. How far am I from my house?",
            options: [
              "0 m",
              "1 m",
              "2 m",
              "3 m"
            ],
            answer: 2
          },
          {
            id: "kmu-2024-200",
            question: "If a>b, b>c, and d>a then?",
            options: [
              "b<d",
              "a<c",
              "a>d",
              "c>d"
            ],
            answer: 0
          },
        
        // 3. SZABMU 2024 (GREEN) Logical Reasoning
          {
            id: "szabmu-2024-195",
            question: "Who will be the new chairperson of math department?\n\n(The high school math department needs to appoint a new chairperson on the basis of seniority. Ms. Madiha is less senior than Mr. Tanvir but more than Ms. Aiyza. Mr. Rehan is more senior than Ms. Madiha but less than Mr. Tanvir. Mr. Tanvir doesn’t want the job.)",
            options: [
              "Mr. Rehan",
              "Mr. Tanvir",
              "Ms. Aiyza",
              "Ms. Madiha"
            ],
            answer: 0
          },
          {
            id: "szabmu-2024-196",
            question: "What are the missing alphabets in the sequence EZFA, GBHY, IXJC, ____?",
            options: [
              "KDLW",
              "KLDW",
              "KWLD",
              "LDKW"
            ],
            answer: 0
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
            id: "szabmu-2024-198",
            question: "In a group of 100 players, 70 play football, 50 play hockey, and 55 play cricket. 30 play both hockey and cricket, 25 play both football and hockey and 20 play all three games. How many players play both football and cricket?",
            options: [
              "25",
              "30",
              "35",
              "40"
            ],
            answer: 3
          },
          {
            id: "szabmu-2024-199",
            question: "A customer has filed a complaint about your product, stating it does NOT meet his expectation. What is your course of action?",
            options: [
              "Argue with the customer about the validity of their complaint",
              "Customer complaint is not filed within the time limit",
              "Offer a replacement",
              "Tell the customer it’s his fault for not using the product correctly"
            ],
            answer: 2
          },
          {
            id: "szabmu-2024-200",
            question: "Statements:\nI. Large numbers of people have fallen sick after consuming sweets from a particular shop in the locality.\nII. Major part of the locality is flooded and has become inaccessible.",
            options: [
              "Statement I is the cause and statement II is its effect.",
              "Statement II is the cause and statement I is its effect.",
              "Both the statements I and II are independent causes.",
              "Both the statements I and II are effects of independent causes."
            ],
            answer: 3
          },
        
        // 4. UHS MDCAT 2024 Logical Reasoning
          {
            id: "uhs-2024-195",
            question: "Statement I: The government has increased the taxes on all businesses in Pakistan.\nStatement II: Many small businesses will have to close their operations in Pakistan.",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-196",
            question: "Read the passage and the following statements below. Then choose the correct option, basing your answer only on the information provided.\n\nPakistan is rich in wildlife and culture. It is home to many sorts of wildlife, from the Ibex to the Indus River Dolphin; and people from most countries in the world have made their home here.\n\nSTATEMENTS:\nI. Pakistan is a rich country.\nII. People from all nationalities of the world live in Pakistan.\nIII. Pakistan is home to at least one dolphin species.",
            options: [
              "Only III is correct",
              "Only I and II are correct",
              "Only I and III are correct",
              "Only II and III are correct"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-197",
            question: "Observe the pattern and select the next term, in the sequence: JEQ, HEO, FEM, ____",
            options: [
              "GFN",
              "DEK",
              "GEL",
              "DFK"
            ],
            answer: 1
          },
          {
            id: "uhs-2024-198",
            question: "Read the following and choose the correct answer:\n\n“X, Y and Z are three whole numbers less than 24 but greater than 11. X is the smallest prime number. Y is the largest number divisible by 3. Z is the smallest number divisible by 11?”",
            options: [
              "X is 13, Y is 24, Z is 11",
              "X is 13, Y is 21, Z is 22",
              "X is 11, Y is 21, Z is 11",
              "X is 11, Y is 24, Z is 22"
            ],
            answer: 1
          },
          {
            id: "uhs-2024-199",
            question: "Read the following and choose the correct answer:\n\n“P, Q and R are one-digit, non-negative numbers. P is the smallest even number. Q is the largest odd number. R is 5.”",
            options: [
              "P + Q + R = 16",
              "P + Q + R = 12",
              "(Q + R) × P = 30",
              "(Q + R) × P = 8"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-200",
            question: "All hammers are tools. Some tools are useless things. All useless things are trash. Which of the following conclusions is NECESSARILY TRUE given only the information above?\n\nCONCLUSIONS:\nI. Some hammers are trash\nII. Some tools are trash\nIII. All useless things are tools.",
            options: [
              "I",
              "II",
              "III",
              "I & III"
            ],
            answer: 1
          },
        
        // 5. BUMHS 2024 (Yellow) Logical Reasoning
          {
            id: "bumhs-2024-195",
            question: "Statements:\nI. The university authority has instructed all the colleges under its jurisdiction to ban use of all phones inside the college premises.\nII. Majority of the teachers of the colleges signed a joint petition to the university complaining the disturbances caused by cell phone ring-tones inside the classrooms.\n\nWhich of the following is correct?",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
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
          },
          {
            id: "bumhs-2024-197",
            question: "Statement 1: A is the brother of B\nStatement 2: B is the daughter of C.\n\nBased on those statements, how is A related to C?",
            options: [
              "Brother",
              "Son",
              "Father",
              "Daughter"
            ],
            answer: 1
          },
          {
            id: "bumhs-2024-198",
            question: "Statement: The vegetable traders feel that the prices of onion will again go up.\n\nCourses of Action:\nI. The Government should purchase and store sufficient quantity of onion in advance to control prices.\nII. The Government should make available network of fair price shops for the sale of onions during the period of shortage.",
            options: [
              "Only I follows",
              "Only II follows",
              "Both I and II follow",
              "Neither I nor II follows"
            ],
            answer: 2
          },
          {
            id: "bumhs-2024-199",
            question: "Statements:\nI. Kenya has surpassed the value of tea exports this year due to an increase in demand for quality tea in the Foreign market.\nII. There is an increase in demand of coffee in the local market during the last two years.\n\nWhich of the following is correct?",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
            ],
            answer: 2
          },
          {
            id: "bumhs-2024-200",
            question: "If the first two statements are true, the third statement is:\nI. Maria runs faster than Amna.\nII. Laiba runs faster than Maria.\nIII. Amna runs faster than Laiba.",
            options: [
              "True",
              "False",
              "Uncertain"
            ],
            answer: 1
          }
          ];