/// <reference types="react" />
export declare const getFeedbackVariant: (status: Feedback["status"]) => string;
export declare type Feedback = {
    text: string | string[] | JSX.Element;
    status?: "success" | "neutral" | "error";
};
export declare const displayFeedback: (feedback: Feedback, className?: string | undefined) => JSX.Element | JSX.Element[];
