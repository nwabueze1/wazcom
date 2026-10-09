import { jsx as _jsx } from "react/jsx-runtime";
export var decodeText = function (word) {
    if (!word)
        return "";
    if (typeof word !== "string")
        word = JSON.stringify(word);
    return _jsx("span", { style: { whiteSpace: "pre-wrap" }, dangerouslySetInnerHTML: { __html: word } });
};
