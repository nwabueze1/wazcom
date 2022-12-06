import React from "react";
import { useMbmcCardStyles } from "./styles";
import { MbmcCardProps } from "./types";
import clsx from "clsx";
import { menuImagePlaceholder } from "../../../../utilities/restaurant";
import { renderCtas, handleElementClick } from "../../utilities";
import { LazyImage } from "../../../../core";

export const MbmcCard: React.FC<MbmcCardProps> = ({
    mode = "view",
    activeElement,
    parentKey,
    heading,
    image,
    description,
    ctas,
    scrollableParent,
    className,
    classNames,
    handleClick,
    url
}) => {
    const isOpen = true;
    const classes = useMbmcCardStyles({ isOpen, scrollableParent });

    return (
        <div
            className={clsx(classes.root, classes.visible, className)}
            onClick={() => {
                url && handleClick?.(url);
            }}
        >
            <div
                className={clsx(
                    classes.imageWrapper,
                    activeElement === parentKey + ".image" && classes.cardActiveElement,
                )}
                onClick={() => {
                    handleElementClick(mode, parentKey + ".image", handleClick);
                }}
            >
                <LazyImage src={image ?? menuImagePlaceholder} mode={mode} className={classes.image} />
            </div>
            <div className={classes.content}>
                <div>
                    <p
                        className={clsx(
                            classes.heading,
                            classNames?.heading,
                            activeElement === parentKey + ".heading" && classes.cardActiveElement,
                        )}
                        onClick={() => {
                            handleElementClick(mode, parentKey + ".heading", handleClick);
                        }}
                    >
                        {heading}
                    </p>
                    <p
                        className={clsx(
                            classes.description,
                            classNames?.description,
                            activeElement === parentKey + ".description" &&
                                classes.cardActiveElement,
                        )}
                        onClick={() => {
                            handleElementClick(mode, parentKey + ".description", handleClick);
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div className={classes.ctas}>
                    {renderCtas(ctas ?? [], mode, parentKey ?? "", handleClick, activeElement)}
                </div>
            </div>
        </div>
    );
};
