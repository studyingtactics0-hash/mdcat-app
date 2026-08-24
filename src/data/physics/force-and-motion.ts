export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const forceAndMotionQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-131",
      question: "A 40 kg body starting from rest falls through a vertical distance of 125 cm to ground. The velocity of the body just before it hits the ground is:",
      options: [
        "250 m/s",
        "(250)¹⁄² m/s",
        "25 m/s",
        "5 m/s"
      ],
      answer: 3,
      explanation: "Using v² = u² + 2gh with h = 1.25 m: v = √(2 × 10 × 1.25) = √25 = 5 m/s (or if g = 9.8 m/s², v = √(24.5) ≈ 4.95 m/s)."
    },
    {
      id: "bumhs-2024-phys-133",
      question: "A person's life was saved in a car accident due to airbags system. During that car accident, airbags expanded in front of head of that person. If that car was not equipped with airbags then movement of head would be stopped by windshield in much faster time. Airbags saved life because it:",
      options: [
        "causes much greater force for longer time",
        "causes much greater force for smaller time",
        "causes much smaller force for longer time",
        "causes much smaller force for smaller time"
      ],
      answer: 2,
      explanation: "By increasing the time duration of impact (Δt), the force experienced by the head (F = Δp / Δt) is significantly reduced."
    },
    {
      id: "bumhs-2024-phys-139",
      question: "Which of the following statements is absolutely correct:\nI. Forces can stop or make objects move faster\nII. Forces can change the direction of movement",
      options: [
        "I",
        "II",
        "Both I and II",
        "Neither I nor II"
      ],
      answer: 2,
      explanation: "Force causes acceleration, which can change an object's speed as well as its direction of motion."
    },
    {
      id: "bumhs-2024-phys-174",
      question: "A stone is dropped from a cliff. The graph (Position or velocity versus time) which best represents motion when it falls",
      options: [
        "[curved upward position-time]",
        "[straight line velocity-time]",
        "[straight line position-time]",
        "[curved upward velocity-time]"
      ],
      answer: 1,
      explanation: "Under uniform acceleration due to gravity, velocity increases linearly with time (v = gt), yielding a straight-line velocity-time graph."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-143",
      question: "A rolling cart collides with a stationary cart of equal mass. After the collision, both move together, momentum is still conserved because:",
      options: [
        "Masses are equal",
        "No external force acts on the system",
        "Both move with the same speed",
        "Internal forces are very small"
      ],
      answer: 1,
      explanation: "Linear momentum of a system is conserved if no net external force acts on it."
    },
    {
      id: "bumhs-2025-phys-146",
      question: "The average speed of a body in a given interval of time is equal to the average velocity, if:",
      options: [
        "The speed of the body remains uniform.",
        "The body moves with constant acceleration.",
        "The body moves along a straight path.",
        "The body returns to its starting point."
      ],
      answer: 2,
      explanation: "When a body moves along a straight path without turning back, total distance equals total displacement magnitude, making average speed equal to average velocity."
    },
    {
      id: "bumhs-2025-phys-152",
      question: "A 4kg box initially at rest is pulled along a frictionless surface by a constant horizontal force of 8N. After 15 seconds, its kinetic energy is:",
      options: [
        "120 J",
        "600 J",
        "960 J",
        "1800 J"
      ],
      answer: 3,
      explanation: "a = F/m = 8/4 = 2 m/s². Final velocity v = u + at = 0 + 2(15) = 30 m/s. KE = 0.5 × m × v² = 0.5 × 4 × (30)² = 1800 J."
    },
    {
      id: "bumhs-2025-phys-160",
      question: "A ball is thrown vertically upward with a certain velocity making an angle with the horizontal (neglecting air resistance). With the passage of time horizontal component of velocity ______.",
      options: [
        "Increases",
        "Decreases",
        "Remains same",
        "First decreases then increases"
      ],
      answer: 2,
      explanation: "In projectile motion (neglecting air resistance), no horizontal acceleration acts, so v_x = v cosθ remains constant."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-88",
      question: "A boat moves 3 km north first and then 4 km east. Another boat moves 4 km east first and then 3 km north. Which statement is CORRECT about their final displacements?",
      options: [
        "Both boats have the same displacement vector",
        "The first boat’s displacement is greater because it was moving north first",
        "The second boat’s displacement is greater because it travelled east first",
        "Both boats end at different positions but cover the same distance"
      ],
      answer: 0,
      explanation: "Vector addition is commutative: 3ĵ + 4î = 4î + 3ĵ. Both end up at position (4î + 3ĵ) relative to the start, sharing identical magnitude (5 km) and direction."
    },
    {
      id: "kmu-mdcat-2025-phys-89",
      question: "The area under the line on a displacement-time graph of a car moving with uniform velocity would be:",
      options: [
        "Rectangle",
        "Triangle",
        "Trapezium",
        "Parallelogram"
      ],
      answer: 0,
      explanation: "On a displacement-time graph for uniform velocity, displacement is represented by a horizontal/straight-line path; the area beneath a flat displacement line over a time interval forms a rectangle."
    },
    {
      id: "kmu-mdcat-2025-phys-90",
      question: "A car starts from rest and moves with a uniform acceleration of 3 m/s². What will be its velocity after 5 seconds?",
      options: [
        "8 m/s",
        "12 m/s",
        "15 m/s",
        "18 m/s"
      ],
      answer: 2,
      explanation: "Using v = u + at: v = 0 + (3)(5) = 15 m/s."
    },
    {
      id: "kmu-mdcat-2025-phys-91",
      question: "A passenger is standing in a stationary bus. When the bus suddenly starts moving forward, the passenger falls backward. Which phenomenon best explains this observation?",
      options: [
        "Friction",
        "Gravity",
        "Inertia",
        "Deceleration"
      ],
      answer: 2,
      explanation: "By Newton's first law (inertia), the passenger's body tends to remain at rest while the bus moves beneath them."
    },
    {
      id: "kmu-mdcat-2025-phys-92",
      question: "A ball is projected at an angle 45° with an initial speed of 20 m/s on earth. How does R₀ (Range without air resistance) compare to Rₐ (Range with air resistance)?",
      options: [
        "R₀ will be greater than Rₐ because air resistance reduces horizontal speed",
        "R₀ will be equal to Rₐ because gravity is unchanged",
        "Rₐ will be lesser than R₀ because air resistance reduces horizontal speed",
        "Rₐ will be lesser than R₀ because air resistance is random"
      ],
      answer: 0,
      explanation: "Air resistance exerts drag that slows down horizontal speed and reduces overall flight time, so ideal range R₀ is greater than actual range Rₐ."
    },
    {
      id: "kmu-mdcat-2025-phys-93",
      question: "A 0.02 kg bullet moving at 300 m/s embeds itself in a 2 kg block at rest on a smooth surface. What is the velocity of the block-bullet system just after an impact?",
      options: [
        "2 m/s",
        "3 m/s",
        "4 m/s",
        "5 m/s"
      ],
      answer: 1,
      explanation: "By conservation of momentum: (0.02 × 300) = (2 + 0.02)v → 6 = 2.02 v → v ≈ 2.97 m/s ≈ 3 m/s."
    },
    {
      id: "kmu-mdcat-2025-phys-94",
      question: "Which of the following statement about projectile motion is CORRECT?",
      options: [
        "The horizontal velocity of a projectile changes constantly due to gravity",
        "The vertical velocity of a projectile remains constant throughout the flight",
        "At the highest point, the vertical velocity of the projectile is zero, but the horizontal velocity remains unchanged",
        "The acceleration of the projectile is zero at the peak of its trajectory"
      ],
      answer: 2,
      explanation: "At peak altitude, vertical velocity drops momentarily to zero, while horizontal velocity remains constant (neglecting air drag)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-123",
      question: "A car is moving in a circular path at a constant speed. What provides the necessary centripetal force to keep the car moving in this path?",
      options: [
        "The car’s inertia resisting any change in direction",
        "The car’s mass pulling it towards the centre of the circle",
        "The engine’s power pushing the car forward",
        "The friction between the tyres and the road"
      ],
      answer: 3,
      explanation: "Friction between tyres and road surface provides the inward radial force required for circular turning."
    },
    {
      id: "kmu-phys-24-125",
      question: "__________ is the natural tendency of an object to remain at rest or in motion with constant velocity?",
      options: [
        "Friction",
        "Inertia",
        "Mass",
        "Weight"
      ],
      answer: 1,
      explanation: "Inertia is the property of matter that resists changes in its velocity."
    },
    {
      id: "kmu-phys-24-126",
      question: "A car in motion hits and gets crashed into a tree trunk, what is NOT conserved?",
      options: [
        "Kinetic energy alone",
        "Momentum alone",
        "Momentum and kinetic energy both",
        "Neither kinetic energy nor momentum"
      ],
      answer: 0,
      explanation: "In a crash, kinetic energy is transformed into sound, heat, and deformation (inelastic collision), so KE is not conserved. Total system momentum is conserved if external forces are accounted for."
    },
    {
      id: "kmu-phys-24-127",
      question: "The vertical and horizontal component of the projectile motion are",
      options: [
        "Correlated with each other",
        "Dependent on each other",
        "Independent of each other",
        "Associated with each other"
      ],
      answer: 2,
      explanation: "Horizontal and vertical motions of a projectile operate independently of one another."
    },
    {
      id: "kmu-phys-24-128",
      question: "A ball is kicked horizontally from the top of a 10m high cliff with an initial speed of 15m/s. After 2 seconds, which of the following statement describes the ball’s horizontal and vertical components?",
      options: [
        "The horizontal velocity is 15m/s while vertical velocity is 20m/s downwards",
        "The horizontal velocity is 15m/s while vertical velocity is 15m/s downwards",
        "The horizontal velocity is 30m/s while vertical velocity is 20m/s downwards",
        "The horizontal velocity is 15m/s while vertical velocity is 0m/s"
      ],
      answer: 0,
      explanation: "v_x stays 15 m/s throughout. v_y = u_y + gt = 0 + (10)(2) = 20 m/s downwards."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-143",
      question: "In circular motion, if angular displacement is kept constant, decreasing the radius will:",
      options: [
        "Increase linear displacement",
        "Increase linear velocity",
        "Decrease linear displacement",
        "Not affect linear displacement"
      ],
      answer: 2,
      explanation: "Linear displacement s = rθ. For constant angular displacement θ, decreasing radius r reduces linear displacement s."
    },
    {
      id: "siba-2025-phys-150",
      question: "A displacement time graph is a straight line inclined up at angle of 45° with X-axis, velocity of body according to this graph is:",
      options: [
        "Increasing",
        "Decreasing",
        "Constant",
        "Decreasing at start and then may decrease"
      ],
      answer: 2,
      explanation: "A straight line on a displacement-time graph represents a constant slope, meaning constant velocity (v = tan 45° = 1)."
    },
    {
      id: "siba-2025-phys-151",
      question: "A 150 kg car has its velocity reduced from 20 m/s to 10 m/s in 3.0 sec. How large was the average retarding force?",
      options: [
        "500 N",
        "2500 N",
        "1500 N",
        "1000 N"
      ],
      answer: 0,
      explanation: "a = (10 - 20) / 3 = -3.33 m/s². Retarding Force F = m × a = 150 × 3.33 = 500 N."
    },
    {
      id: "siba-2025-phys-156",
      question: "A body moves along a semicircular path of radius 10 m from one end of the diameter to the other. The ratio of distance to displacement is:",
      options: [
        "π : 1",
        "1 : π",
        "π : 2",
        "2 : π"
      ],
      answer: 2,
      explanation: "Distance along semicircle = πr. Displacement across diameter = 2r. Ratio = πr / 2r = π : 2."
    },
    {
      id: "siba-2025-phys-157",
      question: "A body is projected with speed v making an angle θ with the horizontal and covers a horizontal range R. If its speed is doubled, the new range will be:",
      options: [
        "R/2",
        "R",
        "2R",
        "4R"
      ],
      answer: 3,
      explanation: "Range R = (v² sin 2θ)/g. Since R is proportional to v², doubling v makes the new range (2v)² = 4 times R."
    },
    {
      id: "siba-2025-phys-158",
      question: "A ball of mass m strikes a wall and rebounds with the same speed in the opposite direction, taking the initial direction as positive. The change in momentum of the ball is:",
      options: [
        "0",
        "mv",
        "-2mv",
        "-mv"
      ],
      answer: 2,
      explanation: "Initial momentum p₁ = +mv. Final momentum p₂ = -mv. Change in momentum Δp = p₂ - p₁ = -mv - mv = -2mv."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-131",
      question: "Time rate of change of linear momentum is equal to:",
      options: [
        "Moment of force",
        "Force",
        "Angular momentum",
        "Torque",
        "Moment"
      ],
      answer: 1,
      explanation: "According to Newton's second law, F = dp/dt."
    },
    {
      id: "siba-phy-24-132",
      question: "In projectile motion, the horizontal component of acceleration is:",
      options: [
        "Zero",
        "9.8 m/s²",
        "19.6 m/s²",
        "4.9 m/s²"
      ],
      answer: 0,
      explanation: "There is no horizontal force acting on a projectile (ignoring air drag), so a_x = 0."
    },
    {
      id: "siba-phy-24-149",
      question: "If the instantaneous velocity of a body is equal to the average velocity, then:",
      options: [
        "The body moves with decreasing velocity",
        "The body moves with variable acceleration",
        "The body moves with uniform velocity",
        "The body moves with uniform acceleration",
        "The body moves with increasing velocity"
      ],
      answer: 2,
      explanation: "When velocity remains constant throughout (uniform velocity), instantaneous velocity at any instant equal average velocity over any duration."
    },
    {
      id: "siba-phy-24-153",
      question: "A body starts from rest and falls freely under gravity, the distance covered by it in ‘t’ seconds is:",
      options: [
        "0.5gt²",
        "g²t",
        "0.5g²t²",
        "g²t²"
      ],
      answer: 0,
      explanation: "Using s = ut + ½gt² with u = 0 gives s = 0.5gt²."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-143",
      question: "Unequal changes occurring in velocity of a body is called:",
      options: [
        "Uniform acceleration",
        "Uniform velocity",
        "Instantaneous acceleration",
        "Variable acceleration"
      ],
      answer: 3,
      explanation: "When velocity changes by unequal amounts in equal time intervals, acceleration is non-uniform or variable."
    },
    {
      id: "szambu-2025-phys-148",
      question: "A football is kicked with a speed of 20 m/s at an angle of 30° with the horizontal, the maximum height it attains is:",
      options: [
        "5 m",
        "10 m",
        "15 m",
        "20 m"
      ],
      answer: 0,
      explanation: "H = (v² sin²θ)/(2g) = (20² × sin²30°)/(2 × 10) = (400 × 0.25)/20 = 100/20 = 5 m."
    },
    {
      id: "szambu-2025-phys-152",
      question: "A body of mass 2 kg moving with velocity 3 m/s collides with a body of mass 1 kg at rest. If they stick together, their common velocity after collision is:",
      options: [
        "1 m/s",
        "2 m/s",
        "3 m/s",
        "4 m/s"
      ],
      answer: 1,
      explanation: "By conservation of momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)v → (2 × 3) + 0 = (2 + 1)v → 6 = 3v → v = 2 m/s."
    },
    {
      id: "szambu-2025-phys-153",
      question: "Two balls thrown with equal speeds but at different angles cover equal horizontal distance. If one is thrown at an angle of 40°, then the angle of projection of the other is:",
      options: [
        "20°",
        "30°",
        "45°",
        "50°"
      ],
      answer: 3,
      explanation: "Complementary angles of projection (θ and 90° - θ) yield identical horizontal ranges. 90° - 40° = 50°."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-125",
      question: "If kinetic energy of a body becomes four times of its initial value, then the new momentum will",
      options: [
        "become twice of its initial value",
        "become three times of its initial value",
        "become four times of its initial value",
        "remain constant"
      ],
      answer: 0,
      explanation: "Since p = √(2m × KE), if KE is quadrupled, momentum increases by √4 = 2 times."
    },
    {
      id: "szambu-phy-24-127",
      question: "In one dimensional elastic collision of two bodies of same masses, what will happen if moving body collides with the mass which is initially at rest?",
      options: [
        "The collision would become inelastic",
        "Their velocities will be interchanged",
        "Their velocities will remain same",
        "Velocities of both bodies will be zero"
      ],
      answer: 1,
      explanation: "In an elastic collision between two equal masses, the bodies interchange their velocities."
    },
    {
      id: "szambu-phy-24-130",
      question: "The acceleration can be determined by the gradient of",
      options: [
        "Displacement-time graph",
        "Force-time graph",
        "Speed-time graph",
        "Velocity-time graph"
      ],
      answer: 3,
      explanation: "Acceleration is the rate of change of velocity, given by the slope (gradient) of a velocity-time graph."
    },
    {
      id: "szambu-phy-24-138",
      question: "At what angle made by projectile with x-axis, we can get 1/4th of maximum height achieved by projectile?",
      options: [
        "30°",
        "45°",
        "60°",
        "90°"
      ],
      answer: 0,
      explanation: "Max height H ∝ sin²θ. Maximum possible H occurs at 90° (sin 90° = 1). For H to be 1/4th of H_max, sin²θ = 1/4 → sinθ = 1/2 → θ = 30°."
    },
    {
      id: "szambu-phy-24-161",
      question: "The quantity of motion present in a body can be measured by",
      options: [
        "Acceleration",
        "Momentum",
        "Speed",
        "Velocity"
      ],
      answer: 1,
      explanation: "Linear momentum (p = mv) measures the quantity of motion in a body."
    },
    {
      id: "szambu-phy-24-166",
      question: "The slope of velocity-time graph gradually decreases, then the body is said to be moving with",
      options: [
        "Negative acceleration",
        "Positive acceleration",
        "Uniform velocity",
        "Variable acceleration"
      ],
      answer: 3,
      explanation: "A changing slope on a velocity-time graph indicates non-uniform or variable acceleration."
    },
    {
      id: "szambu-phy-24-167",
      question: "Two bodies with kinetic energies having ratio of 4:1, are moving with equal linear momentum. The ratio of their masses is",
      options: [
        "1:1",
        "1:2",
        "1:4",
        "4:1"
      ],
      answer: 2,
      explanation: "KE = p²/(2m) → m ∝ 1/KE when momentum p is constant. Since KE₁:KE₂ = 4:1, m₁:m₂ = 1:4."
    },
    {
      id: "szambu-phy-24-175",
      question: "The rate of change of linear momentum is equal to",
      options: [
        "Force",
        "Impulse",
        "Torque",
        "Velocity"
      ],
      answer: 0,
      explanation: "By Newton's second law, rate of change of linear momentum equals applied force."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-131",
      question: "If the horizontal range of a projectile becomes half of its maximum possible horizontal range, the probable angle of projection is;",
      options: [
        "15°",
        "30°",
        "45°",
        "60°"
      ],
      answer: 0,
      explanation: "Maximum range R_max = v²/g (at 45°). Range R = (v²/g) sin 2θ = ½ R_max → sin 2θ = 0.5 → 2θ = 30° → θ = 15° (or 75°)."
    },
    {
      id: "uhs-mdcat-2025-phys-139",
      question: "A ball is thrown into the air with certain velocity v making an angle θ with horizontal. If air resistance is neglected, then at maximum height its velocity is:",
      options: [
        "Equal to initial velocity",
        "Half of initial velocity",
        "Equal to zero",
        "Minimum but not zero"
      ],
      answer: 3,
      explanation: "At peak height, v_y = 0, but v_x = v cosθ remains active, making net velocity minimum but non-zero."
    },
    {
      id: "uhs-mdcat-2025-phys-140",
      question: "A canon is placed on a smooth surface. When it fires a shell, the canon moves backward, this recoil occurs due to:",
      options: [
        "Law of conservation of energy",
        "Backward thrust of the gases",
        "Newton’s third law of motion",
        "Newton’s first law of motion"
      ],
      answer: 2,
      explanation: "Recoil is governed by Newton's third law (action-reaction) and conservation of momentum."
    },
    {
      id: "uhs-mdcat-2025-phys-156",
      question: "When an object attains terminal velocity, its acceleration is:",
      options: [
        "9.8m/s²",
        "Zero",
        "1 m/s²",
        "9.8m/s²"
      ],
      answer: 1,
      explanation: "At terminal velocity, downward weight equals upward drag force, net force is zero, making acceleration zero."
    },
    {
      id: "uhs-mdcat-2025-phys-160",
      question: "A projectile is launched in air with certain angle; its velocity is maximum at:",
      options: [
        "Point of projection",
        "Highest point",
        "Between launching and highest point",
        "At all points"
      ],
      answer: 0,
      explanation: "At launch (and impact at the same level), speed has full initial magnitude v = √(v_x² + v_y²), which is maximum."
    },
    {
      id: "uhs-mdcat-2025-phys-162",
      question: "If a body having mass m1 (2 kg), moving with 5 m/s approaches another mass, m2 (3 kg) with speed of 1 m/s in same direction, relative speed of approach is 4 m/s. Relative speed of separation after collision will be:",
      options: [
        "4 m/s",
        "2 m/s",
        "6 m/s",
        "depends on masses"
      ],
      answer: 0,
      explanation: "In a perfectly elastic collision, relative speed of approach equals relative speed of separation."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-123",
      question: "In an elastic collision the total kinetic energy",
      options: [
        "Dissipates after collision",
        "Increases after the collision",
        "Reduces after the collision",
        "Before and after collision remains the same"
      ],
      answer: 3,
      explanation: "By definition, total kinetic energy is conserved before and after an elastic collision."
    },
    {
      id: "uhs-phys-24-124",
      question: "The instantaneous velocity along the curved path is",
      options: [
        "Along the tangent",
        "Perpendicular to the slope",
        "Parallel to the radius",
        "Anti-parallel to the radius"
      ],
      answer: 0,
      explanation: "Instantaneous velocity at any point on a curved path points along the tangent line at that point."
    },
    {
      id: "uhs-phys-24-125",
      question: "The range of projectile will be maximum if the factor sin 2θ becomes",
      options: [
        "Zero",
        "1",
        "–1",
        "2"
      ],
      answer: 1,
      explanation: "Range R = (v² sin 2θ)/g is maximized when sin 2θ takes its maximum value of 1 (at θ = 45°)."
    },
    {
      id: "uhs-phys-24-126",
      question: "The two dimensional motion under constant acceleration due to gravity is called",
      options: [
        "Circular motion",
        "Rotational motion",
        "Projectile motion",
        "Vibratory motion"
      ],
      answer: 2,
      explanation: "Projectile motion is two-dimensional motion operating under constant acceleration (gravity)."
    },
    {
      id: "uhs-phys-24-127",
      question: "In velocity-time graph the area under graph is equal to the",
      options: [
        "Speed of an object",
        "Velocity of an object",
        "Distance covered by object",
        "Acceleration of an object"
      ],
      answer: 2,
      explanation: "Area under a velocity-time graph equals displacement/distance traveled by the object."
    },
    {
      id: "uhs-phys-24-128",
      question: "According to Newton’s Law of Motion the mass of the object is a quantitative measure of its",
      options: [
        "Weight",
        "Inertia",
        "Speed",
        "Acceleration"
      ],
      answer: 1,
      explanation: "Mass is the scalar quantitative measure of a body's inertia."
    }
  ];