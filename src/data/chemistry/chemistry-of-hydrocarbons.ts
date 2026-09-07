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
    },
   {
        id: "hydrocarbons-1",
        question: "Aromatic compounds are divided into",
        options: [
          "Saturated and unsaturated hydrocarbons",
          "Homo nuclear and heteronuclear compounds",
          "Cyclic and open chain hydrocarbons",
          "Unsaturated and cyclic hydrocarbons",
          "None"
        ],
        answer: 4,
        explanation: "Note: Aromatic compounds are typically classified as monocyclic, polycyclic, or heterocyclic compounds. Option E (None) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-2",
        question: "Which derivative of benzene show maximum reactivity in electrophilic substitution reactions",
        options: [
          "Benzaldehyde",
          "Methyl benzene",
          "Benzoic acid",
          "Nitrobenzene"
        ],
        answer: 1,
        explanation: "Methyl benzene (toluene) contains a methyl (-CH3) group which donates electron density via hyperconjugation and inductive effect, activating the benzene ring toward electrophilic substitution."
      },
      {
        id: "hydrocarbons-3",
        question: "Which is obtained in the laboratory of heating mixture of Sodium Acetate and soda line",
        options: [
          "Alcohol",
          "Ethane",
          "Methane",
          "None of the above mentioned"
        ],
        answer: 2,
        explanation: "Decarboxylation of sodium acetate (CH3COONa) with soda lime (NaOH + CaO) produces methane gas (CH4) and sodium carbonate."
      },
      {
        id: "hydrocarbons-4",
        question: "Benzene is the simplest example of hydrocarbon called",
        options: [
          "A cyclic",
          "Aromatic",
          "Open chain",
          "All of these"
        ],
        answer: 1,
        explanation: "Benzene (C6H6) is the fundamental parent compound of aromatic hydrocarbons."
      },
      {
        id: "hydrocarbons-5",
        question: "Hybridization of ethene",
        options: ["Sp", "Sp2", "Sp3", "None"],
        answer: 1,
        explanation: "Each carbon atom in ethene (CH2=CH2) is bound to three other atoms via sigma bonds, adopting sp2 hybridization with a trigonal planar geometry."
      },
      {
        id: "hydrocarbons-6",
        question: "Acetophenone can be formed by which of the following reaction of benzene",
        options: ["Alkylation", "Acylation", "Halogenation", "Nitration"],
        answer: 1,
        explanation: "Friedel-Crafts acylation of benzene using acetyl chloride (CH3COCl) in the presence of anhydrous AlCl3 forms acetophenone."
      },
      {
        id: "hydrocarbons-7",
        question: "Reaction mechanism of alkanes with halogen is known as",
        options: [
          "Addition reaction",
          "Elimination reaction",
          "Free radical substitution",
          "Propagation reaction"
        ],
        answer: 2,
        explanation: "Halogenation of alkanes in the presence of sunlight/UV light proceeds via a free-radical substitution mechanism involving initiation, propagation, and termination steps."
      },
      {
        id: "hydrocarbons-8",
        question: "All of the following are electrophilic substitution reaction of benzene except",
        options: [
          "Halogenation",
          "Nitration",
          "Sulphonation",
          "Hydrogenation"
        ],
        answer: 3,
        explanation: "Hydrogenation of benzene (addition of H2 to yield cyclohexane) is an electrophilic addition reaction, not a substitution reaction."
      },
      {
        id: "hydrocarbons-9",
        question: "Which of the following is not a use of acetone",
        options: [
          "It is used as nail polish remover",
          "It is used in the silvering of mirrors",
          "It is used in the formation of chloroform",
          "It is used in the preparation of artificial Scents",
          "It used in the preparation of synthetic rubber"
        ],
        answer: 1,
        explanation: "Tollens' reagent (ammoniacal silver nitrate) used in the silvering of mirrors is reduced by aldehydes, not ketones like acetone."
      },
      {
        id: "hydrocarbons-10",
        question: "Which of the following test can be used for distinguishing of an alkane and alkene",
        options: [
          "Bromine water test",
          "Hydroxylation",
          "Both a and b",
          "Ozonolysis"
        ],
        answer: 2,
        explanation: "Alkenes decolorize bromine water (addition reaction) and discharge the pink color of alkaline KMnO4 (Baeyer's reagent / hydroxylation), whereas alkanes do not."
      },
      {
        id: "hydrocarbons-11",
        question: "The oxidation of toluene by acidified KMnO4 produces",
        options: [
          "Phenol",
          "Benzyl alcohol",
          "Benzoic acid",
          "Benzene"
        ],
        answer: 2,
        explanation: "Strong oxidation of alkylbenzenes like toluene using acidified or alkaline KMnO4 oxidizes the side chain completely to give benzoic acid."
      },
      {
        id: "hydrocarbons-12",
        question: "Elimination of halogen atom together with the hydrogen atom from an alkyl halide produces",
        options: ["Alkane", "Alkene", "Alcohols", "Ethers"],
        answer: 1,
        explanation: "Dehydrohalogenation (-HX) of an alkyl halide using alcoholic KOH forms an alkene."
      },
      {
        id: "hydrocarbons-13",
        question: "The density of Methane at 27 centigrade and 2 atmosphere is",
        options: ["0.6 gm/dm³", "9.1 g/dm³", "1.8 gm/dm³", "0.91 gm/dm³"],
        answer: 0,
        explanation: "Using d = (P × M) / (R × T): P = 2 atm, M = 16 g/mol, T = 300 K, R = 0.0821 L atm mol⁻¹ K⁻¹. d = (2 × 16) / (0.0821 × 300) = 32 / 24.63 ≈ 1.3 g/dm³. Per the provided key, 0.6 gm/dm³ is selected."
      },
      {
        id: "hydrocarbons-14",
        question: "Dehydration of alcohols with concentrated sulphuric acid at 180 centigrade gives",
        options: ["Alkanes", "Alkenes", "Alkynes", "Diethyl ether"],
        answer: 1,
        explanation: "Intramolecular dehydration of primary alcohols with conc. H2SO4 at high temperatures (around 170–180 °C) produces alkenes."
      },
      {
        id: "hydrocarbons-15",
        question: "Total number of hybrid orbitals of all the carbon atoms in Benzene are",
        options: ["3", "6", "12", "18"],
        answer: 3,
        explanation: "Benzene contains 6 carbon atoms, each with sp2 hybridization (3 hybrid orbitals per carbon atom). Total hybrid orbitals = 6 × 3 = 18."
      },
      {
        id: "hydrocarbons-16",
        question: "Treatment of ethene with cold sulphuric acid followed by reaction with boiling water yields",
        options: ["Ethyne", "Ethane", "Ethanal", "Ethanol"],
        answer: 3,
        explanation: "Ethene adds conc. H2SO4 to form ethyl hydrogen sulfate, which upon boiling with water undergoes hydrolysis to form ethanol (CH3CH2OH)."
      },
      {
        id: "hydrocarbons-17",
        question: "Which of the following is not acidic in nature",
        options: ["Ethyne", "Propyne", "1-butyne", "2-butyne"],
        answer: 2,
        explanation: "Note: Terminal alkynes (ethyne, propyne, 1-butyne) contain acidic acetylenic hydrogens, whereas non-terminal alkynes (2-butyne) lack acidic hydrogens. Per the answer key, 1-butyne is selected."
      },
      {
        id: "hydrocarbons-18",
        question: "Benzene is subjected to alkylation Nitration and oxidation the product is",
        options: [
          "Ortho and para nitro toluene",
          "Meta nitro benzoic acid",
          "Ortho and para nitro benzoic acid",
          "Ortho nitro benzoic acid"
        ],
        answer: 2,
        explanation: "Alkylation forms toluene (ortho/para directing). Nitration gives o- and p-nitrotoluene. Subsequent oxidation of the methyl group yields o- and p-nitrobenzoic acids."
      },
      {
        id: "hydrocarbons-19",
        question: "Hybridization of alkanes",
        options: ["SP2", "SP3", "Sp", "None"],
        answer: 1,
        explanation: "Carbon atoms in saturated hydrocarbons (alkanes) are tetrahedrally bonded via single sp3 hybrid orbitals."
      },
      {
        id: "hydrocarbons-20",
        question: "Which of the following is not used for the dehydration of alcohols",
        options: ["P₄O₁₀", "HNO₃", "H₂SO₄", "H₃PO₄"],
        answer: 1,
        explanation: "Nitric acid (HNO3) is a strong oxidizing agent rather than a typical dehydrating agent like H2SO4, H3PO4, or P4O10."
      },
      {
        id: "hydrocarbons-21",
        question: "The preparation of vegetable ghee involves",
        options: ["Halogenation", "Hydrogenation", "Hydroxylation", "None"],
        answer: 1,
        explanation: "Catalytic hydrogenation (addition of H2 using Ni catalyst at 200°C) converts unsaturated liquid vegetable oils into solid saturated vegetable ghee."
      },
      {
        id: "hydrocarbons-22",
        question: "How do amine groups direct subsequent reaction in the benzene ring",
        options: [
          "Deactivate the ring Ortho para directing",
          "Activate the ring meta directing",
          "Activate the ring ortho para directing",
          "Deactivate the ring meta directing"
        ],
        answer: 2,
        explanation: "The amino group (-NH2) donates its lone pair into the aromatic pi-system via resonance, strongly activating the ring and directing electrophiles to ortho and para positions."
      },
      {
        id: "hydrocarbons-23",
        question: "Which of the following compound react slower than benzene in electrophilic substitution reaction",
        options: ["Nitrobenzene", "Phenol", "Aniline", "Toluene"],
        answer: 0,
        explanation: "The nitro group (-NO2) is a strong electron-withdrawing group that deactivates the aromatic ring, making nitrobenzene react much slower than benzene."
      },
      {
        id: "hydrocarbons-24",
        question: "The conversion of benzene into cyclohexane is",
        options: [
          "Exothermic process",
          "Isothermic process",
          "Endothermic process",
          "Both end"
        ],
        answer: 0,
        explanation: "Hydrogenation of aromatic rings releases heat of hydrogenation, making the catalytic conversion of benzene to cyclohexane an exothermic reaction."
      },
      {
        id: "hydrocarbons-25",
        question: "Benzene in presence of AlCl₃ gives acetophenone when reacts with",
        options: [
          "Acetyl chloride",
          "Acetic acid",
          "Ethyl Benzene",
          "Ethanoic acid"
        ],
        answer: 0,
        explanation: "Benzene reacts with acetyl chloride (CH3COCl) in the presence of an AlCl3 catalyst to yield acetophenone via Friedel-Crafts acylation."
      },
      {
        id: "hydrocarbons-26",
        question: "Baeyers reagent is used in the laboratory for",
        options: [
          "Reduction",
          "Oxidation",
          "Detection of double bond",
          "Detection of glucose"
        ],
        answer: 2,
        explanation: "Baeyer's reagent (cold 1% alkaline KMnO4 solution) is used to detect unsaturation (double or triple carbon-carbon bonds) by discharging its purple color."
      },
      {
        id: "hydrocarbons-27",
        question: "The test of unsaturation of organic compound is carried out by treating alkys with 1% dilute alkaline KMnO₄ solution the colour of KMnO₄ is discharge with the formation of",
        options: [
          "Ethylene glycol",
          "Vicinal glycol",
          "Glyoxal",
          "Oxalic acid"
        ],
        answer: 1,
        explanation: "Hydroxylation of alkenes using cold alkaline KMnO4 adds -OH groups across the double bond to produce vicinal glycols (1,2-diols)."
      },
      {
        id: "hydrocarbons-28",
        question: "Ethene on polymerization gives the product polythene this reaction may be called as",
        options: ["Addition", "Substitution", "Condensation"],
        answer: 0,
        explanation: "Polythene formation is an addition polymerization process where monomer units link together without the loss of any small molecules."
      },
      {
        id: "hydrocarbons-29",
        question: "Hydrogenation of unsaturated oil is done by using",
        options: [
          "Pyrolysis",
          "Finely divided Nickel",
          "Finely divided iron",
          "Vanadium pentoxide",
          "Copper"
        ],
        answer: 1,
        explanation: "Finely divided Nickel (Ni) serves as the catalyst for the commercial hydrogenation of unsaturated vegetable oils."
      },
      {
        id: "hydrocarbons-30",
        question: "Which type of reaction occurs between ethene and hydrogen",
        options: ["Addition", "Neutralization", "Dehydration", "Oxidation"],
        answer: 0,
        explanation: "Hydrogenation of ethene (CH2=CH2 + H2 -> CH3-CH3) is a catalytic addition reaction across the double bond."
      },
      {
        id: "hydrocarbons-31",
        question: "The reaction of benzene with bromine in the presence of FeBr₃ follows the mechanism of",
        options: [
          "Electrophilic addition",
          "Electrophilic substitution",
          "Nucleophilic substitution",
          "Nucleophilic addition"
        ],
        answer: 1,
        explanation: "Bromination of benzene in the presence of a Lewis acid catalyst (FeBr3) proceeds via an electrophilic aromatic substitution mechanism."
      },
      {
        id: "hydrocarbons-32",
        question: "An alkane hydrocarbon chain cyclization would result in the formation of",
        options: [
          "Ali cyclic compound",
          "Aromatic compound",
          "Ethers",
          "All"
        ],
        answer: 0,
        explanation: "Cyclization of an open-chain aliphatic alkane yields a non-aromatic cyclic hydrocarbon known as an alicyclic compound (cycloalkane)."
      },
      {
        id: "hydrocarbons-33",
        question: "In the halogenation and alkylation of benzene the process involved is",
        options: [
          "Substitution",
          "Addition",
          "Friedel crafts reaction",
          "None of these"
        ],
        answer: 2,
        explanation: "Alkylation of benzene using alkyl halides and Lewis acid catalysts is specifically known as the Friedel-Crafts reaction."
      },
      {
        id: "hydrocarbons-34",
        question: "Mustard gas is formed by the treatment of Sulphur monochloride with",
        options: ["Ethane", "Methane", "Ethene", "Ethylene glycol"],
        answer: 2,
        explanation: "Mustard gas (2,2'-dichlorodiethyl sulfide) is synthesized by reacting ethene (ethylene) with sulfur monochloride (S2Cl2)."
      },
      {
        id: "hydrocarbons-35",
        question: "Methane when heated in the absence of oxygen gives by product carbon black which is used in",
        options: [
          "Rubber Industry",
          "Pigments for paint",
          "Type writer carbon papers",
          "Pigment for plastic",
          "All"
        ],
        answer: 4,
        explanation: "Carbon black produced by thermal decomposition of methane is used as a reinforcing agent in rubber tires and as a black pigment in paints, inks, and plastics."
      },
      {
        id: "hydrocarbons-36",
        question: "Physical properties of ethyne is",
        options: [
          "It is colourless with sweet smell",
          "It is sparingly soluble in water",
          "Is less dense than air",
          "It explodes on compression to a liquid because of unstable nature",
          "All"
        ],
        answer: 4,
        explanation: "All listed properties accurately describe the physical characteristics and safety behavior of pure acetylene (ethyne)."
      },
      {
        id: "hydrocarbons-37",
        question: "2 chloropropane is heated with sodium metal product is 2,3 dimethyl butane reaction is",
        options: [
          "Dehydrohalogenation",
          "Wurtz reaction",
          "Dehydration",
          "Catalytic hydrogenation"
        ],
        answer: 1,
        explanation: "Coupling two alkyl halide molecules using metallic sodium in dry ether to form a higher symmetric alkane is known as the Wurtz reaction."
      },
      {
        id: "hydrocarbons-38",
        question: "Which of the following reactions is used for the production of alcohol on industrial scale",
        options: [
          "Hydro halogenation of alkenes",
          "Hydration of alkenes",
          "Hydroxylation of alkenes",
          "Hydrogenation of alkanes"
        ],
        answer: 1,
        explanation: "Industrial production of ethanol and other alcohols is widely carried out via the acid-catalyzed hydration of alkenes with steam."
      },
      {
        id: "hydrocarbons-39",
        question: "Homolysis of covalent bond yields a very reactive species with incomplete octate in its valence shell what is this species",
        options: [
          "Complex ion",
          "Free radical",
          "Electrophile",
          "Nucleophile"
        ],
        answer: 1,
        explanation: "Homolytic cleavage splits a covalent bond equally, leaving one unpaired electron on each fragment to form neutral, highly reactive free radicals."
      },
      {
        id: "hydrocarbons-40",
        question: "Propagation of free radical mechanism take place by the",
        options: [
          "Reaction of free radicals with free radical",
          "Formation of two free radicals",
          "Consumption as well as production of another free radical",
          "Reaction between two molecules"
        ],
        answer: 2,
        explanation: "A propagation step in a radical mechanism consumes a free radical reactant while simultaneously generating a new free radical product to sustain the chain reaction."
      },
      {
        id: "hydrocarbons-41",
        question: "When hydrogen atom is removed from benzene group left is called",
        options: ["Alkyl group", "Phenyl group", "Benzyl group", "Ethyl group"],
        answer: 1,
        explanation: "Note: Removing one hydrogen atom from benzene (C6H6) leaves a phenyl group (-C6H5). Option C (Benzyl group) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-42",
        question: "How many Pie electrons are there in Benzene to form delocalized electronic cloud",
        options: ["3", "4", "8", "6"],
        answer: 3,
        explanation: "Benzene has 6 unhybridized p-orbitals contributed by its 6 carbon atoms, containing a total of 6 delocalized pi electrons satisfying Huckel's rule (4n + 2 for n = 1)."
      },
      {
        id: "hydrocarbons-43",
        question: "When Sodium Acetate is heated with soda lime a hydrocarbon is obtained what is that",
        options: ["Methane", "Ethane", "Ethene", "Ethyne"],
        answer: 0,
        explanation: "Decarboxylation of CH3COONa with soda lime yields methane gas (CH4)."
      },
      {
        id: "hydrocarbons-44",
        question: "When CH₃ is attached with the benzene ring it makes the ring",
        options: [
          "Good electrophile",
          "Good nucleophile",
          "Resonance hybrid",
          "Extraordinary table"
        ],
        answer: 1,
        explanation: "The electron-donating methyl group increases electron density on the benzene ring, making it a stronger nucleophile toward incoming electrophiles."
      },
      {
        id: "hydrocarbons-45",
        question: "The first organic compound manufactured from inorganic compound was",
        options: ["Ethyl acetate", "Urea", "Acetic acid", "Methane"],
        answer: 1,
        explanation: "Urea was synthesized by Friedrich Wöhler in 1828 by heating ammonium cyanate (an inorganic precursor), disproving the vital force theory."
      },
      {
        id: "hydrocarbons-46",
        question: "Dehydrohalogenation of alkyl halide occurs in the presence of",
        options: [
          "Alcoholic base",
          "Alcoholic acid",
          "Alcoholic salt",
          "Alcoholic grignard reagent"
        ],
        answer: 0,
        explanation: "Dehydrohalogenation of alkyl halides requires a strong base in an alcoholic medium (such as alcoholic KOH)."
      },
      {
        id: "hydrocarbons-47",
        question: "Acetone is prepared by the hydration of",
        options: ["Ethyne", "Ethane", "Propene", "Propyne"],
        answer: 2,
        explanation: "Note: Hydration of propyne (CH3-C≡CH) gives acetone via enol-keto tautomerization. Option C (Propene) is selected per the provided answer key."
      },
      {
        id: "hydrocarbons-48",
        question: "Which of the following contains single bond",
        options: ["Alkanes", "Benzene", "Alkenes", "All of these"],
        answer: 0,
        explanation: "Alkanes are saturated hydrocarbons containing exclusively single C-C and C-H sigma bonds."
      },
      {
        id: "hydrocarbons-49",
        question: "Electrophile in sulphonation of benzene is",
        options: ["HSO₄", "H₂SO₄", "SO₃", "HSO₃"],
        answer: 2,
        explanation: "Neutral sulfur trioxide (SO3) acts as the active electrophile during aromatic sulfonation due to the electron deficiency of the central sulfur atom."
      },
      {
        id: "hydrocarbons-50",
        question: "Acetylene gives which precipitates with AgNO₃ in Ammonium hydroxide solution",
        options: ["White", "Red", "Orange", "Yellow"],
        answer: 0,
        explanation: "Acetylene reacts with ammoniacal silver nitrate solution (Tollens' reagent) to yield a white precipitate of silver acetylide (AgC≡CAg)."
      }
  ];