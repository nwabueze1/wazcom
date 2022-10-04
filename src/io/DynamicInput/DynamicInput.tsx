import React, { FC, useEffect, useState } from "react";
import { useDynamicInputStyles } from "./styles";
import { DynamicInputProps, QuestionProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";
import { SelectInput } from "io/SelectInput";
import { defaultInputs as options } from "./data";
import { useInputComponents } from "./helper";
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
    const inputComponents = useInputComponents();
    const [questionOptions, setQuestionOptions] = useState<string[]>([""]);
    const [question, setQuestion] = useState<QuestionProps>({
        text: "Address",
        type: "dropdown",
        options: questionOptions,
        required: false,
    });

    console.log("question", question);

    useEffect(() => {
        setQuestion((question) => {
            return { ...question, options: questionOptions };
        });
    }, [questionOptions]);

    const handleChange = (event: { name: string; value: string }) => {
        setQuestion((question) => ({ ...question, type: event.value }));
    };

    return (
        <div className={clx(classes.root)}>
            <div className={classes.inputControlsContainer}>
                <div className={classes.editableTextInput}>
                    <EditableTextInput placeholder="Question" />
                </div>
                <SelectInput
                    {...selectProps}
                    onChange={handleChange}
                    className={classes.selectInputContainer}
                />
            </div>
            {
                inputComponents(setQuestionOptions).find((input) => input.name === question.type)
                    ?.component
            }
            <div className={classes.questionSection}>
                <div className={classes.questionContainer}>
                    <Button variant="outlined" color="primary" className={classes.questionButton}>
                        <QuestionAnswer className={classes.questionIcon} />
                        Answer Key
                    </Button>
                    <div className={classes.questionPoint}>(0 points)</div>
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
