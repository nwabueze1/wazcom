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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { DisplayInput } from "./DisplayInput/DisplayInput";
export var SampleInputDisplay = function (_a) {
    var defaultCount = _a.defaultCount, setQuestionOptions = _a.setQuestionOptions, value = _a.value, type = _a.type, questionOptions = _a.questionOptions;
    var _b = __read(useState(defaultCount), 2), count = _b[0], setCount = _b[1];
    var _c = __read(useState(), 2), jsx = _c[0], setJSX = _c[1];
    useEffect(function () {
        if (questionOptions[0] === "") {
            setQuestionOptions === null || setQuestionOptions === void 0 ? void 0 : setQuestionOptions(__spreadArray([], __read(Array(defaultCount)), false).map(function (_, idx) { return "".concat(value, " ").concat(idx + 1); }));
        }
    }, []);
    useEffect(function () {
        if (questionOptions[0] === "") {
            setJSX(__spreadArray([], __read(Array(count)), false).map(function (_, idx) { return (_jsx(DisplayInput, { handleRemove: function () { return handleRemove(idx); }, onFocus: function () { return handleFocus(idx); }, index: idx, value: questionOptions[idx], handleChange: function (value) { return handleChange(value, idx); }, type: type }, idx)); }));
        }
        else {
            setJSX(questionOptions.map(function (option, idx) { return (_jsx(DisplayInput, { handleRemove: function () { return handleRemove(idx); }, onFocus: function () { return handleFocus(idx); }, index: idx, value: option, handleChange: function (value) { return handleChange(value, idx); }, type: type }, idx)); }));
        }
    }, [count, questionOptions, type]);
    var handleFocus = function (idx) {
        if (idx === questionOptions.length - 1) {
            setCount(function (count) { return count + 1; });
            setQuestionOptions === null || setQuestionOptions === void 0 ? void 0 : setQuestionOptions(function (inputValue) { return __spreadArray(__spreadArray([], __read(inputValue), false), ["".concat(value, " ").concat(idx + 2)], false); });
        }
    };
    var handleChange = function (value, idx) {
        setQuestionOptions === null || setQuestionOptions === void 0 ? void 0 : setQuestionOptions(function (questionOptions) {
            questionOptions.splice(idx, 1, value);
            return questionOptions;
        });
    };
    var handleRemove = function (idx) {
        jsx === null || jsx === void 0 ? void 0 : jsx.splice(idx, 1);
        questionOptions === null || questionOptions === void 0 ? void 0 : questionOptions.splice(idx, 1);
        setJSX(jsx);
        setCount(function (count) { return count - 1; });
        setQuestionOptions === null || setQuestionOptions === void 0 ? void 0 : setQuestionOptions(function () {
            return questionOptions;
        });
    };
    return _jsx(_Fragment, { children: jsx }, void 0);
};
