import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { truncate } from "lodash";
import { parseDate } from "../../../../../utilities/getTime";
import { stripHtml } from "../../../../../utilities/Post";
import { useBloomyRelatedPostStyles } from "./styles";
import clx from "classnames";
export var BloomyRelatedPost = function (_a) {
    var article = _a.article, handleClick = _a.handleClick, className = _a.className;
    var classes = useBloomyRelatedPostStyles();
    return (_jsxs("div", { className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); }, children: [_jsx("div", { className: classes.thumbnailImgContainer, children: _jsx("img", { src: article.featured_image, alt: article.title.slice(0, 20), className: classes.thumbnailImg }) }), _jsxs("div", { children: [_jsx("p", { className: classes.title, children: truncate(article.title, { length: 90 }) }), _jsx("div", { className: classes.excerpt, children: truncate(stripHtml(article.excerpt), { length: 90 }) }), _jsx("p", { className: classes.authorContainer, children: _jsxs("p", { className: classes.postedTime, children: [_jsx("span", { className: classes.point }), parseDate(article.created_at)] }) })] })] }));
};
