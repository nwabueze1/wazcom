import { CoreMenuItemFields } from "./CoreMenuItemFields";
export interface CoreCartItemFields {
    uuid: string | undefined;
    quantity: number;
    detail: string;
    options: string;
    menuItem: CoreMenuItemFields;
}
