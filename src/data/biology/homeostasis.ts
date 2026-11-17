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
    {
      id: "szambu-2026-bio-014",
      question: "Which process directly depends on hydrostatic pressure in the kidney functioning?",
      options: [
        "Pressure Filtration",
        "Selective Reabsorption",
        "Tubular Secretion",
        "Osmoregulation"
      ],
      answer: 0,
      explanation: "Ultrafiltration (pressure filtration) in the renal corpuscle is driven directly by high glomerular capillary blood hydrostatic pressure, forcing water and small solutes from blood into Bowman's capsule."
    },
    {
      id: "szambu-2026-bio-015",
      question: "Hypercalcemia & Hypercalciuria are responsible for kidney stones and are due to condition:",
      options: [
        "Hypothyroidism",
        "Hyperthyroidism",
        "Hypoparathyroidism",
        "Hyperparathyroidism"
      ],
      answer: 3,
      explanation: "Hyperparathyroidism causes excessive secretion of parathyroid hormone (PTH), raising blood calcium levels (hypercalcemia) and urinary calcium excretion (hypercalciuria), which promotes calcium-based kidney stone formation."
    },
    {
      id: "szambu-2026-bio-016",
      question: "In situation of dehydration, human kidneys respond by:",
      options: [
        "Decreasing blood pressure",
        "Decreasing ADH secretion",
        "Increasing water reabsorption",
        "Increasing urine output"
      ],
      answer: 2,
      explanation: "During dehydration, elevated blood osmolarity stimulates ADH release from the posterior pituitary, increasing aquaporin insertion in the collecting ducts to enhance water reabsorption and produce concentrated urine."
    },
    {
      id: "szambu-2026-bio-017",
      question: "Which of the following is not the function of kidney?",
      options: [
        "Ion regulation",
        "Water regulation",
        "Temperature regulation",
        "Waste removal"
      ],
      answer: 2,
      explanation: "Kidneys regulate electrolyte/ion balance, water balance (osmoregulation), blood pH, and nitrogenous waste excretion, whereas thermoregulation is controlled by the hypothalamus and skin."
    },
    {
      id: "szambu-2026-bio-018",
      question: "An increased aldosterone secretion results in",
      options: [
        "Loss of Na ions",
        "Retention of Na ions",
        "Increased glucose",
        "Reduced urine"
      ],
      answer: 1,
      explanation: "Aldosterone acts on the distal convoluted tubules and collecting ducts of the nephron to promote active reabsorption (retention) of Na+ ions and secretion of K+ ions."
    },
    {
      id: "kmu-2026-bio-071",
      question: "Which region of kidney contains glomeruli and Bowman's capsules?",
      options: [
        "Renal medulla",
        "Renal cortex",
        "Renal pelvis",
        "Hilum"
      ],
      answer: 1,
      explanation: "The renal corpuscles (each consisting of a glomerulus enclosed within Bowman's capsule), along with the proximal and distal convoluted tubules, are located exclusively in the outer renal cortex."
    },
    {
      id: "kmu-2026-bio-072",
      question: "If glucose appears in urine of a patient, it indicates failure of which process?",
      options: [
        "Pressure filtration",
        "Selective reabsorption",
        "Tubular secretion",
        "Osmoregulation"
      ],
      answer: 1,
      explanation: "Under normal physiological conditions, 100% of filtered glucose is actively reclaimed from the glomerular filtrate back into the blood in the proximal convoluted tubule via selective reabsorption; its presence in urine (glycosuria) indicates that selective reabsorption capacity has been exceeded or impaired."
    },
    {
      id: "kmu-2026-bio-073",
      question: "Which part of nephron is impermeable to water?",
      options: [
        "Glomerulus",
        "Descending limb",
        "Ascending limb",
        "Proximal tubule"
      ],
      answer: 2,
      explanation: "The ascending limb of the loop of Henle lacks aquaporin channels and is completely impermeable to water, while actively and passively transporting Na⁺ and Cl⁻ ions out into the renal medulla to establish the corticomedullary osmotic gradient."
    },
    {
      id: "kmu-2026-bio-074",
      question: "When water intake is high:",
      options: [
        "ADH secretion increases, producing concentrated urine",
        "Aldosterone secretion increases, producing concentrated urine",
        "ADH release is inhibited, resulting in a large volume of dilute urine",
        "Ultrafiltration stops until water balance is restored"
      ],
      answer: 2,
      explanation: "High water intake lowers blood osmolarity, which inhibits osmoreceptors in the hypothalamus and suppresses antidiuretic hormone (ADH) release from the posterior pituitary, making the distal convoluted tubules and collecting ducts impermeable to water and producing a large volume of dilute (hypotonic) urine."
    },
    {
      id: "kmu-2026-bio-075",
      question: "Peritubular capillaries are formed from:",
      options: [
        "Glomerulus",
        "Afferent arteriole",
        "Efferent arteriole",
        "Interlobular artery"
      ],
      answer: 2,
      explanation: "Blood leaves the glomerular capillary tuft via the efferent arteriole, which subsequently branches into a second low-pressure capillary network surrounding the renal tubules called the peritubular capillaries (and vasa recta in juxtamedullary nephrons)."
    },
    {
      id: "kmu-2026-bio-076",
      question: "Dialysis or kidney transplantation is usually required when kidney function falls below ______ of normal.",
      options: [
        "70%",
        "50%",
        "25%",
        "10%"
      ],
      answer: 3,
      explanation: "In end-stage renal disease (ESRD) or severe renal failure, renal replacement therapy such as hemodialysis, peritoneal dialysis, or kidney transplantation becomes necessary when functional kidney capacity drops below 10% (typically 10–15%) of normal."
    },
    {
      id: "kmu-2026-bio-077",
      question: "Which nitrogenous waste is the MAIN excretory product in humans, and has relatively low toxicity compared to ammonia?",
      options: [
        "Urea",
        "Uric acid",
        "Creatinine",
        "Ammonia"
      ],
      answer: 0,
      explanation: "Humans are ureotelic organisms; the liver converts highly toxic ammonia produced from amino acid deamination into urea via the ornithine (urea) cycle, which is far less toxic and serves as the primary nitrogenous waste excreted in human urine."
    }
  ];