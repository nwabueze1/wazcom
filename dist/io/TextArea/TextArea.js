import { jsx as _jsx } from "react/jsx-runtime";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
export var TextArea = function (_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, minRows = _a.minRows;
    var classes = useTextAreaStyles();
    return (_jsx("div", { children: _jsx(TextareaAutosize, { minRows: minRows, placeholder: name, className: classes.textarea, name: name, style: { width: "100%" }, value: value, onChange: function (e) {
                return onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: e.target.value });
            } }, void 0) }, void 0));
};
