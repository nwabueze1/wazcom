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
    var text = _a.text, status = _a.status, className = _a.className;
    return (_jsx(Typography, { className: clx("feedback", getFeedbackVariant(status), className), children: text }));
};
export var displayFeedback = function (feedback, className) {
    if (!isValidElement(feedback.text)) {
        return typeof feedback.text === "string" ? (_jsx(TextFeedback, { status: feedback.status, text: feedback.text, className: className })) : (feedback.text.map(function (text, index) { return (_jsx(TextFeedback, { status: feedback.status, text: text }, index)); }));
    }
    return _jsx(_Fragment, { children: feedback.text });
};
