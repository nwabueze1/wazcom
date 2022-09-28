/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Type } from "./GlobalTypes/globaltypes";

// ====================================================
// GraphQL fragment: CorePageFields
// ====================================================

export interface CorePageFields_site_user {
    __typename: "User";
    id: string;
    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    email_verified_at: any | null;
    phone_number: string | null;
    avatar: string | null;
    created_at: any;
    updated_at: any;
    deleted_at: any | null;
}

export interface CorePageFields_site {
    __typename: "Site";
    id: string;
    uuid: string;
    name: string;
    display_name: string | null;
    description: string | null;
    domain: string | null;
    cover_image: string | null;
    currency: string | null;
    user_id: string;
    updated_at: any;
    created_at: any;
    user: CorePageFields_site_user | null;
}

export interface CorePageFields {
    __typename: "Page";
    id: string;
    uuid: string;
    type: Type;
    title: string;
    route: string;
    type_uuid: string;
    description: string | null;
    metadata: string | null;
    created_at: any;
    updated_at: any;
    site: CorePageFields_site;
}
