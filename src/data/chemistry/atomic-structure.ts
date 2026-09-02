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
        id: "testmoz-chem-1",
        question: "The total relative charge of an element is equal to",
        options: [
          "It's charge of electrons",
          "It's charge of proton",
          "Zero",
          "None of these"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-2",
        question: "The options having all the properties of gamma rays:",
        options: [
          "Neutrons highly penetrating, velocity is equal to that of light, remains undeflected in magnetic field",
          "Most penetrating, velocity is equal to that of light, no deflection in magnetic field",
          "Least penetrating, velocity 1/10th of light deflected in magnetic field helium nucleus",
          "Proton least penetrating, deflects like negative particle in magnetic field"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-3",
        question: "Lowest energy electrons are present in",
        options: [
          "s",
          "p",
          "d",
          "f"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-4",
        question: "Which of the following orbital has different number of lobes than the other three orbitals",
        options: [
          "dxy",
          "dx²-y²",
          "dyz",
          "dz²"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-5",
        question: "The relationship between quantum number n and l is",
        options: [
          "n = l - 1",
          "l = n - 2",
          "l = n - 1",
          "n = l - 2"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-6",
        question: "Rutherford's model of atom failed because:",
        options: [
          "The atom did not have a nucleus and electrons",
          "It did not account for the attraction between protons and neutrons",
          "It did not account for the stability of the atom",
          "There is actually no space between the nucleus and the electrons"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-7",
        question: "The ground state of an atom corresponds to a state of:",
        options: [
          "Maximum energy",
          "Minimum energy",
          "Positive energy",
          "Negative energy"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-8",
        question: "If n = 3 then the maximum number of “l” values will be",
        options: [
          "2",
          "3",
          "1",
          "0"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-9",
        question: "The relative energies of 4s, 4p and 3d orbitals are in the order.",
        options: [
          "3d < 4p < 4s",
          "4p < 4s < 3d",
          "4s < 3d < 4p",
          "4p < 3d < 4s"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-10",
        question: "What kind of orbital must an electron with the principal quantum number n = 2 occupy?",
        options: [
          "A spherically shaped orbital",
          "The orbital closest to the nucleus",
          "Either an S or P orbital",
          "A dumb bell shaped orbital"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-11",
        question: "Which of the following has the lowest e/m ratio",
        options: [
          "Li⁺²",
          "H⁺¹",
          "H",
          "F"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-12",
        question: "Which pair has 1 electron in its orbital",
        options: [
          "Li, Fe",
          "Na, Cr",
          "K, Mn",
          "H, He"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-13",
        question: "Oxygen has very high second ionization potential value because of:",
        options: [
          "Completely filled p orbital",
          "Half filled s orbital",
          "Completely filled s orbital",
          "Half filled p orbital"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-14",
        question: "Who observed radioactivity first",
        options: [
          "Henry Becquerel",
          "Rutherford",
          "Newton",
          "Bohr"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-15",
        question: "Orbitals of equal energy are called",
        options: [
          "Atomic orbitals",
          "Degenerate orbitals",
          "Molecular orbitals",
          "Anti bonding orbitals"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-16",
        question: "Nitrogen and phosphorus have 3 of their valence electrons unpaired because of:",
        options: [
          "Aufbau principle",
          "Heisenberg’s principle",
          "Hund’s rule",
          "Planck’s statement"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-17",
        question: "Elements have almost zero electron affinity if they have",
        options: [
          "Inert gas configuration",
          "Full filled configuration",
          "Half filled configuration",
          "All of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-18",
        question: "If proton number of an element ‘Z’ is 37 then the total number of electron in its ion ‘Z⁻²’ is",
        options: [
          "37",
          "39",
          "35",
          "18"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-19",
        question: "The average atomic mass of boron is 10.8. It has two isotopes of masses 10 and 11 respectively. What is the percentage of isotope with the mass of 10?",
        options: [
          "20%",
          "60%",
          "80%",
          "50%"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-20",
        question: "Which particle cannot be accelerated in a magnetic field",
        options: [
          "Alpha particle",
          "Beta particle",
          "Neutron",
          "Proton"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-21",
        question: "Balmer series is important as",
        options: [
          "It is the first series",
          "It gives sharp lines",
          "It lies in visible region",
          "It was first discovered"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-22",
        question: "The effective nuclear charge for an atom for outer electron is less than the atomic number due to",
        options: [
          "Intervening electron",
          "Paramagnetism",
          "Penetration",
          "Electron pair repulsion"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-23",
        question: "Which orbital have number of lobes equal to 2?",
        options: [
          "s",
          "p",
          "d",
          "f"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-24",
        question: "Which of the following shows maximum penetration?",
        options: [
          "Electrons",
          "Protons",
          "Alpha particles",
          "Neutrons"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-25",
        question: "The principal quantum number is related to the",
        options: [
          "Orbital angular momentum",
          "Size of the orbital",
          "Orientation of the orbital",
          "Spin of the orbital"
        ],
        answer: 1
      },
      {
        id: "testmoz-chem-26",
        question: "The maximum number of electron in a shell “n” can accommodate is given by",
        options: [
          "n",
          "n²",
          "2n²",
          "2n³"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-27",
        question: "Cathode rays:",
        options: [
          "Are heavy in the case of bigger atoms",
          "Is light in the case of smaller atoms",
          "Is more intense in the case of radioactive atoms",
          "Depends on the nature of gas",
          "Independent on the nature of gas"
        ],
        answer: 4
      },
      {
        id: "testmoz-chem-28",
        question: "Quantum number which tells the energy of electron is?",
        options: [
          "n",
          "m",
          "l",
          "s"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-29",
        question: "The radius of third Bohr orbit is",
        options: [
          "0.529 Å",
          "0.529/4 Å",
          "0.529 × 2 Å",
          "0.529 × 9 Å"
        ],
        answer: 3
      },
      {
        id: "testmoz-chem-30",
        question: "If uncertainty in the position of an electron is zero, the uncertainty in the momentum is",
        options: [
          "1",
          "Zero",
          "2π",
          "2h/4π",
          "Infinite"
        ],
        answer: 4
      },
      {
        id: "testmoz-chem-31",
        question: "Electrical conductivity depends upon",
        options: [
          "Temperature",
          "Degree of dilution",
          "Nature of electrolyte",
          "Speed of ions"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-32",
        question: "A sodium lamp emit yellow light with a wavelength of 589 nm which electron is involved in this context",
        options: [
          "3s electron",
          "4s electron",
          "3p electron",
          "3d electron"
        ],
        answer: 0
      },
      {
        id: "testmoz-chem-33",
        question: "Which is lighter than the rest",
        options: [
          "Electron",
          "None",
          "Proton",
          "Neutron"
        ],
        answer: 2
      },
      {
        id: "testmoz-chem-34",
        question: "Maximum number of electron in M shell",
        options: [
          "2",
          "3",
          "1",
          "4"
        ],
        answer: 0
      }
  ];