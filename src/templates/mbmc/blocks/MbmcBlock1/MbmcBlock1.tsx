import { useMbmcBlock1Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock1Props } from "./types";
import { parseHtml, renderStyle } from "../../../../utilities/renderStyle";
import clx from "classnames";

export const MbmcBlock1: FC<MbmcBlock1Props> = ({
    style = "mbmc",
    mode = "view",
    activeElement = "",
    handleClick,
    image,
    heading,
    description,
    ctas,
    fullHeight = true,
}) => {
    const classes = useMbmcBlock1Styles({ fullHeight });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, url, lIcon, ...props }, index) => {
            const name = "MbmcBlock1." + "ctas." + String(index);
            return (
                <MbmcButton
                    key={index}
                    name={name}
                    {...props}
                    handleClick={() => {
                        mode === "view"
                            ? handleClick?.(url ?? "")
                            : handleElementClick("ctas." + String(index));
                    }}
                    activeElement={activeElement}
                >
                    {lIcon} {text} {rIcon}
                </MbmcButton>
            );
        });
    };

    const handleElementClick = (element: string) => {
        if (mode === "view") return;
        const updatedElement = "MbmcBlock1." + element;
        alert(updatedElement);
        handleClick?.(updatedElement);
    };

    return (
        <div className={renderStyle(style, { mbmc: classes.root })}>
            <div className={classes.block1Container}>
                <div className={classes.block1Content}>
                    <h1
                        className={clx(
                            classes.block1Heading,
                            activeElement === "MbmcBlock1.heading" && classes.block1ActiveElement,
                        )}
                        dangerouslySetInnerHTML={{
                            __html: typeof window !== "undefined" ? parseHtml(heading) : "",
                        }}
                        onClick={() => handleElementClick("heading")}
                    />
                    <p
                        className={clx(
                            classes.block1Description,
                            activeElement === "MbmcBlock1.description" && classes.block1ActiveElement,
                        )}
                        onClick={() => handleElementClick("description")}
                    >
                        {description}
                    </p>
                    <div className={classes.block1BtnContainer}>{displayCtas()}</div>
                </div>
                <div className={classes.block1ImgContainerMobile}>
                    <img
                        src={image}
                        onClick={() => handleElementClick("image")}
                        alt="food images"
                        className={clx(
                            classes.block1ImageMobile,
                            activeElement === "MbmcBlock1.image" && classes.block1ActiveElement,
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
                        onClick={() => handleElementClick("image")}
                        alt="food images"
                        className={clx(
                            classes.block1Image,
                            activeElement === "MbmcBlock1.image" && classes.block1ActiveElement,
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
