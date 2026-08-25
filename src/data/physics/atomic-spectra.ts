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
    }
  ];