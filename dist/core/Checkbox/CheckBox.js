import { jsx as _jsx } from "react/jsx-runtime";
import Checkbox from "@mui/material/Checkbox";
export var CheckBox = function (_a) {
    var className = _a.className, label = _a.label, checked = _a.checked, handlecheckChange = _a.handlecheckChange;
    return (_jsx(Checkbox, { checked: checked, className: className, onChange: handlecheckChange, inputProps: { "aria-label": label } }, void 0));
};
