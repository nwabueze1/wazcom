import { OutlinedInputProps } from "@material-ui/core";
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
