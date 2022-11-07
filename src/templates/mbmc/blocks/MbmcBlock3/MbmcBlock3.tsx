import { useMbmcBlock3Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock3Props } from "./types";

export const MbmcBlock3: FC<MbmcBlock3Props> = ({ heading, description, ctas }) => {
    const classes = useMbmcBlock3Styles();

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    // return (
    //     <div className={classes.root}>
    //         <div className={classes.headerContent}>
    //             <h3 className={classes.headerTitle}>
    //                 Food is an important <br className={classes.headerIcon} /> part of a balanced
    //                 diet
    //             </h3>
    //             <div className={classes.heroContainerMobile}>
    //                 <img
    //                     src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
    //                     alt="food images"
    //                     className={classes.heroImageMobile}
    //                 />
    //             </div>
    //             <div className={classes.headerParagraph}>
    //                 <p className={classes.headerDescription}>
    //                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    //                     eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    //                     voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    //                     clita kasd
    //                 </p>
    //                 <p className={classes.headerDescription}>
    //                     elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    //                     aliquyam erat, sed diam voluptua. At vero eo…
    //                 </p>
    //             </div>
    //             <div className={classes.headerBtnContainer}>
    //                 <MbmcButton bgColor="#F25430">Learn more</MbmcButton>
    //             </div>
    //         </div>
    //         <div className={classes.heroContainer}>
    //             <img
    //                 src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png"
    //                 alt="food images"
    //                 className={classes.heroImage}
    //             />
    //         </div>
    //     </div>
    // );

    return (
        <div className={classes.root}>
            <div className={classes.block3Container}>
                <div className={classes.block3ImageContainer}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png"
                        className={classes.block3Image}
                    />
                </div>
                <div className={classes.block3Content}>
                    <h3 className={classes.block3Heading}>{heading}</h3>
                    <div className={classes.block3ContentImageContainer}>
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                            alt=""
                            className="hero"
                        />
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg"
                            alt="Overlay"
                            className="overlay"
                        />
                    </div>
                    <p className={classes.block3Description}>{description}</p>
                    <div className={classes.block3Ctas}>{displayCtas()}</div>
                </div>
            </div>
            <img
                src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg"
                alt="Overlay"
                className={classes.block3ImageOverlay}
            />
        </div>
    );
};
