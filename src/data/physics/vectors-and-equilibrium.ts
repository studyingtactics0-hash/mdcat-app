export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const vectorsAndEquilibriumQuestions: Question[] = [
    {
      id: "bumhs-2024-phys-125",
      question: "Which of the following is a vector quantity?",
      options: [
        "Electric Flux",
        "Work done",
        "Electric Potential Energy",
        "None of the given options"
      ],
      answer: 3,
      explanation: "Electric flux, work done, and electric potential energy are all scalar quantities."
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
      explanation: "A net force can change an object's speed (acceleration/deceleration) as well as its direction of motion."
    },
    {
      id: "bumhs-2025-phys-127",
      question: "If vector A = 2î + ĵ + 3k̂ is perpendicular to B = î + ĵ + xk̂ then x =",
      options: [
        "3",
        "-3",
        "1",
        "-1"
      ],
      answer: 3,
      explanation: "Perpendicular vectors have a dot product of zero: A · B = (2)(1) + (1)(1) + (3)(x) = 2 + 1 + 3x = 0 → 3x = -3 → x = -1."
    },
    {
      id: "bumhs-2025-phys-136",
      question: "The dot product of two vectors is negative. If one vector lies along the positive x-axis, then the projection of second vector is along:",
      options: [
        "x-axis",
        "-x-axis",
        "y-axis",
        "-y-axis"
      ],
      answer: 1,
      explanation: "A negative dot product implies an angle greater than 90° (in the 2nd or 3rd quadrant relative to the positive x-axis), so its component/projection along the x-axis points in the negative x direction (-x-axis)."
    },
    {
      id: "bumhs-2025-phys-144",
      question: "The result of vector product of two vectors:",
      options: [
        "number",
        "unit",
        "number and unit",
        "magnitude and a unit vector"
      ],
      answer: 3,
      explanation: "A vector product yields a vector quantity, which can be expressed as its magnitude times a unit vector pointing in its direction."
    },
    {
      id: "bumhs-2025-phys-162",
      question: "Dot product of two unit vectors is:",
      options: [
        "1",
        "0",
        "cosθ",
        "AB cosθ"
      ],
      answer: 2,
      explanation: "For two unit vectors simple formula is |u1||u2|cosθ = (1)(1)cosθ = cosθ."
    },
    {
      id: "siba-2025-phys-133",
      question: "If A = (aî + bĵ) and B = 4(aî + bĵ), then the magnitude of A × B is:",
      options: [
        "4(a² + b²)",
        "4abk̂",
        "8(a + b)",
        "0"
      ],
      answer: 3,
      explanation: "Vector B is parallel to Vector A (B = 4A). The cross product of any two parallel vectors is 0."
    },
    {
      id: "siba-2025-phys-149",
      question: "Consider these two vectors A = 2î + 3ĵ and B = -6î + 4ĵ. The angle between these two vectors is:",
      options: [
        "0°",
        "90°",
        "120°",
        "180°"
      ],
      answer: 1,
      explanation: "Dot product A · B = (2)(-6) + (3)(4) = -12 + 12 = 0. Since the dot product is 0, the vectors are orthogonal (90°)."
    },
    {
      id: "siba-2024-phys-170",
      question: "A force of magnitude 10N is acting along x-axis, its component along y-axis is:",
      options: [
        "Zero",
        "5N",
        "20N",
        "10N",
        "25N"
      ],
      answer: 0,
      explanation: "A vector lying purely along the x-axis has θ = 0°, making its perpendicular y-component (F sin 0°) equal to zero."
    }
  ];