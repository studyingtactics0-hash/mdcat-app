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
        "A covalently bonded organic ion with protein part of an enzyme is termed as __.",
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
      id: "nums-2026-bio-034",
      question: "An enzyme which requires a cofactor to become active is called:",
      options: ["Apoenzyme", "Holoenzyme", "Prosthetic group", "Co-enzyme"],
      answer: 0,
    },
    {
      id: "nums-2026-bio-035",
      question: "Which statement best describes competitive inhibitors?",
      options: ["Denature enzyme permanently", "Used as drugs", "Prevent enzyme product complex", "Alter the shape of enzymes"],
      answer: 1,
    },
    {
      id: "nums-2026-bio-054",
      question: "Which set of digestive enzymes play a vital role in breakdown of protein?",
      options: ["Pepsin, maltase, erepsin", "Pepsin, trypsin, amylase", "Pepsin, trypsin, erepsin", "Pepsin, amylase, lipase"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-036",
      question: "Due to snake bite a person’s heart stops working. Which type of venom will be found in his body?",
      options: ["Hemotoxic", "Hepatotoxic", "Neurotoxic", "Cytotoxic"],
      answer: 2,
    },
    {
      id: "nums-2026-bio-037",
      question: "Identify the enzyme which shows absolute specificity:",
      options: ["Carbonic anhydrase", "Hexokinase", "Urease", "Isomerase"],
      answer: 2,
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
      answer: 0,
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
      answer: 0
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
      id: "uhs-26-bio-019",
      question: "Which type of enzyme inhibition can be overcome by increasing substrate concentration?",
      options: [
        "Non-competitive inhibition",
        "Competitive inhibition",
        "Irreversible inhibition",
        "Allosteric inhibition",
      ],
      answer: 1,
    },
    {
      id: "uhs-26-bio-038",
      question: "__________ can denature enzymes resulting in slow catalysis.",
      options: [
        "Low temperature",
        "High temperature",
        "High water content",
        "Low water content",
      ],
      answer: 1,
    },
    {
      id: "uhs-26-bio-071",
      question: "In an experiment, increasing substrate concentration increases the rate of reaction until it reaches a steady state. At this stage, which of the following changes would most effectively increase the rate of reaction?",
      options: [
        "Increasing substrate concentration",
        "Decreasing temperature",
        "Increasing enzyme concentration",
        "Adding a non-competitive inhibitor",
      ],
      answer: 2,
    },
    {
      id: "szambu-2026-bio-047",
      question: "Which of the following models describe how enzymes interact with their substrate?",
      options: [
        "Induced fit model",
        "Lock and Key model",
        "Fluid mosaic model",
        "Sliding filament model"
      ],
      answer: 0,
      explanation: "The induced fit model (proposed by Daniel Koshland) accurately describes enzyme-substrate interaction, showing that the active site undergoes a slight conformational change upon substrate binding to achieve optimal catalysis."
    },
    {
      id: "szambu-2026-bio-048",
      question: "Which of the following truly describes the Activation Energy of an Enzyme?",
      options: [
        "Total energy of the reaction system",
        "Minimum energy required to start a chemical reaction",
        "Energy lost during the chemical reaction",
        "Energy difference between the chemical potential energy of the reactants and the products"
      ],
      answer: 1,
      explanation: "Activation energy is the minimum amount of energy required to bring reactants to the transition state so that chemical bonds can break and reform to initiate a reaction."
    },
    {
      id: "szambu-2026-bio-049",
      question: "How does an enzyme increase the rate of a reaction?",
      options: [
        "By bringing the reaction molecules into precise orientation",
        "By increasing the rate of random collisions of molecules",
        "By shifting the point of equilibrium of the reaction",
        "By supplying the energy required to start the reaction"
      ],
      answer: 0,
      explanation: "Enzymes bind substrates at their active sites in a precise spatial orientation and stabilize the transition state, thereby lowering the activation energy barrier without altering equilibrium."
    },
    {
      id: "szambu-2026-bio-050",
      question: "Naturally, enzymes increase reaction rate without:",
      options: [
        "Converting substrate into products",
        "Being consumed in reaction",
        "Lowering its activation energy",
        "Forming enzyme-substrate complex"
      ],
      answer: 1,
      explanation: "As biological catalysts, enzymes speed up biochemical reactions by forming a temporary enzyme-substrate complex and lowering activation energy, emerging chemically unchanged and unconsumed at the end."
    },
    {
      id: "szambu-2026-bio-057",
      question: "All enzymes are ____ proteins?",
      options: [
        "Globular & insoluble in water",
        "Globular & soluble in water",
        "Fibrous & insoluble in water",
        "Fibrous & soluble in water"
      ],
      answer: 1,
      explanation: "Proteinaceous enzymes possess a compact, spherical tertiary conformation (globular proteins) with hydrophilic R groups oriented outward, making them soluble in water and cellular fluids."
    },
    {
      id: "szambu-2026-bio-058",
      question: "A marked increase in temperature reduces the rate of the enzyme catalyzed reaction by ____.",
      options: [
        "Decreasing the kinetic energy of substrate",
        "Changing the pH of reaction media",
        "Destroying the tertiary structure of enzyme",
        "Decreasing the activation energy"
      ],
      answer: 2,
      explanation: "Excessive heat disrupts the weak hydrogen bonds, ionic interactions, and hydrophobic forces maintaining the enzyme's 3D tertiary structure, causing denaturation and loss of active site shape."
    },
    {
      id: "kmu-2026-bio-026",
      question: "Which characteristic distinguishes enzymes during a chemical reaction?",
      options: [
        "They change the final product",
        "They slow down metabolic steps",
        "They remain chemically unchanged",
        "They become part of reaction product"
      ],
      answer: 2,
      explanation: "As biological catalysts, enzymes accelerate the rate of biochemical reactions by lowering activation energy without being consumed or chemically altered at the end of the reaction."
    },
    {
      id: "kmu-2026-bio-027",
      question: "According to the lock and key hypothesis, the active site in enzyme action is regarded as ______ structure.",
      options: [
        "Rigid",
        "Flexible",
        "Dynamic",
        "Elastic"
      ],
      answer: 0,
      explanation: "Proposed by Emil Fischer in 1894, the lock and key hypothesis states that the active site of an enzyme is a rigid, preformed structure into which only a specific complementary substrate can fit."
    },
    {
      id: "kmu-2026-bio-028",
      question: "The enzyme pepsin shows maximum activity at pH:",
      options: [
        "1.5 – 1.6",
        "4.5 – 4.7",
        "7.8 – 8.7",
        "8.7 – 9.1"
      ],
      answer: 0,
      explanation: "Pepsin is a proteolytic enzyme secreted in the acidic environment of the stomach (gastric juice), where it exhibits optimum catalytic activity at a highly acidic pH of about 1.5 to 1.6 (or ~2.0)."
    },
    {
      id: "kmu-2026-bio-029",
      question: "pH affects the activity of an enzyme by causing the:",
      options: [
        "Ionization of an active site",
        "Increase in the activation energy",
        "Removal of prosthetic group from enzyme",
        "Decreasing the temperature of reaction mixture"
      ],
      answer: 0,
      explanation: "Changes in pH alter the concentration of H⁺ ions, which affects the ionization state of acidic and basic amino acid side chains (R-groups) at the active site as well as the substrate, disrupting substrate binding and catalysis."
    },
    {
      id: "kmu-2026-bio-030",
      question: "Which molecule has a structure similar to the normal substrate?",
      options: [
        "Competitive inhibitor",
        "Non-competitive inhibitor",
        "Heavy metal ion",
        "Cyanide"
      ],
      answer: 0,
      explanation: "A competitive inhibitor closely resembles the three-dimensional structure of the normal substrate, allowing it to compete directly with the substrate for binding to the enzyme's active site."
    }
  ];