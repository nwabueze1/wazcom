import { InputComponentProps, QuestionOption } from "./types";
export declare const useInputComponents: () => (questionOptions: QuestionOption[], setQuestionOptions: React.Dispatch<React.SetStateAction<QuestionOption[]>>, handleOptionMedia: (id: number) => void, handleRemoveOptionMedia: (id: number) => void) => InputComponentProps[];
