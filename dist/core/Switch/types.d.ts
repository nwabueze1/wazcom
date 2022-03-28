/// <reference types="react" />
import { SwitchClassKey, SwitchProps as IosSwitchProps } from "@mui/material/Switch";
import { CommonProps } from "../../types";
export declare type SwitchProps = CommonProps & IosSwitchProps & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    value?: boolean;
    name?: string;
    error?: boolean;
};
export declare type SwitchStylesProps = Partial<Record<SwitchClassKey, string>> & {
    focusVisible?: string;
};
