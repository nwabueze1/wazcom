import { useMbmcBlock3Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";

export const MbmcBlock3 = () => {
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <p className={classes.headerDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
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
