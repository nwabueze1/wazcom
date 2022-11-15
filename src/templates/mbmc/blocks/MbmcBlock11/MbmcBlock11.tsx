import { FC } from "react";
import { useMbmcBlock11Styles } from "./styles";
import { MbmcBlock11Props } from "./types";
import { renderCtas, handleElementClick } from "../../utilities";
import clx from "classnames";

export const MbmcBlock11: FC<MbmcBlock11Props> = ({
    mode = "view",
    index,
    activeElement = "",
    handleClick,
    image,
    heading,
    description,
    ctas,
}) => {
    const classes = useMbmcBlock11Styles({ flexDirection: "row-reverse" });

    return (
        <div className={classes.root}>
            <div className={classes.block11Container}>
                <div className={classes.block11Content}>
                    <h3
                        className={clx(
                            classes.block11Heading,
                            activeElement === `${String(index)}.heading` &&
                                classes.block11ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.heading`, handleClick)
                        }
                    >
                        {heading}
                    </h3>
                    <div className={classes.heroContainerMobile}>
                        <img
                            src={image}
                            alt="food images"
                            className={clx(
                                classes.heroImageMobile,
                                activeElement === `${String(index)}.image` &&
                                    classes.block11ActiveElement,
                            )}
                            onClick={() =>
                                handleElementClick(mode, `${String(index)}.image`, handleClick)
                            }
                        />
                    </div>
                    <div className={classes.block11Paragraph}>
                        <p
                            className={clx(
                                classes.block11Description,
                                activeElement === `${String(index)}.description` &&
                                    classes.block11ActiveElement,
                            )}
                            onClick={() =>
                                handleElementClick(
                                    mode,
                                    `${String(index)}.description`,
                                    handleClick,
                                )
                            }
                        >
                            {description}
                        </p>
                    </div>
                    <div className={classes.block11BtnContainer}>
                        {renderCtas(ctas ?? [], mode, String(index), handleClick, activeElement)}
                    </div>
                </div>
                <div className={classes.heroContainer}>
                    <img
                        src={image}
                        alt="food images"
                        className={clx(
                            classes.heroImage,
                            activeElement === `${String(index)}.image` &&
                                classes.block11ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.image`, handleClick)
                        }
                    />
                </div>
            </div>
        </div>
    );
};
