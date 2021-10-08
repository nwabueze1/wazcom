import { FC } from "react";
import * as React from "react";
interface SelectorProps {
    items: Array<string>;
    onChange?: (event: React.ChangeEvent<{
        name?: string;
        value: unknown;
    }>) => void;
    name: string;
    label?: string;
    value?: string;
    defaultOption: string;
    error: boolean;
    disabled?: boolean;
}
export declare const Selector: FC<SelectorProps>;
export {};
