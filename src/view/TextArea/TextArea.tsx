import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BsEye } from "react-icons/bs"

import { TextArea } from "../../io";
import { useTextInputStyles } from "./styles";
import { TextAreaViewProps, InputDataProps } from "./types";

export const TextAreaView: FC<TextAreaViewProps> = () => {

    const handleEnter = (payload: any) => {
        console.log('onEnter', payload)
    }
    const handleFocus = (payload: any) => {
        console.log('onFocus', payload)
    }
    const handleBlur = (payload: any) => {
        console.log('onBlur', payload)
    }

    const classes = useTextInputStyles();

    const inputData: InputDataProps[]  = [
        { name: 'TextInput', label: 'Default', placeholder: 'TextArea', helperText: '' },
        { name: 'TextInput', label: 'Hover', placeholder: 'TextArea', helperText: '' },
        { name: 'TextInput',  label: 'Active', placeholder: 'TextArea', helperText: '', isSuccess: true },
        { name: 'TextInput',  label: 'Error', placeholder: 'TextArea', helperText: 'Error Message', isError: true },
        { name: 'TextInput', label: 'Success', placeholder: 'TextArea', helperText: 'Success Message', isSuccess: true },
    ];

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>TextArea Input</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>TextArea Inputs enable users to enter free-form text data. The type of text field used should reflect the length of the content you expect the user to enter. The default textarea input is for long multiline texts, whereas text inputs is for short, one-line entries.</p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.sections}>
                        <h1 className={classes.inputsHeader}>Without Text Counter</h1>
                        <div className={classes.inputs}>
                            {inputData.map((item: InputDataProps, index) => (
                                <TextArea
                                    id={`${item.label}-${index + Math.random()}`}
                                    className={classes.input}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                    isError={item.isError}
                                    isSuccess={item.isSuccess}
                                    helperText={item.helperText}
                                    onEnter={handleEnter}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classes.sections}>
                        <h1 className={classes.inputsHeader}>Without Text Counter</h1>
                        <div className={classes.inputs}>
                            {inputData.map((item: InputDataProps, index) => (
                                <TextArea
                                    id={`${item.label}-${index + Math.random()}`}
                                    className={classes.input}
                                    label={item.label}
                                    placeholder={item.placeholder}
                                    helperText={item.helperText}
                                    isError={item.isError}
                                    isSuccess={item.isSuccess}
                                    onEnter={handleEnter}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
