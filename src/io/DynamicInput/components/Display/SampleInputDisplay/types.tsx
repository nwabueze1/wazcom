import { QuestionOption } from "../../../types";

export type SampleInputDisplayProps = {
  defaultCount: number;
  setQuestionOptions?: React.Dispatch<React.SetStateAction<QuestionOption[]>>;
  value: string;
  type: string;
  questionOptions: QuestionOption[];
  handleOptionMedia: (id: number) => void;
  handleRemoveOptionMedia: (id: number) => void;
};
