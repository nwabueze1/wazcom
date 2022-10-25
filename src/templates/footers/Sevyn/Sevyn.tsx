import { FC } from "react";
import { Copyright } from "../Copyright";
import { displayLogo, displaySections, displaySocials } from "../helpers";
import { FooterProps, TFooterSection } from "../types";
import { useSevynStyles } from "./styles";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

export const Sevyn: FC<FooterProps> = ({ mode = "view", socials, logo, items }) => {
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

    return (
        <div className={classes.root}>
            <div className={classes.footerContent}>
                {displayLogo(mode, classes, "", (route: string) => {}, logo)}
                <div className={classes.footerSections}>
                    {displaySections(
                        mode,
                        classes,
                        items as TFooterSection[],
                        "",
                        (route: string) => {},
                    )}
                </div>
                <div className={classes.footerSocials}>
                    {displaySocials(mode, socialIcons, socials)}
                </div>
            </div>
            <Copyright />
        </div>
    );
};
