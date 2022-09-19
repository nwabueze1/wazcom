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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    // return (
    //   <div 
    //   className={classes.root}
    //   >
    //     <div className={classes.container}>
    //       <head>
    //         <link
    //           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    //           rel="stylesheet"
    //         />
    //       </head>
    //       <div className={classes.header}>
    //         <div className={classes.imgContainer}>
    //           {/* <img
    //             src={article?.featured_image}
    //             alt={article?.title.slice(0, 20)}
    //             className={classes.featuredImg}
    //           /> */}
    //         </div>
    //         <div className={classes.articleInfoContainer}>
    //           <div className={classes.articleInfo}>
    //             {/* <p className={classes.tags}>{displayTags()}</p> */}
    //             <h1 className={classes.articleTitle}>{article?.title}</h1>
    //             <div className={classes.blogInfo}>
    //               <div className={classes.blogInfoContainer}></div>
    //               {/* <p className={classes.postedTime}>
    //                 {parseDate(article?.created_at)}
    //               </p> */}
    //             </div>
    //             {/* <div className={classes.socialIcons}>{displaySocialIcons()}</div> */}
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div
    //         dangerouslySetInnerHTML={{ __html: article?.content }}
    //         className={classes.content}
    //       /> */}
    //       <div>
    //         <div className={classes.relatedPostHeader}>
    //           <p className={classes.relatedPostHeaderTitle}>Related Posts</p>
    //           <p className={classes.hr} />
    //         </div>
    //         {/* <div className={classes.posts}>{displayRelatedPosts()}</div> */}
    //       </div>
    //     </div>
    //     {/* <Footer name={site?.name as string} className={classes.footer} /> */}
    //   </div>
    // );
    // const blogUrl = loaded && window.location.href;
    // const isRelatedPosts = Boolean(
    //   article.related_posts && article.related_posts.length > 0
    // );
    return (_jsxs(_Fragment, { children: [_jsx("head", { children: _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", rel: "stylesheet" }, void 0) }, void 0), _jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.overlayContainer }, { children: [_jsxs("div", __assign({ className: classes.heroContainer }, { children: [_jsx("img", { className: classes.headerImage, src: article === null || article === void 0 ? void 0 : article.featured_image }, void 0), _jsx("div", __assign({ className: classes.heroItems }, { children: _jsxs("div", __assign({ className: classes.titleContainer }, { children: [_jsx("h1", __assign({ className: classes.title }, { children: article === null || article === void 0 ? void 0 : article.title }), void 0), _jsx("div", __assign({ className: classes.authorInfo }, { children: _jsx("p", { className: classes.circleIcon }, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0), _jsx("div", { className: classes.heroOverlay }, void 0)] }), void 0), _jsx("div", __assign({ className: classes.body }, { children: _jsx("div", { className: classes.postContent, dangerouslySetInnerHTML: { __html: article === null || article === void 0 ? void 0 : article.content } }, void 0) }), void 0), _jsx("div", __assign({ className: classes.authorDetails }, { children: _jsx("div", { children: _jsx("p", __assign({ className: classes.authorText }, { children: "Writen By" }), void 0) }, void 0) }), void 0), _jsx("div", __assign({ className: classes.relatedPostsHeader }, { children: _jsxs("span", __assign({ className: classes.relatedPostsLine }, { children: [_jsx("p", __assign({ className: classes.relatedPostsHeading }, { children: "RELATED POSTS" }), void 0), _jsx("div", { className: classes.hr }, void 0)] }), void 0) }), void 0), _jsx("div", { className: classes.relatedPostsContainer }, void 0)] }), void 0)] }, void 0));
};
