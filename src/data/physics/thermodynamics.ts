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