import { FC } from "react";
import CurrencyInput from "react-currency-input-field";
import { useCurrencyInputStyles } from "./styles";
import { CurrencyInputFieldProps } from "./types";
import { InputLabel } from "@mui/material";
import clx from "classnames";

export const CurrencyInputField: FC<CurrencyInputFieldProps> = ({
  currency,
  name,
  label,
  placeholder,
  onChange,
  className,
  classNames,
  ...props
}) => {
  const classes = useCurrencyInputStyles();

  const handleChange = (
    value: string | undefined,
    name?: string | undefined
  ) => {
    onChange?.({ name, value } as {
      name: string;
      value: any;
    });
  };
  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={classNames?.label ? (classNames?.label as string) : ""}
          htmlFor={name}
        >
          {label}{" "}
          <p className={classes.required}>{props.required ? " *" : ""}</p>
        </InputLabel>
      )}
      <CurrencyInput
        className={classes.input}
        name={name}
        prefix={currency}
        placeholder={placeholder}
        decimalsLimit={2}
        onValueChange={handleChange}
      />
    </div>
  );
};
