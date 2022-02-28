import React, { FC, useState, useCallback } from "react";
import { useSidebarListItemStyles } from "./styles";
import { SidebarListItemProps } from "./types";
import { Button } from "../../../core";
import { FiChevronRight } from "react-icons/fi";
import clx from "classnames";
import { Typography } from "@mui/material";

export const SidebarListItem: FC<SidebarListItemProps> = ({
  title,
  sections,
}) => {
  const [isVisible, setVisibility] = useState(true);
  const [activeLink, setActiveLink] =
    useState<{ index: number; rowIndex: number }>();

  const classes = useSidebarListItemStyles();

  const showSelection = () => {};
  const handleMouseEnter = useCallback(
    (rowIndex: number, index: number) => {
      setActiveLink({ rowIndex, index });
    },
    [activeLink],
  );
  const handleMouseLeave = useCallback((rowIndex: number, index: number) => {},
  []);

  const toggleSelection = useCallback(() => {
    setVisibility(!isVisible);
  }, [isVisible]);

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        endIcon={
          <FiChevronRight
            className={classes.chevronIcon}
            style={{ transform: isVisible ? "rotate(90deg)" : "" }}
          />
        }
        onClick={toggleSelection}
      >
        {title}
      </Button>
      <ul
        className={clx(
          classes.list,
          isVisible ? classes.isVisible : classes.isNotVisible,
        )}
      >
        {sections.map(({ label: sectionLabel, components }, sectionIndex) => {
          return (
            <li
              key={sectionIndex}
              className={classes.listItem}
              onClick={() => showSelection()}
            >
              <Typography variant="h5">{sectionLabel}</Typography>
              <ul className={classes.innerList}>
                {components.map(({ id, label }, index) => (
                  <li
                    key={index}
                    className={classes.innerListItem}
                    onClick={() => showSelection()}
                  >
                    <a
                      className={clx(
                        classes.link,
                        activeLink &&
                          sectionIndex == activeLink?.rowIndex &&
                          index == activeLink?.index &&
                          classes.linkActive,
                      )}
                      onMouseEnter={() => handleMouseEnter(sectionIndex, index)}
                      onMouseLeave={() => handleMouseLeave(sectionIndex, index)}
                      href={`/#${id}`}
                    >
                      {label}
                    </a>
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
