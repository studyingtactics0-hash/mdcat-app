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
    // --- TESTMOZ ---
      {
        id: "testmoz-bio-1",
        question: "Which of the following blood group is considered as universal Donor",
        options: [
          "AB+",
          "AB-",
          "O-",
          "O+"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-2",
        question: "X linked recessive traits is transferred in manner",
        options: [
          "Father to direct son",
          "Father to his daughter and her son",
          "Mother to her daughter only",
          "None of these"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-3",
        question: "A character determined by three alleles is",
        options: [
          "Human skin colour",
          "Human eye colour",
          "Human blood group",
          "Human Rh factor"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-4",
        question: "Rh factor maybe responsible for",
        options: [
          "Turners syndrome",
          "Sickle Cell anemia",
          "AIDS",
          "Erythroblastosis foetalis"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-5",
        question: "ABO blood group system was discovered by",
        options: [
          "Bernstein",
          "Karl correns",
          "Landsteiner",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-6",
        question: "Which one is true for crossing over",
        options: [
          "Non sister chromatids of homologous chromosomes meiosis",
          "Non sister chromatids of homologous chromosome Mitosis",
          "Sister chromatids of homologous chromosome meiosis",
          "Sister chromatids of homologous chromosome Mitosis"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-7",
        question: "All of the following are non allelic X linked traits except",
        options: [
          "Hemophilia A",
          "Hemophilia B",
          "Hemophilia C",
          "TFM syndrome"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-8",
        question: "A person was married to his cousin and both are heterozygous for Sickle Cell anaemia among their four kids what will be the proportion of affected homozygotes",
        options: [
          "50%",
          "75%",
          "25%",
          "100%"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-9",
        question: "If female has A blood group and her husband has O blood group then the blood group of their children would possibly be",
        options: [
          "A and B groups only",
          "A and O groups only",
          "AB only",
          "All for groups"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-10",
        question: "Which is not related to colour blindness",
        options: [
          "Zigzag pattern of inheritance",
          "Passes directly from Father to Son",
          "More common in men",
          "Rhodopsin"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-11",
        question: "Incomplete dominance",
        options: [
          "Different Allele of a gene are both expressed in heterozygous condition",
          "One Allele is completely dominant over the other and the presence of the recessive early is functionally hidden so the heterozygote has the same round phenotype as homozygote",
          "The phenotype of the heterozygote is intermediate between phenotype of the two homozygote",
          "Gene mutation May produce many different Allele of a gene"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-12",
        question: "Example of X linked dominant trait is",
        options: [
          "Haemophilia A",
          "Hemophilia B",
          "Trianopia",
          "Hypophosphatemia"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-13",
        question: "A person with antigens be present of membrane RBCs and anti A antibodies in the plasma will have",
        options: [
          "Blood group A",
          "Blood group AB",
          "Blood group B",
          "Blood group O"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-14",
        question: "Locus stand for",
        options: [
          "Position of a gene on homologous chromosome",
          "Region of a chromosome",
          "Position of an Allele within a DNA molecule",
          "Close regions of same chromosomes"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-15",
        question: "The recombination frequency is 20% between the two genes the distance between them in unit map is",
        options: [
          "20",
          "60",
          "30",
          "80"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-16",
        question: "If a carrier female is married to hemophilic male what will be the ratio of presence of haemophilia in the children select best answer from given condition",
        options: [
          "100% all female and males will be haemophilic",
          "Carrier female 25% hemophilic female 25%, 25% normal male and 25% hemophilic male",
          "Female and males both a 50% chances to getting hemophilia",
          "Females have 50% chance of getting hemophilia and males will be 100% haemophilic"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-17",
        question: "A man having a blood group O marries a woman having a blood group A whose father was also O what is the probability of O in their offsprings",
        options: [
          "50%",
          "75%",
          "25%",
          "0%"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-18",
        question: "Genes are present on chromosomes this was experimentally proved by",
        options: [
          "Sutton",
          "Fleming",
          "Morgan",
          "Landsteiner"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-19",
        question: "Such traits cannot pass to daughter",
        options: [
          "X linked recessive traits",
          "X linked dominant traits",
          "Y linked traits",
          "XX linked traits"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-20",
        question: "Which of the following is not a genetic disorder",
        options: [
          "Hemophilia",
          "Colour blindness",
          "Phenyl ketoneuriya",
          "Epilepsy"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-21",
        question: "What is the probability of haemophilic daughter of a normal men whose father was hemophilic and carrier women",
        options: [
          "0%",
          "50%",
          "25%",
          "75%"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-22",
        question: "An organism genetic constitution is called its",
        options: [
          "Genotype",
          "Phenotype",
          "Genetics",
          "Gene pool"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-23",
        question: "If all four phenotypic combinations are parental and recombinants are produced in the ratio 1:1:1:1 Then there would be",
        options: [
          "No linkage between genes",
          "Partial linkages between genes",
          "Complete linkage between genes",
          "Tight linkage between genes"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-24",
        question: "Multiple alleles are the altered form of a gene whose number is more than two and may have as many as 300 alleles but a diploid organism can",
        options: [
          "Have just one of them in its genome",
          "Have four of them in its genome",
          "Have two of them in its genome",
          "Have multiple of them in its genome"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-25",
        question: "In which situation genes are not assorted Independently during meiosis in a chromosome",
        options: [
          "When genes are not linked and their loci are far apart",
          "There are too many genes on a chromosome",
          "When some genes have mutated on the chromosome",
          "When genes are linked and their loci are closed to each other"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-26",
        question: "The region of the chromosome or more specifically a length of the DNA molecule which is a particular nucleotide sequence that code for specific protein is called",
        options: [
          "Locus",
          "Allele",
          "Gene",
          "Kinetochore"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-27",
        question: "Mendel's conclusion that during gamete formation the separation of one pair of allele does not influence the separation of an other pair of allele is his law of",
        options: [
          "Dominance",
          "Independence assortment",
          "Segregation",
          "Linkage"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-28",
        question: "Blood group antigens can be found in",
        options: [
          "RBCs",
          "Body fluids",
          "Saliva",
          "All"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-29",
        question: "Pure breeding lines of pea were taken regarding seed shape round and wrinkle and work roast with no intermediate between parents all offspring were found to be round these result show",
        options: [
          "Co dominance",
          "Dominant recessive relationship of allele",
          "Incomplete dominance",
          "Over dominance relationship"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-30",
        question: "An X linked trait that result due to hormonal insensitivity of target cell",
        options: [
          "Gout",
          "Duchene muscular dystrophy",
          "Testicular feminization syndrome",
          "Color blindness"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-31",
        question: "Choose the best explanation for the mechanism of inheritance keeping in mind Mendel law of segregation and law of Independence assortment",
        options: [
          "A characteristic is inherited in combination with others",
          "The presence of one characteristic modifies the inheritance of the other",
          "A characteristic is inherited independence of the influence of other",
          "Rare combination of characters are always due to mutation which are inherited by the progeny"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-32",
        question: "Gene responsible for webbing of toes is present on",
        options: [
          "X chromosome",
          "Y chromosome",
          "Chromosome 11",
          "Chromosome 13"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-33",
        question: "Which of the following is genetically dominant in man",
        options: [
          "Color blindness",
          "Hemophilia",
          "Rh positive",
          "Albinism"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-34",
        question: "ABO blood grouping is controlled by gene I which has three allele and show dominance there are 6 genotypes how many phenotypes are possible",
        options: [
          "Six",
          "Four",
          "Three",
          "Five"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-35",
        question: "If a plant with genotype RrYy is self fertilized, the probability of getting RRYY genotypes will be",
        options: [
          "1/12",
          "9/16",
          "1/4",
          "1/16"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-36",
        question: "Which of the following will not result in variation among siblings",
        options: [
          "Independence assortment of genes",
          "Linkage",
          "Crossing over",
          "Mutation"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-37",
        question: "The recessive character only expressed when present in a double recessive condition but a single recessive gene can express itself in humans when genes are found on",
        options: [
          "Either on autosome or X chromosome",
          "X chromosome of female",
          "X chromosome of male",
          "Any autosome"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-38",
        question: "Which of the following blood group is not possible in the person whose father is of blood group O",
        options: [
          "AB",
          "B",
          "A",
          "O"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-39",
        question: "Phenotype is",
        options: [
          "The genetic complement the genes in an individual for a particular trait",
          "Partner of gene pair",
          "The form of appearance of trait",
          "The position of a gene on the chromosome"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-40",
        question: "In mendalian dihybrid cross, how many individuals are homozygous dominant for both the genes in F2 generation?",
        options: [
          "1/16",
          "2/16",
          "4/16",
          "9/16"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-41",
        question: "In mendel's experiment nature of seed Court flower colour position of flower pot colour steam height etc are referred is",
        options: [
          "Allele",
          "phenotype",
          "Genotype",
          "Karyotype"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-42",
        question: "Homozygous recessively condition for green opsins indicate",
        options: [
          "Monochromacy",
          "Protonopia",
          "Tritinopia",
          "Deuteranopia"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-43",
        question: "The total number of genes in a population is called",
        options: [
          "Gene pool",
          "Allele pool",
          "Genome",
          "Library"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-44",
        question: "How many pairs of homologous chromosomes are present in pisum sativum",
        options: [
          "Seven pairs",
          "Six pairs",
          "Eight pairs",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-45",
        question: "Which one of the following is multiple allelic character",
        options: [
          "Length of stem in pea plant",
          "Blood group of the human being",
          "Shape of the seed in pea plant",
          "Colour of flower in pea plant"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-46",
        question: "In mendel's experiment the phenotypic ratio of recessive to dominant plants was equal to",
        options: [
          "1:3",
          "3:9",
          "3:1",
          "9:3"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-47",
        question: "Rh factor is named after",
        options: [
          "Man",
          "Rat",
          "Monkey",
          "None"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-48",
        question: "Drosophila has four pair of chromosomes how many linkage group does it have",
        options: [
          "8",
          "One Less than the pair of chromosomes",
          "4",
          "One more then the pair of chromosomes"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-49",
        question: "Regarding colour blindness when a normal male marries a carrier female what is the correct statement",
        options: [
          "All daughter will be color blind",
          "All daughters will be carriers",
          "All sons are color blind",
          "Half of the sons will be color blind"
        ],
        answer: 3
      }
  ];