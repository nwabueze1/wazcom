/// <reference types="react" />
import { BlockCta } from "templates/mbmc/types";
export declare type MbmcCardProps = {
    heading?: string | JSX.Element;
    description?: string;
    image?: string;
    ctas?: BlockCta[];
    scrollableParent?: boolean;
    className?: string;
    classNames?: {
        [key: string]: string;
    };
    onClick?: () => void;
};
