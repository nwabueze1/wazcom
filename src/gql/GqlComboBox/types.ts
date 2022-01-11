import { ComboBoxInputProps } from "../../io/ComboBoxInput/index";

export type GqlComboBoxProps = ComboBoxInputProps & {
  config: {
    type: "query";
    key?: string;
    name: any;
  };
  addOption?: (
    value: string,
  ) => Promise<{ label?: string; value?: string; status: boolean }>;
  addingOption?: boolean;
}
  // onChange?: (name: string, id: string, value?: string) => void;
  // variables?: { [key: string]: string | number };
// };
