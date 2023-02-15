import { Any, QuestionProps } from "../../types";

export type OutputProps = {
    question: QuestionProps;
    setAnswers: (answers: Any[]) => void;
    setPoint: (point: number) => void;
    resetDisplay: () => void;
    active: boolean;
};
