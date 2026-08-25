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
    }
  ];