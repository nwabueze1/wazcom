export type FooterProps = {
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
    logo?: { src?: string; text?: string; url: string };
    links: TFooterSection[] | TLink[];
    socials?: {
        type: SocialType;
        url: string;
    }[];
};

export type SocialType = "FACEBOOK" | "TWITTER" | "YOUTUBE" | "LINKEDIN" | "INSTAGRAM"

export type TLink = { text: string; url: string };

export type TFooterSection = { name: string; links: TLink[] };
