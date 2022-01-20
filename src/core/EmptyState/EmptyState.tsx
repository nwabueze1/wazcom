import React from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import { Button } from "../Button";

export const EmptyState: React.FC<EmptyStateProps> = ({
  image,
  text,
  button,
}) => {
  const classes = useEmptyStateStyles();
  return (
    <div className={classes.root}>
      <img src={image?.src} className={classes.image} alt={image?.alt ?? ""} />
      <p className={classes.text}>{text}</p>

      {button?.display && (
        <Button
          color="secondary"
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
