import { CoreMenuFields_options_config } from "templates/mbmc/models";
import { Option } from "../../types";

export type OptionProps = CoreMenuFields_options_config & {
  selectedOptions: Option[];
  handleUpdateSelectedOptions: (option: Option) => void;
};
