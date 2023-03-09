import { CoreMenuItemFields } from "./CoreMenuItemFields";
export interface CoreCartItemFields {
    uuid: string | null;
    quantity: string;
    detail: string;
    options: any | null;
    menuItem: CoreMenuItemFields;
}
