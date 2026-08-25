export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const electronicsQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: [
        "p-n diode",
        "light emitting diode",
        "photo diode",
        "All of the given options"
      ],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode converts light energy directly into electrical energy, generating an output voltage across its electrodes."
    },
    {
      id: "bumhs-2024-phys-137",
      question: "The circuit required for change of AC voltage to DC voltage is called:",
      options: [
        "Rectifier",
        "Amplifier",
        "Detector",
        "Emitter"
      ],
      answer: 0,
      explanation: "A rectifier is an electrical circuit that converts alternating current (AC), which periodically reverses direction, to direct current (DC), which flows in only one direction."
    },
    {
      id: "bumhs-2024-phys-175",
      question: "Which of the following is not the basic operation of Boolean variables:",
      options: [
        "Yes operation",
        "NOT operation",
        "AND operation",
        "OR operation"
      ],
      answer: 0,
      explanation: "The three primary, basic operations in Boolean algebra are AND, OR, and NOT. 'Yes operation' is not a standard Boolean logic operation."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-148",
      question: "For a diode, the depletion region of a PN junction has:",
      options: [
        "Free positive charges",
        "Free negative charges",
        "Positive and negative ions",
        "No free charges"
      ],
      answer: 3,
      explanation: "The depletion region contains fixed immobile donor and acceptor ions but lacks mobile/free charge carriers (electrons and holes)."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-84",
      question: "In a full-wave rectifier using two diodes, the diodes D₁ and D₂ operate:",
      options: [
        "Simultaneously during both half-cycles",
        "In alternate switching mode",
        "Only when both ends of transformer are positive",
        "Only in reverse bias condition"
      ],
      answer: 1,
      explanation: "In a center-tapped full-wave rectifier, D₁ conducts during the positive half-cycle while D₂ is reverse-biased, and D₂ conducts during the negative half-cycle while D₁ is reverse-biased."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-168",
      question: "When the PN junction is reverse-biased, its reverse current is of the order of:",
      options: [
        "Gigaamperes",
        "Kiloamperes",
        "Megaamperes",
        "Microamperes"
      ],
      answer: 3,
      explanation: "Reverse saturation current in a silicon PN junction is extremely small, typically on the order of microamperes (µA) or nanoamperes (nA), caused by minority charge carriers."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-155",
      question: "A reverse-biased semiconductor diode acts as:",
      options: [
        "Rectifier",
        "On switch",
        "Inverter",
        "Off switch",
        "Amplifier"
      ],
      answer: 3,
      explanation: "When reverse-biased, a diode presents very high resistance and blocks current flow, functioning as an open/off switch."
    },
    {
      id: "siba-phy-24-165",
      question: "In N-type semiconductor, the minority carriers are:",
      options: [
        "Photons",
        "Electrons",
        "Protons",
        "Holes",
        "Neutrons"
      ],
      answer: 3,
      explanation: "In N-type semiconductors, free electrons are the majority charge carriers, while holes are the minority charge carriers."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-146",
      question: "The current in forward biased PN junction is mainly due to:",
      options: [
        "Majority carriers",
        "Minority carriers",
        "leakage carrier",
        "Thermionic emission"
      ],
      answer: 0,
      explanation: "Forward bias lowers the potential barrier, enabling majority carriers (electrons from N-side and holes from P-side) to cross the junction."
    },
    {
      id: "szambu-2025-phys-156",
      question: "The unit of RC in case of charging a capacitor is",
      options: [
        "Farad",
        "Seconds",
        "Ohm",
        "Volt"
      ],
      answer: 1,
      explanation: "The product of resistance R (Ω = V/A) and capacitance C (F = C/V = A·s/V) yields units of seconds (s), representing the RC time constant."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-155",
      question: "Diode is a/an ________ device, which can be used for rectification process.",
      options: [
        "insulating",
        "perfect conducting",
        "perfect insulating",
        "semiconductor"
      ],
      answer: 3,
      explanation: "A PN junction diode is a semiconductor device that allows current to flow primarily in one direction, enabling rectification."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-164",
      question: "The conversion of A.C. into D.C. is called rectification and circuit is called rectifier. Which component of electronics acts as a rectifier?",
      options: [
        "Diode",
        "Transistor",
        "Transformer",
        "Inductor"
      ],
      answer: 0,
      explanation: "A semiconductor diode permits current flow in only one direction, making it the fundamental component used for rectification."
    },
    {
      id: "uhs-phys-24-165",
      question: "Full wave rectification is given by",
      options: [
        "One diode connected in bridge type arrangements",
        "Two diodes connected in bridge type arrangements",
        "Three diodes connected in bridge type arrangement",
        "Four diodes connected in bridge type arrangements"
      ],
      answer: 3,
      explanation: "A full-wave bridge rectifier utilizes four diodes arranged in a bridge configuration to convert both halves of the AC cycle to DC."
    },
    {
      id: "uhs-phys-24-166",
      question: "A diode characteristic curve is a plot between",
      options: [
        "Current and time",
        "Voltage time",
        "Voltage and current",
        "Reverse voltage forward voltage"
      ],
      answer: 2,
      explanation: "The I-V characteristic curve of a diode plots current (I) against applied potential difference/voltage (V)."
    }
  ];