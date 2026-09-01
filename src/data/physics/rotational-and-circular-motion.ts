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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "The angular velocity of the minute hand of a clock is",
        options: [
          "2π/60 rad/s",
          "2π/3600 rad/s",
          "π/24 rad/s",
          "Choice 4",
          "π/3600 rad/s"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "A mud flies off the Tyre of fast moving car in the direction",
        options: [
          "Parallel to moving Tyre",
          "Tangent to the moving tyre",
          "Anti parallel to the moving tyre",
          "None"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-3",
        question: "A disk is free to rotate on a fixed axis. A force of magnitude F, in the plane of the disk, is to be applied. On the following alternatives the greatest angular acceleration is obtained if the force is",
        options: [
          "Applied tangentially halfway between the axis and rim",
          "Applied tangentially at the rim",
          "Applied radially halfway between the axis and rim",
          "Applied radially at the rim"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-4",
        question: "The angular velocity of a rotating wheel increases by 2 rev/s every minute. The angular acceleration in rad/s² of this wheel is",
        options: [
          "4π²",
          "1/30",
          "2π",
          "π/15"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-5",
        question: "If a particle moves in a circle describing equal angles in equal intervals of time, the velocity vector",
        options: [
          "Remains constant",
          "Changes in magnitude only",
          "Changes in direction only",
          "Changes both in magnitude and direction"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-6",
        question: "A cyclist turns around a curve at 15 miles/hour. If he turns at double the speed, the tendency to overturn is",
        options: [
          "Quadrupled",
          "Halved",
          "Unchanged",
          "Doubled"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "For positive angular displacement the rotation would be",
        options: [
          "Clockwise",
          "Anti clock wise",
          "Parallel",
          "Perpendicular"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "A cyclist cycling around a circular racing track, skids because",
        options: [
          "The centripetal force upon him is less than limiting friction",
          "The centripetal force upon him is greater than limiting friction",
          "The force upon him is equal to the limiting friction",
          "The Friction between the tyres of the cycle and road vanishes"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-9",
        question: "A particle P is moving in a circle of radius with a uniform speed v, C is the center of the circle and AB is diameter. The angular velocity of P about A and C are in the ratio",
        options: [
          "1:1",
          "1:2",
          "4:1",
          "2:1"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-10",
        question: "The ratio of angular frequency and linear frequency is",
        options: [
          "2π",
          "1/2π",
          "π/2",
          "π"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "A point on the rim of a wheel 4 m in diameter has a velocity of 1600 cm/s the angular velocity of wheel is",
        options: [
          "2 rad/s",
          "6 rad/s",
          "4 rad/s",
          "8 rad/s"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-12",
        question: "Which of the following is an axial vector",
        options: [
          "Torque",
          "Angular displacement",
          "Angular velocity",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "If a satellite moves above earth's atmosphere in a circular orbit with constant speed, then",
        options: [
          "It's acceleration and velocity are always in the same direction",
          "It's acceleration is towards the earth",
          "It's velocity is constant",
          "It will fall back to earth when it's fuel is used up"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-14",
        question: "The angle between the centripetal force and tangential velocity is",
        options: [
          "0 degree",
          "90 degree",
          "180 degree",
          "60 degree"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "If a body is moving in a circular path with constant speed, then the",
        options: [
          "Velocity and acceleration are perpendicular to each other",
          "Velocity and acceleration are parallel to each other",
          "Velocity and acceleration are anti parallel",
          "Both have zero magnitude"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-16",
        question: "Work done due to centripetal force for circular motion will be",
        options: [
          "Reduced",
          "Maximum",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-17",
        question: "A particle is moving with constant speed by keeping itself at constant distance from a fixed point in given plane its motion is",
        options: [
          "Circular motion",
          "Uniform circular motion",
          "Uniform circular motion with fixed axis of rotation",
          "Uniform circular motion with axis of motion not defined"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "Two wheels roll side by side without sliding at the same speed the radius of wheel 2 is twice the radius of wheel 1. The angular velocity of wheel 2 is",
        options: [
          "Twice the angular velocity of wheel 1",
          "The same as the velocity of wheel 1",
          "Half the angular velocity of wheel 1",
          "More than twice the angular velocity of wheel 1"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "The magnitude of the force required to cause a 0.04 kg object to move at 0.6 m/s in a circle of radius 1.0 m is",
        options: [
          "2.4 × 10⁻² N",
          "1.4π × 10⁻² N",
          "1.4 × 10⁻² N",
          "2.4π² × 10⁻² N"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-20",
        question: "For a body moving in a circle, it's linear ...... is equal to radius times angular ....",
        options: [
          "Displacement",
          "Velocity",
          "Acceleration",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-21",
        question: "Which of the following is not directed along the axis of rotation",
        options: [
          "Angular displacement",
          "Centripetal acceleration",
          "Angular velocity",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "The angular momentum changes from 2 units to 6 units in 4 s. The torque is",
        options: [
          "1 unit",
          "1/2 unit",
          "3/2 unit",
          "4 unit"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-23",
        question: "Ten seconds after an electric fan is turned on, the fan rotates at 300 rev/min it's average angular acceleration is",
        options: [
          "30 rad/s²",
          "3.14 rad/s²",
          "30 rev/s²",
          "500 rev/s²"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "For a particle in uniform circular motion is relation a = rα of acceleration hold the acceleration 'a'",
        options: [
          "Is centripetal acceleration",
          "Is radial acceleration",
          "Is tangential acceleration",
          "Both a and b"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-25",
        question: "A small body of mass m tied to a string and revolved in vertical circle is just able to reach the top of the path and complete the circle. The tension in the string at lowest point of the path is",
        options: [
          "mg",
          "4mg",
          "2mg",
          "6mg"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "A body is traveling in a circular path at constant speed",
        options: [
          "Has a constant velocity",
          "Is not accelerated",
          "Has an inward acceleration",
          "Has transverse acceleration"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "A stone of mass m tied to a string of length l is rotated in a circle with the inherent end of the string as the center. The speed of the stone is v if the string brakes, the stone will move",
        options: [
          "Towards the center of circle",
          "Along the tangent",
          "Away from the center of circle",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-28",
        question: "The weight of body at the center of earth is",
        options: [
          "Slightly less",
          "Zero",
          "Slightly greater",
          "Maximum"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-29",
        question: "Two bodies of mass 10 kg and 5 kg moving in concentric orbits of radii R and r such that their periods are the same. Then the ratio between their centripetal acceleration is",
        options: [
          "R/r",
          "r/R",
          "R²/r²",
          "r²/R²"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-30",
        question: "In uniform circular motion, the factor that remains constant is",
        options: [
          "Linear velocity",
          "Acceleration",
          "Centripetal force",
          "Speed"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "The shaft of motor rotates at a constant angular speed of 360 rev/min. Angle through in 1 sec in 1 radian is",
        options: [
          "Pi",
          "3 pi",
          "6 pi",
          "12 pi"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-32",
        question: "A particle moves in a circle of radius 25 cm at two revolutions per second. The acceleration of the particle in m/s² is",
        options: [
          "π²",
          "8π²",
          "4π²",
          "2π²"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-33",
        question: "The body of mass 8 kg moves along a circle of radius of 4 m with a constant speed of 8 m/s the centripetal force on the body is",
        options: [
          "48 N",
          "128 N",
          "8 N",
          "72 N"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "An object moves around a circle. If the radius is doubled keeping the speed the same then the magnitude of the centripetal force must be",
        options: [
          "Twice",
          "Four times",
          "Half",
          "One fourth"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "A child, riding on a large merry go round, travel a distance of 3000 m in a circle of diameter 40 m. The total angle through which she revolves is",
        options: [
          "50 rad",
          "150 rad",
          "75 rad",
          "314 rad"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-36",
        question: "A wheel of radius 50 cm having angular speed of 5 rad/s will have linear speed in m/s",
        options: [
          "1.5",
          "2.5",
          "3.5",
          "4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The ratio of circumference of a circle to its diameter is equal to",
        options: [
          "2π rad",
          "π/2 rad",
          "π rad",
          "1 sr"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "The force which provide necessary centripetal force to keep the mud in circular path is called",
        options: [
          "Cohesive force",
          "Frictional force",
          "Adhesive force",
          "Gravitational force"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "Particle is moving in a circle of radius r with constant angular speed ω its acceleration, directed towards center of circle is",
        options: [
          "ω/r",
          "ω²/r",
          "ω²r",
          "ωr²"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "A wheel of radius 2 m through an angle of 57.3°. It lays out a tangential distance",
        options: [
          "2 m",
          "57.3 m",
          "4 m",
          "114.6 m"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-41",
        question: "The angular speed in radian/hour for rotation of the earth is",
        options: [
          "2 pi",
          "Pi/6",
          "4 pi",
          "Pi/12"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "When a body is whirled in a horizontal circle by means of a string, the centripetal force is supplied by",
        options: [
          "Mass of a body",
          "Tension in string",
          "Velocity of a body",
          "Centripetal acceleration"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "One radian is equal to",
        options: [
          "2π rev",
          "π/4 rev",
          "π/2 rev",
          "1/2π rev"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-44",
        question: "The driver of car traveling at velocity v suddenly sees a board wall in front of him at a distance a. the should",
        options: [
          "Brake sharply",
          "Turn sharply",
          "A and B both",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "The ratio of angular speed of minute hand of a clock to the second hand of clock for one complete rotation is",
        options: [
          "1:15",
          "15:1",
          "1:60",
          "60:1"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "What is wrong about centripetal and centrifugal forces",
        options: [
          "None of these",
          "Their magnitudes are same",
          "Their direction are opposite",
          "Both perform work done"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "Angular velocity has same dimensions as that of",
        options: [
          "Angular displacement",
          "Linear acceleration",
          "Frequency",
          "Linear velocity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-48",
        question: "The driver of a 1000 kg car tries to turn through a circle of radius 100 m on an unbanked curve at a speed of 10 m/s. The actual frictional force between the tyres and slippery road has a magnitude of 900 N the car",
        options: [
          "Slides in to the inside of the curve",
          "Slides off to the outside of the curve",
          "Makes the turn",
          "Makes the turn only if it goes faster"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "For a body moving with constant speed in a horizontal circle, which of the following remains constant",
        options: [
          "Velocity",
          "Acceleration",
          "Centripetal force",
          "Kinetic energy"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "The direction of centrifugal force is directed at ........ center",
        options: [
          "Towards",
          "Away",
          "At",
          "Perpendicular to the plane"
        ],
        answer: 1
      }
  ];