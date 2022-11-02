import { FC, useState } from "react";
import { useBlaiseStyles } from "./styles";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { FooterProps, TLink } from "../types";
import { displayLinks, displayLogo, displaySocials } from "../helpers";
import { Copyright } from "../Copyright";
import clx from "classnames";

export const Blaise: FC<FooterProps> = ({ mode = "view", logo, socials, links, handleClick }) => {
    const [activeElement, setActiveElement] = useState("");
    const classes = useBlaiseStyles();

    const renderSocialIcon = (Icon: JSX.Element) => (
        <div className={classes.footerSocialParent}>{Icon}</div>
    );

    const midIndex = links.length > 1 ? Math.ceil(links.length / 2) : 1;

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
                <div className={classes.footerSection}>
                    <div className={classes.footerSectionLinks}>
                        {displayLinks(
                            mode,
                            classes,
                            (links as TLink[]).slice(0, midIndex),
                            activeElement,
                            handleElementClick,
                            0
                        )}
                    </div>
                    <div className={classes.footerSectionLinks}>
                        {displayLinks(
                            mode,
                            classes,
                            (links as TLink[]).slice(midIndex),
                            activeElement,
                            handleElementClick,
                            midIndex
                        )}
                    </div>
                </div>
                {displayLogo(mode, classes, activeElement, handleElementClick, logo)}
            </div>
            <Copyright />
        </div>
    );
};
