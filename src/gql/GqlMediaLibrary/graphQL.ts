import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query GetImages($first: Int, $page: Int, $orderBy: [OrderByClause!]) {
    images(first: $first, page: $page, orderBy: $orderBy) {
      data {
        id
        url
        created_at
      }
    }
  }
`;

export const GET_S3_IMAGES = gql`
  query getS3Images($count: Int, $startAfter: String) {
    getS3Images(count: $count, startAfter: $startAfter) {
      id
      title
      url
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($input: ImageUploadInput!) {
    uploadImage(input: $input) {
      id
      url
      created_at
    }
  }
`;
