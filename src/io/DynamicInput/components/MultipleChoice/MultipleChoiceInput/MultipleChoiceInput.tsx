import { Close as CloseIcon, RadioButtonUncheckedOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { useMultipleChoiceInputPropsStyles } from "./styles";
import { MultipleChoiceInputProps } from "./types";

export const MultipleChoiceInput: FC<MultipleChoiceInputProps> = ({
    handleRemove,
    handleChange,
    defaultValue,
    onFocus,
}) => {
    const classes = useMultipleChoiceInputPropsStyles();
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
            <RadioButtonUncheckedOutlined />
            <TextField
                className={classes.multipleChoiceInput}
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
            <CloseIcon className={classes.multipleChoiceIcon} onClick={handleRemove} />
        </div>
    );
};
