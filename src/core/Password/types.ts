import { StyleProps } from "./styles";
import { OutlinedInputProps } from "@mui/material";
export interface PasswordFieldsProps extends OutlinedInputProps, StyleProps {
  siteName?: string;
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => void;
  props: any;
  error?: boolean;
  showInformation?: boolean;
  information?: string;
}
