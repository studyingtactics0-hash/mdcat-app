export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

export const readingAndThinkingSkillQuestions = [
    {
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
      question: "Where did the writer put his savings in?",
      options: ["Pocket", "Silver box", "Bank", "Pocket", "Sock"],
      answer: 4
    },
    {
      question: "John Keats and his brother died of this disease:",
      options: [
        "Diabetes",
        "Alzheimer’s disease",
        "Pneumonia",
        "Cancer",
        "Tuberculosis"
      ],
      answer: 4
    },
    {
      question: "Most of the people gave up and climbed trees in:",
      options: [
        "Winslow Bottling",
        "Clintonville",
        "Reynoldsburg",
        "Country Club",
        "Franklin Park"
      ],
      answer: 4
    },
    {
      question: "The detective noticed a subtle change in the suspect’s tone when he asked about her whereabouts... What does “subtle” most likely mean?",
      options: ["Dramatic", "Notable", "Obvious", "Slight"],
      answer: 3
    },
    {
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
      question: "The sentence “It was 97 in the shade.” refers to the _______.",
      options: ["age", "distance", "temperature", "year"],
      answer: 2
    },
    {
      question: "The narrator has _______ siblings.",
      options: ["four", "five", "six", "no"],
      answer: 0
    },
    {
      question: "“She was elated when she got first position in exams.” What is the meaning of “elated” in this sentence?",
      options: ["Disappointed", "Worried", "Excited", "Mad"],
      answer: 2
    },
    {
      question: "The writer has unearthed serious irregularities in the entire project. The word ‘unearthed’ in this sentence means:",
      options: ["written", "mentioned", "exposed", "stated"],
      answer: 2
    },
    {
      question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of the underlined word from the given sentence.",
      options: ["Anxious", "Resilient", "Angry", "Confused"],
      answer: 1
    },
    {
      question: "The old man was feeble, barely able to walk. The word “feeble” means:",
      options: ["Healthy", "Weak", "Strong", "Fat"],
      answer: 1
    },
    {
      question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
      options: ["Joyful", "Weepy", "Monotonous", "Humorous"],
      answer: 1
    },
    {
      question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means:",
      options: ["relate", "coordinate", "comprehend", "verify"],
      answer: 2
    }
  ];