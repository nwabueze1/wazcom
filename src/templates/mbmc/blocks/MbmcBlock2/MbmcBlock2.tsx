import { FC } from "react";
import { useMbmcBlock2Styles } from "./styles";
import { MbmcBlock2Props } from "./types";

export const MbmcBlock2: FC<MbmcBlock2Props> = ({ style }) => {
    const classes = useMbmcBlock2Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h1 className={classes.headerTitle}>Our Menu</h1>
            </div>
            <div className={classes.heroContainerMobile}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                    alt="food images"
                    className={classes.heroImageMobile}
                />
            </div>
            <div className={classes.heroContainer}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                    alt="food images"
                    className={classes.heroImage}
                />
            </div>
        </div>
    );
};
