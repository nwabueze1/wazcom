import { useHeaderStyles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Header = () => {
    const classes = useHeaderStyles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h1 className={classes.headerTitle}>
                    From Our <br /> Kitchen <br /> To Your Table
                </h1>
                <p className={classes.headerDescription}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy
                </p>
                <div className={classes.headerBtnContainer}>
                    <MbmcButton bgColor="#F25430">
                        Order now <IoIosArrowRoundForward className={classes.headerIcon} />
                    </MbmcButton>
                    <MbmcButton>Contact us</MbmcButton>
                </div>
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
