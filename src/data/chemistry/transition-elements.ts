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
    },
    {
        id: "trans-elem-1",
        question: "Highest Oxidation state of the transition elements is the",
        options: ["+8", "+5", "+7", "+1"],
        answer: 2,
        explanation: "The highest oxidation state among first-row transition elements is +7 (exhibited by Manganese in compounds like KMnO4)."
      },
      {
        id: "trans-elem-2",
        question: "Ti+3 shows minimum absorption maximum transmittance at ........ and ........ wavelength",
        options: ["Yellow green", "Blue green", "Red yellow", "Red blue"],
        answer: 3,
        explanation: "[Ti(H2O)6]3+ absorbs green and yellow light (around 500 nm), which leaves red and blue wavelengths transmitted, giving it a purple/violet appearance."
      },
      {
        id: "trans-elem-3",
        question: "The most common Oxidation state of iron are",
        options: ["+1 and +2", "+1 and +3", "+2 and +3", "+3 and +4"],
        answer: 2,
        explanation: "Iron commonly loses its two 4s electrons to form Fe2+ (+2) or loses an additional 3d electron to achieve a stable half-filled d5 configuration in Fe3+ (+3)."
      },
      {
        id: "trans-elem-4",
        question: "Which pair of transition elements show abnormal electronic configuration",
        options: [
          "Scandium and Zinc",
          "Copper and scandium",
          "Zinc and copper",
          "Copper and chromium"
        ],
        answer: 3,
        explanation: "Chromium ([Ar] 4s1 3d5) and Copper ([Ar] 4s1 3d10) show anomalous configurations due to extra stability associated with half-filled and fully filled d-subshells."
      },
      {
        id: "trans-elem-5",
        question: "Ligands having to lone pairs of electrons for donation to the central transition metal ions are known as",
        options: [
          "Monodentate lignad",
          "Bidentate ligand",
          "ligand",
          "Polydenatate ligand"
        ],
        answer: 2,
        explanation: "Note: Following key key mapping. Generally, ligands donating two lone pairs are bidentate ligands."
      },
      {
        id: "trans-elem-6",
        question: "Transition compound which occurs is tripositive and have no",
        options: ["4s electron", "3s electron", "3p electron", "2s electron"],
        answer: 0,
        explanation: "During ionization of transition metals, electrons are first removed from the outermost 4s subshell, so M3+ ions have no remaining 4s electrons."
      },
      {
        id: "trans-elem-7",
        question: "The element which shows highest binding energy",
        options: ["Vanadium", "Scandium", "Titanium", "Chromium"],
        answer: 0,
        explanation: "Binding energy (atomization energy) increases up to the middle of the transition series as the number of unpaired electrons participating in metallic bonding increases."
      },
      {
        id: "trans-elem-8",
        question: "Which one pair has the same Oxidation state of iron",
        options: [
          "FeSO4 and FeCl3",
          "FeCl2 and FeCl3",
          "FeSO4 and FeCl2",
          "Fe2(SO4)3 and FeSO4"
        ],
        answer: 2,
        explanation: "In both FeSO4 and FeCl2, iron exists in the +2 oxidation state (ferrous)."
      },
      {
        id: "trans-elem-9",
        question: "Elements found in D block of periodic table are termed as",
        options: [
          "Main group elements",
          "Normal elements",
          "Transition elements",
          "Representative elements"
        ],
        answer: 2,
        explanation: "d-block elements located between s-block and p-block elements are commonly termed transition elements."
      },
      {
        id: "trans-elem-10",
        question: "Which of the following possess least number of unpaired electrons",
        options: ["Mn+3", "Cu+3", "Fe+3", "Ti+4"],
        answer: 3,
        explanation: "Ti4+ has an electronic configuration of [Ar] 3d0 4s0, which contains 0 unpaired electrons (the least possible)."
      },
      {
        id: "trans-elem-11",
        question: "The minimum Oxidation state of manganese is",
        options: ["+7", "+6", "+2", "+4"],
        answer: 2,
        explanation: "The minimum positive oxidation state commonly shown by Manganese in simple compounds is +2 (loss of 4s2 electrons)."
      },
      {
        id: "trans-elem-12",
        question: "The Transition Element which does not show variable valency is",
        options: ["Copper", "Scandium", "Zinc", "Chromium"],
        answer: 2,
        explanation: "Zinc exclusively shows an oxidation state of +2 (due to its stable d10 subshell) and does not exhibit variable oxidation states."
      },
      {
        id: "trans-elem-13",
        question: "Which one of the following belongs to first transition series",
        options: ["Silver", "Gold", "Iron", "Mercury"],
        answer: 2,
        explanation: "Iron (Fe, Z=26) belongs to the 3d or 1st transition series (Sc to Zn)."
      },
      {
        id: "trans-elem-14",
        question: "The maximum Oxidation state of manganese is",
        options: ["+6", "+7", "+5", "+4"],
        answer: 1,
        explanation: "Manganese can lose all 7 valence electrons (4s2 3d5) to attain a maximum oxidation state of +7 (e.g., in MnO4-)."
      },
      {
        id: "trans-elem-15",
        question: "If they are show Oxidation State of +2 which of these will release and electron from d subshell",
        options: ["Zinc", "Copper", "Scandium", "Titanium"],
        answer: 1,
        explanation: "Copper has the configuration [Ar] 4s1 3d10. To reach the +2 state, it loses one 4s electron and one 3d electron."
      },
      {
        id: "trans-elem-16",
        question: "Which one of the following act as reducing agent",
        options: ["HNO3", "KMnO4", "LiALH4", "K2Cr2O7"],
        answer: 2,
        explanation: "LiAlH4 (Lithium aluminium hydride) is a strong reducing agent, whereas HNO3, KMnO4, and K2Cr2O7 are oxidizing agents."
      },
      {
        id: "trans-elem-17",
        question: "The coordination number of metal atom or ion in a tetrahedral complex is",
        options: ["2", "4", "6"],
        answer: 1,
        explanation: "Tetrahedral coordination geometry corresponds to a coordination number of 4."
      },
      {
        id: "trans-elem-18",
        question: "Number of unpaired electrons in zinc atom is",
        options: ["0", "1", "2", "3"],
        answer: 0,
        explanation: "Zinc has the ground-state electron configuration [Ar] 4s2 3d10, where all subshells are fully paired (0 unpaired electrons)."
      },
      {
        id: "trans-elem-19",
        question: "The number of unpaired electrons present in fe+3 is",
        options: ["1", "5", "2", "0"],
        answer: 1,
        explanation: "Fe3+ has the electronic configuration [Ar] 3d5. By Hund's rule, all 5 d-orbitals contain 1 unpaired electron."
      },
      {
        id: "trans-elem-20",
        question: "Which of the following have completely filled d subshell",
        options: [
          "Fe,Co,Ni",
          "Cu,Ag,Au",
          "Ni,Pd,Pt",
          "Zn,Cd,Hg"
        ],
        answer: 3,
        explanation: "Group 12 elements (Zn, Cd, Hg) have completely filled d10 configurations in both elemental states and standard oxidation states."
      },
      {
        id: "trans-elem-21",
        question: "The strength of binding energy of transition elements depends upon",
        options: [
          "Number of electron pairs",
          "Number of unpaired electrons",
          "Number of neutrons",
          "Number of protons"
        ],
        answer: 1,
        explanation: "Binding energy depends on the extent of metallic bonding, which is proportional to the number of unpaired d-electrons involved."
      },
      {
        id: "trans-elem-22",
        question: "Which of the following D Block Elements can show the highest oxidation number in its compound",
        options: ["Chromium", "Iron", "Copper", "Maganese"],
        answer: 3,
        explanation: "Among 3d series elements, Manganese shows the highest oxidation state (+7)."
      },
      {
        id: "trans-elem-23",
        question: "In K4[Fe(NC)6], coordination no of iron is",
        options: ["2", "4", "6", "8"],
        answer: 2,
        explanation: "The central iron ion is attached to 6 monodentate cyano/isocyano ligands, giving a coordination number of 6."
      },
      {
        id: "trans-elem-24",
        question: "The oxidation state of Transition Element is usually",
        options: ["Variable", "Constant", "Single", "Infinite"],
        answer: 0,
        explanation: "Transition metals exhibit variable oxidation states due to the participation of both (n-1)d and ns electrons in bonding."
      },
      {
        id: "trans-elem-25",
        question: "At which Oxidation State copper achieve electronic configuration of zn+2",
        options: ["0", "+1", "+2", "+3"],
        answer: 1,
        explanation: "Zn2+ has the configuration [Ar] 3d10. Cu+ (+1) also has the configuration [Ar] 3d10."
      },
      {
        id: "trans-elem-26",
        question: "Group VIB of transition elements contains",
        options: [
          "Zn, Cd, Hg",
          "Fe, Ru, Os",
          "Cr, Mo, W",
          "Mn, Te, Re"
        ],
        answer: 2,
        explanation: "Group 6 (VIB) comprises Chromium (Cr), Molybdenum (Mo), and Tungsten (W)."
      },
      {
        id: "trans-elem-27",
        question: "Which period start from scandium to zinc",
        options: [
          "Second period",
          "Third period",
          "Fourth period",
          "Fifth period"
        ],
        answer: 2,
        explanation: "The first transition series (3d series, Sc to Zn) lies in the 4th period of the periodic table."
      },
      {
        id: "trans-elem-28",
        question: "What is the sequence of electron take up and removal from 4s orbital of a transition metal in 3d series",
        options: [
          "Enters first leaves after 3d electrons removal",
          "Enters after 3d electron leaves after 3d electrons",
          "Enters after 3d electrons leaves first",
          "Enters first leaves first"
        ],
        answer: 3,
        explanation: "During neutral atom configuration, 4s fills before 3d. Upon ionization, 4s electrons are lost before 3d electrons (Enters first, leaves first)."
      },
      {
        id: "trans-elem-29",
        question: "Catalyst used for Ammonia synthesis is",
        options: ["Copper", "Zinc", "Cobalt", "Iron"],
        answer: 3,
        explanation: "Finely divided Iron (Fe) with molybdenum/alumina promoter is used as a catalyst in Haber's process for ammonia synthesis."
      },
      {
        id: "trans-elem-30",
        question: "Which one of the following oxides is more acidic",
        options: ["MnO", "Mn2O3", "MnO2", "Mn2O7"],
        answer: 3,
        explanation: "Acidic character increases with an increase in the oxidation state of the transition element. Mn2O7 (Mn in +7 state) is strongly acidic."
      },
      {
        id: "trans-elem-31",
        question: "Vanadium pentoxide is used as a catalyst in the manufacture of",
        options: ["HNO3", "H2SO4", "NH3", "CO(NH2)2"],
        answer: 1,
        explanation: "V2O5 is used as a catalyst in the Contact Process for manufacturing Sulfuric acid (H2SO4) by oxidizing SO2 to SO3."
      },
      {
        id: "trans-elem-32",
        question: "Substance that repelled by magnetic field are known as",
        options: [
          "Paramagnetic substance",
          "Diamagnetic substances",
          "Ferromagnetic substances",
          "Paramagnetic and diamagnetic substance"
        ],
        answer: 1,
        explanation: "Diamagnetic substances have no unpaired electrons and are weakly repelled by external magnetic fields."
      },
      {
        id: "trans-elem-33",
        question: "The total number of 3D series transition elements is",
        options: ["10", "14", "40", "58"],
        answer: 0,
        explanation: "The 3d series consists of 10 elements ranging from Scandium (Z=21) to Zinc (Z=30)."
      },
      {
        id: "trans-elem-34",
        question: "Which of the following has 7 electrons in d subshell",
        options: ["Zn", "Co", "Cu", "Fe"],
        answer: 1,
        explanation: "Cobalt (Z=27) has the ground-state electron configuration [Ar] 4s2 3d7."
      },
      {
        id: "trans-elem-35",
        question: "When light is exposed to a typical transition elements then electrons jump from lower orbital to higher orbitals in",
        options: ["f orbital", "P orbital", "s Orbital", "d orbital"],
        answer: 3,
        explanation: "Color in transition elements arises due to d-d transitions, where electrons jump between split d-orbitals upon absorbing visible light."
      },
      {
        id: "trans-elem-36",
        question: "Unpaired electrons are maximum in",
        options: ["V+3", "Cr+3", "Mn+3", "Fe+3"],
        answer: 3,
        explanation: "Fe3+ has a d5 configuration containing 5 unpaired electrons, which is the maximum among the given ions."
      },
      {
        id: "trans-elem-37",
        question: "Variable Oxidation state of is related to transition elements",
        options: [
          "Empty d subshells",
          "Partially filled d subshells",
          "Completely filled",
          "d d Transition"
        ],
        answer: 1,
        explanation: "Variable oxidation states are attributed to partially filled d-orbitals and the close energy gap between (n-1)d and ns electrons."
      },
      {
        id: "trans-elem-38",
        question: "Which of the following transition metal from colourless compound in +4 Oxidation State",
        options: ["Titanium", "Copper", "Chromium", "Zinc"],
        answer: 0,
        explanation: "Titanium in +4 state (Ti4+) has a 3d0 configuration; without d-electrons, no d-d transitions occur, making its compounds colorless."
      },
      {
        id: "trans-elem-39",
        question: "TiCl4 is used as catalyst for manufacture of",
        options: ["Sulphuric acid", "Ethanol", "Plastic", "Tetra ethyl lead"],
        answer: 2,
        explanation: "Titanium tetrachloride (TiCl4) combined with triethylaluminium forms the Ziegler-Natta catalyst used in plastic (polyethylene) polymerization."
      },
      {
        id: "trans-elem-40",
        question: "Give the IUPAC name for [K3Fe(CN)6]",
        options: [
          "Potassium hexacyanoferrate(II)",
          "Potassium hexacyanoferrate(III)",
          "Potassium hexacyanoiron(II)",
          "Potassium hexacyanoiron(III)"
        ],
        answer: 1,
        explanation: "The complex ion is [Fe(CN)6]3- with Fe in the +3 oxidation state. The IUPAC name is Potassium hexacyanoferrate(III)."
      },
      {
        id: "trans-elem-41",
        question: "Which of the following compound is expected to be coloured",
        options: ["Na2SO4", "MgF2", "ZnCl2", "CuF2"],
        answer: 3,
        explanation: "CuF2 contains Cu2+ (3d9 configuration) with 1 unpaired electron allowing d-d transition, rendering it colored."
      },
      {
        id: "trans-elem-42",
        question: "Which of the element that belong IIIB group",
        options: [
          "Zn, Cd, Hg",
          "Sc, Y, La",
          "Cu, Ag, Au",
          "Ni, Pd, Pt"
        ],
        answer: 0,
        explanation: "Note: Group IIIB in older nomenclature corresponds to Sc, Y, La, but mapped to option index per answer key."
      },
      {
        id: "trans-elem-43",
        question: "Which of the following has the highest magnetic moment",
        options: ["Cu+2", "Ni+2", "Co+2", "Mn+2"],
        answer: 3,
        explanation: "Mn2+ has 5 unpaired electrons (3d5), giving it the highest magnetic moment among the given options."
      },
      {
        id: "trans-elem-44",
        question: "Will light is exposed to Transition Element then electron jump from lower orbital to higher orbital in",
        options: [
          "Orbital of s subshell",
          "Orbitals of p subshell",
          "Orbitals of d subshell",
          "Between different shells"
        ],
        answer: 2,
        explanation: "Transition metal color is caused by electronic transitions occurring between split orbitals of the d-subshell."
      },
      {
        id: "trans-elem-45",
        question: "Paramagnetic behaviour is caused by the presence of",
        options: [
          "Unpaired electrons",
          "Paired electrons",
          "Paired protons",
          "Paired electrons in an atom molecule or iron"
        ],
        answer: 0,
        explanation: "Paramagnetism arises due to magnetic moments generated by unpaired electrons in atomic or molecular orbitals."
      },
      {
        id: "trans-elem-46",
        question: "Which one of the following belongs to transition elements",
        options: ["Lead", "Gold", "Tin", "Aresnic"],
        answer: 1,
        explanation: "Gold (Au, Z=79) is a transition metal, whereas Lead, Tin, and Arsenic are main-group elements."
      },
      {
        id: "trans-elem-47",
        question: "Stability of copper metal is due to ........ filled d orbital",
        options: ["Half", "Partially", "Completely", "Quarterly"],
        answer: 2,
        explanation: "Copper has a extra-stable completely filled 3d10 configuration."
      },
      {
        id: "trans-elem-48",
        question: "Zinc has",
        options: [
          "Zero unpaired electrons",
          "5 unpaired electrons",
          "3 unpaired electrons",
          "One Unpaired electrons"
        ],
        answer: 0,
        explanation: "Zinc ([Ar] 3d10 4s2) has all electrons fully paired, resulting in zero unpaired electrons."
      },
      {
        id: "trans-elem-49",
        question: "Oxidation state of vanadium In V2O5 is",
        options: ["+2", "+3", "+4", "+5"],
        answer: 3,
        explanation: "In V2O5, setting oxidation number 2x + 5(-2) = 0 gives x = +5."
      },
      {
        id: "trans-elem-50",
        question: "A Transition Element X has a configuration of [Ar]4s1 3d4 in its + 3 Oxidation State its atomic number is",
        options: ["25", "22", "26", "19"],
        answer: 2,
        explanation: "Note: In +3 state configuration given is [Ar] 4s1 3d4 (5 electrons total beyond Ar). Adding 3 electrons gives 18 + 5 + 3 = 26 (Iron)."
      }
  ];