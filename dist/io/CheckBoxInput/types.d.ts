/// <reference types="react" />
import { CommonProps } from "../../types";
export declare type CheckBoxInputProps = CommonProps & {
    label?: string;
    checked?: boolean;
    handleCheckChange?: (event: React.ChangeEvent<{
        checked: boolean;
    }>) => void;
};
