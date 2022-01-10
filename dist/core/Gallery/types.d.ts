import { CommonProps } from "../types";
export declare type GalleryProps = CommonProps & {
    items: {
        image: {
            src: string;
            alt: string;
        };
        id: number;
    }[];
    text?: string;
    onSelect?: (id: number | null) => void;
};
