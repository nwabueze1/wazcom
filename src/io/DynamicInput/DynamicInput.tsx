import React, { FC, useState } from "react";
import { useDynamicInputStyles } from "./styles";
import { DynamicInputProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";
import { SelectInput } from "io/SelectInput";
import { defaultInputs as options } from "./data";
import { inputComponents } from "./helper";
import { Button } from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const selectProps = {
    options,
    error: true,
    required: true,
};

export const DynamicInput: FC<DynamicInputProps> = () => {
    const classes = useDynamicInputStyles();
    const [activeInputName, setActiveInputName] = useState("dropdown");

    const handleChange = (event: { name: string, value: string }) => {
        setActiveInputName(event.value);
    }

    return (
        <div className={clx(classes.root)}>
            <div className={classes.inputControlsContainer}>
                <div className={classes.editableTextInput}>
                    <EditableTextInput />
                </div>
                <SelectInput {...selectProps} onChange={handleChange} className={classes.selectInputContainer} />
            </div>
            {
                inputComponents.find(input => input.name === activeInputName)?.component
            }
            <div className={classes.questionSection}>
                <div className={classes.questionContainer}>
                    <Button variant="outlined" color="primary" className={classes.questionButton}>
                        <QuestionAnswer className={classes.questionIcon} />
                        Answer Key
                    </Button>
                    <div className={classes.questionPoint}>
                        (0 points)
                    </div>
                </div>
                <div className={classes.questionOptionContiner}>
                    <RiDeleteBin6Line className={classes.questionOptionIcon} />
                    <MdOutlineContentCopy className={classes.questionOptionIcon} />
                    <BsThreeDotsVertical className={classes.questionOptionIcon} />
                </div>
            </div>
        </div>
    );
};
