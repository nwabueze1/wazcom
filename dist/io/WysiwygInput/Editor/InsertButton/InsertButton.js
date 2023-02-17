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
import { useState } from "react";
import { useInsertButtonStyles } from "./styles";
import clx from "classnames";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import SocialIcon from "./SocialIcon";
export var InsertButton = function (_a) {
    var className = _a.className, handleImageModalState = _a.handleImageModalState;
    var classes = useInsertButtonStyles();
    var _b = __read(useState(false), 2), mediaOpen = _b[0], setMediaOpen = _b[1];
    var handleInsertOptions = function () {
        setMediaOpen(!mediaOpen);
    };
    var handleOptionClick = function (e, option) {
        console.log(e.target.textContent);
        if (option) {
            handleImageModalState(option);
        }
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [_jsx("button", __assign({ className: classes.insertButton, onClick: handleInsertOptions }, { children: "+" })), _jsxs("div", __assign({ className: clx(classes.selectOption, mediaOpen ? classes.showOptions : classes.hideOptions) }, { children: [_jsx("span", __assign({ className: classes.optionTitleSpan }, { children: "EMBEDS" })), _jsxs("div", __assign({ className: classes.options }, { children: [_jsx(OptionItem, { icon: _jsx(PictureIcon, {}), title: "Picture", itemInfo: "jpeg, png", handleOptionClick: function () { return handleOptionClick(event, "picture"); } }), _jsx(OptionItem, { icon: _jsx(VideoIcon, {}), title: "Video", itemInfo: "Embed a Youtube video", handleOptionClick: function () { return handleOptionClick(event, "video"); } }), _jsx(OptionItem, { icon: _jsx(SocialIcon, {}), title: "Social", itemInfo: "Embed a Facebook Link", handleOptionClick: function () { return handleOptionClick(event, "social"); } })] }))] }))] })));
};
export var OptionItem = function (_a) {
    var icon = _a.icon, title = _a.title, itemInfo = _a.itemInfo, handleOptionClick = _a.handleOptionClick;
    var classes = useInsertButtonStyles();
    return (_jsxs("div", __assign({ className: classes.option, onClick: function () { return handleOptionClick(); } }, { children: [_jsx("div", __assign({ className: classes.optionItemIcon }, { children: icon })), _jsxs("div", __assign({ className: classes.optionItemRight }, { children: [_jsx("div", __assign({ className: classes.optionItemTitle }, { children: title })), _jsx("div", __assign({ className: classes.optionItemSpan }, { children: itemInfo }))] }))] })));
};
