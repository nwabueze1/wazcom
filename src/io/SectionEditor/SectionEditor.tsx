import { FC, useState } from "react";
import { useDynamicInputStyles } from "./styles";
import { DynamicInputProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";
import { SelectInput } from "io/SelectInput";
import { defaultInputs as options } from "./data";

const selectProps = {
    options,
    error: true,
    required: true,
};

export const SectionEditor: FC<DynamicInputProps> = () => {
    const classes = useDynamicInputStyles();
    const [activeInputName, setActiveInputName] = useState("dropdown");

    const handleChange = (event: { name: string; value: string }) => {
        setActiveInputName(event.value);
    };

    return (
        <div className={clx(classes.root)}>
            <div className={classes.inputControlsContainer}>
                <div className={classes.editableTextInput}>
                    <EditableTextInput />
                </div>
            </div>
        </div>
    );
};
