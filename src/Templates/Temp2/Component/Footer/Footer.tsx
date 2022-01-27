import React, { FC } from "react";
import { useFooterStyles } from "./styles";
import { Link } from "react-router-dom";
import { FooterProps } from "./types";
import { navData } from "../../Pages/Template2Data";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer: FC<FooterProps> = ({ navheader }) => {
  const classes = useFooterStyles();

  const displayLinks = () => {
    return navData.map(({ path, title }, index) => (
      <div className={classes.link} key={index}>
        <Link to={path} className={classes.anchor}>
          {title}
        </Link>
      </div>
    ));
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link to="/templates" className={classes.footerHeader}>
          {navheader}
        </Link>
        <div className={classes.nav}>
          {displayLinks()}
          <div>
            <FacebookIcon />
            <TwitterIcon className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
