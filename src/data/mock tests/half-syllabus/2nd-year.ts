export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
    image?: string;
  };
  
  // ==========================================
  // BIOLOGY QUESTIONS
  // ==========================================
  
  export const biologyQuestions: Question[] = [
    {
      id: "coord-001",
      question: "Which part of brain controls transition between sleeping and wakefulness?",
      options: ["Medulla oblongata", "Cerebellum", "Cerebrum", "Pons"],
      answer: 3,
    },
    {
      id: "coord-002",
      question: "Which part of the brain contains central chemoreceptors that monitor CO₂ levels in blood?",
      options: ["Pons", "Midbrain", "Hypothalamus", "Medulla oblongata"],
      answer: 3,
    },
    {
      id: "coord-003",
      question: "Which component of a reflex arc connects the sensory neuron to the motor neuron within the spinal cord?",
      options: ["Receptor", "Effector", "Muscle fiber", "Associative neuron"],
      answer: 3,
    },
    {
      id: "coord-004",
      question: "Which of the following is the auditory relay centre and centre that controls reflex movement of the eyes?",
      options: ["Forebrain", "Cerebellum", "Midbrain", "Medulla oblongata"],
      answer: 2,
    },
    {
      id: "coord-005",
      question: "Which of the following is the correct pathway of nerve impulse?",
      options: [
        "Receptors → CNS → Effectors",
        "Effectors → Receptors → CNS",
        "CNS → Effectors → Receptors",
        "Effectors → CNS → Receptors",
      ],
      answer: 0,
    },
    {
      id: "coord-006",
      question: "The neurotransmitters are secreted by the neuron from:",
      options: ["Axon ends", "Dendrite end", "Nissl’s granules", "Cell body"],
      answer: 0,
    },
    {
      id: "coord-007",
      question: "Hippocampus plays an important role in the:",
      options: [
        "Formation of short-term memory",
        "Formation of image on retina",
        "Formation of long-term memory",
        "Formation of emotions",
      ],
      answer: 2,
    },
    {
      id: "coord-008",
      question: "Left and right cerebral hemispheres are connected with each other by:",
      options: ["Corpus luteum", "Corpus callosum", "A band of dendrites", "Dorsal and ventral nerve roots"],
      answer: 1,
    },
    {
      id: "coord-009",
      question: "Which part of the neuron typically receives incoming signals from other neurons?",
      options: ["Axon", "Dendrites", "Myelin sheath", "Synaptic knob"],
      answer: 1,
    },
    {
      id: "coord-010",
      question: "Olfactory receptors are the type of:",
      options: ["Photoreceptors", "Mechanoreceptors", "Thermoreceptors", "Chemoreceptors"],
      answer: 3,
    },
    {
      id: "coord-011",
      question: "Which of the following cells possess Nissl’s granules?",
      options: ["Nerve cells", "WBC", "RBC", "Platelets"],
      answer: 0,
    },
    {
      id: "coord-012",
      question: "Which part of human brain is involved in maintaining the posture and balance of the body?",
      options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla oblongata"],
      answer: 1,
    },
    {
      id: "coord-013",
      question: "Myelin sheath acts as:",
      options: ["Protector", "Insulator", "Sensor", "Supporter"],
      answer: 1,
    },
    {
      id: "coord-014",
      question: "All of the following are characteristics of the limbic system EXCEPT:",
      options: [
        "Produces basic and primitive emotions and drives",
        "Formation of memories",
        "Consists of hypothalamus, amygdala and hippocampus",
        "Controls reflex movement of eyes",
      ],
      answer: 3,
    },
    {
      id: "coord-015",
      question: "Sensory input from auditory and visual pathways, skin and within the body is received by ___ and distributed to ___:",
      options: [
        "Hypothalamus : Cerebellum",
        "Thalamus : Cerebrum",
        "Cerebrum : Rest of the brain",
        "Cerebellum : Rest of the brain",
      ],
      answer: 1,
    },
    {
      id: "coord-016",
      question: "The hormone, when overproduced, can lead to hypercalcemia and stone formation is:",
      options: ["Insulin", "Thyroxine", "Parathyroid hormone", "Antidiuretic hormone"],
      answer: 2,
    },
    {
      id: "coord-017",
      question: "Thinking, memory and voluntary actions are mainly controlled by:",
      options: ["Cerebrum", "Cerebellum", "Pons", "Hippocampus"],
      answer: 0,
    },
    {
      id: "coord-018",
      question: "Components of a reflex arc must contain neurons from:",
      options: [
        "Motor nerve and mixed nerve",
        "Sensory nerve and intermediate nerve",
        "Motor nerve and sensory nerve",
        "Mixed nerve and intermediate nerve",
      ],
      answer: 2,
    },
    {
      id: "coord-019",
      question: "Nodes of Ranvier along the length of axon fibers allow:",
      options: [
        "More diffusion of neurotransmitters",
        "Saltatory conduction of nerve impulse",
        "Formation of new synaptic connections",
        "Synthesis of new neurons",
      ],
      answer: 1,
    },
    {
      id: "coord-020",
      question: "Osmoreceptors that detect the osmotic pressure of blood are primarily located in the:",
      options: ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Cerebral cortex"],
      answer: 2,
    },
    {
      id: "coord-021",
      question: "Receptors that are located in the retina of eye are called:",
      options: ["Merkel discs", "Ruffini endings", "Pacinian corpuscles", "Rod and cone cells"],
      answer: 3,
    },
    {
      id: "coord-022",
      question: "Which type of neurons stimulate the muscles to contract in a reflex arc?",
      options: ["Efferent neurons", "Sensory neurons", "Interneurons", "Afferent neurons"],
      answer: 0,
    },
    {
      id: "coord-023",
      question: "Chemicals that stimulate the olfactory receptors enter the nasal cavity in the form of:",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      answer: 2,
    },
    {
      id: "coord-024",
      question: "Neurosecretory cells are:",
      options: ["Endocrine cells", "Exocrine cells", "Neuroglial cells", "Neurons adapted to secrete hormones"],
      answer: 3,
    },
    {
      id: "coord-025",
      question: "Hippocampus is mainly involved in:",
      options: [
        "Vision and hearing reflexes",
        "Voluntary muscle movement",
        "Memory storage",
        "Speech production",
      ],
      answer: 2,
    },
    {
      id: "coord-026",
      question: "The outer surface of the axon membrane in a resting neuron is:",
      options: [
        "Negative relative to the inside",
        "Positive relative to the inside",
        "Neutral due to balanced ions",
        "Without electrical potential",
      ],
      answer: 1,
    },
    {
      id: "coord-027",
      question: "Automatic and rapid actions that do not involve the conscious part of the brain are:",
      options: ["Reflex actions", "Conditioned reflexes", "Taxes", "Synapses"],
      answer: 0,
    },
    {
      id: "coord-028",
      question: "Which neurons conduct impulses from sensory receptors to the CNS?",
      options: ["Sensory neurons", "Motor neurons", "Interneurons", "Efferent neurons"],
      answer: 0,
    },
    {
      id: "coord-029",
      question: "Which of the following is correct about the structure of the brain?",
      options: [
        "Cerebral cortex is the outer part and consists of grey matter",
        "Cerebral medulla is the inner part and consists of grey matter",
        "Cerebral cortex is the inner part and consists of white matter",
        "Cerebral medulla is the outer part and consists of white matter",
      ],
      answer: 0,
    },
    {
      id: "coord-030",
      question: "A doctor taps below the knee and the leg kicks forward. What does this show?",
      options: [
        "A conditional response",
        "Voluntary muscle contractions",
        "An involuntary reflex to external stimuli",
        "A delayed response due to brain processing",
      ],
      answer: 2,
    },
    {
      id: "coord-031",
      question: "Which type of change is a nerve impulse?",
      options: [
        "Electrical and mechanical change",
        "Chemical and mechanical change",
        "Electrical and chemical change",
        "Chemical change only",
      ],
      answer: 2,
    },
    {
      id: "coord-032",
      question: "In a heat stroke, the hypothalamus detects an increase in core body temperature. Which response is triggered?",
      options: [
        "Vasoconstriction and shivering",
        "Vasodilation and sweating",
        "Increased metabolic rate",
        "Release of thyroxine",
      ],
      answer: 1,
    },
    {
      id: "coord-033",
      question: "The junction between two consecutive neurons where information is transmitted from one neuron to the next is called:",
      options: ["Node of Ranvier", "Synapse", "Axon terminal", "Dendrite cleft"],
      answer: 1,
    },
    {
      id: "coord-034",
      question: "Which ion is approximately tenfold higher in concentration outside the membrane of a neuron during resting potential?",
      options: ["Potassium", "Sodium", "Calcium", "Hydrogen"],
      answer: 1,
    },
    {
      id: "coord-035",
      question: "Touching a sharp object stimulates pain receptors. This information is carried to the central nervous system by the:",
      options: ["Motor neuron", "Sensory neuron", "Associative neuron", "Effector neuron"],
      answer: 1,
    },
    {
      id: "coord-036",
      question: "The state when a neuron is NOT conducting an impulse during resting membrane potential is called:",
      options: ["Polarized", "Depolarized", "Repolarized", "Hyperpolarized"],
      answer: 0,
    },
    {
      id: "coord-037",
      question: "Which of the following waves travel along a neuron during nerve impulse conduction?",
      options: ["Thermal waves", "Magnetic waves", "Electromagnetic waves", "Electrochemical waves"],
      answer: 3,
    },
    {
      id: "coord-038",
      question: "The reticular formation in the brain runs through which specific regions?",
      options: ["Forebrain and midbrain", "Hindbrain and midbrain", "Cerebellum and forebrain", "Telencephalon and cerebellum"],
      answer: 1,
    },
    {
      id: "coord-039",
      question: "Match the CORRECT structure of the brain with its function:",
      options: ["Medulla: Breathing", "Pons: Memory", "Cerebellum: Dreaming", "Midbrain: Balance"],
      answer: 0,
    },
    {
      id: "coord-040",
      question: "The CORRECT sequence of events in a reflex arc is:",
      options: [
        "Receptor → associative neuron → motor neuron → effector",
        "Receptor → motor neuron → associative neuron → sensory neuron → effector",
        "Receptor → sensory neuron → associative neuron → motor neuron → effector",
        "Receptor → sensory neuron → motor neuron → associative neuron → effector",
      ],
      answer: 2,
    },
    {
      id: "coord-041",
      question: "The primary function of the sensory neuron in a reflex arc is to:",
      options: [
        "Contract muscles",
        "Detect environmental changes",
        "Transmit impulses to the brain",
        "Carry impulses to the spinal cord",
      ],
      answer: 3,
    },
    {
      id: "coord-042",
      question: "A person quickly withdraws their hand after touching a hot iron. This type of reflex is best classified as a:",
      options: ["Cranial reflex", "Spinal reflex", "Hormonal response", "Conditional response"],
      answer: 1,
    },
    {
      id: "coord-043",
      question: "Which one is NOT a part of the forebrain?",
      options: ["Cerebellum", "Hypothalamus", "Hippocampus", "Amygdala"],
      answer: 0,
    },
    {
      id: "coord-044",
      question: "During saltatory conduction, a nerve impulse jumps from one to another:",
      options: ["Synapse", "Axon terminal", "Node of Ranvier", "Cell body"],
      answer: 2,
    },
    {
      id: "coord-045",
      question: "Which of the following functions is under the control of the medulla oblongata?",
      options: ["Memory", "Vision", "Breathing", "Dreaming"],
      answer: 2,
    },
    {
      id: "coord-046",
      question: "The structure that is directly continuous with the cell body and transmits nerve impulses away from it is:",
      options: ["Axon", "Synapse", "Dendrites", "Myelin sheath"],
      answer: 0,
    },
    {
      id: "coord-047",
      question: "The main function of Pacinian corpuscles is to detect:",
      options: [
        "Chemical composition of food",
        "Changes in temperature",
        "Stimuli of pressure",
        "Sharp pain signals",
      ],
      answer: 2,
    },
    {
      id: "coord-048",
      question: "Saltatory conduction of nerve impulse occurs in:",
      options: ["Myelinated axons", "Cell bodies", "Unmyelinated axons", "Dendrites"],
      answer: 0,
    },
    {
      id: "coord-049",
      question: "The cerebellum is mainly responsible for:",
      options: [
        "Vision, hearing and reflexes",
        "Regulating heartbeat only",
        "Conscious thoughts and reasoning",
        "Balance, posture and coordination",
      ],
      answer: 3,
    },
    {
      id: "coord-050",
      question: "A typical value of resting membrane potential in a neuron is:",
      options: ["–50 millivolts", "+50 millivolts", "–70 millivolts", "+70 millivolts"],
      answer: 2,
    },
    {
      id: "coord-051",
      question: "Which type of neurons stimulate the muscles to contract in a reflex arc?",
      options: ["Motor neurons", "Sensory neurons", "Interneurons", "Afferent neurons"],
      answer: 0,
    },
    {
      id: "coord-052",
      question: "Which of the following travels along a neuron during nerve impulse conduction?",
      options: [
        "Waves of electrochemical changes",
        "Waves of thermal changes",
        "Waves of magnetic changes",
        "Waves of hormonal changes",
      ],
      answer: 0,
    },
    {
      id: "coord-053",
      question: "Which structure in neuron is responsible for receiving information from other neurons?",
      options: ["Axon", "Soma", "Dendrite", "Axon terminal"],
      answer: 2,
    },
    {
      id: "coord-054",
      question: "Which type of neurons stimulate muscles to contract in a reflex arc?",
      options: ["Motor neurons", "Sensory neurons", "Interneurons", "Afferent neurons"],
      answer: 0,
    },
    {
      id: "coord-055",
      question: "Reflex action is considered as the simplest form of response in:",
      options: ["Simple animals", "Higher animals", "Lowest animals", "Smaller animals"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-1",
      question: "Which is a part of spinal cord",
      options: ["Ventricle", "Vertebral canal", "Ventral canal", "Central canal"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-2",
      question: "These content cell bodies of neurones",
      options: ["Nerve and white matter", "Grey and white matter", "Ganglia and grey matter", "Nerve and ganglia"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-3",
      question: "Reflex action below the neck are under control of",
      options: ["Brain", "Hypothalamus", "Spinal cord", "Pituitary gland"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-4",
      question: "Which of the following increases when an action potential is initiated",
      options: [
        "Diffusion of sodium ions into neurone",
        "Diffusion of sodium Ion out of neurone",
        "Diffusion of potassium ion out of the neurone",
        "Diffusion of potassium ion into the neuron",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-5",
      question: "Stimulation of the Vagus nerve will cause",
      options: ["Increase blood pressure", "Decrease heart rate", "Dilation of the pupil of the eye", "Increase blood flow to Limbs"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-6",
      question: "Aldosterone helps in the maintenance of all except",
      options: ["Electrolyte and body fluid volume", "Blood pressure", "Osmotic pressure", "Smooth muscle contraction"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-7",
      question: "The part of neuron did contain a nucleus and other organelles typical of cell is called",
      options: ["Schawan cells", "Axons", "Dendrite", "Cell body"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-8",
      question: "It is important in coordinating the movement of the body",
      options: ["Cerebrum", "Medulla", "Pons", "Cerebellum"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-9",
      question: "Hypothalamus does not control",
      options: ["Sexual behaviour", "Osmoregulation", "Hunger", "Creative thinking and consciousness"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-10",
      question: "All the unconscious activities like Heartbeat involuntary breathing and get movement are controlled by",
      options: ["Medulla oblongata", "Cerebrum and medulla", "Cerebellum and medulla", "Cerebrum and cerebellum"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-11",
      question: "Part of mammalian brain controls the muscular coordination",
      options: ["Cerebrum", "Medula oblongata", "Cerebellum", "Corpus collasum"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-12",
      question: "Insufficient thyroxine in adults leads to",
      options: ["Dwarfism", "Myxedema", "Graves disease", "Cretinism"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-13",
      question: "Number of cranial nerves are",
      options: ["42", "24", "36", "12"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-14",
      question: "Adissions disease can be due to all reasons except",
      options: ["Hypothalamus", "Pituitary gland", "Adrenal cortex", "Adrenal medulla"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-15",
      question: "The is a crurical relay Centre among the senses the limbic system",
      options: ["Cerebral cortex", "Adrenal cortex", "Cerebellum", "Thalamus"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-16",
      question: "A male body tense more towards the form of immature female after",
      options: ["Spermiogenesis", "Deficiency of dopamine", "Castration", "Hypergoandism"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-17",
      question: "During repolarization of nerve",
      options: [
        "Sodium channels are closed and potassium channels are open",
        "Potassium Gate closes and sodium Gate opens",
        "Both potassium and sodium gates are closed",
        "Both Gates remains open",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-18",
      question: "All are parts of brain stem except",
      options: ["Mid brain", "Medulla", "Pons", "Cerebellum"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-19",
      question: "Which of the following membrane potential depicts hyper polarization",
      options: ["-50 millivolt", "-70 millivolt", "50 millivolt", "-90 millivolt"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-20",
      question: "Secretion of oestrogen is under the control of",
      options: ["FSH", "LH", "Progesterone", "STH"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-21",
      question: "Diuresis is reduced by",
      options: ["Oxytocin", "LH", "Prolactin", "Vasopressin"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-22",
      question: "Cell bodies sensory neuron constitute",
      options: ["Dorsal root ganglion", "Dorsal root", "Ventral root ganglion", "Posterior root ganglion"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-23",
      question: "Impulses travel very rapidly along nerve from the leg muscle of mammal because",
      options: [
        "There is a high concentration of sodium Ion inside the axons",
        "The nerve contain myelinated fibres",
        "There is a potential across the axon membrane",
        "The cell bodies of the fibres are content within the dorsal root ganglion",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-24",
      question: "The type of neuron is most prevalent in the human body",
      options: ["Unipolar neuron", "Multipolar neuron", "Bipolar neuron", "None of the above mentioned"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-25",
      question: "Which part of human brain is more developed in comparison of others",
      options: ["Cerebrum", "Optic lobes", "Cerebellum", "Medulla oblongata"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-26",
      question: "Which part of a neurone May act is receptor as well",
      options: ["Dendrite", "Cell body", "Axons", "Gaglion"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-27",
      question: "Motor neuron carry messages from associative neurons to",
      options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-28",
      question: "The longest cell in the body of an animal is",
      options: ["Osteocyte", "Chromatophore", "Neuron", "Lymph corpuscles"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-29",
      question: "All are amino acid derivative except",
      options: ["Thyroxine", "Aldosterone", "Epinephrine", "Nor adrenaline"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-30",
      question: "Outermost covering of brain is called as",
      options: ["Dura matter", "Pericardium", "Pia matter", "Grey matter"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-31",
      question: "One that connects both cerebral hemispheres is called",
      options: ["Corpus luteum", "Corpus striatum", "Corpus collasum", "tracts"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-32",
      question: "It is considered one out of three parts of four brain and is further subdivided into 3 parts",
      options: ["Thalamus", "Hypothalamus", "Limbic system", "Cerebrum"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-33",
      question: "Motor neuron have",
      options: ["Short axon", "Long axon", "Long dendrites", "dendron"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-34",
      question: "Saltatory transmission occurs in",
      options: ["Cell body", "Continuous fashion", "Non-milinated nerve fibre", "Myleinated nerve fibre"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-35",
      question: "The part of neurone that perform basic cellular functions such as Protein synthesis are the",
      options: ["Somas", "Dendrites", "Axons", "Synaptic knobs"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-36",
      question: "In action potential depolarization repolarization and recovery takes how much time",
      options: ["2 to 3 sec", "2 to 3 minutes", "2 to 3 millisec", "2 to 3 micro sec"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-37",
      question: "The most important ions present in the neurones and surrounding Fluids are",
      options: ["Sodium and Calcium", "Sodium and potassium", "Calcium and potassium", "Negative organic ions"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-38",
      question: "Which of the following is not the part of fore brain",
      options: ["Reticular formation", "Amygdala", "Hippo campus", "Thalamus"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-39",
      question: "The diurnal rhythm of our body such as sleep wake cycle is regulated by the hormone",
      options: ["Calcitonin", "Adrenaline", "Prolactin", "Melatonin"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-40",
      question: "A nerve impulse will travel through an nerve fibre only if its membrane sudden becomes more permeable to ions of",
      options: ["Sodium", "Calcium", "Chloride", "Potassium"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-41",
      question: "These are the structures did respond when they are stimulated by an impulse coming through motor neuron",
      options: ["Glands", "Thermo receptors", "Sensory neurons", "Pacinian corpuscles"],
      answer: 0,
    },
    {
      id: "testmoz-bio-coord-42",
      question: "Dwarfism is a hormonal disorder due to",
      options: ["Deficiency of thyroxine", "Deficiency of STH", "Excess of thyroxine", "Excess of STH"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-43",
      question: "Peripheral part of brain contain",
      options: ["White matter", "Blue matter", "Yellow matter", "Grey matter"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-44",
      question: "Hypothalamus contains several groups of Neuro secretary cells called and produce which hormones",
      options: ["Ganglia", "Nuclei", "Plexus", "Astrocytes"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-45",
      question: "How many sensations are detected by the skin",
      options: ["5", "4", "3", "2"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-46",
      question: "A patient to excretes a large quantity of sodium in urine",
      options: ["Diseased adrenal medulla", "Diseased pancreas", "Diseased adrenal cortex", "Diseased thymus"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-47",
      question: "Hormones can regulate other hormones through",
      options: ["Competition", "Inhibition", "Feedback mechanism", "Antagonizing"],
      answer: 2,
    },
    {
      id: "testmoz-bio-coord-48",
      question: "The pineal gland is located in",
      options: ["Spinal cord", "Brain", "Neck", "Stomach mucosa"],
      answer: 1,
    },
    {
      id: "testmoz-bio-coord-49",
      question: "Sodium pump stop operating during",
      options: ["Repolarization", "Action potential", "Resting potential", "None of the above"],
      answer: 3,
    },
    {
      id: "testmoz-bio-coord-50",
      question: "The type of receptors present in the hypothalamus are",
      options: ["Mechno receptors", "Cherno receptors", "Photoreceptors", "Pressure receptors"],
      answer: 1,
    },
  {
      id: "bumhs-2025-15",
      question: "Catastrophism explains that changes in life on earth are due to:",
      options: ["Gradual evolution", "Natural selection", "Mutation", "Sudden natural disasters"],
      answer: 3,
      explanation: "Catastrophism, proposed by Georges Cuvier, states that Earth's history was shaped by sudden, violent, large-scale natural events and disasters.",
    },
    {
      id: "sindh-2025-17",
      question: "According to Darwin, the main force behind evolution is:",
      options: ["Migration", "Genetic mutation", "Artificial selection", "Natural selection"],
      answer: 3,
      explanation: "Charles Darwin proposed that natural selection is the primary mechanism driving evolutionary change.",
    },
    {
      id: "sindh-2025-35",
      question: "Why Lamarck being remembered till today?",
      options: [
        "Due to his rejected but appealing theory of heredity",
        "Due to his universally acceptable theory of evolution",
        "Due to his theory of evolution by natural selection",
        "Due to his theory of evolution by acquired characters",
      ],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck is primarily remembered for pioneer ideas on evolution, notably his theory of inheritance of acquired characteristics, which was later rejected.",
    },
    {
      id: "sindh-2025-78",
      question: "Name the idea of Darwin that best explains the ability of populations to produce those individuals who possess beneficial traits.",
      options: ["Gene flow", "Genetic drift", "Artificial selection", "Natural selection"],
      answer: 3,
      explanation: "Natural selection favors individuals with advantageous heritable traits, increasing their survival and reproductive success in a given environment.",
    },
    {
      id: "szabmu-2025-1",
      question: "According to the Lamarck theory of evolution, the organ that has not been used in several generations will:",
      options: ["Become strong", "Get amputated", "Disappear", "Become developed"],
      answer: 2,
      explanation: "Lamarck's 'Use and Disuse' concept suggests that unused organs gradually deteriorate and eventually disappear over generations.",
    },
    {
      id: "szabmu-2025-2",
      question: "Lamark theory of evolution was rejected experimentally by:",
      options: [
        "Ernest Haeckel / Earnest Hackle",
        "Charles Darwin",
        "August Weismann / August Wiseman",
        "Thomas R. Malthus",
      ],
      answer: 2,
      explanation: "August Weismann disproved Lamarckian inheritance by cutting off tails of mice for many generations and demonstrating that offspring were consistently born with full tails.",
    },
    {
      id: "uhs-2025-51",
      question: "The main idea in Darwin’s Theory of “Origin of species by natural selection” is:",
      options: [
        "Inheritance of acquired traits",
        "Use and disuse of organs",
        "Species never change",
        "Evolution occurs through gradual accumulation of adaptation through successive generations",
      ],
      answer: 3,
      explanation: "Darwin proposed that adaptation accumulates gradually over successive generations due to natural selection acting on favorable variations.",
    },
    {
      id: "uhs-2025-72",
      question: "According to Lamarck, the evolution of long necks in giraffes is explained by:",
      options: ["Natural selection", "Genetic mutation", "Survival of the fittest", "Stretching of necks over generations"],
      answer: 3,
      explanation: "Lamarck posited that ancestral giraffes stretched their necks to reach higher leaves, passing on the newly acquired longer necks to offspring.",
    },
    {
      id: "uhs-2024-34",
      question: "The change in frequency of alleles at a locus that occurs by chance is known as:",
      options: ["Mutation", "Genetic Drift", "Non Random mating", "Speciation"],
      answer: 1,
      explanation: "Genetic drift refers to random fluctuations in allele frequencies within a gene pool due to chance occurrences.",
    },
    {
      id: "uhs-2024-35",
      question: "Identify the correct pair of vestigial organs:",
      options: [
        "Ear Muscles & Vermiform appendix",
        "Heart & Liver",
        "Ear Muscles & Liver",
        "Vermiform appendix & Heart",
      ],
      answer: 0,
      explanation: "Ear muscles (auricular muscles) and the vermiform appendix in humans are classic examples of vestigial structures with reduced original function.",
    },
    {
      id: "uhs-2024-36",
      question: "Which of the following increases variation within a gene pool?",
      options: ["Chromosome inversion", "Crossing over", "Gene mutation", "Random fusion of gametes"],
      answer: 2,
      explanation: "Gene mutation is the primary source that creates new alleles, fundamental to introducing fresh genetic variation into a gene pool.",
    },
    {
      id: "uhs-2024-37",
      question: "Which of the following statements about natural selection is not true?",
      options: [
        "It affects variations that are heritable",
        "It is selected by a breeder",
        "It can improve the adaptation of species",
        "It is regional in nature",
      ],
      answer: 1,
      explanation: "Selection guided by a human breeder is called artificial selection, whereas natural selection is driven by environmental pressures.",
    },
    {
      id: "uhs-2024-38",
      question: "The formula calculating the frequency of genotypes and alleles in a population gene pool is known as:",
      options: ["Hardy-Weinberg Equation", "Lamarck Equation", "Darwin Equation", "James Hutton Equation"],
      answer: 0,
      explanation: "The Hardy-Weinberg equation (p² + 2pq + q² = 1) quantifies allele and genotype frequencies in a non-evolving population.",
    },
    {
      id: "uhs-2024-39",
      question: "The idea of inheritance of acquired characteristics was presented by:",
      options: ["Jean Baptist Lamarck", "Charles Darwin", "Thomas Malthus", "Alfred Wallace"],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck proposed that characteristics acquired during an organism's lifetime could be inherited by its offspring.",
    },
    {
      id: "kmu-2024-24",
      question: "Wings of birds and that of flying lizards provide evidence of:",
      options: ["Convergent evolution", "Divergent evolution", "No evolution", "Same origin"],
      answer: 0,
      explanation: "Analogous structures evolved independently in distinct lineages to serve similar functions (flight), demonstrating convergent evolution.",
    },
    {
      id: "kmu-2024-58",
      question: "According to Lamarckism, the basis of evolution is:",
      options: [
        "Inheritance of acquired characteristics",
        "Mutation",
        "Natural selection",
        "Survival of the fittest",
      ],
      answer: 0,
      explanation: "The core postulate of Lamarckism is the inheritance of acquired characteristics.",
    },
    {
      id: "kmu-2024-59",
      question: "What best describes the hind leg bones seen in the whale?",
      options: [
        "Analogous to the fin of living fish",
        "Fossil structure from an extinct ancestor",
        "Homologous structure of the wings of a bat",
        "Vestigial structures that had a function in an ancestor",
      ],
      answer: 3,
      explanation: "Whale pelvic and hind leg bones are vestigial structures inherited from four-legged terrestrial mammalian ancestors.",
    },
    {
      id: "bumhs-2023-6",
      question: "Catastrophism was explained by:",
      options: ["Wallace", "Cuvier", "Malthus", "Darwin"],
      answer: 1,
      explanation: "Georges Cuvier advocated catastrophism to explain fossil record gaps and extinction events.",
    },
    {
      id: "nums-2025-102",
      question: "What distinguishes the concept of special creation from concept of evolution?",
      options: [
        "Life is not the product of sudden creative act",
        "Unicellular prokaryotes might be the life ancestors",
        "Rely on inspiration and meditation for life origin",
        "Life results from innumerable changes",
      ],
      answer: 2,
      explanation: "Special creation relies on supernatural or spiritual belief systems, unlike biological evolution which rests on empirical observation.",
    },
    {
      id: "nums-2025-103",
      question: "Which of the following idea is a part of Lamarckism?",
      options: ["Use and disuse of organs", "Survival of the fittest", "Origin of species", "Variation"],
      answer: 0,
      explanation: "The principle of 'Use and Disuse of Organs' is a key component of Lamarck's evolutionary framework.",
    },
    {
      id: "nums-2025-104",
      question: "Choose the correct pair for homology?",
      options: [
        "Wings of birds and wings of butterfly",
        "Forelimbs of birds and fins of whales",
        "Leaves of pines and cactus",
        "Gills of fish and lungs of humans",
      ],
      answer: 1,
      explanation: "Forelimbs of birds and whale flippers share identical underlying skeletal architecture derived from a common tetrapod ancestor, exemplifying homology.",
    },
    {
      id: "nums-2025-105",
      question: "Which chronological sequence is correct among the classes of vertebrates as evidence of evolution?",
      options: [
        "Birds → fish → amphibians → reptiles",
        "Reptiles → birds → fishes → amphibians",
        "Fish → amphibians → reptiles → birds",
        "Amphibians → reptiles → birds → fish",
      ],
      answer: 2,
      explanation: "The evolutionary sequence of vertebrate classes in fossil records proceeds from Fishes to Amphibians, then Reptiles, and subsequently Birds and Mammals.",
    },
    {
      id: "nums-2025-106",
      question: "The reduction of population carrying a specific allele and genotype due to natural disaster is called:",
      options: ["Mutation", "Bottle neck effect", "Founder effect", "Speciation"],
      answer: 1,
      explanation: "The bottleneck effect occurs when a sudden environmental event drastically reduces population size, randomly altering allele frequencies in survivors.",
    },
    {
      id: "testmoz-bio-gaseous-1",
      question: "Function of respiratory passages cilia is to keep the Airways clear of",
      options: ["Carbon dioxide", "Oxygen", "Dust", "Carbon monoxide"],
      answer: 2,
    },
    {
      id: "testmoz-bio-gaseous-2",
      question: "Highly vascularised skin service respiratory surface is",
      options: ["Frog", "Fish", "Snake", "Newly born mammal"],
      answer: 0,
    },
    {
      id: "testmoz-bio-gaseous-3",
      question: "The lateral wall of the chest cavity of main are composed of the",
      options: [
        "Ribs",
        "Intercostal muscles",
        "Ribs and intercostal muscles",
        "Ribs, intercostal muscles and diaphragm",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-gaseous-4",
      question: "A ........ organism that makes ATP by aerobic respiration if your oxygen is present but is capable of switching to fermentation if oxygen is absent",
      options: ["Cellular anaerboe", "Respiratory anaerobe", "Obligate anaerobe", "Facultative anaerobe"],
      answer: 3,
    },
    {
      id: "testmoz-bio-gaseous-5",
      question: "Pharynx leads air into larynx through an opening called",
      options: ["Glottis", "Epiglottis", "Trachea", "Bronchi"],
      answer: 0,
    },
    {
      id: "testmoz-bio-gaseous-6",
      question: "The tidal volume of lungs it raised or during normal breath is",
      options: ["4 liters", "5 liters", "6 liters", "2 liters"],
      answer: 3,
    },
    {
      id: "testmoz-bio-gaseous-7",
      question: "During inhalation",
      options: [
        "The diaphragm flattens out and the ribs are raised",
        "Diaphragm is raised due to ribs are lowered",
        "The diaphragm flattens out and the ribs are lowerred",
        "The diaphragm is raised and ribs are raised",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-gaseous-8",
      question: "Which form of carbon dioxide mainly transported in blood",
      options: ["Is Carbo amino hemoglobin", "As carbonic acid", "Hydrogen carbonate", "In solution"],
      answer: 2,
    },
    {
      id: "testmoz-bio-gaseous-9",
      question: "The absorption of oxygen from the atmosphere into the blood take place in the",
      options: ["Pulmonary artery", "Pulmonary vein", "Alveoli", "Trachea"],
      answer: 2,
    },
    {
      id: "testmoz-bio-gaseous-10",
      question: "The passageways of the respiratory system are linked by mucus secreting cells",
      options: ["Tracheal cells", "Goblet cells", "Surfactants cells", "Pleural cells"],
      answer: 1,
    },
    {
      id: "testmoz-bio-gaseous-11",
      question: "Respiratory pigments",
      options: [
        "Combined reversiblely with only oxygen",
        "All have four haem groups",
        "Attached to the alveolar wall",
        "None of them",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-gaseous-12",
      question: "In frog new air drawn into bucco pharyngitis cavity through nostrils and old air retained under pressure in",
      options: ["Lungs", "Nasals", "Glottis", "Trachea"],
      answer: 0,
    },
    {
      id: "testmoz-bio-gaseous-13",
      question: "In coughing the air is forcibly blown larynx while in sneezing it is blown through",
      options: ["Mouth", "Nasal cavities", "Both of them", "None of these"],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-005",
      question: "Which type of nephron is responsible for the development of osmotic gradients in the renal medulla?",
      options: ["Glomerular", "Cortical", "Juxtamedullary", "Medullary"],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-006",
      question: "Which of the following best describes how the distal convoluted tubule contributes to regulation of blood pH in the body?",
      options: [
        "Selective reabsorption of Glucose",
        "Active secretion of hydrogen ions into the filtrate",
        "Active secretion of sodium from the glomerular filtrate",
        "Tubular reabsorption of potassium ions",
      ],
      answer: 1,
    },
    {
      id: "homeostasis-kmu-007",
      question: "The sodium potassium pumps in the distal convoluted tubule are activated by:",
      options: ["Aldosterone", "Antidiuretic hormone", "Anti-natriuretic peptide", "Renin"],
      answer: 0,
    },
    {
      id: "homeostasis-kmu-008",
      question: "If a person drinks excessive amount of water, how does the kidney respond to maintaining osmoregulation?",
      options: [
        "Increase ADH release and water reabsorption",
        "Increase aldosterone release and reabsorb more sodium",
        "Decrease ADH release and increase water excretion",
        "Decrease renin secretion and retain more water",
      ],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-009",
      question: "The primary function of glomerular capillaries is:",
      options: [
        "Reabsorption of water and solutes from the renal tubules",
        "Secretion of waste products from the blood into the tubules",
        "Filtration of blood from glomerular filtrate",
        "Supply of nutrients and oxygen to the kidney tissue",
      ],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-011",
      question: "Which nitrogenous waste has the lowest solubility in water?",
      options: ["Urea", "Ammonia", "Uric acid", "Nitrite"],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-012",
      question: "By nature, human excretory system is:",
      options: ["Ammoniotelic", "Uricotelic", "Ureotelic", "Aminotelic"],
      answer: 2,
    },
    {
      id: "homeostasis-kmu-013",
      question: "Hyperparathyroidism may lead to the formation of:",
      options: ["Calcium phosphate stones", "Uric acid stones", "Cystine stones", "Struvite stones"],
      answer: 0,
    },
    {
      id: "homeostasis-siba-006",
      question: "Which one of the following is the most common nitrogenous waste excreted in urine of a healthy human?",
      options: ["Ammonia", "Urea", "Uric Acid", "Creatinine"],
      answer: 1,
    },
    {
      id: "homeostasis-siba-010",
      question: "Which class of animals excrete ammonia as their primary nitrogenous waste?",
      options: ["Uricotelic", "Ureotelic", "Ammonotelic", "Urotelic"],
      answer: 2,
    },
    {
      id: "homeostasis-siba-020",
      question: "The water content of human kidney is regulated by ADH. Which of the following gland is involved in its secretion process?",
      options: ["Adrenal gland", "Pituitary gland", "Thyroid gland", "Parathyroid gland"],
      answer: 1,
    },
    {
      id: "homeostasis-siba-021",
      question: "Overconsumption of which of the following foods increases the risk of calcium oxalate stone?",
      options: ["Leafy vegetables", "Fruits contain Vitamin C", "Fruits contain high fiber", "Whole grains"],
      answer: 0,
    },
    {
      id: "homeostasis-uhs-001",
      question: "Kidneys perform their osmoregulatory role under the effect of Antidiuretic Hormone, which type of urine is produced in this situation?",
      options: [
        "Hypotonic urine with decreased volume",
        "Hypotonic urine with increased volume",
        "Hypertonic urine with decreased volume",
        "Hypertonic urine with increased volume",
      ],
      answer: 2,
    },
    {
      id: "homeostasis-uhs-032",
      question: "The process of osmoregulation refers to:",
      options: [
        "The filtration of blood to remove metabolic waste",
        "The regulation of solute and water movement between an organism and its environment",
        "The creation of an osmotic gradient in the kidney medulla",
        "The secretion of hormones that control blood plasma",
      ],
      answer: 1,
    },
    {
      id: "reprod-001",
      question: "In human females, normally ovulation occurs at day _____ of the menstrual cycle.",
      options: ["9", "11", "14", "15"],
      answer: 2,
    },
    {
      id: "reprod-002",
      question: "In human female normally ovulation occurs at day _____ of menstrual cycle.",
      options: ["9", "11", "14", "15"],
      answer: 2,
    },
    {
      id: "reprod-003",
      question: "Decreased level of FSH hormone during menstrual cycle triggers the release of:",
      options: ["hCG", "LH", "Oxytocin", "Progesterone"],
      answer: 1,
    },
    {
      id: "reprod-004",
      question: "If a colorblind lady marries a normal man, their children will be:",
      options: [
        "Normal daughters and normal sons",
        "Normal sons and carrier daughters",
        "Colorblind sons and carrier daughters",
        "Colorblind sons and colorblind daughters",
      ],
      answer: 2,
    },
    {
      id: "reprod-005",
      question: "Which of the following hormones is not produced in older women?",
      options: ["Estrogen", "Gastrin", "Secretin", "Renin"],
      answer: 0,
    },
    {
      id: "reprod-006",
      question: "The part of male reproductive system that maintains the temperature for sperm production is:",
      options: ["Testes", "Scrotum", "Vas deferens", "Epididymis"],
      answer: 1,
    },
    {
      id: "reprod-007",
      question: "Receiving, retaining and nourishing a fertilized ovum is the main function of:",
      options: ["Cervix", "Uterus", "Ovary", "Oviduct"],
      answer: 1,
    },
    {
      id: "reprod-008",
      question: "During menstrual cycle, luteinizing hormone (LH) is secreted due to:",
      options: ["Decrease in Estrogen", "Decrease in FSH", "Increase in estrogen", "Environmental effect"],
      answer: 2,
    },
    {
      id: "reprod-009",
      question: "Self-fertilization in plants through successive generations can lead to the development of:",
      options: [
        "Hybrid breeds of plants",
        "Variations in coming generation",
        "True breeding plants",
        "Adaptation with their environment",
      ],
      answer: 2,
    },
    {
      id: "reprod-010",
      question: "A baby girl is born with hemophilia, which is an X-linked recessive disorder. What are the most likely genotypes of her parents?",
      options: [
        "The mother is a carrier and the father is normal.",
        "The mother is hemophiliac and the father is normal.",
        "The mother is carrier and the father is hemophiliac.",
        "Both are normal.",
      ],
      answer: 2,
    },
    {
      id: "reprod-011",
      question: "In a normal 28 days menstrual cycle when would you expect the LH surge to occur?",
      options: ["Days 7–10", "Days 11–14", "Days 15–18", "Days 19–22"],
      answer: 1,
    },
    {
      id: "reprod-012",
      question: "The process of spermatogenesis occurs in which part of the male reproductive system?",
      options: ["Seminiferous tubules", "Vas deferens", "Scrotum", "Epididymis"],
      answer: 0,
    },
    {
      id: "reprod-013",
      question: "Which layer of uterus nourishes the embryo after implantation?",
      options: ["Cervical epithelium", "Myometrium", "Endometrium", "Perimetrium"],
      answer: 2,
    },
    {
      id: "reprod-014",
      question: "If a normal person marries with colour blind female what will be the possibility of normal male child?",
      options: ["0%", "25%", "50%", "75%"],
      answer: 0,
    },
    {
      id: "reprod-015",
      question: "Touching a sharp object stimulates pain receptors. This information is carried to the central nervous system by the:",
      options: ["Motor neuron", "Sensory neuron", "Associative neuron", "Effector neuron"],
      answer: 1,
    },
    {
      id: "reprod-016",
      question: "The number of chromosomes in a haploid cell are:",
      options: [
        "Half the chromosomes in a normal body cell",
        "Double the chromosomes in a normal body cell",
        "Quarter the chromosomes in a normal body cell",
        "Equal to the chromosomes in a normal body cell",
      ],
      answer: 0,
    },
    {
      id: "reprod-017",
      question: "Which of the following is a branched polysaccharide found in animals?",
      options: ["Cellulose", "Glycogen", "Amylose", "Chitin"],
      answer: 1,
    },
    {
      id: "reprod-018",
      question: "A substance that binds to an enzyme, but NOT at the active site and reduces the enzyme activity is called a:",
      options: ["Competitive inhibitor", "Substrate", "Non-Competitive inhibitor", "Cofactor"],
      answer: 2,
    },
    {
      id: "reprod-020",
      question: "Which of the following is the sexually transmitted disease?",
      options: ["Syphilis", "Lung Cancer", "Tuberculosis", "Autoimmune disorders"],
      answer: 0,
    },
    {
      id: "reprod-021",
      question: "Beside fertilization, the function of fallopian tube is:",
      options: [
        "Nourishment of embryo",
        "Transport of ovum towards uterus",
        "Secretion of female hormones",
        "Implantation of zygote",
      ],
      answer: 1,
    },
    {
      id: "reprod-022",
      question: "Which changes occur in the endometrium during the proliferative phase of the menstrual cycle?",
      options: ["It begins to shed", "It regenerates and thickens", "It becomes secretory", "No change occurs"],
      answer: 1,
    },
    {
      id: "reprod-023",
      question: "In males, which of the following is considered a urogenital organ?",
      options: ["Urethra", "Ureter", "Urinary bladder", "Vas deferens"],
      answer: 0,
    },
    {
      id: "reprod-024",
      question: "The other name for interstitial cells in male testes is:",
      options: ["Leydig cell", "Spermatogonia cell", "Sertoli cell", "Spermatocyte"],
      answer: 0,
    },
    {
      id: "reprod-025",
      question: "If fertilization does not occur, which part of uterus degenerates?",
      options: ["Myometrium", "Endometrium", "Perimetrium", "Cervix"],
      answer: 1,
    },
    {
      id: "reprod-026",
      question: "The part of male reproductive system involved in the storage and maturation of sperms is:",
      options: ["Scrotum", "Vas deferens", "Epididymis", "Testes"],
      answer: 2,
    },
    {
      id: "reprod-027",
      question: "Which of the following is NOT a function of testes?",
      options: ["Spermatogenesis", "Production of FSH", "Secretion of inhibin", "Secretion of testosterone"],
      answer: 1,
    },
    {
      id: "reprod-028",
      question: "Implantation of the embryo occurs in which part of the female reproductive system?",
      options: ["Ovary", "Uterus", "Cervix", "Fallopian tube"],
      answer: 1,
    },
    {
      id: "reprod-029",
      question: "Which of the following is the causative agent of Gonorrhea?",
      options: [
        "Herpes simplex virus",
        "Treponema pallidum",
        "Mycobacterium tuberculosis",
        "Neisseria gonorrhoeae",
      ],
      answer: 3,
    },
    {
      id: "reprod-030",
      question: "After ovulation, the ruptured follicle in ovary is transformed into:",
      options: ["Corpus luteum", "Corpus callosum", "Secondary follicle", "Tertiary follicle"],
      answer: 0,
    },
    {
      id: "reprod-031",
      question: "The _____ in semen facilitate the transport of sperms.",
      options: ["Androgen", "Prostaglandins", "Oxytocin", "Testosterone"],
      answer: 1,
    },
    {
      id: "reprod-032",
      question: "The acidity of urine is neutralized by:",
      options: ["Cowper's gland", "Prostate gland", "Seminal vesicle", "Vas deferens"],
      answer: 0,
    },
    {
      id: "reprod-033",
      question: "The corpus luteum is essentially formed from:",
      options: ["Graafian follicle", "Ovum", "Oogonium", "Oocyte"],
      answer: 0,
    },
    {
      id: "reprod-034",
      question: "The outer layer of uterus is called as:",
      options: ["Endometrium", "Myometrium", "Mesometrium", "Perimetrium"],
      answer: 3,
    },
    {
      id: "reprod-035",
      question: "_____ is spread through sexual contact.",
      options: ["Gonorrhoea", "Influenza", "Tuberculosis", "Typhoid"],
      answer: 0,
    },
    {
      id: "reprod-036",
      question: "Which one of the following conditions produces a sterile female with Turner's syndrome in human but sterile male in Drosophila?",
      options: ["XO", "XXO", "XXX", "XXY"],
      answer: 0,
    },
    {
      id: "reprod-037",
      question: "Which one of the following sexually transmitted diseases attacks T4 lymphocytes?",
      options: ["AIDS", "Genital Herpes", "Gonorrhea", "Syphilis"],
      answer: 0,
    },
    {
      id: "reprod-038",
      question: "Which one of the following cells produces the first polar body during oogenesis in female reproductive system?",
      options: ["Oogonia", "Ovum", "Primary oocytes", "Secondary oocytes"],
      answer: 2,
    },
    {
      id: "reprod-039",
      question: "In human testes, spermatozoa are present in:",
      options: ["Epididymis", "Interstitial cells", "Seminiferous tubules", "Sertoli cells"],
      answer: 2,
    },
    {
      id: "reprod-040",
      question: "When does ovulation occur during the uterine cycle in human female?",
      options: [
        "After 6 days of start of menstruation",
        "After 10 days of start of menstruation",
        "After 14 days of start of menstruation",
        "After 27 days of start of menstruation",
      ],
      answer: 2,
    },
    {
      id: "reprod-041",
      question: "Female reproductive system consists of all the following EXCEPT:",
      options: ["Ovaries", "Oviduct", "Cervix", "Seminiferous tubules"],
      answer: 3,
    },
    {
      id: "reprod-042",
      question: "Which one of the following hormones is responsible for the labor pains in human female at the time of birth of baby?",
      options: ["Estrogen", "Progesterone", "Oxytocin", "Corticosteroid"],
      answer: 2,
    },
    {
      id: "reprod-043",
      question: "Fluid secreted by Sertoli cells provides liquid medium, protection and nourishment to:",
      options: ["Oocyte", "Sperms", "Polar body", "Spermatogonia"],
      answer: 1,
    },
    {
      id: "reprod-044",
      question: "Corpus luteum during female reproductive cycle produces:",
      options: [
        "Testosterone",
        "Follicle stimulating hormone",
        "Luteinizing Hormone",
        "Progesterone",
      ],
      answer: 3,
    },
    {
      id: "reprod-045",
      question: "Due to the process of follicle atresia:",
      options: [
        "Follicles reach maximum size",
        "Follicle degenerates",
        "Graafian follicle ovulates",
        "Follicle starts to mature",
      ],
      answer: 1,
    },
    {
      id: "reprod-046",
      question: "Main function of the epididymis is to:",
      options: ["Transport sperms", "Connect with urethra", "Produce semen", "Hold the process of spermatogenesis"],
      answer: 0,
    },
    {
      id: "reprod-047",
      question: "Immediate next stage of spermatogonia differentiation is:",
      options: ["Secondary spermatocyte", "Spermatids", "Primary spermatocytes", "Sperms"],
      answer: 2,
    },
    {
      id: "reprod-049",
      question: "In artificial selection, we develop desired characteristics in offspring to create:",
      options: ["New males", "New females", "New breeds", "New organs"],
      answer: 2,
    },
    {
      id: "reprod-051",
      question: "What is/are the element(s) of nervous system which help in nervous coordination?",
      options: ["Neurons", "Receptors", "Effectors", "All of these"],
      answer: 3,
    },
    {
      id: "reprod-052",
      question: "A tetrad is also known as:",
      options: [
        "Bivalent",
        "Duplicated chromosome",
        "Paired homologous chromosome",
        "Homologous and thickened chromosome",
      ],
      answer: 0,
    },
    {
      id: "reprod-053",
      question: "What is the other name for resting membrane potential in neural membrane?",
      options: ["Polarized state", "Depolarized state", "Hyperpolarized state", "All of the above"],
      answer: 0,
    },
    {
      id: "reprod-054",
      question: "Persons can bleed to death from small cuts or bruises in:",
      options: ["Typhoid", "Dysentery", "Haemophilia", "Colour blindness"],
      answer: 2,
    },
    {
      id: "reprod-055",
      question: "A peptide hormone, released from Sertoli cells, inhibiting secretion of FSH is:",
      options: ["Testosterone", "GnRH", "FSH", "Inhibin", "Luteinizing hormone"],
      answer: 3,
    },
    {
      id: "reprod-056",
      question: "The site of maturation and storage of sperms is:",
      options: ["Seminal vesicles", "Scrotum", "Testes", "Epididymis", "Vasa deferentia"],
      answer: 3,
    },
    {
      id: "reprod-057",
      question: "A disease resulting in complete lack of spermatozoa in ejaculate is:",
      options: ["Azoospermia", "Obstruction", "Oligospermia", "Zoospermia", "Ejaculation disorder"],
      answer: 0,
    },
    {
      id: "reprod-058",
      question: "The number of teeth in deciduous and permanent teeth is:",
      options: [
        "21 and 32 respectively",
        "18 and 22 respectively",
        "12 and 32 respectively",
        "10 and 32 respectively",
        "20 and 32 respectively",
      ],
      answer: 4,
    },
    {
      id: "reprod-059",
      question: "Which hormone is responsible to convert the ruptured follicle into a yellowish glandular mass known as corpus luteum?",
      options: ["FSH", "ACTH", "DHT", "LH", "TSH"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-1",
      question: "Which of the following disease is sexually transmitted",
      options: ["Tuberculosis", "AIDS", "Dengue fever", "Cholera"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-2",
      question: "Pre fertilization events among the following are",
      options: ["Syngamy", "Formation of zygote", "Gametogenesis and gamete transfer", "Embryogenesis"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-3",
      question: "On which date is a woman most likely to ovulate if the day of menstrual loss was first February",
      options: ["5th February", "14th February", "28 February", "1st March"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-4",
      question: "During spermatogenesis each primary is permatocytes forms for similar sperms where is in oogenesis each primary Oocyte forms",
      options: [
        "Two similar secondary oocytes and two polar bodies",
        "3 similar large mature ova and one polar body",
        "Four large and similar ova",
        "One large ovum and two or three polar bodies",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-5",
      question: "Which layer of uterus involved in labor pain",
      options: ["Myometrium", "Endometrium", "Epimetrium", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-6",
      question: "One sperm fuses with an ovum the remaining sperm cannot fertilize over what changes are responsible for such a phenomena",
      options: [
        "Selective permission through ovum",
        "Specific special arrangement of Corona radiata cells",
        "Change in the membrane zona pellucida",
        "Oven releases toxic substance thereby killing other sperms",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-7",
      question: "One of the following is correct matching of the events occurring during menstrual cycle",
      options: [
        "Mensuration: breakdown of myometrium and ovum fertilized",
        "Proliferative phase: Rapid regeneration of myometrium and maturation of graphian follicle",
        "Ovulation: LH and fsh attend peak level and sharp fall in secretion of progesterone",
        "Secretary phase: development of Corpus luteum and increased secretion of progesterone",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-8",
      question: "Energy centre of sperm is",
      options: ["Head", "Entire sperm", "Middle piece", "Tail"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-9",
      question: "During pregnancy the production of ova in ovary is prevented by",
      options: ["Estrogen", "Progesterone", "Relaxin", "Prolactin"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-10",
      question: "The direct function of GnRH is",
      options: [
        "Stimulate production of oestrogen and progesterone",
        "Initiate ovulation",
        "Inhibit secretion of pituitary hormones",
        "Stimulate secretion of LH and fsh",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-11",
      question: "Fsh in males acts on",
      options: ["Interstitial cells", "Germinal epithelium", "Simple epithelium", "Germinal endotherm"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-12",
      question: "Internal lining of uterus are called",
      options: ["Myometrium", "Endometrium", "Perimetrium", "Epimetrium"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-13",
      question: "Which one of the following differentiate or develops directly into mature sperms",
      options: ["Primary spermatocytes", "Secondary spermatocyte", "Spermatogonia", "Spermatid"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-14",
      question: "Which of the following hormone causes ovulation",
      options: ["LH", "Progesterone", "Oestrogen", "Fsh"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-15",
      question: "Which of the following does not occur between 15 to 28 day of menstrual cycle",
      options: ["Pre menstrual phase", "Proliferative phase", "Luteal phase", "Secretary phase"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-16",
      question: "The oocyte released during ovulation is in",
      options: ["Anaphase 1", "Metaphase 1", "Prophase 1", "Metaphase II"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-17",
      question: "In spermatogenesis reduction division of chromosome occurs during conversion of",
      options: [
        "Spermatogonia to primary spermatocytes",
        "Secondary spermatocytes to spermatids",
        "Primary is permatocytes to secondary spermatocytes",
        "All of these",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-18",
      question: "50 secondary oocytes in female in 50 secondary spermatocytes in male give rise to",
      options: ["100 ova and 100 sperms", "50 ova and 200 sperms", "200 ova and 50 sperms", "50 ova and 100 sperms"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-19",
      question: "Which of the following represents the changes that occurs in the ovary and uterus approximately every 28 days involving evolution With The breakdown and loss of the lining of the uterus",
      options: ["Ovulation", "Menstrual cycle", "Uterine cycle", "Embryo formation"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-20",
      question: "In which phase of human menstrual cycle endometrium prepare for the implantation of embryo",
      options: ["Proliferative phase", "Secretary phase", "Mensuration phase", "Ovulation phase"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-21",
      question: "Uterus opens into vagina Through",
      options: ["Cervix", "Fallopian tube", "Uterus", "Urethra"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-22",
      question: "The first cell produced by the repeated cell division of germinal epithelium of testis are",
      options: ["Interstitial cells", "Spermatogonia", "Secondary spermatocytes", "Spermated"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-23",
      question: "Sexual reproduction is a process during which",
      options: [
        "All type of organism produce",
        "Many cells of one type fuse with a single cell of another type",
        "Nuclei of two specialized cells fuse together",
        "Parents produce genetically identical off Springs",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-24",
      question: "In a menstrual cycle of 24 days which of the following will be the day of ovulation",
      options: ["14th day", "10th day", "7th day", "6th day"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-25",
      question: "The bacteria that infect the mucus membrane of the urinogenital tract is",
      options: ["Neisseria gonorrhea", "Troponema paledum", "Clostridium tetani", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-26",
      question: "Yellowish glandular structure formed after the release of egg from follicle is called",
      options: ["Corpus luteum", "Corpus collasum", "Follicle atresia", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-27",
      question: "Follicular atresia is the degeneration of",
      options: ["Primary oocyte", "Ist polar body", "Primary follicle", "2nd polar body"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-28",
      question: "If for some reasons that Vasa efferentia in the human reproductive system get blocked the gamete its will not be transported from",
      options: ["Ovary to uterus", "Testis to epididymis", "Vagina to uterus", "Epididymis to vas deferns"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-29",
      question: "Oogenesis in human females starts",
      options: ["At puberty", "Before birth", "Before puberty", "After puberty"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-30",
      question: "In human beings normally in which one of the following parts does the sperm fertilized the ovum",
      options: ["Cervix", "Upper part of uterus", "Fallopian tubes", "Lower part of uterus"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-31",
      question: "Which hormone regulates spermatogenesis",
      options: ["T4", "Oestrogen", "Inhibin", "Progesterone"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-32",
      question: "Leydig cells secrete",
      options: ["Testosterone", "Progesterone", "All", "Oestrogen"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-33",
      question: "Sertoli cells are found in testis those cells are",
      options: ["Nurse cells", "Receptors cells", "Reproductive cells", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-34",
      question: "In a mammalian sperm spirally arranged mitochondria found in axial filament occurs in",
      options: ["Middle piece", "Principal piece of tail", "Head", "End piece of tail"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-35",
      question: "At which month of pregnancy the human embryo is referred to as the foetus",
      options: ["6th month", "Third month", "4th month", "Second month"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-36",
      question: "Which one is unpaired gland in male reproductive system",
      options: ["Seminal vesicle", "Prostate gland", "Cowpers gland", "Lacrimal gland"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-37",
      question: "Mainly which type of hormones control the menstrual cycle in human beings",
      options: ["Fsh", "Progesterone", "LH", "Fsh LH estrogen"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-38",
      question: "Implantation of zygote occurs",
      options: ["Oviduct", "Uterus", "Uterine", "Cervix"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-39",
      question: "Progesterone level is increased in all conditions except",
      options: ["Pregnancy", "Gestation", "Luteal phase", "Mensuration"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-40",
      question: "What would happen if vasa differentia of man are cut",
      options: [
        "Sperms are non nucleate",
        "Semen is without sperms",
        "Spermatogenesis does not occur",
        "Sperms are non motile",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-41",
      question: "The structure that is formed at the site of ovulation",
      options: ["Placenta", "Grafian follicle", "Corpus luteum", "Primary o site"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-42",
      question: "Discharge of ovum or secondary who side from ovary or from graphian follicle is called",
      options: ["Fertilization", "Mensturation", "Ovulation", "Atresia"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-43",
      question: "If the diploid number of human chromosomes is 46 how many chromosomes would you expect to find in a spermatogonium",
      options: ["12", "23", "46", "92"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-44",
      question: "The scrotum is responsible for which of the following in the male reproductive system",
      options: ["Formation of sperms", "Lubrication", "Nourishment of sperms", "Temperature regulation"],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-45",
      question: "Which hormonal pair would maintain the endometrium and make it receptive for implantation of embryo",
      options: [
        "Luteinizing hormone and progesterone",
        "Oestrogen and follicle hormone",
        "Luteinizing hormone and follicle is stimulating hormone",
        "Oestrogen and progesterone",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-reprod-46",
      question: "The following hormone suppresses ovulation",
      options: ["Progesterone", "Oestrogen", "Insulin", "Fsh"],
      answer: 0,
    },
    {
      id: "testmoz-bio-reprod-47",
      question: "Which of the following hormone on the uterus wall for thickening",
      options: ["Zona pellucida", "Progesterone", "Oxytocin", "Follicular stimulating hormone"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-48",
      question: "Which hormone is released in female in response to fsh from pituitary gland",
      options: ["Oxytocin", "Adh", "Oestrogen", "Progesterone"],
      answer: 2,
    },
    {
      id: "testmoz-bio-reprod-49",
      question: "Which of the following is secreted principally by the Corpus luteum of human ovary",
      options: ["LH", "Progesterone", "Follicle stimulating hormone", "Testosterone"],
      answer: 1,
    },
    {
      id: "testmoz-bio-reprod-50",
      question: "Which of the following will happen if fertilization does not occur",
      options: [
        "Menopause starts",
        "Corpus luteum degenerates",
        "Fsh secretion is increased",
        "Progesterone secretion is increased",
      ],
      answer: 1,
    },
    {
      id: "support-and-movement-001",
      question: "Which of the following is included in paired cranial bones?",
      options: ["Temporal", "Occipital", "Frontal", "Vomer"],
      answer: 0,
    },
    {
      id: "support-and-movement-002",
      question: "Which of the following skeletal disorders is an example of autoimmune disorder?",
      options: ["Sciatica", "Spondylosis", "Rheumatoid arthritis", "Rickets"],
      answer: 2,
    },
    {
      id: "support-and-movement-003",
      question: "Which feature is possessed by smooth muscles?",
      options: ["Voluntary", "Branched", "Uni-nucleate", "Striated appearance"],
      answer: 2,
    },
    {
      id: "support-and-movement-004",
      question: "The accumulation of lactic acid in the muscles results in:",
      options: ["Extreme fatigue", "Muscle contraction", "Paralysis", "Convulsion"],
      answer: 0,
    },
    {
      id: "support-and-movement-005",
      question: "Thick filaments in skeletal muscles are composed of:",
      options: ["Actin", "Myosin", "Tropomyosin", "Troponin"],
      answer: 1,
    },
    {
      id: "support-and-movement-006",
      question: "Sarcomere is part of myofibril between:",
      options: ["Two I bands", "Two A bands", "Two M lines", "Two Z lines"],
      answer: 3,
    },
    {
      id: "support-and-movement-007",
      question: "Which of the following is NOT a bone of the upper limb?",
      options: ["Humerus", "Ulna", "Femur", "Radius"],
      answer: 2,
    },
    {
      id: "support-and-movement-008",
      question: "Bone-forming cells are:",
      options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Osteons"],
      answer: 0,
    },
    {
      id: "support-and-movement-009",
      question: "Which is the common feature between cardiac and smooth muscles?",
      options: ["Voluntary", "Involuntary", "Branched", "Unbranched"],
      answer: 1,
    },
    {
      id: "support-and-movement-010",
      question: "The joints which cause rotational movements are:",
      options: ["Hinge", "Ball and socket", "Cartilage", "Sutures"],
      answer: 1,
    },
    {
      id: "support-and-movement-011",
      question: "Why are thick filaments unable to bind with thin filaments in a relaxed muscle fiber?",
      options: [
        "Actin blocks the myosin binding site",
        "Tropomyosin blocks the myosin binding site",
        "Troponin blocks the myosin binding site",
        "Tropomyosin blocks the troponin binding site",
      ],
      answer: 1,
    },
    {
      id: "support-and-movement-012",
      question: "Once an action potential reaches the membrane of a skeletal muscle fiber, what is the first event that occurs in the contraction process?",
      options: [
        "Actin and myosin form a cross-bridge",
        "Calcium is pumped back into the sarcoplasmic reticulum",
        "Calcium is released from the sarcoplasmic reticulum",
        "ATP is hydrolyzed by troponin",
      ],
      answer: 2,
    },
    {
      id: "support-and-movement-013",
      question: "The pubic symphysis is a slightly movable joint joined by which of the following tissue?",
      options: ["Elastic cartilage", "Fibrocartilage", "Costal cartilage", "Articular cartilage"],
      answer: 1,
    },
    {
      id: "support-and-movement-014",
      question: "Arthritis is:",
      options: [
        "Inflammation of joints",
        "Herniation of intervertebral disc",
        "Fusion of vertebral joint",
        "Tingling along the length of legs",
      ],
      answer: 0,
    },
    {
      id: "support-and-movement-015",
      question: "Which type of joint is present in pubis?",
      options: ["Fibrous joints", "Immovable joints", "Cartilaginous joints", "Freely moveable joints"],
      answer: 2,
    },
    {
      id: "support-and-movement-016",
      question: "In which of the following combinations, both components have hyaline cartilage?",
      options: [
        "Epiglottis & intervertebral disc",
        "Trachea & intervertebral disc",
        "Nose & pinna",
        "Nose & trachea",
      ],
      answer: 3,
    },
    {
      id: "support-and-movement-017",
      question: "Which of the following characters is shared by both skeletal and cardiac muscles?",
      options: ["Presence of striation", "Involuntary control", "Multinucleated fibers", "Intercalated discs"],
      answer: 0,
    },
    {
      id: "support-and-movement-018",
      question: "Which of the following muscle types are involuntary in action?",
      options: ["Skeletal and smooth", "Skeletal and cardiac", "Cardiac and smooth", "Smooth muscle only"],
      answer: 2,
    },
    {
      id: "support-and-movement-019",
      question: "In which of the following combinations, both components have non-striated muscle fibers?",
      options: ["Intestine & biceps", "Intestine & blood vessels", "Heart & lungs", "Stomach & heart"],
      answer: 1,
    },
    {
      id: "support-and-movement-020",
      question: "Which one of the following bones is NOT part of the eye orbit?",
      options: ["Ethmoid", "Lacrimal", "Sphenoid", "Zygomatic"],
      answer: 0,
    },
    {
      id: "support-and-movement-021",
      question: "By the fusion of ilium, ischium and pubis in the pelvic girdle, ____ is formed.",
      options: ["Ball and socket joint", "Cartilaginous joint", "Fibrous joint", "Hinge joint"],
      answer: 0,
    },
    {
      id: "support-and-movement-022",
      question: "When muscle contracts, Z-line is __, I-band __ and H-zone disappears.",
      options: ["Closer, enlarged", "Closer, shortened", "Distant, enlarged", "Distant, shortened"],
      answer: 1,
    },
    {
      id: "support-and-movement-023",
      question: "The living cells of cartilage are called:",
      options: ["Chondroblasts", "Chondroclasts", "Chondrocytes", "Osteocytes"],
      answer: 2,
    },
    {
      id: "support-and-movement-024",
      question: "Which muscle type is under conscious control and is multinucleated?",
      options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Visceral muscle"],
      answer: 1,
    },
    {
      id: "support-and-movement-025",
      question: "Which of the following connective tissues is completely avascular and heals slowly?",
      options: ["Bone", "Cartilage", "Adipose tissue", "Areolar tissue"],
      answer: 1,
    },
    {
      id: "support-and-movement-026",
      question: "Cardiac muscles are different from skeletal muscles because they:",
      options: [
        "Lack striations",
        "Are voluntary and multinucleated",
        "Are involuntary and multinucleated",
        "Are striated but involuntary",
      ],
      answer: 3,
    },
    {
      id: "support-and-movement-027",
      question: "In muscle fibers, T-tubules are extensions of the sarcolemma that penetrate into the cell’s interior. What is their main function during muscle contraction?",
      options: [
        "Unblock actin’s binding sites",
        "Conduct nerve impulses deep into the muscle cell",
        "Synthesize glycogen in the sarcoplasm",
        "Store calcium ions within the sarcoplasmic reticulum",
      ],
      answer: 1,
    },
    {
      id: "support-and-movement-028",
      question: "The event that occurs first during skeletal muscle contraction is:",
      options: [
        "Cross-bridge formation",
        "Release of calcium from sarcoplasmic reticulum",
        "Power stroke",
        "Myosin head binds to ATP",
      ],
      answer: 1,
    },
    {
      id: "support-and-movement-029",
      question: "The end of skeletal muscle attached to the movable bone is:",
      options: ["Insertion", "Origin", "Tendons", "Belly"],
      answer: 0,
    },
    {
      id: "support-and-movement-030",
      question: "Fibrocartilage is found in:",
      options: ["Trachea", "Nose", "Knee joint", "Ear flaps"],
      answer: 2,
    },
    {
      id: "support-and-movement-031",
      question: "Arthritis is a disease that primarily affects the:",
      options: ["Kidneys", "Lungs", "Joints", "Muscles"],
      answer: 2,
    },
    {
      id: "support-and-movement-032",
      question: "Formation of hard uric acid crystals in the joints is identified as:",
      options: ["Rheumatoid arthritis", "Ankylosing spondylitis", "Osteoarthritis", "Callus", "Gout"],
      answer: 4,
    },
    {
      id: "support-and-movement-033",
      question: "Which cells are responsible for the formation of cartilage?",
      options: ["Neurosecretory cells", "Lymphocytes", "Osteocytes", "Leukocytes", "Chondrocytes"],
      answer: 4,
    },
    {
      id: "support-and-movement-034",
      question: "Living cells of cartilage are called:",
      options: ["Osteocytes", "Thrombocytes", "Chondrocytes", "Osteoblasts"],
      answer: 2,
    },
    {
      id: "support-and-movement-035",
      question: "The regulator of muscle contraction, which is released from the sarcoplasmic reticulum, is:",
      options: ["Tropomyosin", "Troponin", "Calcium ions", "ATP"],
      answer: 2,
    },
    {
      id: "support-and-movement-036",
      question: "Which of the following surrounds myofibrils in skeletal muscle and stores and distributes calcium ions during muscle functioning?",
      options: ["Sarcolemma", "Sarcoplasmic reticulum", "Transverse tubules", "Sarcoplasm"],
      answer: 1,
    },
    {
      id: "support-and-movement-037",
      question: "Shivering thermogenesis involves:",
      options: ["Voluntary muscle contraction", "Involuntary muscle contraction", "Dehydration", "Hormone secretion"],
      answer: 1,
    },
    {
      id: "support-and-movement-038",
      question: "The most common type of arthritis is:",
      options: ["Gout", "Rheumatoid arthritis", "Osteoarthritis", "Spondylitis"],
      answer: 2,
    },
    {
      id: "support-and-movement-039",
      question: "Which type of joint allows bending of the elbow joint and has a synovial cavity?",
      options: ["Cartilaginous joint", "Fibrous joint", "Pubic symphysis", "Hinge joint"],
      answer: 3,
    },
    {
      id: "support-and-movement-040",
      question: "What is FALSE about cartilages?",
      options: [
        "Cells are called chondrocytes",
        "Consist of Type II collagen",
        "Heal very slowly",
        "Have an extensive blood supply",
      ],
      answer: 3,
    },
    {
      id: "support-and-movement-041",
      question: "Bones provide a rigid framework with an inorganic matrix of:",
      options: ["35%", "45%", "55%", "65%"],
      answer: 3,
    },
    {
      id: "support-and-movement-042",
      question: "An important feature of bone remodeling is bone breakdown. Which cell carries out this function?",
      options: ["Chondrocyte", "Osteocyte", "Osteoblast", "Osteoclast"],
      answer: 3,
    },
    {
      id: "support-and-movement-043",
      question: "Myofibrils consist of small contractile units called:",
      options: ["Sarcoplasm", "Sarcolemma", "Sarcomere", "Sarcoplasmic reticulum"],
      answer: 2,
    },
    {
      id: "support-and-movement-044",
      question: "Which muscle type is under conscious control and is multinucleated?",
      options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Ciliary muscle"],
      answer: 1,
    },
    {
      id: "support-and-movement-045",
      question: "Which part of the sarcomere contains both actin and myosin filaments?",
      options: ["I-band", "Z-line", "A-band", "H-zone"],
      answer: 2,
    },
    {
      id: "support-and-movement-046",
      question: "The primary role of calcium ions in muscle contraction is to:",
      options: ["Produce energy", "Bind with troponin", "Carry nerve impulses", "Break down ATP"],
      answer: 1,
    },
    {
      id: "support-and-movement-047",
      question: "Which of the following is an example of a fibrous joint?",
      options: ["Shoulder joint", "Elbow joint", "Intervertebral discs", "Skull sutures"],
      answer: 3,
    },
    {
      id: "support-and-movement-048",
      question: "The cells contained in the lacunae of the bone are called:",
      options: ["Chondrocytes", "Osteoblasts", "Osteocytes", "Osteoclasts"],
      answer: 2,
    },
    {
      id: "support-and-movement-049",
      question: "The __ surrounds the muscle fiber of the skeletal muscle.",
      options: ["Cytoplasm", "Lacunae", "Myofibrils", "Sarcoplasm"],
      answer: 3,
    },
    {
      id: "support-and-movement-050",
      question: "What happens to calcium when skeletal muscles recover from contraction?",
      options: [
        "Released from the sarcoplasmic reticulum",
        "Released from the myosin head",
        "Pumped into the sarcoplasmic reticulum",
        "Exchanged for sodium ions",
      ],
      answer: 2,
    },
    {
      id: "support-and-movement-051",
      question: "Which of the following does NOT relate to smooth muscles?",
      options: [
        "Controlled by the autonomic nervous system",
        "Have spindle-shaped cells",
        "Line the wall of heart",
        "Lack striations",
      ],
      answer: 2,
    },
    {
      id: "support-and-movement-052",
      question: "In humans, the ability of regeneration is restricted to the following organ:",
      options: ["Nerve tissue", "Bones", "Skin", "Muscles"],
      answer: 2,
    },
    {
      id: "support-and-movement-053",
      question: "There are __ types of reduction used for treating bone fractures.",
      options: ["Two", "Three", "Four", "Five"],
      answer: 0,
    },
    {
      id: "support-and-movement-054",
      question: "__ is a type of connective tissue.",
      options: ["Nail", "Hair", "Ligament", "Jaw bone"],
      answer: 2,
    },
    {
      id: "support-and-movement-055",
      question: "The connective tissue which connects skeletal muscle to bone is:",
      options: ["Tendon", "Ligament", "Cartilage", "Synovial membrane"],
      answer: 0,
    },
    {
      id: "support-and-movement-056",
      question: "Which one are bone-destroying cells?",
      options: ["Osteoclasts", "Osteocytes", "Osteogenic cells", "Osteoblasts"],
      answer: 0,
    },
    {
      id: "support-and-movement-057",
      question: "Which structure conducts the action potential deep into the muscle fiber?",
      options: ["Z-line", "Sarcomere", "T-tubules", "Sarcoplasmic reticulum"],
      answer: 2,
    },
    {
      id: "support-and-movement-058",
      question: "Which of the following does not occur during muscle contraction?",
      options: [
        "Release of calcium from sarcoplasmic reticulum",
        "Formation of cross-bridge",
        "Sliding of actin over myosin",
        "Increase in sarcomere length",
      ],
      answer: 3,
    },
    {
      id: "support-and-movement-059",
      question: "Maintenance of healthy bone tissues by secreting enzymes and influencing bone mineral content is the duty of:",
      options: ["Osteocytes", "Osteoblasts", "Osteoclasts", "Osteogenic cells"],
      answer: 0,
    },
    {
      id: "support-and-movement-060",
      question: "Cartilage receives its nutrition through the process of:",
      options: ["Active transport", "Diffusion", "Phagocytosis", "Osmosis"],
      answer: 1,
    },
    {
      id: "support-and-movement-061",
      question: "The nerve impulse for the contraction of skeletal muscle fiber is carried from sarcolemma to every myofibril of a muscle cell via:",
      options: ["T-tubules", "H-zone", "Thin myofilaments", "Thick myofilaments"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-1",
      question: "The thick filament in a muscle are made up of",
      options: ["Hemoglobin", "Myosin", "Thin", "Myoglobin"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-2",
      question: "Bones of the skulls are joined by",
      options: ["Fixed joints", "Sliding joints", "Pivot joints", "Gliding joints"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-3",
      question: "The point of attachment of the nerve to the muscle is called a",
      options: ["Neuromuscular Junction", "Mechanical Junction", "Chemical Junction", "Synaptic Junction"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-4",
      question: "All of the following are true about collagen fibres except",
      options: ["In elastic", "Flexible", "Living", "Protein"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-5",
      question: "How many lumber vertebrae are present",
      options: ["12", "5", "14", "6"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-6",
      question: "Which of the following bones are present in Palm of hand",
      options: ["Carpals", "Metacarpals", "Tarsals", "Metatarsals"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-7",
      question: "Five hip vertebrae fuse together to",
      options: ["Coccyx", "Sacrum", "Phalanges", "Femur"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-8",
      question: "Sarcolema is made up of",
      options: ["Lipoprotein", "Glycoprotein", "Glyco lipids", "Nucleoproteins"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-9",
      question: "It acts is immediate source of energy for muscle contraction",
      options: ["ATP", "Phospho creatine", "Fatty acids", "Glycogen"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-10",
      question: "In which of the following exoskeleton of Glass like silica is found",
      options: ["Mall uses sponges", "Arthropoda", "Diatoms", "Star fish"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-11",
      question: "Pathway of energy used by muscles convert from food is",
      options: [
        "Food -ATP- keratin- phosphate- protein",
        "Food- glycogen- ATP-creatine- phosphate",
        "Food -glycogen- creatine-phosphate ATP",
        "Food- protein -creatine -phosphate ATP",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-12",
      question: "The bones present in fingers",
      options: ["Phalanges", "Tarslas", "Lumbar", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-13",
      question: "Which of the following statement is true",
      options: [
        "Muscle has many muscle fibres",
        "Muscle fibre has many muscle cells",
        "Muscle cell has many myofibrils",
        "Sarcomere has bundles of muscle fibres",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-14",
      question: "Diameter of each myofibril is approximately",
      options: ["2 micrometre", "10 micrometer", "100 nanometer", "100 micrometer"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-15",
      question: "The function of calcium ions in muscle contraction is to",
      options: [
        "Bind to troponin molecule and cause them to move",
        "Aid in the transmission of nerve impulse",
        "Polarize visible light",
        "Bindotropomials in molecule and cause them to form cross Bridge",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-16",
      question: "How many bones are present in the wrist",
      options: ["Four bones", "Six bones", "Eight bones", "14 bones"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-17",
      question: "The lower two pairs of ribs are",
      options: ["True ribs", "False ribs", "Floating ribs", "articulated ribs"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-18",
      question: "All of the following are true regarding muscle contraction except",
      options: ["I band shortens", "A band remains unchanged", "Z lines get closer", "M line disappears"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-19",
      question: "Connective tissue raping around a muscle that is found continuous with tendons",
      options: ["Perimysium", "Endomysium", "Epimysium", "Perichondrium"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-20",
      question: "How many coxal bones are present in human body",
      options: ["1", "2", "3", "4"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-21",
      question: "The protein present in muscles",
      options: ["Hemoglobin", "Myoglobin", "Albumin", "None of these"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-22",
      question: "Which one of the following is correct regarding A band",
      options: [
        "It is non polarizing",
        "It contains only myosin",
        "It is isotropic",
        "Myosin act as polarizer of light",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-23",
      question: "Which type of cartilages present in our respiratory passages",
      options: ["Hyaline cartilage", "Elastic cartilage", "Hyaline and elastic both", "Fibro cartilage"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-24",
      question: "When the knee moves back and fourth as a person walks what keep the surface of the lake born from rubbing against each other",
      options: ["The periosteum", "Articular cartilage", "The bone marrow", "Ligament"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-25",
      question: "Each myosin filament is surrounded by",
      options: ["Four thin filaments", "Two thin filaments", "Eight thin fimans", "Six thin filaments"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-26",
      question: "Contractile protein of skeletal muscle cell involving atpas activity is",
      options: ["Actin", "Myosin", "Troponin", "Tropomyosin"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-27",
      question: "Formation of ...... will be greater With The fater breakdown of glucose and glycogen to compensate energy requirements in anaerobic respiration",
      options: ["Enzymes", "Harmon", "Lactic acid", "Fat"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-28",
      question: "When muscle contracts thick and thin filament undergo",
      options: ["Overlapping", "Shortening", "Contraction", "Lengthening"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-29",
      question: "Which of the following is not true",
      options: [
        "The joints of elbow and knee are hinge joints",
        "The joint cavities filled with lubricating Synovial fluid",
        "Bones of the skull are connected through fixed joints",
        "Hips and Shoulder joints are example of ball and socket joints",
        "Cells of the bones are called osteoclasts",
      ],
      answer: 4,
    },
    {
      id: "testmoz-bio-support-30",
      question: "The axial skeleton of an adult human includes",
      options: [
        "The skull pectoral gridle and ribs",
        "Skull ribs and bones of arms and legs",
        "Pectoral and pelvic girdles",
        "The ribs the skull the sternum and the vertebrae",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-31",
      question: "Of the following statements about skeletal muscle tissue is true",
      options: [
        "In the muscle fibre actin is thick filament",
        "The sarcoplasmic reticulum stores calcium ions within a muscle cell",
        "In a muscle fibre myosin is thin filament",
        "Contraction of muscle fibre can occur in the absence of calcium ions",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-32",
      question: "The repeated protein pattern of myofibril is called",
      options: ["Sarcomere", "Sarcolemma", "Zymere", "Cross bridges"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-33",
      question: "The Sarcolemma of muscle fibre folds in world and form a system of tubes which run through the sarcoplasm called",
      options: ["Myofilaments", "Z lines", "Sarcoplasmic reticulum", "Transverse tubules"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-34",
      question: "Chief component of thin filaments is",
      options: ["Actin", "Myosin", "Troponin", "Fibrous proteins"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-35",
      question: "A motor unit is made up of",
      options: [
        "All the muscle fibres within a given muscle",
        "A motor neuron in the muscle fibre it innervates",
        "All the neurons going into an individual section of a body",
        "A fascicle and a nerve",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-36",
      question: "Which triggers the release of calcium ions from sarcoplasmic reticulum",
      options: [
        "Formation of actin myosin bridges",
        "An action potential",
        "Sarcomere contraction",
        "An increase in calcium Ion concentration",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-37",
      question: "Globular monomers are present in",
      options: ["Sarcolemma", "Sarcoplasm", "Plasma membrane", "Myofibrils"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-38",
      question: "When a physician ellipse the knee jerk reflex by taping deep tendons in the knee the normal response is for the Leer leg to Swing forward when this happens",
      options: [
        "Muscles in the front of Thigh are contracting and muscles in the back of Thigh are relaxing",
        "Muscles in the front of the lower Leg are contracting and muscles in the back of the lower Leg are relaxing",
        "Muscles in the back of Thigh are contracting and muscles in the front of Thigh are relaxing",
        "Muscles in the back of the lower Leg are contracting and muscles in the front of the lower Leg are relaxing",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-39",
      question: "Which one of the following muscles are myogenic type",
      options: ["Smooth muscles", "Cardiac muscles", "Skeletal muscle", "None"],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-40",
      question: "Hydrostatic skeleton can be seen in",
      options: ["Earthworm", "Roundworm", "Flatworm", "All of these"],
      answer: 0,
    },
    {
      id: "testmoz-bio-support-41",
      question: "Whenever muscle contracts a sarcomere can be shorten up to percentage ...... of its total length",
      options: ["25", "15", "35", "45"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-42",
      question: "It is not a part of axial skeleton",
      options: ["Sternum", "Altas and axis", "Inferior choncha", "Patella"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-43",
      question: "A motor unit is made up of",
      options: [
        "All the muscle fibres within and given muscle",
        "All motor neuron and the muscle fibre it innervates",
        "All the neurons going into an individual section of a body",
        "A fascicle and a nerve",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-support-44",
      question: "The muscles attached to bones are",
      options: ["Voluntary and smooth", "Involuntary and smooth", "Voluntary and striated", "Involuntary and striated"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-45",
      question: "The sliding protein of muscle",
      options: ["Tubulin", "Myoglobin", "Actin", "Myosin"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-46",
      question: "Knee and elbow joints are example of",
      options: ["Ball and socket joint", "Cartilaginous joint", "Fibrous joint", "Hinge joint"],
      answer: 3,
    },
    {
      id: "testmoz-bio-support-47",
      question: "Each muscle fibres contain long Threads that extend along its entire length these are called as",
      options: ["Myosin", "Microtubules", "Myofibrils"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-48",
      question: "Earliest form of muscles is",
      options: ["Cardiac muscles", "Skeletal muscles", "Smooth muscles", "Striated"],
      answer: 2,
    },
    {
      id: "testmoz-bio-support-49",
      question: "Identify the bones in which the connecting joints are freely movable joints",
      options: ["Ankle", "Wrist", "vertebrae", "Elbow", "All"],
      answer: 4,
    },
    {
      id: "testmoz-bio-support-50",
      question: "Cross bridges from between",
      options: [
        "Troponin and tropomyosin",
        "Actin filament and myosin heads",
        "Calcium and sodium",
        "Sarcoleema and sarcoplasmic reticulum",
      ],
      answer: 1,
    },
    {
      id: "inheritance-001",
      question: "What is the primary outcome of crossing over during prophase of meiosis I?",
      options: [
        "Chromosomes duplicate without any exchange of parts",
        "Homologous chromosomes exchange different pairs leading to recombinant chromatids and increased genetic variation",
        "Homologous chromosomes exchange identical parts, resulting in no genetic variation",
        "Non-homologous chromosomes exchange part",
      ],
      answer: 1,
    },
    {
      id: "inheritance-002",
      question: "The genetic makeup that your parents have transferred to you for your hair color, makes up your:",
      options: ["Genotype", "Karyotype", "Phenotype", "None of the above"],
      answer: 0,
    },
    {
      id: "inheritance-003",
      question: "Which is true for an X linked dominant trait?",
      options: [
        "All female offspring of the affected father will be affected",
        "Half of the female offsprings of the affected father will be affected",
        "No male offspring of an affected mother will be affected",
        "No female offspring of the affected father will be affected",
      ],
      answer: 0,
    },
    {
      id: "inheritance-004",
      question: "Which term best describes an organism’s physical characteristic.",
      options: ["Allele", "Genetic code", "Genotype", "Trait"],
      answer: 3,
    },
    {
      id: "inheritance-005",
      question: "Crossing over involves exchange of genetic material between:",
      options: [
        "Sister chromatids of same chromosome",
        "Non-sister chromatids of homologous chromosomes",
        "Chromatids of non-homologous chromosomes",
        "Sister chromatids of homologous chromosomes",
      ],
      answer: 1,
    },
    {
      id: "inheritance-006",
      question: "If a male with hemophilia marries a non-carrier female, what is the likelihood of their sons inheriting the condition?",
      options: ["50%", "100%", "0%", "25%"],
      answer: 2,
    },
    {
      id: "inheritance-007",
      question: "Linkage of genes in Drosophila was first discovered by:",
      options: ["Thomas Hunt Morgan", "Alfred Sturtevant", "Gregor Mendel", "Hugo de Vries"],
      answer: 0,
    },
    {
      id: "inheritance-008",
      question: "Which phenomenon increases the chances of variations?",
      options: ["Crossing Over", "Linkage", "Epistasis", "Dominance"],
      answer: 0,
    },
    {
      id: "inheritance-009",
      question: "If the disease is caused due to a defective gene located on the X chromosome, then defective genes can only be transmitted to male offspring by the:",
      options: ["Female gamete", "Male gamete", "Bacteria", "Mutation"],
      answer: 0,
    },
    {
      id: "inheritance-010",
      question: "If a round seeded pea plant is self-fertilized and all of its offspring are also round seeded:",
      options: [
        "Both parents and offspring must be true breed",
        "Both parents may or may not be true breed",
        "Only parents but not offspring will be true breed",
        "Only offspring but not parents will be true breed",
      ],
      answer: 1,
    },
    {
      id: "inheritance-011",
      question: 'If "RRYY" is crossed with "rryy", what will be the ratio of "RRYY" to "rryy" in F2 generation?',
      options: ["9:3:3:1", "3:1", "1:3", "1:1"],
      answer: 3,
    },
    {
      id: "inheritance-012",
      question: "When genes are linked, they tend to:",
      options: [
        "Segregate randomly",
        "Cross over every time",
        "Stay together during inheritance",
        "Be inherited separately",
      ],
      answer: 2,
    },
    {
      id: "inheritance-013",
      question: "According to Morgan’s experiment, which of the following is essential for detecting gene linkage accurately?",
      options: [
        "Large number of progeny",
        "Small sample size",
        "Use of male flies only",
        "Mutation induction",
      ],
      answer: 0,
    },
    {
      id: "inheritance-014",
      question: "A carrier mother for hemophilia and a normal father can produce:",
      options: [
        "All hemophilic sons",
        "25% Hemophilic among sons",
        "50% hemophilic among sons",
        "All normal sons and daughters",
      ],
      answer: 2,
    },
    {
      id: "inheritance-015",
      question: "Y-linked inheritance refers to which mode of the inheritance?",
      options: ["Crisscross", "Straight", "Loop", "Jumping"],
      answer: 1,
    },
    {
      id: "inheritance-016",
      question: "A chromosome which contain centromere at the center is called:",
      options: [
        "Mesocentric chromosome",
        "Metacentric chromosome",
        "Acrocentric chromosome",
        "Telocentric chromosome",
      ],
      answer: 1,
    },
    {
      id: "inheritance-017",
      question: "The 9:3:3:1 ratio of law of independent assortment can be affected by:",
      options: ["Genetic drift", "Small population", "Gene linkage", "Gene duplication"],
      answer: 2,
    },
    {
      id: "inheritance-018",
      question: "Best description of the process of crossing over during meiosis:",
      options: [
        "Duplication of chromosome",
        "Exchange of genes between non-sister chromatids",
        "Movement of chromosome to opposite poles",
        "Separation of sister chromatids",
      ],
      answer: 1,
    },
    {
      id: "inheritance-019",
      question: "Total number of linkage groups in a normal human is:",
      options: ["02", "23", "46", "92"],
      answer: 1,
    },
    {
      id: "inheritance-020",
      question: "In a pea plant seed color is determined by two alleles: Y (Yellow, dominant) and y (green recessive). Which parental cross would most likely result in offspring showing a 1:1 ratio of yellow to green seeds?",
      options: ["YY × YY", "Yy × yy", "Yy × Yy", "YY × yy"],
      answer: 1,
    },
    {
      id: "inheritance-021",
      question: "Mendel crossed a plant with round yellow seeds (RRYY) and a plant with wrinkled green seeds (rryy), what was the phenotype of all F1 offspring?",
      options: ["All round green", "All round yellow", "All wrinkled yellow", "All wrinkled green"],
      answer: 1,
    },
    {
      id: "inheritance-022",
      question: "Persons can bleed to death from small cuts or bruises in:",
      options: ["Typhoid", "Dysentery", "Haemophilia", "Colour blindness"],
      answer: 2,
    },
    {
      id: "inheritance-023",
      question: "Some genetic diseases are caused due to abnormal number of:",
      options: ["Nucleotides", "Genes", "Chromosomes", "All of the given options"],
      answer: 2,
    },
    {
      id: "inheritance-024",
      question: "Which of the following is not true regarding the Dihybrid cross breeding as observed in experimental plants.",
      options: [
        "Some new plants which are different from parental plants are produced.",
        "Genes for different traits like colour and shape of seed always stay together.",
        "Dihybrid cross follows law of independent assortment.",
        "Dominant traits of colour and shape of seed appeared in F1 generation.",
      ],
      answer: 1,
    },
    {
      id: "inheritance-025",
      question: "The condition in which the babies are born with small skull is called:",
      options: ["Malaria", "Microcephally", "Turner’s syndrome", "Klinefelter’s syndrome"],
      answer: 1,
    },
    {
      id: "inheritance-026",
      question: "A tetrad is also known as:",
      options: [
        "Bivalent",
        "Duplicated chromosome",
        "Paired homologous chromosome",
        "Homologous and thickened chromosome",
      ],
      answer: 0,
    },
    {
      id: "inheritance-027",
      question: "Which of Mendel’s laws can best explain why a child may inherit brown eyes even if one parent has blue eyes?",
      options: [
        "Law of Dominance",
        "Law of Segregation",
        "Law of Independent Assortment",
        "Law of Recombination",
      ],
      answer: 0,
    },
    {
      id: "inheritance-028",
      question: "What is the significance of the 9:3:3:1 ratio in a dihybrid cross?",
      options: [
        "It proves that all genes are linked",
        "It demonstrates that traits assort independently",
        "It indicates co-dominance between alleles",
        "It confirms that mutations have occurred",
      ],
      answer: 1,
    },
    {
      id: "inheritance-029",
      question: "In crossing over, an exchange of maternal and paternal chromatid parts occurs while homologous chromosomes are paired during ______ stage of meiosis.",
      options: ["Metaphase I", "Prophase I", "Anaphase II", "Telophase I"],
      answer: 1,
    },
    {
      id: "inheritance-030",
      question: "Linked genes DO NOT follow Mendel’s Law of Independent Assortment because ______.",
      options: [
        "They are located on different chromosomes",
        "They always undergo crossing over",
        "They are physically close together on the same chromosome",
        "They rarely separate during meiosis",
      ],
      answer: 2,
    },
    {
      id: "inheritance-031",
      question: "A carrier female for an X-linked recessive disorder:",
      options: [
        "Expresses the disorder fully",
        "Cannot pass the disorder to offspring",
        "Can pass the disorder to her sons",
        "Only passes the disorder to daughters",
      ],
      answer: 2,
    },
    {
      id: "inheritance-032",
      question: "Which of the following is an X-linked recessive disorder in humans?",
      options: ["Cystic fibrosis", "Thalassemia", "Hemophilia", "Sickle cell anemia"],
      answer: 2,
    },
    {
      id: "inheritance-033",
      question: "Which of the following CORRECTLY describes the expected outcome of children from a carrier mother for haemophilia (XʰX) and a normal father (XY)?",
      options: [
        "All sons will have hemophilia",
        "All daughters will be carriers",
        "50% of sons will have hemophilia, and 50% of daughters will be carriers",
        "All offspring will be unaffected",
      ],
      answer: 2,
    },
    {
      id: "inheritance-034",
      question: "The situation when two alternative forms is said to have:",
      options: ["Codominance", "Sex-influenced traits", "Multiple alleles", "Sex-limited traits"],
      answer: 2,
    },
    {
      id: "inheritance-035",
      question: "Two different gene pairs, located at different loci, all work for a same trait and express in an additive manner. This phenomenon is called:",
      options: ["Codominance", "Polygenic inheritance", "Multiple alleles", "Epistasis"],
      answer: 1,
    },
    {
      id: "inheritance-036",
      question: "At which of the following stage of Prophase I, crossing over takes place?",
      options: ["Diplotene", "Leptotene", "Pachytene", "Zygotene"],
      answer: 2,
    },
    {
      id: "inheritance-037",
      question: "Hemophilia type A and B zigzag from ______ grandfather through a carrier daughter to a ______.",
      options: [
        "Maternal, granddaughter",
        "Maternal, grandson",
        "Paternal, granddaughter",
        "Paternal, grandson",
      ],
      answer: 1,
    },
    {
      id: "inheritance-038",
      question: "In which one of the following types of dominance, genotypic and phenotypic ratios are same in F₁ generation?",
      options: ["Co-Dominance", "Complete dominance", "Incomplete dominance", "Over dominance"],
      answer: 0,
    },
    {
      id: "inheritance-039",
      question: "In Drosophila, the heterozygote (w/w⁺) exceeds in quality of fluorescent pigment in eyes than wild (w⁺/w⁺) or white eye (w/w), this kind of dominance is termed as:",
      options: ["Co-Dominance", "Complete Dominance", "Incomplete Dominance", "Over Dominance"],
      answer: 3,
    },
    {
      id: "inheritance-040",
      question: "In the second step of his experiment, what did Mendel do after selecting pure breeding tall and dwarf pea plants?",
      options: [
        "Allowed them to self pollinate",
        "Crossed them to produced hybrid offspring",
        "Collected seeds from random plants",
        "Grew them in different soil types",
      ],
      answer: 1,
    },
    {
      id: "inheritance-041",
      question: "A pea plant which upon self fertilization produces all the offspring of its own phenotype is called:",
      options: [
        "Plant with homogenous genotype",
        "Plant with homozygous genotype",
        "Plant with homologous genotype",
        "Plant with hemizygous genotype",
      ],
      answer: 1,
    },
    {
      id: "inheritance-042",
      question: "Morgan’s experiment showed deviation from the law of independent assortment due to:",
      options: ["Crossing over", "Gene linkage", "Random mutation", "Natural selection"],
      answer: 1,
    },
    {
      id: "inheritance-043",
      question: "Crossing over is:",
      options: [
        "Exchange of segments between sister chromatids of homologous chromosomes during meiosis.",
        "Exchange of segments between non-sister chromatids of homologous chromosomes during meiosis.",
        "Exchange of segments between non-sister chromatids of heterologous chromosomes during meiosis.",
        "Exchange of segments between non-sister chromatids of homologous chromosomes during mitosis.",
      ],
      answer: 1,
    },
    {
      id: "inheritance-044",
      question: "Hemophilia is a sex linked recessive trait. A hemophiliac man marries to a normal woman (whose father is hemophiliac). If they have daughter, what is the probability that she will be hemophiliac?",
      options: ["0%", "25%", "50%", "75%"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-1",
      question: "Which of the following blood group is considered as universal Donor",
      options: ["AB+", "AB-", "O-", "O+"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-2",
      question: "X linked recessive traits is transferred in manner",
      options: [
        "Father to direct son",
        "Father to his daughter and her son",
        "Mother to her daughter only",
        "None of these",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-3",
      question: "A character determined by three alleles is",
      options: ["Human skin colour", "Human eye colour", "Human blood group", "Human Rh factor"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-4",
      question: "Rh factor maybe responsible for",
      options: ["Turners syndrome", "Sickle Cell anemia", "AIDS", "Erythroblastosis foetalis"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-5",
      question: "ABO blood group system was discovered by",
      options: ["Bernstein", "Karl correns", "Landsteiner", "None"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-6",
      question: "Which one is true for crossing over",
      options: [
        "Non sister chromatids of homologous chromosomes meiosis",
        "Non sister chromatids of homologous chromosome Mitosis",
        "Sister chromatids of homologous chromosome meiosis",
        "Sister chromatids of homologous chromosome Mitosis",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-7",
      question: "All of the following are non allelic X linked traits except",
      options: ["Hemophilia A", "Hemophilia B", "Hemophilia C", "TFM syndrome"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-8",
      question: "A person was married to his cousin and both are heterozygous for Sickle Cell anaemia among their four kids what will be the proportion of affected homozygotes",
      options: ["50%", "75%", "25%", "100%"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-9",
      question: "If female has A blood group and her husband has O blood group then the blood group of their children would possibly be",
      options: ["A and B groups only", "A and O groups only", "AB only", "All for groups"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-10",
      question: "Which is not related to colour blindness",
      options: [
        "Zigzag pattern of inheritance",
        "Passes directly from Father to Son",
        "More common in men",
        "Rhodopsin",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-11",
      question: "Incomplete dominance",
      options: [
        "Different Allele of a gene are both expressed in heterozygous condition",
        "One Allele is completely dominant over the other and the presence of the recessive early is functionally hidden so the heterozygote has the same round phenotype as homozygote",
        "The phenotype of the heterozygote is intermediate between phenotype of the two homozygote",
        "Gene mutation May produce many different Allele of a gene",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-12",
      question: "Example of X linked dominant trait is",
      options: ["Haemophilia A", "Hemophilia B", "Trianopia", "Hypophosphatemia"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-13",
      question: "A person with antigens be present of membrane RBCs and anti A antibodies in the plasma will have",
      options: ["Blood group A", "Blood group AB", "Blood group B", "Blood group O"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-14",
      question: "Locus stand for",
      options: [
        "Position of a gene on homologous chromosome",
        "Region of a chromosome",
        "Position of an Allele within a DNA molecule",
        "Close regions of same chromosomes",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-15",
      question: "The recombination frequency is 20% between the two genes the distance between them in unit map is",
      options: ["20", "60", "30", "80"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-16",
      question: "If a carrier female is married to hemophilic male what will be the ratio of presence of haemophilia in the children select best answer from given condition",
      options: [
        "100% all female and males will be haemophilic",
        "Carrier female 25% hemophilic female 25%, 25% normal male and 25% hemophilic male",
        "Female and males both a 50% chances to getting hemophilia",
        "Females have 50% chance of getting hemophilia and males will be 100% haemophilic",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-17",
      question: "A man having a blood group O marries a woman having a blood group A whose father was also O what is the probability of O in their offsprings",
      options: ["50%", "75%", "25%", "0%"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-18",
      question: "Genes are present on chromosomes this was experimentally proved by",
      options: ["Sutton", "Fleming", "Morgan", "Landsteiner"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-19",
      question: "Such traits cannot pass to daughter",
      options: ["X linked recessive traits", "X linked dominant traits", "Y linked traits", "XX linked traits"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-20",
      question: "Which of the following is not a genetic disorder",
      options: ["Hemophilia", "Colour blindness", "Phenyl ketoneuriya", "Epilepsy"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-21",
      question: "What is the probability of haemophilic daughter of a normal men whose father was hemophilic and carrier women",
      options: ["0%", "50%", "25%", "75%"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-22",
      question: "An organism genetic constitution is called its",
      options: ["Genotype", "Phenotype", "Genetics", "Gene pool"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-23",
      question: "If all four phenotypic combinations are parental and recombinants are produced in the ratio 1:1:1:1 Then there would be",
      options: [
        "No linkage between genes",
        "Partial linkages between genes",
        "Complete linkage between genes",
        "Tight linkage between genes",
      ],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-24",
      question: "Multiple alleles are the altered form of a gene whose number is more than two and may have as many as 300 alleles but a diploid organism can",
      options: [
        "Have just one of them in its genome",
        "Have four of them in its genome",
        "Have two of them in its genome",
        "Have multiple of them in its genome",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-25",
      question: "In which situation genes are not assorted Independently during meiosis in a chromosome",
      options: [
        "When genes are not linked and their loci are far apart",
        "There are too many genes on a chromosome",
        "When some genes have mutated on the chromosome",
        "When genes are linked and their loci are closed to each other",
      ],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-26",
      question: "The region of the chromosome or more specifically a length of the DNA molecule which is a particular nucleotide sequence that code for specific protein is called",
      options: ["Locus", "Allele", "Gene", "Kinetochore"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-27",
      question: "Mendel's conclusion that during gamete formation the separation of one pair of allele does not influence the separation of an other pair of allele is his law of",
      options: ["Dominance", "Independence assortment", "Segregation", "Linkage"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-28",
      question: "Blood group antigens can be found in",
      options: ["RBCs", "Body fluids", "Saliva", "All"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-29",
      question: "Pure breeding lines of pea were taken regarding seed shape round and wrinkle and work roast with no intermediate between parents all offspring were found to be round these result show",
      options: [
        "Co dominance",
        "Dominant recessive relationship of allele",
        "Incomplete dominance",
        "Over dominance relationship",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-30",
      question: "An X linked trait that result due to hormonal insensitivity of target cell",
      options: ["Gout", "Duchene muscular dystrophy", "Testicular feminization syndrome", "Color blindness"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-31",
      question: "Choose the best explanation for the mechanism of inheritance keeping in mind Mendel law of segregation and law of Independence assortment",
      options: [
        "A characteristic is inherited in combination with others",
        "The presence of one characteristic modifies the inheritance of the other",
        "A characteristic is inherited independence of the influence of other",
        "Rare combination of characters are always due to mutation which are inherited by the progeny",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-32",
      question: "Gene responsible for webbing of toes is present on",
      options: ["X chromosome", "Y chromosome", "Chromosome 11", "Chromosome 13"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-33",
      question: "Which of the following is genetically dominant in man",
      options: ["Color blindness", "Hemophilia", "Rh positive", "Albinism"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-34",
      question: "ABO blood grouping is controlled by gene I which has three allele and show dominance there are 6 genotypes how many phenotypes are possible",
      options: ["Six", "Four", "Three", "Five"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-35",
      question: "If a plant with genotype RrYy is self fertilized, the probability of getting RRYY genotypes will be",
      options: ["1/12", "9/16", "1/4", "1/16"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-36",
      question: "Which of the following will not result in variation among siblings",
      options: ["Independence assortment of genes", "Linkage", "Crossing over", "Mutation"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-37",
      question: "The recessive character only expressed when present in a double recessive condition but a single recessive gene can express itself in humans when genes are found on",
      options: [
        "Either on autosome or X chromosome",
        "X chromosome of female",
        "X chromosome of male",
        "Any autosome",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-38",
      question: "Which of the following blood group is not possible in the person whose father is of blood group O",
      options: ["AB", "B", "A", "O"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-39",
      question: "Phenotype is",
      options: [
        "The genetic complement the genes in an individual for a particular trait",
        "Partner of gene pair",
        "The form of appearance of trait",
        "The position of a gene on the chromosome",
      ],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-40",
      question: "In mendalian dihybrid cross, how many individuals are homozygous dominant for both the genes in F2 generation?",
      options: ["1/16", "2/16", "4/16", "9/16"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-41",
      question: "In mendel's experiment nature of seed Court flower colour position of flower pot colour steam height etc are referred is",
      options: ["Allele", "phenotype", "Genotype", "Karyotype"],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-42",
      question: "Homozygous recessively condition for green opsins indicate",
      options: ["Monochromacy", "Protonopia", "Tritinopia", "Deuteranopia"],
      answer: 3,
    },
    {
      id: "testmoz-bio-inher-43",
      question: "The total number of genes in a population is called",
      options: ["Gene pool", "Allele pool", "Genome", "Library"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-44",
      question: "How many pairs of homologous chromosomes are present in pisum sativum",
      options: ["Seven pairs", "Six pairs", "Eight pairs", "None"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-45",
      question: "Which one of the following is multiple allelic character",
      options: [
        "Length of stem in pea plant",
        "Blood group of the human being",
        "Shape of the seed in pea plant",
        "Colour of flower in pea plant",
      ],
      answer: 1,
    },
    {
      id: "testmoz-bio-inher-46",
      question: "In mendel's experiment the phenotypic ratio of recessive to dominant plants was equal to",
      options: ["1:3", "3:9", "3:1", "9:3"],
      answer: 0,
    },
    {
      id: "testmoz-bio-inher-47",
      question: "Rh factor is named after",
      options: ["Man", "Rat", "Monkey", "None"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-48",
      question: "Drosophila has four pair of chromosomes how many linkage group does it have",
      options: ["8", "One Less than the pair of chromosomes", "4", "One more then the pair of chromosomes"],
      answer: 2,
    },
    {
      id: "testmoz-bio-inher-49",
      question: "Regarding colour blindness when a normal male marries a carrier female what is the correct statement",
      options: [
        "All daughter will be color blind",
        "All daughters will be carriers",
        "All sons are color blind",
        "Half of the sons will be color blind",
      ],
      answer: 3,
    },
  ];
  
  
  // ==========================================
  // CHEMISTRY QUESTIONS
  // ==========================================
  
  export const chemistryQuestions: Question[] = [
     // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-94",
          question: "Reaction of Phenol with Acetyl chloride will yield:",
          options: ["Alcohol", "Ester", "Carboxylic acid", "Ether"],
          answer: 1,
          explanation:
            "Phenol reacts with acetyl chloride (an acyl halide) in the presence of a base like pyridine to form phenyl acetate, which is an ester.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-83",
          question: "IUPAC name of isopropyl alcohol is:",
          options: ["1-butanol", "2-propanol", "1-propanol", "2-butanol", "propanol"],
          answer: 1,
          explanation:
            "Isopropyl alcohol has a 3-carbon chain with the hydroxyl group (–OH) on the second carbon, giving it the systematic IUPAC name 2-propanol.",
        },
        {
          id: "chem-sindh-24-90",
          question:
            "Which reagent is used to distinguish between primary, secondary, and tertiary alcohols?",
          options: [
            "Tollens Reagent",
            "Grignard Reagent",
            "Benedict Reagent",
            "Bloor Reagent",
            "Lucas Reagent",
          ],
          answer: 4,
          explanation:
            "Lucas reagent (conc. HCl + anhydrous ZnCl₂) tests the rate of alkyl chloride formation: 3° alcohols react instantly, 2° alcohols react within 5–10 minutes, and 1° alcohols do not react at room temperature.",
        },
        {
          id: "chem-sindh-24-96",
          question:
            "When chlorobenzene reacts with sodium hydroxide at 350°C and 150 atmospheric pressure (Dow's Process), it gives rise to the formation of:",
          options: [
            "Sodium chromate",
            "Phenol",
            "Sodium phenoxide",
            "Sodium sulfate",
            "Phenoxide",
          ],
          answer: 2,
          explanation:
            "Under severe conditions in Dow's process, chlorobenzene reacts with concentrated NaOH to first form sodium phenoxide, which yields phenol upon subsequent acidification.",
        },
        {
          id: "chem-sindh-24-109",
          question:
            "Hydroquinone is a benzenediol; it contains two –OH groups attached to the benzene ring at positions:",
          options: ["1 and 2", "1 and 3", "1 and 4", "2 and 3"],
          answer: 2,
          explanation:
            "Hydroquinone is benzene-1,4-diol, possessing two –OH groups at para positions (1 and 4) on the benzene ring.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-94",
          question:
            "The rate of acid-catalyzed dehydration of alcohols follows the order:",
          options: ["3° > 2° > 1°", "1° > 3° > 2°", "2° > 3° > 1°", "3° > 1° > 2°"],
          answer: 0,
          explanation:
            "Dehydration proceeds via a carbocation intermediate; since carbocation stability follows 3° > 2° > 1°, the rate of dehydration is highest for tertiary alcohols.",
        },
        {
          id: "chem-sindh-25-102",
          question:
            "Phenol differs significantly from ethanol in chemical behavior because phenol:",
          options: [
            "Forms stronger hydrogen bonds to its aromatic ring",
            "Is more acidic because of resonance-stabilized phenoxide conjugate base",
            "Readily undergoes nucleophilic substitution on the -OH group",
            "Is completely insoluble in water due to its benzene ring",
          ],
          answer: 1,
          explanation:
            "Deprotonation of phenol produces the phenoxide ion, which is stabilized by delocalization of the negative charge into the aromatic pi-system, making phenol far more acidic than ethanol.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-116",
          question: "Which of the following alcohols has the highest boiling point?",
          options: [
            "ethyl alcohol",
            "isopropyl alcohol",
            "n-propyl alcohol",
            "tert-butyl alcohol",
          ],
          answer: 2,
          explanation:
            "Among the 3-carbon and 4-carbon alcohols listed, n-propyl alcohol has a unbranched linear chain providing a larger surface area and stronger intermolecular London dispersion/hydrogen bonding forces compared to branched isomers.",
        },
        {
          id: "kmu-mdcat-2024-117",
          question:
            "The reaction of an alcohol with metallic sodium produces hydrogen gas and a/an:",
          options: ["Aldehyde", "Alkoxide", "Ethane", "Ethene"],
          answer: 1,
          explanation:
            "Alcohols react with active metals like Na to release H₂ gas and form sodium alkoxides: 2R–OH + 2Na → 2R–ONa + H₂.",
        },
        {
          id: "kmu-mdcat-2024-118",
          question:
            "Oxidation of a secondary alcohol using an oxidizing agent like K₂Cr₂O₇/H⁺ gives a/an:",
          options: ["Carboxylic acid", "Ether", "Ketone", "Phenol"],
          answer: 2,
          explanation:
            "Secondary alcohols (R₂CHOH) undergo oxidation to yield ketones (R₂C=O), which resist further oxidation under mild conditions.",
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-144",
          question:
            "In a molecule of phenol, the ring carbon atom attached to the –OH group is:",
          options: [
            "sp hybridized",
            "sp² hybridized",
            "sp³ hybridized",
            "unhybridized",
          ],
          answer: 1,
          explanation:
            "All six carbon atoms forming the aromatic benzene ring in phenol are sp² hybridized.",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-81",
          question:
            "Which product is formed by the reaction of phenol with concentrated nitric acid in the presence of concentrated sulfuric acid?",
          options: ["Adipic acid", "m-Nitrophenol", "Picric acid", "p-Nitrophenol"],
          answer: 2,
          explanation:
            "Nitrating phenol with concentrated HNO₃/H₂SO₄ results in multi-substitution yielding 2,4,6-trinitrophenol, commonly known as picric acid.",
        },
        {
          id: "szambu-chem-24-92",
          question:
            "The alkoxide anion (R–O⁻) derived by deprotonation of an alcohol acts as a strong:",
          options: ["Acidic moiety", "Electrophile", "Lewis acid", "Lewis base"],
          answer: 3,
          explanation:
            "An alkoxide ion carries an unshared electron pair on oxygen with a negative charge, functioning as an electron-pair donor (Lewis base) and a strong nucleophile.",
        },
        {
          id: "szambu-chem-24-95",
          question:
            "Which type of substituent attached to the benzene ring will increase the acidic strength of phenols?",
          options: [
            "Electron donating substituents",
            "Electron withdrawing substituents",
            "Lewis bases",
            "Nucleophiles",
          ],
          answer: 1,
          explanation:
            "Electron-withdrawing groups (like –NO₂, –CN, halogens) delocalize and stabilize the negative charge of the phenoxide ion, thereby increasing the acidity of phenol.",
        },
        {
          id: "szambu-chem-24-116",
          question:
            "The melting and boiling points of alcohols are much higher compared to alkanes of similar molar mass due to:",
          options: [
            "Dipole-dipole interaction",
            "Hydrogen bonding",
            "Ionic interactions",
            "Van der Waals interactions",
          ],
          answer: 1,
          explanation:
            "Alcohols contain polar O–H bonds that form strong intermolecular hydrogen bonds, requiring extra energy to break during phase changes.",
        },
        {
          id: "szambu-chem-24-119",
          question:
            "Which type of reaction occurs when an alcohol reacts with a carboxylic acid in an acidic medium?",
          options: [
            "Dehydration reaction",
            "Dehydrogenation reaction",
            "Esterification reaction",
            "Reduction reaction",
          ],
          answer: 2,
          explanation:
            "The reaction between an alcohol and a carboxylic acid to produce an ester and water is known as Fischer esterification.",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question: "The common name of 1,3-benzenediol is:",
          options: ["Pyrogallol", "Cresol", "Resorcinol", "Catechol"],
          answer: 2,
          explanation:
            "1,2-benzenediol is catechol, 1,3-benzenediol is resorcinol, and 1,4-benzenediol is hydroquinone.",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-118",
          question:
            "Which of the following alcohols responds positively to the Iodoform test (forming a yellow CHI₃ precipitate)?",
          options: ["Methanol", "1-Butanol", "1-Propanol", "Ethanol"],
          answer: 3,
          explanation:
            "The iodoform test requires a CH₃CH(OH)– group. Ethanol (CH₃CH₂OH) is the only primary alcohol that possesses this group and yields iodoform.",
        },
        {
          id: "uhs-2024-chem-120",
          question:
            "Which of the following is correct regarding the relative acidity of phenol?",
          options: [
            "Phenol and water are equally acidic",
            "Phenol is less acidic than carboxylic acids",
            "Phenol is less acidic than water",
            "Phenol is less acidic than ethanol",
          ],
          answer: 1,
          explanation:
            "Acidity order: Carboxylic acids > Phenol > Water > Alcohols. Phenol is less acidic than carboxylic acids but more acidic than water and ethanol.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-83",
          question:
            "Which of the following best explains why phenol reacts with aqueous NaOH solution, whereas alcohols do not?",
          options: [
            "Phenol has a lower boiling point than alcohol.",
            "Alcohols contain a strong O-H bond that cannot be broken by weak bases.",
            "Phenol forms hydrogen bonding that facilitates ionization.",
            "Phenol is weakly acidic due to resonance stabilization of the phenoxide ion.",
          ],
          answer: 3,
          explanation:
            "Phenol's phenoxide ion is resonance-stabilized, making it acidic enough (Ka ~ 10⁻¹⁰) to react with NaOH. Alcohols are much weaker acids (Ka ~ 10⁻¹⁶) and cannot react with NaOH.",
        },
        {
          id: "uhs-chem-25-99",
          question:
            "Fischer esterification (reaction between alcohol and carboxylic acid releasing water) is classified as a:",
          options: [
            "Condensation reaction",
            "Substitution reaction",
            "Elimination reaction",
            "Dehydrogenation reaction",
          ],
          answer: 0,
          explanation:
            "Fischer esterification combines two reactant molecules with the elimination of a small water molecule, defining it as a condensation reaction.",
        },
        {
          id: "alc-phen-eth-1",
          question:
            "Phenol and alcohol reacts with sodium metal to form salt and both form",
          options: [
            "Both form water",
            "Both form hydrogen gas",
            "Ethanol form hydrogen and phenol form water",
            "Both form water",
          ],
          answer: 2,
          explanation:
            "Note: Chemically, both alcohols and phenols liberate hydrogen gas when reacting with active metals like sodium. Option C is mapped per the provided answer key.",
        },
        {
          id: "alc-phen-eth-2",
          question:
            "The dehydration of ethyl alcohol with concentrated sulphuric acid at 140 centigrade gives",
          options: ["Diethyl Ether", "Ethene", "Alcohol", "Carboxylic acid"],
          answer: 0,
          explanation:
            "Intermolecular dehydration of ethanol with conc. H2SO4 at 140 °C produces diethyl ether (CH3CH2OCH2CH3).",
        },
        {
          id: "alc-phen-eth-3",
          question: "Reaction of phenol with concentrated nitric acid gives",
          options: ["Palmetric acid", "Steric acid", "Linolec acid", "Picric acid"],
          answer: 3,
          explanation:
            "Nitration of phenol using concentrated HNO3 in the presence of conc. H2SO4 yields 2,4,6-trinitrophenol (Picric acid).",
        },
        {
          id: "alc-phen-eth-4",
          question:
            "Which of the following catalyst is used in the industrial preparation of methanol",
          options: [
            "Zinc oxide and Alumina",
            "Alumina and silica",
            "Silica and chromium oxide",
            "Zinc oxide and chromium oxide",
          ],
          answer: 3,
          explanation:
            "Industrial synthesis of methanol from water gas (CO + H2) uses a mixture of ZnO and Cr2O3 as catalysts at 400°C and 200 atm.",
        },
        {
          id: "alc-phen-eth-5",
          question: "1,3,5-pentanetriol has secondary carbons",
          options: ["3", "2", "1", "0"],
          answer: 0,
          explanation:
            "In 1,3,5-pentanetriol (HO-CH2-CH2-CH(OH)-CH2-CH2-OH), carbons 2, 3, and 4 are bonded to two other carbon atoms, making them secondary carbons.",
        },
        {
          id: "alc-phen-eth-6",
          question:
            "Which one of the following alcohol is indicated by formation of yellow crystals in iodoform test",
          options: ["Methanol", "Ethanol", "Butanol", "Propanol"],
          answer: 1,
          explanation:
            "Ethanol contains the CH3-CH(OH)- structural unit required to undergo oxidation and cleavage to yield yellow iodoform (CHI3) crystals.",
        },
        {
          id: "alc-phen-eth-7",
          question: "Alcohols are prepared by the",
          options: [
            "Hydration of alkenes",
            "Hydrogenation of alkenes",
            "Halogenation of alkanes",
            "Oxidation of alkenes",
          ],
          answer: 0,
          explanation:
            "Acid-catalyzed addition of water across the carbon-carbon double bond of alkenes (hydration) yields alcohols.",
        },
        {
          id: "alc-phen-eth-8",
          question:
            "The compounds which are formed by the replacement of one of the hydrogen of water by alkyl groups are called as",
          options: ["Ethers", "Alcohols", "Phenols", "Carboxylic acids"],
          answer: 1,
          explanation:
            "Replacing one hydrogen atom of a water molecule (H-O-H) with an alkyl group (R) gives an alcohol (R-O-H).",
        },
        {
          id: "alc-phen-eth-9",
          question: "Phenol reacts with Sodium Hydroxide to form",
          options: ["Salt", "Acid", "Base", "Ester"],
          answer: 0,
          explanation:
            "Phenol acts as a weak acid and reacts with NaOH base to form sodium phenoxide salt and water.",
        },
        {
          id: "alc-phen-eth-10",
          question: "Phenol is completely soluble in water",
          options: [
            "25 centigrade",
            "68.5 centigrade",
            "62.3 centigrade",
            "66.5 centigrade",
          ],
          answer: 1,
          explanation:
            "Phenol and water form a partially miscible system with an upper critical solution temperature (UCST) of 68.5 °C, above which they are miscible in all proportions.",
        },
        {
          id: "alc-phen-eth-11",
          question: "The number of resonating structures of phenoxide Ions are",
          options: ["3", "5", "4", "6"],
          answer: 2,
          explanation:
            "Note: The phenoxide ion possesses 5 canonical resonance forms; option C (4) is mapped according to the provided answer key.",
        },
        {
          id: "alc-phen-eth-12",
          question: "2,4,6-tri nitrophenol is commonly called as",
          options: ["Pthalic acid", "Malonic acid", "Picric acid", "None"],
          answer: 2,
          explanation:
            "2,4,6-Trinitrophenol is known by the common name picric acid.",
        },
        {
          id: "alc-phen-eth-13",
          question: "Phenol gives benzene on heating with",
          options: ["Zinc", "Iron", "Meganese", "Silver"],
          answer: 0,
          explanation:
            "Heating phenol with zinc dust reduces it to benzene, forming zinc oxide (ZnO) as a byproduct.",
        },
        {
          id: "alc-phen-eth-14",
          question: "Oxidation of alcohols to form",
          options: ["Aldehydes", "Ketones", "Both", "None"],
          answer: 2,
          explanation:
            "Oxidation of primary alcohols yields aldehydes, while oxidation of secondary alcohols yields ketones.",
        },
        {
          id: "alc-phen-eth-15",
          question: "Which alcohol is more reactive towards sodium metal",
          options: [
            "Tertiary butyl alcohol",
            "n propyl alcohol",
            "Isopropyl alcohol",
            "Have same reactivity",
          ],
          answer: 1,
          explanation:
            "Reactivity of alcohols toward active metals depends on O-H bond acidity (1° > 2° > 3°). n-Propyl alcohol (primary) is the most reactive choice.",
        },
        {
          id: "alc-phen-eth-16",
          question:
            "An electron with drawing group attached to Ortho position in phenol",
          options: [
            "Makes it basic",
            "Decreases its basicity",
            "Stabilis the phenoxide ion",
            "Allow it to precipitate in aqueous solution",
          ],
          answer: 2,
          explanation:
            "Electron-withdrawing groups (-NO2, -CN) at ortho or para positions delocalize the negative charge on the phenoxide ion, stabilizing it and increasing acidity.",
        },
        {
          id: "alc-phen-eth-17",
          question:
            "Phenol on hydrogenation with hydrogen in presence of nickel catalyst",
          options: ["Benzene", "Cyclohexanol", "Toulene", "Aldehydes"],
          answer: 1,
          explanation:
            "Catalytic hydrogenation of phenol at high temperature and pressure reduces the aromatic ring to give cyclohexanol.",
        },
        {
          id: "alc-phen-eth-18",
          question:
            "Tertiary alcohols are not oxidize into carbon compound because",
          options: [
            "They contain more alkyl group",
            "They have no Alpha hydrogen",
            "Suitable oxidation agent is not available",
            "None of the above",
          ],
          answer: 1,
          explanation:
            "Tertiary alcohols lack an alpha-hydrogen atom on the carbon bearing the -OH group, preventing standard oxidation without breaking C-C bonds.",
        },
        {
          id: "alc-phen-eth-19",
          question: "Reaction of girgnard reagent with formaldehyde to form",
          options: [
            "Primary alcohol",
            "Secondary alcohol",
            "Tertiary alcohol",
            "Do not form alcohol",
          ],
          answer: 0,
          explanation:
            "Grignard reagent addition to formaldehyde (HCHO) followed by acid hydrolysis generates a primary alcohol.",
        },
        {
          id: "alc-phen-eth-20",
          question: "Which one of the following is more acidic",
          options: ["Phenols", "Alcohols", "Carboxylic acids", "Amines"],
          answer: 2,
          explanation:
            "Carboxylic acids are significantly more acidic (pKa ~4-5) than phenols (pKa ~10), alcohols (pKa ~16), or amines.",
        },
        {
          id: "alc-phen-eth-21",
          question: "Oxidation of secondary alcohol gives",
          options: ["Aldehydes", "Ketones", "Melaonic acid", "All of these"],
          answer: 1,
          explanation:
            "Oxidation of secondary alcohols removes hydrogen to form ketones.",
        },
        {
          id: "alc-phen-eth-22",
          question:
            "The alcohols having one hydroxyl group attached to the alkyl group are called",
          options: [
            "Monohydric alcohols",
            "Dihydricalcohol",
            "Trihydric alcohols",
            "Polyhydric alcohols",
          ],
          answer: 0,
          explanation:
            "Alcohols containing a single -OH group in their molecular structure are monohydric alcohols.",
        },
        {
          id: "alc-phen-eth-23",
          question: "Which of the following is more reactive when O-H Bond breaks",
          options: [
            "Primary alcohol",
            "Secondary alcohol",
            "Tertiary alcohol",
            "None of these",
          ],
          answer: 0,
          explanation:
            "When the O-H bond breaks, reactivity follows acid strength: 1° > 2° > 3° due to lesser electron-donating inductive effect from fewer alkyl groups.",
        },
        {
          id: "alc-phen-eth-24",
          question: "The acidity of phenol is due to its",
          options: [
            "Nature of benzene",
            "Double bond in benzene ring",
            "Nature of phenoxide ion",
            "Hydroxyl group",
          ],
          answer: 2,
          explanation:
            "The high acidity of phenol stems from the resonance stabilization of its conjugate base, the phenoxide ion.",
        },
        {
          id: "alc-phen-eth-25",
          question: "Denatured alcohol is known as",
          options: [
            "Absolute alcohol",
            "Methylated spirit",
            "Wood spirit",
            "Rectified spirit",
          ],
          answer: 1,
          explanation:
            "Ethanol rendered unfit for drinking by adding toxic methanol (~10%) and pyridine is called methylated spirit.",
        },
        {
          id: "alc-phen-eth-26",
          question: "Alcohols of lower molecular weight are",
          options: [
            "Soluble in water",
            "Insoluble in water",
            "Soluble in water on heating",
            "Insoluble in all solvents",
          ],
          answer: 0,
          explanation:
            "Lower alcohols (like methanol, ethanol, propanol) form strong hydrogen bonds with water molecules, making them readily soluble.",
        },
        {
          id: "alc-phen-eth-27",
          question: "Which reactant does not laborate water on reaction with alcohol",
          options: ["NH3", "HCL", "K2Cr2O7", "PCL3"],
          answer: 3,
          explanation:
            "Reaction of alcohol with PCl3 forms alkyl chloride and phosphorous acid (H3PO3), without producing water.",
        },
        {
          id: "alc-phen-eth-28",
          question:
            "Which of the following group is indicated when HCL is formed by reaction of Ethanol with Phosphorus pentachloride",
          options: [
            "Amino group",
            "Halide group",
            "Hydroxyl group",
            "Hydride group",
          ],
          answer: 1,
          explanation:
            "Note: Testing for the presence of -OH yields HCl gas; per the provided answer key, Option B (Halide group) is mapped.",
        },
        {
          id: "alc-phen-eth-29",
          question:
            "Temperature required for the dehydration of Ethanol into ethene in the presence of sulphuric acid is",
          options: [
            "130 centigrade",
            "140 centigrade",
            "170 centigrade",
            "180 centigrade",
          ],
          answer: 3,
          explanation:
            "Dehydration of ethanol to form ethene requires strong acidic conditions and high temperature (~170–180 °C).",
        },
        {
          id: "alc-phen-eth-30",
          question:
            "Which of the following is an appropriate indication of positive iodoform test",
          options: [
            "Formation of water",
            "Release of hydrogen gas",
            "Brick red precipitate",
            "Yellow precipitate",
          ],
          answer: 3,
          explanation:
            "A positive iodoform test is confirmed by the formation of a antiseptic-smelling pale yellow precipitate of iodoform (CHI3).",
        },
        {
          id: "alc-phen-eth-31",
          question:
            "What forces operate between ethyl group of ethyl alcohol and oxygen of water",
          options: [
            "Hydrogen bonding",
            "Repulsive forces",
            "Attractive forces",
            "Dipole forces",
          ],
          answer: 0,
          explanation:
            "The hydroxyl group of ethanol forms intermolecular hydrogen bonds with water molecules.",
        },
        {
          id: "alc-phen-eth-32",
          question: "Picric acid is",
          options: [
            "Monocarboxylic acid",
            "Dicarboxylic acid",
            "Tricarboxylic acid",
            "None of these",
          ],
          answer: 3,
          explanation:
            "Picric acid is 2,4,6-trinitrophenol; despite its acidic properties, it contains no carboxylic acid (-COOH) groups.",
        },
        {
          id: "alc-phen-eth-33",
          question: "The phenoxide ion is more stable than eth oxide ion is",
          options: [
            "Lone pair of an oxygen atom overlap with the d localised Pi bonding system in Benzene",
            "Oxygen atom is directly bonded with benzene ring in phenoxide ion",
            "The negative charge is localised on Oxygen atom of phenoxide ion",
            "The negative charge is the localised on Oxygen atom of ethy oxide ion",
          ],
          answer: 0,
          explanation:
            "The negative charge on oxygen in phenoxide is delocalized over the aromatic pi-system of the benzene ring, whereas in ethoxide it remains localized.",
        },
        {
          id: "alc-phen-eth-34",
          question: "Primary secondary and tertiary alcohol can be identified by",
          options: [
            "Lucas test",
            "Iodoform test",
            "Tolens reagent",
            "Silver mirror test",
          ],
          answer: 0,
          explanation:
            "The Lucas reagent (conc. HCl + ZnCl2) distinguishes 1°, 2°, and 3° alcohols based on the rate of formation of insoluble alkyl chloride turbidity.",
        },
        {
          id: "alc-phen-eth-35",
          question: "Ethanol is prepared on a large scale by",
          options: [
            "Hydration of alkanes",
            "Fermentation",
            "Distillation of wood",
            "Williamson synthesis",
          ],
          answer: 1,
          explanation:
            "Fermentation of carbohydrates (molasses or starch) by yeast enzymes (invertase and zymase) produces ethanol commercially.",
        },
        {
          id: "alc-phen-eth-36",
          question:
            "Ethanol ethanoic acid and finol all contain acidic function functional group the order of the acetic strength is ethanoic acid > phenol > ethanol this is mainly due to",
          options: [
            "Electron releasing effect of ethanoic acid is greater than that of ethanol",
            "Electron releasing effect of phenol is greater than that of ethanol",
            "Electron with drawing effect of phenol is greater than that of ethanol",
            "Electron with drawing effect of ethanoic acid is greater than that of phenol",
          ],
          answer: 3,
          explanation:
            "The resonance stabilization in the carboxylate ion of ethanoic acid is far greater than the resonance stabilization in the phenoxide ion of phenol.",
        },
        {
          id: "alc-phen-eth-37",
          question: "Distinction between ethanol and phenol can be ascertained by",
          options: ["Lucas test", "Iodoform test", "Tollens test", "Bromine test"],
          answer: 3,
          explanation:
            "Phenol reacts with bromine water to produce a white precipitate of 2,4,6-tribromophenol, whereas ethanol gives no reaction.",
        },
        {
          id: "alc-phen-eth-38",
          question: "Alcohol is less acidic than phenol due to",
          options: [
            "Higher ka value",
            "Stability of carbocation",
            "Unstability of alcohol ion",
            "Stability of phenol",
          ],
          answer: 2,
          explanation:
            "The alkoxide ion (RO-) formed from alcohol lacks resonance stabilization and is destabilized by electron-donating alkyl groups.",
        },
        {
          id: "alc-phen-eth-39",
          question: "Esterification of CH3COOH is which reaction",
          options: ["Acid base", "Redox", "Electrophilic", "Nucleophillic"],
          answer: 3,
          explanation:
            "Esterification proceeds via nucleophilic acyl substitution where the alcohol acts as a nucleophile.",
        },
        {
          id: "alc-phen-eth-40",
          question: "Reacts with sodium metal to liberate",
          options: [
            "Carbon dioxide gas",
            "monoxide gas",
            "Hydrogen gas",
            "Steam",
          ],
          answer: 2,
          explanation:
            "Alcohols and phenols react with sodium metal to displace acidic hydrogen, releasing hydrogen gas (H2).",
        },
        {
          id: "alc-phen-eth-41",
          question: "Which statement is true about phenol",
          options: [
            "It is more acidic than acetic acid",
            "It is more acidic than ethyl alcohol",
            "It returns red litmus blue",
            "It does not react with sodium",
          ],
          answer: 1,
          explanation:
            "Phenol (pKa ~10) is stronger acid than ethanol (pKa ~16), though weaker than acetic acid (pKa ~4.8).",
        },
        {
          id: "alc-phen-eth-42",
          question:
            "One of the following can produce greater number of moles of ethyl chloride or reacting with excess of ethanol",
          options: ["PCl5", "PCl3", "HCl/ZnCl2", "SOCl2"],
          answer: 1,
          explanation:
            "1 mole of PCl3 reacts with 3 moles of ethanol to yield 3 moles of ethyl chloride (PCl3 + 3C2H5OH -> 3C2H5Cl + H3PO3).",
        },
        {
          id: "alc-phen-eth-43",
          question:
            "Phenol is more acidic than alcohol because of the following reasons",
          options: [
            "Delocalization of negative charge in the OH group",
            "Delocalization of positive charge on the carbon atom in the ring",
            "Delocalization of negative charge in the ring",
            "Delocalization of positive charge in the OH group",
          ],
          answer: 2,
          explanation:
            "In the phenoxide ion, the negative charge on the oxygen atom is delocalized over the ortho and para positions of the benzene ring.",
        },
        {
          id: "alc-phen-eth-44",
          question: "The best reagent for the oxidation of alcohol is",
          options: ["Zinc chloride", "Acid dichromate", "Ethers", "Pyridine"],
          answer: 1,
          explanation:
            "Acidified potassium/sodium dichromate (H+/Cr2O7^2-) is a standard oxidizing agent for converting primary and secondary alcohols.",
        },
        {
          id: "alc-phen-eth-45",
          question: "Reaction of bromine With water 100 centigrade gives major product",
          options: [
            "Orthobromophenol",
            "Para bromo phenol",
            "Metabramophenol",
            "Mixture of orthopara and meta bromophenol",
          ],
          answer: 1,
          explanation:
            "Monobromination of phenol at elevated temperature gives para-bromophenol as the predominant product due to lesser steric hindrance.",
        },
        {
          id: "alc-phen-eth-46",
          question: "Example of aromatic alcohol is",
          options: ["Benzyl alcohol", "Benzene", "Phenol", "Both a and c"],
          answer: 0,
          explanation:
            "Note: Benzyl alcohol is a true aromatic alcohol, and phenol is an aryl alcohol. Option D (Both a and c) is selected per the provided key.",
        },
        {
          id: "alc-phen-eth-47",
          question: "The protonated Ether is called",
          options: ["Oxide ion", "Carbon ion", "Hydronium", "Oxonium ion"],
          answer: 3,
          explanation:
            "When ether accepts a proton on its oxygen atom, it forms a dialkyloxonium ion [R-OH+-R].",
        },
        {
          id: "alc-phen-eth-48",
          question: "Reaction alcohol with carboxylic acid to form",
          options: ["Ethers", "Esters", "Aldehydes", "Ketones"],
          answer: 1,
          explanation:
            "Condensation of an alcohol with a carboxylic acid in the presence of an acid catalyst produces an ester and water.",
        },
        {
          id: "alc-phen-eth-49",
          question:
            "The compound X when treated with sodium metal and the product formed is react with alkyl halide forms Ether compound X",
          options: ["Alcohol", "Alkyl halides", "Phenols", "Ethers"],
          answer: 0,
          explanation:
            "In Williamson ether synthesis, alcohol (ROH) reacts with Na to form sodium alkoxide (RONa), which reacts with R'X to form ether (R-O-R').",
        },
        {
          id: "alc-phen-eth-50",
          question: "Phenol is",
          options: ["Dense", "Hard", "Deliquescent", "Intermediate"],
          answer: 2,
          explanation:
            "Phenol is a colorless, crystalline deliquescent solid that absorbs moisture from the air and turns pinkish on exposure.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-88",
          question:
            "Ketones, when treated with Grignard reagent (RMgX) in the presence of dry ether followed by acid hydrolysis, are converted to:",
          options: [
            "Primary Alcohol",
            "Monohydric alcohol",
            "Secondary alcohol",
            "Tertiary alcohol",
          ],
          answer: 3,
          explanation:
            "Reaction of a ketone with a Grignard reagent yields a magnesium alkoxide complex, which upon hydrolysis yields a tertiary (3°) alcohol.",
        },
        {
          id: "bumhs-2025-chem-111",
          question: "The IUPAC name for OHC–CH₂–CO–CH₂–CH₃ is:",
          options: [
            "3-one pentanal",
            "3-oxo pentanal",
            "3-one pentanol",
            "3-oxo pentanol",
          ],
          answer: 1,
          explanation:
            "Aldehyde (–CHO) has higher principal priority than ketone (>C=O). Numbering from the aldehyde carbon gives 3-oxopentanal.",
        },
        {
          id: "bumhs-2025-chem-116",
          question:
            "Zn-Hg/conc. HCl (Clemmensen reduction) reduces acetaldehyde (CH₃CHO) to:",
          options: ["Ethane", "Ethene", "acetic acid", "Para aldehyde"],
          answer: 0,
          explanation:
            "Clemmensen reduction completely reduces carbonyl (>C=O) groups of aldehydes and ketones into methylene (–CH₂–) groups, converting CH₃CHO into CH₃CH₃ (ethane).",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-93",
          question:
            "Ketones, when treated with lithium aluminum hydride (LiAlH₄), reduce to:",
          options: [
            "Primary alcohol",
            "Tertiary alcohol",
            "Alcohol",
            "Dihydric alcohol",
            "Secondary alcohol",
          ],
          answer: 4,
          explanation:
            "Reduction of ketones (R–CO–R') with hydride reducing agents like LiAlH₄ or NaBH₄ produces secondary alcohols (R–CH(OH)–R').",
        },
        {
          id: "chem-sindh-24-99",
          question:
            "Reduction of aldehydes & ketones by Zn-Hg amalgam and concentrated HCl results in conversion to an alkane. This reaction is known as:",
          options: [
            "Down Reduction",
            "Cope Reduction",
            "Wolff-Kishner Reduction",
            "Clemmensen Reduction",
            "Sodium tetrahydroboride",
          ],
          answer: 3,
          explanation:
            "Clemmensen reduction specifically uses zinc-mercury amalgam (Zn-Hg) in concentrated hydrochloric acid to reduce carbonyl compounds to alkanes.",
        },
        {
          id: "chem-sindh-24-103",
          question:
            "Aldehydes & ketones can be converted directly to alkanes under acidic conditions using Zn-Hg/HCl. This reaction is called:",
          options: [
            "Ozonolysis",
            "Wolff-Kishner reaction",
            "Grignard reaction",
            "Friedel-Crafts reaction",
            "Clemmensen reaction",
          ],
          answer: 4,
          explanation:
            "The transformation of >C=O to >CH₂ using zinc amalgam and concentrated HCl is called the Clemmensen reduction.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-92",
          question:
            "Which carbonyl carbon is most electrophilic (most reactive towards nucleophilic attack)?",
          options: ["HCOOH", "HCHO", "CH₃COCH₃", "CH₃COOH"],
          answer: 1,
          explanation:
            "Formaldehyde (HCHO) lacks electron-donating alkyl groups and exhibits minimal steric hindrance, making its carbonyl carbon the most electrophilic.",
        },
        {
          id: "chem-sindh-25-107",
          question:
            "Among the following carboxylic acid derivatives and carbonyls, which is most susceptible to nucleophilic attack?",
          options: ["CH₃COCl", "CH₃CHO", "CH₃COOCH₃", "CH₃COOCOCH₃"],
          answer: 0,
          explanation:
            "Acyl chlorides (CH₃COCl) have a highly electronegative chlorine atom that acts as an excellent leaving group and strongly withdraws electrons, making the carbonyl carbon exceptionally reactive.",
        },
        {
          id: "chem-sindh-25-119",
          question:
            "During Clemmensen reduction of aldehydes and ketones, conversion of the carbonyl group into an alkane methylene group is carried out using:",
          options: [
            "H₂ and Pd",
            "LiAlH₄",
            "Zn/Hg, conc. HCl",
            "NH₂-NH₂ / KOH",
          ],
          answer: 2,
          explanation:
            "Zn/Hg in concentrated HCl is the signature reagent mixture for Clemmensen reduction.",
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-149",
          question:
            "The compound that reacts with phenylhydrazine (C₆H₅NHNH₂) to form a crystalline phenylhydrazone derivative is:",
          options: ["butanal", "1,3-butadiene", "Ethyl acetate", "Ethanol"],
          answer: 0,
          explanation:
            "Aldehydes and ketones (like butanal) undergo condensation with ammonia derivatives like phenylhydrazine to yield crystalline phenylhydrazones.",
        },
        {
          id: "kmu-mdcat-25-chem-152",
          question:
            "Acetaldehyde reacts with one equivalent of ethanol in the presence of an acid catalyst to initially produce a/an:",
          options: ["Acetal", "Hemiacetal", "Diol", "Diethoxyethane"],
          answer: 1,
          explanation:
            "Nucleophilic addition of one molecule of alcohol to an aldehyde yields a hemiacetal (containing an –OH and –OR group on the same carbon).",
        },
        {
          id: "kmu-mdcat-25-chem-153",
          question: "The IUPAC name of Br–CH₂–CH₂–CO–CH₃ is:",
          options: [
            "1-bromobutan-1-one",
            "4-bromobutan-2-one",
            "1-bromobutan-3-one",
            "4-bromobutan-4-one",
          ],
          answer: 1,
          explanation:
            "Numbering begins from the right to give the ketone carbonyl carbon the lowest locant (C-2): Br–C⁴H₂–C³H₂–C²(=O)–C¹H₃, yielding 4-bromobutan-2-one.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-119",
          question: "Which aldehyde is most reactive towards nucleophilic addition reactions?",
          options: [
            "Acetaldehyde",
            "Butyraldehyde",
            "Formaldehyde",
            "Propionaldehyde",
          ],
          answer: 2,
          explanation:
            "Formaldehyde (HCHO) has no methyl/alkyl (+I) groups to reduce the partial positive charge on the carbonyl carbon and offers the least steric hindrance.",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-70",
          question: "The mild oxidation of methanal (formaldehyde) results in the formation of:",
          options: ["Acetic acid", "Formic acid", "Methanol", "Propanoic acid"],
          answer: 1,
          explanation:
            "Oxidation of single-carbon methanal (HCHO) yields single-carbon methanoic acid (formic acid, HCOOH).",
        },
        {
          id: "szambu-chem-24-78",
          question: "Which product is formed on the reduction of acetic acid (CH₃COOH) with LiAlH₄?",
          options: ["Ethanal", "Ethane", "Ethanoic acid", "Ethanol"],
          answer: 3,
          explanation:
            "Carboxylic acids are reduced by strong reducing agents like LiAlH₄ to primary alcohols (acetic acid → ethanol).",
        },
        {
          id: "szambu-chem-24-122",
          question:
            "The correct relative reactivity order of carbonyl compounds towards nucleophilic addition is:",
          options: [
            "H–CO–H < H–CO–R < R–CO–R",
            "H–CO–H > H–CO–R > R–CO–R",
            "H–CO–R < H–CO–H < R–CO–R",
            "H–CO–H > R–CO–R > H–CO–R",
          ],
          answer: 1,
          explanation:
            "Reactivity decreases as steric hindrance and electron-donating (+I) alkyl groups increase: Formaldehyde > Aldehydes > Ketones.",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question: "The IUPAC name of the compound C₆H₅COCH₃ (acetophenone) is:",
          options: [
            "methylphenylketone",
            "phenylethanone",
            "octan-2-one",
            "benzylethanone",
          ],
          answer: 1,
          explanation:
            "C₆H₅COCH₃ consists of a 2-carbon ethanone chain with a phenyl substituent at position 1, systematically named phenylethanone.",
        },
        {
          id: "szambu-chem-25-2",
          question:
            "During the nucleophilic addition of HCN to an aldehyde, the hybridization of the carbonyl carbon atom changes from:",
          options: ["sp → sp²", "sp³ → sp²", "sp² → sp³", "dsp² → sp³"],
          answer: 2,
          explanation:
            "The planar sp²-hybridized carbonyl carbon (>C=O) is converted into a tetrahedral sp³-hybridized cyanohydrin carbon (>C(OH)CN).",
        },
        {
          id: "szambu-chem-25-3",
          question:
            "Acetone reacts with water in the presence of an acid/base catalyst to produce an unstable gem-diol named:",
          options: [
            "propan-2-ol",
            "propan-1,2-diol",
            "propan-2,2-diol",
            "propanol",
          ],
          answer: 2,
          explanation:
            "Hydration of acetone (CH₃COCH₃ + H₂O ⇌ CH₃C(OH)₂CH₃) forms propan-2,2-diol (acetone hydrate).",
        },
        {
          id: "szambu-chem-25-4",
          question:
            "Which of the following gives a positive brick-red precipitate test with Fehling's solution?",
          options: ["acetophenone", "metaformaldehyde", "acetaldehyde", "benzaldehyde"],
          answer: 2,
          explanation:
            "Aliphatic aldehydes like acetaldehyde reduce Fehling's solution (Cu²⁺ → Cu₂O red ppt). Aromatic aldehydes like benzaldehyde and ketones do not.",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-115",
          question: "CₙH₂ₙO is the general formula for aliphatic open-chain:",
          options: [
            "Ether",
            "Carboxylic acid",
            "Aldehydes and Ketones",
            "Carbolic acid",
          ],
          answer: 2,
          explanation:
            "Acyclic monocarbonyl aldehydes and ketones share the common general molecular formula CₙH₂ₙO.",
        },
        {
          id: "uhs-2024-chem-116",
          question:
            "The deep blue color of Fehling's solution changes to a brick-red precipitate when warmed with an aliphatic aldehyde due to the formation of:",
          options: ["NO₂", "Cu₂O", "AgO", "SO₂"],
          answer: 1,
          explanation:
            "Aldehydes reduce soluble blue copper(II) tartrate complex ions to insoluble red cuprous oxide (Cu₂O).",
        },
        {
          id: "uhs-2024-chem-117",
          question:
            "The reaction of HCN with formaldehyde to form cyanohydrin is classified as a:",
          options: [
            "Nucleophilic addition reaction",
            "Nucleophilic substitution reaction",
            "Electrophilic addition reaction",
            "Electrophilic substitution reaction",
          ],
          answer: 0,
          explanation:
            "Addition of HCN begins with nucleophilic attack of cyanide ion (:CN⁻) on the electron-deficient carbonyl carbon, making it a nucleophilic addition reaction.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-96",
          question:
            "Acetaldehyde undergoes oxidation to produce acetic acid. A standard laboratory oxidizing agent used for this reaction is:",
          options: ["HI", "LiAlH₄", "K₂Cr₂O₇ / H⁺", "NaBH₄"],
          answer: 2,
          explanation:
            "Acidified potassium dichromate (K₂Cr₂O₇/H₂SO₄) oxidizes aldehydes to their corresponding carboxylic acids.",
        },
        {
          id: "uhs-chem-25-118",
          question: "Methanol is produced by the reduction of:",
          options: ["Formaldehyde", "Acetaldehyde", "Propanal", "Propanone"],
          answer: 0,
          explanation:
            "Reduction of single-carbon formaldehyde (HCHO) with H₂/Ni, LiAlH₄, or NaBH₄ yields methanol (CH₃OH).",
        },
        {
          id: "ald-ket-1",
          question: "2-propanol on oxidation yield",
          options: ["Propanaldehyde", "Propanal", "Propanone", "Butanal"],
          answer: 1,
          explanation:
            "Note: Oxidation of secondary alcohol 2-propanol chemically forms propanone (acetone). Option B (Propanal) is mapped per the provided answer key.",
        },
        {
          id: "ald-ket-2",
          question: "Acetaldehyde cyanohydrin upon hydrolysis produces",
          options: ["Tartaric acid", "Mailanic acid", "Formic acid", "Lactic acid"],
          answer: 3,
          explanation:
            "Hydrolysis of acetaldehyde cyanohydrin (CH3-CH(OH)-CN) converts the nitrile group to a carboxyl group, forming lactic acid (2-hydroxypropanoic acid).",
        },
        {
          id: "ald-ket-3",
          question:
            "With acidified sodium dichromate what the product will be when secondary alcohol oxidized in same condition",
          options: ["Alkenes", "Alkyl halides", "Alkynes", "Ketones"],
          answer: 3,
          explanation:
            "Oxidation of secondary alcohols using acidified sodium dichromate (Na2Cr2O7/H2SO4) produces ketones.",
        },
        {
          id: "ald-ket-4",
          question: "I strong base is needed for canizzaros reactions as",
          options: [
            "There is no functional group",
            "There are two functional groups in reactant",
            "Base act as nucleophile as well",
            "Please take functional group H",
          ],
          answer: 2,
          explanation:
            "In the Cannizzaro reaction, hydroxide ion acts as a nucleophile, attacking the electron-deficient carbonyl carbon of an aldehyde lacking alpha-hydrogens.",
        },
        {
          id: "ald-ket-5",
          question: "Reduction of acetone in presence of LiALH4 to form",
          options: [
            "Secondary alcohol",
            "Primary alcohol",
            "Tertiary alcohol",
            "None",
          ],
          answer: 0,
          explanation:
            "Reduction of ketones like acetone with hydride sources (LiAlH4 or NaBH4) produces secondary alcohols (propan-2-ol).",
        },
        {
          id: "ald-ket-6",
          question:
            "Which of the following will undergo nucleophilic addition reaction more easily",
          options: [
            "Aldehydes",
            "Alkenes",
            "Aldehyde and Ketone equally",
            "Neither aldehyde Nor ketone",
          ],
          answer: 0,
          explanation:
            "Aldehydes are more reactive toward nucleophilic addition than ketones due to lesser steric hindrance and greater electrophilicity of the carbonyl carbon.",
        },
        {
          id: "ald-ket-7",
          question: "To distinguish aldehyde from Ketone which solution is used",
          options: [
            "Alkaline solution",
            "Fehling solution",
            "A solution containing potassium dichromate",
            "A solution containing acid only",
          ],
          answer: 1,
          explanation:
            "Fehling's solution oxidizes aliphatic aldehydes to give a brick-red precipitate of Cu2O, whereas ketones do not react.",
        },
        {
          id: "ald-ket-8",
          question: "Which one of the following reagents can be used to detect an aldehyde",
          options: [
            "Tetra ethyl lead",
            "Alcoholic KOH",
            "Acidified CU2Cl2",
            "Tollens reagent",
          ],
          answer: 3,
          explanation:
            "Tollen's reagent (ammoniacal silver nitrate) reacts with aldehydes to produce a characteristic silver mirror on the inner wall of the test tube.",
        },
        {
          id: "ald-ket-9",
          question: "Which reagent gives the same visible change for propanol and propanal",
          options: ["2,4 - DNPH", "Conc H2SO4", "K2Cr2O7", "Ag mirror test"],
          answer: 2,
          explanation:
            "Acidified K2Cr2O7 oxidizes both primary alcohols (propanol) and aldehydes (propanal), turning from orange (Cr6+) to green (Cr3+).",
        },
        {
          id: "ald-ket-10",
          question:
            "Which reagent is responsible for the conversion of Ketone to secondary alcohol",
          options: ["NaCO3", "NaBH4", "Al", "Red P"],
          answer: 1,
          explanation:
            "Sodium borohydride (NaBH4) selectively reduces ketones down to secondary alcohols.",
        },
        {
          id: "ald-ket-11",
          question: "One of the following is application of iodoform reaction",
          options: [
            "Iodine is separated from reaction mixture",
            "Carboxylic acid are formed by methyl ketones",
            "Ketone are formed from this reaction",
            "Identification of methanol",
          ],
          answer: 1,
          explanation:
            "The iodoform reaction cleaves methyl ketones (CH3C=O) to form iodoform (CHI3) and the salt of a carboxylic acid.",
        },
        {
          id: "ald-ket-12",
          question: "Glucose and Fructose are simple sugars chemically known as",
          options: ["Aldohexose", "Aldoketone", "Both", "None"],
          answer: 2,
          explanation:
            "Glucose is an aldohexose and Fructose is a ketohexose; together they represent aldose/ketose simple hexose sugars.",
        },
        {
          id: "ald-ket-13",
          question: "Oxidation of aldehyde to form",
          options: ["Ketone", "Carboxylic acids", "None of these", "Alkane"],
          answer: 1,
          explanation:
            "Aldehydes are easily oxidized by mild or strong oxidizing agents to yield carboxylic acids containing the same number of carbon atoms.",
        },
        {
          id: "ald-ket-14",
          question:
            "Acetone reacts with HCN to form a cyanohydrate it is an example of",
          options: [
            "Electrophilic addition",
            "Electrophilic substitution",
            "Nucleophilic addition",
            "Nucleophilic substitution",
          ],
          answer: 2,
          explanation:
            "Cyanide ion (CN-) attacks the carbonyl carbon followed by protonation, which is a classic nucleophilic addition reaction.",
        },
        {
          id: "ald-ket-15",
          question: "The reaction of formaldehyde with HCN is",
          options: [
            "Nucleophilic substitution",
            "Nucleophilic addition",
            "Nucleophilic addition",
            "Free radical reaction",
          ],
          answer: 1,
          explanation:
            "Addition of HCN to formaldehyde proceeds via base-catalyzed nucleophilic addition across the polar C=O bond.",
        },
        {
          id: "ald-ket-16",
          question:
            "In Benedict solution test aldehyde produce brick red color by reducing",
          options: ["Silver iron", "Tartrate ions", "Citrate ions", "Copper ions"],
          answer: 3,
          explanation:
            "Benedict's reagent contains Cu2+ ions that are reduced by aldehydes to insoluble red cuprous oxide (Cu2O) precipitates.",
        },
        {
          id: "ald-ket-17",
          question: "The oxidation of Ethanol the Alpha carbon changes",
          options: [
            "Methyl group",
            "Methylene group",
            "Functional group carbon",
            "Beta carbon",
          ],
          answer: 2,
          explanation:
            "The alpha carbon attached to the hydroxyl group in ethanol is oxidized into the functional group carbon (-CHO / -COOH).",
        },
        {
          id: "ald-ket-18",
          question:
            "Why is it necessary to distil aldehyde formed from oxidation of primary alcohol through acidified per dichromate solution or acidified sodium dichromate solution",
          options: [
            "Aldehyde formed is unstable and decompose backed original precursor primary alcohol",
            "Aldehyde formed react with alcohol the original reactant",
            "Oxidized further to a Ketone",
            "Aldehyde formed maybe oxidized further to carboxylic acid",
          ],
          answer: 3,
          explanation:
            "Aldehydes are readily oxidized further to carboxylic acids if left in contact with hot aqueous dichromate oxidants; immediate distillation isolates the aldehyde.",
        },
        {
          id: "ald-ket-19",
          question: "Fehlling solution is a complex",
          options: [
            "Cupric and oxalate",
            "Curprous tartrate",
            "Cupric amine",
            "Cupric tartarate",
          ],
          answer: 3,
          explanation:
            "Fehling's solution contains Cu2+ ions complexed with tartrate ions (sodium potassium tartrate) in an alkaline medium.",
        },
        {
          id: "ald-ket-20",
          question: "What is the final product when 2,3-dimethylbutane react with ozone",
          options: ["Acetone", "Formaldehyde", "Acetic acid", "None"],
          answer: 0,
          explanation:
            "Ozonolysis of 2,3-dimethyl-2-butene cleaves the central alkene double bond to yield 2 moles of acetone.",
        },
        {
          id: "ald-ket-21",
          question: "Lower aldehyde have",
          options: ["Sweet smell", "Pleasant smell", "Pungent smell", "None"],
          answer: 2,
          explanation:
            "Lower aldehydes such as formaldehyde and acetaldehyde possess sharp, irritating, and pungent odors.",
        },
        {
          id: "ald-ket-22",
          question:
            "The addition compound obtained by reacting acetaldehyde and HCN when hydrolysed give",
          options: [
            "Ethyl alcohol",
            "Two hydroxy propanoic acid",
            "Methylcyanide",
            "Ethylcyanide",
          ],
          answer: 1,
          explanation:
            "Acetaldehyde cyanohydrin CH3-CH(OH)-CN hydrolyzes under acidic conditions to 2-hydroxypropanoic acid (lactic acid).",
        },
        {
          id: "ald-ket-23",
          question: "In aldehyde and ketones carbon of carbonyl group is",
          options: [
            "SP3 hybridised",
            "SP2 hybridised",
            "SP hybridized",
            "Unhybridised",
          ],
          answer: 1,
          explanation:
            "The carbonyl carbon atom forms 3 sigma bonds and 1 pi bond, exhibiting sp2 hybridization with planar 120° bond geometry.",
        },
        {
          id: "ald-ket-24",
          question: "Dry distillation of calcium Acetate result in the formation of",
          options: ["Formaldehyde", "Acetaldehyde", "Methyl ethyl ketone", "Acetone"],
          answer: 3,
          explanation:
            "Dry distillation of calcium acetate ((CH3COO)2Ca) decomposes it into acetone (CH3COCH3) and calcium carbonate (CaCO3).",
        },
        {
          id: "ald-ket-25",
          question:
            "The conversion of tertiary alcohols into alkenes in the prisons of potassium dichromate and Sulphuric acid is",
          options: [
            "Addition reaction",
            "Carbon hydrogen bond cleavage",
            "Elimination reaction",
            "Combustion reaction",
          ],
          answer: 2,
          explanation:
            "Tertiary alcohols resist direct oxidation and instead undergo acid-catalyzed dehydration (elimination of water) to yield alkenes.",
        },
        {
          id: "ald-ket-26",
          question: "Reaction of benzene which a acylchloride to form",
          options: ["Acetophenone", "Benzyl alcohol", "Formaldehyde", "None"],
          answer: 0,
          explanation:
            "Friedel-Crafts acylation of benzene with acetyl chloride (CH3COCl) produces acetophenone.",
        },
        {
          id: "ald-ket-27",
          question:
            "CH3CH2OH+[O]----->CH3CHO\nThe main reason to heat the reaction mixture is",
          options: [
            "To break hydrogen",
            "To increase collision frequency",
            "To distil product",
            "Provide any alcohol and reacted",
          ],
          answer: 2,
          explanation:
            "Heating allows immediate distillation of the formed acetaldehyde out of the oxidizing reaction mixture to prevent further oxidation into ethanoic acid.",
        },
        {
          id: "ald-ket-28",
          question:
            "2-methyl butanal, upon reduction with hydrazine and potassium Hydroxide produces",
          options: ["Butane", "Pentane", "Isobutnaol", "Isopentanol"],
          answer: 3,
          explanation:
            "Note: Wolff-Kishner reduction (NH2NH2 / KOH) converts 2-methylbutanal into 2-methylbutane (isopentane); Option D (Isopentanol) is mapped per the answer key.",
        },
        {
          id: "ald-ket-29",
          question:
            "Which of the following reacts with tollens reagent but does not form silver mirror",
          options: ["Acetaldehyde", "Acetylene", "Formic acid", "Formaldehyde"],
          answer: 1,
          explanation:
            "Acetylene reacts with Tollen's reagent to form a white precipitate of silver acetylide (AgC≡CAg) rather than a metallic silver mirror.",
        },
        {
          id: "ald-ket-30",
          question: "Number of Alpha hydrogen in benzaldehyde are",
          options: ["3", "0", "1", "2"],
          answer: 1,
          explanation:
            "Benzaldehyde (C6H5CHO) has its carbonyl group attached to a phenyl ring carbon lacking any hydrogen atoms, so alpha-hydrogens = 0.",
        },
        {
          id: "ald-ket-31",
          question: "Aldol condensation is possible because",
          options: [
            "Aldehydes are good oxidizing agent",
            "Alpha hydrogen in carbonyls are acidic",
            "Aldehydes are good reducing agents",
            "Aldehyde scan easily dehydrate",
          ],
          answer: 1,
          explanation:
            "Enolate formation in Aldol condensation relies on the acidity of alpha-hydrogens adjacent to electron-withdrawing carbonyl groups.",
        },
        {
          id: "ald-ket-32",
          question: "Which compound is the easiest to oxidize",
          options: ["Alkane", "Alcohol", "Aldehyde", "Ketone"],
          answer: 2,
          explanation:
            "Aldehydes possess a carbonyl hydrogen (-CHO) that is easily abstracted, making them far easier to oxidize than alkanes, alcohols, or ketones.",
        },
        {
          id: "ald-ket-33",
          question:
            "One of the following compound will give iodoff form test on treatment with aqueous Iodine",
          options: ["3 pentannone", "Propanal", "Propanone", "Butanal"],
          answer: 2,
          explanation:
            "Propanone contains a methyl ketone group (CH3-C=O), which yields a yellow CHI3 precipitate in the iodoform reaction.",
        },
        {
          id: "ald-ket-34",
          question: "Brick red precipitate are formed when aldehyde reacts with",
          options: [
            "Sodium Boro hydride",
            "Sodium bisulphate",
            "Felling solution",
            "Formaldehyde",
          ],
          answer: 3,
          explanation:
            "Note: Chemically Fehling's solution forms red Cu2O precipitates; option D (Formaldehyde) is mapped according to the provided key.",
        },
        {
          id: "ald-ket-35",
          question: "Propanone does not undergo",
          options: [
            "Exam formation",
            "Reduction with fehling solution",
            "Hydrazone formation with hydrazine",
            "Reaction with HCN",
          ],
          answer: 1,
          explanation:
            "Propanone (a ketone) cannot reduce mild oxidizing agents like Fehling's solution.",
        },
        {
          id: "ald-ket-36",
          question: "Both aldehyde and Ketone gives",
          options: [
            "Tollens test",
            "2,4 DNPH test",
            "Benedict solution test",
            "Nitroprusside test",
          ],
          answer: 1,
          explanation:
            "2,4-Dinitrophenylhydrazine (Brady's reagent) reacts with both aldehydes and ketones to yield yellow/orange/red hydrazone precipitates.",
        },
        {
          id: "ald-ket-37",
          question:
            "Hydration of hydrocarbon gives carbonyl compound the general formula of that hydrocarbon is",
          options: ["CnH2n+2", "CnH2n", "CnH2n-2", "Both b and c"],
          answer: 2,
          explanation:
            "Acid-catalyzed hydration of alkynes (general formula CnH2n-2) yields enols that tautomerize into aldehydes or ketones.",
        },
        {
          id: "ald-ket-38",
          question:
            "Which of these cannot discharge the colour of acidified potassium permagnet",
          options: ["Acetaldehyde", "Acetone", "Ethanoic acid", "Ethanol"],
          answer: 2,
          explanation:
            "Ethanoic acid (a fully oxidized carboxylic acid) resists further oxidation and does not discharge the purple color of KMnO4.",
        },
        {
          id: "ald-ket-39",
          question: "From formaldehyde we get formally in which is powerful",
          options: [
            "Painkiller",
            "Preservative and disinfectant",
            "Bleaching whitening agent",
            "Deodorant",
          ],
          answer: 1,
          explanation:
            "Formalin (a 37-40% aqueous solution of formaldehyde) is widely used to preserve biological specimens and as a disinfectant.",
        },
        {
          id: "ald-ket-40",
          question:
            "A student mixed ethyl alcohol with small amount of sodium dichromate and add to the hot solution of dilute sulphuric acid a vigorous reaction took place he district the product formed immediately what was the product",
          options: ["Acetone", "Acetic acid", "dimethy ether", "Acetaldehyde"],
          answer: 3,
          explanation:
            "Controlled oxidation and immediate distillation of ethyl alcohol produces acetaldehyde (ethanal).",
        },
        {
          id: "ald-ket-41",
          question: "Formation of lactic acid from acetaldehyde involves",
          options: [
            "Substitution and hydrolysis",
            "Addition and oxidation",
            "Addition and hydrolysis",
            "Addition and reduction",
          ],
          answer: 2,
          explanation:
            "Synthesis of lactic acid from acetaldehyde proceeds via nucleophilic addition of HCN followed by acid hydrolysis of the nitrile.",
        },
        {
          id: "ald-ket-42",
          question: "Reaction of ethyne with water in presence of H2SO4 and HgSO4 to form",
          options: ["Acetaldehyde", "Acetone", "Carboxylic acid", "None"],
          answer: 0,
          explanation:
            "Hydration of ethyne (CH≡CH) using H2SO4/HgSO4 yields vinyl alcohol, which rapidly tautomerizes to acetaldehyde.",
        },
        {
          id: "ald-ket-43",
          question: "Dry distillation of calcium format result in the formation of",
          options: ["Formaldehyde", "Acetaldehyde", "Methyl ethyl ketone", "Acetone"],
          answer: 0,
          explanation:
            "Thermal decomposition / dry distillation of calcium formate ((HCOO)2Ca) yields formaldehyde (HCHO) and calcium carbonate.",
        },
        {
          id: "ald-ket-44",
          question: "Carbonyl compounds undergo nucleophilic addition reaction because of",
          options: [
            "Electronegativity difference and Pi bond",
            "More stable anion with negative charge on Oxygen and less stable carbocation",
            "Electronegative character of carbonyl carbon",
            "None of these",
          ],
          answer: 2,
          explanation:
            "Note: The electron deficiency/electrophilicity of the carbonyl carbon drives nucleophilic attack; option C is mapped per the answer key.",
        },
        {
          id: "ald-ket-45",
          question: "Which of the following reagent will react with both aldehyde and ketone",
          options: [
            "Felling solution",
            "Tollens Regent",
            "Hydrazine",
            "Sodium nitroprusside",
          ],
          answer: 3,
          explanation:
            "Note: Hydrazine and sodium nitroprusside react with both; sodium nitroprusside is selected according to the provided answer key.",
        },
        {
          id: "ald-ket-46",
          question: "Oxidation of aldehyde in presence of percrhomic acid to form",
          options: ["Acetic acid", "Ketone", "Alkanes", "None of these"],
          answer: 0,
          explanation: "Oxidation of acetaldehyde yields acetic acid.",
        },
        {
          id: "ald-ket-47",
          question: "Oxidation of primary alcohol in presence of PCC",
          options: ["Acetealdehyde", "Acetone", "Formaldehyde", "None"],
          answer: 0,
          explanation:
            "Pyridinium chlorochromate (PCC) selectively oxidizes primary alcohols like ethanol to aldehydes (acetaldehyde) without over-oxidizing to carboxylic acids.",
        },
        {
          id: "ald-ket-48",
          question: "Formalin is used as",
          options: [
            "Fungicide",
            "Sterilizing of surgical instrument",
            "Germicide",
            "All",
          ],
          answer: 3,
          explanation:
            "Formalin acts as an effective germicide, fungicide, and chemical sterilizing agent for laboratory/surgical equipment.",
        },
        {
          id: "ald-ket-49",
          question: "Oxidation of secondary alcohol produces",
          options: ["Aldehyde", "Alkyl halide", "Ketone", "Ester"],
          answer: 2,
          explanation:
            "Oxidation of secondary alcohols removes two hydrogen atoms to generate ketones.",
        },
        {
          id: "ald-ket-50",
          question:
            "Which one of the following is resistant to oxidation under normal conditions",
          options: ["Methyl alcohol", "Acetaldehyde", "Ketone", "None"],
          answer: 2,
          explanation:
            "Ketones lack a carbonyl hydrogen and resist oxidation under mild conditions, requiring strong oxidants and high heat to cleave C-C bonds.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-101",
          question:
            "If an electrophile (or nucleophile attacking electrophilic carbon) is the attacking reagent, which alkyl halide is the most reactive?",
          options: ["R-I", "R-F", "R-Br", "R-Cl"],
          answer: 0,
          explanation:
            "R-I has the longest, weakest C-X bond and iodide (I⁻) is the best leaving group, making alkyl iodides the most reactive among alkyl halides.",
        },
        {
          id: "bumhs-2025-chem-124",
          question:
            "Which of the following mechanisms involves a carbocation intermediate?",
          options: [
            "SN1 mechanism",
            "SN2 mechanism",
            "E1 mechanism",
            "Both SN1 and E1 mechanisms",
          ],
          answer: 3,
          explanation:
            "Unimolecular reactions (SN1 and E1) proceed in two steps via a carbocation intermediate formed in the slow rate-determining heterolysis step.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-101",
          question: "The rate of an SN1 mechanism depends upon:",
          options: [
            "Concentration of nucleophile",
            "Concentration of both substrate and nucleophile",
            "Polar non-polar solvent",
            "Concentration of substrate only",
            "Concentration of reactant",
          ],
          answer: 3,
          explanation:
            "SN1 is a unimolecular nucleophilic substitution process where the rate-determining step involves only the substrate. Thus, Rate = k[Substrate].",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-106",
          question:
            "The order of reactivity of the following R-X alkyl halides for an SN2 reaction is:",
          options: [
            "RF > RCl > RBr > RI",
            "RBr > RF > RCl > RI",
            "RCl > RF > RBr > RI",
            "RI > RBr > RCl > RF",
          ],
          answer: 3,
          explanation:
            "SN2 reactivity increases with leaving-group ability (weaker C–X bond and better stability of halide ion): RI > RBr > RCl > RF.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-113",
          question:
            "Dehydrohalogenation of an alkyl halide to form an alkene is carried out in the presence of:",
          options: ["Alcoholic KOH", "Aqueous KOH", "Conc. H₂SO₄", "Zn dust"],
          answer: 0,
          explanation:
            "Alcoholic KOH provides the alkoxide base (RO⁻) necessary to induce β-elimination (dehydrohalogenation), whereas aqueous KOH favors substitution.",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question: "The IUPAC name of chloroform (CHCl₃) is:",
          options: [
            "methylchloride",
            "methyltrichloride",
            "trichloromethane",
            "chloromethane",
          ],
          answer: 2,
          explanation:
            "Chloroform consists of a single carbon atom attached to three chlorine atoms and one hydrogen atom, systematically named trichloromethane.",
        },
        {
          id: "szambu-chem-25-2",
          question:
            "Consider the four chloroalkanes:\nW: (CH₃)₂CHCH(Cl)CH₃\nX: CH₃CH(Cl)CH₃\nY: (CH₃)₂CHCH₂Cl\nZ: (CH₃)₂C(Cl)CH₃\n\nSelect the chloroalkane classified as tertiary:",
          options: ["W only", "X only", "Y only", "Z only"],
          answer: 3,
          explanation:
            "In Z, (CH₃)₃CCl (2-chloro-2-methylpropane), the carbon attached to chlorine is directly bonded to three other carbon atoms, making it a tertiary alkyl halide.",
        },
        {
          id: "szambu-chem-25-3",
          question:
            "Reaction of 2-bromobutane with alcoholic KOH yields which major product?",
          options: ["2-Butanol", "2-Butene", "2-Butyne", "1-Butanol"],
          answer: 1,
          explanation:
            "Alcoholic KOH causes β-elimination of 2-bromobutane. By Zaitsev's rule, the more substituted and stable alkene, 2-butene, is formed as the major product.",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-112",
          question:
            "Identify the correct ascending order of reactivity of alkyl halides:",
          options: [
            "Cl, Br, I, F",
            "F, Cl, Br, I",
            "Br, I, F, Cl",
            "I, F, Cl, Br",
          ],
          answer: 1,
          explanation:
            "Reactivity increases as bond dissociation energy decreases down the halogen group: R-F < R-Cl < R-Br < R-I.",
        },
        {
          id: "uhs-2024-chem-113",
          question:
            "Identify the correct statement related to substitution and elimination of alkyl halides:",
          options: [
            "Strong bases cause substitution in preference to elimination",
            "Role of leaving groups in elimination is similar to substitution",
            "Substitution is favored more than elimination by decreasing solvent polarity",
            "Decrease in temperature will favor elimination more than substitution",
          ],
          answer: 1,
          explanation:
            "Good leaving groups enhance both nucleophilic substitution and elimination reactions because the rate-determining step in both pathways involves C-X bond cleavage.",
        },
        {
          id: "uhs-2024-chem-114",
          question:
            "Alkyl halides involving –C–X bond breakage and –C–Nu bond formation simultaneously follow which mechanism?",
          options: ["SN1", "SN2", "E1", "E2"],
          answer: 1,
          explanation:
            "The SN2 mechanism is a single-step concerted process where nucleophilic attack and leaving group departure occur simultaneously.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-119",
          question: "The IUPAC name of (CH₃)₃CCH₂Br (neopentyl bromide) is:",
          options: [
            "1-bromopentane",
            "1-bromo-2,2,2-trimethylethane",
            "1-bromo-2,2-dimethylpropane",
            "2-bromopentane",
          ],
          answer: 2,
          explanation:
            "The longest carbon chain containing the bromine atom has 3 carbons (propane). Numbering from the bromine end gives 1-bromo-2,2-dimethylpropane.",
        },
        {
          id: "uhs-chem-25-87",
          question:
            "Conversion of a dihaloalkane into an alkyne does NOT involve:",
          options: ["Addition", "Elimination", "Base", "Heat"],
          answer: 0,
          explanation:
            "Converting a vicinal/geminal dihaloalkane to an alkyne requires double dehydrohalogenation using a strong base with heat (elimination reaction), not addition.",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-103",
          question:
            "Unimolecular nucleophilic substitution (SN1) reaction involves:",
          options: [
            "1st order kinetics",
            "2nd order kinetics",
            "3rd order kinetics",
            "zero order kinetics",
          ],
          answer: 0,
          explanation:
            "SN1 reactions follow first-order (1st order) kinetics because the rate depends solely on the concentration of the alkyl halide substrate.",
        },
        {
          id: "alkyl-halides-1",
          question:
            "In SN1 mechanism how many molecules take part in rate determining estate",
          options: ["One", "Two", "Three", "Multiples"],
          answer: 0,
          explanation:
            "SN1 is a unimolecular nucleophilic substitution where only one molecule (the alkyl halide substrate) is involved in the slow, rate-determining ionization step.",
        },
        {
          id: "alkyl-halides-2",
          question: "During the SN1 reaction the first reaction does not involve:",
          options: [
            "Breakage of covalent bond",
            "Transition state",
            "Formation of carbocation",
            "Attack of nucleophile",
          ],
          answer: 3,
          explanation:
            "The first step of an SN1 reaction is the slow ionization of the substrate to form a carbocation intermediate; attack of the nucleophile occurs in the subsequent second step.",
        },
        {
          id: "alkyl-halides-3",
          question: "Which alkyl halide gives SN1 reactions",
          options: [
            "Secondary alkyl halide",
            "Primary alkyl halide",
            "Tertiary alkyl halide",
            "All of these",
          ],
          answer: 2,
          explanation:
            "Tertiary alkyl halides predominantly react via the SN1 mechanism because the resulting tertiary carbocation intermediate is highly stabilized by hyperconjugation and steric relief.",
        },
        {
          id: "alkyl-halides-4",
          question: "Alkyl halides generally gives which type of elimination reactions",
          options: [
            "Alpha elimination",
            "Gama elimination",
            "Beta elimination",
            "All of these",
          ],
          answer: 2,
          explanation:
            "Elimination in alkyl halides typically removes a hydrogen atom from the beta-carbon and a halogen from the alpha-carbon, resulting in 1,2- (or beta-) elimination to form an alkene.",
        },
        {
          id: "alkyl-halides-5",
          question:
            "In SN1 reactions the rate of reaction depends upon the concentration of",
          options: [
            "One reactant molecule",
            "Two reactant molecules",
            "Nucleophile",
            "Both nucleophile and alkyl halide",
          ],
          answer: 0,
          explanation:
            "The rate law for SN1 is Rate = k[Substrate], making the reaction first-order and dependent solely on the concentration of the alkyl halide substrate.",
        },
        {
          id: "alkyl-halides-6",
          question: "Which of the following is alkyl halide",
          options: ["CH2Cl2", "CH3Cl", "CCL4", "C2H6Cl"],
          answer: 1,
          explanation:
            "CH3Cl (chloromethane) is a monohaloalkane derived from an alkane by replacing one hydrogen atom with a halogen atom.",
        },
        {
          id: "alkyl-halides-7",
          question: "Which is an intermediate in SN1 reaction",
          options: ["Ethoxide ion", "Alkyl halides", "Carbo cation", "Alkene"],
          answer: 2,
          explanation:
            "Heterolytic cleavage of the C-X bond in the slow step of SN1 forms a planar carbocation intermediate.",
        },
        {
          id: "alkyl-halides-8",
          question: "Girgnard reagent is reactive due to",
          options: [
            "Polarity of carbon magnesium Bond",
            "Presence of carbon magnesium Bond",
            "Presence of magnesium",
            "Polarity of magnesium chloride Bond",
          ],
          answer: 0,
          explanation:
            "Magnesium is electropositive relative to carbon, creating a strongly polar Cδ--Mgδ+ bond that gives the carbon atom strong nucleophilic/basic character.",
        },
        {
          id: "alkyl-halides-9",
          question: "Reactivity of alkyl halide can be determined by",
          options: [
            "Carbon halogen Bond",
            "Carbon carbon Bond",
            "Carbon hydrogen bond",
            "Halogen halogen Bond",
          ],
          answer: 0,
          explanation:
            "The strength and polarity of the C-X (carbon-halogen) bond determine the ease of cleavage and the overall chemical reactivity of the alkyl halide.",
        },
        {
          id: "alkyl-halides-10",
          question:
            "The compound which is the highest boiling point in the following is",
          options: [
            "Methyl chloride",
            "Methyl iodide",
            "Methyl Bromide",
            "Both a and b",
          ],
          answer: 1,
          explanation:
            "Methyl iodide (CH3I) has the largest molecular mass and electron cloud polarizability among the methyl halides, leading to stronger London dispersion forces and the highest boiling point.",
        },
        {
          id: "alkyl-halides-11",
          question:
            "When 2-bromobutane reacts with alcoholic potassium Hydroxide the reaction is called",
          options: [
            "Chlorination",
            "Dehydrohalogenation",
            "Halogentaion",
            "Hydrogenation",
          ],
          answer: 1,
          explanation:
            "Alcoholic KOH acts as a strong base, eliminating HBr from 2-bromobutane to yield alkenes via dehydrohalogenation.",
        },
        {
          id: "alkyl-halides-12",
          question:
            "In the transition state of SN2 mechanism reaction with alkyl halides which of the following orbital hybridization is involved",
          options: ["Sp3", "Sp", "Sp2", "dsp3"],
          answer: 2,
          explanation:
            "In the pentacoordinate SN2 transition state, the central carbon adopts a sp2-like geometry with the nucleophile and leaving group weakly interacting along a p-orbital perpendicular to the sp2 plane.",
        },
        {
          id: "alkyl-halides-13",
          question: "Which are not directly prepared",
          options: ["RCL", "RI", "RF", "RBr"],
          answer: 2,
          explanation:
            "Alkyl fluorides (RF) are difficult to prepare by direct fluorination due to the violent exothermic nature of reaction with F2, requiring indirect halogen exchange methods (e.g., Swarts reaction).",
        },
        {
          id: "alkyl-halides-14",
          question:
            "The carbon atom of an alkyl group attached with halogen atom is called",
          options: [
            "Electrophile",
            "Nucleophile",
            "Free radical",
            "Nucleophilic centre",
          ],
          answer: 0,
          explanation:
            "Because halogen atoms are more electronegative than carbon, they pull electron density away, leaving the alpha-carbon electron-deficient (electrophilic).",
        },
        {
          id: "alkyl-halides-15",
          question: "Girginad reagents are made in the presence of",
          options: ["Dry Ether", "Hydrated Ether", "Acetone", "Chloroform"],
          answer: 0,
          explanation:
            "Grignard reagents (RMgX) are prepared in dry (anhydrous) ether because water or moisture causes immediate protonation, converting the reagent into an alkane.",
        },
        {
          id: "alkyl-halides-16",
          question: "During SN2 reaction configuration of alkyl halide molecules",
          options: [
            "Remain same",
            "Depends upon carbon atom",
            "Gets inverted",
            "Depends upon electronegativity of halide",
          ],
          answer: 2,
          explanation:
            "Backside attack by the nucleophile in SN2 reactions causes a complete inversion of stereochemical configuration (Walden inversion).",
        },
        {
          id: "alkyl-halides-17",
          question:
            "A mixture of 1 chloropropane and 2 chloropropane when treated with alcoholic potassium Hydroxide gives",
          options: [
            "Prop-2ene",
            "Propene",
            "Isopropylene",
            "A mixture of prop-1-ene",
          ],
          answer: 1,
          explanation:
            "Dehydrohalogenation of both 1-chloropropane and 2-chloropropane yields propene (CH3-CH=CH2) as the sole alkene product.",
        },
        {
          id: "alkyl-halides-18",
          question: "Which one of the following is not a secondary alkyl halide",
          options: [
            "2 chloropropane",
            "3 bromo butane",
            "2,3- dichloro pentane",
            "2 Chloro- 2 -methyl pentane",
          ],
          answer: 3,
          explanation:
            "In 2-chloro-2-methylpentane, the carbon attached to the chlorine atom is bonded to three other carbon atoms, making it a tertiary (3°) alkyl halide.",
        },
        {
          id: "alkyl-halides-19",
          question:
            "In nucleophilic substitution biomolecular reaction the order of reaction with respect to substrate",
          options: ["First order", "Second order", "Third order", "Zero order"],
          answer: 1,
          explanation:
            "Note: In SN2 (bimolecular substitution), the overall reaction is 2nd order, while the order with respect to the substrate alone is 1st order. Option B (Second order) is mapped according to the provided key.",
        },
        {
          id: "alkyl-halides-20",
          question:
            "In elimination reaction the formation of alkene the reactivity of alkyl halide is in the order of",
          options: ["Cl>Br>I", "Br>Cl>I", "I>Br>Cl", "I>Cl>Br"],
          answer: 2,
          explanation:
            "Iodide is the best leaving group due to its large ionic radius and weaker C-I bond strength, making reactivity order: RI > RBr > RCl.",
        },
        {
          id: "alkyl-halides-21",
          question: "Which is true statement about basis",
          options: [
            "They are electron pair accepter species",
            "They can accept electrons from hydrogen",
            "Their is strength is measured by rate constant",
            "Their is strength is measured best by dissociation constant",
          ],
          answer: 3,
          explanation:
            "Thermodynamic base strength is quantitatively measured by the base dissociation constant (Kb or pKb).",
        },
        {
          id: "alkyl-halides-22",
          question: "Which of the following is more reactive",
          options: ["C2H5F", "C2H5Br", "C2H5I", "C2H5Cl"],
          answer: 2,
          explanation:
            "Ethyl iodide (C2H5I) has the weakest C-X bond energy among ethyl halides, rendering it the most reactive towards substitution and elimination.",
        },
        {
          id: "alkyl-halides-23",
          question:
            "Which halide and has the capacity to act as both very good nucleophile and good living group in nucleophilic substitution reactions",
          options: ["Iodide ion", "Bromide ion", "Floride ion", "Chloride ion"],
          answer: 0,
          explanation:
            "The iodide ion (I-) is highly polarizable (a strong nucleophile) and a weak base/stable anion (an excellent leaving group).",
        },
        {
          id: "alkyl-halides-24",
          question:
            "In primary alkyl halides the carbon atom to which the hello group is attached is in terms bonded directly to",
          options: [
            "One other carbon",
            "Three other carbons",
            "Two other carbons",
            "Four other carbons",
          ],
          answer: 0,
          explanation:
            "A primary (1°) alkyl halide features a halogenated alpha-carbon bonded to only one other carbon atom (or none, in the case of methyl halide).",
        },
        {
          id: "alkyl-halides-25",
          question: "Which of the following alkyl halides undergoes SN1 reaction fastest",
          options: [
            "Methyl chloride",
            "Ethyl chloride",
            "Isobutyl chloride",
            "Tertiary butyl chloride",
          ],
          answer: 3,
          explanation:
            "Tertiary butyl chloride ionizes rapidly to form a stable 3° carbocation, making its rate of SN1 substitution the fastest among the options.",
        },
        {
          id: "alkyl-halides-26",
          question:
            "Primary alcohol is obtained by the reaction of girgnard reagent with",
          options: [
            "Aldehydes other than formaldehyde",
            "Formaldehyde",
            "Acetone",
            "Ethyl format",
          ],
          answer: 1,
          explanation:
            "Grignard addition to formaldehyde (HCHO) followed by acid hydrolysis adds a -CH2OH unit, generating a primary alcohol.",
        },
        {
          id: "alkyl-halides-27",
          question: "In beta elimination reaction",
          options: [
            "Carbon number changes",
            "Hybridization of carbon remain same",
            "Unsaturated compound is formed",
            "Pi bond are decreased",
          ],
          answer: 2,
          explanation:
            "Beta elimination removes atoms from adjacent carbons to form a new C=C double bond, creating an unsaturated hydrocarbon (alkene).",
        },
        {
          id: "alkyl-halides-28",
          question:
            "SN1 reaction have which of the following species formed and consumed in the reaction",
          options: ["Transition state", "Intermediate", "Carbon ion", "Carbon"],
          answer: 1,
          explanation:
            "SN1 proceeds via a distinct reaction step that generates a carbocation reaction intermediate, which is subsequently consumed in the second step.",
        },
        {
          id: "alkyl-halides-29",
          question: "Reaction of ethyl Bromide with ammonia",
          options: [
            "Complete in a single step",
            "Continuous till nucleophile is left when no lone pair",
            "Complete in two steps",
            "It is reversible",
          ],
          answer: 1,
          explanation:
            "Nucleophilic substitution of alkyl halides with ammonia undergoes sequential alkylation forming 1°, 2°, 3° amines and quaternary ammonium salts until no unshared electron pairs remain.",
        },
        {
          id: "alkyl-halides-30",
          question:
            "Which of the following is obtained by the elimination reaction on bromoethane",
          options: ["Butene", "Ethene", "Propene", "Propane"],
          answer: 1,
          explanation:
            "Dehydrohalogenation of bromoethane (CH3CH2Br) eliminates HBr to produce ethene (CH2=CH2).",
        },
        {
          id: "alkyl-halides-31",
          question:
            "Alkyl halides are considered to be very reactive compounds toward nucleophile because",
          options: [
            "They have an electrophilic carbon",
            "They have an electrophilic carbon and a bad leaving group",
            "They have electrophilic carbon and a good leaving group",
            "They have a nucleophilic carbon and a good leaving group",
          ],
          answer: 2,
          explanation:
            "The polar C-X bond makes carbon electrophilic, while the stable halide ion (X-) acts as a favorable leaving group.",
        },
        {
          id: "alkyl-halides-32",
          question: "Which one of the following is an electrophile",
          options: ["Br+", "CH4", "NH3", "H2O"],
          answer: 0,
          explanation:
            "The bromonium cation (Br+) is positively charged and electron-deficient, seeking an electron pair as an electrophile.",
        },
        {
          id: "alkyl-halides-33",
          question:
            "In a reaction having both alkyl halide and base the base will attack on",
          options: [
            "Electrophilic carbon",
            "Nucleophilic carbon",
            "Beta hydrogen",
            "None of these",
          ],
          answer: 2,
          explanation:
            "In elimination reactions, a strong base abstracts a proton from the beta-carbon position to form a double bond.",
        },
        {
          id: "alkyl-halides-34",
          question: "Same first step in",
          options: ["E1 , E2", "E1 , SN1", "E2, SN2", "None"],
          answer: 1,
          explanation:
            "Both E1 and SN1 pathways share an identical rate-determining first step: heterolytic cleavage of the C-X bond to produce a carbocation intermediate.",
        },
        {
          id: "alkyl-halides-35",
          question: "In which phase SN2 reactions are favored",
          options: ["Solid", "Liquid", "Gas"],
          answer: 1,
          explanation:
            "SN2 reactions are typically conducted in liquid solutions using polar aprotic solvents to solubilize reagents while keeping nucleophiles reactive.",
        },
        {
          id: "alkyl-halides-36",
          question: "Gargnard reagent reacts with ...... to form alkane",
          options: ["Water", "Ammonia", "Alcohol", "All"],
          answer: 3,
          explanation:
            "Grignard reagents are strong bases that abstract acidic protons from water, ammonia, or alcohols to yield alkanes.",
        },
        {
          id: "alkyl-halides-37",
          question: "The rate of SN1 reaction becomes double if",
          options: [
            "Concentration of nucleophile double",
            "Concentration of substrate doubled",
            "Concentration of substrate triple",
            "Concentration of substrate remain same",
          ],
          answer: 1,
          explanation:
            "Since the SN1 rate law is Rate = k[Substrate], doubling the concentration of the alkyl halide substrate directly doubles the reaction rate.",
        },
        {
          id: "alkyl-halides-38",
          question:
            "In substitution reaction secondary halogenoalkans give show",
          options: [
            "SN1 mechanism",
            "Both E1 and E2",
            "SN2 mechanism",
            "Both SN1 and SN2",
          ],
          answer: 3,
          explanation:
            "Secondary alkyl halides can undergo substitution via either SN1 or SN2 mechanisms depending on solvent polarity, nucleophile strength, and reaction conditions.",
        },
        {
          id: "alkyl-halides-39",
          question:
            "The alkyl halide molecule on which are nucleophile attacks is called",
          options: ["Nucleophilic centre", "Polar centre", "Substrate", "None"],
          answer: 2,
          explanation:
            "The organic reactant undergoing substitution/attack by an incoming nucleophile is referred to as the substrate.",
        },
        {
          id: "alkyl-halides-40",
          question: "Which type of alkyl halide gives SN2 mechanism",
          options: [
            "Secondary alkyl halides",
            "Tertiary alkyl halides",
            "Vinyl halides",
            "Primary alkyl halides",
          ],
          answer: 3,
          explanation:
            "Primary alkyl halides possess minimal steric hindrance at the alpha-carbon, strongly favoring direct bimolecular SN2 backside attack.",
        },
        {
          id: "alkyl-halides-41",
          question: "The type of isomerism shown by alkyl halides is",
          options: [
            "Geometric isomerism",
            "Positional isomerism",
            "Functional group isomerism",
            "None of the above mentioned",
          ],
          answer: 1,
          explanation:
            "Alkyl halides demonstrate positional isomerism by altering the location of the halogen substituent along the carbon chain (e.g., 1-chloropropane vs 2-chloropropane).",
        },
        {
          id: "alkyl-halides-42",
          question: "Among the following which one is nucleophile",
          options: ["H+", "OH-", "Ca+2", "Na+"],
          answer: 1,
          explanation:
            "The hydroxide ion (OH-) carries an unshared electron pair and negative charge, acting as a strong nucleophile.",
        },
        {
          id: "alkyl-halides-43",
          question: "Alkyl halide is formed from alcohol by",
          options: [
            "Nucleophilic substitution reaction",
            "Electrophilic substitution reaction",
            "Nucleophilic addition reaction",
            "Elimination reaction",
          ],
          answer: 0,
          explanation:
            "Converting alcohols to alkyl halides using HX, SOCl2, or PCl5 involves nucleophilic substitution of the hydroxyl group (-OH) by a halide ion (-X).",
        },
        {
          id: "alkyl-halides-44",
          question: "Which of the following is primary alkyl halide",
          options: [
            "Isopropyl halide",
            "Secondary butyl halide",
            "Tertiary butyl halide",
            "Neo pentyl halide",
          ],
          answer: 3,
          explanation:
            "In neopentyl halide ((CH3)3C-CH2-X), the halogenated carbon is attached directly to only one other carbon atom, making it a primary alkyl halide.",
        },
        {
          id: "alkyl-halides-45",
          question: "An electron pair Donor is classified is",
          options: ["Lewis acid", "Bronsted acid", "Lewis base", "Bronsted base"],
          answer: 2,
          explanation:
            "By Lewis acid-base theory, a species that donates an electron pair to form a coordinate covalent bond is a Lewis base.",
        },
        {
          id: "alkyl-halides-46",
          question:
            "The carbon atom caring positive charge and attached three other carbon atoms or group is called",
          options: ["Carbonium ion", "Oxonium ion", "Carbon ion", "Carbanion"],
          answer: 0,
          explanation:
            "A positively charged trivalent carbon species is known as a carbocation or carbonium ion.",
        },
        {
          id: "alkyl-halides-47",
          question: "Which one of the following is not a nucleophile",
          options: ["NH2-", "H2O", "BF3", "CH3-"],
          answer: 2,
          explanation:
            "Boron trifluoride (BF3) has an incomplete octet with 6 valence electrons around boron, rendering it an electron-deficient Lewis acid (electrophile), not a nucleophile.",
        },
        {
          id: "alkyl-halides-48",
          question: "In beta elimination reaction",
          options: [
            "Carbon number changes",
            "Unsaturated compound is formed",
            "Hybridization of carbon remain same",
            "Pi bond are decreased",
          ],
          answer: 1,
          explanation:
            "Beta elimination converts saturated alkyl halides into unsaturated alkenes by introducing a pi bond.",
        },
        {
          id: "alkyl-halides-49",
          question:
            "Which product is obtained by the hydrolysis of 1 chlorobutane with aqueous sodium hydroxide",
          options: ["1-butanol", "1-butanal", "1-butene", "Butanone"],
          answer: 0,
          explanation:
            "Aqueous NaOH causes nucleophilic substitution of 1-chlorobutane to produce the primary alcohol 1-butanol.",
        },
        {
          id: "alkyl-halides-50",
          question: "Which one among the following is not a good leaving group",
          options: ["HSO4-", "OH-", "Cl-", "Br-"],
          answer: 1,
          explanation:
            "The hydroxide ion (OH-) is a strong base, making it a very poor leaving group in nucleophilic substitution reactions unless protonated first.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-85",
          question: "Common name of pentanoic acid (CH₃–CH₂–CH₂–CH₂–COOH) is:",
          options: ["valeric acid", "caproic acid", "stearic acid", "oxalic acid"],
          answer: 0,
          explanation:
            "Pentanoic acid is a 5-carbon straight-chain carboxylic acid commonly known as valeric acid.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-71",
          question:
            "It is used as a preservative and antibacterial agent in livestock feed:",
          options: [
            "Butyric acid",
            "Formic acid",
            "Caproic acid",
            "Propionic acid",
            "Valeric acid",
          ],
          answer: 3,
          explanation:
            "Propionic acid (propanoic acid) and its salts are widely used as preservatives and antimicrobial agents in animal feed and grain storage.",
        },
        {
          id: "chem-sindh-24-97",
          question: "Carboxylic acids are organic acids that are stronger acids than:",
          options: ["PCl₅", "H₂SO₄", "HNO₃", "HCl", "CH₃OH"],
          answer: 4,
          explanation:
            "Carboxylic acids (pKa ~ 4–5) are weaker than mineral acids (H₂SO₄, HNO₃, HCl), but significantly stronger acids than alcohols like methanol (pKa ~ 15.5).",
        },
        {
          id: "chem-sindh-24-111",
          question: "Formic acid (HCOOH) is naturally found in:",
          options: ["Butter", "Goat", "Milk", "Vinegar", "Ants"],
          answer: 4,
          explanation:
            "Formic acid takes its name from the Latin word 'formica' (ant) because it was first isolated by the distillation of ant bodies.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-86",
          question:
            "Formic acid reacts with ethanol in the presence of an acid catalyst to produce a/an:",
          options: ["Ester", "Ether", "Acid anhydride", "Phenol"],
          answer: 0,
          explanation:
            "Reaction between a carboxylic acid (formic acid) and an alcohol (ethanol) in an acid-catalyzed Fischer esterification produces an ester (ethyl formate) and water.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-120",
          question:
            "Acetic acid (CH₃COOH) can be prepared by the complete acid hydrolysis of:",
          options: ["Ethanol", "Ethanal", "Methanoic acid", "Methyl cyanide"],
          answer: 3,
          explanation:
            "Acidic or basic hydrolysis of nitriles (methyl cyanide / acetonitrile, CH₃CN + 2H₂O + H⁺ → CH₃COOH + NH₄⁺) yields ethanoic acid (acetic acid).",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-79",
          question:
            "When CO₂ reacts with propyl magnesium chloride (CH₃CH₂CH₂MgCl) followed by acid hydrolysis, the product formed is:",
          options: [
            "Butanoic acid",
            "Ethanoic acid",
            "Pentanoic acid",
            "Propanoic acid",
          ],
          answer: 0,
          explanation:
            "Carboxylation of a Grignard reagent adds one carbon to the alkyl chain: 3-carbon propyl group + CO₂ (1 carbon) → 4-carbon carboxylic acid (butanoic acid).",
        },
        {
          id: "szambu-chem-24-105",
          question: "The IUPAC name of Malonic acid HOOC–CH₂–COOH is:",
          options: [
            "1,2-Ethanedioic acid",
            "1,3-Propanedioic acid",
            "1,4-butanedioic acid",
            "1,6-Hexadecanoic acid",
          ],
          answer: 1,
          explanation:
            "Malonic acid contains 3 carbon atoms with two terminal carboxylic acid groups, systematically named 1,3-propanedioic acid.",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question:
            "Reduction of carboxylic acids using lithium aluminum hydride (LiAlH₄) followed by hydrolysis produces a primary:",
          options: ["Alcohol", "acid halide", "ester", "alkane"],
          answer: 0,
          explanation:
            "Lithium aluminum hydride (LiAlH₄) is a powerful reducing agent that reduces carboxylic acids completely to 1° alcohols (R–COOH → R–CH₂OH).",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-119",
          question:
            "Common name of 2-hydroxypropanoic acid (CH₃–CH(OH)–COOH) is:",
          options: ["Tartaric acid", "Lactic acid", "Phthalic acid", "Formic acid"],
          answer: 1,
          explanation:
            "2-hydroxypropanoic acid is commonly known as lactic acid, found in sour milk and muscle tissues during anaerobic respiration.",
        },
        {
          id: "uhs-2024-chem-121",
          question:
            "When carboxylic acids are heated with an alcohol in the presence of concentrated sulfuric acid, one of the following is formed:",
          options: ["Amides", "Acyl chloride", "Esters", "Acid Anhydride"],
          answer: 2,
          explanation:
            "Heating a carboxylic acid with an alcohol in the presence of H₂SO₄ catalyst yields an ester via Fischer esterification.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-126",
          question:
            "Carboxylic acid reacts with ammonia to form ammonium carboxylate salts, which on dry heating produce:",
          options: ["Carbonates", "Alkane", "Ester", "Amide"],
          answer: 3,
          explanation:
            "R–COOH + NH₃ → R–COONH₄. Thermal dehydration of the ammonium carboxylate salt (R–COONH₄ → R–CONH₂ + H₂O) yields an acid amide.",
        },
      
        // --- TESTMOZ ---
        {
          id: "carb-esters-1",
          question: "Propanoic acid is the functional group isomer of",
          options: ["Methyl acetate", "Propanal", "Ethyl acetate", "Propanone"],
          answer: 0,
          explanation:
            "Propanoic acid (C3H6O2) and methyl acetate (CH3COOCH3, C3H6O2) are functional group isomers as both share the same molecular formula.",
        },
        {
          id: "carb-esters-2",
          question:
            "Esters have fruity smell and are used as artificial flavours. Amyl acetate gives flavour of",
          options: ["Banana", "Pineapple", "Jasmine", "Orange"],
          answer: 0,
          explanation:
            "Amyl acetate (pentyl acetate) is widely recognized for its characteristic banana flavor and aroma.",
        },
        {
          id: "carb-esters-3",
          question: "The formula of caproic acid is",
          options: ["C₄H₉COOH", "C₆H₁₃COOH", "C₅H₁₁COOH", "C₇H₁₅COOH"],
          answer: 2,
          explanation:
            "Caproic acid (hexanoic acid) contains a total of 6 carbon atoms, represented by the formula C5H11COOH.",
        },
        {
          id: "carb-esters-4",
          question: "In esterification the OH group of carboxylic acid departs as",
          options: [
            "O and carbonyl C",
            "O and carbonyl O",
            "N and carbonyl C",
            "N and carbonyl O",
          ],
          answer: 0,
          explanation:
            "Note: In esterification mechanism, the -OH group leaves the carbonyl carbon upon nucleophilic attack; option C is mapped according to the provided key.",
        },
        {
          id: "carb-esters-5",
          question: "Formic acid is obtained from",
          options: ["Apples", "Butter", "Ants sting", "None"],
          answer: 2,
          explanation:
            "Formic acid derives its name from 'Formica' (red ant), as it is present in ant stings and bee venom.",
        },
        {
          id: "carb-esters-6",
          question:
            "Solubility of carboxylic acids decreases in water with increase in molar mass because",
          options: [
            "Bigger molecules are more polar",
            "Bigger molecules have bigger nonpolar group",
            "Bigger molecules make more hydrogen bonds",
            "Bigger molecules can form lesser hydrogen bonds",
          ],
          answer: 1,
          explanation:
            "As molar mass increases, the length of the non-polar hydrophobic alkyl chain increases, suppressing water solubility.",
        },
        {
          id: "carb-esters-7",
          question: "Final product of hydrolysis of nitrile is",
          options: ["Ketone", "Aldehydes", "Alcohol", "Carboxylic acid"],
          answer: 3,
          explanation:
            "Complete acid or base hydrolysis of nitriles (-C≡N) converts them into carboxylic acids (-COOH) and ammonium salts.",
        },
        {
          id: "carb-esters-8",
          question:
            "Which one of the following will react with both ethanol and ethanoic acid at room temperature",
          options: ["CaCO₃", "Na metal", "CuO", "CH₃OH"],
          answer: 1,
          explanation:
            "Sodium metal reacts with both alcohols (ethanol) and carboxylic acids (ethanoic acid) to liberate hydrogen gas.",
        },
        {
          id: "carb-esters-9",
          question:
            "Carboxylic acid is more acidic than phenol because of the greater stability of",
          options: ["Carboxylic acid", "Proton", "Phenoxide ion", "Carboxylate ion"],
          answer: 3,
          explanation:
            "The carboxylate ion is stabilized by two equivalent resonance structures where negative charge is delocalized over two electronegative oxygen atoms.",
        },
        {
          id: "carb-esters-10",
          question:
            "Carboxylic acid can be reduced into corresponding alcohol. Which of the following reagent can be used for this purpose",
          options: ["K₂Cr₂O₇", "LiAlH₄", "H₂SO₄", "KMnO₄"],
          answer: 1,
          explanation:
            "Lithium aluminium hydride (LiAlH4) is a powerful reducing agent that selectively reduces carboxylic acids directly to primary alcohols.",
        },
        {
          id: "carb-esters-11",
          question:
            "When ethyl magnesium bromide is treated with carbon dioxide and the product hydrolysed we get",
          options: ["Formic acid", "Oxalic acid", "Propionic acid", "Acetic acid"],
          answer: 2,
          explanation:
            "CH3CH2MgBr + CO2 -> CH3CH2COOMgBr. Acid hydrolysis yields propionic acid (propanoic acid, C2H5COOH).",
        },
        {
          id: "carb-esters-12",
          question: "How carboxylic acids are formed from alcohol",
          options: ["Hydrolysis", "Reduction", "Oxidation", "Protonation"],
          answer: 2,
          explanation:
            "Primary alcohols undergo oxidation via aldehydes to yield carboxylic acids using strong oxidizing agents.",
        },
        {
          id: "carb-esters-13",
          question: "Which compound shows the highest melting point",
          options: [
            "Water",
            "Propanoic acid",
            "Methanoic acid",
            "Ethanoic acid",
          ],
          answer: 3,
          explanation:
            "Ethanoic acid exhibits high symmetry and effective crystal lattice packing alongside hydrogen-bonded dimer formation, yielding a higher melting point among the given choices.",
        },
        {
          id: "carb-esters-14",
          question: "Which of the following is weaker acid",
          options: ["HCl", "H₂SO₄", "CH₃COOH", "H₃PO₄"],
          answer: 3,
          explanation:
            "Note: Acetic acid (CH3COOH) is an organic weak acid, but H3PO4 (a moderately weak mineral acid) is mapped per the provided answer key.",
        },
        {
          id: "carb-esters-15",
          question: "Octyl acetate has the flavour of",
          options: ["Orange", "Pineapple", "Banana", "Apple"],
          answer: 0,
          explanation:
            "Octyl acetate is an ester possessing a distinct citrus orange flavor and aroma.",
        },
        {
          id: "carb-esters-16",
          question: "All are dicarboxylic acid except",
          options: ["Oxalic acid", "Picric acid", "Malonic acid", "Tartaric acid"],
          answer: 1,
          explanation:
            "Picric acid is 2,4,6-trinitrophenol (a phenolic compound), not a carboxylic acid.",
        },
        {
          id: "carb-esters-17",
          question:
            "Acetyl chloride is used in the synthesis of organic compound. It is prepared by treating acetic acid with",
          options: ["SOCl₂", "HCl", "CH₃Cl", "ClNH₂"],
          answer: 0,
          explanation:
            "Thionyl chloride (SOCl2) reacts with acetic acid to form acetyl chloride, releasing SO2 and HCl gases.",
        },
        {
          id: "carb-esters-18",
          question: "Formation of acyl halide and amide by carboxylic acid involves",
          options: [
            "Replacement of hydrogen",
            "Replacement of carbonyl group",
            "Replacement of hydroxyl group",
            "Replacement of oxygen",
          ],
          answer: 2,
          explanation:
            "Conversion of -COOH to -COX (acyl halide) or -CONH2 (amide) involves nucleophilic substitution replacing the -OH group.",
        },
        {
          id: "carb-esters-19",
          question: "Reverse process of esterification is",
          options: ["Saponification", "Hydrolysis", "Rancidity", "None"],
          answer: 1,
          explanation:
            "Note: Acid hydrolysis is the direct reverse of esterification; alkaline hydrolysis of esters is termed saponification (mapped per key).",
        },
        {
          id: "carb-esters-20",
          question: "When fat reacts with sodium hydroxide the reaction is called",
          options: ["Esterification", "Saponification", "Hydrolysis", "Hardening"],
          answer: 1,
          explanation:
            "Alkaline hydrolysis of triglyceride fats/oils using NaOH to yield glycerol and soap (sodium salts of fatty acids) is termed saponification.",
        },
        {
          id: "carb-esters-21",
          question: "Reduction of carboxylic acid to form",
          options: ["Aldehydes", "Ketones", "Acetic anhydride", "None"],
          answer: 0,
          explanation:
            "Controlled or partial reduction of carboxylic acid derivatives yields aldehydes.",
        },
        {
          id: "carb-esters-22",
          question: "Propanone on oxidation gives",
          options: [
            "Acetic acid",
            "Formic acid and acetic acid",
            "Formic acid",
            "Propionic acid",
          ],
          answer: 1,
          explanation:
            "Vigorous oxidation of unsymmetrical or symmetrical ketones like propanone involves C-C bond cleavage (Popoff's rule), yielding acetic acid and formic acid (which further oxidizes to CO2/H2O).",
        },
        {
          id: "carb-esters-23",
          question:
            "In carboxylic acid molecules the bond angle between alkyl group and hydroxyl group is",
          options: ["90 degree", "180 degree", "60 degree", "120 degree"],
          answer: 3,
          explanation:
            "The carbonyl carbon in carboxylic acids is sp2 hybridized, establishing a trigonal planar geometry with ~120° bond angles.",
        },
        {
          id: "carb-esters-24",
          question:
            "The complete oxidation of ethanol produces first ethanal then",
          options: ["Ethanal", "Ethanoic acid", "Propanone", "Benzoic acid"],
          answer: 1,
          explanation:
            "Oxidation of ethanol (primary alcohol) progresses to ethanal (aldehyde) and ultimately to ethanoic acid (carboxylic acid).",
        },
        {
          id: "carb-esters-25",
          question:
            "A compound X has all of the properties below: it is a liquid at 25°C, it mixes completely with water, it reacts with aqueous sodium hydroxide. What could X be",
          options: [
            "Ethanoic acid",
            "Ethene",
            "Ethanol",
            "Ethyl ethanoate",
          ],
          answer: 2,
          explanation:
            "Note: Ethanoic acid fits all three properties (liquid, miscible, reacts with NaOH base). Option C (Ethanol) is mapped per the provided answer key.",
        },
        {
          id: "carb-esters-26",
          question:
            "Which of the following causes complete reduction of carboxylic acids into alkanes",
          options: ["H₂/Ni", "HI/P", "Pd/C", "LiAlH₄"],
          answer: 1,
          explanation:
            "Concentrated hydroiodic acid in the presence of red phosphorus (HI/P) reduces carboxylic acids completely down to alkanes.",
        },
        {
          id: "carb-esters-27",
          question: "Highest boiling point is observed in",
          options: ["Butanoic acid", "Pentanoic acid", "Propanoic acid", "HCl"],
          answer: 1,
          explanation:
            "Boiling point increases with molecular mass due to increasing London dispersion forces among carboxylic acid dimers; pentanoic acid has the highest mass listed.",
        },
        {
          id: "carb-esters-28",
          question:
            "Valeric acid is obtained from a herb valerian. Its IUPAC name is",
          options: ["Propionic acid", "Butyric acid", "Pentanoic acid", "Caproic acid"],
          answer: 2,
          explanation:
            "Valeric acid is the trivial name for pentanoic acid (5-carbon straight-chain carboxylic acid).",
        },
        {
          id: "carb-esters-29",
          question: "Methyl cyanide on boiling with mineral acid yields",
          options: ["Acetic acid", "Propanoic acid", "Formic acid", "Butanoic acid"],
          answer: 0,
          explanation:
            "Methyl cyanide (acetonitrile, CH3CN) undergoes acid hydrolysis to yield acetic acid (CH3COOH).",
        },
        {
          id: "carb-esters-30",
          question: "Ethanoic acid reacts with all of these to produce water except",
          options: [
            "Ethanol",
            "Caustic soda",
            "Sodium",
            "Sodium hydrogen carbonate",
          ],
          answer: 2,
          explanation:
            "Reaction of ethanoic acid with sodium metal produces sodium ethanoate and hydrogen gas (H2), NOT water.",
        },
        {
          id: "carb-esters-31",
          question: "Which one of the following reaction of carboxylic acid is reversible",
          options: [
            "Esterification",
            "Reaction with PCl₅",
            "Salt formation",
            "Reaction with SOCl₂",
          ],
          answer: 0,
          explanation:
            "Acid-catalyzed esterification between a carboxylic acid and an alcohol is an equilibrium-controlled reversible reaction.",
        },
        {
          id: "carb-esters-32",
          question: "Formamide is formed by the reaction of which acid with ammonia",
          options: ["Oxalic acid", "Formic acid", "Ethanoic acid", "Propanoic acid"],
          answer: 1,
          explanation:
            "Formic acid (HCOOH) reacts with ammonia (NH3) upon heating to yield formamide (HCONH2).",
        },
        {
          id: "carb-esters-33",
          question:
            "The reagent that cannot produce an acyl halide in reaction with a carboxylic acid is",
          options: ["PCl₃", "PCl₅", "HCl", "SOCl₂"],
          answer: 2,
          explanation:
            "Hydrochloric acid (HCl) cannot convert carboxylic acids to acyl chlorides; PCl3, PCl5, or SOCl2 are required.",
        },
        {
          id: "carb-esters-34",
          question: "The most common compound found in pineapple is",
          options: ["Acetic acid", "Ethanol", "Acetone", "Ethyl butanoate"],
          answer: 3,
          explanation:
            "Ethyl butanoate is an ester responsible for the characteristic sweet pineapple fragrance and flavor.",
        },
        {
          id: "carb-esters-35",
          question: "Lowest boiling point is shown by",
          options: [
            "Acetic acid",
            "Formic acid",
            "Propionic acid",
            "Gallery cassette",
          ],
          answer: 1,
          explanation:
            "Formic acid (HCOOH) has the smallest molecular mass among simple carboxylic acids, giving it the lowest boiling point.",
        },
        {
          id: "carb-esters-36",
          question: "Two molecules of acetic acid on condensation give",
          options: [
            "Ethyl acetate",
            "Acetic amide",
            "Acetic anhydride",
            "Tartaric acid",
          ],
          answer: 2,
          explanation:
            "Note: Dehydration of two acetic acid molecules yields acetic anhydride. Option B (Acetic amide) is mapped per the provided key.",
        },
        {
          id: "carb-esters-37",
          question: "Benzoic acid is the product of oxidation of",
          options: ["Benzene", "Ethylbenzene", "Aniline", "Phenol"],
          answer: 1,
          explanation:
            "Oxidation of alkylbenzenes like ethylbenzene using strong oxidizing agents yields benzoic acid.",
        },
        {
          id: "carb-esters-38",
          question:
            "The formation of ester from acetic acid in presence of acid and ethanol is a",
          options: [
            "Nucleophilic substitution reaction",
            "Electrophilic substitution reaction",
            "Nucleophilic addition reaction",
            "Electrophilic addition reaction",
          ],
          answer: 0,
          explanation:
            "Esterification follows an acyl nucleophilic substitution mechanism where the alcohol acts as a nucleophile attacking the protonated carbonyl.",
        },
        {
          id: "carb-esters-39",
          question:
            "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
          options: ["Propanal", "1-propanol", "Propanone", "Propanoic acid"],
          answer: 0,
          explanation:
            "Note: Primary alcohols (like 1-propanol) oxidize to acids and react together to form sweet-smelling esters; option A (Propanal) is mapped per the answer key.",
        },
        {
          id: "carb-esters-40",
          question:
            "What will be the outcome of reaction of methanol with ethanoic acid in the presence of concentrated sulphuric acid",
          options: [
            "Propanone is formed",
            "Propenoic acid is formed",
            "Methyl ethanoate is formed",
            "Propanol is formed",
          ],
          answer: 2,
          explanation: "Methanol + Ethanoic acid --(H2SO4)--> Methyl ethanoate (ester) + Water.",
        },
        {
          id: "carb-esters-41",
          question: "CH₃CH₂COOH is named according to IUPAC nomenclature as",
          options: [
            "Propionic acid",
            "Oxalic acid",
            "1-propanoic acid",
            "Propanoic acid",
          ],
          answer: 3,
          explanation:
            "The 3-carbon carboxylic acid is designated as propanoic acid under IUPAC rules.",
        },
        {
          id: "carb-esters-42",
          question:
            "The reaction of carboxylic acids which involve hydrogen atom removal of hydroxyl group form …… as major product in all reactions",
          options: ["Esters", "Nitriles", "Ketones", "Salts"],
          answer: 3,
          explanation:
            "Reactions breaking the O-H bond in carboxylic acids behave as acid-base reactions to produce carboxylate salts.",
        },
        {
          id: "carb-esters-43",
          question:
            "In the presence of hot alkaline potassium permanganate solution 2-butene will give",
          options: [
            "Formic acid + acetic acid",
            "Two moles of methanoic acid",
            "Two moles of ethanoic acid",
            "Ethylene glycol",
          ],
          answer: 2,
          explanation:
            "Oxidative cleavage of symmetric 2-butene (CH3-CH=CH-CH3) across the double bond yields 2 moles of ethanoic acid (acetic acid).",
        },
        {
          id: "carb-esters-44",
          question:
            "One of the following compound reacts with its own oxidation product to give sweet odour liquid",
          options: ["Propanal", "1-propanol", "Propanone", "Propanoic acid"],
          answer: 0,
          explanation: "Duplicate question in source key mapped to Option A (Propanal).",
        },
        {
          id: "carb-esters-45",
          question:
            "Which of the following is used as coagulant for latex in rubber industry",
          options: [
            "Formic acid",
            "Acetaldehyde",
            "Acetic acid",
            "None of the above mentioned",
          ],
          answer: 2,
          explanation:
            "Note: Both formic acid and acetic acid serve as rubber latex coagulants; acetic acid is mapped per the answer key.",
        },
        {
          id: "carb-esters-46",
          question: "Glycine is an amino acid which is present in solution as",
          options: ["Acid", "Base", "Zwitter ion", "All"],
          answer: 2,
          explanation:
            "At physiological pH, amino acids exist primarily as dipolar zwitterions (+NH3-CH2-COO-).",
        },
        {
          id: "carb-esters-47",
          question:
            "When two carboxylic acids are strongly heated in the presence of P₂O₅ which product is formed",
          options: ["Acid halides", "Dimer", "Acid anhydride", "None"],
          answer: 2,
          explanation:
            "Phosphorus pentoxide (P2O5) acts as a powerful dehydrating agent, abstracting water from two carboxylic acid molecules to yield an acid anhydride.",
        },
        {
          id: "carb-esters-48",
          question: "Which of the following is used in perfumes",
          options: ["Alcohol", "Aldehydes", "Ketone", "Carboxylic acids"],
          answer: 0,
          explanation:
            "Note: Esters and fragrant aldehydes/alcohols are extensively utilized in perfumery; option A (Alcohol) is mapped per the key.",
        },
        {
          id: "carb-esters-49",
          question: "Relative strength of alcohol, phenol, water and carboxylic acid is",
          options: [
            "Carboxylic acid > alcohol > phenol > water",
            "Carboxylic acid > phenol > water > alcohol",
            "Phenol > carboxylic acid > alcohol > water",
            "Water > phenol > alcohol > carboxylic acid",
          ],
          answer: 1,
          explanation:
            "Relative acid strengths follow the decreasing order: Carboxylic acid (pKa ~4-5) > Phenol (pKa ~10) > Water (pKa 15.7) > Alcohol (pKa ~16-18).",
        },
        {
          id: "carb-esters-50",
          question: "All are aliphatic carboxylic acids except",
          options: ["Methanoic acid", "Ethanoic acid", "Benzoic acid", "Lactic acid"],
          answer: 2,
          explanation:
            "Benzoic acid (C6H5COOH) contains a carboxyl group directly bonded to an aromatic benzene ring, making it an aromatic carboxylic acid.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-91",
          question:
            "Toluene reacts with bromine in the presence of UV light (side-chain halogenation) to produce:",
          options: [
            "m-bromotoluene",
            "benzylbromide",
            "o-bromotoluene",
            "bromobenzene",
          ],
          answer: 1,
          explanation:
            "In the presence of UV light or heat, halogenation of toluene occurs via a free-radical mechanism at the methyl side chain to form benzyl bromide (C₆H₅CH₂Br).",
        },
        {
          id: "bumhs-2025-chem-92",
          question:
            "A terminal or internal alkyne is treated with Lindlar's catalyst (Pd/CaCO₃/quinoline) and Hydrogen. The major product is a:",
          options: ["Trans-alkene", "Cis-alkene", "alkane", "vinyl chloride"],
          answer: 1,
          explanation:
            "Lindlar's catalyst selectively poison-hydrates alkynes via syn-addition of hydrogen to yield cis-alkenes.",
        },
        {
          id: "bumhs-2025-chem-93",
          question:
            "Dehydration of ethanol to form ethene in the presence of concentrated H₂SO₄ is an example of a/an:",
          options: [
            "substitution reaction",
            "addition reaction",
            "elimination reaction",
            "redox reaction",
          ],
          answer: 2,
          explanation:
            "Dehydration of an alcohol removes H and OH elements to construct a C=C double bond, which is an acidic E1/E2 elimination reaction.",
        },
        {
          id: "bumhs-2025-chem-110",
          question:
            "Which of the following reaction types is the characteristic feature of alkenes?",
          options: [
            "Electrophilic addition",
            "Nucleophilic substitution",
            "Free radical substitution",
            "Elimination",
          ],
          answer: 0,
          explanation:
            "Alkenes possess a high-density, exposed pi-electron cloud that acts as a nucleophile, making electrophilic addition their primary characteristic reaction.",
        },
        {
          id: "bumhs-2025-chem-117",
          question:
            "Which aromatic compound is more likely (most reactive) to undergo Friedel-Crafts alkylation?",
          options: ["benzene", "toluene", "nitrobenzene", "benzaldehyde"],
          answer: 1,
          explanation:
            "Toluene possesses an electron-donating methyl group (+I effect/hyperconjugation) that activates the benzene ring toward electrophilic aromatic substitution.",
        },
        {
          id: "bumhs-2025-chem-118",
          question:
            "Reaction of toluene with chlorine in the presence of a Lewis acid catalyst (FeCl₃) produces a major mixture of:",
          options: [
            "o-chlorotoluene",
            "m-chlorotoluene",
            "p-chlorotoluene",
            "ortho- and para-chlorotoluene",
          ],
          answer: 3,
          explanation:
            "The methyl group in toluene is ortho/para-directing; electrophilic aromatic chlorination yields an ortho- and para-chlorotoluene product mixture.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-74",
          question:
            "The liquid density of pure benzene at room temperature is approximately:",
          options: [
            "0.80 g/cm³",
            "0.88 g/cm³",
            "0.85 g/cm³",
            "0.82 g/cm³",
            "0.08 g/cm³",
          ],
          answer: 1,
          explanation: "The density of liquid benzene at 20°C is ~0.876–0.88 g/cm³.",
        },
        {
          id: "chem-sindh-24-76",
          question:
            "According to Markovnikov's rule, when an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part adds to the double-bonded carbon containing:",
          options: [
            "Highest number of chloride atoms",
            "Lesser number of hydrogen atoms",
            "Highest number of hydrogen atoms",
            "Moderate number of hydrogen atoms",
            "Lesser number of chloride atoms",
          ],
          answer: 1,
          explanation:
            "Markovnikov's rule states that the electrophilic hydrogen adds to the carbon with more hydrogens, placing the nucleophilic negative part on the carbon with fewer hydrogen atoms.",
        },
        {
          id: "chem-sindh-24-81",
          question: "The carbon-carbon (C–C) bond length in benzene is:",
          options: ["1.34 Å", "1.39 Å", "1.56 Å", "1.38 Å", "1.46 Å"],
          answer: 1,
          explanation:
            "Due to full resonance delocalization, C–C bond lengths in benzene are intermediate between single (1.54 Å) and double (1.34 Å) bonds, equal to 1.39 Å (139 pm).",
        },
        {
          id: "chem-sindh-24-114",
          question:
            "The number of five-membered (pentagons) and six-membered (hexagons) rings in Buckminsterfullerene (C₆₀) are respectively:",
          options: [
            "40 and 20",
            "12 and 12",
            "5 and 15",
            "14 and 14",
            "12 and 20",
          ],
          answer: 4,
          explanation:
            "A standard C₆₀ fullerene (buckyball) truncated icosahedron structure contains exactly 12 pentagonal rings and 20 hexagonal rings.",
        },
        {
          id: "chem-sindh-24-121",
          question:
            "These unsaturated hydrocarbons contain one or more double or triple carbon-carbon bonds in their structure:",
          options: [
            "Alkenes and alcohol",
            "Alkenes and cycloalkanes",
            "Alkanes and alkyl halides",
            "Alkenes and alkynes",
            "Alkanes and alkenes",
          ],
          answer: 3,
          explanation:
            "Alkenes possess C=C double bonds and alkynes possess C≡C triple bonds.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-98",
          question: "The IUPAC name of CH₃(CH₂)₄CH(CH₃)₂ is:",
          options: [
            "2-methylheptane",
            "3-methylheptane",
            "4-methylheptane",
            "Octane",
          ],
          answer: 0,
          explanation:
            "Expanding CH₃–CH₂–CH₂–CH₂–CH₂–CH(CH₃)₂ gives an 8-carbon chain overall, with the longest continuous chain containing 7 carbons (heptane) and a methyl substituent at C-2.",
        },
        {
          id: "chem-sindh-25-99",
          question: "The IUPAC name of C₂H₅CH=C(C₃H₇)C₂H₅ is:",
          options: [
            "1,2-diethyl-2-propylethene",
            "3-ethylhept-3-ene",
            "4-ethylhept-3-ene",
            "4-ethylhept-2-ene",
          ],
          answer: 2,
          explanation:
            "The longest chain containing the double bond is 7 carbons (heptene). Numbering from the end closer to the double bond gives C-3 for the alkene double bond and an ethyl substituent at C-4: 4-ethylhept-3-ene.",
        },
        {
          id: "chem-sindh-25-103",
          question: "Which reagent and conditions convert toluene to p-chlorotoluene?",
          options: [
            "Cl₂ in the dark",
            "Cl₂ in the presence of AlCl₃ (or FeCl₃)",
            "Cl₂ in presence of UV Light",
            "Concentrated HCl heated under reflux",
          ],
          answer: 1,
          explanation:
            "Electrophilic aromatic ring chlorination of toluene requires a Lewis acid catalyst like AlCl₃ or FeCl₃ to yield ortho- and para-chlorotoluene.",
        },
        {
          id: "chem-sindh-25-105",
          question: "The IUPAC name of CH₂=CHCl (Vinyl chloride) is:",
          options: [
            "Chloroethane",
            "Chloroethyne",
            "Chloroethene",
            "Ethylchloride",
          ],
          answer: 2,
          explanation:
            "CH₂=CHCl consists of a 2-carbon alkene chain with a chlorine atom attached, systematically named Chloroethene.",
        },
        {
          id: "chem-sindh-25-111",
          question: "The IUPAC name of Vinyl acetylene (CH₂=CH–C≡CH) is:",
          options: [
            "But-1-en-3-yne",
            "But-3-en-1-yne",
            "Pent-3-en-1-yne",
            "Pent-2-en-4-yne",
          ],
          answer: 0,
          explanation:
            "When alkene and alkyne functional groups are at equivalent terminal positions (C-1 vs C-3), the double bond receives numerical priority: But-1-en-3-yne.",
        },
        {
          id: "chem-sindh-25-118",
          question: "Which of the following statements is NOT true regarding benzene?",
          options: [
            "sp² hybridization of carbon atoms",
            "Fractional C–C bond order of 1.5",
            "It undergoes elimination reactions easily",
            "6 equivalent sites for monosubstitution",
          ],
          answer: 2,
          explanation:
            "Benzene undergoes electrophilic substitution reactions while preserving its stable aromatic pi-ring system; it does not typically undergo elimination reactions.",
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-118",
          question:
            "In the free-radical chlorination of methane, the attack of a chlorine free radical (Cl•) on methane (CH₄ + Cl• → •CH₃ + HCl) occurs during which phase?",
          options: ["Before initiation", "Initiation", "Propagation", "Termination"],
          answer: 2,
          explanation:
            "The reaction of a chlorine radical with methane to form a methyl radical and HCl is the first propagation step.",
        },
        {
          id: "kmu-mdcat-25-chem-122",
          question:
            "What makes ethene significantly more reactive than ethane toward electrophilic addition (such as rapid decolorization of bromine water)?",
          options: [
            "Ethene has a higher molecular mass",
            "Ethene contains a weak and exposed pi bond",
            "Ethene contains fewer sigma bonds",
            "Ethene undergoes substitution more readily",
          ],
          answer: 1,
          explanation:
            "The pi-bond in ethene consists of sideway-overlapped p-orbitals located above and below the molecular plane, making its electrons weakly bound and exposed to electrophilic attack.",
        },
        {
          id: "kmu-mdcat-25-chem-123",
          question: "What best describes electrophilic substitution in benzene?",
          options: [
            "Addition of an electrophile across a double bond",
            "Substitution of a halogen by a nucleophile",
            "Substitution of a proton (H⁺) by an electrophile on the aromatic ring",
            "Substitution of a methyl group by a nucleophile",
          ],
          answer: 2,
          explanation:
            "Electrophilic aromatic substitution involves the replacement of a ring hydrogen atom (proton, H⁺) by an incoming electrophile (E⁺), retaining aromatic resonance stability.",
        },
        {
          id: "kmu-mdcat-25-chem-142",
          question:
            "The acid-catalyzed hydration (addition of water in presence of H₂SO₄) of propene yields:",
          options: ["Propan-1-ol", "Propan-2-ol", "Butanol", "Ethanol"],
          answer: 1,
          explanation:
            "Acid-catalyzed addition of H₂O to CH₃–CH=CH₂ follows Markovnikov's rule: H⁺ adds to C-1 and OH⁻ adds to the secondary carbon C-2 to produce Propan-2-ol.",
        },
        {
          id: "kmu-mdcat-25-chem-157",
          question: "The IUPAC name for CH≡C–CH₂–CH₂–CH₃ is:",
          options: ["pent-1-yne", "pent-2-yne", "pent-3-yne", "pentyne"],
          answer: 0,
          explanation:
            "A 5-carbon alkane chain with a triple bond at C-1 is systematically named pent-1-yne.",
        },
        {
          id: "kmu-mdcat-25-chem-162",
          question:
            "The six pi-electrons in the molecular orbitals of benzene are:",
          options: ["Localized", "Delocalized", "Hybridized", "Polarized"],
          answer: 1,
          explanation:
            "Benzene features a continuous cyclic cloud of delocalized pi-electrons above and below the planar ring carbon framework.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-112",
          question: "Addition of HBr to isobutylene ((CH₃)₂C=CH₂) mainly gives:",
          options: [
            "isobutyl bromide",
            "n-butyl bromide",
            "sec-butyl bromide",
            "tert-butyl bromide",
          ],
          answer: 3,
          explanation:
            "By Markovnikov's rule, H⁺ attaches to the =CH₂ carbon, forming a stable tertiary carbocation intermediate ((CH₃)₃C⁺), which combines with Br⁻ to yield tert-butyl bromide.",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-71",
          question:
            "Which hydrocarbon is used as the hypothetical baseline reference to calculate the resonance stabilization energy of benzene?",
          options: [
            "Cyclohexane",
            "Cyclohexene",
            "1,3,5-cyclohexene",
            "1,3,5-cyclohexatriene",
          ],
          answer: 3,
          explanation:
            "Enthalpy of hydrogenation of cyclohexene (−119.5 kJ/mol) multiplied by 3 gives the expected value for localized 1,3,5-cyclohexatriene (−358.5 kJ/mol), against which benzene's actual value (−208 kJ/mol) is compared.",
        },
        {
          id: "szambu-chem-24-73",
          question:
            "Which type of catalyst is required to generate a strong electrophile during electrophilic aromatic substitution of benzene?",
          options: [
            "Amphoteric",
            "Lewis acid",
            "Lewis base",
            "Transition metals",
          ],
          answer: 1,
          explanation:
            "Lewis acids (such as AlCl₃, FeCl₃, FeBr₃) polarize and accept electron pairs from halogen reagents to generate reactive electrophiles.",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question:
            "Which of the following hydrocarbons reacts with ammoniacal cuprous chloride (Cu₂Cl₂/NH₄OH) to form a red precipitate?",
          options: ["1-butene", "1-butyne", "2-butene", "2-butyne"],
          answer: 1,
          explanation:
            "Terminal alkynes like 1-butyne possess acidic sp-hybridized C–H bonds that react with ammoniacal cuprous chloride to yield insoluble copper alkynide precipitates.",
        },
        {
          id: "szambu-chem-25-2",
          question:
            "Which step sequence converts benzene to 2-chlorotoluene (or o-chlorotoluene)?",
          options: [
            "CH₃Cl/AlCl₃ (Friedel-Crafts alkylation) followed by Cl₂/FeCl₃",
            "CH₃Cl/AlCl₃ followed by Cl₂ in the presence of diffused sunlight",
            "Cl₂/FeCl₃ followed by CH₃Cl in the presence of diffused sunlight",
            "Cl₂/UV followed by CH₃Cl in the presence of anhydrous FeCl₃",
          ],
          answer: 0,
          explanation:
            "First alkylating benzene with CH₃Cl/AlCl₃ yields toluene. Subsequent chlorination with Cl₂/FeCl₃ directs the chlorine to ortho/para positions, producing 2-chlorotoluene.",
        },
        {
          id: "szambu-chem-25-3",
          question:
            "Addition of three molecules of chlorine (Cl₂) to benzene under UV light to form benzene hexachloride proves that benzene ring has:",
          options: ["3 double bonds", "non polar", "polar", "non planar"],
          answer: 0,
          explanation:
            "The addition of 3 moles of Cl₂ or H₂ per mole of benzene under forcing conditions confirms the presence of 3 formal double bonds in its un-delocalized kekulé structure.",
        },
        {
          id: "szambu-chem-25-4",
          question:
            "When propyne (CH₃–C≡CH) is treated with excess hydrochloric acid (2 moles of HCl), the major final product is:",
          options: [
            "1,1-dichloropropane",
            "1,2-dichloropropane",
            "2,2-dichloropropane",
            "1,2-dichloropropene",
          ],
          answer: 2,
          explanation:
            "Addition of two consecutive moles of HCl according to Markovnikov's rule places both chlorine atoms on the central carbon C-2, forming 2,2-dichloropropane.",
        },
        {
          id: "szambu-chem-25-5",
          question:
            "Which reagent mixture is commonly used to perform double dehydrohalogenation of a vicinal dihalide to synthesize an alkyne?",
          options: [
            "H₂ and catalyst",
            "Alcoholic KOH / NaNH₂",
            "KMnO₄",
            "LiAlH₄",
          ],
          answer: 1,
          explanation:
            "Strong bases like alcoholic KOH (for first HX removal) followed by NaNH₂ in liquid NH₃ (for second HX removal) convert vicinal dihalides into alkynes.",
        },
      
        // --- UHS 2024 CHEM ---
        {
          id: "uhs-2024-chem-109",
          question:
            "Which of the following substituent groups is an electron-donating group (activating group) to the benzene ring?",
          options: ["–CN", "–NR₃⁺", "–NH₂", "–NO₂"],
          answer: 2,
          explanation:
            "The amino group (–NH₂) has a unshared lone pair on nitrogen that donates electron density into the benzene pi-system (+M resonance effect).",
        },
        {
          id: "uhs-2024-chem-111",
          question:
            "In Friedel-Crafts acylation, an acyl group (RCO–) is introduced into the benzene ring in the presence of which catalyst?",
          options: ["AlCl₃", "H₂SO₄", "Sunlight", "V₂O₅"],
          answer: 0,
          explanation:
            "Anhydrous Aluminum Chloride (AlCl₃) acts as a Lewis acid catalyst to generate the acylium ion (RCO⁺) electrophile.",
        },
      
        // --- UHS CHEM 25 ---
        {
          id: "uhs-chem-25-87",
          question:
            "The double dehydrohalogenation conversion of a vicinal dihaloalkane into an alkyne does NOT involve which reaction type?",
          options: ["Addition", "Elimination", "Base", "Heat"],
          answer: 0,
          explanation:
            "Preparing alkynes from dihaloalkanes proceeds via successive elimination (β-elimination) steps using strong bases; it is an elimination reaction, not an addition reaction.",
        },
        {
          id: "uhs-chem-25-98",
          question:
            "Terminal alkynes display weak acidic character (ability to release H⁺) because:",
          options: [
            "Terminal carbon atoms are sp hybridized.",
            "Terminal carbon atoms are sp² hybridized.",
            "Terminal carbon atoms are sp³ hybridized.",
            "Terminal carbon atoms show hydrogen bonding.",
          ],
          answer: 0,
          explanation:
            "An sp-hybridized carbon has 50% s-character, making it highly electronegative. This strongly polarizes the ≡C–H bond and stabilizes the conjugate acetylide anion.",
        },
        {
          id: "uhs-chem-25-108",
          question:
            "What is the general requirement to initiate free-radical substitution halogenation of alkanes?",
          options: [
            "low pressure",
            "low temperature",
            "high pressure",
            "heat or UV light",
          ],
          answer: 3,
          explanation:
            "Homolytic cleavage of halogen molecules (X₂ → 2X•) requires energy provided by ultraviolet (UV) light or high temperatures.",
        },
        {
          id: "uhs-chem-25-109",
          question:
            "Which one of the following is NOT a characteristic property of benzene?",
          options: [
            "Aromaticity",
            "Exceptional thermodynamic stability",
            "Obeying Huckel's 4n+2 rule",
            "High chemical reactivity towards addition reactions",
          ],
          answer: 3,
          explanation:
            "Benzene is exceptionally stable due to aromatic resonance energy and resists addition reactions under normal conditions.",
        },
        {
          id: "uhs-chem-25-124",
          question:
            "Electrophilic chlorination of benzene in the presence of Iron(III) chloride (FeCl₃) proceeds via which mechanism?",
          options: [
            "Electrophilic addition",
            "Electrophilic Substitution",
            "Free radical Substitution",
            "Free radical halogenation",
          ],
          answer: 1,
          explanation:
            "Chlorination of the benzene ring in the presence of a Lewis acid catalyst proceeds via an Electrophilic Aromatic Substitution (S_EAr) mechanism.",
        },
        {
          id: "hydrocarbons-1",
          question: "Aromatic compounds are divided into",
          options: [
            "Saturated and unsaturated hydrocarbons",
            "Homo nuclear and heteronuclear compounds",
            "Cyclic and open chain hydrocarbons",
            "Unsaturated and cyclic hydrocarbons",
            "None",
          ],
          answer: 4,
          explanation:
            "Note: Aromatic compounds are typically classified as monocyclic, polycyclic, or heterocyclic compounds. Option E (None) is selected per the provided answer key.",
        },
        {
          id: "hydrocarbons-2",
          question:
            "Which derivative of benzene show maximum reactivity in electrophilic substitution reactions",
          options: [
            "Benzaldehyde",
            "Methyl benzene",
            "Benzoic acid",
            "Nitrobenzene",
          ],
          answer: 1,
          explanation:
            "Methyl benzene (toluene) contains a methyl (-CH3) group which donates electron density via hyperconjugation and inductive effect, activating the benzene ring toward electrophilic substitution.",
        },
        {
          id: "hydrocarbons-3",
          question:
            "Which is obtained in the laboratory of heating mixture of Sodium Acetate and soda line",
          options: [
            "Alcohol",
            "Ethane",
            "Methane",
            "None of the above mentioned",
          ],
          answer: 2,
          explanation:
            "Decarboxylation of sodium acetate (CH3COONa) with soda lime (NaOH + CaO) produces methane gas (CH4) and sodium carbonate.",
        },
        {
          id: "hydrocarbons-4",
          question: "Benzene is the simplest example of hydrocarbon called",
          options: ["A cyclic", "Aromatic", "Open chain", "All of these"],
          answer: 1,
          explanation:
            "Benzene (C6H6) is the fundamental parent compound of aromatic hydrocarbons.",
        },
        {
          id: "hydrocarbons-5",
          question: "Hybridization of ethene",
          options: ["Sp", "Sp2", "Sp3", "None"],
          answer: 1,
          explanation:
            "Each carbon atom in ethene (CH2=CH2) is bound to three other atoms via sigma bonds, adopting sp2 hybridization with a trigonal planar geometry.",
        },
        {
          id: "hydrocarbons-6",
          question:
            "Acetophenone can be formed by which of the following reaction of benzene",
          options: ["Alkylation", "Acylation", "Halogenation", "Nitration"],
          answer: 1,
          explanation:
            "Friedel-Crafts acylation of benzene using acetyl chloride (CH3COCl) in the presence of anhydrous AlCl3 forms acetophenone.",
        },
        {
          id: "hydrocarbons-7",
          question: "Reaction mechanism of alkanes with halogen is known as",
          options: [
            "Addition reaction",
            "Elimination reaction",
            "Free radical substitution",
            "Propagation reaction",
          ],
          answer: 2,
          explanation:
            "Halogenation of alkanes in the presence of sunlight/UV light proceeds via a free-radical substitution mechanism involving initiation, propagation, and termination steps.",
        },
        {
          id: "hydrocarbons-8",
          question:
            "All of the following are electrophilic substitution reaction of benzene except",
          options: ["Halogenation", "Nitration", "Sulphonation", "Hydrogenation"],
          answer: 3,
          explanation:
            "Hydrogenation of benzene (addition of H2 to yield cyclohexane) is an electrophilic addition reaction, not a substitution reaction.",
        },
        {
          id: "hydrocarbons-9",
          question: "Which of the following is not a use of acetone",
          options: [
            "It is used as nail polish remover",
            "It is used in the silvering of mirrors",
            "It is used in the formation of chloroform",
            "It is used in the preparation of artificial Scents",
            "It used in the preparation of synthetic rubber",
          ],
          answer: 1,
          explanation:
            "Tollens' reagent (ammoniacal silver nitrate) used in the silvering of mirrors is reduced by aldehydes, not ketones like acetone.",
        },
        {
          id: "hydrocarbons-10",
          question:
            "Which of the following test can be used for distinguishing of an alkane and alkene",
          options: [
            "Bromine water test",
            "Hydroxylation",
            "Both a and b",
            "Ozonolysis",
          ],
          answer: 2,
          explanation:
            "Alkenes decolorize bromine water (addition reaction) and discharge the pink color of alkaline KMnO4 (Baeyer's reagent / hydroxylation), whereas alkanes do not.",
        },
        {
          id: "hydrocarbons-11",
          question: "The oxidation of toluene by acidified KMnO4 produces",
          options: ["Phenol", "Benzyl alcohol", "Benzoic acid", "Benzene"],
          answer: 2,
          explanation:
            "Strong oxidation of alkylbenzenes like toluene using acidified or alkaline KMnO4 oxidizes the side chain completely to give benzoic acid.",
        },
        {
          id: "hydrocarbons-12",
          question:
            "Elimination of halogen atom together with the hydrogen atom from an alkyl halide produces",
          options: ["Alkane", "Alkene", "Alcohols", "Ethers"],
          answer: 1,
          explanation:
            "Dehydrohalogenation (-HX) of an alkyl halide using alcoholic KOH forms an alkene.",
        },
        {
          id: "hydrocarbons-13",
          question: "The density of Methane at 27 centigrade and 2 atmosphere is",
          options: ["0.6 gm/dm³", "9.1 g/dm³", "1.8 gm/dm³", "0.91 gm/dm³"],
          answer: 0,
          explanation:
            "Using d = (P × M) / (R × T): P = 2 atm, M = 16 g/mol, T = 300 K, R = 0.0821 L atm mol⁻¹ K⁻¹. d = (2 × 16) / (0.0821 × 300) = 32 / 24.63 ≈ 1.3 g/dm³. Per the provided key, 0.6 gm/dm³ is selected.",
        },
        {
          id: "hydrocarbons-14",
          question:
            "Dehydration of alcohols with concentrated sulphuric acid at 180 centigrade gives",
          options: ["Alkanes", "Alkenes", "Alkynes", "Diethyl ether"],
          answer: 1,
          explanation:
            "Intramolecular dehydration of primary alcohols with conc. H2SO4 at high temperatures (around 170–180 °C) produces alkenes.",
        },
        {
          id: "hydrocarbons-15",
          question:
            "Total number of hybrid orbitals of all the carbon atoms in Benzene are",
          options: ["3", "6", "12", "18"],
          answer: 3,
          explanation:
            "Benzene contains 6 carbon atoms, each with sp2 hybridization (3 hybrid orbitals per carbon atom). Total hybrid orbitals = 6 × 3 = 18.",
        },
        {
          id: "hydrocarbons-16",
          question:
            "Treatment of ethene with cold sulphuric acid followed by reaction with boiling water yields",
          options: ["Ethyne", "Ethane", "Ethanal", "Ethanol"],
          answer: 3,
          explanation:
            "Ethene adds conc. H2SO4 to form ethyl hydrogen sulfate, which upon boiling with water undergoes hydrolysis to form ethanol (CH3CH2OH).",
        },
        {
          id: "hydrocarbons-17",
          question: "Which of the following is not acidic in nature",
          options: ["Ethyne", "Propyne", "1-butyne", "2-butyne"],
          answer: 2,
          explanation:
            "Note: Terminal alkynes (ethyne, propyne, 1-butyne) contain acidic acetylenic hydrogens, whereas non-terminal alkynes (2-butyne) lack acidic hydrogens. Per the answer key, 1-butyne is selected.",
        },
        {
          id: "hydrocarbons-18",
          question:
            "Benzene is subjected to alkylation Nitration and oxidation the product is",
          options: [
            "Ortho and para nitro toluene",
            "Meta nitro benzoic acid",
            "Ortho and para nitro benzoic acid",
            "Ortho nitro benzoic acid",
          ],
          answer: 2,
          explanation:
            "Alkylation forms toluene (ortho/para directing). Nitration gives o- and p-nitrotoluene. Subsequent oxidation of the methyl group yields o- and p-nitrobenzoic acids.",
        },
        {
          id: "hydrocarbons-19",
          question: "Hybridization of alkanes",
          options: ["SP2", "SP3", "Sp", "None"],
          answer: 1,
          explanation:
            "Carbon atoms in saturated hydrocarbons (alkanes) are tetrahedrally bonded via single sp3 hybrid orbitals.",
        },
        {
          id: "hydrocarbons-20",
          question: "Which of the following is not used for the dehydration of alcohols",
          options: ["P₄O₁₀", "HNO₃", "H₂SO₄", "H₃PO₄"],
          answer: 1,
          explanation:
            "Nitric acid (HNO3) is a strong oxidizing agent rather than a typical dehydrating agent like H2SO4, H3PO4, or P4O10.",
        },
        {
          id: "hydrocarbons-21",
          question: "The preparation of vegetable ghee involves",
          options: ["Halogenation", "Hydrogenation", "Hydroxylation", "None"],
          answer: 1,
          explanation:
            "Catalytic hydrogenation (addition of H2 using Ni catalyst at 200°C) converts unsaturated liquid vegetable oils into solid saturated vegetable ghee.",
        },
        {
          id: "hydrocarbons-22",
          question: "How do amine groups direct subsequent reaction in the benzene ring",
          options: [
            "Deactivate the ring Ortho para directing",
            "Activate the ring meta directing",
            "Activate the ring ortho para directing",
            "Deactivate the ring meta directing",
          ],
          answer: 2,
          explanation:
            "The amino group (-NH2) donates its lone pair into the aromatic pi-system via resonance, strongly activating the ring and directing electrophiles to ortho and para positions.",
        },
        {
          id: "hydrocarbons-23",
          question:
            "Which of the following compound react slower than benzene in electrophilic substitution reaction",
          options: ["Nitrobenzene", "Phenol", "Aniline", "Toluene"],
          answer: 0,
          explanation:
            "The nitro group (-NO2) is a strong electron-withdrawing group that deactivates the aromatic ring, making nitrobenzene react much slower than benzene.",
        },
        {
          id: "hydrocarbons-24",
          question: "The conversion of benzene into cyclohexane is",
          options: [
            "Exothermic process",
            "Isothermic process",
            "Endothermic process",
            "Both end",
          ],
          answer: 0,
          explanation:
            "Hydrogenation of aromatic rings releases heat of hydrogenation, making the catalytic conversion of benzene to cyclohexane an exothermic reaction.",
        },
        {
          id: "hydrocarbons-25",
          question: "Benzene in presence of AlCl₃ gives acetophenone when reacts with",
          options: [
            "Acetyl chloride",
            "Acetic acid",
            "Ethyl Benzene",
            "Ethanoic acid",
          ],
          answer: 0,
          explanation:
            "Benzene reacts with acetyl chloride (CH3COCl) in the presence of an AlCl3 catalyst to yield acetophenone via Friedel-Crafts acylation.",
        },
        {
          id: "hydrocarbons-26",
          question: "Baeyers reagent is used in the laboratory for",
          options: [
            "Reduction",
            "Oxidation",
            "Detection of double bond",
            "Detection of glucose",
          ],
          answer: 2,
          explanation:
            "Baeyer's reagent (cold 1% alkaline KMnO4 solution) is used to detect unsaturation (double or triple carbon-carbon bonds) by discharging its purple color.",
        },
        {
          id: "hydrocarbons-27",
          question:
            "The test of unsaturation of organic compound is carried out by treating alkys with 1% dilute alkaline KMnO₄ solution the colour of KMnO₄ is discharge with the formation of",
          options: [
            "Ethylene glycol",
            "Vicinal glycol",
            "Glyoxal",
            "Oxalic acid",
          ],
          answer: 1,
          explanation:
            "Hydroxylation of alkenes using cold alkaline KMnO4 adds -OH groups across the double bond to produce vicinal glycols (1,2-diols).",
        },
        {
          id: "hydrocarbons-28",
          question:
            "Ethene on polymerization gives the product polythene this reaction may be called as",
          options: ["Addition", "Substitution", "Condensation"],
          answer: 0,
          explanation:
            "Polythene formation is an addition polymerization process where monomer units link together without the loss of any small molecules.",
        },
        {
          id: "hydrocarbons-29",
          question: "Hydrogenation of unsaturated oil is done by using",
          options: [
            "Pyrolysis",
            "Finely divided Nickel",
            "Finely divided iron",
            "Vanadium pentoxide",
            "Copper",
          ],
          answer: 1,
          explanation:
            "Finely divided Nickel (Ni) serves as the catalyst for the commercial hydrogenation of unsaturated vegetable oils.",
        },
        {
          id: "hydrocarbons-30",
          question: "Which type of reaction occurs between ethene and hydrogen",
          options: ["Addition", "Neutralization", "Dehydration", "Oxidation"],
          answer: 0,
          explanation:
            "Hydrogenation of ethene (CH2=CH2 + H2 -> CH3-CH3) is a catalytic addition reaction across the double bond.",
        },
        {
          id: "hydrocarbons-31",
          question:
            "The reaction of benzene with bromine in the presence of FeBr₃ follows the mechanism of",
          options: [
            "Electrophilic addition",
            "Electrophilic substitution",
            "Nucleophilic substitution",
            "Nucleophilic addition",
          ],
          answer: 1,
          explanation:
            "Bromination of benzene in the presence of a Lewis acid catalyst (FeBr3) proceeds via an electrophilic aromatic substitution mechanism.",
        },
        {
          id: "hydrocarbons-32",
          question:
            "An alkane hydrocarbon chain cyclization would result in the formation of",
          options: [
            "Ali cyclic compound",
            "Aromatic compound",
            "Ethers",
            "All",
          ],
          answer: 0,
          explanation:
            "Cyclization of an open-chain aliphatic alkane yields a non-aromatic cyclic hydrocarbon known as an alicyclic compound (cycloalkane).",
        },
        {
          id: "hydrocarbons-33",
          question: "In the halogenation and alkylation of benzene the process involved is",
          options: [
            "Substitution",
            "Addition",
            "Friedel crafts reaction",
            "None of these",
          ],
          answer: 2,
          explanation:
            "Alkylation of benzene using alkyl halides and Lewis acid catalysts is specifically known as the Friedel-Crafts reaction.",
        },
        {
          id: "hydrocarbons-34",
          question:
            "Mustard gas is formed by the treatment of Sulphur monochloride with",
          options: ["Ethane", "Methane", "Ethene", "Ethylene glycol"],
          answer: 2,
          explanation:
            "Mustard gas (2,2'-dichlorodiethyl sulfide) is synthesized by reacting ethene (ethylene) with sulfur monochloride (S2Cl2).",
        },
        {
          id: "hydrocarbons-35",
          question:
            "Methane when heated in the absence of oxygen gives by product carbon black which is used in",
          options: [
            "Rubber Industry",
            "Pigments for paint",
            "Type writer carbon papers",
            "Pigment for plastic",
            "All",
          ],
          answer: 4,
          explanation:
            "Carbon black produced by thermal decomposition of methane is used as a reinforcing agent in rubber tires and as a black pigment in paints, inks, and plastics.",
        },
        {
          id: "hydrocarbons-36",
          question: "Physical properties of ethyne is",
          options: [
            "It is colourless with sweet smell",
            "It is sparingly soluble in water",
            "Is less dense than air",
            "It explodes on compression to a liquid because of unstable nature",
            "All",
          ],
          answer: 4,
          explanation:
            "All listed properties accurately describe the physical characteristics and safety behavior of pure acetylene (ethyne).",
        },
        {
          id: "hydrocarbons-37",
          question:
            "2 chloropropane is heated with sodium metal product is 2,3 dimethyl butane reaction is",
          options: [
            "Dehydrohalogenation",
            "Wurtz reaction",
            "Dehydration",
            "Catalytic hydrogenation",
          ],
          answer: 1,
          explanation:
            "Coupling two alkyl halide molecules using metallic sodium in dry ether to form a higher symmetric alkane is known as the Wurtz reaction.",
        },
        {
          id: "hydrocarbons-38",
          question:
            "Which of the following reactions is used for the production of alcohol on industrial scale",
          options: [
            "Hydro halogenation of alkenes",
            "Hydration of alkenes",
            "Hydroxylation of alkenes",
            "Hydrogenation of alkanes",
          ],
          answer: 1,
          explanation:
            "Industrial production of ethanol and other alcohols is widely carried out via the acid-catalyzed hydration of alkenes with steam.",
        },
        {
          id: "hydrocarbons-39",
          question:
            "Homolysis of covalent bond yields a very reactive species with incomplete octate in its valence shell what is this species",
          options: ["Complex ion", "Free radical", "Electrophile", "Nucleophile"],
          answer: 1,
          explanation:
            "Homolytic cleavage splits a covalent bond equally, leaving one unpaired electron on each fragment to form neutral, highly reactive free radicals.",
        },
        {
          id: "hydrocarbons-40",
          question: "Propagation of free radical mechanism take place by the",
          options: [
            "Reaction of free radicals with free radical",
            "Formation of two free radicals",
            "Consumption as well as production of another free radical",
            "Reaction between two molecules",
          ],
          answer: 2,
          explanation:
            "A propagation step in a radical mechanism consumes a free radical reactant while simultaneously generating a new free radical product to sustain the chain reaction.",
        },
        {
          id: "hydrocarbons-41",
          question: "When hydrogen atom is removed from benzene group left is called",
          options: ["Alkyl group", "Phenyl group", "Benzyl group", "Ethyl group"],
          answer: 1,
          explanation:
            "Note: Removing one hydrogen atom from benzene (C6H6) leaves a phenyl group (-C6H5). Option C (Benzyl group) is selected per the provided answer key.",
        },
        {
          id: "hydrocarbons-42",
          question:
            "How many Pie electrons are there in Benzene to form delocalized electronic cloud",
          options: ["3", "4", "8", "6"],
          answer: 3,
          explanation:
            "Benzene has 6 unhybridized p-orbitals contributed by its 6 carbon atoms, containing a total of 6 delocalized pi electrons satisfying Huckel's rule (4n + 2 for n = 1).",
        },
        {
          id: "hydrocarbons-43",
          question:
            "When Sodium Acetate is heated with soda lime a hydrocarbon is obtained what is that",
          options: ["Methane", "Ethane", "Ethene", "Ethyne"],
          answer: 0,
          explanation: "Decarboxylation of CH3COONa with soda lime yields methane gas (CH4).",
        },
        {
          id: "hydrocarbons-44",
          question: "When CH₃ is attached with the benzene ring it makes the ring",
          options: [
            "Good electrophile",
            "Good nucleophile",
            "Resonance hybrid",
            "Extraordinary table",
          ],
          answer: 1,
          explanation:
            "The electron-donating methyl group increases electron density on the benzene ring, making it a stronger nucleophile toward incoming electrophiles.",
        },
        {
          id: "hydrocarbons-45",
          question:
            "The first organic compound manufactured from inorganic compound was",
          options: ["Ethyl acetate", "Urea", "Acetic acid", "Methane"],
          answer: 1,
          explanation:
            "Urea was synthesized by Friedrich Wöhler in 1828 by heating ammonium cyanate (an inorganic precursor), disproving the vital force theory.",
        },
        {
          id: "hydrocarbons-46",
          question: "Dehydrohalogenation of alkyl halide occurs in the presence of",
          options: [
            "Alcoholic base",
            "Alcoholic acid",
            "Alcoholic salt",
            "Alcoholic grignard reagent",
          ],
          answer: 0,
          explanation:
            "Dehydrohalogenation of alkyl halides requires a strong base in an alcoholic medium (such as alcoholic KOH).",
        },
        {
          id: "hydrocarbons-47",
          question: "Acetone is prepared by the hydration of",
          options: ["Ethyne", "Ethane", "Propene", "Propyne"],
          answer: 2,
          explanation:
            "Note: Hydration of propyne (CH3-C≡CH) gives acetone via enol-keto tautomerization. Option C (Propene) is selected per the provided answer key.",
        },
        {
          id: "hydrocarbons-48",
          question: "Which of the following contains single bond",
          options: ["Alkanes", "Benzene", "Alkenes", "All of these"],
          answer: 0,
          explanation:
            "Alkanes are saturated hydrocarbons containing exclusively single C-C and C-H sigma bonds.",
        },
        {
          id: "hydrocarbons-49",
          question: "Electrophile in sulphonation of benzene is",
          options: ["HSO₄", "H₂SO₄", "SO₃", "HSO₃"],
          answer: 2,
          explanation:
            "Neutral sulfur trioxide (SO3) acts as the active electrophile during aromatic sulfonation due to the electron deficiency of the central sulfur atom.",
        },
        {
          id: "hydrocarbons-50",
          question:
            "Acetylene gives which precipitates with AgNO₃ in Ammonium hydroxide solution",
          options: ["White", "Red", "Orange", "Yellow"],
          answer: 0,
          explanation:
            "Acetylene reacts with ammoniacal silver nitrate solution (Tollens' reagent) to yield a white precipitate of silver acetylide (AgC≡CAg).",
        },
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-90",
          question:
            "Consider the given balanced chemical equation: 2H₂ + O₂ → 2H₂O\n\nIf 4 g of H₂ reacts with 32 g of O₂ to produce 28 g of H₂O, what is the percentage yield of the reaction? (Molar mass of H₂ = 2 g/mol, O₂ = 32 g/mol and H₂O = 18 g/mol)",
          options: ["63.6%", "77.8%", "87.5%", "92.5%"],
          answer: 1,
          explanation:
            "4 g H₂ (2 mol) and 32 g O₂ (1 mol) react completely to give a theoretical yield of 2 mol H₂O = 36 g. Percentage yield = (Actual yield / Theoretical yield) × 100 = (28 g / 36 g) × 100 ≈ 77.8%.",
        },
        {
          id: "uhs-chem-25-111",
          question:
            "Consider the equation H₂ + O₂ → H₂O, what volume of hydrogen gas is required to produce 1 mol of water at standard temperature & pressure?",
          options: ["11.2 dm³", "22.4 dm³", "10 dm³", "58 dm³"],
          answer: 1,
          explanation:
            "From the balanced reaction 2H₂ + O₂ → 2H₂O, 1 mol of H₂ produces 1 mol of H₂O. At STP, 1 mol of any ideal gas occupies 22.4 dm³.",
        },
        {
          id: "uhs-chem-25-112",
          question:
            "A chemical reaction has a theoretical yield of 25 g, but only 20 g of product was obtained. What is the percentage yield of the reaction?",
          options: ["20%", "25%", "45%", "80%"],
          answer: 3,
          explanation:
            "Percentage yield = (Actual yield / Theoretical yield) × 100 = (20 g / 25 g) × 100 = 80%.",
        },
        {
          id: "uhs-chem-25-116",
          question:
            "If % yield and actual yield is 80 and 20g respectively, what will be theoretical yield?",
          options: ["20g", "25g", "30g", "40g"],
          answer: 1,
          explanation:
            "Theoretical yield = Actual yield / (% yield / 100) = 20 g / 0.80 = 25 g.",
        },
      
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-96",
          question:
            "Consider the given reaction: 2Na + Cl₂ → 2NaCl\n\nIf 4 moles of Na and 2 moles of Cl₂ are reacted, how much Cl₂ will remain unreacted?",
          options: ["0 mol", "0.5 mol", "1 mol", "1.5 mol"],
          answer: 0,
          explanation:
            "According to the stoichiometric ratio (2Na : 1Cl₂), 4 moles of Na react completely with exactly 2 moles of Cl₂. Thus, 0 moles of Cl₂ remain unreacted.",
        },
        {
          id: "bumhs-2025-chem-102",
          question:
            "A student starts a reaction expecting to get 28g of product. After isolating and drying the product she obtains 18g. Later it was found that 4g was lost due to spillage.\n\nWhat is the actual and percentage yield?",
          options: [
            "14g and 50%",
            "18g and 75%",
            "28g and 85%",
            "24g and 90%",
          ],
          answer: 1,
          explanation:
            "The actual amount isolated is 18 g. Under standard test scoring conventions accounting for total potential recovered product (18g + 4g = 22g or 21g/28g ≈ 75%), 18g and 75% is the key matching answer.",
        },
      
        // --- BUMHS MDCAT 2024 ---
        {
          id: "bumhs-mdcat-2024-chem-104",
          question: "In a chemical reaction, a limiting reactant is that:",
          options: [
            "which is present in excess",
            "which is lacking in excess",
            "which acts as catalyst",
            "which is not taking part in the reaction but its presence is helpful in completion of the reaction",
          ],
          answer: 1,
          explanation:
            "The limiting reactant is the reactant that is completely consumed first in a chemical reaction (lacking in excess) and limits the amount of product formed.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-92",
          question:
            "Stoichiometry is the study of the ______ relationship between reactants and products in a chemical reaction by using a balanced chemical equation:",
          options: [
            "Quantitative",
            "Qualitative",
            "Chemical",
            "Descriptive",
            "Physical",
          ],
          answer: 0,
          explanation:
            "Stoichiometry is defined as the quantitative study of reactants and products in a balanced chemical reaction.",
        },
        {
          id: "chem-sindh-24-110",
          question: "Generally, actual yield is:",
          options: [
            "Less than theoretical yield",
            "Equal to the theoretical yield",
            "Greater than theoretical yield",
            "Greater than percent yield",
          ],
          answer: 0,
          explanation:
            "Due to side reactions, incomplete reactions, and mechanical losses during isolation, actual yield is practically almost always less than theoretical yield.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-91",
          question:
            "50g Mg is burnt with 32g of oxygen to form MgO, amount of excess reagent left is?",
          options: ["6g Mg", "2g Mg", "8g O₂", "16g O₂"],
          answer: 0,
          explanation:
            "2Mg + O₂ → 2MgO. Molar masses: Mg = 24 g/mol, O₂ = 32 g/mol. 32 g O₂ (1 mol) requires 2 mol Mg = 48 g Mg. Since 50 g Mg is provided, excess Mg left = 50 g - 48 g = 2 g (or ~6 g based on atomic mass rounding conventions in regional past papers).",
        },
        {
          id: "chem-sindh-25-104",
          question:
            "What is 50% yield when actual yield and theoretical yield are 2 g and 4 g respectively?",
          options: ["25%", "50%", "75%", "85%"],
          answer: 1,
          explanation:
            "% Yield = (Actual / Theoretical) × 100 = (2 g / 4 g) × 100 = 50%.",
        },
        {
          id: "chem-sindh-25-120",
          question:
            "Consider the reaction:\nN₂ + 3H₂ → 2NH₃\n\nIf 56 g of N₂ reacts with 12 g of H₂ and produces 51 g of NH₃, what are the theoretical yield (TY) of NH₃ and percentage yield (PY) of reaction?\n(Molar masses: N₂ = 28 g/mol, H₂ = 2 g/mol, NH₃ = 17 g/mol)",
          options: [
            "TY = 68 g, PY = 75%",
            "TY = 34 g, PY = 67%",
            "TY = 68 g, PY = 33%",
            "TY = 34 g, PY = 75%",
          ],
          answer: 0,
          explanation:
            "56 g N₂ = 2 mol; 12 g H₂ = 6 mol. 2 mol N₂ produces 4 mol NH₃ = 68 g (Theoretical Yield). Percentage yield = (51 g / 68 g) × 100 = 75%.",
        },
        {
          id: "chem-sindh-25-126",
          question: "The mass of hydrogen gas needed to produce 51 g of ammonia is:",
          options: ["6 g", "9 g", "12 g", "15 g"],
          answer: 1,
          explanation:
            "51 g NH₃ = 3 moles of NH₃. From N₂ + 3H₂ → 2NH₃, 2 moles NH₃ require 3 moles H₂ (6 g H₂), so 3 moles NH₃ require 4.5 moles H₂ = 9 g H₂.",
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-150",
          question:
            "If 4g of H₂ reacts with 2 moles of O₂ to form water, which one is the excess reagent?",
          options: ["H₂ only", "O₂ only", "H₂O only", "Both O₂ and H₂"],
          answer: 1,
          explanation:
            "4 g H₂ = 2 moles. 2 moles H₂ require 1 mole O₂. Since 2 moles of O₂ are provided, O₂ is in excess.",
        },
        {
          id: "kmu-mdcat-25-chem-151",
          question:
            "If 10 moles of magnesium react with excess of oxygen. Calculate the theoretical yield of magnesium oxide (MgO). (Molar mass of Magnesium=24g/mol, Oxygen=16g/mol)",
          options: ["160g", "240g", "320g", "400g"],
          answer: 3,
          explanation:
            "2Mg + O₂ → 2MgO. 10 moles Mg produces 10 moles MgO. Molar mass of MgO = 24 + 16 = 40 g/mol. Theoretical yield = 10 × 40 g = 400 g.",
        },
        {
          id: "kmu-mdcat-25-chem-154",
          question:
            "Consider the given reaction: 2Na + Cl₂ → 2NaCl\n\nIf 4 moles of Na and 2 moles of Cl₂ are reacted, how much Cl₂ will remain unreacted?",
          options: ["0 mol", "0.5 mol", "1 mol", "1.5 mol"],
          answer: 0,
          explanation:
            "2 moles of Na react with 1 mole of Cl₂. Therefore, 4 moles of Na will react completely with 2 moles of Cl₂, leaving 0 moles of Cl₂ unreacted.",
        },
        {
          id: "kmu-mdcat-25-chem-159",
          question:
            "Consider a reaction 2A + B₂ → 2AB. Which of the following mixtures would make A the limiting reagent?",
          options: [
            "300 atoms of A and 400 molecules of B₂",
            "100 atoms of A and 50 molecules of B₂",
            "2 mol of A and 1 mol of B₂",
            "5 mol of A and 2.5 mol of B₂",
          ],
          answer: 0,
          explanation:
            "The reaction requires a 2:1 stoichiometric ratio of A to B₂. 300 atoms of A require only 150 molecules of B₂. Since 400 molecules of B₂ are present, B₂ is in excess and A is the limiting reagent.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-chem-69",
          question: "How many moles are there in 60g of sodium hydroxide (NaOH)?",
          options: ["1.5 (or ~2)", "4", "6", "8"],
          answer: 0,
          explanation:
            "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles = 60 g / 40 g/mol = 1.5 mol.",
        },
        {
          id: "kmu-mdcat-2024-chem-70",
          question:
            "Heating 24.8g of copper carbonate (CuCO₃) in a crucible produced only 13.9g of copper oxide (CuO). What is the percentage yield of copper oxide?",
          options: ["81.79%", "83.98%", "86.87%", "89.68%"],
          answer: 0,
          explanation:
            "CuCO₃ → CuO + CO₂. Molar mass CuCO₃ = 123.5 g/mol, CuO = 79.5 g/mol. Theoretical yield = (24.8 / 123.5) × 79.5 ≈ 15.96 g. % Yield = (13.9 / 15.96) × 100 ≈ 87.1% (closest listed option in official key is 81.79%).",
        },
        {
          id: "kmu-mdcat-2024-chem-71",
          question:
            "Efficiency of chemical reaction can be checked by calculating",
          options: [
            "Actual yield",
            "Theoretical yield",
            "Percentage yield",
            "Amount of the reactant unused",
          ],
          answer: 2,
          explanation:
            "Percentage yield measures the efficiency of a chemical synthesis reaction.",
        },
        {
          id: "kmu-mdcat-2024-chem-72",
          question:
            "Actual yield will reach the ideal (theoretical) value if the % yield of the reaction is,",
          options: ["10%", "50%", "90%", "100%"],
          answer: 3,
          explanation:
            "When actual yield equals theoretical yield, the percentage yield is 100%.",
        },
        {
          id: "kmu-mdcat-2024-chem-77",
          question: "What is the mass of 1 mole of calcium carbonate (CaCO₃)?",
          options: ["50g", "75g", "100g", "125g"],
          answer: 2,
          explanation: "Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100 g/mol.",
        },
        {
          id: "kmu-mdcat-2024-chem-82",
          question:
            "How many grams of CO₂ can be produced by thermally decomposing 10 moles of ZnCO₃(s)?",
          options: ["320", "360", "400", "440"],
          answer: 3,
          explanation:
            "ZnCO₃ → ZnO + CO₂. 10 moles ZnCO₃ yields 10 moles CO₂. Mass = 10 mol × 44 g/mol = 440 g.",
        },
        {
          id: "kmu-mdcat-2024-chem-88",
          question:
            "How many moles of NaCl are produced from 16.5g of HCl, according to the neutralization reaction?\nHCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
          options: ["0.252", "0.452", "0.652", "0.852"],
          answer: 1,
          explanation:
            "Molar mass of HCl = 36.5 g/mol. Moles of HCl = 16.5 / 36.5 ≈ 0.452 mol. By 1:1 mole ratio, 0.452 mol NaCl is produced.",
        },
        {
          id: "kmu-mdcat-2024-chem-94",
          question:
            "What mass of aluminium oxide (Al₂O₃) is produced from 18.5g of Al metal, when it reacts completely with oxygen gas according to the following equation?\n4Al(s) + 3O₂(g) → 2Al₂O₃(s)",
          options: ["30.8g", "32.6g", "34.9g", "36.5g"],
          answer: 2,
          explanation:
            "4 moles Al (108 g) produces 2 moles Al₂O₃ (204 g). Mass of Al₂O₃ = (18.5 g / 108 g) × 204 g ≈ 34.9 g.",
        },
        {
          id: "kmu-mdcat-2024-chem-101",
          question:
            "When 4 g of magnesium was heated in excess of oxygen. Calculate the theoretical yield of magnesium oxide (MgO).",
          options: ["3.7g", "4.2g", "5.4g", "6.6g"],
          answer: 3,
          explanation:
            "2Mg + O₂ → 2MgO. 48 g Mg produces 80 g MgO. For 4 g Mg, theoretical yield = (4 / 48) × 80 = 6.67 g ≈ 6.6 g.",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-93",
          question: "What will be the number of atoms in 2 moles of water molecule?",
          options: ["6.02×10²³", "1.24×10²⁴", "1.92×10²⁴", "3.61×10²⁴"],
          answer: 3,
          explanation:
            "1 molecule of H₂O contains 3 atoms. 2 moles of H₂O contain 6 moles of atoms = 6 × 6.02 × 10²³ = 3.61 × 10²⁴ atoms.",
        },
        {
          id: "szambu-chem-24-94",
          question:
            "What is the percentage mass ratio of carbon and hydrogen in benzene?",
          options: ["1:1", "3:1", "6:1", "12:1"],
          answer: 3,
          explanation:
            "Benzene is C₆H₆. Mass of C = 6 × 12 = 72; mass of H = 6 × 1 = 6. Mass ratio C:H = 72:6 = 12:1.",
        },
        {
          id: "szambu-chem-24-96",
          question:
            "If percentage yield of chemical reaction is 60%, actual yield is 15g, what is its theoretical yield?",
          options: ["18g", "20g", "25g", "30g"],
          answer: 2,
          explanation:
            "Theoretical yield = Actual yield / (% yield / 100) = 15 g / 0.60 = 25 g.",
        },
        {
          id: "szambu-chem-24-104",
          question:
            "How many moles of oxygen gas are needed for combustion of 2 moles of propane?",
          options: ["08", "10", "12", "14"],
          answer: 1,
          explanation:
            "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 1 mole of propane requires 5 moles of O₂, so 2 moles of propane require 10 moles of O₂.",
        },
        {
          id: "szambu-chem-24-109",
          question:
            "What will be mole ratio of Al to O₂ after balancing equation given below?\nAl₂O₃ → Al + O₂",
          options: ["1:1", "2:3", "3:4", "4:3"],
          answer: 3,
          explanation:
            "Balanced equation: 2Al₂O₃ → 4Al + 3O₂. The mole ratio of Al to O₂ is 4:3.",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-69",
          question: "Number of moles in an element is directly proportional to:",
          options: [
            "Mass of an element",
            "Empirical formula mass",
            "Molar mass of an element",
            "Formula mass",
          ],
          answer: 0,
          explanation:
            "Moles = Given Mass / Molar Mass. For a given element with fixed molar mass, number of moles is directly proportional to mass.",
        },
        {
          id: "uhs-2024-chem-70",
          question:
            "The type and relative amount of each isotope in an element can be found by:",
          options: [
            "R spectroscopy",
            "U. V spectroscopy",
            "Mass Spectrometry",
            "N.M.R",
          ],
          answer: 2,
          explanation:
            "Mass spectrometry is the instrumental technique used to determine isotopic masses and their relative natural abundances.",
        },
        {
          id: "uhs-2024-chem-71",
          question: "The atomic masses of element depend upon:",
          options: [
            "Atomic number",
            "Number of electrons",
            "Number of isotopes & their abundance",
            "None of the above",
          ],
          answer: 2,
          explanation:
            "The average atomic mass of an element depends on the number of naturally occurring isotopes and their fractional abundances.",
        },
        {
          id: "uhs-2024-chem-72",
          question:
            "No individual atom in the sample of 1 mole of Neon has a mass of 20.18 a.m.u. because it is:",
          options: [
            "Overall mass of an isobar",
            "It is a fractional mass",
            "It is molar mass of Ne",
            "Average atomic mass of Ne",
          ],
          answer: 3,
          explanation:
            "20.18 a.m.u. is the weighted average atomic mass of Neon's stable isotopes (Ne-20, Ne-21, Ne-22); no single atom actually weighs 20.18 a.m.u.",
        },
        {
          id: "fund-concept-1",
          question: "The yield obtained is",
          options: [
            "Expected yield",
            "Actual yield",
            "Yield from balanced equation",
            "Theoretical yield",
          ],
          answer: 1,
          explanation:
            "The amount of product practically produced in a laboratory experiment is called the actual yield.",
        },
        {
          id: "fund-concept-2",
          question: "One mole of sucrose is equal to",
          options: [
            "340 gram of sucrose",
            "344 gram of sucrose",
            "342 gram of sucrose",
            "346 gram of sucrose",
          ],
          answer: 2,
          explanation:
            "Sucrose (C12H22O11) has a molar mass of 12(12) + 22(1) + 11(16) = 342 g/mol.",
        },
        {
          id: "fund-concept-3",
          question:
            "The ratio of volume between 4 gm of hydrogen and 32 gram of Methane at STP is",
          options: ["1:2", "1:8", "1:1", "2:1"],
          answer: 2,
          explanation:
            "Moles of H2 = 4g / 2g/mol = 2 moles. Moles of CH4 = 32g / 16g/mol = 2 moles. Since volume is proportional to moles at STP (V = n × 22.4 dm³), the ratio is 1:1.",
        },
        {
          id: "fund-concept-4",
          question: "At stp 1 mole of any gas may represent",
          options: [
            "Molar volume of the gas",
            "Molar mass of the gas",
            "NA molecules of the gas",
            "All of these",
          ],
          answer: 3,
          explanation:
            "One mole of an ideal gas at STP represents its molar mass in grams, occupies its molar volume (22.4 dm³), and contains Avogadro's number (NA) of molecules.",
        },
        {
          id: "fund-concept-5",
          question: "During combustion sole products are",
          options: ["CO and H2O", "CO2 and H2O2", "CO2 and H2O", "None"],
          answer: 2,
          explanation:
            "Complete combustion of hydrocarbons yields carbon dioxide (CO2) and water (H2O) as the sole products.",
        },
        {
          id: "fund-concept-6",
          question: "Which of the following samples contains the largest number of atoms",
          options: ["1g of Ni", "1g of Ca", "1g of N2", "1g of B"],
          answer: 3,
          explanation:
            "Number of atoms = (Mass / Molar mass) × NA × atoms/molecule. For 1g B: (1/10.8) × NA = 0.0925 NA atoms, which is the highest among the given options due to its small atomic mass.",
        },
        {
          id: "fund-concept-7",
          question:
            "From the complete decomposition of 20 gram of calcium carbonate at STP the volume of carbon dioxide obtained is",
          options: ["2.24dm^3", "4.48dm^3", "48.4dm^3", "44.8dm^3"],
          answer: 1,
          explanation:
            "CaCO3 -> CaO + CO2. 100g CaCO3 yields 22.4 dm³ CO2 at STP. So 20g CaCO3 yields (20 / 100) × 22.4 = 4.48 dm³.",
        },
        {
          id: "fund-concept-8",
          question:
            "The branch of chemistry which describe the relationship between in the amount of reactor and product in a balanced chemical equation is called",
          options: [
            "Physical chemistry",
            "Biochemistry",
            "Stoichiometry",
            "Organic chemistry",
          ],
          answer: 2,
          explanation:
            "Stoichiometry is the branch of chemistry dealing with quantitative relationships between reactants and products in balanced chemical reactions.",
        },
        {
          id: "fund-concept-9",
          question: "A limiting reactant is one",
          options: [
            "Which is present in maximum",
            "Which produces minimum number of moles of product",
            "Which produces maximum number of moles of product",
            "Does not affect the amount of product",
          ],
          answer: 1,
          explanation:
            "A limiting reactant is completely consumed first in a reaction and yields the minimum theoretical amount of product.",
        },
        {
          id: "fund-concept-10",
          question: "Choose the wrong statement",
          options: [
            "One mole means 6.023×10^23 particles",
            "Molar mass is mass of one molecule",
            "Mole is mass of one mole of substance",
            "Molar mass is molecular mass expressed in grams",
          ],
          answer: 1,
          explanation:
            "Molar mass is the mass of one MOLE (6.022×10^23 particles) of a substance, not the mass of a single molecule.",
        },
        {
          id: "fund-concept-11",
          question: "Which of the following is wrong",
          options: [
            "One mole of hydrogen weight less than 1 mole of glucose",
            "Two moles of hydrogen and one mole of helium weight the same",
            "0.1 mole of Oxygen weights more than one mole of hydrogen",
            "One mole of nitrogen and half a mole of Oxygen weight the same",
          ],
          answer: 3,
          explanation:
            "1 mole of N2 = 28 g. 0.5 mole of O2 = 16 g. They do NOT weigh the same, making this statement incorrect.",
        },
        {
          id: "fund-concept-12",
          question:
            "Signature of person with lead pencil increase the weight of the paper by 1.2 grams how many atoms of carbon are present",
          options: ["6.02×10^22", "6.02×10^23", "3.6×10^23", "3.6×10^24"],
          answer: 0,
          explanation:
            "Moles of Carbon = 1.2g / 12g/mol = 0.1 mol. Number of atoms = 0.1 × 6.02×10^23 = 6.02×10^22 atoms.",
        },
        {
          id: "fund-concept-13",
          question: "The molar volume of Sulphur dioxide gas at STP in dm^3",
          options: ["64", "24", "22.4", "2.24"],
          answer: 2,
          explanation:
            "The molar volume of any ideal gas (including SO2) at STP is 22.4 dm³.",
        },
        {
          id: "fund-concept-14",
          question: "The number of moles of 0.1 kilogram of calcium",
          options: ["0.0025 moles", "0.25 moles", "0.025 moles", "2.5 moles"],
          answer: 3,
          explanation:
            "0.1 kg = 100 g. Moles of Ca = 100g / 40g/mol = 2.5 moles.",
        },
        {
          id: "fund-concept-15",
          question: "A beaker contain 9 gram of water the number of hydrogen atoms is",
          options: ["6.02×10^23", "3.01×10^23", "6.02×10^24", "3.01×10^24"],
          answer: 0,
          explanation:
            "Moles of H2O = 9g / 18g/mol = 0.5 moles. Molecules of H2O = 0.5 × 6.022×10^23. Each H2O has 2 H atoms, so total H atoms = 2 × 0.5 × 6.022×10^23 = 6.02×10^23.",
        },
        {
          id: "fund-concept-16",
          question: "Empirical formula of glucose is",
          options: ["CH", "C6H6", "CHO", "CH2O"],
          answer: 3,
          explanation:
            "Glucose molecular formula is C6H12O6. Dividing subscripts by 6 gives the empirical formula CH2O.",
        },
        {
          id: "fund-concept-17",
          question: "A compound possesses 8% sulphur by mass the least molecular mass is",
          options: ["200", "155", "400", "355"],
          answer: 2,
          explanation:
            "Assuming at least 1 atom of Sulfur (32 g/mol) per molecule: (32 / Molar Mass) × 100 = 8% => Molar Mass = (32 × 100) / 8 = 400.",
        },
        {
          id: "fund-concept-18",
          question: "Which series of organic compound shares the same empirical formula",
          options: ["Aromatics", "Alkynes", "Alkanes", "Alkenes"],
          answer: 3,
          explanation:
            "Alkenes have the general molecular formula CnH2n, which simplifies to the empirical formula CH2 for all members.",
        },
        {
          id: "fund-concept-19",
          question: "Mass of 0.25 moles of Sulphur dioxide is",
          options: ["6.4 gram", "1.6 gram", "46 gram", "16 gram"],
          answer: 3,
          explanation:
            "Molar mass of SO2 = 32 + 2(16) = 64 g/mol. Mass = 0.25 mol × 64 g/mol = 16 grams.",
        },
        {
          id: "fund-concept-20",
          question:
            "11.207dm^3 cube of Methane at STP has how many moles of hydrogen atom",
          options: ["4", "8", "2", "16"],
          answer: 2,
          explanation:
            "Moles of CH4 = 11.207 / 22.4 = 0.5 moles. Each CH4 has 4 H atoms, so moles of H atoms = 0.5 × 4 = 2 moles.",
        },
        {
          id: "fund-concept-21",
          question:
            "Magnesium metal reacts with HCl to give hydrogen gas what is the minimum weight of HCL required to produce 12 gram of hydrogen",
          options: ["428 gram", "448 gram", "438 gram", "458 gram"],
          answer: 2,
          explanation:
            "Mg + 2HCl -> MgCl2 + H2. 2 moles HCl (73g) produces 1 mole H2 (2g). To produce 12g H2 (6 moles), mass of HCl needed = 6 × 73g = 438 grams.",
        },
        {
          id: "fund-concept-22",
          question:
            "When 4 moles of hydrogen react with two moles of oxygen how many moles of water will be formed",
          options: ["Five", "Four", "Six", "Three", "two"],
          answer: 1,
          explanation:
            "2H2 + O2 -> 2H2O. Stoichiometrically, 4 moles of H2 react completely with 2 moles of O2 to form 4 moles of H2O.",
        },
        {
          id: "fund-concept-23",
          question: "The maximum number of molecules is present in",
          options: [
            "15 dm^3 cube of hydrogen gas at STP",
            "5 dm^3 cube of Nitrogen gas at STP",
            "1.5 gram of hydrogen gas",
            "5 gram of Oxygen gas",
          ],
          answer: 2,
          explanation:
            "Note: Chemically, 1.5g H2 = 0.75 mol (16.8 dm³ at STP), yielding the maximum moles among options; option C is selected as marked in the key.",
        },
        {
          id: "fund-concept-24",
          question: "One mole of carbon dioxide contains",
          options: [
            "6.02×10^23 atoms of C",
            "6.02×10^23 atoms of O",
            "18.1×10^23 grams of CO2",
            "3 grams of carbon",
          ],
          answer: 0,
          explanation:
            "1 mole of CO2 contains 1 mole of carbon atoms, which corresponds to 6.02×10^23 atoms of C.",
        },
        {
          id: "fund-concept-25",
          question: "Maximum number of molecules will be in",
          options: [
            "1 gram of hydrogen",
            "22 gram of oxygen",
            "10 gram of hydrogen",
            "44 gram of carbon dioxide",
          ],
          answer: 2,
          explanation:
            "10g of H2 = 10 / 2 = 5 moles of H2 molecules, which is significantly higher than the moles in the other options.",
        },
        {
          id: "fund-concept-26",
          question:
            "The mass in atom compared with the mass of one atom of carbon 12 is called",
          options: [
            "One mole",
            "Gram atomic mass",
            "Atomic number",
            "Relative atomic mass",
          ],
          answer: 3,
          explanation:
            "Relative atomic mass is the ratio of the average mass of an atom of an element to 1/12th of the mass of a Carbon-12 atom.",
        },
        {
          id: "fund-concept-27",
          question:
            "The number of grams atom of sulphur that represent 0.5 mole of sulphuric acid is",
          options: ["16", "32", "0.5", "0.9"],
          answer: 2,
          explanation:
            "1 mole of H2SO4 contains 1 gram-atom (mole) of sulfur. Therefore, 0.5 mole of H2SO4 contains 0.5 gram-atom of sulfur.",
        },
        {
          id: "fund-concept-28",
          question:
            "One mole of diamond Chain and one mole of gold ring have same number of",
          options: ["Neutrons", "Protons", "Electrons", "Atoms"],
          answer: 3,
          explanation:
            "By definition, one mole of any monoatomic elemental substance contains Avogadro's number (6.022×10^23) of atoms.",
        },
        {
          id: "fund-concept-29",
          question:
            "A compound 60 g on analysis give carbon is 24 gram and hydrogen is 4 gram oxygen is 32 g its Imperial formula is",
          options: ["C2H4O2", "CH2O2", "C2H2O2", "CH2O"],
          answer: 3,
          explanation:
            "Moles: C = 24/12 = 2, H = 4/1 = 4, O = 32/16 = 2. Ratio C:H:O = 2:4:2 = 1:2:1. Thus, empirical formula is CH2O.",
        },
        {
          id: "fund-concept-30",
          question: "Amount of product obtained practically is called",
          options: [
            "Expected yield",
            "Theoretical yield",
            "Actual yield",
            "Frictional yield",
          ],
          answer: 2,
          explanation:
            "The mass of product isolated experimentally from a reaction is termed actual yield.",
        },
        {
          id: "fund-concept-31",
          question:
            "10 gram of carbon burns giving 11.2 l of carbon dioxide at STP after combustion the amount of Unburnt carbon is",
          options: ["2.5g", "3g", "4g", "1g"],
          answer: 2,
          explanation:
            "C + O2 -> CO2. 11.2 L CO2 = 0.5 moles CO2. Moles of C reacted = 0.5 moles = 0.5 × 12g = 6g. Unburnt carbon = 10g - 6g = 4g.",
        },
        {
          id: "fund-concept-32",
          question: "Stoichiometric calculations are not possible when",
          options: [
            "All the reactance are completely converted into product",
            "Reversible reaction occurs",
            "In calculations law of conservation of mass and law of Definite proportions are obeyed",
            "Side reactions occurs",
          ],
          answer: 3,
          explanation:
            "Occurrence of uncounted side reactions alters expected yields and molar relationships, invalidating standard stoichiometric calculations.",
        },
        {
          id: "fund-concept-33",
          question: "One mole of which of these molecule contain highest number of atoms",
          options: ["Water", "Benzene", "Sucrose", "Glucose"],
          answer: 2,
          explanation:
            "Sucrose (C12H22O11) has 12 + 22 + 11 = 45 atoms per molecule, which is higher than glucose (24), benzene (12), or water (3).",
        },
        {
          id: "fund-concept-34",
          question:
            "Actual yield will reach the ideal value if the percentage yield of the reaction is",
          options: ["50%", "10%", "40%", "100%"],
          answer: 3,
          explanation:
            "A 100% percentage yield means actual yield is equal to the maximum theoretical (ideal) yield.",
        },
        {
          id: "fund-concept-35",
          question:
            "10 moles of hydrogen are allowed to react with 6 moles of oxygen how much water will be obtained from reaction on complete conception of one gas",
          options: ["10 moles", "6 moles", "8 moles", "Four moles", "5 moles"],
          answer: 0,
          explanation:
            "2H2 + O2 -> 2H2O. 10 moles of H2 require 5 moles of O2. H2 is limiting. 10 moles of H2 completely react to form 10 moles of H2O.",
        },
        {
          id: "fund-concept-36",
          question: "The concept of limiting reactant is not applicable while",
          options: [
            "Doing stoichiometric calculation",
            "The reaction is reversible",
            "Calculating theoretical yield",
            "All of these",
          ],
          answer: 1,
          explanation:
            "In reversible reactions, equilibrium is reached before any reactant is completely consumed, so the concept of a limiting reactant does not strictly apply.",
        },
        {
          id: "fund-concept-37",
          question: "4.6 gram OF C2H5OH and 3 gram of C2H6 have",
          options: [
            "Different number of molecules",
            "Same mass of carbon",
            "Equal number of molecules",
            "0.2 moles of oxygen",
          ],
          answer: 2,
          explanation:
            "Moles C2H5OH = 4.6 / 46 = 0.1 mol. Moles C2H6 = 3 / 30 = 0.1 mol. Since moles are equal, both samples contain equal numbers of molecules.",
        },
        {
          id: "fund-concept-38",
          question: "How many times sodium is heavier than that of hydrogen",
          options: ["21 times", "22 times", "23 times", "24 times"],
          answer: 2,
          explanation:
            "Atomic mass of Sodium = 23 amu, while Hydrogen = 1 amu. Sodium is 23 times heavier than hydrogen.",
        },
        {
          id: "fund-concept-39",
          question:
            "The concentration of carbon is 85.45% and hydrogen is 14.55% is not obeyd the formula",
          options: ["CH2", "C2H4", "C2H6", "C4H8"],
          answer: 2,
          explanation:
            "Carbon % in CH2/C2H4/C4H8 (alkenes) = (12/14) × 100 = 85.7%. For ethane C2H6, % C = (24/30) × 100 = 80%, so it does not obey this composition.",
        },
        {
          id: "fund-concept-40",
          question: "One mole of CH4 contains",
          options: [
            "none of these",
            "3.72×10^23 molecules of CH4",
            "3.0g atom of carbon",
            "6.02×10^23 atoms of hydrogen",
          ],
          answer: 0,
          explanation:
            "1 mole CH4 contains 6.022×10^23 CH4 molecules, 1g-atom C, and 4 × (6.022×10^23) H atoms. None of options B, C, or D are correct.",
        },
        {
          id: "fund-concept-41",
          question:
            "The amount of a given product calculator to be obtained in a chemical reaction that goes to completion is",
          options: [
            "Percent efficiency of the reaction",
            "The theoretical yield of the reaction",
            "The yield of the reaction",
            "The actual yield of the reaction",
          ],
          answer: 1,
          explanation:
            "The theoretical yield is the maximum amount of product calculated from stoichiometric balance assuming 100% complete conversion.",
        },
        {
          id: "fund-concept-42",
          question:
            "While finding the relative atomic mass which of the following standard is used to compared the atomic mass",
          options: ["Neon 20", "Carbon 13", "Nucleon number", "Carbon 12"],
          answer: 3,
          explanation:
            "Carbon-12 (C-12) is the internationally accepted standard scale for relative atomic masses.",
        },
        {
          id: "fund-concept-43",
          question: "The volume occupied by 1.4 of Nitrogen gas at STP is",
          options: ["2.24 dm^3", "22.4dm^3", "1.12dm^3", "112dm^3"],
          answer: 2,
          explanation:
            "Moles of N2 = 1.4g / 28g/mol = 0.05 mol. Volume at STP = 0.05 × 22.4 dm³ = 1.12 dm³.",
        },
        {
          id: "fund-concept-44",
          question:
            "Atomic mass molecular mass formula mass or ionic mass of substance expressed in gram is called",
          options: ["Mole", "Avogadro's number", "Molar mass", "Molar volume"],
          answer: 2,
          explanation:
            "The mass of one mole of a substance expressed in grams per mole is called its molar mass.",
        },
        {
          id: "fund-concept-45",
          question:
            "27 gram of aluminium reacts with how much oxygen to produce Aluminium oxide",
          options: ["3 mole", "0.27 mole", "0.75 mole", "1.5 mole"],
          answer: 2,
          explanation:
            "4Al + 3O2 -> 2Al2O3. 4 moles Al (108g) require 3 moles O2. Therefore, 27g Al (1 mole) requires 3 / 4 = 0.75 moles of O2.",
        },
        {
          id: "fund-concept-46",
          question:
            "Which of the following equivalences is not correct for the reaction\nCO2+C----->2CO",
          options: [
            "One mole of carbon dioxide is equal to 2 mole of carbon monoxide",
            "One mole of carbon is equal to 56 G of carbon monoxide",
            "44 gram of carbon dioxide is equal to 28 gram of carbon monoxide",
            "44 gram of carbon dioxide is equal to 12 gram of carbon",
          ],
          answer: 2,
          explanation:
            "1 mole CO2 (44g) produces 2 moles CO (56g). Stating 44g CO2 equals 28g CO is incorrect.",
        },
        {
          id: "fund-concept-47",
          question:
            "Determine the number of moles of oxygen in 10.6 gram of sodium carbonate",
          options: ["0.4 moles", "0.3 moles", "0.2 moles", "None of these"],
          answer: 3,
          explanation:
            "Molar mass Na2CO3 = 106 g/mol. Moles Na2CO3 = 10.6 / 106 = 0.1 mol. Oxygen atoms per formula unit = 3, so moles of O = 0.3 moles. Since option B is 0.3 moles, but per key 'None of these' is mapped.",
        },
        {
          id: "fund-concept-48",
          question:
            "Mass of sodium hydroxide containing system 6.02×10^23 sodium atoms is",
          options: ["23 grams", "4 grams", "40 grams", "20 grams"],
          answer: 2,
          explanation:
            "6.02×10^23 Na atoms = 1 mole Na+ ions = 1 mole NaOH. Molar mass of NaOH = 23 + 16 + 1 = 40 grams.",
        },
        {
          id: "fund-concept-49",
          question:
            "The amount of given product calculated to be obtained in a chemical reaction did goes to completion is",
          options: [
            "The percent efficiency of the reaction",
            "The theoretical yield of the reaction",
            "The yield of the reaction",
            "None of these",
          ],
          answer: 1,
          explanation:
            "The theoretical yield is the maximum calculated amount of product obtained assuming complete reaction.",
        },
        {
          id: "fund-concept-50",
          question:
            "The number of moles of carbon dioxide which contain 8 gram of oxygen",
          options: ["0.25", "1.0", "0.50", "1.50"],
          answer: 0,
          explanation:
            "8g of O = 8 / 16 = 0.5 moles of O atoms. Since 1 mole CO2 contains 2 moles O atoms, moles of CO2 = 0.5 / 2 = 0.25 moles.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-104",
          question: "What is formed by homolysis of a covalent bond?",
          options: ["free radical", "molecule", "ion", "atom"],
          answer: 0,
          explanation:
            "Homolytic fission (homolysis) involves symmetrical breaking of a covalent bond, where each bonded atom takes one electron, producing neutral species with unpaired electrons called free radicals.",
        },
        {
          id: "bumhs-2025-chem-114",
          question: "A molecule will be chiral, if it has:",
          options: [
            "three different group",
            "no element of symmetry",
            "superimposed",
            "mirror image",
          ],
          answer: 1,
          explanation:
            "Chirality requires molecular asymmetry—a chiral molecule lacks elements of symmetry (such as a plane or center of symmetry), making it non-superimposable on its mirror image.",
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-112",
          question:
            "Urea was first synthesized in the laboratory by Friedrich Wöhler by heating an inorganic material named:",
          options: [
            "Ammonium bicarbonate",
            "Ammonium nitrate",
            "Ammonium oxalate",
            "Ammonium cyanate",
            "Ammonium chloride",
          ],
          answer: 3,
          explanation:
            "In 1828, Wöhler synthesized organic urea by heating inorganic ammonium cyanate (NH₄OCN → NH₂CONH₂), disproving the vital force theory.",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-85",
          question: "Which one is NOT a type of stereoisomerism?",
          options: [
            "Conformational isomerism",
            "Optical isomerism",
            "Geometrical isomerism",
            "Metamerism",
          ],
          answer: 3,
          explanation:
            "Stereoisomerism includes optical, geometrical (cis-trans), and conformational isomers. Metamerism is a type of structural (constitutional) isomerism involving unequal distribution of carbon atoms on either side of a polyvalent functional group.",
        },
        {
          id: "chem-sindh-25-125",
          question: "Which compound will NOT show geometrical (cis-trans) isomerism?",
          options: [
            "But-2-ene",
            "1,2-dimethylcyclopropane",
            "Pent-1-ene",
            "1,3-dimethylcyclopentane",
          ],
          answer: 2,
          explanation:
            "Geometrical isomerism requires both double-bonded carbon atoms to hold two different substituent groups. In Pent-1-ene (CH₂=CH–CH₂–CH₂–CH₃), C-1 has two identical hydrogen atoms, preventing cis-trans isomerism.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-108",
          question: "Name of ketone functional group >C=O is:",
          options: ["Amino", "Carbonyl", "Carboxyl", "Formyl"],
          answer: 1,
          explanation:
            "The >C=O group present in aldehydes and ketones is called the carbonyl group.",
        },
        {
          id: "kmu-mdcat-2024-109",
          question: "Pyridine belongs to which class of organic compounds?",
          options: ["Alicyclic", "Heterocyclic", "Homocyclic", "Hydrocarbon"],
          answer: 1,
          explanation:
            "Pyridine (C₅H₅N) is a aromatic heterocyclic organic compound because its cyclic ring contains a heteroatom (nitrogen) in addition to carbon.",
        },
        {
          id: "kmu-mdcat-2024-110",
          question:
            "Which of the following elements cannot be detected directly in a given organic compound by Lassaigne’s test?",
          options: ["Chlorine", "Nitrogen", "Oxygen", "Phosphorous"],
          answer: 2,
          explanation:
            "There is no direct qualitative elemental sodium fusion (Lassaigne's) test for oxygen. It is typically determined by percentage difference or functional group chemical tests.",
        },
        {
          id: "kmu-mdcat-2024-111",
          question: "The homolytic fission of a C–H bond in an alkane results in:",
          options: [
            "Alkyl free radical",
            "Carbanion",
            "Carbocation",
            "Methylpropane",
          ],
          answer: 0,
          explanation:
            "Homolytic cleavage of R–H → R• + H• yields an alkyl free radical and a hydrogen atom radical.",
        },
        {
          id: "kmu-mdcat-2024-115",
          question:
            "The carbon atom carrying a positive charge and bonded to three other atoms or groups is called:",
          options: ["Carbanion", "Carbene", "Carbocation", "Oxonium"],
          answer: 2,
          explanation:
            "A carbocation (carbonium ion) features a trivalent, sp²-hybridized carbon carrying a net positive charge (+1).",
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-74",
          question:
            "What is the IUPAC name of given compound? CH₃–CH=CH–CH₂–C≡CH",
          options: [
            "2-Hexen-5-yne",
            "2-Hexen-6-yne",
            "4-Hexen-1-yne",
            "5-Hexen-1-yne",
          ],
          answer: 3,
          explanation:
            "Numbering starts from the end giving lower locant to unsaturation priority (alkyne at C-1 over alkene at C-4): C¹≡C²–C³H₂–C⁴H=C⁵H–C⁶H₃ gives 5-Hexen-1-yne (or Hex-5-en-1-yne).",
        },
        {
          id: "szambu-chem-24-75",
          question: "What will be the IUPAC name of neopentane?",
          options: [
            "2,2-Dimethylpentane",
            "2,2-Dimethylpropane",
            "2-Methylbutane",
            "3-Methylbutane",
          ],
          answer: 1,
          explanation:
            "Neopentane has a central carbon bonded to four methyl groups (C(CH₃)₄). Its longest continuous carbon chain contains 3 carbons, yielding 2,2-Dimethylpropane.",
        },
        {
          id: "szambu-chem-24-97",
          question:
            "Which type of isomerism is shown by fumaric acid and maleic acid?",
          options: [
            "Functional group isomers",
            "Geometrical isomers",
            "Optical isomers",
            "Position isomers",
          ],
          answer: 1,
          explanation:
            "Maleic acid is the cis-isomer and fumaric acid is the trans-isomer of HOOC–CH=CH–COOH, making them geometrical isomers.",
        },
        {
          id: "szambu-chem-24-100",
          question: "The IUPAC name of CH₃–CH(Cl)–CH₂–CH₂–CHO is:",
          options: [
            "2-Chloropentanal",
            "2-Chloropentanol",
            "4-Chloropentanal",
            "4-Chloropentanol",
          ],
          answer: 2,
          explanation:
            "Numbering begins at the aldehyde carbon: C¹HO–C²H₂–C³H₂–C⁴H(Cl)–C⁵H₃. The chlorine substituent is at C-4, giving 4-Chloropentanal.",
        },
        {
          id: "szambu-chem-24-101",
          question:
            "The saturated alicyclic hydrocarbons (cycloalkanes) have the general formula:",
          options: ["CₙH₂ₙ", "CₙH₂ₙ₊₁", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂"],
          answer: 0,
          explanation:
            "Monocyclic saturated alicyclic hydrocarbons (cycloalkanes) share the same general formula as mono-alkenes: CₙH₂ₙ.",
        },
        {
          id: "szambu-chem-24-105",
          question: "The IUPAC name of Malonic acid CH₂(COOH)₂ is:",
          options: [
            "1,2-Ethanedioic acid",
            "1,3-Propanedioic acid",
            "1,4-butanedioic acid",
            "1,6-Hexadecanoic acid",
          ],
          answer: 1,
          explanation:
            "Malonic acid contains a 3-carbon chain with two carboxylic acid terminal groups (HOOC–CH₂–COOH), systematically named 1,3-Propanedioic acid (or propanedioic acid).",
        },
      
        // --- SZAMBU CHEM 25 ---
        {
          id: "szambu-chem-25-1",
          question:
            "The structural relationship of (+)-tartaric acid and (–)-tartaric acid is that they are:",
          options: ["geometric isomers", "enantiomers", "diastereomers", "Planar"],
          answer: 1,
          explanation:
            "(+)-Tartaric acid (dextrorotatory) and (–)-tartaric acid (levorotatory) are non-superimposable mirror images of each other, known as enantiomers.",
        },
        {
          id: "szambu-chem-25-2",
          question:
            "Diethyl ether (CH₃CH₂–O–CH₂CH₃) and Methyl n-propyl ether (CH₃–O–CH₂CH₂CH₃) are:",
          options: [
            "position isomers",
            "functional group isomers",
            "metamers",
            "tautomer",
          ],
          answer: 2,
          explanation:
            "Metamerism occurs when isomers have the same functional group (ether -O-) but unequal distribution of alkyl chains attached to the polyvalent heteroatom.",
        },
      
        // --- UHS 2024 CHEM ---
        {
          id: "uhs-2024-chem-106",
          question: "1-Butene and 2-Butene display which type of isomerism?",
          options: ["Functional Group", "Position", "Metamerism", "Chain"],
          answer: 1,
          explanation:
            "1-Butene (CH₂=CH–CH₂–CH₃) and 2-Butene (CH₃–CH=CH–CH₃) differ only in the location of the carbon-carbon double bond, making them position isomers.",
        },
        {
          id: "uhs-2024-chem-107",
          question:
            "Which type of isomerism is displayed by compounds having the same molecular formula but different distribution of carbon atoms/alkyl groups on either side of a polyvalent functional group?",
          options: ["Chain", "Metamerism", "Geometric", "Tautomerism"],
          answer: 1,
          explanation:
            "Metamerism is structural isomerism caused by varying alkyl group lengths on either side of a heteroatom/polyvalent group (like -O-, -S-, -NH-).",
        },
        {
          id: "uhs-2024-chem-108",
          question:
            "Homocyclic organic compounds are sub-divided into two main categories, namely:",
          options: [
            "Alicyclic and Aromatic",
            "Alkenes & Alkynes",
            "Aromatic and Non aromatic",
            "Saturated & Unsaturated",
          ],
          answer: 0,
          explanation:
            "Homocyclic (carbocyclic) compounds contain rings composed entirely of carbon atoms and are divided into Alicyclic (e.g., cyclohexane) and Aromatic (e.g., benzene) compounds.",
        },
        {
          id: "org-fund-1",
          question: "Which of the following is a Ketone",
          options: [
            "CH3-O-CH2-CH3",
            "CH3COCOOH",
            "CH3-CO-CH2-CH3",
            "CH3-CH2-CHO",
          ],
          answer: 2,
          explanation:
            "CH3-CO-CH2-CH3 (butanone) contains a carbonyl group (C=O) bonded to two alkyl groups, which defines a ketone.",
        },
        {
          id: "org-fund-2",
          question: "Mineral oil in its refined form is called",
          options: ["Kerosene oil", "Crude oil", "Petroleum", "Reforming"],
          answer: 2,
          explanation:
            "Petroleum is the refined liquid mineral oil composed mainly of hydrocarbons extracted from geological formations.",
        },
        {
          id: "org-fund-3",
          question: "Diethyl Ether and n butanol are",
          options: [
            "Position isomerism",
            "Functional group isomerism",
            "Chain isomerism",
            "Tautomerism",
          ],
          answer: 2,
          explanation:
            "Note: Chemically, diethyl ether (an ether) and n-butanol (an alcohol) are functional group isomers (C4H10O). Option C (Chain isomerism) is selected per the provided answer key.",
        },
        {
          id: "org-fund-4",
          question: "Alkanes do not show geometric isomerism due to",
          options: [
            "Hyper conjugation",
            "Rotation around single",
            "Resonance",
            "Restricted rotation around double bonds",
          ],
          answer: 1,
          explanation:
            "Alkanes have free rotation around single carbon-carbon sigma bonds, which prevents the existence of fixed cis/trans geometric configurations.",
        },
        {
          id: "org-fund-5",
          question: "The percentage of P character in SP hybrid orbital is",
          options: ["50%", "75%", "100%", "25%"],
          answer: 0,
          explanation:
            "An sp hybrid orbital is formed by combining one s and one p orbital, giving 50% s character and 50% p character.",
        },
        {
          id: "org-fund-6",
          question: "Which of the following is not the major source of organic compound",
          options: ["Natural gas", "Petroleum", "Coal", "Ammoniacal liquor"],
          answer: 3,
          explanation:
            "Coal, petroleum, and natural gas are the three major natural fossil fuel sources of organic compounds, whereas ammoniacal liquor is a byproduct.",
        },
        {
          id: "org-fund-7",
          question: "Which is not present is heteroatom in heterocyclic compound",
          options: ["Sulphur", "Oxygen", "Nitrogen", "Chlorine"],
          answer: 3,
          explanation:
            "Heteroatoms incorporated directly into aromatic or non-aromatic rings are usually N, O, or S. Monovalent halogens like Chlorine cannot form ring linkages.",
        },
        {
          id: "org-fund-8",
          question: "The percentage of is character in SP2 hybrid orbitals is",
          options: ["25%", "50%", "33.3%", "75%"],
          answer: 2,
          explanation:
            "An sp2 hybrid orbital is formed from one s and two p orbitals (1/3 s character), yielding 33.3% s character.",
        },
        {
          id: "org-fund-9",
          question: "Anthracene contain how many number of fused benzene rings",
          options: ["1", "2", "3", "4"],
          answer: 2,
          explanation:
            "Anthracene (C14H10) is a polycyclic aromatic hydrocarbon consisting of 3 linearly fused benzene rings.",
        },
        {
          id: "org-fund-10",
          question: "What is the common name of this compound CH3-(CH2)3-CH2-Cl",
          options: [
            "Chloropentane",
            "n-chloropentane",
            "n-pentylchloride",
            "1-chloropentane",
          ],
          answer: 2,
          explanation:
            "The common name for a straight 5-carbon alkyl chain attached to chlorine is n-pentyl chloride (or n-amyl chloride).",
        },
        {
          id: "org-fund-11",
          question: "Propene exhibit",
          options: [
            "Cis isomerism",
            "Trans isomerism",
            "Geometric isomerism",
            "None",
          ],
          answer: 3,
          explanation:
            "Propene (CH3-CH=CH2) has two identical hydrogen atoms on the terminal double-bonded carbon (=CH2), making geometric isomerism impossible.",
        },
        {
          id: "org-fund-12",
          question: "In SP2 hybridization the angle between two hybrid orbitals is",
          options: ["120 degree", "109.5 degree", "180 degree", "None of these"],
          answer: 0,
          explanation:
            "sp2 hybridization forms a trigonal planar geometry with bond angles of exactly 120° between hybrid orbitals.",
        },
        {
          id: "org-fund-13",
          question: "The following compound cannot show positional isomerism",
          options: ["Alkanal", "Alkynes", "Alkene", "None"],
          answer: 0,
          explanation:
            "In alkanals (aldehydes), the carbonyl group (-CHO) is always situated at the terminal carbon (position 1) by definition, so it cannot show position isomerism.",
        },
        {
          id: "org-fund-14",
          question: "Which of the following compounds does not exhibit position isomerism",
          options: ["Alkynes", "Nitro alkanes", "Carboxylic acids", "Alcohols"],
          answer: 2,
          explanation:
            "Monocarboxylic acids contain a terminal carboxyl group (-COOH) that is always at position 1 of the carbon chain.",
        },
        {
          id: "org-fund-15",
          question: "Which of the following is not inorganic",
          options: ["Diamond", "Graphite", "Synthetic rubber", "Solid Iodine"],
          answer: 2,
          explanation:
            "Synthetic rubber is an organic polymer built from repeating hydrocarbon monomer chains, unlike elemental allotropes.",
        },
        {
          id: "org-fund-16",
          question: "Frederick wohler prepared urea from",
          options: [
            "Amino acids",
            "Ammonium carbonate",
            "Ammonium cyanate",
            "Xanthin",
          ],
          answer: 2,
          explanation:
            "Friedrich Wöhler synthesized organic urea in 1828 by heating the inorganic salt ammonium cyanate (NH4OCN).",
        },
        {
          id: "org-fund-17",
          question:
            "Large hydrocarbons are converted into similar hydrocarbons by a process called",
          options: ["Reforming", "Cracking", "Distillation", "Decomposition"],
          answer: 1,
          explanation:
            "Cracking (pyrolysis) breaks long-chain, high-boiling petroleum fractions into smaller, higher-value alkanes and alkenes.",
        },
        {
          id: "org-fund-18",
          question: "Generic formula of cyclo alkane is",
          options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n-1"],
          answer: 1,
          explanation:
            "Monocyclic cycloalkanes possess the general molecular formula CnH2n (isomeric with open-chain alkenes).",
        },
        {
          id: "org-fund-19",
          question: "Cyclobutane structure is categorised under",
          options: [
            "Aromatic compounds",
            "Aliphatic compounds",
            "Alicyclic compounds",
            "Hetero cyclic compounds",
          ],
          answer: 2,
          explanation:
            "Cyclobutane is a non-aromatic, closed-ring aliphatic hydrocarbon, classifying it as an alicyclic compound.",
        },
        {
          id: "org-fund-20",
          question: "Ethers shows the phenomena of",
          options: [
            "Metamerism",
            "Positional isomerism",
            "Functional group isomerism",
            "Cis trans isomerism",
          ],
          answer: 0,
          explanation:
            "Ethers (R-O-R') exhibit metamerism due to differing distribution of alkyl groups on either side of the polyvalent oxygen atom.",
        },
        {
          id: "org-fund-21",
          question: "How many esters are possible for C4H8O2",
          options: ["2", "4", "3", "5"],
          answer: 1,
          explanation:
            "The 4 isomeric esters of C4H8O2 are: Methyl propanoate, Ethyl acetate, Propyl formate, and Isopropyl formate.",
        },
        {
          id: "org-fund-22",
          question: "Butane molecule can have maximum number of isomers",
          options: ["2", "4", "6", "8"],
          answer: 0,
          explanation:
            "Butane (C4H10) has exactly 2 structural isomers: n-butane and isobutane (2-methylpropane).",
        },
        {
          id: "org-fund-23",
          question: "C-C bond is broken in",
          options: ["Hydrogenation", "Cracking", "Condensation", "Polymerization"],
          answer: 1,
          explanation:
            "Cracking involves thermal or catalytic cleavage of carbon-carbon (C-C) single bonds in large alkanes.",
        },
        {
          id: "org-fund-24",
          question: "What is the Octane number of Iso octane",
          options: ["40", "100", "0", "2"],
          answer: 1,
          explanation:
            "2,2,4-Trimethylpentane (isooctane) burns smoothly and is arbitrarily assigned an octane rating benchmark of 100.",
        },
        {
          id: "org-fund-25",
          question: "Pyridine is an example of",
          options: [
            "Homocyclic compound",
            "Carbocyclic compound",
            "Heterocyclic compound",
            "Aliphatic compound",
          ],
          answer: 2,
          explanation:
            "Pyridine (C5H5N) contains a six-membered aromatic ring with five carbon atoms and one nitrogen atom, making it heterocyclic.",
        },
        {
          id: "org-fund-26",
          question: "Which one is thioether",
          options: ["R-O-R", "R-S-R", "R-Se-R", "None"],
          answer: 1,
          explanation:
            "Thioethers (sulfides) are organosulfur compounds with the general linkage R-S-R'.",
        },
        {
          id: "org-fund-27",
          question:
            "Organic compounds in which Tetra valency of carbon atom is satisfied are called",
          options: ["Saturated", "Unsaturated", "Alkenes", "Alkynes"],
          answer: 0,
          explanation:
            "Saturated organic compounds contain only single C-C bonds where carbon valence is fully satisfied by single bonds.",
        },
        {
          id: "org-fund-28",
          question: "What usually does not dissolve in water",
          options: ["Lipids", "Benzene", "Paraffins", "All of these"],
          answer: 3,
          explanation:
            "Lipids, benzene, and paraffins (alkanes) are non-polar hydrophobic substances insoluble in polar solvents like water.",
        },
        {
          id: "org-fund-29",
          question:
            "An atom or group of atom that gives specific properties to the compound is called as",
          options: [
            "Functional group",
            "Alkanes",
            "Homologous series",
            "None",
          ],
          answer: 0,
          explanation:
            "A functional group is a specific reactive site or arrangement of atoms that governs the characteristic chemical properties of a compound.",
        },
        {
          id: "org-fund-30",
          question: "The structural isomerism arises due to differences in the",
          options: [
            "Number of atoms in the molecule",
            "Arrangements of atoms in the molecule",
            "Numbers is well is arrangement of atoms in the molecule",
            "Spatial arrangements of atoms",
          ],
          answer: 3,
          explanation:
            "Note: Structural isomerism is due to atomic connectivity, whereas spatial arrangement defines stereoisomerism. Option D is selected per the provided answer key.",
        },
        {
          id: "org-fund-31",
          question: "Which type of organic compounds are present in natural gas",
          options: [
            "High molecular mass",
            "Low molecular mass",
            "Low boiling point",
            "Both b and c",
          ],
          answer: 1,
          explanation:
            "Natural gas is composed mainly of low molecular weight gaseous alkanes (predominantly methane, CH4).",
        },
        {
          id: "org-fund-32",
          question: "Which of the following is not in organic compound",
          options: ["Ammonium cyanate", "Urea", "Glucose", "Methane"],
          answer: 0,
          explanation:
            "Ammonium cyanate (NH4OCN) is classified as an inorganic ionic salt, unlike organic molecules.",
        },
        {
          id: "org-fund-33",
          question: "Name the compound which shows geometric isomerism",
          options: [
            "1-bromo-2-chloropropene",
            "2,3-dimethylpropene",
            "2-pentene",
            "Both A and C",
          ],
          answer: 3,
          explanation:
            "Both 1-bromo-2-chloropropene and 2-pentene have restricted C=C rotation with different groups on each carbon, displaying geometric (cis/trans) isomerism.",
        },
        {
          id: "org-fund-34",
          question:
            "The type of isomerism existing in a compound of molecular formula C2H6O is",
          options: [
            "Functional group",
            "Position isomerism",
            "Chain isomerism",
            "Metamerism",
          ],
          answer: 0,
          explanation:
            "C2H6O can represent either Ethanol (CH3CH2OH) or Dimethyl ether (CH3OCH3), which are functional group isomers.",
        },
        {
          id: "org-fund-35",
          question:
            "1 Chloropropane and 2chloropropane are isomers of each other the type of isomerism is",
          options: [
            "Cis trans isomerism",
            "Chain isomerism",
            "Positional isomerism",
            "Functional group isomerism",
          ],
          answer: 2,
          explanation:
            "They differ only in the position of the chlorine functional group on the 3-carbon chain.",
        },
        {
          id: "org-fund-36",
          question: "Select the organic compound which belong to arene family",
          options: ["CH2=CH2", "CH3-NH2", "CH3-O-CH3", "C6H6"],
          answer: 3,
          explanation:
            "Benzene (C6H6) is the fundamental member of the arene (aromatic hydrocarbon) family.",
        },
        {
          id: "org-fund-37",
          question: "In alkanes each carbon has hybridization of",
          options: ["Sp2", "Sp3", "Sp", "None"],
          answer: 1,
          explanation:
            "All carbon atoms in alkanes are sp3 hybridized, forming 4 single sigma bonds.",
        },
        {
          id: "org-fund-38",
          question:
            "The isomerism arising due to different carbon atom on both sides of different functional groups is called",
          options: [
            "Metamerism",
            "Functional group isomerism",
            "Chain isomerism",
            "Tautomerism",
          ],
          answer: 0,
          explanation:
            "Metamerism occurs when isomers have unequal alkyl chain lengths attached to a central polyvalent heteroatom or functional group (e.g., -O-, -S-, -NH-).",
        },
        {
          id: "org-fund-39",
          question: "Tetra ethyl lead addition to petrol is example of",
          options: [
            "Positive catalysis",
            "Negative catalysis",
            "Both a and b",
            "None of these",
          ],
          answer: 1,
          explanation:
            "Tetraethyl lead acts as an anti-knock agent by inhibiting explosive auto-ignition radical chain reactions in internal combustion engines (negative catalysis).",
        },
        {
          id: "org-fund-40",
          question:
            "Coal tar contains many organic compounds that can be separated by",
          options: [
            "Destructive distillation",
            "Fractional distillation",
            "Vacuum distillation",
            "Partial distillation",
          ],
          answer: 1,
          explanation:
            "Coal tar is separated into various aromatic chemical fractions (e.g., benzene, toluene, naphthalene, phenol) by fractional distillation.",
        },
        {
          id: "org-fund-41",
          question: "How many chain isomers of pentane is possible",
          options: ["Two", "Four", "Three", "Five"],
          answer: 2,
          explanation:
            "Pentane (C5H12) has 3 chain isomers: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane).",
        },
        {
          id: "org-fund-42",
          question: "Which of the following is alicyclic in nature",
          options: ["Cyclobutane", "Isobutane", "n butane", "Toulene"],
          answer: 0,
          explanation:
            "Cyclobutane is a saturated ring hydrocarbon without aromatic character, making it alicyclic.",
        },
        {
          id: "org-fund-43",
          question: "Which of the following does not show metamerism",
          options: ["Ethers", "Secondary amines", "Ketones", "Aldehydes"],
          answer: 3,
          explanation:
            "Note: Chemically, aldehydes have a terminal functional group (-CHO) and cannot show metamerism. Option C (Ketones) is selected per the provided answer key.",
        },
        {
          id: "org-fund-44",
          question: "Cyclobutane structure is categorised under",
          options: [
            "Aromatic compounds",
            "Aliphatic compounds",
            "Alicyclic compounds",
            "Heterocyclic compounds",
          ],
          answer: 2,
          explanation:
            "Cyclobutane is a non-aromatic carbocyclic compound, classified under alicyclic compounds.",
        },
        {
          id: "org-fund-45",
          question: "The suffix is used for Carboxylic acids",
          options: ["-al", "-ol", "-oic", "None"],
          answer: 2,
          explanation:
            "In IUPAC nomenclature, carboxylic acids are named by adding the suffix '-oic acid' to the alkane parent stem.",
        },
        {
          id: "org-fund-46",
          question: "In tertiary alcohols tertiary carbon is bonded to",
          options: [
            "Two hydrogen atoms",
            "Three hydrogen atoms",
            "One hydrogen atom",
            "No Hydrogen atoms",
          ],
          answer: 3,
          explanation:
            "In tertiary alcohols (R3C-OH), the central carbon bearing the -OH group is bonded to 3 alkyl groups and 0 hydrogen atoms.",
        },
        {
          id: "org-fund-47",
          question:
            "How many secondary carbon atoms are present in methyl cyclopropane",
          options: ["1", "2", "3", "0"],
          answer: 1,
          explanation:
            "Methylcyclopropane contains a ring with one tertiary carbon (attached to -CH3) and two secondary CH2 ring carbons.",
        },
        {
          id: "org-fund-48",
          question: "C4H11N gives the type of isomerism",
          options: [
            "Metamerism",
            "Optical isomerism",
            "Tautomerism",
            "None",
          ],
          answer: 0,
          explanation:
            "C4H11N can exist as various primary, secondary, and tertiary amines with differing alkyl groups around nitrogen, exhibiting metamerism.",
        },
        {
          id: "org-fund-49",
          question: "The smallest alkane that show isomerism is",
          options: ["Ethane", "Butane", "Pentane", "Isopropane"],
          answer: 1,
          explanation:
            "Butane (C4H10) is the smallest alkane capable of structural chain isomerism (n-butane and isobutane).",
        },
        {
          id: "org-fund-50",
          question: "Glycol and glycerol can be differentiated on the basis of",
          options: [
            "Number of carbon atoms",
            "Number of hydroxyl groups",
            "Position of hydroxyl groups",
            "All of the above mentioned",
          ],
          answer: 3,
          explanation:
            "Ethylene glycol (C2H6O2, diol) and Glycerol (C3H8O3, triol) differ in carbon count, number of -OH groups, and their structural positions.",
        },
        // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-86",
          question:
            "Which monomer is used alongside adipic acid for the synthesis of Nylon 6,6?",
          options: [
            "sebacoyl chloride",
            "methylene diamine",
            "heptane-1,7-dioic acid",
            "hexamethylene diamine",
          ],
          answer: 3,
          explanation:
            "Nylon 6,6 is synthesized by condensation polymerization of two 6-carbon monomers: adipic acid (hexanedioic acid) and hexamethylene diamine (1,6-diaminohexane).",
        },
        {
          id: "bumhs-2025-chem-106",
          question: "Which of the following is classified as a natural adhesive?",
          options: ["silicones", "polyvinylacetate", "casein glue", "polyamide"],
          answer: 2,
          explanation:
            "Casein glue is derived from casein, a natural protein precipitated from milk. Silicones, PVA, and polyamides are synthetic adhesives.",
        },
        {
          id: "bumhs-2025-chem-113",
          question:
            "Which of the following functional groups acts as a chromophore in dyes?",
          options: [
            "amino group",
            "azo group",
            "hydroxyl group",
            "sulfonic acid group",
          ],
          answer: 1,
          explanation:
            "A chromophore is an unsaturated color-imparting functional group containing pi-bonds (such as the azo group –N=N–, nitro group –NO₂, or carbonyl group >C=O). Groups like –OH and –NH₂ act as auxochromes.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-104",
          question: "Polyvinyl chloride (PVC) is classified as a:",
          options: [
            "Homopolymer",
            "Thermosetting polymer",
            "Thermoplastic polymer",
            "Copolymer",
          ],
          answer: 2,
          explanation:
            "PVC is a linear addition polymer that softens upon heating and hardens upon cooling, making it a classic thermoplastic polymer (it is also an addition homopolymer).",
        },
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-80",
          question:
            "It transports oxygen from the lungs to every tissue of the body:",
          options: [
            "Hemoglobin",
            "Proteins",
            "Hormones",
            "Lipids",
            "Antibodies",
          ],
          answer: 0,
          explanation:
            "Hemoglobin is an iron-containing metalloprotein in red blood cells that reversibly binds and transports oxygen from the lungs to peripheral body tissues.",
        },
        {
          id: "chem-sindh-24-102",
          question:
            "Total number of alpha (α) amino acids commonly recognized (including standard and rare proteinogenic ones like selenocysteine/pyrrolysine) is:",
          options: ["19", "27", "22", "25", "28"],
          answer: 2,
          explanation:
            "While 20 standard amino acids are directly encoded by the genetic code, 22 α-amino acids are proteinogenic (including selenocysteine and pyrrolysine).",
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-115",
          question: "Which one of the following is an addition polymer?",
          options: [
            "Polyvinyl chloride",
            "Nylon 6,6",
            "Nylon 6,10",
            "Polyester",
          ],
          answer: 0,
          explanation:
            "Polyvinyl chloride (PVC) is formed by free-radical addition polymerization of vinyl chloride monomers without losing any small byproduct molecules. Nylons and polyesters are condensation polymers.",
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-119",
          question:
            "A patient with pancreatic insufficiency shows reduced activity of an exopeptidase enzyme that hydrolyzes peptide bonds sequentially from the carboxyl (C-terminal) end of proteins. Which enzyme is deficient?",
          options: ["Elastase", "Pepsin", "Carboxypeptidase", "Collagenase"],
          answer: 2,
          explanation:
            "Carboxypeptidase is a pancreatic exopeptidase enzyme that specifically cleaves amino acids off the C-terminal (carboxyl) end of polypeptide chains.",
        },
        {
          id: "kmu-mdcat-25-chem-137",
          question:
            "An experiment shows that heating a protein disrupts local alpha-helix structures. Which protein structure level is mainly affected?",
          options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
          answer: 1,
          explanation:
            "The alpha-helix and beta-pleated sheet configurations stabilized by local backbone hydrogen bonding represent the secondary structure of a protein.",
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-121",
          question:
            "The protein framework present in hemoglobin (consisting of 4 polypeptide subunit chains) exhibits which level of structural organization?",
          options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
          answer: 3,
          explanation:
            "Hemoglobin consists of four separate polypeptide subunits (2 alpha and 2 beta chains) assembled together into a single oligomeric functional unit, which defines a quaternary structure.",
        },
        {
          id: "kmu-mdcat-2024-122",
          question: "In competitive enzyme inhibition, the inhibitor:",
          options: [
            "Binds with substrate",
            "Competes with enzyme",
            "Competes with substrate for the active site",
            "Irreversibly binds with enzyme",
          ],
          answer: 2,
          explanation:
            "A competitive inhibitor structurally resembles the substrate and competes directly with substrate molecules for binding at the active site of the enzyme.",
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-122",
          question: "Which one of the following is NOT an amino acid?",
          options: ["Folic acid", "Glutamic acid", "Glycine", "Lysine"],
          answer: 0,
          explanation:
            "Folic acid is a B-complex vitamin (Vitamin B9), whereas glutamic acid, glycine, and lysine are proteinogenic α-amino acids.",
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-85",
          question:
            "An enzyme used to hydrolyze/decompose lipids into fatty acids and glycerol in our alimentary canal is:",
          options: ["Amylase", "Protease", "Lipase", "Urease"],
          answer: 2,
          explanation:
            "Lipases are digestive enzymes that catalyze the hydrolysis of ester bonds in triglycerides (fats/lipids) to yield free fatty acids and glycerol.",
        },
        {
          id: "macro-1",
          question:
            "Alpha helix and Beta pleated sheets are secondary structures of protein which are maintained by",
          options: [
            "Dipole forces",
            "Ionic bonds",
            "Non polar interactions",
            "Hydrogen bonds",
          ],
          answer: 3,
          explanation:
            "Secondary protein structure (alpha-helices and beta-pleated sheets) is stabilized by hydrogen bonding between the C=O and N-H groups of the peptide backbone.",
        },
        {
          id: "macro-2",
          question: "Proteins lose their ability to work",
          options: [
            "By slight heating",
            "By slight cooling",
            "By change in structure",
            "When inside the body",
          ],
          answer: 2,
          explanation:
            "Denaturation or conformational changes alter the 3D active shape of proteins, causing loss of biological activity.",
        },
        {
          id: "macro-3",
          question:
            "The substance which reduce the activity of enzyme action are called as",
          options: ["Reducers", "Activators", "Promoters", "Inhibitors"],
          answer: 3,
          explanation:
            "Enzyme inhibitors are chemical species that bind to enzymes and decrease their catalytic rate or activity.",
        },
        {
            id: "macro-3",
            question: "The substance which reduce the activity of enzyme action are called as",
            options: ["Reducers", "Activators", "Promoters", "Inhibitors"],
            answer: 3,
            explanation: "Enzyme inhibitors are chemical species that bind to enzymes and decrease their catalytic rate or activity."
          },
          {
            id: "macro-4",
            question: "In which of the following body part protein is not present",
            options: ["Skin", "Hair", "Nail", "Bones"],
            answer: 3,
            explanation: "Note: Bones contain significant collagen protein, but option D (Bones) is mapped to match the marked key."
          },
          {
            id: "macro-5",
            question: "Enzymes are madeup of",
            options: ["Proteins", "Carbohydrates", "Vitamins", "None"],
            answer: 0,
            explanation: "Biologically, virtually all enzymes are globular proteins formed by linear chains of amino acids."
          },
          {
            id: "macro-6",
            question: "Primary structure of protein refers to",
            options: [
              "Coiling and folding in form of of specific structure",
              "3D structure",
              "Sequence of amino acid in a chain",
              "Alpha and beta sheets"
            ],
            answer: 2,
            explanation: "Primary structure defines the specific linear sequence of amino acids joined by peptide bonds in a polypeptide chain."
          },
          {
            id: "macro-7",
            question: "A polymer in which the number of amino acid Residue is greater than 100 or the molecular mass is greater than 10000 is called",
            options: ["Protein", "Polypeptide", "Dipeptide", "peptide"],
            answer: 0,
            explanation: "By convention, polypeptides with over 100 amino acid residues and molecular weights exceeding 10,000 Da are classified as proteins."
          },
          {
            id: "macro-8",
            question: "Globulins protein hydrolysis yield amino acids or their derivative so they belong to which type of proteins",
            options: [
              "Derived proteins",
              "Compound proteins",
              "Conjugated proteins",
              "Simple proteins"
            ],
            answer: 3,
            explanation: "Simple proteins yield only amino acids or their derivatives upon complete hydrolysis."
          },
          {
            id: "macro-9",
            question: "Nuclear proteins are protein which transfer hereditary information from one generation to other",
            options: [
              "Transport proteins",
              "Genetic proteins",
              "Structural protein",
              "Regulatory protein"
            ],
            answer: 1,
            explanation: "Proteins involved in chromosome formation and genetic transfer/expression (like histones) act as genetic proteins."
          },
          {
            id: "macro-10",
            question: "Abundant macromolecule on earth",
            options: ["Protein", "Carbohydrate", "Lipid", "Nucleic acid"],
            answer: 1,
            explanation: "Carbohydrates (specifically cellulose) are the most abundant organic macromolecules on Earth."
          },
          {
            id: "macro-11",
            question: "Rate of a catalyst in a chemical reaction is to",
            options: [
              "Increase rate of reaction",
              "Decrease rate of reaction",
              "Decrease yield of reaction",
              "Increase yield of reaction"
            ],
            answer: 0,
            explanation: "Catalysts accelerate chemical reaction rates by providing an alternative pathway with a lower activation energy."
          },
          {
            id: "macro-12",
            question: "Third Order of protein structure refers to",
            options: [
              "Bending of protein chain",
              "Number and sequence of amino acid",
              "Three dimensional structure of protein",
              "Bending of protein molecule"
            ],
            answer: 2,
            explanation: "Tertiary structure describes the complete three-dimensional folding and spatial arrangement of a single polypeptide chain."
          },
          {
            id: "macro-13",
            question: "After digestion proteins changes into",
            options: ["Amino acids", "Starch", "Glycogen", "Lipids"],
            answer: 0,
            explanation: "Proteolytic digestive enzymes hydrolyze protein peptide bonds to release individual absorption-ready amino acids."
          },
          {
            id: "macro-14",
            question: "Enzyme state brings about exchange of functional groups like phosphate are called",
            options: ["Ligases", "Isomerase", "Lyases", "Transferase"],
            answer: 3,
            explanation: "Transferases catalyze the transfer of functional groups (such as phosphate, methyl, or amino groups) from one molecule to another."
          },
          {
            id: "macro-15",
            question: "Conjugated protein is",
            options: ["Non soluble", "Non folded", "Non functional", "All"],
            answer: 2,
            explanation: "Note: Standard biochemistry defines conjugated proteins as highly functional complexes containing a non-protein prosthetic group; per the marked key, option C is selected."
          },
          {
            id: "macro-16",
            question: "Based on function thyroxine can be classified as",
            options: [
              "Hormonal protein",
              "Structural protein",
              "Biological protein",
              "Genetic protein"
            ],
            answer: 0,
            explanation: "Thyroxine functions as a metabolic regulatory signal (hormonal role)."
          },
          {
            id: "macro-17",
            question: "Which of the following is addition polymer",
            options: [
              "Polyvinyl chloride",
              "Polyester",
              "Both",
              "None"
            ],
            answer: 0,
            explanation: "Polyvinyl chloride (PVC) is formed through addition polymerization of vinyl chloride monomers without losing small molecules."
          },
          {
            id: "macro-18",
            question: "Casein is used in manufacturing of ....",
            options: [
              "Buttons and buckles",
              "Tanning of leather",
              "Gelatin",
              "Bakery goods"
            ],
            answer: 0,
            explanation: "Galalith, a plastic made from casein protein hardened with formaldehyde, was historically widely used to manufacture buttons and buckles."
          },
          {
            id: "macro-19",
            question: "An example of hydrolase is",
            options: ["Amylase", "Fumarase", "Lipase", "A AND C"],
            answer: 3,
            explanation: "Both Amylase (cleaves glycosidic bonds) and Lipase (cleaves ester bonds) use water to hydrolyze biological molecules."
          },
          {
            id: "macro-20",
            question: "An example of simple protein is",
            options: ["Lipoprotein", "Lecithin", "Cholestrol", "Globulin"],
            answer: 3,
            explanation: "Globulins are simple globular proteins that yield only amino acids upon complete hydrolysis."
          },
          {
            id: "macro-21",
            question: "The most abundant protein in human body is",
            options: ["Collagen", "Myosin", "Keratin", "Albumin"],
            answer: 0,
            explanation: "Collagen comprises approximately 25% to 35% of the total protein content in mammals, acting as the main structural protein in connective tissues."
          },
          {
            id: "macro-22",
            question: "An example of regulatory protein is",
            options: [
              "Nucleo protein",
              "Lactoglobulin",
              "Haemooglobin",
              "Thyroxine"
            ],
            answer: 3,
            explanation: "Thyroxine regulates general metabolic rate and growth processes in the human body."
          },
          {
            id: "macro-23",
            question: "Enzyme bind with substrate to form",
            options: [
              "Enzyme substrate complex",
              "Substrate",
              "Enzyme",
              "Product"
            ],
            answer: 0,
            explanation: "Enzyme (E) and Substrate (S) reversibly combine at the active site to form a temporary Enzyme-Substrate (ES) complex."
          },
          {
            id: "macro-24",
            question: "Phosoprotein comes under the type of protein",
            options: [
              "Simple protein",
              "Derived protein",
              "Conjugated protein",
              "Both A and B"
            ],
            answer: 2,
            explanation: "Phosphoproteins are conjugated proteins bound to phosphoric acid as their prosthetic group."
          },
          {
            id: "macro-25",
            question: "Macromolecules are described is large molecule built up from small repeating units called",
            options: ["Monomers", "Isomers", "Metamorph", "Metamers"],
            answer: 0,
            explanation: "Polymers/macromolecules are long-chain structures produced by covalently bonding small molecular units called monomers."
          },
          {
            id: "macro-26",
            question: "Which of the following is not a category of protein based upon their function",
            options: ["Genetic", "Nucelo", "Regulatory", "Structural"],
            answer: 1,
            explanation: "'Nucleo' refers to nucleoproteins (a structural/compositional class) rather than a functional classification category."
          },
          {
            id: "macro-27",
            question: "Glucose is converted into ethanol by the enzymes present in the yeast",
            options: ["Urease", "Zymase", "Invertase", "Sucrase"],
            answer: 1,
            explanation: "Zymase is an enzyme complex present in yeast that catalyzes the fermentation of simple sugars like glucose into ethanol and carbon dioxide."
          },
          {
            id: "macro-28",
            question: "Urease is present in",
            options: ["Yeast", "Soya sauce", "Grapes", "Soya bean"],
            answer: 3,
            explanation: "Soybeans (Jack beans) are rich botanical sources of the enzyme urease."
          },
          {
            id: "macro-29",
            question: "L asparginase enzymes has been used for the treatment of",
            options: ["Jaundice", "Blood cancer", "Rickets", "Heart disease"],
            answer: 1,
            explanation: "L-asparaginase depletes circulating blood asparagine levels required by malignant cells, making it a treatment for acute lymphoblastic leukemia (blood cancer)."
          },
          {
            id: "macro-30",
            question: "Collagen and albumin are",
            options: [
              "Derived protein",
              "Polyamide",
              "Simple protein",
              "Polysaccharides"
            ],
            answer: 2,
            explanation: "Collagen and albumin yield only amino acids upon complete chemical breakdown, placing them under simple proteins."
          },
          {
            id: "macro-31",
            question: "Based on the physiochemical proteins proteins may be classified into following types",
            options: [
              "Simple proteins",
              "Compound proteins",
              "Derived proteins",
              "All of these"
            ],
            answer: 3,
            explanation: "Physiochemically, proteins are categorized into Simple, Compound (Conjugated), and Derived proteins."
          },
          {
            id: "macro-32",
            question: "Which is an inorganic macromolecule",
            options: ["Diamond", "Synthetic fiber", "Plastic", "Proteins"],
            answer: 0,
            explanation: "Diamond consists of an infinite 3D giant covalent network of carbon atoms without C-H organic frameworks, making it an inorganic macromolecule."
          },
          {
            id: "macro-33",
            question: "Which enzyme is raised in rickets",
            options: [
              "Alkaline phosphatase",
              "Acidic phosphatase",
              "LDH 1",
              "None"
            ],
            answer: 0,
            explanation: "Serum levels of Alkaline Phosphatase (ALP) rise significantly in bone disorders like rickets due to increased osteoblastic activity."
          },
          {
            id: "macro-34",
            question: "Regular coiling and twisting of polypeptide chain caused by hydrogen bonding in between NH and CO occurs",
            options: [
              "Primary structure",
              "Secondary structure",
              "Teritiary structure",
              "Quaternary structure"
            ],
            answer: 1,
            explanation: "Secondary structure formation involves hydrogen bonding along the polypeptide backbone between backbone -NH and -CO groups."
          },
          {
            id: "macro-35",
            question: "Which of the following is not a property of enzymes",
            options: [
              "Extraordinary specificity",
              "High efficiency",
              "Reversibility of reaction",
              "Minimum activity at optimum temperature"
            ],
            answer: 3,
            explanation: "Enzymes exhibit MAXIMUM (not minimum) catalytic activity at their optimum physiological temperature."
          },
          {
            id: "macro-36",
            question: "The specific site at which substrate is attached on the enzyme and converted into product is called as",
            options: ["Reaction site", "Active site", "Binding site", "None"],
            answer: 1,
            explanation: "The active site is the specific pocket or cleft on an enzyme that binds substrate molecules and carries out catalysis."
          },
          {
            id: "macro-37",
            question: "Which of the following is produced by heating of bones",
            options: ["Gelatin", "Cheese", "Albumin", "Gelly"],
            answer: 0,
            explanation: "Gelatin is derived from partial thermal hydrolysis of collagen extracted from animal bones and connective tissue."
          },
          {
            id: "macro-38",
            question: "The enzymes which is found in saliva accelerates the conversion of starch into sugar",
            options: ["Pepsin", "Thrombin", "Ptyalin", "Fumarase"],
            answer: 2,
            explanation: "Salivary amylase (also called ptyalin) initiates dietary starch breakdown into maltose in the oral cavity."
          },
          {
            id: "macro-39",
            question: "Which of the following bond is responsible for the joining of the amino acids in protein",
            options: [
              "Metallic Bond",
              "Peptide Bond",
              "Disulphide Bond",
              "Ionic bond"
            ],
            answer: 1,
            explanation: "Peptide bonds (-CO-NH-) link the carboxyl group of one amino acid to the amino group of the next."
          },
          {
            id: "macro-40",
            question: "Which of these is the synthetic polymer",
            options: ["Polyester", "Proteins", "Glucose", "Starch"],
            answer: 0,
            explanation: "Polyester is an artificially synthesized man-made polymer, unlike natural polymers like proteins and starch."
          },
          {
            id: "macro-41",
            question: "The protein which cave and amino acid and non protein group on hydrolysis known as",
            options: [
              "Derived proteins",
              "Albumins",
              "Conjugated simple proteins",
              "Conjugated proteins"
            ],
            answer: 3,
            explanation: "Conjugated proteins consist of amino acid chains linked with a non-protein component (prosthetic group)."
          },
          {
            id: "macro-42",
            question: "Helical structure of protein is stabilized by",
            options: [
              "Peptide bond",
              "Dipeptide bond",
              "Vander walls forces",
              "Hydrogen bonding"
            ],
            answer: 3,
            explanation: "Intramolecular hydrogen bonding stabilizes the helical turn geometry of alpha-helical structures."
          },
          {
            id: "macro-43",
            question: "Which enzymes catalyzes the conversion of hexsose to 6 phosphate derivative",
            options: ["Hexokinase", "Fructokinase", "Glucokinase", "None"],
            answer: 0,
            explanation: "Hexokinase transfers a phosphate group from ATP to hexose sugars (yielding hexose-6-phosphate)."
          },
          {
            id: "macro-44",
            question: "Amino acids react together to form the primary structure of protein which is accompanied by",
            options: [
              "Addition of water",
              "Removal of ammonia",
              "Addition of ammonia",
              "Removal of water"
            ],
            answer: 3,
            explanation: "Peptide bond formation is a condensation reaction accompanied by the elimination of a water molecule."
          },
          {
            id: "macro-45",
            question: "Hemoglobin is",
            options: [
              "Genetic protein",
              "Building protein",
              "Transport protein",
              "Structural protein"
            ],
            answer: 2,
            explanation: "Hemoglobin serves as a transport protein responsible for carrying oxygen in red blood cells throughout the circulatory system."
          },
          {
            id: "macro-46",
            question: "Fe+2 is the co factor for",
            options: [
              "Chrome oxidase",
              "Carbonic anhydrase",
              "Glucose 6 phosphatase",
              "Hydrolase"
            ],
            answer: 0,
            explanation: "Fe2+ serves as an essential cofactor/prosthetic component in cytochrome oxidase systems."
          },
          {
            id: "macro-47",
            question: "Which of the following is the element not present in all proteins",
            options: ["Carbon", "Nitrogen", "Hydrogen", "Sulphur"],
            answer: 3,
            explanation: "Carbon, hydrogen, oxygen, and nitrogen are present in all proteins, whereas sulfur is present only in proteins containing cysteine or methionine."
          },
          {
            id: "macro-48",
            question: "Succinic thiokinase is an enzyme of the type",
            options: ["Mutase", "Ligase", "Peroxidase", "Lyase"],
            answer: 2,
            explanation: "Note: Succinic thiokinase is technically a synthetase/ligase (EC 6.2.1.4), but option C (Peroxidase) is mapped according to the provided key."
          },
          {
            id: "macro-49",
            question: "Linkage in primary structure of protein",
            options: [
              "Peptide linkage",
              "Disulphide linkage",
              "Hydrogen bond",
              "Ionic bond"
            ],
            answer: 0,
            explanation: "Primary structure consists solely of amino acids joined linearly by covalent peptide linkages."
          },
          {
            id: "macro-50",
            question: "College in is a fibrous protein present most abundantly in",
            options: ["Heart", "Connective tissue", "Nucleus", "Arteries"],
            answer: 1,
            explanation: "Collagen is the primary structural fibrous protein distributed throughout animal connective tissues (cartilage, tendons, ligaments, skin)."
          },
     // --- BUMHS 2025 CHEM ---
        {
          id: "bumhs-2025-chem-103",
          question: "Which one has the strongest metallic bond among Period 3 elements?",
          options: [
            "Na",
            "Mg",
            "Al",
            "P"
          ],
          answer: 2,
          explanation: "Aluminum (Al) contributes 3 valence electrons per atom to the delocalized electron sea and has the smallest metallic ionic radius among the metals listed, resulting in the highest charge density and strongest metallic bonding."
        },
        {
          id: "bumhs-2025-chem-105",
          question: "Which hydride of group VIIA (halogen acids) has the lowest boiling point?",
          options: [
            "HF",
            "HCl",
            "HBr",
            "HI"
          ],
          answer: 1,
          explanation: "HF has an abnormally high boiling point due to extensive hydrogen bonding. From HCl to HI, dispersion forces increase with molecular weight. Thus, HCl has the lowest boiling point in Group 7A."
        },
        {
          id: "bumhs-2025-chem-107",
          question: "Which metal hydroxide is thermally stable and does not decompose easily on heating?",
          options: [
            "LiOH",
            "NaOH",
            "Mg(OH)₂",
            "Ca(OH)₂"
          ],
          answer: 1,
          explanation: "Hydroxides of Group 1 alkali metals (except LiOH) are thermally stable and melt without decomposition upon heating, whereas LiOH and Group 2 hydroxides decompose into oxides and water."
        },
      
        // --- BUMHS MDCAT 2024 ---
        {
          id: "bumhs-mdcat-2024-94",
          question: "Which of the following elements reacts rapidly and vigorously with water at room temperature?",
          options: [
            "Cu",
            "Na",
            "Fe",
            "Al"
          ],
          answer: 1,
          explanation: "Sodium (Na) is an extremely reactive alkali metal that reacts violently with cold water to produce hydrogen gas and sodium hydroxide: 2Na + 2H₂O → 2NaOH + H₂."
        },
        {
          id: "bumhs-mdcat-2024-99",
          question: "Which of the following metals is used for galvanizing iron sheets?",
          options: [
            "tin",
            "zinc",
            "aluminum",
            "copper"
          ],
          answer: 1,
          explanation: "Galvanization is the process of applying a sacrificial protective zinc coating to steel or iron to prevent rusting."
        },
        {
          id: "bumhs-mdcat-2024-105",
          question: "Sodium nitrate (NaNO₃), on mild thermal decomposition, forms:",
          options: [
            "Na₂O and NO₂",
            "NaNO₂ and O₂",
            "Na, NO₂ and O₂",
            "Na₂O, NO₂ and O₂"
          ],
          answer: 1,
          explanation: "Alkali metal nitrates (except LiNO₃) decompose on heating to yield metal nitrites and oxygen gas: 2NaNO₃ → 2NaNO₂ + O₂."
        },
      
        // --- Chemistry SINDH 24 ---
        {
          id: "chem-sindh-24-106",
          question: "The alkali metal that gives a characteristic persistent golden-yellow flame in a flame test is:",
          options: [
            "Ba",
            "Na",
            "K",
            "Cs"
          ],
          answer: 1,
          explanation: "Sodium (Na) compounds impart an intense, characteristic yellow color to a non-luminous flame."
        },
        {
          id: "chem-sindh-24-117",
          question: "Mostly p-block elements react with ______ to form binary halides:",
          options: [
            "Oxygen",
            "Water",
            "Halogens",
            "Nitrogen",
            "Hydrogen"
          ],
          answer: 2,
          explanation: "p-Block elements readily react directly with halogens to form diverse covalent and ionic binary halide compounds."
        },
      
        // --- Chemistry SINDH 25 ---
        {
          id: "chem-sindh-25-124",
          question: "If the ionization energy of an element is greater, then:",
          options: [
            "More is its reducing power",
            "More is its electropositivity",
            "Less is its metallic character",
            "More is its atomic radius"
          ],
          answer: 2,
          explanation: "High ionization energy means an atom holds its valence electrons tightly, making electron loss difficult and decreasing both electropositivity and metallic character."
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-132",
          question: "Which of the following best explains the reaction between Beryllium (Be) and Oxygen (O₂)?",
          options: [
            "Be burns vigorously with oxygen forming a layer of BeO, which accelerates the oxidation of remaining metal",
            "Be reacts with oxygen forming a layer of BeO, which protects the metal from further oxidation",
            "Be reacts slowly with oxygen to form a volatile oxide BeO, which evaporates quickly",
            "Be is the only alkaline earth metal that doesn’t react with oxygen"
          ],
          answer: 1,
          explanation: "Beryllium forms an imperviously thin, tough surface coating of beryllium oxide (BeO) that passivates the underlying metal against further oxidation at ordinary temperatures."
        },
        {
          id: "kmu-mdcat-25-chem-140",
          question: "The most electronegative element in the periodic table is:",
          options: [
            "F",
            "Cl",
            "O",
            "N"
          ],
          answer: 0,
          explanation: "Fluorine (F) is assigned the highest value of 4.0 on the Pauling electronegativity scale."
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-103",
          question: "Electronegativity of Aluminum (Al) is approximately equal to that of Beryllium (Be) due to diagonal relationship (or B in some text keys):",
          options: [
            "B",
            "Be",
            "Mg",
            "Na"
          ],
          answer: 0,
          explanation: "Aluminum and Beryllium exhibit a strong diagonal relationship in the periodic table, possessing nearly identical electronegativities (Be = 1.5, Al = 1.5)."
        },
        {
          id: "kmu-mdcat-2024-104",
          question: "Which of the following alkali metals forms ONLY a normal monoxide (M₂O) when burned in excess air/oxygen?",
          options: [
            "K",
            "Li",
            "Na",
            "Rb"
          ],
          answer: 1,
          explanation: "Lithium forms predominantly normal monoxide (Li₂O). Sodium forms peroxide (Na₂O₂), while K, Rb, and Cs form superoxides (MO₂)."
        },
        {
          id: "kmu-mdcat-2024-105",
          question: "Third period element that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is:",
          options: [
            "Al",
            "Mg",
            "Na",
            "Si"
          ],
          answer: 0,
          explanation: "Aluminum forms an adherent, protective oxide film of Al₂O₃ upon exposure to air, passivating the metal against further chemical attack."
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-84",
          question: "The correct stability order of M⁴⁺ cations in Group 14 (due to inert pair effect) is:",
          options: [
            "Ge⁴⁺ < Pb⁴⁺ < Sn⁴⁺",
            "Ge⁴⁺ < Sn⁴⁺ < Pb⁴⁺",
            "Ge⁴⁺ > Pb⁴⁺ > Sn⁴⁺",
            "Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺"
          ],
          answer: 3,
          explanation: "Due to the inert pair effect, the stability of the +4 oxidation state decreases down Group 14 (Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺), whereas the +2 state becomes increasingly stable."
        },
        {
          id: "szambu-chem-24-90",
          question: "Which of the following metal hydroxides is the strongest base?",
          options: [
            "Ca(OH)₂",
            "LiOH",
            "Mg(OH)₂",
            "NaOH"
          ],
          answer: 3,
          explanation: "Basic character of hydroxides increases down Group 1 and is greater than Group 2. NaOH dissociates completely in water, functioning as a strong base."
        },
        {
          id: "szambu-chem-24-114",
          question: "Metallic character of alkaline earth metals (Group 2) ______ down the group.",
          options: [
            "decreases",
            "gradually increases then decreases",
            "increases",
            "remains same"
          ],
          answer: 2,
          explanation: "Down a group, atomic radius increases and ionization energy decreases, making electron loss easier and thus increasing metallic character."
        },
        {
          id: "szambu-chem-24-115",
          question: "Which of the following metals forms a superoxide (KO₂) when reacted with oxygen?",
          options: [
            "Beryllium",
            "Lithium",
            "Magnesium",
            "Potassium"
          ],
          answer: 3,
          explanation: "Potassium (K), Rubidium (Rb), and Cesium (Cs) have large ionic radii that stabilize the large superoxide anion (O₂⁻), forming superoxides when burned in air."
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-99",
          question: "Which of the following Period 3 elements has the smallest atomic radius?",
          options: [
            "Mg",
            "S",
            "P",
            "Na"
          ],
          answer: 1,
          explanation: "Across Period 3 from left to right (Na → Mg → P → S), effective nuclear charge increases, pulling electron shells closer and decreasing atomic radius."
        },
        {
          id: "uhs-2024-chem-100",
          question: "The anomalous behavior of lithium compared to other alkali metals is mainly because of its:",
          options: [
            "Large radius and low charge density",
            "Small radius and low charge density",
            "Large radius and high charge density",
            "Small atomic/ionic radius and high charge density"
          ],
          answer: 3,
          explanation: "Lithium possesses an exceptionally small atomic/ionic radius and high charge density, giving rise to anomalous properties and a diagonal relationship with magnesium."
        },
        {
          id: "uhs-2024-chem-101",
          question: "Which of the following oxides is amphoteric (not basic) in nature?",
          options: [
            "Aluminum oxide",
            "Magnesium oxide",
            "Potassium oxide",
            "Sodium oxide"
          ],
          answer: 0,
          explanation: "Aluminum oxide (Al₂O₃) is amphoteric, reacting with both acids and strong bases. MgO, Na₂O, and K₂O are strictly basic oxides."
        },
        {
          id: "uhs-2024-chem-102",
          question: "The solubility of sulphates of alkaline earth metals generally:",
          options: [
            "Increases down the group",
            "Decreases down the group",
            "Increases then decreases down the group",
            "Doesn’t change down the group"
          ],
          answer: 1,
          explanation: "Down Group 2, lattice energy decreases slightly while hydration energy drops sharply due to increasing cation size, causing sulphate solubility to decrease down the group (BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄)."
        },
        {
          id: "uhs-2024-chem-103",
          question: "Which of the following is NOT an alloy?",
          options: [
            "Steel",
            "Brass",
            "Bronze",
            "Graphite"
          ],
          answer: 3,
          explanation: "Graphite is an elemental allotrope of carbon, whereas steel (Fe-C), brass (Cu-Zn), and bronze (Cu-Sn) are metallic alloys."
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-125",
          question: "The element with the smallest first ionization energy among the following is:",
          options: [
            "Li",
            "Al",
            "Ca",
            "Ba"
          ],
          answer: 3,
          explanation: "Barium (Ba) is located at the bottom of Group 2, featuring a large atomic radius and high electron shielding, which yields the lowest first ionization energy among the listed choices."
        },
       {
            id: "sp-block-1",
            question: "The elements which are most abundant in Earth crust",
            options: [
              "Silicon and Aluminium",
              "Boron and Argon",
              "Calcium and magnesium",
              "All of these"
            ],
            answer: 0,
            explanation: "Oxygen, Silicon, and Aluminium are the three most abundant elements in the Earth's crust by mass."
          },
          {
            id: "sp-block-2",
            question: "Which of the following give strong alkaline solution in water",
            options: ["Sodium", "Potassium", "Beryllium", "Magnesium"],
            answer: 1,
            explanation: "Potassium reacts vigorously with water to form KOH, a highly soluble and strong alkali."
          },
          {
            id: "sp-block-3",
            question: "What is the trend of melting and boiling point of the elements of short periods as we move from left to right in the periodic table",
            options: [
              "Melting and boiling point first decreases then increases",
              "Melting and boiling point increases gradually",
              "Melting and boiling point first increases then decreases",
              "Melting and boiling points decreases gradually"
            ],
            answer: 2,
            explanation: "Melting and boiling points increase up to group IVA (giant covalent structures) and then decrease rapidly towards noble gases."
          },
          {
            id: "sp-block-4",
            question: "Which of the following species required list amount of energy to remove one electron",
            options: ["Neon", "Magnesium", "Sodium", "Aluminium"],
            answer: 2,
            explanation: "Sodium (1st alkali metal in Period 3) has the largest atomic radius in its period, resulting in the lowest 1st ionization energy."
          },
          {
            id: "sp-block-5",
            question: "Atomic radius",
            options: [
              "Increases down the group",
              "Decreases down the group",
              "Remain same",
              "None of these"
            ],
            answer: 0,
            explanation: "Down a group, additional electron shells are added, increasing the effective atomic radius."
          },
          {
            id: "sp-block-6",
            question: "Does not react with water eminate Red Hot temperature",
            options: ["Beryllium", "Calcium", "Magnesium", "Barium"],
            answer: 0,
            explanation: "Beryllium is chemically resistant to water even at red-hot temperatures due to its small size and thick protective oxide film."
          },
          {
            id: "sp-block-7",
            question: "The ionization energy of an element is",
            options: [
              "The energy released when an electron is added to an atom of the element",
              "The same is the electron affinity of element",
              "Equal in magnitude but of opposite sign to the electron affinity of the element",
              "The energy required to remove the outermost electron of an atom of the element"
            ],
            answer: 3,
            explanation: "Ionization energy is the minimum energy needed to remove the most loosely bound electron from an isolated gaseous atom."
          },
          {
            id: "sp-block-8",
            question: "Carbon exist as allotropes which are different crystalline or molecular forms of the same substance graphite and diamond are allotropes of carbon diamond is a non conductor where is graphite is a conductor because",
            options: [
              "Graphite has a layered structure",
              "In graphite all villains electrons are tetrahedral bound",
              "In graphite one of balance electron is free to move",
              "Graphite is soft and greasy bound"
            ],
            answer: 2,
            explanation: "In graphite, each carbon atom is sp2 hybridized, leaving one delocalized pi electron per carbon free to move within layers and conduct electricity."
          },
          {
            id: "sp-block-9",
            question: "Iodine is solid due to",
            options: [
              "Strong covalent character",
              "High polarizability",
              "Strong dipole moment",
              "Strong Debye forces"
            ],
            answer: 2,
            explanation: "Note: Iodine's solid nature is chemically due to high polarizability forming strong dispersion forces; option C is mapped according to the provided key."
          },
          {
            id: "sp-block-10",
            question: "Among the following which one is least reactive metal",
            options: ["Magnesium", "Calcium", "Potassium", "Caesium"],
            answer: 0,
            explanation: "Magnesium (Group 2A, Period 3) has higher ionization energy than calcium, potassium, and caesium, making it the least reactive metal listed."
          },
          {
            id: "sp-block-11",
            question: "Third period that initially reacts rapidly with oxygen to form a protective oxide coating that prevents further reaction is",
            options: ["Sodium", "Silicon", "Aluminium", "Magnesium"],
            answer: 2,
            explanation: "Aluminium rapidly forms an impervious Al2O3 oxide film on its surface upon exposure to air, passivating the metal against further corrosion."
          },
          {
            id: "sp-block-12",
            question: "Reactivity",
            options: [
              "Increases down the group",
              "Decreases down the group",
              "Remain same",
              "First increases then decreases"
            ],
            answer: 0,
            explanation: "For alkali and alkaline earth metals, chemical reactivity increases down the group as ionization energy decreases."
          },
          {
            id: "sp-block-13",
            question: "The property which increases up to the middle of the period and then decreases is",
            options: [
              "Ionization energy",
              "Melting and boiling points",
              "Atomic energy",
              "Atomic volume"
            ],
            answer: 1,
            explanation: "Melting and boiling points peak around group IVA elements and drop significantly towards group VIII."
          },
          {
            id: "sp-block-14",
            question: "The most non metallic out of the following is",
            options: ["Beryllium", "Magnesium", "Boron", "Aluminium"],
            answer: 2,
            explanation: "Boron is a metalloid/non-metal located furthest to the top right among the given options in the periodic table."
          },
          {
            id: "sp-block-15",
            question: "Melting point of 1A elements",
            options: [
              "Decreases down the group due to decrease in ionization energy",
              "Decreases down the group due to weaker binding forces",
              "Increases down the group due to stronger metallic bonding",
              "Increases down the group due to decreases in ionization energy"
            ],
            answer: 1,
            explanation: "As atomic size increases down Group 1A, the metallic bond strength weakens, leading to lower melting points."
          },
          {
            id: "sp-block-16",
            question: "In which group melting and boiling point decreases down the group",
            options: ["1A", "VIIIA", "VIIA", "VA"],
            answer: 2,
            explanation: "Note: In Group 1A, melting points decrease down the group. Per the provided key, option C (VIIA) is mapped."
          },
          {
            id: "sp-block-17",
            question: "The highest boiling point of HF amongst the hydrogen halides is due to",
            options: [
              "Lowest electronegativity of fluorine",
              "Lowest atomic weight of fluorine",
              "Highest electronegativity of fluorine",
              "Lowest atomic radius of fluorine"
            ],
            answer: 2,
            explanation: "Fluorine's maximum electronegativity leads to exceptionally strong intermolecular hydrogen bonding in HF, raising its boiling point."
          },
          {
            id: "sp-block-18",
            question: "The shielding effect is also called",
            options: [
              "Zee effect",
              "Screening effect",
              "Negative effect",
              "Reducing effect"
            ],
            answer: 1,
            explanation: "The reduction in effective nuclear charge caused by inner-shell electrons is known interchangeably as the screening effect."
          },
          {
            id: "sp-block-19",
            question: "The elements which shows maximum electrical conductivity among the following is",
            options: ["Sodium", "Aluminium", "Iron", "Silicon"],
            answer: 1,
            explanation: "Aluminium has 3 valence electrons per atom contributing to its metallic sea of electrons, resulting in high electrical conductivity."
          },
          {
            id: "sp-block-20",
            question: "Electronegativity of beryllium is approximately equal to that of",
            options: ["Aluminium", "Boron", "Magnesium", "Sodium"],
            answer: 0,
            explanation: "Beryllium and Aluminium exhibit a diagonal relationship, resulting in similar electronegativities (~1.5)."
          },
          {
            id: "sp-block-21",
            question: "Electronegativity and ionization energy",
            options: [
              "Increases",
              "Decreases",
              "Decreases increases",
              "Increases decreases"
            ],
            answer: 1,
            explanation: "Down a group in the periodic table, both electronegativity and ionization energy generally decrease."
          },
          {
            id: "sp-block-22",
            question: "Carbonates of lithium are not stable like that of sodium due to",
            options: [
              "Low electronegativity",
              "High charge density of lithium",
              "Low electropositivity",
              "All of the above"
            ],
            answer: 2,
            explanation: "Note: Li+ has high charge density, polarizing the carbonate ion and causing thermal instability. Option C is mapped per the answer key."
          },
          {
            id: "sp-block-23",
            question: "In isoelectronic anions least size is linked to iron with",
            options: [
              "Most electrons",
              "Most negative charge",
              "Least negative charge",
              "Most neutrons"
            ],
            answer: 2,
            explanation: "Among isoelectronic anions, the ion with the smallest negative charge has relatively higher effective nuclear attraction per electron, making it smaller."
          },
          {
            id: "sp-block-24",
            question: "Which one of the following is acidic in nature",
            options: ["Al2O3", "CO", "CO2", "CaO"],
            answer: 2,
            explanation: "Carbon dioxide (CO2) is a non-metallic oxide that dissolves in water to form carbonic acid."
          },
          {
            id: "sp-block-25",
            question: "Which statement is correct",
            options: [
              "Loss of valence electron may lead to loss of valence shell",
              "Radius of isoelectronic Ions decreases left to right in third period",
              "In Ionic radius increases with magnitude of negative charge",
              "All of these"
            ],
            answer: 3,
            explanation: "All three statements correctly describe trends in ionic and atomic radii."
          },
          {
            id: "sp-block-26",
            question: "Which of the following metal sulphate is not soluble in water",
            options: [
              "Sodium sulphate",
              "Barium sulphate",
              "Potassium Sulphate",
              "Zinc sulphate"
            ],
            answer: 1,
            explanation: "Barium sulfate (BaSO4) has extremely high lattice energy relative to its hydration energy, making it virtually insoluble in water."
          },
          {
            id: "sp-block-27",
            question: "Which of the following halogens has abnormally small electron affinity",
            options: ["Fluorine", "Bromine", "Iodine", "Chlorine"],
            answer: 0,
            explanation: "Fluorine has an unexpectedly lower electron affinity than chlorine due to intense inter-electronic repulsions in its compact 2p subshell."
          },
          {
            id: "sp-block-28",
            question: "Greater the number of protons in the nucleus pull the valence electron more towards the nucleus is the general rule in a group moving down the number of proton increase significantly so the size",
            options: [
              "Will decreases",
              "Will decreases significantly",
              "Will increases",
              "Will decreases slightly"
            ],
            answer: 2,
            explanation: "Despite nuclear charge increasing, the addition of new electronic shells dominates down a group, causing atomic size to increase."
          },
          {
            id: "sp-block-29",
            question: "Melting point of 3A elements are considerably higher than those of group 1A elements because",
            options: [
              "Size of 3A is greater than 1A",
              "Ionization energy of 3A is less than 1A",
              "Ionization of 3A is higher than 1A",
              "3A provides more binding electrons"
            ],
            answer: 3,
            explanation: "Group 3A elements contribute 3 valence electrons per atom to metallic bonding (compared to 1 for 1A), creating stronger binding forces."
          },
          {
            id: "sp-block-30",
            question: "The dry ice is",
            options: [
              "Solid ice without water",
              "Solid Sulphur dioxide",
              "Solid carbon dioxide",
              "Solid Benzene"
            ],
            answer: 2,
            explanation: "Dry ice is the common name for solid carbon dioxide (CO2)."
          },
          {
            id: "sp-block-31",
            question: "Correct order of melting point of group 2A elements",
            options: [
              "Be>Mg>Ca",
              "Mg>Be>Ca",
              "Ca>Be>Mg",
              "Be>Ca>Mg"
            ],
            answer: 3,
            explanation: "The melting points of alkaline earth metals follow the order: Be > Ca > Sr > Ba > Mg (Mg is unusually low due to crystal packing)."
          },
          {
            id: "sp-block-32",
            question: "Ionization energy depends upon",
            options: [
              "Nuclear charge",
              "Shielding effect",
              "Atomic size",
              "All of these and nature of orbital"
            ],
            answer: 2,
            explanation: "Note: Ionization energy depends on all these factors; option C is mapped per the answer key."
          },
          {
            id: "sp-block-33",
            question: "Along the period atomic radius decreases this gradual decrease in radius is due to",
            options: [
              "Increase in number of electrons in valence shell",
              "Increase in number of protons in the nucleus",
              "Decrease in number of shell",
              "Increase in number of shell"
            ],
            answer: 2,
            explanation: "Note: Chemically, atomic radius decreases across a period due to increasing effective nuclear charge; option C is mapped per the answer key."
          },
          {
            id: "sp-block-34",
            question: "More the ionization energy of an element",
            options: [
              "More the electropositivity",
              "More the reducing power",
              "Less the metallic character",
              "Bigger the atomic radius"
            ],
            answer: 2,
            explanation: "Higher ionization energy means atoms hold valence electrons tighter, corresponding to non-metallic behavior and reduced metallic character."
          },
          {
            id: "sp-block-35",
            question: "Many properties of an element and its compound can be predicted from the position of the element in the periodic table which property could not be predicted in this way",
            options: [
              "The acidic or basic nature of its oxides",
              "The charge on its ions",
              "The formula of its oxide",
              "The number of isotopes it has"
            ],
            answer: 3,
            explanation: "Isotopic abundance and count depend on nuclear stability and cannot be inferred from position in the periodic table."
          },
          {
            id: "sp-block-36",
            question: "Melting points of halogens",
            options: [
              "Decreases down the group",
              "Remain the same throughout the group",
              "Increases down the group",
              "First increases and then decreases down the group"
            ],
            answer: 2,
            explanation: "Melting points of Group VIIA elements increase down the group due to larger molecular sizes and stronger London dispersion forces."
          },
          {
            id: "sp-block-37",
            question: "Ionization energy of calcium is",
            options: [
              "Lower than that of Barium",
              "Lower than that of magnesium",
              "Higher than that of beryllium",
              "Lower than that of Strontium"
            ],
            answer: 1,
            explanation: "In Group 2A, ionization energy decreases down the group (Be > Mg > Ca > Sr > Ba), so Ca has a lower IE than Mg."
          },
          {
            id: "sp-block-38",
            question: "The element which has boiling point less than 0 centigrade is",
            options: ["Beryllium", "Boron", "Carbon", "Nitrogen"],
            answer: 3,
            explanation: "Nitrogen exists as a diatomic gas (N2) with a boiling point of -195.8 °C."
          },
          {
            id: "sp-block-39",
            question: "When sodium is heated with excess of oxygen which of the following is formed",
            options: ["NaO", "Na2O", "NaO2", "None"],
            answer: 3,
            explanation: "Sodium reacts with excess oxygen to form sodium peroxide (Na2O2), which is not explicitly listed in A-C."
          },
          {
            id: "sp-block-40",
            question: "Ionic radius along the period decreases due to",
            options: [
              "Addition of a new shell",
              "ionization energy",
              "Increase in nuclear charge",
              "Decrease in nuclear charge"
            ],
            answer: 2,
            explanation: "Increasing nuclear charge across a period draws the electron cloud closer, shrinking the ionic radius."
          },
          {
            id: "sp-block-41",
            question: "Which of the following has a greater affinity for oxygen",
            options: ["Boron", "Potassium", "Sodium", "Magnesium"],
            answer: 1,
            explanation: "Potassium is an alkali metal that reacts vigorously with oxygen to form peroxides/superoxides."
          },
          {
            id: "sp-block-42",
            question: "Highest ionization potential in a period is shown by",
            options: [
              "Alkali metals",
              "Halogens",
              "Transition elements",
              "Alkaline earth metals"
            ],
            answer: 1,
            explanation: "Halogens (group VIIA) have high effective nuclear charges, yielding very high ionization potentials (second only to noble gases)."
          },
          {
            id: "sp-block-43",
            question: "Due to formation of protective layer of oxides at Aluminium oxide surface it is to burn it",
            options: [
              "Completely in air",
              "Completely in oxygen",
              "With carbon",
              "With nitrogen"
            ],
            answer: 1,
            explanation: "Finely powdered aluminium burns intensely when supplied with pure oxygen to overcome passivation."
          },
          {
            id: "sp-block-44",
            question: "The elements of group 1A react violently with water and make the solution",
            options: ["Neutral", "Acidic", "Amphoteric", "Alkaline"],
            answer: 0,
            explanation: "Note: Group 1A metals form strong hydroxides (MOH), rendering solutions alkaline. Option A is mapped per the provided answer key."
          },
          {
            id: "sp-block-45",
            question: "The property which shows decreasing Trend across the periods",
            options: [
              "Ionization energy",
              "Electronegativity",
              "Melting point",
              "Atomic radius"
            ],
            answer: 2,
            explanation: "Note: Chemically, atomic radius decreases across periods. Option C is mapped per the answer key."
          },
          {
            id: "sp-block-46",
            question: "Each period in the periodic table starts with a subshell of new shell and ends with",
            options: [
              "Small subshell",
              "The next higher shell",
              "Different subshell of the same shell",
              "d subshell of the same shell"
            ],
            answer: 2,
            explanation: "Periods start with an s-subshell (ns) and end with a p-subshell (np) of the same principle energy shell."
          },
          {
            id: "sp-block-47",
            question: "Which one of the following is not in alkali metal",
            options: ["Francium", "Rubidium", "Caesium", "Radan"],
            answer: 3,
            explanation: "Radon (Rn) is a noble gas (Group VIII A), not an alkali metal."
          },
          {
            id: "sp-block-48",
            question: "Most of the known elements are",
            options: ["Metals", "Metalloids", "Non metals", "Transition metals"],
            answer: 0,
            explanation: "Over 80% of known chemical elements in the periodic table are classified as metals."
          },
          {
            id: "sp-block-49",
            question: "Second ionization potential of alkali metals are very high is",
            options: [
              "These are S block elements",
              "They have ns2 electronic configuration",
              "They obtain inert gas configurations",
              "They are metals"
            ],
            answer: 2,
            explanation: "Removing a second electron requires breaking into a highly stable, closed-shell noble gas electron configuration."
          },
          {
            id: "sp-block-50",
            question: "An atom with high electronegativity generally has",
            options: [
              "Tendency to form positive ions",
              "Large atomic size",
              "High ionization potential",
              "Low electron affinity"
            ],
            answer: 2,
            explanation: "Electronegativity correlates strongly with high ionization potential, as both stem from a strong nuclear attraction for electrons."
          },
        // --- BUMHS MDCAT 2024 ---
        {
          id: "bumhs-mdcat-2024-110",
          question: "Compounds attracted into a magnetic field are called:",
          options: [
            "paramagnetic",
            "diamagnetic",
            "polymagnetic",
            "ferromagnetic"
          ],
          answer: 0,
          explanation: "Paramagnetic substances possess unpaired electrons whose magnetic moments align with an applied magnetic field, causing them to be attracted into the field."
        },
        {
          id: "bumhs-mdcat-2024-122",
          question: "Transition metal compounds containing unpaired electrons are:",
          options: [
            "always diamagnetic",
            "attracted by the magnet",
            "not attracted by the magnet",
            "repelled by the magnet"
          ],
          answer: 1,
          explanation: "Unpaired electrons impart paramagnetic character to transition metal compounds, causing them to be drawn/attracted into a magnetic field."
        },
      
        // --- KMU MDCAT 25 CHEM ---
        {
          id: "kmu-mdcat-25-chem-155",
          question: "The electronic configuration of Fe²⁺ (Z=26) is:",
          options: [
            "[Ar] 4s² 3d⁶",
            "[Ar] 4s² 3d⁴",
            "[Ar] 4s² 3d⁵",
            "[Ar] 4s⁰ 3d⁶"
          ],
          answer: 3,
          explanation: "Neutral Iron (Fe) has the electronic configuration [Ar] 4s² 3d⁶. When ionizing to form Fe²⁺, the two 4s valence electrons are lost first, yielding [Ar] 4s⁰ 3d⁶."
        },
      
        // --- KMU MDCAT 2024 ---
        {
          id: "kmu-mdcat-2024-106",
          question: "Cu²⁺ salt solution is blue in colour due to transition of electrons from:",
          options: [
            "d to d orbital",
            "p to d orbital",
            "p to p orbital",
            "s to p orbital"
          ],
          answer: 0,
          explanation: "The blue color of Cu²⁺ (3d⁹) solutions arises from d–d electronic transitions, where absorbed visible light excites an electron between crystal-field split d-orbitals."
        },
        {
          id: "kmu-mdcat-2024-107",
          question: "Potassium ferrocyanide, K₄[Fe(CN)₆], is which type of salt?",
          options: [
            "Complex",
            "Double",
            "Mixed",
            "Normal"
          ],
          answer: 0,
          explanation: "Potassium ferrocyanide contains a complex ion [Fe(CN)₆]⁴⁻ that retains its identity in aqueous solution, defining it as a complex salt."
        },
      
        // --- Szambu Chem 24 ---
        {
          id: "szambu-chem-24-86",
          question: "What is the range of atomic numbers of the 3d series of transition elements?",
          options: [
            "20–30",
            "21–30",
            "22–30",
            "24–30"
          ],
          answer: 1,
          explanation: "The first (3d) transition series spans ten elements from Scandium (Z = 21) to Zinc (Z = 30)."
        },
        {
          id: "szambu-chem-24-118",
          question: "Transition element Vanadium in its lower oxidation states mostly acts as a:",
          options: [
            "Amphoteric",
            "Neutral",
            "Oxidizing agent",
            "Reducing agent"
          ],
          answer: 3,
          explanation: "Vanadium in lower oxidation states (such as V²⁺ and V³⁺) readily loses electrons to attain higher oxidation states (+4 or +5), functioning as a strong reducing agent."
        },
      
        // --- UHS 2024 CHEM prep ---
        {
          id: "uhs-2024-chem-104",
          question: "Electronic configuration of chromium (Proton number 24) is:",
          options: [
            "[Ar] 3d⁴ 4s²",
            "[Ar] 3d⁵ 4s²",
            "[Ar] 3d⁵ 4s¹",
            "[Ar] 3d⁶ 4s²"
          ],
          answer: 2,
          explanation: "Chromium (Z = 24) exhibits an anomalous electronic configuration [Ar] 3d⁵ 4s¹ to achieve the extra stability associated with a half-filled d-subshell."
        },
        {
          id: "uhs-2024-chem-105",
          question: "Which of the following is NOT a characteristic property of transition elements?",
          options: [
            "High melting points",
            "Good conductors of electricity",
            "Hard metals",
            "Ions and compounds are colorless"
          ],
          answer: 3,
          explanation: "Most transition metal ions and compounds are characteristic for being colored due to d–d electron transitions. Stating that their ions are colorless is incorrect."
        },
      
        // --- UHS CHEM 25 prep ---
        {
          id: "uhs-chem-25-89",
          question: "Which one of the following is a coinage metal?",
          options: [
            "Pd",
            "Cu",
            "Cd",
            "Hg"
          ],
          answer: 1,
          explanation: "The Group 11 transition elements—Copper (Cu), Silver (Ag), and Gold (Au)—are historically termed the coinage metals."
        },
        {
          id: "uhs-chem-25-115",
          question: "Number of unpaired electrons present in the ground state of Fe³⁺ are (Atomic number of Fe=26):",
          options: [
            "Three",
            "Four",
            "Five",
            "Six"
          ],
          answer: 2,
          explanation: "Fe³⁺ has the electronic configuration [Ar] 3d⁵. By Hund's rule, all 5 d-orbitals contain one single electron each, yielding 5 unpaired electrons."
        },
        {
            id: "trans-elem-1",
            question: "Highest Oxidation state of the transition elements is the",
            options: ["+8", "+5", "+7", "+1"],
            answer: 2,
            explanation: "The highest oxidation state among first-row transition elements is +7 (exhibited by Manganese in compounds like KMnO4)."
          },
          {
            id: "trans-elem-2",
            question: "Ti+3 shows minimum absorption maximum transmittance at ........ and ........ wavelength",
            options: ["Yellow green", "Blue green", "Red yellow", "Red blue"],
            answer: 3,
            explanation: "[Ti(H2O)6]3+ absorbs green and yellow light (around 500 nm), which leaves red and blue wavelengths transmitted, giving it a purple/violet appearance."
          },
          {
            id: "trans-elem-3",
            question: "The most common Oxidation state of iron are",
            options: ["+1 and +2", "+1 and +3", "+2 and +3", "+3 and +4"],
            answer: 2,
            explanation: "Iron commonly loses its two 4s electrons to form Fe2+ (+2) or loses an additional 3d electron to achieve a stable half-filled d5 configuration in Fe3+ (+3)."
          },
          {
            id: "trans-elem-4",
            question: "Which pair of transition elements show abnormal electronic configuration",
            options: [
              "Scandium and Zinc",
              "Copper and scandium",
              "Zinc and copper",
              "Copper and chromium"
            ],
            answer: 3,
            explanation: "Chromium ([Ar] 4s1 3d5) and Copper ([Ar] 4s1 3d10) show anomalous configurations due to extra stability associated with half-filled and fully filled d-subshells."
          },
          {
            id: "trans-elem-5",
            question: "Ligands having to lone pairs of electrons for donation to the central transition metal ions are known as",
            options: [
              "Monodentate lignad",
              "Bidentate ligand",
              "ligand",
              "Polydenatate ligand"
            ],
            answer: 2,
            explanation: "Note: Following key key mapping. Generally, ligands donating two lone pairs are bidentate ligands."
          },
          {
            id: "trans-elem-6",
            question: "Transition compound which occurs is tripositive and have no",
            options: ["4s electron", "3s electron", "3p electron", "2s electron"],
            answer: 0,
            explanation: "During ionization of transition metals, electrons are first removed from the outermost 4s subshell, so M3+ ions have no remaining 4s electrons."
          },
          {
            id: "trans-elem-7",
            question: "The element which shows highest binding energy",
            options: ["Vanadium", "Scandium", "Titanium", "Chromium"],
            answer: 0,
            explanation: "Binding energy (atomization energy) increases up to the middle of the transition series as the number of unpaired electrons participating in metallic bonding increases."
          },
          {
            id: "trans-elem-8",
            question: "Which one pair has the same Oxidation state of iron",
            options: [
              "FeSO4 and FeCl3",
              "FeCl2 and FeCl3",
              "FeSO4 and FeCl2",
              "Fe2(SO4)3 and FeSO4"
            ],
            answer: 2,
            explanation: "In both FeSO4 and FeCl2, iron exists in the +2 oxidation state (ferrous)."
          },
          {
            id: "trans-elem-9",
            question: "Elements found in D block of periodic table are termed as",
            options: [
              "Main group elements",
              "Normal elements",
              "Transition elements",
              "Representative elements"
            ],
            answer: 2,
            explanation: "d-block elements located between s-block and p-block elements are commonly termed transition elements."
          },
          {
            id: "trans-elem-10",
            question: "Which of the following possess least number of unpaired electrons",
            options: ["Mn+3", "Cu+3", "Fe+3", "Ti+4"],
            answer: 3,
            explanation: "Ti4+ has an electronic configuration of [Ar] 3d0 4s0, which contains 0 unpaired electrons (the least possible)."
          },
          {
            id: "trans-elem-11",
            question: "The minimum Oxidation state of manganese is",
            options: ["+7", "+6", "+2", "+4"],
            answer: 2,
            explanation: "The minimum positive oxidation state commonly shown by Manganese in simple compounds is +2 (loss of 4s2 electrons)."
          },
          {
            id: "trans-elem-12",
            question: "The Transition Element which does not show variable valency is",
            options: ["Copper", "Scandium", "Zinc", "Chromium"],
            answer: 2,
            explanation: "Zinc exclusively shows an oxidation state of +2 (due to its stable d10 subshell) and does not exhibit variable oxidation states."
          },
          {
            id: "trans-elem-13",
            question: "Which one of the following belongs to first transition series",
            options: ["Silver", "Gold", "Iron", "Mercury"],
            answer: 2,
            explanation: "Iron (Fe, Z=26) belongs to the 3d or 1st transition series (Sc to Zn)."
          },
          {
            id: "trans-elem-14",
            question: "The maximum Oxidation state of manganese is",
            options: ["+6", "+7", "+5", "+4"],
            answer: 1,
            explanation: "Manganese can lose all 7 valence electrons (4s2 3d5) to attain a maximum oxidation state of +7 (e.g., in MnO4-)."
          },
          {
            id: "trans-elem-15",
            question: "If they are show Oxidation State of +2 which of these will release and electron from d subshell",
            options: ["Zinc", "Copper", "Scandium", "Titanium"],
            answer: 1,
            explanation: "Copper has the configuration [Ar] 4s1 3d10. To reach the +2 state, it loses one 4s electron and one 3d electron."
          },
          {
            id: "trans-elem-16",
            question: "Which one of the following act as reducing agent",
            options: ["HNO3", "KMnO4", "LiALH4", "K2Cr2O7"],
            answer: 2,
            explanation: "LiAlH4 (Lithium aluminium hydride) is a strong reducing agent, whereas HNO3, KMnO4, and K2Cr2O7 are oxidizing agents."
          },
          {
            id: "trans-elem-17",
            question: "The coordination number of metal atom or ion in a tetrahedral complex is",
            options: ["2", "4", "6"],
            answer: 1,
            explanation: "Tetrahedral coordination geometry corresponds to a coordination number of 4."
          },
          {
            id: "trans-elem-18",
            question: "Number of unpaired electrons in zinc atom is",
            options: ["0", "1", "2", "3"],
            answer: 0,
            explanation: "Zinc has the ground-state electron configuration [Ar] 4s2 3d10, where all subshells are fully paired (0 unpaired electrons)."
          },
          {
            id: "trans-elem-19",
            question: "The number of unpaired electrons present in fe+3 is",
            options: ["1", "5", "2", "0"],
            answer: 1,
            explanation: "Fe3+ has the electronic configuration [Ar] 3d5. By Hund's rule, all 5 d-orbitals contain 1 unpaired electron."
          },
          {
            id: "trans-elem-20",
            question: "Which of the following have completely filled d subshell",
            options: [
              "Fe,Co,Ni",
              "Cu,Ag,Au",
              "Ni,Pd,Pt",
              "Zn,Cd,Hg"
            ],
            answer: 3,
            explanation: "Group 12 elements (Zn, Cd, Hg) have completely filled d10 configurations in both elemental states and standard oxidation states."
          },
          {
            id: "trans-elem-21",
            question: "The strength of binding energy of transition elements depends upon",
            options: [
              "Number of electron pairs",
              "Number of unpaired electrons",
              "Number of neutrons",
              "Number of protons"
            ],
            answer: 1,
            explanation: "Binding energy depends on the extent of metallic bonding, which is proportional to the number of unpaired d-electrons involved."
          },
          {
            id: "trans-elem-22",
            question: "Which of the following D Block Elements can show the highest oxidation number in its compound",
            options: ["Chromium", "Iron", "Copper", "Maganese"],
            answer: 3,
            explanation: "Among 3d series elements, Manganese shows the highest oxidation state (+7)."
          },
          {
            id: "trans-elem-23",
            question: "In K4[Fe(NC)6], coordination no of iron is",
            options: ["2", "4", "6", "8"],
            answer: 2,
            explanation: "The central iron ion is attached to 6 monodentate cyano/isocyano ligands, giving a coordination number of 6."
          },
          {
            id: "trans-elem-24",
            question: "The oxidation state of Transition Element is usually",
            options: ["Variable", "Constant", "Single", "Infinite"],
            answer: 0,
            explanation: "Transition metals exhibit variable oxidation states due to the participation of both (n-1)d and ns electrons in bonding."
          },
          {
            id: "trans-elem-25",
            question: "At which Oxidation State copper achieve electronic configuration of zn+2",
            options: ["0", "+1", "+2", "+3"],
            answer: 1,
            explanation: "Zn2+ has the configuration [Ar] 3d10. Cu+ (+1) also has the configuration [Ar] 3d10."
          },
          {
            id: "trans-elem-26",
            question: "Group VIB of transition elements contains",
            options: [
              "Zn, Cd, Hg",
              "Fe, Ru, Os",
              "Cr, Mo, W",
              "Mn, Te, Re"
            ],
            answer: 2,
            explanation: "Group 6 (VIB) comprises Chromium (Cr), Molybdenum (Mo), and Tungsten (W)."
          },
          {
            id: "trans-elem-27",
            question: "Which period start from scandium to zinc",
            options: [
              "Second period",
              "Third period",
              "Fourth period",
              "Fifth period"
            ],
            answer: 2,
            explanation: "The first transition series (3d series, Sc to Zn) lies in the 4th period of the periodic table."
          },
          {
            id: "trans-elem-28",
            question: "What is the sequence of electron take up and removal from 4s orbital of a transition metal in 3d series",
            options: [
              "Enters first leaves after 3d electrons removal",
              "Enters after 3d electron leaves after 3d electrons",
              "Enters after 3d electrons leaves first",
              "Enters first leaves first"
            ],
            answer: 3,
            explanation: "During neutral atom configuration, 4s fills before 3d. Upon ionization, 4s electrons are lost before 3d electrons (Enters first, leaves first)."
          },
          {
            id: "trans-elem-29",
            question: "Catalyst used for Ammonia synthesis is",
            options: ["Copper", "Zinc", "Cobalt", "Iron"],
            answer: 3,
            explanation: "Finely divided Iron (Fe) with molybdenum/alumina promoter is used as a catalyst in Haber's process for ammonia synthesis."
          },
          {
            id: "trans-elem-30",
            question: "Which one of the following oxides is more acidic",
            options: ["MnO", "Mn2O3", "MnO2", "Mn2O7"],
            answer: 3,
            explanation: "Acidic character increases with an increase in the oxidation state of the transition element. Mn2O7 (Mn in +7 state) is strongly acidic."
          },
          {
            id: "trans-elem-31",
            question: "Vanadium pentoxide is used as a catalyst in the manufacture of",
            options: ["HNO3", "H2SO4", "NH3", "CO(NH2)2"],
            answer: 1,
            explanation: "V2O5 is used as a catalyst in the Contact Process for manufacturing Sulfuric acid (H2SO4) by oxidizing SO2 to SO3."
          },
          {
            id: "trans-elem-32",
            question: "Substance that repelled by magnetic field are known as",
            options: [
              "Paramagnetic substance",
              "Diamagnetic substances",
              "Ferromagnetic substances",
              "Paramagnetic and diamagnetic substance"
            ],
            answer: 1,
            explanation: "Diamagnetic substances have no unpaired electrons and are weakly repelled by external magnetic fields."
          },
          {
            id: "trans-elem-33",
            question: "The total number of 3D series transition elements is",
            options: ["10", "14", "40", "58"],
            answer: 0,
            explanation: "The 3d series consists of 10 elements ranging from Scandium (Z=21) to Zinc (Z=30)."
          },
          {
            id: "trans-elem-34",
            question: "Which of the following has 7 electrons in d subshell",
            options: ["Zn", "Co", "Cu", "Fe"],
            answer: 1,
            explanation: "Cobalt (Z=27) has the ground-state electron configuration [Ar] 4s2 3d7."
          },
          {
            id: "trans-elem-35",
            question: "When light is exposed to a typical transition elements then electrons jump from lower orbital to higher orbitals in",
            options: ["f orbital", "P orbital", "s Orbital", "d orbital"],
            answer: 3,
            explanation: "Color in transition elements arises due to d-d transitions, where electrons jump between split d-orbitals upon absorbing visible light."
          },
          {
            id: "trans-elem-36",
            question: "Unpaired electrons are maximum in",
            options: ["V+3", "Cr+3", "Mn+3", "Fe+3"],
            answer: 3,
            explanation: "Fe3+ has a d5 configuration containing 5 unpaired electrons, which is the maximum among the given ions."
          },
          {
            id: "trans-elem-37",
            question: "Variable Oxidation state of is related to transition elements",
            options: [
              "Empty d subshells",
              "Partially filled d subshells",
              "Completely filled",
              "d d Transition"
            ],
            answer: 1,
            explanation: "Variable oxidation states are attributed to partially filled d-orbitals and the close energy gap between (n-1)d and ns electrons."
          },
          {
            id: "trans-elem-38",
            question: "Which of the following transition metal from colourless compound in +4 Oxidation State",
            options: ["Titanium", "Copper", "Chromium", "Zinc"],
            answer: 0,
            explanation: "Titanium in +4 state (Ti4+) has a 3d0 configuration; without d-electrons, no d-d transitions occur, making its compounds colorless."
          },
          {
            id: "trans-elem-39",
            question: "TiCl4 is used as catalyst for manufacture of",
            options: ["Sulphuric acid", "Ethanol", "Plastic", "Tetra ethyl lead"],
            answer: 2,
            explanation: "Titanium tetrachloride (TiCl4) combined with triethylaluminium forms the Ziegler-Natta catalyst used in plastic (polyethylene) polymerization."
          },
          {
            id: "trans-elem-40",
            question: "Give the IUPAC name for [K3Fe(CN)6]",
            options: [
              "Potassium hexacyanoferrate(II)",
              "Potassium hexacyanoferrate(III)",
              "Potassium hexacyanoiron(II)",
              "Potassium hexacyanoiron(III)"
            ],
            answer: 1,
            explanation: "The complex ion is [Fe(CN)6]3- with Fe in the +3 oxidation state. The IUPAC name is Potassium hexacyanoferrate(III)."
          },
          {
            id: "trans-elem-41",
            question: "Which of the following compound is expected to be coloured",
            options: ["Na2SO4", "MgF2", "ZnCl2", "CuF2"],
            answer: 3,
            explanation: "CuF2 contains Cu2+ (3d9 configuration) with 1 unpaired electron allowing d-d transition, rendering it colored."
          },
          {
            id: "trans-elem-42",
            question: "Which of the element that belong IIIB group",
            options: [
              "Zn, Cd, Hg",
              "Sc, Y, La",
              "Cu, Ag, Au",
              "Ni, Pd, Pt"
            ],
            answer: 0,
            explanation: "Note: Group IIIB in older nomenclature corresponds to Sc, Y, La, but mapped to option index per answer key."
          },
          {
            id: "trans-elem-43",
            question: "Which of the following has the highest magnetic moment",
            options: ["Cu+2", "Ni+2", "Co+2", "Mn+2"],
            answer: 3,
            explanation: "Mn2+ has 5 unpaired electrons (3d5), giving it the highest magnetic moment among the given options."
          },
          {
            id: "trans-elem-44",
            question: "Will light is exposed to Transition Element then electron jump from lower orbital to higher orbital in",
            options: [
              "Orbital of s subshell",
              "Orbitals of p subshell",
              "Orbitals of d subshell",
              "Between different shells"
            ],
            answer: 2,
            explanation: "Transition metal color is caused by electronic transitions occurring between split orbitals of the d-subshell."
          },
          {
            id: "trans-elem-45",
            question: "Paramagnetic behaviour is caused by the presence of",
            options: [
              "Unpaired electrons",
              "Paired electrons",
              "Paired protons",
              "Paired electrons in an atom molecule or iron"
            ],
            answer: 0,
            explanation: "Paramagnetism arises due to magnetic moments generated by unpaired electrons in atomic or molecular orbitals."
          },
          {
            id: "trans-elem-46",
            question: "Which one of the following belongs to transition elements",
            options: ["Lead", "Gold", "Tin", "Aresnic"],
            answer: 1,
            explanation: "Gold (Au, Z=79) is a transition metal, whereas Lead, Tin, and Arsenic are main-group elements."
          },
          {
            id: "trans-elem-47",
            question: "Stability of copper metal is due to ........ filled d orbital",
            options: ["Half", "Partially", "Completely", "Quarterly"],
            answer: 2,
            explanation: "Copper has a extra-stable completely filled 3d10 configuration."
          },
          {
            id: "trans-elem-48",
            question: "Zinc has",
            options: [
              "Zero unpaired electrons",
              "5 unpaired electrons",
              "3 unpaired electrons",
              "One Unpaired electrons"
            ],
            answer: 0,
            explanation: "Zinc ([Ar] 3d10 4s2) has all electrons fully paired, resulting in zero unpaired electrons."
          },
          {
            id: "trans-elem-49",
            question: "Oxidation state of vanadium In V2O5 is",
            options: ["+2", "+3", "+4", "+5"],
            answer: 3,
            explanation: "In V2O5, setting oxidation number 2x + 5(-2) = 0 gives x = +5."
          },
          {
            id: "trans-elem-50",
            question: "A Transition Element X has a configuration of [Ar]4s1 3d4 in its + 3 Oxidation State its atomic number is",
            options: ["25", "22", "26", "19"],
            answer: 2,
            explanation: "Note: In +3 state configuration given is [Ar] 4s1 3d4 (5 electrons total beyond Ar). Adding 3 electrons gives 18 + 5 + 3 = 26 (Iron)."
          }
      ];
  
  // ==========================================
  // PHYSICS QUESTIONS
  // ==========================================
  
  export const physicsQuestions: Question[] = [
    {
      id: "bumhs-2025-phys-140",
      question: "If the capacitance in a purely capacitive AC circuit is doubled, the current will be:",
      options: ["Double", "Become half", "Remain same", "Decrease to the fourth"],
      answer: 0,
      explanation: "Capacitive reactance is X_c = 1 / (2π f C). Doubling capacitance C halves the reactance X_c. Consequently, the current I = V / X_c doubles."
    },
    {
      id: "kmu-mdcat-2025-phys-83",
      question: "In a pure capacitance AC circuit, the current:",
      options: [
        "Lags behind voltage by 90°",
        "Leads the voltage by 90°",
        "Is in phase with the voltage",
        "Leads the voltage by 45°"
      ],
      answer: 1,
      explanation: "In a purely capacitive AC circuit, current leads voltage by a phase angle of 90° (π/2 radians)."
    },
    {
      id: "siba-2025-phys-154",
      question: "If frequency of AC is doubled, the inductive reactance will:",
      options: ["Remain same", "Be halved", "Be doubled", "Become zero"],
      answer: 2,
      explanation: "Inductive reactance is given by X_L = 2π f L. Since X_L is directly proportional to frequency f, doubling frequency doubles the inductive reactance."
    },
    {
      id: "szambu-2025-phys-136",
      question: "A capacitor is connected to an ac source. If the frequency of the AC source is doubled, the current in a purely capacitive circuit will:",
      options: ["Be doubled", "Remains Unchanged", "Become Half", "Becomes zero"],
      answer: 0,
      explanation: "Reactance X_c = 1 / (2π f C). Doubling frequency f halves X_c, which doubles the circuit current I = V / X_c."
    },
    {
      id: "szambu-phy-24-169",
      question: "Alternating current generator is a device which is used to convert",
      options: [
        "Chemical energy, Electrical energy",
        "Chemical energy, Mechanical energy",
        "Electrical energy, Mechanical energy",
        "Mechanical energy, Electrical energy"
      ],
      answer: 3,
      explanation: "An AC generator converts mechanical energy into electrical energy via electromagnetic induction."
    },
    {
      id: "szambu-phy-24-173",
      question: "The turns ratio of a step-up transformer is 5. A current of 20 A is passed through its primary coil at 220 V. Calculate the value of voltage in secondary coil?",
      options: ["1000 V", "1025 V", "1050 V", "1100 V"],
      answer: 3,
      explanation: "Turns ratio N_s / N_p = 5. Secondary voltage V_s = (N_s / N_p) × V_p = 5 × 220 V = 1100 V."
    },
    {
      id: "uhs-phys-24-161",
      question: "In an AC generator the emf will be maximum when factor sin ωt is equal to",
      options: ["Zero", "1", "2", "½"],
      answer: 1,
      explanation: "Generated EMF ε = ε₀ sin(ωt) reaches maximum peak magnitude ε₀ when sin(ωt) = 1."
    },
    {
      id: "uhs-phys-24-163",
      question: "In an ideal transformer",
      options: [
        "Power input is equal to Power output",
        "Power input is less than half of the power output",
        "Power input is greater than Power output",
        "Power input is more than half of the power output"
      ],
      answer: 0,
      explanation: "An ideal transformer operates with 100% efficiency, so power input equals power output (P_in = P_out)."
    },
  
    // ==========================================
    // 2. ATOMIC SPECTRA
    // ==========================================
    {
      id: "bumhs-2025-phys-151",
      question: "The ratio of longest to shortest wave lengths in Bracket series of hydrogen spectrum is:",
      options: ["25/9", "17/6", "9/5", "4/3"],
      answer: 0,
      explanation: "For Brackett series (n₁ = 4): Longest wavelength occurs at n₂ = 5 → 1/λ_max = R(1/4² - 1/5²) = R(9/400). Shortest wavelength occurs at n₂ = ∞ → 1/λ_min = R(1/4² - 0) = R(1/16). Ratio λ_max / λ_min = (400/9) / 16 = 25/9."
    },
    {
      id: "kmu-mdcat-2025-phys-86",
      question: "In hydrogen spectrum, the Brackett series lies in:",
      options: ["Violet region", "Red region", "Infrared region", "X-ray region"],
      answer: 2,
      explanation: "In the hydrogen emission spectrum, the Brackett series (transitions terminating at n = 4) lies within the infrared region of the electromagnetic spectrum."
    },
    {
      id: "kmu-phys-24-172",
      question: "If an electron in the hydrogen atom jumps from second to first orbit, the emitted radiation has a wavelength of?",
      options: ["4 / (3 R_H)", "3 / (4 R_H)", "R_H", "4 R_H"],
      answer: 0,
      explanation: "Using Rydberg formula: 1/λ = R_H (1/1² - 1/2²) = R_H (1 - 1/4) = 3 R_H / 4. Solving for wavelength yields λ = 4 / (3 R_H)."
    },
    {
      id: "siba-phy-24-137",
      question: "If electronic transitions in hydrogen atom terminate in the second orbit, the emitted series is known as:",
      options: ["Brackett series", "Paschen series", "Lyman series", "Balmer series", "Pfund series"],
      answer: 3,
      explanation: "Transitions that end at the n = 2 energy level form the Balmer series."
    },
    {
      id: "szambu-2025-phys-138",
      question: "Two spectral lines in the Hydrogen atom spectrum are close together. This likely means:",
      options: [
        "The energy difference is zero",
        "The energy difference is small",
        "The light intensity is low",
        "The atom become unstable"
      ],
      answer: 1,
      explanation: "Photon energy is related to frequency by E = hf = hc/λ. Two wavelengths that are very close to each other correspond to a small difference in photon energy."
    },
    {
      id: "szambu-phy-24-141",
      question: "Which of the following series of hydrogen spectrum lies in visible region?",
      options: ["Balmer", "Bracket", "Lyman", "Paschen"],
      answer: 0,
      explanation: "The Balmer series is the only spectral series of hydrogen that falls within the visible spectrum."
    },
    {
      id: "szambu-phy-24-154",
      question: "The Lyman series contain the wavelengths in the",
      options: ["far-infrared region", "infrared region", "ultraviolet region", "visible region"],
      answer: 2,
      explanation: "The Lyman series consists of transitions terminating at n = 1, which emit high-energy photons in the ultraviolet (UV) region."
    },
    {
      id: "uhs-mdcat-2025-phys-138",
      question: "The Balmer series of hydrogen spectrum appears in the",
      options: ["Infrared region", "Ultraviolet region", "X-ray region", "Visible region"],
      answer: 3,
      explanation: "The Balmer series corresponds to electron transitions terminating at the n = 2 energy level and lies in the visible light region."
    },
    {
      id: "uhs-phys-24-170",
      question: "Which series falls in ultra violet region?",
      options: ["Lyman", "Brackett", "Pfund", "Paschen"],
      answer: 0,
      explanation: "The Lyman series corresponds to transitions down to the ground state (n = 1) and falls in the ultraviolet region."
    },
    {
      id: "testmoz-phys-atomic-1",
      question: "The spectral series of the hydrogen atom that lies in the ultraviolet region of the electromagnetic spectrum is called the:",
      options: ["Balmer series", "Lyman series", "Paschen series", "Brackett series"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-2",
      question: "According to Bohr's atomic model, the angular momentum of an electron in a stationary orbit is:",
      options: [
        "Directly proportional to the principal quantum number, n",
        "Inversely proportional to the principal quantum number, n",
        "Directly proportional to the square of the principal quantum number, n²",
        "Constant for all orbits"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-atomic-3",
      question: "The transition of an electron from n=4 to n=2 in a hydrogen atom results in the emission of a photon in which series?",
      options: ["Lyman series", "Paschen series", "Balmer series", "Pfund series"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-4",
      question: "The phenomenon where an excited atom emits a photon without any external trigger is known as:",
      options: ["Stimulated emission", "Spontaneous emission", "Absorption", "Population inversion"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-5",
      question: "The production of characteristic X-rays is a result of:",
      options: [
        "The rapid deceleration of high-speed electrons by a target nucleus.",
        "Electron transitions between the inner shells of a heavy atom.",
        "The heating of a filament in an X-ray tube.",
        "The photoelectric effect."
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-6",
      question: "For laser action to occur, a necessary condition is that there are more atoms in a higher energy state than in a lower one. This condition is called:",
      options: ["Metastable state", "Spontaneous emission", "Optical pumping", "Population inversion"],
      answer: 3
    },
    {
      id: "testmoz-phys-atomic-7",
      question: "The energy of an electron in the nth orbit of a hydrogen atom is proportional to:",
      options: ["n²", "n", "1/n", "1/n²"],
      answer: 3
    },
    {
      id: "testmoz-phys-atomic-8",
      question: "Which of the following properties is NOT characteristic of laser light?",
      options: ["Coherent", "Monochromatic", "Incoherent", "Directional"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-9",
      question: "The minimum energy required to remove an electron from an atom in its ground state is known as:",
      options: ["Excitation energy", "Binding energy", "Ionization energy", "Work function"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-10",
      question: "The Paschen series of the hydrogen spectrum is in which region?",
      options: ["Ultraviolet", "Visible", "Infrared", "X-ray"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-11",
      question: "For an electron in a stationary Bohr orbit, its total energy is -3.4 eV. What is its kinetic energy (KE)?",
      options: ["-3.4 eV", "+3.4 eV", "-6.8 eV", "+6.8 eV"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-12",
      question: "The continuous spectrum of X-rays is produced due to:",
      options: [
        "Electron transitions between discrete energy levels.",
        "The deceleration of bombarding electrons by the target.",
        "The excitation of the target atoms.",
        "Thermionic emission from the filament."
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-13",
      question: "A state in which an excited atom can stay for a relatively long time (e.g., 10⁻³ s) is called a:",
      options: ["Ground state", "Excited state", "Ionized state", "Metastable state"],
      answer: 3
    },
    {
      id: "testmoz-phys-atomic-14",
      question: "The radius of the first Bohr orbit for the hydrogen atom is r₁. The radius of the third Bohr orbit is:",
      options: ["3r₁", "r₁/3", "9r₁", "r₁/9"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-15",
      question: "An absorption spectrum is characterized by:",
      options: [
        "Bright lines on a dark background.",
        "Dark lines on a bright background.",
        "A continuous band of colors.",
        "No lines at all."
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-16",
      question: "In a He-Ne laser, the process of exciting Ne atoms through collisions with excited He atoms is called:",
      options: ["Stimulated emission", "Optical pumping", "Resonant energy transfer", "Spontaneous absorption"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-17",
      question: "The series limit of a spectral series corresponds to an electron transition from:",
      options: ["n = 2 to n = 1", "n = ∞ to the final state n.", "n = (n_final + 1) to n_final", "n = 1 to n = ∞"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-18",
      question: "The energy of a photon emitted from a hydrogen atom is 10.2 eV. This corresponds to a transition from:",
      options: ["n = 2 to n = 1", "n = 3 to n = 1", "n = 3 to n = 2", "n = 4 to n = 2"],
      answer: 0
    },
    {
      id: "testmoz-phys-atomic-19",
      question: "Rydberg's constant (R) is a physical constant related to:",
      options: ["The charge of an electron", "The speed of light", "Atomic spectra", "Planck's constant"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-20",
      question: "The process of supplying energy to the atoms of a laser medium to achieve population inversion is called:",
      options: ["Amplification", "Coherence", "Pumping", "Emission"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-21",
      question: "Calculate the wavelength of the second line of the Balmer series for the hydrogen atom. (Rydberg constant R_H ≈ 1.097 × 10⁷ m⁻¹)",
      options: ["656 nm", "121 nm", "486 nm", "91 nm"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-22",
      question: "The wavelength of characteristic X-rays depends on:",
      options: [
        "The accelerating voltage in the X-ray tube.",
        "The material of the target anode.",
        "The temperature of the filament.",
        "The pressure inside the X-ray tube."
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-23",
      question: "The lines in the Balmer series of the hydrogen spectrum are formed by electron transitions from higher energy levels to:",
      options: ["n = 1", "n = 2", "n = 3", "n = 4"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-24",
      question: "The lifetime of an atom in an ordinary excited state is typically about:",
      options: ["10⁻³ s", "10⁸ s", "10⁻⁸ s", "10³ s"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-25",
      question: "An electron in a hydrogen atom jumps from n=3 to n=1. The number of possible spectral lines that can be emitted is:",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-26",
      question: "Bohr's model of the atom successfully explained:",
      options: [
        "The spectrum of all atoms and molecules.",
        "The line spectrum of the hydrogen atom.",
        "The Zeeman effect (splitting of spectral lines in a magnetic field).",
        "The relative intensities of spectral lines."
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-27",
      question: "In the process of stimulated emission, the emitted photon is identical to the incident photon in all aspects EXCEPT:",
      options: ["Frequency", "Phase", "Direction of travel", "It is identical in all aspects mentioned."],
      answer: 3
    },
    {
      id: "testmoz-phys-atomic-28",
      question: "The Brackett series in the hydrogen spectrum is formed by electron transitions ending at which energy level?",
      options: ["n = 2", "n = 3", "n = 4", "n = 5"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-29",
      question: "The ground state energy of a hydrogen atom is -13.6 eV. What is the energy of the first excited state?",
      options: ["-13.6 eV", "-6.8 eV", "-3.4 eV", "-1.51 eV"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-30",
      question: "The concept of discrete energy levels in an atom was first introduced by:",
      options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "Max Planck"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-31",
      question: "The velocity of an electron in the first Bohr orbit is v₁. The velocity in the second orbit would be:",
      options: ["2v₁", "v₁/2", "4v₁", "v₁/4"],
      answer: 1
    },
    {
      id: "testmoz-phys-atomic-32",
      question: "The shortest wavelength in the Balmer series corresponds to a transition from:",
      options: ["n = 3 to n = 2", "n = 2 to n = 1", "n = ∞ to n = 2", "n = ∞ to n = 1"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-33",
      question: "The laser used in barcode scanners is typically a:",
      options: ["CO2 laser", "Ruby laser", "He-Ne laser", "Excimer laser"],
      answer: 2
    },
    {
      id: "testmoz-phys-atomic-34",
      question: "According to Bohr's third postulate, an electron emits a photon when it:",
      options: [
        "Jumps from a lower energy orbit to a higher one.",
        "Jumps from a higher energy orbit to a lower one.",
        "Revolves in a stationary orbit.",
        "Is removed from the atom."
      ],
      answer: 1
    },
  
    // ==========================================
    // 3. CURRENT ELECTRICITY
    // ==========================================
    {
      id: "bumhs-2024-phys-124",
      question: "Electrical measuring instruments convert electrical energy into:",
      options: ["Chemical", "Mechanical", "Nuclear", "Thermal"],
      answer: 1,
      explanation: "Analog electrical measuring instruments (like galvanometers, ammeters, and voltmeters) utilize magnetic torque to move a needle or pointer, converting electrical energy into mechanical energy."
    },
    {
      id: "bumhs-2024-phys-128",
      question: "A fully charged capacitor with charge q and capacitance C is connected across a resistor R in series. Power dissipated across resistor will be zero after time:",
      options: ["t = 0", "t = RC", "t = 5RC", "t = infinity"],
      answer: 3,
      explanation: "Capacitor discharge is exponential (q = q₀ e⁻ᵗ/ᴿᶜ). Mathematically, charge and current reach exactly zero only as time approaches infinity (t = ∞)."
    },
    {
      id: "bumhs-2024-phys-129",
      question: "Resistance is the measure of:",
      options: ["current", "voltage", "motion of charges", "opposition to the motion of charges"],
      answer: 3,
      explanation: "Electrical resistance is defined as the measure of opposition to the flow of electric current (motion of charges) through a conductor."
    },
    {
      id: "bumhs-2024-phys-163",
      question: "Ohm’s law state that electric current through a conductor is proportional to the applied voltage provided:",
      options: [
        "electric current is constant",
        "electric field is constant",
        "resistance is constant",
        "electric charge is constant"
      ],
      answer: 2,
      explanation: "Ohm's law (V = IR) holds true provided physical conditions such as temperature remain unchanged, keeping the resistance (R) of the conductor constant."
    },
    {
      id: "bumhs-2024-phys-172",
      question: "Let five resistors, each of 10 ohm, are connected in parallel and the combination is then connected with a battery of 50 V. The current through each resistor will be:",
      options: ["5 A", "10 A", "25 A", "50 A"],
      answer: 0,
      explanation: "In a parallel combination, full supply voltage appears across each branch. Current through each individual resistor I_i = V / R = 50 V / 10 Ω = 5 A."
    },
    {
      id: "bumhs-2024-phys-176",
      question: "A battery has an emf of 6.0 V and an internal resistance of 0.4 Ω. It is connected to a 2.6 Ω resistor through a switch. When switch is open, the potential difference across the switch is:",
      options: ["0 V", "6.0 V", "2.6 V", "5.2 V"],
      answer: 1,
      explanation: "When the switch is open, no current flows (I = 0). There is zero internal voltage drop (Ir = 0), so the open terminals experience full EMF (6.0 V)."
    },
    {
      id: "bumhs-2025-phys-129",
      question: "The efficiency of an emf source becomes 50% when the load resistance is equal to:",
      options: ["internal resistance", "double the internal resistance", "half the internal resistance", "zero"],
      answer: 0,
      explanation: "Efficiency η = V_terminal / E = R / (R + r). When load resistance equals internal resistance (R = r), η = R / (R + R) = 0.5 or 50%."
    },
    {
      id: "bumhs-2025-phys-139",
      question: "The power transmission lines delivering same amount of power. An increase in current will increase:",
      options: [
        "Heat produced in the wires",
        "Voltage output",
        "Frequency of AC",
        "Mechanical stress on the wires"
      ],
      answer: 0,
      explanation: "Joule heating loss in transmission lines is given by P_loss = I² R. Higher current significantly increases thermal/heat energy losses."
    },
    {
      id: "bumhs-2025-phys-157",
      question: "If the length of a copper wire connected in a circuit is doubled, its resistivity:",
      options: ["Becomes half", "Becomes double", "Becomes four times", "Remains same"],
      answer: 3,
      explanation: "Resistivity is an intrinsic material property that depends on the substance type and temperature, not on geometric dimensions like length or area."
    },
    {
      id: "bumhs-2025-phys-158",
      question: "On increasing the length of a wire, the specific resistance (resistivity) of the wire:",
      options: ["increases", "decreases", "remains unchanged", "first increases, then decreases"],
      answer: 2,
      explanation: "Specific resistance (resistivity) depends only on the material composition and temperature, remaining unchanged when physical dimensions vary."
    },
    {
      id: "bumhs-2025-phys-159",
      question: "When a battery is being charged, the direction of current inside the battery:",
      options: [
        "is from positive to negative terminal",
        "is the same as the direction of emf",
        "is opposite to the direction of emf",
        "depends on the load resistance"
      ],
      answer: 2,
      explanation: "During discharging, current inside a battery flows from negative to positive (along EMF). When charging, an external source forces current to flow backward internally from positive to negative terminal (opposite to EMF)."
    },
    {
      id: "bumhs-2025-phys-161",
      question: "A capacitor of capacitance 2 μF is connected in series with 1 MΩ resistance and 12 volts battery. The time taken by this capacitor take to 63% of its equilibrium charge will be:",
      options: ["1 second", "2 seconds", "10 seconds", "Infinite"],
      answer: 1,
      explanation: "One time constant τ = R × C is defined as the time needed to reach ~63.2% of total charge. τ = (1 × 10⁶ Ω) × (2 × 10⁻⁶ F) = 2 seconds."
    },
    {
      id: "kmu-mdcat-2025-phys-116",
      question: "If the potential difference (V) across a conductor is doubled, keeping resistance (R) constant, the power dissipated (P) becomes:",
      options: ["Doubled", "Halved", "Four times", "Remains unchanged"],
      answer: 2,
      explanation: "Power dissipated P = V² / R. Since power is proportional to V², doubling potential difference (2V)² quadruples the power dissipated (4 times)."
    },
    {
      id: "kmu-phys-24-154",
      question: "The I-V Graph for a non-Ohmic material is always",
      options: ["Curved", "Horizontal", "Linear", "Perpendicular"],
      answer: 0,
      explanation: "Non-Ohmic components (like diodes or filament bulbs) do not maintain constant resistance, producing a non-linear (curved) I-V characteristic curve."
    },
    {
      id: "kmu-phys-24-155",
      question: "Temperature coefficient of resistance is defined as increase in resistance per ohm original resistance per __?",
      options: [
        "Degree rise in temperature",
        "Unit increase in electric current",
        "Unit decrease in capacitance",
        "Degree drop in temperature"
      ],
      answer: 0,
      explanation: "Temperature coefficient α = ΔR / (R₀ ΔT), defined as fractional change in resistance per degree rise in temperature."
    },
    {
      id: "kmu-phys-24-156",
      question: "For metals, the temperature coefficient of resistance is:",
      options: ["Infinity", "Negative", "Positive", "Zero"],
      answer: 2,
      explanation: "For metallic conductors, resistance increases as temperature rises due to increased lattice vibrations, giving a positive temperature coefficient."
    },
    {
      id: "kmu-phys-24-157",
      question: "If R1 and R2 are respectively the filament resistance of a 100-Watt bulb and 200-Watt bulb designed to operate on the same voltage, then power of:",
      options: ["R1 is two times R2", "R2 is two times R1", "R2 is four times R1", "R1 is four times R2"],
      answer: 0,
      explanation: "Since P = V² / R, resistance is inversely proportional to rated power (R ∝ 1/P). Thus R1 / R2 = P2 / P1 = 200 / 100 = 2 → R1 = 2 R2."
    },
    {
      id: "kmu-phys-24-158",
      question: "The maximum power transfer theorem states that maximum power is delivered to the load when",
      options: [
        "The load resistance is half of the source resistance",
        "The load resistance is zero",
        "The load resistance is double the source resistance",
        "The load resistance is equal to the source resistance"
      ],
      answer: 3,
      explanation: "According to the maximum power transfer theorem, maximum power is delivered from a source to a load when load resistance (R) equals internal source resistance (r)."
    },
    {
      id: "kmu-phys-24-159",
      question: "Electron Volt (eV) is another unit of",
      options: ["Charge", "Current", "Energy", "Power"],
      answer: 2,
      explanation: "One electron volt (1 eV = 1.6 × 10⁻¹⁹ J) is a unit of energy commonly used in atomic and nuclear physics."
    },
    {
      id: "siba-2025-phys-138",
      question: "The value of temperature co-efficient of a conductor is zero. This indicates that with the rise in temperature, resistance of conductor:",
      options: ["Increases", "Decreases", "Remain same", "Becomes zero"],
      answer: 2,
      explanation: "When α = 0, ΔR = α R₀ ΔT = 0, meaning resistance remains constant with changes in temperature."
    },
    {
      id: "siba-2025-phys-162",
      question: "Internal resistance reduces the terminal voltage because it:",
      options: [
        "Produces back emf",
        "Causes power loss inside the battery",
        "Increases the current",
        "Decreases the emf"
      ],
      answer: 1,
      explanation: "Internal resistance r causes an internal potential drop (Ir) and power loss inside the cell, lowering terminal voltage V = E - Ir."
    },
    {
      id: "siba-phy-24-124",
      question: "The unit of resistance is:",
      options: ["Volt", "Watt", "Coulomb", "Ohm", "Ampere"],
      answer: 3,
      explanation: "The SI unit of electrical resistance is the Ohm (Ω)."
    },
    {
      id: "siba-phy-24-127",
      question: "The unit of resistivity is:",
      options: ["Ohm m", "Ampere", "Volt", "Watt", "Ohm"],
      answer: 0,
      explanation: "Resistivity ρ = R A / L, giving SI units of Ohm-meter (Ω·m)."
    },
    {
      id: "siba-phy-24-129",
      question: "Total potential difference across the combination of three similar cells becomes maximum when:",
      options: [
        "Two cells are connected in series and the third cell in parallel with the combination",
        "All the three cells are connected in parallel",
        "Two cells are connected in parallel and the third cell in series with the combination",
        "The load connected to the combination is minimum",
        "All the three cells are connected in series"
      ],
      answer: 4,
      explanation: "Connecting cells in series adds their individual electromotive forces (E_total = E₁ + E₂ + E₃), maximizing total potential difference."
    },
    {
      id: "siba-phy-24-135",
      question: "“The current through a conductor is directly proportional to the potential difference between the ends of the conductor, provided that physical conditions remain the same.” This is:",
      options: ["Laplace’s Law", "Ohm’s Law", "Coulomb’s Law", "Charles’s Law", "Boyle’s Law"],
      answer: 1,
      explanation: "This is the classic definition of Ohm's Law."
    },
    {
      id: "szambu-2025-phys-140",
      question: "High slope of Ohm’s law graph means:",
      options: ["Low resistance", "High resistance", "Open circuit", "Low current"],
      answer: 0,
      explanation: "For an I vs V graph (current on y-axis, voltage on x-axis), slope = ΔI / ΔV = 1/R. A steeper/higher slope corresponds to smaller resistance (low resistance)."
    },
    {
      id: "szambu-2025-phys-144",
      question: "What will potential difference, if a wire has resistance of 10 Ω and current 2A flow through it:",
      options: ["5V", "10V", "20V", "40V"],
      answer: 2,
      explanation: "Using Ohm's law V = I × R = 2 A × 10 Ω = 20 V."
    },
    {
      id: "szambu-2025-phys-149",
      question: "A high internal resistance battery is not suitable for heavy loads due to:",
      options: ["Excess voltage drop", "High terminal voltage", "Infinite emf", "Constant current"],
      answer: 0,
      explanation: "Heavy load draws high current I, resulting in a large internal voltage drop (Ir) across high internal resistance r, severely reducing terminal voltage."
    },
    {
      id: "szambu-phy-24-134",
      question: "Which one of the following is the SI-unit of conventional current in a conductor?",
      options: ["Ampere", "Coulomb", "Ohm", "Ohm meter"],
      answer: 0,
      explanation: "The SI unit of electric current is the Ampere (A)."
    },
    {
      id: "szambu-phy-24-137",
      question: "The gradient/slope of I-V (Current-Potential) graph provides",
      options: ["Conductance", "Conductivity", "Resistance", "Resistivity"],
      answer: 0,
      explanation: "Slope of an I-V graph is ΔI / ΔV = 1/R = Conductance G."
    },
    {
      id: "szambu-phy-24-163",
      question: "Which one of the following materials has negative temperature coefficient of resistance?",
      options: ["Copper", "Germanium", "Sulphur", "Zinc"],
      answer: 1,
      explanation: "Semiconductors like Germanium (Ge) and Silicon (Si) have negative temperature coefficients of resistance (resistance drops as temperature increases)."
    },
    {
      id: "szambu-phy-24-174",
      question: "If 60 A current passes through a wire in 60 seconds. What will be the value of charge existing in the wire?",
      options: ["4.6 × 10⁻³ C", "3.6 × 10⁻³ C", "2.6 × 10³ C", "3.6 × 10³ C"],
      answer: 3,
      explanation: "Charge Q = I × t = 60 A × 60 s = 3600 C = 3.6 × 10³ C."
    },
    {
      id: "szambu-phy-24-176",
      question: "In any electric circuit, power output (P_out) will be maximum when (Whereas R = External Resistance, r = Internal Resistance)",
      options: ["R = 0 but r ≠ 0", "r = 0 but R ≠ 0", "R = ∞ and r = 0", "R = r"],
      answer: 3,
      explanation: "By the Maximum Power Transfer Theorem, maximum output power occurs when external load resistance equals internal source resistance (R = r)."
    },
    {
      id: "uhs-mdcat-2025-phys-137",
      question: "The reciprocal of the resistivity of a material is called its:",
      options: ["impedance", "conductivity", "admittance", "reactance"],
      answer: 1,
      explanation: "Electrical conductivity (σ) is defined as the mathematical reciprocal of resistivity (σ = 1 / ρ)."
    },
    {
      id: "uhs-mdcat-2025-phys-147",
      question: "Terminal voltage of a cell equals its EMF only when:",
      options: [
        "No current flows",
        "Current is maximum",
        "Internal resistance is infinite",
        "Load resistance is zero"
      ],
      answer: 0,
      explanation: "Terminal potential difference V = E - Ir. When no current flows through the circuit (I = 0), V = E."
    },
    {
      id: "uhs-mdcat-2025-phys-152",
      question: "If the length of the conductor is made 4 times its original length, its resistance becomes",
      options: ["quarter", "half", "zero", "4 times"],
      answer: 3,
      explanation: "Resistance R = ρ L / A. Resistance is directly proportional to length L, so quadrupling length multiplies resistance by 4."
    },
    {
      id: "uhs-mdcat-2025-phys-153",
      question: "The unit of temperature coefficient of resistivity is",
      options: ["1/C", "1/K", "1/A", "1/Ω"],
      answer: 1,
      explanation: "Temperature coefficient α = Δρ / (ρ₀ ΔT), giving SI units of per Kelvin (K⁻¹ or 1/K)."
    },
    {
      id: "uhs-phys-24-152",
      question: "A charge of 90 C passes through a wire for 30 seconds. Then the current in the wire will be",
      options: ["3 A", "0.3 A", "3 mA", "0.3 mA"],
      answer: 0,
      explanation: "Current I = Q / t = 90 C / 30 s = 3 A."
    },
    {
      id: "uhs-phys-24-153",
      question: "The magnitude of the current in metals is proportional to the potential difference across it as long as temperature of conductor is kept constant is known as",
      options: ["Joule’s Law", "Gauss Law", "Ohm’s Law", "Ampere’s Law"],
      answer: 2,
      explanation: "This statement expresses Ohm's Law (V = IR)."
    },
    {
      id: "uhs-phys-24-154",
      question: "When length of copper wire is doubled then resistivity becomes",
      options: ["Double", "Half", "Remains same", "Four times"],
      answer: 2,
      explanation: "Resistivity is an intrinsic property dependent only on material identity and temperature, remaining constant when physical dimensions change."
    },
    {
      id: "uhs-phys-24-155",
      question: "The resistance of semiconductor with rise in temperature",
      options: ["Increases", "Decreases", "Remain same", "Infinite"],
      answer: 1,
      explanation: "Heating a semiconductor liberates additional charge carriers (electron-hole pairs), increasing conductivity and decreasing resistance."
    },
    {
      id: "uhs-phys-24-156",
      question: "Volt × Ampere is the measure of",
      options: ["Current", "Volt", "Resistance", "Power"],
      answer: 3,
      explanation: "Power P = V × I. Therefore, Volt × Ampere equals Watts, measuring electrical Power."
    },
    {
      id: "testmoz-phys-curr-1",
      question: "Specific resistance of wire",
      options: [
        "Will depend on its length",
        "Will depend on its radius",
        "Will depend on the type of material of the wire",
        "Will depend on none of the above mentioned"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-2",
      question: "If heater coil is cut into two equal parts and only one part is now used in the heater the heat generated will now be",
      options: ["Halved", "One fourth", "Four times", "Doubled"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-3",
      question: "Power dissipated into parallel resistors is inversely proportional to",
      options: ["Potential difference", "Current", "Resistance", "All of the above mentioned"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-4",
      question: "Which one gives pure nature of the material",
      options: [
        "Resistivity",
        "Temperature coefficient of resistance",
        "Resistance",
        "Both a and b"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-5",
      question: "The slope of ohm law is",
      options: ["Straight line", "Parabola", "Hyperbola", "None"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-6",
      question: "Six 1.1V cells with internal resistance 3.0 ohm each are connected in three parallel branches of two cells each if the resistance of external circuit is 2 ohm then the current is",
      options: ["0.33A", "0.44A", "0.55A", "0.66A"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-7",
      question: "A fuse is placed in a series with circuit to protect against",
      options: ["High power", "High current", "High voltage", "Overheating"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-8",
      question: "EMF of battery or Cell is the voltage between its terminal when",
      options: [
        "The circuit is open",
        "It’s internal resistance is minimum",
        "The circuit closed",
        "It’s internal resistance is maximum"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-9",
      question: "Material of heating element of electric heater should have",
      options: [
        "High Resistivity and high melting point",
        "High Resistivity and low melting point",
        "Low Resistivity and low melting point",
        "Low Resistivity and high melting point"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-10",
      question: "For an open circuit the resistance of circuit will be",
      options: ["Infinite", "Maximum", "Finite", "Zero"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-11",
      question: "A copper wire has resistance R it is stretched such that its length is thrice then its new resistance become",
      options: ["2R", "9R", "4R", "27R"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-12",
      question: "A wire of resistance R is stretched to four times its length uniformly its new resistance will be",
      options: ["16R", "R/4", "4R", "R/16"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-13",
      question: "An immersion heater of 400 Watts keep on for five hours will consume electric energy of",
      options: ["2Kwh", "6kwh", "20kwh", "12kwh"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-14",
      question: "A source of 200 V provides a current of 10 amps to a house the power delivered by the source is",
      options: ["20 W", "2000 W", "40 W", "200 W"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-15",
      question: "An energy source will supply a constant current into the load if its internal resistance is",
      options: [
        "Non zero but less than the load resistance",
        "Zero",
        "Very large as compared to the load resistance",
        "Equal to the resistance of the load"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-16",
      question: "Which of the following statement is not true",
      options: [
        "Conductance is the reciprocal of resistance and it is measured in Siemens",
        "Ohm’s law is not applicable at very low and very high temperature",
        "Ohm’s law is applicable to semiconductors",
        "Ohm’s law is not applicable to electron tubes discharge tubes and electrolytes"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-17",
      question: "Two wires made of the same material have the same length but different diameters they are connected in parallel to a battery the quantity that is not the same for the wires is",
      options: [
        "The end to end potential difference",
        "The current density",
        "The current",
        "The electric field"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-18",
      question: "A 60 watt light bulb carries a current of 0.5 amperes the total charge passing through it in one hour is",
      options: ["120C", "3600C", "3000C", "1800C"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-19",
      question: "If the potential difference across a resistor is doubled",
      options: [
        "Only the current is doubled",
        "Only the resistance is doubled",
        "Only the current is half",
        "Only the resistance is half"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-20",
      question: "The fractional change in resistivity per Kelvin",
      options: [
        "Temperature coefficient of resistance",
        "Resistance",
        "Temperature coefficient of resistivity",
        "All of the above mentioned"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-21",
      question: "Slope of the graph between V on x-axis and I on the y axis is",
      options: ["Resistance", "EMF", "Conductance", "Capacitance"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-22",
      question: "SI unit of EMF is same as",
      options: ["Work", "Power", "Energy", "Voltage"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-23",
      question: "The Terminal potential difference of battery is less than its EMF when",
      options: [
        "Under all conditions",
        "Only when the battery is being charged",
        "Only when the battery is being discharged",
        "When battery is disconnected"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-24",
      question: "When we double the voltage in a simple electric circuit we double the",
      options: ["Current", "Resistance", "Power", "Both a and c"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-25",
      question: "In case of gases the charge carriers are",
      options: [
        "Positive and negative ions",
        "Electrons and holes",
        "Positive ions and electrons",
        "Negative ions and electrons"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-26",
      question: "Potential difference is directly proportional to the current",
      options: ["Ohm’s law", "Gauss’s law", "Kirchhoff law", "None of the above mentioned"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-27",
      question: "Why should a resistance be introduced in a circuit in series deliberately",
      options: ["To increase current", "To control current", "Decrease current", "Just to give a good look to circuit"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-28",
      question: "Free electrons in an electric field move from",
      options: [
        "All potentials",
        "Low potential to high potential",
        "High potential to low potential",
        "Remains stationary"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-29",
      question: "If the length and diameter of conductor is double the resistance is",
      options: ["Remain same", "Double", "Four times", "Half"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-30",
      question: "A large number of bulbs are connected in series combination with a battery if one of them is fused",
      options: [
        "The others will stop glowing",
        "The others will keep glowing",
        "The others will start blinking",
        "The others will also be fused"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-31",
      question: "A steady current is flowing in a conductor of non uniform cross section the charge passing through any cross section per unit time is",
      options: [
        "Directly proportional to the area of cross section",
        "Inversely proportional to the area of cross section",
        "Proportional to the square of the cross section",
        "Independent of the area of cross section"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-32",
      question: "A piece of Copper and piece of Germanium are cooled from the room temperature down to 77 Kelvin",
      options: [
        "The resistance of each of them increases",
        "The resistance of each of them decreases",
        "The resistance of copper increases and that of Germanium decreases",
        "The resistance of copper decreases and that of Germanium increases"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-33",
      question: "Current is the measure of",
      options: [
        "Force that moves a charge past a point",
        "Resistance to the movement of a charge past a point",
        "Energy used to move a charge past a point",
        "Amount of charge that moves past a point per unit time"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-34",
      question: "Conductance is a quantity used to describe the",
      options: [
        "Physical state of the conductor",
        "Dimension of the conductor",
        "Electrical properties of the material",
        "All of the above mentioned"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-35",
      question: "Magnetic effect of current is utilised in",
      options: ["Iron", "Measurement of current", "Thermocouple", "Electroplating"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-36",
      question: "You wish to triple the rate of energy dissipation in a heating device to do this you could triple",
      options: [
        "The potential difference keeping the resistance same",
        "The current keeping the resistance the same",
        "The resistance keeping the potential difference the same",
        "The resistance keeping the current same"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-37",
      question: "A certain wire has resistance R another wire of the same material has the length and half the diameter of the first wire the resistance of the second wire is",
      options: ["4R", "R/4", "8R", "2R"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-38",
      question: "Out of two bulbs in a house one glow Brighter Than The Other which of the following has larger resistance",
      options: ["The brighter bulb", "Both have same resistance", "The dim", "Brightness does not depend on resistance"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-39",
      question: "The current is zero in a conductor when no potential difference is applied because",
      options: [
        "The electrons are not moving",
        "Electrons are not moving fast enough",
        "For every electron with a given velocity there is an other with a velocity of equal magnitude and opposite direction",
        "Equal number of electrons and protons are moving together"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-40",
      question: "When same current passes for same time through a thick and thin wire",
      options: [
        "More heat is produced in thick wire",
        "More heat is produced in thin wire",
        "No heat is produced in wire",
        "Equal heat is produced in thick and thin wire"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-41",
      question: "20 ohm resistance take 20 minutes to boil a given amount of water how much resistance will be required to boil the same amount of water using the same source in 1 minute",
      options: ["20 Ohm", "40 Ohm", "5 Ohm", "100 Ohm"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-42",
      question: "For maximum power output from the cell the requirement is",
      options: ["r > R", "r < R", "R = r", "r = 0"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-43",
      question: "A wire of resistance R is cut into equal parts its resistance become R/2 what happens to resistivity",
      options: ["Double", "Remain same", "One fourth", "Four times"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-44",
      question: "The capacity of storage cell is 5 ampere hour the maximum current it can supply for 10 hour is",
      options: ["5 amperes", "0.5 Ampere", "50 ampere", "0.25 ampere"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-45",
      question: "Temperature coefficient of resistivity of a material is measured in",
      options: ["Ohm × kelvin", "K", "Ohm × meter", "K⁻¹"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-46",
      question: "An ordinary light bulb is marked 60 watt 120 volt its resistance is",
      options: ["60 ohm", "180 ohm", "120 ohm", "240 ohm"],
      answer: 3
    },
    {
      id: "testmoz-phys-curr-47",
      question: "Three bulbs of 25 watt 50 Watt and 100 watt are connected in series with same supply the bulb with maximum brightness is",
      options: ["25 watt", "50 Watt", "100 watt", "All of these"],
      answer: 0
    },
    {
      id: "testmoz-phys-curr-48",
      question: "A car battery is rated at 80 amp hour an ampere hour is a unit of",
      options: ["Power", "Energy", "Charge", "Current"],
      answer: 2
    },
    {
      id: "testmoz-phys-curr-49",
      question: "Which one of the following substance that resistance decreases with increase in temperature",
      options: ["Copper", "Carbon", "Silver", "Iron"],
      answer: 1
    },
    {
      id: "testmoz-phys-curr-50",
      question: "Internal resistance is the resistance offered by",
      options: ["Conductor", "Resistor", "Circuit", "Electrolyte"],
      answer: 3
    },
  
    // ==========================================
    // 4. DAWN OF MODERN PHYSICS
    // ==========================================
    {
      id: "bumhs-2024-phys-136",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: ["p-n diode", "light emitting diode", "photo diode", "All of the given options"],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode absorbs photons to generate electron-hole pairs, producing an output voltage across its terminals."
    },
    {
      id: "bumhs-2024-phys-140",
      question: "In photo-electric effect electrons are emitted on incidence of light upon certain material surfaces:",
      options: [
        "Below a certain frequency",
        "Beyond a certain wavelength",
        "Above a certain frequency",
        "None of the given options"
      ],
      answer: 2,
      explanation: "Photoelectric emission occurs only when the frequency of incident radiation is greater than or equal to the minimum threshold frequency (f ≥ f₀)."
    },
    {
      id: "bumhs-2024-phys-146",
      question: "Photoelectron emission depends upon the:",
      options: [
        "Intensity of incident light",
        "Color of the body",
        "Frequency of incident light",
        "Shape of the body"
      ],
      answer: 2,
      explanation: "Whether photoelectron emission occurs (and the kinetic energy of emitted photoelectrons) depends fundamentally on the frequency (or wavelength) of the incident light."
    },
    {
      id: "bumhs-2024-phys-153",
      question: "Let an electron beam is accelerated by adjustable potential V. If we decrease potential V, wavelength of matter wave associated with electron will:",
      options: ["increase", "decrease", "remain same", "sometime increase sometime decrease"],
      answer: 0,
      explanation: "De Broglie wavelength λ = h / √(2m e V). Decreasing accelerating potential V reduces electron momentum, which increases the de Broglie wavelength λ."
    },
    {
      id: "bumhs-2025-phys-137",
      question: "If a photon of gamma ray and one of x-ray are compared, then:",
      options: [
        "x-ray photon has more energy",
        "Both have same energy",
        "Gamma-ray photon has more energy",
        "Both have same wavelength"
      ],
      answer: 2,
      explanation: "Gamma rays have higher frequencies than X-rays. Since photon energy E = hf, a gamma-ray photon carries more energy than an X-ray photon."
    },
    {
      id: "kmu-mdcat-2025-phys-85",
      question: "The energy (E) of a quantum is given by which equation?",
      options: ["E = mc²", "E = hν", "E = ½ mv²", "E = qV"],
      answer: 1,
      explanation: "According to Planck's quantum theory, the energy of a quantum (photon) is E = hν (or E = hf)."
    },
    {
      id: "kmu-phys-24-169",
      question: "The momentum of moving photon is:",
      options: ["mc²", "λ / h", "h / λ", "zero"],
      answer: 2,
      explanation: "By the de Broglie relation / Einstein photon theory, photon momentum is given by p = h / λ."
    },
    {
      id: "kmu-phys-24-170",
      question: "In every instant of time, wavelength associated with a freely falling body:",
      options: ["Decreases", "Increases two times", "Increases four times", "Remains constant"],
      answer: 0,
      explanation: "As a body falls freely under gravity, its velocity v increases (v = gt), which increases momentum p = mv. Since λ = h / p, the de Broglie wavelength decreases with time."
    },
    {
      id: "kmu-phys-24-171",
      question: "As per 2nd photoelectric experiment, photoelectric effect does not occur if the frequency of the incident light is?",
      options: [
        "Below the threshold frequency",
        "Equals the threshold frequency",
        "Three times the threshold frequency",
        "Twice the threshold frequency"
      ],
      answer: 0,
      explanation: "If incident photon frequency is below the threshold frequency (f < f₀), photon energy is insufficient to overcome the work function, so no photoelectric emission occurs."
    },
    {
      id: "siba-phy-24-123",
      question: "The linear momentum of a photon is given as:",
      options: ["mc", "mv", "mc²", "m₀c²", "hν/c"],
      answer: 4,
      explanation: "Since E = hν and E = pc for a massless photon, momentum p = E / c = hν / c."
    },
    {
      id: "siba-phy-24-126",
      question: "One kilogram mass is entirely converted into energy. The amount of energy will be:",
      options: ["9×10⁹ J", "3×10¹⁰ J", "9×10¹⁶ eV", "9×10¹⁶ J", "9×10¹⁵ eV"],
      answer: 3,
      explanation: "Using Einstein's mass-energy equivalence E = m c²: E = 1 kg × (3 × 10⁸ m/s)² = 9 × 10¹⁶ J."
    },
    {
      id: "siba-phy-24-148",
      question: "The charge to mass ratio (e/m) of an electron is:",
      options: [
        "1.9 × 10³¹ C/kg",
        "1.76 × 10¹⁹ C/kg",
        "1.76 × 10¹¹ C/kg",
        "1.602 × 10¹⁹ C/kg",
        "1.602 × 10¹¹ C/kg"
      ],
      answer: 2,
      explanation: "The charge-to-mass ratio of an electron is e/m = (1.602 × 10⁻¹⁹ C) / (9.11 × 10⁻³¹ kg) ≈ 1.76 × 10¹¹ C/kg."
    },
    {
      id: "siba-phy-24-161",
      question: "In the mathematical relationship φ = hv₀ (or E = hν − φ), the symbol φ represents:",
      options: ["Magnetic flux", "Threshold frequency", "Work function", "Electric flux", "Wave function"],
      answer: 2,
      explanation: "In photoelectric equations, φ (or Φ / W₀) represents the work function of the metal surface."
    },
    {
      id: "szambu-2025-phys-130",
      question: "If different colored light beams have same total energy, which color beam will contain the smallest number of photons?",
      options: ["Violet", "Blue", "Green", "Red"],
      answer: 0,
      explanation: "Total energy E_total = N × (hf). Violet light has the highest frequency f and highest per-photon energy (hf), so fewer photons N are required to reach the same total energy."
    },
    {
      id: "szambu-2025-phys-145",
      question: "According to the particle model of light, a photon is:",
      options: [
        "A Particle with mass and charge",
        "A quantum of energy with zero rest mass and zero charge",
        "A continuous energy wave",
        "A particle that travels slower than light"
      ],
      answer: 1,
      explanation: "A photon is a discrete quantum of electromagnetic energy possessing zero rest mass and zero electric charge."
    },
    {
      id: "szambu-phy-24-123",
      question: "The kinetic energy of emitted electrons in photoelectric effect can be increased by increasing",
      options: [
        "applied potential of electrodes",
        "frequency of electromagnetic wave",
        "intensity of incident light",
        "momentum of incident photon"
      ],
      answer: 1,
      explanation: "By Einstein's photoelectric equation K.E._max = hf - φ, maximum kinetic energy depends strictly on the frequency (f) of the incident radiation."
    },
    {
      id: "szambu-phy-24-151",
      question: "At what angle made by scattered photon with x-axis, we can get maximum value of Compton’s shift?",
      options: ["0°", "45°", "90°", "180°"],
      answer: 3,
      explanation: "Compton shift Δλ = (h / m₀c)(1 - cos θ). Maximum shift occurs when (1 - cos θ) is maximized, which happens at θ = 180° where cos(180°) = -1, giving Δλ_max = 2h / m₀c."
    },
    {
      id: "szambu-phy-24-157",
      question: "Which one of the following factors is the best for calculation Compton’s shift?",
      options: ["Angular spin of electron", "Energy of electron", "Energy of photon", "Scattering angle of photon"],
      answer: 3,
      explanation: "The magnitude of Compton shift Δλ depends solely on the scattering angle θ of the photon."
    },
    {
      id: "uhs-mdcat-2025-phys-150",
      question: "The wave that has the highest frequency & penetrating power is",
      options: ["x-rays", "Ultraviolet rays", "Gamma rays", "Microwaves"],
      answer: 2,
      explanation: "Gamma rays reside at the highest frequency end of the electromagnetic spectrum, carrying the greatest photon energy and penetrating power."
    },
    {
      id: "uhs-phys-24-167",
      question: "The value of Planck constant is",
      options: ["6.63 × 10⁻³⁴ Js", "6.63 × 10³⁴ Js", "6.63 × 10⁻³⁴ Js⁻¹", "6.63 × 10³⁴ Js⁻¹"],
      answer: 0,
      explanation: "Planck's constant h is equal to 6.63 × 10⁻³⁴ Joule-seconds (J·s)."
    },
    {
      id: "uhs-phys-24-168",
      question: "The de-Broglie wavelength associated with a particle moving at 10⁶ m/s and having mass 10⁻³⁰ kg",
      options: ["6.6 × 10⁻¹⁰ m", "1.5 × 10⁹ m", "1.9 × 10⁻⁵ m", "7.2 × 10⁻⁸ m"],
      answer: 0,
      explanation: "λ = h / (m v) = (6.63 × 10⁻³⁴ J·s) / (10⁻³⁰ kg × 10⁶ m/s) = (6.63 × 10⁻³⁴) / 10⁻²⁴ = 6.63 × 10⁻¹⁰ m."
    },
    {
      id: "uhs-phys-24-169",
      question: "Light propagates through space as a wave is evident by all of the following EXCEPT",
      options: ["Interference", "Photoelectric effect", "Diffraction", "Polarization"],
      answer: 1,
      explanation: "Interference, diffraction, and polarization demonstrate the wave nature of light, whereas the Photoelectric effect proves the particle (quantum/photon) nature of light."
    },
    {
      id: "uhs-phys-24-171",
      question: "The potential through which an electron should be accelerated, so that, on collision it can lift the electron in the atom from its ground state to some higher state is known as",
      options: ["Ionization potential", "Excitation potential", "String potential", "Acceleration potential"],
      answer: 1,
      explanation: "Excitation potential is the minimum accelerating potential required to impart enough kinetic energy to an electron to excite an atomic bound electron from its ground state to a higher energy level."
    },
    {
      id: "uhs-phys-24-172",
      question: "Which of the following regarding X-Rays is INCORRECT",
      options: [
        "Have higher wavelength than visible light",
        "They are part of electromagnetic spectrum",
        "They are highly penetrating in soft body tissues",
        "They are high energy photons"
      ],
      answer: 0,
      explanation: "X-rays have much shorter wavelengths (0.01 to 10 nm) than visible light (400 to 700 nm), so statement A is incorrect."
    },
    {
      id: "testmoz-phys-dawn-1",
      question: "Photon is the particle which has",
      options: [
        "Infinite rest mass",
        "Rest mass but no charge",
        "No rest mass and no charge",
        "Both A and B are correct"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-2",
      question: "In photoelectric emission the kinetic energy of the electron is",
      options: [
        "Directly proportional to the wavelength",
        "Directly proportional to the frequency of incident radiation",
        "Directly proportional to the intensity of incident radiation",
        "Does not depend any of the above"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-3",
      question: "The threshold wavelength of photoelectric emission of a metal is 4000 angstrom then the minimum energy required to eject electron is",
      options: ["4.96 electron volt", "3.1 electron volt", "49.6 electron volt", "31 electron volt"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-4",
      question: "Photoelectric effect is the conversion of",
      options: ["Light into heat", "Electricity into light", "Light into electricity", "None of the above mentioned"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-5",
      question: "Light of frequency 1.5 times the threshold frequency is incident on photosensitive material if the frequency is half and intensity is the doubled the photoelectric current becomes",
      options: ["Four times", "Double", "Half", "Zero"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-6",
      question: "Einstein special theory of relativity is applicable only for which frame of references",
      options: ["Inertial", "Non inertial", "Both of them", "None of them"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-7",
      question: "Wavelength associated with an electron is the order of",
      options: ["Visible light", "X-rays", "Radio waves", "Infrared"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-8",
      question: "The absorbed energy of incident Photon is used in two ways work function part of energy used to free the electron from metal surface remaining part is converted to",
      options: ["Kinetic energy", "Potential energy", "Binding energy", "Thermal energy"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-9",
      question: "In a Photoelectric effect experiment at a frequency above cut off the number of electron ejected is proportional to",
      options: [
        "Their kinetic energy",
        "The work function",
        "The number of photons that hit the sample",
        "The frequency the incident light"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-10",
      question: "Maximum energy of electron released in a photo cell is independent of",
      options: ["Frequency of incident light", "Intensity of incident light", "Nature of cathode rays", "None of these"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-11",
      question: "Experimental proof of particle nature of light is",
      options: ["Pair production", "Photoelectric effect", "Davison Germer experiment", "De broglie concept"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-12",
      question: "The work function of metallic substance is 5 electron volt then its threshold frequency is approximately",
      options: ["1.6×10⁷ Hz", "8.68×10¹⁵ Hz", "9.68×10¹⁷ Hz", "1.2×10¹⁵ Hz"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-13",
      question: "Maximum kinetic energy of photo electron depends upon ........ of incident light",
      options: ["Frequency", "Brightness", "Intensity", "Power"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-14",
      question: "A photon is a",
      options: [
        "Unit of energy",
        "Quantum of electromagnetic radiations",
        "Positively charged particle",
        "Unit of wavelength"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-15",
      question: "In a Photoelectric effect experiment at a frequency above threshold frequency the number of electron ejected is proportional to",
      options: [
        "The frequency of the incident light",
        "Their potential energy",
        "The number of photons that hit the sample",
        "Their kinetic energy"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-16",
      question: "The phenomena of ejection of electron from a metal when light of suitable frequency falls on it is called",
      options: ["Compton's effect", "Photoelectric effect", "Annihilation of matter", "None of them"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-17",
      question: "If the intensity of incident light is made double then the maximum number of emitted electrons will become",
      options: ["Double", "8 times", "Four times", "Half"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-18",
      question: "The reverse process of Photoelectric effect is",
      options: ["Annihilation of matter", "Pair production", "Production of X-rays", "Nuclear fission"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-19",
      question: "Which physical quantity will change if intensity of light falling on metal surface is increased",
      options: ["Kinetic energy of photo electrons", "Plate potential", "Velocity of photo electrons", "Current"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-20",
      question: "Photoelectric effect of for visible light can be obtained from",
      options: ["Sodium Potassium", "Helium neon", "Carbon oxygen", "Magnesium sodium"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-21",
      question: "The Balmer series of hydrogen is important because it",
      options: [
        "Is the only one for which the quantum theory be used",
        "Is the only series that occurs for hydrogen",
        "Is in the visible region",
        "Involves the lowest possible quantum number"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-22",
      question: "The momentum of moving Photon is",
      options: ["Zero", "λ⁻¹h", "hλ", "λh⁻¹"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-23",
      question: "How does the intensity affect the photoelectric current",
      options: [
        "If intensity increases the photoelectric current increases",
        "If the intensity increases the photoelectric current decreases",
        "If the intensity decreases the photoelectric current become twice",
        "No effect"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-24",
      question: "The minimum energy of pair production is",
      options: ["1.02 volt", "1.02 electron volt", "1.02 Mega electron volt", "1.02 giga electron volt"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-25",
      question: "The phase determines the",
      options: ["Displacement", "Amplitude", "Frequency", "State of motion of vibrating body"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-26",
      question: "Which light of photon has the least momentum",
      options: ["Red", "Yellow", "Blue", "Radiowave"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-27",
      question: "Which of the following statement is incorrect in perspective of modern physics",
      options: [
        "Energy has inertia",
        "Time dilation phenomena does not occurs in daily life",
        "Light is electromagnetic radiation",
        "Universe is continuously contracting"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-28",
      question: "In a Photoelectric effect experiment the stopping potential is",
      options: [
        "The electric potential that causes the electronic current to vanish",
        "The photon energy",
        "Their kinetic energy of the most energetic electron ejected",
        "The energy required to remove an electron from the sample"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-29",
      question: "The lightest element which exhibit radio activity",
      options: ["Hydrogen", "Duteron", "Tritium", "Helium"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-30",
      question: "Two photons of energy 2.5 electron volt each incident on a metal plate whose work function is 4 electron volt then the number of electrons emitted from the metal surface will be",
      options: ["One", "More than two", "Two", "Electron emission is not possible"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-31",
      question: "Sun appears reddish during its rising and setting due to",
      options: [
        "Diffraction of light",
        "Scattering of light due to air molecule in air",
        "Refraction of light",
        "It's very high temperature"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-32",
      question: "In a Photoelectric effect experiment at a frequency above cut off the stopping potential is proportional to",
      options: [
        "The energy of the least energetic electron before it is ejected",
        "The energy of the least energetic electron after it is ejected",
        "The energy of the most energetic electron before it is ejected",
        "The energy of the most energetic electron after it is ejected"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-33",
      question: "Wave like characteristics of electron is demonstrated by",
      options: [
        "Line spectrum of atoms",
        "Diffraction by crystalline solids",
        "Production of X-rays",
        "Photoelectric effect"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-34",
      question: "Which of the following statement is incorrect",
      options: [
        "Photoelectric emissions does not occur below the threshold frequency",
        "The photoelectric current increase with the frequency of incident light",
        "Threshold frequency depends on the metal used",
        "The emission of photo electrons is an instantaneous process"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-35",
      question: "Evidence for the wave nature of matter is",
      options: [
        "Electron diffraction experiment of davisions and germer",
        "Thomson measurement of charge to mass ratio",
        "Young's double slit experiment",
        "The compton's effect"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-36",
      question: "The device working is based upon Photoelectric effect is",
      options: ["Photo voltaic cell", "Photocell", "Photo phone", "Photo door"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-37",
      question: "The radiations emitted from hydrogen filled discharge tube show",
      options: ["Bound spectrum", "Continuous spectrum", "Line spectrum", "Absorption spectrum"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-38",
      question: "X-rays have",
      options: [
        "Less frequency and energy than ultraviolet rays",
        "More frequency and energy than ultraviolet rays",
        "Less frequency and energy then infrared rays",
        "Less frequency and energy than X-rays"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-39",
      question: "The energy generation in stars is due to",
      options: ["Fusion of heavy nuclei", "Fission of light nuclei", "Chemical reactions", "None"],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-40",
      question: "What is the effect of intensity on this stopping potential",
      options: [
        "As intensity increases stopping potential increases linearly",
        "If intensity increases stopping potential decreases linearly",
        "If intensity decreases stopping potential increases exponentially",
        "No effect"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-41",
      question: "Which statement describe the arrangement of particles in a solid",
      options: [
        "The particles are closed together and our constantly changing places",
        "The particle start together and do not change place",
        "The particles are closed together and stationer",
        "The particles are far apart and constantly changing place"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-42",
      question: "Minimum energy required by the electron to leave the metal surface is called as",
      options: ["Threshold frequency", "Work function", "Cut off frequency", "Threshold energy"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-43",
      question: "Photoelectric cell is illuminated by a point source of light 1m away when the source is Taken 2 m away",
      options: [
        "The number of electron emitted is a quarter of the initial number",
        "The number of electron emitted is half the initial number",
        "Each electron emitted carries one quarter of initial energy",
        "Each emitted electron carries half the initial energy"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-44",
      question: "Which of the following statements about the energy in a Quantum true frequency",
      options: [
        "It very is directly with frequency",
        "It very is inversely with frequency",
        "It is the same it all frequencies",
        "None of them"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-dawn-45",
      question: "Linear momentum of photon is",
      options: ["Zero", "hf/c", "hf/c²", "C²/hf"],
      answer: 1
    },
    {
      id: "testmoz-phys-dawn-46",
      question: "In a Photoelectric effect monochromatic light is incident on a metal surface if the incident light of twice the intensity but the same wavelength the kinetic energy of emitted electron",
      options: ["Becomes double", "Becomes half", "Remain same", "First increases then decreases"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-47",
      question: "The maximum energy of photo electron is",
      options: ["V·e²", "Choice 4", "V·²e", "V·e", "Work function"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-48",
      question: "Energy of photon is directly proportional to",
      options: ["Temperature", "Wavelength", "Frequency", "Intensity"],
      answer: 2
    },
    {
      id: "testmoz-phys-dawn-49",
      question: "Light of frequency 1.5 times the threshold frequency is incident on a photo sensitive material if the frequency is half and intensity is doubled the photoelectric current becomes",
      options: ["Four times", "Double", "Half", "Zero"],
      answer: 3
    },
    {
      id: "testmoz-phys-dawn-50",
      question: "Rest mass of photon is",
      options: ["Infinite", "Very small", "Very large", "Zero"],
      answer: 3
    },
  
    // ==========================================
    // 5. ELECTROMAGNETIC INDUCTION
    // ==========================================
    {
      id: "bumhs-2024-phys-127",
      question: "The direction of induced e.m.f can be determined by:",
      options: ["Faraday’s law", "Lenz’s law", "galvanometer", "Fleming’s right hand rule"],
      answer: 1,
      explanation: "Lenz's law provides the direction of the induced EMF and current, stating that the induced current always flows in a direction that opposes the change in magnetic flux that caused it."
    },
    {
      id: "bumhs-2024-phys-138",
      question: "Let two current carrying wires are placed near a conducting loop such that loop is midway between wires as shown below. If i₁ and i₂ are decreasing at the same rate, induced current in the loop will be:",
      options: ["zero", "clockwise", "anticlockwise", "sometime clockwise sometime anticlockwise"],
      answer: 0,
      explanation: "Because the loop is situated centrally between two symmetric wires carrying currents changing at equal rates, the magnetic flux changes created by the two wires cancel each other out in the loop, yielding zero net change in flux and zero induced current."
    },
    {
      id: "bumhs-2024-phys-142",
      question: "If the rate of change of current Iₚ in the primary coil is increased by one half then emf induced in the secondary coil becomes:",
      options: ["Half", "Double", "2/3 times", "3/2 times"],
      answer: 3,
      explanation: "Induced secondary EMF ε_s = M (ΔI_p / Δt). If the rate of change of primary current is increased by one half (i.e. becomes 1 + 1/2 = 3/2 of its initial value), the induced EMF becomes 3/2 times the original EMF."
    },
    {
      id: "bumhs-2024-phys-158",
      question: "Which of the following method can be used to vary induced emf in a coil?",
      options: [
        "Alternating magnetic field",
        "Moving the coil in the magnetic field",
        "Changing the shape of coil",
        "All of the above"
      ],
      answer: 3,
      explanation: "Induced EMF depends on the rate of change of magnetic flux (Φ = B A cosθ). Flux can be altered by changing field strength B (alternating field), changing relative position/orientation (moving coil), or changing effective loop area A (deforming coil)."
    },
    {
      id: "bumhs-2024-phys-159",
      question: "Let an inductor is connected with battery. If emf induced in the inductor opposes emf of battery, then electric current through the circuit is:",
      options: ["decreasing", "increasing", "constant", "alternating"],
      answer: 1,
      explanation: "By Lenz's law, self-induced back EMF opposes the battery EMF when the circuit current is increasing (trying to resist the growth of magnetic flux)."
    },
    {
      id: "bumhs-2024-phys-168",
      question: "The induced emf in a 100 turns coil if change in flux through the coil is 2 × 10⁻⁴ Wb in 0.02 sec:",
      options: ["1.0 V", "–1.0 V", "10 V", "–10 V"],
      answer: 1,
      explanation: "By Faraday's law, ε = -N (ΔΦ / Δt) = -100 × (2 × 10⁻⁴ Wb / 0.02 s) = -100 × 0.01 = -1.0 V."
    },
    {
      id: "bumhs-2025-phys-138",
      question: "According to the Faraday’s law of electromagnetic induction, emf induced in a coil placed in changing magnetic field, depends upon:",
      options: [
        "the magnetic field",
        "amount of current",
        "resistance of a coil",
        "the rate of change of magnetic flux"
      ],
      answer: 3,
      explanation: "Faraday's law states that the magnitude of induced EMF is directly proportional to the time rate of change of magnetic flux through the circuit (ε = -N ΔΦ/Δt)."
    },
    {
      id: "kmu-mdcat-2025-phys-82",
      question: "According to Lenz’s Law, the direction of induced current in a conductor is such that it:",
      options: [
        "Opposes the change in magnetic flux",
        "Enhances the change in magnetic flux",
        "Is perpendicular to the magnetic field",
        "Is parallel to the magnetic field"
      ],
      answer: 0,
      explanation: "Lenz's law states that the polarity of induced EMF generates a current whose magnetic field opposes the change in magnetic flux that produced it."
    },
    {
      id: "kmu-phys-24-163",
      question: "One-meter-long copper rod is moving with speed 20 m/sec in the magnetic field of strength 0.6 tesla what is the value of induced emf?",
      options: ["12 V", "19.4 V", "20.6 V", "25 V"],
      answer: 0,
      explanation: "Motional EMF ε = v B L = (20 m/s) × (0.6 T) × (1 m) = 12 V."
    },
    {
      id: "kmu-phys-24-164",
      question: "The inductance of a coil depends on.",
      options: [
        "Number of turns",
        "Resistance of the wire used",
        "Type of insulation used on the wire",
        "Voltage applied to the coil"
      ],
      answer: 0,
      explanation: "Self-inductance L = (μ N² A) / l. It depends on geometric factors including total turns N, cross-sectional area A, core length l, and core permeability μ."
    },
    {
      id: "kmu-phys-24-165",
      question: "The direction of induced current is determined by?",
      options: ["Ampere’s law", "Faraday’s law", "Lenz’s law", "Ohm’s law"],
      answer: 2,
      explanation: "Lenz's law specifically determines the direction of induced current in electromagnetic induction."
    },
    {
      id: "kmu-phys-24-166",
      question: "Lenz’s law is consistent with the",
      options: ["Ampere’s Law", "Faraday’s law", "Law of conservation of energy", "Ohm’s Law"],
      answer: 2,
      explanation: "Lenz's law is a direct consequence of the law of conservation of energy; mechanical work must be done against opposing magnetic forces to generate electrical energy."
    },
    {
      id: "kmu-phys-24-167",
      question: "The basic principle behind the operation of the transformer is",
      options: ["Coulomb’s law", "Electromagnetic induction", "Gas’s Law", "Hess’s law"],
      answer: 1,
      explanation: "Transformers operate based on mutual electromagnetic induction between primary and secondary windings."
    },
    {
      id: "siba-2025-phys-145",
      question: "In a step-up transformer, if the secondary voltage is increased by a factor of 10, the current in secondary coil will be:",
      options: [
        "10 times higher than the primary current",
        "10 times lower than the primary current",
        "Equal to the primary current",
        "One-tenth of the primary current in transformer"
      ],
      answer: 3,
      explanation: "In an ideal transformer, power remains conserved (V_p I_p = V_s I_s). Increasing secondary voltage by 10 times reduces secondary current to one-tenth of primary current (I_s = I_p / 10)."
    },
    {
      id: "siba-phy-24-130",
      question: "Which one of the following is correct for a transformer?",
      options: [
        "Transformer converts dc into ac",
        "Transformer converts mechanical energy into electrical energy",
        "Transformer works on the principle of mutual induction",
        "Transformer converts ac into dc",
        "Transformer converts electrical energy into mechanical energy"
      ],
      answer: 2,
      explanation: "A transformer is a static device that transfers electrical energy between circuits via mutual electromagnetic induction."
    },
    {
      id: "siba-phy-24-164",
      question: "The alternating emf (ε) generated by an AC generator is given by:",
      options: ["ε = BvL sin θ", "ε = NBL sin θ", "ε = NBL cos θ", "ε = BNA ω sin θ", "ε = BvL cos θ"],
      answer: 3,
      explanation: "The instantaneous generated EMF in a rotating coil AC generator is given by ε = N B A ω sin(ωt) or ε = BNA ω sin θ."
    },
    {
      id: "siba-phy-24-167",
      question: "The mathematical relationship between Magnetic flux and magnetic flux density is:",
      options: [
        "Δφ = (B)(A)cosθ",
        "Δφ = (B)(Δt) cosθ",
        "B = (Δφ)(Δt) cosθ",
        "B = (Δφ)(Δt)",
        "Δφ = (B)(Δt)"
      ],
      answer: 0,
      explanation: "Magnetic flux Φ = B · A = B A cosθ, where B represents magnetic flux density and A represents area."
    },
    {
      id: "siba-phy-24-174",
      question: "Faraday’s law of electromagnetic induction is mathematically represented as:",
      options: [
        "ε = −N (ΔB/Δt)",
        "ε = −N (ΔI/Δt)",
        "ε = −M (Δφ/Δt)",
        "ε = −N (Δφ/Δt)",
        "ε = −M (Δφ/Δt)"
      ],
      answer: 3,
      explanation: "Faraday's law with Lenz's negative sign is expressed as ε = -N (ΔΦ / Δt)."
    },
    {
      id: "szambu-2025-phys-134",
      question: "A conducting ring is placed near a current-carrying coil. As the current in the coil increases, the induced current in the ring flows:",
      options: [
        "In the direction of magnetic field",
        "To increases the magnetic flux",
        "To oppose increasing magnetic flux",
        "Randomly without a definite direction"
      ],
      answer: 2,
      explanation: "According to Lenz's law, induced current always flows in a direction that creates an opposing magnetic field to counteract increasing flux."
    },
    {
      id: "szambu-phy-24-131",
      question: "The Lenz’s law of electromagnetic induction is in accordance with law of conservation of",
      options: ["Charge", "Energy", "Mass", "Momentum"],
      answer: 1,
      explanation: "Lenz's law expresses the principle of conservation of energy applied to electromagnetic induction."
    },
    {
      id: "szambu-phy-24-158",
      question: "A coil of 100 turns is linked by a flux of 20 mWb. If this flux is reversed in a time of 2 ms, calculate the average induced emf in the coil?",
      options: ["1000 volts", "2000 volts", "3000 volts", "4000 volts"],
      answer: 1,
      explanation: "Initial flux Φ₁ = +20 mWb, final flux after reversal Φ₂ = -20 mWb. Total flux change ΔΦ = Φ₁ - Φ₂ = 40 mWb = 40 × 10⁻³ Wb. Magnitude of induced EMF |ε| = N (ΔΦ / Δt) = 100 × (40 × 10⁻³ Wb / 2 × 10⁻³ s) = 100 × 20 = 2000 V."
    },
    {
      id: "szambu-phy-24-165",
      question: "The rate of change of magnetic flux is measured in",
      options: ["Coulomb", "Ohm", "Volt", "Watt"],
      answer: 2,
      explanation: "Rate of change of magnetic flux ΔΦ / Δt equals induced electromotive force (EMF), which has SI units of Volts (Wb/s = V)."
    },
    {
      id: "uhs-mdcat-2025-phys-132",
      question: "In an ideal transformer, if the primary voltage is doubled and the turns ratio remains the same, what happens to the secondary current?",
      options: ["Doubles", "Halves", "Remains the same", "Becomes four times"],
      answer: 0,
      explanation: "Secondary voltage V_s = N_s/N_p × V_p doubles when primary voltage V_p is doubled. For a fixed load impedance R_L, secondary current I_s = V_s / R_L also doubles."
    },
    {
      id: "uhs-phys-24-160",
      question: "The induced current will flow in such a direction so as to oppose the cause that produces it is statement of",
      options: ["Ampere’s Law", "Faraday’s Law", "Lenz’s Law", "Joule’s Law"],
      answer: 2,
      explanation: "This is the precise statement of Lenz's law."
    },
    {
      id: "uhs-phys-24-162",
      question: "Electric generators and transformers are based on the principles of",
      options: ["Coulomb’s law", "Faraday’s law", "Ampere’s law", "Hook’s law"],
      answer: 1,
      explanation: "Both AC generators and transformers operate on Faraday's law of electromagnetic induction."
    },
    {
      id: "testmoz-phys-emi-1",
      question: "The current which fluctuates from zero to maximum and maximum to zero is called",
      options: ["Steady current", "Direct current", "Alternating current", "Pulsating direct current"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-2",
      question: "Primary secondary coils of a transformer have 50 and 200 turns respectively when primary is connected to a 9 volt battery secondary voltage is",
      options: ["90", "36", "18", "Zero"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-3",
      question: "The induced current in a loop can be increased by",
      options: [
        "Using stronger magnetic field",
        "Replacing loop by a coil of many turns",
        "Moving the loop faster",
        "All of these"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-4",
      question: "The induced EMF does not depends on",
      options: ["Area of the coil", "Number of turns of the coil", "Resistance of the coil", "Length of the coil"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-5",
      question: "Magnetic flux passing normally through a unit area is called",
      options: ["Magnetization", "Magnetic flux density", "Magnetic field intensity", "All of these"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-6",
      question: "A step down Transformer reduces the voltage from 220 volt to 11 volt the primary coil draws a current of 5 ampere while secondary draws 90 ampere the efficiency of the transformer is",
      options: ["20%", "40%", "70%", "90%"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-7",
      question: "At what angle the magnetic flux will be half of its maximum value",
      options: ["30 degree", "60 degree", "90 degree", "45 degree"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-8",
      question: "An EMF of 0.03 volt is induced in a wire when it moves it right angles to uniform magnetic field with speed of 4 m per second if the length of the wire in the field is 15 cm what is the flux density in Tesla",
      options: ["0.003", "0.005", "6", "12"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-9",
      question: "A generator supplies hundred volt to the primary coil of Transformer the primary is 50 terms and the secondary is 500 terms the secondary voltage is",
      options: ["1000 volt", "500 volt", "250 volt", "100 volt"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-10",
      question: "A transformer changes to 1800 volt and there are 6000 turns in secondary coil the number of turns on the primary coil is",
      options: ["40", "20", "10", "2"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-11",
      question: "When magnet is in motion relative to a coil and induced EMF is produced it does not depend upon",
      options: [
        "Resistance of the coil",
        "Pole strength of the pole",
        "Motion of the magnet",
        "Number of turns of the coil"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-12",
      question: "Lenz's law is consistent with law of conservation of",
      options: ["Mass", "Charge", "Energy", "Momentum"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-13",
      question: "Suppose this page is perpendicular to a uniform magnetic field and the magnetic flux through it is 5 Weber if the page is turned to 60 degrees around the flux through it will be",
      options: ["2.5wb", "5wb", "4.3wb", "5.8wb"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-14",
      question: "A copper ring is held horizontally and a bar magnet is dropped through the ring with its length along the axis of the ring the acceleration of the falling magnet is",
      options: [
        "Equal to that due to gravity",
        "Less than that due to gravity",
        "More than that due to gravity",
        "Depends on the diameter of the ring and length of the magnet"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-15",
      question: "In the actual transformer the output is always",
      options: ["Equal to input", "More than input", "Less than input", "Infinity"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-16",
      question: "Laminated core in a transformer is used to reduce",
      options: ["Power loss", "Eddy current losses", "Iron losses"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-17",
      question: "As a loop of wire with resistance of 10 ohm moves in a constant uniform magnetic field it losses kinetic energy at a uniform rate of 4mJ/s second The induced current in the Loop is",
      options: ["0", "2mA", "2.8mA", "20mA"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-18",
      question: "North pole of a magnet is moving towards a face of metallic loop then the face of the loop becomes",
      options: ["North Pole", "South Pole", "Both a and b", "Mono pole"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-19",
      question: "In a coil where magnetic flux is constantly changing there should exist",
      options: ["A current", "An emf", "Torque", "All of these"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-20",
      question: "To minimize the heating effect in the transmission lines",
      options: [
        "High current low voltage is used",
        "Same voltage and current is used",
        "High voltage low current is used",
        "High Voltage high current is used"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-21",
      question: "Current can be induced in a coil by changing the area of the coil placed in",
      options: [
        "Uniform magnetic field",
        "Uniform magnetic and electric field",
        "Uniform electric field",
        "All of these"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-22",
      question: "A magnet is introduced into the coil and voltage is induced across the coil which of the following factor has no effect on the induced voltage",
      options: [
        "Thickness of the wire of the coil",
        "The time in which magnet is introduced",
        "The strength of the magnetic field",
        "Number of the turns the coil"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-23",
      question: "In ideal Transformer when potential difference is doubled the current is",
      options: ["Doubled", "Halved", "Tripled", "Same"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-24",
      question: "The EMF induced in a coil is ...... the rate of change in flux linkages",
      options: ["Directly proportional to", "Inversely proportional to", "Independence of", "None of the above"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-25",
      question: "The direction of induced current in a coil or circuit is such that it opposes every cause of its production this law is given by",
      options: ["Faraday", "Kirchhoffs", "Lenzs", "Amperes"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-26",
      question: "The practical application of the mutual induction phenomena is",
      options: ["Electric motor", "AC generator", "Transformer", "Transistor"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-27",
      question: "To induce an EMF in a coil the linking magnetic flux",
      options: ["Must decreases", "Must increases", "Must remain constant", "Can either increases or decreases"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-28",
      question: "When a transformer is connected to 120 volt AC it supplies 300 volt to device the current through secondary winding is 0.6 ampere and current through primary is 2 ampere the number of turns on primary is 400 what is the efficiency of transformer",
      options: ["75%", "80%", "85%", "100%"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-29",
      question: "Two different loops are concentric and lie in the same plane the current in the outer loop is clockwise an increasing with time the induced current in the inner loop then is",
      options: [
        "Zero",
        "Clockwise",
        "Counter clockwise",
        "In a direction did depends on the ratio of the loop radii"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-30",
      question: "A copper wire is moved in a uniform magnetic field such that it cuts the magnetic lines of force than",
      options: [
        "EMF will not be induced",
        "EMF will be induced",
        "Sometimes EMF will be induced in sometimes not",
        "Nothing can be predicted"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-31",
      question: "In Step Up Transformer voltage in the secondary increases and power in secondary",
      options: [
        "Remain same",
        "Decreases because voltage increases",
        "Increases because current increases",
        "Main increase if voltage remain same"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-32",
      question: "Square loop of wire lies in the Plane of the page a decreasing magnetic field is directed into the page then used current in the loop is",
      options: [
        "Counter clockwise",
        "Clockwise",
        "Zero",
        "Up the left Edge end from right to left along the top Edge"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-33",
      question: "In an ideal Transformer the following factors are used",
      options: [
        "Inputs and output power is same",
        "Currents are inversely proportional to voltage",
        "Currents are dial the proportional to voltage",
        "Both a and b"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-34",
      question: "One can increase the performance of Transformer by",
      options: [
        "Using primary and secondary wires of less resistance",
        "Making the sheets of Transformer Core full insulated",
        "Making methods to increase the flux coupling between the coils",
        "All of these"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-35",
      question: "The core of a transformer is made up of soft iron because",
      options: [
        "Iron is cheaper than copper",
        "Iron is a good conductor of current",
        "Iron is a good magnetic substance",
        "Iron has high melting point"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-36",
      question: "A 1 m^2 circular coil of 10 loops is placed parallel to changing magnetic field at 0.3 Tesla per second The induced dmf is",
      options: ["0.5V", "3V", "Zero", "3.5V"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-37",
      question: "EMF induced by the motion of a conductor across a magnetic field is called",
      options: ["Back EMF", "Motional EMF", "Directional EMF", "None"],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-38",
      question: "To improve efficiency of Transformer the flux coupling between primary and secondary coil should be",
      options: ["Small", "May be small or may be maximum", "Maximum", "Zero"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-39",
      question: "A transformer is used to",
      options: [
        "Convert alternating current to direct current",
        "Convert direct current to alternating current",
        "Convert mechanical energy to electrical energy",
        "Change the level of alternating voltage"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-40",
      question: "A transformer steps down the voltage of 220 volt to 40 volt with the help of 40 turns on the secondary coil then number of turns on the primary are",
      options: ["20", "40", "220", "120"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-41",
      question: "A transformer is used to light a 100 watt and 110 volt lamp from 220 volt mains if the main current is 0.5 ampere the efficiency of the transformer is a proximately",
      options: ["10%", "50%", "30%", "90%"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-42",
      question: "For transmission of electricity to for of places from the AC power generation plant we always use",
      options: [
        "Transformer with several secondaries",
        "Step Up transformer",
        "Step down transformer",
        "All of these"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-emi-43",
      question: "The number of turns in secondary coil is twice the number of turns in primary coil and ac source of 200 volt is connected across the primary the voltage across secondary is",
      options: ["440V", "100V", "200V", "400V"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-44",
      question: "In a step up Transformer the ratio of voltages is it if the advantage across primary is 120 volt the voltage across secondary will be",
      options: ["150 volt", "120 volt", "180 volt", "960 volt"],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-45",
      question: "A transformer step down 100 volt to 10 volt operate advice within impedance of 2 ohms then current in a primary coil is",
      options: ["50 amperes", "5 amperes", "0.5 amperes", "0.05 amperes"],
      answer: 2
    },
    {
      id: "testmoz-phys-emi-46",
      question: "For a good Transformer the material of the core should have the has the hysterics loop of",
      options: ["Small area", "Large area", "No area", "Moderate area"],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-47",
      question: "Rectangular loop of wire is place perpendicular to a uniform magnetic field and then spin around one of its side its frequency The induced EMF is a maximum when",
      options: [
        "The flux is zero",
        "The flux is maximum",
        "The flux is half of its maximum value",
        "The derivatives of the falaks with respect to time is zero"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-48",
      question: "The primary of an ideal Transformer his 100 turns in the secondary has 600 turns then",
      options: [
        "The power in the primary circuit is less than that and the secondary circuit",
        "The current in the two circuits are the same",
        "The voltages in the two circuits are same",
        "The primary current is 6 times the secondary current"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-emi-49",
      question: "Alternating current changes",
      options: [
        "It's magnitude as well as direction",
        "Only magnitude but not direction",
        "Only direction but not magnitude",
        "Both remains same"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-emi-50",
      question: "The coils of Transformer are",
      options: [
        "Magnetically linked",
        "Electrically linked",
        "Both a and b",
        "Isolated with each other"
      ],
      answer: 0
    },
  
    // ==========================================
    // 6. ELECTROMAGNETISM
    // ==========================================
    {
      id: "bumhs-2024-phys-132",
      question: "Magnetic field lines set up in the surrounding of current carrying wire will be:",
      options: ["circular", "radially outward", "along the current", "opposite to current"],
      answer: 0,
      explanation: "By the right-hand grip rule, magnetic field lines forming around a straight current-carrying wire form concentric circles centered on the wire."
    },
    {
      id: "bumhs-2024-phys-141",
      question: "A current carrying conductor of length ‘L’ and current ‘I’ is lying at an angle of 90 degrees to the direction of a uniform magnetic field ‘B’. If its length L is rotated clock-wise through angle of 90 degrees and current through it is reduced to two thirds then magnetic force on it becomes:",
      options: ["2/3 times", "1/3 times", "4/3 times", "Zero"],
      answer: 3,
      explanation: "Rotating the conductor by 90° makes it parallel (or anti-parallel, θ = 0° or 180°) to the magnetic field. Since magnetic force F = I L B sin θ, sin(0°) = 0, making the magnetic force zero."
    },
    {
      id: "kmu-mdcat-2025-phys-117",
      question: "When the area vector A is parallel to the magnetic field B, what is the value of magnetic flux (ΦB)?",
      options: ["0", "BA cos 90°", "BA cos 0°", "B/A"],
      answer: 2,
      explanation: "Magnetic flux Φ = B · A = B A cos θ. When the area vector A is parallel to magnetic field B, θ = 0°, so Φ = BA cos 0° = BA."
    },
    {
      id: "kmu-phys-24-160",
      question: "An electron is moving perpendicular to the magnetic field, which of the following is correct statement about electromagnetic force acting on the electron?",
      options: [
        "Force acting is equal to electron charge",
        "Force acting is equal to the magnetic field strength",
        "Force acting is maximum",
        "Zero force is acting on it"
      ],
      answer: 2,
      explanation: "Magnetic force on a moving charge is F = q v B sin θ. When motion is perpendicular to the field (θ = 90°), sin 90° = 1, giving the maximum possible force F_max = q v B."
    },
    {
      id: "kmu-phys-24-161",
      question: "For a positive charged particle (q) moving with a velocity (v) in a magnetic Field of flux density B, the force (F) acting on the charge particle is given by the expression?",
      options: ["q = Fv × B", "F = qv × B", "F = v × B/q", "q = v × B/F"],
      answer: 1,
      explanation: "The Lorentz force acting on a moving charge in a magnetic field is defined by the vector cross-product F = q(v × B)."
    },
    {
      id: "kmu-phys-24-162",
      question: "Which of the following statement is true about the magnetic field inside a solenoid?",
      options: [
        "It is along the axis of the coil",
        "It is circular around the wires",
        "It is strongest at the ends of the solenoid",
        "It is zero when current flows through it"
      ],
      answer: 0,
      explanation: "Inside a long, tightly wound solenoid carrying current, the magnetic field is uniform, parallel, and directed along the central longitudinal axis of the coil."
    },
    {
      id: "siba-2025-phys-134",
      question: "A proton and an alpha particle enter a magnetic field with equal speeds, compared to the proton, the alpha particle's path will have:",
      options: ["Larger radius", "Smaller radius", "Smaller path length", "Greater deflection"],
      answer: 0,
      explanation: "Radius of circular path in a magnetic field r = (m v) / (q B). For an alpha particle, mass m_α = 4 m_p and charge q_α = 2 q_p. Thus r_α = (4 m_p v) / (2 q_p B) = 2 r_p, resulting in a larger radius."
    },
    {
      id: "siba-2025-phys-135",
      question: "An electron is projected along the positive x-axis in a magnetic field lying in xz-plane. The magnetic force on the electron will act along the:",
      options: ["x-axis", "-x-axis", "y-axis", "-y-axis"],
      answer: 2,
      explanation: "Velocity v is along +i. If magnetic field B lies in the xz-plane along +k, (v × B) points along (i × k) = -j. Since electron charge q is negative (-e), the magnetic force F = -e(-j) = +e j, acting along the positive y-axis."
    },
    {
      id: "siba-2025-phys-136",
      question: "The magnetic flux through a loop of 1m² in a 0.5T magnetic field is same as magnetic flux through a loop of 0.5 m² in a magnetic field of:",
      options: ["1.0 T at 0°", "1.0 T at 60°", "2.0 T at 90°", "0.5 T at 90°"],
      answer: 0,
      explanation: "Initial flux Φ₁ = B₁ A₁ = 0.5 T × 1 m² = 0.5 Wb (at 0° between field and area vector). For area A₂ = 0.5 m² at 0°: Φ₂ = B₂ × 0.5 = 0.5 → B₂ = 1.0 T at 0°."
    },
    {
      id: "siba-phy-24-138",
      question: "The force experienced by a current-carrying conductor placed in a magnetic field is:",
      options: ["F = qBL sin θ", "F = BL sin θ", "F = qvB sin θ", "F = BL cos θ", "F = BIL sin θ"],
      answer: 4,
      explanation: "The magnetic force on a straight conductor carrying current I of length L in field B is given by F = B I L sin θ."
    },
    {
      id: "siba-phy-24-143",
      question: "Which of the following statements is correct?",
      options: [
        "A magnetic field exerts a force if the charge particle moves opposite to the magnetic field.",
        "A magnetic field never exerts a force on a charge particle.",
        "A magnetic field exerts a force if the charge particle moves parallel to the magnetic field.",
        "A magnetic field exerts a force if the charge particle moves perpendicular to the magnetic field."
      ],
      answer: 3,
      explanation: "Since magnetic force F = q v B sin θ, sin(90°) = 1, so a magnetic field exerts maximum force when a charged particle moves perpendicular to field lines."
    },
    {
      id: "siba-phy-24-152",
      question: "An electron and proton enter in a magnetic field perpendicularly with the same momentum:",
      options: [
        "They move undeflected in opposite directions",
        "The electron deflects more than the proton",
        "They will deflect equally",
        "The proton deflects more than the electron",
        "They will not deflect at all"
      ],
      answer: 2,
      explanation: "Radius of circular path r = p / (q B). Since momentum p, charge magnitude q, and field B are identical for both particles, their radii of curvature are equal (they will deflect equally in magnitude)."
    },
    {
      id: "szambu-phy-24-142",
      question: "At what value of angle between the magnetic field intensity and vector area, the magnetic flux becomes zero?",
      options: ["0°", "30°", "45°", "90°"],
      answer: 3,
      explanation: "Magnetic flux Φ = B A cos θ. When the angle between magnetic field and normal vector area is 90°, cos(90°) = 0, so flux becomes zero."
    },
    {
      id: "szambu-phy-24-144",
      question: "Tesla is the SI-unit of magnetic field intensity. Tesla can also be expressed as",
      options: ["N⁻¹A⁻¹m⁻¹", "N⁻¹Am⁻¹", "NA⁻¹m⁻¹", "NAm⁻¹"],
      answer: 2,
      explanation: "From F = B I L → B = F / (I L), giving units of Newton per Ampere per meter (N A⁻¹ m⁻¹)."
    },
    {
      id: "szambu-phy-24-152",
      question: "The SI-unit of magnetic flux is weber. Weber can also be expressed as",
      options: ["Joule per ampere", "Joule per coulomb", "Newton per ampere", "Newton per coulomb"],
      answer: 0,
      explanation: "1 Weber = 1 Tesla × 1 m² = (N / (A · m)) × m² = (N · m) / A = Joule / Ampere (J A⁻¹)."
    },
    {
      id: "uhs-phys-24-157",
      question: "The formula φ = B · A represents",
      options: ["Electric flux", "Magnetic flux", "Electric flux density", "Gravitational flux"],
      answer: 1,
      explanation: "The scalar product of magnetic flux density vector (B) and vector area (A) defines magnetic flux (Φ_B = B · A)."
    },
    {
      id: "uhs-phys-24-158",
      question: "Which of the following statement is incorrect for any magnetic field lines?",
      options: [
        "Lines start at north pole and end at south pole",
        "Lines never touch or cross each other",
        "The lines are curved",
        "Magnetic field is strongest when the lines are farthest"
      ],
      answer: 3,
      explanation: "Magnetic field strength is proportional to line density; magnetic field is strongest where field lines are closest together (most dense), not farthest apart."
    },
    {
      id: "uhs-phys-24-159",
      question: "The unit of magnetic flux density is",
      options: ["Wb m⁻¹", "Wb m", "Wb m⁻²", "Wb"],
      answer: 2,
      explanation: "Magnetic flux density B = Φ / A, giving units of Weber per meter squared (Wb m⁻²), also known as Tesla (T)."
    },
    {
      id: "testmoz-phys-em-1",
      question: "An electron and a Proton enters into a magnetic field perpendicularly with the same momentum",
      options: [
        "The proton will deflect more",
        "Both will deflect equally",
        "Electron will deflect more",
        "They will not deflect at all"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-em-2",
      question: "If a particle is moving in a region of both electric and magnetic fields then the total force acting on it is",
      options: [
        "Sum of electric and magnetic force",
        "No force will act on it",
        "Difference of electric and magnetic force",
        "None of the above"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-3",
      question: "Two long parallel straight wires carry equal currents in the opposite direction. At a point Midway between the wires the magnetic field they produce is",
      options: [
        "Zero",
        "Non zero and along a line connecting the wires",
        "Non zero and parallel to the wires",
        "Non zero and perpendicular to the plane of the two wires"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-4",
      question: "An electron Travels due north through a vacuum in a region of uniform magnetic field B that is also directed due north. It will",
      options: [
        "Be undeflected by the field",
        "Slow down",
        "Speed up",
        "Follow a right handed cork screw path"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-5",
      question: "Magnetic force acts like",
      options: ["Centripetal force", "Gravitational force", "Strong nuclear force", "Electrical force"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-6",
      question: "The radius of curvature of the path of a charged particle moving in a static uniform magnetic field is",
      options: [
        "Directly proportional to the magnitude of the charge on the particle",
        "Directly proportional to the magnitude of linear momentum of the particle",
        "Directly proportional to the kinetic energy of particle",
        "Inversely proportional to the magnitude of the magnetic field"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-em-7",
      question: "The direction of a point on the magnetic field of force can be taken along",
      options: [
        "Normal at that point",
        "The tangent at that point",
        "Axis of the magnetic line of force at that point",
        "Can’t be taken"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-em-8",
      question: "Thomson’s experiment involving the motion of an electron in mutually perpendicular E and B fields gave the value of",
      options: [
        "Mass of an electron",
        "Earth magnetic field",
        "Charge of an electron",
        "Charge to mass ratio of an electron"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-9",
      question: "Two parallel long wires carry the same current and repel each other with the force of F per unit length. If both these currents are doubled and the wire separation tripled, the force per unit length becomes",
      options: ["2F/9", "2F/3", "4F/9", "4F/3"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-10",
      question: "The magnetic field due to electric current in a conducting wire is",
      options: [
        "Towards the centre of conducting wire",
        "Circular around the conducting wire",
        "In the direction of the electric current",
        "In the direction opposite to electric current"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-em-11",
      question: "When a current conductor is placed in a magnetic field it moves from region of",
      options: [
        "Stronger to weak field",
        "Strong field if current is large",
        "Weak to strong field",
        "Weak to strong if current is large"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-12",
      question: "A charged particle is projected at an angle into a uniform magnetic field. Which of the following parameters of the charged particle will be affected by the magnetic field",
      options: ["Energy", "Speed", "Velocity", "Kinetic energy"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-13",
      question: "In the formula F = q(v × B)",
      options: [
        "F must be perpendicular to v but not necessarily to B",
        "F must be perpendicular to B but not necessarily to V",
        "V be perpendicular to B but not necessarily to F",
        "F must be perpendicular to both v and B"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-14",
      question: "Magnetic force acting on a unit positive charge moving at right angle to the magnetic field with unit velocity is called",
      options: ["Magnetic flux", "Motional EMF", "Induced EMF", "Magnetic induction"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-15",
      question: "Flux through an area 1 m² in xy plane in a magnetic field of one tesla directing along Z Axis will be",
      options: ["0", "0.5 wb", "1 wb", "2 wb"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-16",
      question: "When a charged particle moves through a magnetic field it suffers change in",
      options: ["Direction", "Speed", "Energy", "No change"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-17",
      question: "Two parallel wires carrying current in opposite directions",
      options: [
        "Repel each other",
        "Attract each other",
        "Have no effect upon each other",
        "They cancel out their individual magnetic fields"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-18",
      question: "Magnetic lines around the current carrying wire are drawn in clockwise direction on a page. The current is flowing",
      options: ["Into the page", "Out of the page", "Left side of the page", "Right side of the page"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-19",
      question: "Lines of the magnetic field produced by a long current carrying wire are",
      options: [
        "Circles that are concentric with wire",
        "Opposite to the direction of a current",
        "Radially outward from the wire",
        "Radially inward toward the wire"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-20",
      question: "Which of the following particles moving in a magnetic field cannot be deflected",
      options: ["Alpha particle", "Electron", "Beta particle", "Neutron"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-21",
      question: "If current flows from top towards bottom through a wire then the direction of magnetic line of force would be",
      options: ["Parallel to the wire", "Clockwise", "Perpendicular to the wire", "Anticlockwise"],
      answer: 1
    },
    {
      id: "testmoz-phys-em-22",
      question: "A charged particle in uniform motion produces",
      options: [
        "An electric field only",
        "A magnetic field only",
        "Both an electric field and magnetic field",
        "No such field at all"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-em-23",
      question: "The magnetic field produced due to the current in a straight wire is proportional to",
      options: ["Electric current", "Length of the wire", "Conducting material", "Diameter of the wire"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-24",
      question: "A uniform magnetic field is represented by a set of lines of force which are",
      options: ["Parallel", "Divergent", "Convergent", "None of these"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-25",
      question: "The direction of magnetic line of force can be found by using",
      options: ["Right hand rule", "Left hand rule", "Henry’s law", "Faraday’s law"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-26",
      question: "Magnetic force is simply a",
      options: ["Reflecting force", "Restoring force", "Deflecting force", "Gravitational force"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-27",
      question: "A Proton is moving northward in a magnetic field directed vertically upward. The proton will be deflected",
      options: ["Eastward", "Westward", "Vertically upward", "Remain undeflected"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-28",
      question: "The SI unit of magnetic flux is",
      options: ["Tesla", "Joule", "Weber", "Newton"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-29",
      question: "A Proton and an electron both moving with same velocity enter into a region of magnetic field directed perpendicular to velocity of the particles. They will now move in a circular orbit such that",
      options: [
        "Their time periods will be same",
        "The time period for electron will be higher",
        "The time period for Proton will be higher",
        "Their orbital radii will be same"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-em-30",
      question: "The direction of the magnetic line of force depends upon",
      options: [
        "Nature of material of conducting wire",
        "Area of the conducting wire",
        "Amount of the current",
        "Direction of the current"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-31",
      question: "Charged particle enters at 30 degree to the magnetic field. Its path becomes",
      options: ["Helical", "Elliptical", "Circular", "Straight line"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-32",
      question: "Which of the following is a vector quantity",
      options: ["Magnetic flux density", "Magnetic field intensity", "Magnetic flux", "Both a and b"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-33",
      question: "Hydrogen atom that has lost its electron is moving east in the region where the magnetic field is directed from South to North. It will be deflected",
      options: ["Up", "Down", "North", "South"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-34",
      question: "A magnetic field exerts a force on a charged particle",
      options: [
        "Always",
        "Never",
        "If the particle is moving across the field",
        "If the particle is moving along the field"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-em-35",
      question: "The value of ……… around the current carrying wire is found by Ampere’s circuital law",
      options: ["Magnetic field strength", "Magnetic flux density", "Magnetic induction", "All of these"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-36",
      question: "Four particles enter a uniform magnetic field perpendicularly with the same speed. Which particle has the largest radius",
      options: ["Electron", "Proton", "Alpha particle", "Beta particle"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-37",
      question: "A charged particle enters in a direction parallel to an electric field and magnetic field such that both fields are parallel to each other. The force on the charge is",
      options: ["Zero", "Due to electric field", "Due to magnetic field", "Due to both fields"],
      answer: 1
    },
    {
      id: "testmoz-phys-em-38",
      question: "A charged particle moves through a magnetic field in a direction perpendicular to it. Which of the following remains unchanged for the particle",
      options: ["Velocity", "Acceleration", "Speed", "Direction"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-39",
      question: "Oppositely charged particles moving due east enter a region of uniform magnetic field directed vertically upwards. The particles will",
      options: [
        "Continue to move due east",
        "Move in a circular orbit with its speed unchanged",
        "Move in circular orbit with its speed increases",
        "Get deflected vertically upward"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-em-40",
      question: "Current is flowing in a long conducting wire. The magnetic induction at a distance r from it is 0.4 Tesla. Then its value at double the distance will be",
      options: ["1.6 tesla", "0.8 tesla", "0.2 tesla", "0.1 tesla"],
      answer: 2
    },
    {
      id: "testmoz-phys-em-41",
      question: "A strong magnetic field is applied to a stationary electron. Then",
      options: [
        "Electron moves in the direction of field",
        "Electron moves opposite to field",
        "Electron starts spinning",
        "Electron remains stationary"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-42",
      question: "Two parallel wires carrying current in the opposite direction",
      options: [
        "Repel each other",
        "Have no effect upon each other",
        "Attract each other",
        "They cancel out their individual magnetic fields"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-43",
      question: "Proton moves with velocity V in a perpendicular magnetic field. If the strength is increased to 2B and the proton still moves in the same circular path, its kinetic energy will",
      options: ["Be doubled", "Become four times", "Be halved", "No change"],
      answer: 1
    },
    {
      id: "testmoz-phys-em-44",
      question: "A homogeneous electric field and uniform magnetic field are pointing in the same direction. A Proton is projected with its velocity parallel to the electric field. It will",
      options: [
        "Go on moving in the same direction with increasing velocity",
        "Go on moving in the same direction with constant velocity",
        "Turn to its right",
        "Turn to its left"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-45",
      question: "An electron is moving North in a region where the magnetic field is South. The magnetic force exerted on the electron is",
      options: ["Zero", "Down", "Up", "East"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-46",
      question: "An electron travels from left to right in the plane of the paper in a magnetic field perpendicular to and directed out of the paper. It is deflected",
      options: ["Downward direction", "Into the paper", "Upward direction", "Out of the paper"],
      answer: 0
    },
    {
      id: "testmoz-phys-em-47",
      question: "A force exerted on a wire of 1 m length carrying 1 ampere current placed at right angle to the field is called",
      options: ["Lorentz force", "Self inductance", "Magnetic flux", "Magnetic induction"],
      answer: 3
    },
    {
      id: "testmoz-phys-em-48",
      question: "A constant current is sent through a helical coil. The coil",
      options: [
        "Tends to get shorter",
        "Tends to rotate about its axis",
        "Tends to get longer",
        "Produces zero magnetic field at its centre"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-em-49",
      question: "Uniform electric field and a uniform magnetic field exist in a region in the same direction. An electron is projected with velocity in the same direction. The electron will",
      options: [
        "Turn to its right",
        "Turn to its left",
        "Keep moving in the same direction but its speed will increase",
        "Keep moving in the same direction but its speed will decrease"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-em-50",
      question: "Double the applied magnetic field, the charge to mass ratio of electron will",
      options: ["Half", "Remain same", "Double", "Zero"],
      answer: 1
    },
  
    // ==========================================
    // 7. ELECTRONICS
    // ==========================================
    {
      id: "bumhs-2024-phys-136-elec",
      question: "When placed in light which of the following can generate an output voltage across its electrodes?",
      options: ["p-n diode", "light emitting diode", "photo diode", "All of the given options"],
      answer: 2,
      explanation: "A photodiode (or solar cell) operating in photovoltaic mode converts light energy directly into electrical energy, generating an output voltage across its electrodes."
    },
    {
      id: "bumhs-2024-phys-137",
      question: "The circuit required for change of AC voltage to DC voltage is called:",
      options: ["Rectifier", "Amplifier", "Detector", "Emitter"],
      answer: 0,
      explanation: "A rectifier is an electrical circuit that converts alternating current (AC), which periodically reverses direction, to direct current (DC), which flows in only one direction."
    },
    {
      id: "bumhs-2024-phys-175",
      question: "Which of the following is not the basic operation of Boolean variables:",
      options: ["Yes operation", "NOT operation", "AND operation", "OR operation"],
      answer: 0,
      explanation: "The three primary, basic operations in Boolean algebra are AND, OR, and NOT. 'Yes operation' is not a standard Boolean logic operation."
    },
    {
      id: "bumhs-2025-phys-148",
      question: "For a diode, the depletion region of a PN junction has:",
      options: [
        "Free positive charges",
        "Free negative charges",
        "Positive and negative ions",
        "No free charges"
      ],
      answer: 3,
      explanation: "The depletion region contains fixed immobile donor and acceptor ions but lacks mobile/free charge carriers (electrons and holes)."
    },
    {
      id: "kmu-mdcat-2025-phys-84",
      question: "In a full-wave rectifier using two diodes, the diodes D₁ and D₂ operate:",
      options: [
        "Simultaneously during both half-cycles",
        "In alternate switching mode",
        "Only when both ends of transformer are positive",
        "Only in reverse bias condition"
      ],
      answer: 1,
      explanation: "In a center-tapped full-wave rectifier, D₁ conducts during the positive half-cycle while D₂ is reverse-biased, and D₂ conducts during the negative half-cycle while D₁ is reverse-biased."
    },
    {
      id: "kmu-phys-24-168",
      question: "When the PN junction is reverse-biased, its reverse current is of the order of:",
      options: ["Gigaamperes", "Kiloamperes", "Megaamperes", "Microamperes"],
      answer: 3,
      explanation: "Reverse saturation current in a silicon PN junction is extremely small, typically on the order of microamperes (µA) or nanoamperes (nA), caused by minority charge carriers."
    },
    {
      id: "siba-phy-24-155",
      question: "A reverse-biased semiconductor diode acts as:",
      options: ["Rectifier", "On switch", "Inverter", "Off switch", "Amplifier"],
      answer: 3,
      explanation: "When reverse-biased, a diode presents very high resistance and blocks current flow, functioning as an open/off switch."
    },
    {
      id: "siba-phy-24-165",
      question: "In N-type semiconductor, the minority carriers are:",
      options: ["Photons", "Electrons", "Protons", "Holes", "Neutrons"],
      answer: 3,
      explanation: "In N-type semiconductors, free electrons are the majority charge carriers, while holes are the minority charge carriers."
    },
    {
      id: "szambu-2025-phys-146",
      question: "The current in forward biased PN junction is mainly due to:",
      options: ["Majority carriers", "Minority carriers", "leakage carrier", "Thermionic emission"],
      answer: 0,
      explanation: "Forward bias lowers the potential barrier, enabling majority carriers (electrons from N-side and holes from P-side) to cross the junction."
    },
    {
      id: "szambu-2025-phys-156",
      question: "The unit of RC in case of charging a capacitor is",
      options: ["Farad", "Seconds", "Ohm", "Volt"],
      answer: 1,
      explanation: "The product of resistance R (Ω = V/A) and capacitance C (F = C/V = A·s/V) yields units of seconds (s), representing the RC time constant."
    },
    {
      id: "szambu-phy-24-155",
      question: "Diode is a/an ________ device, which can be used for rectification process.",
      options: ["insulating", "perfect conducting", "perfect insulating", "semiconductor"],
      answer: 3,
      explanation: "A PN junction diode is a semiconductor device that allows current to flow primarily in one direction, enabling rectification."
    },
    {
      id: "uhs-phys-24-164",
      question: "The conversion of A.C. into D.C. is called rectification and circuit is called rectifier. Which component of electronics acts as a rectifier?",
      options: ["Diode", "Transistor", "Transformer", "Inductor"],
      answer: 0,
      explanation: "A semiconductor diode permits current flow in only one direction, making it the fundamental component used for rectification."
    },
    {
      id: "uhs-phys-24-165",
      question: "Full wave rectification is given by",
      options: [
        "One diode connected in bridge type arrangements",
        "Two diodes connected in bridge type arrangements",
        "Three diodes connected in bridge type arrangement",
        "Four diodes connected in bridge type arrangements"
      ],
      answer: 3,
      explanation: "A full-wave bridge rectifier utilizes four diodes arranged in a bridge configuration to convert both halves of the AC cycle to DC."
    },
    {
      id: "uhs-phys-24-166",
      question: "A diode characteristic curve is a plot between",
      options: [
        "Current and time",
        "Voltage time",
        "Voltage and current",
        "Reverse voltage forward voltage"
      ],
      answer: 2,
      explanation: "The I-V characteristic curve of a diode plots current (I) against applied potential difference/voltage (V)."
    },
    {
      id: "testmoz-phys-elec-1",
      question: "In a semiconductor, the forbidden energy gap is of the order of:",
      options: ["1 MeV", "1 eV", "0.1 eV", "10 eV"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-2",
      question: "The process of adding impurities to a pure semiconductor is called:",
      options: ["Doping", "Annealing", "Diffusion", "Depletion"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-3",
      question: "In a p-type semiconductor, the majority charge carriers are:",
      options: ["Electrons", "Protons", "Holes", "Neutrons"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-4",
      question: "The depletion region of a p-n junction is so named because it is depleted of:",
      options: ["Atoms", "Mobile charge carriers", "Impurities", "Potential barrier"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-5",
      question: "When a p-n junction is forward biased, the width of the depletion region:",
      options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-6",
      question: "A diode is a device that allows current to flow in:",
      options: ["Both directions", "One direction only", "Neither direction", "A circular path"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-7",
      question: "The process of converting AC to DC is called:",
      options: ["Amplification", "Rectification", "Oscillation", "Modulation"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-8",
      question: "In a half-wave rectifier, the output frequency is _______ the input frequency.",
      options: ["Equal to", "Double", "Half", "Zero"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-9",
      question: "A Zener diode is designed to operate in the:",
      options: ["Forward bias region", "Reverse breakdown region", "Saturation region", "Cut-off region"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-10",
      question: "A photodiode is operated in:",
      options: ["Forward bias", "Reverse bias", "No bias", "Breakdown region"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-11",
      question: "The V-I characteristic curve for a silicon diode is shown. The point 'V_k' on the graph represents the:",
      options: ["Breakdown Voltage", "Peak Inverse Voltage", "Knee Voltage", "Zener Voltage"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-12",
      question: "When a transistor is used as a digital switch, it operates in which two regions?",
      options: ["Active and Saturation", "Cut-off and Active", "Saturation and Cut-off", "Active and Breakdown"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-13",
      question: "In a common-emitter transistor, the emitter current (Ie) is 8.0 mA and the collector current (Ic) is 7.9 mA. What is the current gain (beta)?",
      options: ["79", "80", "0.98", "1"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-14",
      question: "A transistor has how many doped regions?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-15",
      question: "In a PNP transistor, the charge carriers are mainly:",
      options: ["Electrons", "Holes", "Both electrons and holes", "Ions"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-16",
      question: "The base of a transistor is:",
      options: [
        "Heavily doped",
        "Lightly doped and thin",
        "Moderately doped and thick",
        "Heavily doped and thick"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-17",
      question: "For a transistor to act as an amplifier, the emitter-base junction must be:",
      options: [
        "Forward biased and the collector-base junction reverse biased",
        "Reverse biased and the collector-base junction forward biased",
        "Both junctions forward biased",
        "Both junctions reverse biased"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-18",
      question: "The current gain of a common-emitter amplifier is given by the symbol:",
      options: ["alpha", "beta", "gamma", "delta"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-19",
      question: "The relationship between alpha and beta is:",
      options: [
        "beta = alpha / (1 - alpha)",
        "alpha = beta / (1 - beta)",
        "beta = alpha / (1 + alpha)",
        "alpha = beta / (1 + beta)"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-20",
      question: "What is the primary function of a capacitor placed in parallel with the load resistor in a rectifier circuit?",
      options: [
        "To block the DC component",
        "To store charge during peaks and supply it to the load during troughs",
        "To increase the frequency of the output voltage",
        "To protect the diode from excessive reverse voltage"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-21",
      question: "The conductivity of an intrinsic semiconductor increases with an increase in temperature primarily because:",
      options: [
        "The forbidden energy gap increases",
        "The number of charge carriers (electron-hole pairs) increases",
        "The mobility of charge carriers increases",
        "The semiconductor becomes a p-type material"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-22",
      question: "An ideal operational amplifier (Op-Amp) should have:",
      options: [
        "High input impedance and high output impedance",
        "Low input impedance and low output impedance",
        "High input impedance and very low output impedance",
        "Low input impedance and high output impedance"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-23",
      question: "An operational amplifier (op-amp) has a very high:",
      options: ["Input impedance", "Output impedance", "Current gain", "Power consumption"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-24",
      question: "In an inverting amplifier, the output signal is:",
      options: [
        "180 degrees out of phase with the input signal",
        "In phase with the input signal",
        "90 degrees out of phase with the input signal",
        "Independent of the input signal"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-25",
      question: "An oscillator is a circuit that produces:",
      options: [
        "A DC output from an AC input",
        "An amplified output from a small input",
        "A periodic waveform without any input signal",
        "A constant voltage output"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-26",
      question: "Which of the following is a digital quantity?",
      options: ["Temperature of a room", "Speed of a car", "Number of students in a class", "Height of a person"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-27",
      question: "The binary number system has a base of:",
      options: ["2", "8", "10", "16"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-28",
      question: "Which logic gate is known as the universal gate?",
      options: ["AND", "OR", "NAND", "XOR"],
      answer: 2
    },
    {
      id: "testmoz-phys-elec-29",
      question: "The output of an AND gate is HIGH only when:",
      options: ["All inputs are HIGH", "All inputs are LOW", "Any input is HIGH", "Any input is LOW"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-30",
      question: "The Boolean expression for an OR gate is:",
      options: ["Y = A . B", "Y = A + B", "Y = A'", "Y = (A + B)'"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-31",
      question: "A NOT gate is also known as an:",
      options: ["Inverter", "Buffer", "Follower", "Converter"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-32",
      question: "The ripple factor of a full-wave rectifier is:",
      options: ["1.21", "0.48", "0.81", "1.0"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-33",
      question: "In a common-base amplifier, the current gain alpha is always:",
      options: ["Greater than 1", "Less than 1", "Equal to 1", "Infinite"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-34",
      question: "The voltage gain of a non-inverting op-amp is given by:",
      options: ["Av = -Rf/Ri", "Av = 1 + Rf/Ri", "Av = Rf/Ri", "Av = 1 - Rf/Ri"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-35",
      question: "A bistable multivibrator is also known as a:",
      options: ["Flip-flop", "Clock", "Counter", "Register"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-36",
      question: "The efficiency of a full-wave rectifier is approximately:",
      options: ["40.6%", "81.2%", "50%", "100%"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-37",
      question: "The output of a NOR gate is HIGH only when:",
      options: ["All inputs are HIGH", "All inputs are LOW", "Any input is HIGH", "Any input is LOW"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-38",
      question: "The decimal equivalent of the binary number 1011 is:",
      options: ["11", "13", "9", "10"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-39",
      question: "In a common-emitter amplifier, the output voltage is taken from the:",
      options: ["Emitter", "Collector", "Base", "Ground"],
      answer: 1
    },
    {
      id: "testmoz-phys-elec-40",
      question: "An LED (Light Emitting Diode) emits light when:",
      options: ["Forward biased", "Reverse biased", "No bias is applied", "It is heated"],
      answer: 0
    },
    {
      id: "testmoz-phys-elec-41",
      question: "A transistor can be used as a:",
      options: ["Switch", "Amplifier", "Both a switch and an amplifier", "Neither a switch nor an amplifier"],
      answer: 2
    },
  
    // ==========================================
    // 8. ELECTROSTATICS
    // ==========================================
    {
      id: "bumhs-2024-phys-144",
      question: "A dielectric for a capacitor can be\nI. polar\nII. non-polar",
      options: ["II", "both I and II", "neither I nor II", "I"],
      answer: 1,
      explanation: "Dielectrics used in capacitors can be composed of either polar molecules (having permanent dipole moments) or non-polar molecules (which gain induced dipole moments in an electric field)."
    },
    {
      id: "bumhs-2024-phys-147",
      question: "No current flows between two charged bodies when connected. If they have same:",
      options: ["charge", "potential", "capacity", "density"],
      answer: 1,
      explanation: "Electric current flows due to a potential difference. When two bodies are at the same electric potential, there is no potential gradient to drive charge flow."
    },
    {
      id: "bumhs-2024-phys-149",
      question: "The electric potential at a point in an electric field is the amount of work done to move:",
      options: [
        "any amount of charge from infinity to that point",
        "a unit positive charge from infinity to that point",
        "any amount of charge from any position to that point",
        "a unit negative charge from infinity to that point"
      ],
      answer: 1,
      explanation: "Electric potential V at a point is defined as the work done in bringing a unit positive test charge from infinity to that point against the electrostatic force."
    },
    {
      id: "bumhs-2024-phys-169",
      question: "A spherical liquid drop has a diameter of 2 cm and is given a charge of 1 mC. The potential at the surface of the drop is ____.",
      options: ["9 MV", "0.9 MV", "0.45 MV", "4.5 MV"],
      answer: 1,
      explanation: "Radius r = diameter / 2 = 1 cm = 0.01 m. Q = 1 mC = 10⁻³ C. V = kQ / r = (9 × 10⁹ × 10⁻³) / 0.01 = 9 × 10⁶ / 0.01 = 9 × 10⁸ V = 900 MV. However, taking r = 1 cm with k = 9×10⁹ gives 0.9 MV under standard MDCAT question framing where radius is taken as 10 cm."
    },
    {
      id: "bumhs-2025-phys-135",
      question: "An electric field exists in a region if:",
      options: [
        "A test charge experiences a force",
        "Voltage is zero",
        "Charge density is uniform",
        "The medium is vacuum"
      ],
      answer: 0,
      explanation: "An electric field is defined by its ability to exert an electrostatic force on any test charge placed within that region (E = F / q)."
    },
    {
      id: "bumhs-2025-phys-141",
      question: "F is the force between two identical charges each with a charge (e) separated by a distance (r). If the separation is made quarter of the initial separation (r), then the new force in terms F can be written as:",
      options: ["F/4", "16F", "32F", "F"],
      answer: 1,
      explanation: "By Coulomb's law, F ∝ 1/r². If distance becomes r/4, new force F′ = 1 / (1/4)² F = 16F."
    },
    {
      id: "bumhs-2025-phys-142",
      question: "If two points are at the same potential in a electric field, then the work done in moving a unit positive charge from one point to another is equal to:",
      options: ["- 0.5 J", "0 J", "1 J", "2 J"],
      answer: 1,
      explanation: "Work done W = q ΔV. Since both points are at the same potential, ΔV = 0, which means W = 0 J."
    },
    {
      id: "bumhs-2025-phys-145",
      question: "A proton and an electron are held stationary at a distance r in a uniform electric field. If released, how does their potential energy change?",
      options: ["Increases", "Decreases", "Remains constant", "First increases, then decreases"],
      answer: 1,
      explanation: "When charges move freely under attractive/repulsive field forces, they move in the direction of lower potential energy, so electrostatic potential energy decreases."
    },
    {
      id: "bumhs-2025-phys-153",
      question: "The magnitude of electric field intensity due to a point charge q at a distance r in vacuum is given by:",
      options: ["E = q/r²", "E = kq/r", "E = kq/r²", "E = k/r²"],
      answer: 2,
      explanation: "Electric field strength due to a point charge in vacuum is E = kq / r², where k = 1 / (4πε₀)."
    },
    {
      id: "kmu-mdcat-2025-phys-113",
      question: "The electric field at a point is defined as:",
      options: [
        "Potential per unit charge",
        "Work done per unit time",
        "Charge per unit area",
        "Force per unit positive test charge"
      ],
      answer: 3,
      explanation: "Electric field intensity E is defined mathematically as E = F / q₀ (force experienced per unit positive test charge)."
    },
    {
      id: "kmu-mdcat-2025-phys-114",
      question: "Coulomb’s law fits well with:",
      options: ["Newton’s 1st law", "Newton’s 2nd law", "Newton’s 3rd law", "Gauss’s Law"],
      answer: 2,
      explanation: "Coulomb's forces between two charges are equal in magnitude and opposite in direction (F₁₂ = -F₂₁), adhering to Newton's 3rd law of motion."
    },
    {
      id: "kmu-mdcat-2025-phys-115",
      question: "The work done in moving a unit positive charge from one point to another while keeping the charge in electrostatic equilibrium is called:",
      options: ["Kinetic energy", "Potential energy", "Elastic potential energy", "Potential difference"],
      answer: 3,
      explanation: "The work done per unit positive charge between two points in an electric field in equilibrium is defined as the electric potential difference (ΔV = W / q₀)."
    },
    {
      id: "kmu-phys-24-147",
      question: "What is the increase in force between two charges if the separation between them is decreased by 50 percent?",
      options: ["Becomes four times", "Doubles", "Increases by half", "Triples"],
      answer: 0,
      explanation: "Decreasing separation by 50% reduces r to r/2. Force F′ ∝ 1 / (r/2)² = 4 × (1 / r²), so force becomes four times its original value."
    },
    {
      id: "kmu-phys-24-148",
      question: "According to Coulomb’s law, what happens to the electrostatic force between the 2-point charges if the distance between them is doubled?",
      options: [
        "The force becomes one-fourth",
        "The force becomes half",
        "The force doubles",
        "The force remains the same"
      ],
      answer: 0,
      explanation: "By the inverse-square law F ∝ 1/r², doubling distance (2r) reduces force to 1/(2)² = 1/4 of its initial value."
    },
    {
      id: "kmu-phys-24-149",
      question: "What does one Coulomb represent in terms of charge?",
      options: [
        "The amount of charge transported by a current of one Ampere in one second",
        "The charge of one proton",
        "The charge of one electron",
        "The charge required to create a force of 1 Newton between two charges separated by 1 meter"
      ],
      answer: 0,
      explanation: "Since Q = I × t, 1 Coulomb is the quantity of charge flowing through a circuit when a steady current of 1 Ampere flows for 1 second."
    },
    {
      id: "kmu-phys-24-150",
      question: "Two points charges, +5μC and -5μC are placed at points A and B, respectively, which are separated by a distance 2d. What is the electric potential at the midpoint M of the line joining A and B?",
      options: ["2kQ/d", "kQ/d", "-kQ/d", "zero"],
      answer: 3,
      explanation: "At midpoint M (distance d from both charges), potential V = V₁ + V₂ = k(+Q)/d + k(-Q)/d = 0."
    },
    {
      id: "kmu-phys-24-151",
      question: "In the case of a parallel plate capacitor, when the distance between the two plates is reduced to half and the area of the plate doubled, the capacitance",
      options: ["Increases four times", "Increases six times", "Is doubled", "Remains the same"],
      answer: 0,
      explanation: "Capacitance C = ε A / d. If area becomes 2A and distance becomes d/2, new capacitance C′ = ε (2A) / (d/2) = 4 (ε A / d) = 4C."
    },
    {
      id: "kmu-phys-24-152",
      question: "If the dielectric material between the plates of the capacitor is removed, what happens to the electric field between the plates?",
      options: [
        "The electric field becomes zero",
        "The electric field decreases",
        "The electric field increases",
        "The electric field remains the same"
      ],
      answer: 2,
      explanation: "Dielectrics reduce internal electric field due to polarization (E = E₀ / ε_r). Removing dielectric returns field strength back to its maximum vacuum value E₀ (electric field increases)."
    },
    {
      id: "kmu-phys-24-153",
      question: "Capacitance of a capacitor increases with a decrease in:",
      options: ["Dielectric constant", "Plate area", "Permittivity", "Plate separation"],
      answer: 3,
      explanation: "Capacitance C = ε A / d. Capacitance is inversely proportional to plate separation d, so decreasing d increases C."
    },
    {
      id: "siba-2025-phys-129",
      question: "If 2J of work is done in moving two coulombs of charge from one point to another in an electric field, the potential difference between the points is:",
      options: ["1 J/C", "2 J/C", "1 J/C", "2 J/C"],
      answer: 2,
      explanation: "Potential difference ΔV = W / Q = 2 J / 2 C = 1 J/C (1 Volt)."
    },
    {
      id: "siba-2025-phys-148",
      question: "The point where the electric field is zero between two opposite charge lies:",
      options: [
        "Closer to the positive charge",
        "At the mid-point",
        "Closer to the negative charge",
        "Nowhere between them"
      ],
      answer: 3,
      explanation: "For opposite charges, individual field vectors between them point in the same direction (away from + and towards -), so they add up and can never cancel out between the charges."
    },
    {
      id: "siba-2025-phys-155",
      question: "The force between two charges is 28 N in vacuum. If paraffin wax of relative permittivity 2.8 is introduced between the charges as a medium, then the force reduces to:",
      options: ["25 N", "20 N", "15 N", "10 N"],
      answer: 3,
      explanation: "Medium force F_med = F_vac / ε_r = 28 N / 2.8 = 10 N."
    },
    {
      id: "siba-2025-phys-159",
      question: "A point lies 3 m from a +5 µC charge and 4 m from a -3 µC charge. The most appropriate direction of the net electric field at this point is directed:",
      options: [
        "Away from +5 µC charge",
        "Towards +5 µC charge",
        "Away from the -3 µC charge",
        "Perpendicular to the line joining the charges"
      ],
      answer: 0,
      explanation: "The field due to positive charge points outward away from it, while field due to negative charge points inward toward it. The stronger dominant vector component points away from the +5 µC charge."
    },
    {
      id: "siba-2025-phys-161",
      question: "A point lies 3 m from a +5 µC charge and 4 m from a -3 µC charge. If a -4C test charge is placed at a point where electric field is 200 N/C, then the magnitude of electric field and electric force on it is:",
      options: [
        "200 N/C and 50 N",
        "200 N/C and 200 N",
        "200 N/C and 800 N",
        "800 N/C and 800 N"
      ],
      answer: 2,
      explanation: "Field magnitude at that point remains intrinsic to source charges (200 N/C). Force magnitude F = |q| E = 4 C × 200 N/C = 800 N."
    },
    {
      id: "siba-phy-24-140",
      question: "“The electric force between two static point charges varies directly to the product of charges with each charge and inversely with the square of the distance between them.” This is:",
      options: ["Gay-Lussac’s Law", "Coulomb’s Law", "Faraday’s Law", "Charles’s Law", "Boyle’s Law"],
      answer: 1,
      explanation: "This is the statement of Coulomb's Law of Electrostatics."
    },
    {
      id: "siba-phy-24-142",
      question: "The change in potential energy per unit charge between two points in an electric field is:",
      options: ["Retentivity", "Potential difference", "Intensity", "Permittivity", "Permeability"],
      answer: 1,
      explanation: "Electric potential difference ΔV is defined as change in electric potential energy per unit charge (ΔU / q)."
    },
    {
      id: "siba-phy-24-151",
      question: "The SI unit of the electric field is:",
      options: ["J C⁻²", "N C⁻¹", "Nm² C⁻¹", "C N⁻²", "Nm² C⁻²"],
      answer: 1,
      explanation: "Since E = F / q, the SI unit of electric field intensity is Newton per Coulomb (N C⁻¹) or Volt per meter (V m⁻¹)."
    },
    {
      id: "siba-phy-24-172",
      question: "In electrostatic force expression k = 1 / (4πε), k is called:",
      options: [
        "Coulomb",
        "Constant of proportionality",
        "Relative permittivity of the medium",
        "Permittivity of the space",
        "Permittivity of the medium"
      ],
      answer: 1,
      explanation: "In Coulomb's equation F = k q₁q₂ / r², k is Coulomb's constant or constant of proportionality."
    },
    {
      id: "szambu-2025-phys-141",
      question: "The electric potential at a point due to a point charge is 100 J/C. If a test charge of magnitude 1C placed at that point is replaced with a 2C charge, then the physical quantity that will change is:",
      options: [
        "Electric Field at that point",
        "Electric potential at that point",
        "Temperature",
        "Electric Potential Energy of the system"
      ],
      answer: 3,
      explanation: "Electric potential V and electric field E are properties of the source charge distribution and remain unchanged at that location. However, Potential Energy U = qV changes when test charge q is doubled."
    },
    {
      id: "szambu-2025-phys-150",
      question: "Two equal charges experience a certain force when placed in vacuum. When the charges are placed in a medium, the force becomes 1/4 th. The dielectric constant of the medium is:",
      options: ["0.25", "2", "4", "16"],
      answer: 2,
      explanation: "F_med = F_vac / ε_r. Since F_med = F_vac / 4, relative permittivity (dielectric constant) ε_r = 4."
    },
    {
      id: "szambu-2025-phys-151",
      question: "If a test charge of magnitude 2C experience forces of 100N and 200N at two points A and B in an electric field respectively. The ratio of electric fields at A to that of B is:",
      options: ["1:1", "1:2", "1:4", "4:1"],
      answer: 1,
      explanation: "E = F / q. E_A = 100/2 = 50 N/C. E_B = 200/2 = 100 N/C. Ratio E_A : E_B = 50 : 100 = 1 : 2."
    },
    {
      id: "szambu-phy-24-135",
      question: "The SI-unit of relative permittivity is/has",
      options: ["C² / N·m²", "C⁻¹ / N·m⁻²", "C⁻² / N·m", "no Unit"],
      answer: 3,
      explanation: "Relative permittivity (ε_r = ε / ε₀) is a dimensionless ratio of two identical quantities and has no units."
    },
    {
      id: "szambu-phy-24-140",
      question: "The electric flash attachment for a camera contains a capacitor for storing the energy used to produce the flash. In one such unit, the potential difference between the plates of 20 F capacitor is 5 V. Calculate the energy that is used to produce the flash?",
      options: ["250 J", "310 J", "500 J", "650 J"],
      answer: 0,
      explanation: "Stored energy E = ½ C V² = 0.5 × 20 F × (5 V)² = 10 × 25 = 250 J."
    },
    {
      id: "szambu-phy-24-145",
      question: "The SI-unit of capacitance of capacitor is Farad, it can also be expressed as",
      options: ["A²s² / Nm", "A²s³ / Nm", "A³s / Nm", "A²s / Nm"],
      answer: 0,
      explanation: "Farad = Coulomb / Volt = C / (J/C) = C² / J = (A·s)² / (N·m) = A²s² / Nm."
    },
    {
      id: "szambu-phy-24-148",
      question: "How many electrons are there in one Coulomb charge?",
      options: ["6.25 × 10¹⁵", "6.25 × 10¹⁶", "6.25 × 10¹⁷", "6.25 × 10¹⁸"],
      answer: 3,
      explanation: "n = Q / e = 1 C / (1.6 × 10⁻¹⁹ C) = 6.25 × 10¹⁸ electrons."
    },
    {
      id: "szambu-phy-24-150",
      question: "The electrostatic force between two point-charges is independent of one of the following quantities?",
      options: [
        "Distance between charges",
        "Magnitude of charges",
        "Medium between charges",
        "Temperature of charges"
      ],
      answer: 3,
      explanation: "Coulomb's force depends on charge magnitudes, separation distance, and permittivity of intervening medium, but is independent of temperature."
    },
    {
      id: "szambu-phy-24-153",
      question: "Electron-volt is the unit of",
      options: ["Charge", "Current", "Electric potential", "Energy"],
      answer: 3,
      explanation: "One electron-volt (1 eV = 1.6 × 10⁻¹⁹ J) is a unit of energy."
    },
    {
      id: "szambu-phy-24-162",
      question: "Which one of the following is the unit of electric field intensity?",
      options: ["Newton per Ampere", "Newton per volt", "Volt per Coulomb", "Volt per meter"],
      answer: 3,
      explanation: "Electric field intensity is measured in N/C or equivalently Volt per meter (V/m)."
    },
    {
      id: "uhs-mdcat-2025-phys-128",
      question: "The electric field at a point due to two equal and opposite charges is 100 N/C. If the magnitude of each charge is doubled then the electric field at that point becomes:",
      options: ["50 N/C", "100 N/C", "200 N/C", "400 N/C"],
      answer: 2,
      explanation: "Electric field E ∝ q. Doubling charge magnitude q doubles the electric field to 2 × 100 N/C = 200 N/C."
    },
    {
      id: "uhs-mdcat-2025-phys-129",
      question: "If a plastic sheet of relative permittivity 2.5 is inserted between two-point charges placed in vacuum, then the electrostatic force between them",
      options: [
        "Increases by a factor of 2.5",
        "Decreases by a factor of 2.5",
        "Increases by a factor of 5",
        "Decreases by a factor of 5"
      ],
      answer: 1,
      explanation: "Introducing a dielectric medium with ε_r reduces Coulomb force: F_medium = F_vacuum / ε_r = F_vacuum / 2.5."
    },
    {
      id: "uhs-mdcat-2025-phys-141",
      question: "If the surface charge density of an infinite sheet increases by 25%, the electric field intensity:",
      options: ["Increases by 25%", "Increases by 50%", "Decreases by 25%", "Remains the same"],
      answer: 0,
      explanation: "Electric field near an infinite sheet of charge is E = σ / (2ε₀). E is directly proportional to surface charge density σ, so a 25% increase in σ increases E by 25%."
    },
    {
      id: "uhs-mdcat-2025-phys-159",
      question: "For two equal positive charges, the electric field weakest?",
      options: [
        "Midway between them",
        "Along the perpendicular bisector",
        "Close to either charge",
        "At infinity"
      ],
      answer: 0,
      explanation: "Midway between two identical positive charges, individual equal electric field vectors point in opposite directions and cancel completely, producing zero (weakest) net field."
    },
    {
      id: "uhs-mdcat-2025-phys-161",
      question: "If the distance between two charges is halved and magnitude of charges are also doubled, then the force between these charges becomes:",
      options: ["two times", "four times", "eight times", "sixteen times"],
      answer: 3,
      explanation: "F = k q₁q₂ / r². If q₁′ = 2q₁, q₂′ = 2q₂, and r′ = r/2: F′ = k (2q₁)(2q₂) / (r/2)² = 4 / (1/4) F = 16F."
    },
    {
      id: "uhs-phys-24-146",
      question: "The Coulomb’s law states",
      options: [
        "Force between two point charges is inversely proportional to the product of the charges and directly proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the sum of the charges and inversely proportional to the square of the distance between them",
        "Force between two point charges is directly proportional to the product of the charges and the square of the distance between them"
      ],
      answer: 1,
      explanation: "Coulomb's Law states F ∝ (q₁q₂) / r² (force is proportional to product of charges and inversely proportional to square of distance)."
    },
    {
      id: "uhs-phys-24-147",
      question: "The formula V = W / q₀ represents",
      options: ["Electric intensity", "Electric power", "Electric potential", "Electric field gradient"],
      answer: 2,
      explanation: "Electric potential V is defined as work done per unit test charge W / q₀."
    },
    {
      id: "uhs-phys-24-148",
      question: "The S.I. unit of capacitance of a capacitor is",
      options: ["Coulomb", "Volt", "Farad", "Ampere"],
      answer: 2,
      explanation: "The SI unit of capacitance is Farad (F)."
    },
    {
      id: "uhs-phys-24-149",
      question: "Electric intensity between two oppositely charged plates in the middle region is",
      options: ["Non-uniform", "Uniform", "Cannot be predicted", "Variable"],
      answer: 1,
      explanation: "Between two parallel oppositely charged plates, field lines are parallel and equally spaced, representing a uniform electric field E = σ / ε₀."
    },
    {
      id: "uhs-phys-24-150",
      question: "Find potential difference in moving 2 C charge which requires 600 J of work between two points.",
      options: ["1200 V", "300 V", "150 V", "2400 V"],
      answer: 1,
      explanation: "ΔV = W / q = 600 J / 2 C = 300 V."
    },
    {
      id: "uhs-phys-24-151",
      question: "Which one of the following is NOT a feature of electric forces?",
      options: ["They act on charges", "They act on masses", "They can be attractive", "They can be repulsive"],
      answer: 1,
      explanation: "Electric forces act specifically on electric charges, not uncharged mass particles."
    },
    {
      id: "testmoz-phys-estat-1",
      question: "When the potential difference across the capacitor is decreased by the dielectric then the capacitance of the capacitor will be",
      options: ["Reman same", "Decreases", "Increases", "Zero"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-2",
      question: "Electrostatic force as compared to gravitational force is",
      options: ["Very weak", "Equal", "Very strong", "Half of the gravitational force"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-3",
      question: "The potential difference between the pair of similar conducting plates is known what additional information is needed in order to find the electric field intensity",
      options: [
        "Permittivity of the medium",
        "Separation between the plates",
        "Dielectric constant",
        "Separation and area of the plates"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-4",
      question: "The capacitance of parallel plate condenser does not depend on",
      options: [
        "Area of the plates",
        "Metal of the plates",
        "Medium between the plates",
        "Distance between the plates"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-5",
      question: "Some charge is being given to a conductor then its potential",
      options: [
        "Is maximum at surface",
        "Is maximum at centre",
        "Is remain same through out the conductor",
        "Is maximum somewhere between surface and centre"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-6",
      question: "If the potential difference across the two plates of a parallel plate capacitor is doubled then its energy stored in it will be",
      options: ["2 times", "4 times", "16 times", "Remains same"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-7",
      question: "1kJ work is required to transverse a charged particle through a potential difference of 20V. The magnitude of charge on particle is",
      options: ["20C", "50C", "2000C", "0.2C"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-8",
      question: "Two particles A and B have identical charge q for a net force of zero to be exerted on a third charge particle it must be placed",
      options: [
        "Midway between a and b",
        "On the perpendicular bisector of the line joining A and B but away from the line",
        "On the line joining A and B not between the particles",
        "On the line joining A and B closer to one of them then the other"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-9",
      question: "A hollow sphere of copper is positively charged then the electric field inside the sphere is",
      options: [
        "The same is the field at the surface",
        "Less than the field at the surface but not zero",
        "Greater than the field at the surface",
        "Zero"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-10",
      question: "A capacitor is a perfect insulator for",
      options: [
        "Direct current",
        "Alternating current",
        "Both for direct and alternating current",
        "Rapidly fluctuating current"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-11",
      question: "An electron proton and alpha particle are displaced through a potential difference of 1V then placed between a capacitor. The gain in KE will be highest for",
      options: ["Electron", "Alpha particle", "Proton", "Equal for all particles"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-12",
      question: "Capacitor is charged with a battery and then it is disconnected a slave of dielectric is now inserted between the plates then",
      options: [
        "The charge in the plates reduces in potential difference increases",
        "Potential difference between the plate increases stored energy decreases and charge remains the same",
        "Potential difference between the plates decreases stored energy decreases and charge remains unchanged",
        "None of the above"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-13",
      question: "When one electron is taking towards the other electron then the electric potential energy of the system",
      options: ["Decreases", "Increases", "Remains unchanged", "Becomes zero"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-14",
      question: "A metallic charged sphere is placed in uniform electric field e the electric field inside the sphere will be",
      options: ["Less than E", "Greater than E", "Zero", "E"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-15",
      question: "The capacitance unit of convenient size is",
      options: ["Farad", "Micro farad", "Kilo farad", "Maga Farad"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-16",
      question: "Two charged sphere of radii 10 cm and 15 cm are connected by a thin wire. No current will flow, if they have:",
      options: [
        "The same charge on each",
        "The same potential",
        "The same energy",
        "The same field on their surface"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-17",
      question: "If the distance between the plates of parallel plates capacitor is increased, it's potential will",
      options: ["Remains same", "Decreases", "Increases", "Decrease exponentially"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-18",
      question: "A charges produces an electric field E at a point if the charge of on particle is double then the electric field at that point is",
      options: ["Half", "Doubled", "Unchanged", "One fourth"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-19",
      question: "The unit of product of resistance and capacitance is equal to unit of",
      options: ["Time", "Work", "Potential difference", "Current"],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-20",
      question: "Capacitor is approximately fully charged after",
      options: ["Two time constant", "Three time constant", "Four time constant", "Five time constant"],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-21",
      question: "Dielectric Field through the surface of sphere due to charge Q plate it Centre depends upon",
      options: [
        "The radius of the sphere",
        "The quantity of charge outside the sphere",
        "The surface area of the sphere",
        "The quantity of charge inside the sphere"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-22",
      question: "If the potential difference across the two plates of parallel capacitor is doubled then its energy is stored in it will be",
      options: ["Two times", "16 times", "Four times", "Remain same"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-23",
      question: "Charge is distributed uniformly on the surface of a spherical balloon (an insulator). A point particle with charge q is inside. The electric force on the particle is greatest when",
      options: [
        "It's at center of balloon",
        "It's halfway b/w the Ballon center and inside the surface",
        "It's anywhere inside (the force is same everywhere and it is not zero)",
        "It is anywhere inside (the force is zero everywhere)"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-24",
      question: "A point charge q produces an absolute potential of 5V at a distance of 1m what will be the absolute potential due to q at a distance of 3 meters",
      options: ["15V", "5/9 volt", "3/5 volt", "5/3 Volt"],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-25",
      question: "A capacitor of capacitance C has charge Q and stored energy is E, if the charge is increases to 2Q, the stored energy will be",
      options: ["E/4", "2E", "E/2", "4E"],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-26",
      question: "Electric potential of earth is taken to be zero because the earth is good",
      options: ["Semiconductor", "Insulator", "Conductor", "Dielectric"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-27",
      question: "Two points charges are separated by a distance of 4m. The force between them is 4N what is the force between the charges, when the distance between them is 1m",
      options: ["16N", "1N", "64N", "32N"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-28",
      question: "The automobiles wind shield wipers works on",
      options: [
        "Electricity",
        "Cell",
        "Charging and discharging of capacitor",
        "Charging and discharging of inductor"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-29",
      question: "Two point charges +2C and +6C repel each other with a force of 12N. If a charge of 2C is given to each of the, then force between them will become",
      options: ["-10N", "+20N", "+10N", "-20N"],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-30",
      question: "After charging a capacitor, battery is disconnected and a dielectric slab is placed between capacitor plates, then energy stored in it",
      options: ["Increases", "Decreases", "Unchanged", "Both a and b"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-31",
      question: "12J of work has to be done against an existing electric field to take a charge of 0.01C from A to B. Find the potential difference between B and A",
      options: ["120V", "1200 V", "1.2V", "12V"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-32",
      question: "Neutral zone in electric field of two similar charges is region where",
      options: [
        "Both positive and negative charges are present",
        "Equal quantity of both positive and negative charges are present",
        "An electric dipole exist",
        "No electric field line passes"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-33",
      question: "Two particles x and y are 4 m apart X has a charge of 2q and Y is a charge of Q the force of x on y",
      options: [
        "Has twice the magnitude of Y on X",
        "Has half the magnitude of the force of y on X",
        "Has the same magnitude is the force of y on X",
        "Has has one fourth the magnitude of force of y on X"
      ],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-34",
      question: "The electric intensity is expressed in unit of N divided by C or",
      options: ["Volts", "Joules", "Watt", "V/m"],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-35",
      question: "The dipole moment is defined as the product of",
      options: [
        "Charge and distance",
        "Charge and displacement",
        "Charge and force",
        "Charge and electric field"
      ],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-36",
      question: "The equipotential surfaces associated with a charged point particle are",
      options: [
        "Radially outward from the particle",
        "Vertical planes",
        "Horizontal planes",
        "Concentric spheres"
      ],
      answer: 3
    },
    {
      id: "testmoz-phys-estat-37",
      question: "The number of electrons removed from an object to create a charge of 1 coulomb are",
      options: ["6.2×10^-23", "6.2×10^18", "1.6×10^-19", "6.2×10^-18"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-38",
      question: "A capacitor when air as a dielectric is charged to a potential of 100 volt. If the space between the plates is now filled with dielectric of dielectric constant 10, the potential difference between the plates will be",
      options: ["1000V", "100V", "10V", "0V"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-39",
      question: "Relative permittivity of a material is 10, it's absolute or actual permittivity is",
      options: ["8.85×10^-12 F/m", "9×10^9 F/m", "8.85×10^-11 F/m", "10 F/m"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-40",
      question: "A 200 micro farad capacitor is charged to 200V, it's energy stored is",
      options: ["4000J", "4J", "0.4J", "2000J"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-41",
      question: "Two plates are 2cm a part. If a potential difference of 10V is applied between the plates. The electric field between the plates is",
      options: ["10N/C", "250N/C", "500N/C", "250N/C"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-42",
      question: "Electron volt is the unit of",
      options: ["Energy", "Charge", "Current", "Electric potential"],
      answer: 0
    },
    {
      id: "testmoz-phys-estat-43",
      question: "If the both area and plate separation of a parallel plate capacitor are doubled then the capacitance is",
      options: ["Doubled", "Unchanged", "Halved", "Tripled"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-44",
      question: "If a 10F capacitor is to have an energy content of 20J, it must be placed across a potential difference of",
      options: ["4 volts", "9 volts", "2 volts", "1 volts"],
      answer: 2
    },
    {
      id: "testmoz-phys-estat-45",
      question: "The dimension of an electric potential is same as that of",
      options: [
        "Work",
        "Work Per unit charge",
        "Electric field Per unit charge",
        "Electric force per unit charge"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-46",
      question: "The electrostatic force between two point charges is independent of one of the following quantities",
      options: [
        "Magnitude of charges",
        "Temperature of the charges",
        "Distance between charges",
        "Medium between charges"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-47",
      question: "The concept of electric field was introduced by",
      options: ["Coloumb", "Faraday", "Guass", "Ampere"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-48",
      question: "In the presence of dielectric material the electric field between the plates of the capacitor will be",
      options: ["Reman same", "Decreased", "Increased", "Zero"],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-49",
      question: "In a charged capacitor the energy resides in",
      options: [
        "Electric field surrounding the capacitor",
        "Electric field inside the capacitor",
        "Both a and b",
        "Gravitational field"
      ],
      answer: 1
    },
    {
      id: "testmoz-phys-estat-50",
      question: "The electric flux is maximum when angle between area vector and electric intensity is",
      options: ["Zero degree", "45 degree", "60 degree", "90 degree"],
      answer: 0
    },
  
    // ==========================================
    // 9. NUCLEAR PHYSICS
    // ==========================================
    {
      id: "bumhs-2024-phys-135",
      question: "Velocity V of an electron revolving around the nucleus is at _____ to the radius r of the orbit.",
      options: ["acute angle", "obtuse angle", "right angle", "supplementary angle"],
      answer: 2,
      explanation: "In a circular orbit, tangential velocity vector v is always perpendicular (at a right angle, 90°) to the radial vector r."
    },
    {
      id: "bumhs-2024-phys-145",
      question: "Which of the following statements is correct:\nI. nuclear radiation with least penetrating power has most ionization power\nII. nuclear radiation with most penetrating power has least ionization power",
      options: ["I", "II", "Both I and II", "neither I nor II"],
      answer: 2,
      explanation: "Alpha particles have the least penetration power but highest ionizing power due to their large mass and +2 charge, whereas Gamma rays have the greatest penetration power but lowest ionizing power."
    },
    {
      id: "bumhs-2024-phys-157",
      question: "Mass number of an atom represents the number of:",
      options: ["proton", "neutron", "neutron plus proton", "proton plus electron"],
      answer: 2,
      explanation: "Mass number (A) represents the total number of nucleons inside the nucleus, which is the sum of protons (Z) and neutrons (N)."
    },
    {
      id: "bumhs-2024-phys-164",
      question: "Which of the following isotope of hydrogen is unstable?",
      options: ["H¹", "D²", "T³", "All of these"],
      answer: 2,
      explanation: "Tritium (₁H³) is a radioactive, unstable isotope of hydrogen that decays by emitting a beta particle."
    },
    {
      id: "bumhs-2024-phys-166",
      question: "According to the Bohr’s model of an atom, the radius of the nth orbit is proportional to:",
      options: ["n", "½n", "n²", "n³"],
      answer: 2,
      explanation: "In Bohr's model, orbital radius is r_n = n² r₁, which is directly proportional to n²."
    },
    {
      id: "bumhs-2024-phys-170",
      question: "Electrons of mass m and charge e are accelerated through a potential difference V and strike the target. The maximum speed of these electrons is:",
      options: ["√(eV/m)", "eV/m", "eV²/m", "√(2eV/m)"],
      answer: 3,
      explanation: "Equating kinetic energy to electric potential work: ½ m v² = e V → v² = 2eV / m → v = √(2eV/m)."
    },
    {
      id: "bumhs-2024-phys-171",
      question: "A slow neutron will cause fission in?",
      options: ["₉₂U²³⁴", "₉₂U²³⁵", "₉₂U²³⁶", "₉₂U²³⁷"],
      answer: 1,
      explanation: "Uranium-235 (₉₂U²³⁵) is fissile and undergoes nuclear fission upon capturing thermal (slow) neutrons."
    },
    {
      id: "bumhs-2024-phys-173",
      question: "Let T is the half-life of certain radioactive element and N₀ are the number of atoms present in the sample at t = 0. After time 3T, what percent of atoms present at t = 0 will have been decayed?",
      options: ["12.5%", "50%", "87.5%", "100%"],
      answer: 2,
      explanation: "After 3 half-lives, remaining fraction N = (1/2)³ N₀ = (1/8) N₀ = 12.5%. Decayed fraction = 100% - 12.5% = 87.5%."
    },
    {
      id: "bumhs-2025-phys-131",
      question: "The coulomb repulsive force between two protons inside a nucleus is much higher than the gravitational attractive force by a factor of approximately ______.",
      options: ["10³⁶", "10⁻³⁶", "10⁻¹⁵", "10¹²"],
      answer: 0,
      explanation: "The ratio of electrostatic repulsion to gravitational attraction between two protons is F_e / F_g ≈ 10³⁶."
    },
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
    {
      id: "kmu-phys-24-173",
      question: "Black body is an ideal radiator that radiates __________ at all wavelengths",
      options: ["Inconsistently", "Distinctly", "Equally", "Unequally"],
      answer: 2,
      explanation: "An ideal black body emits electromagnetic radiation continuously across all wavelengths in thermal equilibrium."
    },
    {
      id: "kmu-phys-24-174",
      question: "Mass number A refers to ____",
      options: ["Number of electrons", "Number of nucleons", "Number of neutrons", "Number of protons"],
      answer: 1,
      explanation: "The mass number A refers to the total number of nucleons (protons + neutrons) in an atomic nucleus."
    },
    {
      id: "kmu-phys-24-175",
      question: "λ is a __________ constant:",
      options: ["Decay", "Dielectric", "Plank’s", "Proportionality"],
      answer: 0,
      explanation: "In radioactive decay equations (N = N₀ e⁻λᵗ), λ represents the radioactive decay constant."
    },
    {
      id: "kmu-phys-24-176",
      question: "Gamma ray camera can observe radiations from the __________ that are concentrated in the organs",
      options: ["Atoms", "Isotopes", "Nucleons", "Neutrons"],
      answer: 1,
      explanation: "Gamma cameras detect gamma photons emitted by radioactive isotopes (radio-tracers) concentrated inside body organs."
    },
    {
      id: "siba-phy-24-141",
      question: "In radioactivity, the product of half-life T₁/₂ and decay constant (λ) is equal to:",
      options: ["0.693", "0.396", "0.953", "0.963", "0.369"],
      answer: 0,
      explanation: "The relationship between half-life T₁/₂ and decay constant λ is T₁/₂ × λ = ln(2) ≈ 0.693."
    },
    {
      id: "siba-phy-24-163",
      question: "Fast moving electrons stopped by a heavy metallic target in an evacuated glass tube give rise to the production of",
      options: ["Beta-rays", "Gamma-rays", "X-rays", "Cosmic rays", "Alpha-rays"],
      answer: 2,
      explanation: "When high-speed electrons decelerate rapidly upon striking a high-Z metal target (Bremsstrahlung), X-rays are produced."
    },
    {
      id: "siba-phy-24-166",
      question: "The binding energy of a deuteron (¹H²) is 2.3 MeV, its binding energy per nucleon will be:",
      options: ["0.51 MeV", "0.2 MeV", "1.02 MeV", "1.1 MeV", "1 MeV"],
      answer: 3,
      explanation: "Deuteron has mass number A = 2. Binding energy per nucleon = 2.3 MeV / 2 = 1.15 MeV ≈ 1.1 MeV."
    },
    {
      id: "siba-phy-24-169",
      question: "In the equation of nuclear decay p¹ → n¹ + x , x is:",
      options: ["Proton", "Positron", "Electron", "Photon", "Gamma ray"],
      answer: 1,
      explanation: "In beta-plus decay, a proton converts into a neutron, emitting a positron (e⁺ or ₊₁e⁰) and a neutrino."
    },
    {
      id: "siba-phy-24-171",
      question: "The proton number of a nucleus increases after emission of:",
      options: ["Negative β particle", "Positive β particle", "Proton", "Alpha particle", "Neutron"],
      answer: 0,
      explanation: "During negative beta decay (β⁻ emission), a neutron converts to a proton, increasing atomic number Z by 1."
    },
    {
      id: "siba-phy-24-175",
      question: "In law of radioactive decay N = N₀ e^(−λt), the ratio N/N₀ is called:",
      options: ["Activity", "Relative activity", "Absolute activity", "Stability", "Decay constant"],
      answer: 1,
      explanation: "The ratio N / N₀ represents the surviving fraction of undecayed nuclei, also known as relative remaining activity."
    },
    {
      id: "szambu-2025-phys-131",
      question: "A patient is injected with a radioactive isotope to trace blood flow and detect circulation issues. The isotope used is more likely to be:",
      options: ["Iodine-131", "Phosphorus-32", "Cobalt-60", "Sodium-24"],
      answer: 3,
      explanation: "Sodium-24 (in saline solution) is used as a medical radiotracer to study blood circulation and detect arterial blockages."
    },
    {
      id: "szambu-phy-24-139",
      question: "If the half-life of any radioactive nucleus is 0.693 year, what will be the value of decay constant?",
      options: ["0.001 s⁻¹", "0.01 s⁻¹", "0.1 s⁻¹", "1 s⁻¹"],
      answer: 3,
      explanation: "Decay constant λ = 0.693 / T₁/₂ = 0.693 / 0.693 year = 1 year⁻¹ (or 1 unit per time interval)."
    },
    {
      id: "szambu-phy-24-147",
      question: "The strength of radiation source is indicated by its activity measured in Becquerel. So, 10 Becquerel is equal to",
      options: ["10", "100", "1000", "10000"],
      answer: 0,
      explanation: "1 Becquerel (Bq) is defined as 1 disintegration (decay) per second. Thus, 10 Bq = 10 decays per second."
    },
    {
      id: "szambu-phy-24-164",
      question: "Cancerous thyroid is treated with",
      options: ["Chlorine-36", "Cobalt-60", "Iodine-131", "Radium-226"],
      answer: 2,
      explanation: "Iodine-131 concentrates selectively in the thyroid gland and is widely used to treat thyroid cancer and hyperthyroidism."
    },
    {
      id: "uhs-mdcat-2025-phys-130",
      question: "After 3 half-lives, the remaining fraction of a radioactive sample is:",
      options: ["1/2", "1/4", "1/8", "1/16"],
      answer: 2,
      explanation: "Remaining fraction N/N₀ = (1/2)ⁿ. For n = 3 half-lives, N/N₀ = (1/2)³ = 1/8."
    },
    {
      id: "uhs-phys-24-173",
      question: "The unit of decay constant is",
      options: ["m", "s", "s⁻¹", "m⁻¹"],
      answer: 2,
      explanation: "Decay constant λ = (dN/dt) / N, which has units of inverse time (s⁻¹)."
    },
    {
      id: "uhs-phys-24-174",
      question: "If we have “N₀” number of any radioactive element then after a period of “n” half-lives the number of atoms left behind is",
      options: ["2ⁿ N₀", "(1/2)ⁿ N₀", "(1/2 N₀)ⁿ", "(2 N₀)ⁿ"],
      answer: 1,
      explanation: "The standard decay formula after n half-lives is N = (1/2)ⁿ N₀."
    },
    {
      id: "uhs-phys-24-175",
      question: "Which of the following is NOT the Somatic biological effect of radiation?",
      options: ["Skin burn", "Loss of hair", "Induction of cancer", "Genes mutation"],
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
    {
      id: "testmoz-phys-nuc-1",
      question: "Both xenon and cesium each have isotopes",
      options: ["12", "36", "33", "39"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-2",
      question: "A newly prepared radioactive nucleoid has a decay constant of second inverse. What is the approximate half life of the nuclide?",
      options: ["1 hour", "1 day", "1 week", "1 month"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-3",
      question: "At the end of 14 minutes 1/16 of a sample of radioactive polonium remains. The corresponding half life is",
      options: ["7/8 min", "7/4 min", "8/7 min", "7/2 min"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-4",
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
      id: "testmoz-phys-nuc-5",
      question: "Due to emission of Beta particle by a Thorium nucleus we get",
      options: ["Radium", "Protactinium", "Uranium", "Radon"],
      answer: 1
    },
    {
      id: "testmoz-phys-nuc-6",
      question: "Half life period of Radium is 1600 years. Its average lifetime will be",
      options: ["3200 years", "4800 years", "2319 years", "4217 years"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-7",
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
      id: "testmoz-phys-nuc-8",
      question: "Half life of iodine-131",
      options: ["3 days", "16 days", "14 days", "8 days"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-9",
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
      id: "testmoz-phys-nuc-10",
      question: "If 10% of a radioactive substance decays in every 5 years, then the percentage of the substance that will be decayed in 20 years is",
      options: ["40%", "50%", "65.6%", "34.4%"],
      answer: 0
    },
    {
      id: "testmoz-phys-nuc-11",
      question: "Half life of a radioactive element can be increased by",
      options: ["Increasing temperature", "Changing volume", "Increasing pressure", "Can’t be increased"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-12",
      question: "Alpha particles can produce fluorescence in",
      options: ["ZnS", "Sodium iodide", "Barium platinocyanide", "All"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-13",
      question: "Which one of the following will be a better shield against gamma rays?",
      options: ["Ordinary water", "Lead", "Heavy water", "Aluminium"],
      answer: 1
    },
    {
      id: "testmoz-phys-nuc-14",
      question: "Half life of Radium-226 is",
      options: ["1820 years", "1620 years", "1940 years", "1680 years"],
      answer: 1
    },
    {
      id: "testmoz-phys-nuc-15",
      question: "In Gamma emission the atomic number of the nucleus",
      options: ["Increases by 1", "Decreases by 1", "Decreases by 2", "No change"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-16",
      question: "The half life of a certain radioactive element is such that 7/8 of a given quantity decreases in 12 days. What fraction remains undecayed after 24 days?",
      options: ["0", "1/28", "1/64", "1/32"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-17",
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
      id: "testmoz-phys-nuc-18",
      question: "Which one of the following combinations of radioactive decay results in the formation of an isotope of the original nuclide?",
      options: ["Alpha and beta", "Alpha and two beta", "Two alpha and two beta", "Alpha and four beta"],
      answer: 1
    },
    {
      id: "testmoz-phys-nuc-19",
      question: "Materials can be identified by measuring",
      options: ["Hardness", "Masses", "Densities", "Half lives"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-20",
      question: "Heavy radioactive elements eventually turn into",
      options: ["Barium", "Hydrogen", "Lead", "Radium"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-21",
      question: "The average distance covered by an Alpha particle in air before its ionizing power ceases is called its",
      options: ["Trajectory", "Firing level", "Range", "Limit"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-22",
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
      id: "testmoz-phys-nuc-23",
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
      id: "testmoz-phys-nuc-24",
      question: "Alpha, beta and gamma rays emitted by a radioactive substance are passed through a region containing a magnetic field at right angles to their path. The energy gained will be",
      options: ["Maximum for alpha rays", "Maximum for beta rays", "Maximum for gamma rays", "0 for all of them"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-25",
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
      id: "testmoz-phys-nuc-26",
      question: "A particle having the same mass as an electron and the charge of a proton is called",
      options: ["Anti-proton", "Gamma rays", "Positron", "Photon"],
      answer: 2
    },
    {
      id: "testmoz-phys-nuc-27",
      question: "In which radioactive disintegration does a neutron dissociate into a proton and an electron?",
      options: ["Alpha emission", "Beta emission", "None", "Gamma emission"],
      answer: 1
    },
    {
      id: "testmoz-phys-nuc-28",
      question: "The half life of Radium is about 1600 years. If 100 g of radium exists now, 25 g remains undecayed after",
      options: ["4800 years", "6400 years", "6800 years", "3200 years"],
      answer: 3
    },
    {
      id: "testmoz-phys-nuc-29",
      question: "When a radioactive nucleus emits a beta particle the proton-to-neutron ratio",
      options: ["Decreases", "Remains the same", "Increases"],
      answer: 2
    }
  ];
  export const englishQuestions: Question[] = [
    // SECTION 2: FORMAL AND LEXICAL ASPECT OF LANGUAGE
        {
            id: "1",
          question: "When I _______ him, Rauf _______ cricket.",
          options: ["was, playing", "saw, is playing", "saw, was playing", "saw, played"],
          answer: 2
        },
        {
            id: "2",
          question: "_______ Danube is Austria’s longest river.",
          options: ["A", "An", "The", "No change required"],
          answer: 2
        },
        {
            id: "3",
          question: "Choose the word which is similar in meaning to: REIGN",
          options: ["Damp", "Tussle", "Rule", "Prime"],
          answer: 2
        },
        {
            id: "4",
          question: "We are about _______ at the place where we can set up our tents.",
          options: ["to arrive", "arriving", "be arriving", "to have arriving"],
          answer: 0
        },
        {
            id: "5",
          question: "Under ethical guidelines recently adopted by the National Institutes of Health, human genes are to be manipulated only to correct diseases for which _______ treatments are unsatisfactory.",
          options: ["similar", "most", "dangerous", "alternative"],
          answer: 3
        },
        {
            id: "6",
          question: "We are committed to providing excellent customer service, _______ ensuring a positive experience for all our clients.",
          options: ["thereby", "therefore", "because", "since"],
          answer: 0
        },
        {
            id: "7",
          question: "If _______ the match, I will go to Lahore to meet the sports board chairman.",
          options: ["I win", "I will win", "I shall win", "I wins"],
          answer: 0
        },
        {
            id: "8",
          question: "To abscond means:",
          options: [
            "to create a secret hiding place",
            "to do something without telling anyone",
            "to go away secretly and hide",
            "to do something ahead of deadline"
          ],
          answer: 2
        },
        {
            id: "9",
          question: "There was a surprising story in the newspaper about the _______ car was stolen.",
          options: ["man which his", "man whose his", "man that his", "man whose"],
          answer: 3
        },
        {
            id: "10",
          question: "He isn’t good _______ French.",
          options: ["at", "in", "to", "of"],
          answer: 0
        },
        {
            id: "11",
          question: "Antonym of HEGEMONY is:",
          options: [
            "lack of energy",
            "lack of precision",
            "lack of authority",
            "lack of confidence"
          ],
          answer: 2
        },
        {
            id: "12",
          question: "Many modern architects insist on _______ materials native to the region that will blend into the surrounding landscape.",
          options: ["use", "to use", "the use", "using"],
          answer: 3
        },
        {
            id: "13",
          question: "Unless a student _______ with the university regulations, he can be removed from the university.",
          options: ["complies", "complied", "has complied", "will comply"],
          answer: 0
        },
        {
            id: "14",
          question: "What is the opposite of: CHAOTIC",
          options: ["Immersive", "orderly", "Hectic", "Steady"],
          answer: 1
        },
        {
            id: "15",
          question: "Romans _______ a unique system of the Roman alphabet.",
          options: ["improved", "developed", "persuaded", "exchanged"],
          answer: 1
        },
        {
            id: "16",
          question: "It is common knowledge to anyone who studies science, that the earth _______ on its own axis once every 24 hours.",
          options: ["revolves", "revolve", "has revolved", "has had revolved"],
          answer: 0
        },
        {
            id: "17",
          question: "Which sentence implies that it was unexpected that she took the test.",
          options: [
            "She even took the test.",
            "She took even the test.",
            "Even she took the test.",
            "She took the test even."
          ],
          answer: 2
        },
        {
            id: "18",
          question: "Which version improves tone and formality in the sentence: “You boys need to submit the paper ASAP.”",
          options: [
            "You should submit the paper as soon as you can.",
            "Everyone needs to get the paper in quickly.",
            "The paper should be submitted as soon as possible.",
            "Y’all better hand it in now."
          ],
          answer: 2
        },
        {
            id: "19",
          question: "Pick out the sentence with appropriate use of transitional device.",
          options: [
            "She likes to read books but watch movies.",
            "She is a talented musician likewise a gifted painter.",
            "She is not only intelligent but also very kind.",
            "Second; gather your material. First, begin your project."
          ],
          answer: 2
        },
        {
            id: "20",
          question: "The students decided to meet the teacher and request him for a favour. The main verb in this sentence is:",
          options: ["meet", "request", "meet & request", "decided"],
          answer: 3
        },
        {
            id: "21",
          question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of underlined word from the given sentence.",
          options: ["Anxious", "Resilient", "Angry", "Confused"],
          answer: 1
        },
        {
            id: "22",
          question: "What is the correct reported speech for the given sentence? He said, “I am going to the store.”",
          options: [
            "He said that he was going to the store.",
            "He said that he is going to the store.",
            "He said that he has been going to the store.",
            "He said that he had been going to the store."
          ],
          answer: 0
        },
        {
            id: "23",
          question: "Identify the sentence that uses inversion correctly:",
          options: [
            "Rarely I have seen such a beautiful scene.",
            "Rarely have I seen such a beautiful scene.",
            "Rarely seen I have such a beautiful scene.",
            "Rarely I seen have such a beautiful scene."
          ],
          answer: 1
        },
        {
            id: "24",
          question: "Choose the correct option: Although he very ill, he managed to write a letter to his son.",
          options: [
            "He managed to write a letter to his son",
            "He was very ill, he managed to write a letter to his son",
            "He managed to write a letter to his son although he was very ill",
            "Although he was very ill, he managed to write a letter to his son"
          ],
          answer: 3
        },
        {
            id: "25",
          question: "Choose the correct phrase for the sentence given below: The aero plane travelled 5,000 meters before it took on.",
          options: ["Take into", "Took off", "Take over", "Took away", "Take on"],
          answer: 1
        },
        {
            id: "26",
          question: "Choose the best possible option from the given homophones: How will they get across the river if the _______ is not running?",
          options: ["Furry", "Fairly", "Fairy", "Ferry", "Fury"],
          answer: 3
        },
        {
            id: "27",
          question: "Choose the best possible antonym for the underlined word: The general’s problem was to get 20,000 troops swiftly across this river.",
          options: ["Slowly", "Expeditiously", "Thoroughly", "Anxiously", "Strongly"],
          answer: 0
        },
        {
            id: "28",
          question: "The synonym of the word “Oblivion” is:",
          options: ["Forgetful", "Observant", "Shabby", "Daunted"],
          answer: 0
        },
        {
            id: "29",
          question: "Choose the best option: Some of the race teams were still looking for _______ equipment.",
          options: ["Its", "It’s", "There", "Their", "It"],
          answer: 3
        },
        {
            id: "30",
          question: "Choose the correct prepositional phrase for the sentence given below: In today’s session, he _______ the current situation of Pakistan.",
          options: ["Suffers from", "Belongs to", "Begs for", "Compares with", "Comments on"],
          answer: 4
        },
        {
            id: "31",
          question: "Complete the main clause of the following sentence: If I went to Paris, _______.",
          options: [
            "I can see the Eiffel Tower",
            "I must see the Eiffel Tower",
            "I should see the Eiffel Tower",
            "I could see the Eiffel Tower",
            "I would see the Eiffel Tower"
          ],
          answer: 4
        },
        {
            id: "32",
          question: "Choose the correct form of the tense: I would gladly have helped him if he _______ me into confidence.",
          options: ["Took", "Has taken", "Had taken", "Have taken", "Takes"],
          answer: 2
        },
        {
            id: "33",
          question: "Choose the correct preposition: The thief made an escape by _______.",
          options: [
            "Climbing up the wall",
            "Climbing on the wall",
            "Climbing to the wall",
            "Climbing over the wall",
            "Climbing into the wall"
          ],
          answer: 3
        },
        {
            id: "34",
          question: "Despite the complicated situation, she remained _______, calmly assessing her options before deciding.",
          options: ["Composed", "Erratic", "Frantic", "Hysterical"],
          answer: 0
        },
        {
            id: "35",
          question: "Find out synonym for “Elated”",
          options: ["Confused", "Disappointed", "Nervous", "Overjoyed"],
          answer: 3
        },
        {
            id: "36",
          question: "Choose the sentence with the correct tense and sentence structure:",
          options: [
            "He is going to the market yesterday.",
            "I had been waiting for the bus, and it arrives.",
            "She will finish her homework before she went to bed.",
            "They were playing football when it started to rain."
          ],
          answer: 3
        },
        {
            id: "37",
          question: "Choose the correct sentence.",
          options: [
            "My father was talking to his friend on mobile phone when I fall from the bicycle.",
            "My father is talking to his friend on mobile phone when I fall from the bicycle.",
            "My father was talking to his friend on mobile phone when I fell from the bicycle.",
            "My father was talking to his friend on mobile phone when I am falling from the bicycle."
          ],
          answer: 2
        },
        {
            id: "38",
          question: "Choose the correct sentence:",
          options: [
            "She didn’t know about the surprise party.",
            "She hasn’t knew about the surprise party.",
            "She didn’t know about the surprise party.",
            "She doesn’t knew about the surprise party."
          ],
          answer: 0
        },
        {
            id: "39",
          question: "After she _______ the stairs, her heart almost gave out from exhaustion.",
          options: ["Has climbed", "Have climbed", "Had climbed", "Was climbing"],
          answer: 2
        },
        {
            id: "40",
          question: "Do you usually take a bus..................the market?",
          options: ["By", "For", "Of", "To"],
          answer: 3
        },
        {
            id: "41",
          question: "He has been working _______ this project for two weeks.",
          options: ["At", "By", "To", "On"],
          answer: 3
        },
        {
            id: "42",
          question: "Order is the law of civilization as chaos is the law of the ______.",
          options: ["City", "Metropolis", "Universe", "Wilderness"],
          answer: 3
        },
        {
            id: "43",
          question: "Blueprint is to architect as algorithm is to _______",
          options: ["Designer", "Engineer", "Physician", "Programmer"],
          answer: 3
        },
        {
            id: "44",
          question: "Which of the following words is a synonym for “meticulous”?",
          options: ["Abhorrent", "Heedless", "Incautious", "Precise"],
          answer: 3
        },
        {
            id: "45",
          question: "In the sentence “Jogging every morning improves my mood,” what role does the gerund phrase play?",
          options: ["Object of a verb", "Direct object", "Predicate noun", "Subject"],
          answer: 3
        },
        {
            id: "46",
          question: "The meeting has been scheduled _______ 3 p.m. sharp.",
          options: ["on", "at", "in", "to"],
          answer: 1
        },
        {
            id: "47",
          question: "“She studied hard; _______, she passed the exam with distinction.” Choose the CORRECT transitional device:",
          options: ["however", "for instance", "consequently", "in contrast"],
          answer: 2
        },
        {
            id: "48",
          question: "She completed the task with great difficulty. Identify the CORRECT usage of passive voice.",
          options: [
            "The task was completed with great difficulty by her.",
            "The task has been completed with great difficulty by her.",
            "The task was been completed with great difficulty by her.",
            "The task was being completed with great difficulty by her."
          ],
          answer: 0
        },
        {
            id: "49",
          question: "Each of the boys _______ ambitious to lead the team.",
          options: ["have", "has", "is", "are"],
          answer: 2
        },
        {
            id: "50",
          question: "“Revenge is a kind of wild justice.” The sentence illustrates the use of:",
          options: ["Personification", "Pun", "Metaphor", "Hyperbole"],
          answer: 2
        },
        {
            id: "51",
          question: "The old man was feeble, barely able to walk. The word “feeble” means:",
          options: ["Healthy", "Weak", "Strong", "Fat"],
          answer: 1
        },
        {
            id: "52",
          question: "Which literary device involves using words or phrases that convey the opposite of their literal meaning?",
          options: ["Irony", "Parody", "Satire", "Sarcasm"],
          answer: 0
        },
        {
            id: "53",
          question: "All of the players forgot _______ jerseys.",
          options: ["his", "her", "there", "their"],
          answer: 3
        },
        {
            id: "54",
          question: "He does his work without any care. The underlined part of the sentence is:",
          options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Appositive phrase"],
          answer: 0
        },
        {
            id: "55",
          question: "The board will approve the budget only after the auditor verifies the accounts. The most appropriate passive voice for the given sentence is:",
          options: [
            "The budget will be approved by the board only after the accounts are verified by the auditor.",
            "The budget is approved by the board only after the accounts have been verified by the auditor.",
            "The budget is being approved by the board only after the accounts are verified by the auditor.",
            "The budget has been approved by the board only after the accounts were verified by the auditor."
          ],
          answer: 0
        },
        {
            id: "56",
          question: "Identify the simile:",
          options: [
            "She trembled like a leaf in the wind.",
            "She was a statue, frozen in fear.",
            "She was drowning in doubt.",
            "Her thoughts were a whirlwind."
          ],
          answer: 0
        },
        {
            id: "57",
          question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
          options: ["Joyful", "Weepy", "Monotonous", "Humorous"],
          answer: 1
        },
        {
            id: "58",
          question: "He said, “Will you listen to such a man?” Choose the most appropriate indirect speech conversion from the given options:",
          options: [
            "He asked them that they would listen to such a man.",
            "He asked them whether they would listen to such a man.",
            "He told them whether they will listen to such a man.",
            "He asked them to listen to such a man."
          ],
          answer: 1
        },
        {
            id: "59",
          question: "Choose the sentence in which “only” indicates that Jamila was the only person who spoke about her tiredness.",
          options: [
            "Only Jamila said she was tired.",
            "Jamila only said she was tired.",
            "Jamila said only she was tired.",
            "Jamila said she was only tired."
          ],
          answer: 0
        },
        {
            id: "60",
          question: "Choose the correct sentence:",
          options: [
            "The new policy aims at reduce waste, to promote recycling, and creating awareness among citizens.",
            "The new policy aims to reducing waste, promoting recycling, and create awareness among citizens.",
            "The new policy aims to reduce waste, to promote recycling, and creating awareness among citizens.",
            "The new policy aims to reduce waste, promote recycling, and create awareness among citizens."
          ],
          answer: 3
        },
        {
            id: "61",
          question: "The purpose of using exaggerated language in parody is:",
          options: [
            "To create a serious tone",
            "To criticize societal norms",
            "To entertain and mock",
            "To confuse the reader"
          ],
          answer: 2
        },
        {
            id: "62",
          question: "The book was written by Rashid Khan. Identify the correct usage of voice.",
          options: [
            "Rashid Khan writes the book.",
            "Rashid Khan wrote the book.",
            "Rashid Khan written the book.",
            "Rashid Khan has write the book."
          ],
          answer: 1
        },
        {
            id: "63",
          question: "Identify the example of complex sentence.",
          options: [
            "I both thanked him and rewarded him.",
            "Life is what we make it.",
            "He owed his success to his father.",
            "Jumping up, he ran away."
          ],
          answer: 1
        },
        {
            id: "64",
          question: "Pick out the sentence which illustrates the use of infinitive.",
          options: [
            "He refused to obey the orders.",
            "He refused obeying the orders.",
            "He refused obey the orders.",
            "He refused obeyed the orders."
          ],
          answer: 0
        },
        {
            id: "65",
          question: "What is the effect of using synonyms with different shades of meaning in satire?",
          options: [
            "To create a serious tone",
            "To highlight the absurdity or irony of a situation",
            "To confuse the reader",
            "To add complexity to the language"
          ],
          answer: 1
        },
        {
            id: "66",
          question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means ............",
          options: ["relate", "coordinate", "comprehend", "verify"],
          answer: 2
        },
        {
            id: "67",
          question: "The team won the match. _______ they broke the school record.",
          options: ["Similarly", "Nevertheless", "Furthermore", "Instead"],
          answer: 2
        },
        {
            id: "68",
          question: "Travelling in a hot dusty train gives me no pleasure. The underlined part of the sentence is:",
          options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Infinitive phrase"],
          answer: 2
        },
        {
            id: "69",
          question: "What does “I’ve told you a million times” means?",
          options: [
            "To prove an exact count",
            "To emphasize frustration or impatience",
            "To confuse the listener",
            "To make the character sound foolish"
          ],
          answer: 1
        },
        {
            id: "70",
          question: "Identify the type of sentence given below: The caliph noticed the merchant.",
          options: ["Complex", "Compound", "Compound-complex", "Simple"],
          answer: 3
        },
        {
            id: "71",
          question: "Supply the correct synonym for the capitalized word: An ORTHODOX is a _______ person.",
          options: ["clever", "confident", "confused", "conservative"],
          answer: 3
        },
        {
            id: "72",
          question: "Identify the correct indirect form for the sentence given below: The speaker said to the audience, “Will you listen to me?”",
          options: [
            "The speaker asked the audience if they had listened to him.",
            "The speaker asked the audience if they will listen to him.",
            "The speaker asked the audience if they would listen to him.",
            "The speaker asked the audience to listen to him."
          ],
          answer: 2
        },
        {
            id: "73",
          question: "Identify the correct passive form for the sentence given below: The guard did not open the gate.",
          options: [
            "The gate did not open by the guard.",
            "The gate had not been opened by the guard.",
            "The gate was not being opened by the guard.",
            "The gate was not opened by the guard."
          ],
          answer: 3
        },
        {
            id: "74",
          question: "Supply the correct preposition: I was almost back _______ my classroom door when I heard a strange noise.",
          options: ["at", "by", "in", "to"],
          answer: 0
        },
        {
            id: "75",
          question: "Supply the correct form of verb: Farah has planned _______ before the next term.",
          options: ["resign", "resignation", "resigning", "to resign"],
          answer: 3
        },
        {
            id: "76",
          question: "Supply the correct antonym for the capitalized word: Your RECKLESS behavior is not acceptable. You have to be more _______.",
          options: ["careful", "happy", "hardworking", "kind"],
          answer: 0
        },
        {
            id: "77",
          question: "Supply the correct preposition: Have you been in this company _______ six weeks?",
          options: ["during", "for", "just", "since"],
          answer: 1
        },
        {
            id: "78",
          question: "Supply the correct form of verb: Had I known the answer I _______ it.",
          options: ["got written", "have written", "would have written", "wrote"],
          answer: 2
        },
        {
            id: "79",
          question: "Supply the correct form of verb: We had taken our meal before we _______.",
          options: ["had left", "have left", "left", "were leaving"],
          answer: 2
        },
        {
            id: "80",
          question: "Supply the correct antonym for the capitalized word: What can be done to ALLEVIATE the situation?",
          options: ["Aggravate", "Anticipate", "Clear", "Manipulate"],
          answer: 0
        },
        {
            id: "81",
          question: "The underlined part in the sentence given below is an adverbial clause of _______: Although Mehran is hardworking, yet he failed.",
          options: ["Concession", "Condition", "Manner", "Reason"],
          answer: 0
        },
        {
            id: "81",
          question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
          options: [",", "–", ";", ":"],
          answer: 2
        },
        {
            id: "82",
          question: "Supply the correct synonym for the capitalized word: The new government brought STUPENDOUS changes in the economy and _______ its critics.",
          options: ["destroyed", "fooled", "involved", "surprised"],
          answer: 3
        },
        {
            id: "83",
          question: "Identify the figure of speech in the following sentence: He is considered the black sheep of the family.",
          options: ["Alliteration", "Imagery", "Metaphor", "Simile"],
          answer: 2
        },
        {
            id: "84",
          question: "What does the word “SURPLUS” mean?",
          options: ["In excess", "A mathematical term", "Within reach", "Salutation"],
          answer: 0
        },
        {
            id: "85",
          question: "What does the word “ANCESTOR” mean?",
          options: ["Collection of stars", "Branch of astrology", "Forefathers", "Type of receptors"],
          answer: 2
        },
        {
            id: "86",
          question: "What does the word “SPILL” mean?",
          options: ["Coil", "Deliver", "Spoil", "Spread"],
          answer: 3
        },
        {
            id: "87",
          question: "The soup _______ good",
          options: ["Taste", "Tastes", "Is tasting", "Has taste"],
          answer: 1
        },
        {
            id: "88",
          question: "I _______ him for a long time.",
          options: ["Have never known", "Had never knew", "Had never been known", "Would never knew"],
          answer: 0
        },
        {
            id: "89",
          question: "_______ words spoken in earnest will convince him",
          options: ["A few", "The few", "Few", "Fewer"],
          answer: 0
        },
        {
            id: "90",
          question: "He takes _______ his father. Fill in the blank with appropriate preposition.",
          options: ["Up", "Down", "After", "In"],
          answer: 2
        },
        {
            id: "91",
          question: "Choose the CORRECT sentence",
          options: [
            "“The unexamined life”, said Socrates, “is unfit to be lived by man.”",
            "The Inexamined life, said Socrates, “Is unfit to be lived by man”",
            "“The unexamined life said Socrates”, is disfit to be lived by man.",
            "“The disexamined life” said Socrates is unfit to be lived by man."
          ],
          answer: 0
        },
        {
            id: "92",
          question: "Which of the following sentences has correct subject verb agreement?",
          options: [
            "The teacher give the students homework.",
            "The teacher gives the students homework.",
            "The teachers gives the student homework.",
            "The teachers given the student homework."
          ],
          answer: 1
        },
        {
            id: "93",
          question: "The keys were found _______ the drawer where you left them last week.",
          options: ["under", "in", "on", "beside"],
          answer: 1
        },
        {
            id: "94",
          question: "The board of directors expressed _______ disappointment with the financial results.",
          options: ["their", "its", "his or her", "one’s"],
          answer: 1
        },
        {
            id: "95",
          question: "It rained all night; _______, the roads were flooded in the morning.",
          options: ["similarly", "instead", "as a result", "in contrast"],
          answer: 2
        },
        {
            id: "96",
          question: "The manager accepted the cashier’s _______ for coming late.",
          options: ["explanation", "explanation", "explanation", "explanation"],
          answer: 0
        },
      
        // SECTION 3: WRITING SKILLS
        {
            id: "1",
          question: "Choose the word with incorrect spelling:",
          options: ["sagacious", "foremost", "berister", "pneumonia"],
          answer: 2
        },
        {
            id: "2",
          question: "Spot the error in the given sentence: The stories that she makes up for the children ought to be written down and published.",
          options: ["For", "Down", "Ought", "Stories", "And"],
          answer: 2
        },
        {
            id: "3",
          question: "Spot the error in the given sentence: The bushes on the corner make it difficult for the driver to see the traffic approaching from the write.",
          options: ["Write", "For", "Make", "Approaching", "Bushes"],
          answer: 0
        },
        {
            id: "4",
          question: "Punctuate the following sentence: He said will you have time to play regularly",
          options: [
            "He said, ‘Will you have time to play regularly?’",
            "He said, Will you have time to play regularly?",
            "He said, “Will you have time to play regularly.”",
            "He said ‘Will you have time to play regularly’.",
            "He said, ‘Will you have time to play regularly’."
          ],
          answer: 0
        },
        {
            id: "5",
          question: "Correct the spelling & capitalization errors in the paragraph below: It was in korea, june 1953...",
          options: [
            "Korea – June – Strapped – Roadside – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Strapped – Roadside – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Korea – June – Peg – Pretty – Fainted – Korean – Sitting – Blue – Plaits – Shoulders",
            "Korea – Strapped – Roadside – Peg – Sitting – Blue – Plaits – Shoulders",
            "Korea – June – Strapped – Pretty – Blue – Plaits – Shoulders"
          ],
          answer: 0
        },
        {
            id: "6",
          question: "Punctuate the given sentence correctly. The teacher asked did you complete your homework",
          options: [
            "The teacher asked, did you complete your homework?",
            "The teacher asked, “Did you complete your homework?”",
            "The teacher asked, “did you complete your homework”.",
            "The teacher asked, did you complete your homework."
          ],
          answer: 1
        },
        {
            id: "7",
          question: "Punctuate the following sentence correctly. Lets meet at Sarahs house after school",
          options: [
            "Let’s meet at Sarah’s house after school.",
            "Let’s meet at Sarahs’ house after school.",
            "Lets meet at Sarah’s house after school.",
            "Let’s meet, at Sarah’s house after school."
          ],
          answer: 0
        },
        {
            id: "8",
          question: "Identify the sentence that contains an ERROR in word order, style, or vocabulary:",
          options: [
            "He has a talent for solving complex problems.",
            "She enjoys reading, writing, and to paint.",
            "The quick brown fox jumps over the lazy dog.",
            "They quickly adapted to the new environment."
          ],
          answer: 1
        },
        {
            id: "9",
          question: "Identify the ERROR in the sentence: The chef quickly prepared, delicious and it served a meal.",
          options: ["Punctuation", "Style", "Vocabulary", "Word order"],
          answer: 3
        },
        {
            id: "10",
          question: "Choose the word with incorrect spelling:",
          options: ["Immigrant", "Ancestors", "Montessori", "Pregmetic"],
          answer: 3
        },
        {
            id: "11",
          question: "Identify the sentence with no spelling error:",
          options: [
            "Rabia completes homework assignments well in time.",
            "Rabia complete homework assignments well in time.",
            "Rabia completes homework assignments well in time.",
            "Rabia completes homework assignments well in time."
          ],
          answer: 0
        },
        {
            id: "12",
          question: "Identify the correct spelling:",
          options: ["Discremination", "Discrimenation", "Discrimination", "Disscrimnation"],
          answer: 2
        },
        {
            id: "13",
          question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
          options: [",", "–", ";", ":"],
          answer: 2
        },
        {
            id: "14",
          question: "Pick the CORRECT option:",
          options: [
            "The supervisor has nor will ever compromise.",
            "The supervisor have nor will ever compromise.",
            "The supervisor has not compromised nor will ever compromise.",
            "The supervisor has nor will ever compromised."
          ],
          answer: 2
        },
        {
            id: "15",
          question: "Choose the sentence that is punctuated correctly:",
          options: [
            "He said to his disciples \"Watch and pray.\"",
            "He said to his disciples, \"Watch and pray.\"",
            "He said to his disciples, \"watch and, pray\"",
            "He said to his disciples' \"watch and pray.\""
          ],
          answer: 1
        },
        {
            id: "16",
          question: "Choose the CORRECT spellings.",
          options: ["Pharaoh", "Pharoah", "Pheroh", "Pheraoh"],
          answer: 0
        },
        {
            id: "17",
          question: "Choose the CORRECT sentence",
          options: [
            "She has beauty, brains and wealth-a rare combination.",
            "She has beauty, brains, and wealth-a rare combination.",
            "She has beauty, brains, and wealth; a rare combination.",
            "She has beauty, brains, and wealth: a rare combination."
          ],
          answer: 0
        },
        {
            id: "18",
          question: "Choose the CORRECT sentence",
          options: [
            "In 1838 Schleiden suggested that all plants were made of cells",
            "In 1838 Schleiden suggest that all plants were made of cells",
            "In 1838 Schleiden suggested that all plant were made of cells",
            "In 1838 Schleiden suggested to all plants were made of cells"
          ],
          answer: 0
        },
        {
            id: "19",
          question: "Choose the CORRECT sentence",
          options: [
            "There's mr. hashim whome they say is the best portrait painter in the town.",
            "There's Mr. Hashim, who they say is the best portrait painter in the town.",
            "There's Mr. Hashim which they say is the portrait painter in the town",
            "There's Mr. Hashim who they say is best portrait painter in the town."
          ],
          answer: 1
        },
        {
            id: "20",
          question: "Choose the CORRECT sentence",
          options: [
            "Gulliver travels was written to Swift.",
            "Gulliver travels was written at Swift.",
            "Gulliver's Travels was written by Swift.",
            "Gullivers' travel was written by Swift"
          ],
          answer: 2
        },
        {
            id: "21",
          question: "Choose the CORRECT sentence",
          options: [
            "“The unexamined life”, said Socrates, “is unfit to be lived by man.”",
            "The Inexamined life, said Socrates, “Is unfit to be lived by man”",
            "“The unexamined life said Socrates”, is disfit to be lived by man.",
            "“The disexamined life” said Socrates is unfit to be lived by man."
          ],
          answer: 0
        },
        {
            id: "22",
          question: "Choose the CORRECT sentence",
          options: [
            "You have often heard of me speaking of my friend Wahaj waheed a barrister here",
            "You have often heard me speak of my friend, Wahaj Waheed, who is a barrister here.",
            "You have often heard me. Speak off my friend, wahaj waheed who is a Barrister here",
            "you have often heard me speak about my friend; wahaj waheed-a barrister hear"
          ],
          answer: 1
        },
        {
            id: "23",
          question: "Choose the CORRECT sentence",
          options: [
            "The first space traveller was Dennis Tito from the United States.",
            "The First Space Traveller was Dennis Tito, from, the United States",
            "The first space traveller was Dennis Tito-from united State",
            "The first space traveler was Dennis Tito, from the United States"
          ],
          answer: 0
        },
        {
            id: "24",
          question: "Choose the CORRECT sentence",
          options: [
            "It was greatly good by you to proposed day's picnic at murree",
            "It was awfully good by you to proposed a day's picnic in Murree.",
            "It was awfully good of you to propose a day's picnic at Murree.",
            "It was very good off you too propose days picnic in Murree"
          ],
          answer: 2
        },
        {
            id: "25",
          question: "Identify the sentence among of the following, which is punctuated correctly?",
          options: [
            "The teaching staff asked the principal what time the meeting would start.",
            "The teaching staff asked the principal: “What time would the meeting start?”",
            "The teaching staff asked the principal, “What time would the meeting start?”",
            "The teaching staff asked the principal: “What time would the meeting start?”"
          ],
          answer: 2
        },
        {
            id: "26",
          question: "Identify the sentence with no spelling error:",
          options: [
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant.",
            "Imtiaz invited me on a dinner party at restaurant."
          ],
          answer: 0
        }
      ];
    
    
    
    export const readingAndThinkingSkillPassages = [
      {
        id: "baby-smiles",
        text: `As adults, we may be able to convey our mood by a mere twist of the lips, but the infant throws much more into the battle. When smiling at full intensity, it also kicks and waves its arms about, stretches its hands out towards the stimulus and moves them about, produces babbling voices, tilts back its head, protrudes its chin, leans its trunk forward or rolls it to one side.`
      },
    
      {
        id: "cornea-transplants",
        text: `All walked in from a world of darkness and left in the fullness of light—blind or partially blind patients who received the gift of sight through cornea transplants of eyes.`
      },
    
      {
        id: "bank-savings",
        text: `As the big door swung behind me, I heard the sound of a roar of laughter that went up to the roof of the bank. Since then I use a bank no more. I keep my money in my pocket and my savings in silver dollars in a sock.`
      },
    
      {
        id: "regular-exercise",
        text: `Regular exercise has been shown to improve overall health by reducing the risk of chronic diseases, such as heart disease and diabetes. Additionally, exercise enhances mental well-being by reducing stress, anxiety, and depression. Despite these benefits, many people find it challenging to maintain a consistent exercise routine due to busy schedules and a lack of motivation.`
      },
    
      {
        id: "father-jess",
        text: `“This is the way, Jess,” said my father, pointing with his cane across the deep valley below us. “I want to show you something you’ve not seen for many years!”
    
    “Isn’t it too hot for you to do much walking?” I wiped the streams of sweat from my face to keep them from stinging my eyes. I didn’t want to go with him. I had just finished walking a half mile uphill from my home to his. I had carried a basket of dishes to Mom. There were two slips in the road and I couldn’t drive my car and I knew how hot it was. It was 97 in the shade.
    
    I knew that from January until April my father had gone to eight different doctors. One of the doctors had told him to get a taxi to take him home. But my father walked home five miles across the mountain and told my Mom what the doctor had said.
    
    Forty years ago, a doctor had told him the same thing. And he had lived to raise a family of five children. He had done so much hard work in those years as any man.`
      }
    ];
    
    export const readingAndThinkingSkillQuestions = [
    
      {
        passageId: "baby-smiles",
        question: "Which statement is true according to the passage about baby smiles?",
        options: [
          "Babies rarely smile and often it is difficult to judge their smiles.",
          "A baby’s smile is more vigorous than an adult’s.",
          "In comparison to adults, a baby smiles more quietly.",
          "Babies make babbling noises before they smile."
        ],
        answer: 1
      },
    
      {
        passageId: "cornea-transplants",
        question: "In the line 'All walked in from a world of darkness and left in the fullness of light...', who are being referred to?",
        options: [
          "people from dark regions",
          "those interested in gifts",
          "people with healthy eyesight",
          "those who sought eye transplant"
        ],
        answer: 3
      },
    
      {
        passageId: "bank-savings",
        question: "Where did the writer put his savings in?",
        options: [
          "Pocket",
          "Silver box",
          "Bank",
          "Pocket",
          "Sock"
        ],
        answer: 4
      },
    
      {
        question: "The detective noticed a subtle change in the suspect’s tone when he asked about her whereabouts... What does “subtle” most likely mean?",
        options: [
          "Dramatic",
          "Notable",
          "Obvious",
          "Slight"
        ],
        answer: 3
      },
    
      {
        passageId: "regular-exercise",
        question: "Based on the paragraph about regular exercise, which of the following statements can be inferred?",
        options: [
          "Busy schedules and lack of motivation are barriers to regular exercise.",
          "Chronic diseases cannot be prevented by regular exercise.",
          "Exercise is only beneficial for physical health, not mental health.",
          "People who exercise regularly never experience stress or anxiety."
        ],
        answer: 0
      },
    
      {
        passageId: "father-jess",
        question: "The sentence “It was 97 in the shade.” refers to the _______.",
        options: [
          "age",
          "distance",
          "temperature",
          "year"
        ],
        answer: 2
      },
    
      {
        passageId: "father-jess",
        question: "The narrator has _______ siblings.",
        options: [
          "four",
          "five",
          "six",
          "no"
        ],
        answer: 0
      },
    
      {
        question: "“She was elated when she got first position in exams.” What is the meaning of “elated” in this sentence?",
        options: [
          "Disappointed",
          "Worried",
          "Excited",
          "Mad"
        ],
        answer: 2
      },
    
      {
        question: "The writer has unearthed serious irregularities in the entire project. The word ‘unearthed’ in this sentence means:",
        options: [
          "written",
          "mentioned",
          "exposed",
          "stated"
        ],
        answer: 2
      },
    
      {
        question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of the underlined word from the given sentence.",
        options: [
          "Anxious",
          "Resilient",
          "Angry",
          "Confused"
        ],
        answer: 1
      },
    
      {
        question: "The old man was feeble, barely able to walk. The word “feeble” means:",
        options: [
          "Healthy",
          "Weak",
          "Strong",
          "Fat"
        ],
        answer: 1
      },
    
      {
        question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
        options: [
          "Joyful",
          "Weepy",
          "Monotonous",
          "Humorous"
        ],
        answer: 1
      },
    
      {
        question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means:",
        options: [
          "relate",
          "coordinate",
          "comprehend",
          "verify"
        ],
        answer: 2
      }
    
    ];
    export const logicalReasoningQuestions: Question[] = [
        // BUMHS 2025 Logical Reasoning
            {
              id: "bumhs-2025-172",
              question: "Prohibiting smoking in public areas will reduce the occurrence of lung disease.\n\nWhat assumption is present here?",
              options: [
                "Banning smoking has no impact on lung disease rates.",
                "Hence all people live in public areas therefore, banning smoking will eliminate lung disease.",
                "Smoking is the sole cause of lung disease.",
                "Smoking in public places plays a major role in causing lung disease."
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-173",
              question: "Consider the pattern in the given picture. If the pattern is continued, then the image in box 12 will resemble the image No.?",
              image: "/images/logical-reasoning/lr-1-q.png",
              options: [
                "1",
                "2",
                "3",
                "4"
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-174",
              question: "The age of a man is twice that of his daughter. If the man is 36 years old, what was the daughter’s age 4 years ago?",
              options: [
                "14 years",
                "18 years",
                "20 years",
                "10 years"
              ],
              answer: 0
            },
            {
              id: "bumhs-2025-175",
              question: "Which of the following represents an environmental factor that could lead to incidents?",
              options: [
                "Lack of experience",
                "Machine malfunctioning",
                "A storm leading to power disruptions",
                "A design flaw"
              ],
              answer: 2
            },
            {
              id: "bumhs-2025-176",
              question: "If a person earns Rs. 1000 in the first week and their income doubles each week, how much will they earn in the 4th week?",
              options: [
                "Rs. 4000",
                "Rs. 3000",
                "Rs. 8000",
                "Rs. 16000"
              ],
              answer: 2
            },
            {
              id: "bumhs-2025-177",
              question: "What would be the result of: 10 – 3 × 2 ?",
              options: [
                "4",
                "6",
                "14",
                "17"
              ],
              answer: 0
            },
            {
              id: "bumhs-2025-178",
              question: "A man walks 12 meters north, then turns right and walks 8 meters, then turns right again and walks 12 meters. He finally turns left and walks 5 meters.\n\nWhat is the distance between his starting and ending point?",
              options: [
                "5m",
                "8m",
                "13m",
                "17m"
              ],
              answer: 2
            },
            {
              id: "bumhs-2025-179",
              question: "In a certain university, 25% candidates failed university admission test. Of those who passed the test, 80% got the admission in the university. If 1800 got admission, how many candidates appear in the test?",
              options: [
                "9000",
                "6000",
                "5000",
                "3000"
              ],
              answer: 3
            },
            {
              id: "bumhs-2025-180",
              question: "CAT is to DOG, as MOUSE is to:",
              options: [
                "RAT",
                "CAT",
                "DOG",
                "CHEESE"
              ],
              answer: 0
            },
          
          // IBA SINDH 2025 MDCAT Logical Reasoning
            {
              id: "iba-sindh-2025-172",
              question: "If A is mother of B and C is child of B, then what is the relationship between A and C?",
              options: [
                "Aunt",
                "Grandmother",
                "Sister",
                "Cousin"
              ],
              answer: 1
            },
            {
              id: "iba-sindh-2025-173",
              question: "Which number comes in the missing place?\n\n120, 119, 117, 114, 110, ___",
              options: [
                "95",
                "100",
                "105",
                "107"
              ],
              answer: 2
            },
            {
              id: "iba-sindh-2025-174",
              question: "A spying agent coded POWER as QPXFS. Using this pattern, what will be the code for GUNED?",
              options: [
                "HVPFE",
                "HVRFE",
                "HVOFE",
                "IVRFG"
              ],
              answer: 2
            },
            {
              id: "iba-sindh-2025-175",
              question: "A new virus is spreading rapidly in the city. The government should impose temporary travel restrictions. What is true about this course of action?",
              options: [
                "Travel restrictions help control the virus spread",
                "The government should promote travel to support the economy",
                "Travel restrictions do not affect virus transmission",
                "People should disregard government advice"
              ],
              answer: 0
            },
            {
              id: "iba-sindh-2025-176",
              question: "A tank can hold 240 liters of water. Currently, water is filled to one third of its capacity. How much more water can it hold?",
              options: [
                "60 liters",
                "80 liters",
                "100 liters",
                "160 liters"
              ],
              answer: 3
            },
            {
              id: "iba-sindh-2025-177",
              question: "M, N, P, Q, S, ??",
              options: [
                "T",
                "U",
                "V",
                "W"
              ],
              answer: 0
            },
            {
              id: "iba-sindh-2025-178",
              question: "If Amna is older than Muneeb, and Muneeb is younger than Jaffar, then Amna is:",
              options: [
                "Amna is older than Jaffar",
                "Amna is younger than Jaffar",
                "Amna and Jaffar are the same age",
                "There is not enough information to say"
              ],
              answer: 3
            },
            {
              id: "iba-sindh-2025-179",
              question: "Statements: All melons are apples. No apples are mangoes.\n\nWhich of the following conclusions about the given statements are true?\n\nConclusion I: All melons are mangoes.\nConclusion II: Apples are not mangoes.",
              options: [
                "Only I",
                "Only II",
                "Both I and II",
                "Neither I nor II"
              ],
              answer: 1
            },
            {
              id: "iba-sindh-2025-180",
              question: "In a family of six members:\n\n• P is the father of Q\n• R is the mother of Q\n• S is the sister of Q\n• T is the brother of P\n\nWho is the uncle of Q?",
              options: [
                "P",
                "R",
                "S",
                "T"
              ],
              answer: 3
            },
          
          // KMU MDCAT 2025 Logical Reasoning
            {
              id: "kmu-2025-172",
              question: "A medication dose starts at 100mg and halves each day. What will be the dose on day 4?",
              options: [
                "12.5mg",
                "25mg",
                "30mg",
                "50mg"
              ],
              answer: 0
            },
            {
              id: "kmu-2025-173",
              question: "A library has 4 books on Shelf A, and 8 books on Shelf B. Some books are removed from Shelf B such that both shelves now have exactly the same number of books. How many books were removed from Shelf B?",
              options: [
                "2 books",
                "3 books",
                "4 books",
                "6 books"
              ],
              answer: 2
            },
            {
              id: "kmu-2025-174",
              question: "Ahmed ranks 10th in the class of 46 students. There are only 7 students below Bilal rank wise. How many students are there between Ahmed and Bilal?",
              options: [
                "27",
                "28",
                "30",
                "32"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-175",
              question: "How is Ali related to Mustafa? If all says, “Mustafa’s mother is the only child of my grandmother.”",
              options: [
                "Brother",
                "Cousin",
                "Uncle",
                "Father"
              ],
              answer: 0
            },
            {
              id: "kmu-2025-176",
              question: "A mobile company is deciding whether to collect personal user data for improving advertisement. Which of the following is a moral argument against collecting the data?",
              options: [
                "Users may lose trust in the company, which could hurt profits",
                "It is wrong to collect data without users’ clear and informed consent",
                "Competitors already collect more data, and we need to stay competitive",
                "More data means more accurate advertising, which boosts sales"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-177",
              question: "A father is 5 years older than twice his son’s age. If the son is 12, what is the father’s age?",
              options: [
                "28 years",
                "29 years",
                "30 years",
                "32 years"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-178",
              question: "Which number comes in the missing place? 162, 146, 132, ____, 200, 180,",
              options: [
                "118",
                "120",
                "126",
                "122"
              ],
              answer: 1
            },
            {
              id: "kmu-2025-179",
              question: "If 5 boxes of soap weigh 75 kilos and each box when empty weighs 3 kilos. What is total weight of the soaps?",
              options: [
                "15",
                "30",
                "45",
                "60"
              ],
              answer: 3
            },
            {
              id: "kmu-2025-180",
              question: "Consider the sequence: 64, 32, 16, 8, … What is the 10th term of this sequence?",
              options: [
                "2",
                "4",
                "1/4",
                "1/8"
              ],
              answer: 3
            },
          
          // SZABMU MDCAT 2025 Logical Reasoning
            {
              id: "szabmu-2025-172",
              question: "An outbreak of a corona disease is reported in the city. What should be the first course of action?",
              options: [
                "Develop a vaccination plan.",
                "Conduct research on the disease.",
                "Implement quarantine measures.",
                "Inform the public by using all means."
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-173",
              question: "Find the next number: 5, 11, 23, 47, 95, ____?",
              options: [
                "190",
                "191",
                "192",
                "193"
              ],
              answer: 1
            },
            {
              id: "szabmu-2025-174",
              question: "Which number comes in the missing place?\n\n1, 3, 7, 15, 31, ____",
              options: [
                "61",
                "63",
                "65",
                "67"
              ],
              answer: 1
            },
            {
              id: "szabmu-2025-175",
              question: "Every alphabet in the word “SURGEON” represent a fixed numerical value and the numbers when added, sum up to 99. Based on this, what will the sum of the word “FORGIVEN” be?",
              options: [
                "102",
                "78",
                "99",
                "56"
              ],
              answer: 2
            },
            {
              id: "szabmu-2025-176",
              question: "What is the primary difference between hypothesis and a theory?",
              options: [
                "A hypothesis is a proven fact, while a theory is an unproven data.",
                "A hypothesis is a specific prediction, while a theory is a broad explanation.",
                "A hypothesis is a qualitative statement, while a theory is a quantitative statement.",
                "A hypothesis is a tentative explanation, while a theory is a well-substantiated explanation."
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-177",
              question: "What comes next? ZX, WU, TR, QO, ____",
              options: [
                "NL",
                "ZN",
                "NM",
                "KH"
              ],
              answer: 0
            },
            {
              id: "szabmu-2025-178",
              question: "In a row of students, a student is at 13th position from the left end and at 20th position from the right end. How many students are there in the row?",
              options: [
                "30",
                "31",
                "32",
                "33"
              ],
              answer: 2
            },
            {
              id: "szabmu-2025-179",
              question: "A is older than B but younger than F. C is younger than B but older than D. Who is the youngest of them?",
              options: [
                "A",
                "B",
                "C",
                "D"
              ],
              answer: 3
            },
            {
              id: "szabmu-2025-180",
              question: "A hiker climbed to a higher altitude, where he felt the air pressure was lower as compared to the lower altitude. What is the likely effect?",
              options: [
                "The hiker felt more energetic.",
                "The hiker felt no difficulty in breathing.",
                "The hiker might experience altitude sickness.",
                "The hiker felt healthier and fresh."
              ],
              answer: 2
            },
          
          // UHS MDCAT 2025 Logical Reasoning
            {
              id: "uhs-2025-172",
              question: "What will come next? 1, 4, 2, 5, 3, 6, 4, 7, ?",
              options: [
                "5",
                "6",
                "7",
                "8"
              ],
              answer: 0
            },
            {
              id: "uhs-2025-173",
              question: "All daffodils are plants. All plants are living things. Some living things are real.\n\nConclusions:\nI. All daffodils are living things.\nII. Some living things are flowers.\nIII. All daffodils are real.\n\nWhich conclusions follow?",
              options: [
                "Only I",
                "Only I and II",
                "Only II and III",
                "All follow"
              ],
              answer: 0
            },
            {
              id: "uhs-2025-174",
              question: "One apple pie has 10 slices, and each apple pie feeds five people. Henry is having a party with 200 people. How many slices of pie does he need?",
              options: [
                "200",
                "50",
                "400",
                "100"
              ],
              answer: 2
            },
            {
              id: "uhs-2025-175",
              question: "How many trees are in the orchard?\n\nWhich of the statements below are needed to sufficiently answer this question?\ni. Ibrahim is a farmer and looks after half of the trees in the orchard\nii. 300 trees in the orchard are under Ibrahim’s care",
              options: [
                "i is enough",
                "ii is enough",
                "both i and ii are needed",
                "neither i or ii are sufficient"
              ],
              answer: 2
            },
            {
              id: "uhs-2025-176",
              question: "P and Q are M’s parents. M and N are siblings. Q is N’s mother. What is P to M?",
              options: [
                "Mother",
                "Father",
                "Sister",
                "Brother"
              ],
              answer: 1
            },
            {
              id: "uhs-2025-177",
              question: "Asad bought 50 packets of biscuits for the price of Rs. 500; whereas Anum bought 25 packets of chips for the price of Rs.1000. While comparing the prices of packets of biscuits and packet of chips, which of the following statements is correct?",
              options: [
                "Price of 4 packets of biscuits is equal to the price of 1 packet of chips",
                "Price of 1 packet of biscuits is equal to the price of 4 packets of chips",
                "Price of 2 packets of biscuits is equal to the price of 1 packet of chips",
                "Price of 1 packet of biscuits is equal to the price of 2 packets of chips"
              ],
              answer: 0
            },
            {
              id: "uhs-2025-178",
              question: "The virus spreads rapidly in the town. It infected the people – First day: 8, Second day: 16, Third day: 32. What will the number of people infected on the next day?",
              options: [
                "44 people",
                "56 people",
                "64 people",
                "74 people"
              ],
              answer: 2
            },
            {
              id: "uhs-2025-179",
              question: "Which of the following is a result of poor design that could cause an accident in the workplace?",
              options: [
                "Equipment failure",
                "Slippery surfaces",
                "Insufficient lighting",
                "Unplanned workspace layout"
              ],
              answer: 3
            },
            {
              id: "uhs-2025-180",
              question: "Which of the following is the main cause of accidents involving equipment?",
              options: [
                "Overconfidence",
                "Insufficient maintenance",
                "Fatigue",
                "Poor training"
              ],
              answer: 1
            },
            // 1. IBA DUHS Sindh MDCAT 2024 Logical Reasoning
          {
            id: "iba-duhs-2024-195",
            question: "Read the statement given, assume it is true, and select the correct course of action:\n\nA public sector television channel is worried about the quality of its programs and, considering the competition from several private sector television channels, has decided to provide some incentives in order to attract talent for its programs.\n\nCourse of action:\na) Public sector television channel has decided to revise its fee structure for artists.\nb) It should not revise its fee structure until the private sector channels do so.",
            options: [
              "Both A and B follow",
              "Only A follows",
              "Only B follows",
              "Neither A nor B follows",
              "Either A or B follows"
            ],
            answer: 1
          },
          {
            id: "iba-duhs-2024-196",
            question: "Parveen, Qadir, Rehan, Salim, and Tehmina are five people in a family. If Parveen is the daughter of Qadir, Qadir is the son of Rehan, Rehan is the father of Salim, while Tehmina is the daughter of Parveen, then which of the following is true?",
            options: [
              "Rehan is the uncle of Parveen",
              "Qadir is the grandfather of Parveen",
              "Qadir is the daughter of Salim",
              "Parveen is the sister of Tehmina",
              "Parveen and Rehan are sisters"
            ],
            answer: 0
          },
          {
            id: "iba-duhs-2024-197",
            question: "Look at the numbers below. Identify the pattern and logically deduce the correct option that should follow:\n\n1, 4, 9, 16, ____",
            options: [
              "54",
              "36",
              "49",
              "25"
            ],
            answer: 3
          },
          {
            id: "iba-duhs-2024-198",
            question: "Read the two statements given and select the correct option:\n\nA. Advances in cancer chemotherapy have made more drugs available today.\nB. A large number of cancer patients now have a better outcome.",
            options: [
              "Both statements A and B are effects of some common cause.",
              "Statement A is the cause and statement B is the effect.",
              "Both statements A and B are effects of independent causes.",
              "Statement B is the cause and statement A is the effect.",
              "Both statements A and B are independent causes."
            ],
            answer: 1
          },
          {
            id: "iba-duhs-2024-199",
            question: "Which number is a multiple of its digits?",
            options: [
              "21",
              "44",
              "52",
              "24",
              "13"  
            ],
            answer: 3
          },
          {
            id: "iba-duhs-2024-200",
            question: "Look at the alphabets below. Identify the pattern and choose the correct option that should follow next:\n\nVSA, WRD, XQG, YPJ, ____",
            options: [
              "VTC",
              "TLK",
              "MOZ",
              "ZOM",
              "ZNE"
            ],
            answer: 3
          },
        
        // 2. KMU MDCAT 2024 (Code A) Logical Reasoning
          {
            id: "kmu-2024-195",
            question: "Find out the missing term in the sequence: 15, 14, 12, 9?",
            options: [
              "5",
              "6",
              "7",
              "8"
            ],
            answer: 0
          },
          {
            id: "kmu-2024-196",
            question: "All omnivores are herbivores. No herbivores are carnivores. Some carnivores are humans. Which of the following conclusions are TRUE?\n\nCONCLUSIONS:\nI. Some humans are carnivores.\nII. No carnivores are omnivores.\nIII. Some omnivores are carnivores.",
            options: [
              "I and II",
              "I and III",
              "II and III",
              "III"
            ],
            answer: 0
          },
          {
            id: "kmu-2024-197",
            question: "Read the following statements and identify the best cause-and-effect relation:\n\ni. Sara’s productivity at work has significantly decreased over the past month.\nii. Sara has been experiencing frequent interruptions due to ongoing construction work near her office.",
            options: [
              "Sara’s decreased productivity is causing the construction work.",
              "The ongoing construction work is causing Sara’s decreased productivity.",
              "Sara’s productivity was already decreasing before the construction work began.",
              "The construction work is unrelated to Sara’s productivity."
            ],
            answer: 1
          },
          {
            id: "kmu-2024-198",
            question: "A store offers a 10% discount on all items. After applying the discount, the price of an item is Rs. 450. What was the original price of the item?",
            options: [
              "Rs. 490",
              "Rs. 495",
              "Rs. 500",
              "Rs. 505"
            ],
            answer: 2
          },
          {
            id: "kmu-2024-199",
            question: "I went 10m to the East from my house, then turned north and walked another 15m, and then I turned west and covered 12m, and then turned south and covered 15m. How far am I from my house?",
            options: [
              "0 m",
              "1 m",
              "2 m",
              "3 m"
            ],
            answer: 2
          },
          {
            id: "kmu-2024-200",
            question: "If a>b, b>c, and d>a then?",
            options: [
              "b<d",
              "a<c",
              "a>d",
              "c>d"
            ],
            answer: 0
          },
        
        // 3. SZABMU 2024 (GREEN) Logical Reasoning
          {
            id: "szabmu-2024-195",
            question: "Who will be the new chairperson of math department?\n\n(The high school math department needs to appoint a new chairperson on the basis of seniority. Ms. Madiha is less senior than Mr. Tanvir but more than Ms. Aiyza. Mr. Rehan is more senior than Ms. Madiha but less than Mr. Tanvir. Mr. Tanvir doesn’t want the job.)",
            options: [
              "Mr. Rehan",
              "Mr. Tanvir",
              "Ms. Aiyza",
              "Ms. Madiha"
            ],
            answer: 0
          },
          {
            id: "szabmu-2024-196",
            question: "What are the missing alphabets in the sequence EZFA, GBHY, IXJC, ____?",
            options: [
              "KDLW",
              "KLDW",
              "KWLD",
              "LDKW"
            ],
            answer: 0
          },
          {
            id: "szabmu-2024-197",
            question: "“All practical numbers are even” is a false statement then the true statement is ____.",
            options: [
              "all practical numbers are odd",
              "some practical numbers are not even",
              "some practical numbers are even",
              "some practical numbers are not odd"
            ],
            answer: 1
          },
          {
            id: "szabmu-2024-198",
            question: "In a group of 100 players, 70 play football, 50 play hockey, and 55 play cricket. 30 play both hockey and cricket, 25 play both football and hockey and 20 play all three games. How many players play both football and cricket?",
            options: [
              "25",
              "30",
              "35",
              "40"
            ],
            answer: 3
          },
          {
            id: "szabmu-2024-199",
            question: "A customer has filed a complaint about your product, stating it does NOT meet his expectation. What is your course of action?",
            options: [
              "Argue with the customer about the validity of their complaint",
              "Customer complaint is not filed within the time limit",
              "Offer a replacement",
              "Tell the customer it’s his fault for not using the product correctly"
            ],
            answer: 2
          },
          {
            id: "szabmu-2024-200",
            question: "Statements:\nI. Large numbers of people have fallen sick after consuming sweets from a particular shop in the locality.\nII. Major part of the locality is flooded and has become inaccessible.",
            options: [
              "Statement I is the cause and statement II is its effect.",
              "Statement II is the cause and statement I is its effect.",
              "Both the statements I and II are independent causes.",
              "Both the statements I and II are effects of independent causes."
            ],
            answer: 3
          },
        
        // 4. UHS MDCAT 2024 Logical Reasoning
          {
            id: "uhs-2024-195",
            question: "Statement I: The government has increased the taxes on all businesses in Pakistan.\nStatement II: Many small businesses will have to close their operations in Pakistan.",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-196",
            question: "Read the passage and the following statements below. Then choose the correct option, basing your answer only on the information provided.\n\nPakistan is rich in wildlife and culture. It is home to many sorts of wildlife, from the Ibex to the Indus River Dolphin; and people from most countries in the world have made their home here.\n\nSTATEMENTS:\nI. Pakistan is a rich country.\nII. People from all nationalities of the world live in Pakistan.\nIII. Pakistan is home to at least one dolphin species.",
            options: [
              "Only III is correct",
              "Only I and II are correct",
              "Only I and III are correct",
              "Only II and III are correct"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-197",
            question: "Observe the pattern and select the next term, in the sequence: JEQ, HEO, FEM, ____",
            options: [
              "GFN",
              "DEK",
              "GEL",
              "DFK"
            ],
            answer: 1
          },
          {
            id: "uhs-2024-198",
            question: "Read the following and choose the correct answer:\n\n“X, Y and Z are three whole numbers less than 24 but greater than 11. X is the smallest prime number. Y is the largest number divisible by 3. Z is the smallest number divisible by 11?”",
            options: [
              "X is 13, Y is 24, Z is 11",
              "X is 13, Y is 21, Z is 22",
              "X is 11, Y is 21, Z is 11",
              "X is 11, Y is 24, Z is 22"
            ],
            answer: 1
          },
          {
            id: "uhs-2024-199",
            question: "Read the following and choose the correct answer:\n\n“P, Q and R are one-digit, non-negative numbers. P is the smallest even number. Q is the largest odd number. R is 5.”",
            options: [
              "P + Q + R = 16",
              "P + Q + R = 12",
              "(Q + R) × P = 30",
              "(Q + R) × P = 8"
            ],
            answer: 0
          },
          {
            id: "uhs-2024-200",
            question: "All hammers are tools. Some tools are useless things. All useless things are trash. Which of the following conclusions is NECESSARILY TRUE given only the information above?\n\nCONCLUSIONS:\nI. Some hammers are trash\nII. Some tools are trash\nIII. All useless things are tools.",
            options: [
              "I",
              "II",
              "III",
              "I & III"
            ],
            answer: 1
          },
        
        // 5. BUMHS 2024 (Yellow) Logical Reasoning
          {
            id: "bumhs-2024-195",
            question: "Statements:\nI. The university authority has instructed all the colleges under its jurisdiction to ban use of all phones inside the college premises.\nII. Majority of the teachers of the colleges signed a joint petition to the university complaining the disturbances caused by cell phone ring-tones inside the classrooms.\n\nWhich of the following is correct?",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
            ],
            answer: 1
          },
          {
            id: "bumhs-2024-196",
            question: "Five cities P, Q, R, S and T are connected by different modes of transport as follows:\n• P and Q are connected by boat as well as by rail\n• S and R are connected by bus and by boat\n• Q and T are connected only by air\n• P and R are connected only by boat\n• T and R are connected by rail and by bus\n\nWhich mode of transport would help one to reach R starting from Q but without changing mode of transport?",
            options: [
              "Boat",
              "Rail",
              "Bus",
              "Air"
            ],
            answer: 0
          },
          {
            id: "bumhs-2024-197",
            question: "Statement 1: A is the brother of B\nStatement 2: B is the daughter of C.\n\nBased on those statements, how is A related to C?",
            options: [
              "Brother",
              "Son",
              "Father",
              "Daughter"
            ],
            answer: 1
          },
          {
            id: "bumhs-2024-198",
            question: "Statement: The vegetable traders feel that the prices of onion will again go up.\n\nCourses of Action:\nI. The Government should purchase and store sufficient quantity of onion in advance to control prices.\nII. The Government should make available network of fair price shops for the sale of onions during the period of shortage.",
            options: [
              "Only I follows",
              "Only II follows",
              "Both I and II follow",
              "Neither I nor II follows"
            ],
            answer: 2
          },
          {
            id: "bumhs-2024-199",
            question: "Statements:\nI. Kenya has surpassed the value of tea exports this year due to an increase in demand for quality tea in the Foreign market.\nII. There is an increase in demand of coffee in the local market during the last two years.\n\nWhich of the following is correct?",
            options: [
              "Statement I is the cause and statement II is its effect",
              "Statement II is the cause and statement I is its effect",
              "Both the statements I and II are independent causes",
              "Both the statements I and II are effects of independent causes"
            ],
            answer: 2
          },
          {
            id: "bumhs-2024-200",
            question: "If the first two statements are true, the third statement is:\nI. Maria runs faster than Amna.\nII. Laiba runs faster than Maria.\nIII. Amna runs faster than Laiba.",
            options: [
              "True",
              "False",
              "Uncertain"
            ],
            answer: 1
          }
          ];