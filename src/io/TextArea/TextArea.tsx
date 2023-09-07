import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import { TextAreaProps } from "./types";
import { useTextAreaStyles } from "./styles";
import clx from "classnames";

export const TextArea: FC<Omit<TextAreaProps, "type">> = ({
  className,
  classNames,
  label,
  rows,
  helperText,
  hideLabel = false,
  isSuccess,
  isError,
  errors,
  name,
  width,
  height,
  background,
  textLimit,
  color,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  onChange,
  onFocus,
  onEnter,
  onBlur,
  required = false,
  showCC,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const classes = useTextAreaStyles({
    rows,
    width,
    height,
    background,
    color,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange?.({
        name: (e.target as HTMLTextAreaElement).name ?? "",
        value: textLimit && textLimit > 0 && (e.target as HTMLTextAreaElement).value.length > textLimit
          ? (e.target as HTMLTextAreaElement).value.slice(0, textLimit)
          : (e.target as HTMLTextAreaElement).value ?? "",
      });
    }
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onEnter && e.key === "Enter") {
      onEnter?.({
        name: (e.target as HTMLTextAreaElement).name ?? "",
        value: (e.target as HTMLTextAreaElement).value ?? "",
      });
    }
  };

  const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsFocused(() => true);
    if (onFocus) {
      onFocus?.({
        name: (e.target as HTMLTextAreaElement).name ?? "",
        value: (e.target as HTMLTextAreaElement).value ?? "",
      });
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsFocused(() => false);
    if (onBlur) {
      onBlur?.({
        name: (e.target as HTMLTextAreaElement).name ?? "",
        value: (e.target as HTMLTextAreaElement).value ?? "",
      });
    }
  };

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.labelWrapper}>
        {!hideLabel && label && (
          <label htmlFor={name} className={clx(classes.label, classNames?.label)}>
            {label}
            {required && <span className={classes.required}>*</span>}
          </label>
        )}
        {showCC && (
          <span className={clx(classes.wordCount, classes.label)}>
            {props?.value && props?.value.length > 0 && props?.value.length}
          </span>
        )}
      </div>
      <div className={classes.textAreaContainer}>
        <textarea
          className={clx(
            classes.baseTextArea,
            classes.defaultInput,
            classNames?.input,
            isSuccess && classes.successInput,
            (isError || errors) && classes.errorInput,
            isFocused && classes.focusedInput,
          )}
          name={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleOnKeyDown}
          rows={rows || 5}
          {...props}
        />
      </div>
      {helperText && (
        <span
          className={clx(
            classes.helperTextDefault,
            isSuccess && classes.helperTextSuccess,
            isError && classes.helperTextError,
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
