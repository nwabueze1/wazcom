import * as React from "react";
import clx from "classnames";
import { InputLabel, Switch } from "@mui/material";
import { useToggleStyles } from "./styles";
import { ToggleInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";

export const ToggleInput: React.FC<ToggleInputProps> = ({
    name,
    label,
    value,
    feedback,
    helperText,
    onChange,
    className,
    classNames,
    ...props
}) => {
    const classes = useToggleStyles();

    const handleChange = (checked: boolean) => {
        onChange?.({ name: name as string, value: checked });
    };

    return (
        <div className={clx(className, classes.root)}>
            {label && (
                <InputLabel className={(classNames?.label as string) ?? ""}>{label}</InputLabel>
            )}
            <Switch
                name={name}
                checked={value}
                onChange={(_, checked) => {
                    handleChange(checked);
                }}
                className={clx(classNames?.toggleInput, classes.toggle)}
                classes={
                    classNames?.classes ? (classNames.classes as { [key: string]: string }) : {}
                }
                {...props}
            />
            {helperText}
            {feedback && displayFeedback(feedback)}
        </div>
    );
};
