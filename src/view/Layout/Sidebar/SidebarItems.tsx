import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import clx from "classnames";

import { useSidebarListItemStyles } from "./styles";
import { SidebarListItemProps } from "./types";
import { BsArrowLeftShort } from "react-icons/bs";

export const SidebarListItem: FC<SidebarListItemProps> = ({
  sections,
  isOpen = false,
  onClose,
}) => {
  const location = useLocation();
  const classes = useSidebarListItemStyles();

  return (
    <>
      <div className={classes.sidebarOverlay} data-show={isOpen} onClick={onClose} />
      <div className={classes.root} data-show={isOpen}>
        <header className={classes.header}>
          <h2 className={classes.headerTitle}>WAZCOM</h2>
          <button type="button" className={classes.collapseButton} onClick={onClose}>
            <BsArrowLeftShort />
          </button>
        </header>
        <ul className={classes.list}>
          {sections.map((section, sectionIndex) => (
            <li key={sectionIndex} className={classes.listItem}>
              <h5 className={classes.sectionLabel}>{section.label}</h5>
              <ul className={classes.innerList}>
                {section.components.map((component, index) => (
                  <li
                    key={`_${index}__sidebar`}
                    className={classes.innerListItem}
                    onClick={() => {
                      if (isOpen && onClose) {
                        onClose();
                      }
                    }}
                  >
                    <Link
                      className={clx(
                        classes.link,
                        location.pathname.slice(1) === component.slug && classes.linkActive,
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
    </>
  );
};
