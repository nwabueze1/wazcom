import React from "react";
import { useServiceCardStyles } from "./styles";
import { ServiceCardProps } from "./types";
import clsx from "clsx";
import { menuImagePlaceholder } from "utilities/restaurant";

export const ServiceCard: React.FC<ServiceCardProps> = ({
    onClick,
    name,
    image_url: imageUrl,
    description,
}) => {
    const isOpen = true;
    const classes = useServiceCardStyles({ isOpen });

    return (
        <>
            <div
                onClick={() => {
                    isOpen && onClick?.();
                }}
                className={clsx(classes.root, classes.visible)}
            >
                <div
                    className={classes.imageWrapper}
                    style={{
                        backgroundImage: `url(${imageUrl ?? menuImagePlaceholder})`,
                    }}
                ></div>
                <div className={classes.content}>
                    <div>
                        <p className={classes.title}>{name} </p>
                        <p className={classes.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
