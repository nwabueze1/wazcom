import { ImageProperties } from "../types";

export type EditImageProps = {
    image: ImageProperties,
    handleEditImage: (name: string, value: string, device?: string ) => void,
    handleDialogClose: () => void,
    handleInsertImage: () => void
}