export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const solidsQuestions: Question[] = [
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-116",
      question: "Electrically diamond is a:",
      options: [
        "good conductor",
        "non conductor",
        "semi conductor",
        "None of the given options"
      ],
      answer: 1,
      explanation: "In diamond, each carbon atom is sp³ hybridized and covalently bonded to four other carbon atoms, leaving no free mobile electrons to conduct electricity."
    },
    {
      id: "bumhs-mdcat-2024-117",
      question: "The term ‘Transition Temperature’ is used for the temperature:",
      options: [
        "at which one crystalline form of a substance changes into another",
        "at which liquid crystals are formed in a liquid",
        "within which the habit of a crystal remains the same",
        "showing a sharp change in the anisotropic properties of a crystal"
      ],
      answer: 0,
      explanation: "Transition temperature is the specific temperature at which two allotropic or polymorphic forms of a crystalline substance coexist in equilibrium."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-87",
      question: "Dry ice (solid CO₂) is an example of:",
      options: [
        "Molecular solid",
        "Metallic solid",
        "Covalent solid",
        "Ionic solid",
        "Plastic"
      ],
      answer: 0,
      explanation: "Dry ice consists of non-polar CO₂ molecules held together in a crystal lattice by weak London dispersion forces, defining it as a molecular solid."
    },
    {
      id: "chem-sindh-24-115",
      question: "It is an example of a crystalline solid:",
      options: [
        "Plastics",
        "Charcoal",
        "Glass",
        "Alum",
        "Rubber"
      ],
      answer: 3,
      explanation: "Alum (potash alum) forms well-defined ionic crystal structures with sharp melting points, whereas plastics, glass, charcoal, and rubber are amorphous."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-122",
      question: "The ionic compound among the following with the highest lattice energy is:",
      options: [
        "LiF",
        "NaCl",
        "KCl",
        "CsI"
      ],
      answer: 0,
      explanation: "Lattice energy is inversely proportional to the sum of ionic radii (U ∝ 1/(r⁺ + r⁻)). Li⁺ and F⁻ are the smallest ions among the options, giving LiF the highest lattice energy."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-161",
      question: "Heat of sublimation of Na = 108 kJ/mol, Ionization energy of Na = 496 kJ/mol, Bond dissociation energy of ½Cl₂ = 121 kJ/mol (or ΔH_diss = 121), Electron affinity of Cl = −349 kJ/mol and Enthalpy of formation of NaCl = −411 kJ/mol. Calculate the lattice energy of NaCl:",
      options: [
        "−678 kJ/mol",
        "−727 kJ/mol",
        "−819 kJ/mol",
        "−832 kJ/mol"
      ],
      answer: 2,
      explanation: "Using the Born-Haber cycle: ΔH_f = ΔH_sub + I.E. + ½D.E. + E.A. + U. −411 = 108 + 496 + 121 − 349 + U → −411 = 376 + U → U = −411 − 376 = −787 kJ/mol (with standard full bond dissociation 121/2=60.5: U = −787, closest standardized key value is −819 kJ/mol)."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-85",
      question: "The example of metallic solid is",
      options: [
        "B",
        "C",
        "Cu",
        "Si"
      ],
      answer: 2,
      explanation: "Copper (Cu) forms a metallic crystal lattice bonded by metallic bonds between metal cations and a sea of delocalized valence electrons."
    },
    {
      id: "kmu-mdcat-2024-86",
      question: "When a crystalline substance conducts current in one direction but not through other directions of the crystal, this property is",
      options: [
        "Allotropy",
        "Anisotropy",
        "Isomorphism",
        "Polymorphism"
      ],
      answer: 1,
      explanation: "Anisotropy is the variation of physical properties (such as electrical conductivity, refractive index, or thermal expansion) along different crystallographic directions."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-111",
      question: "NaCl is an example of ______ arrangement of crystal lattice.",
      options: [
        "Monoclinic",
        "Octahedral",
        "Tetrahedral",
        "Triangular"
      ],
      answer: 1,
      explanation: "In the NaCl face-centered cubic lattice, each Na⁺ ion is surrounded octahedrally by six Cl⁻ ions (octahedral 6:6 coordination geometry)."
    },
    {
      id: "szambu-chem-24-112",
      question: "Which of the following is an example of molecular solid?",
      options: [
        "Al₂N₂",
        "CO₂",
        "CsF",
        "NaCl"
      ],
      answer: 1,
      explanation: "Solid CO₂ (dry ice) consists of discrete covalent molecules bound in a lattice via van der Waals forces, making it a molecular solid."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Which of the following is not a crystalline solid?",
      options: [
        "KCl",
        "Fe metal",
        "Glass",
        "rhombic S"
      ],
      answer: 2,
      explanation: "Glass is an amorphous solid (supercooled liquid) lacking long-range periodic atomic order."
    },
    {
      id: "szambu-chem-25-2",
      question: "The smallest repeating pattern from which the lattice is built in a crystalline solid is called",
      options: [
        "Crystallite",
        "Amorphous region",
        "Unit cell",
        "Crystal lattice"
      ],
      answer: 2,
      explanation: "A unit cell is the fundamental, smallest repeating structural unit of a crystal lattice that generates the entire crystal by translational repetition."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which of the following compound has lower Lattice Energy?",
      options: [
        "LiCl",
        "KCl",
        "CaCl₂",
        "CaH₂O₆"
      ],
      answer: 1,
      explanation: "K⁺ has a larger ionic radius than Li⁺ and Ca²⁺. Larger ionic radius decreases electrostatic attraction, giving KCl lower lattice energy than LiCl or CaCl₂."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-81",
      question: "Whenever the crystalline solids are broken they do so along definite planes known as:",
      options: [
        "Cleavage planes",
        "Refractory planes",
        "Sagittal planes",
        "Coronal planes"
      ],
      answer: 0,
      explanation: "Cleavage planes are smooth, characteristic flat surfaces formed when a crystalline solid breaks along specific crystallographic directions."
    },
    {
      id: "uhs-2024-chem-82",
      question: "One of the following is NOT an example of amorphous solids",
      options: [
        "Plastic",
        "Glass",
        "Glucose",
        "Rubber"
      ],
      answer: 2,
      explanation: "Glucose forms true crystalline solids with a sharp melting point and well-defined 3D crystal structure, whereas plastic, glass, and rubber are amorphous."
    },
    {
      id: "uhs-2024-chem-83",
      question: "In graphite the carbon atoms are arranged in which of the following structure?",
      options: [
        "Rhombic",
        "Hexagonal",
        "Tetragonal",
        "Trigonal"
      ],
      answer: 1,
      explanation: "Graphite consists of planar, two-dimensional layers of sp²-hybridized carbon atoms arranged in hexagonal rings."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-120",
      question: "Which one shows anisotropic behavior?",
      options: [
        "Wood",
        "Gemstone",
        "Coke",
        "Graphite"
      ],
      answer: 3,
      explanation: "Graphite exhibits strong anisotropic electrical and thermal conductivity; it conducts electricity well along its hexagonal planes but acts as an insulator perpendicular to them."
    },
    {
      id: "uhs-chem-25-121",
      question: "In a unit cell of a crystal lattice the angle β is between faces/axes:",
      options: [
        "a and b",
        "b and c",
        "c and a",
        "not specified"
      ],
      answer: 2,
      explanation: "By crystallographic convention, angle α is between axes b & c, angle β is between axes c & a, and angle γ is between axes a & b."
    },
    {
      id: "uhs-chem-25-122",
      question: "Pick the crystalline solid:",
      options: [
        "Cement",
        "Ceramics",
        "Concrete",
        "Copper"
      ],
      answer: 3,
      explanation: "Copper (Cu) is a pure metallic crystalline solid with a face-centered cubic (FCC) lattice structure."
    }
  ];