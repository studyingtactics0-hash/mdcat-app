export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const homeostasisQuestions: Question[] = [
    // KMU MDCAT 2025
    {
      id: "homeostasis-kmu-005",
      question:
        "Which type of nephron is responsible for the development of osmotic gradients in the renal medulla?",
      options: [
        "Glomerular",
        "Cortical",
        "Juxtamedullary",
        "Medullary"
      ],
      answer: 2
    },
    {
      id: "homeostasis-kmu-006",
      question:
        "Which of the following best describes how the distal convoluted tubule contributes to regulation of blood pH in the body?",
      options: [
        "Selective reabsorption of Glucose",
        "Active secretion of hydrogen ions into the filtrate",
        "Active secretion of sodium from the glomerular filtrate",
        "Tubular reabsorption of potassium ions"
      ],
      answer: 1
    },
    {
      id: "homeostasis-kmu-007",
      question:
        "The sodium potassium pumps in the distal convoluted tubule are activated by:",
      options: [
        "Aldosterone",
        "Antidiuretic hormone",
        "Anti-natriuretic peptide",
        "Renin"
      ],
      answer: 0
    },
    {
      id: "homeostasis-kmu-008",
      question:
        "If a person drinks excessive amount of water, how does the kidney respond to maintaining osmoregulation?",
      options: [
        "Increase ADH release and water reabsorption",
        "Increase aldosterone release and reabsorb more sodium",
        "Decrease ADH release and increase water excretion",
        "Decrease renin secretion and retain more water"
      ],
      answer: 2
    },
    {
      id: "homeostasis-kmu-009",
      question: "The primary function of glomerular capillaries is:",
      options: [
        "Reabsorption of water and solutes from the renal tubules",
        "Secretion of waste products from the blood into the tubules",
        "Filtration of blood from glomerular filtrate",
        "Supply of nutrients and oxygen to the kidney tissue"
      ],
      answer: 2
    },
    {
      id: "homeostasis-kmu-011",
      question: "Which nitrogenous waste has the lowest solubility in water?",
      options: [
        "Urea",
        "Ammonia",
        "Uric acid",
        "Nitrite"
      ],
      answer: 2
    },
    {
      id: "homeostasis-kmu-012",
      question: "By nature, human excretory system is:",
      options: [
        "Ammoniotelic",
        "Uricotelic",
        "Ureotelic",
        "Aminotelic"
      ],
      answer: 2
    },
    {
      id: "homeostasis-kmu-013",
      question: "Hyperparathyroidism may lead to the formation of:",
      options: [
        "Calcium phosphate stones",
        "Uric acid stones",
        "Cystine stones",
        "Struvite stones"
      ],
      answer: 0
    },
  
    // SIBA / Sindh MDCAT 2025
    {
      id: "homeostasis-siba-006",
      question:
        "Which one of the following is the most common nitrogenous waste excreted in urine of a healthy human?",
      options: [
        "Ammonia",
        "Urea",
        "Uric Acid",
        "Creatinine"
      ],
      answer: 1
    },
    {
      id: "homeostasis-siba-010",
      question:
        "Which class of animals excrete ammonia as their primary nitrogenous waste?",
      options: [
        "Uricotelic",
        "Ureotelic",
        "Ammonotelic",
        "Urotelic"
      ],
      answer: 2
    },
    {
      id: "homeostasis-siba-020",
      question:
        "The water content of human kidney is regulated by ADH. Which of the following gland is involved in its secretion process?",
      options: [
        "Adrenal gland",
        "Pituitary gland",
        "Thyroid gland",
        "Parathyroid gland"
      ],
      answer: 1
    },
    {
      id: "homeostasis-siba-021",
      question:
        "Overconsumption of which of the following foods increases the risk of calcium oxalate stone?",
      options: [
        "Leafy vegetables",
        "Fruits contain Vitamin C",
        "Fruits contain high fiber",
        "Whole grains"
      ],
      answer: 0
    },
  
    // UHS MDCAT 2025
    {
      id: "homeostasis-uhs-001",
      question:
        "Kidneys perform their osmoregulatory role under the effect of Antidiuretic Hormone, which type of urine is produced in this situation?",
      options: [
        "Hypotonic urine with decreased volume",
        "Hypotonic urine with increased volume",
        "Hypertonic urine with decreased volume",
        "Hypertonic urine with increased volume"
      ],
      answer: 2
    },
    {
      id: "homeostasis-uhs-032",
      question: "The process of osmoregulation refers to:",
      options: [
        "The filtration of blood to remove metabolic waste",
        "The regulation of solute and water movement between an organism and its environment",
        "The creation of an osmotic gradient in the kidney medulla",
        "The secretion of hormones that control blood plasma"
      ],
      answer: 1
    },
    {
      id: "uhs-26-bio-023",
      question: "Which body system is directly responsible for initiating shivering?",
      options: [
        "Respiratory system",
        "Circulatory system",
        "Nervous system",
        "Digestive system",
      ],
      answer: 2,
    },
    {
      id: "uhs-26-bio-026",
      question: "Fate of ammonia released from amino acid during deamination in liver is:",
      options: [
        "Carbon cycle",
        "Glycolysis",
        "Urea cycle",
        "Kreb’s cycle",
      ],
      answer: 2,
    },
    {
      id: "uhs-26-bio-029",
      question: "Which nitrogenous waste requires the least amount of water per gram of its excretion?",
      options: [
        "Ammonia",
        "Urea",
        "Uric acid",
        "Creatinine",
      ],
      answer: 2,
    },
    {
      id: "uhs-26-bio-030",
      question: "Kidney stones are mainly formed due to:",
      options: [
        "Lower filtration of blood at Bowman’s Capsule",
        "Protein breakdown in stomach",
        "Excessive glucose levels in blood",
        "High level of circulating calcium in blood",
      ],
      answer: 3,
    },
    {
      id: "uhs-26-bio-045",
      question: "Which of the following best describes the correct function of peritubular capillaries?",
      options: [
        "Oxygen uptake from the kidney cells",
        "Supply of carbon dioxide to the kidney cells",
        "Reabsorption of urea",
        "Reabsorption of useful constituents",
      ],
      answer: 3,
    },
    {
      id: "uhs-26-bio-048",
      question: "Which blood vessel carries filtered blood away from glomerulus?",
      options: [
        "Renal artery",
        "Renal vein",
        "Afferent arteriole",
        "Efferent arteriole",
      ],
      answer: 3,
    },
    {
      id: "uhs-26-bio-052",
      question: "In a kidney tubule, which substances are filtered out of the blood in the glomerulus?",
      options: [
        "Glucose, protein, salts and water",
        "Glucose, protein, urea and water",
        "Glucose, salts, urea and water",
        "Protein, salts, urea and water",
      ],
      answer: 2,
    },
  ];