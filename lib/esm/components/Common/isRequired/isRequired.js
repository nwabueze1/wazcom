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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useStyles } from "./styles";
export var IsRequired = function (_a) {
    var error = _a.error, errorMessage = _a.errorMessage, name = _a.name;
    var classes = useStyles();
    return _jsx(_Fragment, { children: error && (_jsx("p", __assign({ className: classes.error_message }, { children: errorMessage !== null && errorMessage !== void 0 ? errorMessage : (name === null || name === void 0 ? void 0 : name.replace(/_/g, " ")) + " is required" }), void 0)) }, void 0);
};
