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
    var question = _a.question, setAnswers = _a.setAnswers, setPoint = _a.setPoint, resetDisplay = _a.resetDisplay, active = _a.active;
    var classes = useOutputStyles();
    var displayInput = function () {
        switch (question.type) {
            case "short_answer":
                return _jsx(TextInput, { name: "short_answer", placeholder: question.type });
            case "paragraph":
                return _jsx(TextInput, { name: "paragraph", placeholder: question.type });
            case "dropdown":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers });
            case "checkboxes":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers });
            case "multiple":
                return _jsx(InputDisplay, { question: question, setAnswers: setAnswers });
            default:
                return _jsx(TextInput, { name: question.type });
        }
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [active && (_jsxs("div", __assign({ className: classes.title }, { children: [_jsx(BsClipboardCheck, { className: classes.outputIcon }), "Choose Correct Answers"] }))), _jsxs("div", __assign({ className: classes.outputOverAllContainer }, { children: [_jsxs("div", __assign({ className: classes.outputQuestionContainer }, { children: [_jsxs("p", { children: [_jsx("span", { dangerouslySetInnerHTML: { __html: question.text } }), question.text !== "" && question.required && (_jsx("span", __assign({ className: classes.outputRequired }, { children: "*" })))] }), active && (_jsxs("div", __assign({ className: classes.outputPoints }, { children: [_jsx(TextInput, { type: "number", classNames: {
                                            textInput: classes.outputTextInput,
                                            newRoot: classes.outputNumberInput,
                                        }, value: question.point, id: "standard-basic", onChange: function (event) { return setPoint(parseFloat(event.value)); } }), _jsx("p", { children: "points" })] })))] })), (question === null || question === void 0 ? void 0 : question.supportImage) && (_jsx("img", { src: question === null || question === void 0 ? void 0 : question.supportImage.value.url, className: classes.outputSupportImage })), _jsx("div", __assign({ className: classes.outputAnswer }, { children: displayInput() })), active && (_jsx("div", __assign({ className: classes.outputDone }, { children: _jsx(Button, __assign({ variant: "outlined", onClick: resetDisplay }, { children: "Done" })) })))] }))] })));
};
