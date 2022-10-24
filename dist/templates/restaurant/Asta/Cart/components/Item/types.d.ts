import React from "react";
import { CoreCartFields_cartItems } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";
export declare type CartItemProps = {
    setCartItems: React.Dispatch<React.SetStateAction<CoreCartItemFields[]>>;
    data: CoreCartFields_cartItems;
};
export declare type StyleProps = {
    isOpen?: boolean;
};
