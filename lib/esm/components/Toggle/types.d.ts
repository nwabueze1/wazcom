import { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
export interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}
export interface Props extends SwitchProps {
    classes?: Styles;
}
