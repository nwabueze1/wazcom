import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
export declare const changeQuantity: (add: boolean, quantity: number, setQuantity: (quantity: number) => void) => void;
export declare const parseCartItem: (cart: CoreCartFields, cartItemId?: number | undefined) => any[];
