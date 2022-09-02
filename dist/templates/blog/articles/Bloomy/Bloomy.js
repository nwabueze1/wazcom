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
import { useState, useEffect } from "react";
import { Footer } from "../common/Footer";
import { useBloomyStyles } from "./styles";
import { shareDataBloomy } from "./data";
import { parseDate } from "../../../../utilities/getTime";
import { BloomyRelatedPost } from "./RelatedPosts";
export var Bloomy = function (_a) {
    var article = _a.article, site = _a.site, domain = _a.domain, handleClick = _a.handleClick;
    var classes = useBloomyStyles();
    var _b = __read(useState(false), 2), loaded = _b[0], setLoaded = _b[1];
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) { return (_jsx("div", __assign({ className: classes.tag }, { children: tag === null || tag === void 0 ? void 0 : tag.name }), index)); });
    };
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displaySocialIcons = function () {
        return shareDataBloomy.map(function (social, index) {
            return (_jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { src: social.src, alt: social.alt }) }), index));
        });
    };
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.slice(0, 4).map(function (post, index) { return (_jsx(BloomyRelatedPost, { article: post, domain: domain, site: site, handleClick: handleClick }, index)); });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.container }, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap", rel: "stylesheet" }) }), _jsxs("div", __assign({ className: classes.header }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.featuredImg }) })), _jsx("div", __assign({ className: classes.articleInfoContainer }, { children: _jsxs("div", __assign({ className: classes.articleInfo }, { children: [_jsx("p", __assign({ className: classes.tags }, { children: displayTags() })), _jsx("h1", __assign({ className: classes.articleTitle }, { children: article.title })), _jsxs("div", __assign({ className: classes.blogInfo }, { children: [_jsx("div", { className: classes.blogInfoContainer }), _jsx("p", __assign({ className: classes.postedTime }, { children: parseDate(article.created_at) }))] })), _jsx("div", __assign({ className: classes.socialIcons }, { children: displaySocialIcons() }))] })) }))] })), _jsx("div", { dangerouslySetInnerHTML: { __html: article.content }, className: classes.content }), _jsxs("div", { children: [_jsxs("div", __assign({ className: classes.relatedPostHeader }, { children: [_jsx("p", __assign({ className: classes.relatedPostHeaderTitle }, { children: "Related Posts" })), _jsx("p", { className: classes.hr })] })), _jsx("div", __assign({ className: classes.posts }, { children: displayRelatedPosts() }))] })] })), _jsx(Footer, { name: site === null || site === void 0 ? void 0 : site.name, className: classes.footer })] })));
};
