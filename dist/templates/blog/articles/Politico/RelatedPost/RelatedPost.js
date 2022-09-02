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
import clx from "classnames";
import { getDay } from "../../../../../utilities/getTime";
import { truncate } from "lodash";
import { useRelatedPostPoliticoStyles } from ".";
export var RelatedPostPolitico = function (_a) {
    var article = _a.article, className = _a.className, handleClick = _a.handleClick;
    var classes = useRelatedPostPoliticoStyles();
    return (_jsx("div", __assign({ onClick: function () {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug);
        }, className: clx(classes.root, className) }, { children: _jsxs("div", __assign({ className: classes.body }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }) })), _jsx("p", __assign({ className: classes.category }, { children: article.category ? article.category : "COUNTRY" })), _jsxs("div", __assign({ className: classes.thumbnailDetails }, { children: [_jsx("p", __assign({ className: classes.articleTitle }, { children: truncate(article.title, { length: 100 }) })), _jsx("div", __assign({ className: classes.authorContainer }, { children: _jsx("div", { children: _jsx("p", __assign({ className: classes.date }, { children: getDay(article.created_at) })) }) }))] }))] })) })));
};
