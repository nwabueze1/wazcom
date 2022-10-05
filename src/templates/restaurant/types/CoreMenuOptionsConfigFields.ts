/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreMenuOptionsConfigFields
// ====================================================

export interface CoreMenuOptionsConfigFields_options_selection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuOptionsConfigFields_options_deselection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuOptionsConfigFields_options_extras {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuOptionsConfigFields_options {
    __typename: "OptionsConfig";
    selection: (CoreMenuOptionsConfigFields_options_selection | null)[];
    deselection: (CoreMenuOptionsConfigFields_options_deselection | null)[];
    extras: (CoreMenuOptionsConfigFields_options_extras | null)[];
}

export interface CoreMenuOptionsConfigFields {
    __typename: "MenuOptionsConfig";
    uuid: string;
    name: string;
    type: string;
    options: CoreMenuOptionsConfigFields_options;
}
