import clx from "classnames";
import { isArray } from "lodash";
import { FC } from "react";
import React, { ChangeEvent, KeyboardEvent } from "react";
import { NumericFormat } from "react-number-format";
import { AiFillCaretDown, AiOutlineInfoCircle } from "react-icons/ai";
import { SelectInput } from "../";

import { useCurrencyInputStyles } from "./styles";
import { CurrencyInputProps } from "./types";
import currencies from "./currencies.json";

export const CurrencyInputField: FC<CurrencyInputProps> = ({
  variant = "basic",
  className,
  currency,
  label,
  errors,
  isError,
  isSuccess,
  hideLabel = false,
  name,
  required = false,
  width,
  height,
  color,
  background,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  onChange,
  onFocus,
  onEnter,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = React.useState<any>({});
  const [isSelectCurrency, setIsSelectCurrency] = React.useState<boolean>(false);
  const classes = useCurrencyInputStyles({
    variant,
    width,
    height,
    background,
    color,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    isSelectCurrency,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange?.({
        name: (e.target as HTMLInputElement).name ?? "",
        value: (e.target as HTMLInputElement).value ?? "",
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

  const handleSelectedCurrency = (currency: any) => {
    setSelectedCurrency(currency);
    setIsSelectCurrency(false);
  };

  return (
    <div className={clx(classes.root, className)}>
      {variant !== "basic" && (
        <div className={classes.selectContainer}>
          <SelectInput
            backgroundColor={"#FAFAFA"}
            onChange={($v) => setSelectedCurrency($v)}
            options={currencies?.map((v) => ({
              ...v,
              label: v.code,
              value: v.code,
            }))}
            label={
              <span className={classes.selectLabel}>
                DISPLAY CURRENCY <AiOutlineInfoCircle />
              </span>
            }
          />
        </div>
      )}
      <div className={clx(classes.currencyContainer)}>
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
            isSuccess && classes.successInput,
            (isError || errors) && classes.errorInput,
            isFocused && classes.focusedInput,
          )}
        >
          <div className={clx(classes.currencySelectRoot)}>
            {!isArray(currency) && currency !== undefined && currency !== "" ? (
              <div className={classes.currencySingle}>{currency}</div>
            ) : !isSelectCurrency ? (
              <div onClick={() => setIsSelectCurrency(true)}>
                <div className={classes.currencyMultiple}>
                  {selectedCurrency.symbol ?? "$"}
                  <AiFillCaretDown />
                </div>
              </div>
            ) : (
              <SelectInput
                className={classes.selectInputClass}
                borderWidth={0}
                menuIsOpen={true}
                onChange={handleSelectedCurrency}
                options={currencies?.map((v) => ({
                  ...v,
                  label: v.code,
                  value: v.code,
                }))}
              />
            )}
          </div>
          <NumericFormat
            className={clx(classes.input)}
            thousandSeparator=","
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleOnKeyDown}
          />
        </div>
      </div>
    </div>
  );
};
