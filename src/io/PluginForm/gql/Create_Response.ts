import { gql } from "@apollo/client";

export const Create_Response = gql`
  mutation CreateResponse($form_uuid: ID!, $response: Mixed!) {
    createResponse(input: { form_uuid: $form_uuid, response: $response }) {
      submission_text
    }
  }
`;
