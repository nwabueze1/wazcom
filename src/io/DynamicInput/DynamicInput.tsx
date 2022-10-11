import { FC, useState, useEffect } from "react";
import { useDynamicInputStyles } from "./styles";
import { Any, DynamicInputProps, QuestionProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "../../io/EditableTextInput";
import { SelectInput } from "../../io/SelectInput";
import { defaultInputs as options } from "./data";
import { useInputComponents } from "./helper";
import { Button } from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToggleInput } from "../ToggleInput/ToggleInput";
import { Output } from "./components/Output/Output";

const selectProps = {
    options,
    error: true,
    required: true,
};

export const DynamicInput: FC<DynamicInputProps> = () => {
    const classes = useDynamicInputStyles();
    const inputComponents = useInputComponents();
    const [questionOptions, setQuestionOptions] = useState<string[]>([""]);
    const [displayOutput, setDisplayOutput] = useState(false);
    const [required, setRequired] = useState<{
        name: string;
        value: boolean;
    }>({
        name: "required",
        value: true,
    });
    const [question, setQuestion] = useState<QuestionProps>({
        text: "Address",
        type: "dropdown",
        options: questionOptions,
        required: true,
        answers: [0],
        point: 0,
    });

    useEffect(() => {
        setQuestion((question) => {
            return { ...question, options: questionOptions };
        });
    }, [questionOptions]);

    useEffect(() => {
        setQuestion((question) => {
            return { ...question, required: required.value };
        });
    }, [required]);

    const handleChange = (event: { name: string; value: string }) => {
        setQuestion((question) => ({ ...question, type: event.value }));
        handleSetPoint(0);
    };

    const handleAnswer = () => {
        setDisplayOutput(true);
    };

    const handleSetAnswers = (answers: Any[]) => {
        setQuestion((questions) => ({ ...questions, answers }));
    };

    const handleSetPoint = (point: number) => {
        setQuestion((questions) => ({ ...questions, point }));
    };

    const handleSetTitle = (text: string | JSX.Element) => {
        setQuestion((questions) => ({ ...questions, text }));
    };
    return (
        <div className={clx(classes.root)}>
            {!displayOutput && (
                <div className={classes.inputControlsContainer}>
                    <div className={classes.editableTextInput}>
                        <EditableTextInput placeholder="Question" setHtml={handleSetTitle} />
                    </div>
                    <SelectInput
                        {...selectProps}
                        onChange={handleChange}
                        className={classes.selectInputContainer}
                    />
                </div>
            )}
            {!displayOutput &&
                inputComponents(questionOptions, setQuestionOptions).find(
                    (input) => input.name === question.type,
                )?.component}
            {!displayOutput && (
                <div className={classes.questionSection}>
                    <div className={classes.questionContainer}>
                        <Button
                            onClick={handleAnswer}
                            variant="outlined"
                            color="primary"
                            className={classes.questionButton}
                        >
                            <QuestionAnswer className={classes.questionIcon} />
                            Answer Key
                        </Button>
                        <div className={classes.questionPoint}>({question.point} points)</div>
                    </div>
                    <div className={classes.questionOptionContiner}>
                        <RiDeleteBin6Line className={classes.questionOptionIcon} />
                        <div className={classes.questionRequired}>
                            <p className={classes.questionText}>Required</p>
                            <ToggleInput
                                name={required.name}
                                value={required.value}
                                onChange={setRequired}
                            />
                        </div>
                        <MdOutlineContentCopy className={classes.questionOptionIcon} />
                        <BsThreeDotsVertical className={classes.questionOptionIcon} />
                    </div>
                </div>
            )}
            {displayOutput && (
                <Output
                    question={question}
                    setAnswers={handleSetAnswers}
                    setPoint={handleSetPoint}
                    resetDisplay={() => setDisplayOutput(false)}
                />
            )}
        </div>
    );
};
