/// <reference types="react" />
import { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}
interface Props extends SwitchProps {
    classes: Styles;
}
export declare const CustomizedSwitch: ({ classes, ...props }: Props) => JSX.Element;
export declare function Toggle(): JSX.Element;
export {};
