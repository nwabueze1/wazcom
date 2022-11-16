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
import { useMbmcBlock8Styles } from "./styles";
import { TestimonialCard } from "../../../../templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "../../../../core/Carousel2";
import { sliceIntoChunks } from "../../../../utilities/mbmcblock";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
export var MbmcBlock8 = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, handleClick = _a.handleClick, activeElement = _a.activeElement, index = _a.index, heading = _a.heading, description = _a.description, cards = _a.cards;
    var classes = useMbmcBlock8Styles();
    var splitData = sliceIntoChunks(cards, 2);
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.headerContainer }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: clx(classes.headerTitle, activeElement === "".concat(String(index), ".heading") &&
                                classes.block8ActiveElement), onClick: function () {
                                handleElementClick(mode, "".concat(String(index), ".heading"), handleClick);
                            } }, { children: heading }), void 0), _jsx("p", __assign({ className: clx(classes.headerDescription, activeElement === "".concat(String(index), ".description") &&
                                classes.block8ActiveElement), onClick: function () {
                                handleElementClick(mode, "".concat(String(index), ".description"), handleClick);
                            } }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.headerCardContainer }, { children: _jsx(Carousel2, { classNames: { button: classes.navigationButton }, items: splitData.map(function (data, splitIndex) {
                            return {
                                component: (_jsx("div", __assign({ className: classes.carouselComponent }, { children: data.map(function (item, cardIndex) {
                                        var parentKey = String(index) + ".cards." + String(cardIndex + (splitIndex * 2));
                                        return (_jsx(TestimonialCard, { text: item.content, name: item.name, type: item.role, parentKey: parentKey, mode: mode, handleClick: handleClick, activeElement: activeElement }, cardIndex));
                                    }) }), void 0)),
                            };
                        }), className: classes.carousel }, void 0) }), void 0), _jsx("div", __assign({ className: classes.headerCardContainerMobile }, { children: _jsx(Carousel2, { items: cards.map(function (item, idx) { return ({
                            component: (_jsx("div", __assign({ className: classes.carouselComponent }, { children: _jsx(TestimonialCard, { text: item.content, name: item.name, type: item.role }, idx) }), void 0)),
                        }); }), className: classes.carousel, classNames: { button: classes.navigationButton, arrow: classes.arrow } }, void 0) }), void 0)] }), void 0) }), void 0));
};
