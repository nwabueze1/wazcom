import clx from "classnames";
import { BsCheck } from "react-icons/bs";
import { FC } from "react";
import { usePasswordValidatorStyles } from "./styles";
import PasswordValidator from "password-validator";
import { PasswordValidatorProps } from "../types";

export const minNumberOfCharacters = 8;
export const minNumberOfUppercase = 1;
export const minNumberOfSymbols = 1;
export const minNumberOfDigit = 1;

export const PasswordLengthValidator: FC<PasswordValidatorProps> = ({
  label,
  value = "",
  limit = minNumberOfCharacters,
  isTouched = true,
}) => {
  const classes = usePasswordValidatorStyles();

  const PasswordSchema = new PasswordValidator();
  const passwordLength = PasswordSchema.is().min(limit);

  return (
    <div className={classes.root}>
      <span
        className={clx(
          classes.iconWrapper,
          isTouched && !passwordLength.validate(value) && classes.iconError,
          isTouched && passwordLength.validate(value) && classes.iconSuccess,
        )}
      >
        {isTouched ? passwordLength.validate(value) ? <BsCheck /> : <>&times;</> : null}
        {!isTouched && <BsCheck />}
      </span>
      <span
        className={clx(
          isTouched
            ? !passwordLength.validate(value)
              ? classes.labelError
              : classes.labelSuccess
            : classes.labelDefault,
        )}
      >
        {label ? label : `Must contain at least ${limit} characters long`}
      </span>
    </div>
  );
};

export const PasswordUppercaseValidator: FC<PasswordValidatorProps> = ({
  label,
  value = "",
  limit = minNumberOfUppercase,
  isTouched = true,
}) => {
  const classes = usePasswordValidatorStyles();

  const PasswordSchema = new PasswordValidator();
  const hasUppercase = PasswordSchema.has().uppercase(limit);

  return (
    <div className={classes.root}>
      <span
        className={clx(
          classes.iconWrapper,
          isTouched && !hasUppercase.validate(value) && classes.iconError,
          isTouched && hasUppercase.validate(value) && classes.iconSuccess,
        )}
      >
        {isTouched ? hasUppercase.validate(value) ? <BsCheck /> : <>&times;</> : null}
        {!isTouched && <BsCheck />}
      </span>
      <span
        className={clx(
          isTouched
            ? !hasUppercase.validate(value)
              ? classes.labelError
              : classes.labelSuccess
            : classes.labelDefault,
        )}
      >
        {label ? label : `Must contain at least ${limit} uppercase letter(s)`}
      </span>
    </div>
  );
};

export const PasswordDigitValidator: FC<PasswordValidatorProps> = ({
  label,
  value = "",
  limit = minNumberOfDigit,
  isTouched = true,
}) => {
  const classes = usePasswordValidatorStyles();

  const PasswordSchema = new PasswordValidator();
  const hasUppercase = PasswordSchema.has().digits(limit);

  return (
    <div className={classes.root}>
      <span
        className={clx(
          classes.iconWrapper,
          isTouched && !hasUppercase.validate(value) && classes.iconError,
          isTouched && hasUppercase.validate(value) && classes.iconSuccess,
        )}
      >
        {isTouched ? hasUppercase.validate(value) ? <BsCheck /> : <>&times;</> : null}
        {!isTouched && <BsCheck />}
      </span>
      <span
        className={clx(
          isTouched
            ? !hasUppercase.validate(value)
              ? classes.labelError
              : classes.labelSuccess
            : classes.labelDefault,
        )}
      >
        {label ? label : `Must contain at least ${limit} digit(s)`}
      </span>
    </div>
  );
};

export const PasswordSymbolValidator: FC<PasswordValidatorProps> = ({
  label,
  value = "",
  limit = minNumberOfSymbols,
  isTouched = true,
}) => {
  const classes = usePasswordValidatorStyles();

  const PasswordSchema = new PasswordValidator();
  const hasUppercase = PasswordSchema.is().symbols(limit);

  return (
    <div className={classes.root}>
      <span
        className={clx(
          classes.iconWrapper,
          isTouched && !hasUppercase.validate(value) && classes.iconError,
          isTouched && hasUppercase.validate(value) && classes.iconSuccess,
        )}
      >
        {isTouched ? hasUppercase.validate(value) ? <BsCheck /> : <>&times;</> : null}
        {!isTouched && <BsCheck />}
      </span>
      <span
        className={clx(
          isTouched
            ? !hasUppercase.validate(value)
              ? classes.labelError
              : classes.labelSuccess
            : classes.labelDefault,
        )}
      >
        {label ? label : `Must contain at least ${limit} symbol(s)`}
      </span>
    </div>
  );
};
