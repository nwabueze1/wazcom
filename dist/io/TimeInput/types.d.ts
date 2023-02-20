import { CommonProps } from "../../types";
export type TimeInputProps = CommonProps & {
    classNames?: string;
    popupClassName?: string;
    hideLabel?: boolean;
    label?: string;
    name?: string;
    required?: boolean;
    showSecond?: boolean;
    use12Hours?: boolean;
    format?: string;
    onChange?: (...args: any) => void;
};
