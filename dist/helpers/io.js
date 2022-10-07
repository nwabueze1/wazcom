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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { isValidElement } from "react";
import Typography from "@mui/material/Typography";
import clx from "classnames";
import { useFeedbackStyles } from "./styles";
export var getFeedbackVariant = function (status) {
    var feedbackVariant;
    var classes = useFeedbackStyles();
    switch (status) {
        case "success":
            feedbackVariant = clx(classes.feedback, classes.feedbackSuccess);
            break;
        case "error":
            feedbackVariant = clx(classes.feedback, classes.feedbackError);
            break;
        case "neutral":
            feedbackVariant = clx(classes.feedback, classes.feedbackNeutral);
            break;
        default:
            feedbackVariant = clx(classes.feedback, classes.feedbackNeutral);
    }
    return feedbackVariant;
};
var TextFeedback = function (_a) {
    var text = _a.text, status = _a.status;
    return _jsx(Typography, __assign({ className: getFeedbackVariant(status) }, { children: text }), void 0);
};
export var displayFeedback = function (feedback) {
    if (!isValidElement(feedback.text)) {
        return typeof feedback.text === "string" ? (_jsx(TextFeedback, { status: feedback.status, text: feedback.text }, void 0)) : (feedback.text.map(function (text, index) { return (_jsx(TextFeedback, { status: feedback.status, text: text }, index)); }));
    }
    return _jsx(_Fragment, { children: feedback.text }, void 0);
};
