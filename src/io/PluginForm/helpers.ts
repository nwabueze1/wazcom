import { QuestionType, QuestionTypes } from "./type";

export const extractObjectFromArrayString = (
  args: string[],
  type: "boolean" | "string" = "string",
) => {
  const obj: Record<string, string | boolean> = {};
  for (const arg of args) {
    obj[arg] = type === "boolean" ? false : "";
  }
  return obj;
};
export const getInitialFormState = (questions: QuestionType[]) => {
  const initialAnswers = questions.map(
    ({
      question,
      type,
      fields,
    }: {
      question: string;
      type: QuestionTypes | string;
      fields: any;
    }) => ({
      [question]:
        type === "ADDRESS"
          ? extractObjectFromArrayString(Object.values(fields))
          : type === "YES_OR_NO"
          ? false
          : "",
    }),
  );
  return [...initialAnswers];
};

export const getInitialTouchedState = (questions: QuestionType[]) => {
  const initialTouch: Record<string, boolean> = {};
  questions.forEach(({ question }) => {
    initialTouch[question] = false;
  });
  return initialTouch;
};
