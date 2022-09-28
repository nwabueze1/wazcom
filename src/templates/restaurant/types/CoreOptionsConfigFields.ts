/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreOptionsConfigFields
// ====================================================

export interface CoreOptionsConfigFields_selection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreOptionsConfigFields_deselection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreOptionsConfigFields_extras {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreOptionsConfigFields {
    __typename: "OptionsConfig";
    selection: (CoreOptionsConfigFields_selection | null)[];
    deselection: (CoreOptionsConfigFields_deselection | null)[];
    extras: (CoreOptionsConfigFields_extras | null)[];
}
