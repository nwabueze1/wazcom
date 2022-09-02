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
import { useRelatedPostPearlStyles } from "./styles";
import clx from "classnames";
import { getTimeFrom } from "../../../../../utilities/getTime";
export var RelatedPostPearl = function (_a) {
    var article = _a.article, className = _a.className, handleClick = _a.handleClick;
    var classes = useRelatedPostPearlStyles();
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.slice(0, 2).map(function (tag, index) { return (_jsx("div", __assign({ className: classes.tag }, { children: tag === null || tag === void 0 ? void 0 : tag.name }), index)); });
    };
    return (_jsxs("div", __assign({ className: clx(classes.thumbnailContainer, className), onClick: function () {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug);
        } }, { children: [_jsx("img", { src: article.featured_image, alt: article.title, className: classes.thumbnailImage }), _jsxs("div", __assign({ className: classes.thumbnailContent }, { children: [_jsx("div", __assign({ className: classes.tags }, { children: displayTags() })), _jsx("h1", __assign({ className: classes.thumnailTitle }, { children: article.title })), _jsxs("p", __assign({ className: classes.postedTime }, { children: ["Posted ", getTimeFrom(article.created_at), " ago"] }))] })), _jsx("div", { className: classes.overlay })] })));
};
