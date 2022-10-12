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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDynamicInputStyles } from "./styles";
import clx from "classnames";
import { EditableTextInput } from "../../io/EditableTextInput";
import { SelectInput } from "../../io/SelectInput";
import { defaultInputs as options } from "./data";
import { useInputComponents } from "./helper";
import { Button } from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToggleInput } from "../ToggleInput/ToggleInput";
import { Output } from "./components/Output/Output";
var selectProps = {
    options: options,
    error: true,
    required: true,
};
export var DynamicInput = function (_a) {
    var _b;
    var handleSetQuestion = _a.handleSetQuestion, handleDelete = _a.handleDelete, handleDuplicate = _a.handleDuplicate, defaultQuestion = _a.defaultQuestion;
    var classes = useDynamicInputStyles();
    var inputComponents = useInputComponents();
    var _c = __read(useState([""]), 2), questionOptions = _c[0], setQuestionOptions = _c[1];
    var _d = __read(useState(false), 2), displayOutput = _d[0], setDisplayOutput = _d[1];
    var _e = __read(useState({
        name: "required",
        value: true,
    }), 2), required = _e[0], setRequired = _e[1];
    var _f = __read(useState(defaultQuestion !== null && defaultQuestion !== void 0 ? defaultQuestion : {
        text: "",
        type: "dropdown",
        options: questionOptions,
        required: true,
        answers: [0],
        point: 0,
    }), 2), question = _f[0], setQuestion = _f[1];
    useEffect(function () {
        setQuestion(function (question) {
            return __assign(__assign({}, question), { options: questionOptions });
        });
    }, [questionOptions]);
    useEffect(function () {
        setQuestion(function (question) {
            return __assign(__assign({}, question), { required: required.value });
        });
    }, [required]);
    useEffect(function () {
        handleSetQuestion === null || handleSetQuestion === void 0 ? void 0 : handleSetQuestion(question);
    }, [question]);
    var handleChange = function (event) {
        setQuestion(function (question) { return (__assign(__assign({}, question), { type: event.value })); });
        handleSetPoint(0);
    };
    var handleAnswer = function () {
        setDisplayOutput(true);
    };
    var handleSetAnswers = function (answers) {
        setQuestion(function (questions) { return (__assign(__assign({}, questions), { answers: answers })); });
    };
    var handleSetPoint = function (point) {
        setQuestion(function (questions) { return (__assign(__assign({}, questions), { point: point })); });
    };
    var handleSetTitle = function (text) {
        setQuestion(function (questions) { return (__assign(__assign({}, questions), { text: text })); });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root) }, { children: [!displayOutput && (_jsxs("div", __assign({ className: classes.inputControlsContainer }, { children: [_jsx("div", __assign({ className: classes.editableTextInput }, { children: _jsx(EditableTextInput, { html: question.text, placeholder: "Question", setHtml: handleSetTitle }, void 0) }), void 0), _jsx(SelectInput, __assign({}, selectProps, { onChange: handleChange, className: classes.selectInputContainer }), void 0)] }), void 0)), !displayOutput &&
                ((_b = inputComponents(questionOptions, setQuestionOptions).find(function (input) { return input.name === question.type; })) === null || _b === void 0 ? void 0 : _b.component), !displayOutput && (_jsxs("div", __assign({ className: classes.questionSection }, { children: [_jsxs("div", __assign({ className: classes.questionContainer }, { children: [_jsxs(Button, __assign({ onClick: handleAnswer, variant: "outlined", color: "primary", className: classes.questionButton }, { children: [_jsx(QuestionAnswer, { className: classes.questionIcon }, void 0), "Answer Key"] }), void 0), _jsxs("div", __assign({ className: classes.questionPoint }, { children: ["(", question.point, " points)"] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.questionOptionContiner }, { children: [_jsx(RiDeleteBin6Line, { className: classes.questionOptionIcon, onClick: handleDelete }, void 0), _jsxs("div", __assign({ className: classes.questionRequired }, { children: [_jsx("p", __assign({ className: classes.questionText }, { children: "Required" }), void 0), _jsx(ToggleInput, { name: required.name, value: required.value, onChange: setRequired }, void 0)] }), void 0), _jsx(MdOutlineContentCopy, { className: classes.questionOptionIcon, onClick: handleDuplicate }, void 0), _jsx(BsThreeDotsVertical, { className: classes.questionOptionIcon }, void 0)] }), void 0)] }), void 0)), displayOutput && (_jsx(Output, { question: question, setAnswers: handleSetAnswers, setPoint: handleSetPoint, resetDisplay: function () { return setDisplayOutput(false); } }, void 0))] }), void 0));
};
