export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const sAndPBlockElementsQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-103",
      question: "Which one has the strongest metallic bond among Period 3 elements?",
      options: [
        "Na",
        "Mg",
        "Al",
        "P"
      ],
      answer: 2,
      explanation: "Aluminum (Al) contributes 3 valence electrons per atom to the delocalized electron sea and has the smallest metallic ionic radius among the metals listed, resulting in the highest charge density and strongest metallic bonding."
    },
    {
      id: "bumhs-2025-chem-105",
      question: "Which hydride of group VIIA (halogen acids) has the lowest boiling point?",
      options: [
        "HF",
        "HCl",
        "HBr",
        "HI"
      ],
      answer: 1,
      explanation: "HF has an abnormally high boiling point due to extensive hydrogen bonding. From HCl to HI, dispersion forces increase with molecular weight. Thus, HCl has the lowest boiling point in Group 7A."
    },
    {
      id: "bumhs-2025-chem-107",
      question: "Which metal hydroxide is thermally stable and does not decompose easily on heating?",
      options: [
        "LiOH",
        "NaOH",
        "Mg(OH)₂",
        "Ca(OH)₂"
      ],
      answer: 1,
      explanation: "Hydroxides of Group 1 alkali metals (except LiOH) are thermally stable and melt without decomposition upon heating, whereas LiOH and Group 2 hydroxides decompose into oxides and water."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-94",
      question: "Which of the following elements reacts rapidly and vigorously with water at room temperature?",
      options: [
        "Cu",
        "Na",
        "Fe",
        "Al"
      ],
      answer: 1,
      explanation: "Sodium (Na) is an extremely reactive alkali metal that reacts violently with cold water to produce hydrogen gas and sodium hydroxide: 2Na + 2H₂O → 2NaOH + H₂."
    },
    {
      id: "bumhs-mdcat-2024-99",
      question: "Which of the following metals is used for galvanizing iron sheets?",
      options: [
        "tin",
        "zinc",
        "aluminum",
        "copper"
      ],
      answer: 1,
      explanation: "Galvanization is the process of applying a sacrificial protective zinc coating to steel or iron to prevent rusting."
    },
    {
      id: "bumhs-mdcat-2024-105",
      question: "Sodium nitrate (NaNO₃), on mild thermal decomposition, forms:",
      options: [
        "Na₂O and NO₂",
        "NaNO₂ and O₂",
        "Na, NO₂ and O₂",
        "Na₂O, NO₂ and O₂"
      ],
      answer: 1,
      explanation: "Alkali metal nitrates (except LiNO₃) decompose on heating to yield metal nitrites and oxygen gas: 2NaNO₃ → 2NaNO₂ + O₂."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-106",
      question: "The alkali metal that gives a characteristic persistent golden-yellow flame in a flame test is:",
      options: [
        "Ba",
        "Na",
        "K",
        "Cs"
      ],
      answer: 1,
      explanation: "Sodium (Na) compounds impart an intense, characteristic yellow color to a non-luminous flame."
    },
    {
      id: "chem-sindh-24-117",
      question: "Mostly p-block elements react with ______ to form binary halides:",
      options: [
        "Oxygen",
        "Water",
        "Halogens",
        "Nitrogen",
        "Hydrogen"
      ],
      answer: 2,
      explanation: "p-Block elements readily react directly with halogens to form diverse covalent and ionic binary halide compounds."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-124",
      question: "If the ionization energy of an element is greater, then:",
      options: [
        "More is its reducing power",
        "More is its electropositivity",
        "Less is its metallic character",
        "More is its atomic radius"
      ],
      answer: 2,
      explanation: "High ionization energy means an atom holds its valence electrons tightly, making electron loss difficult and decreasing both electropositivity and metallic character."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-132",
      question: "Which of the following best explains the reaction between Beryllium (Be) and Oxygen (O₂)?",
      options: [
        "Be burns vigorously with oxygen forming a layer of BeO, which accelerates the oxidation of remaining metal",
        "Be reacts with oxygen forming a layer of BeO, which protects the metal from further oxidation",
        "Be reacts slowly with oxygen to form a volatile oxide BeO, which evaporates quickly",
        "Be is the only alkaline earth metal that doesn’t react with oxygen"
      ],
      answer: 1,
      explanation: "Beryllium forms an imperviously thin, tough surface coating of beryllium oxide (BeO) that passivates the underlying metal against further oxidation at ordinary temperatures."
    },
    {
      id: "kmu-mdcat-25-chem-140",
      question: "The most electronegative element in the periodic table is:",
      options: [
        "F",
        "Cl",
        "O",
        "N"
      ],
      answer: 0,
      explanation: "Fluorine (F) is assigned the highest value of 4.0 on the Pauling electronegativity scale."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-103",
      question: "Electronegativity of Aluminum (Al) is approximately equal to that of Beryllium (Be) due to diagonal relationship (or B in some text keys):",
      options: [
        "B",
        "Be",
        "Mg",
        "Na"
      ],
      answer: 0,
      explanation: "Aluminum and Beryllium exhibit a strong diagonal relationship in the periodic table, possessing nearly identical electronegativities (Be = 1.5, Al = 1.5)."
    },
    {
      id: "kmu-mdcat-2024-104",
      question: "Which of the following alkali metals forms ONLY a normal monoxide (M₂O) when burned in excess air/oxygen?",
      options: [
        "K",
        "Li",
        "Na",
        "Rb"
      ],
      answer: 1,
      explanation: "Lithium forms predominantly normal monoxide (Li₂O). Sodium forms peroxide (Na₂O₂), while K, Rb, and Cs form superoxides (MO₂)."
    },
    {
      id: "kmu-mdcat-2024-105",
      question: "Third period element that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is:",
      options: [
        "Al",
        "Mg",
        "Na",
        "Si"
      ],
      answer: 0,
      explanation: "Aluminum forms an adherent, protective oxide film of Al₂O₃ upon exposure to air, passivating the metal against further chemical attack."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-84",
      question: "The correct stability order of M⁴⁺ cations in Group 14 (due to inert pair effect) is:",
      options: [
        "Ge⁴⁺ < Pb⁴⁺ < Sn⁴⁺",
        "Ge⁴⁺ < Sn⁴⁺ < Pb⁴⁺",
        "Ge⁴⁺ > Pb⁴⁺ > Sn⁴⁺",
        "Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺"
      ],
      answer: 3,
      explanation: "Due to the inert pair effect, the stability of the +4 oxidation state decreases down Group 14 (Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺), whereas the +2 state becomes increasingly stable."
    },
    {
      id: "szambu-chem-24-90",
      question: "Which of the following metal hydroxides is the strongest base?",
      options: [
        "Ca(OH)₂",
        "LiOH",
        "Mg(OH)₂",
        "NaOH"
      ],
      answer: 3,
      explanation: "Basic character of hydroxides increases down Group 1 and is greater than Group 2. NaOH dissociates completely in water, functioning as a strong base."
    },
    {
      id: "szambu-chem-24-114",
      question: "Metallic character of alkaline earth metals (Group 2) ______ down the group.",
      options: [
        "decreases",
        "gradually increases then decreases",
        "increases",
        "remains same"
      ],
      answer: 2,
      explanation: "Down a group, atomic radius increases and ionization energy decreases, making electron loss easier and thus increasing metallic character."
    },
    {
      id: "szambu-chem-24-115",
      question: "Which of the following metals forms a superoxide (KO₂) when reacted with oxygen?",
      options: [
        "Beryllium",
        "Lithium",
        "Magnesium",
        "Potassium"
      ],
      answer: 3,
      explanation: "Potassium (K), Rubidium (Rb), and Cesium (Cs) have large ionic radii that stabilize the large superoxide anion (O₂⁻), forming superoxides when burned in air."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-99",
      question: "Which of the following Period 3 elements has the smallest atomic radius?",
      options: [
        "Mg",
        "S",
        "P",
        "Na"
      ],
      answer: 1,
      explanation: "Across Period 3 from left to right (Na → Mg → P → S), effective nuclear charge increases, pulling electron shells closer and decreasing atomic radius."
    },
    {
      id: "uhs-2024-chem-100",
      question: "The anomalous behavior of lithium compared to other alkali metals is mainly because of its:",
      options: [
        "Large radius and low charge density",
        "Small radius and low charge density",
        "Large radius and high charge density",
        "Small atomic/ionic radius and high charge density"
      ],
      answer: 3,
      explanation: "Lithium possesses an exceptionally small atomic/ionic radius and high charge density, giving rise to anomalous properties and a diagonal relationship with magnesium."
    },
    {
      id: "uhs-2024-chem-101",
      question: "Which of the following oxides is amphoteric (not basic) in nature?",
      options: [
        "Aluminum oxide",
        "Magnesium oxide",
        "Potassium oxide",
        "Sodium oxide"
      ],
      answer: 0,
      explanation: "Aluminum oxide (Al₂O₃) is amphoteric, reacting with both acids and strong bases. MgO, Na₂O, and K₂O are strictly basic oxides."
    },
    {
      id: "uhs-2024-chem-102",
      question: "The solubility of sulphates of alkaline earth metals generally:",
      options: [
        "Increases down the group",
        "Decreases down the group",
        "Increases then decreases down the group",
        "Doesn’t change down the group"
      ],
      answer: 1,
      explanation: "Down Group 2, lattice energy decreases slightly while hydration energy drops sharply due to increasing cation size, causing sulphate solubility to decrease down the group (BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄)."
    },
    {
      id: "uhs-2024-chem-103",
      question: "Which of the following is NOT an alloy?",
      options: [
        "Steel",
        "Brass",
        "Bronze",
        "Graphite"
      ],
      answer: 3,
      explanation: "Graphite is an elemental allotrope of carbon, whereas steel (Fe-C), brass (Cu-Zn), and bronze (Cu-Sn) are metallic alloys."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-125",
      question: "The element with the smallest first ionization energy among the following is:",
      options: [
        "Li",
        "Al",
        "Ca",
        "Ba"
      ],
      answer: 3,
      explanation: "Barium (Ba) is located at the bottom of Group 2, featuring a large atomic radius and high electron shielding, which yields the lowest first ionization energy among the listed choices."
    },
   {
        id: "sp-block-1",
        question: "The elements which are most abundant in Earth crust",
        options: [
          "Silicon and Aluminium",
          "Boron and Argon",
          "Calcium and magnesium",
          "All of these"
        ],
        answer: 0,
        explanation: "Oxygen, Silicon, and Aluminium are the three most abundant elements in the Earth's crust by mass."
      },
      {
        id: "sp-block-2",
        question: "Which of the following give strong alkaline solution in water",
        options: ["Sodium", "Potassium", "Beryllium", "Magnesium"],
        answer: 1,
        explanation: "Potassium reacts vigorously with water to form KOH, a highly soluble and strong alkali."
      },
      {
        id: "sp-block-3",
        question: "What is the trend of melting and boiling point of the elements of short periods as we move from left to right in the periodic table",
        options: [
          "Melting and boiling point first decreases then increases",
          "Melting and boiling point increases gradually",
          "Melting and boiling point first increases then decreases",
          "Melting and boiling points decreases gradually"
        ],
        answer: 2,
        explanation: "Melting and boiling points increase up to group IVA (giant covalent structures) and then decrease rapidly towards noble gases."
      },
      {
        id: "sp-block-4",
        question: "Which of the following species required list amount of energy to remove one electron",
        options: ["Neon", "Magnesium", "Sodium", "Aluminium"],
        answer: 2,
        explanation: "Sodium (1st alkali metal in Period 3) has the largest atomic radius in its period, resulting in the lowest 1st ionization energy."
      },
      {
        id: "sp-block-5",
        question: "Atomic radius",
        options: [
          "Increases down the group",
          "Decreases down the group",
          "Remain same",
          "None of these"
        ],
        answer: 0,
        explanation: "Down a group, additional electron shells are added, increasing the effective atomic radius."
      },
      {
        id: "sp-block-6",
        question: "Does not react with water eminate Red Hot temperature",
        options: ["Beryllium", "Calcium", "Magnesium", "Barium"],
        answer: 0,
        explanation: "Beryllium is chemically resistant to water even at red-hot temperatures due to its small size and thick protective oxide film."
      },
      {
        id: "sp-block-7",
        question: "The ionization energy of an element is",
        options: [
          "The energy released when an electron is added to an atom of the element",
          "The same is the electron affinity of element",
          "Equal in magnitude but of opposite sign to the electron affinity of the element",
          "The energy required to remove the outermost electron of an atom of the element"
        ],
        answer: 3,
        explanation: "Ionization energy is the minimum energy needed to remove the most loosely bound electron from an isolated gaseous atom."
      },
      {
        id: "sp-block-8",
        question: "Carbon exist as allotropes which are different crystalline or molecular forms of the same substance graphite and diamond are allotropes of carbon diamond is a non conductor where is graphite is a conductor because",
        options: [
          "Graphite has a layered structure",
          "In graphite all villains electrons are tetrahedral bound",
          "In graphite one of balance electron is free to move",
          "Graphite is soft and greasy bound"
        ],
        answer: 2,
        explanation: "In graphite, each carbon atom is sp2 hybridized, leaving one delocalized pi electron per carbon free to move within layers and conduct electricity."
      },
      {
        id: "sp-block-9",
        question: "Iodine is solid due to",
        options: [
          "Strong covalent character",
          "High polarizability",
          "Strong dipole moment",
          "Strong Debye forces"
        ],
        answer: 2,
        explanation: "Note: Iodine's solid nature is chemically due to high polarizability forming strong dispersion forces; option C is mapped according to the provided key."
      },
      {
        id: "sp-block-10",
        question: "Among the following which one is least reactive metal",
        options: ["Magnesium", "Calcium", "Potassium", "Caesium"],
        answer: 0,
        explanation: "Magnesium (Group 2A, Period 3) has higher ionization energy than calcium, potassium, and caesium, making it the least reactive metal listed."
      },
      {
        id: "sp-block-11",
        question: "Third period that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is",
        options: ["Sodium", "Silicon", "Aluminium", "Magnesium"],
        answer: 2,
        explanation: "Aluminium rapidly forms an impervious Al2O3 oxide film on its surface upon exposure to air, passivating the metal against further corrosion."
      },
      {
        id: "sp-block-12",
        question: "Reactivity",
        options: [
          "Increases down the group",
          "Decreases down the group",
          "Remain same",
          "First increases then decreases"
        ],
        answer: 0,
        explanation: "For alkali and alkaline earth metals, chemical reactivity increases down the group as ionization energy decreases."
      },
      {
        id: "sp-block-13",
        question: "The property which increases up to the middle of the period and then decreases is",
        options: [
          "Ionization energy",
          "Melting and boiling points",
          "Atomic energy",
          "Atomic volume"
        ],
        answer: 1,
        explanation: "Melting and boiling points peak around group IVA elements and drop significantly towards group VIII."
      },
      {
        id: "sp-block-14",
        question: "The most non metallic out of the following is",
        options: ["Beryllium", "Magnesium", "Boron", "Aluminium"],
        answer: 2,
        explanation: "Boron is a metalloid/non-metal located furthest to the top right among the given options in the periodic table."
      },
      {
        id: "sp-block-15",
        question: "Melting point of 1A elements",
        options: [
          "Decreases down the group due to decrease in ionization energy",
          "Decreases down the group due to weaker binding forces",
          "Increases down the group due to stronger metallic bonding",
          "Increases down the group due to decreases in ionization energy"
        ],
        answer: 1,
        explanation: "As atomic size increases down Group 1A, the metallic bond strength weakens, leading to lower melting points."
      },
      {
        id: "sp-block-16",
        question: "In which group melting and boiling point decreases down the group",
        options: ["1A", "VIIIA", "VIIA", "VA"],
        answer: 2,
        explanation: "Note: In Group 1A, melting points decrease down the group. Per the provided key, option C (VIIA) is mapped."
      },
      {
        id: "sp-block-17",
        question: "The highest boiling point of HF amongst the hydrogen halides is due to",
        options: [
          "Lowest electronegativity of fluorine",
          "Lowest atomic weight of fluorine",
          "Highest electronegativity of fluorine",
          "Lowest atomic radius of fluorine"
        ],
        answer: 2,
        explanation: "Fluorine's maximum electronegativity leads to exceptionally strong intermolecular hydrogen bonding in HF, raising its boiling point."
      },
      {
        id: "sp-block-18",
        question: "The shielding effect is also called",
        options: [
          "Zee effect",
          "Screening effect",
          "Negative effect",
          "Reducing effect"
        ],
        answer: 1,
        explanation: "The reduction in effective nuclear charge caused by inner-shell electrons is known interchangeably as the screening effect."
      },
      {
        id: "sp-block-19",
        question: "The elements which shows maximum electrical conductivity among the following is",
        options: ["Sodium", "Aluminium", "Iron", "Silicon"],
        answer: 1,
        explanation: "Aluminium has 3 valence electrons per atom contributing to its metallic sea of electrons, resulting in high electrical conductivity."
      },
      {
        id: "sp-block-20",
        question: "Electronegativity of beryllium is approximately equal to that of",
        options: ["Aluminium", "Boron", "Magnesium", "Sodium"],
        answer: 0,
        explanation: "Beryllium and Aluminium exhibit a diagonal relationship, resulting in similar electronegativities (~1.5)."
      },
      {
        id: "sp-block-21",
        question: "Electronegativity and ionization energy",
        options: [
          "Increases",
          "Decreases",
          "Decreases increases",
          "Increases decreases"
        ],
        answer: 1,
        explanation: "Down a group in the periodic table, both electronegativity and ionization energy generally decrease."
      },
      {
        id: "sp-block-22",
        question: "Carbonates of lithium are not stable like that of sodium due to",
        options: [
          "Low electronegativity",
          "High charge density of lithium",
          "Low electropositivity",
          "All of the above"
        ],
        answer: 2,
        explanation: "Note: Li+ has high charge density, polarizing the carbonate ion and causing thermal instability. Option C is mapped per the answer key."
      },
      {
        id: "sp-block-23",
        question: "In isoelectronic anions least size is linked to iron with",
        options: [
          "Most electrons",
          "Most negative charge",
          "Least negative charge",
          "Most neutrons"
        ],
        answer: 2,
        explanation: "Among isoelectronic anions, the ion with the smallest negative charge has relatively higher effective nuclear attraction per electron, making it smaller."
      },
      {
        id: "sp-block-24",
        question: "Which one of the following is acidic in nature",
        options: ["Al2O3", "CO", "CO2", "CaO"],
        answer: 2,
        explanation: "Carbon dioxide (CO2) is a non-metallic oxide that dissolves in water to form carbonic acid."
      },
      {
        id: "sp-block-25",
        question: "Which statement is correct",
        options: [
          "Loss of valence electron may lead to loss of valence shell",
          "Radius of isoelectronic Ions decreases left to right in third period",
          "In Ionic radius increases with magnitude of negative charge",
          "All of these"
        ],
        answer: 3,
        explanation: "All three statements correctly describe trends in ionic and atomic radii."
      },
      {
        id: "sp-block-26",
        question: "Which of the following metal sulphate is not soluble in water",
        options: [
          "Sodium sulphate",
          "Barium sulphate",
          "Potassium Sulphate",
          "Zinc sulphate"
        ],
        answer: 1,
        explanation: "Barium sulfate (BaSO4) has extremely high lattice energy relative to its hydration energy, making it virtually insoluble in water."
      },
      {
        id: "sp-block-27",
        question: "Which of the following halogens has abnormally small electron affinity",
        options: ["Fluorine", "Bromine", "Iodine", "Chlorine"],
        answer: 0,
        explanation: "Fluorine has an unexpectedly lower electron affinity than chlorine due to intense inter-electronic repulsions in its compact 2p subshell."
      },
      {
        id: "sp-block-28",
        question: "Greater the number of protons in the nucleus pull the valence electron more towards the nucleus is the general rule in a group moving down the number of proton increase significantly so the size",
        options: [
          "Will decreases",
          "Will decreases significantly",
          "Will increases",
          "Will decreases slightly"
        ],
        answer: 2,
        explanation: "Despite nuclear charge increasing, the addition of new electronic shells dominates down a group, causing atomic size to increase."
      },
      {
        id: "sp-block-29",
        question: "Melting point of 3A elements are considerably higher than those of group 1A elements because",
        options: [
          "Size of 3A is greater than 1A",
          "Ionization energy of 3A is less than 1A",
          "Ionization of 3A is higher than 1A",
          "3A provides more binding electrons"
        ],
        answer: 3,
        explanation: "Group 3A elements contribute 3 valence electrons per atom to metallic bonding (compared to 1 for 1A), creating stronger binding forces."
      },
      {
        id: "sp-block-30",
        question: "The dry ice is",
        options: [
          "Solid ice without water",
          "Solid Sulphur dioxide",
          "Solid carbon dioxide",
          "Solid Benzene"
        ],
        answer: 2,
        explanation: "Dry ice is the common name for solid carbon dioxide (CO2)."
      },
      {
        id: "sp-block-31",
        question: "Correct order of melting point of group 2A elements",
        options: [
          "Be>Mg>Ca",
          "Mg>Be>Ca",
          "Ca>Be>Mg",
          "Be>Ca>Mg"
        ],
        answer: 3,
        explanation: "The melting points of alkaline earth metals follow the order: Be > Ca > Sr > Ba > Mg (Mg is unusually low due to crystal packing)."
      },
      {
        id: "sp-block-32",
        question: "Ionization energy depends upon",
        options: [
          "Nuclear charge",
          "Shielding effect",
          "Atomic size",
          "All of these and nature of orbital"
        ],
        answer: 2,
        explanation: "Note: Ionization energy depends on all these factors; option C is mapped per the answer key."
      },
      {
        id: "sp-block-33",
        question: "Along the period atomic radius decreases this gradual decrease in radius is due to",
        options: [
          "Increase in number of electrons in valence shell",
          "Increase in number of protons in the nucleus",
          "Decrease in number of shell",
          "Increase in number of shell"
        ],
        answer: 2,
        explanation: "Note: Chemically, atomic radius decreases across a period due to increasing effective nuclear charge; option C is mapped per the answer key."
      },
      {
        id: "sp-block-34",
        question: "More the ionization energy of an element",
        options: [
          "More the electropositivity",
          "More the reducing power",
          "Less the metallic character",
          "Bigger the atomic radius"
        ],
        answer: 2,
        explanation: "Higher ionization energy means atoms hold valence electrons tighter, corresponding to non-metallic behavior and reduced metallic character."
      },
      {
        id: "sp-block-35",
        question: "Many properties of an element and its compound can be predicted from the position of the element in the periodic table which property could not be predicted in this way",
        options: [
          "The acidic or basic nature of its oxides",
          "The charge on its ions",
          "The formula of its oxide",
          "The number of isotopes it has"
        ],
        answer: 3,
        explanation: "Isotopic abundance and count depend on nuclear stability and cannot be inferred from position in the periodic table."
      },
      {
        id: "sp-block-36",
        question: "Melting points of halogens",
        options: [
          "Decreases down the group",
          "Remain the same throughout the group",
          "Increases down the group",
          "First increases and then decreases down the group"
        ],
        answer: 2,
        explanation: "Melting points of Group VIIA elements increase down the group due to larger molecular sizes and stronger London dispersion forces."
      },
      {
        id: "sp-block-37",
        question: "Ionization energy of calcium is",
        options: [
          "Lower than that of Barium",
          "Lower than that of magnesium",
          "Higher than that of beryllium",
          "Lower than that of Strontium"
        ],
        answer: 1,
        explanation: "In Group 2A, ionization energy decreases down the group (Be > Mg > Ca > Sr > Ba), so Ca has a lower IE than Mg."
      },
      {
        id: "sp-block-38",
        question: "The element which has boiling point less than 0 centigrade is",
        options: ["Beryllium", "Boron", "Carbon", "Nitrogen"],
        answer: 3,
        explanation: "Nitrogen exists as a diatomic gas (N2) with a boiling point of -195.8 °C."
      },
      {
        id: "sp-block-39",
        question: "When sodium is heated with excess of oxygen which of the following is formed",
        options: ["NaO", "Na2O", "NaO2", "None"],
        answer: 3,
        explanation: "Sodium reacts with excess oxygen to form sodium peroxide (Na2O2), which is not explicitly listed in A-C."
      },
      {
        id: "sp-block-40",
        question: "Ionic radius along the period decreases due to",
        options: [
          "Addition of a new shell",
          "ionization energy",
          "Increase in nuclear charge",
          "Decrease in nuclear charge"
        ],
        answer: 2,
        explanation: "Increasing nuclear charge across a period draws the electron cloud closer, shrinking the ionic radius."
      },
      {
        id: "sp-block-41",
        question: "Which of the following has a greater affinity for oxygen",
        options: ["Boron", "Potassium", "Sodium", "Magnesium"],
        answer: 1,
        explanation: "Potassium is an alkali metal that reacts vigorously with oxygen to form peroxides/superoxides."
      },
      {
        id: "sp-block-42",
        question: "Highest ionization potential in a period is shown by",
        options: [
          "Alkali metals",
          "Halogens",
          "Transition elements",
          "Alkaline earth metals"
        ],
        answer: 1,
        explanation: "Halogens (group VIIA) have high effective nuclear charges, yielding very high ionization potentials (second only to noble gases)."
      },
      {
        id: "sp-block-43",
        question: "Due to formation of protective layer of oxides at Aluminium oxide surface it is to burn it",
        options: [
          "Completely in air",
          "Completely in oxygen",
          "With carbon",
          "With nitrogen"
        ],
        answer: 1,
        explanation: "Finely powdered aluminium burns intensely when supplied with pure oxygen to overcome passivation."
      },
      {
        id: "sp-block-44",
        question: "The elements of group 1A react violently with water and make the solution",
        options: ["Neutral", "Acidic", "Amphoteric", "Alkaline"],
        answer: 0,
        explanation: "Note: Group 1A metals form strong hydroxides (MOH), rendering solutions alkaline. Option A is mapped per the provided answer key."
      },
      {
        id: "sp-block-45",
        question: "The property which shows decreasing Trend across the periods",
        options: [
          "Ionization energy",
          "Electronegativity",
          "Melting point",
          "Atomic radius"
        ],
        answer: 2,
        explanation: "Note: Chemically, atomic radius decreases across periods. Option C is mapped per the answer key."
      },
      {
        id: "sp-block-46",
        question: "Each period in the periodic table starts with a subshell of new shell and ends with",
        options: [
          "Small subshell",
          "The next higher shell",
          "Different subshell of the same shell",
          "d subshell of the same shell"
        ],
        answer: 2,
        explanation: "Periods start with an s-subshell (ns) and end with a p-subshell (np) of the same principle energy shell."
      },
      {
        id: "sp-block-47",
        question: "Which one of the following is not in alkali metal",
        options: ["Francium", "Rubidium", "Caesium", "Radan"],
        answer: 3,
        explanation: "Radon (Rn) is a noble gas (Group VIII A), not an alkali metal."
      },
      {
        id: "sp-block-48",
        question: "Most of the known elements are",
        options: ["Metals", "Metalloids", "Non metals", "Transition metals"],
        answer: 0,
        explanation: "Over 80% of known chemical elements in the periodic table are classified as metals."
      },
      {
        id: "sp-block-49",
        question: "Second ionization potential of alkali metals are very high is",
        options: [
          "These are S block elements",
          "They have ns2 electronic configuration",
          "They obtain inert gas configurations",
          "They are metals"
        ],
        answer: 2,
        explanation: "Removing a second electron requires breaking into a highly stable, closed-shell noble gas electron configuration."
      },
      {
        id: "sp-block-50",
        question: "An atom with high electronegativity generally has",
        options: [
          "Tendency to form positive ions",
          "Large atomic size",
          "High ionization potential",
          "Low electron affinity"
        ],
        answer: 2,
        explanation: "Electronegativity correlates strongly with high ionization potential, as both stem from a strong nuclear attraction for electrons."
      }
  ];