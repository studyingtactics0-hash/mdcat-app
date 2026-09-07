export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const atomicStructureQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-108",
      question: "The electrons will enter which of these orbitals after filling the 3d orbital.",
      options: [
        "4d",
        "4f",
        "4s",
        "4p"
      ],
      answer: 3,
      explanation: "According to the Aufbau principle (n+l rule), the 3d orbital (n+l = 5) is followed by the 4p orbital (n+l = 5, higher n)."
    },
    {
      id: "bumhs-2025-chem-126",
      question: "n+l value for 4d orbital is:",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer: 2,
      explanation: "For a 4d orbital, principal quantum number n = 4 and azimuthal quantum number l = 2. Therefore, n + l = 4 + 2 = 6."
    },
  
    // --- BUMHS MDCAT 2024 ---
    {
      id: "bumhs-mdcat-2024-80",
      question: "The only group of lines occurring in the visible region of the hydrogen spectrum is labelled as the:",
      options: [
        "Paschen series",
        "Pfund series",
        "Balmer series",
        "Lyman series"
      ],
      answer: 2,
      explanation: "The Balmer series corresponds to electron transitions ending at n = 2 and is the only series in the hydrogen spectrum that falls within the visible light region."
    },
    {
      id: "bumhs-mdcat-2024-86",
      question: "Carbon atom is used to measure relative:",
      options: [
        "Atomic size",
        "Atomic number",
        "Atomic mass",
        "Atomic volume"
      ],
      answer: 2,
      explanation: "The Carbon-12 isotope is defined as the international standard for determining relative atomic masses of elements."
    },
    {
      id: "bumhs-mdcat-2024-89",
      question: "One picometer (pm) = ?",
      options: [
        "10⁻⁶ m",
        "10⁻⁸ m",
        "10⁻¹⁰ m",
        "10⁻¹² m"
      ],
      answer: 3,
      explanation: "1 picometer (pm) is equal to 10⁻¹² meters."
    },
    {
      id: "bumhs-mdcat-2024-91",
      question: "An electron in an atom is completely described by its ______ quantum numbers.",
      options: [
        "Eight",
        "Six",
        "Five",
        "Four"
      ],
      answer: 3,
      explanation: "An electron's state in an atom is completely specified by four quantum numbers: principal (n), azimuthal (l), magnetic (m), and spin (s)."
    },
    {
      id: "bumhs-mdcat-2024-96",
      question: "Isotopes differ from each other on the basis of:",
      options: [
        "number of electrons",
        "mass number",
        "electronic configuration",
        "crystal lattice"
      ],
      answer: 1,
      explanation: "Isotopes are atoms of the same element having the same atomic number (protons) but different mass numbers due to varying numbers of neutrons."
    },
    {
      id: "bumhs-mdcat-2024-108",
      question: "Which statement is not correct for cathode rays?",
      options: [
        "Cathode rays consist of moving material particles",
        "Cathode rays have definite mass",
        "Cathode rays have definite velocity",
        "Cathode rays travel with the velocity of light"
      ],
      answer: 3,
      explanation: "Cathode rays consist of electrons, which are material particles possessing mass. They travel at speeds slower than the velocity of light in vacuum."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-72",
      question: "The charge of electron is:",
      options: [
        "1.602×10⁻¹⁶ C",
        "1.602×10⁻¹⁵ C",
        "1.602×10⁻¹⁷ C",
        "1.602×10⁻¹⁸ C",
        "1.602×10⁻¹⁹ C"
      ],
      answer: 4,
      explanation: "The elementary magnitude of charge on an electron is 1.602 × 10⁻¹⁹ Coulombs."
    },
    {
      id: "chem-sindh-24-82",
      question: "“In an orbital of an atom, no two electrons can have the same set of four quantum numbers, at least one quantum number must be different.” This statement is:",
      options: [
        "Aufbau principle",
        "Pauli’s exclusion principle",
        "Hund’s rule",
        "Wissewser rule",
        "Magnetic quantum number"
      ],
      answer: 1,
      explanation: "This is the precise statement of Pauli's Exclusion Principle."
    },
    {
      id: "chem-sindh-24-95",
      question: "The neutron was discovered by:",
      options: [
        "Max Planck",
        "Neil Bohr",
        "J.J. Thomson",
        "Goldstein",
        "James Chadwick"
      ],
      answer: 4,
      explanation: "James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles."
    },
    {
      id: "chem-sindh-24-118",
      question: "Maximum number of electrons in a given sub-shell are calculated by:",
      options: [
        "n²",
        "2(n+1)",
        "2n²",
        "2(2l+1)",
        "2l+1"
      ],
      answer: 3,
      explanation: "The number of orbitals in a subshell is (2l+1). Since each orbital holds a maximum of 2 electrons, the total electron capacity is 2(2l+1)."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-108",
      question: "Which of the following is expected to be the most paramagnetic?",
      options: [
        "₃Li",
        "₄Be",
        "₅B",
        "₆C"
      ],
      answer: 3,
      explanation: "Carbon (₆C: 1s² 2s² 2px¹ 2py¹) has 2 unpaired electrons, giving it the highest paramagnetic character among the listed options."
    },
    {
      id: "chem-sindh-25-110",
      question: "The maximum probability of finding an electron in ground state of Hydrogen is at a distance of:",
      options: [
        "0.53 nm",
        "0.35 nm",
        "0.053 nm",
        "0.0053 nm"
      ],
      answer: 2,
      explanation: "The radius of the first Bohr orbit of Hydrogen is r₁ = 0.529 Å = 0.053 nm, where the electron probability density peaks."
    },
    {
      id: "chem-sindh-25-112",
      question: "Which atom has at least one electron in a dumbbell shape orbital?",
      options: [
        "H",
        "He",
        "Li",
        "B"
      ],
      answer: 3,
      explanation: "Boron (₅B: 1s² 2s² 2p¹) has its valence electron in a 2p orbital, which possesses a dumbbell shape."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-125",
      question: "The energy of an orbital is determined by:",
      options: [
        "Hund’s Rule",
        "Pauli-exclusion principle",
        "n+l rule",
        "Boyles principle"
      ],
      answer: 2,
      explanation: "The n+l rule (Bohr-Bury rule) determines the relative energy levels of subshells in multi-electron atoms."
    },
    {
      id: "kmu-mdcat-25-chem-135",
      question: "According to Planck’s quantum theory, if the frequency of photon is doubled, the value of ‘h’ will be:",
      options: [
        "Doubled",
        "Increased 3 times",
        "Increased 4 times",
        "Unchanged"
      ],
      answer: 3,
      explanation: "Planck's constant (h = 6.626 × 10⁻³⁴ J·s) is a universal constant and remains unchanged regardless of frequency or energy."
    },
    {
      id: "kmu-mdcat-25-chem-139",
      question: "Spectral series for hydrogen spectrum are:",
      options: [
        "2",
        "3",
        "5",
        "7"
      ],
      answer: 2,
      explanation: "The hydrogen emission spectrum contains 5 primary named series: Lyman, Balmer, Paschen, Brackett, and Pfund."
    },
    {
      id: "kmu-mdcat-25-chem-147",
      question: "Identify the CORRECT electronic configuration for an element with atomic number 24 (Chromium):",
      options: [
        "[Ar] 4s² 3d⁴",
        "[Ar] 4s¹ 3d⁵",
        "[Ar] 4s⁰ 3d⁶",
        "[Ar] 4s² 3d⁵"
      ],
      answer: 1,
      explanation: "Chromium (Z=24) exhibits an anomalous configuration [Ar] 4s¹ 3d⁵ to gain extra stability from a half-filled d-subshell."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-73",
      question: "Which of the following sub-shell does not exist?",
      options: [
        "1p",
        "1s",
        "5d",
        "6f"
      ],
      answer: 0,
      explanation: "For n = 1, the maximum allowed value of l is 0 (s-orbital). Therefore, a 1p subshell (l = 1) cannot exist."
    },
    {
      id: "kmu-mdcat-2024-74",
      question: "The splitting of spectral lines in magnetic field is",
      options: [
        "Aufbau principle",
        "Pauli exclusion principle",
        "Stark effect",
        "Zeeman effect"
      ],
      answer: 3,
      explanation: "The splitting of atomic spectral lines in an external magnetic field is known as the Zeeman effect."
    },
    {
      id: "kmu-mdcat-2024-75",
      question: "Which element has the electronic configuration of noble-gas notation [Kr], 5s², 4d²?",
      options: [
        "Mo",
        "Se",
        "Sr",
        "Zr"
      ],
      answer: 3,
      explanation: "Zirconium (Zr) has atomic number 40. Its electronic configuration is [Kr] 5s² 4d² (36 + 2 + 2 = 40)."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-76",
      question: "Which of the following element will show electronic configuration of outermost shell like ns², np⁵?",
      options: [
        "C",
        "Cl",
        "S",
        "Si"
      ],
      answer: 1,
      explanation: "Chlorine (Cl) is a halogen in Group 17 with 7 valence electrons, having an outer shell configuration of 3s² 3p⁵."
    },
    {
      id: "szambu-chem-24-88",
      question: "Diamagnetic behavior of Fluorine molecule is due to presence of ______.",
      options: [
        "paired electrons in d orbitals",
        "paired electrons in p orbitals",
        "unpaired electrons in d orbitals",
        "unpaired electrons in p orbitals"
      ],
      answer: 1,
      explanation: "In the F₂ molecule, all bonding and anti-bonding molecular orbitals formed by p-orbital overlaps are fully paired, giving it a diamagnetic nature."
    },
    {
      id: "szambu-chem-24-98",
      question: "The e/m ratio of proton is ______ that of an electron.",
      options: [
        "1836 times greater than",
        "equal to",
        "greater than",
        "smaller than"
      ],
      answer: 3,
      explanation: "Since a proton is ~1836 times more massive than an electron while holding an equal magnitude of charge, its charge-to-mass (e/m) ratio is significantly smaller than that of an electron."
    },
    {
      id: "szambu-chem-24-106",
      question: "How many electrons will be accommodated in sub-shell with Azimuthal quantum number ℓ = 2?",
      options: [
        "2",
        "6",
        "10",
        "12"
      ],
      answer: 2,
      explanation: "ℓ = 2 corresponds to a d subshell, which contains 5 degenerate orbitals and can accommodate a maximum of 10 electrons."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Number of electron with l = 2 in an atom having atomic number 23 (Vanadium) is:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 1,
      explanation: "Vanadium (Z=23) has configuration [Ar] 4s² 3d³. The electrons in l = 2 (d-subshell) equal 3."
    },
    {
      id: "szambu-chem-25-2",
      question: "Highest energy for one quantum among radiation is:",
      options: [
        "microwave",
        "infrared",
        "ultra violet",
        "visible"
      ],
      answer: 2,
      explanation: "Ultraviolet radiation has the highest frequency among the given choices, so its quantum carries the highest energy (E = hf)."
    },
  
    // --- UHS 2024 CHEM prep ---
    {
      id: "uhs-2024-chem-73",
      question: "The p orbital has",
      options: [
        "2 lobes",
        "3 lobes",
        "4 lobes",
        "5 lobes"
      ],
      answer: 0,
      explanation: "A p-orbital has a dumbbell shape consisting of 2 lobes separated by a nodal plane."
    },
    {
      id: "uhs-2024-chem-74",
      question: "Which of the following electronic configuration is correct for carbon?",
      options: [
        "1s²2s²2p³",
        "1s²2s²2p⁴",
        "1s²2s²2p²",
        "1s²2s²2p¹"
      ],
      answer: 2,
      explanation: "Carbon (Z=6) has 6 electrons with ground state configuration 1s² 2s² 2p²."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-93",
      question: "Which set of quantum numbers is not allowed for an electron?",
      options: [
        "n=2, l=1, m=0, s=+1/2",
        "n=3, l=0, m=0, s=-1/2",
        "n=2, l=2, m=1, s=+1/2",
        "n=1, l=0, m=0, s=+1/2"
      ],
      answer: 2,
      explanation: "The azimuthal quantum number l can only range from 0 to n-1. For n = 2, l cannot be equal to 2."
    },
    {
      id: "uhs-chem-25-100",
      question: "Shape of orbital is determined by quantum number:",
      options: [
        "n",
        "l",
        "m",
        "s"
      ],
      answer: 1,
      explanation: "The azimuthal (subsidiary) quantum number l determines the 3D shape of an atomic orbital."
    },
    {
      id: "uhs-chem-25-102",
      question: "The value of Planck’s constant is:",
      options: [
        "6.6262×10⁻³⁰ J. sec",
        "6.6262×10⁻³² J. sec",
        "6.6262×10⁻³⁴ J. sec",
        "6.6262×10⁻³⁶ J. sec"
      ],
      answer: 2,
      explanation: "Planck's constant h = 6.626 × 10⁻³⁴ J·s."
    },
    {
      id: "uhs-chem-25-123",
      question: "Number of unpaired electrons in Boron in ground state is/are:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 0,
      explanation: "Boron (Z=5) has ground state configuration 1s² 2s² 2p¹, which contains 1 unpaired electron."
    },
    // --- TESTMOZ ---
    {
        id: "atom-struct-1",
        question: "The total relative charge of an element is equal to",
        options: [
          "It's charge of electrons",
          "It's charge of proton",
          "Zero",
          "None of these"
        ],
        answer: 2,
        explanation: "An atom in its neutral elemental state contains equal numbers of positively charged protons and negatively charged electrons, making its overall net charge zero."
      },
      {
        id: "atom-struct-2",
        question: "The options having all the properties if gamma rays:",
        options: [
          "Neutrons highly penetrating, velocity is equal to that of light, remains undeflected in magnetic field",
          "Most penetrating, velocity is equal to that of light, no deflection in magnetic field",
          "Least penetrating, velocity 1/10th of light deflected in magnetic field helium nucleus",
          "Proton least penetrating, deflects like negative particle in magnetic field"
        ],
        answer: 1,
        explanation: "Gamma rays are high-energy electromagnetic radiation lacking charge and mass. They travel at the speed of light, exhibit maximum penetrating power, and do not deflect in magnetic/electric fields."
      },
      {
        id: "atom-struct-3",
        question: "Lowest energy electrons are present in",
        options: ["s", "p", "d", "f"],
        answer: 0,
        explanation: "Within any given principal quantum level (n), the s-subshell penetrates closest to the nucleus, experiencing maximum effective nuclear charge and having the lowest energy level."
      },
      {
        id: "atom-struct-4",
        question: "Which of the following orbital has different number of lobes than the other three orbitals",
        options: ["dxy", "dx²-y²", "dyz", "dz²"],
        answer: 3,
        explanation: "Four d-orbitals (dxy, dyz, dxz, dx2-y2) possess a four-lobed cloverleaf shape, whereas dz2 features two main lobes aligned along the z-axis encircled by a central doughnut-shaped ring (torus)."
      },
      {
        id: "atom-struct-5",
        question: "The relationship between quantum number n and l is",
        options: [
          "n = l – 1",
          "l = n – 2",
          "l = n – 1",
          "n = l – 2"
        ],
        answer: 2,
        explanation: "The azimuthal quantum number l ranges from 0 up to (n - 1) for any given principal shell level n."
      },
      {
        id: "atom-struct-6",
        question: "Rutherford's model of atom failed because:",
        options: [
          "The atom did not have a nucleus and electrons",
          "It did not account for the attraction between protons and neutrons",
          "It did not account for the stability of the atom",
          "There is actually no space between the nucleus and the electrons"
        ],
        answer: 2,
        explanation: "According to classical electrodynamics, accelerating orbiting electrons should continuously radiate energy and spiral into the nucleus, which Rutherford's model failed to address."
      },
      {
        id: "atom-struct-7",
        question: "The ground state of an atom corresponds to a state of:",
        options: [
          "Maximum energy",
          "Minimum energy",
          "Positive energy",
          "Negative energy"
        ],
        answer: 1,
        explanation: "The ground state represents the lowest allowable potential energy configuration for the electrons surrounding an atomic nucleus."
      },
      {
        id: "atom-struct-8",
        question: "If n = 3 then the maximum number of “l” values will be",
        options: ["2", "3", "1", "0"],
        answer: 1,
        explanation: "For n = 3, there are 3 possible values for the azimuthal quantum number l (0, 1, and 2, corresponding to s, p, and d subshells)."
      },
      {
        id: "atom-struct-9",
        question: "The relative energies of 4s, 4p and 3d orbitals are in the order",
        options: [
          "3d < 4p < 4s",
          "4p < 4s < 3d",
          "4s < 3d < 4p",
          "4p < 3d < 4s"
        ],
        answer: 2,
        explanation: "By the (n + l) rule: 4s has (4+0=4), 3d has (3+2=5), and 4p has (4+1=5 with higher n). Hence, energy ranks 4s < 3d < 4p."
      },
      {
        id: "atom-struct-10",
        question: "What kind of orbital must an electron with the principal quantum number n = 2 occupy?",
        options: [
          "A spherically shaped orbital",
          "The orbital closest to the nucleus",
          "Either an S or P orbital",
          "A dumb bell shaped orbital"
        ],
        answer: 2,
        explanation: "For n = 2, l can be 0 (spherical 2s orbital) or 1 (dumbbell-shaped 2p orbital)."
      },
      {
        id: "atom-struct-11",
        question: "Which of the following has the lowest e/m ratio",
        options: ["Li⁺²", "H⁺¹", "H", "F"],
        answer: 2,
        explanation: "Note: Neutral atoms carry zero net charge e = 0, giving a theoretical charge-to-mass ratio of zero; option C (H) is selected per the provided answer key."
      },
      {
        id: "atom-struct-12",
        question: "Which pair has 1 electron in its orbital",
        options: ["Li, Fe", "Na, Cr", "K, Mn", "H, He"],
        answer: 1,
        explanation: "Sodium ([Ar] 3s1) has 1 valence electron in its 3s orbital, and Chromium ([Ar] 4s1 3d5) has 1 electron in its 4s orbital."
      },
      {
        id: "atom-struct-13",
        question: "Oxygen has very high second ionization potential value because of:",
        options: [
          "Completely filled p orbital",
          "Half filled s orbital",
          "Completely filled s orbital",
          "Half filled p orbital"
        ],
        answer: 3,
        explanation: "Oxygen (1s2 2s2 2p4) loses 1 electron to form O+ with a 2p3 configuration, which has a stable half-filled p-subshell requiring high energy to remove a second electron."
      },
      {
        id: "atom-struct-14",
        question: "Who observed radioactivity first",
        options: ["Henry Backwerll", "Rutherford", "Newton", "Bohr"],
        answer: 0,
        explanation: "Henri Becquerel discovered spontaneous radioactivity in 1896 while working with uranium salts."
      },
      {
        id: "atom-struct-15",
        question: "Orbitals of equal energy are called",
        options: [
          "Atomic orbitals",
          "Degenerate orbitals",
          "Molecular orbitals",
          "Anti bonding orbitals"
        ],
        answer: 1,
        explanation: "Orbitals belonging to the same subshell that share identical energy levels (such as px, py, pz) are termed degenerate orbitals."
      },
      {
        id: "atom-struct-16",
        question: "Nitrogen and phosphorus have 3 of their valence electrons unpaired because of:",
        options: [
          "Aufbau principle",
          "Heisenberg’s principle",
          "Hund’s rule",
          "Planck’s statement"
        ],
        answer: 2,
        explanation: "Hund's Rule of Maximum Multiplicity dictates that electrons occupy degenerate p-orbitals singly with parallel spins before pairing up."
      },
      {
        id: "atom-struct-17",
        question: "Elements have almost zero electron affinity if they have",
        options: [
          "Inert gas configuration",
          "Full filled configuration",
          "Half filled configuration",
          "All of the above"
        ],
        answer: 3,
        explanation: "Atoms with stable closed-shell or half-filled electron arrangements resist adding extra electrons, giving near-zero or endothermic electron affinities."
      },
      {
        id: "atom-struct-18",
        question: "If proton number of an element ‘Z’ is 37 then the total number of electrons in its ion ‘Z⁻²’ is",
        options: ["37", "39", "35", "18"],
        answer: 1,
        explanation: "A neutral atom with Z = 37 has 37 electrons. Gaining 2 additional electrons to form Z2- brings the total electron count to 37 + 2 = 39."
      },
      {
        id: "atom-struct-19",
        question: "The average atomic mass of boron is 10.8. It has two isotopes of masses 10 and 11 respectively. What is the percentage of isotope with the mass of 10?",
        options: ["20%", "60%", "80%", "50%"],
        answer: 0,
        explanation: "Let x be the fraction of B-10: 10(x) + 11(1-x) = 10.8 => 11 - x = 10.8 => x = 0.2 (20%)."
      },
      {
        id: "atom-struct-20",
        question: "Which particle cannot be accelerated in a magnetic field",
        options: [
          "Alpha particle",
          "Beta particle",
          "Neutron",
          "Proton"
        ],
        answer: 2,
        explanation: "Magnetic fields exert Lorentz forces only on moving charged particles. Neutrons carry zero electric charge and cannot be accelerated magnetically."
      },
      {
        id: "atom-struct-21",
        question: "Balmer series is important as",
        options: [
          "It is the first series",
          "It gives sharp lines",
          "It lies in visible region",
          "It was first discovered"
        ],
        answer: 2,
        explanation: "The Balmer series of hydrogen spectrum involves electronic transitions to the n = 2 energy level, falling within the visible region of the electromagnetic spectrum."
      },
      {
        id: "atom-struct-22",
        question: "The effective nuclear charge for an atom for outer electron is less than the atomic number due to",
        options: [
          "Intervening electron",
          "Paramagnetism",
          "Penetration",
          "Electron pair repulsion"
        ],
        answer: 0,
        explanation: "Inner (intervening) shell electrons screen or shield outer valence electrons from the full attractive pull of the nuclear charge (Zeff = Z - S)."
      },
      {
        id: "atom-struct-23",
        question: "Which orbital has number of lobes equal to 2?",
        options: ["s", "p", "d", "f"],
        answer: 1,
        explanation: "p-orbitals are dumbbell-shaped with 2 lobes separated by a nodal plane passing through the nucleus."
      },
      {
        id: "atom-struct-24",
        question: "Which of the following shows maximum penetration?",
        options: [
          "Electrons",
          "Protons",
          "Alpha particles",
          "Neutrons"
        ],
        answer: 3,
        explanation: "Neutrons carry no electric charge and do not experience electrostatic interaction with orbital electrons or atomic nuclei, providing maximum penetrating ability through matter."
      },
      {
        id: "atom-struct-25",
        question: "The principal quantum number is related to the",
        options: [
          "Orbital angular momentum",
          "Size of the orbital",
          "Orientation of the orbital",
          "Spin of the orbital"
        ],
        answer: 1,
        explanation: "The principal quantum number (n) dictates the main energy shell and the overall effective size or radius of the orbital."
      },
      {
        id: "atom-struct-26",
        question: "The maximum number of electrons in a shell “n” can accommodate is given by",
        options: ["n", "n²", "2n²", "2n³"],
        answer: 2,
        explanation: "The total electron capacity of a principal quantum shell n is calculated using the formula 2n²."
      },
      {
        id: "atom-struct-27",
        question: "Cathode rays:",
        options: [
          "Are heavy in the case of bigger atoms",
          "Is light in the case of smaller atoms",
          "Is more intense in the case of radioactive atoms",
          "Depends on the nature of gas",
          "Independent on the nature of gas"
        ],
        answer: 4,
        explanation: "Cathode rays consist of fundamental subatomic particles (electrons); their mass, charge, and e/m ratio are independent of the gas inside the discharge tube."
      },
      {
        id: "atom-struct-28",
        question: "Quantum number which tells the energy of electron is?",
        options: ["n", "m", "l", "s"],
        answer: 0,
        explanation: "The principal quantum number (n) primarily determines the energy level occupied by an electron in a hydrogenic or multi-electron atom."
      },
      {
        id: "atom-struct-29",
        question: "The radius of third Bohr orbit is",
        options: [
          "0.529 Å",
          "0.529/4 Å",
          "0.529 × 2 Å",
          "0.529 × 9 Å"
        ],
        answer: 3,
        explanation: "Bohr orbit radius formula is rn = r1 × n². For n = 3, r3 = 0.529 Å × (3)² = 0.529 × 9 Å."
      },
      {
        id: "atom-struct-30",
        question: "If uncertainty in the position of an electron is zero, the uncertainty in the momentum is",
        options: ["1", "Zero", "2π", "2h/4π", "Infinite"],
        answer: 4,
        explanation: "By Heisenberg's Uncertainty Principle (Δx · Δp ≥ h / 4π), if Δx = 0, then Δp must approach infinity."
      },
      {
        id: "atom-struct-31",
        question: "Electrical conductivity depends upon",
        options: [
          "Temperature",
          "Degree of dilution",
          "Nature of electrolyte",
          "Speed of ions"
        ],
        answer: 0,
        explanation: "Note: Electrical conductivity of electrolytes is influenced by temperature, ionic mobility, dilution, and ion count; option A is mapped per the answer key."
      },
      {
        id: "atom-struct-32",
        question: "A sodium lamp emits yellow light with a wavelength of 589 nm. Which electron is involved in this context",
        options: [
          "3s electron",
          "4s electron",
          "3p electron",
          "3d electron"
        ],
        answer: 0,
        explanation: "The characteristic doublet sodium D-lines (589 nm) arise from electronic transitions involving excitation and relaxation of the outermost 3s valence electron."
      },
      {
        id: "atom-struct-33",
        question: "Which is lighter than the rest",
        options: ["Electron", "None", "Proton", "Neutron"],
        answer: 2,
        explanation: "Note: Chemically an electron (~1/1836 amu) is lightest. Per the provided answer key, Option C (Proton) is mapped."
      },
      {
        id: "atom-struct-34",
        question: "Maximum number of electrons in M shell",
        options: ["2", "8", "18", "16"],
        answer: 2,
        explanation: "The M shell corresponds to principal quantum number n = 3. Using 2n²: 2 × (3)² = 18 electrons."
      },
      {
        id: "atom-struct-35",
        question: "Mass of neutron is",
        options: [
          "1.0073 amu",
          "1.0087 amu",
          "0.000173 amu",
          "1.6760 × 10⁻²⁷ amu"
        ],
        answer: 1,
        explanation: "The rest mass of a free neutron is approximately 1.0087 atomic mass units (amu)."
      },
      {
        id: "atom-struct-36",
        question: "Which of the following are oxidizing in nature",
        options: [
          "Both neutrons and canal rays",
          "Cathode rays",
          "Canal rays",
          "Neutrons"
        ],
        answer: 1,
        explanation: "Note: Cathode rays consist of energetic electrons capable of ionizing and reducing/oxidizing target media; option B is selected per the answer key."
      },
      {
        id: "atom-struct-37",
        question: "The increasing penetration effect of atomic orbitals is",
        options: [
          "d < p < s < f",
          "s < f < p < d",
          "p < s < d < f",
          "f < d < p < s"
        ],
        answer: 3,
        explanation: "For a given main energy level n, the relative penetrating power of subshell orbitals toward the nucleus follows the order: f < d < p < s."
      },
      {
        id: "atom-struct-38",
        question: "Quantum number values for “2p” orbitals are:",
        options: [
          "n = 2, l = 1",
          "n = 1, l = 2",
          "n = 1, l = 0",
          "n = 2, l = 0"
        ],
        answer: 0,
        explanation: "In a 2p orbital, the coefficient 2 indicates principal quantum number n = 2, and the p subshell corresponds to azimuthal quantum number l = 1."
      },
      {
        id: "atom-struct-39",
        question: "The maximum number of electrons in a shell with the principal quantum number equal to 4 is",
        options: ["2", "10", "16", "32"],
        answer: 3,
        explanation: "Using the formula 2n² for n = 4: 2 × (4)² = 32 electrons total."
      },
      {
        id: "atom-struct-40",
        question: "Which one of the following rule is used to arrange the sub energy levels in increasing order of energy?",
        options: [
          "Hund’s rule",
          "Octet rule",
          "(n + l) rule",
          "Aufbau principle"
        ],
        answer: 2,
        explanation: "The (n + l) rule (or Bohr-Bury rule) ranks subshell energy levels in increasing order, where lower (n + l) corresponds to lower energy."
      },
      {
        id: "atom-struct-41",
        question: "What is the number of protons and neutrons in an atom with mass number 89 and atomic number 39?",
        options: [
          "60 protons and 50 neutrons",
          "50 protons and 39 neutrons",
          "39 protons and 89 neutrons",
          "39 protons and 50 neutrons"
        ],
        answer: 3,
        explanation: "Protons = Atomic number (Z) = 39. Neutrons = Mass number (A) - Atomic number (Z) = 89 - 39 = 50."
      },
      {
        id: "atom-struct-42",
        question: "Which light color has longest wavelength",
        options: ["Violet", "Blue", "Orange", "Red"],
        answer: 3,
        explanation: "In the visible light spectrum (ROYGBIV), red light possesses the longest wavelength (~700 nm) and lowest frequency."
      },
      {
        id: "atom-struct-43",
        question: "What is correct priority order of filling of electron according to Aufbau principle",
        options: [
          "1s < 2p > 2s > 3d > 3p > 3s",
          "1s < 2p < 2s < 3d < 3s",
          "1s > 2s > 2p > 3d > 3p > 3s",
          "1s > 2s > 2p > 3s > 3p > 3d"
        ],
        answer: 3,
        explanation: "Note: Chemically, subshells fill in order of increasing energy (1s < 2s < 2p < 3s < 3p < 3d). Option D is mapped according to the provided answer key."
      },
      {
        id: "atom-struct-44",
        question: "For a 51% ionic molecules, the difference in EN is:",
        options: ["1.5", "1.7", "1.9", "2.1"],
        answer: 1,
        explanation: "According to Pauling's scale, an electronegativity difference (ΔEN) of 1.7 corresponds to approximately 50-51% ionic character."
      },
      {
        id: "atom-struct-45",
        question: "Copper is a typical transition metal, its atomic number is 29. In which oxidation state it has partially filled orbital in d subshell",
        options: ["Cu", "Cu⁺", "Cu⁻", "Cu²⁺"],
        answer: 3,
        explanation: "Cu2+ has an electronic configuration of [Ar] 3d9, possessing a partially filled d-subshell with 1 unpaired electron."
      },
      {
        id: "atom-struct-46",
        question: "Cathode rays travel in discharge tube from",
        options: [
          "Anode to cathode",
          "Cathode to anode",
          "Glass tube to vacuum pump",
          "Cathode through air"
        ],
        answer: 1,
        explanation: "Cathode rays consist of streams of negative electrons emitted from the cathode and traveling toward the anode."
      },
      {
        id: "atom-struct-47",
        question: "The shape of the orbital indicated by the symbol ‘l’ called:",
        options: [
          "Principal quantum number",
          "Azimuthal quantum number",
          "Magnetic quantum number",
          "Spin quantum number"
        ],
        answer: 1,
        explanation: "The azimuthal (or orbital angular momentum) quantum number 'l' determines the 3D geometric shape of an orbital."
      },
      {
        id: "atom-struct-48",
        question: "Which of the following has the same number of electrons as an alpha particle?",
        options: ["H", "H₂", "H⁺", "He"],
        answer: 2,
        explanation: "Note: An alpha particle (He2+) has 0 electrons. H+ also has 0 electrons, making their electron counts equal."
      },
      {
        id: "atom-struct-49",
        question: "The series limit for the Balmer series of hydrogen spectrum occurs at 3664 Å. Calculate ionization energy of hydrogen atom",
        options: [
          "21.7 × 10⁻¹⁹ J",
          "6.626 × 10⁻³⁴ J",
          "5.425 × 10⁻¹⁹ J",
          "3664 × 10⁻¹⁰ J"
        ],
        answer: 2,
        explanation: "Energy E = (h × c) / λ = (6.626 × 10^-34 × 3 × 10^8) / (3664 × 10^-10) ≈ 5.425 × 10⁻¹⁹ J."
      },
      {
        id: "atom-struct-50",
        question: "A set of orbitals having same value of ‘l’ is called:",
        options: [
          "Shell",
          "Molecular orbital",
          "Sub shell",
          "Energy level"
        ],
        answer: 2,
        explanation: "A subshell comprises all degenerate orbitals sharing the same principal quantum number n and azimuthal quantum number l."
      }
  ];