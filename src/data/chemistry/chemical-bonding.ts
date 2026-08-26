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
      answer: 1,
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
      answer: 2,
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
    }
  ];