import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BsEye } from "react-icons/bs"

import { TextInput } from "../../io";
import { useTextInputStyles } from "./styles";
import { TextInputViewProps } from "./types";

export type InputDataProps = {
    label: string;
    placeholder: string;
};


export const TextInputView: FC<TextInputViewProps> = () => {

    const classes = useTextInputStyles();

    const inputData: InputDataProps[]  = [
        { label: 'Default', placeholder: 'Placeholder' },
        { label: 'Hover', placeholder: 'Placeholder' },
        { label: 'Active', placeholder: 'Placeholder' },
        { label: 'Error', placeholder: 'Placeholder' },
        { label: 'Success', placeholder: 'Placeholder' },
    ];

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Text Input</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>Text inputs enable users to enter free-form text data. The type of text field used should reflect the length of the content you expect the user to enter. The default text input is for short, one-line content, whereas text area is for longer, multi-line entries.</p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <TextInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                            />
                        ))}
                    </div>
                    <div className={classes.inputs}>
                        {inputData.map((item: InputDataProps, index) => (
                            <TextInput
                                id={`${item.label}-${index + Math.random()}`}
                                className={classes.input}
                                label={item.label}
                                placeholder={item.placeholder}
                                rightIcon={<BsEye width={16} />}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
        </div >
    );
};
