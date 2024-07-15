import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RadioButtonInput } from "../../../../io";
import { usePaymentOptionStyles } from "./styles";
import clx from "classnames";
export var PaymentOption = function (_a) {
    var img = _a.img, title = _a.title, value = _a.value, name = _a.name, handleChange = _a.handleChange, className = _a.className;
    var classes = usePaymentOptionStyles();
    return (_jsx(_Fragment, { children: _jsxs("div", { className: clx(classes.root, className), children: [_jsx("div", { className: classes.optionDetails, children: _jsxs("div", { className: classes.paymentOptionItem, children: [_jsx("img", { src: img, alt: name, className: classes.paymentImage }), _jsx("div", { className: classes.paymentOptionDetail, children: _jsx("p", { className: classes.paymentOptionTitle, children: title }) })] }) }), _jsx("div", { className: classes.paymentRadio, children: _jsx(RadioButtonInput, { name: name, value: Boolean(value == name), onChange: function (_a) {
                            var checked = _a.value;
                            checked && handleChange(name);
                        } }) })] }) }));
};
