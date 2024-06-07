import { jsx as _jsx } from "react/jsx-runtime";
export var decodeText = function (word) {
    if (!word)
        return "";
    return _jsx("span", { style: { whiteSpace: "pre-wrap" }, dangerouslySetInnerHTML: { __html: word } });
};
