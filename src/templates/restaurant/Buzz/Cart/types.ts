import { CoreFosFields } from "templates/restaurant/types/CoreFosFields";

export interface CartProps {
    className?: string;
    changed: number;
    close: () => void;
    restaurant: CoreFosFields;
}
export type CartStyleProps = {
    isCheckout?: boolean;
};
