import * as React from "react";
import { BaseTextFieldProps } from "@material-ui/core";
interface TimeSelectorProps extends BaseTextFieldProps {
    onChange: (event: React.ChangeEvent<{
        name?: string;
        value: unknown;
    }>) => void;
}
export declare const TimeSelector: React.FC<TimeSelectorProps>;
export {};
