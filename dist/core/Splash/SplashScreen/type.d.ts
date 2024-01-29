export type SplashScreenPropsType = {
    header?: {
        title?: string;
        subtitle?: string;
    };
    body?: {
        title?: string;
        subtitle?: string;
        image?: {
            src: string;
            alt: string;
            height?: number;
            width?: number;
        };
    };
    cta?: {
        title?: string;
        onClick?: () => void;
    };
    connecting?: boolean;
    classNames?: Partial<Record<"root" | "button" | "body" | "header" | "image" | "heading" | "subheading" | "bodyTextContainer" | "bodySubtitle", string>>;
};
