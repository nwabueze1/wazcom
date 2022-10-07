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
import { truncate } from "lodash";
import { parseDate } from "../../../../../utilities/getTime";
import { stripHtml } from "../../../../../utilities/Post";
import { useBloomyRelatedPostStyles } from "./styles";
import clx from "classnames";
export var BloomyRelatedPost = function (_a) {
    var article = _a.article, className = _a.className, handleClick = _a.handleClick;
    var classes = useBloomyRelatedPostStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); } }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.thumbnailImg }, void 0) }), void 0), _jsxs("div", { children: [_jsx("p", __assign({ className: classes.title }, { children: truncate(article.title, { length: 90 }) }), void 0), _jsx("div", __assign({ className: classes.excerpt }, { children: truncate(stripHtml(article.excerpt), { length: 90 }) }), void 0), _jsx("p", __assign({ className: classes.authorContainer }, { children: _jsxs("p", __assign({ className: classes.postedTime }, { children: [_jsx("span", { className: classes.point }, void 0), parseDate(article.created_at)] }), void 0) }), void 0)] }, void 0)] }), void 0));
};
