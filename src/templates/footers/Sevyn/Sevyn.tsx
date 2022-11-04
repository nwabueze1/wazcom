import { FC, useState } from "react";
import { Copyright } from "../Copyright";
import { displayLogo, displaySections, displaySocials } from "../helpers";
import { FooterProps, TFooterSection } from "../types";
import { useSevynStyles } from "./styles";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import clx from "classnames";

export const Sevyn: FC<FooterProps> = ({ mode = "view", socials, logo, handleClick, links }) => {
    const [activeElement, setActiveElement] = useState("");
    const classes = useSevynStyles();

    const renderSocialIcon = (Icon: JSX.Element) => (
        <div className={classes.footerSocialParent}>{Icon}</div>
    );

    const socialIcons = {
        FACEBOOK: renderSocialIcon(<ImFacebook className={classes.footerSocialIcon} />),
        TWITTER: renderSocialIcon(<BsTwitter className={classes.footerSocialIcon} />),
        INSTAGRAM: renderSocialIcon(<FaInstagram className={classes.footerSocialIcon} />),
        LINKEDIN: renderSocialIcon(<RiLinkedinFill className={classes.footerSocialIcon} />),
        YOUTUBE: renderSocialIcon(<RiYoutubeFill className={classes.footerSocialIcon} />),
    };

    const handleFooterClick = () => {
        if (mode === "edit") {
            setActiveElement("footer");
            handleClick?.("footer");
        }
    };

    const handleElementClick = (element: string) => {
        setActiveElement(element);
        handleClick?.(element);
    };

    return (
        <div
            className={clx(
                classes.root,
                activeElement.toLowerCase() === "footer" &&
                    mode === "edit" &&
                    classes.activeElement,
            )}
            onClick={handleFooterClick}
        >
            <div className={classes.footerContent}>
                {displayLogo(mode, classes, activeElement, handleElementClick, logo)}
                <div className={classes.footerSections}>
                    {displaySections(
                        mode,
                        classes,
                        links as TFooterSection[],
                        activeElement,
                        handleElementClick,
                    )}
                </div>
                <div className={classes.footerSocials}>
                    {displaySocials(
                        mode,
                        socialIcons,
                        socials ?? [],
                        classes,
                        activeElement,
                        handleElementClick,
                    )}
                </div>
            </div>
            <Copyright />
        </div>
    );
};
