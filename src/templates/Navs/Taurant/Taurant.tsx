import { FC } from "react";
import { useTaurantStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import { renderNavItem, renderNavLogo } from "../../../utilities";

export const Taurant: FC<NavProps> = ({ mode = "view", links, socials, handleLinkClick, logo }) => {
    const classes = useTaurantStyles();

    const displayLinks = () => {
        return links.map((link, index) =>
            renderNavItem(link, mode, index, classes, handleLinkClick),
        );
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
                {renderNavLogo(mode, classes, handleLinkClick, logo)}
                <div className={classes.content}>
                    <div className={classes.linksContainer}>{displayLinks()}</div>
                    <div className={classes.socialsContainer}>{displaySocials()}</div>
                </div>
            </Paper>
        </div>
    );
};
