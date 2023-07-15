export declare const getFeedbackVariant: (status: Feedback["status"]) => string;
export type Feedback = {
    text: string | string[] | JSX.Element;
    status?: "success" | "neutral" | "error";
};
export declare const displayFeedback: (feedback: Feedback, className?: string) => import("react/jsx-runtime").JSX.Element | import("react/jsx-runtime").JSX.Element[];
