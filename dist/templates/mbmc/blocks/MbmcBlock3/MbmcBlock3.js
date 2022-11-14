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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMbmcBlock3Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
export var MbmcBlock3 = function (_a) {
    var heading = _a.heading, description = _a.description, ctas = _a.ctas;
    var classes = useMbmcBlock3Styles();
    var displayCtas = function () {
        return (ctas !== null && ctas !== void 0 ? ctas : []).map(function (_a, index) {
            var text = _a.text, rIcon = _a.rIcon, lIcon = _a.lIcon, props = __rest(_a, ["text", "rIcon", "lIcon"]);
            return (_jsxs(MbmcButton, __assign({}, props, { children: [lIcon, " ", text, " ", rIcon] }), index));
        });
    };
    // return (
    //     <div className={classes.root}>
    //         <div className={classes.headerContent}>
    //             <h3 className={classes.headerTitle}>
    //                 Food is an important <br className={classes.headerIcon} /> part of a balanced
    //                 diet
    //             </h3>
    //             <div className={classes.heroContainerMobile}>
    //                 <img
    //                     src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png"
    //                     alt="food images"
    //                     className={classes.heroImageMobile}
    //                 />
    //             </div>
    //             <div className={classes.headerParagraph}>
    //                 <p className={classes.headerDescription}>
    //                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    //                     eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    //                     voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    //                     clita kasd
    //                 </p>
    //                 <p className={classes.headerDescription}>
    //                     elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
    //                     aliquyam erat, sed diam voluptua. At vero eo…
    //                 </p>
    //             </div>
    //             <div className={classes.headerBtnContainer}>
    //                 <MbmcButton bgColor="#F25430">Learn more</MbmcButton>
    //             </div>
    //         </div>
    //         <div className={classes.heroContainer}>
    //             <img
    //                 src="https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png"
    //                 alt="food images"
    //                 className={classes.heroImage}
    //             />
    //         </div>
    //     </div>
    // );
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.block3Container }, { children: [_jsx("div", __assign({ className: classes.block3ImageContainer }, { children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFoodLabel.png", className: classes.block3Image }, void 0) }), void 0), _jsxs("div", __assign({ className: classes.block3Content }, { children: [_jsx("h3", __assign({ className: classes.block3Heading }, { children: heading }), void 0), _jsxs("div", __assign({ className: classes.block3ContentImageContainer }, { children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/heroFood.png", alt: "", className: "hero" }, void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: "overlay" }, void 0)] }), void 0), _jsx("p", __assign({ className: classes.block3Description }, { children: description }), void 0), _jsx("div", __assign({ className: classes.block3Ctas }, { children: displayCtas() }), void 0)] }), void 0)] }), void 0), _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg", alt: "Overlay", className: classes.block3ImageOverlay }, void 0)] }), void 0));
};
