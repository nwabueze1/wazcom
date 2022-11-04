export interface CoreCartItemFields_menuItem_menuCategory {
    __typename: "MenuCategory";
    id: string;
    uuid: string;
    title: string;
    status: boolean;
    position: number;
    created_at: any;
    updated_at: any;
}
export interface CoreCartItemFields_menuItem {
    __typename: "MenuItem";
    id: string;
    uuid: string;
    name: string;
    status: boolean | null;
    description: string;
    price: number;
    image_url: string | null;
    created_at: any;
    updated_at: any;
    options: (string | null)[] | null;
    menuCategory: CoreCartItemFields_menuItem_menuCategory | null;
}
export interface CoreCartItemFields {
    __typename: "CartItem";
    id: string;
    detail: string;
    quantity: string;
    options: any | null;
    created_at: any;
    updated_at: any;
    menuItem: CoreCartItemFields_menuItem;
}
