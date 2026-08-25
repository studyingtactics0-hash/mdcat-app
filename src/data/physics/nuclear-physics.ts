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
    }
  ];