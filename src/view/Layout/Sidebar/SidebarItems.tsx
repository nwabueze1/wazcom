import React, { FC, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import clx from "classnames";

import { useSidebarListItemStyles } from "./styles";
import { SidebarListItemProps, SidebarLinksProps } from "./types";


export const SidebarListItem: FC<SidebarListItemProps> = ({ sections }) => {
    const [activeLink, setActiveLink] = useState<SidebarLinksProps>();

    const classes = useSidebarListItemStyles();

    const handleMouseEnter = useCallback(
        (rowIndex: number, index: number) => {
            setActiveLink({ rowIndex, index });
        },
        [activeLink],
    );
    const handleMouseLeave = useCallback(
        (rowIndex: number, index: number) => {
            setActiveLink({ rowIndex, index });
        }, []);

    return (
        <div className={classes.root}>
            <ul className={classes.list}>
                {sections.map((section, sectionIndex) => (
                    <li key={sectionIndex} className={classes.listItem}>
                        <h5 className={classes.sectionLabel}>{section.label}</h5>
                        <ul className={classes.innerList}>
                            {section.components.map((component, index) => (
                                <li key={index} className={classes.innerListItem}>
                                    <Link
                                        className={clx(
                                            classes.link,
                                            activeLink &&
                                            sectionIndex == activeLink?.rowIndex &&
                                            index == activeLink?.index &&
                                            classes.linkActive
                                        )}
                                        onMouseEnter={() => handleMouseEnter(sectionIndex, index)}
                                        onMouseLeave={() => handleMouseLeave(sectionIndex, index)}
                                        to={component.slug}
                                    >
                                        {component.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};
