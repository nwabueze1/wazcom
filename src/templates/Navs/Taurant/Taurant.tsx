import { FC } from "react";
import { useTaurantStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";

export const Taurant: FC<NavProps> = ({ mode = "view", links, socials, handleLinkClick, logo }) => {
    const classes = useTaurantStyles();
    const hivedeckLogo =
        "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/logo/hivedeck_logo.svg";

    const displayLinks = () => {
        return links.map(({ text, url }, index) => {
            return url?.startsWith("/") || mode === "edit" ? (
                <p
                    key={index}
                    className={classes.link}
                    onClick={() => {
                        handleLinkClick?.(mode === 'edit' ? String(index) : url);
                    }}
                >
                    {text}
                </p>
            ) : (
                <a 
                    className={classes.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}
                >
                    {text}
                </a>
            );
        });
    };

    const displaySocials = () => {
        return socials?.map(({ icon, url }, index) => (
            <a
                className={classes.socialIntegration}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                href={url}
            >
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
            <Paper classes={{ root: classes.paper }} className={classes.root} elevation={3}>
                <img
                    src={logo ?? hivedeckLogo}
                    className={logo ? classes.logo : classes.hivedeckLogo}
                />

                <div className={classes.content}>
                    <div className={classes.linksContainer}>{displayLinks()}</div>
                    <div className={classes.socialsContainer}>{displaySocials()}</div>
                </div>
            </Paper>
        </div>
    );
};
