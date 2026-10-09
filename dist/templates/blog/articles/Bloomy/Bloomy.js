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
import { useBloomyStyles } from "./styles";
import { shareDataBloomy } from "./data";
import { parseDate } from "../../../../utilities/getTime";
import { BloomyRelatedPost } from "./RelatedPosts";
export var Bloomy = function (_a) {
    var article = _a.article, domain = _a.domain, site = _a.site, handleClick = _a.handleClick;
    var classes = useBloomyStyles();
    var _b = __read(useState(false), 2), loaded = _b[0], setLoaded = _b[1];
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) { return (_jsx("div", { className: classes.tag, children: tag === null || tag === void 0 ? void 0 : tag.name }, index)); });
    };
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displaySocialIcons = function () {
        return shareDataBloomy.map(function (social, index) {
            return (_jsx("a", { href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer", children: _jsx("img", { src: social.src, alt: social.alt }) }, index));
        });
    };
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.slice(0, 4).map(function (post, index) { return (_jsx(BloomyRelatedPost, { article: post, domain: domain, site: site, handleClick: handleClick }, index)); });
    };
    return (_jsx("div", { className: classes.root, children: _jsxs("div", { className: classes.container, children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap", rel: "stylesheet" }) }), _jsxs("div", { className: classes.header, children: [_jsx("div", { className: classes.imgContainer, children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.featuredImg }) }), _jsx("div", { className: classes.articleInfoContainer, children: _jsxs("div", { className: classes.articleInfo, children: [_jsx("p", { className: classes.tags, children: displayTags() }), _jsx("h1", { className: classes.articleTitle, children: article.title }), _jsxs("div", { className: classes.blogInfo, children: [_jsx("div", { className: classes.blogInfoContainer }), _jsx("p", { className: classes.postedTime, children: parseDate(article.created_at) })] }), _jsx("div", { className: classes.socialIcons, children: displaySocialIcons() })] }) })] }), _jsx("div", { dangerouslySetInnerHTML: { __html: article.content }, className: classes.content }), _jsxs("div", { children: [_jsxs("div", { className: classes.relatedPostHeader, children: [_jsx("p", { className: classes.relatedPostHeaderTitle, children: "Related Posts" }), _jsx("p", { className: classes.hr })] }), _jsx("div", { className: classes.posts, children: displayRelatedPosts() })] })] }) }));
};
