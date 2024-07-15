import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosSearch } from "react-icons/io";
import { useTableControlsStyles } from "./styles";
export var SearchInput = function (_a) {
    var onChange = _a.onChange, placeholder = _a.placeholder, className = _a.className, value = _a.value, type = _a.type, name = _a.name;
    var classes = useTableControlsStyles();
    return (_jsxs("div", { className: classes.controlsInputField, children: [_jsx(IoIosSearch, { className: classes.searchIcon }), _jsx("input", { onChange: onChange, placeholder: placeholder, className: className, value: value, type: type, name: name })] }));
};
