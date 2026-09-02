export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const chemicalBondingQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-98",
      question: "A triatomic molecule must be either linear with bond angle 180° or else?",
      options: [
        "t-shape",
        "bent",
        "pyramidal",
        "tetrahedral"
      ],
      answer: 1,
      explanation: "Triatomic molecules (AX₂ type) contain only three atoms. If unhybridized/sp hybridized without lone pairs (like CO₂), they are linear (180°); if lone pairs are present (like H₂O or SO₂), VSEPR predicts a bent/angular shape."
    },
    {
      id: "bumhs-2025-chem-123",
      question: "NH₃ has a net dipole moment but BF₃ has zero net dipole moment primarily because:",
      options: [
        "B is less electronegative than N",
        "F is more electronegative than N",
        "NH₃ is trigonal pyramidal while BF₃ is trigonal planar",
        "BF₃ is trigonal pyramidal"
      ],
      answer: 2,
      explanation: "BF₃ is symmetric and trigonal planar (sp²), causing individual B-F bond dipoles to cancel out (μ = 0). NH₃ is trigonal pyramidal (sp³) with a lone pair, leading to a non-zero net dipole moment."
    },
    {
      id: "bumhs-2025-chem-125",
      question: "The N–F–N bond angle in NF₃ is ~102°, which is significantly smaller than the H–N–H angle in NH₃ (~107°), due to:",
      options: [
        "Presence of lone pair on F",
        "High electronegativity of F pulling bonding pairs away from central N",
        "Large size of F",
        "Its drawback of VSEPR"
      ],
      answer: 1,
      explanation: "Fluorine is highly electronegative, pulling N–F bonding electron pairs further away from nitrogen. This reduces bonding pair-bonding pair repulsion near the nitrogen nucleus, allowing the lone pair to compress the bond angle more than in NH₃."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-97",
      question: "A molecule of ethane (C₂H₆) has ______ σ bonds.",
      options: [
        "four",
        "five",
        "six",
        "seven"
      ],
      answer: 3,
      explanation: "Ethane contains 1 C–C single sigma bond and 6 C–H single sigma bonds, yielding a total of 7 σ bonds."
    },
    {
      id: "bumhs-mdcat-2024-100",
      question: "In organic chemistry, a nucleus-seeking agent that is rich in electrons is defined as:",
      options: [
        "A nucleotide",
        "A nucleophile",
        "An electrophile",
        "Electron affluent"
      ],
      answer: 1,
      explanation: "A nucleophile ('nucleus-loving') is an electron-rich species (neutral with lone pairs or negatively charged) that donates an electron pair to electrophiles."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-69",
      question: "The term 'Chelate' originates from the Greek word meaning:",
      options: [
        "Bidentate",
        "Ion",
        "Monodentate",
        "Crab claws",
        "Metal"
      ],
      answer: 3,
      explanation: "Chelate comes from the Greek word 'chele', meaning 'crab's claw', referring to polydentate ligands holding a central metal ion like a claw."
    },
    {
      id: "chem-sindh-24-70",
      question: "The geometric shape of an ammonia (NH₃) molecule is:",
      options: [
        "Angular",
        "Tetrahedral",
        "Linear",
        "Planar",
        "Pyramidal"
      ],
      answer: 4,
      explanation: "NH₃ has 3 bond pairs and 1 lone pair around nitrogen (sp³ hybridization), resulting in a trigonal pyramidal molecular geometry."
    },
    {
      id: "chem-sindh-24-78",
      question: "The paramagnetic behavior of an oxygen molecule (O₂) cannot be explained by:",
      options: [
        "Molecular orbital theory",
        "Hybridization",
        "Valence bond theory",
        "Valence shell electron pair repulsion theory",
        "Chemical bonding"
      ],
      answer: 2,
      explanation: "Valence Bond Theory (VBT) predicts all electrons in O₂ are paired (diamagnetic). Only Molecular Orbital Theory (MOT) correctly explains its paramagnetism via two unpaired electrons in degenerate π* antibonding orbitals."
    },
    {
      id: "chem-sindh-24-104",
      question: "An example of a bidentate ligand among the following is:",
      options: [
        "Br⁻",
        "CN⁻",
        "C₂O₄²⁻",
        "OH⁻",
        "Cl⁻"
      ],
      answer: 2,
      explanation: "Oxalate ion (C₂O₄²⁻) possesses two donor oxygen atoms capable of binding simultaneously to a central metal ion, making it a bidentate ligand."
    },
    {
      id: "chem-sindh-24-107",
      question: "Which of the following possesses the weakest London dispersion forces?",
      options: [
        "F₂",
        "Br₂",
        "Cl₂",
        "I₂",
        "He"
      ],
      answer: 4,
      explanation: "Helium (He) is a tiny monatomic gas with the smallest polarizable electron cloud, giving it the weakest London dispersion forces."
    },
    {
      id: "chem-sindh-24-119",
      question: "This molecular shape is found in AX₂ molecules when the bond angle is 180°:",
      options: [
        "Pyramidal",
        "Bent",
        "Triangle",
        "Tetrahedral",
        "Linear"
      ],
      answer: 4,
      explanation: "An AX₂ species without lone pairs on the central atom forms an sp-hybridized linear geometry with a 180° bond angle (e.g., BeCl₂, CO₂)."
    },
    {
      id: "chem-sindh-24-122",
      question: "The conjugate acid of NH₃ is:",
      options: [
        "NH₄⁺",
        "NH",
        "NH₂",
        "NH₂⁻",
        "NH₃"
      ],
      answer: 0,
      explanation: "A conjugate acid is formed by adding a proton (H⁺) to a base. NH₃ + H⁺ → NH₄⁺."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-88",
      question: "Number of sigma bonds in methyl chloride (CH₃Cl) formed due to sp³–s overlap is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 2,
      explanation: "In CH₃Cl, carbon is sp³ hybridized. The three C–H σ bonds result from sp³(carbon)–s(hydrogen) overlap, while the C–Cl σ bond results from sp³(carbon)–p(chlorine) overlap."
    },
    {
      id: "chem-sindh-25-96",
      question: "The correct decreasing order of bond dissociation energy among hydrogen halides is:",
      options: [
        "HCl > HBr > HI",
        "HBr > HCl > HI",
        "HI > HCl > HBr",
        "HCl > HI > HBr"
      ],
      answer: 0,
      explanation: "As halogen size increases down the group (Cl < Br < I), H–X bond length increases and bond dissociation energy decreases: HF > HCl > HBr > HI."
    },
    {
      id: "chem-sindh-25-100",
      question: "Which of the following pairs of molecules have similar molecular shapes?",
      options: [
        "NH₃ & AlCl₃",
        "BCl₃ & NH₃",
        "AlCl₃ & PCl₃",
        "H₂O & SnCl₂"
      ],
      answer: 3,
      explanation: "Both H₂O and SnCl₂ have bent/angular molecular geometries due to lone pair presence (H₂O has 2 lone pairs, SnCl₂ has 1 lone pair)."
    },
    {
      id: "chem-sindh-25-101",
      question: "Electronegativities of atoms A and B are 1.20 and 4.0 respectively. According to Hannay-Smyth formula, the percent ionic character is approximately:",
      options: [
        "43%",
        "50%",
        "55%",
        "73%"
      ],
      answer: 3,
      explanation: "Electronegativity difference ΔEN = 4.0 − 1.2 = 2.8. % Ionic character = 16(ΔEN) + 3.5(ΔEN)² = 16(2.8) + 3.5(7.84) = 44.8 + 27.44 = 72.24% ≈ 73%."
    },
    {
      id: "chem-sindh-25-114",
      question: "The ratio of sigma (σ) bonds to pi (π) bonds present in a benzene molecule is:",
      options: [
        "4:1",
        "1:4",
        "2:3",
        "6:1"
      ],
      answer: 0,
      explanation: "Benzene (C₆H₆) contains 12 σ bonds (6 C–C and 6 C–H) and 3 π bonds (delocalized C=C). Ratio σ : π = 12 : 3 = 4 : 1."
    },
    {
      id: "chem-sindh-25-123",
      question: "All of the following have two bond pairs and show linear geometry EXCEPT:",
      options: [
        "SnCl₂",
        "CS₂",
        "HCN",
        "CO₂"
      ],
      answer: 0,
      explanation: "CS₂, HCN, and CO₂ are linear species (sp hybridized). SnCl₂ has 2 bond pairs and 1 lone pair on Sn, giving it a bent/angular shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-120",
      question: "Force of attraction between non-polar molecules due to instantaneous temporary dipoles is:",
      options: [
        "Ion-dipole force",
        "Dipole-dipole force",
        "Ion-induced dipole force",
        "London dispersion force"
      ],
      answer: 3,
      explanation: "London dispersion forces arise from momentary fluctuations in electron density creating temporary instantaneous dipoles that induce dipoles in neighboring atoms/molecules."
    },
    {
      id: "kmu-mdcat-25-chem-131",
      question: "In an ethene molecule (C₂H₄), each carbon atom has three hybridized sp² orbitals which are:",
      options: [
        "Coplanar",
        "Tetrahedral",
        "Linear",
        "Pyramidal"
      ],
      answer: 0,
      explanation: "sp² hybrid orbitals lie in a single plane (coplanar) oriented at 120° relative to each other."
    },
    {
      id: "kmu-mdcat-25-chem-143",
      question: "In which of the following molecules does the central atom utilize sp³ hybridization?",
      options: [
        "PH₃",
        "NH₃",
        "CH₃⁻",
        "All of the given options"
      ],
      answer: 3,
      explanation: "In NH₃, nitrogen forms 3 σ bonds and holds 1 lone pair (steric number = 4), using sp³ hybrid orbitals."
    },
    {
      id: "kmu-mdcat-25-chem-145",
      question: "Which one of the following is a trigonal planar molecule?",
      options: [
        "NH₃",
        "H₂O",
        "BF₃",
        "CH₄"
      ],
      answer: 2,
      explanation: "BF₃ has 3 bonding pairs and 0 lone pairs on boron (sp² hybridization), yielding a trigonal planar shape."
    },
    {
      id: "kmu-mdcat-25-chem-146",
      question: "Which of the following hydrogen halides has the highest bond dissociation energy?",
      options: [
        "HCl",
        "HI",
        "HF",
        "HBr"
      ],
      answer: 2,
      explanation: "HF has the shortest bond length and strongest polar covalent bond due to fluorine's high electronegativity and small radius, resulting in the highest bond dissociation energy."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-76",
      question: "Total number of electron pairs present in the valence shell of central oxygen atom in a water molecule is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 2,
      explanation: "In H₂O, the central oxygen atom has 8 valence electrons arranged in 4 electron pairs (2 bonding pairs and 2 lone pairs)."
    },
    {
      id: "kmu-mdcat-2024-78",
      question: "Which one of the following molecules has a trigonal pyramidal structure?",
      options: [
        "C₂H₄",
        "CH₄",
        "H₂O",
        "NH₃"
      ],
      answer: 3,
      explanation: "NH₃ has 3 bonding pairs and 1 lone pair, giving it a trigonal pyramidal structure."
    },
    {
      id: "kmu-mdcat-2024-79",
      question: "Which one of the following molecules has a net zero dipole moment?",
      options: [
        "BF₃",
        "NF₃",
        "NH₃",
        "H₂O"
      ],
      answer: 0,
      explanation: "BF₃ is symmetric trigonal planar; its three equal B-F bond dipoles vectorially cancel to yield μ = 0."
    },
    {
      id: "kmu-mdcat-2024-80",
      question: "The unhybridized p-orbital in sp² hybridization is oriented:",
      options: [
        "In the same plane",
        "Out of the plane arbitrarily",
        "Parallel to sp² orbitals",
        "Perpendicular to the plane containing sp² orbitals"
      ],
      answer: 3,
      explanation: "In sp² hybridization, the three hybrid orbitals lie in a plane at 120° angles, while the remaining unhybridized p-orbital stands perpendicular (at 90°) to that plane."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-77",
      question: "Which one of the following molecules has zero dipole moment?",
      options: [
        "Ammonia",
        "Carbon dioxide",
        "Hydrogen fluoride",
        "Water"
      ],
      answer: 1,
      explanation: "CO₂ is a linear molecule (O=C=O). The two equal C=O bond dipoles pull in opposite directions (180° apart) and cancel out completely (μ = 0)."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of sigma (σ) bonds in acetylene (C₂H₂) and ethylene (C₂H₄) are respectively:",
      options: [
        "3 & 5",
        "5 & 3",
        "6 & 5",
        "5 & 6"
      ],
      answer: 0,
      explanation: "Acetylene (H–C≡C–H) has 3 σ bonds (2 C–H and 1 C–C) and 2 π bonds. Ethylene (H₂C=CH₂) has 5 σ bonds (4 C–H and 1 C–C) and 1 π bond."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which one of the following species has the smallest bond angle?",
      options: [
        "C₂H₂",
        "NH₃",
        "H₂S",
        "BeCl₂"
      ],
      answer: 2,
      explanation: "C₂H₂ (180°), BeCl₂ (180°), NH₃ (107.5°), and H₂S (92°). H₂S uses nearly unhybridized p-orbitals for bonding, giving it the smallest bond angle (~92°)."
    },
    {
      id: "szambu-chem-25-3",
      question: "Which one of the following compounds exhibits the highest percentage ionic character?",
      options: [
        "AlCl₃",
        "BCl₃",
        "PCl₃",
        "NaH"
      ],
      answer: 3,
      explanation: "NaH is formed between highly electropositive alkali metal Na and H, creating a strong ionic hydride lattice with high percent ionic character compared to covalent/polar covalent chlorides."
    },
    {
      id: "szambu-chem-25-4",
      question: "Which overlap type produces a bond with the highest overlap energy and strength?",
      options: [
        "sp–s",
        "sp²–s",
        "sp³–s",
        "sp³–p"
      ],
      answer: 0,
      explanation: "An sp hybrid orbital has 50% s-character, making it smaller and closer to the nucleus, allowing shorter and stronger overlap with an s-orbital."
    },
    {
      id: "szambu-chem-25-5",
      question: "How many sigma (σ) and pi (π) bonds are present in a maleic anhydride molecule?",
      options: [
        "5 sigma 3 pi",
        "6 sigma 3 pi",
        "7 sigma 2 pi",
        "9 sigma 3 pi"
      ],
      answer: 3,
      explanation: "Maleic anhydride (C₄H₂O₃) contains 9 σ bonds (2 C–H, 2 C–C, 2 C–O ring, 2 C=O, and 1 C=C) and 3 π bonds (2 C=O and 1 C=C)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-97",
      question: "Which of the following contains a coordinate covalent (dative) bond?",
      options: [
        "NaCl",
        "CaO",
        "NH₃→BF₃",
        "H₂O"
      ],
      answer: 2,
      explanation: "In NH₃→BF₃, nitrogen donates its lone electron pair to the electron-deficient boron atom, forming a coordinate covalent bond."
    },
    {
      id: "uhs-2024-chem-98",
      question: "Which of the following is NOT a correct feature of Valence Shell Electron Pair Repulsion (VSEPR) theory?",
      options: [
        "It determines the shape of molecule",
        "Pairs of electrons repel each other",
        "It helps in understanding interaction of medicinal drug molecules",
        "Only lone pairs participate in determining geometry of molecules"
      ],
      answer: 3,
      explanation: "VSEPR considers the spatial arrangement of both bonding electron pairs and lone pairs around the central atom to predict geometry."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-84",
      question: "In propene (CH₃–CH=CH₂), the pi (π) bond is formed by sideways overlap of:",
      options: [
        "s-orbitals",
        "unhybridized p-orbitals",
        "sp³ hybrid orbitals",
        "sp² hybrid orbitals"
      ],
      answer: 1,
      explanation: "Pi (π) bonds are formed exclusively by lateral (sideways) overlap of unhybridized parallel p-orbitals."
    },
    {
      id: "uhs-chem-25-86",
      question: "Molecules having central atom with 3 bonding pairs and 1 lone pair possess geometric shape:",
      options: [
        "Bent or angular",
        "Trigonal planar",
        "Trigonal pyramidal",
        "Tetrahedral"
      ],
      answer: 2,
      explanation: "AB₃L system (3 bond pairs, 1 lone pair) produces a trigonal pyramidal geometry (e.g., NH₃, PCl₃)."
    },
    {
      id: "uhs-chem-25-101",
      question: "The theories that explain the nature and formation of covalent chemical bonding include all EXCEPT:",
      options: [
        "Molecular Orbital Theory (MOT)",
        "Valence Bond Theory (VBT)",
        "Valence Shell Electron Pair Repulsion Theory (VSEPR)",
        "Crystal Field Theory (CFT)"
      ],
      answer: 3,
      explanation: "VSEPR theory predicts 3D molecular shapes based on electron repulsion, but does not explain orbital overlap mechanics forming σ and π covalent bonds."
    },
    {
      id: "uhs-chem-25-110",
      question: "Select the correct arrangement of hybrid orbitals in order of decreasing orbital size / extent:",
      options: [
        "sp > sp² > sp³",
        "sp³ > sp > sp²",
        "sp³ > sp² > sp",
        "sp² > sp³ > sp"
      ],
      answer: 2,
      explanation: "As s-character increases (sp³ 25% → sp² 33% → sp 50%), electrons are pulled closer to the nucleus, making sp hybrid orbitals the smallest. Thus, orbital size follows sp³ > sp² > sp."
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-chem-1",
        question: "Covalent bond maybe",
        options: [
          "100% covalent",
          "100% ionic",
          "Partially ionic",
          "Both a and c"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-2",
        question: "When the two partially filled atomic orbital overlap in such a way that the probability of finding electron is maximum around the line joining the two nuclei the result is the formation of",
        options: [
          "Sigma bond",
          "Pi bond",
          "Hydrogen bond",
          "Metallic Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-3",
        question: "The all elements get their stabilization to attain nearest configuration",
        options: [
          "Alkali metals",
          "Noble metals",
          "Alkaloids",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-4",
        question: "In the second period of elements although oxygen lies next to nitrogen yet its ionization first energy is lower than that of Nitrogen because",
        options: [
          "In oxygen there exist repulsion between pair of electrons present in the same orbital of valence shell",
          "Oxygen is paramagnetic in character",
          "Nuclear charge of oxygen is greater than nitrogen",
          "Oxygen is higher electron affinity"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-5",
        question: "Bond energy of molecule depends upon",
        options: [
          "Bond distance and Bond polarity",
          "Ionization energy",
          "Internal energy",
          "Kinetic energy"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-6",
        question: "Energy required to remove electron from an atom",
        options: [
          "Ionization potential",
          "Electropositivity",
          "Electronegativity",
          "Electron affinity"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-7",
        question: "All are true for pi bond except",
        options: [
          "Pi bond is formed from SP hybrid orbitals",
          "Pi bond is weaker than sigma bond",
          "Pi bond is formed by the parallel overlap of half filled P orbital",
          "Pi bond is formed when is sigma bond is already present"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-8",
        question: "Which Bond are present in molecule of hydrogen according to VBT",
        options: [
          "Pi bond",
          "Electrovalent Bond",
          "Sigma bond",
          "Double bond"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "For formation of ionic bond electronegativity difference should be",
        options: [
          "Equal to zero",
          "More than 1.7",
          "Equal to 0.5",
          "Less than 1.7"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-10",
        question: "The number of bonds in nitrogen molecule is",
        options: [
          "One Sigma and one Pi",
          "Three Sigma bonds only",
          "One Sigma and two Pi",
          "Two Sigma and one Pi"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-11",
        question: "Polarity of molecule is expressed in terms of",
        options: [
          "Bond strength",
          "Bond length",
          "Dipole moment",
          "Shape"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "In an atom no two electrons can have same set of quantum numbers this statement was given by",
        options: [
          "Uncertainty principle",
          "Pauli’s exclusion principle",
          "Hund’s rule",
          "Aufbau principle"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-13",
        question: "The unhybridised P orbital in SP2 hybridization is",
        options: [
          "Parallel to SP2",
          "In the same plane",
          "Out of plane",
          "Perpendicular to SP2 orbitals"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "Which is not characteristic of Pi bond",
        options: [
          "Pi bond is formed when sigma bond already exist",
          "Pi bond results from lateral overlap of atomic orbitals",
          "Pi bond are formed from hybrid orbitals",
          "Pi bond mein bhi formed by the overlap of P orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-15",
        question: "The shielding effect of inner electron is responsible for",
        options: [
          "Decreasing ionization energy",
          "Having no effect on ionization energy",
          "Increasing ionization energy",
          "Increasing electronegativity"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-16",
        question: "Which of these will not show AB4 type geometry",
        options: [
          "Group 4A element with four single bonds",
          "Group 4A element with three single and one coordinate Bond",
          "Group 4A element with two single and double bonds",
          "Group 4A element with 3 double bonds"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-17",
        question: "Which of the following best describe the shape and polarity of carbon disulphide molecule",
        options: [
          "Bent and polar",
          "Pyramidal and polar",
          "Linear and nonpolar",
          "Bent and nonpolar"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-18",
        question: "Which of the following Bond has more energy",
        options: [
          "Covalent",
          "Non polar covalent",
          "Polar covalent",
          "Ionic"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-19",
        question: "Which of the following is not planner",
        options: [
          "Benzene",
          "Formaldehyde",
          "BF3",
          "Propane"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-20",
        question: "Linear combination of atomic orbitals result in the formation of",
        options: [
          "Sigma bond",
          "Pi bond",
          "Bonding molecular orbitals only",
          "Bonding and antibonding molecular orbitals",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-21",
        question: "Element which have completely filled outermost shell and do not combine other metals are called",
        options: [
          "Metal elements",
          "Reactive elements",
          "Unstable elements",
          "Noble gases"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-22",
        question: "Liquid oxygen is",
        options: [
          "Diamagnetic",
          "Paramagnetic",
          "Antimagnetic",
          "Ferromagnetic"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-23",
        question: "What will be the shape of a molecule which contain two sigma bond pairs and one lone pair",
        options: [
          "Linear",
          "Tetragonal",
          "V shape",
          "Triangular"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-24",
        question: "The chemical species having smallest bond angle",
        options: [
          "NH3",
          "NCl3",
          "NF3",
          "NBr3"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-25",
        question: "In which of the following has different molecular geometry and electron pair geometry",
        options: [
          "SO3",
          "SnCl2",
          "CO2",
          "BF3"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-26",
        question: "The bond formed by electrostatic attraction between negative end of one molecule and positive end of other molecule is called",
        options: [
          "Covalent bond",
          "Hydrogen bond",
          "Ionic bond",
          "Co-ordinate covalent bond"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-27",
        question: "Electron affinity of the atom is the energy released when",
        options: [
          "Electron is added to gaseous atom",
          "Covalent bond of molecule is broken",
          "Electron is removed from gaseous atom",
          "Covalent bond is formed between the atoms"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-28",
        question: "The cationic radius is always ........ than the atomic radius from which it is derived",
        options: [
          "Higher",
          "Larger",
          "Moderate",
          "Smaller"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-29",
        question: "In HF Bond electronegativity difference is 1.9 what is the type of this bond",
        options: [
          "Polar covalent",
          "Non polar covalent bond",
          "Pi bond",
          "Coordinate covalent bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-30",
        question: "The s character of hybridized Orbital decrease the bond angle",
        options: [
          "Decreases",
          "Increases",
          "Becomes zero",
          "Does not change"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-31",
        question: "Which information cannot be deduced from the fact that an element has low ionization energy",
        options: [
          "It is a metal",
          "It forms positive ions",
          "It may form ionic",
          "It belongs to P block"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-32",
        question: "The number of unpaired electrons in ammonia",
        options: [
          "Zero",
          "One",
          "Three",
          "Four"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "The ionization energy increases from left to right in a period due to increase",
        options: [
          "Nuclear charge",
          "Atomic number",
          "Number of electrons",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-34",
        question: "P character in SP",
        options: [
          "75%",
          "25%",
          "50%",
          "33%"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-35",
        question: "Total number of valence electrons in phosphonium ion is",
        options: [
          "8",
          "10",
          "9",
          "12"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-36",
        question: "Bond angle of water",
        options: [
          "109.5 degree",
          "107.5 degree",
          "120 degree",
          "104.5 degree"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-37",
        question: "The difference in electronegativity values of the bonded atoms between the two atoms is an index of which of covalent bond",
        options: [
          "Polar nature",
          "Nonpolar nature",
          "Strength",
          "Nature"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-38",
        question: "Pi bonds are produced by the overlapping of orbitals",
        options: [
          "Some unhybridized orbitals",
          "Hybrid and hybridized orbitals",
          "Hybrid orbitals",
          "S orbitals"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-39",
        question: "The ionization energy",
        options: [
          "Generally increase from left to right in a period",
          "Increase from top bottom in a group",
          "Does not change in a period",
          "Does not change in a group"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-40",
        question: "Which one of the following molecules does not follow the duplet or octet rule",
        options: [
          "NH3",
          "HCl",
          "AlCl3",
          "CCl4"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-41",
        question: "Ionic bond is produced after complete transfer of",
        options: [
          "Nucleus",
          "Electron",
          "Neutron",
          "Proton"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-42",
        question: "H2O has a higher boiling point than HF because",
        options: [
          "H2O is more polar than HF",
          "H2O can form more hydrogen bonds",
          "H2O has a higher molecular weight",
          "H2O does not have a higher boiling point than HF"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-43",
        question: "The geometry of AB3 molecule is",
        options: [
          "Trigonal pyramidal",
          "Trigonal planar",
          "Trigonal bipyramidal",
          "Tetragonal"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-44",
        question: "H2S has a net dipole moment while BeF2 has zero dipole moment because",
        options: [
          "H2S molecule is linear while BeF2 is angular",
          "H2S molecule is angular while BeF2 molecule is linear",
          "Fluorine has more electronegativity than S",
          "Be is more electronegativity than S"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-45",
        question: "In a group atomic radii",
        options: [
          "Increases",
          "Decreases",
          "First increase than decreases",
          "Remains same"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-46",
        question: "The carbon to carbon Bond distance is",
        options: [
          "1.10 angstrom",
          "1.20 angstrom",
          "1.30 angstrom",
          "1.54 angstrom"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-47",
        question: "Zinc has only one Oxidation State because",
        options: [
          "Completely filled 4s orbital",
          "Half filled 4s orbital",
          "Completely filled 3d orbital",
          "Half filled 3s orbital"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-48",
        question: "Which bond is formed between two atoms",
        options: [
          "Sigma bond",
          "Pi bond",
          "Double bond",
          "Triple Bond"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-49",
        question: "Which of the following bond is not present in NH4Cl",
        options: [
          "Ionic bond",
          "Coordinate covalent bond",
          "Covalent bond",
          "Delocalised covalent bond"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-50",
        question: "Which of the following is a false statement concerning ionic compound",
        options: [
          "Greater the lattice energy the greater is the solubility",
          "Higher the dielectric constant of the solvent the greater is the solubility",
          "Higher the dipole moment of the solvent the greater the solubility",
          "Increase of temperature generally increase solubility"
        ],
        answer: 0
      }
  ];