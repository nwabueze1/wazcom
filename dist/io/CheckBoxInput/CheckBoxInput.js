import { jsx as _jsx } from "react/jsx-runtime";
import Checkbox from "@mui/material/Checkbox";
export var CheckBoxInput = function (_a) {
    var className = _a.className, label = _a.label, checked = _a.checked, handleCheckChange = _a.handleCheckChange;
    return (_jsx(Checkbox, { checked: checked, className: className, onChange: handleCheckChange, inputProps: { "aria-label": label } }, void 0));
};
