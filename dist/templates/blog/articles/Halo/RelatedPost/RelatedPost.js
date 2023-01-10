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
import { useRelatedPostHaloStyles } from "./styles";
import { stripHtml } from "../../../../../utilities/Post";
import { truncate } from "lodash";
import { getDay } from "../../../../../utilities/getTime";
export var RelatedPostHalo = function (_a) {
    var article = _a.article, handleClick = _a.handleClick;
    var classes = useRelatedPostHaloStyles();
    return (_jsxs("div", __assign({ className: classes.relatedArticleContainer, onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); } }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }) })), _jsxs("div", __assign({ className: classes.thumbnailDetails }, { children: [_jsx("p", __assign({ className: classes.articleTitle }, { children: truncate(article.title, { length: 100 }) })), _jsx("div", __assign({ className: classes.post }, { children: truncate(stripHtml(article.excerpt), { length: 100 }) })), _jsx("div", __assign({ className: classes.articleDate }, { children: getDay(article.created_at) }))] }))] })));
};
