import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { getDay } from "../../../../../utilities/getTime";
import { truncate } from "lodash";
import { useRelatedPostPoliticoStyles } from ".";
export var RelatedPostPolitico = function (_a) {
    var _b;
    var article = _a.article, className = _a.className, handleClick = _a.handleClick;
    var classes = useRelatedPostPoliticoStyles();
    return (_jsx("div", { onClick: function () {
            handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug);
        }, className: clx(classes.root, className), children: _jsxs("div", { className: classes.body, children: [_jsx("div", { className: classes.thumbnailImgContainer, children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg }) }), _jsx("p", { className: classes.category, children: article.category ? (_b = article.category) === null || _b === void 0 ? void 0 : _b.name : "COUNTRY" }), _jsxs("div", { className: classes.thumbnailDetails, children: [_jsx("p", { className: classes.articleTitle, children: truncate(article.title, { length: 100 }) }), _jsx("div", { className: classes.authorContainer, children: _jsx("div", { children: _jsx("p", { className: classes.date, children: getDay(article.created_at) }) }) })] })] }) }));
};
