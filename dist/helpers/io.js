export var getFeedbackVariant = function (classes, feedback) {
    var feedbackVariant;
    switch (feedback.status) {
        case "success":
            feedbackVariant = classes.feedbackSuccess;
            break;
        case "error":
            feedbackVariant = classes.feedbackError;
            break;
        case "neutral":
            feedbackVariant = classes.feedbackNeutral;
            break;
        default:
            feedbackVariant = classes.feedbackNeutral;
    }
    return feedbackVariant;
};
