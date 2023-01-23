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
import { parseDate } from "../../../../utilities/getTime";
import { shareDataPearl } from "./data";
import { RelatedPostPearl } from "./RelatedPost/RelatedPost";
import { usePearlStyles } from "./styles";
export var Pearl = function (_a) {
    var article = _a.article, site = _a.site, handleClick = _a.handleClick, domain = _a.domain;
    var classes = usePearlStyles();
    var _b = __read(useState(false), 2), loaded = _b[0], setLoaded = _b[1];
    var blogUrl = loaded && window.location.href;
    useEffect(function () {
        setLoaded(true);
    }, []);
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) { return (_jsx("div", __assign({ className: classes.tag }, { children: tag === null || tag === void 0 ? void 0 : tag.name }), index)); });
    };
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.slice(0, 3).map(function (post, index) { return (_jsx(RelatedPostPearl, { article: post, domain: domain, site: site, handleClick: handleClick }, index)); });
    };
    var displaySocialIcons = function () {
        return shareDataPearl.map(function (social, index) {
            return (_jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("p", __assign({ className: classes.socialIcon }, { children: social.icon })) }), index));
        });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.hero }, { children: [_jsx("img", { src: article.featured_image, alt: article.title, className: classes.featuredImage }), _jsxs("div", __assign({ className: classes.heroContent }, { children: [_jsx("div", __assign({ className: classes.tags }, { children: displayTags() })), _jsx("h1", __assign({ className: classes.title }, { children: article.title })), _jsx("p", __assign({ className: classes.postedTime }, { children: parseDate(article.created_at) }))] })), _jsx("div", { className: classes.overlay })] })), _jsxs("div", __assign({ className: classes.contentContainer }, { children: [_jsxs("div", __assign({ className: classes.leftColumn }, { children: [_jsx("div", __assign({ className: classes.iconContainer }, { children: displaySocialIcons() })), _jsx("div", { className: classes.content, dangerouslySetInnerHTML: { __html: article.content } }), _jsx("div", __assign({ className: classes.iconContainer }, { children: displaySocialIcons() }))] })), _jsxs("div", __assign({ className: classes.rightColumn }, { children: [_jsx("h3", __assign({ className: classes.relatedPost }, { children: "Related Posts" })), _jsx("div", { children: displayRelatedPosts() })] }))] }))] })));
};
