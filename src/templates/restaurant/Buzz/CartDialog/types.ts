import { CoreCartFields } from "templates/restaurant/types/CoreCartFields";
import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

export type ItemType = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  currency: string;
  price: number;
} | null;

export type CartDialogProps = {
  display: boolean;
  close: () => void;
  reloadCart: () => void;
  itemId: number;
  cartItemId?: number;
  cart?: CoreCartFields;
  restaurant: CoreFosFields;
  siteId: number;
};

export type Option = {
  name: string;
  type: string;
  selectedChoices: { name: string; amount: string }[];
};
