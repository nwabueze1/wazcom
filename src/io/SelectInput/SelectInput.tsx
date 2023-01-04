import clx from "classnames";
import { FC } from "react";
import Select, { SingleValue } from 'react-select';
import { useSelectStyles } from "./styles";
import { SelectInputOptionsProps, SelectInputProps } from "./types";

export const SelectInput: FC<SelectInputProps> = ({
    onChange,
    options,
    value,
    name,

    className,
    label,
    errors,
    helperText,
    hideLabel = false,
    info,
    required = false,
    ...props
}) => {
    const classes = useSelectStyles();

    const handleChange = (e: SingleValue<SelectInputOptionsProps>) => {
        if ( onChange) {
            onChange?.({ name: name ?? "", value: e?.value });
        }
    };

    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.labelWrapper}>
                { 
                    !hideLabel && 
                    label && 
                    <label htmlFor={name} className={classes.label}>
                        { label }
                        { required && <span className={classes.required}>*</span> }
                    </label>
                }
            </div>
            <Select
                classNames={{ 
                    control: ({ isDisabled, isFocused }) => 
                        clx(
                            classes.select,
                            !isDisabled && isFocused && classes.control
                        ),
                    menu: ({ innerRef, innerProps,
                        isLoading,
                        placement,
                        children 
                    }) => {
                        console.log({ innerRef, innerProps,
                            isLoading,
                            placement,
                            children 
                        });
                        return classes.control;
                    },
                    option: ({ isDisabled, isFocused }) => 
                        clx(
                            !isDisabled && isFocused && classes.option
                        ) 
                }} 
                options={options}
                onChange={handleChange}
                {...props}
            />
        </div>
    )
};

// export const SelectInput2: FC<SelectInputProps> = ({
//     className,
//     classNames,
//     options = [],
//     placeholder = "Select a value",
//     label,
//     helperText,
//     onChange,
//     feedback,
//     ...props
// }) => {
//     const classes = useSelectStyles();

//     const handleChange = (
//         e: (Event & { target: { value: any; name: string } }) | React.ChangeEvent<HTMLInputElement>,
//     ) => {
//         const { name, value } = e.target;
//         onChange?.({ name, value });
//     };

//     const displayLabelFromValue = (value: any) => {
//         const option = options.filter((option) => option.value == value)?.[0];
//         if (!option) return <p></p>;
//         const Icon = option?.icon;

//         return (
//             <p className={clx(classNames?.optionLabel, classes.optionLabel)}>
//                 {Icon && <Icon className={classes.icon} />}
//                 {option?.label ?? ""}
//             </p>
//         );
//     };

//     return (
//         <div className={clx(className, classes.root)}>
//             {label && (
//                 <InputLabel
//                     className={(classNames?.label as string) ?? classes.label}
//                     htmlFor={props.name}
//                 >
//                     {label} <p className={classes.required}>{props.required ? " *" : ""}</p>
//                 </InputLabel>
//             )}
//             <div className={classes.selectContainer}>
//                 <Select
//                     {...props}
//                     onChange={handleChange}
//                     className={clx(classNames?.selectInput, classes.select)}
//                     classes={
//                         classNames?.classes ? (classNames.classes as { [key: string]: string }) : {}
//                     }
//                     classes={{
//                         outlined: classes.outlined
//                     }}
//                     renderValue={(value: any) => (
//                         <MenuItem value={value}>{displayLabelFromValue(value)}</MenuItem>
//                     )}
//                 >
//                     {options.length === 0 && (
//                         <MenuItem value="Select a value">{placeholder}</MenuItem>
//                     )}
//                     {options.map(({ label, value, subText, icon: Icon }, index: number) => (
//                         <MenuItem key={index} value={value}>
//                             <div className={classNames?.optionContainer as string}>
//                                 <div className={classes.iconContianer}>
//                                     {Icon && <Icon className={classes.icon} />}
//                                     <p
//                                         className={clx(
//                                             classNames?.optionLabel,
//                                             classes.optionLabel,
//                                         )}
//                                     >
//                                         {label}
//                                     </p>
//                                 </div>
//                                 {subText && (
//                                     <p className={classNames?.optionSubText as string}>{subText}</p>
//                                 )}
//                             </div>
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </div>
//             {helperText}
//             {feedback && displayFeedback(feedback)}
//         </div>
//     );
// };
