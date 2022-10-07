import { ShortAnswer } from "./components/Display/ShortAnswer/ShortAnswer";
import { Date } from "./components/Display/Date/Date";
import { Time } from "./components/Display/Time/Time";
import { InputComponentProps } from "./types";
import { SampleInputDisplay } from "./components/Display/SampleInputDisplay/SampleInputDisplay";

export const useInputComponents = () => {
    return (
        questionOptions: string[],
        setQuestionOptions: React.Dispatch<React.SetStateAction<string[]>>,
    ) => {
        const inputComponents: InputComponentProps[] = [
            {
                name: "short_answer",
                component: <ShortAnswer placeholderText="Short Answer Text" />,
            },
            {
                name: "paragraph",
                component: <ShortAnswer placeholderText="Long Answer Text" />,
            },
            {
                name: "dropdown",
                component: (
                    <SampleInputDisplay
                        setQuestionOptions={setQuestionOptions}
                        questionOptions={questionOptions}
                        type="dropdown"
                        defaultCount={4}
                        value="optional"
                    />
                ),
            },
            {
                name: "checkboxes",
                component: (
                    <SampleInputDisplay
                        setQuestionOptions={setQuestionOptions}
                        questionOptions={questionOptions}
                        type="checkboxes"
                        defaultCount={4}
                        value="optional"
                    />
                ),
            },
            {
                name: "multiple",
                component: (
                    <SampleInputDisplay
                        setQuestionOptions={setQuestionOptions}
                        questionOptions={questionOptions}
                        type="multiple"
                        defaultCount={4}
                        value="optional"
                    />
                ),
            },
            {
                name: "file",
                component: <ShortAnswer placeholderText="Long Answer Text" />,
            },
            {
                name: "date",
                component: <Date />,
            },
            {
                name: "time",
                component: <Time />,
            },
        ];
        return inputComponents;
    };
};
