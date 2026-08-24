export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const rotationalAndCircularMotionQuestions: Question[] = [
    // --- BUMHS 2024 ---
    {
      id: "bumhs-2024-phys-151",
      question: "A particle is executing uniform circular motion in a circle of radius 100 mm. If its speed is 10 cm/s then its angular velocity is:",
      options: [
        "10 rad/s",
        "0.1 rad/s",
        "10 revolutions/s",
        "None of these"
      ],
      answer: 3,
      explanation: "Radius r = 100 mm = 10 cm = 0.1 m. Linear speed v = 10 cm/s = 0.1 m/s. Angular velocity ω = v / r = 0.1 / 0.1 = 1 rad/s. Since 1 rad/s is not listed among the options, 'None of these' is the correct choice."
    },
    {
      id: "bumhs-2024-phys-161",
      question: "A body of mass m moving in a circle of radius r is executing a uniform circular motion. If the mass of the body is doubled then the centripetal force acting upon the body is:",
      options: [
        "Reduced to half",
        "Remains same",
        "Doubled",
        "None of the given options"
      ],
      answer: 2,
      explanation: "Centripetal force F_c = (m v²) / r. Since F_c is directly proportional to mass m, doubling the mass doubles the required centripetal force."
    },
  
    // --- BUMHS 2025 ---
    {
      id: "bumhs-2025-phys-133",
      question: "A particle is moving in a uniform circular path of radius 4cm with velocity 4cm/s. The maximum acceleration of its projection executing simple harmonic motion on horizontal diameter is:",
      options: [
        "4 cm/s²",
        "8 cm/s²",
        "12 cm/s²",
        "16 cm/s²"
      ],
      answer: 0,
      explanation: "Angular velocity ω = v / r = 4 cm/s / 4 cm = 1 rad/s. Maximum acceleration of projection in SHM is a_max = ω² r = (1)² × 4 = 4 cm/s²."
    },
    {
      id: "bumhs-2025-phys-150",
      question: "The angle that a body covers at the center of the circle in three turns in radian is:",
      options: [
        "0",
        "3",
        "10.8",
        "18.8"
      ],
      answer: 3,
      explanation: "One turn (revolution) = 2π radians. Three turns = 3 × 2π = 6π radians ≈ 6 × 3.14159 ≈ 18.85 radians."
    },
  
    // --- KMU MDCAT 2025 ---
    {
      id: "kmu-mdcat-2025-phys-98",
      question: "A wheel of radius 0.4 m has an angular acceleration of 6 rad/s². The linear acceleration is:",
      options: [
        "1.2 m/s²",
        "2.4 m/s²",
        "2.4 m/s²",
        "2.4 m/s²"
      ],
      answer: 1,
      explanation: "Linear acceleration a = r α = 0.4 m × 6 rad/s² = 2.4 m/s²."
    },
    {
      id: "kmu-mdcat-2025-phys-99",
      question: "If an object is moving anticlockwise along a circular path, in a horizontal plane on a page then the direction of its angular velocity is:",
      options: [
        "Tangential to any point on the circle",
        "Towards centre of the circle",
        "Perpendicular to the plane and pointing out of the page",
        "Perpendicular to the plane and pointing into the page"
      ],
      answer: 2,
      explanation: "By the right-hand rule, curling the fingers of the right hand in the counter-clockwise direction points the thumb perpendicularly out of the page."
    },
    {
      id: "kmu-mdcat-2025-phys-100",
      question: "If a particle moves along a circular path of radius r with angular displacement θ (in radians), then the arc length s is given by:",
      options: [
        "rθr",
        "θ/r",
        "r × θ",
        "θ/r"
      ],
      answer: 2,
      explanation: "The relation between arc length s, radius r, and angular displacement θ (in radians) is s = r θ (written here as r × θ)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-133",
      question: "A wheel makes 3 complete revolutions. What is the total number of radians through which a point on wheel has rotated?",
      options: [
        "2π",
        "3π",
        "6π",
        "9π"
      ],
      answer: 2,
      explanation: "1 revolution = 2π radians. Therefore, 3 complete revolutions = 3 × 2π = 6π radians."
    },
    {
      id: "kmu-phys-24-134",
      question: "For rigid body that rotates about a fixed axis, the angle swept out by a line passing through any point on the body and intersecting the axis of rotation perpendicularly is called:",
      options: [
        "Angular acceleration",
        "Angular displacement",
        "Angular momentum",
        "Angular velocity"
      ],
      answer: 1,
      explanation: "The angle swept out by a line extending from the axis of rotation to any point on a rotating rigid body is defined as its angular displacement."
    },
    {
      id: "kmu-phys-24-135",
      question: "In a rotating spaceship, to produce artificial gravity, what does the centripetal force do?",
      options: [
        "Has no effect inside the spaceship",
        "Increases spaceship’s rotation",
        "Pulls objects towards the centre",
        "Pushes the objects towards the outer wall"
      ],
      answer: 3,
      explanation: "In a rotating spaceship, the outer floor provides the normal contact force (centripetal force) pushing inward on occupants, while inertia creates the perception of gravity pressing objects against the outer wall."
    },
    {
      id: "kmu-phys-24-136",
      question: "When the mass of a body moving along a circle becomes half and radius becomes double, and v is constant, the centripetal force becomes?",
      options: [
        "Double",
        "Half",
        "One-fourth",
        "Remains same"
      ],
      answer: 2,
      explanation: "F_c = (m v²) / r. If m′ = m/2 and r′ = 2r with v constant: F_c′ = ((m/2) v²) / (2r) = 1/4 × (m v² / r) = F_c / 4."
    },
  
    // --- SIBA 2025 ---
    {
      id: "siba-2025-phys-127",
      question: "The angle formed at the center of a circle as a body moves from one position to another is:",
      options: [
        "Angular displacement",
        "Angular velocity",
        "Angular acceleration",
        "Angular momentum"
      ],
      answer: 0,
      explanation: "The angle subtended at the center of a circular trajectory during motion is called angular displacement."
    },
    {
      id: "siba-2025-phys-132",
      question: "A body moving in a circle, half revolution in terms of radians is equivalent to:",
      options: [
        "π",
        "π/6",
        "π/2",
        "2π"
      ],
      answer: 0,
      explanation: "1 full revolution = 2π radians. Half a revolution = 2π / 2 = π radians."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-134",
      question: "The force responsible for simple harmonic motion of a simple pendulum is:",
      options: [
        "mg cos θ",
        "mg tan θ",
        "mg sin² θ",
        "mg sin θ"
      ],
      answer: 3,
      explanation: "The restoring force bringing the bob of a pendulum back toward equilibrium is the tangential component of gravity, F = -mg sin θ."
    },
    {
      id: "siba-phy-24-154",
      question: "The total energy E of a body at any instant, executing simple harmonic motion, is:",
      options: [
        "E = −2kx²",
        "E = 0.5(kx²)",
        "E = −kx²",
        "E = kx²"
      ],
      answer: 1,
      explanation: "Total energy of a simple harmonic oscillator is constant and given by E = ½ k x₀² (or ½ k x² at maximum amplitude x = x₀)."
    },
    {
      id: "siba-phy-24-157",
      question: "A body is moving in a circle with constant speed. Which of the following statements is true?",
      options: [
        "There is a force acting on the body at a tangent to the circle",
        "There is a force acting on the body toward the center of the circle",
        "There is no acceleration in the body",
        "There is a force acting on the body away from the center of the circle",
        "The net force acting on the body is zero"
      ],
      answer: 1,
      explanation: "In uniform circular motion, a net centripetal force acts directed radially inward toward the center of the circle."
    },
    {
      id: "siba-phy-24-160",
      question: "The period of uniform circular motion is given as:",
      options: [
        "T = ω/2π",
        "T = 2π/ω",
        "T = 2π ω",
        "T = 2πT",
        "T = 2π ω²"
      ],
      answer: 1,
      explanation: "Since angular speed ω = 2π / T, solving for period yields T = 2π / ω."
    },
    {
      id: "siba-phy-24-168",
      question: "If the length of a simple pendulum is increased four times, its frequency:",
      options: [
        "Increases 2 times",
        "Decreases 4 times",
        "Remains the same",
        "Increases 4 times",
        "Decreases 2 times"
      ],
      answer: 4,
      explanation: "Frequency f = (1 / 2π) √(g / L). Since f is inversely proportional to √L, multiplying L by 4 reduces frequency by a factor of √4 = 2 (decreases 2 times)."
    },
  
    // --- SZAMBU 2025 ---
    {
      id: "szambu-2025-phys-158",
      question: "The true statement about angular displacement is:",
      options: [
        "It always increases with time",
        "It is treated as vector for small rotations",
        "It is always a scalar quantity",
        "It is measured in meters"
      ],
      answer: 1,
      explanation: "Infinitesimal (very small) angular displacements obey vector addition laws and are treated as vector quantities, whereas large angular displacements do not commute under addition."
    },
    {
      id: "szambu-2025-phys-159",
      question: "π radians are equivalent to",
      options: [
        "30°",
        "270°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "2π radians = 360°, so π radians = 180°."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-132",
      question: "The instantaneous acceleration of an object travelling with uniform speed in a circle directed towards the center of circle is referred as",
      options: [
        "Angular acceleration",
        "Centrifugal acceleration",
        "Centripetal acceleration",
        "Tangential acceleration"
      ],
      answer: 2,
      explanation: "Acceleration directed toward the center of a circular path during uniform circular motion is centripetal acceleration."
    },
    {
      id: "szambu-phy-24-136",
      question: "Which one of the following is the SI-unit of angular displacement?",
      options: [
        "Degree",
        "Radian",
        "Revolution",
        "Steradian"
      ],
      answer: 1,
      explanation: "The standard SI unit for angular displacement is the radian (rad)."
    },
    {
      id: "szambu-phy-24-149",
      question: "Which of the following rule helps us to detect the direction of angular velocity?",
      options: [
        "Head to tail rule",
        "Kirchhoff rule",
        "Left hand rule",
        "Right hand rule"
      ],
      answer: 3,
      explanation: "The direction of angular velocity (an axial vector) is determined using the Right Hand Rule."
    },
    {
      id: "szambu-phy-24-171",
      question: "A rotating pulley completes twelve revolutions in 4 seconds, calculate the average angular velocity of rotating pulley in revelation per second?",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      answer: 0,
      explanation: "Angular velocity in rev/s = Total revolutions / Total time = 12 rev / 4 s = 3 rev/s."
    },
  
    // --- UHS MDCAT 2025 ---
    {
      id: "uhs-mdcat-2025-phys-133",
      question: "An angular displacement of 90° is equal to:",
      options: [
        "One-fourth revolution",
        "One-third revolution",
        "One-half revolution",
        "One complete revolution"
      ],
      answer: 0,
      explanation: "One full revolution = 360°. Therefore, 90° / 360° = 1/4 (one-fourth revolution)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-134",
      question: "The centripetal acceleration of an object moving along a circle of radius ‘r’ with an angular speed ‘ω’ is given by the formula",
      options: [
        "a = rω²",
        "a = rω",
        "a = r²ω",
        "a = r²ω²"
      ],
      answer: 0,
      explanation: "Since v = rω, centripetal acceleration a_c = v² / r = (rω)² / r = rω²."
    },
    {
      id: "uhs-phys-24-135",
      question: "An aircraft makes a turn in a horizontal circle of radius 100 m. It is travelling with a velocity of 250 m/s. The angular velocity of the aircraft will be",
      options: [
        "1.5 rad/s",
        "2.5 rad/s",
        "3 rad/s",
        "3.5 rad/s"
      ],
      answer: 1,
      explanation: "Angular velocity ω = v / r = 250 m/s / 100 m = 2.5 rad/s."
    },
    {
      id: "uhs-phys-24-136",
      question: "A particle of mass ‘m’ is moving on a circular path of radius ‘r’ with velocity ‘v’, then centripetal force acting on it is F. If the velocity of particle increases by 2 times and radius of circular path increases by 4 times then new centripetal force F′ will be",
      options: [
        "F′ = 2F",
        "F′ = ½ F",
        "F′ = 4F",
        "F′ = F"
      ],
      answer: 3,
      explanation: "Initial F = (m v²) / r. New velocity v′ = 2v, new radius r′ = 4r. New force F′ = m (2v)² / (4r) = m (4 v²) / (4r) = (m v²) / r = F."
    },
    {
      id: "uhs-phys-24-137",
      question: "A roller coaster is moving with 30 m s⁻¹ on a circular track of radius 30 m. The net mass of coaster + passengers is ‘m’. The centripetal force acting on it is",
      options: [
        "900 m",
        "m",
        "450 m",
        "30 m"
      ],
      answer: 3,
      explanation: "Centripetal force F_c = (m v²) / r = (m × 30²) / 30 = (m × 900) / 30 = 30 m."
    }
  ];