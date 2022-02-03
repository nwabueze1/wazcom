import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavStyles } from "./styles";
import { NavBarProps } from "./types";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import clx from "classnames";
import { useLocation } from "react-router-dom";

export const NavBar: FC<NavBarProps> = ({ navHeader, navData, className }) => {
  const classes = useNavStyles();
  const location = useLocation();
  const { pathname } = location;

  const displayLinks = useCallback(
    () =>
      navData.map((nav, index) => (
        <div key={index}>
          <Link
            to={nav.path}
            className={clx(
              classes.link,
              pathname === nav.path && classes.navActive,
            )}
          >
            {nav.title}
          </Link>
        </div>
      )),
    [],
  );

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <div>
          <Link to="/template4" className={classes.navlogo}>
            {navHeader}
          </Link>
        </div>
        <div className={classes.links}>{displayLinks()}</div>
        <div className={classes.icon}>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
};
