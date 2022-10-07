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
import { truncate } from "lodash";
import { getDay } from "../../../../../utilities/getTime";
import { useRelatedPostAlmondStyles } from "./styles";
export var RelatedPostAlmond = function (_a) {
    var article = _a.article, handleClick = _a.handleClick, className = _a.className, site = _a.site;
    var classes = useRelatedPostAlmondStyles();
    return (_jsx("div", __assign({ className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); } }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg, alt: site === null || site === void 0 ? void 0 : site.name }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.thumbnailDetails }, { children: [_jsx("p", __assign({ className: classes.articleTitle }, { children: truncate(article.title, { length: 100 }) }), void 0), (site === null || site === void 0 ? void 0 : site.cover_image) ? (_jsx("div", __assign({ className: classes.avatarContainer }, { children: _jsx("img", { src: site === null || site === void 0 ? void 0 : site.cover_image, alt: site === null || site === void 0 ? void 0 : site.name, className: classes.avatarImage }, void 0) }), void 0)) : (_jsx("div", { className: classes.alternateAvatar }, void 0)), _jsx("span", __assign({ className: classes.date }, { children: getDay(article === null || article === void 0 ? void 0 : article.created_at) }), void 0), " "] }), void 0)] }), void 0) }), void 0));
};
