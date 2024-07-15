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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useHaloStyles } from "./styles";
import { Chip } from "@mui/material";
import { shareDataHalo } from "./data";
import { RelatedPostHalo } from "./RelatedPost/RelatedPost";
import { getDay } from "../../../../utilities/getTime";
export var Halo = function (_a) {
    var article = _a.article, domain = _a.domain;
    var classes = useHaloStyles();
    var _b = __read(useState(false), 2), loaded = _b[0], setLoaded = _b[1];
    var blogUrl = loaded && window.location.href;
    useEffect(function () {
        setLoaded(true);
    }, []);
    var isRelatedPosts = Boolean(article.related_posts && article.related_posts.length > 0);
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return (_jsx(RelatedPostHalo, { article: post, domain: domain }, index)); });
    };
    var displayTags = function () {
        var _a;
        return (_a = article === null || article === void 0 ? void 0 : article.tags) === null || _a === void 0 ? void 0 : _a.map(function (tag, index) { return (_jsx(Chip, { className: classes.tag, label: tag === null || tag === void 0 ? void 0 : tag.name, variant: "outlined" }, index)); });
    };
    var displayTopSocialIcons = function () {
        return shareDataHalo.map(function (social, index) {
            return (_jsx("div", { className: classes.topSocialIcon, children: _jsx("a", { href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer", children: _jsx("img", { className: classes.icon, src: social.src, alt: social.alt }) }) }, index));
        });
    };
    var displayBottomSocialIcons = function () {
        return shareDataHalo.map(function (social, index) {
            return (_jsx("div", { className: classes.bottomSocialIcon, children: _jsx("a", { href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer", children: _jsx("img", { className: classes.icon, src: social.src, alt: social.alt }) }) }, index));
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", rel: "stylesheet" }) }), _jsxs("div", { className: classes.root, children: [_jsxs("div", { className: classes.overlayContainer, children: [_jsxs("div", { className: classes.heroContainer, children: [_jsx("img", { className: classes.headerImage, src: article === null || article === void 0 ? void 0 : article.featured_image, alt: article.title.slice(0, 20) }), _jsx("div", { className: classes.heroItems, children: _jsxs("div", { className: classes.titleContainer, children: [displayTags(), _jsx("h1", { className: classes.title, children: article === null || article === void 0 ? void 0 : article.title }), _jsxs("div", { className: classes.authorInfo, children: [_jsx("p", { className: classes.circleIcon }), _jsx("span", { className: classes.date, children: getDay(article === null || article === void 0 ? void 0 : article.created_at) }), " "] })] }) })] }), _jsx("div", { className: classes.heroOverlay })] }), _jsxs("div", { className: classes.body, children: [_jsx("div", { className: classes.topSocialIconsContainer, children: displayTopSocialIcons() }), _jsx("div", { className: classes.postContent, dangerouslySetInnerHTML: { __html: article.content } })] }), _jsx("div", { className: classes.authorDetails, children: _jsxs("div", { children: [_jsx("p", { className: classes.authorText, children: "Writen By" }), _jsx("div", { className: classes.bottomSocialIconsContainer, children: displayBottomSocialIcons() })] }) }), _jsx("div", { className: classes.relatedPostsHeader, children: _jsxs("span", { className: classes.relatedPostsLine, children: [_jsx("p", { className: classes.relatedPostsHeading, children: "RELATED POSTS" }), _jsx("div", { className: classes.hr })] }) }), _jsx("div", { className: classes.relatedPostsContainer, children: isRelatedPosts && (_jsx("div", { className: classes.relatedPostsItems, children: displayRelatedPosts() })) })] })] }));
};
