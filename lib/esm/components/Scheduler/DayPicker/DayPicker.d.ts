import * as React from "react";
import { SelectProps } from "@material-ui/core";
interface DayPickerProps extends SelectProps {
    value?: string;
    onChange: (event: React.ChangeEvent<{
        name?: string;
        value: unknown;
    }>) => void;
}
export declare const DayPicker: React.FC<DayPickerProps>;
export {};
