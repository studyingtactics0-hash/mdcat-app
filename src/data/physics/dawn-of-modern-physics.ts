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
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Photon is the particle which has",
        options: [
          "Infinite rest mass",
          "Rest mass but no charge",
          "No rest mass and no charge",
          "Both A and B are correct"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "In photoelectric emission the kinetic energy of the electron is",
        options: [
          "Directly proportional to the wavelength",
          "Directly proportional to the frequency of incident radiation",
          "Directly proportional to the intensity of incident radiation",
          "Does not depend any of the above"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-3",
        question: "The threshold wavelength of photoelectric emission of a metal is 4000 angstrom then the minimum energy required to eject electron is",
        options: [
          "4.96 electron volt",
          "3.1 electron volt",
          "49.6 electron volt",
          "31 electron volt"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-4",
        question: "Photoelectric effect is the conversion of",
        options: [
          "Light into heat",
          "Electricity into light",
          "Light into electricity",
          "None of the above mentioned"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-5",
        question: "Light of frequency 1.5 times the threshold frequency is incident on photosensitive material if the frequency is half and intensity is the doubled the photoelectric current becomes",
        options: [
          "Four times",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-6",
        question: "Einstein special theory of relativity is applicable only for which frame of references",
        options: [
          "Inertial",
          "Non inertial",
          "Both of them",
          "None of them"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-7",
        question: "Wavelength associated with an electron is the order of",
        options: [
          "Visible light",
          "X-rays",
          "Radio waves",
          "Infrared"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "The absorbed energy of incident Photon is used in two ways work function part of energy used to free the electron from metal surface remaining part is converted to",
        options: [
          "Kinetic energy",
          "Potential energy",
          "Binding energy",
          "Thermal energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-9",
        question: "In a Photoelectric effect experiment at a frequency above cut off the number of electron ejected is proportional to",
        options: [
          "Their kinetic energy",
          "The work function",
          "The number of photons that hit the sample",
          "The frequency the incident light"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "Maximum energy of electron released in a photo cell is independent of",
        options: [
          "Frequency of incident light",
          "Intensity of incident light",
          "Nature of cathode rays",
          "None of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-11",
        question: "Experimental proof of particle nature of light is",
        options: [
          "Pair production",
          "Photoelectric effect",
          "Davison Germer experiment",
          "De broglie concept"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "The work function of metallic substance is 5 electron volt then its threshold frequency is approximately",
        options: [
          "1.6×10⁷ Hz",
          "8.68×10¹⁵ Hz",
          "9.68×10¹⁷ Hz",
          "1.2×10¹⁵ Hz"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "Maximum kinetic energy of photo electron depends upon ........ of incident light",
        options: [
          "Frequency",
          "Brightness",
          "Intensity",
          "Power"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-14",
        question: "A photon is a",
        options: [
          "Unit of energy",
          "Quantum of electromagnetic radiations",
          "Positively charged particle",
          "Unit of wavelength"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In a Photoelectric effect experiment at a frequency above threshold frequency the number of electron ejected is proportional to",
        options: [
          "The frequency of the incident light",
          "Their potential energy",
          "The number of photons that hit the sample",
          "Their kinetic energy"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-16",
        question: "The phenomena of ejection of electron from a metal when light of suitable frequency falls on it is called",
        options: [
          "Compton's effect",
          "Photoelectric effect",
          "Annihilation of matter",
          "None of them"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-17",
        question: "If the intensity of incident light is made double then the maximum number of emitted electrons will become",
        options: [
          "Double",
          "8 times",
          "Four times",
          "Half"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-18",
        question: "The reverse process of Photoelectric effect is",
        options: [
          "Annihilation of matter",
          "Pair production",
          "Production of X-rays",
          "Nuclear fission"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-19",
        question: "Which physical quantity will change if intensity of light falling on metal surface is increased",
        options: [
          "Kinetic energy of photo electrons",
          "Plate potential",
          "Velocity of photo electrons",
          "Current"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-20",
        question: "Photoelectric effect of for visible light can be obtained from",
        options: [
          "Sodium Potassium",
          "Helium neon",
          "Carbon oxygen",
          "Magnesium sodium"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-21",
        question: "The Balmer series of hydrogen is important because it",
        options: [
          "Is the only one for which the quantum theory be used",
          "Is the only series that occurs for hydrogen",
          "Is in the visible region",
          "Involves the lowest possible quantum number"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "The momentum of moving Photon is",
        options: [
          "Zero",
          "λ⁻¹h",
          "hλ",
          "λh⁻¹"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-23",
        question: "How does the intensity affect the photoelectric current",
        options: [
          "If intensity increases the photoelectric current increases",
          "If the intensity increases the photoelectric current decreases",
          "If the intensity decreases the photoelectric current become twice",
          "No effect"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-24",
        question: "The minimum energy of pair production is",
        options: [
          "1.02 volt",
          "1.02 electron volt",
          "1.02 Mega electron volt",
          "1.02 giga electron volt"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-25",
        question: "The phase determines the",
        options: [
          "Displacement",
          "Amplitude",
          "Frequency",
          "State of motion of vibrating body"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "Which light of photon has the least momentum",
        options: [
          "Red",
          "Yellow",
          "Blue",
          "Radiowave"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-27",
        question: "Which of the following statement is incorrect in perspective of modern physics",
        options: [
          "Energy has inertia",
          "Time dilation phenomena does not occurs in daily life",
          "Light is electromagnetic radiation",
          "Universe is continuously contracting"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "In a Photoelectric effect experiment the stopping potential is",
        options: [
          "The electric potential that causes the electronic current to vanish",
          "The photon energy",
          "Their kinetic energy of the most energetic electron ejected",
          "The energy required to remove an electron from the sample"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-29",
        question: "The lightest element which exhibit radio activity",
        options: [
          "Hydrogen",
          "Duteron",
          "Tritium",
          "Helium"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "Two photons of energy 2.5 electron volt each incident on a metal plate whose work function is 4 electron volt then the number of electrons emitted from the metal surface will be",
        options: [
          "One",
          "More than two",
          "Two",
          "Electron emission is not possible"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "Sun appears reddish during its rising and setting due to",
        options: [
          "Diffraction of light",
          "Scattering of light due to air molecule in air",
          "Refraction of light",
          "It's very high temperature"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "In a Photoelectric effect experiment at a frequency above cut off the stopping potential is proportional to",
        options: [
          "The energy of the least energetic electron before it is ejected",
          "The energy of the least energetic electron after it is ejected",
          "The energy of the most energetic electron before it is ejected",
          "The energy of the most energetic electron after it is ejected"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-33",
        question: "Wave like characteristics of electron is demonstrated by",
        options: [
          "Line spectrum of atoms",
          "Diffraction by crystalline solids",
          "Production of X-rays",
          "Photoelectric effect"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-34",
        question: "Which of the following statement is incorrect",
        options: [
          "Photoelectric emissions does not occur below the threshold frequency",
          "The photoelectric current increase with the frequency of incident light",
          "Threshold frequency depends on the metal used",
          "The emission of photo electrons is an instantaneous process"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-35",
        question: "Evidence for the wave nature of matter is",
        options: [
          "Electron diffraction experiment of davisions and germer",
          "Thomson measurement of charge to mass ratio",
          "Young's double slit experiment",
          "The compton's effect"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "The device working is based upon Photoelectric effect is",
        options: [
          "Photo voltaic cell",
          "Photocell",
          "Photo phone",
          "Photo door"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-37",
        question: "The radiations emitted from hydrogen filled discharge tube show",
        options: [
          "Bound spectrum",
          "Continuous spectrum",
          "Line spectrum",
          "Absorption spectrum"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-38",
        question: "X-rays have",
        options: [
          "Less frequency and energy than ultraviolet rays",
          "More frequency and energy than ultraviolet rays",
          "Less frequency and energy then infrared rays",
          "Less frequency and energy than X-rays"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-39",
        question: "The energy generation in stars is due to",
        options: [
          "Fusion of heavy nuclei",
          "Fission of light nuclei",
          "Chemical reactions",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-40",
        question: "What is the effect of intensity on this stopping potential",
        options: [
          "As intensity increases stopping potential increases linearly",
          "If intensity increases stopping potential decreases linearly",
          "If intensity decreases stopping potential increases exponentially",
          "No effect"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-41",
        question: "Which statement describe the arrangement of particles in a solid",
        options: [
          "The particles are closed together and our constantly changing places",
          "The particle start together and do not change place",
          "The particles are closed together and stationer",
          "The particles are far apart and constantly changing place"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-42",
        question: "Minimum energy required by the electron to leave the metal surface is called as",
        options: [
          "Threshold frequency",
          "Work function",
          "Cut off frequency",
          "Threshold energy"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "Photoelectric cell is illuminated by a point source of light 1m away when the source is Taken 2 m away",
        options: [
          "The number of electron emitted is a quarter of the initial number",
          "The number of electron emitted is half the initial number",
          "Each electron emitted carries one quarter of initial energy",
          "Each emitted electron carries half the initial energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-44",
        question: "Which of the following statements about the energy in a Quantum true frequency",
        options: [
          "It very is directly with frequency",
          "It very is inversely with frequency",
          "It is the same it all frequencies",
          "None of them"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-45",
        question: "Linear momentum of photon is",
        options: [
          "Zero",
          "hf/c",
          "hf/c²",
          "C²/hf"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-46",
        question: "In a Photoelectric effect monochromatic light is incident on a metal surface if the incident light of twice the intensity but the same wavelength the kinetic energy of emitted electron",
        options: [
          "Becomes double",
          "Becomes half",
          "Remain same",
          "First increases then decreases"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-47",
        question: "The maximum energy of photo electron is",
        options: [
          "V·e²",
          "Choice 4",
          "V·²e",
          "V·e",
          "Work function"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-48",
        question: "Energy of photon is directly proportional to",
        options: [
          "Temperature",
          "Wavelength",
          "Frequency",
          "Intensity"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-49",
        question: "Light of frequency 1.5 times the threshold frequency is incident on a photo sensitive material if the frequency is half and intensity is doubled the photoelectric current becomes",
        options: [
          "Four times",
          "Double",
          "Half",
          "Zero"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Rest mass of photon is",
        options: [
          "Infinite",
          "Very small",
          "Very large",
          "Zero"
        ],
        answer: 3
      }
  ];