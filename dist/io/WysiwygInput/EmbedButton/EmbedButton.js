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
import { EmbedOption } from "../EmbedOption";
import { AiOutlineLink } from "react-icons/ai";
import { ClickAwayListener } from "@mui/base";
export var EmbedButton = function (_a) {
    var initiateEmbed = _a.initiateEmbed;
    var classes = useInsertButtonStyles();
    var _b = __read(useState(false), 2), open = _b[0], setOpen = _b[1];
    var handleInsertOptions = function () {
        setOpen(!open);
    };
    var handleClick = function (type) {
        initiateEmbed === null || initiateEmbed === void 0 ? void 0 : initiateEmbed(type);
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: function () {
            setOpen(false);
        } }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsx("button", __assign({ className: classes.insertButton, onClick: handleInsertOptions }, { children: "+" })), _jsxs("div", __assign({ className: clx(classes.selectOption, open ? classes.showOptions : classes.hideOptions) }, { children: [_jsx("span", __assign({ className: classes.optionTitleSpan }, { children: "EMBEDS" })), _jsxs("div", __assign({ className: classes.options }, { children: [_jsx(EmbedOption, { icon: _jsx(PictureIcon, {}), title: "Picture", description: "jpeg, png", handleClick: function () { return handleClick("image"); } }), _jsx(EmbedOption, { icon: _jsx(VideoIcon, {}), title: "Video", description: "Embed a Youtube video", handleClick: function () { return handleClick("video"); } }), _jsx(EmbedOption, { icon: _jsx(AiOutlineLink, { className: classes.linkIcon }), title: "Link", description: "Embed a Link", handleClick: function () { return handleClick("link"); } })] }))] }))] })) })));
};
