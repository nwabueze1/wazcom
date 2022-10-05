import { CoreAddressFields } from "./CoreAddressFields";
import { CoreCartFields } from "./CoreCartFields";
import { CoreCustomerFields } from "./CoreCustomerFields";
import { CoreOrderFields } from "./CoreOrderFields";
import { CoreRestaurantFields } from "./CoreRestaurantFields";

export type CoreFosFields = {
    restaurant: CoreRestaurantFields & { isOpen?: boolean };
    cart?: CoreCartFields;
    customer?: CoreCustomerFields;
    address?: CoreAddressFields;
    order?: CoreOrderFields;
};
