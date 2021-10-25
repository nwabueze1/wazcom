import { CommonProps } from "../types";

export type SelectorProps =  CommonProps & {
    items: Array<string>;
    onChange?: (
      event: React.ChangeEvent<{ name?: string; value: unknown }>,
    ) => void;
    name: string;
    label?: string;
    value?: string;
    defaultOption: string;
    error: boolean;
    disabled?: boolean;
}