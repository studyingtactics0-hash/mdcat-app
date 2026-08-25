export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const dawnOfModernPhysicsQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: [
        "p-n diode",
        "light emitting diode",
        "photo diode",
        "All of the given options"
      ],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode absorbs photons to generate electron-hole pairs, producing an output voltage across its terminals."
    },
    {
      id: "bumhs-2024-phys-140",
      question: "In photo-electric effect electrons are emitted on incidence of light upon certain material surfaces:",
      options: [
        "Below a certain frequency",
        "Beyond a certain wavelength",
        "Above a certain frequency",
        "None of the given options"
      ],
      answer: 2,
      explanation: "Photoelectric emission occurs only when the frequency of incident radiation is greater than or equal to the minimum threshold frequency (f ≥ f₀)."
    },
    {
      id: "bumhs-2024-phys-146",
      question: "Photoelectron emission depends upon the:",
      options: [
        "Intensity of incident light",
        "Color of the body",
        "Frequency of incident light",
        "Shape of the body"
      ],
      answer: 2,
      explanation: "Whether photoelectron emission occurs (and the kinetic energy of emitted photoelectrons) depends fundamentally on the frequency (or wavelength) of the incident light."
    },
    {
      id: "bumhs-2024-phys-153",
      question: "Let an electron beam is accelerated by adjustable potential V. If we decrease potential V, wavelength of matter wave associated with electron will:",
      options: [
        "increase",
        "decrease",
        "remain same",
        "sometime increase sometime decrease"
      ],
      answer: 0,
      explanation: "De Broglie wavelength λ = h / √(2m e V). Decreasing accelerating potential V reduces electron momentum, which increases the de Broglie wavelength λ."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-137",
      question: "If a photon of gamma ray and one of x-ray are compared, then:",
      options: [
        "x-ray photon has more energy",
        "Both have same energy",
        "Gamma-ray photon has more energy",
        "Both have same wavelength"
      ],
      answer: 2,
      explanation: "Gamma rays have higher frequencies than X-rays. Since photon energy E = hf, a gamma-ray photon carries more energy than an X-ray photon."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-85",
      question: "The energy (E) of a quantum is given by which equation?",
      options: [
        "E = mc²",
        "E = hν",
        "E = ½ mv²",
        "E = qV"
      ],
      answer: 1,
      explanation: "According to Planck's quantum theory, the energy of a quantum (photon) is E = hν (or E = hf)."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-169",
      question: "The momentum of moving photon is:",
      options: [
        "mc²",
        "λ / h",
        "h / λ",
        "zero"
      ],
      answer: 2,
      explanation: "By the de Broglie relation / Einstein photon theory, photon momentum is given by p = h / λ."
    },
    {
      id: "kmu-phys-24-170",
      question: "In every instant of time, wavelength associated with a freely falling body:",
      options: [
        "Decreases",
        "Increases two times",
        "Increases four times",
        "Remains constant"
      ],
      answer: 0,
      explanation: "As a body falls freely under gravity, its velocity v increases (v = gt), which increases momentum p = mv. Since λ = h / p, the de Broglie wavelength decreases with time."
    },
    {
      id: "kmu-phys-24-171",
      question: "As per 2nd photoelectric experiment, photoelectric effect does not occur if the frequency of the incident light is?",
      options: [
        "Below the threshold frequency",
        "Equals the threshold frequency",
        "Three times the threshold frequency",
        "Twice the threshold frequency"
      ],
      answer: 0,
      explanation: "If incident photon frequency is below the threshold frequency (f < f₀), photon energy is insufficient to overcome the work function, so no photoelectric emission occurs."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-123",
      question: "The linear momentum of a photon is given as:",
      options: [
        "mc",
        "mv",
        "mc²",
        "m₀c²",
        "hν/c"
      ],
      answer: 4,
      explanation: "Since E = hν and E = pc for a massless photon, momentum p = E / c = hν / c."
    },
    {
      id: "siba-phy-24-126",
      question: "One kilogram mass is entirely converted into energy. The amount of energy will be:",
      options: [
        "9×10⁹ J",
        "3×10¹⁰ J",
        "9×10¹⁶ eV",
        "9×10¹⁶ J",
        "9×10¹⁵ eV"
      ],
      answer: 3,
      explanation: "Using Einstein's mass-energy equivalence E = m c²: E = 1 kg × (3 × 10⁸ m/s)² = 9 × 10¹⁶ J."
    },
    {
      id: "siba-phy-24-148",
      question: "The charge to mass ratio (e/m) of an electron is:",
      options: [
        "1.9 × 10³¹ C/kg",
        "1.76 × 10¹⁹ C/kg",
        "1.76 × 10¹¹ C/kg",
        "1.602 × 10¹⁹ C/kg",
        "1.602 × 10¹¹ C/kg"
      ],
      answer: 2,
      explanation: "The charge-to-mass ratio of an electron is e/m = (1.602 × 10⁻¹⁹ C) / (9.11 × 10⁻³¹ kg) ≈ 1.76 × 10¹¹ C/kg."
    },
    {
      id: "siba-phy-24-161",
      question: "In the mathematical relationship φ = hv₀ (or E = hν − φ), the symbol φ represents:",
      options: [
        "Magnetic flux",
        "Threshold frequency",
        "Work function",
        "Electric flux",
        "Wave function"
      ],
      answer: 2,
      explanation: "In photoelectric equations, φ (or Φ / W₀) represents the work function of the metal surface."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-130",
      question: "If different colored light beams have same total energy, which color beam will contain the smallest number of photons?",
      options: [
        "Violet",
        "Blue",
        "Green",
        "Red"
      ],
      answer: 0,
      explanation: "Total energy E_total = N × (hf). Violet light has the highest frequency f and highest per-photon energy (hf), so fewer photons N are required to reach the same total energy."
    },
    {
      id: "szambu-2025-phys-145",
      question: "According to the particle model of light, a photon is:",
      options: [
        "A Particle with mass and charge",
        "A quantum of energy with zero rest mass and zero charge",
        "A continuous energy wave",
        "A particle that travels slower than light"
      ],
      answer: 1,
      explanation: "A photon is a discrete quantum of electromagnetic energy possessing zero rest mass and zero electric charge."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-123",
      question: "The kinetic energy of emitted electrons in photoelectric effect can be increased by increasing",
      options: [
        "applied potential of electrodes",
        "frequency of electromagnetic wave",
        "intensity of incident light",
        "momentum of incident photon"
      ],
      answer: 1,
      explanation: "By Einstein's photoelectric equation K.E._max = hf - φ, maximum kinetic energy depends strictly on the frequency (f) of the incident radiation."
    },
    {
      id: "szambu-phy-24-151",
      question: "At what angle made by scattered photon with x-axis, we can get maximum value of Compton’s shift?",
      options: [
        "0°",
        "45°",
        "90°",
        "180°"
      ],
      answer: 3,
      explanation: "Compton shift Δλ = (h / m₀c)(1 - cos θ). Maximum shift occurs when (1 - cos θ) is maximized, which happens at θ = 180° where cos(180°) = -1, giving Δλ_max = 2h / m₀c."
    },
    {
      id: "szambu-phy-24-157",
      question: "Which one of the following factors is the best for calculation Compton’s shift?",
      options: [
        "Angular spin of electron",
        "Energy of electron",
        "Energy of photon",
        "Scattering angle of photon"
      ],
      answer: 3,
      explanation: "The magnitude of Compton shift Δλ depends solely on the scattering angle θ of the photon."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-150",
      question: "The wave that has the highest frequency & penetrating power is",
      options: [
        "x-rays",
        "Ultraviolet rays",
        "Gamma rays",
        "Microwaves"
      ],
      answer: 2,
      explanation: "Gamma rays reside at the highest frequency end of the electromagnetic spectrum, carrying the greatest photon energy and penetrating power."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-167",
      question: "The value of Planck constant is",
      options: [
        "6.63 × 10⁻³⁴ Js",
        "6.63 × 10³⁴ Js",
        "6.63 × 10⁻³⁴ Js⁻¹",
        "6.63 × 10³⁴ Js⁻¹"
      ],
      answer: 0,
      explanation: "Planck's constant h is equal to 6.63 × 10⁻³⁴ Joule-seconds (J·s)."
    },
    {
      id: "uhs-phys-24-168",
      question: "The de-Broglie wavelength associated with a particle moving at 10⁶ m/s and having mass 10⁻³⁰ kg",
      options: [
        "6.6 × 10⁻¹⁰ m",
        "1.5 × 10⁹ m",
        "1.9 × 10⁻⁵ m",
        "7.2 × 10⁻⁸ m"
      ],
      answer: 0,
      explanation: "λ = h / (m v) = (6.63 × 10⁻³⁴ J·s) / (10⁻³⁰ kg × 10⁶ m/s) = (6.63 × 10⁻³⁴) / 10⁻²⁴ = 6.63 × 10⁻¹⁰ m."
    },
    {
      id: "uhs-phys-24-169",
      question: "Light propagates through space as a wave is evident by all of the following EXCEPT",
      options: [
        "Interference",
        "Photoelectric effect",
        "Diffraction",
        "Polarization"
      ],
      answer: 1,
      explanation: "Interference, diffraction, and polarization demonstrate the wave nature of light, whereas the Photoelectric effect proves the particle (quantum/photon) nature of light."
    },
    {
      id: "uhs-phys-24-171",
      question: "The potential through which an electron should be accelerated, so that, on collision it can lift the electron in the atom from its ground state to some higher state is known as",
      options: [
        "Ionization potential",
        "Excitation potential",
        "String potential",
        "Acceleration potential"
      ],
      answer: 1,
      explanation: "Excitation potential is the minimum accelerating potential required to impart enough kinetic energy to an electron to excite an atomic bound electron from its ground state to a higher energy level."
    },
    {
      id: "uhs-phys-24-172",
      question: "Which of the following regarding X-Rays is INCORRECT",
      options: [
        "Have higher wavelength than visible light",
        "They are part of electromagnetic spectrum",
        "They are highly penetrating in soft body tissues",
        "They are high energy photons"
      ],
      answer: 0,
      explanation: "X-rays have much shorter wavelengths (0.01 to 10 nm) than visible light (400 to 700 nm), so statement A is incorrect."
    }
  ];