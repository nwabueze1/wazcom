import { gql } from "@apollo/client";
import { CORE_ADDRESS_FIELDS, CORE_GUEST_FIELDS } from "../../../../../models";

export const CREATE_ADDRESS = gql`
    ${CORE_ADDRESS_FIELDS}
    mutation GqlCreateAddress(
        $guest_uuid: ID!
        $phone: String!
        $addressline1: String!
        $city: String!
        $state: String!
        $country: String
    ) {
        createAddress(
            guest_uuid: $guest_uuid
            phone: $phone
            addressline1: $addressline1
            city: $city
            state: $state
            country: $country
        ) {
            ...CoreAddressFields
        }
    }
`;

export const UPDATE_GUEST = gql`
    ${CORE_GUEST_FIELDS}
    GqlUpdateGuest($cart_uuid: ID!, $email: String!, $firstname: String!, $lastname: String!) {
        updateGuest(cart_uuid: $cart_uuid, email: $email, firstname: $firstname, lastname: $lastname) {
            ...CoreGuestFields
        }
    }
`;
