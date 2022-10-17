import { FC } from "react";
import { useNourStyles } from "./styles";
import { Paper } from "@mui/material";
import { NavProps } from "../types";
import { displaySocials, renderNavLink, renderNavLogo } from "../helpers";

export const Nour: FC<NavProps> = ({ mode = "view", handleClick, links, socials, logo }) => {
    const classes = useNourStyles();

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
                {renderNavLogo(mode, classes, handleClick, logo)}
                <div className={classes.linksContainer}>{displayLinks()}</div>
                <div className={classes.socialsContainer}>
                    {displaySocials(socials, mode, classes, handleClick)}
                </div>
            </Paper>
        </div>
    );
};
