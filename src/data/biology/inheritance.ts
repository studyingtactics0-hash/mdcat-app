export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const inheritanceQuestions: Question[] = [
    {
      id: "inheritance-001",
      question:
        "What is the primary outcome of crossing over during prophase of meiosis I?",
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
      question:
        "The genetic makeup that your parents have transferred to you for your hair color, makes up your:",
      options: [
        "Genotype",
        "Karyotype",
        "Phenotype",
        "None of the above",
      ],
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
      options: [
        "Allele",
        "Genetic code",
        "Genotype",
        "Trait",
      ],
      answer: 3,
    },
  
    {
      id: "inheritance-005",
      question:
        "Crossing over involves exchange of genetic material between:",
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
      question:
        "If a male with hemophilia marries a non-carrier female, what is the likelihood of their sons inheriting the condition?",
      options: [
        "50%",
        "100%",
        "0%",
        "25%",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-007",
      question:
        "Linkage of genes in Drosophila was first discovered by:",
      options: [
        "Thomas Hunt Morgan",
        "Alfred Sturtevant",
        "Gregor Mendel",
        "Hugo de Vries",
      ],
      answer: 0,
    },
  
    {
      id: "inheritance-008",
      question: "Which phenomenon increases the chances of variations?",
      options: [
        "Crossing Over",
        "Linkage",
        "Epistasis",
        "Dominance",
      ],
      answer: 0,
    },
  
    {
      id: "inheritance-009",
      question:
        "If the disease is caused due to a defective gene located on the X chromosome, then defective genes can only be transmitted to male offspring by the:",
      options: [
        "Female gamete",
        "Male gamete",
        "Bacteria",
        "Mutation",
      ],
      answer: 0,
    },
  
    {
      id: "inheritance-010",
      question:
        "If a round seeded pea plant is self-fertilized and all of its offspring are also round seeded:",
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
      question:
        'If "RRYY" is crossed with "rryy", what will be the ratio of "RRYY" to "rryy" in F2 generation?',
      options: [
        "9:3:3:1",
        "3:1",
        "1:3",
        "1:1",
      ],
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
      question:
        "According to Morgan’s experiment, which of the following is essential for detecting gene linkage accurately?",
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
      question:
        "A carrier mother for hemophilia and a normal father can produce:",
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
      question:
        "Y-linked inheritance refers to which mode of the inheritance?",
      options: [
        "Crisscross",
        "Straight",
        "Loop",
        "Jumping",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-016",
      question:
        "A chromosome which contain centromere at the center is called:",
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
      question:
        "The 9:3:3:1 ratio of law of independent assortment can be affected by:",
      options: [
        "Genetic drift",
        "Small population",
        "Gene linkage",
        "Gene duplication",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-018",
      question:
        "Best description of the process of crossing over during meiosis:",
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
      options: [
        "02",
        "23",
        "46",
        "92",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-020",
      question:
        "In a pea plant seed color is determined by two alleles: Y (Yellow, dominant) and y (green recessive). Which parental cross would most likely result in offspring showing a 1:1 ratio of yellow to green seeds?",
      options: [
        "YY × YY",
        "Yy × yy",
        "Yy × Yy",
        "YY × yy",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-021",
      question:
        "Mendel crossed a plant with round yellow seeds (RRYY) and a plant with wrinkled green seeds (rryy), what was the phenotype of all F1 offspring?",
      options: [
        "All round green",
        "All round yellow",
        "All wrinkled yellow",
        "All wrinkled green",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-022",
      question:
        "Persons can bleed to death from small cuts or bruises in:",
      options: [
        "Typhoid",
        "Dysentery",
        "Haemophilia",
        "Colour blindness",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-023",
      question:
        "Some genetic diseases are caused due to abnormal number of:",
      options: [
        "Nucleotides",
        "Genes",
        "Chromosomes",
        "All of the given options",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-024",
      question:
        "Which of the following is not true regarding the Dihybrid cross breeding as observed in experimental plants.",
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
      question:
        "The condition in which the babies are born with small skull is called:",
      options: [
        "Malaria",
        "Microcephally",
        "Turner’s syndrome",
        "Klinefelter’s syndrome",
      ],
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
      question:
        "Which of Mendel’s laws can best explain why a child may inherit brown eyes even if one parent has blue eyes?",
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
      question:
        "What is the significance of the 9:3:3:1 ratio in a dihybrid cross?",
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
      question:
        "In crossing over, an exchange of maternal and paternal chromatid parts occurs while homologous chromosomes are paired during ______ stage of meiosis.",
      options: [
        "Metaphase I",
        "Prophase I",
        "Anaphase II",
        "Telophase I",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-030",
      question:
        "Linked genes DO NOT follow Mendel’s Law of Independent Assortment because ______.",
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
      question:
        "A carrier female for an X-linked recessive disorder:",
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
      question:
        "Which of the following is an X-linked recessive disorder in humans?",
      options: [
        "Cystic fibrosis",
        "Thalassemia",
        "Hemophilia",
        "Sickle cell anemia",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-033",
      question:
        "Which of the following CORRECTLY describes the expected outcome of children from a carrier mother for haemophilia (XʰX) and a normal father (XY)?",
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
      question:
        "The situation when two alternative forms is said to have:",
      options: [
        "Codominance",
        "Sex-influenced traits",
        "Multiple alleles",
        "Sex-limited traits",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-035",
      question:
        "Two different gene pairs, located at different loci, all work for a same trait and express in an additive manner. This phenomenon is called:",
      options: [
        "Codominance",
        "Polygenic inheritance",
        "Multiple alleles",
        "Epistasis",
      ],
      answer: 1,
    },
  
    {
      id: "inheritance-036",
      question:
        "At which of the following stage of Prophase I, crossing over takes place?",
      options: [
        "Diplotene",
        "Leptotene",
        "Pachytene",
        "Zygotene",
      ],
      answer: 2,
    },
  
    {
      id: "inheritance-037",
      question:
        "Hemophilia type A and B zigzag from ______ grandfather through a carrier daughter to a ______.",
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
      question:
        "In which one of the following types of dominance, genotypic and phenotypic ratios are same in F₁ generation?",
      options: [
        "Co-Dominance",
        "Complete dominance",
        "Incomplete dominance",
        "Over dominance",
      ],
      answer: 0,
    },
  
    {
      id: "inheritance-039",
      question:
        "In Drosophila, the heterozygote (w/w⁺) exceeds in quality of fluorescent pigment in eyes than wild (w⁺/w⁺) or white eye (w/w), this kind of dominance is termed as:",
      options: [
        "Co-Dominance",
        "Complete Dominance",
        "Incomplete Dominance",
        "Over Dominance",
      ],
      answer: 3,
    },
  
    {
      id: "inheritance-040",
      question:
        "In the second step of his experiment, what did Mendel do after selecting pure breeding tall and dwarf pea plants?",
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
      question:
        "A pea plant which upon self fertilization produces all the offspring of its own phenotype is called:",
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
      question:
        "Morgan’s experiment showed deviation from the law of independent assortment due to:",
      options: [
        "Crossing over",
        "Gene linkage",
        "Random mutation",
        "Natural selection",
      ],
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
      question:
        "Hemophilia is a sex linked recessive trait. A hemophiliac man marries to a normal woman (whose father is hemophiliac). If they have daughter, what is the probability that she will be hemophiliac?",
      options: [
        "0%",
        "25%",
        "50%",
        "75%",
      ],
      answer: 2,
    },
  ];