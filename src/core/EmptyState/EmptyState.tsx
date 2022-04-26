import React from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";

export const EmptyState: React.FC<EmptyStateProps> = ({
  className,
  text,
  image,
  button,
}) => {
  const classes = useEmptyStateStyles();
  return (
    <div className={clx(classes.root, className)}>
      <img src={image?.src} className={classes.image} alt={image?.alt ?? ""} />
      <p className={classes.text}>{text}</p>

      {button?.display && (
        <Button
          className={classes.btn}
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
