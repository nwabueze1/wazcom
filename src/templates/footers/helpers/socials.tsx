import { SocialType } from "../types";

export const displaySocials = (
    mode: "view" | "edit",
    socialIcons: { [key in SocialType]: JSX.Element },
    socials?: { type: SocialType; url: string }[],
) => {
    return (socials ?? []).map(({ type, url }, index) => {
        if (mode === "edit") return <div key={index}>{socialIcons[type]}</div>;

        return (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                {socialIcons[type]}
            </a>
        );
    });
};
