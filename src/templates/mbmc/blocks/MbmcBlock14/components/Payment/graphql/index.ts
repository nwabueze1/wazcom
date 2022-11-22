import { gql } from "@apollo/client";

export const GET_PAYMENT_METHODS = gql`
    query GqlGetPaymentMethods($service_uuid: ID!) {
        getPaymentMethod(service_uuid: $service_uuid) {
            type
            config
            instruction
        }
    }
`;