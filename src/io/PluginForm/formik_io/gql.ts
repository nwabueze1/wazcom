import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation gqlUploadFile($file: Upload!, $form_uuid: ID!) {
    uploadFile(input: { file: $file, form_uuid: $form_uuid }) {
      url
    }
  }
`;
