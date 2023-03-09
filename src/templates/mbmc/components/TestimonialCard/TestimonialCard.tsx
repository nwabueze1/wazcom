import React from "react";
import { useTestimonialCardPropsStyles } from "./styles";
import { TestimonialCardProps } from "./types";
import clsx from "clsx";
import { handleElementClick } from "../../utilities";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  mode = "view",
  handleClick,
  activeElement,
  parentKey,
  text,
  name,
  type,
}) => {
  const classes = useTestimonialCardPropsStyles();

  return (
    <div className={clsx(classes.root, classes.visible)}>
      <div className={classes.content}>
        <p
          className={clsx(
            classes.description,
            activeElement === parentKey + `.content` && classes.cardActiveElement,
          )}
          onClick={() => handleElementClick(mode, parentKey + `.content`, handleClick)}
        >
          {text}{" "}
        </p>

        <div>
          <p
            className={clsx(
              classes.name,
              activeElement === parentKey + `.name` && classes.cardActiveElement,
            )}
            onClick={() => handleElementClick(mode, parentKey + `.name`, handleClick)}
          >
            {name}
          </p>
          <p
            className={clsx(
              classes.type,
              activeElement === parentKey + ".role" && classes.cardActiveElement,
            )}
            onClick={() => handleElementClick(mode, parentKey + `.role`, handleClick)}
          >
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};
