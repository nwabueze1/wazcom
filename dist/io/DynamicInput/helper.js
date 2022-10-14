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
                component: _jsx(ShortAnswer, { placeholderText: "Short Answer Text" }, void 0),
            },
            {
                name: "paragraph",
                component: _jsx(ShortAnswer, { placeholderText: "Long Answer Text" }, void 0),
            },
            {
                name: "dropdown",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "dropdown", defaultCount: 4, value: "optional" }, void 0)),
            },
            {
                name: "checkboxes",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "checkboxes", defaultCount: 4, value: "optional" }, void 0)),
            },
            {
                name: "multiple",
                component: (_jsx(SampleInputDisplay, { setQuestionOptions: setQuestionOptions, questionOptions: questionOptions, handleOptionMedia: handleOptionMedia, handleRemoveOptionMedia: handleRemoveOptionMedia, type: "multiple", defaultCount: 4, value: "optional" }, void 0)),
            },
            {
                name: "file",
                component: _jsx(ShortAnswer, { placeholderText: "Long Answer Text" }, void 0),
            },
            {
                name: "date",
                component: _jsx(Date, {}, void 0),
            },
            {
                name: "time",
                component: _jsx(Time, {}, void 0),
            },
        ];
        return inputComponents;
    };
};
