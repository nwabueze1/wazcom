import { FC, useState, useCallback } from "react";
import { FiLink } from "react-icons/fi"
import { CurrencyInputField } from "io";

import { useCurrencyInputStyles } from "./styles";
import { CurrencyInputViewProps, InputDataProps } from "./types";


export const CurrencyInputView: FC<CurrencyInputViewProps> = () => {

    const [value, setValue] = useState(0);
    const handleValueChange = useCallback((val: any) => {
        // eslint-disable-next-line
        console.log(val);
        setValue(val);
    }, []);


    const handleEnter = (payload: any) => {
        console.log('onEnter', payload)
    }
    const handleFocus = (payload: any) => {
        console.log('onFocus', payload)
    }
    const handleBlur = (payload: any) => {
        console.log('onBlur', payload)
    }

    const classes = useCurrencyInputStyles();

    const inputData: InputDataProps[]  = [
        { name: 'TextInput', label: 'Default', placeholder: 'Placeholder', helperText: '' },
        { name: 'TextInput', label: 'Hover', placeholder: 'Placeholder', helperText: '' },
        { name: 'TextInput',  label: 'Active', placeholder: 'Placeholder', helperText: '', isSuccess: true },
        // { name: 'TextInput',  label: 'Error', placeholder: 'Placeholder', helperText: 'Error Message', isError: true },
        // { name: 'TextInput', label: 'Success', placeholder: 'Placeholder', helperText: 'Success Message', isSuccess: true },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Currency Input</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>Currency Inputs is used to collect currency types and values from users.</p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <CurrencyInputField
                                key={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                isError={item.isError}
                                isSuccess={item.isSuccess}
                                currency={'$'}
                                iconSpacing={3}
                                onEnter={handleEnter}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                value={value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};
