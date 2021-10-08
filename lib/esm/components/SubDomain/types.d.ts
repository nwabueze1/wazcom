/// <reference types="react" />
import { SubDomainStyleProps } from "./styles";
import { OutlinedInputProps } from "@material-ui/core";
export interface SubDomainProps extends OutlinedInputProps, SubDomainStyleProps {
    onChange?: (event: React.ChangeEvent<{
        name?: string;
        value: string;
    }>) => void;
    props?: any;
    error?: boolean;
    errorMessage?: string;
    showInformation?: boolean;
    information?: string;
    maxLength?: number;
    value?: string;
}
