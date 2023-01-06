import React, { FC, useState, useCallback } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import clx from "classnames";

import { useSidebarListItemStyles } from "./styles";
import { SidebarListItemProps } from "./types";
import { Button } from "../../../core";


export const SidebarListItem: FC<SidebarListItemProps> = ({ title, sections }) => {
    const [isVisible, setVisibility] = useState(true);
    const [activeLink, setActiveLink] = useState<{
        index: number;
        rowIndex: number;
    }>();

    const classes = useSidebarListItemStyles();

    const showSelection = () => {
        //
    };
    const handleMouseEnter = useCallback(
        (rowIndex: number, index: number) => {
            setActiveLink({ rowIndex, index });
        },
        [activeLink],
    );
    const handleMouseLeave = useCallback((rowIndex: number, index: number) => {
        rowIndex;
        index;
    }, []);

    const toggleSelection = useCallback(() => {
        setVisibility(!isVisible);
    }, [isVisible]);

    return (
        <div className={classes.root}>
            <Button
                className={classes.button}
                iconSpacing={10}
                rightIcon={
                    <RiArrowDownSFill
                        className={classes.chevronIcon}
                        style={{ transform: isVisible ? "rotate(180deg)" : "" }}
                    />
                }
                onClick={toggleSelection}
            >
                {title}
            </Button>
            <ul className={clx(classes.list, isVisible ? classes.isVisible : classes.isNotVisible)}>
                {sections.map(({ label: sectionLabel, components }, sectionIndex) => {
                    return (
                        <li
                            key={sectionIndex}
                            className={classes.listItem}
                            onClick={() => showSelection()}
                        >
                            <h5 className={classes.sectionLabel}>{sectionLabel}</h5>
                            <ul className={classes.innerList}>
                                {components.map(({ id, label }, index) => (
                                    <li
                                        key={index}
                                        className={classes.innerListItem}
                                        onClick={() => showSelection()}
                                    >
                                        <Button
                                            className={clx(classes.link, activeLink && sectionIndex == activeLink?.rowIndex && index == activeLink?.index && classes.linkActive)}
                                            onMouseEnter={() => handleMouseEnter(sectionIndex, index)}
                                            onMouseLeave={() => handleMouseLeave(sectionIndex, index)}
                                            href={`/#${id}`}
                                        >
                                            {label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
