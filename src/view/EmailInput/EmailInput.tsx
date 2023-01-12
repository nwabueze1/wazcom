import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { MdOutlineMail } from "react-icons/md"

import { EmailInput } from "../../io";
import { useEmailInputStyles } from "./styles";
import { EmailInputViewProps, InputDataProps } from "./types";


export const EmailInputView: FC<EmailInputViewProps> = () => {

    const handleEnter = (payload: any) => {
        console.log('onEnter', payload)
    }
    const handleFocus = (payload: any) => {
        console.log('onFocus', payload)
    }
    const handleBlur = (payload: any) => {
        console.log('onBlur', payload)
    }

    const classes = useEmailInputStyles();

    const inputData: InputDataProps[]  = [
        { name: 'TextInput', label: 'Default', placeholder: 'Placeholder', helperText: '' },
        { name: 'TextInput', label: 'Hover', placeholder: 'Placeholder', helperText: '' },
        { name: 'TextInput',  label: 'Active', placeholder: 'Placeholder', helperText: '', isSuccess: true },
        { name: 'TextInput',  label: 'Error', placeholder: 'Placeholder', helperText: 'Error Message', isError: true },
        { name: 'TextInput', label: 'Success', placeholder: 'Placeholder', helperText: 'Success Message', isSuccess: true },
    ];

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Email Input</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>Email inputs enable users to enter email addresses with email validation. The email field should reflect the email with a validation and should reflect the length of the content you expect the user to enter.</p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <EmailInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                onEnter={handleEnter}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        ))}
                    </div>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <EmailInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                helperText={item.helperText}
                                isError={item.isError}
                                isSuccess={item.isSuccess}
                                leftIcon={<MdOutlineMail width={16} />}
                                iconSpacing={2}
                                onEnter={handleEnter}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};
