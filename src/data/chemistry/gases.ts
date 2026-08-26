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
    }
  ];