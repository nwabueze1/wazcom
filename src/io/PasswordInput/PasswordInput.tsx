import { ChangeEvent, cloneElement, FC, isValidElement, KeyboardEvent, useState } from "react";
import clx from "classnames";
import { Button } from "../../core";
import { usePasswordInputStyles, useTextInputIconStyles } from "./styles";
import { ConfigProps, InputIconProps, TextFieldProps } from "./types";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { initialConfig, PasswordValidation } from "./helper";

export const PasswordInput: FC<TextFieldProps & { config?: Partial<ConfigProps> }> = ({
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
  classNames,
  config = initialConfig,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [type, setType] = useState<"password" | "text">("password");

  const PasswordConfig = { ...initialConfig, ...config };

  const classes = usePasswordInputStyles();

  const handlePasswordVisibility = (value: "password" | "text") => {
    setType(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);

    if (!isTouched) {
      setIsTouched(true);
    }

    if (onChange) {
      onChange?.({
        name: target.name ?? "",
        value: target.value ?? "",
      });
    }
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
    <div className={clx(classes.root, className)}>
      <div className={classes.labelWrapper}>
        {!hideLabel && label && (
          <label htmlFor={name} className={classes.label}>
            {label}
            {required && <span className={classes.required}>*</span>}
          </label>
        )}
      </div>
      <div
        className={clx(
          classes.baseInput,
          classes.defaultInput,
          classNames?.input,
          isSuccess && classes.successInput,
          (isError || errors) && classes.errorInput,
          isFocused && classes.focusedInput,
        )}
      >
        <input
          type={type}
          name={name}
          className={classes.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          {...props}
        />
        {Boolean(value) && (
          <>
            {type === "password" ? (
              <>
                <Button
                  className={classes.iconButton}
                  onClick={() => handlePasswordVisibility("text")}
                >
                  <InputIcon>
                    <BsEye />
                  </InputIcon>
                </Button>
              </>
            ) : (
              <>
                <Button
                  className={classes.iconButton}
                  onClick={() => handlePasswordVisibility("password")}
                >
                  <InputIcon>
                    <BsEyeSlash />
                  </InputIcon>
                </Button>
              </>
            )}
          </>
        )}
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
      <PasswordValidation value={value} config={PasswordConfig} isTouched={isTouched} />
    </div>
  );
};

const InputIcon = ({ children, marginLeft, marginRight, ...rest }: InputIconProps) => {
  const classes = useTextInputIconStyles({ marginLeft, marginRight });
  const _className = clx(classes.root);
  const _children = isValidElement(children) ? cloneElement(children, {}) : children;

  return (
    <span {...rest} className={_className}>
      {_children}
    </span>
  );
};
