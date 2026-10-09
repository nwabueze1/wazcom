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
import { TbSocial } from "react-icons/tb";
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
    return (_jsx(ClickAwayListener, { onClickAway: function () {
            setOpen(false);
        }, children: _jsxs("div", { className: classes.root, children: [_jsx("button", { className: classes.insertButton, onClick: handleInsertOptions, children: "+" }), _jsxs("div", { className: clx(classes.selectOption, open ? classes.showOptions : classes.hideOptions), children: [_jsx("span", { className: classes.optionTitleSpan, children: "EMBEDS" }), _jsxs("div", { className: classes.options, children: [_jsx(EmbedOption, { icon: _jsx(PictureIcon, {}), title: "Picture", description: "jpeg, png", handleClick: function () { return handleClick("image"); } }), _jsx(EmbedOption, { icon: _jsx(VideoIcon, {}), title: "Video", description: "JW player, Youtube, Vimeo", handleClick: function () { return handleClick("video"); } }), _jsx(EmbedOption, { icon: _jsx(TbSocial, { className: classes.linkIcon }), title: "Social", description: "Instagram, Twitter, Tiktok, Snapchat, Facebook", handleClick: function () { return handleClick("link"); } })] })] })] }) }));
};
