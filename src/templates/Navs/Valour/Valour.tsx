import { FC } from "react";
import { useValourStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";

export const Valour: FC<NavProps> = ({ mode = "view", handleClick, links, socials, logo }) => {
    const classes = useValourStyles();

    const displayLinks = () => {
        return links.map((link, index) => renderNavLink(link, mode, index, classes, handleClick));
    };

    return (
        <div
            className={classes.root}
            onClick={() => {
                mode === "edit" && handleClick?.("nav");
            }}
        >
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Inter:wght@400;600&family=Merriweather&display=swap"
                    rel="stylesheet"
                />
            </head>
            <Paper classes={{ root: classes.paper }} className={classes.root} elevation={3}>
                <div className={classes.logoAndLinksContainer}>
                    {renderNavLogo(mode, classes, handleClick, logo)}
                    <div className={classes.linksContainer}>{displayLinks()}</div>
                </div>
                <div className={classes.socialsContainer}>{displaySocials(socials, mode, classes, handleClick)}</div>
            </Paper>
        </div>
    );
};
