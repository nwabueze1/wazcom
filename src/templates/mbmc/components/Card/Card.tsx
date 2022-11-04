import React from "react";
import { useCardStyles } from "./styles";
import { CardProps } from "./types";
import clsx from "clsx";
import { menuImagePlaceholder } from "utilities/restaurant";
import { MbmcButton } from "../MbmcButton/MbmcButton";

export const Card: React.FC<CardProps> = ({
    heading,
    image,
    description,
    ctas,
}) => {
    const isOpen = true;
    const classes = useCardStyles({ isOpen });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    return (
        <>
            <div
                className={clsx(classes.root, classes.visible)}
            >
                <div
                    className={classes.imageWrapper}
                    style={{
                        backgroundImage: `url(${image ?? menuImagePlaceholder})`,
                    }}
                ></div>
                <div className={classes.content}>
                    <div>
                        <p className={classes.title}>{heading}</p>
                        <p className={classes.description}>{description}</p>
                    </div>
                    <div className={classes.ctas}>
                        {displayCtas()}
                    </div>
                </div>
            </div>
        </>
    );
};
