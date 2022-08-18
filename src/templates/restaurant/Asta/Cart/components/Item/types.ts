import { CoreCartFields, CoreCartFields_cartItems } from "templates/restaurant/types/CoreCartFields";

export type CartItemProps = {
  onClick?: () => void;
  data: CoreCartFields_cartItems
};

export type StyleProps = {
  isOpen?: boolean;
}
