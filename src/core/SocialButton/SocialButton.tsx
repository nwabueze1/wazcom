import Avatar from "@mui/material/Avatar";
import React, { FC } from "react";
import { useStyles } from "./styles";
import { SocialButtonProps } from "./types";

export const SocialButton: FC<SocialButtonProps> = ({ image }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar
                variant="rounded"
                color="inherit"
                src={image.src}
                className="icon"
                alt={image.alt}
            />
        </div>
    );
};
