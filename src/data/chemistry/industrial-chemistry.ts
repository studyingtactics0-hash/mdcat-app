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
    }
  ];