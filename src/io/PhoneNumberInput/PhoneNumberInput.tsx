import React, { FC, useState } from "react";
import PhoneNumber from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePhoneNumberInputStyles } from "./styles";

export const PhoneNumberInput: FC<typeof PhoneNumber> = (props) => {
    const classes = usePhoneNumberInputStyles();

    return (
        <div className={classes.root}>
            <PhoneNumber
                {...props}
                inputClass={classes.textInput}
                dropdownClass={classes.dropDown}
                containerClass={classes.root}
            />
        </div>
    );
};
