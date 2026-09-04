import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

type Question = {
  id?: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

const ROOT = process.cwd();

const DATA_DIR = path.join(ROOT, "src", "data");
const OUTPUT_DIR = path.join(DATA_DIR, "nums");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "generated-tests.ts");

const TEST_COUNT = 3;

const REQUIRED = {
  biology: 55,
  chemistry: 40,
  physics: 40,
  english: 15,
};

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function getTsFiles(folder: string): string[] {
  if (!fs.existsSync(folder)) {
    return [];
  }

  return fs
    .readdirSync(folder)
    .filter(
      (file) =>
        file.endsWith(".ts") &&
        !file.endsWith(".d.ts")
    )
    .map((file) => path.join(folder, file));
}

async function loadQuestionsFromFolder(
  folderName: string
): Promise<Question[]> {
  const folder = path.join(DATA_DIR, folderName);

  const files = getTsFiles(folder);

  if (files.length === 0) {
    throw new Error(
      `No .ts files found in src/data/${folderName}`
    );
  }

  const allQuestions: Question[] = [];

  for (const file of files) {
    // Don't accidentally load the NUMS generator/output
    if (file.includes(`${path.sep}nums${path.sep}`)) {
      continue;
    }

    try {
      const module = await import(pathToFileURL(file).href);

      for (const value of Object.values(module)) {
        if (Array.isArray(value)) {
          const questions = value.filter(
            (item): item is Question =>
              item &&
              typeof item === "object" &&
              typeof (item as Question).question === "string" &&
              Array.isArray((item as Question).options) &&
              typeof (item as Question).answer === "number"
          );

          if (questions.length > 0) {
            allQuestions.push(...questions);

            console.log(
              `Loaded ${questions.length} questions from ${path.relative(
                ROOT,
                file
              )}`
            );

            break;
          }
        }
      }
    } catch (error) {
      console.error(
        `Could not load ${path.relative(ROOT, file)}`
      );
      console.error(error);
    }
  }

  return allQuestions;
}

function removeDuplicateQuestions(
  questions: Question[]
): Question[] {
  const seen = new Set<string>();

  return questions.filter((q) => {
    const key =
      q.question.trim().toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function createQuestionId(
  subject: string,
  index: number
): string {
  return `nums-${subject}-${index + 1}`;
}

function cleanQuestion(
    question: Question,
    subject: string,
    index: number
  ): Question {
    return {
      id: String(
        question.id ??
          createQuestionId(subject, index)
      ),
      question: question.question,
      options: question.options,
      answer: question.answer,
      ...(question.explanation
        ? { explanation: question.explanation }
        : {}),
    };
  }

async function main() {
  console.log("");
  console.log("======================================");
  console.log("       NUMS TEST GENERATOR");
  console.log("======================================");
  console.log("");

  console.log("Reading Biology...");
  const biology = removeDuplicateQuestions(
    await loadQuestionsFromFolder("biology")
  );

  console.log("");
  console.log("Reading Chemistry...");
  const chemistry = removeDuplicateQuestions(
    await loadQuestionsFromFolder("chemistry")
  );

  console.log("");
  console.log("Reading Physics...");
  const physics = removeDuplicateQuestions(
    await loadQuestionsFromFolder("physics")
  );

  console.log("");
  console.log("Reading English...");
  const english = removeDuplicateQuestions(
    await loadQuestionsFromFolder("english")
  );

  console.log("");
  console.log("======================================");
  console.log("AVAILABLE QUESTIONS");
  console.log("======================================");

  console.log(`Biology:   ${biology.length}`);
  console.log(`Chemistry: ${chemistry.length}`);
  console.log(`Physics:   ${physics.length}`);
  console.log(`English:   ${english.length}`);

  console.log("");

  const requiredTotal = {
    biology: REQUIRED.biology * TEST_COUNT,
    chemistry: REQUIRED.chemistry * TEST_COUNT,
    physics: REQUIRED.physics * TEST_COUNT,
    english: REQUIRED.english * TEST_COUNT,
  };

  console.log("Questions required for 3 completely unique tests:");

  console.log(`Biology:   ${requiredTotal.biology}`);
  console.log(`Chemistry: ${requiredTotal.chemistry}`);
  console.log(`Physics:   ${requiredTotal.physics}`);
  console.log(`English:   ${requiredTotal.english}`);

  console.log("");

  if (biology.length < requiredTotal.biology) {
    console.warn(
      `WARNING: Biology has ${biology.length} unique questions but ${requiredTotal.biology} are required for 3 completely unique tests.`
    );
  }

  if (chemistry.length < requiredTotal.chemistry) {
    console.warn(
      `WARNING: Chemistry has ${chemistry.length} unique questions but ${requiredTotal.chemistry} are required for 3 completely unique tests.`
    );
  }

  if (physics.length < requiredTotal.physics) {
    console.warn(
      `WARNING: Physics has ${physics.length} unique questions but ${requiredTotal.physics} are required for 3 completely unique tests.`
    );
  }

  if (english.length < requiredTotal.english) {
    console.warn(
      `WARNING: English has ${english.length} unique questions but ${requiredTotal.english} are required for 3 completely unique tests.`
    );
  }

  console.log("");

  /*
   * Shuffle each subject separately.
   *
   * We take different chunks for Test 1, Test 2 and Test 3.
   * This prevents unnecessary repetition between tests.
   */

  const biologyPool = shuffle(biology);
  const chemistryPool = shuffle(chemistry);
  const physicsPool = shuffle(physics);
  const englishPool = shuffle(english);

  function getQuestions(
    pool: Question[],
    count: number,
    testNumber: number
  ): Question[] {
    const start = (testNumber - 1) * count;

    /*
     * If the pool contains enough questions, use a completely
     * different section for each test.
     */

    if (start + count <= pool.length) {
      return pool.slice(start, start + count);
    }

    /*
     * If there aren't enough questions for complete uniqueness,
     * fill the missing questions from the available pool.
     */

    const selected = pool.slice(
      start,
      Math.min(start + count, pool.length)
    );

    const usedQuestions = new Set(
      selected.map((q) =>
        q.question.trim().toLowerCase()
      )
    );

    const remaining = pool.filter(
      (q) =>
        !usedQuestions.has(
          q.question.trim().toLowerCase()
        )
    );

    while (
      selected.length < count &&
      remaining.length > 0
    ) {
      selected.push(
        remaining.shift() as Question
      );
    }

    /*
     * If even the whole pool is too small, repetition
     * becomes unavoidable.
     */

    while (
      selected.length < count &&
      pool.length > 0
    ) {
      selected.push(
        pool[selected.length % pool.length]
      );
    }

    return selected;
  }

  const tests: {
    biology: Question[];
    chemistry: Question[];
    physics: Question[];
    english: Question[];
  }[] = [];

  for (let testNumber = 1; testNumber <= TEST_COUNT; testNumber++) {
    console.log(
      `Creating NUMS Test ${testNumber}...`
    );

    const bio = getQuestions(
      biologyPool,
      REQUIRED.biology,
      testNumber
    );

    const chem = getQuestions(
      chemistryPool,
      REQUIRED.chemistry,
      testNumber
    );

    const phys = getQuestions(
      physicsPool,
      REQUIRED.physics,
      testNumber
    );

    const eng = getQuestions(
      englishPool,
      REQUIRED.english,
      testNumber
    );

    tests.push({
      biology: bio,
      chemistry: chem,
      physics: phys,
      english: eng,
    });

    console.log(
      `  Biology:   ${bio.length}`
    );
    console.log(
      `  Chemistry: ${chem.length}`
    );
    console.log(
      `  Physics:   ${phys.length}`
    );
    console.log(
      `  English:   ${eng.length}`
    );
    console.log(
      `  TOTAL:     ${
        bio.length +
        chem.length +
        phys.length +
        eng.length
      }`
    );

    console.log("");
  }

  /*
   * Create final test arrays.
   *
   * Subject order is preserved:
   *
   * Biology → Chemistry → Physics → English
   *
   * But questions inside each subject are randomized.
   */

  const finalTests = tests.map(
    (test, testIndex) => {
      const questions = [
        ...test.biology,
        ...test.chemistry,
        ...test.physics,
        ...test.english,
      ];

      return questions.map((q, index) =>
        cleanQuestion(
          q,
          `test-${testIndex + 1}`,
          index
        )
      );
    }
  );

  /*
   * Generate TypeScript file
   */

  fs.mkdirSync(OUTPUT_DIR, {
    recursive: true,
  });

  const output = `// AUTO-GENERATED FILE
// Do not manually edit this file.
// Run the NUMS generator again whenever the question banks change.

export type NUMSQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

export const numsTest1: NUMSQuestion[] = ${JSON.stringify(
    finalTests[0],
    null,
    2
  )};

export const numsTest2: NUMSQuestion[] = ${JSON.stringify(
    finalTests[1],
    null,
    2
  )};

export const numsTest3: NUMSQuestion[] = ${JSON.stringify(
    finalTests[2],
    null,
    2
  )};

export const numsTests = [
  numsTest1,
  numsTest2,
  numsTest3,
];
`;

  fs.writeFileSync(
    OUTPUT_FILE,
    output,
    "utf8"
  );

  console.log("======================================");
  console.log("          GENERATION COMPLETE");
  console.log("======================================");
  console.log("");

  console.log(
    `Created: ${path.relative(ROOT, OUTPUT_FILE)}`
  );

  console.log("");

  console.log("NUMS Test 1: 150 questions");
  console.log("NUMS Test 2: 150 questions");
  console.log("NUMS Test 3: 150 questions");

  console.log("");

  console.log(
    "55 Biology + 40 Chemistry + 40 Physics + 15 English = 150"
  );

  console.log("");
}

main().catch((error) => {
  console.error("");
  console.error("NUMS GENERATOR FAILED");
  console.error("");
  console.error(error);
  process.exit(1);
});