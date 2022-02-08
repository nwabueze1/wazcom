import { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavStyles } from "./styles";
import { NavBarProps } from "./types";
import { Facebook, Twitter, Instagram, Menu, Close } from "@mui/icons-material";
import clx from "classnames";
import { useLocation } from "react-router-dom";

export const NavBar: FC<NavBarProps> = ({ navHeader, navData, className }) => {
  const classes = useNavStyles();
  const location = useLocation();
  const { pathname } = location;
  const [sideBar, setSideBar] = useState(false);

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
    [pathname],
  );

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <Link to="/template4" className={classes.navlogo}>
          {navHeader}
        </Link>
        <div className={classes.links}>{displayLinks()}</div>
        <div className={classes.icon}>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div className={classes.menu}>
          {sideBar ? (
            <Close
              onClick={() => {
                setSideBar(false);
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                setSideBar(true);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={clx(classes.mobileNav, {
          [classes.removeSidebar]: !sideBar,
        })}
      >
        <div className={classes.mobileContainer}>
          {displayLinks()}
          <div>
            <Facebook className={classes.menuIcon} />
            <Twitter className={classes.icon} />
            <Instagram className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
