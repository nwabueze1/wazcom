/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreMenuItemFields
// ====================================================

export interface CoreMenuItemFields_menuCategory {
    __typename: "MenuCategory";
    id: string;
    uuid: string;
    title: string;
    status: boolean;
    position: number;
    created_at: any;
    updated_at: any;
}

export interface CoreMenuItemFields {
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
    menuCategory: CoreMenuItemFields_menuCategory | null;
}
