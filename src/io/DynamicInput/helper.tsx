import { ShortAnswer } from "./components/Display/ShortAnswer/ShortAnswer";
import { Date } from "./components/Display/Date/Date";
import { Time } from "./components/Display/Time/Time";
import { InputComponentProps, QuestionOption } from "./types";
import { SampleInputDisplay } from "./components/Display/SampleInputDisplay/SampleInputDisplay";

export const useInputComponents = () => {
    return (
        questionOptions: QuestionOption[],
        setQuestionOptions: React.Dispatch<React.SetStateAction<QuestionOption[]>>,
        handleOptionMedia: (id: number) => void,
        handleRemoveOptionMedia: (id: number) => void,
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
                        handleOptionMedia={handleOptionMedia}
                        handleRemoveOptionMedia={handleRemoveOptionMedia}
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
                        handleOptionMedia={handleOptionMedia}
                        handleRemoveOptionMedia={handleRemoveOptionMedia}
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
                        handleOptionMedia={handleOptionMedia}
                        handleRemoveOptionMedia={handleRemoveOptionMedia}
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
