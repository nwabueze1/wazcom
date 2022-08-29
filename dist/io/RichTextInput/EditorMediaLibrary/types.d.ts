import { ImageProperties } from "../types";
export declare type EditorMediaLibraryProps = {
    mediaOpen: boolean;
    name?: string;
    handleClose: () => void;
    handleSelect: (value: ImageProperties) => void;
};
