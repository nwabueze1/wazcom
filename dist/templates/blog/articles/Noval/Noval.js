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
import { useNovalStyles } from "./styles";
import clx from "classnames";
import { RelatedPostNoval } from "./RelatedPost/RelatedPost";
import { shareDataNoval } from "./data";
import { getTimeFrom } from "../../../../utilities/getTime";
import { useDefaultAvatar } from "../../helpers";
export var Noval = function (_a) {
    var _b;
    var _c, _d, _e, _f, _g;
    var article = _a.article, site = _a.site, domain = _a.domain, handleClick = _a.handleClick;
    var classes = useNovalStyles();
    var _h = __read(useState(false), 2), loaded = _h[0], setLoaded = _h[1];
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) { return (_jsx("div", __assign({ className: classes.tag }, { children: tag === null || tag === void 0 ? void 0 : tag.name }), index)); });
    };
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return (_jsx(RelatedPostNoval, { article: post, domain: domain, site: site, handleClick: handleClick }, index)); });
    };
    var isRelatedPosts = Boolean(article.related_posts && article.related_posts.length > 0);
    var displaySocialIcons = function () {
        return shareDataNoval.map(function (social, index) {
            return (_jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { src: social.src, alt: social.alt }, void 0) }), index));
        });
    };
    var defaultAvatar = useDefaultAvatar(site);
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("section", __assign({ className: classes.header }, { children: [_jsx("div", __assign({ className: classes.featuredImageContainer }, { children: _jsx("img", { src: article.featured_image, alt: article.title, className: classes.featuredImage }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.blogInfoContainer }, { children: [_jsx("div", __assign({ className: classes.tags }, { children: displayTags() }), void 0), _jsx("h1", __assign({ className: classes.title }, { children: article.title }), void 0), _jsxs("div", __assign({ className: classes.blogInfo }, { children: [((_c = site === null || site === void 0 ? void 0 : site.user) === null || _c === void 0 ? void 0 : _c.avatar) ? (_jsx("div", __assign({ className: classes.avatar }, { children: _jsx("img", { src: (_e = (_d = site === null || site === void 0 ? void 0 : site.user) === null || _d === void 0 ? void 0 : _d.avatar) !== null && _e !== void 0 ? _e : "", className: clx(classes.featuredImage, classes.avatarImage) }, void 0) }), void 0)) : (_jsx("p", __assign({ className: classes.defaultAvatar }, { children: defaultAvatar }), void 0)), _jsxs("p", __assign({ className: classes.writtenBy }, { children: ["Written by", " ", _jsxs("span", __assign({ className: classes.author }, { children: [(_f = site === null || site === void 0 ? void 0 : site.user) === null || _f === void 0 ? void 0 : _f.firstname, "\u00A0", (_g = site === null || site === void 0 ? void 0 : site.user) === null || _g === void 0 ? void 0 : _g.lastname] }), void 0)] }), void 0), _jsxs("p", __assign({ className: classes.postedTime }, { children: ["Posted ", getTimeFrom(article.created_at), " ago"] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.shareContainer }, { children: [_jsx("p", __assign({ className: classes.shareText }, { children: "Share post" }), void 0), _jsx("div", __assign({ className: classes.socialIcons }, { children: displaySocialIcons() }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.contentContainer }, { children: [_jsx("div", { className: clx(classes.content, (_b = {},
                            _b[classes.fullContentWidth] = !isRelatedPosts,
                            _b)), dangerouslySetInnerHTML: { __html: article.content } }, void 0), isRelatedPosts && (_jsxs("div", __assign({ className: classes.relatedArticles }, { children: [_jsx("p", __assign({ className: classes.relatedPost }, { children: "Related Posts" }), void 0), _jsx("div", __assign({ className: classes.posts }, { children: displayRelatedPosts() }), void 0)] }), void 0))] }), void 0)] }), void 0));
};
