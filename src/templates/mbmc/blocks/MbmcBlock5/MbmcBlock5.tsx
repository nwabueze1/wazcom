import { useMbmcBlock5Styles } from "./styles";
import { footerData } from "./data";
import { FC, useState } from "react";
import { MbmcBlock5Props } from "./types";
import { displayLogo, displaySections, displaySocials } from "templates/footers/helpers";
import { TFooterSection } from "templates/footers/types";
import clx from "classnames";

export const MbmcBlock5: FC<MbmcBlock5Props> = ({ mode, logo, sections, handleClick, links }) => {
    const [activeElement, setActiveElement] = useState("");
    const classes = useMbmcBlock5Styles();

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
        <div className={classes.mbmcContainer}>
            <div
                className={clx(
                    classes.root,
                    activeElement.toLowerCase() === "footer" &&
                        mode === "edit" &&
                        classes.activeElement,
                )}
                onClick={handleFooterClick}
            >
                <div className={classes.footerContainer}>
                    <div className={classes.logoContainer}>
                        {displayLogo(
                            mode as "view" | "edit",
                            classes,
                            activeElement,
                            handleElementClick,
                            logo,
                        )}
                    </div>

                    {displaySections(
                        mode as "view" | "edit",
                        classes,
                        links as TFooterSection[],
                        activeElement,
                        handleElementClick,
                    )}
                </div>
            </div>
            <p className={classes.footerNote}>
                <span>
                    2022 © All rights reserved . Mrbaker & Mrs cook . Proudly created by Hivedeck
                </span>
            </p>
        </div>
    );
};
