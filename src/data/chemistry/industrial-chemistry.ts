export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const industrialChemistryQuestions: Question[] = [
    // --- BUMHS 2025 CHEM ---
    {
      id: "bumhs-2025-chem-86",
      question: "Which monomer is used alongside adipic acid for the synthesis of Nylon 6,6?",
      options: [
        "sebacoyl chloride",
        "methylene diamine",
        "heptane-1,7-dioic acid",
        "hexamethylene diamine"
      ],
      answer: 3,
      explanation: "Nylon 6,6 is synthesized by condensation polymerization of two 6-carbon monomers: adipic acid (hexanedioic acid) and hexamethylene diamine (1,6-diaminohexane)."
    },
    {
      id: "nums-2026-bio-038",
      question: "Some industries are continuously polluting aquatic bodies. This can affect the metabolic pathway of plants by changing their pH.",
      options: ["More alkaline", "More acidic", "Less acidic", "Less alkaline"],
      answer: 1,
    },
    {
      id: "bumhs-2025-chem-106",
      question: "Which of the following is classified as a natural adhesive?",
      options: [
        "silicones",
        "polyvinylacetate",
        "casein glue",
        "polyamide"
      ],
      answer: 2,
      explanation: "Casein glue is derived from casein, a natural protein precipitated from milk. Silicones, PVA, and polyamides are synthetic adhesives."
    },
    {
      id: "bumhs-2025-chem-113",
      question: "Which of the following functional groups acts as a chromophore in dyes?",
      options: [
        "amino group",
        "azo group",
        "hydroxyl group",
        "sulfonic acid group"
      ],
      answer: 1,
      explanation: "A chromophore is an unsaturated color-imparting functional group containing pi-bonds (such as the azo group –N=N–, nitro group –NO₂, or carbonyl group >C=O). Groups like –OH and –NH₂ act as auxochromes."
    },
  
    // --- UHS CHEM 25 prep ---
    {
      id: "uhs-chem-25-104",
      question: "Polyvinyl chloride (PVC) is classified as a:",
      options: [
        "Homopolymer",
        "Thermosetting polymer",
        "Thermoplastic polymer",
        "Copolymer"
      ],
      answer: 2,
      explanation: "PVC is a linear addition polymer that softens upon heating and hardens upon cooling, making it a classic thermoplastic polymer (it is also an addition homopolymer)."
    },
    {
      id: "uhs-2026-chem-118",
      question: "The starting material for the preparation of PVC is:",
      options: ["Ethylene", "Acetylene", "Vinyl alcohol", "Methylene"],
      answer: 1,
      explanation:
        "Polyvinyl chloride (PVC) is produced by the addition polymerization of vinyl chloride (chloroethene), which is industrially synthesized by reacting acetylene (ethyne) with hydrogen chloride (HCl) in the presence of a mercuric chloride (HgCl₂) catalyst."
    },
    {
      id: "szambu-2026-chem-098",
      question: "Acrylate base polymers are:",
      options: [
        "drying adhesives",
        "pressure sensitive adhesives",
        "contact adhesives",
        "hot adhesives"
      ],
      answer: 1,
      explanation: "Acrylate-based polymers (acrylic adhesives) remain permanently tacky at room temperature and form a bond immediately when light pressure is applied without requiring heat, water, or solvent activation, classifying them as pressure sensitive adhesives (PSAs)."
    },
    {
      id: "kmu-2026-chem-161",
      question: "A manufacturer needs an adhesive that solidifies on cooling and is widely used in bookbinding and packaging. Which type of adhesive is most suitable?",
      options: [
        "Contact",
        "Hot-melt",
        "Pressure-sensitive",
        "Solvent-based"
      ],
      answer: 1,
      explanation: "Hot-melt adhesives (such as ethylene-vinyl acetate copolymers) are thermoplastic materials that are applied in a molten state and solidify rapidly upon cooling to form a strong bond, making them ideal for high-speed bookbinding and packaging applications."
    },
    {
      id: "kmu-2026-chem-162",
      question: "Which polymer is produced through condensation polymerization?",
      options: [
        "Nylon-6,6",
        "Polyethene",
        "Polyvinyl chloride",
        "Polystyrene"
      ],
      answer: 0,
      explanation: "Nylon-6,6 is a polyamide produced by the condensation (step-growth) polymerization of hexamethylenediamine and adipic acid, with the elimination of water molecules. Polyethene, polyvinyl chloride (PVC), and polystyrene are all addition polymers formed from unsaturated monomers without byproduct elimination."
    }
  ];