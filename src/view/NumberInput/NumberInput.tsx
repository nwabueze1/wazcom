import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BsEye } from "react-icons/bs";

import { NumberInput } from "../../io";
import { useNumberInputStyles } from "./styles";
import { NumberInputViewProps, InputDataProps } from "./types";

export const NumberInputView: FC<NumberInputViewProps> = () => {
    const handleEnter = (payload: any) => {
        console.log("onEnter", payload);
    };
    const handleFocus = (payload: any) => {
        console.log("onFocus", payload);
    };
    const handleBlur = (payload: any) => {
        console.log("onBlur", payload);
    };

    const classes = useNumberInputStyles();

    const inputData: InputDataProps[] = [
        { name: "TextInput", label: "Default", placeholder: "Placeholder", helperText: "" },
        { name: "TextInput", label: "Hover", placeholder: "Placeholder", helperText: "" },
        {
            name: "TextInput",
            label: "Active",
            placeholder: "Placeholder",
            helperText: "",
            isSuccess: true,
        },
        {
            name: "TextInput",
            label: "Error",
            placeholder: "Placeholder",
            helperText: "Error Message",
            isError: true,
        },
        {
            name: "TextInput",
            label: "Success",
            placeholder: "Placeholder",
            helperText: "Success Message",
            isSuccess: true,
        },
    ];

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Number Input</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>
                            Number inputs enable users to enter only numerica data inputs. The type
                            of text field used should reflect the length of the content you expect
                            the user to enter. The default text input is for short, one-line
                            content, whereas text area is for longer, multi-line entries.
                        </p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <NumberInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                isError={item.isError}
                                isValidated={item.isSuccess}
                                helperText={item.helperText}
                                onEnter={handleEnter}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        ))}
                    </div>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <NumberInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                helperText={item.helperText}
                                isError={item.isError}
                                isValidated={item.isSuccess}
                                onEnter={handleEnter}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                rightIcon={<BsEye width={16} />}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
