import { OutlinedInputProps } from "@mui/material";

export type TextInputProps = OutlinedInputProps & {
    feedback?: {
        text: string;
        status?: "success" | "neutral" | "error"
    }
} & any;