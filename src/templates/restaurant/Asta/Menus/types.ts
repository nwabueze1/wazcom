import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

export type MenuProps = {
    restaurant: CoreFosFields;
    setSelectedItemId: (id: number) => void;
    setDisplayDialog: (display: boolean) => void;
    cartChanged: number;
    cart?: CoreCartFields;
};
