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
import { RadioButtonInput } from "io";
import { useDeliveryOptionStyles } from "./styles";
var DeliveryOption = function (_a) {
    var img = _a.img, value = _a.value, name = _a.name, handleChange = _a.handleChange, title = _a.title, description = _a.description;
    var classes = useDeliveryOptionStyles();
    return (_jsxs("div", __assign({ className: classes.deliveryDetail }, { children: [_jsx("div", { children: _jsxs("div", __assign({ className: classes.deliveryOptionItem }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { src: img, alt: name }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.deliveryOptionDetail }, { children: [_jsx("p", __assign({ className: classes.deliveryOptionTitle }, { children: title }), void 0), _jsx("p", __assign({ className: classes.deliveryOptionDescription }, { children: description }), void 0)] }), void 0)] }), void 0) }, void 0), _jsx("div", { children: _jsx(RadioButtonInput, { classNames: { radioButtonInput: classes.radioInput }, name: name, value: Boolean(value == name), onChange: handleChange }, void 0) }, void 0)] }), void 0));
};
export default DeliveryOption;
