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
import { useMbmcBlock4Styles } from "./styles";
import { MbmcCard } from "templates/mbmc/components/MbmcCard";
export var MbmcBlock4 = function (_a) {
    var heading = _a.heading, description = _a.description, cards = _a.cards;
    var classes = useMbmcBlock4Styles();
    var displayCards = function () {
        return (cards !== null && cards !== void 0 ? cards : []).map(function (card, index) { return (_jsx(MbmcCard, __assign({}, card, { className: classes.block4Card, classNames: { heading: classes.block4CardHeading } }), index)); });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block6Container }, { children: [_jsxs("div", __assign({ className: classes.block4Content }, { children: [_jsx("h3", __assign({ className: classes.block4Title }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.block4Description }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.block4CardContainer }, { children: displayCards() }), void 0)] }), void 0) }), void 0));
};
