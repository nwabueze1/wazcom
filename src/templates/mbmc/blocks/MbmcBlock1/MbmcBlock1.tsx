import { useMbmcBlock1Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FC } from "react";
import { MbmcBlock1Props } from "./types";
import { renderStyle } from "utilities/renderStyle";

export const MbmcBlock1: FC<MbmcBlock1Props> = ({ style }) => {
    const classes = useMbmcBlock1Styles();

    return (
        <div className={renderStyle(style, { mui: classes.root, ant: "", chakra: "" })}>
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
