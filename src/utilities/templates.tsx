import { FC } from "react";
import { AiOutlinePicture } from "react-icons/ai";

export const renderNavItem = (
    { url, text }: { url: string; text: string },
    mode: "view" | "edit",
    index: number,
    classes: any,
    handleLinkClick?: (route: string) => void,
) =>
    url?.startsWith("/") || mode === "edit" ? (
        <p
            key={index}
            className={classes.link}
            onClick={() => {
                handleLinkClick?.(mode === "edit" ? String(index) : url);
            }}
        >
            {text}
        </p>
    ) : (
        <a
            className={classes.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            {text}
        </a>
    );

const hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";

export const renderNavLogo = (
    mode: "view" | "edit",
    classes: any,
    handleLinkClick?: (route: string) => void,
    logo?: { src: string; url: string },
) => {
    return (
        <LogoWrapper url={logo?.url ?? ""} handleLinkClick={handleLinkClick}>
            {mode === "view" ? (
                <img
                    src={logo?.src ?? hivedeckLogo}
                    className={logo ? classes.logo : classes.hivedeckLogo}
                />
            ) : logo ? (
                <img src={logo?.src} className={classes.logo} />
            ) : (
                <AiOutlinePicture className={classes.logo} />
            )}
        </LogoWrapper>
    );
};

type LogoWrapperProps = {
    url: string;
    handleLinkClick?: (route: string) => void;
};

const LogoWrapper: FC<LogoWrapperProps> = ({ url, children, handleLinkClick }) => {
    if (url === "" || url.startsWith("/")) {
        return (
            <div
                onClick={() => {
                    handleLinkClick?.(url);
                }}
                style={{ cursor: "pointer" }}
            >
                {children}
            </div>
        );
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};
