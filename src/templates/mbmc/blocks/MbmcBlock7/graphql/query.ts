import { gql } from "@apollo/client";

export const GET_INSTAGRAM_IMAGES = gql`
    query GqlGetInstagramImages(
        $platform: SocialPlatform!
        $sociable_type: SociableType!
        $uuid: String!
    ) {
        getInstagramImages(platform: $platform, sociable_type: $sociable_type, uuid: $uuid) {
            images
        }
    }
`;
