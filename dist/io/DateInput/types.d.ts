import { CommonProps } from "../../types";
export type DateInputProps = CommonProps & {
    classNames?: string;
    hideLabel?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    label?: string;
    name?: string;
    required?: boolean;
    value?: any;
    onChange?: (...args: any) => void;
};
