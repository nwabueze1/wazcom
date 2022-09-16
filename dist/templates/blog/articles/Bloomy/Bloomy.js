import { jsxs as _jsxs } from "react/jsx-runtime";
// import { Footer } from "../common/Footer";
// import { useBloomyStyles } from "./styles";
// import { shareDataBloomy } from "./data";
// import { parseDate } from "../../../../utilities/getTime";
// import { BloomyRelatedPost } from "./RelatedPosts";
export var Bloomy = function (_a) {
    // const classes = useBloomyStyles();
    // const [loaded, setLoaded] = useState(false);
    var article = _a.article, site = _a.site, domain = _a.domain, handleClick = _a.handleClick;
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
    return (_jsxs("div", { children: ["ludex gundyr", article, domain, site, handleClick] }));
};
