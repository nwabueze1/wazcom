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
import { TestimonialCard } from "templates/mbmc/components/TestimonialCard";
import { Carousel2 } from "core/Carousel2";
import { sliceIntoChunks } from "utilities/mbmcblock";
export var MbmcBlock8 = function (_a) {
    var heading = _a.heading, description = _a.description, carouselData = _a.carouselData;
    var classes = useMbmcBlock8Styles();
    var splitData = sliceIntoChunks(carouselData, 2);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.headerContent }, { children: [_jsx("h3", __assign({ className: classes.headerTitle }, { children: heading }), void 0), _jsx("p", __assign({ className: classes.headerDescription }, { children: description }), void 0)] }), void 0), _jsx("div", __assign({ className: classes.headerCardContainer }, { children: _jsx(Carousel2, { classNames: { button: classes.navigationButton }, items: splitData.map(function (data) {
                        return {
                            component: (_jsx("div", __assign({ className: classes.carouselComponent }, { children: data.map(function (item, idx) {
                                    return (_jsx(TestimonialCard, { text: item === null || item === void 0 ? void 0 : item.content, author: item === null || item === void 0 ? void 0 : item.author, type: item === null || item === void 0 ? void 0 : item.jobRole }, idx));
                                }) }), void 0)),
                        };
                    }), className: classes.carousel }, void 0) }), void 0), _jsx("div", __assign({ className: classes.headerCardContainerMobile }, { children: _jsx(Carousel2, { items: carouselData.map(function (item, idx) { return ({
                        component: (_jsx("div", __assign({ className: classes.carouselComponent }, { children: _jsx(TestimonialCard, { text: item.content, author: item.author, type: item.jobRole }, idx) }), void 0)),
                    }); }), className: classes.carousel, classNames: { button: classes.navigationButton, arrow: classes.arrow } }, void 0) }), void 0)] }), void 0));
};
