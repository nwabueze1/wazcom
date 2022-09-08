import React from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";

export const EmptyState: React.FC<EmptyStateProps> = ({
  classNames,
  text,
  image,
  button,
  className
}) => {
  const classes = useEmptyStateStyles();
  return (
    <div className={clx(classes.root, className)}>
      <img src={image?.src} className={clx(classes.image, classNames?.image)} alt={image?.alt ?? ""} />
      <p className={clx(classes.text, classNames?.text)}>{text}</p>

      {button?.display && (
        <Button
          className={`${classes.btn} ${classNames?.button}`}
          size="small"
          onClick={() => {
            button?.handleClick?.();
          }}
        >
          {button?.text ?? text}
        </Button>
      )}
    </div>
  );
};
