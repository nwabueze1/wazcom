import { Image, ImageUpdate } from "gql/GqlMediaLibrary/types";
export interface EditMediaProps {
    loading?: boolean;
    image: Image | File;
    handleEdit: (update: ImageUpdate) => void;
    handleClose: () => void;
}
