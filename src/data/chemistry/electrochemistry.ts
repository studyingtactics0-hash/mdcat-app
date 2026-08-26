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
    }
  ];