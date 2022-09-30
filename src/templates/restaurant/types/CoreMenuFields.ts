/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreMenuFields
// ====================================================

export interface CoreMenuFields_options_config_options_selection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuFields_options_config_options_deselection {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuFields_options_config_options_extras {
    __typename: "DishOption";
    name: string;
    amount: number;
}

export interface CoreMenuFields_options_config_options {
    __typename: "OptionsConfig";
    selection: (CoreMenuFields_options_config_options_selection | null)[];
    deselection: (CoreMenuFields_options_config_options_deselection | null)[];
    extras: (CoreMenuFields_options_config_options_extras | null)[];
}

export interface CoreMenuFields_options_config {
    __typename: "MenuOptionsConfig";
    uuid: string;
    name: string;
    type: string;
    options: CoreMenuFields_options_config_options;
}

export interface CoreMenuFields_activeMenuItems_menuCategory {
    __typename: "MenuCategory";
    id: string;
    uuid: string;
    title: string;
    status: boolean;
    position: number;
    created_at: any;
    updated_at: any;
}

export interface CoreMenuFields_activeMenuItems {
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
    menuCategory: CoreMenuFields_activeMenuItems_menuCategory | null;
}

export interface CoreMenuFields_activeMenuCategories {
    __typename: "MenuCategory";
    id: string;
    uuid: string;
    title: string;
    status: boolean;
    position: number;
    created_at: any;
    updated_at: any;
}

export interface CoreMenuFields_times_scheduleItems {
    __typename: "ScheduleItem";
    id: string;
    day: string;
    start_time: any | null;
    end_time: any | null;
    created_at: any;
    updated_at: any;
}

export interface CoreMenuFields_times {
    __typename: "Schedule";
    id: string;
    name: string | null;
    created_at: any;
    updated_at: any;
    scheduleItems: (CoreMenuFields_times_scheduleItems | null)[];
}

export interface CoreMenuFields {
    id: string;
    uuid: string;
    name: string;
    is_active: boolean | null;
    created_at: any;
    updated_at: any;
    options_config: (CoreMenuFields_options_config | null)[] | null;
    activeMenuItems: CoreMenuFields_activeMenuItems[] | null;
    activeMenuCategories: CoreMenuFields_activeMenuCategories[] | null;
    times: CoreMenuFields_times | null;
}
