export declare type FooterProps = {
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
    logo?: {
        src?: string;
        text?: string;
        url: string;
    };
    items: TFooterSection[] | TLink[];
    socials?: {
        type: SocialType;
        url: string;
    }[];
};
export declare type SocialType = "FACEBOOK" | "TWITTER" | "YOUTUBE" | "LINKEDIN" | "INSTAGRAM";
export declare type TLink = {
    text: string;
    url: string;
};
export declare type TFooterSection = {
    title: string;
    links: TLink[];
};
