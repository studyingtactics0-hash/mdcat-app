export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
  export const biologicalMoleculesQuestions: Question[] = [
    {
      id: "biomolecules-001",
      question: "Which of the following is a correct structural feature of RNA?",
      options: [
        "It contains deoxyribose sugar",
        "It has a double-stranded helical structure",
        "It contains base uracil instead of base thymine",
        "It is confined to the nucleus only",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-002",
      question: "The correct function of H⁺ and OH⁻ ions in cells is:",
      options: [
        "Transporting proteins",
        "Breaking down fats",
        "Maintaining or changing pH",
        "Producing light energy",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-003",
      question:
        "Acylglycerols like fats and oils are esters formed by condensation reaction between:",
      options: [
        "Fatty acid and water",
        "Fatty acid and phosphates",
        "Fatty acid and glucose",
        "Fatty acid and alcohol",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-004",
      question: "Which of the following is NOT considered a conjugated molecule?",
      options: [
        "A molecule containing linked sugar units",
        "A molecule made up only of carbon and hydrogen",
        "A protein attached to a non-protein group",
        "A lipid combined with another chemical component",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-005",
      question:
        "The central dogma of molecular biology describes the flow of genetic information as:",
      options: [
        "DNA → mRNA → Protein",
        "mRNA → DNA → Protein",
        "Protein → DNA → mRNA",
        "DNA → Protein → mRNA",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-006",
      question: "Each DNA nucleotide differs from the others based on its:",
      options: [
        "Nitrogenous bases",
        "Phosphate group",
        "Sugar molecule",
        "Number of phosphorus atoms",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-007",
      question: "Glycolipid is a combination of:",
      options: [
        "Lipid and carbohydrate",
        "Lipid and protein",
        "Nucleic acid and lipid",
        "Protein and carbohydrate",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-008",
      question: "Lactose sugar is found in milk and is composed of ____.",
      options: [
        "Glucose + Glucose",
        "Glucose + Fructose",
        "Glucose + Galactose",
        "Fructose + Galactose",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-009",
      question:
        "During sample analysis, students find that it contains Carbon, Hydrogen, Oxygen and Nitrogen, but no phosphorous. Based on this information, which biological molecule is most likely to be in the sample?",
      options: [
        "DNA",
        "Protein",
        "Phospholipid",
        "RNA",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-010",
      question:
        "During lab analysis, a student extracted a molecule that contained a sugar, a phosphate group and a nitrogenous base. Which of the following molecules was likely identified?",
      options: [
        "Nucleotide",
        "Amino acid",
        "Monosaccharides",
        "Polysaccharides",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-011",
      question:
        "Pick the smallest form of carbohydrates from the following, which cannot be further hydrolyzed into simpler form.",
      options: ["Sucrose", "Lactose", "Glucose", "Starch"],
      answer: 2,
    },
  
    {
      id: "biomolecules-012",
      question:
        "In Watson and Crick's DNA model, which of the following pairs with Cytosine?",
      options: ["Adenine", "Guanine", "Thymine", "Uracil"],
      answer: 1,
    },
  
    {
      id: "biomolecules-013",
      question: "The glycoproteins are commonly found in:",
      options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Plasma membrane"],
      answer: 3,
    },
  
    {
      id: "biomolecules-014",
      question: "The high specific heat capacity of water is due to:",
      options: [
        "Ionic bonding",
        "Hydrogen bonding",
        "Covalent bonding",
        "Hydrophilic bonding",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-015",
      question: "Which of the following is a branched polysaccharide found in animals?",
      options: ["Cellulose", "Glycogen", "Amylose", "Chitin"],
      answer: 1,
    },
  
    {
      id: "biomolecules-016",
      question: "Which of the following is NOT a globular protein?",
      options: ["Enzyme", "Albumen", "Hemoglobin", "Collagen"],
      answer: 3,
    },
  
    {
      id: "biomolecules-017",
      question:
        "A diabetic patient is advised to avoid both sucrose and lactose, because they both:",
      options: [
        "Are structural carbohydrates",
        "Increase blood glucose after hydrolysis",
        "Cannot be digested in humans",
        "Act as non-caloric sweeteners",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-018",
      question:
        "Which properties of water enable it to circulate in living bodies and act as transport medium?",
      options: [
        "Ionization and low density",
        "Cohesion and adhesion",
        "Ionization and adhesion",
        "Adhesion and cohesion",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-019",
      question: "How are the phospholipid molecules arranged in the plasma membrane?",
      options: [
        "Hydrophilic heads face inwards and hydrophobic tails face outwards",
        "Both hydrophilic heads face each other in the membrane",
        "Hydrophilic heads face outwards and hydrophobic tails face inwards",
        "Hydrophilic heads and hydrophobic tails are randomly distributed",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-020",
      question: "The structure of RNA consists of:",
      options: [
        "Double polynucleotide strand",
        "Deoxyribose sugar",
        "Five different types of nucleotides",
        "Base uracil instead of thymine",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-021",
      question:
        "The constant diameter of DNA is maintained by pairing of:",
      options: [
        "Thymine towards pyrimidines",
        "Pyrimidine towards pyrimidines",
        "Purine towards purine",
        "Sugar towards phosphate",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-022",
      question: "Identify the CORRECT option functional group:",
      options: [
        "Ribose – Pentose, Aldehyde Group",
        "Galactose – Hexose, Ketone Group",
        "Ribulose – Pentose, Aldehyde Group",
        "Galactose – Hexose, Ketone Group",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-023",
      question:
        "Homopolysaccharide that is found in the cell wall of fungi and in the exoskeleton of arthropods is:",
      options: ["Cellulose", "Glycogen", "Starch", "Chitin"],
      answer: 3,
    },
  
    {
      id: "biomolecules-024",
      question: "The most abundant lipids in living things are:",
      options: ["Terpenes", "Waxes", "Sterols", "Acylglycerols"],
      answer: 3,
    },
  
    {
      id: "biomolecules-025",
      question:
        "Name the type of bond that joins amino acids to form a polypeptide chain:",
      options: ["Ionic bond", "Covalent bond", "Glycosidic bond", "Peptide bond"],
      answer: 3,
    },
  
    {
      id: "biomolecules-026",
      question: "Which of the following is not a globular protein?",
      options: ["Enzyme", "Hormone", "Channel protein", "Collagen"],
      answer: 3,
    },
  
    {
      id: "biomolecules-027",
      question:
        "Which property of water allows it to stick to polar surface like wood?",
      options: ["Density", "Adhesion", "Cohesion", "Non-polar attraction"],
      answer: 1,
    },
  
    {
      id: "biomolecules-028",
      question:
        "Name the biomolecule essential for information storage and transmission within cells.",
      options: ["Carbohydrates", "Lipids", "Nucleic acids", "Proteins"],
      answer: 2,
    },
  
    {
      id: "biomolecules-029",
      question: "Guanine-cytosine pairs enhance DNA stability due to:",
      options: [
        "Larger size",
        "Closer pairing",
        "More hydrogen bonds in both",
        "Double ring structure in both",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-030",
      question: "Which of the following is NOT related to DNA?",
      options: ["Adenine", "Thymine", "Uracil", "Guanine"],
      answer: 2,
    },
  
    {
      id: "biomolecules-031",
      question: "Which of the following best describes glycoproteins?",
      options: [
        "Proteins linked with carbohydrates",
        "Proteins linked with DNA",
        "Proteins linked with lipids",
        "Proteins linked with minerals",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-032",
      question: "Water can circulate in living organism due to:",
      options: [
        "Surface tension",
        "Cohesion and adhesion polarity",
        "Solubility in cellulose",
        "Stable liquid range",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-033",
      question:
        "Which of the following biological molecules releases highest energy from its own gram?",
      options: ["Carbohydrates", "Lipids", "Protein", "Water"],
      answer: 1,
    },
  
    {
      id: "biomolecules-034",
      question:
        "A food sample contains long chains of amino acids bounded together. This indicates the presence of:",
      options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
      answer: 2,
    },
  
    {
      id: "biomolecules-035",
      question:
        "At least how many saccharide units must be present in polysaccharide?",
      options: ["2", "0", "10", "11"],
      answer: 3,
    },
  
    {
      id: "biomolecules-036",
      question:
        "The complementary base pairing in DNA is important because it:",
      options: [
        "Maintains the tertiary structure of enzymes",
        "Provides energy for all cell metabolism",
        "Enables protein to fold properly",
        "Allows DNA to act as a genetic blueprint during replication",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-037",
      question: "The secondary structure of proteins is stabilized by:",
      options: [
        "Ionic bonds",
        "Hydrogen bonds",
        "Disulfide bridges",
        "Hydrophobic exclusion",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-038",
      question: "The following is an example of a globular protein.",
      options: ["Keratin", "Collagen", "Hemoglobin", "Histone"],
      answer: 2,
    },
  
    {
      id: "biomolecules-039",
      question: "Enzymes belong to which class of biomolecules?",
      options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
      answer: 2,
    },
  
    {
      id: "biomolecules-040",
      question:
        "Which property of water helps in moderating Earth's climate and maintaining stable temperature in aquatic environment?",
      options: [
        "Low viscosity",
        "High specific heat capacity",
        "High surface tension",
        "High polarity",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-041",
      question: "An oligosaccharide is made up of at least:",
      options: [
        "Two saccharide units",
        "Ten saccharide units",
        "Three to ten saccharide units",
        "More than ten saccharide units",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-042",
      question: "Which of the following is a key feature of RNA?",
      options: [
        "Deoxyribose and thymine",
        "Double stranded and thymine",
        "Ribose and uracil",
        "Ribose and thymine",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-043",
      question:
        "Which of the following types of RNA make up the largest proportion of total cellular RNA?",
      options: [
        "Messenger RNA",
        "Ribosomal RNA",
        "Transfer RNA",
        "Catalytic RNA (ribozyme)",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-044",
      question:
        "Which one of the following biomolecules is a polymer/polysaccharide?",
      options: ["Sucrose", "Pentose", "Lactose", "Glycogen"],
      answer: 3,
    },
  
    {
      id: "biomolecules-045",
      question: "Peptide bonds are important in protein because they:",
      options: [
        "Affect solubility",
        "Hold R-groups",
        "Link amino acids",
        "Help in releasing oxygen",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-046",
      question: "Glycoproteins are formed as a result of the combination of:",
      options: [
        "Lipids and proteins",
        "Carbohydrates and proteins",
        "Nucleic acid and proteins",
        "Fatty acids and carbohydrates",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-047",
      question:
        "Which of the following hormones in the body of animal is lipid-based in nature?",
      options: ["Insulin", "FSH", "Oxytocin", "Aldosterone"],
      answer: 3,
    },
  
    {
      id: "biomolecules-048",
      question:
        "Which of the following base pairing maintains the constant diameter of the DNA double helix as per Watson and Crick’s model?",
      options: [
        "Purine – Purine",
        "Pyrimidine – Pyrimidine",
        "Purine – Pyrimidine",
        "Sugar-Phosphate",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-049",
      question:
        "A mutation prevents proper disulfide bond formation in a fibrous protein, causing brittle nails and slow hair growth. Which of the following proteinaceous substance would be affected?",
      options: ["Elastin", "Actin", "Keratin", "Collagen"],
      answer: 2,
    },
  
    {
      id: "biomolecules-050",
      question:
        "Polysaccharides such as starch and glycogen are mainly used for:",
      options: [
        "Structural framework only",
        "Short-term and long-term energy storage",
        "Enzyme catalysis",
        "Ready source of energy",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-051",
      question:
        "In chromosome, positively charged histone proteins are organized with negatively charged DNA. The positive charges of histone are due to an abundance of basic amino acids:",
      options: [
        "Arginine and alanine",
        "Arginine and lysine",
        "Lysine and alanine",
        "Phenylalanine and arginine",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-052",
      question:
        "Which of the following is common between aldosterone, sex hormone and cortisone?",
      options: [
        "They are peptides",
        "They are phospholipids",
        "They are steroids",
        "They are glycoproteins",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-053",
      question: "The temperature of underground water remains constant due to:",
      options: [
        "Heat capacity",
        "Polarity of water",
        "Heat of vaporization",
        "Specific heat of vaporization",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-054",
      question:
        "All of the following properties of water are associated with its capillary action, EXCEPT:",
      options: ["Adhesion", "Density", "Cohesion", "Surface tension"],
      answer: 1,
    },
  
    {
      id: "biomolecules-055",
      question:
        "Arachidonic acid, which is the precursor molecule for prostaglandins is:",
      options: [
        "A saturated fatty acid with 18 carbons",
        "An unsaturated fatty acid with 18 carbons",
        "A tri-unsaturated fatty acid with 20 carbons",
        "A tetra-unsaturated fatty acid with 20 carbons",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-056",
      question:
        "The most abundant polysaccharide in plants, widely used in paper and as a source of dietary fibre for humans is:",
      options: ["Chitin", "Glycogen", "Starch", "Cellulose"],
      answer: 3,
    },
  
    {
      id: "biomolecules-057",
      question:
        "Which of the following characteristics is common among sucrose, lactose and maltose?",
      options: [
        "Molecular formula",
        "Occurrence in living beings",
        "Chemical nature of their monosaccharide units",
        "To act as reducing sugar",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-058",
      question: "Water is commonly known as a universal solvent because:",
      options: [
        "It dissolves polar and ionic substances effectively",
        "It supports chemical reactions without reacting itself",
        "It has a high specific heat capacity",
        "It dissolves many substances due to its small molecule size",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-059",
      question:
        "Which of the following structural change in water molecule leads to the low density of ice?",
      options: [
        "Formation of ionic bonds",
        "Expansion due to hydrogen bonding",
        "Increased kinetic energy",
        "Loss of polarity in molecules",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-060",
      question:
        "At 25°C the concentration of each of H⁺ and OH⁻ ions in pure water is about __ mole/liter.",
      options: ["10⁻⁶", "10⁻⁷", "10⁻⁹", "10⁻¹⁴"],
      answer: 1,
    },
  
    {
      id: "biomolecules-061",
      question: "Which of the following proteins do NOT exhibit quaternary structure?",
      options: ["Actin", "Haemoglobin", "Insulin", "Myoglobin"],
      answer: 3,
    },
  
    {
      id: "biomolecules-062",
      question:
        "Which one of the following monosaccharides is a hexose-aldehyde form of sugar?",
      options: ["Fructose", "Galactose", "Glucose", "Ribose"],
      answer: 2,
    },
  
    {
      id: "biomolecules-063",
      question:
        "Which one of the following is the main component of lipid bilayer of plasma membrane?",
      options: ["Acylglycerol", "Lecithin", "Triglyceride", "Waxes"],
      answer: 1,
    },
  
    {
      id: "biomolecules-064",
      question:
        "When 3 fatty acids combine with __, they form triglycerides and 3 molecules of water.",
      options: ["Alcohol", "Ester", "Glyceride", "Glycerol"],
      answer: 3,
    },
  
    {
      id: "biomolecules-065",
      question:
        "Which one of the following carbohydrates show dark brown color with iodine solution?",
      options: ["Cellulose", "Glucose", "Glycogen", "Sucrose"],
      answer: 2,
    },
  
    {
      id: "biomolecules-066",
      question:
        "Which of the following part of phospholipids constitutes hydrophobic zone in plasma membrane?",
      options: ["Cholesterol", "Fatty acid tail", "Glycolipids", "Phosphate head"],
      answer: 1,
    },
  
    {
      id: "biomolecules-067",
      question:
        "Which one of the following types of bonds is formed between the hydroxyl group of one amino acid and hydrogen of amino group of another amino acid with release of water?",
      options: [
        "Ester bond",
        "Glycosidic linkage",
        "Peptide bond",
        "Phosphodiester bond",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-068",
      question:
        "Name the protein complex which stabilizes the separated strand of DNA during replication:",
      options: [
        "Double-stranded binding proteins",
        "Double-stranded binding enzymes",
        "Single-stranded binding proteins",
        "Single-stranded binding enzyme",
        "Non-stranded binding proteins",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-069",
      question:
        "Hemoglobin fails to carry sufficient oxygen, leading to death of a person when: Glutamic acid is replaced by Valine at which position?",
      options: [
        "3rd position",
        "6th position",
        "5th position",
        "4th position",
        "2nd position",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-070",
      question:
        "The pigment in the muscles responsible for the binding of oxygen is:",
      options: ["Oxyhemoglobin", "Plasmin", "Myoglobin", "Heme", "Hemoglobin"],
      answer: 2,
    },
  
    {
      id: "biomolecules-071",
      question:
        "The type of carbohydrates, made up of 6 to 10 monosaccharides, which are comparatively less sweet in taste and less soluble in water, are called:",
      options: [
        "Oligosaccharides",
        "Monosaccharides",
        "Starch",
        "Cellulose",
        "Polysaccharides",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-072",
      question: "Histone proteins are rich in:",
      options: [
        "Basic amino acid",
        "Acidic fatty acid",
        "Basic citric acid",
        "Acidic amino acid",
        "Basic fatty acid",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-073",
      question: "What structure holds sister chromatids together?",
      options: [
        "Gene",
        "Nucleosome",
        "Centrosome",
        "Centromere",
        "Histone protein",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-074",
      question:
        "Each helix of DNA is made up of four types of nucleotides and both helices are complementary to each other i.e. if one helix contains Adenine the opposite helix will contain:",
      options: [
        "Histidine",
        "Uracil",
        "Cytosine",
        "Thymine",
        "Guanine",
      ],
      answer: 3,
    },
  
    {
      id: "biomolecules-075",
      question: "Sugarcane contains __.",
      options: ["Fructose", "Glucose", "Ribose", "Sucrose"],
      answer: 3,
    },
  
    {
      id: "biomolecules-076",
      question: "Sickle cell anaemia results from?",
      options: [
        "Reduction in oxygen carrying capacity of haemoglobin",
        "Linkage between the polypeptide chains",
        "Single amino acid substitution in the haemoglobin molecule",
        "Viral infections of RNA viruses",
      ],
      answer: 2,
    },
  
    {
      id: "biomolecules-077",
      question: "Which is INCORRECT about the globular proteins?",
      options: [
        "Abundantly found in hair",
        "Are spherical in shape",
        "Have polypeptide chains",
        "Soluble in water",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-078",
      question: "What is the ester of fatty acids and long chain alcohol called?",
      options: ["Acylglycerol", "Glycerol", "Phospholipid", "Wax"],
      answer: 3,
    },
  
    {
      id: "biomolecules-079",
      question: "Lipids, which do not contain fatty acid are:",
      options: ["Neutral lipids", "Phosphatidic acids", "Steroids", "Waxes"],
      answer: 2,
    },
  
    {
      id: "biomolecules-080",
      question: "Chromosome is typically made up from a combination of?",
      options: [
        "DNA and protein",
        "DNA and RNA",
        "RNA and lipids",
        "RNA and proteins",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-081",
      question: "RNA is associated with:",
      options: ["Lysosome", "Centrosome", "Ribosomes", "Golgi bodies"],
      answer: 2,
    },
  
    {
      id: "biomolecules-082",
      question: "The hereditary material is:",
      options: [
        "DNA",
        "Protein",
        "Both DNA and Protein",
        "Neither DNA nor Protein",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-083",
      question: "Ribose is an example of __ sugar.",
      options: ["Pentose", "Hexose", "Heptose", "Tetrose"],
      answer: 0,
    },
  
    {
      id: "biomolecules-084",
      question: "Water contributes _ % of total mammalian cell weight.",
      options: ["40", "50", "60", "70"],
      answer: 3,
    },
  
    {
      id: "biomolecules-085",
      question:
        "The first step of central dogma is the transfer of information from:",
      options: [
        "DNA to Protein",
        "DNA to mRNA",
        "RNA to Protein",
        "DNA to tRNA",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-086",
      question:
        "Lactose, maltose and sucrose are the important type of following carbohydrates in the living organisms:",
      options: [
        "Monosaccharides",
        "Disaccharides",
        "Triaccharides",
        "Polysaccharides",
      ],
      answer: 1,
    },
  
    {
      id: "biomolecules-087",
      question:
        "If the sequence of bases in DNA is TAGC, the sequence of bases in RNA will be:",
      options: ["ATCG", "AUCG", "TAGC", "None of these"],
      answer: 1,
    },
  
    {
      id: "biomolecules-088",
      question: "Mono-saccharides have a general formula represented by:",
      options: [
        "Cₙ(H₂O)ₙ",
        "C(H₂O)ₙ",
        "C₂(H₂O)ₙ",
        "Cⁿ(H₂O)ₙ",
      ],
      answer: 0,
    },
  
    {
      id: "biomolecules-089",
      question: "What is the percentage of H₂O in bone cells?",
      options: ["70%", "20%", "99%", "60%"],
      answer: 1,
    },
  
    {
      id: "biomolecules-090",
      question:
        "When glycerol reacts with fatty acid, which type of chemical bond will form?",
      options: ["Ester Bond", "Ether Linkage", "Hydrogen Bond", "Ionic Bond"],
      answer: 0,
    },
  
    {
      id: "biomolecules-091",
      question: "Polysaccharides in plants are synthesized by the process of:",
      options: ["Hydrolysis", "Oxidation", "Condensation", "Glycolysis"],
      answer: 2,
    },
  
    {
      id: "biomolecules-092",
      question:
        "Which of the following process is involved in breakdown of protein into Amino acids?",
      options: ["Condensation", "Hydrolysis", "Glycolysis", "Fixation"],
      answer: 1,
    },
  
    {
      id: "biomolecules-093",
      question:
        "The hydrophilic end of phospholipid molecule is polar because of the presence of:",
      options: ["Glycerol", "Amine group", "Fatty Acid", "Phosphate group"],
      answer: 3,
    },
  
    {
      id: "biomolecules-094",
      question: "Which monosaccharide will form a glucopyranose ring in solution?",
      options: ["Fructose", "Glucose", "Ribose", "Deoxyribose"],
      answer: 1,
    },
    // --- TESTMOZ ---
      {
        id: "testmoz-bio-1",
        question: "Hemoglobin exhibits:",
        options: [
          "Primary structure",
          "Secondary structure",
          "Tertiary structure",
          "Quaternary structure"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-2",
        question: "Which monosaccharide will form a pyranose ring in solution?",
        options: [
          "Fructose",
          "Glucose",
          "Ribose",
          "Deoxyribose"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-3",
        question: "The number of base pairs in one turn of DNA is:",
        options: [
          "10",
          "34",
          "20",
          "25"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-4",
        question: "Which one of the following is a precursor of steroid hormones?",
        options: [
          "Glycerol",
          "Sterol",
          "Amino acids",
          "Cholesterol"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-5",
        question: "Which of the following is an example of unsaturated fatty acids?",
        options: [
          "Butyric acid",
          "Palmitic acid",
          "Oleic acid",
          "Acetic acid"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-6",
        question: "The structure of fibrous protein comprises of polypeptide chains in the form of:",
        options: [
          "Cluster",
          "Long strands of fibrils",
          "Spherical or curled up ball",
          "Flat uncoiled chains"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-7",
        question: "Cellulose of wood, cotton and paper is an example of:",
        options: [
          "Carbohydrates",
          "Proteins",
          "Nucleic acids",
          "Lipids"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-8",
        question: "The enantiomer of D-glucose is:",
        options: [
          "D-galactose",
          "L-galactose",
          "Both of them",
          "None of them"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-9",
        question: "Amino acid in which R group is hydrogen is:",
        options: [
          "Glycine",
          "Alanine",
          "Serine",
          "Valine"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-10",
        question: "The bond formed between glucose and fructose to form sucrose is:",
        options: [
          "1,4 Glycosidic linkage",
          "1,6 Glycosidic linkage",
          "1,2 Glycosidic linkage",
          "1,3 Glycosidic linkage"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-11",
        question: "Myosin is type of protein:",
        options: [
          "Intermediate",
          "Globular",
          "Simple",
          "Fibrous"
        ],
        answer: 3
      },
      {
        id: "testmoz-bio-12",
        question: "In translation the terminating codon is:",
        options: [
          "GUA",
          "UUG",
          "UAA",
          "AGU"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-13",
        question: "The two dimensional shape of tRNA is:",
        options: [
          "L shape",
          "X shape",
          "Clover leaf like",
          "Y shape"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-14",
        question: "It is an Aldo-hexose:",
        options: [
          "Fructose",
          "Glucose",
          "Ribulose",
          "Ribose"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-15",
        question: "Involved in blood transfusion?",
        options: [
          "Glycoprotein",
          "Glycolipid",
          "Cerebrosides",
          "Both A & B"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-16",
        question: "Secondary structure of protein is found in:",
        options: [
          "Trypsin",
          "Insulin",
          "Keratin",
          "Glucagon"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-17",
        question: "Waxes are formed by combination of fatty acids with:",
        options: [
          "Alcohol",
          "Serine",
          "Glycerol",
          "Cysteine"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-18",
        question: "Which of the following is purine?",
        options: [
          "Guanine",
          "Cytosine",
          "Thymine",
          "Uracil"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-19",
        question: "Fatty acids are organic compounds containing hydrogen, oxygen and one of the following:",
        options: [
          "COOH",
          "Acyl",
          "-NH2",
          "Sucrose"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-20",
        question: "Phosphodiester bond is:",
        options: [
          "C—O—P—O—C",
          "C—O—P",
          "C—C—O—P",
          "None"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-21",
        question: "Collagen and albumin are:",
        options: [
          "Simple proteins",
          "Polyamides",
          "Derived proteins",
          "Polysaccharides"
        ],
        answer: 0
      },
      {
        id: "testmoz-bio-22",
        question: "What term is used to describe the process by which proteins are synthesized from a genetic code?",
        options: [
          "Reproduction",
          "Transcription",
          "Translation",
          "Replication"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-23",
        question: "Immediate source of energy for cellular metabolism is:",
        options: [
          "Lipids",
          "ATP",
          "Carbohydrates",
          "Proteins"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-24",
        question: "Which of the following gives red color with iodine?",
        options: [
          "Starch",
          "Glycogen",
          "Cellulose",
          "All of these"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-25",
        question: "The combination of a Pentose sugar with a base results in a compound known as:",
        options: [
          "Nucleotide",
          "Nucleic acid",
          "Nucleoside",
          "Polynucleotide"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-26",
        question: "Which one are intermediates in respiration and photosynthesis both?",
        options: [
          "Ribose and heptulose",
          "Glucose and galactose",
          "Glyceraldehyde and dihydroxyacetone",
          "Fructose and ribulose"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-27",
        question: "Which lipid is totally hydrophobic or insoluble?",
        options: [
          "Triglycerides",
          "Waxes",
          "Phospholipids",
          "Terpenoids"
        ],
        answer: 1
      },
      {
        id: "testmoz-bio-28",
        question: "If the genetic code is made up of three nucleotides, then total possible genetic codes will be:",
        options: [
          "6",
          "34",
          "64",
          "29"
        ],
        answer: 2
      },
      {
        id: "testmoz-bio-29",
        question: "Estrogen, vitamin D and cholesterol are all examples of:",
        options: [
          "Glycolipids",
          "Lipoprotein",
          "Terpenes",
          "Steroids"
        ],
        answer: 3
      }
  ];