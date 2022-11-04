import React from "react";
import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
export declare const useDisplayCartItems: () => (cartItemsData: CoreCartFields["cartItems"], open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => JSX.Element;
export declare const parseFloat: (quantity: string) => number;
