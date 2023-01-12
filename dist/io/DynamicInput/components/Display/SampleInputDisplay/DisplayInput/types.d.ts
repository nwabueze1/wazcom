import { QuestionOption } from "../../../../types";
export declare type DisplayInputProps = {
    handleRemove: () => void;
    handleChange: (value: QuestionOption) => void;
    onFocus: () => void;
    handleOptionMedia: () => void;
    index: number;
    value: QuestionOption;
    type: string;
};
