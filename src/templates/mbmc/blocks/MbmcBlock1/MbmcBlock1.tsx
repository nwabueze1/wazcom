import { useMbmcBlock1Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock1Props } from "./types";
import { renderStyle, parseHtml } from "utilities/renderStyle";

export const MbmcBlock1: FC<MbmcBlock1Props> = ({ style = "mbmc", heading, description, ctas }) => {
    const classes = useMbmcBlock1Styles();

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    return (
        <div className={renderStyle(style, { mbmc: classes.root })}>
            <div className={classes.headerContent}>
                <h1
                    className={classes.headerTitle}
                    dangerouslySetInnerHTML={{ __html: parseHtml(heading) }}
                />
                <p className={classes.headerDescription}>{description}</p>
                <div className={classes.headerBtnContainer}>
                    {displayCtas()}
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
