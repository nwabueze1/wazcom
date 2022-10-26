import { FC, useState } from "react";
import { Copyright } from "../Copyright";
import { displayLogo, displaySections, displaySocials } from "../helpers";
import { FooterProps, TFooterSection } from "../types";
import { useNoirStyles } from "./styles";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { ImInstagram, ImYoutube } from "react-icons/im";

export const Noir: FC<FooterProps> = ({ mode = "view", handleClick, logo, socials, items }) => {
    const [activeElement, setActiveElement] = useState("");
    const classes = useNoirStyles();
    const socialIcons = {
        FACEBOOK: <FaFacebookSquare className={classes.footerSocialIcon} />,
        TWITTER: <BsTwitter className={classes.footerSocialIcon} />,
        LINKEDIN: <BsLinkedin className={classes.footerSocialIcon} />,
        YOUTUBE: <ImYoutube className={classes.footerSocialIcon} />,
        INSTAGRAM: <ImInstagram className={classes.footerSocialIcon} />,
    };

    const handleElementClick = (element: string) => {
        setActiveElement(element);
        handleClick?.(element);
    };

    return (
        <div className={classes.root}>
            <div className={classes.footerContent}>
                <div className={classes.footerLogoSocials}>
                    {displayLogo(mode, classes, activeElement, handleElementClick, logo)}
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
                {displaySections(
                    mode,
                    classes,
                    items as TFooterSection[],
                    activeElement,
                    handleElementClick,
                )}
            </div>
            <Copyright />
        </div>
    );
};
