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
import { useRelatedPostNovalStyles } from "./styles";
import clx from "classnames";
import { getTimeFrom } from "../../../../../utilities/getTime";
import { useDefaultAvatar } from "../../../helpers";
export var RelatedPostNoval = function (_a) {
    var _b, _c, _d, _e, _f;
    var article = _a.article, site = _a.site, className = _a.className, handleClick = _a.handleClick;
    var classes = useRelatedPostNovalStyles();
    var defaultAvatar = useDefaultAvatar(site);
    return (_jsxs("div", __assign({ onClick: function () {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug);
        }, className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.thumbnailImgContainer }, { children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.thumbnailDetails }, { children: [_jsx("p", __assign({ className: classes.articleTitle }, { children: article.title }), void 0), _jsxs("div", __assign({ className: classes.authorContainer }, { children: [((_b = site === null || site === void 0 ? void 0 : site.user) === null || _b === void 0 ? void 0 : _b.avatar) ? (_jsx("div", __assign({ className: classes.avatar }, { children: _jsx("img", { src: (_d = (_c = site === null || site === void 0 ? void 0 : site.user) === null || _c === void 0 ? void 0 : _c.avatar) !== null && _d !== void 0 ? _d : "", className: classes.avatarImg }, void 0) }), void 0)) : (_jsx("p", __assign({ className: classes.defaultAvatar }, { children: defaultAvatar }), void 0)), _jsxs("div", { children: [_jsxs("p", __assign({ className: classes.author }, { children: [(_e = site === null || site === void 0 ? void 0 : site.user) === null || _e === void 0 ? void 0 : _e.firstname, "\u00A0", (_f = site === null || site === void 0 ? void 0 : site.user) === null || _f === void 0 ? void 0 : _f.lastname] }), void 0), _jsxs("p", __assign({ className: classes.timePosted }, { children: ["Posted ", getTimeFrom(article.created_at), " ago"] }), void 0)] }, void 0)] }), void 0)] }), void 0)] }), void 0));
};
