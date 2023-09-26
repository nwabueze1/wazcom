import clx from "classnames";
import { ChangeEventHandler, FC, FocusEventHandler } from "react";

import { RadioButtonInputPropsType, TextFieldPropsType } from "./type";
import { useTextFieldStyles } from "./useTextFieldStyles";

export const TextField: FC<Partial<TextFieldPropsType> & { name: string }> = ({
  isError,
  errorMessage,
  label,
  classNames,
  className,
  placeholder,
  isRequired,
  ...inputProps
}) => {
  const classes = useTextFieldStyles();

  return (
    <div className={className}>
      <div className={clx(classes.root, classNames?.inputContainer)}>
        <input
          {...inputProps}
          placeholder={`${placeholder || label} ${isRequired ? "*" : ""}`}
          className={clx(classes.textField, classNames?.input, isError && "error")}
        />
      </div>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>{errorMessage}</span>
      )}
    </div>
  );
};

export const TextArea: FC<
  Partial<
    TextFieldPropsType & {
      onChange: ChangeEventHandler<HTMLTextAreaElement>;
      onFocus: FocusEventHandler<HTMLTextAreaElement>;
      onBlur: FocusEventHandler<HTMLTextAreaElement>;
    }
  >
> = ({
  isError,
  errorMessage,
  label,
  classNames,
  className,
  placeholder,
  isRequired,
  ...inputProps
}) => {
  const classes = useTextFieldStyles();

  return (
    <div>
      <div className={clx(classes.root, classNames?.inputContainer)}>
        <textarea
          {...inputProps}
          placeholder={`${placeholder || label} ${isRequired ? "*" : ""}`}
          className={clx(classes.textField, classNames?.input, isError && "error")}
          rows={5}
        />
      </div>
      {isError && errorMessage && (
        <span className={clx(classes.errorMessage, classNames?.errorMessage)}>{errorMessage}</span>
      )}
    </div>
  );
};

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
      <fieldset className={clx(classes.fieldSet, isError && "error", classNames?.inputContainer)}>
        <legend className={clx(classes.legend, classNames?.label)}>
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
