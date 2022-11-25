export interface CoreRestaurantFields_bank_info {
    currency: string | null;
    delivery_fee: number | null;
}
export interface CoreRestaurantFields {
    id: string;
    site_uuid: string;
    uuid: string;
    bank_info: CoreRestaurantFields_bank_info | null;
}
