export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const bioenergeticsQuestions: Question[] = [
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
      answer: 1,
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
      }
  ];