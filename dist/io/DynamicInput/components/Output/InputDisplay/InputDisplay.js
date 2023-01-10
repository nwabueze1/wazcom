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
import { Input } from "./Input/Input";
export var InputDisplay = function (_a) {
    var setAnswers = _a.setAnswers, question = _a.question;
    var _b = __read(useState(), 2), jsx = _b[0], setJSX = _b[1];
    useEffect(function () {
        setJSX(question.options.map(function (value, idx) { return (_jsx(Input, { index: idx, value: value.text, handleSelect: function () { return handleSelect(idx); }, type: question.type, checked: question.answers.some(function (answer) { return answer === idx; }) }, idx)); }));
    }, [question]);
    var handleSelect = function (idx) {
        if (question.answers.some(function (answer) { return answer === idx; })) {
            setAnswers(__spreadArray([], __read(question.answers.filter(function (answer) { return answer !== idx; })), false));
        }
        else {
            setAnswers(__spreadArray(__spreadArray([], __read(question.answers), false), [idx], false));
        }
    };
    return _jsx(_Fragment, { children: jsx });
};
