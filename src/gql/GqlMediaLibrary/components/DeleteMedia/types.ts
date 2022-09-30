import { Image } from "gql/GqlMediaLibrary/types";

export interface DeleteMediaProps {
    display: boolean;
    loading?: boolean;
    media?: Image;
    handleClose: () => void;
    handleDelete: () => void;
}
