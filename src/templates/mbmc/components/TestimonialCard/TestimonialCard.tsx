import React from "react";
import { useTestimonialCardPropsStyles } from "./styles";
import { TestimonialCardProps } from "./types";
import clsx from "clsx";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, type }) => {
    const classes = useTestimonialCardPropsStyles();

    return (
        <div className={clsx(classes.root, classes.visible)}>
            <div className={classes.content}>
                <p className={classes.description}>{text} </p>

                <div>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.type}>{type}</p>
                </div>
            </div>
        </div>
    );
};
