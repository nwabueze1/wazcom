import { useMbmcBlock7Styles } from "./styles";
import { menuData } from "./data";
import clx from "classnames";
import { FC } from "react";
import { MbmcBlock7Props } from "./types";

export const MbmcBlock7: FC<MbmcBlock7Props> = ({ heading, description, images }) => {
    const classes = useMbmcBlock7Styles();

    return (
        <div className={classes.root}>
            <div className={classes.headerContent}>
                <h3 className={classes.headerTitle}>{heading}</h3>
                <p className={classes.headerDescription}>{description}</p>
            </div>
            <div className={classes.headerCardContainer}>
                {images?.slice(0, 5)?.map((image, idx) => (
                    <img
                        key={idx}
                        src={image}
                        className={clx(classes.imageContainer, idx === 2 && classes.flexGrow)}
                    />
                ))}
            </div>
            <div className={classes.mobileCardContainer}>
                {images?.map((image, idx) => (
                    <img key={idx} src={image} className={clx(classes.imageContainer)} />
                ))}
            </div>
        </div>
    );
};
