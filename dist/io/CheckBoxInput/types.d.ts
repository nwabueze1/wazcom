/// <reference types="react" />
import { CommonProps } from "../../core/types";
export declare type CheckBoxInputProps = CommonProps & {
    label?: string;
    checked?: boolean;
    handlecheckChange?: (event: React.ChangeEvent<{
        checked: boolean;
    }>) => void;
};
