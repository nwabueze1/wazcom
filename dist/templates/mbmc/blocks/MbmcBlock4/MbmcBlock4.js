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
import { MbmcCard } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
export var MbmcBlock4 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, _c = _a.activeElement, activeElement = _c === void 0 ? "" : _c, handleClick = _a.handleClick, heading = _a.heading, description = _a.description, cards = _a.cards, url = _a.url;
    var classes = useMbmcBlock4Styles();
    var displayCards = function () {
        return (cards !== null && cards !== void 0 ? cards : []).map(function (card, cardIndex) {
            var _a;
            var parentKey = String(index) + ".cards." + String(cardIndex);
            return (_jsx(MbmcCard, __assign({}, card, { parentKey: parentKey, mode: mode, activeElement: activeElement, handleClick: handleClick, url: "".concat(url, "#").concat((_a = card.heading) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().replace(/ /g, "-")), className: classes.block4Card, classNames: { heading: classes.block4CardHeading } }), cardIndex));
        });
    };
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.block6Container }, { children: [_jsxs("div", __assign({ className: classes.block4Content }, { children: [_jsx("h3", __assign({ className: clx(classes.block4Heading, activeElement === "".concat(String(index), ".heading") && classes.block4ActiveElement), onClick: function () {
                                handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                            } }, { children: heading })), _jsx("p", __assign({ className: clx(classes.block4Description, activeElement === "".concat(String(index), ".description") && classes.block4ActiveElement), onClick: function () {
                                handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                            } }, { children: description }))] })), _jsxs("div", __assign({ className: classes.block4CardContainer }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/steam%402x.webp", className: classes.block4CardFlame }), displayCards(), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/steam%402x.webp", className: clx(classes.block4CardFlame, classes.block4CardFlameRight) })] }))] })) })));
};
