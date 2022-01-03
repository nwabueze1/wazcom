/// <reference types="react" />
import { OutlinedInputProps } from "@mui/material";
export declare type EmailInputProps = OutlinedInputProps & {
    onChange: (event: React.ChangeEvent<{
        name: string;
        value: unknown;
    }>) => void;
    props: any;
    error?: boolean;
    showInformation?: boolean;
    information?: string;
};
