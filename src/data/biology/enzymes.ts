export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const enzymesQuestions: Question[] = [
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
  ];