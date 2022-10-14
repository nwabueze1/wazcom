import { FC } from "react";
import { AiOutlinePicture } from "react-icons/ai";

export const renderNavItem = (
    { url, text }: { url: string; text: string },
    mode: "view" | "edit",
    index: number,
    classes: any,
    handleClick?: (route: string) => void,
) =>
    isNotRenderAnchor(url, mode) ? (
        <p
            key={index}
            className={classes.link}
            onClick={(e) => {
                e.stopPropagation();
                clickAction(url, mode, () => {
                    handleClick?.(mode === "edit" ? "nav_links." + String(index) : url);
                });
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

const isNotRenderAnchor = (url: string, mode: "view" | "edit") =>
    url?.startsWith("/") || url === "#" || mode === "edit";

const clickAction = (url: string, mode: "view" | "edit", handleClick?: () => void) => {
    if (url.trim() === '#' || mode === "edit") handleClick?.();
};

export const renderNavLogo = (
    mode: "view" | "edit",
    classes: any,
    handleClick?: (route: string) => void,
    logo?: { src: string; url: string },
) => {
    return (
        <LogoWrapper url={logo?.url ?? ""} mode={mode} handleClick={handleClick}>
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
    mode: "view" | "edit";
    handleClick?: (route: string) => void;
};

const LogoWrapper: FC<LogoWrapperProps> = ({ url, mode, children, handleClick }) => {
    if (isNotRenderAnchor(url, mode)) {
        return (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    clickAction(url, mode, () => { handleClick?.(url) })
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
