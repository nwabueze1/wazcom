import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { stripHtml } from "../../../../../utilities/Post";
import { truncate } from "lodash";
import { useRelatedPostGelloStyles } from ".";
export var RelatedPostGello = function (_a) {
    var article = _a.article, handleClick = _a.handleClick, className = _a.className;
    var classes = useRelatedPostGelloStyles();
    return (_jsxs("div", { className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); }, children: [_jsx("div", { className: classes.thumbnailImgContainer, children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }) }), _jsxs("div", { className: classes.thumbnailDetails, children: [_jsx("p", { className: classes.articleTitle, children: truncate(article.title, { length: 100 }) }), _jsx("div", { className: classes.post, children: truncate(stripHtml(article.excerpt), { length: 100 }) })] })] }));
};
