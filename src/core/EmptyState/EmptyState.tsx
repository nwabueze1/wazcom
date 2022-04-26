import React from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";

export const EmptyState: React.FC<EmptyStateProps> = ({
  className,
  ...emptyState
}) => {
  const classes = useEmptyStateStyles();
  return (
    <div className={clx(classes.root, className)}>
      <img
        src={emptyState.image?.src}
        className={classes.image}
        alt={emptyState.image?.alt ?? ""}
      />
      <p className={classes.text}>{emptyState.text}</p>

      {emptyState.button?.display && (
        <Button
          className={classes.btn}
          size="small"
          onClick={() => {
            emptyState.button?.handleClick?.();
          }}
        >
          {emptyState.button?.text ?? emptyState.text}
        </Button>
      )}
    </div>
  );
};
