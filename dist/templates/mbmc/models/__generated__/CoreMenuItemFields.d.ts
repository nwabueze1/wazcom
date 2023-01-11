export interface CoreMenuItemFields_menuCategory {
    id: string;
    title: string;
}
export interface CoreMenuItemFields {
    uuid: string;
    name: string;
    description: string;
    image_url: string | null;
    options: (string | null)[] | null;
    price: number;
    menuCategory: CoreMenuItemFields_menuCategory | null;
}
