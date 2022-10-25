import { TFooterSection, TLink } from "../types";
import { clickAction, isNotRenderAnchor } from "./anchor";

export const displaySections = (
    mode: "view" | "edit",
    classes: any,
    sections: TFooterSection[],
    activeElement: string,
    handleClick: (element: string) => void,
) => {
    return sections.map(({ title, links }, index) => {
        const sectionId = "footer_sections." + String(index);
        return (
            <div className={classes.footerSection} key={index}>
                <p
                    className={classes.footerSectionTitle}
                    onClick={() =>
                        clickAction(sectionId, mode, () => {
                            handleClick(sectionId);
                        })
                    }
                >
                    {title}
                </p>

                {links.map(({ text, url }, index) => {
                    const linkId = sectionId + ".links." + String(index);
                    return isNotRenderAnchor(url, mode) ? (
                        <p
                            className={classes.footerSectionLink}
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
                className={classes.footerSectionLink}
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
