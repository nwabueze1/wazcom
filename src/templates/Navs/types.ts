export type NavProps = {
    mode?: "view" | "edit";
    handleClick?: (route: string) => void;
    logo?: { src: string, url: string };
    links: { text: string; url: string; subLinks?: { text: string; url: string } }[];
    socials?: { icon: JSX.Element; url: string }[];
};
