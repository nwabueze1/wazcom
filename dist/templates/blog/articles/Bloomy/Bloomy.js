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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Footer } from "../common/Footer";
import { useBloomyStyles } from "./styles";
// import { shareDataBloomy } from "./data";
// import { parseDate } from "../../../../utilities/getTime";
// import { BloomyRelatedPost } from "./RelatedPosts";
export var Bloomy = function (_a) {
    var article = _a.article;
    var classes = useBloomyStyles();
    // const [loaded, setLoaded] = useState(false);
    // const displayTags = () =>
    //   article?.tags?.map((tag, index) => (
    //     <div key={index} className={classes.tag}>
    //       {tag?.name}
    //     </div>
    //   ));
    // useEffect(() => {
    //   setLoaded(true);
    // }, []);
    // const blogUrl = loaded && window.location.href;
    // const displaySocialIcons = () => {
    //   return shareDataBloomy.map((social, index) => {
    //     return (
    //       <a
    //         key={index}
    //         href={`${social.href}${blogUrl}`}
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <img src={social.src} alt={social.alt} />
    //       </a>
    //     );
    //   });
    // };
    // const displayRelatedPosts = () =>
    //   article.related_posts
    //     ?.slice(0, 4)
    //     .map((post, index) => (
    //       <BloomyRelatedPost
    //         key={index}
    //         article={post}
    //         domain={domain}
    //         site={site}
    //         handleClick={handleClick}
    //       />
    //     ));
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap", rel: "stylesheet" }, void 0) }, void 0), _jsxs("div", __assign({ className: classes.header }, { children: [_jsx("div", { className: classes.imgContainer }, void 0), _jsx("div", __assign({ className: classes.articleInfoContainer }, { children: _jsxs("div", __assign({ className: classes.articleInfo }, { children: [_jsx("h1", __assign({ className: classes.articleTitle }, { children: article === null || article === void 0 ? void 0 : article.title }), void 0), _jsx("div", __assign({ className: classes.blogInfo }, { children: _jsx("div", { className: classes.blogInfoContainer }, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0), _jsx("div", { children: _jsxs("div", __assign({ className: classes.relatedPostHeader }, { children: [_jsx("p", __assign({ className: classes.relatedPostHeaderTitle }, { children: "Related Posts" }), void 0), _jsx("p", { className: classes.hr }, void 0)] }), void 0) }, void 0)] }), void 0) }), void 0));
};
