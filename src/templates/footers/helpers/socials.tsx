import { SocialType } from "../types";
import { clickAction } from "./anchor";

export const displaySocials = (
    mode: "view" | "edit",
    socialIcons: { [key in SocialType]: JSX.Element },
    socials: { type: SocialType; url: string }[],
    activeElement: string,
    handleClick: (element: string) => void,
) => {
    return (socials ?? []).map(({ type, url }, index) => {
        const socialId = "footer_socials." + String(index);
        if (mode === "edit")
            return (
                <div
                    key={index}
                    onClick={() => {
                        clickAction(url, mode, () => {
                            handleClick(mode === "edit" ? socialId : url);
                        });
                    }}
                >
                    {socialIcons[type]}
                </div>
            );

        return (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                {socialIcons[type]}
            </a>
        );
    });
};
