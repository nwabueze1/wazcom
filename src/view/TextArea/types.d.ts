import { CommonProps } from "../../types";
export type TextAreaViewProps = CommonProps;

export type InputDataProps = {
    name: string;
    label: string;
    placeholder: string;
    helperText: string;
    isError?: boolean;
    isSuccess?: boolean;
    errors?: {
        message?: string;
    }[];
};
