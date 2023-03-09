/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreRestaurantFields
// ====================================================

export interface CoreRestaurantFields_bank_info {
  currency: string | null;
  bank_name: string | null;
  account_name: string | null;
  account_number: string | null;
  delivery_fee: number | null;
}

export interface CoreRestaurantFields_location {
  address1: string;
  address2: string | null;
  country: string;
  state: string;
}

export interface CoreRestaurantFields_activeMenus_options_config_options_selection {
  __typename: "DishOption";
  name: string;
  amount: number;
}

export interface CoreRestaurantFields_activeMenus_options_config_options_deselection {
  __typename: "DishOption";
  name: string;
  amount: number;
}

export interface CoreRestaurantFields_activeMenus_options_config_options_extras {
  __typename: "DishOption";
  name: string;
  amount: number;
}

export interface CoreRestaurantFields_activeMenus_options_config_options {
  __typename: "OptionsConfig";
  selection: (CoreRestaurantFields_activeMenus_options_config_options_selection | null)[];
  deselection: (CoreRestaurantFields_activeMenus_options_config_options_deselection | null)[];
  extras: (CoreRestaurantFields_activeMenus_options_config_options_extras | null)[];
}

export interface CoreRestaurantFields_activeMenus_options_config {
  __typename: "MenuOptionsConfig";
  uuid: string;
  name: string;
  type: string;
  options: CoreRestaurantFields_activeMenus_options_config_options;
}

export interface CoreRestaurantFields_activeMenus_activeMenuItems_menuCategory {
  id: string;
  uuid: string;
  title: string;
  status: boolean;
  position: number;
  created_at: any;
  updated_at: any;
}

export interface CoreRestaurantFields_activeMenus_activeMenuItems {
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
  menuCategory: CoreRestaurantFields_activeMenus_activeMenuItems_menuCategory | null;
}

export interface CoreRestaurantFields_activeMenus_activeMenuCategories {
  id: string;
  uuid: string;
  title: string;
  status: boolean;
  position: number;
  created_at: any;
  updated_at: any;
}

export interface CoreRestaurantFields_activeMenus_times_scheduleItems {
  __typename: "ScheduleItem";
  id: string;
  day: string;
  start_time: any | null;
  end_time: any | null;
  created_at: any;
  updated_at: any;
}

export interface CoreRestaurantFields_activeMenus_times {
  __typename: "Schedule";
  id: string;
  name: string | null;
  created_at: any;
  updated_at: any;
  scheduleItems: (CoreRestaurantFields_activeMenus_times_scheduleItems | null)[];
}

export interface CoreRestaurantFields_activeMenus {
  id: string;
  uuid: string;
  name: string;
  is_active: boolean | null;
  created_at: any;
  updated_at: any;
  options_config: (CoreRestaurantFields_activeMenus_options_config | null)[] | null;
  activeMenuItems: CoreRestaurantFields_activeMenus_activeMenuItems[] | null;
  activeMenuCategories: CoreRestaurantFields_activeMenus_activeMenuCategories[] | null;
  times: CoreRestaurantFields_activeMenus_times | null;
}

export interface CoreRestaurantFields_openingTimes_scheduleItems {
  __typename: "ScheduleItem";
  id: string;
  day: string;
  start_time: any | null;
  end_time: any | null;
  created_at: any;
  updated_at: any;
}

export interface CoreRestaurantFields_openingTimes {
  __typename: "Schedule";
  id: string;
  name: string | null;
  created_at: any;
  updated_at: any;
  scheduleItems: (CoreRestaurantFields_openingTimes_scheduleItems | null)[];
}

export interface CoreRestaurantFields_deliveryTimes_scheduleItems {
  __typename: "ScheduleItem";
  id: string;
  day: string;
  start_time: any | null;
  end_time: any | null;
  created_at: any;
  updated_at: any;
}

export interface CoreRestaurantFields_deliveryTimes {
  __typename: "Schedule";
  id: string;
  name: string | null;
  created_at: any;
  updated_at: any;
  scheduleItems: (CoreRestaurantFields_deliveryTimes_scheduleItems | null)[];
}

export interface CoreRestaurantFields {
  id: string;
  uuid: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  cover_image: string | null;
  bank_info: CoreRestaurantFields_bank_info | null;
  location: CoreRestaurantFields_location | null;
  created_at: any;
  updated_at: any;
  activeMenus: CoreRestaurantFields_activeMenus[] | null;
  openingTimes: CoreRestaurantFields_openingTimes | null;
  deliveryTimes: CoreRestaurantFields_deliveryTimes | null;
}
