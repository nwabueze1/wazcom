import React from "react";
import { FormControlProps } from "./types";
import { TextInput } from "../../../../../io";
import { GroupedInput } from "../GroupedInput";

export const FormControl: React.FC<FormControlProps> = ({ type, properties }) => {
    const getControl = () => {
        const controlProps: any = properties;
        switch (type) {
            case "text":
                return <TextInput {...controlProps} />;
            case "groupedInput":
                return <GroupedInput {...controlProps} />;
            default:
                return <TextInput {...controlProps} />;
        }
    };

    return getControl();
};
