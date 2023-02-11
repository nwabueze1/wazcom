import { CoreAddressFields } from "./CoreAddressFields";
export interface CoreGuestFields {
    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address?: CoreAddressFields;
}
