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
    }
  ];