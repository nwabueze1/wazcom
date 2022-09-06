import { FC } from "react";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";
import { PhoneNumberInputProps } from "./types";

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ containerClass, dropdownClass, inputClass, ...props }) => {
    const classes = usePhoneNumberInputStyles();

    return (
        <div className={classes.root}>
            <PhoneNumber
                {...props}
                inputClass={`${classes.textInput} ${inputClass}`}
                dropdownClass={`${classes.dropDown} ${dropdownClass}`}
                containerClass={`${classes.root} ${containerClass}`}
            />
        </div>
    );
};
