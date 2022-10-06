import { FC, useEffect, useState } from "react";
import { SampleInputDisplayProps } from "./types";
import { DisplayInput } from "./DisplayInput/DisplayInput";

export const SampleInputDisplay: FC<SampleInputDisplayProps> = ({ defaultCount, value, type }) => {
    const [count, setCount] = useState(defaultCount);
    const [jsx, setJSX] = useState<JSX.Element[] | null>();
    const [inputValues, setInputValues] = useState<string[]>([""]);

    useEffect(() => {
        setInputValues([...Array(defaultCount)].map((_, idx) => `${value} ${idx + 1}`));
    }, []);

    useEffect(() => {
        setJSX(
            [...Array(count)].map((_, idx) => (
                <DisplayInput
                    handleRemove={() => handleRemove(idx)}
                    onFocus={() => handleFocus(idx)}
                    index={idx}
                    key={idx}
                    value={inputValues[idx]}
                    handleChange={(value: string) => handleChange(value, idx)}
                    type={type}
                />
            )),
        );
    }, [count, inputValues, type]);

    const handleFocus = (idx: number) => {
        if (idx === count - 1) {
            setCount((count) => count + 1);
            setInputValues((inputValue) => [...inputValue, `${value} ${idx + 2}`]);
        }
    };

    const handleChange = (value: string, idx: number) => {
        setInputValues((inputValues) => {
            inputValues.splice(idx, 1, value);
            return inputValues;
        });
    };

    const handleRemove = (idx: number) => {
        jsx?.splice(idx, 1);
        inputValues?.splice(idx, 1);
        setJSX(jsx);
        setCount((count) => count - 1);
        setInputValues(inputValues);
    };

    return <>{jsx}</>;
};
