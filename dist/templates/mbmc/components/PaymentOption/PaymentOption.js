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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RadioButtonInput } from "../../../../io";
import { usePaymentOptionStyles } from "./styles";
import { Collapse } from "@mui/material";
export var PaymentOption = function (_a) {
    var img = _a.img, title = _a.title, value = _a.value, name = _a.name, config = _a.config, handleChange = _a.handleChange;
    var classes = usePaymentOptionStyles();
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("div", __assign({ className: classes.optionDetails }, { children: _jsxs("div", __assign({ className: classes.paymentOptionItem }, { children: [_jsx("img", { src: img, alt: name, className: classes.paymentImage }, void 0), _jsx("div", __assign({ className: classes.paymentOptionDetail }, { children: _jsx("p", __assign({ className: classes.paymentOptionTitle }, { children: title }), void 0) }), void 0)] }), void 0) }), void 0), _jsx("div", { children: _jsx(RadioButtonInput, { classNames: { radioButtonInput: classes.radioInput }, name: name, value: Boolean(value == name), onChange: function () {
                                handleChange(name);
                            } }, void 0) }, void 0)] }), void 0), name === 'Bank_Transfer' && (value === name) && _jsxs(Collapse, __assign({ in: true, className: classes.paymentConfig }, { children: [_jsxs("p", __assign({ className: classes.paymentConfigOption }, { children: ["Bank - ", config === null || config === void 0 ? void 0 : config.bankName] }), void 0), _jsxs("p", __assign({ className: classes.paymentConfigOption }, { children: ["Account Name - ", config === null || config === void 0 ? void 0 : config.accountName] }), void 0), _jsxs("p", __assign({ className: classes.paymentConfigOption }, { children: ["Account Number - ", config === null || config === void 0 ? void 0 : config.accountNumber] }), void 0)] }), void 0)] }, void 0));
};
