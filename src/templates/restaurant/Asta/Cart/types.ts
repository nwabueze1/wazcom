import React from "react";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

export interface CartProps {
  className?: string;
  changed: number;
  close: () => void;
  restaurant: CoreFosFields;
}

export interface CartBoxProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CartStyleProps = {
  isCheckout?: boolean;
};

export interface DisplayPriceProps {
  name: string,
  amount: number
};