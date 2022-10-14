import { FC, useEffect, useState } from "react";
import { SampleInputDisplayProps } from "./types";
import { DisplayInput } from "./DisplayInput/DisplayInput";
import { QuestionOption } from "../../../types";
import { useDisplayInputStyles } from "./DisplayInput/styles";
import { MdOutlineCancel } from "react-icons/md";

export const SampleInputDisplay: FC<SampleInputDisplayProps> = ({
    defaultCount,
    setQuestionOptions,
    value,
    type,
    questionOptions,
    handleOptionMedia,
    handleRemoveOptionMedia,
}) => {
    const classes = useDisplayInputStyles();
    const [count, setCount] = useState(defaultCount);
    const [jsx, setJSX] = useState<JSX.Element[] | null>();

    useEffect(() => {
        if (questionOptions[0].text === "") {
            setQuestionOptions?.(
                [...Array(defaultCount)].map((_, idx) => ({ ..._, text: `${value} ${idx + 1}` })),
            );
        }
    }, []);

    useEffect(() => {
        if (questionOptions[0].text === "") {
            setJSX(
                [...Array(count)].map((_, idx) => (
                    <div key={idx}>
                        <DisplayInput
                            handleRemove={() => handleRemove(idx)}
                            onFocus={() => handleFocus(idx)}
                            handleOptionMedia={() => handleOptionMedia(idx)}
                            index={idx}
                            key={idx}
                            value={questionOptions[idx]}
                            handleChange={(value: QuestionOption) => handleChange(value, idx)}
                            type={type}
                        />
                    </div>
                )),
            );
        } else {
            setJSX(
                questionOptions.map((option, idx) => (
                    <div key={idx}>
                        <DisplayInput
                            handleRemove={() => handleRemove(idx)}
                            onFocus={() => handleFocus(idx)}
                            handleOptionMedia={() => handleOptionMedia(idx)}
                            index={idx}
                            value={option}
                            handleChange={(value: QuestionOption) => handleChange(value, idx)}
                            type={type}
                        />
                        {option.media && (
                            <div className={classes.mediaContainer}>
                                <MdOutlineCancel
                                    className={classes.mediaCancelIcon}
                                    onClick={() => handleRemoveOptionMedia(idx)}
                                />
                                <img src={option.media.value.url} className={classes.media} />
                            </div>
                        )}
                    </div>
                )),
            );
        }
    }, [count, questionOptions, type]);

    const handleFocus = (idx: number) => {
        if (idx === questionOptions.length - 1) {
            setCount((count) => count + 1);
            setQuestionOptions?.((inputValue) => [...inputValue, { text: `${value} ${idx + 2}` }]);
        }
    };

    const handleChange = (value: QuestionOption, idx: number) => {
        setQuestionOptions?.((questionOptions) => {
            questionOptions.splice(idx, 1, value);
            return questionOptions;
        });
    };

    const handleRemove = (idx: number) => {
        jsx?.splice(idx, 1);
        questionOptions?.splice(idx, 1);
        setJSX(jsx);
        setCount((count) => count - 1);
        setQuestionOptions?.(() => {
            return questionOptions;
        });
    };

    return <>{jsx}</>;
};
