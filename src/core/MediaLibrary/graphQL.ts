import { gql } from "@apollo/client";

export const GET_S3_IMAGES = gql`
    query getS3Images($count: Int, $startAfter: String) {
        getS3Images(count: $count, startAfter: $startAfter) {
            name
            path
        }
    }
`;

export const UPLOAD_IMAGE = gql`
    mutation uploadImage($image: Upload!, $config: AwsConfig) {
        uploadImage(config: $config, image: $image) {
            name
            url
        }
    }
`;
