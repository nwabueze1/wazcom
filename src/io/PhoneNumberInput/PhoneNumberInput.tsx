import { FC } from "react";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
import { PhoneNumberInputProps } from "./types";
import clx from "classnames";

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ classNames, ...props }) => {
  const classes = usePhoneNumberInputStyles();

  return (
    <div className={clx(classes.root, classNames?.root)}>
      <PhoneNumber
        inputClass={`${classes.textInput} ${classNames?.input}`}
        dropdownClass={`${classes.dropDown} ${classNames?.dropdown}`}
        containerClass={`${classes.root} ${classNames?.container}`}
        buttonClass={classNames?.button}
        {...props}
      />
    </div>
  );
};
