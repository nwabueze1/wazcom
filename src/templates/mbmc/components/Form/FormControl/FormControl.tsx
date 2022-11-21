import React from "react";
import { FormControlProps } from "./types";
import { TextInput } from "../../../../../io";

export const FormControl: React.FC<FormControlProps> = ({ type, properties }) => {
    const getControl = () => {
        const controlProps: any = properties;
        switch (type) {
            case "text":
                return <TextInput {...controlProps} />;
            default:
                return <TextInput {...controlProps} />;
        }
    };

    return getControl();
};
