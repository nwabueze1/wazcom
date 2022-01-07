import { TextareaStyleProps } from "./styles";
import { OutlinedInputProps } from "@mui/material";
export declare type RichTextInputProps = OutlinedInputProps & TextareaStyleProps & {
    error?: boolean;
    errorMessage?: string;
    showInformation?: boolean;
    information?: string;
    maxLength?: number;
    value?: string;
};
