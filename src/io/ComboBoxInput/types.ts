export interface ComboBoxInputProps {
  name: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
  error?: boolean;
  comboData?: string[];
  placeholder?: string;
  value?: string;
}
