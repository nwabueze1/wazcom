import { CommonProps } from "../../types";

export type TextAreaProps = CommonProps & {
    name: string;
    value: string;
    minRows: number;
    onChange: ({
        target: { name, value },
    }: React.ChangeEvent<HTMLTextAreaElement>) => void;
}