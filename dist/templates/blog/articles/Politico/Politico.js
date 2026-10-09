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
import { shareDataPolitico } from "./data";
import { RelatedPostPolitico } from "./RelatedPost";
import { getDay } from "../../../../utilities/getTime";
import { usePoliticoStyles } from "./styles";
import clx from "classnames";
import { MdCircle as Circle } from "react-icons/md";
export var Politico = function (_a) {
    var _b;
    var article = _a.article, domain = _a.domain, handleClick = _a.handleClick;
    var classes = usePoliticoStyles();
    var _c = __read(useState(false), 2), loaded = _c[0], setLoaded = _c[1];
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return (_jsx(RelatedPostPolitico, { article: post, domain: domain, handleClick: handleClick }, index)); });
    };
    var isRelatedPosts = Boolean(article.related_posts && article.related_posts.length > 0);
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) {
            var _a;
            return (_jsx("div", { className: classes.tag, children: (_a = tag === null || tag === void 0 ? void 0 : tag.name) === null || _a === void 0 ? void 0 : _a.toUpperCase() }, index));
        });
    };
    var displaySocialIcons = function () {
        return shareDataPolitico.map(function (social, index) {
            return (_jsx("div", { className: classes.socialIcons, children: _jsx("a", { href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer", className: classes.icon, children: _jsx("img", { src: social.src, alt: social.alt }) }) }, index));
        });
    };
    return (_jsxs("div", { className: classes.main, children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Inter:wght@400;600&family=Merriweather&display=swap", rel: "stylesheet" }) }), _jsx("div", { className: classes.root, children: _jsxs("div", { className: clx(classes.content, (_b = {},
                        _b[classes.fullContent] = !isRelatedPosts,
                        _b)), children: [_jsx("div", { className: classes.tagContainer, children: displayTags() }), _jsxs("div", { className: classes.header, children: [_jsx("div", { className: classes.title, children: article === null || article === void 0 ? void 0 : article.title }), _jsxs("div", { className: classes.authorInfo, children: [_jsxs("span", { className: classes.date, children: [_jsx(Circle, { className: classes.circle }), " ", getDay(article === null || article === void 0 ? void 0 : article.created_at)] }), " ", _jsx("div", { className: classes.socialIconsContainer, children: displaySocialIcons() })] })] }), _jsx("div", { className: classes.imageContainer, children: _jsx("img", { className: classes.headerImage, src: article === null || article === void 0 ? void 0 : article.featured_image, alt: article.title.slice(0, 20) }) }), _jsx("div", { className: classes.postContent, dangerouslySetInnerHTML: { __html: article.content } })] }) }), _jsxs("div", { className: classes.relatedPostsHeader, children: [_jsx("p", { className: classes.relatedPostsHeading, children: "Related Posts" }), _jsx("div", { className: classes.hr })] }), _jsx("div", { className: classes.relatedPostsContainer, children: isRelatedPosts && _jsx("div", { className: classes.relatedPostsItems, children: displayRelatedPosts() }) })] }));
};
