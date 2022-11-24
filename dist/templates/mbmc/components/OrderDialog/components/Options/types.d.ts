import { Option } from "../../types";
export declare type OptionsProps = {
    itemOptions: string[];
    selectedOptions: Option[];
    handleUpdateSelectedOptions: (option: Option) => void;
};
