import { TFooterSection, TLink } from "../types";
import { clickAction, isNotRenderAnchor } from "./anchor";
import clx from "classnames";

export const displaySections = (
    mode: "view" | "edit",
    classes: any,
    sections: TFooterSection[],
    activeElement: string,
    handleClick: (element: string) => void,
) => {
    return sections.map(({ name, links }, index) => {
        const sectionId = "footer_sections." + String(index);
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
                    onClick={() =>
                        clickAction(sectionId, mode, () => {
                            handleClick(sectionId);
                        })
                    }
                >
                    {name}
                </p>

                {links.map(({ text, url }, index) => {
                    const linkId = sectionId + ".links." + String(index);
                    return isNotRenderAnchor(url, mode) ? (
                        <p
                            className={clx(
                                classes.footerSectionLink,
                                activeElement === linkId && classes.activeElement,
                            )}
                            key={index}
                            onClick={() =>
                                clickAction(url, mode, () => {
                                    handleClick(mode === "view" ? url : linkId);
                                })
                            }
                        >
                            {text}
                        </p>
                    ) : (
                        <a href={url} className={classes.footerSectionLink} key={index}>
                            {text}
                        </a>
                    );
                })}
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
) => {
    return links.map(({ text, url }, index) => {
        const linkId = "footer_links." + String(index);
        return isNotRenderAnchor(url, mode) ? (
            <p
                className={clx(classes.footerSectionLink, activeElement === linkId && classes.activeElement)}
                key={index}
                onClick={() =>
                    clickAction(url, mode, () => {
                        handleClick(mode === "view" ? url : linkId);
                    })
                }
            >
                {text}
            </p>
        ) : (
            <a href={url} className={classes.footerSectionLink} key={index}>
                {text}
            </a>
        );
    });
};
