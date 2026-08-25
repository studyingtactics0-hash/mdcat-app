export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const electromagneticInductionQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-127",
      question: "The direction of induced e.m.f can be determined by:",
      options: [
        "Faraday’s law",
        "Lenz’s law",
        "galvanometer",
        "Fleming’s right hand rule"
      ],
      answer: 1,
      explanation: "Lenz's law provides the direction of the induced EMF and current, stating that the induced current always flows in a direction that opposes the change in magnetic flux that caused it."
    },
    {
      id: "bumhs-2024-phys-138",
      question: "Let two current carrying wires are placed near a conducting loop such that loop is midway between wires as shown below. If i₁ and i₂ are decreasing at the same rate, induced current in the loop will be:",
      options: [
        "zero",
        "clockwise",
        "anticlockwise",
        "sometime clockwise sometime anticlockwise"
      ],
      answer: 0,
      explanation: "Because the loop is situated centrally between two symmetric wires carrying currents changing at equal rates, the magnetic flux changes created by the two wires cancel each other out in the loop, yielding zero net change in flux and zero induced current."
    },
    {
      id: "bumhs-2024-phys-142",
      question: "If the rate of change of current Iₚ in the primary coil is increased by one half then emf induced in the secondary coil becomes:",
      options: [
        "Half",
        "Double",
        "2/3 times",
        "3/2 times"
      ],
      answer: 3,
      explanation: "Induced secondary EMF ε_s = M (ΔI_p / Δt). If the rate of change of primary current is increased by one half (i.e. becomes 1 + 1/2 = 3/2 of its initial value), the induced EMF becomes 3/2 times the original EMF."
    },
    {
      id: "bumhs-2024-phys-158",
      question: "Which of the following method can be used to vary induced emf in a coil?",
      options: [
        "Alternating magnetic field",
        "Moving the coil in the magnetic field",
        "Changing the shape of coil",
        "All of the above"
      ],
      answer: 3,
      explanation: "Induced EMF depends on the rate of change of magnetic flux (Φ = B A cosθ). Flux can be altered by changing field strength B (alternating field), changing relative position/orientation (moving coil), or changing effective loop area A (deforming coil)."
    },
    {
      id: "bumhs-2024-phys-159",
      question: "Let an inductor is connected with battery. If emf induced in the inductor opposes emf of battery, then electric current through the circuit is:",
      options: [
        "decreasing",
        "increasing",
        "constant",
        "alternating"
      ],
      answer: 1,
      explanation: "By Lenz's law, self-induced back EMF opposes the battery EMF when the circuit current is increasing (trying to resist the growth of magnetic flux)."
    },
    {
      id: "bumhs-2024-phys-168",
      question: "The induced emf in a 100 turns coil if change in flux through the coil is 2 × 10⁻⁴ Wb in 0.02 sec:",
      options: [
        "1.0 V",
        "–1.0 V",
        "10 V",
        "–10 V"
      ],
      answer: 1,
      explanation: "By Faraday's law, ε = -N (ΔΦ / Δt) = -100 × (2 × 10⁻⁴ Wb / 0.02 s) = -100 × 0.01 = -1.0 V."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-138",
      question: "According to the Faraday’s law of electromagnetic induction, emf induced in a coil placed in changing magnetic field, depends upon:",
      options: [
        "the magnetic field",
        "amount of current",
        "resistance of a coil",
        "the rate of change of magnetic flux"
      ],
      answer: 3,
      explanation: "Faraday's law states that the magnitude of induced EMF is directly proportional to the time rate of change of magnetic flux through the circuit (ε = -N ΔΦ/Δt)."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-82",
      question: "According to Lenz’s Law, the direction of induced current in a conductor is such that it:",
      options: [
        "Opposes the change in magnetic flux",
        "Enhances the change in magnetic flux",
        "Is perpendicular to the magnetic field",
        "Is parallel to the magnetic field"
      ],
      answer: 0,
      explanation: "Lenz's law states that the polarity of induced EMF generates a current whose magnetic field opposes the change in magnetic flux that produced it."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-163",
      question: "One-meter-long copper rod is moving with speed 20 m/sec in the magnetic field of strength 0.6 tesla what is the value of induced emf?",
      options: [
        "12 V",
        "19.4 V",
        "20.6 V",
        "25 V"
      ],
      answer: 0,
      explanation: "Motional EMF ε = v B L = (20 m/s) × (0.6 T) × (1 m) = 12 V."
    },
    {
      id: "kmu-phys-24-164",
      question: "The inductance of a coil depends on.",
      options: [
        "Number of turns",
        "Resistance of the wire used",
        "Type of insulation used on the wire",
        "Voltage applied to the coil"
      ],
      answer: 0,
      explanation: "Self-inductance L = (μ N² A) / l. It depends on geometric factors including total turns N, cross-sectional area A, core length l, and core permeability μ."
    },
    {
      id: "kmu-phys-24-165",
      question: "The direction of induced current is determined by?",
      options: [
        "Ampere’s law",
        "Faraday’s law",
        "Lenz’s law",
        "Ohm’s law"
      ],
      answer: 2,
      explanation: "Lenz's law specifically determines the direction of induced current in electromagnetic induction."
    },
    {
      id: "kmu-phys-24-166",
      question: "Lenz’s law is consistent with the",
      options: [
        "Ampere’s Law",
        "Faraday’s law",
        "Law of conservation of energy",
        "Ohm’s Law"
      ],
      answer: 2,
      explanation: "Lenz's law is a direct consequence of the law of conservation of energy; mechanical work must be done against opposing magnetic forces to generate electrical energy."
    },
    {
      id: "kmu-phys-24-167",
      question: "The basic principle behind the operation of the transformer is",
      options: [
        "Coulomb’s law",
        "Electromagnetic induction",
        "Gas’s Law",
        "Hess’s law"
      ],
      answer: 1,
      explanation: "Transformers operate based on mutual electromagnetic induction between primary and secondary windings."
    },
  
    // --- SIBA 2025 PHYS ---
    {
      id: "siba-2025-phys-145",
      question: "In a step-up transformer, if the secondary voltage is increased by a factor of 10, the current in secondary coil will be:",
      options: [
        "10 times higher than the primary current",
        "10 times lower than the primary current",
        "Equal to the primary current",
        "One-tenth of the primary current in transformer"
      ],
      answer: 3,
      explanation: "In an ideal transformer, power remains conserved (V_p I_p = V_s I_s). Increasing secondary voltage by 10 times reduces secondary current to one-tenth of primary current (I_s = I_p / 10)."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-130",
      question: "Which one of the following is correct for a transformer?",
      options: [
        "Transformer converts dc into ac",
        "Transformer converts mechanical energy into electrical energy",
        "Transformer works on the principle of mutual induction",
        "Transformer converts ac into dc",
        "Transformer converts electrical energy into mechanical energy"
      ],
      answer: 2,
      explanation: "A transformer is a static device that transfers electrical energy between circuits via mutual electromagnetic induction."
    },
    {
      id: "siba-phy-24-164",
      question: "The alternating emf (ε) generated by an AC generator is given by:",
      options: [
        "ε = BvL sin θ",
        "ε = NBL sin θ",
        "ε = NBL cos θ",
        "ε = BNA ω sin θ",
        "ε = BvL cos θ"
      ],
      answer: 3,
      explanation: "The instantaneous generated EMF in a rotating coil AC generator is given by ε = N B A ω sin(ωt) or ε = BNA ω sin θ."
    },
    {
      id: "siba-phy-24-167",
      question: "The mathematical relationship between Magnetic flux and magnetic flux density is:",
      options: [
        "Δφ = (B)(A)cosθ",
        "Δφ = (B)(Δt) cosθ",
        "B = (Δφ)(Δt) cosθ",
        "B = (Δφ)(Δt)",
        "Δφ = (B)(Δt)"
      ],
      answer: 0,
      explanation: "Magnetic flux Φ = B · A = B A cosθ, where B represents magnetic flux density and A represents area."
    },
    {
      id: "siba-phy-24-174",
      question: "Faraday’s law of electromagnetic induction is mathematically represented as:",
      options: [
        "ε = −N (ΔB/Δt)",
        "ε = −N (ΔI/Δt)",
        "ε = −M (Δφ/Δt)",
        "ε = −N (Δφ/Δt)",
        "ε = −M (Δφ/Δt)"
      ],
      answer: 3,
      explanation: "Faraday's law with Lenz's negative sign is expressed as ε = -N (ΔΦ / Δt)."
    },
  
    // --- SZAMBU 2025 PHYS ---
    {
      id: "szambu-2025-phys-134",
      question: "A conducting ring is placed near a current-carrying coil. As the current in the coil increases, the induced current in the ring flows:",
      options: [
        "In the direction of magnetic field",
        "To increases the magnetic flux",
        "To oppose increasing magnetic flux",
        "Randomly without a definite direction"
      ],
      answer: 2,
      explanation: "According to Lenz's law, induced current always flows in a direction that creates an opposing magnetic field to counteract increasing flux."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-131",
      question: "The Lenz’s law of electromagnetic induction is in accordance with law of conservation of",
      options: [
        "Charge",
        "Energy",
        "Mass",
        "Momentum"
      ],
      answer: 1,
      explanation: "Lenz's law expresses the principle of conservation of energy applied to electromagnetic induction."
    },
    {
      id: "szambu-phy-24-158",
      question: "A coil of 100 turns is linked by a flux of 20 mWb. If this flux is reversed in a time of 2 ms, calculate the average induced emf in the coil?",
      options: [
        "1000 volts",
        "2000 volts",
        "3000 volts",
        "4000 volts"
      ],
      answer: 1,
      explanation: "Initial flux Φ₁ = +20 mWb, final flux after reversal Φ₂ = -20 mWb. Total flux change ΔΦ = Φ₁ - Φ₂ = 40 mWb = 40 × 10⁻³ Wb. Magnitude of induced EMF |ε| = N (ΔΦ / Δt) = 100 × (40 × 10⁻³ Wb / 2 × 10⁻³ s) = 100 × 20 = 2000 V."
    },
    {
      id: "szambu-phy-24-165",
      question: "The rate of change of magnetic flux is measured in",
      options: [
        "Coulomb",
        "Ohm",
        "Volt",
        "Watt"
      ],
      answer: 2,
      explanation: "Rate of change of magnetic flux ΔΦ / Δt equals induced electromotive force (EMF), which has SI units of Volts (Wb/s = V)."
    },
  
    // --- UHS MDCAT 2025 PHYS ---
    {
      id: "uhs-mdcat-2025-phys-132",
      question: "In an ideal transformer, if the primary voltage is doubled and the turns ratio remains the same, what happens to the secondary current?",
      options: [
        "Doubles",
        "Halves",
        "Remains the same",
        "Becomes four times"
      ],
      answer: 0,
      explanation: "Secondary voltage V_s = N_s/N_p × V_p doubles when primary voltage V_p is doubled. For a fixed load impedance R_L, secondary current I_s = V_s / R_L also doubles."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-160",
      question: "The induced current will flow in such a direction so as to oppose the cause that produces it is statement of",
      options: [
        "Ampere’s Law",
        "Faraday’s Law",
        "Lenz’s Law",
        "Joule’s Law"
      ],
      answer: 2,
      explanation: "This is the precise statement of Lenz's law."
    },
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
      id: "uhs-phys-24-162",
      question: "Electric generators and transformers are based on the principles of",
      options: [
        "Coulomb’s law",
        "Faraday’s law",
        "Ampere’s law",
        "Hook’s law"
      ],
      answer: 1,
      explanation: "Both AC generators and transformers operate on Faraday's law of electromagnetic induction."
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
      explanation: "An ideal transformer operates with 100% efficiency, so input power equals output power (P_in = P_out)."
    }
  ];