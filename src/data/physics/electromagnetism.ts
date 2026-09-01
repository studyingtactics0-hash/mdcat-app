export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const electromagnetismQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-132",
      question: "Magnetic field lines set up in the surrounding of current carrying wire will be:",
      options: [
        "circular",
        "radially outward",
        "along the current",
        "opposite to current"
      ],
      answer: 0,
      explanation: "By the right-hand grip rule, magnetic field lines forming around a straight current-carrying wire form concentric circles centered on the wire."
    },
    {
      id: "bumhs-2024-phys-141",
      question: "A current carrying conductor of length ‘L’ and current ‘I’ is lying at an angle of 90 degrees to the direction of a uniform magnetic field ‘B’. If its length L is rotated clock-wise through angle of 90 degrees and current through it is reduced to two thirds then magnetic force on it becomes:",
      options: [
        "2/3 times",
        "1/3 times",
        "4/3 times",
        "Zero"
      ],
      answer: 3,
      explanation: "Rotating the conductor by 90° makes it parallel (or anti-parallel, θ = 0° or 180°) to the magnetic field. Since magnetic force F = I L B sin θ, sin(0°) = 0, making the magnetic force zero."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-117",
      question: "When the area vector A is parallel to the magnetic field B, what is the value of magnetic flux (ΦB)?",
      options: [
        "0",
        "BA cos 90°",
        "BA cos 0°",
        "B/A"
      ],
      answer: 2,
      explanation: "Magnetic flux Φ = B · A = B A cos θ. When the area vector A is parallel to magnetic field B, θ = 0°, so Φ = BA cos 0° = BA."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-160",
      question: "An electron is moving perpendicular to the magnetic field, which of the following is correct statement about electromagnetic force acting on the electron?",
      options: [
        "Force acting is equal to electron charge",
        "Force acting is equal to the magnetic field strength",
        "Force acting is maximum",
        "Zero force is acting on it"
      ],
      answer: 2,
      explanation: "Magnetic force on a moving charge is F = q v B sin θ. When motion is perpendicular to the field (θ = 90°), sin 90° = 1, giving the maximum possible force F_max = q v B."
    },
    {
      id: "kmu-phys-24-161",
      question: "For a positive charged particle (q) moving with a velocity (v) in a magnetic Field of flux density B, the force (F) acting on the charge particle is given by the expression?",
      options: [
        "q = Fv × B",
        "F = qv × B",
        "F = v × B/q",
        "q = v × B/F"
      ],
      answer: 1,
      explanation: "The Lorentz force acting on a moving charge in a magnetic field is defined by the vector cross-product F = q(v × B)."
    },
    {
      id: "kmu-phys-24-162",
      question: "Which of the following statement is true about the magnetic field inside a solenoid?",
      options: [
        "It is along the axis of the coil",
        "It is circular around the wires",
        "It is strongest at the ends of the solenoid",
        "It is zero when current flows through it"
      ],
      answer: 0,
      explanation: "Inside a long, tightly wound solenoid carrying current, the magnetic field is uniform, parallel, and directed along the central longitudinal axis of the coil."
    },
  
    // --- SIBA 2025 PHYS prep ---
    {
      id: "siba-2025-phys-134",
      question: "A proton and an alpha particle enter a magnetic field with equal speeds, compared to the proton, the alpha particle's path will have:",
      options: [
        "Larger radius",
        "Smaller radius",
        "Smaller path length",
        "Greater deflection"
      ],
      answer: 0,
      explanation: "Radius of circular path in a magnetic field r = (m v) / (q B). For an alpha particle, mass m_α = 4 m_p and charge q_α = 2 q_p. Thus r_α = (4 m_p v) / (2 q_p B) = 2 r_p, resulting in a larger radius."
    },
    {
      id: "siba-2025-phys-135",
      question: "An electron is projected along the positive x-axis in a magnetic field lying in xz-plane. The magnetic force on the electron will act along the:",
      options: [
        "x-axis",
        "-x-axis",
        "y-axis",
        "-y-axis"
      ],
      answer: 2,
      explanation: "Velocity v is along +i. If magnetic field B lies in the xz-plane along +k, (v × B) points along (i × k) = -j. Since electron charge q is negative (-e), the magnetic force F = -e(-j) = +e j, acting along the positive y-axis."
    },
    {
      id: "siba-2025-phys-136",
      question: "The magnetic flux through a loop of 1m² in a 0.5T magnetic field is same as magnetic flux through a loop of 0.5 m² in a magnetic field of:",
      options: [
        "1.0 T at 0°",
        "1.0 T at 60°",
        "2.0 T at 90°",
        "0.5 T at 90°"
      ],
      answer: 0,
      explanation: "Initial flux Φ₁ = B₁ A₁ = 0.5 T × 1 m² = 0.5 Wb (at 0° between field and area vector). For area A₂ = 0.5 m² at 0°: Φ₂ = B₂ × 0.5 = 0.5 → B₂ = 1.0 T at 0°."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-138",
      question: "The force experienced by a current-carrying conductor placed in a magnetic field is:",
      options: [
        "F = qBL sin θ",
        "F = BL sin θ",
        "F = qvB sin θ",
        "F = BL cos θ",
        "F = BIL sin θ"
      ],
      answer: 4,
      explanation: "The magnetic force on a straight conductor carrying current I of length L in field B is given by F = B I L sin θ."
    },
    {
      id: "siba-phy-24-143",
      question: "Which of the following statements is correct?",
      options: [
        "A magnetic field exerts a force if the charge particle moves opposite to the magnetic field.",
        "A magnetic field never exerts a force on a charge particle.",
        "A magnetic field exerts a force if the charge particle moves parallel to the magnetic field.",
        "A magnetic field exerts a force if the charge particle moves perpendicular to the magnetic field."
      ],
      answer: 3,
      explanation: "Since magnetic force F = q v B sin θ, sin(90°) = 1, so a magnetic field exerts maximum force when a charged particle moves perpendicular to field lines."
    },
    {
      id: "siba-phy-24-152",
      question: "An electron and proton enter in a magnetic field perpendicularly with the same momentum:",
      options: [
        "They move undeflected in opposite directions",
        "The electron deflects more than the proton",
        "They will deflect equally",
        "The proton deflects more than the electron",
        "They will not deflect at all"
      ],
      answer: 2,
      explanation: "Radius of circular path r = p / (q B). Since momentum p, charge magnitude q, and field B are identical for both particles, their radii of curvature are equal (they will deflect equally in magnitude)."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-142",
      question: "At what value of angle between the magnetic field intensity and vector area, the magnetic flux becomes zero?",
      options: [
        "0°",
        "30°",
        "45°",
        "90°"
      ],
      answer: 3,
      explanation: "Magnetic flux Φ = B A cos θ. When the angle between magnetic field and normal vector area is 90°, cos(90°) = 0, so flux becomes zero."
    },
    {
      id: "szambu-phy-24-144",
      question: "Tesla is the SI-unit of magnetic field intensity. Tesla can also be expressed as",
      options: [
        "N⁻¹A⁻¹m⁻¹",
        "N⁻¹Am⁻¹",
        "NA⁻¹m⁻¹",
        "NAm⁻¹"
      ],
      answer: 2,
      explanation: "From F = B I L → B = F / (I L), giving units of Newton per Ampere per meter (N A⁻¹ m⁻¹)."
    },
    {
      id: "szambu-phy-24-152",
      question: "The SI-unit of magnetic flux is weber. Weber can also be expressed as",
      options: [
        "Joule per ampere",
        "Joule per coulomb",
        "Newton per ampere",
        "Newton per coulomb"
      ],
      answer: 0,
      explanation: "1 Weber = 1 Tesla × 1 m² = (N / (A · m)) × m² = (N · m) / A = Joule / Ampere (J A⁻¹)."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-157",
      question: "The formula φ = B · A represents",
      options: [
        "Electric flux",
        "Magnetic flux",
        "Electric flux density",
        "Gravitational flux"
      ],
      answer: 1,
      explanation: "The scalar product of magnetic flux density vector (B) and vector area (A) defines magnetic flux (Φ_B = B · A)."
    },
    {
      id: "uhs-phys-24-158",
      question: "Which of the following statement is incorrect for any magnetic field lines?",
      options: [
        "Lines start at north pole and end at south pole",
        "Lines never touch or cross each other",
        "The lines are curved",
        "Magnetic field is strongest when the lines are farthest"
      ],
      answer: 3,
      explanation: "Magnetic field strength is proportional to line density; magnetic field is strongest where field lines are closest together (most dense), not farthest apart."
    },
    {
      id: "uhs-phys-24-159",
      question: "The unit of magnetic flux density is",
      options: [
        "Wb m⁻¹",
        "Wb m",
        "Wb m⁻²",
        "Wb"
      ],
      answer: 2,
      explanation: "Magnetic flux density B = Φ / A, giving units of Weber per meter squared (Wb m⁻²), also known as Tesla (T)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "An electron and a Proton enters into a magnetic field perpendicularly with the same momentum",
        options: [
          "The proton will deflect more",
          "Both will deflect equally",
          "Electron will deflect more",
          "They will not deflect at all"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "If a particle is moving in a region of both electric and magnetic fields then the total force acting on it is",
        options: [
          "Sum of electric and magnetic force",
          "No force will act on it",
          "Difference of electric and magnetic force",
          "None of the above"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "Two long parallel straight wires carry equal currents in the opposite direction. At a point Midway between the wires the magnetic field they produce is",
        options: [
          "Zero",
          "Non zero and along a line connecting the wires",
          "Non zero and parallel to the wires",
          "Non zero and perpendicular to the plane of the two wires"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "An electron Travels due north through a vacuum in a region of uniform magnetic field B that is also directed due north. It will",
        options: [
          "Be undeflected by the field",
          "Slow down",
          "Speed up",
          "Follow a right handed cork screw path"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-5",
        question: "Magnetic force acts like",
        options: [
          "Centripetal force",
          "Gravitational force",
          "Strong nuclear force",
          "Electrical force"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-6",
        question: "The radius of curvature of the path of a charged particle moving in a static uniform magnetic field is",
        options: [
          "Directly proportional to the magnitude of the charge on the particle",
          "Directly proportional to the magnitude of linear momentum of the particle",
          "Directly proportional to the kinetic energy of particle",
          "Inversely proportional to the magnitude of the magnetic field"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-7",
        question: "The direction of a point on the magnetic field of force can be taken along",
        options: [
          "Normal at that point",
          "The tangent at that point",
          "Axis of the magnetic line of force at that point",
          "Can’t be taken"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Thomson’s experiment involving the motion of an electron in mutually perpendicular E and B fields gave the value of",
        options: [
          "Mass of an electron",
          "Earth magnetic field",
          "Charge of an electron",
          "Charge to mass ratio of an electron"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "Two parallel long wires carry the same current and repel each other with the force of F per unit length. If both these currents are doubled and the wire separation tripled, the force per unit length becomes",
        options: [
          "2F/9",
          "2F/3",
          "4F/9",
          "4F/3"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-10",
        question: "The magnetic field due to electric current in a conducting wire is",
        options: [
          "Towards the centre of conducting wire",
          "Circular around the conducting wire",
          "In the direction of the electric current",
          "In the direction opposite to electric current"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "When a current conductor is placed in a magnetic field it moves from region of",
        options: [
          "Stronger to weak field",
          "Strong field if current is large",
          "Weak to strong field",
          "Weak to strong if current is large"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-12",
        question: "A charged particle is projected at an angle into a uniform magnetic field. Which of the following parameters of the charged particle will be affected by the magnetic field",
        options: [
          "Energy",
          "Speed",
          "Velocity",
          "Kinetic energy"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-13",
        question: "In the formula F = q(v × B)",
        options: [
          "F must be perpendicular to v but not necessarily to B",
          "F must be perpendicular to B but not necessarily to V",
          "V be perpendicular to B but not necessarily to F",
          "F must be perpendicular to both v and B"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "Magnetic force acting on a unit positive charge moving at right angle to the magnetic field with unit velocity is called",
        options: [
          "Magnetic flux",
          "Motional EMF",
          "Induced EMF",
          "Magnetic induction"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-15",
        question: "Flux through an area 1 m² in xy plane in a magnetic field of one tesla directing along Z Axis will be",
        options: [
          "0",
          "0.5 wb",
          "1 wb",
          "2 wb"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "When a charged particle moves through a magnetic field it suffers change in",
        options: [
          "Direction",
          "Speed",
          "Energy",
          "No change"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-17",
        question: "Two parallel wires carrying current in opposite directions",
        options: [
          "Repel each other",
          "Attract each other",
          "Have no effect upon each other",
          "They cancel out their individual magnetic fields"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "Magnetic lines around the current carrying wire are drawn in clockwise direction on a page. The current is flowing",
        options: [
          "Into the page",
          "Out of the page",
          "Left side of the page",
          "Right side of the page"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "Lines of the magnetic field produced by a long current carrying wire are",
        options: [
          "Circles that are concentric with wire",
          "Opposite to the direction of a current",
          "Radially outward from the wire",
          "Radially inward toward the wire"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-20",
        question: "Which of the following particles moving in a magnetic field cannot be deflected",
        options: [
          "Alpha particle",
          "Electron",
          "Beta particle",
          "Neutron"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-21",
        question: "If current flows from top towards bottom through a wire then the direction of magnetic line of force would be",
        options: [
          "Parallel to the wire",
          "Clockwise",
          "Perpendicular to the wire",
          "Anticlockwise"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-22",
        question: "A charged particle in uniform motion produces",
        options: [
          "An electric field only",
          "A magnetic field only",
          "Both an electric field and magnetic field",
          "No such field at all"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-23",
        question: "The magnetic field produced due to the current in a straight wire is proportional to",
        options: [
          "Electric current",
          "Length of the wire",
          "Conducting material",
          "Diameter of the wire"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "A uniform magnetic field is represented by a set of lines of force which are",
        options: [
          "Parallel",
          "Divergent",
          "Convergent",
          "None of these"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-25",
        question: "The direction of magnetic line of force can be found by using",
        options: [
          "Right hand rule",
          "Left hand rule",
          "Henry’s law",
          "Faraday’s law"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-26",
        question: "Magnetic force is simply a",
        options: [
          "Reflecting force",
          "Restoring force",
          "Deflecting force",
          "Gravitational force"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "A Proton is moving northward in a magnetic field directed vertically upward. The proton will be deflected",
        options: [
          "Eastward",
          "Westward",
          "Vertically upward",
          "Remain undeflected"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-28",
        question: "The SI unit of magnetic flux is",
        options: [
          "Tesla",
          "Joule",
          "Weber",
          "Newton"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "A Proton and an electron both moving with same velocity enter into a region of magnetic field directed perpendicular to velocity of the particles. They will now move in a circular orbit such that",
        options: [
          "Their time periods will be same",
          "The time period for electron will be higher",
          "The time period for Proton will be higher",
          "Their orbital radii will be same"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "The direction of the magnetic line of force depends upon",
        options: [
          "Nature of material of conducting wire",
          "Area of the conducting wire",
          "Amount of the current",
          "Direction of the current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "Charged particle enters at 30 degree to the magnetic field. Its path becomes",
        options: [
          "Helical",
          "Elliptical",
          "Circular",
          "Straight line"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-32",
        question: "Which of the following is a vector quantity",
        options: [
          "Magnetic flux density",
          "Magnetic field intensity",
          "Magnetic flux",
          "Both a and b"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Hydrogen atom that has lost its electron is moving east in the region where the magnetic field is directed from South to North. It will be deflected",
        options: [
          "Up",
          "Down",
          "North",
          "South"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-34",
        question: "A magnetic field exerts a force on a charged particle",
        options: [
          "Always",
          "Never",
          "If the particle is moving across the field",
          "If the particle is moving along the field"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-35",
        question: "The value of ……… around the current carrying wire is found by Ampere’s circuital law",
        options: [
          "Magnetic field strength",
          "Magnetic flux density",
          "Magnetic induction",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-36",
        question: "Four particles enter a uniform magnetic field perpendicularly with the same speed. Which particle has the largest radius",
        options: [
          "Electron",
          "Proton",
          "Alpha particle",
          "Beta particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "A charged particle enters in a direction parallel to an electric field and magnetic field such that both fields are parallel to each other. The force on the charge is",
        options: [
          "Zero",
          "Due to electric field",
          "Due to magnetic field",
          "Due to both fields"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "A charged particle moves through a magnetic field in a direction perpendicular to it. Which of the following remains unchanged for the particle",
        options: [
          "Velocity",
          "Acceleration",
          "Speed",
          "Direction"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Oppositely charged particles moving due east enter a region of uniform magnetic field directed vertically upwards. The particles will",
        options: [
          "Continue to move due east",
          "Move in a circular orbit with its speed unchanged",
          "Move in circular orbit with its speed increases",
          "Get deflected vertically upward"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-40",
        question: "Current is flowing in a long conducting wire. The magnetic induction at a distance r from it is 0.4 Tesla. Then its value at double the distance will be",
        options: [
          "1.6 tesla",
          "0.8 tesla",
          "0.2 tesla",
          "0.1 tesla"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "A strong magnetic field is applied to a stationary electron. Then",
        options: [
          "Electron moves in the direction of field",
          "Electron moves opposite to field",
          "Electron starts spinning",
          "Electron remains stationary"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-42",
        question: "Two parallel wires carrying current in the opposite direction",
        options: [
          "Repel each other",
          "Have no effect upon each other",
          "Attract each other",
          "They cancel out their individual magnetic fields"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-43",
        question: "Proton moves with velocity V in a perpendicular magnetic field. If the strength is increased to 2B and the proton still moves in the same circular path, its kinetic energy will",
        options: [
          "Be doubled",
          "Become four times",
          "Be halved",
          "No change"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-44",
        question: "A homogeneous electric field and uniform magnetic field are pointing in the same direction. A Proton is projected with its velocity parallel to the electric field. It will",
        options: [
          "Go on moving in the same direction with increasing velocity",
          "Go on moving in the same direction with constant velocity",
          "Turn to its right",
          "Turn to its left"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "An electron is moving North in a region where the magnetic field is South. The magnetic force exerted on the electron is",
        options: [
          "Zero",
          "Down",
          "Up",
          "East"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-46",
        question: "An electron travels from left to right in the plane of the paper in a magnetic field perpendicular to and directed out of the paper. It is deflected",
        options: [
          "Downward direction",
          "Into the paper",
          "Upward direction",
          "Out of the paper"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-47",
        question: "A force exerted on a wire of 1 m length carrying 1 ampere current placed at right angle to the field is called",
        options: [
          "Lorentz force",
          "Self inductance",
          "Magnetic flux",
          "Magnetic induction"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-48",
        question: "A constant current is sent through a helical coil. The coil",
        options: [
          "Tends to get shorter",
          "Tends to rotate about its axis",
          "Tends to get longer",
          "Produces zero magnetic field at its centre"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-49",
        question: "Uniform electric field and a uniform magnetic field exist in a region in the same direction. An electron is projected with velocity in the same direction. The electron will",
        options: [
          "Turn to its right",
          "Turn to its left",
          "Keep moving in the same direction but its speed will increase",
          "Keep moving in the same direction but its speed will decrease"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Double the applied magnetic field, the charge to mass ratio of electron will",
        options: [
          "Half",
          "Remain same",
          "Double",
          "Zero"
        ],
        answer: 1
      }
  ];