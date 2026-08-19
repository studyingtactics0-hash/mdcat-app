export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const coordinationQuestions: Question[] = [
    {
      id: "coord-001",
      question:
        "Which part of brain controls transition between sleeping and wakefulness?",
      options: [
        "Medulla oblongata",
        "Cerebellum",
        "Cerebrum",
        "Pons",
      ],
      answer: 3,
    },
  
    {
      id: "coord-002",
      question:
        "Which part of the brain contains central chemoreceptors that monitor CO₂ levels in blood?",
      options: [
        "Pons",
        "Midbrain",
        "Hypothalamus",
        "Medulla oblongata",
      ],
      answer: 3,
    },
  
    {
      id: "coord-003",
      question:
        "Which component of a reflex arc connects the sensory neuron to the motor neuron within the spinal cord?",
      options: [
        "Receptor",
        "Effector",
        "Muscle fiber",
        "Associative neuron",
      ],
      answer: 3,
    },
  
    {
      id: "coord-004",
      question:
        "Which of the following is the auditory relay centre and centre that controls reflex movement of the eyes?",
      options: [
        "Forebrain",
        "Cerebellum",
        "Midbrain",
        "Medulla oblongata",
      ],
      answer: 2,
    },
  
    {
      id: "coord-005",
      question:
        "Which of the following is the correct pathway of nerve impulse?",
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
      question:
        "The neurotransmitters are secreted by the neuron from:",
      options: [
        "Axon ends",
        "Dendrite end",
        "Nissl’s granules",
        "Cell body",
      ],
      answer: 0,
    },
  
    {
      id: "coord-007",
      question:
        "Hippocampus plays an important role in the:",
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
      question:
        "Left and right cerebral hemispheres are connected with each other by:",
      options: [
        "Corpus luteum",
        "Corpus callosum",
        "A band of dendrites",
        "Dorsal and ventral nerve roots",
      ],
      answer: 1,
    },
  
    {
      id: "coord-009",
      question:
        "Which part of the neuron typically receives incoming signals from other neurons?",
      options: [
        "Axon",
        "Dendrites",
        "Myelin sheath",
        "Synaptic knob",
      ],
      answer: 1,
    },
  
    {
      id: "coord-010",
      question:
        "Olfactory receptors are the type of:",
      options: [
        "Photoreceptors",
        "Mechanoreceptors",
        "Thermoreceptors",
        "Chemoreceptors",
      ],
      answer: 3,
    },
  
    {
      id: "coord-011",
      question:
        "Which of the following cells possess Nissl’s granules?",
      options: [
        "Nerve cells",
        "WBC",
        "RBC",
        "Platelets",
      ],
      answer: 0,
    },
  
    {
      id: "coord-012",
      question:
        "Which part of human brain is involved in maintaining the posture and balance of the body?",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Hypothalamus",
        "Medulla oblongata",
      ],
      answer: 1,
    },
  
    {
      id: "coord-013",
      question:
        "Myelin sheath acts as:",
      options: [
        "Protector",
        "Insulator",
        "Sensor",
        "Supporter",
      ],
      answer: 1,
    },
  
    {
      id: "coord-014",
      question:
        "All of the following are characteristics of the limbic system EXCEPT:",
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
      question:
        "Sensory input from auditory and visual pathways, skin and within the body is received by ___ and distributed to ___:",
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
      question:
        "The hormone, when overproduced, can lead to hypercalcemia and stone formation is:",
      options: [
        "Insulin",
        "Thyroxine",
        "Parathyroid hormone",
        "Antidiuretic hormone",
      ],
      answer: 2,
    },
  
    {
      id: "coord-017",
      question:
        "Thinking, memory and voluntary actions are mainly controlled by:",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Pons",
        "Hippocampus",
      ],
      answer: 0,
    },
  
    {
      id: "coord-018",
      question:
        "Components of a reflex arc must contain neurons from:",
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
      question:
        "Nodes of Ranvier along the length of axon fibers allow:",
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
      question:
        "Osmoreceptors that detect the osmotic pressure of blood are primarily located in the:",
      options: [
        "Cerebellum",
        "Medulla oblongata",
        "Hypothalamus",
        "Cerebral cortex",
      ],
      answer: 2,
    },
  
    {
      id: "coord-021",
      question:
        "Receptors that are located in the retina of eye are called:",
      options: [
        "Merkel discs",
        "Ruffini endings",
        "Pacinian corpuscles",
        "Rod and cone cells",
      ],
      answer: 3,
    },
  
    {
      id: "coord-022",
      question:
        "Which type of neurons stimulate the muscles to contract in a reflex arc?",
      options: [
        "Efferent neurons",
        "Sensory neurons",
        "Interneurons",
        "Afferent neurons",
      ],
      answer: 0,
    },
  
    {
      id: "coord-023",
      question:
        "Chemicals that stimulate the olfactory receptors enter the nasal cavity in the form of:",
      options: [
        "Solid",
        "Liquid",
        "Gas",
        "Plasma",
      ],
      answer: 2,
    },
  
    {
      id: "coord-024",
      question:
        "Neurosecretory cells are:",
      options: [
        "Endocrine cells",
        "Exocrine cells",
        "Neuroglial cells",
        "Neurons adapted to secrete hormones",
      ],
      answer: 3,
    },
  
    {
      id: "coord-025",
      question:
        "Hippocampus is mainly involved in:",
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
      question:
        "The outer surface of the axon membrane in a resting neuron is:",
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
      question:
        "Automatic and rapid actions that do not involve the conscious part of the brain are:",
      options: [
        "Reflex actions",
        "Conditioned reflexes",
        "Taxes",
        "Synapses",
      ],
      answer: 0,
    },
  
    {
      id: "coord-028",
      question:
        "Which neurons conduct impulses from sensory receptors to the CNS?",
      options: [
        "Sensory neurons",
        "Motor neurons",
        "Interneurons",
        "Efferent neurons",
      ],
      answer: 0,
    },
  
    {
      id: "coord-029",
      question:
        "Which of the following is correct about the structure of the brain?",
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
      question:
        "A doctor taps below the knee and the leg kicks forward. What does this show?",
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
      question:
        "Which type of change is a nerve impulse?",
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
      question:
        "In a heat stroke, the hypothalamus detects an increase in core body temperature. Which response is triggered?",
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
      question:
        "The junction between two consecutive neurons where information is transmitted from one neuron to the next is called:",
      options: [
        "Node of Ranvier",
        "Synapse",
        "Axon terminal",
        "Dendrite cleft",
      ],
      answer: 1,
    },
  
    {
      id: "coord-034",
      question:
        "Which ion is approximately tenfold higher in concentration outside the membrane of a neuron during resting potential?",
      options: [
        "Potassium",
        "Sodium",
        "Calcium",
        "Hydrogen",
      ],
      answer: 1,
    },
  
    {
      id: "coord-035",
      question:
        "Touching a sharp object stimulates pain receptors. This information is carried to the central nervous system by the:",
      options: [
        "Motor neuron",
        "Sensory neuron",
        "Associative neuron",
        "Effector neuron",
      ],
      answer: 1,
    },
  
    {
      id: "coord-036",
      question:
        "The state when a neuron is NOT conducting an impulse during resting membrane potential is called:",
      options: [
        "Polarized",
        "Depolarized",
        "Repolarized",
        "Hyperpolarized",
      ],
      answer: 0,
    },
  
    {
      id: "coord-037",
      question:
        "Which of the following waves travel along a neuron during nerve impulse conduction?",
      options: [
        "Thermal waves",
        "Magnetic waves",
        "Electromagnetic waves",
        "Electrochemical waves",
      ],
      answer: 3,
    },
  
    {
      id: "coord-038",
      question:
        "The reticular formation in the brain runs through which specific regions?",
      options: [
        "Forebrain and midbrain",
        "Hindbrain and midbrain",
        "Cerebellum and forebrain",
        "Telencephalon and cerebellum",
      ],
      answer: 1,
    },
  
    {
      id: "coord-039",
      question:
        "Match the CORRECT structure of the brain with its function:",
      options: [
        "Medulla: Breathing",
        "Pons: Memory",
        "Cerebellum: Dreaming",
        "Midbrain: Balance",
      ],
      answer: 0,
    },
  
    {
      id: "coord-040",
      question:
        "The CORRECT sequence of events in a reflex arc is:",
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
      question:
        "The primary function of the sensory neuron in a reflex arc is to:",
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
      question:
        "A person quickly withdraws their hand after touching a hot iron. This type of reflex is best classified as a:",
      options: [
        "Cranial reflex",
        "Spinal reflex",
        "Hormonal response",
        "Conditional response",
      ],
      answer: 1,
    },
  
    {
      id: "coord-043",
      question:
        "Which one is NOT a part of the forebrain?",
      options: [
        "Cerebellum",
        "Hypothalamus",
        "Hippocampus",
        "Amygdala",
      ],
      answer: 0,
    },
  
    {
      id: "coord-044",
      question:
        "During saltatory conduction, a nerve impulse jumps from one to another:",
      options: [
        "Synapse",
        "Axon terminal",
        "Node of Ranvier",
        "Cell body",
      ],
      answer: 2,
    },
  
    {
      id: "coord-045",
      question:
        "Which of the following functions is under the control of the medulla oblongata?",
      options: [
        "Memory",
        "Vision",
        "Breathing",
        "Dreaming",
      ],
      answer: 2,
    },
  
    {
      id: "coord-046",
      question:
        "The structure that is directly continuous with the cell body and transmits nerve impulses away from it is:",
      options: [
        "Axon",
        "Synapse",
        "Dendrites",
        "Myelin sheath",
      ],
      answer: 0,
    },
  
    {
      id: "coord-047",
      question:
        "The main function of Pacinian corpuscles is to detect:",
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
      question:
        "Saltatory conduction of nerve impulse occurs in:",
      options: [
        "Myelinated axons",
        "Cell bodies",
        "Unmyelinated axons",
        "Dendrites",
      ],
      answer: 0,
    },
  
    {
      id: "coord-049",
      question:
        "The cerebellum is mainly responsible for:",
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
      question:
        "A typical value of resting membrane potential in a neuron is:",
      options: [
        "–50 millivolts",
        "+50 millivolts",
        "–70 millivolts",
        "+70 millivolts",
      ],
      answer: 2,
    },
  
    {
      id: "coord-051",
      question:
        "Which type of neurons stimulate the muscles to contract in a reflex arc?",
      options: [
        "Motor neurons",
        "Sensory neurons",
        "Interneurons",
        "Afferent neurons",
      ],
      answer: 0,
    },
  
    {
      id: "coord-052",
      question:
        "Which of the following travels along a neuron during nerve impulse conduction?",
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
      question:
        "Which structure in neuron is responsible for receiving information from other neurons?",
      options: [
        "Axon",
        "Soma",
        "Dendrite",
        "Axon terminal",
      ],
      answer: 2,
    },
  
    {
      id: "coord-054",
      question:
        "Which type of neurons stimulate muscles to contract in a reflex arc?",
      options: [
        "Motor neurons",
        "Sensory neurons",
        "Interneurons",
        "Afferent neurons",
      ],
      answer: 0,
    },
  
    {
      id: "coord-055",
      question:
        "Reflex action is considered as the simplest form of response in:",
      options: [
        "Simple animals",
        "Higher animals",
        "Lowest animals",
        "Smaller animals",
      ],
      answer: 2,
    },
  ];