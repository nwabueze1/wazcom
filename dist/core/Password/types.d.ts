/// <reference types="react" />
import { StyleProps } from "./styles";
import { OutlinedInputProps } from "@material-ui/core";
export interface PasswordFieldsProps extends OutlinedInputProps, StyleProps {
    siteName?: string;
    onChange: (event: React.ChangeEvent<{
        name?: string;
        value: unknown;
    }>) => void;
    props: any;
    error?: boolean;
    showInformation?: boolean;
    information?: string;
}
