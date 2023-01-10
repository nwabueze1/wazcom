import { jsx as _jsx } from "react/jsx-runtime";
import { ShortAnswer } from "./components/Display/ShortAnswer/ShortAnswer";
import { Date } from "./components/Display/Date/Date";
import { Time } from "./components/Display/Time/Time";
import { SampleInputDisplay } from "./components/Display/SampleInputDisplay/SampleInputDisplay";
export var useInputComponents = function () {
    return function (questionOptions, setQuestionOptions, handleOptionMedia, handleRemoveOptionMedia) {
        var inputComponents = [
            {
                name: "short_answer",
                component: _jsx(ShortAnswer, { placeholderText: "Short Answer Text" }),
            },
            {
                name: "paragraph",
                component: _jsx(ShortAnswer, { placeholderText: "Long Answer Text" }),
            },
            {
                name: "dropdown",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "dropdown", defaultCount: 4, value: "optional" })),
            },
            {
                name: "checkboxes",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "checkboxes", defaultCount: 4, value: "optional" })),
            },
            {
                name: "multiple",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "multiple", defaultCount: 4, value: "optional" })),
            },
            {
                name: "file",
                component: _jsx(ShortAnswer, { placeholderText: "Long Answer Text" }),
            },
            {
                name: "date",
                component: _jsx(Date, {}),
            },
            {
                name: "time",
                component: _jsx(Time, {}),
            },
        ];
        return inputComponents;
    };
};
