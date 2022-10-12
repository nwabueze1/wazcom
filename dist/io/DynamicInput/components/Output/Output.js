var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsClipboardCheck } from "react-icons/bs";
import { useOutputStyles } from "./styles";
import { TextInput } from "../../../TextInput/TextInput";
import { Button } from "@mui/material";
import { InputDisplay } from "./InputDisplay/InputDisplay";
export var Output = function (_a) {
    var question = _a.question, setAnswers = _a.setAnswers, setPoint = _a.setPoint, resetDisplay = _a.resetDisplay;
    var classes = useOutputStyles();
    var displayInput = function () {
        switch (question.type) {
            case "short_answer":
                return _jsx(TextInput, { type: "text", placeholder: question.type }, void 0);
            case "paragraph":
                return _jsx(TextInput, { type: "text", placeholder: question.type }, void 0);
            case "dropdown":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers }, void 0);
            case "checkboxes":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers }, void 0);
            case "multiple":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers }, void 0);
            default:
                return _jsx(TextInput, { type: "text" }, void 0);
        }
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.title }, { children: [_jsx(BsClipboardCheck, { className: classes.outputIcon }, void 0), "Choose Correct Answers"] }), void 0), _jsxs("div", __assign({ className: classes.outputOverAllContainer }, { children: [_jsxs("div", __assign({ className: classes.outputQuestionContainer }, { children: [_jsxs("p", { children: [_jsx("span", { dangerouslySetInnerHTML: { __html: question.text } }, void 0), question.text !== "" && question.required && (_jsx("span", __assign({ className: classes.outputRequired }, { children: "*" }), void 0))] }, void 0), _jsxs("div", __assign({ className: classes.outputPoints }, { children: [_jsx(TextInput, { type: "number", classNames: {
                                            textInput: classes.outputTextInput,
                                            newRoot: classes.outputNumberInput,
                                        }, value: question.point, id: "standard-basic", variant: "standard", onChange: function (event) { return setPoint(parseFloat(event.value)); } }, void 0), _jsx("p", { children: "points" }, void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.outputAnswer }, { children: displayInput() }), void 0), _jsx("div", __assign({ className: classes.outputDone }, { children: _jsx(Button, __assign({ variant: "outlined", onClick: resetDisplay }, { children: "Done" }), void 0) }), void 0)] }), void 0)] }), void 0));
};
