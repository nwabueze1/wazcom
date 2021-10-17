import { OutlinedInputProps } from "@mui/material";
export interface EmailFieldsProps extends OutlinedInputProps {
  siteName?: string;
  onChange: (
    event: React.ChangeEvent<{ name: string; value: unknown }>,
  ) => void;
  props: any;
  error?: boolean;
  showInformation?: boolean;
  information?: string;
}
