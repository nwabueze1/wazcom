import { Option } from "../../types";
export type OptionsProps = {
    itemOptions: string[];
    selectedOptions: Option[];
    handleUpdateSelectedOptions: (option: Option) => void;
};
