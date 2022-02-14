import { CommonProps } from "../../types";
import { OutlinedInputProps } from "@mui/material";
export declare type TextInputProps = CommonProps & OutlinedInputProps & {
    feedback?: {
        text: string;
        status?: "success" | "neutral" | "error";
    };
} & any;
