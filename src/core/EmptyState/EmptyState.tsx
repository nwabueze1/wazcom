import React from "react";
import { EmptyStateProps } from "./types";
import { useEmptyStateStyles } from "./styles";
import { Button } from "..";
import clx from "classnames";

export const EmptyState: React.FC<EmptyStateProps> = ({
  classnames,
  text,
  image,
  button,
}) => {
  const classes = useEmptyStateStyles();
  return (
    <div className={clx(classes.root, classnames.container)}>
      <img src={image?.src} className={clx(classes.image, classnames.image)} alt={image?.alt ?? ""} />
      <p className={clx(classes.text, classnames.text)}>{text}</p>

      {button?.display && (
        <Button
          className={clx(classes.btn, classnames.button)}
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
