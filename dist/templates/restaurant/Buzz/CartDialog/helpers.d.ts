import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";
import { CoreMenuFields } from "templates/restaurant/types/CoreMenuFields";
import { Option } from "./types";
export declare const calculateOptionsTotal: (options: Option[], quantity: number) => number;
export declare const parseOptionString: (item: CoreCartItemFields) => string;
export declare const findMenuItem: (menus: CoreMenuFields[], itemId: number) => any;
export declare const changeQuantity: (add: boolean, quantity: number, setQuantity: (quantity: number) => void) => void;
export declare const parseCartItem: (cart: CoreCartFields, cartItemId?: number | undefined) => any[];
