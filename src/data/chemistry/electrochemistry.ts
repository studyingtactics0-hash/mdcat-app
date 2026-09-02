export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const electrochemistryQuestions: Question[] = [
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
      }
  ];