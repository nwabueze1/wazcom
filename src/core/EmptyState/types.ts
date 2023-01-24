import { CommonProps } from "types";

export type EmptyStateProps = CommonProps & {
    image?: {
        src?: string;
        alt?: string;
    };
    text?: string;
    header?: string;
    button?: {
        display?: boolean;
        text?: string;
        handleClick?: () => void;
    };
};
