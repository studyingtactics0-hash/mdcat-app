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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "In a semiconductor, the forbidden energy gap is of the order of:",
        options: [
          "1 MeV",
          "1 eV",
          "0.1 eV",
          "10 eV"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "The process of adding impurities to a pure semiconductor is called:",
        options: [
          "Doping",
          "Annealing",
          "Diffusion",
          "Depletion"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "In a p-type semiconductor, the majority charge carriers are:",
        options: [
          "Electrons",
          "Protons",
          "Holes",
          "Neutrons"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-4",
        question: "The depletion region of a p-n junction is so named because it is depleted of:",
        options: [
          "Atoms",
          "Mobile charge carriers",
          "Impurities",
          "Potential barrier"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "When a p-n junction is forward biased, the width of the depletion region:",
        options: [
          "Increases",
          "Decreases",
          "Remains the same",
          "Becomes zero"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "A diode is a device that allows current to flow in:",
        options: [
          "Both directions",
          "One direction only",
          "Neither direction",
          "A circular path"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "The process of converting AC to DC is called:",
        options: [
          "Amplification",
          "Rectification",
          "Oscillation",
          "Modulation"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "In a half-wave rectifier, the output frequency is _______ the input frequency.",
        options: [
          "Equal to",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "A Zener diode is designed to operate in the:",
        options: [
          "Forward bias region",
          "Reverse breakdown region",
          "Saturation region",
          "Cut-off region"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-10",
        question: "A photodiode is operated in:",
        options: [
          "Forward bias",
          "Reverse bias",
          "No bias",
          "Breakdown region"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "The V-I characteristic curve for a silicon diode is shown. The point 'V_k' on the graph represents the:",
        options: [
          "Breakdown Voltage",
          "Peak Inverse Voltage",
          "Knee Voltage",
          "Zener Voltage"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-12",
        question: "When a transistor is used as a digital switch, it operates in which two regions?",
        options: [
          "Active and Saturation",
          "Cut-off and Active",
          "Saturation and Cut-off",
          "Active and Breakdown"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "In a common-emitter transistor, the emitter current (Ie) is 8.0 mA and the collector current (Ic) is 7.9 mA. What is the current gain (beta)?",
        options: [
          "79",
          "80",
          "0.98",
          "1"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A transistor has how many doped regions?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-15",
        question: "In a PNP transistor, the charge carriers are mainly:",
        options: [
          "Electrons",
          "Holes",
          "Both electrons and holes",
          "Ions"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "The base of a transistor is:",
        options: [
          "Heavily doped",
          "Lightly doped and thin",
          "Moderately doped and thick",
          "Heavily doped and thick"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "For a transistor to act as an amplifier, the emitter-base junction must be:",
        options: [
          "Forward biased and the collector-base junction reverse biased",
          "Reverse biased and the collector-base junction forward biased",
          "Both junctions forward biased",
          "Both junctions reverse biased"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "The current gain of a common-emitter amplifier is given by the symbol:",
        options: [
          "alpha",
          "beta",
          "gamma",
          "delta"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-19",
        question: "The relationship between alpha and beta is:",
        options: [
          "beta = alpha / (1 - alpha)",
          "alpha = beta / (1 - beta)",
          "beta = alpha / (1 + alpha)",
          "alpha = beta / (1 + beta)"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "What is the primary function of a capacitor placed in parallel with the load resistor in a rectifier circuit?",
        options: [
          "To block the DC component",
          "To store charge during peaks and supply it to the load during troughs",
          "To increase the frequency of the output voltage",
          "To protect the diode from excessive reverse voltage"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-21",
        question: "The conductivity of an intrinsic semiconductor increases with an increase in temperature primarily because:",
        options: [
          "The forbidden energy gap increases",
          "The number of charge carriers (electron-hole pairs) increases",
          "The mobility of charge carriers increases",
          "The semiconductor becomes a p-type material"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "An ideal operational amplifier (Op-Amp) should have:",
        options: [
          "High input impedance and high output impedance",
          "Low input impedance and low output impedance",
          "High input impedance and very low output impedance",
          "Low input impedance and high output impedance"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "An operational amplifier (op-amp) has a very high:",
        options: [
          "Input impedance",
          "Output impedance",
          "Current gain",
          "Power consumption"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "In an inverting amplifier, the output signal is:",
        options: [
          "180 degrees out of phase with the input signal",
          "In phase with the input signal",
          "90 degrees out of phase with the input signal",
          "Independent of the input signal"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "An oscillator is a circuit that produces:",
        options: [
          "A DC output from an AC input",
          "An amplified output from a small input",
          "A periodic waveform without any input signal",
          "A constant voltage output"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "Which of the following is a digital quantity?",
        options: [
          "Temperature of a room",
          "Speed of a car",
          "Number of students in a class",
          "Height of a person"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "The binary number system has a base of:",
        options: [
          "2",
          "8",
          "10",
          "16"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "Which logic gate is known as the universal gate?",
        options: [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "The output of an AND gate is HIGH only when:",
        options: [
          "All inputs are HIGH",
          "All inputs are LOW",
          "Any input is HIGH",
          "Any input is LOW"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "The Boolean expression for an OR gate is:",
        options: [
          "Y = A . B",
          "Y = A + B",
          "Y = A'",
          "Y = (A + B)'"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "A NOT gate is also known as an:",
        options: [
          "Inverter",
          "Buffer",
          "Follower",
          "Converter"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "The ripple factor of a full-wave rectifier is:",
        options: [
          "1.21",
          "0.48",
          "0.81",
          "1.0"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "In a common-base amplifier, the current gain alpha is always:",
        options: [
          "Greater than 1",
          "Less than 1",
          "Equal to 1",
          "Infinite"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "The voltage gain of a non-inverting op-amp is given by:",
        options: [
          "Av = -Rf/Ri",
          "Av = 1 + Rf/Ri",
          "Av = Rf/Ri",
          "Av = 1 - Rf/Ri"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-35",
        question: "A bistable multivibrator is also known as a:",
        options: [
          "Flip-flop",
          "Clock",
          "Counter",
          "Register"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "The efficiency of a full-wave rectifier is approximately:",
        options: [
          "40.6%",
          "81.2%",
          "50%",
          "100%"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The output of a NOR gate is HIGH only when:",
        options: [
          "All inputs are HIGH",
          "All inputs are LOW",
          "Any input is HIGH",
          "Any input is LOW"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "The decimal equivalent of the binary number 1011 is:",
        options: [
          "11",
          "13",
          "9",
          "10"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-39",
        question: "In a common-emitter amplifier, the output voltage is taken from the:",
        options: [
          "Emitter",
          "Collector",
          "Base",
          "Ground"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "An LED (Light Emitting Diode) emits light when:",
        options: [
          "Forward biased",
          "Reverse biased",
          "No bias is applied",
          "It is heated"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-41",
        question: "A transistor can be used as a:",
        options: [
          "Switch",
          "Amplifier",
          "Both a switch and an amplifier",
          "Neither a switch nor an amplifier"
        ],
        answer: 2
      }
  ];