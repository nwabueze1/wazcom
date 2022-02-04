import React, { FC } from "react";
import { useNavStyles } from "./styles";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { logo } from "Templates/NavBar/NavData";

export const NavBar= () => {
  const classes = useNavStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navHeader}>{logo}</div>
        <div className={classes.listItems}>
          <li>Gallery</li>
          <li>Categories</li>
          <li>Home</li>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};
