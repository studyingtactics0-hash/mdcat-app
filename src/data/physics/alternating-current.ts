export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const alternatingCurrentQuestions: Question[] = [
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-140",
      question: "If the capacitance in a purely capacitive AC circuit is doubled, the current will be:",
      options: [
        "Double",
        "Become half",
        "Remain same",
        "Decrease to the fourth"
      ],
      answer: 0,
      explanation: "Capacitive reactance is X_c = 1 / (2π f C). Doubling capacitance C halves the reactance X_c. Consequently, the current I = V / X_c doubles."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-83",
      question: "In a pure capacitance AC circuit, the current:",
      options: [
        "Lags behind voltage by 90°",
        "Leads the voltage by 90°",
        "Is in phase with the voltage",
        "Leads the voltage by 45°"
      ],
      answer: 1,
      explanation: "In a purely capacitive AC circuit, current leads voltage by a phase angle of 90° (π/2 radians)."
    },
  
    // --- SIBA 2025 PHYS ---
    {
      id: "siba-2025-phys-154",
      question: "If frequency of AC is doubled, the inductive reactance will:",
      options: [
        "Remain same",
        "Be halved",
        "Be doubled",
        "Become zero"
      ],
      answer: 2,
      explanation: "Inductive reactance is given by X_L = 2π f L. Since X_L is directly proportional to frequency f, doubling frequency doubles the inductive reactance."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-136",
      question: "A capacitor is connected to an ac source. If the frequency of the AC source is doubled, the current in a purely capacitive circuit will:",
      options: [
        "Be doubled",
        "Remains Unchanged",
        "Become Half",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "Reactance X_c = 1 / (2π f C). Doubling frequency f halves X_c, which doubles the circuit current I = V / X_c."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-169",
      question: "Alternating current generator is a device which is used to convert",
      options: [
        "Chemical energy, Electrical energy",
        "Chemical energy, Mechanical energy",
        "Electrical energy, Mechanical energy",
        "Mechanical energy, Electrical energy"
      ],
      answer: 3,
      explanation: "An AC generator converts mechanical energy into electrical energy via electromagnetic induction."
    },
    {
      id: "szambu-phy-24-173",
      question: "The turns ratio of a step-up transformer is 5. A current of 20 A is passed through its primary coil at 220 V. Calculate the value of voltage in secondary coil?",
      options: [
        "1000 V",
        "1025 V",
        "1050 V",
        "1100 V"
      ],
      answer: 3,
      explanation: "Turns ratio N_s / N_p = 5. Secondary voltage V_s = (N_s / N_p) × V_p = 5 × 220 V = 1100 V."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-161",
      question: "In an AC generator the emf will be maximum when factor sin ωt is equal to",
      options: [
        "Zero",
        "1",
        "2",
        "½"
      ],
      answer: 1,
      explanation: "Generated EMF ε = ε₀ sin(ωt) reaches maximum peak magnitude ε₀ when sin(ωt) = 1."
    },
    {
      id: "uhs-phys-24-163",
      question: "In an ideal transformer",
      options: [
        "Power input is equal to Power output",
        "Power input is less than half of the power output",
        "Power input is greater than Power output",
        "Power input is more than half of the power output"
      ],
      answer: 0,
      explanation: "An ideal transformer operates with 100% efficiency, so power input equals power output (P_in = P_out)."
    }
  ];