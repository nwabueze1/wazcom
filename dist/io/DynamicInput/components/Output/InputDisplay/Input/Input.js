import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { MdCheckBoxOutlineBlank as CheckBoxOutlineBlank, MdOutlineRadioButtonUnchecked as RadioButtonUncheckedOutlined, } from "react-icons/md";
import { useDisplayInputStyles } from "./styles";
import { BiCheck } from "react-icons/bi";
export var Input = function (_a) {
    var handleSelect = _a.handleSelect, value = _a.value, index = _a.index, type = _a.type, checked = _a.checked;
    var classes = useDisplayInputStyles();
    var handleClick = function () {
        handleSelect();
    };
    var DisplayLabel = function () {
        switch (type) {
            case "dropdown":
                return _jsxs("p", { children: [index + 1, "."] });
            case "checkboxes":
                return _jsx(CheckBoxOutlineBlank, {});
            case "multiple":
                return _jsx(RadioButtonUncheckedOutlined, {});
            default:
                return _jsxs("p", { children: [index + 1, "."] });
        }
    };
    return (_jsxs("div", { className: classes.root, onClick: handleClick, children: [_jsxs("div", { className: classes.inputControl, children: [DisplayLabel(), _jsx("p", { className: classes.inputText, children: value })] }), checked && _jsx(BiCheck, { className: classes.inputIcon })] }));
};
