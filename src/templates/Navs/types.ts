export type NavProps = {
    logo?: string;
    links: { text: string; url?: string; subLinks?: { text: string; url: string } }[];
    socials?: { icon: JSX.Element; url: string }[];
};
