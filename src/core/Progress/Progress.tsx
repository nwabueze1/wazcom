import clx from "classnames";
import { FC } from "react";
import { useProgressStyles } from "./styles";
import { ProgressBarProps } from "./types";

export const Progress: FC<ProgressBarProps> = ({ value, label, showProgress = false }) => {
  const classes = useProgressStyles({ value });

  return (
    <div className={clx(classes.root)}>
      <div className={classes.header}>
        {label && (
          <span className={classes.label} aria-label="progress label">
            {label}
          </span>
        )}
        <span />
        {showProgress && (
          <span className={classes.label} aria-label="progress percentage">
            {value}%
          </span>
        )}
      </div>
      <div className={classes.bar}>
        <div className={classes.progress} aria-label="progress bar" />
      </div>
    </div>
  );
};
