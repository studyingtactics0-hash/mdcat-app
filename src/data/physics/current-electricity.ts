export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const currentElectricityQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-124",
      question: "Electrical measuring instruments convert electrical energy into:",
      options: [
        "Chemical",
        "Mechanical",
        "Nuclear",
        "Thermal"
      ],
      answer: 1,
      explanation: "Analog electrical measuring instruments (like galvanometers, ammeters, and voltmeters) utilize magnetic torque to move a needle or pointer, converting electrical energy into mechanical energy."
    },
    {
      id: "bumhs-2024-phys-128",
      question: "A fully charged capacitor with charge q and capacitance C is connected across a resistor R in series. Power dissipated across resistor will be zero after time:",
      options: [
        "t = 0",
        "t = RC",
        "t = 5RC",
        "t = infinity"
      ],
      answer: 3,
      explanation: "Capacitor discharge is exponential (q = q₀ e⁻ᵗ/ᴿᶜ). Mathematically, charge and current reach exactly zero only as time approaches infinity (t = ∞)."
    },
    {
      id: "bumhs-2024-phys-129",
      question: "Resistance is the measure of:",
      options: [
        "current",
        "voltage",
        "motion of charges",
        "opposition to the motion of charges"
      ],
      answer: 3,
      explanation: "Electrical resistance is defined as the measure of opposition to the flow of electric current (motion of charges) through a conductor."
    },
    {
      id: "bumhs-2024-phys-163",
      question: "Ohm’s law state that electric current through a conductor is proportional to the applied voltage provided:",
      options: [
        "electric current is constant",
        "electric field is constant",
        "resistance is constant",
        "electric charge is constant"
      ],
      answer: 2,
      explanation: "Ohm's law (V = IR) holds true provided physical conditions such as temperature remain unchanged, keeping the resistance (R) of the conductor constant."
    },
    {
      id: "bumhs-2024-phys-172",
      question: "Let five resistors, each of 10 ohm, are connected in parallel and the combination is then connected with a battery of 50 V. The current through each resistor will be:",
      options: [
        "5 A",
        "10 A",
        "25 A",
        "50 A"
      ],
      answer: 0,
      explanation: "In a parallel combination, full supply voltage appears across each branch. Current through each individual resistor I_i = V / R = 50 V / 10 Ω = 5 A."
    },
    {
      id: "bumhs-2024-phys-176",
      question: "A battery has an emf of 6.0 V and an internal resistance of 0.4 Ω. It is connected to a 2.6 Ω resistor through a switch. When switch is open, the potential difference across the switch is:",
      options: [
        "0 V",
        "6.0 V",
        "2.6 V",
        "5.2 V"
      ],
      answer: 1,
      explanation: "When the switch is open, no current flows (I = 0). There is zero internal voltage drop (Ir = 0), so the open terminals experience full EMF (6.0 V)."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-129",
      question: "The efficiency of an emf source becomes 50% when the load resistance is equal to:",
      options: [
        "internal resistance",
        "double the internal resistance",
        "half the internal resistance",
        "zero"
      ],
      answer: 0,
      explanation: "Efficiency η = V_terminal / E = R / (R + r). When load resistance equals internal resistance (R = r), η = R / (R + R) = 0.5 or 50%."
    },
    {
      id: "bumhs-2025-phys-139",
      question: "The power transmission lines delivering same amount of power. An increase in current will increase:",
      options: [
        "Heat produced in the wires",
        "Voltage output",
        "Frequency of AC",
        "Mechanical stress on the wires"
      ],
      answer: 0,
      explanation: "Joule heating loss in transmission lines is given by P_loss = I² R. Higher current significantly increases thermal/heat energy losses."
    },
    {
      id: "bumhs-2025-phys-157",
      question: "If the length of a copper wire connected in a circuit is doubled, its resistivity:",
      options: [
        "Becomes half",
        "Becomes double",
        "Becomes four times",
        "Remains same"
      ],
      answer: 3,
      explanation: "Resistivity is an intrinsic material property that depends on the substance type and temperature, not on geometric dimensions like length or area."
    },
    {
      id: "bumhs-2025-phys-158",
      question: "On increasing the length of a wire, the specific resistance (resistivity) of the wire:",
      options: [
        "increases",
        "decreases",
        "remains unchanged",
        "first increases, then decreases"
      ],
      answer: 2,
      explanation: "Specific resistance (resistivity) depends only on the material composition and temperature, remaining unchanged when physical dimensions vary."
    },
    {
      id: "bumhs-2025-phys-159",
      question: "When a battery is being charged, the direction of current inside the battery:",
      options: [
        "is from positive to negative terminal",
        "is the same as the direction of emf",
        "is opposite to the direction of emf",
        "depends on the load resistance"
      ],
      answer: 2,
      explanation: "During discharging, current inside a battery flows from negative to positive (along EMF). When charging, an external source forces current to flow backward internally from positive to negative terminal (opposite to EMF)."
    },
    {
      id: "bumhs-2025-phys-161",
      question: "A capacitor of capacitance 2 μF is connected in series with 1 MΩ resistance and 12 volts battery. The time taken by this capacitor take to 63% of its equilibrium charge will be:",
      options: [
        "1 second",
        "2 seconds",
        "10 seconds",
        "Infinite"
      ],
      answer: 1,
      explanation: "One time constant τ = R × C is defined as the time needed to reach ~63.2% of total charge. τ = (1 × 10⁶ Ω) × (2 × 10⁻⁶ F) = 2 seconds."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-116",
      question: "If the potential difference (V) across a conductor is doubled, keeping resistance (R) constant, the power dissipated (P) becomes:",
      options: [
        "Doubled",
        "Halved",
        "Four times",
        "Remains unchanged"
      ],
      answer: 2,
      explanation: "Power dissipated P = V² / R. Since power is proportional to V², doubling potential difference (2V)² quadruples the power dissipated (4 times)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-154",
      question: "The I-V Graph for a non-Ohmic material is always",
      options: [
        "Curved",
        "Horizontal",
        "Linear",
        "Perpendicular"
      ],
      answer: 0,
      explanation: "Non-Ohmic components (like diodes or filament bulbs) do not maintain constant resistance, producing a non-linear (curved) I-V characteristic curve."
    },
    {
      id: "kmu-phys-24-155",
      question: "Temperature coefficient of resistance is defined as increase in resistance per ohm original resistance per __?",
      options: [
        "Degree rise in temperature",
        "Unit increase in electric current",
        "Unit decrease in capacitance",
        "Degree drop in temperature"
      ],
      answer: 0,
      explanation: "Temperature coefficient α = ΔR / (R₀ ΔT), defined as fractional change in resistance per degree rise in temperature."
    },
    {
      id: "kmu-phys-24-156",
      question: "For metals, the temperature coefficient of resistance is:",
      options: [
        "Infinity",
        "Negative",
        "Positive",
        "Zero"
      ],
      answer: 2,
      explanation: "For metallic conductors, resistance increases as temperature rises due to increased lattice vibrations, giving a positive temperature coefficient."
    },
    {
      id: "kmu-phys-24-157",
      question: "If R1 and R2 are respectively the filament resistance of a 100-Watt bulb and 200-Watt bulb designed to operate on the same voltage, then power of:",
      options: [
        "R1 is two times R2",
        "R2 is two times R1",
        "R2 is four times R1",
        "R1 is four times R2"
      ],
      answer: 0,
      explanation: "Since P = V² / R, resistance is inversely proportional to rated power (R ∝ 1/P). Thus R1 / R2 = P2 / P1 = 200 / 100 = 2 → R1 = 2 R2."
    },
    {
      id: "kmu-phys-24-158",
      question: "The maximum power transfer theorem states that maximum power is delivered to the load when",
      options: [
        "The load resistance is half of the source resistance",
        "The load resistance is zero",
        "The load resistance is double the source resistance",
        "The load resistance is equal to the source resistance"
      ],
      answer: 3,
      explanation: "According to the maximum power transfer theorem, maximum power is delivered from a source to a load when load resistance (R) equals internal source resistance (r)."
    },
    {
      id: "kmu-phys-24-159",
      question: "Electron Volt (eV) is another unit of",
      options: [
        "Charge",
        "Current",
        "Energy",
        "Power"
      ],
      answer: 2,
      explanation: "One electron volt (1 eV = 1.6 × 10⁻¹⁹ J) is a unit of energy commonly used in atomic and nuclear physics."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-138",
      question: "The value of temperature co-efficient of a conductor is zero. This indicates that with the rise in temperature, resistance of conductor:",
      options: [
        "Increases",
        "Decreases",
        "Remain same",
        "Becomes zero"
      ],
      answer: 2,
      explanation: "When α = 0, ΔR = α R₀ ΔT = 0, meaning resistance remains constant with changes in temperature."
    },
    {
      id: "siba-2025-phys-162",
      question: "Internal resistance reduces the terminal voltage because it:",
      options: [
        "Produces back emf",
        "Causes power loss inside the battery",
        "Increases the current",
        "Decreases the emf"
      ],
      answer: 1,
      explanation: "Internal resistance r causes an internal potential drop (Ir) and power loss inside the cell, lowering terminal voltage V = E - Ir."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-124",
      question: "The unit of resistance is:",
      options: [
        "Volt",
        "Watt",
        "Coulomb",
        "Ohm",
        "Ampere"
      ],
      answer: 3,
      explanation: "The SI unit of electrical resistance is the Ohm (Ω)."
    },
    {
      id: "siba-phy-24-127",
      question: "The unit of resistivity is:",
      options: [
        "Ohm m",
        "Ampere",
        "Volt",
        "Watt",
        "Ohm"
      ],
      answer: 0,
      explanation: "Resistivity ρ = R A / L, giving SI units of Ohm-meter (Ω·m)."
    },
    {
      id: "siba-phy-24-129",
      question: "Total potential difference across the combination of three similar cells becomes maximum when:",
      options: [
        "Two cells are connected in series and the third cell in parallel with the combination",
        "All the three cells are connected in parallel",
        "Two cells are connected in parallel and the third cell in series with the combination",
        "The load connected to the combination is minimum",
        "All the three cells are connected in series"
      ],
      answer: 4,
      explanation: "Connecting cells in series adds their individual electromotive forces (E_total = E₁ + E₂ + E₃), maximizing total potential difference."
    },
    {
      id: "siba-phy-24-135",
      question: "“The current through a conductor is directly proportional to the potential difference between the ends of the conductor, provided that physical conditions remain the same.” This is:",
      options: [
        "Laplace’s Law",
        "Ohm’s Law",
        "Coulomb’s Law",
        "Charles’s Law",
        "Boyle’s Law"
      ],
      answer: 1,
      explanation: "This is the classic definition of Ohm's Law."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-140",
      question: "High slope of Ohm’s law graph means:",
      options: [
        "Low resistance",
        "High resistance",
        "Open circuit",
        "Low current"
      ],
      answer: 0,
      explanation: "For an I vs V graph (current on y-axis, voltage on x-axis), slope = ΔI / ΔV = 1/R. A steeper/higher slope corresponds to smaller resistance (low resistance)."
    },
    {
      id: "szambu-2025-phys-144",
      question: "What will potential difference, if a wire has resistance of 10 Ω and current 2A flow through it:",
      options: [
        "5V",
        "10V",
        "20V",
        "40V"
      ],
      answer: 2,
      explanation: "Using Ohm's law V = I × R = 2 A × 10 Ω = 20 V."
    },
    {
      id: "szambu-2025-phys-149",
      question: "A high internal resistance battery is not suitable for heavy loads due to:",
      options: [
        "Excess voltage drop",
        "High terminal voltage",
        "Infinite emf",
        "Constant current"
      ],
      answer: 0,
      explanation: "Heavy load draws high current I, resulting in a large internal voltage drop (Ir) across high internal resistance r, severely reducing terminal voltage."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-134",
      question: "Which one of the following is the SI-unit of conventional current in a conductor?",
      options: [
        "Ampere",
        "Coulomb",
        "Ohm",
        "Ohm meter"
      ],
      answer: 0,
      explanation: "The SI unit of electric current is the Ampere (A)."
    },
    {
      id: "szambu-phy-24-137",
      question: "The gradient/slope of I-V (Current-Potential) graph provides",
      options: [
        "Conductance",
        "Conductivity",
        "Resistance",
        "Resistivity"
      ],
      answer: 0,
      explanation: "Slope of an I-V graph is ΔI / ΔV = 1/R = Conductance G."
    },
    {
      id: "szambu-phy-24-163",
      question: "Which one of the following materials has negative temperature coefficient of resistance?",
      options: [
        "Copper",
        "Germanium",
        "Sulphur",
        "Zinc"
      ],
      answer: 1,
      explanation: "Semiconductors like Germanium (Ge) and Silicon (Si) have negative temperature coefficients of resistance (resistance drops as temperature increases)."
    },
    {
      id: "szambu-phy-24-174",
      question: "If 60 A current passes through a wire in 60 seconds. What will be the value of charge existing in the wire?",
      options: [
        "4.6 × 10⁻³ C",
        "3.6 × 10⁻³ C",
        "2.6 × 10³ C",
        "3.6 × 10³ C"
      ],
      answer: 3,
      explanation: "Charge Q = I × t = 60 A × 60 s = 3600 C = 3.6 × 10³ C."
    },
    {
      id: "szambu-phy-24-176",
      question: "In any electric circuit, power output (P_out) will be maximum when (Whereas R = External Resistance, r = Internal Resistance)",
      options: [
        "R = 0 but r ≠ 0",
        "r = 0 but R ≠ 0",
        "R = ∞ and r = 0",
        "R = r"
      ],
      answer: 3,
      explanation: "By the Maximum Power Transfer Theorem, maximum output power occurs when external load resistance equals internal source resistance (R = r)."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-137",
      question: "The reciprocal of the resistivity of a material is called its:",
      options: [
        "impedance",
        "conductivity",
        "admittance",
        "reactance"
      ],
      answer: 1,
      explanation: "Electrical conductivity (σ) is defined as the mathematical reciprocal of resistivity (σ = 1 / ρ)."
    },
    {
      id: "uhs-mdcat-2025-phys-147",
      question: "Terminal voltage of a cell equals its EMF only when:",
      options: [
        "No current flows",
        "Current is maximum",
        "Internal resistance is infinite",
        "Load resistance is zero"
      ],
      answer: 0,
      explanation: "Terminal potential difference V = E - Ir. When no current flows through the circuit (I = 0), V = E."
    },
    {
      id: "uhs-mdcat-2025-phys-152",
      question: "If the length of the conductor is made 4 times its original length, its resistance becomes",
      options: [
        "quarter",
        "half",
        "zero",
        "4 times"
      ],
      answer: 3,
      explanation: "Resistance R = ρ L / A. Resistance is directly proportional to length L, so quadrupling length multiplies resistance by 4."
    },
    {
      id: "uhs-mdcat-2025-phys-153",
      question: "The unit of temperature coefficient of resistivity is",
      options: [
        "1/C",
        "1/K",
        "1/A",
        "1/Ω"
      ],
      answer: 1,
      explanation: "Temperature coefficient α = Δρ / (ρ₀ ΔT), giving SI units of per Kelvin (K⁻¹ or 1/K)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-152",
      question: "A charge of 90 C passes through a wire for 30 seconds. Then the current in the wire will be",
      options: [
        "3 A",
        "0.3 A",
        "3 mA",
        "0.3 mA"
      ],
      answer: 0,
      explanation: "Current I = Q / t = 90 C / 30 s = 3 A."
    },
    {
      id: "uhs-phys-24-153",
      question: "The magnitude of the current in metals is proportional to the potential difference across it as long as temperature of conductor is kept constant is known as",
      options: [
        "Joule’s Law",
        "Gauss Law",
        "Ohm’s Law",
        "Ampere’s Law"
      ],
      answer: 2,
      explanation: "This statement expresses Ohm's Law (V = IR)."
    },
    {
      id: "uhs-phys-24-154",
      question: "When length of copper wire is doubled then resistivity becomes",
      options: [
        "Double",
        "Half",
        "Remains same",
        "Four times"
      ],
      answer: 2,
      explanation: "Resistivity is an intrinsic property dependent only on material identity and temperature, remaining constant when physical dimensions change."
    },
    {
      id: "uhs-phys-24-155",
      question: "The resistance of semiconductor with rise in temperature",
      options: [
        "Increases",
        "Decreases",
        "Remain same",
        "Infinite"
      ],
      answer: 1,
      explanation: "Heating a semiconductor liberates additional charge carriers (electron-hole pairs), increasing conductivity and decreasing resistance."
    },
    {
      id: "uhs-phys-24-156",
      question: "Volt × Ampere is the measure of",
      options: [
        "Current",
        "Volt",
        "Resistance",
        "Power"
      ],
      answer: 3,
      explanation: "Power P = V × I. Therefore, Volt × Ampere equals Watts, measuring electrical Power."
    }
  ];