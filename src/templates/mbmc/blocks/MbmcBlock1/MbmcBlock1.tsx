import { useMbmcBlock1Styles } from "./styles";
import { FC, useEffect, useState } from "react";
import { MbmcBlock1Props } from "./types";
import { parseHtml } from "../../../../utilities/renderStyle";
import clx from "classnames";
import { renderCtas, handleElementClick } from "../../utilities";

export const MbmcBlock1: FC<MbmcBlock1Props> = ({
    mode = "view",
    index,
    activeElement = "",
    handleClick,
    image,
    heading,
    description,
    ctas,
    fullHeight = true,
}) => {
    const classes = useMbmcBlock1Styles({ fullHeight });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div
            className={clx(
                classes.root,
                activeElement === String(index) && classes.block1ActiveElement,
            )}
        >
            <div className={classes.block1Container}>
                <div className={classes.block1Content}>
                    {isClient && (
                        <h1
                            className={clx(
                                classes.block1Heading,
                                activeElement === `${String(index)}.heading` &&
                                    classes.block1ActiveElement,
                            )}
                            dangerouslySetInnerHTML={{
                                __html: parseHtml(heading),
                            }}
                            onClick={() =>
                                handleElementClick(mode, `${String(index)}.heading`, handleClick)
                            }
                        />
                    )}
                    <p
                        className={clx(
                            classes.block1Description,
                            activeElement === `${String(index)}.description` &&
                                classes.block1ActiveElement,
                        )}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.description`, handleClick)
                        }
                    >
                        {description}
                    </p>
                    <div className={classes.block1BtnContainer}>
                        {renderCtas(
                            ctas ?? [],
                            mode,
                            String(index ?? 0),
                            handleClick,
                            activeElement,
                        )}
                    </div>
                </div>
                <div className={classes.block1ImgContainerMobile}>
                    <img
                        src={image}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.image`, handleClick)
                        }
                        alt="food images"
                        className={clx(
                            classes.block1ImageMobile,
                            activeElement === `${String(index)}.image` &&
                                classes.block1ActiveElement,
                        )}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg"
                        alt="Image Overlay"
                        className={classes.block1MobileOverlay}
                    />
                </div>
                <div className={classes.block1ImgContainer}>
                    <img
                        src={image}
                        onClick={() =>
                            handleElementClick(mode, `${String(index)}.image`, handleClick)
                        }
                        alt="food images"
                        className={clx(
                            classes.block1Image,
                            activeElement === `${String(index)}.image` &&
                                classes.block1ActiveElement,
                        )}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg"
                        alt="Image Overlay"
                        className={classes.block1Overlay}
                    />
                </div>
            </div>
        </div>
    );
};
