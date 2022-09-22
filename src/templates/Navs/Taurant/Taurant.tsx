import { useTaurantStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";

export const Taurant = ({ links, socials, logo }: NavProps) => {
  const classes = useTaurantStyles();
  const hivedeckLogo = "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg"

  const displayLinks = () => {
    return links.map(({ text, url }, index) => (
      <a className={classes.link} key={index} href={url}>
        {text}
      </a>
    ));
  };

  const displaySocials = () => {
    return socials?.map(({ icon, url }, index) => (
      <a className={classes.socialIntegration} key={index} href={url}>
        {icon}
      </a>
    ));
  };

  return (
    <div className={classes.root}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Inter:wght@400;600&family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </head>
      <Paper
        classes={{ root: classes.paper }}
        className={classes.root}
        elevation={3}
      >
          <img src={logo ?? hivedeckLogo} className={logo ? classes.logo : classes.hivedeckLogo} />

        <div className={classes.linksContainer}>{displayLinks()}</div>
        <div className={classes.socialsContainer}>{displaySocials()}</div>
      </Paper>
    </div>
  );
};
