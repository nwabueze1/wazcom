/// <reference types="react" />
import { CommonProps } from "../../types";
import { OutlinedInputProps } from "@mui/material";
import { Feedback } from "../../helpers/io";
export declare type TextInputProps = CommonProps & OutlinedInputProps & {
    labelClassName?: string;
    feedback?: Feedback;
    icon?: JSX.Element;
} & any;
