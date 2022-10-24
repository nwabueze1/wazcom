import { FC } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { isNotRenderAnchor } from "./anchor";

export const displayLogo = (
    mode: "view" | "edit",
    classes: any,
    activeElement: string,
    handleClick?: (element: string) => void,
    logo?: { src?: string; text?: string; url: string },
) => (
    <LogoWrapper mode={mode} url={logo?.url ?? "#"} handleClick={handleClick}>
        <Logo mode={mode} classes={classes} {...logo} />
    </LogoWrapper>
);

interface LogoProps {
    mode: "view" | "edit";
    src?: string;
    text?: string;
    classes: any;
}

const hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";

const Logo: FC<LogoProps> = ({ mode, src, text, classes }) => (
    <div className={classes.footerLogoParent}>
        {mode === "edit" && !src ? (
            <AiOutlinePicture className={classes.footerLogo} />
        ) : (
            <img src={src ?? hivedeckLogo} alt="" className={classes.footerLogo} />
        )}
        {text && <p className={classes.footerLogoText}>{text}</p>}
    </div>
);

interface LogoWrapperProps {
    mode: "view" | "edit";
    url: string;
    handleClick?: (route: string) => void;
}

const LogoWrapper: FC<LogoWrapperProps> = ({ mode, url, children }) => {
    if (isNotRenderAnchor(url, mode)) return <div>{children}</div>;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};
