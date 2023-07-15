import { TextFieldProps } from "@mui/material";
import { CommonProps } from "../../types";
export type InputGroupProps = CommonProps & TextFieldProps & {
    text: string;
    icon?: JSX.Element;
};
