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
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
export var Content = function () {
    var classes = useStyles();
    return (_jsxs(Grid, __assign({ container: true, component: "main", className: classes.root }, { children: [_jsx("h2", __assign({ className: classes.header }, { children: "Allow PayPal to connect your account with ZEUS" }), void 0), _jsx("p", { children: "In order for PayPal to work properly on our site, you need to athorize ZEUS to:" }, void 0), _jsxs("ul", __assign({ className: classes.list }, { children: [_jsx("li", __assign({ className: classes.item }, { children: "Automatically deduct their fee from each PayPal transaction prior to the remaining balance setting to your PayPal account. The amount of this fee, is subject to your agreement with ZEUS." }), void 0), _jsx("li", __assign({ className: classes.item }, { children: "Hold and release funds on my behalf in accordance to ZEUS policy." }), void 0), _jsxs("li", __assign({ className: classes.item }, { children: ["Use PayPal to process my customers", "'", " payments."] }), void 0), _jsx("li", __assign({ className: classes.item }, { children: "Search through and access corresponding transactions data." }), void 0), _jsxs("li", __assign({ className: classes.item }, { children: ["Initiate steps to authorize and capture customers", "'", " payment"] }), void 0), _jsx("li", __assign({ className: classes.item }, { children: "Access my email and location information for purposes of linking with my PayPal account for integration." }), void 0)] }), void 0), _jsxs("p", __assign({ className: classes.permission }, { children: ["You can revoke these permissions at any time from within your PayPal account", "'", "s tool section."] }), void 0)] }), void 0));
};
