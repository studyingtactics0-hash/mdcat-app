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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Power can be defined as the dot product of",
        options: [
          "Force and displacement",
          "Force and time",
          "Force and velocity",
          "Force and mass"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "When the speed of your car is halved by what factor does its kinetic energy decreases",
        options: [
          "1/4",
          "1/2",
          "1/8",
          "1/6"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "A tennis ball is dropped on to a horizontal surface. As the ball bounce up and down, the height of each bounce gradually decreases during the motion of the ball",
        options: [
          "The kinetic energy of ball is constant",
          "The potential energy of ball is constant",
          "The sum of kinetic energy and potential energy of ball is constant",
          "The total of ball, ground and air is constant"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "A truck and car are moving with equal velocity on applying brakes, both will stop after certain distance then?",
        options: [
          "Truck will cover less distance before stopping",
          "Car will cover less distance before stopping",
          "Both will cover equal",
          "None of the mentioned"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "1 hp equals to",
        options: [
          "746 watt",
          "346 watt",
          "246 watt",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "A body of mass 1 kg moving with initial velocity of 1 m/s is acted upon by a force for 1 sec. The increase in KE is?",
        options: [
          "1.0J",
          "2.0J",
          "2.5J",
          "3.0J"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "An electric motor creates a tension of 45N in hosting cable and reels it in at the rate of 2 m/s the power of the motor is",
        options: [
          "15Kw",
          "90 watt",
          "225Kw",
          "900hp"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Potential energy per unit volume is given by",
        options: [
          "mgh",
          "Mgh/P",
          "gh",
          "Pgh"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "The power output of a lamp is 6W how much energy does the lamp give out in 2 minutes",
        options: [
          "3J",
          "120J",
          "720J",
          "430J"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "The workdone in holding a weight of 40N at height of 3m above the floor for 2 sec is, in joules",
        options: [
          "0",
          "40",
          "30",
          "120"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "Work done is not product of \"F\" and \"S\" if F and S are non zero then the work done will be zero when",
        options: [
          "They are along same direction",
          "They are perpendicular to each other",
          "They are parallel to each other",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "One erg is equal to",
        options: [
          "10^-5 dynes",
          "10^-7 dynes",
          "10^-7 joules",
          "10^-5 newton"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "A ball is thrown vertically upwards. Neglecting air resistance, which statement is correct",
        options: [
          "The kinetic energy of ball is greatest at the greatest height attained",
          "The potential energy of ball increases uniformly with time during the ascent",
          "By the principal of conservation momentum, the momentum of ball is constant throughout its motion",
          "By the principal of conservation of energy, the total energy of the ball is constant throughout its motion"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "Slope of work time graph is equal to",
        options: [
          "Displacement",
          "Power",
          "Acceleration",
          "Energy"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "The power needed to lift a mass of 5000g to height of 1 m in 2 sec is",
        options: [
          "2.45 watt",
          "245 watt",
          "24.5 watt",
          "2.45 kw"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "The rate of doing Work is zero when angle between force and velocity is",
        options: [
          "0 degree",
          "180 degree",
          "90 degree",
          "60 degree"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "Which unit expresses work per unit charge?",
        options: [
          "Hertz",
          "Watt",
          "Joule",
          "Volt"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "The bodies of one kg and four kg have same kinetic energy the ratio in their momenta will be",
        options: [
          "1:2",
          "1:16",
          "1:4",
          "1:1"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "Which of the following type of force cannot do work on which it acts",
        options: [
          "Frictional force",
          "Centripetal force",
          "Gravitational force",
          "Restoring force"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-20",
        question: "When the velocity of body is doubled and the mass is halved the KE will be",
        options: [
          "Unchanged",
          "Doubled",
          "Halved",
          "Four times"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-21",
        question: "If force and displacement of particle in direction of force are doubled work would be",
        options: [
          "Double",
          "half",
          "1/4 times",
          "4 times"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-22",
        question: "A man pushes a wall with 50N and it displaces if zero m his work is",
        options: [
          "Negative",
          "Positive",
          "No work",
          "May all possible"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "The power of load is one watt if",
        options: [
          "1 ampere current flows through a conductor when a potential difference of 1 volt is applied",
          "0.1 ampere current flows when a potential difference of 0.1 volt is applied",
          "1 ampere current flows when a potential difference of 10 volt is applied",
          "10 amperes current flows when a potential difference of 10 volt is applied"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "In inelastic collision .... remains conserved .... but .... changes",
        options: [
          "KE and momentum",
          "Momentum and KE",
          "None",
          "Direction and momentum"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-25",
        question: "The amount of work done against Friction to slide a box in a straight line across a uniform horizontal floor depends most on the",
        options: [
          "Time taken to move the box",
          "Distance the box is moved",
          "Speed of the box",
          "Direction of the box's motion"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-26",
        question: "The time taken by an engine of power 10Kw to lift a mass of 200 kg to the height of 40m is",
        options: [
          "2s",
          "4s",
          "8s",
          "16s"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "In gravitational field, the work done in closed path is",
        options: [
          "Zero",
          "Positive",
          "Negative",
          "Minimum"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "In freely falling system, if potential energy is equal to kinetic energy, the force of friction of air will",
        options: [
          "Be negligible",
          "Be maximum",
          "Be zero",
          "Not be predicted"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "Which of the following is biggest unit of energy",
        options: [
          "Joule",
          "Micro joule",
          "Electron volt",
          "None of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "A 70kg athlete runs up a hill through a height 3m in 2 seconds. His average power output will be",
        options: [
          "8000W",
          "9000W",
          "9080W",
          "1030W"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "An 80kg man runs up a hill through a height of 4m in 3 seconds, how much work does he do against gravitational forces",
        options: [
          "2136J",
          "3136J",
          "4136J",
          "5136J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "If 10kg mass is dropped from a certain height. Hits the ground with speed 10m/s the height will be",
        options: [
          "100m",
          "10m",
          "50m",
          "5m"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "When force and displacement are in the same direction, the kinetic energy of the body",
        options: [
          "Increases",
          "Decreases",
          "Remains constant",
          "Becomes zero"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-34",
        question: "At what angle the workdone will be half of its maximum value",
        options: [
          "0 degree",
          "45 degree",
          "60 degree",
          "30 degree"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "Kilo watt hour is the unit of",
        options: [
          "Power",
          "Force",
          "Momentum",
          "Energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-36",
        question: "Energy stored in the spring of watch is",
        options: [
          "Electrical energy",
          "Kinetic energy",
          "Potential energy",
          "Elastic potential energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-37",
        question: "A stone is thrown up from the surface of the earth when it reaches at maximum height its total energy is equal to",
        options: [
          "mgh",
          "Zero",
          "1/2mv^2",
          "2mgh"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-38",
        question: "A shot leaves a gun at the rate of 160m/s calculate the greatest distance to which it could be projected",
        options: [
          "2460m",
          "2560m",
          "2680m",
          "2760m",
          "2860m"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "1.75m height weight-lifter rises weights with a Mass of 50kg to a height of 0.5m above his head how much work is being done by him?",
        options: [
          "2125J",
          "250J",
          "100J",
          "50J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "The unit of power in British engineering system is",
        options: [
          "Watt",
          "Choice 3",
          "Choice 4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-41",
        question: "Identify the examples of kinetic energy",
        options: [
          "A moving ball can break a glass window",
          "A striking hammer can drive a nail",
          "A stone thrown can upward can lift itself against the force of gravity",
          "1 only",
          "2 only",
          "3 only",
          "2 and 3 only",
          "1, 2 and 3 only"
        ],
        answer: 7
      },
      {
        id: "testmoz-phys-42",
        question: "KE is defined as dot product of",
        options: [
          "Momentum and force",
          "Force and velocity",
          "Average momentum and velocity",
          "All"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-43",
        question: "A body is falling from a height h. After it has fallen a height h/2, it will possess",
        options: [
          "Only potential energy",
          "Kinetic energy",
          "Half potential and half kinetic energy",
          "More kinetic less potential"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-44",
        question: "If mass and speed of moving object is double, the KE will be",
        options: [
          "Eight times",
          "Four times",
          "Doubled",
          "Six times",
          "Sixteen times"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "If a body of mass 2kg is raised vertically through 2m, then the work will be",
        options: [
          "38.2J",
          "39.2J",
          "392.1J",
          "40J"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-46",
        question: "The workdone by the gravity during the descent of projectile",
        options: [
          "Is positive",
          "Is negative",
          "is zero",
          "Depends for its sign on the direction of the y axis"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "Which one of the following quantities cannot be used as a unit of potential energy",
        options: [
          "Watt sec",
          "Kgm^2/s^2",
          "gcm/s^2",
          "ft lb"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-48",
        question: "The average power and instantaneous power become equal if work is done at",
        options: [
          "Any rate",
          "Uniform rate",
          "Variable rate",
          "High rate"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "The work to a system is characterized as",
        options: [
          "Positive",
          "Negative",
          "Both",
          "Either positive or negative"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "A ball whose kinetic energy is E is thrown at an angle 45 degree with horizontal its kinetic energy at the highest point of its trajectory will be",
        options: [
          "E",
          "E/2",
          "E/1.414",
          "Zero"
        ],
        answer: 1
      }
  ];