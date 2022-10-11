import { FC, useEffect, useState } from "react";
import { SampleInputDisplayProps } from "./types";
import { DisplayInput } from "./DisplayInput/DisplayInput";

export const SampleInputDisplay: FC<SampleInputDisplayProps> = ({
    defaultCount,
    setQuestionOptions,
    value,
    type,
    questionOptions,
}) => {
    const [count, setCount] = useState(defaultCount);
    const [jsx, setJSX] = useState<JSX.Element[] | null>();

    useEffect(() => {
        if (questionOptions[0] === "") {
            setQuestionOptions?.([...Array(defaultCount)].map((_, idx) => `${value} ${idx + 1}`));
        }
    }, []);

    useEffect(() => {
        if (questionOptions[0] === "") {
            setJSX(
                [...Array(count)].map((_, idx) => (
                    <DisplayInput
                        handleRemove={() => handleRemove(idx)}
                        onFocus={() => handleFocus(idx)}
                        index={idx}
                        key={idx}
                        value={questionOptions[idx]}
                        handleChange={(value: string) => handleChange(value, idx)}
                        type={type}
                    />
                )),
            );
        } else {
            setJSX(
                questionOptions.map((option, idx) => (
                    <DisplayInput
                        handleRemove={() => handleRemove(idx)}
                        onFocus={() => handleFocus(idx)}
                        index={idx}
                        key={idx}
                        value={option}
                        handleChange={(value: string) => handleChange(value, idx)}
                        type={type}
                    />
                )),
            );
        }
    }, [count, questionOptions, type]);

    const handleFocus = (idx: number) => {
        if (idx === questionOptions.length - 1) {
            setCount((count) => count + 1);
            setQuestionOptions?.((inputValue) => [...inputValue, `${value} ${idx + 2}`]);
        }
    };

    const handleChange = (value: string, idx: number) => {
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
