import { TFooterSection } from "../types";
import { isNotRenderAnchor } from "./anchor";

export const displaySections = (
    mode: "view" | "edit",
    classes: any,
    sections: TFooterSection[],
    activeElement: string,
    handleClick: (elemeent: string) => void,
) => {
    return sections.map(({ title, links }, index) => (
        <div className={classes.footerSection} key={index}>
            <p className={classes.footerSectionTitle}>{title}</p>

            {links.map(({ text, url }, index) => {
                return isNotRenderAnchor(url, mode) ? (
                    <p className={classes.footerSectionLink} key={index}>
                        {text}
                    </p>
                ) : (
                    <a href={url} className={classes.footerSectionLink} key={index}>
                        {text}
                    </a>
                );
            })}
        </div>
    ));
};
