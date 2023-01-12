import React, { FC, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import clx from "classnames";

import { useSidebarListItemStyles } from "./styles";
import { SidebarListItemProps, SidebarLinksProps } from "./types";


export const SidebarListItem: FC<SidebarListItemProps> = ({ sections }) => {
    const location = useLocation();
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
                                <li key={`_${index}__sidebar`} className={classes.innerListItem}>
                                    <Link
                                        className={clx(
                                            classes.link,
                                            (location.pathname.slice(1) === component.slug) && classes.linkActive
                                        )}
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
