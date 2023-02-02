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
import { InsertDialog } from "../InsertDialog/InsertDialog";
import { EditorMediaLibrary } from "../EditorMediaLibrary/EditorMediaLibrary";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import SocialIcon from "./SocialIcon";
export var InsertButton = function (_a) {
    var name = _a.name, className = _a.className, label = _a.label, value = _a.value, onChange = _a.onChange, embedUrl = _a.embedUrl, setEmbedUrl = _a.setEmbedUrl, props = __rest(_a, ["name", "className", "label", "value", "onChange", "embedUrl", "setEmbedUrl"]);
    var classes = useInsertButtonStyles();
    var _b = __read(useState(false), 2), mediaOpen = _b[0], setMediaOpen = _b[1];
    var _c = __read(useState(false), 2), openDialog = _c[0], setOpenDialog = _c[1];
    var _d = __read(useState(null), 2), selectedOption = _d[0], setSelectedOption = _d[1];
    var _e = __read(useState(false), 2), openMediaLibrary = _e[0], setOpenMediaLibrary = _e[1];
    var _f = __read(useState({
        url: "",
        title: "",
        width: { desktop: "100", tablet: "100", mobile: "100" },
        height: { desktop: "100", tablet: "100", mobile: "100" },
    }), 2), image = _f[0], setImage = _f[1];
    // const editorRef = useRef<Editor | any>();
    // const handleContentChange = (content: string) => {
    //     onChange?.({ name: name as string, value: content });
    // };
    // const handleMediaLibraryClose = () => {
    //     setMediaOpen(false);
    // };
    var insertImage = function () {
        if (image.url)
            // editorRef.current.insertContent(
            //         `<picture>
            // <source media="(min-width: 654px)" srcset=${image?.url} width=${image?.width["tablet"]} height=${image?.height["tablet"]} />
            // <source media="(min-width: 354px)" srcset=${image?.url} width=${image?.width["mobile"]} height=${image?.height["mobile"]} />
            // <img src=${image?.url} width=${image?.width["desktop"]} height=${image?.height["desktop"]} />
            // </picture>`,
            //     );
            setImage({
                url: "",
                title: "",
                width: { desktop: "100", tablet: "100", mobile: "100" },
                height: { desktop: "100", tablet: "100", mobile: "100" },
            });
    };
    // const updateImage = (name: string, value: string, device?: string) => {
    //     if (device && (name == "width" || name == "height"))
    //         setImage({ ...image, [name]: { ...image[name], [device]: value } });
    //     else setImage({ ...image, [name]: value });
    // };
    var handleInsertOptions = function () {
        setMediaOpen(!mediaOpen);
    };
    var handleMediaLibraryDialogClose = function () {
        setOpenDialog(false);
        setOpenMediaLibrary(!openMediaLibrary);
    };
    var handleSelectImage = function (value) {
        console.log(value);
        setMediaOpen(false);
        setImage(__assign(__assign({}, image), { url: value === null || value === void 0 ? void 0 : value.url, title: value === null || value === void 0 ? void 0 : value.title }));
    };
    var handleOptionClick = function (event, option) {
        if (option) {
            setSelectedOption(option);
            if (option === 'picture') {
                setOpenMediaLibrary(!openMediaLibrary);
                setOpenDialog(false);
            }
            else {
                setOpenDialog(true);
            }
        }
    };
    var handleDialogClose = function (event) {
        setOpenDialog(!openDialog);
    };
    return (_jsxs("div", __assign({ className: clx(className, classes.root) }, { children: [_jsx("button", __assign({ className: classes.insertButton, onClick: handleInsertOptions }, { children: "+" })), openDialog &&
                _jsx(InsertDialog, { dialogType: selectedOption, handleDialogClose: handleDialogClose, emedUrl: embedUrl, setEmbedUrl: setEmbedUrl }), openMediaLibrary &&
                _jsx(EditorMediaLibrary, { mediaOpen: openMediaLibrary, handleSelect: handleSelectImage, handleClose: handleMediaLibraryDialogClose }), _jsxs("div", __assign({ className: clx(classes.selectOption, mediaOpen ? classes.showOptions : classes.hideOptions) }, { children: [_jsx("span", __assign({ className: classes.optionTitleSpan }, { children: "EMBEDS" })), _jsxs("div", __assign({ className: classes.options }, { children: [_jsx(OptionItem, { icon: _jsx(PictureIcon, {}), title: "Picture", itemInfo: "jpeg, png", handleOptionClick: function () { return handleOptionClick(event, "picture"); } }), _jsx(OptionItem, { icon: _jsx(VideoIcon, {}), title: "Video", itemInfo: "Embed a Youtube video", handleOptionClick: function () { return handleOptionClick(event, "video"); } }), _jsx(OptionItem, { icon: _jsx(SocialIcon, {}), title: "Social", itemInfo: "Embed a Facebook Link", handleOptionClick: function () { return handleOptionClick(event, "social"); } })] }))] }))] })));
};
export var OptionItem = function (_a) {
    var icon = _a.icon, title = _a.title, itemInfo = _a.itemInfo, handleOptionClick = _a.handleOptionClick;
    var classes = useInsertButtonStyles();
    return (_jsxs("div", __assign({ className: classes.option, onClick: handleOptionClick }, { children: [_jsx("div", __assign({ className: classes.optionItemIcon }, { children: icon })), _jsxs("div", __assign({ className: classes.optionItemRight }, { children: [_jsx("div", __assign({ className: classes.optionItemTitle }, { children: title })), _jsx("div", __assign({ className: classes.optionItemSpan }, { children: itemInfo }))] }))] })));
};
