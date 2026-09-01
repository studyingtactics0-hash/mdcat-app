export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const atomicSpectraQuestions: Question[] = [
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-151",
      question: "The ratio of longest to shortest wave lengths in Bracket series of hydrogen spectrum is:",
      options: [
        "25/9",
        "17/6",
        "9/5",
        "4/3"
      ],
      answer: 0,
      explanation: "For Brackett series (n₁ = 4): Longest wavelength occurs at n₂ = 5 → 1/λ_max = R(1/4² - 1/5²) = R(9/400). Shortest wavelength occurs at n₂ = ∞ → 1/λ_min = R(1/4² - 0) = R(1/16). Ratio λ_max / λ_min = (400/9) / 16 = 25/9."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-86",
      question: "In hydrogen spectrum, the Brackett series lies in:",
      options: [
        "Violet region",
        "Red region",
        "Infrared region",
        "X-ray region"
      ],
      answer: 2,
      explanation: "In the hydrogen emission spectrum, the Brackett series (transitions terminating at n = 4) lies within the infrared region of the electromagnetic spectrum."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-172",
      question: "If an electron in the hydrogen atom jumps from second to first orbit, the emitted radiation has a wavelength of?",
      options: [
        "4 / (3 R_H)",
        "3 / (4 R_H)",
        "R_H",
        "4 R_H"
      ],
      answer: 0,
      explanation: "Using Rydberg formula: 1/λ = R_H (1/1² - 1/2²) = R_H (1 - 1/4) = 3 R_H / 4. Solving for wavelength yields λ = 4 / (3 R_H)."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-137",
      question: "If electronic transitions in hydrogen atom terminate in the second orbit, the emitted series is known as:",
      options: [
        "Brackett series",
        "Paschen series",
        "Lyman series",
        "Balmer series",
        "Pfund series"
      ],
      answer: 3,
      explanation: "Transitions that end at the n = 2 energy level form the Balmer series."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-138",
      question: "Two spectral lines in the Hydrogen atom spectrum are close together. This likely means:",
      options: [
        "The energy difference is zero",
        "The energy difference is small",
        "The light intensity is low",
        "The atom become unstable"
      ],
      answer: 1,
      explanation: "Photon energy is related to frequency by E = hf = hc/λ. Two wavelengths that are very close to each other correspond to a small difference in photon energy."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-141",
      question: "Which of the following series of hydrogen spectrum lies in visible region?",
      options: [
        "Balmer",
        "Bracket",
        "Lyman",
        "Paschen"
      ],
      answer: 0,
      explanation: "The Balmer series is the only spectral series of hydrogen that falls within the visible spectrum."
    },
    {
      id: "szambu-phy-24-154",
      question: "The Lyman series contain the wavelengths in the",
      options: [
        "far-infrared region",
        "infrared region",
        "ultraviolet region",
        "visible region"
      ],
      answer: 2,
      explanation: "The Lyman series consists of transitions terminating at n = 1, which emit high-energy photons in the ultraviolet (UV) region."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-138",
      question: "The Balmer series of hydrogen spectrum appears in the",
      options: [
        "Infrared region",
        "Ultraviolet region",
        "X-ray region",
        "Visible region"
      ],
      answer: 3,
      explanation: "The Balmer series corresponds to electron transitions terminating at the n = 2 energy level and lies in the visible light region."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-170",
      question: "Which series falls in ultra violet region?",
      options: [
        "Lyman",
        "Brackett",
        "Pfund",
        "Paschen"
      ],
      answer: 0,
      explanation: "The Lyman series corresponds to transitions down to the ground state (n = 1) and falls in the ultraviolet region."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "The spectral series of the hydrogen atom that lies in the ultraviolet region of the electromagnetic spectrum is called the:",
        options: [
          "Balmer series",
          "Lyman series",
          "Paschen series",
          "Brackett series"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-2",
        question: "According to Bohr's atomic model, the angular momentum of an electron in a stationary orbit is:",
        options: [
          "Directly proportional to the principal quantum number, n",
          "Inversely proportional to the principal quantum number, n",
          "Directly proportional to the square of the principal quantum number, n²",
          "Constant for all orbits"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-3",
        question: "The transition of an electron from n=4 to n=2 in a hydrogen atom results in the emission of a photon in which series?",
        options: [
          "Lyman series",
          "Paschen series",
          "Balmer series",
          "Pfund series"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-4",
        question: "The phenomenon where an excited atom emits a photon without any external trigger is known as:",
        options: [
          "Stimulated emission",
          "Spontaneous emission",
          "Absorption",
          "Population inversion"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-5",
        question: "The production of characteristic X-rays is a result of:",
        options: [
          "The rapid deceleration of high-speed electrons by a target nucleus.",
          "Electron transitions between the inner shells of a heavy atom.",
          "The heating of a filament in an X-ray tube.",
          "The photoelectric effect."
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "For laser action to occur, a necessary condition is that there are more atoms in a higher energy state than in a lower one. This condition is called:",
        options: [
          "Metastable state",
          "Spontaneous emission",
          "Optical pumping",
          "Population inversion"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-7",
        question: "The energy of an electron in the nth orbit of a hydrogen atom is proportional to:",
        options: [
          "n²",
          "n",
          "1/n",
          "1/n²"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-8",
        question: "Which of the following properties is NOT characteristic of laser light?",
        options: [
          "Coherent",
          "Monochromatic",
          "Incoherent",
          "Directional"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-9",
        question: "The minimum energy required to remove an electron from an atom in its ground state is known as:",
        options: [
          "Excitation energy",
          "Binding energy",
          "Ionization energy",
          "Work function"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "The Paschen series of the hydrogen spectrum is in which region?",
        options: [
          "Ultraviolet",
          "Visible",
          "Infrared",
          "X-ray"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-11",
        question: "For an electron in a stationary Bohr orbit, its total energy is -3.4 eV. What is its kinetic energy (KE)?",
        options: [
          "-3.4 eV",
          "+3.4 eV",
          "-6.8 eV",
          "+6.8 eV"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-12",
        question: "The continuous spectrum of X-rays is produced due to:",
        options: [
          "Electron transitions between discrete energy levels.",
          "The deceleration of bombarding electrons by the target.",
          "The excitation of the target atoms.",
          "Thermionic emission from the filament."
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-13",
        question: "A state in which an excited atom can stay for a relatively long time (e.g., 10⁻³ s) is called a:",
        options: [
          "Ground state",
          "Excited state",
          "Ionized state",
          "Metastable state"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-14",
        question: "The radius of the first Bohr orbit for the hydrogen atom is r₁. The radius of the third Bohr orbit is:",
        options: [
          "3r₁",
          "r₁/3",
          "9r₁",
          "r₁/9"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-15",
        question: "An absorption spectrum is characterized by:",
        options: [
          "Bright lines on a dark background.",
          "Dark lines on a bright background.",
          "A continuous band of colors.",
          "No lines at all."
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-16",
        question: "In a He-Ne laser, the process of exciting Ne atoms through collisions with excited He atoms is called:",
        options: [
          "Stimulated emission",
          "Optical pumping",
          "Resonant energy transfer",
          "Spontaneous absorption"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "The series limit of a spectral series corresponds to an electron transition from:",
        options: [
          "n = 2 to n = 1",
          "n = ∞ to the final state n.",
          "n = (n_final + 1) to n_final",
          "n = 1 to n = ∞"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-18",
        question: "The energy of a photon emitted from a hydrogen atom is 10.2 eV. This corresponds to a transition from:",
        options: [
          "n = 2 to n = 1",
          "n = 3 to n = 1",
          "n = 3 to n = 2",
          "n = 4 to n = 2"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-19",
        question: "Rydberg's constant (R) is a physical constant related to:",
        options: [
          "The charge of an electron",
          "The speed of light",
          "Atomic spectra",
          "Planck's constant"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-20",
        question: "The process of supplying energy to the atoms of a laser medium to achieve population inversion is called:",
        options: [
          "Amplification",
          "Coherence",
          "Pumping",
          "Emission"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "Calculate the wavelength of the second line of the Balmer series for the hydrogen atom. (Rydberg constant R_H ≈ 1.097 × 10⁷ m⁻¹)",
        options: [
          "656 nm",
          "121 nm",
          "486 nm",
          "91 nm"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "The wavelength of characteristic X-rays depends on:",
        options: [
          "The accelerating voltage in the X-ray tube.",
          "The material of the target anode.",
          "The temperature of the filament.",
          "The pressure inside the X-ray tube."
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-23",
        question: "The lines in the Balmer series of the hydrogen spectrum are formed by electron transitions from higher energy levels to:",
        options: [
          "n = 1",
          "n = 2",
          "n = 3",
          "n = 4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-24",
        question: "The lifetime of an atom in an ordinary excited state is typically about:",
        options: [
          "10⁻³ s",
          "10⁸ s",
          "10⁻⁸ s",
          "10³ s"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-25",
        question: "An electron in a hydrogen atom jumps from n=3 to n=1. The number of possible spectral lines that can be emitted is:",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-26",
        question: "Bohr's model of the atom successfully explained:",
        options: [
          "The spectrum of all atoms and molecules.",
          "The line spectrum of the hydrogen atom.",
          "The Zeeman effect (splitting of spectral lines in a magnetic field).",
          "The relative intensities of spectral lines."
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-27",
        question: "In the process of stimulated emission, the emitted photon is identical to the incident photon in all aspects EXCEPT:",
        options: [
          "Frequency",
          "Phase",
          "Direction of travel",
          "It is identical in all aspects mentioned."
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-28",
        question: "The Brackett series in the hydrogen spectrum is formed by electron transitions ending at which energy level?",
        options: [
          "n = 2",
          "n = 3",
          "n = 4",
          "n = 5"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-29",
        question: "The ground state energy of a hydrogen atom is -13.6 eV. What is the energy of the first excited state?",
        options: [
          "-13.6 eV",
          "-6.8 eV",
          "-3.4 eV",
          "-1.51 eV"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "The concept of discrete energy levels in an atom was first introduced by:",
        options: [
          "J.J. Thomson",
          "Ernest Rutherford",
          "Niels Bohr",
          "Max Planck"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-31",
        question: "The velocity of an electron in the first Bohr orbit is v₁. The velocity in the second orbit would be:",
        options: [
          "2v₁",
          "v₁/2",
          "4v₁",
          "v₁/4"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "The shortest wavelength in the Balmer series corresponds to a transition from:",
        options: [
          "n = 3 to n = 2",
          "n = 2 to n = 1",
          "n = ∞ to n = 2",
          "n = ∞ to n = 1"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-33",
        question: "The laser used in barcode scanners is typically a:",
        options: [
          "CO2 laser",
          "Ruby laser",
          "He-Ne laser",
          "Excimer laser"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-34",
        question: "According to Bohr's third postulate, an electron emits a photon when it:",
        options: [
          "Jumps from a lower energy orbit to a higher one.",
          "Jumps from a higher energy orbit to a lower one.",
          "Revolves in a stationary orbit.",
          "Is removed from the atom."
        ],
        answer: 1
      }
  ];