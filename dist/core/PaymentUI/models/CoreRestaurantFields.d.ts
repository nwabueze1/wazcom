export interface CoreRestaurantFields_bank_info {
    currency: string | null;
    delivery_fee: number | null;
}
export interface CoreRestaurantFields_site {
    uuid: string;
}
export interface CoreRestaurantFields {
    site: CoreRestaurantFields_site;
    uuid: string;
    bank_info: CoreRestaurantFields_bank_info | null;
}
