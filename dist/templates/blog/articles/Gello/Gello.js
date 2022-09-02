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
import { getDay } from "../../../../utilities/getTime";
import { useGelloStyles } from "./styles";
import clx from "classnames";
import { Footer } from "../common/Footer";
export var Gello = function (_a) {
    var _b;
    var article = _a.article, domain = _a.domain, site = _a.site, handleClick = _a.handleClick;
    var classes = useGelloStyles();
    var _c = __read(useState(false), 2), loaded = _c[0], setLoaded = _c[1];
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
            return (_jsx("a", __assign({ href: "".concat(social.href).concat(blogUrl), target: "_blank", rel: "noreferrer" }, { children: _jsx("img", { src: social.src, alt: social.alt }) }), index));
        });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap", rel: "stylesheet" }) }), _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs("div", __assign({ className: clx(classes.contentContainer, (_b = {},
                            _b[classes.fullContent] = !isRelatedPosts,
                            _b)) }, { children: [_jsx("div", __assign({ className: classes.imgContainer }, { children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.featuredImg }) })), _jsx("h1", __assign({ className: classes.title }, { children: article.title })), _jsx("div", __assign({ className: classes.articleInfo }, { children: _jsxs("div", __assign({ className: classes.dateWritten }, { children: [_jsx("div", { className: classes.bulletPoint }), _jsx("p", __assign({ className: classes.date }, { children: getDay(article.created_at) }))] })) })), _jsx("hr", { className: classes.line }), _jsx("div", { dangerouslySetInnerHTML: { __html: article.content }, className: classes.content }), _jsxs("div", __assign({ className: classes.shareRoot }, { children: [_jsxs("div", __assign({ className: classes.shareContainer }, { children: [_jsx("hr", { className: classes.shareLine }), _jsx("div", __assign({ className: classes.icons }, { children: displaySocialIcons() })), _jsx("hr", { className: classes.shareLine })] })), _jsx("p", __assign({ className: classes.shareText }, { children: "Share post" }))] }))] })), isRelatedPosts && (_jsxs("div", __assign({ className: classes.relatedArticleContainer }, { children: [_jsx("p", __assign({ className: classes.relatedPostHeader }, { children: "Related Posts" })), _jsx("hr", { className: classes.postLine }), _jsx("div", __assign({ className: classes.relatedPosts }, { children: displayRelatedPosts() }))] })))] })), _jsx(Footer, { name: site === null || site === void 0 ? void 0 : site.name, className: classes.footer })] })));
};
