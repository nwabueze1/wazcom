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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { shareDataGello } from "./data";
import { RelatedPostGello } from "./RelatedPost/RelatedPost";
import { getDay } from "utilities/getTime";
import { useGelloStyles } from "./styles";
import clx from "classnames";
import { useDefaultAvatar } from "templates/blog/helpers";
export var Gello = function (_a) {
    var _b;
    var _c, _d, _e, _f;
    var article = _a.article, site = _a.site, domain = _a.domain, handleClick = _a.handleClick;
    var classes = useGelloStyles();
    var _g = __read(useState(false), 2), loaded = _g[0], setLoaded = _g[1];
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return (_jsx(RelatedPostGello, { article: post, domain: domain, handleClick: handleClick }, index)); });
    };
    var isRelatedPosts = Boolean(article.related_posts && article.related_posts.length > 0);
    var displaySocialIcons = function () {
        return shareDataGello.map(function (social, index) {
            return (_jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { src: social.src, alt: social.alt }, void 0) }), index));
        });
    };
    var defaultAvatar = useDefaultAvatar(site);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: clx(classes.contentContainer, (_b = {},
                    _b[classes.fullContent] = !isRelatedPosts,
                    _b)) }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.featuredImg }, void 0) }), void 0), _jsx("h1", __assign({ className: classes.title }, { children: article.title }), void 0), _jsxs("div", __assign({ className: classes.articleInfo }, { children: [((_c = site === null || site === void 0 ? void 0 : site.user) === null || _c === void 0 ? void 0 : _c.avatar) ? (_jsx("div", __assign({ className: classes.avatarContainer }, { children: _jsx("img", { src: (_d = site === null || site === void 0 ? void 0 : site.user) === null || _d === void 0 ? void 0 : _d.avatar, alt: "", className: classes.avatarImage }, void 0) }), void 0)) : (_jsx("p", __assign({ className: classes.defaultAvatar }, { children: defaultAvatar }), void 0)), _jsxs("p", __assign({ className: classes.written }, { children: ["Written by", _jsxs("span", __assign({ className: classes.writersName }, { children: ["\u00A0", (_e = site === null || site === void 0 ? void 0 : site.user) === null || _e === void 0 ? void 0 : _e.firstname, "\u00A0", (_f = site === null || site === void 0 ? void 0 : site.user) === null || _f === void 0 ? void 0 : _f.lastname] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.dateWritten }, { children: [_jsx("div", { className: classes.bulletPoint }, void 0), _jsx("p", __assign({ className: classes.date }, { children: getDay(article.created_at) }), void 0)] }), void 0)] }), void 0), _jsx("hr", { className: classes.line }, void 0), _jsx("div", { dangerouslySetInnerHTML: { __html: article.content }, className: classes.content }, void 0), _jsxs("div", __assign({ className: classes.shareRoot }, { children: [_jsxs("div", __assign({ className: classes.shareContainer }, { children: [_jsx("hr", { className: classes.shareLine }, void 0), _jsx("div", __assign({ className: classes.icons }, { children: displaySocialIcons() }), void 0), _jsx("hr", { className: classes.shareLine }, void 0)] }), void 0), _jsx("p", __assign({ className: classes.shareText }, { children: "Share post" }), void 0)] }), void 0)] }), void 0), isRelatedPosts && (_jsxs("div", __assign({ className: classes.relatedArticleContainer }, { children: [_jsx("p", __assign({ className: classes.relatedPostHeader }, { children: "Related Posts" }), void 0), _jsx("hr", { className: classes.postLine }, void 0), _jsx("div", __assign({ className: classes.relatedPosts }, { children: displayRelatedPosts() }), void 0)] }), void 0))] }), void 0));
};
