import { FC, useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box, InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";
import { Tag } from "../../core/Tag";
import { CheckBoxInput } from "../CheckBoxInput/index";

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
    const [selectedSubCat, setSelectedSubCat] = useState<string[]>([]);

    useEffect(() => {
        setOptions(initialOptions);
    }, [initialOptions]);

    const handleChange = (selectedOption: ComboBoxInputOptionProps) => {
        const value = options.find(
            (option) => option?.label?.toLowerCase() === selectedOption?.label?.toLowerCase(),
        )?.value;
        onChange?.({ name: String(name), value: value ?? selectedOption.label });
    };

    const handleFilterOptions = (options: ComboBoxInputOptionProps[], params: any) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option: any) => inputValue === option.label);
        if (isAdd && inputValue !== "" && !isExisting) {
            filtered.push({
                value: inputValue,
                label: `Add ${inputValue}`,
            });
        }

        return filtered;
    };

    const getValue = useCallback(() => {
        const label = (options as ComboBoxInputOptionProps[])?.find(
            (option) => option.value?.category?.toLowerCase() === value?.toString()?.toLowerCase(),
        )?.label;
        if (label) return { label, value };
        return { label: "", value: { category: "" } };
    }, [options, value]);

    return (
        <div className={clx(className, classes.root)}>
            {label && (
                <InputLabel className={(classNames?.label as string) ?? ""} htmlFor={name}>
                    {label}
                </InputLabel>
            )}
            <Autocomplete
                {...props}
                freeSolo
                options={options ?? []}
                getOptionLabel={(option) => {
                    return typeof option == "string" ? option : option?.label ?? "";
                }}
                value={getValue()}
                onChange={(_, selectedOption) => {
                    handleChange(selectedOption as ComboBoxInputOptionProps);
                }}
                filterOptions={handleFilterOptions}
                renderOption={(props, option) => {
                    return (
                        <Box component="li" {...props}>
                            <div className={classNames?.optionContainer as string}>
                                <p className={classNames?.optionLabel as string}>{option?.label}</p>
                                {option.subText && (
                                    <p className={classNames?.optionSubText as string}>
                                        {option.subText}
                                    </p>
                                )}
                            </div>
                        </Box>
                    );
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
                className={classNames?.comboBoxInput ? (classNames.comboBoxInput as string) : ""}
                classes={
                    classNames?.classes ? (classNames.classes as { [key: string]: string }) : {}
                }
            />
            <div className={classes.tagsParent}>
                <Tag
                    name={value?.label}
                    classname={classes.tag}
                    status={true}
                    handleRemove={() => {}}
                />
                <div className={classes.subCategoryBox}>
                    <div className={classes.subCategoryTagsParent}>
                        <div className={classes.boxMargin} />
                        <div className={classes.subCategoryTags}>
                            {selectedSubCat.length > 0 &&
                                selectedSubCat.map((tag: string, id: number) => (
                                    <Tag key={id} name={tag} />
                                ))}
                        </div>
                    </div>
                    <div>
                        {value?.value?.subCategory && (
                            <p className={classes.label}>PICK SUB CATEGORIES</p>
                        )}
                        <div className={classes.inputContainer}>
                            {value?.value?.subCategory &&
                                value?.value?.subCategory.map((name: string, id: number) => (
                                    <div className={classes.subCategoryInput} key={id}>
                                        <CheckBoxInput
                                            className={classes.checkbox}
                                            name={name}
                                            onChange={(data: { name: string; value: any }) => {
                                                if (data.value) {
                                                    setSelectedSubCat([...selectedSubCat, name]);
                                                } else {
                                                    setSelectedSubCat(
                                                        selectedSubCat.filter(
                                                            (item) => item !== name,
                                                        ),
                                                    );
                                                }
                                            }}
                                        />
                                        <p className={classes.item}>{name}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {helperText}
            {feedback && displayFeedback(feedback)}
        </div>
    );
};
