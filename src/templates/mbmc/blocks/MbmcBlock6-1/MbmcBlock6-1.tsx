import { FC } from "react";
import { MbmcBlock61Props } from "./types";
import { useMbmcBlock61Styles } from "./styles";

export const MbmcBlock61: FC<MbmcBlock61Props> = ({ heading, description, client }) => {
    const classes = useMbmcBlock61Styles();
    return (
        <div className={classes.root}>
            <div className={classes.block61Container}>
                <h3 className={classes.block61Title}>{heading}</h3>
                <p className={classes.block61Description}>{description}</p>
            </div>
        </div>
    );
};
