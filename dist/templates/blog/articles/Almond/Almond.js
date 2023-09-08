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
import { useEffect, useState } from "react";
import { shareDataAlmond } from "./data";
import { RelatedPostAlmond } from "./RelatedPost/RelatedPost";
import { getDay } from "../../../../utilities/getTime";
import { useAlmondStyles } from "./styles";
import clx from "classnames";
export var Almond = function (_a) {
    var _b;
    var article = _a.article, domain = _a.domain, site = _a.site, handleClick = _a.handleClick;
    var classes = useAlmondStyles();
    var _c = __read(useState(false), 2), loaded = _c[0], setLoaded = _c[1];
    useEffect(function () {
        setLoaded(true);
    }, []);
    var blogUrl = loaded && window.location.href;
    var displayRelatedPosts = function () {
        var _a;
        return (_a = article.related_posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return (_jsx(RelatedPostAlmond, { article: post, domain: domain, site: site, handleClick: handleClick }, index)); });
    };
    var displaySocialIcons = function () {
        return shareDataAlmond.map(function (social, index) {
            return (_jsx("div", __assign({ className: classes.socialIcon }, { children: _jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { className: classes.icon, src: social.src, alt: social.alt }) })) }), index));
        });
    };
    var isRelatedPosts = Boolean(article.related_posts && article.related_posts.length > 0);
    return (_jsxs(_Fragment, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather&display=swap", rel: "stylesheet" }) }), _jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: clx(classes.contentContainer, (_b = {},
                        _b[classes.fullContent] = !isRelatedPosts,
                        _b)) }, { children: [_jsxs("div", __assign({ className: classes.heroContainer }, { children: [_jsx("div", __assign({ className: classes.hero }, { children: _jsxs("div", __assign({ className: classes.heroItems }, { children: [_jsx("p", __assign({ className: classes.upperText }, { children: "Glutten-free" })), _jsx("p", __assign({ className: classes.title }, { children: article.title })), _jsxs("div", __assign({ className: classes.authorInfo }, { children: [(site === null || site === void 0 ? void 0 : site.cover_image) ? (_jsx("div", __assign({ className: classes.avatarContainer }, { children: _jsx("img", { src: site === null || site === void 0 ? void 0 : site.cover_image, alt: site === null || site === void 0 ? void 0 : site.name, className: classes.avatarImage }) }))) : null, _jsx("span", __assign({ className: classes.date }, { children: getDay(article === null || article === void 0 ? void 0 : article.created_at) })), " "] })), _jsx("div", __assign({ className: classes.socialIconsContainer }, { children: displaySocialIcons() }))] })) })), _jsx("div", __assign({ className: classes.heroImageContainer }, { children: _jsx("img", { className: classes.headerImage, src: article === null || article === void 0 ? void 0 : article.featured_image, alt: article.title.slice(0, 20) }) }))] })), _jsx("div", __assign({ className: classes.body }, { children: _jsx("div", { className: classes.postContent, dangerouslySetInnerHTML: { __html: article.content } }) })), isRelatedPosts && (_jsxs("div", __assign({ className: classes.relatedPostsSection }, { children: [_jsx("div", { className: classes.hr }), _jsx("div", __assign({ className: classes.headerContainer }, { children: _jsx("p", __assign({ className: classes.relatedPostsHeader }, { children: "Related Posts" })) })), _jsx("div", __assign({ className: classes.relatedPostsContainer }, { children: _jsx("div", __assign({ className: classes.relatedPosts }, { children: displayRelatedPosts() })) }))] })))] })) }))] }));
};
