import { FC, useState } from "react";
import { useTaurantStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import clx from "classnames";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";

export const Taurant: FC<NavProps> = ({ mode = "view", links, socials, handleClick, logo }) => {
  const classes = useTaurantStyles();
  const [activeElement, setActiveElement] = useState("");

  const handleNavClick = () => {
    if (mode === "edit") {
      setActiveElement("nav");
      handleClick?.("nav");
    }
  };

  const handleElementClick = (element: string) => {
    setActiveElement(element);
    handleClick?.(element);
  };

  const displayLinks = () => {
    return links.map((link, index) =>
      renderNavLink(link, mode, index, classes, activeElement, handleElementClick),
    );
  };

  return (
    <div
      className={clx(
        classes.root,
        activeElement.toLowerCase() === "nav" && mode === "edit" && classes.activeElement,
      )}
      onClick={handleNavClick}
    >
      <Paper classes={{ root: classes.paper }} className={classes.root} elevation={3}>
        {renderNavLogo(mode, classes, activeElement, handleElementClick, logo)}
        <div className={classes.content}>
          <div className={classes.linksContainer}>{displayLinks()}</div>
          <div className={classes.socialsContainer}>
            {displaySocials(socials, mode, classes, activeElement, handleElementClick)}
          </div>
        </div>
      </Paper>
    </div>
  );
};
