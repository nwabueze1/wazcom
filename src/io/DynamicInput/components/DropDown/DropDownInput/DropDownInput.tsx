import { Close as CloseIcon } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { useDropDownInputStyles } from "./styles";
import { DropDownInputProps } from "./types";

export const DropDownInput: FC<DropDownInputProps> = ({
    handleRemove,
    handleChange,
    defaultValue,
    index,
    onFocus,
}) => {
    const classes = useDropDownInputStyles();
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
            <p>{index + 1}.</p>
            <TextField
                className={classes.dropDownInput}
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
            <CloseIcon className={classes.dropDownIcon} onClick={handleRemove} />
        </div>
    );
};
