export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
export const logicalReasoningQuestions = [
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