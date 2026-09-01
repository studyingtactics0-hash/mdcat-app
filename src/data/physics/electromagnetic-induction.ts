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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "The current which fluctuates from zero to maximum and maximum to zero is called",
        options: [
          "Steady current",
          "Direct current",
          "Alternating current",
          "Pulsating direct current"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "Primary secondary coils of a transformer have 50 and 200 turns respectively when primary is connected to a 9 volt battery secondary voltage is",
        options: [
          "90",
          "36",
          "18",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-3",
        question: "The induced current in a loop can be increased by",
        options: [
          "Using stronger magnetic field",
          "Replacing loop by a coil of many turns",
          "Moving the loop faster",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "The induced EMF does not depends on",
        options: [
          "Area of the coil",
          "Number of turns of the coil",
          "Resistance of the coil",
          "Length of the coil"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-5",
        question: "Magnetic flux passing normally through a unit area is called",
        options: [
          "Magnetization",
          "Magnetic flux density",
          "Magnetic field intensity",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "A step down Transformer reduces the voltage from 220 volt to 11 volt the primary coil draws a current of 5 ampere while secondary draws 90 ampere the efficiency of the transformer is",
        options: [
          "20%",
          "40%",
          "70%",
          "90%"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-7",
        question: "At what angle the magnetic flux will be half of its maximum value",
        options: [
          "30 degree",
          "60 degree",
          "90 degree",
          "45 degree"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "An EMF of 0.03 volt is induced in a wire when it moves it right angles to uniform magnetic field with speed of 4 m per second if the length of the wire in the field is 15 cm what is the flux density in Tesla",
        options: [
          "0.003",
          "0.005",
          "6",
          "12"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-9",
        question: "A generator supplies hundred volt to the primary coil of Transformer the primary is 50 terms and the secondary is 500 terms the secondary voltage is",
        options: [
          "1000 volt",
          "500 volt",
          "250 volt",
          "100 volt"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-10",
        question: "A transformer changes to 1800 volt and there are 6000 turns in secondary coil the number of turns on the primary coil is",
        options: [
          "40",
          "20",
          "10",
          "2"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "When magnet is in motion relative to a coil and induced EMF is produced it does not depend upon",
        options: [
          "Resistance of the coil",
          "Pole strength of the pole",
          "Motion of the magnet",
          "Number of turns of the coil"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-12",
        question: "Lenz's law is consistent with law of conservation of",
        options: [
          "Mass",
          "Charge",
          "Energy",
          "Momentum"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "Suppose this page is perpendicular to a uniform magnetic field and the magnetic flux through it is 5 Weber if the page is turned to 60 degrees around the flux through it will be",
        options: [
          "2.5wb",
          "5wb",
          "4.3wb",
          "5.8wb"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A copper ring is held horizontally and a bar magnet is dropped through the ring with its length along the axis of the ring the acceleration of the falling magnet is",
        options: [
          "Equal to that due to gravity",
          "Less than that due to gravity",
          "More than that due to gravity",
          "Depends on the diameter of the ring and length of the magnet"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In the actual transformer the output is always",
        options: [
          "Equal to input",
          "More than input",
          "Less than input",
          "Infinity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "Laminated core in a transformer is used to reduce",
        options: [
          "Power loss",
          "Eddy current losses",
          "Iron losses"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "As a loop of wire with resistance of 10 ohm moves in a constant uniform magnetic field it losses kinetic energy at a uniform rate of 4mJ/s second The induced current in the Loop is",
        options: [
          "0",
          "2mA",
          "2.8mA",
          "20mA"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "North pole of a magnet is moving towards a face of metallic loop then the face of the loop becomes",
        options: [
          "North Pole",
          "South Pole",
          "Both a and b",
          "Mono pole"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "In a coil where magnetic flux is constantly changing there should exist",
        options: [
          "A current",
          "An emf",
          "Torque",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-20",
        question: "To minimize the heating effect in the transmission lines",
        options: [
          "High current low voltage is used",
          "Same voltage and current is used",
          "High voltage low current is used",
          "High Voltage high current is used"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "Current can be induced in a coil by changing the area of the coil placed in",
        options: [
          "Uniform magnetic field",
          "Uniform magnetic and electric field",
          "Uniform electric field",
          "All of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-22",
        question: "A magnet is introduced into the coil and voltage is induced across the coil which of the following factor has no effect on the induced voltage",
        options: [
          "Thickness of the wire of the coil",
          "The time in which magnet is introduced",
          "The strength of the magnetic field",
          "Number of the turns the coil"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-23",
        question: "In ideal Transformer when potential difference is doubled the current is",
        options: [
          "Doubled",
          "Halved",
          "Tripled",
          "Same"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "The EMF induced in a coil is ...... the rate of change in flux linkages",
        options: [
          "Directly proportional to",
          "Inversely proportional to",
          "Independence of",
          "None of the above"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "The direction of induced current in a coil or circuit is such that it opposes every cause of its production this law is given by",
        options: [
          "Faraday",
          "Kirchhoffs",
          "Lenzs",
          "Amperes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "The practical application of the mutual induction phenomena is",
        options: [
          "Electric motor",
          "AC generator",
          "Transformer",
          "Transistor"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "To induce an EMF in a coil the linking magnetic flux",
        options: [
          "Must decreases",
          "Must increases",
          "Must remain constant",
          "Can either increases or decreases"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "When a transformer is connected to 120 volt AC it supplies 300 volt to device the current through secondary winding is 0.6 ampere and current through primary is 2 ampere the number of turns on primary is 400 what is the efficiency of transformer",
        options: [
          "75%",
          "80%",
          "85%",
          "100%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-29",
        question: "Two different loops are concentric and lie in the same plane the current in the outer loop is clockwise an increasing with time the induced current in the inner loop then is",
        options: [
          "Zero",
          "Clockwise",
          "Counter clockwise",
          "In a direction did depends on the ratio of the loop radii"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "A copper wire is moved in a uniform magnetic field such that it cuts the magnetic lines of force than",
        options: [
          "EMF will not be induced",
          "EMF will be induced",
          "Sometimes EMF will be induced in sometimes not",
          "Nothing can be predicted"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-31",
        question: "In Step Up Transformer voltage in the secondary increases and power in secondary",
        options: [
          "Remain same",
          "Decreases because voltage increases",
          "Increases because current increases",
          "Main increase if voltage remain same"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "Square loop of wire lies in the Plane of the page a decreasing magnetic field is directed into the page then used current in the loop is",
        options: [
          "Counter clockwise",
          "Clockwise",
          "Zero",
          "Up the left Edge end from right to left along the top Edge"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "In an ideal Transformer the following factors are used",
        options: [
          "Inputs and output power is same",
          "Currents are inversely proportional to voltage",
          "Currents are dial the proportional to voltage",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-34",
        question: "One can increase the performance of Transformer by",
        options: [
          "Using primary and secondary wires of less resistance",
          "Making the sheets of Transformer Core full insulated",
          "Making methods to increase the flux coupling between the coils",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-35",
        question: "The core of a transformer is made up of soft iron because",
        options: [
          "Iron is cheaper than copper",
          "Iron is a good conductor of current",
          "Iron is a good magnetic substance",
          "Iron has high melting point"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-36",
        question: "A 1 m^2 circular coil of 10 loops is placed parallel to changing magnetic field at 0.3 Tesla per second The induced dmf is",
        options: [
          "0.5V",
          "3V",
          "Zero",
          "3.5V"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "EMF induced by the motion of a conductor across a magnetic field is called",
        options: [
          "Back EMF",
          "Motional EMF",
          "Directional EMF",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "To improve efficiency of Transformer the flux coupling between primary and secondary coil should be",
        options: [
          "Small",
          "May be small or may be maximum",
          "Maximum",
          "Zero"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "A transformer is used to",
        options: [
          "Convert alternating current to direct current",
          "Convert direct current to alternating current",
          "Convert mechanical energy to electrical energy",
          "Change the level of alternating voltage"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-40",
        question: "A transformer steps down the voltage of 220 volt to 40 volt with the help of 40 turns on the secondary coil then number of turns on the primary are",
        options: [
          "20",
          "40",
          "220",
          "120"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "A transformer is used to light a 100 watt and 110 volt lamp from 220 volt mains if the main current is 0.5 ampere the efficiency of the transformer is a proximately",
        options: [
          "10%",
          "50%",
          "30%",
          "90%"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "For transmission of electricity to for of places from the AC power generation plant we always use",
        options: [
          "Transformer with several secondaries",
          "Step Up transformer",
          "Step down transformer",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "The number of turns in secondary coil is twice the number of turns in primary coil and ac source of 200 volt is connected across the primary the voltage across secondary is",
        options: [
          "440V",
          "100V",
          "200V",
          "400V"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-44",
        question: "In a step up Transformer the ratio of voltages is it if the advantage across primary is 120 volt the voltage across secondary will be",
        options: [
          "150 volt",
          "120 volt",
          "180 volt",
          "960 volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-45",
        question: "A transformer step down 100 volt to 10 volt operate advice within impedance of 2 ohms then current in a primary coil is",
        options: [
          "50 amperes",
          "5 amperes",
          "0.5 amperes",
          "0.05 amperes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "For a good Transformer the material of the core should have the has the hysterics loop of",
        options: [
          "Small area",
          "Large area",
          "No area",
          "Moderate area"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "Rectangular loop of wire is place perpendicular to a uniform magnetic field and then spin around one of its side its frequency The induced EMF is a maximum when",
        options: [
          "The flux is zero",
          "The flux is maximum",
          "The flux is half of its maximum value",
          "The derivatives of the falaks with respect to time is zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-48",
        question: "The primary of an ideal Transformer his 100 turns in the secondary has 600 turns then",
        options: [
          "The power in the primary circuit is less than that and the secondary circuit",
          "The current in the two circuits are the same",
          "The voltages in the two circuits are same",
          "The primary current is 6 times the secondary current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-49",
        question: "Alternating current changes",
        options: [
          "It's magnitude as well as direction",
          "Only magnitude but not direction",
          "Only direction but not magnitude",
          "Both remains same"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-50",
        question: "The coils of Transformer are",
        options: [
          "Magnetically linked",
          "Electrically linked",
          "Both a and b",
          "Isolated with each other"
        ],
        answer: 0
      }
  ];