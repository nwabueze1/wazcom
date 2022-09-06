var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosSearch } from "react-icons/io";
import { useTableControlsStyles } from "./styles";
export var SearchInput = function (_a) {
    var onChange = _a.onChange, placeholder = _a.placeholder, className = _a.className, value = _a.value, type = _a.type, name = _a.name;
    var classes = useTableControlsStyles();
    return (_jsxs("div", __assign({ className: classes.controlsInputField }, { children: [_jsx(IoIosSearch, { className: classes.searchIcon }, void 0), _jsx("input", { onChange: onChange, placeholder: placeholder, className: className, value: value, type: type, name: name }, void 0)] }), void 0));
};
