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
import { useRelatedPostGelloStyles } from "./styles";
import clx from "classnames";
import { stripHtml } from "../../../../../utilities/Post";
export var RelatedPostGello = function (_a) {
    var article = _a.article, handleClick = _a.handleClick, className = _a.className;
    var classes = useRelatedPostGelloStyles();
    return (_jsxs("div", __assign({ className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); } }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.thumbnailDetails }, { children: [_jsx("p", __assign({ className: classes.articleTitle }, { children: article.title }), void 0), _jsx("div", __assign({ className: classes.post }, { children: stripHtml(article.content).slice(0, 150) + "......." }), void 0)] }), void 0)] }), void 0));
};
