import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { getTimeFrom } from "../../../../../utilities/getTime";
import { truncate } from "lodash";
import { useRelatedPostNovalStyles } from ".";
export var RelatedPostNoval = function (_a) {
    var article = _a.article, className = _a.className, handleClick = _a.handleClick;
    var classes = useRelatedPostNovalStyles();
    return (_jsxs("div", { onClick: function () {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug);
        }, className: clx(classes.root, className), children: [_jsx("div", { className: classes.thumbnailImgContainer, children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }) }), _jsxs("div", { className: classes.thumbnailDetails, children: [_jsx("p", { className: classes.articleTitle, children: truncate(article.title, { length: 100 }) }), _jsx("div", { className: classes.authorContainer, children: _jsx("div", { children: _jsxs("p", { className: classes.timePosted, children: ["Posted ", getTimeFrom(article.created_at), " ago"] }) }) })] })] }));
};
