import clx from "classnames";
import { isNumber, isBoolean } from "lodash";
import { FC, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { useTextStyles, useTextInputIconStyles } from "./styles";
import { TextFieldProps, InputIconProps } from "./types";
import { useInputWithSlideUpLabelStyles } from "./useInputWithSlideUpLabelStyles";

/**
 * Text Input IO Component
 *
 * - Should follow the following constraints;
 * -- labels are optional (should show or hide if its provided but can be manually turned off. Manual turn off/on takes precedence over if provided or not).
 * -- startIcons and endIcons
 * -- should expose the following events: onFocus, onEnter
 * -- helperText
 * -- info
 */

export const TextInput: FC<TextFieldProps> = ({
  className,
  label,
  errors,
  isError,
  isSuccess,
  helperText,
  hideLabel = false,
  name,
  onChange,
  onFocus,
  onEnter,
  onBlur,
  required = false,
  hasSlideUpLabel = false,
  noNegativeValue = false,
  showCC,
  type = "text",
  leftIcon,
  rightIcon,
  iconSpacing,
  width,
  height,
  color,
  background,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  classNames,
  placeholder,
  inputRef,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const classes = useTextStyles({
    width,
    height,
    background,
    color,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
  });
  const slideUpLabelClass = useInputWithSlideUpLabelStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if ((type === "number" || noNegativeValue) && isNaN(e.target.value as any)) return;  

    if (noNegativeValue) {
      const inputValue = (e.target as HTMLInputElement).value;
      if (type === "number" && parseFloat(inputValue) < 0) {
        (e.target as HTMLInputElement).value = "0"; // Set value to 0 if it's negative
      }
    }

    if (type === "tel") {
      const phoneNumberRegexp = /^\+?[0-9]*$/; //validate if value can pass as a phone number
      if (!phoneNumberRegexp.test(e.target?.value)) {
        return;
      }
    }

    if (onChange) {
      onChange?.({
        name: (e.target as HTMLInputElement).name ?? "",
        value: (e.target as HTMLInputElement).value ?? "",
      });
    }
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" && ["e", "E"].includes(e.key)) {
      e?.preventDefault?.();
    }

    if (onEnter && e.key === "Enter") {
      onEnter?.({
        name: (e.target as HTMLInputElement).name ?? "",
        value: (e.target as HTMLInputElement).value ?? "",
      });
    }
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(() => true);
    if (onFocus) {
      onFocus?.({
        name: (e.target as HTMLInputElement).name ?? "",
        value: (e.target as HTMLInputElement).value ?? "",
      });
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(() => false);
    if (onBlur) {
      onBlur?.({
        name: (e.target as HTMLInputElement).name ?? "",
        value: (e.target as HTMLInputElement).value ?? "",
      });
    }
  };

  return (
    <div className={clx(classes.root, className, hasSlideUpLabel && slideUpLabelClass.container)}>
      <div
        className={clx(
          classes.labelWrapper,
          hasSlideUpLabel && slideUpLabelClass.labelContainer,
          (isFocused || props.value) && "active",
        )}
      >
        {!hideLabel && label && (
          <label
            htmlFor={name}
            className={clx(
              classes.label,
              hasSlideUpLabel && slideUpLabelClass.inputLabel,
              classNames?.label,
            )}
          >
            {label}
            {required && <span className={classes.required}>*</span>}
          </label>
        )}
        {showCC && (
          <span className={clx(classes.wordCount, classes.label, classNames?.label)}>
            {props?.value && props?.value.length > 0 && props?.value.length}
          </span>
        )}
      </div>
      <div
        className={clx(
          classes.baseInput,
          classes.defaultInput,
          classNames?.input,
          hasSlideUpLabel && slideUpLabelClass.inputContainer,
          hasSlideUpLabel && (isError || errors) && slideUpLabelClass.inputError,
          hasSlideUpLabel && isSuccess && slideUpLabelClass.inputSuccess,
          isSuccess && classes.successInput,
          (isError || errors) && classes.errorInput,
          isFocused && classes.focusedInput,
          isError && "error",
        )}
      >
        {leftIcon && (
          <InputIcon marginRight={iconSpacing} marginLeft={iconSpacing}>
            {leftIcon}
          </InputIcon>
        )}
        <input
          type={type}
          name={name}
          className={clx(
            classes.input,
            hasSlideUpLabel && slideUpLabelClass.input,
            classNames?.inputField,
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          min={noNegativeValue ? "0" : ""}
          onKeyDown={handleOnKeyDown}
          placeholder={
            hasSlideUpLabel ? (isFocused && !props.value ? placeholder : "") : placeholder
          }
          ref={inputRef}
          {...props}
        />
        {rightIcon && <InputIcon marginLeft={iconSpacing}>{rightIcon}</InputIcon>}
      </div>
      {helperText && (
        <span
          className={clx(
            classes.helperTextDefault,
            isSuccess && classes.helperTextSuccess,
            isError && classes.helperTextError,
            isError && classNames?.errorMessage,
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

const validateEmail = (email: string): boolean => {
  const validator = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  return !(validator == null);
};

export const EmailInput: FC<Omit<TextFieldProps, "type">> = ({
  name,
  errors,
  isSuccess,
  isError,
  onChange,
  onBlur,
  onFocus,
  onEnter,
  ...props
}) => {
  let sErrors;
  const [emailErrors, setEmailErrors] = useState<{ message: string }[]>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

  const handleChange = useCallback(
    ({ name, value }: { name: string; value: any }) => {
      setIsValidEmail(() => validateEmail(value));
      validateEmail(value) || value == ""
        ? setEmailErrors(undefined)
        : setEmailErrors([{ message: "Invalid email !!" }]);

      if (onChange) {
        onChange?.({ name, value });
      }
    },
    [errors, setEmailErrors],
  );

  if (errors || emailErrors) {
    sErrors = errors ? errors : undefined;
    sErrors = emailErrors ? (errors ? [...errors, ...emailErrors] : emailErrors) : undefined;
  }

  return (
    <TextInput
      type="email"
      name={name}
      isSuccess={isValidEmail || isSuccess}
      isError={!!sErrors || isError}
      errors={sErrors}
      onChange={handleChange}
      onFocus={onFocus}
      onEnter={onEnter}
      onBlur={onBlur}
      {...props}
    />
  );
};

const validateURL = (str: string): boolean => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // fragment locator
  return !!pattern.test(str);
};
export const URLInput: FC<Omit<TextFieldProps, "type">> = ({
  name,
  errors,
  isSuccess,
  isError,
  onChange,
  onBlur,
  onFocus,
  onEnter,
  ...props
}) => {
  let sErrors;
  const [urlErrors, setURLErrors] = useState<{ message: string }[]>();
  const [isValidURL, setIsValidURL] = useState<boolean>(false);

  const handleChange = useCallback(
    ({ name, value }: { name: string; value: any }) => {
      setIsValidURL(() => validateURL(value));
      validateURL(value) || value == ""
        ? setURLErrors(undefined)
        : setURLErrors([{ message: "Invalid email !!" }]);

      if (onChange) {
        onChange?.({ name, value });
      }
    },
    [errors, setURLErrors],
  );

  if (errors || urlErrors) {
    sErrors = errors ? errors : undefined;
    sErrors = urlErrors ? (errors ? [...errors, ...urlErrors] : urlErrors) : undefined;
  }

  return (
    <TextInput
      type="url"
      name={name}
      isSuccess={isValidURL || isSuccess}
      isError={!!sErrors || isError}
      errors={sErrors}
      onChange={handleChange}
      onFocus={onFocus}
      onEnter={onEnter}
      onBlur={onBlur}
      {...props}
    />
  );
};

export const NumberInput: FC<Omit<TextFieldProps, "type">> = ({
  name,
  errors,
  isValidated,
  isError,
  onChange,
  onBlur,
  onFocus,
  onEnter,
  showCC,
  ...props
}) => {
  let sErrors;
  const [isValidNumber, setIsValidNumber] = useState<boolean>(false);
  const [numberErrors, setNumberErrors] = useState<{ message: string }[]>();

  const handleChange = useCallback(
    ({ name, value }: { name: string; value: any }) => {
      isNumber(parseFloat(value)) || value == ""
        ? setNumberErrors(undefined)
        : setNumberErrors([{ message: "Invalid number !!" }]);

      if (onChange) {
        onChange?.({ name, value });
      }

      if (isBoolean(isValidated)) {
        isValidated && isNumber(parseFloat(value))
          ? setIsValidNumber(true)
          : setIsValidNumber(false);
      } else {
        isNumber(parseFloat(value)) ? setIsValidNumber(true) : setIsValidNumber(false);
      }
    },
    [errors, setNumberErrors, isValidated],
  );

  if (errors || numberErrors) {
    sErrors = errors ? errors : undefined;
    sErrors = numberErrors ? (errors ? [...errors, ...numberErrors] : numberErrors) : undefined;
  }

  return (
    <TextInput
      type="number"
      name={name}
      errors={sErrors}
      showCC={showCC}
      isSuccess={isValidNumber}
      isError={!!sErrors || isError}
      onChange={handleChange}
      onFocus={onFocus}
      onEnter={onEnter}
      onBlur={onBlur}
      {...props}
    />
  );
};

const InputIcon = ({ children, marginLeft, marginRight, ...rest }: InputIconProps) => {
  const classes = useTextInputIconStyles({ marginLeft, marginRight });
  const _className = clx(classes.root, classes.iconSpacing);
  const _children = isValidElement(children) ? cloneElement(children, {}) : children;

  return (
    <span {...rest} className={_className}>
      {_children}
    </span>
  );
};
