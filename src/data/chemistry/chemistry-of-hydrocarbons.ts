export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const chemistryOfHydrocarbonsQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-91",
      question: "Toluene reacts with bromine in the presence of UV light (side-chain halogenation) to produce:",
      options: [
        "m-bromotoluene",
        "benzylbromide",
        "o-bromotoluene",
        "bromobenzene"
      ],
      answer: 1,
      explanation: "In the presence of UV light or heat, halogenation of toluene occurs via a free-radical mechanism at the methyl side chain to form benzyl bromide (C₆H₅CH₂Br)."
    },
    {
      id: "bumhs-2025-chem-92",
      question: "A terminal or internal alkyne is treated with Lindlar's catalyst (Pd/CaCO₃/quinoline) and Hydrogen. The major product is a:",
      options: [
        "Trans-alkene",
        "Cis-alkene",
        "alkane",
        "vinyl chloride"
      ],
      answer: 1,
      explanation: "Lindlar's catalyst selectively poison-hydrates alkynes via syn-addition of hydrogen to yield cis-alkenes."
    },
    {
      id: "bumhs-2025-chem-93",
      question: "Dehydration of ethanol to form ethene in the presence of concentrated H₂SO₄ is an example of a/an:",
      options: [
        "substitution reaction",
        "addition reaction",
        "elimination reaction",
        "redox reaction"
      ],
      answer: 2,
      explanation: "Dehydration of an alcohol removes H and OH elements to construct a C=C double bond, which is an acidic E1/E2 elimination reaction."
    },
    {
      id: "bumhs-2025-chem-110",
      question: "Which of the following reaction types is the characteristic feature of alkenes?",
      options: [
        "Electrophilic addition",
        "Nucleophilic substitution",
        "Free radical substitution",
        "Elimination"
      ],
      answer: 0,
      explanation: "Alkenes possess a high-density, exposed pi-electron cloud that acts as a nucleophile, making electrophilic addition their primary characteristic reaction."
    },
    {
      id: "bumhs-2025-chem-117",
      question: "Which aromatic compound is more likely (most reactive) to undergo Friedel-Crafts alkylation?",
      options: [
        "benzene",
        "toluene",
        "nitrobenzene",
        "benzaldehyde"
      ],
      answer: 1,
      explanation: "Toluene possesses an electron-donating methyl group (+I effect/hyperconjugation) that activates the benzene ring toward electrophilic aromatic substitution."
    },
    {
      id: "bumhs-2025-chem-118",
      question: "Reaction of toluene with chlorine in the presence of a Lewis acid catalyst (FeCl₃) produces a major mixture of:",
      options: [
        "o-chlorotoluene",
        "m-chlorotoluene",
        "p-chlorotoluene",
        "ortho- and para-chlorotoluene"
      ],
      answer: 3,
      explanation: "The methyl group in toluene is ortho/para-directing; electrophilic aromatic chlorination yields an ortho- and para-chlorotoluene product mixture."
    },
  
    // --- Chemistry SINDH 24 ---
    {
      id: "chem-sindh-24-74",
      question: "The liquid density of pure benzene at room temperature is approximately:",
      options: [
        "0.80 g/cm³",
        "0.88 g/cm³",
        "0.85 g/cm³",
        "0.82 g/cm³",
        "0.08 g/cm³"
      ],
      answer: 1,
      explanation: "The density of liquid benzene at 20°C is ~0.876–0.88 g/cm³."
    },
    {
      id: "chem-sindh-24-76",
      question: "According to Markovnikov's rule, when an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part adds to the double-bonded carbon containing:",
      options: [
        "Highest number of chloride atoms",
        "Lesser number of hydrogen atoms",
        "Highest number of hydrogen atoms",
        "Moderate number of hydrogen atoms",
        "Lesser number of chloride atoms"
      ],
      answer: 1,
      explanation: "Markovnikov's rule states that the electrophilic hydrogen adds to the carbon with more hydrogens, placing the nucleophilic negative part on the carbon with fewer hydrogen atoms."
    },
    {
      id: "chem-sindh-24-81",
      question: "The carbon-carbon (C–C) bond length in benzene is:",
      options: [
        "1.34 Å",
        "1.39 Å",
        "1.56 Å",
        "1.38 Å",
        "1.46 Å"
      ],
      answer: 1,
      explanation: "Due to full resonance delocalization, C–C bond lengths in benzene are intermediate between single (1.54 Å) and double (1.34 Å) bonds, equal to 1.39 Å (139 pm)."
    },
    {
      id: "chem-sindh-24-114",
      question: "The number of five-membered (pentagons) and six-membered (hexagons) rings in Buckminsterfullerene (C₆₀) are respectively:",
      options: [
        "40 and 20",
        "12 and 12",
        "5 and 15",
        "14 and 14",
        "12 and 20"
      ],
      answer: 4,
      explanation: "A standard C₆₀ fullerene (buckyball) truncated icosahedron structure contains exactly 12 pentagonal rings and 20 hexagonal rings."
    },
    {
      id: "chem-sindh-24-121",
      question: "These unsaturated hydrocarbons contain one or more double or triple carbon-carbon bonds in their structure:",
      options: [
        "Alkenes and alcohol",
        "Alkenes and cycloalkanes",
        "Alkanes and alkyl halides",
        "Alkenes and alkynes",
        "Alkanes and alkenes"
      ],
      answer: 3,
      explanation: "Alkenes possess C=C double bonds and alkynes possess C≡C triple bonds."
    },
  
    // --- Chemistry SINDH 25 ---
    {
      id: "chem-sindh-25-98",
      question: "The IUPAC name of CH₃(CH₂)₄CH(CH₃)₂ is:",
      options: [
        "2-methylheptane",
        "3-methylheptane",
        "4-methylheptane",
        "Octane"
      ],
      answer: 0,
      explanation: "Expanding CH₃–CH₂–CH₂–CH₂–CH₂–CH(CH₃)₂ gives an 8-carbon chain overall, with the longest continuous chain containing 7 carbons (heptane) and a methyl substituent at C-2."
    },
    {
      id: "chem-sindh-25-99",
      question: "The IUPAC name of C₂H₅CH=C(C₃H₇)C₂H₅ is:",
      options: [
        "1,2-diethyl-2-propylethene",
        "3-ethylhept-3-ene",
        "4-ethylhept-3-ene",
        "4-ethylhept-2-ene"
      ],
      answer: 2,
      explanation: "The longest chain containing the double bond is 7 carbons (heptene). Numbering from the end closer to the double bond gives C-3 for the alkene double bond and an ethyl substituent at C-4: 4-ethylhept-3-ene."
    },
    {
      id: "chem-sindh-25-103",
      question: "Which reagent and conditions convert toluene to p-chlorotoluene?",
      options: [
        "Cl₂ in the dark",
        "Cl₂ in the presence of AlCl₃ (or FeCl₃)",
        "Cl₂ in presence of UV Light",
        "Concentrated HCl heated under reflux"
      ],
      answer: 1,
      explanation: "Electrophilic aromatic ring chlorination of toluene requires a Lewis acid catalyst like AlCl₃ or FeCl₃ to yield ortho- and para-chlorotoluene."
    },
    {
      id: "chem-sindh-25-105",
      question: "The IUPAC name of CH₂=CHCl (Vinyl chloride) is:",
      options: [
        "Chloroethane",
        "Chloroethyne",
        "Chloroethene",
        "Ethylchloride"
      ],
      answer: 2,
      explanation: "CH₂=CHCl consists of a 2-carbon alkene chain with a chlorine atom attached, systematically named Chloroethene."
    },
    {
      id: "chem-sindh-25-111",
      question: "The IUPAC name of Vinyl acetylene (CH₂=CH–C≡CH) is:",
      options: [
        "But-1-en-3-yne",
        "But-3-en-1-yne",
        "Pent-3-en-1-yne",
        "Pent-2-en-4-yne"
      ],
      answer: 0,
      explanation: "When alkene and alkyne functional groups are at equivalent terminal positions (C-1 vs C-3), the double bond receives numerical priority: But-1-en-3-yne."
    },
    {
      id: "chem-sindh-25-118",
      question: "Which of the following statements is NOT true regarding benzene?",
      options: [
        "sp² hybridization of carbon atoms",
        "Fractional C–C bond order of 1.5",
        "It undergoes elimination reactions easily",
        "6 equivalent sites for monosubstitution"
      ],
      answer: 2,
      explanation: "Benzene undergoes electrophilic substitution reactions while preserving its stable aromatic pi-ring system; it does not typically undergo elimination reactions."
    },
  
    // --- KMU MDCAT 25 CHEM ---
    {
      id: "kmu-mdcat-25-chem-118",
      question: "In the free-radical chlorination of methane, the attack of a chlorine free radical (Cl•) on methane (CH₄ + Cl• → •CH₃ + HCl) occurs during which phase?",
      options: [
        "Before initiation",
        "Initiation",
        "Propagation",
        "Termination"
      ],
      answer: 2,
      explanation: "The reaction of a chlorine radical with methane to form a methyl radical and HCl is the first propagation step."
    },
    {
      id: "kmu-mdcat-25-chem-122",
      question: "What makes ethene significantly more reactive than ethane toward electrophilic addition (such as rapid decolorization of bromine water)?",
      options: [
        "Ethene has a higher molecular mass",
        "Ethene contains a weak and exposed pi bond",
        "Ethene contains fewer sigma bonds",
        "Ethene undergoes substitution more readily"
      ],
      answer: 1,
      explanation: "The pi-bond in ethene consists of sideway-overlapped p-orbitals located above and below the molecular plane, making its electrons weakly bound and exposed to electrophilic attack."
    },
    {
      id: "kmu-mdcat-25-chem-123",
      question: "What best describes electrophilic substitution in benzene?",
      options: [
        "Addition of an electrophile across a double bond",
        "Substitution of a halogen by a nucleophile",
        "Substitution of a proton (H⁺) by an electrophile on the aromatic ring",
        "Substitution of a methyl group by a nucleophile"
      ],
      answer: 2,
      explanation: "Electrophilic aromatic substitution involves the replacement of a ring hydrogen atom (proton, H⁺) by an incoming electrophile (E⁺), retaining aromatic resonance stability."
    },
    {
      id: "kmu-mdcat-25-chem-142",
      question: "The acid-catalyzed hydration (addition of water in presence of H₂SO₄) of propene yields:",
      options: [
        "Propan-1-ol",
        "Propan-2-ol",
        "Butanol",
        "Ethanol"
      ],
      answer: 1,
      explanation: "Acid-catalyzed addition of H₂O to CH₃–CH=CH₂ follows Markovnikov's rule: H⁺ adds to C-1 and OH⁻ adds to the secondary carbon C-2 to produce Propan-2-ol."
    },
    {
      id: "kmu-mdcat-25-chem-157",
      question: "The IUPAC name for CH≡C–CH₂–CH₂–CH₃ is:",
      options: [
        "pent-1-yne",
        "pent-2-yne",
        "pent-3-yne",
        "pentyne"
      ],
      answer: 0,
      explanation: "A 5-carbon alkane chain with a triple bond at C-1 is systematically named pent-1-yne."
    },
    {
      id: "kmu-mdcat-25-chem-162",
      question: "The six pi-electrons in the molecular orbitals of benzene are:",
      options: [
        "Localized",
        "Delocalized",
        "Hybridized",
        "Polarized"
      ],
      answer: 1,
      explanation: "Benzene features a continuous cyclic cloud of delocalized pi-electrons above and below the planar ring carbon framework."
    },
  
    // --- KMU MDCAT 2024 ---
    {
      id: "kmu-mdcat-2024-112",
      question: "Addition of HBr to isobutylene ((CH₃)₂C=CH₂) mainly gives:",
      options: [
        "isobutyl bromide",
        "n-butyl bromide",
        "sec-butyl bromide",
        "tert-butyl bromide"
      ],
      answer: 3,
      explanation: "By Markovnikov's rule, H⁺ attaches to the =CH₂ carbon, forming a stable tertiary carbocation intermediate ((CH₃)₃C⁺), which combines with Br⁻ to yield tert-butyl bromide."
    },
  
    // --- Szambu Chem 24 ---
    {
      id: "szambu-chem-24-71",
      question: "Which hydrocarbon is used as the hypothetical baseline reference to calculate the resonance stabilization energy of benzene?",
      options: [
        "Cyclohexane",
        "Cyclohexene",
        "1,3,5-cyclohexene",
        "1,3,5-cyclohexatriene"
      ],
      answer: 1,
      explanation: "Enthalpy of hydrogenation of cyclohexene (−119.5 kJ/mol) multiplied by 3 gives the expected value for localized 1,3,5-cyclohexatriene (−358.5 kJ/mol), against which benzene's actual value (−208 kJ/mol) is compared."
    },
    {
      id: "szambu-chem-24-73",
      question: "Which type of catalyst is required to generate a strong electrophile during electrophilic aromatic substitution of benzene?",
      options: [
        "Amphoteric",
        "Lewis acid",
        "Lewis base",
        "Transition metals"
      ],
      answer: 1,
      explanation: "Lewis acids (such as AlCl₃, FeCl₃, FeBr₃) polarize and accept electron pairs from halogen reagents to generate reactive electrophiles."
    },
  
    // --- SZAMBU CHEM 25 ---
    {
      id: "szambu-chem-25-1",
      question: "Which of the following hydrocarbons reacts with ammoniacal cuprous chloride (Cu₂Cl₂/NH₄OH) to form a red precipitate?",
      options: [
        "1-butene",
        "1-butyne",
        "2-butene",
        "2-butyne"
      ],
      answer: 1,
      explanation: "Terminal alkynes like 1-butyne possess acidic sp-hybridized C–H bonds that react with ammoniacal cuprous chloride to yield insoluble copper alkynide precipitates."
    },
    {
      id: "szambu-chem-25-2",
      question: "Which step sequence converts benzene to 2-chlorotoluene (or o-chlorotoluene)?",
      options: [
        "CH₃Cl/AlCl₃ (Friedel-Crafts alkylation) followed by Cl₂/FeCl₃",
        "CH₃Cl/AlCl₃ followed by Cl₂ in the presence of diffused sunlight",
        "Cl₂/FeCl₃ followed by CH₃Cl in the presence of diffused sunlight",
        "Cl₂/UV followed by CH₃Cl in the presence of anhydrous FeCl₃"
      ],
      answer: 0,
      explanation: "First alkylating benzene with CH₃Cl/AlCl₃ yields toluene. Subsequent chlorination with Cl₂/FeCl₃ directs the chlorine to ortho/para positions, producing 2-chlorotoluene."
    },
    {
      id: "szambu-chem-25-3",
      question: "Addition of three molecules of chlorine (Cl₂) to benzene under UV light to form benzene hexachloride proves that benzene ring has:",
      options: [
        "3 double bonds",
        "non polar",
        "polar",
        "non planar"
      ],
      answer: 0,
      explanation: "The addition of 3 moles of Cl₂ or H₂ per mole of benzene under forcing conditions confirms the presence of 3 formal double bonds in its un-delocalized kekulé structure."
    },
    {
      id: "szambu-chem-25-4",
      question: "When propyne (CH₃–C≡CH) is treated with excess hydrochloric acid (2 moles of HCl), the major final product is:",
      options: [
        "1,1-dichloropropane",
        "1,2-dichloropropane",
        "2,2-dichloropropane",
        "1,2-dichloropropene"
      ],
      answer: 2,
      explanation: "Addition of two consecutive moles of HCl according to Markovnikov's rule places both chlorine atoms on the central carbon C-2, forming 2,2-dichloropropane."
    },
    {
      id: "szambu-chem-25-5",
      question: "Which reagent mixture is commonly used to perform double dehydrohalogenation of a vicinal dihalide to synthesize an alkyne?",
      options: [
        "H₂ and catalyst",
        "Alcoholic KOH / NaNH₂",
        "KMnO₄",
        "LiAlH₄"
      ],
      answer: 1,
      explanation: "Strong bases like alcoholic KOH (for first HX removal) followed by NaNH₂ in liquid NH₃ (for second HX removal) convert vicinal dihalides into alkynes."
    },
  
    // --- UHS 2024 CHEM ---
    {
      id: "uhs-2024-chem-109",
      question: "Which of the following substituent groups is an electron-donating group (activating group) to the benzene ring?",
      options: [
        "–CN",
        "–NR₃⁺",
        "–NH₂",
        "–NO₂"
      ],
      answer: 2,
      explanation: "The amino group (–NH₂) has a unshared lone pair on nitrogen that donates electron density into the benzene pi-system (+M resonance effect)."
    },
    {
      id: "uhs-2024-chem-111",
      question: "In Friedel-Crafts acylation, an acyl group (RCO–) is introduced into the benzene ring in the presence of which catalyst?",
      options: [
        "AlCl₃",
        "H₂SO₄",
        "Sunlight",
        "V₂O₅"
      ],
      answer: 0,
      explanation: "Anhydrous Aluminum Chloride (AlCl₃) acts as a Lewis acid catalyst to generate the acylium ion (RCO⁺) electrophile."
    },
  
    // --- UHS CHEM 25 ---
    {
      id: "uhs-chem-25-87",
      question: "The double dehydrohalogenation conversion of a vicinal dihaloalkane into an alkyne does NOT involve which reaction type?",
      options: [
        "Addition",
        "Elimination",
        "Base",
        "Heat"
      ],
      answer: 0,
      explanation: "Preparing alkynes from dihaloalkanes proceeds via successive elimination (β-elimination) steps using strong bases; it is an elimination reaction, not an addition reaction."
    },
    {
      id: "uhs-chem-25-98",
      question: "Terminal alkynes display weak acidic character (ability to release H⁺) because:",
      options: [
        "Terminal carbon atoms are sp hybridized.",
        "Terminal carbon atoms are sp² hybridized.",
        "Terminal carbon atoms are sp³ hybridized.",
        "Terminal carbon atoms show hydrogen bonding."
      ],
      answer: 0,
      explanation: "An sp-hybridized carbon has 50% s-character, making it highly electronegative. This strongly polarizes the ≡C–H bond and stabilizes the conjugate acetylide anion."
    },
    {
      id: "uhs-chem-25-108",
      question: "What is the general requirement to initiate free-radical substitution halogenation of alkanes?",
      options: [
        "low pressure",
        "low temperature",
        "high pressure",
        "heat or UV light"
      ],
      answer: 3,
      explanation: "Homolytic cleavage of halogen molecules (X₂ → 2X•) requires energy provided by ultraviolet (UV) light or high temperatures."
    },
    {
      id: "uhs-chem-25-109",
      question: "Which one of the following is NOT a characteristic property of benzene?",
      options: [
        "Aromaticity",
        "Exceptional thermodynamic stability",
        "Obeying Huckel's 4n+2 rule",
        "High chemical reactivity towards addition reactions"
      ],
      answer: 3,
      explanation: "Benzene is exceptionally stable due to aromatic resonance energy and resists addition reactions under normal conditions."
    },
    {
      id: "uhs-chem-25-124",
      question: "Electrophilic chlorination of benzene in the presence of Iron(III) chloride (FeCl₃) proceeds via which mechanism?",
      options: [
        "Electrophilic addition",
        "Electrophilic Substitution",
        "Free radical Substitution",
        "Free radical halogenation"
      ],
      answer: 1,
      explanation: "Chlorination of the benzene ring in the presence of a Lewis acid catalyst proceeds via an Electrophilic Aromatic Substitution (S_EAr) mechanism."
    }
  ];