import { FC } from "react";
import { useRadioButtonInputStyles } from "./styles";
import { RadioButtonInputProps } from "./types";
import { Radio, InputLabel } from "@mui/material";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";

export const RadioButtonInput: FC<RadioButtonInputProps> = ({
    className,
    label,
    classNames,
    name,
    feedback,
    value,
    helperText,
    onChange,
}) => {
    const classes = useRadioButtonInputStyles();

    const handleChange = (event: React.ChangeEvent<{ checked: boolean }>) => {
        onChange?.({ name: name as string, value: event.target.checked });
    };

    return (
        <div className={clx(classes.root, className)}>
            {label && (
                <InputLabel className={(classNames?.label as string) ?? ""} htmlFor={name}>
                    {label}
                </InputLabel>
            )}
            <Radio
                checked={value}
                onChange={handleChange}
                className={
                    classNames?.radioButtonInput ? (classNames.radioButtonInput as string) : ""
                }
                classes={
                    classNames?.classes ? (classNames.classes as { [key: string]: string }) : {}
                }
            />
            {helperText}
            {feedback && displayFeedback(feedback)}
        </div>
    );
};
