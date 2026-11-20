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
    },
    {
      id: "uhs-2026-phys-140",
      question: "In a spray bottle, pressing the nozzle causes fast air flow, which:",
      options: [
        "creates high pressure to lift the liquid",
        "creates low pressure to lift the liquid",
        "increases pressure at the tube opening",
        "reduces liquids surface tension"
      ],
      answer: 1,
      explanation: "According to Bernoulli's principle, where the speed of a fluid is high, the internal pressure is low. Fast-moving air over the top of the vertical tube reduces the pressure there compared to the atmospheric pressure acting on the liquid surface inside the bottle, pushing the liquid up the tube."
    },
    {
      id: "uhs-2026-phys-144",
      question: "The volume flow rate is equal to:",
      options: [
        "mv",
        "Av",
        "Aρ",
        "vρ"
      ],
      answer: 1,
      explanation: "Volume flow rate (Q) is defined as the volume of fluid passing through a cross-sectional area per unit time: Q = ΔV / Δt = (A × Δx) / Δt = Av, where A is the cross-sectional area and v is the fluid velocity."
    },
    {
      id: "uhs-2026-phys-148",
      question: "The equation of continuity Av = constant. The constant shows:",
      options: [
        "volume of fluid",
        "mass the of fluid",
        "density the of fluid",
        "volume flow rate"
      ],
      answer: 3,
      explanation: "For an incompressible fluid in steady flow, the equation of continuity states that A₁v₁ = A₂v₂ = constant. The product of cross-sectional area (A) and fluid speed (v) represents the volume flow rate (ΔV / Δt) in m³/s."
    },
    {
      id: "szambu-2026-phys-144",
      question: "In deriving Bernoulli’s equation, the quantity ‘pressure/volume’ represents:",
      options: [
        "Density",
        "Kinetic energy",
        "Potential energy",
        "Work done"
      ],
      answer: 3,
      explanation: "In Bernoulli's equation (P + ½ρv² + ρgh = constant), each term has the dimensions of energy per unit volume (or pressure). In the standard derivation, work done per unit volume equals pressure (W/V = F·d / A·d = P), representing the flow work done by the fluid pressure."
    },
    {
      id: "szambu-2026-phys-145",
      question: "Drag force on a spherical object moving through a fluid depends on",
      options: [
        "Velocity of the object",
        "Viscosity of the medium",
        "Shape and size of the object",
        "All of the above"
      ],
      answer: 3,
      explanation: "According to Stokes' law, the viscous drag force on a spherical body is given by F_d = 6πηrv, which directly depends on the viscosity of the medium (η), the size/radius and shape of the object (r), and the velocity of the object (v)."
    },
    {
      id: "szambu-2026-phys-146",
      question: "Which of the following assumptions is INCORRECT about the fluid that follows equation of continuity?",
      options: [
        "It is a non-viscous fluid",
        "It moves in a steady flow",
        "It moves in a turbulent flow",
        "It is an incompressible fluid"
      ],
      answer: 2,
      explanation: "The equation of continuity (A₁v₁ = A₂v₂) applies to an ideal fluid, which is defined as non-viscous, incompressible, and moving in a steady (streamline/laminar) flow—not a turbulent flow."
    },
    {
      id: "kmu-2026-phys-095",
      question: "A raindrop falls through the air and eventually reaches terminal velocity. At this instant, the net force acting on the raindrop is:",
      options: [
        "Zero",
        "Greater than its weight",
        "Equal to the air resistance",
        "Equal to the weight"
      ],
      answer: 0,
      explanation: "At terminal velocity, the upward drag force (air resistance) balances the downward gravitational force (weight), resulting in zero acceleration and zero net force acting on the raindrop."
    },
    {
      id: "kmu-2026-phys-096",
      question: "As the skydiver slows down after opening the parachute and approaches terminal velocity, the air resistance is:",
      options: [
        "Zero",
        "Increased",
        "Reduced",
        "Not changed"
      ],
      answer: 2,
      explanation: "Opening the parachute initially creates a huge upward drag force greater than weight, causing the skydiver to decelerate. Because air resistance is proportional to speed (or speed squared), as the skydiver slows down, the air resistance decreases until it once again equals the skydiver's weight at the new, lower terminal velocity."
    },
    {
      id: "kmu-2026-phys-097",
      question: "A hosepipe ejects water with a velocity of 2 m/s from an opening of 0.05 m². To double the velocity the cross-sectional area should be:",
      options: [
        "0.025 m²",
        "0.0125 m²",
        "0.05 m²",
        "0.10 m²"
      ],
      answer: 0,
      explanation: "By the equation of continuity for an incompressible fluid (A₁v₁ = A₂v₂), velocity is inversely proportional to cross-sectional area. To double the velocity (from 2 m/s to 4 m/s), the area must be halved: A₂ = (0.05 m² × 2 m/s) / 4 m/s = 0.025 m²."
    },
    {
      id: "kmu-2026-phys-098",
      question: "If the radius of an artery is reduced due to arteriosclerosis, the heart must increase blood pressure to:",
      options: [
        "Increase the blood flow rate",
        "Maintain the same blood flow rate",
        "Reduce the blood flow rate",
        "Increase the radius of the artery"
      ],
      answer: 1,
      explanation: "According to Poiseuille's law (Q = πΔPr⁴ / 8ηL), narrowing of the arterial radius (r) drastically increases flow resistance. To keep vital organs supplied, the heart increases blood pressure (ΔP) to maintain the same normal volumetric blood flow rate (Q)."
    },
    {
      id: "bumhs-phys-2026-150",
      question: "Oil in pipelines flow turbulently even with smooth walls, mainly due to:",
      options: [
        "Oil temperature",
        "Flow velocity",
        "Pipeline length",
        "Oil viscosity"
      ],
      answer: 1,
      explanation: "The transition from laminar to turbulent flow is governed by the Reynolds number (Re = ρvD / η). When the flow velocity (v) exceeds a critical threshold, inertial forces overcome viscous damping forces, causing turbulent flow even inside smooth-walled pipes."
    },
    {
      id: "bumhs-phys-2026-156",
      question: "The equation of continuity (Av = constant) is a mathematical statement of which of the following conservation law?",
      options: [
        "Conservation of energy",
        "Conservation of momentum",
        "Conservation of mass",
        "Conservation of volume"
      ],
      answer: 2,
      explanation: "The equation of continuity is derived directly from the law of conservation of mass for an incompressible fluid in steady flow, stating that the mass entering a pipe per unit time must equal the mass leaving it (ρA₁v₁ = ρA₂v₂, which simplifies to Av = constant when density ρ is constant)."
    },
    {
      id: "bumhs-phys-2026-158",
      question: "If cross-sectional area of a point is 2cm², where speed of liquid passing through is 100m/s, then flow rate will be:",
      options: [
        "200 m³/s",
        "2 m³/s",
        "50 m³/s",
        "0.02 m³/s"
      ],
      answer: 3,
      explanation: "Volume flow rate is given by Q = A × v. First convert the cross-sectional area to SI units: A = 2 cm² = 2 × 10⁻⁴ m². Multiplying by velocity v = 100 m/s gives Q = (2 × 10⁻⁴ m²) × 100 m/s = 0.02 m³/s."
    }
  ];