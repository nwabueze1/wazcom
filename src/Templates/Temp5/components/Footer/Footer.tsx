import React, { FC } from "react";
import { useFooterStyles } from "./styles";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { logo } from "Templates/NavBar/NavData";
import { Link } from "react-router-dom";

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.footerHeader}>
          <Link to="/" className={classes.footerHeader}>
            {logo}
          </Link>
        </div>
        <div className={classes.listItems}>
          <li>
            <Link to="/" className={classes.items}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" className={classes.items}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/aboutpage" className={classes.items}>
              About
            </Link>
          </li>
          <div className={classes.icons}>
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};
