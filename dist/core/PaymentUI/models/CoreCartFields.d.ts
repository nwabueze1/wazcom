import { CoreCartItemFields } from "./CoreCartItemFields";
import { CoreGuestFields } from "./CoreGuestFields";
import { CoreOrderFields } from "./CoreOrderFields";
import { CoreRestaurantFields } from "./CoreRestaurantFields";
export interface CoreCartFields {
    uuid: string;
    currency: string;
    expires: any;
    currentStep?: number;
    guest?: CoreGuestFields;
    order?: CoreOrderFields;
    cartItems: CoreCartItemFields[] | null;
    restaurant: CoreRestaurantFields;
}
