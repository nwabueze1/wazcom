import React, { FC } from "react";
import { useFooterStyles} from "./styles";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { logo } from "Templates/NavBar/NavData";

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.footerHeader}>{logo}</div>
        <div className={classes.listItems}>
          <li>home</li>
          <li>Categories</li>
          <li>About</li>
          <div className={classes.icons}>
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};
