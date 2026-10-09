/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreMenuItemFields
// ====================================================

export interface CoreMenuItemFields_menuCategory {
  id: string;
  uuid: string;
  title?: string;
}

export interface CoreMenuItemFields {
  uuid?: string;
  name: string;
  description?: string;
  options?: string[];
  slug?: string;
  price: number;
  image?: Record<string, string>;
  menuCategory?: CoreMenuItemFields_menuCategory;
}
