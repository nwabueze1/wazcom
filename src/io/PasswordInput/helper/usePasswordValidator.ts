import { useState, useEffect } from "react";
import { UsePasswordValidationProps } from "../types";

type StateProps = null | boolean;

export const usePasswordValidation = ({ config, value = "" }: UsePasswordValidationProps) => {
  const [validLength, setValidLength] = useState<StateProps>(null);
  const [hasNumber, setHasNumber] = useState<StateProps>(null);
  const [hasUpperCase, setHasUpperCase] = useState<StateProps>(null);
  const [hasSpecialChar, setHasSpecialChar] = useState<StateProps>(null);

  const hasUpperCaseRegex = new RegExp(`^(.*[A-Z]){${config.uppercase.limit},}.*$`);
  const hasDigitRegex = new RegExp(`.*\\d{${config.digit.limit},}.*`);
  const hasSymbolRegex = new RegExp(
    `.*[${"!@#$%^&*()_+\\-=\\[\\]{};:'\"\\|,.<>\\/?"}]{${config.symbol.limit},}.*`,
  );

  useEffect(() => {
    setValidLength(value.length >= (config.length.limit as number) ? true : false);
    setHasUpperCase(hasUpperCaseRegex.test(value));
    setHasNumber(hasDigitRegex.test(value));
    setHasSpecialChar(hasSymbolRegex.test(value));
  }, [value]);

  return { validLength, hasNumber, hasUpperCase, hasSpecialChar };
};
