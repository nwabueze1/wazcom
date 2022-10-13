import { FC } from "react";
import { useValourStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import { renderNavItem, renderNavLogo } from "../../../utilities";

export const Valour: FC<NavProps> = ({ mode = "view", handleLinkClick, links, socials, logo }) => {
    const classes = useValourStyles();

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
                <div className={classes.logoAndLinksContainer}>
                    {renderNavLogo(mode, classes, handleLinkClick, logo)}
                    <div className={classes.linksContainer}>{displayLinks()}</div>
                </div>
                <div className={classes.socialsContainer}>{displaySocials()}</div>
            </Paper>
        </div>
    );
};
