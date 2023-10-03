import clx from "classnames";
import { FC } from "react";
import { RadioButtonInputPropsType } from "./type";
import { useTextFieldStyles } from "./useTextFieldStyles";

export const RadioButtonGroup: FC<RadioButtonInputPropsType> = ({
  isError,
  errorMessage,
  classNames,
  placeholder,
  isRequired,
  children,
}) => {
  const classes = useTextFieldStyles();

  return (
    <div>
      <fieldset className={clx(classes.fieldSet, isError && "error", classNames?.fieldset)}>
        <legend className={clx(classes.legend, classNames?.legend)}>
          {placeholder} {isRequired && <sup>*</sup>}
        </legend>
        {children}
      </fieldset>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>{errorMessage}</span>
      )}
    </div>
  );
};
