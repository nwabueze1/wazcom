import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";
import { Option } from "../CartDialog/types";
export interface ItemOptionsProps {
    options: string[];
    selectedOptions: Option[];
    itemId: number;
    updateSelectedOptions: (option: Option) => void;
    restaurant: CoreFosFields;
}
