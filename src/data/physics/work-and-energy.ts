export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const workAndEnergyQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-148",
      question: "If a force of one Newton acts on a body and displaces it through a distance of one meter in the direction of force then work done is one _____",
      options: [
        "joule",
        "dyne",
        "erg",
        "watt"
      ],
      answer: 0,
      explanation: "By definition, 1 Joule = 1 Newton × 1 Meter."
    },
    {
      id: "bumhs-2024-phys-156",
      question: "If a force of 1 N acts upon a body as it moves through a displacement of 0.5 m, at an angle of 60° with the direction of force then the work done W is:",
      options: [
        "0.25 J",
        "0.5 J",
        "10 J",
        "+4 J"
      ],
      answer: 0,
      explanation: "W = F · d cosθ = (1 N) × (0.5 m) × cos(60°) = 1 × 0.5 × 0.5 = 0.25 J."
    },
    {
      id: "bumhs-2024-phys-165",
      question: "The potential energy due to gravitational field near the surface of the Earth at a height h is given by _____.",
      options: [
        "½ mg/h",
        "mgh",
        "mg/h",
        "gh/m"
      ],
      answer: 1,
      explanation: "Gravitational potential energy near Earth's surface is calculated as P.E. = mgh."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-134",
      question: "A man pushes a wall with a force of 100 N for 10 seconds. The work done by the man on the wall is:",
      options: [
        "1000 J",
        "100J",
        "10 J",
        "zero"
      ],
      answer: 3,
      explanation: "Work requires displacement. Since the wall does not move (d = 0), work done W = F × d = 0."
    },
    {
      id: "bumhs-2025-phys-154",
      question: "If the angle between force and velocity is 90°, the power delivered by the force is:",
      options: [
        "Zero",
        "Maximum",
        "Minimum but not zero",
        "Infinite"
      ],
      answer: 0,
      explanation: "Instantaneous power P = F · v cosθ. When θ = 90°, cos(90°) = 0, so power delivered is zero."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-95",
      question: "The rate of doing work at any instant of time is called:",
      options: [
        "Work done",
        "Instantaneous power",
        "Average power",
        "Mechanical energy"
      ],
      answer: 1,
      explanation: "Instantaneous power is defined as the limiting value of ΔW/Δt as Δt approaches zero."
    },
    {
      id: "kmu-mdcat-2025-phys-96",
      question: "A 5 kg body falls from the height of 30 m towards the ground. All its potential energy is converted into heat on impact. What is the heat energy produced?",
      options: [
        "1270 J",
        "1370 J",
        "1470 J",
        "1570 J"
      ],
      answer: 2,
      explanation: "Heat energy produced = P.E. lost = mgh = 5 kg × 9.8 m/s² × 30 m = 1470 J."
    },
    {
      id: "kmu-mdcat-2025-phys-97",
      question: "Two students, A and B, each carry a 20 kg load to the top of a 10 m high staircase. Student A takes 10 sec, while student B takes 20 sec. Which statement is CORRECT?",
      options: [
        "Student A does more work than student B",
        "Student B uses more power than student A",
        "Both students do the same amount of work, but student A uses more power",
        "Student A and B use the same power since they lifted the same weight"
      ],
      answer: 2,
      explanation: "Both do equal work (mgh = 20 × 9.8 × 10 = 1960 J). Student A completes it in less time, so A expends more power (P = W/t)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-124",
      question: "Which of the following pairs correctly matches a physical quantity with its SI unit?",
      options: [
        "Energy- Newton",
        "Force - Joule",
        "Power- Watt",
        "Velocity-m/s²"
      ],
      answer: 2,
      explanation: "The SI unit of power is the Watt (W). Energy is measured in Joules, Force in Newtons, and Velocity in m/s."
    },
    {
      id: "kmu-phys-24-129",
      question: "How does an angle between the force applied and the direction of motion influence the work done on an object?",
      options: [
        "Work is constant regardless of the angle",
        "Work is maximum when the angle is 0°",
        "Work is negative when the angle is 90°",
        "Work is 0 when the angle is 45°"
      ],
      answer: 1,
      explanation: "W = F d cosθ is maximized at θ = 0° since cos(0°) = 1."
    },
    {
      id: "kmu-phys-24-130",
      question: "A nurse is pushing a wheelchair with an 80kg patient’s weight. How much work is done by the patient’s weight?",
      options: [
        "Half of the work",
        "Maximum work",
        "Minimum work",
        "No work"
      ],
      answer: 3,
      explanation: "The weight vector acts vertically downward, while motion is horizontal (90° angle). W = F d cos(90°) = 0."
    },
    {
      id: "kmu-phys-24-131",
      question: "If a constant force of 10N is applied to move an object 5m in the direction of the force, what is the work done?",
      options: [
        "2 J",
        "5 J",
        "15 J",
        "50 J"
      ],
      answer: 3,
      explanation: "W = F × d = 10 N × 5 m = 50 J."
    },
    {
      id: "kmu-phys-24-132",
      question: "The escape velocity of a body in the gravitational field of Earth is dependent on:",
      options: [
        "Angle on which it is thrown",
        "Both mass of the body and the angle at which it is thrown",
        "Mass of earth",
        "Mass of the body"
      ],
      answer: 2,
      explanation: "Escape velocity v_esc = √(2GM/R) depends on the mass of the celestial body (Earth) and its radius, independent of the mass or projection angle of the launched object."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-128",
      question: "During the drilling of a metal surface, the drill bit heats up. This heat comes from the:",
      options: [
        "Vibration of the tool",
        "Work done against friction",
        "Flow of electric current",
        "Compression of air"
      ],
      answer: 1,
      explanation: "Mechanical work done against frictional forces between the drill bit and metal is converted into thermal energy."
    },
    {
      id: "siba-2025-phys-140",
      question: "Potential energy decreases in the process of:",
      options: [
        "Compressing a spring",
        "Stretching a spring",
        "Releasing a stretched spring",
        "Holding the spring at maximum extension"
      ],
      answer: 2,
      explanation: "Releasing a stretched spring converts stored elastic potential energy back into kinetic energy, decreasing potential energy."
    },
    {
      id: "siba-2025-phys-141",
      question: "A diver of mass m is swimming at a depth h below the sea level. If the reference level is taken at sea level, the gravitational potential energy of the diver is:",
      options: [
        "0",
        "mgh",
        "-mgh",
        "2mgh"
      ],
      answer: 2,
      explanation: "Below the reference level (sea level), height is -h, making the potential energy U = -mgh."
    },
    {
      id: "siba-2025-phys-142",
      question: "A constant force F acts on a body and displaces it by distance Δd in a time Δt. The rate at which force is doing work is:",
      options: [
        "F × Δd",
        "F × Δt",
        "F × Δd / Δt",
        "F × Δt / Δd"
      ],
      answer: 2,
      explanation: "Rate of doing work P = ΔW/Δt = (F × Δd) / Δt."
    },
    {
      id: "siba-2025-phys-144",
      question: "When force and displacement are in opposite direction then the work done is said to be:",
      options: [
        "Positive",
        "Negative",
        "Infinite",
        "Maximum"
      ],
      answer: 1,
      explanation: "When force and displacement point in opposite directions (θ = 180°), cos(180°) = -1, yielding negative work."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-128",
      question: "The SI unit of power is:",
      options: [
        "Ampere",
        "Coulomb",
        "Ohm",
        "Watt",
        "Volt"
      ],
      answer: 3,
      explanation: "The SI unit of power is the Watt (W), equivalent to Joules per second."
    },
    {
      id: "siba-phy-24-146",
      question: "The constant power output of a machine is 6W. The energy delivered by it in 2 minutes is:",
      options: [
        "12 joules",
        "720 joules",
        "72 joules",
        "3 joules",
        "120 joules"
      ],
      answer: 1,
      explanation: "E = P × t = 6 W × (2 × 60 s) = 6 W × 120 s = 720 Joules."
    },
    {
      id: "siba-phy-24-156",
      question: "For maximum work done by a constant force, the angle between force and displacement is:",
      options: [
        "45°",
        "90°",
        "65°",
        "145°",
        "0°"
      ],
      answer: 4,
      explanation: "W = F d cosθ is at a maximum when θ = 0° (cos 0° = 1)."
    },
    {
      id: "siba-phy-24-173",
      question: "Newton (N) is not the SI unit of:",
      options: [
        "Centripetal force",
        "Tension",
        "Coulomb’s force",
        "Friction",
        "Momentum"
      ],
      answer: 4,
      explanation: "Momentum is measured in kg·m/s or N·s. All other listed options are forces, which are measured in Newtons."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-154",
      question: "The work done on a body is stored in it in the form of:",
      options: [
        "Power",
        "Energy",
        "Momentum",
        "Impulse"
      ],
      answer: 1,
      explanation: "By the work-energy theorem, work done on a system changes its energy state (stored as kinetic or potential energy)."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-126",
      question: "A man pulls a trolley through a distance of 50 m by applying a force of 100 N, which makes an angle of 60° with x-axis. Calculate the work done by the man? (Cos 60° = 0.5)",
      options: [
        "2500 J",
        "5340 J",
        "6430 J",
        "7120 J"
      ],
      answer: 0,
      explanation: "W = F · d cosθ = 100 N × 50 m × cos(60°) = 5000 × 0.5 = 2500 J."
    },
    {
      id: "szambu-phy-24-143",
      question: "Kilowatt hour is the commercial unit of electrical energy. 1 kWh is equal to",
      options: [
        "3.6 meV",
        "3.6 MeV",
        "3.6 J",
        "3.6 MJ"
      ],
      answer: 3,
      explanation: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ."
    },
    {
      id: "szambu-phy-24-160",
      question: "In British Engineering system, the unit of power is horsepower. Numerically 1000 hp is equal to",
      options: [
        "7460 watts",
        "74600 watts",
        "746000 watts",
        "7460000 watts"
      ],
      answer: 2,
      explanation: "1 hp = 746 W. Therefore, 1000 hp = 1000 × 746 W = 746,000 W."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-127",
      question: "If p is the momentum of an object and m is its mass, then its kinetic energy is:",
      options: [
        "p/2m",
        "p²/2m",
        "1/2 pm²",
        "1/2 P²m"
      ],
      answer: 1,
      explanation: "K.E. = ½ mv² = (mv)² / 2m = p² / 2m."
    },
    {
      id: "uhs-mdcat-2025-phys-154",
      question: "The work done by the gravitational force on an object as it moves from a reference level to a higher point is:",
      options: [
        "Always positive",
        "Always negative",
        "Zero",
        "Depends on the path taken"
      ],
      answer: 1,
      explanation: "As an object moves upward, gravity acts downward (θ = 180°), making the work done by gravity negative (-mgh)."
    },
    {
      id: "uhs-mdcat-2025-phys-157",
      question: "A 0.5 kg ball moving at 6 m/s has kinetic energy",
      options: [
        "9 J",
        "18 J",
        "6 J",
        "3 J"
      ],
      answer: 0,
      explanation: "K.E. = ½ mv² = 0.5 × 0.5 kg × (6 m/s)² = 0.25 × 36 = 9 J."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-129",
      question: "1 kWh = ________ J?",
      options: [
        "3.6 J",
        "3.6 kJ",
        "3.6 MJ",
        "3.6 GJ"
      ],
      answer: 2,
      explanation: "1 kWh = 1 kW × 1 hr = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ."
    },
    {
      id: "uhs-phys-24-130",
      question: "Which of the following is a non-conservative force?",
      options: [
        "Frictional force",
        "Electric force",
        "Elastic spring force",
        "Gravitational force"
      ],
      answer: 0,
      explanation: "Frictional force is non-conservative because work done against friction depends on the path and is dissipated as heat."
    },
    {
      id: "uhs-phys-24-131",
      question: "Work done is equal to",
      options: [
        "Effort × distance",
        "Effort + distance",
        "Effort – distance",
        "Effort ÷ distance"
      ],
      answer: 0,
      explanation: "In mechanical systems, Work = Force (Effort) × Distance moved in the direction of effort."
    },
    {
      id: "uhs-phys-24-132",
      question: "When a force of 1 N displaces its point of application by 1 m in the direction of force, the work done is",
      options: [
        "1 J",
        "10 J",
        "0 J",
        "1"
      ],
      answer: 0,
      explanation: "1 Newton × 1 Meter = 1 Joule of work."
    },
    {
      id: "uhs-phys-24-133",
      question: "An electric motor is used to lift the weight of 2.0 N through a vertical distance of 100 cm in 4 sec. What is the power output of the motor?",
      options: [
        "0.25 W",
        "0.5 W",
        "0.75 W",
        "1 W"
      ],
      answer: 1,
      explanation: "Height h = 100 cm = 1 m. Work done = F × h = 2.0 N × 1 m = 2 J. Power = W / t = 2 J / 4 s = 0.5 W."
    }
  ];