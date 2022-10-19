import { FC } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import clx from "classnames";
import { NavProps, SocialType } from "./types";

export const renderNavLink = (
    { url, text }: { url: string; text: string },
    mode: "view" | "edit",
    index: number,
    classes: any,
    activeElement: string,
    handleClick: (element: string) => void,
) => {
    const id = "nav_links." + String(index);
    return isNotRenderAnchor(url, mode) ? (
        <p
            key={index}
            className={clx(
                classes.link,
                id.toLowerCase() === activeElement && mode === "edit" && classes.activeElement,
            )}
            onClick={(e) => {
                e.stopPropagation();
                clickAction(url, mode, () => {
                    handleClick?.(mode === "edit" ? id : url);
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
};

const hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";

const isNotRenderAnchor = (url: string, mode: "view" | "edit") =>
    url?.startsWith("/") || url === "#" || mode === "edit";

const clickAction = (url: string, mode: "view" | "edit", handleClick?: () => void) => {
    if (mode === "edit" || (mode === "view" && url === '#')) handleClick?.();
};

export const renderNavLogo = (
    mode: "view" | "edit",
    classes: any,
    activeElement: string,
    handleClick: (element: string) => void,
    logo?: { src?: string; url: string },
) => {
    return (
        <LogoWrapper url={logo?.url ?? ""} mode={mode} handleClick={handleClick}>
            {mode === "view" ? (
                <img
                    src={logo?.src ?? hivedeckLogo}
                    className={logo ? classes.logo : classes.hivedeckLogo}
                />
            ) : logo ? (
                <img
                    src={logo?.src}
                    className={clx(
                        classes.logo,
                        activeElement === "nav_logo" && classes.activeElement,
                    )}
                />
            ) : (
                <AiOutlinePicture
                    className={clx(
                        classes.logo,
                        activeElement === "nav_logo" && classes.activeElement,
                    )}
                />
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
                    clickAction(url, mode, () => {
                        handleClick?.(mode === "view" ? url : "nav_logo");
                    });
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

export const displaySocials = (
    socials: NavProps["socials"],
    mode: "view" | "edit",
    classes: any,
    activeElement: string,
    handleClick: (element: string) => void,
) => {
    return socials?.map(({ type, url }, index) => {
        const id = "nav_socials." + String(index);
        if (mode === "edit") {
            return (
                <div
                    className={clx(
                        classes.socialIntegration,
                        activeElement === id && mode === "edit" && classes.activeElement,
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick(id);
                    }}
                    style={{ cursor: "pointer" }}
                >
                    {renderSocialIcon(type)}
                </div>
            );
        }
        return (
            <a
                className={classes.socialIntegration}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                href={url}
            >
                {renderSocialIcon(type)}
            </a>
        );
    });
};

const renderSocialIcon = (type: SocialType) => {
    switch (type) {
        case "FACEBOOK":
            return <FaFacebookF />;
        case "TWITTER":
            return <BsTwitter />;
        default:
            return <FaFacebookF />;
    }
};
