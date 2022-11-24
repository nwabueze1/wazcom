import { useMbmcBlock3Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock3Props } from "./types";
import { renderCtas, handleElementClick } from "../../utilities";
import clx from "classnames";
import { LazyImage } from "../../../../core";

export const MbmcBlock3: FC<MbmcBlock3Props> = ({
    mode = "view",
    index,
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
                activeElement === String(index) && classes.block3ActiveElement,
            )}
        >
            <div className={classes.block3Container}>
                <div className={classes.block3ImageContainer}>
                    <LazyImage
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/heroFoodLabel.webp"
                        className={classes.block3Image}
                    />
                </div>
                <div className={classes.block3Content}>
                    <h3
                        className={clx(
                            classes.block3Heading,
                            activeElement === `${String(index)}.heading` &&
                                classes.block3ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.heading`, handleClick)
                        }
                    >
                        {heading}
                    </h3>
                    <div className={classes.block3ContentImageContainer}>
                        <img
                            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/hero-food.webp"
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
                            activeElement === `${String(index)}.description` &&
                                classes.block3ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.description`, handleClick)
                        }
                    >
                        {description}
                    </p>
                    <div className={classes.block3Ctas}>
                        {renderCtas(
                            ctas ?? [],
                            mode,
                            String(index ?? 0),
                            handleClick,
                            activeElement,
                        )}
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
