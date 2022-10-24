import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";
export declare type ItemType = {
    id: number;
    name: string;
    description: string;
    image_url: string;
    currency: string;
    price: number;
} | null;
export declare type CartDialogProps = {
    display: boolean;
    close: () => void;
    reloadCart: () => void;
    itemId: number;
    cartItemId?: number;
    cart?: CoreCartFields;
    restaurant: CoreFosFields;
    siteId: number;
};
export declare type Option = {
    name: string;
    type: string;
    selectedChoices: {
        name: string;
        amount: string;
    }[];
};
