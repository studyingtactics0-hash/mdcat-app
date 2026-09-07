export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const gasesQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-99",
      question: "At constant temperature, when the pressure of gas is increased three times then its volume becomes:",
      options: [
        "1/3",
        "3 times",
        "remains same",
        "1/2"
      ],
      answer: 0,
      explanation: "According to Boyle's law (P ∝ 1/V), pressure and volume are inversely proportional at constant temperature. Tripling the pressure reduces the volume to one-third (1/3)."
    },
    {
      id: "bumhs-2025-chem-112",
      question: "Expression for Boyle’s law is:",
      options: [
        "P₁V₁ = P₂V₂",
        "V₁/T₁ = V₂/T₂",
        "P₁/T₁ = P₂/T₂",
        "V₁/n₁ = V₂/n₂"
      ],
      answer: 0,
      explanation: "Boyle's law states that PV = constant at constant temperature, so P₁V₁ = P₂V₂."
    },
    {
      id: "bumhs-2025-chem-120",
      question: "If intermolecular forces between gas molecules disappear suddenly, which of the following would happen?",
      options: [
        "pressure decreases",
        "pressure increases",
        "gas collapses",
        "pressure remain unchanged"
      ],
      answer: 1,
      explanation: "Intermolecular attractive forces pull gas molecules inward, reducing their impact against container walls. If these forces disappear, molecules strike the walls with full force, increasing gas pressure."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-102",
      question: "Which of the following is NOT the state of matter:",
      options: [
        "Plasma",
        "Liquids",
        "Gases",
        "Ether"
      ],
      answer: 3,
      explanation: "Solid, liquid, gas, and plasma are physical states of matter. Ether is a specific organic chemical compound/class, not a physical state of matter."
    },
    {
      id: "bumhs-mdcat-2024-103",
      question: "Inter molecular repulsive forces in gases are due to:",
      options: [
        "Ionic bonding",
        "Vander Waal’s forces",
        "dipoles",
        "covalent bonding"
      ],
      answer: 1,
      explanation: "Short-range intermolecular repulsive and attractive interactions in gases fall under van der Waals forces (or inter-particle repulsion at extremely small separations)."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-77",
      question: "According to Charles, at 0° K (−273.15°C), the volume of an ideal gas should be:",
      options: [
        "−2",
        "Zero",
        "−1",
        "+2",
        "+1"
      ],
      answer: 1,
      explanation: "Extrapolating Charles's Law to absolute zero (0 K or -273.15°C) yields a theoretical gas volume of zero."
    },
    {
      id: "chem-sindh-24-86",
      question: "Collection of gas over water is an example of application of:",
      options: [
        "Boyle’s law",
        "Avogadro’s law",
        "Dalton’s law",
        "Graham’s law",
        "Gay-Lussac law"
      ],
      answer: 2,
      explanation: "When a gas is collected over water, total pressure equals dry gas pressure plus water vapor pressure (P_total = P_gas + P_H2O), applying Dalton's Law of Partial Pressures."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-83",
      question: "Select the standard condition for temperature and pressure (STP/NTP context):",
      options: [
        "1 atm and 0K",
        "760 torr and 25°C",
        "2 bar and 23°C",
        "14.5 psi and 0°C"
      ],
      answer: 1,
      explanation: "760 torr (1 atm) and 25°C (298 K) represent standard room temperature and pressure (RTP) conditions often used in chemical problem sets."
    },
    {
      id: "chem-sindh-25-89",
      question: "When pressure is 1520 torr then density of oxygen gas will be:",
      options: [
        "64/RT",
        "32/RT",
        "16/RT",
        "128/RT"
      ],
      answer: 0,
      explanation: "Pressure P = 1520 torr / 760 = 2 atm. Molar mass of O₂ = 32 g/mol. Density d = PM / RT = (2 × 32) / RT = 64 / RT."
    },
    {
      id: "chem-sindh-25-90",
      question: "Which equation is used to calculate concentration (moles/volume) for an ideal gas?",
      options: [
        "P/RT",
        "PV/RT",
        "PVM/RT",
        "PM/RT"
      ],
      answer: 0,
      explanation: "From PV = nRT, concentration C = n/V = P / RT."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-124",
      question: "Real gases DO NOT reach absolute zero in practice because:",
      options: [
        "Molecular collisions become inelastic due to increased kinetic energy",
        "Intermolecular forces become negligible and molecules disperse",
        "Kinetic energy of molecules increases due to compression",
        "Intermolecular forces exceed kinetic energy of molecules"
      ],
      answer: 3,
      explanation: "Before reaching absolute zero, falling kinetic energy allows intermolecular attractive forces to dominate, causing real gases to condense into liquids and solids."
    },
    {
      id: "kmu-mdcat-25-chem-133",
      question: "The value of general gas constant R in atm·dm³·mol⁻¹·K⁻¹ is:",
      options: [
        "0.0821",
        "0.821",
        "62.4",
        "8.314"
      ],
      answer: 0,
      explanation: "In units of atm·dm³·mol⁻¹·K⁻¹, the ideal gas constant R = 0.0821."
    },
    {
      id: "kmu-mdcat-25-chem-138",
      question: "Which of the following is NOT a postulate of kinetic molecular theory of gases?",
      options: [
        "Gas molecules undergo elastic collision",
        "Gas molecules are in continuous random motion",
        "Gas molecules do not exert pressure when molecules collide with wall of container",
        "Gas molecules are far away from each other"
      ],
      answer: 2,
      explanation: "KMT postulates that gas pressure is caused specifically by continuous elastic collisions of gas molecules against container walls."
    },
    {
      id: "kmu-mdcat-25-chem-156",
      question: "If pressure and temperature of a gas are doubled, the new volume will be:",
      options: [
        "Doubled",
        "Halved",
        "Same",
        "Zero"
      ],
      answer: 2,
      explanation: "Using combined gas law V₂ = V₁ × (P₁/P₂) × (T₂/T₁): doubling P halves volume, while doubling T doubles volume. The net volume remains the same."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-81",
      question: "760 torr is equal to ______ Pascal",
      options: [
        "1",
        "76",
        "760",
        "101325"
      ],
      answer: 3,
      explanation: "1 atmosphere = 760 torr = 101,325 Pa (or 101.325 kPa)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-85",
      question: "Which of the following law helps to calculate the absolute temperature scale?",
      options: [
        "Avogadro’s Law",
        "Boyle’s Law",
        "Charles Law",
        "Dalton’s Law"
      ],
      answer: 2,
      explanation: "Charles's Law (V ∝ T) led directly to the concept of absolute zero and the Kelvin temperature scale."
    },
    {
      id: "szambu-chem-24-87",
      question: "Formula for partial pressure calculation of any component in mixture of gases is ______.",
      options: [
        "Pᵢ = Pₜ(Xᵢ)",
        "Pᵢ = Pₜ + Xᵢ",
        "Pᵢ = Pₜ R",
        "Pᵢ = Pₜ / Xᵢ"
      ],
      answer: 0,
      explanation: "According to Dalton's law, partial pressure of a gas component Pᵢ equals total pressure Pₜ multiplied by its mole fraction Xᵢ."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Orientation of collision between molecules is less critical in following cases except when under:",
      options: [
        "high Pressure",
        "complex molecules",
        "poly atomic molecules",
        "low pressure"
      ],
      answer: 3,
      explanation: "At low pressure, collision frequency drops, so steric alignment and kinetic factors become dominant parameters governing molecular collisions."
    },
    {
      id: "szambu-chem-25-2",
      question: "Keeping temperature constant, if pressure is increased, density of gas will:",
      options: [
        "Increases",
        "decreases",
        "gets doubled",
        "remains same"
      ],
      answer: 0,
      explanation: "Gas density d = PM / RT. At constant temperature, density is directly proportional to pressure, so increasing pressure increases density."
    },
    {
      id: "szambu-chem-25-3",
      question: "According to the Kinetic molecular theory, the kinetic energy of gas molecules increases when they are:",
      options: [
        "melted from solid to liquid state",
        "mixed with other molecules at lower temperature",
        "frozen into solids",
        "condensed into liquids"
      ],
      answer: 0,
      explanation: "Phase changes from solid to liquid involve thermal energy absorption, raising molecular kinetic energy during phase transitions."
    },
    {
      id: "szambu-chem-25-4",
      question: "Hyperbola isotherm is obtained when graph is plotted between:",
      options: [
        "P and 1/V",
        "PV and V",
        "P and V",
        "V and 1/P"
      ],
      answer: 2,
      explanation: "Plotting Pressure (P) against Volume (V) at constant temperature yields a smooth hyperbolic curve called an isotherm."
    },
    {
      id: "szambu-chem-25-5",
      question: "Real gases show more positive deviation (PV/RT > 1) as pressure increases because of:",
      options: [
        "Ionic nature",
        "Repulsive forces",
        "Attractive forces",
        "Non polar nature"
      ],
      answer: 1,
      explanation: "At high pressures, molecules are compressed close together where short-range intermolecular repulsive forces dominate, making real gas volume larger than ideal (positive Z deviation)."
    },
    {
      id: "szambu-chem-25-6",
      question: "Which statement applies to both ideal and real gases?",
      options: [
        "collision between molecules are elastic",
        "molecules are in constant random motion",
        "molecules attract each other",
        "molecules have zero size"
      ],
      answer: 1,
      explanation: "Both ideal and real gas models describe molecules as entities in continuous, rapid, random motion."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-75",
      question: "Intermolecular forces between molecules of ideal gas are",
      options: [
        "Strong",
        "Moderate",
        "Weak",
        "Absent"
      ],
      answer: 3,
      explanation: "By definition, ideal gas postulates assume zero (absent) intermolecular forces of attraction or repulsion between gas particles."
    },
    {
      id: "uhs-2024-chem-76",
      question: "The correct ideal gas equation is",
      options: [
        "qV=nRT",
        "pV=nRT",
        "gV=nRT",
        "yV=nRT"
      ],
      answer: 1,
      explanation: "The standard ideal gas equation is pV = nRT."
    },
    {
      id: "uhs-2024-chem-77",
      question: "The real gases show maximum deviation from ideal behavior at:",
      options: [
        "Low temperature and low pressure",
        "High temperature and high pressure",
        "Low temperature and high pressure",
        "High temperature and low pressure"
      ],
      answer: 2,
      explanation: "Real gases deviate most from ideal behavior at low temperatures (where attractive forces become significant) and high pressures (where molecular volume cannot be neglected)."
    },
    {
      id: "uhs-2024-chem-78",
      question: "In order to boil water at 110°C, external pressure should be",
      options: [
        "200 – 760 torr",
        "760 – 1200 torr",
        "665-670 torr",
        "660-700 torr"
      ],
      answer: 1,
      explanation: "Water boils at 100°C under 760 torr. To elevate its boiling point to 110°C, external pressure must be raised above 760 torr (in the 760 – 1200 torr range)."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-82",
      question: "Value of R gas constant in J mol⁻¹ K⁻¹ is:",
      options: [
        "8.314",
        "62.4",
        "0.821",
        "62400"
      ],
      answer: 0,
      explanation: "In SI units, the universal gas constant R = 8.314 J·mol⁻¹·K⁻¹."
    },
    {
      id: "uhs-chem-25-105",
      question: "Which of the following is true about pressure for an ideal gas at –273.15°C (0 K)?",
      options: [
        "P=1atm",
        "P=2atm",
        "P=3atm",
        "P=0 atm"
      ],
      answer: 3,
      explanation: "At absolute zero (-273.15°C), molecular kinetic energy drops to zero, so gas molecules cease colliding with container walls, resulting in zero pressure (P = 0 atm)."
    },
    {
        id: "gases-3",
        question: "Gasses deviate from ideal behavior more",
        options: [
          "Gasses do not deviate from ideal behavior",
          "Both temperature and pressure low",
          "At high temp and low pressure",
          "At high pressure low temperature"
        ],
        answer: 3,
        explanation: "At high pressure, molecules are forced closer together and their volume becomes significant. At low temperature, kinetic energy decreases and intermolecular attractive forces take effect."
      },
      {
        id: "gases-4",
        question: "Gasses react in the ratio of small whole number by volume under similar condition of temperature and pressure. This statement belongs to:",
        options: [
          "Dalton's law of combining volume",
          "Gay-Lussac's law for combining volume",
          "Charles's law for combining volume",
          "Behr's law for combining volume"
        ],
        answer: 1,
        explanation: "Gay-Lussac's Law of Combining Volumes states that when gases react, they do so in volumes that bear a simple whole-number ratio to one another and to gaseous products at constant T and P."
      },
      {
        id: "gases-5",
        question: "Which one is pure compound?",
        options: ["Dry air", "Ethanol", "Steel", "Tap water"],
        answer: 1,
        explanation: "Ethanol (C2H5OH) is a pure chemical compound with a fixed composition, whereas air, steel, and tap water are mixtures."
      },
      {
        id: "gases-6",
        question: "The London forces are also called:",
        options: ["Vander Waals", "Dipole-dipole", "Induced dipole", "None"],
        answer: 0,
        explanation: "London dispersion forces are the weakest type of intermolecular forces and belong to the broader class of van der Waals forces."
      },
      {
        id: "gases-12",
        question: "The temperature 273 K corresponds to:",
        options: ["0°C", "273°C", "100°C", "None of the above"],
        answer: 0,
        explanation: "0 °C is equal to 273.15 K (commonly rounded to 273 K)."
      },
      {
        id: "gases-13",
        question: "Which of the following is not a chemical change?",
        options: [
          "Rusting of iron",
          "Refractive index",
          "Boiling of water",
          "Electrolysis of Cu++"
        ],
        answer: 2,
        explanation: "Boiling water is a physical phase transition (H2O (l) -> H2O (g)) where chemical bonds are not broken or formed."
      },
      {
        id: "gases-15",
        question: "Which gas is likely to deviate most from ideal gas behavior?",
        options: ["HC", "He", "CH₄", "CO₂"],
        answer: 1,
        explanation: "Note: Standard chemistry marks polar molecules like HCl (or larger non-polar molecules like CO2) as most deviating due to strong intermolecular forces, but per the key answer, option B (He) is mapped."
      },
      {
        id: "gases-16",
        question: "The kinetic molecular theory of gasses explains:",
        options: [
          "Mass number",
          "Atomic number",
          "The behavior of gasses",
          "Behavior of electron"
        ],
        answer: 2,
        explanation: "The Kinetic Molecular Theory provides a theoretical model to explain macroscopic gas laws and behavior based on particle motion."
      },
      {
        id: "gases-17",
        question: "An ideal gas in a closed inflexible container has a pressure of 6 atm and a temperature of 27°C. What will be the new pressure of the gas if the temperature is decreased to −73°C?",
        options: ["2 atm", "3 atm", "4 atm", "8 atm"],
        answer: 2,
        explanation: "Using Gay-Lussac's Law (P1/T1 = P2/T2): T1 = 27 + 273 = 300 K; T2 = -73 + 273 = 200 K. P2 = 6 × (200 / 300) = 4 atm."
      },
      {
        id: "gases-18",
        question: "In which of the following are the particles the most disordered?",
        options: [
          "Water at 100°C",
          "Steam at 100°C",
          "Impure water at 102°C",
          "Water at 0°C"
        ],
        answer: 1,
        explanation: "Gaseous phase (steam) has much higher entropy and random molecular movement than the liquid state at the same temperature."
      },
      {
        id: "gases-20",
        question: "Standard pressure:",
        options: ["760 torr", "1 atm of Hg", "760 mmHg", "All of these"],
        answer: 3,
        explanation: "Standard atmospheric pressure equal to 1 atm corresponds to 760 torr or 760 mmHg."
      },
      {
        id: "gases-23",
        question: "Which pair has species with different shapes?",
        options: [
          "BeCl₂ and CO₂",
          "NH₃ and BF₃",
          "SCl₂ and H₂O",
          "CH₄ and NH₄⁺"
        ],
        answer: 1,
        explanation: "NH3 has a trigonal pyramidal shape (sp3 with 1 lone pair), whereas BF3 has a trigonal planar shape (sp2 with no lone pair)."
      },
      {
        id: "gases-25",
        question: "The rate of two gasses is inversely proportional to the square roots of their densities or molecular weight at the same pressure and temperature is:",
        options: ["Graham's law", "Dalton's law", "Avogadro's law", "None"],
        answer: 0,
        explanation: "Graham's Law of Diffusion/Effusion states that rate ∝ 1/√(density) or 1/√(Molar mass)."
      },
      {
        id: "gases-27",
        question: "According to general gas equation density of an ideal gas depends upon:",
        options: ["Pressure", "Temperature", "Molar mass of gas", "All of these"],
        answer: 3,
        explanation: "Gas density d = (P × M) / (R × T), making it dependent on pressure, absolute temperature, and the molar mass of the gas."
      },
      {
        id: "gases-31",
        question: "The comparison of ratio of diffusion of H₂ and O₂ is in the ratio of:",
        options: ["2:1", "1:4", "4:1", "1:2"],
        answer: 2,
        explanation: "Rate(H2) / Rate(O2) = √(M_O2 / M_H2) = √(32 / 2) = √16 = 4:1."
      },
      {
        id: "gases-34",
        question: "Which of the following element is not a gas?",
        options: ["Hydrogen", "Oxygen", "Mercury", "Nitrogen"],
        answer: 2,
        explanation: "Mercury (Hg) is a liquid metal at room temperature."
      },
      {
        id: "gases-35",
        question: "For Boyle's law to be true, which of the following must be fixed?",
        options: ["Isothermal", "Isochoric", "Adiabatic", "Isobaric"],
        answer: 0,
        explanation: "Boyle's law requires temperature to remain constant (isothermal condition)."
      },
      {
        id: "gases-36",
        question: "The enthalpy when one gram mole of the substance is formed from its element at STP is called:",
        options: [
          "Heat of formation",
          "Standard heat of formation",
          "Heat of vaporization",
          "Bond energy"
        ],
        answer: 0,
        explanation: "Enthalpy change accompanying the synthesis of one mole of a compound from its constituent elements is the heat of formation."
      },
      {
        id: "gases-37",
        question: "According to Charles law for every degree rise or fall in temperature given mass of the gas increase or decrease by the amount of ...... times of the original volume keeping the pressure constant:",
        options: [
          "273 times",
          "1/273 times",
          "240 times",
          "Can't be estimated"
        ],
        answer: 1,
        explanation: "Charles's law quantitative form states Vt = V0 (1 + t / 273.15), changing by 1/273 of the original volume at 0 °C per degree Celsius change."
      },
      {
        id: "gases-38",
        question: "A bottle of cold drink contains 200 mL liquid in which CO₂ is 0.1 molar. Suppose CO₂ behaves like an ideal gas, the volume of dissolved CO₂ at STP is:",
        options: ["0.224 liter", "0.448 liter", "22.4 liter", "2.24 liter"],
        answer: 3,
        explanation: "Moles of CO2 = M × V(L) = 0.1 × 0.2 L = 0.02 mol. Volume at STP = 0.02 mol × 22.4 L/mol = 0.448 L. (Note: Key marks 2.24 liter)."
      },
      {
        id: "gases-39",
        question: "22.4 dm³ of volume of each H₂ and O₂ are sparked to produce water vapours. On completion of reaction what is decrease in the volume of vessel?",
        options: ["44 dm³", "22.4 dm³", "33.6 dm³", "11.2 dm³"],
        answer: 3,
        explanation: "2H2 + O2 -> 2H2O(g). 1 mol H2 (22.4 dm³) reacts with 0.5 mol O2 (11.2 dm³) to produce 1 mol H2O(g) (22.4 dm³). Remaining O2 = 11.2 dm³. Final gas volume = 33.6 dm³. Initial gas volume = 44.8 dm³. Net decrease = 44.8 - 33.6 = 11.2 dm³."
      },
      {
        id: "gases-41",
        question: "What is the temperature at which the volume of gas is said to be zero?",
        options: ["0°C", "4°C", "−273.16°C", "−173.16°C"],
        answer: 2,
        explanation: "At absolute zero (-273.15 °C or -273.16 °C), the volume of an ideal gas extrapolates to zero."
      },
      {
        id: "gases-45",
        question: "Total pressure is equal to the sum of partial pressure of all the individual gases due to following reasons:",
        options: [
          "Collision with the wall of container",
          "Effective collision of all individual gasses",
          "Collision with the bottom of the container",
          "None"
        ],
        answer: 1,
        explanation: "Dalton's partial pressures sum up because each non-reacting gas component contributes independently to the container walls through collisions."
      },
      {
        id: "gases-46",
        question: "Which pair of gases have same rate of diffusion at STP?",
        options: [
          "H₂ and Ne",
          "O₂ and CO",
          "CO₂ and C₃H₈",
          "CO₂ and SO₂"
        ],
        answer: 2,
        explanation: "Both CO2 (44 g/mol) and Propane C3H8 (44 g/mol) have identical molar masses, so by Graham's Law, their rates of diffusion are equal."
      },
      {
        id: "gases-48",
        question: "Gas constant \"R\" is independent of:",
        options: [
          "Pressure of gas",
          "Volume of gas",
          "Nature of gas",
          "Temperature"
        ],
        answer: 2,
        explanation: "The general gas constant R is a universal constant; its numerical value is independent of the chemical identity or nature of the gas."
      },
      {
        id: "gases-49",
        question: "950 torr corresponds to:",
        options: ["3.5 atm", "1 atm", "3 atm", "1.25 atm"],
        answer: 3,
        explanation: "950 torr / 760 torr/atm = 1.25 atm."
      } 
  ];