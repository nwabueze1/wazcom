import React, { FC } from "react";
import { useNavStyles } from "./styles";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { logo } from "Templates/NavBar/NavData";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const classes = useNavStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navHeader}>
          <Link to="/template5" className={classes.navHeader}>
            {logo}
          </Link>
        </div>

        <div className={classes.listItems}>
          <li>
            <Link to="/template5/gallery" className={classes.listItems}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/template5/categories" className={classes.listItems}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/template5/about" className={classes.listItems}>
              About
            </Link>
          </li>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};
