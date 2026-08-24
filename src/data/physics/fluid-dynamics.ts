export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const fluidDynamicsQuestions: Question[] = [
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-130",
      question: "Water flows through a horizontal pipe with area of 0.02 m² at 3m/s. The pipe narrows to 0.01 m². The velocity in the narrow section is:",
      options: [
        "0.5 m/s",
        "1.5 m/s",
        "3 m/s",
        "6 m/s"
      ],
      answer: 3,
      explanation: "By the equation of continuity, A₁v₁ = A₂v₂ → (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 0.06 / 0.01 = 6 m/s."
    },
    {
      id: "bumhs-2025-phys-147",
      question: "When the diameter of a blood vessel narrows, the velocity and pressure of blood will:\n(A) Velocity: increase | Pressure: increase\n(B) Velocity: increase | Pressure: decrease\n(C) Velocity: decrease | Pressure: increase\n(D) Velocity: decrease | Pressure: decrease",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      answer: 1,
      explanation: "By the equation of continuity, narrowing the vessel increases blood velocity. By Bernoulli's principle, higher fluid velocity results in lower fluid pressure."
    },
    {
      id: "bumhs-2025-phys-155",
      question: "Bernoulli’s principle helps explain why blood pressure drops when blood velocity:",
      options: [
        "Increases in narrow vessel",
        "Decreases in narrow vessel",
        "Increases in wide vessel",
        "Decreases in wide vessel"
      ],
      answer: 0,
      explanation: "According to Bernoulli's principle, an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-101",
      question: "A ball of weight Fg is falling vertically downward through air. If the drag force acting on it at some instant is Fd, what is the Fnet (net force) on the ball?",
      options: [
        "Fg – Fd",
        "Fg + Fd",
        "Fd – Fg",
        "Fd / Fg"
      ],
      answer: 0,
      explanation: "Weight Fg acts downward while fluid drag force Fd opposes motion acting upward, yielding Fnet = Fg - Fd."
    },
    {
      id: "kmu-mdcat-2025-phys-102",
      question: "Most kinds of fluid flow are turbulent rather than laminar because of:",
      options: [
        "Zero viscosity",
        "Very low velocities",
        "High velocities",
        "No resistance"
      ],
      answer: 2,
      explanation: "When fluid velocity exceeds a certain threshold (critical velocity), steady laminar flow breaks down into turbulent flow with eddies and swirls."
    },
    {
      id: "kmu-mdcat-2025-phys-103",
      question: "According to the equation of continuity, when the cross-sectional area of a pipe decreases, the fluid velocity:",
      options: [
        "Increases",
        "Decreases",
        "Remains the same",
        "Becomes zero"
      ],
      answer: 0,
      explanation: "The equation of continuity states A₁v₁ = A₂v₂. Velocity is inversely proportional to cross-sectional area."
    },
    {
      id: "kmu-mdcat-2025-phys-104",
      question: "Water flows steadily through a pipe that gradually narrows. At the wider end, the velocity of water is 3 m/s. Which statement is CORRECT about the pressure in the narrower end compared to the wider end?",
      options: [
        "Pressure is lower at the narrow end because velocity is higher",
        "Pressure is higher at the narrow end because velocity is higher",
        "Pressure is the same at both ends since flow is continuous",
        "Pressure is independent of velocity of water"
      ],
      answer: 0,
      explanation: "In the narrower section, fluid speed increases due to continuity, which leads to lower static pressure according to Bernoulli's principle."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-131",
      question: "In laminar flow of a fluid, its adjacent layers:",
      options: [
        "Resist each other",
        "Mix with each other",
        "Slide smoothly pass each other",
        "Produce turbulence"
      ],
      answer: 2,
      explanation: "Laminar flow is characterized by smooth, streamlined fluid layers sliding past one another without mixing."
    },
    {
      id: "siba-2025-phys-137",
      question: "A body of mass 10 kg is falling through a viscous medium and reached terminal velocity. The net force on the body will be:",
      options: [
        "0 N",
        "9.8 N",
        "98 N",
        "980 N"
      ],
      answer: 0,
      explanation: "At terminal velocity, downward gravitational force is balanced by upward drag and buoyant forces, making net force zero and acceleration zero."
    },
    {
      id: "siba-2025-phys-146",
      question: "When a droplet reaches terminal velocity, its acceleration is:",
      options: [
        "Zero",
        "Variable",
        "Not changed",
        "Negative"
      ],
      answer: 0,
      explanation: "Terminal velocity is constant velocity; because velocity does not change, acceleration is zero."
    },
    {
      id: "siba-2025-phys-160",
      question: "The increase in kinetic energy associated with decreased pressure of a fluid in a horizontal pipe is a consequence of:",
      options: [
        "Bernoulli's Principle",
        "Equation of continuity",
        "Pascal’s principle",
        "Torricelli’s theorem"
      ],
      answer: 0,
      explanation: "Bernoulli's principle states that an increase in fluid speed (kinetic energy) occurs simultaneously with a drop in pressure."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-132",
      question: "Water flows through a pipe of 0.02 m² with a speed of 3 m/s. The pipe narrows to 0.01 m². The speed in narrower section is:",
      options: [
        "1.5 m/s",
        "3 m/s",
        "6 m/s",
        "9 m/s"
      ],
      answer: 2,
      explanation: "Using A₁v₁ = A₂v₂: (0.02 m²)(3 m/s) = (0.01 m²)v₂ → v₂ = 6 m/s."
    },
    {
      id: "szambu-2025-phys-133",
      question: "In the human circulatory system, turbulent blood flow is most likely to occur when:",
      options: [
        "Vessel diameter is very small",
        "Velocity of blood is very low",
        "Blood flows through a clogged vessel",
        "Blood viscosity increases"
      ],
      answer: 2,
      explanation: "Constrictions such as arterial plaques cause blood velocity to surge dramatically in localized regions, increasing the Reynolds number and causing turbulent flow."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-142",
      question: "An incompressible fluid flows through a pipe that becomes narrower in one section. The fluid speed increases in that region to maintain:",
      options: [
        "Constant pressure",
        "constant energy",
        "constant mass flow rate",
        "constant volume"
      ],
      answer: 2,
      explanation: "The equation of continuity (A₁v₁ = A₂v₂) represents the conservation of mass, ensuring a constant mass flow rate (m/t) through any cross section."
    },
    {
      id: "uhs-mdcat-2025-phys-143",
      question: "In a pipe of varying cross-section as fluid enters the narrower region, it exhibits:",
      options: [
        "high velocity, high pressure",
        "high velocity, low pressure",
        "low velocity, high pressure",
        "low velocity, low pressure"
      ],
      answer: 1,
      explanation: "Narrowing increases fluid speed (high velocity), which lowers internal static pressure (low pressure) per Bernoulli's principle."
    },
    {
      id: "uhs-mdcat-2025-phys-144",
      question: "The curved shape of an airplane wing causes air to move faster over the top surface. This leads to:",
      options: [
        "greater pressure on the top",
        "lower pressure on the top",
        "equal pressure on both sides",
        "zero pressure above the wing"
      ],
      answer: 1,
      explanation: "Faster-moving air above the curved top surface creates a lower pressure region compared to the bottom, generating upward dynamic lift."
    },
    {
      id: "uhs-mdcat-2025-phys-158",
      question: "A fluid is flowing through a tube, to undergo transition from laminar to turbulent flow it’s velocity must be:",
      options: [
        "Slightly less than critical velocity",
        "equal to critical velocity",
        "greater than critical velocity",
        "increasing gradually but less than critical velocity"
      ],
      answer: 2,
      explanation: "Transition from smooth laminar flow to irregular turbulent flow occurs when fluid velocity exceeds the critical velocity."
    }
  ];