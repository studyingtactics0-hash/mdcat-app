export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const transitionElementsQuestions: Question[] = [
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-110",
      question: "Compounds attracted into a magnetic field are called:",
      options: [
        "paramagnetic",
        "diamagnetic",
        "polymagnetic",
        "ferromagnetic"
      ],
      answer: 0,
      explanation: "Paramagnetic substances possess unpaired electrons whose magnetic moments align with an applied magnetic field, causing them to be attracted into the field."
    },
    {
      id: "bumhs-mdcat-2024-122",
      question: "Transition metal compounds containing unpaired electrons are:",
      options: [
        "always diamagnetic",
        "attracted by the magnet",
        "not attracted by the magnet",
        "repelled by the magnet"
      ],
      answer: 1,
      explanation: "Unpaired electrons impart paramagnetic character to transition metal compounds, causing them to be drawn/attracted into a magnetic field."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-155",
      question: "The electronic configuration of Fe²⁺ (Z=26) is:",
      options: [
        "[Ar] 4s² 3d⁶",
        "[Ar] 4s² 3d⁴",
        "[Ar] 4s² 3d⁵",
        "[Ar] 4s⁰ 3d⁶"
      ],
      answer: 3,
      explanation: "Neutral Iron (Fe) has the electronic configuration [Ar] 4s² 3d⁶. When ionizing to form Fe²⁺, the two 4s valence electrons are lost first, yielding [Ar] 4s⁰ 3d⁶."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-106",
      question: "Cu²⁺ salt solution is blue in colour due to transition of electrons from:",
      options: [
        "d to d orbital",
        "p to d orbital",
        "p to p orbital",
        "s to p orbital"
      ],
      answer: 0,
      explanation: "The blue color of Cu²⁺ (3d⁹) solutions arises from d–d electronic transitions, where absorbed visible light excites an electron between crystal-field split d-orbitals."
    },
    {
      id: "kmu-mdcat-2024-107",
      question: "Potassium ferrocyanide, K₄[Fe(CN)₆], is which type of salt?",
      options: [
        "Complex",
        "Double",
        "Mixed",
        "Normal"
      ],
      answer: 0,
      explanation: "Potassium ferrocyanide contains a complex ion [Fe(CN)₆]⁴⁻ that retains its identity in aqueous solution, defining it as a complex salt."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-86",
      question: "What is the range of atomic numbers of the 3d series of transition elements?",
      options: [
        "20–30",
        "21–30",
        "22–30",
        "24–30"
      ],
      answer: 1,
      explanation: "The first (3d) transition series spans ten elements from Scandium (Z = 21) to Zinc (Z = 30)."
    },
    {
      id: "szambu-chem-24-118",
      question: "Transition element Vanadium in its lower oxidation states mostly acts as a:",
      options: [
        "Amphoteric",
        "Neutral",
        "Oxidizing agent",
        "Reducing agent"
      ],
      answer: 3,
      explanation: "Vanadium in lower oxidation states (such as V²⁺ and V³⁺) readily loses electrons to attain higher oxidation states (+4 or +5), functioning as a strong reducing agent."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-104",
      question: "Electronic configuration of chromium (Proton number 24) is:",
      options: [
        "[Ar] 3d⁴ 4s²",
        "[Ar] 3d⁵ 4s²",
        "[Ar] 3d⁵ 4s¹",
        "[Ar] 3d⁶ 4s²"
      ],
      answer: 2,
      explanation: "Chromium (Z = 24) exhibits an anomalous electronic configuration [Ar] 3d⁵ 4s¹ to achieve the extra stability associated with a half-filled d-subshell."
    },
    {
      id: "uhs-2024-chem-105",
      question: "Which of the following is NOT a characteristic property of transition elements?",
      options: [
        "High melting points",
        "Good conductors of electricity",
        "Hard metals",
        "Ions and compounds are colorless"
      ],
      answer: 3,
      explanation: "Most transition metal ions and compounds are characteristic for being colored due to d–d electron transitions. Stating that their ions are colorless is incorrect."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-89",
      question: "Which one of the following is a coinage metal?",
      options: [
        "Pd",
        "Cu",
        "Cd",
        "Hg"
      ],
      answer: 1,
      explanation: "The Group 11 transition elements—Copper (Cu), Silver (Ag), and Gold (Au)—are historically termed the coinage metals."
    },
    {
      id: "uhs-chem-25-115",
      question: "Number of unpaired electrons present in the ground state of Fe³⁺ are (Atomic number of Fe=26):",
      options: [
        "Three",
        "Four",
        "Five",
        "Six"
      ],
      answer: 2,
      explanation: "Fe³⁺ has the electronic configuration [Ar] 3d⁵. By Hund's rule, all 5 d-orbitals contain one single electron each, yielding 5 unpaired electrons."
    }
  ];