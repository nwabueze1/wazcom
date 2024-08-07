var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useRef, useState, useImperativeHandle, forwardRef } from "react";
import horizontalLoop from "./functions";
import { useCarouselStyles } from "./styles";
import { useGSAP } from "@gsap/react";
export var Carousel = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.spaceBetween, spaceBetween = _b === void 0 ? 1 : _b, _c = _a.itemsToShow, itemsToShow = _c === void 0 ? 1 : _c, _d = _a.itemPerslide, itemPerslide = _d === void 0 ? 1 : _d, onActiveIndexChange = _a.onActiveIndexChange, breakpoints = _a.breakpoints;
    var slidesRef = useRef([]);
    var loopRef = useRef(null);
    var _e = __read(useState(null), 2), touchStartX = _e[0], setTouchStartX = _e[1];
    var _f = __read(useState(null), 2), touchEndX = _f[0], setTouchEndX = _f[1];
    var _g = __read(useState(0), 2), currentIndex = _g[0], setCurrentIndex = _g[1];
    var _h = __read(useState(false), 2), isClient = _h[0], setIsClient = _h[1];
    var minSwipeDistance = 50;
    var slideRef = useRef(null);
    var items = React.Children.toArray(children);
    var classes = useCarouselStyles({
        breakpoints: breakpoints,
        gap: spaceBetween,
        itemsToShow: itemsToShow,
    });
    useImperativeHandle(ref, function () { return ({
        next: function () {
            var _a;
            updateNext();
            (_a = loopRef.current) === null || _a === void 0 ? void 0 : _a.next({ duration: 0.4, ease: "power1.inOut" });
        },
        prev: function () {
            var _a;
            updatePrev();
            (_a = loopRef.current) === null || _a === void 0 ? void 0 : _a.previous({ duration: 0.4, ease: "power1.inOut" });
        },
    }); });
    var updateNext = function () {
        var nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex >= items.length ? 0 : nextIndex);
        onActiveIndexChange === null || onActiveIndexChange === void 0 ? void 0 : onActiveIndexChange(nextIndex);
    };
    var updatePrev = function () {
        var nextIndex = currentIndex - 1;
        setCurrentIndex(nextIndex < 0 ? items.length - 1 : nextIndex);
        onActiveIndexChange === null || onActiveIndexChange === void 0 ? void 0 : onActiveIndexChange(nextIndex);
    };
    var onTouchStart = function (e) {
        setTouchEndX(null);
        setTouchStartX(e.changedTouches[0].clientX);
    };
    var onTouchMove = function (e) {
        setTouchEndX(e.changedTouches[0].clientX);
    };
    var onTouchEnd = function () {
        if (touchStartX && touchEndX) {
            var xDistance = touchStartX - touchEndX;
            if (Math.abs(xDistance) >= minSwipeDistance) {
                if (xDistance > 0) {
                    handleNext();
                }
                else {
                    handlePrev();
                }
            }
        }
    };
    var renderSlides = function () {
        return React.Children.map(children, function (child, i) { return (_jsx("div", { className: classes.box, onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, ref: function (el) {
                if (el) {
                    slidesRef.current[i] = el;
                }
            }, children: child }, i)); });
    };
    var handleNext = function () {
        var _a;
        (_a = loopRef.current) === null || _a === void 0 ? void 0 : _a.next({ duration: 0.4, ease: "power1.inOut" });
        updateNext();
    };
    var handlePrev = function () {
        var _a;
        (_a = loopRef.current) === null || _a === void 0 ? void 0 : _a.previous({ duration: 0.4, ease: "power1.inOut" });
        updatePrev();
    };
    useGSAP(function () {
        setIsClient(true);
        var boxes = slidesRef.current;
        loopRef.current = horizontalLoop({
            items: boxes,
            config: { paused: true },
            itemPerslide: itemPerslide,
            container: slideRef === null || slideRef === void 0 ? void 0 : slideRef.current,
        });
    }, {
        scope: slideRef,
        dependencies: [isClient, children, itemsToShow, itemPerslide, spaceBetween],
    });
    return (_jsx("div", { className: classes.wrapper, ref: slideRef, children: renderSlides() }));
});
