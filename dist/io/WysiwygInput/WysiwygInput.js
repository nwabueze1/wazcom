import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCreatePostInputStyles } from "./styles";
import { Editor } from "./Editor";
import { EditorToolbar } from "./EditorToolbar";
import clx from "classnames";
export var WysiwygInput = function (_a) {
    var _b, _c;
    var className = _a.className, onChange = _a.onChange, value = _a.value, embed = _a.embed, initiateEmbed = _a.initiateEmbed, _d = _a.hasTitle, hasTitle = _d === void 0 ? true : _d;
    var classes = useCreatePostInputStyles();
    var handleTitleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "title", value: event.target.value });
    };
    var handleContentChange = function (content) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "content", value: content });
    };
    return (_jsx("div", { className: clx(className, classes.root), children: _jsxs("div", { className: classes.postTitleInputParent, children: [_jsx(EditorToolbar, { initiateEmbed: initiateEmbed }), hasTitle && (_jsx("input", { placeholder: "Add post title", className: classes.postTitleInput, value: (_b = value === null || value === void 0 ? void 0 : value.title) !== null && _b !== void 0 ? _b : "", onChange: handleTitleChange })), _jsx(Editor, { content: (_c = value === null || value === void 0 ? void 0 : value.content) !== null && _c !== void 0 ? _c : "", handleChange: handleContentChange, embed: embed })] }) }));
};
