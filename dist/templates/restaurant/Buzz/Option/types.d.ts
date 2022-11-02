import { AccordionProps } from "@mui/material";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";
import { CoreRestaurantFields_activeMenus_options_config } from "templates/restaurant/types/CoreRestaurantFields";
import { Option } from "../CartDialog/types";
export declare type OptionProps = CoreRestaurantFields_activeMenus_options_config & Omit<AccordionProps, "children"> & {
    updateSelectedOptions: (option: Option) => void;
    selectedOptions: Option[];
    restaurant: CoreFosFields;
};
