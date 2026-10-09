import { QuestionType } from "./type";

export const getInitialFormValues = (questions: QuestionType[]) => {
  const initialAnswer: Record<string, any> = {};
  questions.forEach(({ uuid, type, fields }) => {
    if (type === "ADDRESS") {
      const addressFields: Record<string, any> = {};
      Object.values(fields).forEach((value) => {
        addressFields[value as string] = "";
      });
      initialAnswer[uuid] = addressFields;
    } else if (type === "OPINION" || type === "RATING") {
      initialAnswer[uuid] = 0;
    } else {
      initialAnswer[uuid] = type === "MULTI_CHOICE" ? [] : "";
    }
  });
  return initialAnswer;
};
