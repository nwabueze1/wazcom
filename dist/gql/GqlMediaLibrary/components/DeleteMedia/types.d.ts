import { Image } from "../../types";
export interface DeleteMediaProps {
    display: boolean;
    loading?: boolean;
    media?: Image;
    handleClose: () => void;
    handleDelete: () => void;
}
