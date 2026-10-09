import { Image, ImageUpdate } from "../../types";

export interface EditMediaProps {
    loading?: boolean;
    image: Image | File;
    handleEdit: (update: ImageUpdate, uuid?: string) => void;
    handleClose: () => void;
}
