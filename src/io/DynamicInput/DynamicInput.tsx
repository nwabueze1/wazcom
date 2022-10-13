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
import { BsFillImageFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToggleInput } from "../ToggleInput/ToggleInput";
import { Output } from "./components/Output/Output";

const selectProps = {
    options,
    error: true,
    required: true,
};

export const DynamicInput: FC<DynamicInputProps> = ({
    handleSetQuestion,
    handleDelete,
    handleDuplicate,
    defaultQuestion,
    handleOpenLibrary,
    handleDeleteMediaQuestion,
    active,
}) => {
    const classes = useDynamicInputStyles();
    const inputComponents = useInputComponents();
    const [questionOptions, setQuestionOptions] = useState<string[]>(
        defaultQuestion?.options ?? [""],
    );
    const [displayOutput, setDisplayOutput] = useState(false);
    const [required, setRequired] = useState<{
        name: string;
        value: boolean;
    }>({
        name: "required",
        value: true,
    });
    const [question, setQuestion] = useState<QuestionProps>(
        defaultQuestion ?? {
            text: "",
            type: "dropdown",
            options: questionOptions,
            required: true,
            answers: [0],
            point: 0,
        },
    );

    useEffect(() => {
        if (!active) {
            setDisplayOutput(true);
        }
    }, [active]);

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

    useEffect(() => {
        handleSetQuestion?.(question);
    }, [question]);

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
                        <EditableTextInput
                            html={question.text as string}
                            placeholder="Question"
                            setHtml={handleSetTitle}
                        />
                    </div>
                    {defaultQuestion?.type !== "media" && (
                        <div className={classes.questionMediaIcon} onClick={handleOpenLibrary}>
                            <BsFillImageFill />
                        </div>
                    )}
                    {defaultQuestion?.supportImage && (
                        <div
                            className={classes.questionMediaIcon}
                            onClick={handleDeleteMediaQuestion}
                        >
                            <RiDeleteBin6Line />
                        </div>
                    )}
                    {defaultQuestion?.type !== "media" && (
                        <SelectInput
                            {...selectProps}
                            onChange={handleChange}
                            className={classes.selectInputContainer}
                        />
                    )}
                </div>
            )}
            {!displayOutput && defaultQuestion?.supportImage && active && (
                <img
                    src={defaultQuestion?.supportImage.value.url}
                    className={classes.questionSupportImage}
                />
            )}
            {defaultQuestion?.type === "media" && defaultQuestion.media && (
                <img src={defaultQuestion?.media.value.url} className={classes.questionImage} />
            )}
            {!displayOutput &&
                defaultQuestion?.type !== "media" &&
                inputComponents(questionOptions, setQuestionOptions).find(
                    (input) => input.name === question.type,
                )?.component}
            {!displayOutput && defaultQuestion?.type !== "media" && (
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
                        <RiDeleteBin6Line
                            className={classes.questionOptionIcon}
                            onClick={handleDelete}
                        />
                        <div className={classes.questionRequired}>
                            <p className={classes.questionText}>Required</p>
                            <ToggleInput
                                name={required.name}
                                value={required.value}
                                onChange={setRequired}
                            />
                        </div>
                        <MdOutlineContentCopy
                            className={classes.questionOptionIcon}
                            onClick={handleDuplicate}
                        />
                        <BsThreeDotsVertical className={classes.questionOptionIcon} />
                    </div>
                </div>
            )}
            {displayOutput && defaultQuestion?.type !== "media" && (
                <Output
                    question={question}
                    setAnswers={handleSetAnswers}
                    setPoint={handleSetPoint}
                    resetDisplay={() => setDisplayOutput(false)}
                    active={active}
                />
            )}
        </div>
    );
};
