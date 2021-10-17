import { CommonProps } from "../types";
export declare type CardProps = CommonProps & {
    image: {
        src: string;
        alt?: string;
    };
    title: string;
    content: string;
};
