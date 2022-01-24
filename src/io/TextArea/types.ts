import { CommonProps } from "../../types";

export type TextAreaProps = CommonProps & {
    value: string;
    minRows: number;
}