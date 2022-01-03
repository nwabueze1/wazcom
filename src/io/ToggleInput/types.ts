export type ToggleInputProps = {
  name: string;
  label?: string;
  value?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  helperText?: string;
};
