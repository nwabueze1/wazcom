import clx from "classnames";
import { BsCheck } from "react-icons/bs";
import { FC } from "react";
import { usePasswordValidationStyles } from "./styles";
import { PasswordValidatorProps } from "../types";
import { usePasswordValidation } from "./usePasswordValidator";

export const PasswordValidation: FC<PasswordValidatorProps> = ({
  config,
  value = "",
  isTouched = false,
}) => {
  const classes = usePasswordValidationStyles();
  const { validLength, hasNumber, hasUpperCase, hasSpecialChar } = usePasswordValidation({
    config,
    value,
  });

  return (
    <div className={classes.container}>
      {/* Password Length */}
      <div className={classes.containerItem}>
        <span
          className={clx(
            classes.iconWrapper,
            isTouched && !validLength && classes.iconError,
            isTouched && validLength && classes.iconSuccess,
          )}
        >
          {isTouched ? validLength ? <BsCheck /> : <>&times;</> : null}
          {!isTouched && <BsCheck />}
        </span>
        <span
          className={clx(
            isTouched
              ? !validLength
                ? classes.labelError
                : classes.labelSuccess
              : classes.labelDefault,
          )}
        >
          {`Must contain at least ${config?.length.limit} characters long`}
        </span>
      </div>
      {/* Password Uppercase */}
      <div className={classes.containerItem}>
        <span
          className={clx(
            classes.iconWrapper,
            isTouched && !hasUpperCase && classes.iconError,
            isTouched && hasUpperCase && classes.iconSuccess,
          )}
        >
          {isTouched ? hasUpperCase ? <BsCheck /> : <>&times;</> : null}
          {!isTouched && <BsCheck />}
        </span>
        <span
          className={clx(
            isTouched
              ? !hasUpperCase
                ? classes.labelError
                : classes.labelSuccess
              : classes.labelDefault,
          )}
        >
          {`Must contain at least ${config?.uppercase.limit} uppercase letter(s)`}
        </span>
      </div>
      {/* Password Digit */}
      <div className={classes.containerItem}>
        <span
          className={clx(
            classes.iconWrapper,
            isTouched && !hasNumber && classes.iconError,
            isTouched && hasNumber && classes.iconSuccess,
          )}
        >
          {isTouched ? hasNumber ? <BsCheck /> : <>&times;</> : null}
          {!isTouched && <BsCheck />}
        </span>
        <span
          className={clx(
            isTouched
              ? !hasNumber
                ? classes.labelError
                : classes.labelSuccess
              : classes.labelDefault,
          )}
        >
          {`Must contain at least ${config?.digit.limit} digit(s)`}
        </span>
      </div>
      {/* Password Special character */}
      <div className={classes.containerItem}>
        <span
          className={clx(
            classes.iconWrapper,
            isTouched && !hasSpecialChar && classes.iconError,
            isTouched && hasSpecialChar && classes.iconSuccess,
          )}
        >
          {isTouched ? hasSpecialChar ? <BsCheck /> : <>&times;</> : null}
          {!isTouched && <BsCheck />}
        </span>
        <span
          className={clx(
            isTouched
              ? !hasSpecialChar
                ? classes.labelError
                : classes.labelSuccess
              : classes.labelDefault,
          )}
        >
          {`Must contain at least ${config?.symbol.limit} symbol(s)`}
        </span>
      </div>
    </div>
  );
};
