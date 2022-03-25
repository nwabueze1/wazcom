import { useState, FC } from "react";
import { useNavStyles } from "./styles";
import { Link } from "react-router-dom";
import { navData } from "./NavData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavBarProps } from "./types";
import clx from "classnames";

const NavBar: FC<NavBarProps> = ({ navheader }) => {
  const classes = useNavStyles();
  const [sideBar, setSideBar] = useState(false);

  const displayLinks = () => {
    return navData.map(({ path, title }, index) => (
      <div className={classes.link} key={index}>
        <Link
          to={path}
          className={classes.anchor}
          onClick={() => {
            setSideBar(false);
          }}
        >
          {title}
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.navItems}></div>
        <Link to="/home" className={classes.logo}>
        
        </Link>
        <Link to="" className={classes.navHeader}>
          {navheader}
        </Link>
        <div className={classes.nav}>{displayLinks()}</div>
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
        <div className={classes.mobileContainer}>{displayLinks()}</div>
      </div>
    </div>
  );
};

export default NavBar;
