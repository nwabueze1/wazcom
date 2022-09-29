import React, { FC } from "react";
import { MenuItem, Select, InputLabel } from "@mui/material";
import { useSelectStyles } from "./styles";
import { SelectInputProps } from "./types";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

export const SelectInput: FC<SelectInputProps> = ({
  className,
  classNames,
  options = [],
  placeholder = "Select a value",
  label,
  helperText,
  onChange,
  feedback,
  ...props
}) => {
  const classes = useSelectStyles();

  const handleChange = (
    e:
      | (Event & { target: { value: any; name: string } })
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    onChange?.({ name, value });
  };

  const displayLabelFromValue = (value: any) => {
    const option = options.filter((option) => option.value == value)?.[0];
    const Icon = option.icon;
    return (
      <p>
        {Icon && <Icon className={classes.icon} />}
        {option.label}
      </p>
    );
  };

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={(classNames?.label as string) ?? classes.label}
          htmlFor={props.name}
        >
          {label}{" "}
          <p className={classes.required}>{props.required ? " *" : ""}</p>
        </InputLabel>
      )}
      <div className={classes.selectContainer}>
        <Select
          {...props}
          onChange={handleChange}
          className={clx(classNames?.selectInput, classes.select)}
          classes={
            classNames?.classes
              ? (classNames.classes as { [key: string]: string })
              : {}
          }
          renderValue={(value: any) => (
            <MenuItem value={value}>{displayLabelFromValue(value)}</MenuItem>
          )}
        >
          {options.length === 0 && (
            <MenuItem value="Select a value">{placeholder}</MenuItem>
          )}
          {options.map(
            ({ label, value, subText, icon: Icon }, index: number) => (
              <MenuItem key={index} value={value}>
                <div className={classNames?.optionContainer as string}>
                  <div className={classes.iconContianer}>
                    {Icon && <Icon className={classes.icon} />}
                    <p
                      className={clx(
                        classNames?.optionLabel,
                        classes.optionLabel
                      )}
                    >
                      {label}
                    </p>
                  </div>
                  {subText && (
                    <p className={classNames?.optionSubText as string}>
                      {subText}
                    </p>
                  )}
                </div>
              </MenuItem>
            )
          )}
        </Select>
      </div>
      {helperText}
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
