export type Question = {
    id: string;
    question: string;
    options: string[];
    answer: number;
    explanation?: string;
  };
  
export const formalAndWritingSkillQuestions = [
    // SECTION 2: FORMAL AND LEXICAL ASPECT OF LANGUAGE
    {
      question: "When I _______ him, Rauf _______ cricket.",
      options: ["was, playing", "saw, is playing", "saw, was playing", "saw, played"],
      answer: 2
    },
    {
      question: "_______ Danube is Austria’s longest river.",
      options: ["A", "An", "The", "No change required"],
      answer: 2
    },
    {
      question: "Choose the word which is similar in meaning to: REIGN",
      options: ["Damp", "Tussle", "Rule", "Prime"],
      answer: 2
    },
    {
      question: "We are about _______ at the place where we can set up our tents.",
      options: ["to arrive", "arriving", "be arriving", "to have arriving"],
      answer: 0
    },
    {
      question: "Under ethical guidelines recently adopted by the National Institutes of Health, human genes are to be manipulated only to correct diseases for which _______ treatments are unsatisfactory.",
      options: ["similar", "most", "dangerous", "alternative"],
      answer: 3
    },
    {
      question: "We are committed to providing excellent customer service, _______ ensuring a positive experience for all our clients.",
      options: ["thereby", "therefore", "because", "since"],
      answer: 0
    },
    {
      question: "If _______ the match, I will go to Lahore to meet the sports board chairman.",
      options: ["I win", "I will win", "I shall win", "I wins"],
      answer: 0
    },
    {
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
      question: "There was a surprising story in the newspaper about the _______ car was stolen.",
      options: ["man which his", "man whose his", "man that his", "man whose"],
      answer: 3
    },
    {
      question: "He isn’t good _______ French.",
      options: ["at", "in", "to", "of"],
      answer: 0
    },
    {
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
      question: "Many modern architects insist on _______ materials native to the region that will blend into the surrounding landscape.",
      options: ["use", "to use", "the use", "using"],
      answer: 3
    },
    {
      question: "Unless a student _______ with the university regulations, he can be removed from the university.",
      options: ["complies", "complied", "has complied", "will comply"],
      answer: 0
    },
    {
      question: "What is the opposite of: CHAOTIC",
      options: ["Immersive", "orderly", "Hectic", "Steady"],
      answer: 1
    },
    {
      question: "Romans _______ a unique system of the Roman alphabet.",
      options: ["improved", "developed", "persuaded", "exchanged"],
      answer: 1
    },
    {
      question: "It is common knowledge to anyone who studies science, that the earth _______ on its own axis once every 24 hours.",
      options: ["revolves", "revolve", "has revolved", "has had revolved"],
      answer: 0
    },
    {
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
      question: "The students decided to meet the teacher and request him for a favour. The main verb in this sentence is:",
      options: ["meet", "request", "meet & request", "decided"],
      answer: 3
    },
    {
      question: "“She remained stoic during the crisis, refusing to show fear or distress.” Deduce the meaning of underlined word from the given sentence.",
      options: ["Anxious", "Resilient", "Angry", "Confused"],
      answer: 1
    },
    {
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
      question: "Choose the correct phrase for the sentence given below: The aero plane travelled 5,000 meters before it took on.",
      options: ["Take into", "Took off", "Take over", "Took away", "Take on"],
      answer: 1
    },
    {
      question: "Choose the best possible option from the given homophones: How will they get across the river if the _______ is not running?",
      options: ["Furry", "Fairly", "Fairy", "Ferry", "Fury"],
      answer: 3
    },
    {
      question: "Choose the best possible antonym for the underlined word: The general’s problem was to get 20,000 troops swiftly across this river.",
      options: ["Slowly", "Expeditiously", "Thoroughly", "Anxiously", "Strongly"],
      answer: 0
    },
    {
      question: "The synonym of the word “Oblivion” is:",
      options: ["Forgetful", "Observant", "Shabby", "Daunted"],
      answer: 0
    },
    {
      question: "Choose the best option: Some of the race teams were still looking for _______ equipment.",
      options: ["Its", "It’s", "There", "Their", "It"],
      answer: 3
    },
    {
      question: "Choose the correct prepositional phrase for the sentence given below: In today’s session, he _______ the current situation of Pakistan.",
      options: ["Suffers from", "Belongs to", "Begs for", "Compares with", "Comments on"],
      answer: 4
    },
    {
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
      question: "Choose the correct form of the tense: I would gladly have helped him if he _______ me into confidence.",
      options: ["Took", "Has taken", "Had taken", "Have taken", "Takes"],
      answer: 2
    },
    {
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
      question: "Despite the complicated situation, she remained _______, calmly assessing her options before deciding.",
      options: ["Composed", "Erratic", "Frantic", "Hysterical"],
      answer: 0
    },
    {
      question: "Find out synonym for “Elated”",
      options: ["Confused", "Disappointed", "Nervous", "Overjoyed"],
      answer: 3
    },
    {
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
      question: "After she _______ the stairs, her heart almost gave out from exhaustion.",
      options: ["Has climbed", "Have climbed", "Had climbed", "Was climbing"],
      answer: 2
    },
    {
      question: "Do you usually take a bus..................the market?",
      options: ["By", "For", "Of", "To"],
      answer: 3
    },
    {
      question: "He has been working _______ this project for two weeks.",
      options: ["At", "By", "To", "On"],
      answer: 3
    },
    {
      question: "Order is the law of civilization as chaos is the law of the ______.",
      options: ["City", "Metropolis", "Universe", "Wilderness"],
      answer: 3
    },
    {
      question: "Blueprint is to architect as algorithm is to _______",
      options: ["Designer", "Engineer", "Physician", "Programmer"],
      answer: 3
    },
    {
      question: "Which of the following words is a synonym for “meticulous”?",
      options: ["Abhorrent", "Heedless", "Incautious", "Precise"],
      answer: 3
    },
    {
      question: "In the sentence “Jogging every morning improves my mood,” what role does the gerund phrase play?",
      options: ["Object of a verb", "Direct object", "Predicate noun", "Subject"],
      answer: 3
    },
    {
      question: "The meeting has been scheduled _______ 3 p.m. sharp.",
      options: ["on", "at", "in", "to"],
      answer: 1
    },
    {
      question: "“She studied hard; _______, she passed the exam with distinction.” Choose the CORRECT transitional device:",
      options: ["however", "for instance", "consequently", "in contrast"],
      answer: 2
    },
    {
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
      question: "Each of the boys _______ ambitious to lead the team.",
      options: ["have", "has", "is", "are"],
      answer: 2
    },
    {
      question: "“Revenge is a kind of wild justice.” The sentence illustrates the use of:",
      options: ["Personification", "Pun", "Metaphor", "Hyperbole"],
      answer: 2
    },
    {
      question: "The old man was feeble, barely able to walk. The word “feeble” means:",
      options: ["Healthy", "Weak", "Strong", "Fat"],
      answer: 1
    },
    {
      question: "Which literary device involves using words or phrases that convey the opposite of their literal meaning?",
      options: ["Irony", "Parody", "Satire", "Sarcasm"],
      answer: 0
    },
    {
      question: "All of the players forgot _______ jerseys.",
      options: ["his", "her", "there", "their"],
      answer: 3
    },
    {
      question: "He does his work without any care. The underlined part of the sentence is:",
      options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Appositive phrase"],
      answer: 0
    },
    {
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
      question: "“His lachrymose speech at the funeral moved everyone to tears.” Choose the synonym for lachrymose:",
      options: ["Joyful", "Weepy", "Monotonous", "Humorous"],
      answer: 1
    },
    {
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
      question: "People approach the situation differently depending on who they are. The word ‘approach’ in this sentence means ............",
      options: ["relate", "coordinate", "comprehend", "verify"],
      answer: 2
    },
    {
      question: "The team won the match. _______ they broke the school record.",
      options: ["Similarly", "Nevertheless", "Furthermore", "Instead"],
      answer: 2
    },
    {
      question: "Travelling in a hot dusty train gives me no pleasure. The underlined part of the sentence is:",
      options: ["Adverb phrase", "Adjective phrase", "Noun phrase", "Infinitive phrase"],
      answer: 2
    },
    {
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
      question: "Identify the type of sentence given below: The caliph noticed the merchant.",
      options: ["Complex", "Compound", "Compound-complex", "Simple"],
      answer: 3
    },
    {
      question: "Supply the correct synonym for the capitalized word: An ORTHODOX is a _______ person.",
      options: ["clever", "confident", "confused", "conservative"],
      answer: 3
    },
    {
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
      question: "Supply the correct preposition: I was almost back _______ my classroom door when I heard a strange noise.",
      options: ["at", "by", "in", "to"],
      answer: 0
    },
    {
      question: "Supply the correct form of verb: Farah has planned _______ before the next term.",
      options: ["resign", "resignation", "resigning", "to resign"],
      answer: 3
    },
    {
      question: "Supply the correct antonym for the capitalized word: Your RECKLESS behavior is not acceptable. You have to be more _______.",
      options: ["careful", "happy", "hardworking", "kind"],
      answer: 0
    },
    {
      question: "Supply the correct preposition: Have you been in this company _______ six weeks?",
      options: ["during", "for", "just", "since"],
      answer: 1
    },
    {
      question: "Supply the correct form of verb: Had I known the answer I _______ it.",
      options: ["got written", "have written", "would have written", "wrote"],
      answer: 2
    },
    {
      question: "Supply the correct form of verb: We had taken our meal before we _______.",
      options: ["had left", "have left", "left", "were leaving"],
      answer: 2
    },
    {
      question: "Supply the correct antonym for the capitalized word: What can be done to ALLEVIATE the situation?",
      options: ["Aggravate", "Anticipate", "Clear", "Manipulate"],
      answer: 0
    },
    {
      question: "The underlined part in the sentence given below is an adverbial clause of _______: Although Mehran is hardworking, yet he failed.",
      options: ["Concession", "Condition", "Manner", "Reason"],
      answer: 0
    },
    {
      question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
      options: [",", "–", ";", ":"],
      answer: 2
    },
    {
      question: "Supply the correct synonym for the capitalized word: The new government brought STUPENDOUS changes in the economy and _______ its critics.",
      options: ["destroyed", "fooled", "involved", "surprised"],
      answer: 3
    },
    {
      question: "Identify the figure of speech in the following sentence: He is considered the black sheep of the family.",
      options: ["Alliteration", "Imagery", "Metaphor", "Simile"],
      answer: 2
    },
    {
      question: "What does the word “SURPLUS” mean?",
      options: ["In excess", "A mathematical term", "Within reach", "Salutation"],
      answer: 0
    },
    {
      question: "What does the word “ANCESTOR” mean?",
      options: ["Collection of stars", "Branch of astrology", "Forefathers", "Type of receptors"],
      answer: 2
    },
    {
      question: "What does the word “SPILL” mean?",
      options: ["Coil", "Deliver", "Spoil", "Spread"],
      answer: 3
    },
    {
      question: "The soup _______ good",
      options: ["Taste", "Tastes", "Is tasting", "Has taste"],
      answer: 1
    },
    {
      question: "I _______ him for a long time.",
      options: ["Have never known", "Had never knew", "Had never been known", "Would never knew"],
      answer: 0
    },
    {
      question: "_______ words spoken in earnest will convince him",
      options: ["A few", "The few", "Few", "Fewer"],
      answer: 0
    },
    {
      question: "He takes _______ his father. Fill in the blank with appropriate preposition.",
      options: ["Up", "Down", "After", "In"],
      answer: 2
    },
    {
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
      question: "The keys were found _______ the drawer where you left them last week.",
      options: ["under", "in", "on", "beside"],
      answer: 1
    },
    {
      question: "The board of directors expressed _______ disappointment with the financial results.",
      options: ["their", "its", "his or her", "one’s"],
      answer: 1
    },
    {
      question: "It rained all night; _______, the roads were flooded in the morning.",
      options: ["similarly", "instead", "as a result", "in contrast"],
      answer: 2
    },
    {
      question: "The manager accepted the cashier’s _______ for coming late.",
      options: ["explanation", "explanation", "explanation", "explanation"],
      answer: 0
    },
  
    // SECTION 3: WRITING SKILLS
    {
      question: "Choose the word with incorrect spelling:",
      options: ["sagacious", "foremost", "berister", "pneumonia"],
      answer: 2
    },
    {
      question: "Spot the error in the given sentence: The stories that she makes up for the children ought to be written down and published.",
      options: ["For", "Down", "Ought", "Stories", "And"],
      answer: 2
    },
    {
      question: "Spot the error in the given sentence: The bushes on the corner make it difficult for the driver to see the traffic approaching from the write.",
      options: ["Write", "For", "Make", "Approaching", "Bushes"],
      answer: 0
    },
    {
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
      question: "Identify the ERROR in the sentence: The chef quickly prepared, delicious and it served a meal.",
      options: ["Punctuation", "Style", "Vocabulary", "Word order"],
      answer: 3
    },
    {
      question: "Choose the word with incorrect spelling:",
      options: ["Immigrant", "Ancestors", "Montessori", "Pregmetic"],
      answer: 3
    },
    {
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
      question: "Identify the correct spelling:",
      options: ["Discremination", "Discrimenation", "Discrimination", "Disscrimnation"],
      answer: 2
    },
    {
      question: "Complete the sentence using the appropriate punctuation mark: Punishment brings wisdom _______ it is the healing art of wickedness.",
      options: [",", "–", ";", ":"],
      answer: 2
    },
    {
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
      question: "Choose the CORRECT spellings.",
      options: ["Pharaoh", "Pharoah", "Pheroh", "Pheraoh"],
      answer: 0
    },
    {
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