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
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "NaNO3 + heat ⇌ NaNO2 + O2 in this reaction",
        options: [
          "Kp = Kc",
          "Kp > Kc",
          "Kp < Kc",
          "Kp < ksc"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-2",
        question: "In which of the following cases, does the reaction goes farthest to completion",
        options: [
          "K = 10^3",
          "K = 10",
          "K = 10^-2",
          "K = 1"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "At 100°C, 0.1 mole of N2O4 is heated in a one dm³ flask. At equilibrium concentration of NO2 was found to be 0.12 moles. Calculate Kc for the reaction",
        options: [
          "0.12",
          "0.36",
          "0.21",
          "0.012"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-4",
        question: "A solubility product Ksp predicts whether",
        options: [
          "Diffusion",
          "Solubility",
          "Precipitation will take place or no",
          "MP and BP"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-5",
        question: "For which reaction, the volume is an irrelevant factor in determining Kc",
        options: [
          "Formation of ester",
          "Dissociation of PCl5",
          "Decomposition of N2O4",
          "Synthesis of NH3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "When a catalyst is added to a reversible reaction in equilibrium state, the value of equilibrium constant",
        options: [
          "Increases",
          "Decreases",
          "Does not change",
          "Become zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The solubility of AgI in NaI solution is less than in pure water because",
        options: [
          "AgI forms a complex with NaI",
          "Of common ion effect",
          "Solubility product of AgI is less than that of NaI",
          "The temperature of the solution decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "A catalyst can’t initiate the reaction but speeds up a reaction which is possible",
        options: [
          "Physically",
          "Thermodynamically",
          "Chemically",
          "In laboratory"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-9",
        question: "If the ratio of initial concentration of the reagents is greater than the Kc then",
        options: [
          "The reaction will shift towards the reverse direction",
          "More quantity of product is obtained",
          "The ratio increase to the value of Kc",
          "Equilibrium has been attained"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-10",
        question: "Amongst the following hydroxide, the one which has the lowest value of Ksp at ordinary temp about 25°C is",
        options: [
          "Mg(OH)2",
          "Ba(OH)2",
          "Ca(OH)2",
          "Be(OH)2"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-11",
        question: "The wrong statement among the following is",
        options: [
          "Buffer solutions have reverse pH",
          "An acidic buffer mixture can be prepared by mixing a solution of formic acid and sodium formate",
          "Buffer solution resist the change in pH by the addition of an acid or base",
          "Addition of sodium acetate to a buffer solution of sodium acetate and acetic acid doesn’t affect its pH"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-12",
        question: "Which of the following is correct statement about Kc",
        options: [
          "May or may not have a unit",
          "Depend upon equilibrium concentration",
          "Thermodynamic property",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-13",
        question: "The reaction H2 + I2 ⇌ 2HI is independent of",
        options: [
          "Temperature",
          "Concentration",
          "Catalyst",
          "Pressure"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "When no of moles of reactants and product are equal then Kc has units",
        options: [
          "Moles/dm³",
          "Moles²/dm⁶",
          "Moles⁻²/dm⁻⁶",
          "No unit"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-15",
        question: "Which of the following statement is false",
        options: [
          "If 1M CH3COONa is added to 1M CH3COOH, pH of the solution decreases",
          "If water is added to a mixture of CH3COOH + CH3COONa its pH remains constant",
          "If HCl is added to acetic acid its ionization will be suppressed",
          "If a crystal of NH4Cl is added to NH4OH solution its pH decreases"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "The higher value of equilibrium constant K shows that",
        options: [
          "The reaction has gone to near completion towards right",
          "The reaction has not yet started",
          "The reaction has gone to near completion towards left",
          "Whenever equilibrium will be achieved, the product will be very high"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-17",
        question: "For a reversible reaction, if the concentrations of the reactants are doubled, at constant temperature the reaction will",
        options: [
          "Stand still",
          "Slow down",
          "Speed up in reverse direction",
          "Moves towards right"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-18",
        question: "A system at equilibrium can be disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "The reaction PCl5 ⇌ PCl3 + Cl2 is an example of",
        options: [
          "Backward reaction",
          "Irreversible reaction",
          "Forward reaction",
          "Reversible reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-20",
        question: "The addition of any of the reactants or removal of any products favor",
        options: [
          "Forward reaction",
          "Equilibrium position",
          "Backward reaction",
          "Equilibrium constant"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-21",
        question: "Chemical equilibrium is established in",
        options: [
          "Reversible reaction",
          "Irreversible reactions",
          "Both a and b",
          "Forward"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-22",
        question: "According to law of mass action, “the rate of chemical reaction is proportional to”",
        options: [
          "Products",
          "Product of molar concentration of reactants",
          "Initial concentration of reactants",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "In Kp = Kc(RT)^Δn, Δn may have",
        options: [
          "Integer or fractional values",
          "Negative values",
          "Either of these",
          "Positive values"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The solubility product of sparingly soluble salt AB at room temperature is 1.21×10^-6 its molar solubility is",
        options: [
          "1.21×10^-6",
          "1×10^-4",
          "1.21×10^-3",
          "1.1×10^-3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-25",
        question: "The addition of NaCl to AgCl decreases the solubility of AgCl",
        options: [
          "As solubility product decreases",
          "As solubility becomes unsaturated",
          "Due to common ion effect of Cl-",
          "As solution becomes supersaturated"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-26",
        question: "In a given system water and ice are in equilibrium if pressure is applied to the above system then",
        options: [
          "More ice is formed",
          "More ice is melted",
          "Amount of ice and water remains constant",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-27",
        question: "Which of the following is correct",
        options: [
          "Kp will always have some unit",
          "Kp and Kc will never have units",
          "Kc will always have some unit",
          "Kp and Kc will have some unit if Δn ≠ 0"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-28",
        question: "The most important buffer in blood consist of",
        options: [
          "HCl and Cl-",
          "H2CO3 and Cl-",
          "H2CO3 and HCO3-",
          "HCl and HCO3-"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-29",
        question: "If a reversible reaction attains equilibrium quickly, it predicts that",
        options: [
          "Kc > 1",
          "Kc = 1",
          "Kc < 1",
          "Kc >> 1"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-30",
        question: "A precipitate is formed when",
        options: [
          "The solution become saturated",
          "The ionic product is nearly equal to the solubility product",
          "The ionic product is less than the solubility product",
          "The ionic product exceeds the solubility product"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-31",
        question: "Rate at which a reaction proceeds is directly related to the",
        options: [
          "Concentration of product",
          "Concentration of reactant",
          "Volume of reactant",
          "Volume of product"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-32",
        question: "Ksp is called",
        options: [
          "Solubility product",
          "Concentration",
          "Equilibrium",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "In exothermic reaction by decreasing the temperature equilibrium constant",
        options: [
          "Same",
          "Sometimes decreases Sometimes increases",
          "Reaction moves backward",
          "Increases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "If a product of a reaction act as a catalyst, such process is called",
        options: [
          "Positive catalyst",
          "Negative catalyst",
          "Auto catalyst",
          "Both a and b"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Chemical equilibrium is dynamic nature because",
        options: [
          "The equilibrium is attained slowly",
          "Concentration of reactant is always greater than products",
          "Concentration of reactant does not become equal at equilibrium",
          "Both forward and backward reaction occurs at all time with the same speed"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-36",
        question: "Purification of table salt NaCl by passing HCl gas through its saturated aqueous solution is an example of",
        options: [
          "Law of mass action",
          "Hess’s law",
          "Common ion effect",
          "Henry’s law"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-37",
        question: "For a gaseous reaction, when number of moles of reactant and product are equal",
        options: [
          "The value of Kp and Kc are different",
          "The value of Kp is greater than Kc",
          "The value of Kc is greater than Kp",
          "The value of Kp and Kc are same"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "At a constant temperature the concentration of reactant is increased at equilibrium, the equilibrium constant",
        options: [
          "Increases",
          "Remains unaffected",
          "Decreases",
          "First increases and then decreases"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-39",
        question: "A chemist who is concerned with large scale manufacture of useful compounds is primarily interested in",
        options: [
          "Minimizing the energy consumption",
          "Minimizing the reverse reaction",
          "Maximizing the backward reaction",
          "Decreasing the acidity of product"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-40",
        question: "A chemical reaction is catalyzed by a catalyst X. Hence, X",
        options: [
          "Increases activation energy of the reaction",
          "Does not affect equilibrium position of the reaction",
          "Increase rate constant of the reaction",
          "Reduce enthalpy of the reaction"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionization of KClO3 is suppressed by",
        options: [
          "Changing temperature",
          "Adding of KCl",
          "Adding of NaNO3",
          "Decreasing pressure"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "When the total number of moles of reactant and products are equal then the equilibrium state is not disturbed by",
        options: [
          "Concentration change",
          "Pressure change",
          "Temperature change",
          "Catalyst"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "In a buffer solution consisting of a weak acid and its salt, the ratio of concentration of salt to acid is increased 10-fold, then the pH of the solution",
        options: [
          "Increases by one",
          "Decrease by one",
          "Increases by 10 folds",
          "Decreases by 10 folds"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-44",
        question: "The equilibrium between water and its vapors in an open vessel",
        options: [
          "Can be achieved",
          "Cannot be achieved",
          "Depends on pressure",
          "Depends on temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-45",
        question: "Dissolution of which of these increase with temperature",
        options: [
          "Li2CO3",
          "LiCl",
          "NaCl",
          "KI"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-46",
        question: "When the equilibrium constant is small, it indicates",
        options: [
          "Reaction is at start",
          "Reaction is at equilibrium",
          "Reaction is at end",
          "Very little forward reaction"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Which of the following is not the characteristics feature of dynamic equilibrium",
        options: [
          "It’s characterized by constant macroscopic property",
          "It is only achieved in open system",
          "It can be obtained in either direction",
          "It can be achieved in closed system"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-48",
        question: "In equilibrium Ksp is expressed as\nBaSO4 ⇌ Ba²⁺ + SO4²⁻",
        options: [
          "Ksp = [BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]/[BaSO4]",
          "Ksp = [Ba²⁺][SO4²⁻]",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-49",
        question: "A reversible reaction is said to have attained equilibrium, when",
        options: [
          "Backward reaction stops",
          "Both backward and forward reaction take place at equal speed",
          "Both backward and forward reaction stop",
          "Concentration of each of the reactions and products become equal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-50",
        question: "Buffer action can be explained by",
        options: [
          "Le Chatelier principle",
          "Common ion effect",
          "Solubility product",
          "A and B"
        ],
        answer: 3
      }
  ];