import { CommonProps } from "../../types";

export type CardProps = CommonProps & {
    image: {
        src: string;
        alt?: string;
    };
    title: string;
    content: string;
    align: "left" | "center" | "right";
    buttons?: {
        values: string[];
        handleClick?: (path?: string) => void;
        size?: "small" | "large";
    };
};
