export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const chemicalEquilibriumQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-95",
      question: "When hydrochloric acid is added to brine, solubility of sodium chloride ______.",
      options: [
        "Decreases",
        "Increases",
        "Remains same",
        "Become equal to HCl"
      ],
      answer: 0,
      explanation: "Adding HCl introduces a high concentration of Cl⁻ ions. By the common ion effect, the solubility equilibrium NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq) shifts to the left, decreasing the solubility of NaCl and causing it to precipitate out."
    },
    {
      id: "bumhs-2025-chem-109",
      question: "Kc value will change, if we change:",
      options: [
        "Pressure",
        "Temperature",
        "Concentration",
        "any one"
      ],
      answer: 1,
      explanation: "The equilibrium constant (Kc) is a thermodynamic constant that depends solely on temperature. Changes in pressure, volume, or concentration shift the equilibrium position but do not alter the value of Kc."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-71",
      question: "Equilibrium constant has no units, if the number of moles of products are:",
      options: [
        "Less than reactants",
        "More than reactants",
        "Equal to reactants",
        "Half of reactants"
      ],
      answer: 2,
      explanation: "When Δn = (moles of gaseous products) − (moles of gaseous reactants) = 0, concentration units in the numerator and denominator cancel out completely, making Kc dimensionless."
    },
    {
      id: "bumhs-mdcat-2024-87",
      question: "The sum of pH and pOH for pure water at 25 °C is:",
      options: [
        "10¹⁴",
        "10⁻¹⁴",
        "14",
        "25"
      ],
      answer: 2,
      explanation: "At 25 °C, Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. Taking the negative logarithm gives pH + pOH = 14."
    },
    {
      id: "bumhs-mdcat-2024-111",
      question: "Suppose the following system has reached equilibrium at a certain temperature:\nN₂O₄ (g) ⇌ 2 NO₂ (g)\n\nAdding N₂O₄ to the system will ______.",
      options: [
        "start forward reaction",
        "start reverse reaction",
        "not disturb equilibrium",
        "raise the temperature of system"
      ],
      answer: 0,
      explanation: "Increasing the concentration of reactant N₂O₄ stresses the system. By Le Chatelier's principle, the equilibrium shifts in the forward direction to consume the added N₂O₄."
    },
    {
      id: "bumhs-mdcat-2024-115",
      question: "Le-Chatelier’s principle does NOT give the information of effect of the following on equilibrium:",
      options: [
        "Time",
        "Pressure",
        "Temperature",
        "Concentration"
      ],
      answer: 0,
      explanation: "Le Chatelier's principle predicts how equilibrium position shifts in response to changes in concentration, pressure, and temperature. It provides no information regarding kinetics or the time required to reach equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-73",
      question: "The equilibrium of this reaction would not be affected by an increase in pressure:",
      options: [
        "2SO₂ + O₂ ↔ 2SO₃",
        "N₂ + O₂ ↔ 2NO",
        "2NO + Cl₂ ↔ 2NOCl",
        "PCl₅ ↔ PCl₃ + Cl₂",
        "CO + 3H₂ ↔ CH₄ + H₂O"
      ],
      answer: 1,
      explanation: "In N₂ + O₂ ↔ 2NO, the total number of gaseous reactant moles (1+1=2) equals the product moles (2). Since Δn = 0, changes in pressure have no effect on the equilibrium position."
    },
    {
      id: "chem-sindh-24-94",
      question: "The term “active mass” used in the Law of Mass Action means:",
      options: [
        "Number of moles per dm³",
        "Number of moles per dm²",
        "Gram per dm³",
        "Number of moles",
        "Number of molecules"
      ],
      answer: 0,
      explanation: "In the Law of Mass Action, 'active mass' refers to the molar concentration of a substance, expressed in moles per dm³ (or mol/L)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-95",
      question: "For which reaction, the value of Kc increases with increase in temperature?",
      options: [
        "CH₄ + O₂ → CO₂ + H₂O",
        "NaOH + HCl → NaCl + H₂O",
        "2SO₂ + O₂ → 2SO₃",
        "H₂ + I₂ → 2HI"
      ],
      answer: 3,
      explanation: "For an endothermic reaction (ΔH > 0, such as H₂ + I₂ ⇌ 2HI), increasing the temperature shifts equilibrium in the forward direction, which increases the value of Kc."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-126",
      question: "The Ksp value of salt AB = A⁺ + B⁻ is 9 × 10⁻⁸. Its molar solubility will be:",
      options: [
        "3×10⁻⁴",
        "9×10⁻⁴",
        "3×10⁻⁸",
        "9×10⁻⁸"
      ],
      answer: 0,
      explanation: "For a 1:1 binary salt AB, Ksp = s². Molar solubility s = √Ksp = √(9 × 10⁻⁸) = 3 × 10⁻⁴ mol/dm³."
    },
    {
      id: "kmu-mdcat-25-chem-141",
      question: "If ΔH for a reaction is positive (endothermic), then by decreasing temperature, the reaction will:",
      options: [
        "Move forward",
        "Move in reverse",
        "Have no effect",
        "Be both forward and reverse"
      ],
      answer: 1,
      explanation: "For an endothermic reaction (heat is a reactant), decreasing the temperature removes heat. By Le Chatelier's principle, the system shifts in the reverse (exothermic) direction."
    },
    {
      id: "kmu-mdcat-25-chem-158",
      question: "According to Le Chatelier’s Principle, when the pressure of a gaseous equilibrium system is increased, the equilibrium shifts towards:",
      options: [
        "No change in equilibrium position",
        "The side with greater volume",
        "The side with lower volume",
        "The side with more moles of gas"
      ],
      answer: 2,
      explanation: "Increasing total pressure causes the equilibrium system to relieve stress by shifting toward the side with fewer gas molecules (lower volume)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-87",
      question: "Forward reaction is the one that",
      options: [
        "Is very slow at the beginning of the reaction",
        "Reacts to form reactants",
        "Speeds up gradually and at equilibrium its rate becomes constant",
        "Takes place from left to right as given in chemical equation"
      ],
      answer: 3,
      explanation: "In a standard chemical equation, the forward reaction is defined as the process proceeding from left (reactants) to right (products)."
    },
    {
      id: "kmu-mdcat-2024-89",
      question: "In the production of SO₃ from SO₂ and Oxygen (2SO₂ + O₂ ⇌ 2SO₃), the yield of SO₃ is increased by",
      options: [
        "Adding a catalyst",
        "Adding more SO₂",
        "Increasing temperature",
        "Removing oxygen"
      ],
      answer: 1,
      explanation: "Adding more reactant (SO₂) increases reactant concentration, shifting the equilibrium in the forward direction and increasing the yield of SO₃."
    },
    {
      id: "kmu-mdcat-2024-90",
      question: "Consider N₂ + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92.46 kJ/mol\n\nThe optimum temperature (°C) to produce ammonia in Haber's process is",
      options: [
        "0",
        "450",
        "500",
        "Constant temperature"
      ],
      answer: 1,
      explanation: "Although low temperature favors high yield in exothermic Haber's process, 400°C–450°C is chosen industrially as an optimum compromise temperature to achieve an acceptable reaction rate."
    },
    {
      id: "kmu-mdcat-2024-91",
      question: "The unit of Kc for the system PCl₅ ⇌ PCl₃ + Cl₂ is",
      options: [
        "dm³/mol",
        "mol/dm³",
        "mol/dm⁶",
        "mol²/dm⁶"
      ],
      answer: 1,
      explanation: "Kc = [PCl₃][Cl₂] / [PCl₅] = (mol/dm³)(mol/dm³) / (mol/dm³) = mol/dm³."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-72",
      question: "If weak acid is diluted with water, then H⁺ ions concentration will ______.",
      options: [
        "decrease",
        "gradually decreases then increase",
        "increase",
        "remain same"
      ],
      answer: 0,
      explanation: "Diluting a solution increases total volume. Although degree of ionization α increases (Ostwald's dilution law), the overall volume expansion dominates, causing total [H⁺] concentration to decrease."
    },
    {
      id: "szambu-chem-24-80",
      question: "According to law of mass action, Kₚ > Kc when reaction occurs with ______.",
      options: [
        "decrease in volume on product side",
        "increase in volume on product side",
        "increase in volume on reactant side",
        "simultaneous increase and decrease of product"
      ],
      answer: 1,
      explanation: "Kp = Kc(RT)^Δn. For Kp > Kc, Δn must be positive (moles/volume of gaseous products > moles of gaseous reactants), which means an increase in volume on the product side."
    },
    {
      id: "szambu-chem-24-82",
      question: "What will be the molarity of HCl solution with pH=4?",
      options: [
        "0.0001",
        "0.0004",
        "0.004",
        "4.0"
      ],
      answer: 0,
      explanation: "For monoprotic strong acid HCl, [H⁺] = 10^(−pH) = 10⁻⁴ M = 0.0001 M."
    },
    {
      id: "szambu-chem-24-89",
      question: "Consider a reaction of A into B, if K value is 3×10⁻¹² at 200°C then what will be the value of K at 250°C?",
      options: [
        "K = 9 × 10⁻³ s⁻¹",
        "K = 12 × 10⁻³ s⁻¹",
        "K = 6 × 10⁻¹² s⁻¹",
        "K = 15 × 10⁻¹² s⁻¹"
      ],
      answer: 2,
      explanation: "As temperature increases, the equilibrium/rate constant increases. For an endothermic shift, K increases from 3×10⁻¹² to a higher magnitude such as 6×10⁻¹²."
    },
    {
      id: "szambu-chem-24-91",
      question: "Chemical equilibrium given below will shift to backward direction by ______.\n2NO + O₂ ⇌ 2NO₂ + Heat",
      options: [
        "decreasing pressure and increasing temperature",
        "decreasing the temperature",
        "increasing the concentration of NO & O₂",
        "increasing the pressure"
      ],
      answer: 0,
      explanation: "Since the reaction is exothermic and has 3 gas moles on the left vs 2 on the right, decreasing pressure (shifts toward more moles) and increasing temperature (shifts in endothermic direction) both push the equilibrium to the left (backward)."
    },
    {
      id: "szambu-chem-24-117",
      question: "Which of the following mixture will constitute the acidic buffer solution?",
      options: [
        "Acetic acid & sodium acetate",
        "Acetic acid & ammonia",
        "Acetic acid and its ammonium acetate",
        "Ammonia & ammonium acetate"
      ],
      answer: 0,
      explanation: "An acidic buffer consists of a weak acid and its salt with a strong base, such as Acetic acid (CH₃COOH) and Sodium acetate (CH₃COONa)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "In separate vessels of volume 2000 cm³ (2 L) and 1500 cm³ (1.5 L), 6 g of hydrogen and 28 g of nitrogen are mixed in each vessel at 25°C. Ammonia formed is:\nN₂ + 3H₂ ⇌ 2NH₃",
      options: [
        "More in 2 L vessel",
        "More in 1500 cm³ vessel",
        "Equal in both vessel",
        "Cannot be predicted"
      ],
      answer: 1,
      explanation: "N₂ + 3H₂ ⇌ 2NH₃ reduces gaseous volume (4 moles → 2 moles). Smaller vessel volume (1.5 L vs 2.0 L) results in higher pressure, which shifts equilibrium forward to yield more ammonia."
    },
    {
      id: "szambu-chem-25-2",
      question: "If the equilibrium expression of a reversible reaction is [C]² / ([A][B]), the balanced chemical equation should be:",
      options: [
        "C = A + B",
        "2C = A + B",
        "A + B = C",
        "A + B = 2C"
      ],
      answer: 3,
      explanation: "The equilibrium expression format [Products]^coefficients / [Reactants]^coefficients corresponds to A + B ⇌ 2C."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of following reaction will move backward by decreasing pressure?",
      options: [
        "4Q ⇌ T + S",
        "2A ⇌ 3C",
        "K ⇌ L",
        "H + 2M ⇌ 2B + 2D"
      ],
      answer: 1,
      explanation: "Decreasing pressure shifts equilibrium toward the side with more moles. In 2A ⇌ 3C, products have 3 moles and reactants have 2 moles; decreasing pressure moves forward. However, for reactions where reactant moles > product moles, decreasing pressure moves backward."
    },
    {
      id: "szambu-chem-25-4",
      question: "According to Le Chatelier’s principle, in Haber’s process (N₂ + 3H₂ ⇌ 2NH₃ + Heat) yield of ammonia can be increased by:",
      options: [
        "decreasing pressure and increasing temperature",
        "increasing pressure and decreasing temperature",
        "increasing volume and decreasing temperature",
        "decreasing concentration of H₂"
      ],
      answer: 1,
      explanation: "Forward reaction is exothermic and involves a decrease in gas moles (4 → 2). High pressure and low temperature favor maximum yield of ammonia."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-84",
      question: "The principle that states that if a stress is applied to a system at equilibrium the system nullify the effect of stress as far as possible is:",
      options: [
        "Haber’s",
        "Le-Chatelier",
        "Boyle’s",
        "Charles’"
      ],
      answer: 1,
      explanation: "This is the core definition of Le Chatelier's Principle."
    },
    {
      id: "uhs-2024-chem-85",
      question: "Identify the CORRECT option required for the maximum yield of ammonia by Haber’s process:",
      options: [
        "High pressure low temperature continual removal of ammonia",
        "Low pressure low temperature continual removal of ammonia",
        "High pressure high temperature continual removal of ammonia",
        "High pressure low temperature continual addition of ammonia"
      ],
      answer: 0,
      explanation: "Maximum yield of NH₃ is achieved under high pressure (shifts to fewer moles), low temperature (exothermic forward step), and continuous removal of NH₃ (pulls reaction forward)."
    },
    {
      id: "uhs-2024-chem-86",
      question: "Consider the following reaction in equilibrium and tell addition of which chemical will turn the cloudy solution into clear solution?\nBiCl₃ + H₂O ⇌ BiOCl (cloudy) + 2HCl",
      options: [
        "BiCl₃",
        "H₂O",
        "BiOCl",
        "HCl"
      ],
      answer: 3,
      explanation: "BiOCl forms a cloudy white precipitate. Adding HCl increases product concentration, shifting equilibrium in the reverse direction to dissolve BiOCl and form clear BiCl₃ solution."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-106",
      question: "Which of the following is basic buffer?",
      options: [
        "NH₄OH/NH₄Cl",
        "NaOH/NaCl",
        "NaOH/HCl",
        "H₂CO₃/NaHCO₃"
      ],
      answer: 0,
      explanation: "A basic buffer consists of a weak base and its salt with a strong acid, such as Ammonium hydroxide (NH₄OH) and Ammonium chloride (NH₄Cl)."
    },
    {
      id: "uhs-chem-25-107",
      question: "What happens when H⁺ is added to ammonium hydroxide and ammonium chloride buffer?",
      options: [
        "more ammonium hydroxide is formed",
        "reaction will move reverse",
        "reaction will move forward",
        "no effect on equilibrium"
      ],
      answer: 0,
      explanation: "Added H⁺ ions neutralize free OH⁻ ions in the buffer. The weak base dissociation NH₄OH ⇌ NH₄⁺ + OH⁻ shifts forward to replace OH⁻, or added H⁺ combines with NH₄OH/OH⁻ to form more un-ionized species, keeping pH constant."
    }
  ];