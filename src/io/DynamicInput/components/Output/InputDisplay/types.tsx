import { Any, QuestionProps } from "../../../types";

export type InputDisplayProps = {
    question: QuestionProps;
    setAnswers: (answers: Any[]) => void;
};
