import { Moment } from "moment";
import { CommonProps } from "../../types";

export type TimeInputProps = CommonProps & {
    classNames?: string;
    popupClassName?:string;
    hideLabel?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    label?: string;
    name?: string;
    required?: boolean;
    showSecond?:boolean;
    use12Hours?:boolean;
    format?:string;
    value?: string;
    defaultValue?: Moment;

    onChange?: (...args: any) => void;
}
