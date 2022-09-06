import { ImageProperties } from "../types";
export declare type EditImageProps = {
    image: ImageProperties;
    handleEditImage: (name: string, value: string) => void;
    handleDialogClose: () => void;
    handleInsertImage: () => void;
};
