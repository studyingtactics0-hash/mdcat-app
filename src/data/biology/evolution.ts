export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const evolutionQuestions: Question[] = [
    // --- BUMHS 2025 (Yellow) ---
    {
      id: "bumhs-2025-15",
      question: "Catastrophism explains that changes in life on earth are due to:",
      options: [
        "Gradual evolution",
        "Natural selection",
        "Mutation",
        "Sudden natural disasters"
      ],
      answer: 3,
      explanation: "Catastrophism, proposed by Georges Cuvier, states that Earth's history was shaped by sudden, violent, large-scale natural events and disasters."
    },
  
    // --- Sindh MDCAT 2025 (Version-A) ---
    {
      id: "sindh-2025-17",
      question: "According to Darwin, the main force behind evolution is:",
      options: [
        "Migration",
        "Genetic mutation",
        "Artificial selection",
        "Natural selection"
      ],
      answer: 3,
      explanation: "Charles Darwin proposed that natural selection is the primary mechanism driving evolutionary change."
    },
    {
      id: "sindh-2025-35",
      question: "Why Lamarck being remembered till today?",
      options: [
        "Due to his rejected but appealing theory of heredity",
        "Due to his universally acceptable theory of evolution",
        "Due to his theory of evolution by natural selection",
        "Due to his theory of evolution by acquired characters"
      ],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck is primarily remembered for pioneer ideas on evolution, notably his theory of inheritance of acquired characteristics, which was later rejected."
    },
    {
      id: "sindh-2025-78",
      question: "Name the idea of Darwin that best explains the ability of populations to produce those individuals who possess beneficial traits.",
      options: [
        "Gene flow",
        "Genetic drift",
        "Artificial selection",
        "Natural selection"
      ],
      answer: 3,
      explanation: "Natural selection favors individuals with advantageous heritable traits, increasing their survival and reproductive success in a given environment."
    },
  
    // --- SZABMU MDCAT 2025 (Paper CODE-2) ---
    {
      id: "szabmu-2025-1",
      question: "According to the Lamarck theory of evolution, the organ that has not been used in several generations will:",
      options: [
        "Become strong",
        "Get amputated",
        "Disappear",
        "Become developed"
      ],
      answer: 2,
      explanation: "Lamarck's 'Use and Disuse' concept suggests that unused organs gradually deteriorate and eventually disappear over generations."
    },
    {
      id: "szabmu-2025-2",
      question: "Lamark theory of evolution was rejected experimentally by:",
      options: [
        "Ernest Haeckel / Earnest Hackle",
        "Charles Darwin",
        "August Weismann / August Wiseman",
        "Thomas R. Malthus"
      ],
      answer: 2,
      explanation: "August Weismann disproved Lamarckian inheritance by cutting off tails of mice for many generations and demonstrating that offspring were consistently born with full tails."
    },
  
    // --- UHS MDCAT 2025 (Paper ID-D) ---
    {
      id: "uhs-2025-51",
      question: "The main idea in Darwin’s Theory of “Origin of species by natural selection” is:",
      options: [
        "Inheritance of acquired traits",
        "Use and disuse of organs",
        "Species never change",
        "Evolution occurs through gradual accumulation of adaptation through successive generations"
      ],
      answer: 3,
      explanation: "Darwin proposed that adaptation accumulates gradually over successive generations due to natural selection acting on favorable variations."
    },
    {
      id: "uhs-2025-72",
      question: "According to Lamarck, the evolution of long necks in giraffes is explained by:",
      options: [
        "Natural selection",
        "Genetic mutation",
        "Survival of the fittest",
        "Stretching of necks over generations"
      ],
      answer: 3,
      explanation: "Lamarck posited that ancestral giraffes stretched their necks to reach higher leaves, passing on the newly acquired longer necks to offspring."
    },
  
    // --- UHS MDCAT 2024 ---
    {
      id: "uhs-2024-34",
      question: "The change in frequency of alleles at a locus that occurs by chance is known as:",
      options: [
        "Mutation",
        "Genetic Drift",
        "Non Random mating",
        "Speciation"
      ],
      answer: 1,
      explanation: "Genetic drift refers to random fluctuations in allele frequencies within a gene pool due to chance occurrences."
    },
    {
      id: "uhs-2024-35",
      question: "Identify the correct pair of vestigial organs:",
      options: [
        "Ear Muscles & Vermiform appendix",
        "Heart & Liver",
        "Ear Muscles & Liver",
        "Vermiform appendix & Heart"
      ],
      answer: 0,
      explanation: "Ear muscles (auricular muscles) and the vermiform appendix in humans are classic examples of vestigial structures with reduced original function."
    },
    {
      id: "uhs-2024-36",
      question: "Which of the following increases variation within a gene pool?",
      options: [
        "Chromosome inversion",
        "Crossing over",
        "Gene mutation",
        "Random fusion of gametes"
      ],
      answer: 2,
      explanation: "Gene mutation is the primary source that creates new alleles, fundamental to introducing fresh genetic variation into a gene pool."
    },
    {
      id: "uhs-2024-37",
      question: "Which of the following statements about natural selection is not true?",
      options: [
        "It affects variations that are heritable",
        "It is selected by a breeder",
        "It can improve the adaptation of species",
        "It is regional in nature"
      ],
      answer: 1,
      explanation: "Selection guided by a human breeder is called artificial selection, whereas natural selection is driven by environmental pressures."
    },
    {
      id: "uhs-2024-38",
      question: "The formula calculating the frequency of genotypes and alleles in a population gene pool is known as:",
      options: [
        "Hardy-Weinberg Equation",
        "Lamarck Equation",
        "Darwin Equation",
        "James Hutton Equation"
      ],
      answer: 0,
      explanation: "The Hardy-Weinberg equation (p² + 2pq + q² = 1) quantifies allele and genotype frequencies in a non-evolving population."
    },
    {
      id: "uhs-2024-39",
      question: "The idea of inheritance of acquired characteristics was presented by:",
      options: [
        "Jean Baptist Lamarck",
        "Charles Darwin",
        "Thomas Malthus",
        "Alfred Wallace"
      ],
      answer: 0,
      explanation: "Jean-Baptiste Lamarck proposed that characteristics acquired during an organism's lifetime could be inherited by its offspring."
    },
  
    // --- KMU MDCAT 2024 (CODE A) ---
    {
      id: "kmu-2024-24",
      question: "Wings of birds and that of flying lizards provide evidence of:",
      options: [
        "Convergent evolution",
        "Divergent evolution",
        "No evolution",
        "Same origin"
      ],
      answer: 0,
      explanation: "Analogous structures evolved independently in distinct lineages to serve similar functions (flight), demonstrating convergent evolution."
    },
    {
      id: "kmu-2024-58",
      question: "According to Lamarckism, the basis of evolution is:",
      options: [
        "Inheritance of acquired characteristics",
        "Mutation",
        "Natural selection",
        "Survival of the fittest"
      ],
      answer: 0,
      explanation: "The core postulate of Lamarckism is the inheritance of acquired characteristics."
    },
    {
      id: "kmu-2024-59",
      question: "What best describes the hind leg bones seen in the whale?",
      options: [
        "Analogous to the fin of living fish",
        "Fossil structure from an extinct ancestor",
        "Homologous structure of the wings of a bat",
        "Vestigial structures that had a function in an ancestor"
      ],
      answer: 3,
      explanation: "Whale pelvic and hind leg bones are vestigial structures inherited from four-legged terrestrial mammalian ancestors."
    },
  
    // --- BUMHS MDCAT 2023 ---
    {
      id: "bumhs-2023-6",
      question: "Catastrophism was explained by:",
      options: [
        "Wallace",
        "Cuvier",
        "Malthus",
        "Darwin"
      ],
      answer: 1,
      explanation: "Georges Cuvier advocated catastrophism to explain fossil record gaps and extinction events."
    },
  
    // --- NUMS 2025 ---
    {
      id: "nums-2025-102",
      question: "What distinguishes the concept of special creation from concept of evolution?",
      options: [
        "Life is not the product of sudden creative act",
        "Unicellular prokaryotes might be the life ancestors",
        "Rely on inspiration and meditation for life origin",
        "Life results from innumerable changes"
      ],
      answer: 2,
      explanation: "Special creation relies on supernatural or spiritual belief systems, unlike biological evolution which rests on empirical observation."
    },
    {
      id: "nums-2025-103",
      question: "Which of the following idea is a part of Lamarckism?",
      options: [
        "Use and disuse of organs",
        "Survival of the fittest",
        "Origin of species",
        "Variation"
      ],
      answer: 0,
      explanation: "The principle of 'Use and Disuse of Organs' is a key component of Lamarck's evolutionary framework."
    },
    {
      id: "nums-2025-104",
      question: "Choose the correct pair for homology?",
      options: [
        "Wings of birds and wings of butterfly",
        "Forelimbs of birds and fins of whales",
        "Leaves of pines and cactus",
        "Gills of fish and lungs of humans"
      ],
      answer: 1,
      explanation: "Forelimbs of birds and whale flippers share identical underlying skeletal architecture derived from a common tetrapod ancestor, exemplifying homology."
    },
    {
      id: "nums-2025-105",
      question: "Which chronological sequence is correct among the classes of vertebrates as evidence of evolution?",
      options: [
        "Birds → fish → amphibians → reptiles",
        "Reptiles → birds → fishes → amphibians",
        "Fish → amphibians → reptiles → birds",
        "Amphibians → reptiles → birds → fish"
      ],
      answer: 2,
      explanation: "The evolutionary sequence of vertebrate classes in fossil records proceeds from Fishes to Amphibians, then Reptiles, and subsequently Birds and Mammals."
    },
    {
      id: "nums-2025-106",
      question: "The reduction of population carrying a specific allele and genotype due to natural disaster is called:",
      options: [
        "Mutation",
        "Bottle neck effect",
        "Founder effect",
        "Speciation"
      ],
      answer: 1,
      explanation: "The bottleneck effect occurs when a sudden environmental event drastically reduces population size, randomly altering allele frequencies in survivors."
    }
  ];