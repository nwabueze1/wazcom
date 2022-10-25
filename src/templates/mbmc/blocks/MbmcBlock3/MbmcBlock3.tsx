import { useMbmcBlock3Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock3Props } from "./types";

export const MbmcBlock3:FC<MbmcBlock3Props> = ({style}) => {
    const classes = useMbmcBlock3Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>
                    Food is an important <br /> part of a balanced diet
                </h3>
                <div className={classes.heroContainerMobile}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                        alt="food images"
                        className={classes.heroImageMobile}
                    />
                </div>
                <div className={classes.headerParagraph}>
                    <p className={classes.headerDescription}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd
                    </p>
                    <p className={classes.headerDescription}>
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua. At vero eo…
                    </p>
                </div>
                <div className={classes.headerBtnContainer}>
                    <MbmcButton bgColor="#F25430">Learn more</MbmcButton>
                </div>
            </div>
            <div className={classes.heroContainer}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png"
                    alt="food images"
                    className={classes.heroImage}
                />
            </div>
        </div>
    );
};
