import { FC, useEffect, useState } from "react"
import { DefaultInputsStateProps } from "../../types"

export const DefaultInputState: FC<DefaultInputsStateProps> = ({ input: Input, defaultCount, defaultValue }) => {
    const [count, setCount] = useState(defaultCount);
    const [jsx, setJSX] = useState<JSX.Element[] | null>();
    const [inputValues, setInputValues] = useState<string[]>([""]);

    useEffect(() => {
        setInputValues([...Array(defaultCount)].map((_, idx) => `${defaultValue} ${idx + 1}`))
    }, []);

    useEffect(() => {
        setJSX([...Array(count)].map((_, idx) => (<Input handleRemove={() => handleRemove(idx)} onFocus={() => handleFocus(idx)} index={idx} key={idx} defaultValue={inputValues[idx]} setCount={setCount} />)))
    }, [count, inputValues]);

    const handleFocus = (idx: number) => {
        if (idx === count - 1) {
            setCount(count => count + 1)
            setInputValues(inputValue => [...inputValue, `${defaultValue} ${idx + 2}`])
        }
    }

    const handleRemove = (idx: number) => {
        jsx?.splice(idx, 1)
        inputValues?.splice(idx, 1)
        setJSX(jsx);
        setCount(count => count - 1)
        setInputValues(inputValues)
    }

    return <>
        {jsx}
    </>

}