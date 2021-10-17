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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FormLabel, TextField } from "@mui/material";
import { usePriceStyles } from "./styles";
import Cookies from "universal-cookie";
export var Price = function (_a) {
    var label = _a.label, onChange = _a.onChange, value = _a.value, error = _a.error;
    var classes = usePriceStyles();
    var currency = new Cookies().get("site_currency");
    var determineSymbol = function (currency) {
        var symbol;
        switch (currency) {
            case "NGN":
                symbol = "N";
                break;
            case "USD":
                symbol = "$";
                break;
            case "GBP":
                symbol = "£";
                break;
            default:
                symbol = "N";
        }
        return symbol;
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsxs(FormLabel, __assign({ className: classes.label }, { children: [label, " "] }), void 0), _jsxs("div", __assign({ className: classes.inputControl }, { children: [_jsx("div", __assign({ className: classes.addon }, { children: determineSymbol(currency) }), void 0), _jsx(TextField, { variant: "outlined", placeholder: "Enter Price", name: "price", value: value, error: error, onChange: onChange, className: classes.field, type: "number" }, void 0)] }), void 0), error && (_jsx("div", { style: { marginTop: "0.5rem" } }, void 0))] }), void 0));
};
