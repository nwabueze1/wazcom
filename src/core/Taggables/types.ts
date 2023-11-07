import { AutocompleteProps } from "@mui/material";

export type TaggablesProps = Omit<
  AutocompleteProps<any, true, true, true>,
  "onChange" | "renderInput" | "value"
> & {
  name?: string;
  label?: string;
  onChange?: (data: { name: string; value: any }) => void;
  className?: string;
  classNames?: {
    [key: string]: string | { [key: string]: string } | undefined;
  };
  value?: string[];
  error?: boolean;
  externalChip: boolean;
  feedback?: {
    text: string;
    status?: "success" | "neutral" | "error";
  };
};
