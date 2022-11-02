import { useMbmcBlock11Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock11Props } from "./types";

export const MbmcBlock11: FC<MbmcBlock11Props> = ({ style, layout }) => {
    const classes = useMbmcBlock11Styles({ flexDirection: layout ?? "row-reverse" });

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>Baking</h3>
                <div className={classes.heroContainerMobile}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png"
                        alt="food images"
                        className={classes.heroImageMobile}
                    />
                </div>
                <div className={classes.headerParagraph}>
                    <p className={classes.headerDescription}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea ta
                    </p>
                </div>
                <div className={classes.headerBtnContainer}>
                    <MbmcButton bgColor="#F25430">Contact us</MbmcButton>
                </div>
            </div>
            <div className={classes.heroContainer}>
                <img
                    src="https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png"
                    alt="food images"
                    className={classes.heroImage}
                />
            </div>
        </div>
    );
};
