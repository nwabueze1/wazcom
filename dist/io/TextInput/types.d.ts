import { OutlinedInputProps } from "@mui/material";
export declare type TextInputProps = OutlinedInputProps & {
    feedback?: {
        text: string;
        status?: "success" | "neutral" | "error";
    };
} & any;
