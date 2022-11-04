import { BlockCta } from "templates/mbmc/types";

export type CardProps = {
    heading?: string | JSX.Element;
    description?: string;
    image?: string;
    ctas?: BlockCta[];
};

export type StyleProps = {
    isOpen?: boolean;
};
