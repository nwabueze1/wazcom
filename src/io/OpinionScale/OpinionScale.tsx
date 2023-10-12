import { OpinionScalePropsType } from "./type";
import { FC } from "react";
import { useOpinionScaleStyles } from "./useOpinionScaleStyles";
import clx from "classnames";

export const OpinionScale: FC<OpinionScalePropsType> = ({
  name,
  variant = "contained",
  min = 1,
  max = 10,
  onChange,
  value,
  classNames,
  isError,
  label,
  helperText,
}) => {
  const ratings: number[] = Array.from({ length: max - min + 1 }, (_, index) => min + index);
  const classes = useOpinionScaleStyles();

  const renderOpinionScale = () =>
    ratings.map((rating, index) => {
      const active = rating <= value;
      return (
        <div
          className={clx(
            classes.box,
            active && (variant === "outlined" ? classes.boxOutlined : classes.boxContained),
            variant === "contained"
              ? classNames?.containedBox
              : variant === "outlined"
              ? classNames?.outlinedBox
              : undefined,
            active && "active",
          )}
          key={index}
          onClick={() => onChange?.({ name, value: rating })}
        >
          <span
            className={clx(
              classes.innerText,
              active &&
                (variant === "outlined" ? classes.outlinedActiveText : classes.containedActiveText),
              classNames?.boxText,
              active && "active",
            )}
          >
            {rating}
          </span>
        </div>
      );
    });

  return (
    <div className={clx(classes.root, classNames?.root)}>
      {label && <label className={clx(classes.label, classNames?.label)}>{label}</label>}
      <article className={clx(classes.boxContainer, classNames?.boxContainer)}>
        {renderOpinionScale()}
      </article>
      {helperText && (
        <span
          className={clx(
            classes.helperTextDefault,
            isError && classes.helperTextError,
            classNames?.errorMessage,
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
