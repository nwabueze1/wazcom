import { CommonProps } from "../../types";
export type TimeInputProps = CommonProps & {
    classNames?: string;
    popupClassName?: string;
    hideLabel?: boolean;
    label?: string;
    name?: string;
    startTimeName?: string;
    endTimeName?: string;
    required?: boolean;
    variant?: string;
    onChange?: (...args: any) => void;
};
