import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavStyles } from "./styles";
import { NavBarProps } from "./types";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import clx from "classnames"

export const NavBar: FC<NavBarProps> = ({ navHeader, navData, className }) => {
  const classes = useNavStyles();

  const displayLinks = useCallback(
    () =>
      navData.map((nav, index) => (
        <Link key={index} to={nav.path} className={classes.link}>
          {nav.title}
        </Link>
      )),
    [],
  );

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <div>
          <Link to="/" className={classes.navlogo}> {navHeader}</Link>
        </div>
        <div className={classes.links}>{displayLinks()}</div>
        <div className={classes.icon}>
          <Facebook/>
          <Twitter/>
          <Instagram/>
        </div>
      </div>
    </div>
  );
};