import { FC, useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box, InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

const filter = createFilterOptions<ComboBoxInputOptionProps>();

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
  name,
  isAdd = true,
  onChange,
  options: initialOptions,
  label,
  classNames,
  helperText,
  value,
  error,
  placeholder,
  feedback,
  className,
  ...props
}) => {
  const classes = useComboBoxStyles();
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  const handleChange = (selectedOption: ComboBoxInputOptionProps) => {
    const value = options.find(
      (option) =>
        option?.label.toLowerCase() === selectedOption?.label.toLowerCase(),
    )?.value;
    onChange?.({ name: String(name), value: value ?? selectedOption.label });
  };

  const handleFilterOptions = (
    options: ComboBoxInputOptionProps[],
    params: any,
  ) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(
      (option: any) => inputValue === option.label,
    );
    if (isAdd && (inputValue !== "" && !isExisting)) {
      filtered.push({
        value: inputValue,
        label: `Add ${inputValue}`,
      });
    }

    return filtered;
  };

  const getValue = useCallback(() => {
    const label = (options as ComboBoxInputOptionProps[])?.find(
      (option) => option.value.toLowerCase() === value.toString().toLowerCase(),
    )?.label;
    if (label) return { label, value };
    return { label: "", value: "" };
  }, [options, value]);

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={(classNames?.label as string) ?? ""}
          htmlFor={name}
        >
          {label}
        </InputLabel>
      )}
      <Autocomplete
        {...props}
        options={options ?? []}
        getOptionLabel={(option) => {
          return (typeof option == 'string') ? option : option?.label ?? "";
        }}
        value={getValue()}
        onChange={(_, selectedOption) => {
          handleChange(selectedOption as ComboBoxInputOptionProps);
        }}
        filterOptions={handleFilterOptions}
        // freeSolo
        renderOption={(props, option) => {
          return (
            <Box component="li"  {...props}>
              <div className={classNames?.optionContainer as string}>
                <p className={(classNames?.optionLabel as string)}>{option?.label}</p>
                {option.subText && <p className={(classNames?.optionSubText as string)}>{option.subText}</p>}
              </div>
            </Box>
          )
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            variant="outlined"
            error={error}
            className={classes.renderInput}
          />
        )}
        className={
          classNames?.comboBoxInput ? (classNames.comboBoxInput as string) : ""
        }
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
      />
      {helperText}
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
