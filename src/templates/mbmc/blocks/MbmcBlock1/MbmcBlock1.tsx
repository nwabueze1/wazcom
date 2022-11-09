import { useMbmcBlock1Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC, useEffect, useState } from "react";
import { MbmcBlock1Props } from "./types";
import { renderStyle, parseHtml } from "../../../../utilities/renderStyle";

export const MbmcBlock1: FC<MbmcBlock1Props> = ({
    style = "mbmc",
    heading,
    description,
    ctas,
    fullHeight = true,
}) => {
    const classes = useMbmcBlock1Styles({ fullHeight });
    const [loaded, setLoaded] = useState<boolean>(false);

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaded(true);
        }
    }, []);

    return (
        <div className={renderStyle(style, { mbmc: classes.root })}>
            <div className={classes.block1Container}>
                <div className={classes.block1Content}>
                    <h1
                        className={classes.block1Heading}
                        dangerouslySetInnerHTML={{ __html: loaded ? parseHtml(heading) : "" }}
                    />
                    <p className={classes.block1Description}>{description}</p>
                    <div className={classes.block1BtnContainer}>{displayCtas()}</div>
                </div>
                <div className={classes.block1ImgContainerMobile}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                        alt="food images"
                        className={classes.block1ImageMobile}
                    />
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg"
                        alt="Image Overlay"
                        className={classes.block1MobileOverlay}
                    />
                </div>
                <div className={classes.block1ImgContainer}>
                    <img
                        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
                        alt="food images"
                        className={classes.block1Image}
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
