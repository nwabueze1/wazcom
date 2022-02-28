import { ImageDataType } from "gql/GqlMediaLibrary/types";

export interface DeleteMediaProps {
    display: boolean;
    media?: ImageDataType;
    handleClose: () => void;
    handleDelete: () => void;
}