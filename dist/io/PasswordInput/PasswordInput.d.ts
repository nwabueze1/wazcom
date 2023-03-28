import { FC } from "react";
import { ConfigProps, TextFieldProps } from "./types";
export declare const initialConfig: {
    uppercase: {
        limit: number;
        required: boolean;
    };
    symbol: {
        limit: number;
        required: boolean;
    };
    length: {
        limit: number;
        required: boolean;
    };
    digit: {
        limit: number;
        required: boolean;
    };
};
export declare const PasswordInput: FC<TextFieldProps & {
    config?: Partial<ConfigProps>;
}>;
