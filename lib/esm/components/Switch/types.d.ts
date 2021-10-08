/// <reference types="react" />
import { SwitchClassKey, SwitchProps as IosSwitchProps } from "@material-ui/core/Switch";
export declare type SwitchProps = IosSwitchProps & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    value?: boolean;
    name?: string;
    error?: boolean;
};
export declare type SwitchStylesProps = Partial<Record<SwitchClassKey, string>> & {
    focusVisible?: string;
};
