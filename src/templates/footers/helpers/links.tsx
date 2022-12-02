import { TFooterSection, TLink } from "../types";
import { clickAction, isNotRenderAnchor } from "./anchor";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import clx from "classnames";
import { Link } from "../../mbmc/components";

export const displaySections = (
    mode: "view" | "edit",
    classes: any,
    sections: TFooterSection[],
    activeElement: string,
    handleClick: (element: string) => void,
    parentKey?: string,
) => {
    return sections.map(({ name, links }, index) => {
        const sectionId = (parentKey ?? "footer_sections.") + String(index);
        return (
            <div
                className={clx(
                    classes.footerSection,
                    activeElement === sectionId && classes.activeElement,
                )}
                key={index}
            >
                <p
                    className={classes.footerSectionTitle}
                    onClick={(e) => {
                        e.stopPropagation();
                        clickAction(sectionId, mode, () => {
                            handleClick(sectionId);
                        });
                    }}
                >
                    {name}
                </p>
                <div className={classes.footerLinks}>
                    {links.map(({ text, url, icon }, index) => {
                        const linkId = sectionId + ".links." + String(index);
                        return (
                            <div
                                key={index}
                                className={activeElement === linkId && classes.activeElement}
                                style={{ display: "flex" }}
                            >
                                {icon && (
                                    <span className={classes.footerSectionLinkIcon}>
                                        {renderIcon(icon)}
                                    </span>
                                )}
                                &nbsp;
                                {isNotRenderAnchor(url, mode) ? (
                                    <p
                                        className={classes.footerSectionLink}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            clickAction(url, mode, () => {
                                                handleClick(mode === "view" ? url : linkId);
                                            });
                                        }}
                                    >
                                        {text}
                                    </p>
                                ) : (
                                    <Link href={url} className={classes.footerSectionLink}>
                                        {text}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });
};

export const displayLinks = (
    mode: "view" | "edit",
    classes: any,
    links: TLink[],
    activeElement: string,
    handleClick: (element: string) => void,
    step: number,
) => {
    return links.map(({ text, url, icon }, index) => {
        const linkId = "footer_links." + String(index + step);
        return (
            <div
                key={index}
                className={activeElement === linkId && classes.activeElement}
                onClick={(e) => {
                    e.stopPropagation();
                    clickAction(url, mode, () => {
                        handleClick(mode === "view" ? url : linkId);
                    });
                }}
                style={{ display: "flex" }}
            >
                {icon && <span className={classes.footerSectionLinkIcon}>{renderIcon(icon)}</span>}{" "}
                {isNotRenderAnchor(url, mode) ? (
                    <p className={classes.footerSectionLink}>{text}</p>
                ) : (
                    <a href={url} className={classes.footerSectionLink}>
                        {icon && renderIcon(icon)} {text}
                    </a>
                )}
            </div>
        );
    });
};

const renderIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
        case "facebook":
            return <FaFacebookF />;
        case "twitter":
            return <BsTwitter />;
        case "instagram":
            return <FaInstagram />;
        case "linkedin":
            return <RiLinkedinFill />;
        case "youtube":
            return <RiYoutubeFill />;
        default:
            return <FaFacebookF />;
    }
};
