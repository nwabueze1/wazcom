import React from "react";
import { CoreCartFields_cartItems } from "templates/restaurant/types/CoreCartFields";
import { CoreCartItemFields } from "templates/restaurant/types/CoreCartItemFields";

export type CartItemProps = {
    setCartItems: React.Dispatch<React.SetStateAction<CoreCartItemFields[]>>;
    data: CoreCartFields_cartItems;
};

export type StyleProps = {
    isOpen?: boolean;
};
