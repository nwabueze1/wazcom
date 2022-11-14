import { useMbmcBlock3Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock3Props } from "./types";
import { renderCtas, handleElementClick } from "../../utilities";
import clx from "classnames";

export const MbmcBlock3: FC<MbmcBlock3Props> = ({
    mode = "view",
    handleClick,
    activeElement,
    heading,
    description,
    ctas,
}) => {
    const classes = useMbmcBlock3Styles();

    return (
        <div
            className={clx(
                classes.root,
                activeElement === "MbmcBlock3" && classes.block3ActiveElement,
            )}
        >
            <div className={classes.block3Container}>
                <div className={classes.block3ImageContainer}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png"
                        className={classes.block3Image}
                    />
                </div>
                <div className={classes.block3Content}>
                    <h3
                        className={clx(
                            classes.block3Heading,
                            activeElement === "MbmcBlock3.heading" && classes.block3ActiveElement,
                        )}
                        onClick={() => handleElementClick(mode, "MbmcBlock3.heading", handleClick)}
                    >
                        {heading}
                    </h3>
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
                    <p
                        className={clx(
                            classes.block3Description,
                            activeElement === "MbmcBlock3.description" &&
                                classes.block3ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, "MbmcBlock3.description", handleClick)
                        }
                    >
                        {description}
                    </p>
                    <div className={classes.block3Ctas}>
                        {renderCtas(ctas ?? [], mode, "MbmcBlock3", handleClick, activeElement)}
                    </div>
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
