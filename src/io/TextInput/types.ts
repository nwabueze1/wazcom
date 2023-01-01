import { CommonProps } from "../../types";

export type TextInputProps = CommonProps & {
    className?: string;
    label?: string;
    helperText?: string;
    hideLabel?: boolean;
    info?: string;
    onChange: (value: string) => void;
    required?: boolean;
    value?: string;
}