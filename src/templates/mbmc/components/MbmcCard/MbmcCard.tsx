import React from "react";
import { useMbmcCardStyles } from "./styles";
import { MbmcCardProps } from "./types";
import clsx from "clsx";
import { menuImagePlaceholder } from "utilities/restaurant";
import { MbmcButton } from "../MbmcButton/MbmcButton";

export const MbmcCard: React.FC<MbmcCardProps> = ({
    heading,
    image,
    description,
    ctas,
    scrollableParent,
    className,
    classNames,
    onClick,
}) => {
    const isOpen = true;
    const classes = useMbmcCardStyles({ isOpen, scrollableParent });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
        ));
    };

    return (
        <>
            <div onClick={onClick} className={clsx(classes.root, classes.visible, className)}>
                <div
                    className={classes.imageWrapper}
                    style={{
                        backgroundImage: `url(${image ?? menuImagePlaceholder})`,
                    }}
                ></div>
                <div className={classes.content}>
                    <div>
                        <p className={clsx(classes.heading, classNames?.heading)}>{heading}</p>
                        <p className={clsx(classes.description, classNames?.description)}>
                            {description}
                        </p>
                    </div>
                    <div className={classes.ctas}>{displayCtas()}</div>
                </div>
            </div>
        </>
    );
};
