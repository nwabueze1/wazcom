import { CommonProps } from "../../types";
export declare type CarouselProps = CommonProps & {
    items: {
        label: string;
        image: {
            src: string;
            alt?: string;
        };
    }[];
};
