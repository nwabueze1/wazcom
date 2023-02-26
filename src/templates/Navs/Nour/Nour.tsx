import { FC, useState } from "react";
import { useNourStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import clx from "classnames";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";

export const Nour: FC<NavProps> = ({ mode = "view", handleClick, links, socials, logo }) => {
  const classes = useNourStyles();
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
        <div className={classes.linksContainer}>{displayLinks()}</div>
        <div className={classes.socialsContainer}>
          {displaySocials(socials, mode, classes, activeElement, handleElementClick)}
        </div>
      </Paper>
    </div>
  );
};
