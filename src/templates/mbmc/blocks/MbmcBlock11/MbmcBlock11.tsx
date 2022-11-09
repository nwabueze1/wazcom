import { useMbmcBlock11Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock11Props } from "./types";

export const MbmcBlock11: FC<MbmcBlock11Props> = ({
    layout,
    heading,
    description,
    image,
    ctas,
}) => {
    const classes = useMbmcBlock11Styles({ flexDirection: layout ?? "row-reverse" });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>{heading}</h3>
                <div className={classes.heroContainerMobile}>
                    <img src={image} alt="food images" className={classes.heroImageMobile} />
                </div>
                <div className={classes.headerParagraph}>
                    <p className={classes.headerDescription}>{description}</p>
                </div>
                <div className={classes.headerBtnContainer}>{displayCtas()}</div>
            </div>
            <div className={classes.heroContainer}>
                <img src={image} alt="food images" className={classes.heroImage} />
            </div>
        </div>
    );
};
