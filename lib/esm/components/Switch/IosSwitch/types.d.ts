/// <reference types="react" />
import { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
export declare type IoSToggleProps = SwitchProps & {
    name?: string;
    value?: boolean;
    error?: boolean;
    classes?: StyleProps;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare type StyleProps = Partial<Record<SwitchClassKey, string>> & {
    focusVisible?: string;
};
