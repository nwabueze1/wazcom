import { FC } from "react";
import clx from "classnames";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
import { PhoneNumberInputProps } from "./types";

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  label,
  name,
  onChange,
  country = "gb",
}) => {
  const classes = usePhoneNumberInputStyles();

  const handleChange = (
    _value: string,
    _format: any,
    _event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => {
    onChange?.({ name, value: formattedValue });
  };

  return (
    <div className={classes.root}>
      {label && <label className={clx(classes.labelStyle)}>{label}</label>}
      <PhoneNumber
        inputClass="phone__input"
        containerClass="phone__container"
        country={country}
        prefix="+"
        onChange={handleChange}
      />
    </div>
  );
};
