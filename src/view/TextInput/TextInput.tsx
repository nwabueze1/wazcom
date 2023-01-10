import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Tab } from "../../core/Tab";
import { TextInput } from "../../io";

import { useTextInputStyles } from "./styles";
import { TextInputViewProps } from "./types";


export const TextInputView: FC<TextInputViewProps> = () => {
    const classes = useTextInputStyles();

    const controls = [
        {
            name: 'tab',
            title: 'Control',
            component: '<div>REACT_DIV</div>'
        }
    ]

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Text Input</h1>
                    <p className={classes.description}>Text inputs enable users to enter free-form text data. The type of text field used should reflect the length of the content you expect the user to enter. The default text input is for short, one-line content, whereas text area is for longer, multi-line entries.</p>
                </div>
                {/* <Tab controls={controls} /> */}
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        <TextInput className={classes.input} label="Default" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Hover" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Active" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Error" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Success" placeholder="Placeholder" />
                    </div>
                    <div className={classes.inputs}>
                        <TextInput className={classes.input} label="Default" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Hover" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Active" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Error" placeholder="Placeholder" />
                        <TextInput className={classes.input} label="Success" placeholder="Placeholder" />
                    </div>
                    
                </div>
            </div>
        </div >
    );
};
