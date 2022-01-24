import React, { useState, FC } from "react";
import { useNavStyles } from "./styles";
import { Link } from "react-router-dom";
import { navData } from "../../Template2Data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavBarProps } from "./types";
import clx from "classnames";

const NavBar: FC<NavBarProps> = ({ navheader }) => {
  const classes = useNavStyles();
  const [sideBar, setSideBar] = useState(false);

  const displayLinks = () => {
    return navData.map(({ path, title }, index) => (
      <div className={classes.link} key={index}>
        <Link to={path} className={classes.anchor} onClick={() => {
                setSideBar(false);
              }}>
          {title}
        </Link>
      </div>
    ));
  };
  
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link to="/template2/" className={classes.navHeader}>
          {navheader}
        </Link>
        <div className={classes.nav}>
          {displayLinks()}
          <div>
            <FacebookIcon  className={classes.icon} />
            <TwitterIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.menu}>
          {sideBar ? (
            <CloseIcon
              onClick={() => {
                setSideBar(false);
              }}
            />
          ) : (
            <MenuIcon
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
            <FacebookIcon className={classes.menuIcon} />
            <TwitterIcon className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
