import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { truncate } from "lodash";
import { getDay } from "../../../../../utilities/getTime";
import { useRelatedPostAlmondStyles } from "./styles";
export var RelatedPostAlmond = function (_a) {
    var article = _a.article, handleClick = _a.handleClick, className = _a.className, site = _a.site;
    var classes = useRelatedPostAlmondStyles();
    return (_jsx("div", { className: clx(classes.root, className), onClick: function () { return handleClick === null || handleClick === void 0 ? void 0 : handleClick(article.slug); }, children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.thumbnailImgContainer, children: _jsx("img", { src: article.featured_image, className: classes.thumbnailImg, alt: site === null || site === void 0 ? void 0 : site.name }) }), _jsxs("div", { className: classes.thumbnailDetails, children: [_jsx("p", { className: classes.articleTitle, children: truncate(article.title, { length: 100 }) }), (site === null || site === void 0 ? void 0 : site.cover_image) ? (_jsx("div", { className: classes.avatarContainer, children: _jsx("img", { src: site === null || site === void 0 ? void 0 : site.cover_image, alt: site === null || site === void 0 ? void 0 : site.name, className: classes.avatarImage }) })) : (_jsx("div", { className: classes.alternateAvatar })), _jsx("span", { className: classes.date, children: getDay(article === null || article === void 0 ? void 0 : article.created_at) }), " "] })] }) }));
};
