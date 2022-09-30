import { CheckBox, CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { useCheckBoxInputPropsStyles } from "./styles";
import { CheckBoxInputProps } from "./types";

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
    handleRemove,
    handleChange,
    defaultValue,
    onFocus,
}) => {
    const classes = useCheckBoxInputPropsStyles();
    const [value, setValue] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        handleChange(event.target.value);
    };

    return (
        <div className={classes.root}>
            <CheckBoxOutlineBlank />
            <TextField
                className={classes.checkBoxInput}
                inputMode="text"
                inputRef={inputRef}
                sx={{ border: 0 }}
                id="standard-basic"
                variant="standard"
                onChange={handleInputChange}
                defaultValue={value}
                value={value}
                onFocus={onFocus}
            />
            <Close className={classes.checkBoxIcon} onClick={handleRemove} />
        </div>
    );
};
