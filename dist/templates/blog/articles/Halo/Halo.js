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
            return (_jsx("div", __assign({ className: classes.topSocialIcon }, { children: _jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { className: classes.icon, src: social.src, alt: social.alt }, void 0) }), void 0) }), index));
        });
    };
    var displayBottomSocialIcons = function () {
        return shareDataHalo.map(function (social, index) {
            return (_jsx("div", __assign({ className: classes.bottomSocialIcon }, { children: _jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { className: classes.icon, src: social.src, alt: social.alt }, void 0) }), void 0) }), index));
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", rel: "stylesheet" }, void 0) }, void 0), _jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.overlayContainer }, { children: [_jsxs("div", __assign({ className: classes.heroContainer }, { children: [_jsx("img", { className: classes.headerImage, src: article === null || article === void 0 ? void 0 : article.featured_image, alt: article.title.slice(0, 20) }, void 0), _jsx("div", __assign({ className: classes.heroItems }, { children: _jsxs("div", __assign({ className: classes.titleContainer }, { children: [displayTags(), _jsx("h1", __assign({ className: classes.title }, { children: article === null || article === void 0 ? void 0 : article.title }), void 0), _jsxs("div", __assign({ className: classes.authorInfo }, { children: [_jsx("p", { className: classes.circleIcon }, void 0), _jsx("span", __assign({ className: classes.date }, { children: getDay(article === null || article === void 0 ? void 0 : article.created_at) }), void 0), " "] }), void 0)] }), void 0) }), void 0)] }), void 0), _jsx("div", { className: classes.heroOverlay }, void 0)] }), void 0), _jsxs("div", __assign({ className: classes.body }, { children: [_jsx("div", __assign({ className: classes.topSocialIconsContainer }, { children: displayTopSocialIcons() }), void 0), _jsx("div", { className: classes.postContent, dangerouslySetInnerHTML: { __html: article.content } }, void 0)] }), void 0), _jsx("div", __assign({ className: classes.authorDetails }, { children: _jsxs("div", { children: [_jsx("p", __assign({ className: classes.authorText }, { children: "Writen By" }), void 0), _jsx("div", __assign({ className: classes.bottomSocialIconsContainer }, { children: displayBottomSocialIcons() }), void 0)] }, void 0) }), void 0), _jsx("div", __assign({ className: classes.relatedPostsHeader }, { children: _jsxs("span", __assign({ className: classes.relatedPostsLine }, { children: [_jsx("p", __assign({ className: classes.relatedPostsHeading }, { children: "RELATED POSTS" }), void 0), _jsx("div", { className: classes.hr }, void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: classes.relatedPostsContainer }, { children: isRelatedPosts && (_jsx("div", __assign({ className: classes.relatedPostsItems }, { children: displayRelatedPosts() }), void 0)) }), void 0)] }), void 0)] }, void 0));
};
