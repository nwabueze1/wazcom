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
import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput } from "../../../../../io";
import { GroupedInput } from "../GroupedInput";
export var FormControl = function (_a) {
    var type = _a.type, properties = _a.properties;
    var getControl = function () {
        var controlProps = properties;
        switch (type) {
            case "text":
                return _jsx(TextInput, __assign({}, controlProps));
            case "groupedInput":
                return _jsx(GroupedInput, __assign({}, controlProps));
            default:
                return _jsx(TextInput, __assign({}, controlProps));
        }
    };
    return getControl();
};
