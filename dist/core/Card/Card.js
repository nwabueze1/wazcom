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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import clx from "classnames";
import { HiOutlineArrowUp, HiOutlineArrowDown } from "react-icons/hi";
import { Tag } from "../../core";
import { Button } from "..";
import { useCardStyles } from "./styles";
export var Card = function (_a) {
    var className = _a.className, title = _a.title, content = _a.content, image = _a.image, tags = _a.tags, variant = _a.variant, imageClassname = _a.imageClassname, primaryButtonProps = _a.primaryButtonProps, secondaryButtonProps = _a.secondaryButtonProps, secondaryButtonText = _a.secondaryButtonText, primaryButtonText = _a.primaryButtonText, status = _a.status, icon = _a.icon, rate = _a.rate, label = _a.label, footer = _a.footer;
    var classes = useCardStyles();
    var getCardVariant = useCallback(function (type) {
        var variantClass = {};
        switch (variant) {
            case "template":
                variantClass = {
                    root: classes.templateRoot,
                    title: classes.templateCardTitle,
                    content: classes.templateContent,
                };
                break;
            case "service-template":
                variantClass = {
                    root: classes.serviceTemplateRoot,
                    title: classes.serviceTemplateCardTitle,
                    content: classes.serviceTemplateContent,
                };
                break;
            case "service":
                variantClass = {
                    root: classes.serviceRoot,
                    title: classes.serviceCardTitle,
                    content: classes.serviceContent,
                };
                break;
            case "overview":
                variantClass = {
                    root: classes.overviewRoot,
                    title: classes.overviewCardTitle,
                    content: classes.overviewContent,
                };
                break;
            default:
                variantClass = {
                    root: classes.templateRoot,
                    title: classes.templateCardTitle,
                    content: classes.templateContent,
                };
        }
        return variantClass[type];
    }, []);
    return (_jsxs("div", { className: clx(classes.root, getCardVariant("root"), className), children: [icon && variant === "overview" && icon, _jsxs("div", { className: clx(classes.column), children: [(image === null || image === void 0 ? void 0 : image.src) && (variant === null || variant === void 0 ? void 0 : variant.includes("template")) && (_jsx("img", { src: image === null || image === void 0 ? void 0 : image.src, alt: image === null || image === void 0 ? void 0 : image.alt, className: imageClassname })), icon && variant === "service" && icon, _jsxs("div", { className: classes.contentContainer, children: [label && _jsx("span", { className: clx(classes.cardLabel), children: label }), _jsxs("div", { className: clx(classes.justifyBetween, classes.titleContainer), children: [_jsx("span", { className: clx(classes.cardTitle, getCardVariant("title")), children: title }), (status === null || status === void 0 ? void 0 : status.name) && _jsx(Tag, __assign({}, status)), variant === "overview" && (rate === null || rate === void 0 ? void 0 : rate.trend) && (_jsxs("div", { className: clx(classes.justifyStart, classes.rateContainer), children: [_jsxs("div", { className: clx((rate === null || rate === void 0 ? void 0 : rate.trend) === "ascending"
                                                    ? classes.ascendingRate
                                                    : (rate === null || rate === void 0 ? void 0 : rate.trend) === "descending"
                                                        ? classes.descendingRate
                                                        : "", classes.rateContent), children: [(rate === null || rate === void 0 ? void 0 : rate.trend) === "ascending" ? (_jsx(HiOutlineArrowUp, {})) : (rate === null || rate === void 0 ? void 0 : rate.trend) === "descending" ? (_jsx(HiOutlineArrowDown, {})) : null, rate.value] }), _jsx("p", { className: clx(classes.cardContent, getCardVariant("content")), children: content })] }))] }), variant !== "overview" && (_jsx("p", { className: clx(classes.cardContent, getCardVariant("content")), children: content }))] }), (tags === null || tags === void 0 ? void 0 : tags.length) && (tags === null || tags === void 0 ? void 0 : tags.length) > 1 && (_jsx("div", { className: clx(classes.justifyStart, classes.tagsContainer), children: tags === null || tags === void 0 ? void 0 : tags.map(function (tag) { return (_createElement(Tag, __assign({}, tag, { key: title }))); }) })), (footer === null || footer === void 0 ? void 0 : footer.text) && (_jsxs("div", { className: clx(classes.justifyStart, classes.buttonsContainer, classes.ascendingRate), children: [_jsx("span", { children: footer === null || footer === void 0 ? void 0 : footer.text }), (footer === null || footer === void 0 ? void 0 : footer.icon) && (footer === null || footer === void 0 ? void 0 : footer.icon)] })), (variant === null || variant === void 0 ? void 0 : variant.includes("template")) && (_jsxs("div", { className: clx(classes.justifyStart, classes.buttonsContainer), children: [primaryButtonText && _jsx(Button, __assign({}, primaryButtonProps, { children: primaryButtonText })), secondaryButtonText && (_jsx(Button, __assign({}, secondaryButtonProps, { children: secondaryButtonText })))] }))] })] }));
};
