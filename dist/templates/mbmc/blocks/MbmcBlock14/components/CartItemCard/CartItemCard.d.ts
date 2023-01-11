import React from "react";
import { CoreCartFields_cartItems } from "../../../../models";
export declare const CartItemCard: React.FC<CoreCartFields_cartItems & {
    currency: string;
    amount: number;
    setContextProps?: (contextProps: {
        [key: string]: any;
    }) => void;
}>;
