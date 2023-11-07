import { QuestionType } from "./type";

export const getInitialFormValues = (questions: QuestionType[]) => {
  const initialAnswer: Record<string, any> = {};
  questions.forEach(({ question, type, fields }) => {
    if (type === "ADDRESS") {
      const addressFields: Record<string, any> = {};
      Object.values(fields).forEach((value) => {
        addressFields[value as string] = "";
      });
      initialAnswer[question] = addressFields;
    } else if (type === "OPINION" || type === "RATING") {
      initialAnswer[question] = 0;
    } else {
      initialAnswer[question] = type === "MULTI_CHOICE" ? [] : "";
    }
  });
  return initialAnswer;
};
