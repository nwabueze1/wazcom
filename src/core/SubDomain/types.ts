import { SubDomainStyleProps } from "./styles";
import { OutlinedInputProps } from "@mui/material";

export interface SubDomainProps
  extends OutlinedInputProps,
    SubDomainStyleProps {
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: string }>,
  ) => void;
  props?: any;
  error?: boolean;
  errorMessage?: string;
  showInformation?: boolean;
  information?: string;
  maxLength?: number;
  value?: string;
}
