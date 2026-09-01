export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const nuclearPhysicsQuestions: Question[] = [
    // --- BUMHS 2024 PHYS ---
    {
      id: "bumhs-2024-phys-135",
      question: "Velocity V of an electron revolving around the nucleus is at _____ to the radius r of the orbit.",
      options: [
        "acute angle",
        "obtuse angle",
        "right angle",
        "supplementary angle"
      ],
      answer: 2,
      explanation: "In a circular orbit, tangential velocity vector v is always perpendicular (at a right angle, 90°) to the radial vector r."
    },
    {
      id: "bumhs-2024-phys-145",
      question: "Which of the following statements is correct:\nI. nuclear radiation with least penetrating power has most ionization power\nII. nuclear radiation with most penetrating power has least ionization power",
      options: [
        "I",
        "II",
        "Both I and II",
        "neither I nor II"
      ],
      answer: 2,
      explanation: "Alpha particles have the least penetration power but highest ionizing power due to their large mass and +2 charge, whereas Gamma rays have the greatest penetration power but lowest ionizing power."
    },
    {
      id: "bumhs-2024-phys-157",
      question: "Mass number of an atom represents the number of:",
      options: [
        "proton",
        "neutron",
        "neutron plus proton",
        "proton plus electron"
      ],
      answer: 2,
      explanation: "Mass number (A) represents the total number of nucleons inside the nucleus, which is the sum of protons (Z) and neutrons (N)."
    },
    {
      id: "bumhs-2024-phys-164",
      question: "Which of the following isotope of hydrogen is unstable?",
      options: [
        "H¹",
        "D²",
        "T³",
        "All of these"
      ],
      answer: 2,
      explanation: "Tritium (₁H³) is a radioactive, unstable isotope of hydrogen that decays by emitting a beta particle."
    },
    {
      id: "bumhs-2024-phys-166",
      question: "According to the Bohr’s model of an atom, the radius of the nth orbit is proportional to:",
      options: [
        "n",
        "½n",
        "n²",
        "n³"
      ],
      answer: 2,
      explanation: "In Bohr's model, orbital radius is r_n = n² r₁, which is directly proportional to n²."
    },
    {
      id: "bumhs-2024-phys-170",
      question: "Electrons of mass m and charge e are accelerated through a potential difference V and strike the target. The maximum speed of these electrons is:",
      options: [
        "√(eV/m)",
        "eV/m",
        "eV²/m",
        "√(2eV/m)"
      ],
      answer: 3,
      explanation: "Equating kinetic energy to electric potential work: ½ m v² = e V → v² = 2eV / m → v = √(2eV/m)."
    },
    {
      id: "bumhs-2024-phys-171",
      question: "A slow neutron will cause fission in?",
      options: [
        "₉₂U²³⁴",
        "₉₂U²³⁵",
        "₉₂U²³⁶",
        "₉₂U²³⁷"
      ],
      answer: 1,
      explanation: "Uranium-235 (₉₂U²³⁵) is fissile and undergoes nuclear fission upon capturing thermal (slow) neutrons."
    },
    {
      id: "bumhs-2024-phys-173",
      question: "Let T is the half-life of certain radioactive element and N₀ are the number of atoms present in the sample at t = 0. After time 3T, what percent of atoms present at t = 0 will have been decayed?",
      options: [
        "12.5%",
        "50%",
        "87.5%",
        "100%"
      ],
      answer: 2,
      explanation: "After 3 half-lives, remaining fraction N = (1/2)³ N₀ = (1/8) N₀ = 12.5%. Decayed fraction = 100% - 12.5% = 87.5%."
    },
  
    // --- BUMHS 2025 PHYSICS ---
    {
      id: "bumhs-2025-phys-131",
      question: "The coulomb repulsive force between two protons inside a nucleus is much higher than the gravitational attractive force by a factor of approximately ______.",
      options: [
        "10³⁶",
        "10⁻³⁶",
        "10⁻¹⁵",
        "10¹²"
      ],
      answer: 0,
      explanation: "The ratio of electrostatic repulsion to gravitational attraction between two protons is F_e / F_g ≈ 10³⁶."
    },
  
    // --- KMU MDCAT 2025 PHYS ---
    {
      id: "kmu-mdcat-2025-phys-87",
      question: "Which of the following statement best describes the nature of nuclear decay?",
      options: [
        "It occurs both spontaneously and randomly",
        "It occurs only spontaneously according to chance",
        "It occurs at regular time intervals for each element",
        "It is a process which occurs only when the nucleus is excited"
      ],
      answer: 0,
      explanation: "Radioactive decay is fundamentally a spontaneous and random process governed by probability laws."
    },
  
    // --- KMU PHYS 24 ---
    {
      id: "kmu-phys-24-173",
      question: "Black body is an ideal radiator that radiates __________ at all wavelengths",
      options: [
        "Inconsistently",
        "Distinctly",
        "Equally",
        "Unequally"
      ],
      answer: 2,
      explanation: "An ideal black body emits electromagnetic radiation continuously across all wavelengths in thermal equilibrium."
    },
    {
      id: "kmu-phys-24-174",
      question: "Mass number A refers to ____",
      options: [
        "Number of electrons",
        "Number of nucleons",
        "Number of neutrons",
        "Number of protons"
      ],
      answer: 1,
      explanation: "The mass number A refers to the total number of nucleons (protons + neutrons) in an atomic nucleus."
    },
    {
      id: "kmu-phys-24-175",
      question: "λ is a __________ constant:",
      options: [
        "Decay",
        "Dielectric",
        "Plank’s",
        "Proportionality"
      ],
      answer: 0,
      explanation: "In radioactive decay equations (N = N₀ e⁻λᵗ), λ represents the radioactive decay constant."
    },
    {
      id: "kmu-phys-24-176",
      question: "Gamma ray camera can observe radiations from the __________ that are concentrated in the organs",
      options: [
        "Atoms",
        "Isotopes",
        "Nucleons",
        "Neutrons"
      ],
      answer: 1,
      explanation: "Gamma cameras detect gamma photons emitted by radioactive isotopes (radio-tracers) concentrated inside body organs."
    },
  
    // --- SIBA PHY 24 ---
    {
      id: "siba-phy-24-141",
      question: "In radioactivity, the product of half-life T₁/₂ and decay constant (λ) is equal to:",
      options: [
        "0.693",
        "0.396",
        "0.953",
        "0.963",
        "0.369"
      ],
      answer: 0,
      explanation: "The relationship between half-life T₁/₂ and decay constant λ is T₁/₂ × λ = ln(2) ≈ 0.693."
    },
    {
      id: "siba-phy-24-163",
      question: "Fast moving electrons stopped by a heavy metallic target in an evacuated glass tube give rise to the production of",
      options: [
        "Beta-rays",
        "Gamma-rays",
        "X-rays",
        "Cosmic rays",
        "Alpha-rays"
      ],
      answer: 2,
      explanation: "When high-speed electrons decelerate rapidly upon striking a high-Z metal target (Bremsstrahlung), X-rays are produced."
    },
    {
      id: "siba-phy-24-166",
      question: "The binding energy of a deuteron (¹H²) is 2.3 MeV, its binding energy per nucleon will be:",
      options: [
        "0.51 MeV",
        "0.2 MeV",
        "1.02 MeV",
        "1.1 MeV",
        "1 MeV"
      ],
      answer: 3,
      explanation: "Deuteron has mass number A = 2. Binding energy per nucleon = 2.3 MeV / 2 = 1.15 MeV ≈ 1.1 MeV."
    },
    {
      id: "siba-phy-24-169",
      question: "In the equation of nuclear decay p¹ → n¹ + x , x is:",
      options: [
        "Proton",
        "Positron",
        "Electron",
        "Photon",
        "Gamma ray"
      ],
      answer: 1,
      explanation: "In beta-plus decay, a proton converts into a neutron, emitting a positron (e⁺ or ₊₁e⁰) and a neutrino."
    },
    {
      id: "siba-phy-24-171",
      question: "The proton number of a nucleus increases after emission of:",
      options: [
        "Negative β particle",
        "Positive β particle",
        "Proton",
        "Alpha particle",
        "Neutron"
      ],
      answer: 0,
      explanation: "During negative beta decay (β⁻ emission), a neutron converts to a proton, increasing atomic number Z by 1."
    },
    {
      id: "siba-phy-24-175",
      question: "In law of radioactive decay N = N₀ e^(−λt), the ratio N/N₀ is called:",
      options: [
        "Activity",
        "Relative activity",
        "Absolute activity",
        "Stability",
        "Decay constant"
      ],
      answer: 1,
      explanation: "The ratio N / N₀ represents the surviving fraction of undecayed nuclei, also known as relative remaining activity."
    },
  
    // --- SZAMBU 2025 PHYS prep ---
    {
      id: "szambu-2025-phys-131",
      question: "A patient is injected with a radioactive isotope to trace blood flow and detect circulation issues. The isotope used is more likely to be:",
      options: [
        "Iodine-131",
        "Phosphorus-32",
        "Cobalt-60",
        "Sodium-24"
      ],
      answer: 3,
      explanation: "Sodium-24 (in saline solution) is used as a medical radiotracer to study blood circulation and detect arterial blockages."
    },
  
    // --- SZAMBU PHY 24 ---
    {
      id: "szambu-phy-24-139",
      question: "If the half-life of any radioactive nucleus is 0.693 year, what will be the value of decay constant?",
      options: [
        "0.001 s⁻¹",
        "0.01 s⁻¹",
        "0.1 s⁻¹",
        "1 s⁻¹"
      ],
      answer: 3,
      explanation: "Decay constant λ = 0.693 / T₁/₂ = 0.693 / 0.693 year = 1 year⁻¹ (or 1 unit per time interval)."
    },
    {
      id: "szambu-phy-24-147",
      question: "The strength of radiation source is indicated by its activity measured in Becquerel. So, 10 Becquerel is equal to",
      options: [
        "10",
        "100",
        "1000",
        "10000"
      ],
      answer: 0,
      explanation: "1 Becquerel (Bq) is defined as 1 disintegration (decay) per second. Thus, 10 Bq = 10 decays per second."
    },
    {
      id: "szambu-phy-24-164",
      question: "Cancerous thyroid is treated with",
      options: [
        "Chlorine-36",
        "Cobalt-60",
        "Iodine-131",
        "Radium-226"
      ],
      answer: 2,
      explanation: "Iodine-131 concentrates selectively in the thyroid gland and is widely used to treat thyroid cancer and hyperthyroidism."
    },
  
    // --- UHS MDCAT 2025 PHYS prep ---
    {
      id: "uhs-mdcat-2025-phys-130",
      question: "After 3 half-lives, the remaining fraction of a radioactive sample is:",
      options: [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ],
      answer: 2,
      explanation: "Remaining fraction N/N₀ = (1/2)ⁿ. For n = 3 half-lives, N/N₀ = (1/2)³ = 1/8."
    },
  
    // --- UHS PHYS 24 ---
    {
      id: "uhs-phys-24-173",
      question: "The unit of decay constant is",
      options: [
        "m",
        "s",
        "s⁻¹",
        "m⁻¹"
      ],
      answer: 2,
      explanation: "Decay constant λ = (dN/dt) / N, which has units of inverse time (s⁻¹)."
    },
    {
      id: "uhs-phys-24-174",
      question: "If we have “N₀” number of any radioactive element then after a period of “n” half-lives the number of atoms left behind is",
      options: [
        "2ⁿ N₀",
        "(1/2)ⁿ N₀",
        "(1/2 N₀)ⁿ",
        "(2 N₀)ⁿ"
      ],
      answer: 1,
      explanation: "The standard decay formula after n half-lives is N = (1/2)ⁿ N₀."
    },
    {
      id: "uhs-phys-24-175",
      question: "Which of the following is NOT the Somatic biological effect of radiation?",
      options: [
        "Skin burn",
        "Loss of hair",
        "Induction of cancer",
        "Genes mutation"
      ],
      answer: 3,
      explanation: "Gene mutations are genetic (hereditary) effects passed to offspring, whereas skin burns, hair loss, and cancer in the irradiated individual are somatic effects."
    },
    {
      id: "uhs-phys-24-176",
      question: "An artificial radioactive element can be made by bombarding",
      options: [
        "High energy particles on unstable elements",
        "Low energy particles on unstable elements",
        "High energy particles on stable elements",
        "Low energy particles on stable elements"
      ],
      answer: 2,
      explanation: "Artificial radioactivity is induced by bombarding stable target nuclei with high-energy nuclear projectiles (such as alpha particles, protons, or neutrons)."
    },
     // --- TESTMOZ ---
      {
        id: "testmoz-phys-1",
        question: "Both xenon and cesium each have isotopes",
        options: [
          "12",
          "36",
          "33",
          "39"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-2",
        question: "A newly prepared radioactive nucleoid has a decay constant of second inverse. What is the approximate half life of the nuclide?",
        options: [
          "1 hour",
          "1 day",
          "1 week",
          "1 month"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-3",
        question: "At the end of 14 minutes 1/16 of a sample of radioactive polonium remains. The corresponding half life is",
        options: [
          "7/8 min",
          "7/4 min",
          "8/7 min",
          "7/2 min"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-4",
        question: "Among the following select the correct statement",
        options: [
          "The rate of disintegration is directly proportional to the number of atoms present in the sample at that instant",
          "Equal fractions disintegrate in equal intervals of time",
          "Radioactive sample takes infinite time to disintegrate",
          "All"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-5",
        question: "Due to emission of Beta particle by a Thorium nucleus we get",
        options: [
          "Radium",
          "Protactinium",
          "Uranium",
          "Radon"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-6",
        question: "Half life period of Radium is 1600 years. Its average lifetime will be",
        options: [
          "3200 years",
          "4800 years",
          "2319 years",
          "4217 years"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-7",
        question: "Radiation from a point source follows the Inverse Square Law. If the count rate at a distance of 1 m from the counter is 360 counts per minute, the count rate at a distance of 3 m will be",
        options: [
          "90 counts per minute",
          "40 counts per minute",
          "120 counts per minute",
          "45 counts per minute"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-8",
        question: "Half life of iodine-131",
        options: [
          "3 days",
          "16 days",
          "14 days",
          "8 days"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-9",
        question: "In the uranium disintegration series",
        options: [
          "The emission of Beta particle increases the mass number A by 1 and decreases the atomic number by one",
          "The disintegrating element merely ejects atomic electrons",
          "The emission of an Alpha particle decreases the mass number A by 4 and decreases the atomic number Z by 2",
          "The nucleus always remains unaffected"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-10",
        question: "If 10% of a radioactive substance decays in every 5 years, then the percentage of the substance that will be decayed in 20 years is",
        options: [
          "40%",
          "50%",
          "65.6%",
          "34.4%"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-11",
        question: "Half life of a radioactive element can be increased by",
        options: [
          "Increasing temperature",
          "Changing volume",
          "Increasing pressure",
          "Can’t be increased"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-12",
        question: "Alpha particles can produce fluorescence in",
        options: [
          "ZnS",
          "Sodium iodide",
          "Barium platinocyanide",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-13",
        question: "Which one of the following will be a better shield against gamma rays?",
        options: [
          "Ordinary water",
          "Lead",
          "Heavy water",
          "Aluminium"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-14",
        question: "Half life of Radium-226 is",
        options: [
          "1820 years",
          "1620 years",
          "1940 years",
          "1680 years"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-15",
        question: "In Gamma emission the atomic number of the nucleus",
        options: [
          "Increases by 1",
          "Decreases by 1",
          "Decreases by 2",
          "No change"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-16",
        question: "The half life of a certain radioactive element is such that 7/8 of a given quantity decreases in 12 days. What fraction remains undecayed after 24 days?",
        options: [
          "0",
          "1/28",
          "1/64",
          "1/32"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-17",
        question: "Which of the following is a correct statement?",
        options: [
          "Protons and neutrons have exactly the same mass",
          "Gamma rays are higher energy neutrons",
          "Alpha particles are singly ionized Helium nuclei",
          "Beta rays are the same as cathode rays"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-18",
        question: "Which one of the following combinations of radioactive decay results in the formation of an isotope of the original nuclide?",
        options: [
          "Alpha and beta",
          "Alpha and two beta",
          "Two alpha and two beta",
          "Alpha and four beta"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-19",
        question: "Materials can be identified by measuring",
        options: [
          "Hardness",
          "Masses",
          "Densities",
          "Half lives"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-20",
        question: "Heavy radioactive elements eventually turn into",
        options: [
          "Barium",
          "Hydrogen",
          "Lead",
          "Radium"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-21",
        question: "The average distance covered by an Alpha particle in air before its ionizing power ceases is called its",
        options: [
          "Trajectory",
          "Firing level",
          "Range",
          "Limit"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-22",
        question: "In an Alpha decay the disintegration energy appears chiefly as",
        options: [
          "Photon energy",
          "The kinetic energy of the Alpha particle and the daughter nucleus",
          "The excitation energy of the daughter nucleus",
          "The excitation energy of the Alpha particle"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-23",
        question: "In radioactivity the rate of decay",
        options: [
          "Can be increased by a magnetic field",
          "Can be decreased by a magnetic field",
          "Can be kept constant by an electric field",
          "Is not affected by electric and magnetic fields"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-24",
        question: "Alpha, beta and gamma rays emitted by a radioactive substance are passed through a region containing a magnetic field at right angles to their path. The energy gained will be",
        options: [
          "Maximum for alpha rays",
          "Maximum for beta rays",
          "Maximum for gamma rays",
          "0 for all of them"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-25",
        question: "Radioactivity is the phenomenon associated with",
        options: [
          "Production of radio waves",
          "Transmission of radio waves",
          "Reception of radio waves",
          "Decay of the atomic nucleus"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-26",
        question: "A particle having the same mass as an electron and the charge of a proton is called",
        options: [
          "Anti-proton",
          "Gamma rays",
          "Positron",
          "Photon"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-27",
        question: "In which radioactive disintegration does a neutron dissociate into a proton and an electron?",
        options: [
          "Alpha emission",
          "Beta emission",
          "None",
          "Gamma emission"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-28",
        question: "The half life of Radium is about 1600 years. If 100 g of radium exists now, 25 g remains undecayed after",
        options: [
          "4800 years",
          "6400 years",
          "6800 years",
          "3200 years"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-29",
        question: "When a radioactive nucleus emits a beta particle the proton-to-neutron ratio",
        options: [
          "Decreases",
          "Remains the same",
          "Increases",
          "None of the above"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-30",
        question: "Which one of the following processes is not related to radioactive disintegration?",
        options: [
          "Positron emission",
          "Beta decay",
          "Alpha decay",
          "Nuclear fission"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-31",
        question: "A detector is exposed to a radioactive source. Fluctuations in the count rate are observed. What do these fluctuations indicate about radioactive decay?",
        options: [
          "It is random",
          "It is exponential",
          "It is non-linear",
          "It is spontaneous"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-32",
        question: "Beta particles possess greater penetrating power than alpha particles due to their",
        options: [
          "Smaller ionizing power",
          "Same ionizing power",
          "Energy is not conserved",
          "Neither greater nor smaller ionizing power"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-33",
        question: "Half life of iodine-131 is 8 days. It weighs 20 mg. After 4 half lives the amount left undecayed will be",
        options: [
          "2.5 mg",
          "0.625 mg",
          "1.25 mg",
          "0.3125 mg"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-34",
        question: "The weight of a radioactive element is 1 g. After 3 days it becomes 0.25 g. The half life of the element is",
        options: [
          "72 hours",
          "144 hours",
          "36 hours",
          "Impossible fact"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-35",
        question: "In a large collection of nuclei undergoing Alpha decay, the rate of decay at any instant is proportional to",
        options: [
          "The number of undecayed nuclei present at that instant",
          "The time since the decay started",
          "The time remaining before all have decayed",
          "The half life of the decay"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-36",
        question: "Starting with a sample of pure Cu-66, 7/8 of it decays into zinc in 15 minutes. The corresponding half life is",
        options: [
          "15 minutes",
          "7 minutes",
          "5 minutes",
          "3.75 minutes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-37",
        question: "When we compare the ionizing power of alpha, beta and gamma rays it is",
        options: [
          "The same for all three",
          "Maximum for alpha particles",
          "Maximum for beta particles",
          "Maximum for gamma rays"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-38",
        question: "A radioactive element emits 200 particles per second. After three hours 25 particles per second are emitted. The half-life period of the element will be",
        options: [
          "80 minutes",
          "50 minutes",
          "60 minutes",
          "70 minutes"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-39",
        question: "Beta particles have a penetrating power of about",
        options: [
          "100 times more than that of gamma particles",
          "100 times less than that of an alpha ray",
          "100 times more than that of an alpha ray",
          "10 times more than that of an alpha particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-40",
        question: "When a tritium nucleus captures a proton it becomes",
        options: [
          "Neutron",
          "Meson",
          "Alpha particle",
          "Deuteron"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-41",
        question: "Which statement concerning alpha particles is correct?",
        options: [
          "An alpha particle has a charge of +4 electrons",
          "An alpha particle is a helium atom",
          "When alpha particles travel through air they cause ionization",
          "When alpha particles travel through a sheet of gold foil they make the gold radioactive"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-42",
        question: "A beta particle ionizes an atom",
        options: [
          "Through direct collision",
          "Through electrostatic repulsion",
          "Through electrostatic attraction",
          "All of the above"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-43",
        question: "Which one of the following is formed during beta emission?",
        options: [
          "Isobars",
          "Isotones",
          "Isotopes",
          "Isomers"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-44",
        question: "Half life of a radioactive element depends upon",
        options: [
          "Temperature",
          "Amount of element present",
          "Pressure",
          "None of the above"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-45",
        question: "A beta particle is",
        options: [
          "A helium nucleus",
          "A radioactive element",
          "An electron or positron",
          "Any negative particle"
        ],
        answer: 2
      },
      {
        id: "testmoz-phys-46",
        question: "In the nucleus of uranium the number of neutrons will be",
        options: [
          "92",
          "143",
          "235",
          "Different for different isotopes"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-47",
        question: "The path of a beta particle is",
        options: [
          "Rectilinear",
          "Zigzag or erratic",
          "Curved",
          "Elliptical"
        ],
        answer: 0
      },
      {
        id: "testmoz-phys-48",
        question: "The amount of energy equivalent to 1 u is",
        options: [
          "9.315 MeV",
          "93.45 MeV",
          "931 MeV",
          "1.025 MeV"
        ],
        answer: 1
      },
      {
        id: "testmoz-phys-49",
        question: "An alpha particle travels a well-defined distance before coming to rest. This distance is known as the range of the particle. The range depends upon",
        options: [
          "Energy of the particle",
          "Charge of the particle",
          "Mass of the particle",
          "All of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-phys-50",
        question: "Radioactive atom X emits a beta particle. The resulting atom",
        options: [
          "Must be very reactive chemically",
          "Has an atomic number that is one more than that of X",
          "Has a mass number that is one less than that of X",
          "Must be radioactive"
        ],
        answer: 1
      }
  ];