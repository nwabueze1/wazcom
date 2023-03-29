import { FC } from "react";
import clx from "classnames";
import { useStepsStyles } from "./styles";
import { StepsProps } from "./types";
import { BsCheck } from "react-icons/bs";

export const Steps: FC<StepsProps> = ({ className, icon, current, data, isCompleted = false }) => {
  const classes = useStepsStyles();

  return (
    <div className={clx(classes.root)}>
      <div className={clx(classes.steps, className)}>
        {data.map((item, index) => {
          return (
            <div
              className={clx(classes.stepItem)}
              data-active={isCompleted || current === index || current > index}
              key={`${index}${item.title}`}
            >
              <div
                className={classes.stepContent}
                data-active={isCompleted || current === index || current > index}
              >
                {!isCompleted && current <= index && <span>{item.title}</span>}
                {(current > index || isCompleted) && (
                  <span className={classes.stepIcon}> {icon ? icon : <BsCheck />}</span>
                )}
              </div>
              <div className={clx(classes.stepLabel, "step__label")}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
