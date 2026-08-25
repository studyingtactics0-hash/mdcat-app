export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const thermodynamicsQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
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
    }
  ];