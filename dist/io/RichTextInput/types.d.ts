import { TextareaStyleProps } from "./styles";
import { OutlinedInputProps } from "@mui/material";
export interface TextareaProps extends OutlinedInputProps, TextareaStyleProps {
    error?: boolean;
    errorMessage?: string;
    showInformation?: boolean;
    information?: string;
    maxLength?: number;
    value?: string;
}
