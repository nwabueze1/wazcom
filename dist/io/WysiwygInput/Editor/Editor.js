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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";
export var Editor = function (_a) {
    var handleContent = _a.handleContent;
    var _b = __read(useState(''), 2), content = _b[0], setContent = _b[1];
    var _c = __read(useState(0), 2), textIndex = _c[0], setTextIndex = _c[1];
    var _d = __read(useState(0), 2), wordCount = _d[0], setWordCount = _d[1];
    var _e = __read(useState(''), 2), embedUrl = _e[0], setEmbedUrl = _e[1];
    var _f = __read(useState(''), 2), socialEmbed = _f[0], setSocialEmbed = _f[1];
    var _g = __read(useState(0), 2), editorHeight = _g[0], setEditorHeight = _g[1];
    var _h = __read(useState(0), 2), offSet = _h[0], setOffSet = _h[1];
    var _j = __read(useState(0), 2), screenOffset = _j[0], setScreenOffset = _j[1];
    var _k = __read(useState(0), 2), toolbarPosition = _k[0], setToolbarPosition = _k[1];
    var quillRef = useRef();
    var classes = useEditorToolbarStyles();
    var handleChange = function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var editorRef, range, position;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    editorRef = quillRef.current.getEditor();
                    return [4 /*yield*/, editorRef.getSelection()];
                case 1:
                    range = _a.sent();
                    position = range ? range.index : 0;
                    setContent(text);
                    setTextIndex(position);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        handleContent(content);
    }, [content]);
    useEffect(function () {
        setToolbarPosition(editorHeight + offSet - screenOffset - 31.5);
    }, [editorHeight]);
    useEffect(function () {
        var words = content.split(" ");
        var wordCount = 0;
        words.forEach(function (word) {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
        handleToolbarPosition();
    }, [content]);
    useEffect(function () {
        handleVideoEmbed();
    }, [embedUrl]);
    useEffect(function () {
        handleSocialEmbed();
    }, [socialEmbed]);
    var handleVideoEmbed = function () {
        var editorRef = quillRef.current.getEditor();
        embedUrl.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, embedUrl);
        editorRef.setSelection(textIndex + 1);
    };
    var handleSocialEmbed = function () {
        var editorRef = quillRef.current.getEditor();
        socialEmbed.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, socialEmbed);
        editorRef.setSelection(textIndex + 1);
    };
    var handleToolbarPosition = function () { return __awaiter(void 0, void 0, void 0, function () {
        var rect, contentDiv, offset, editorFieldHeight, diff;
        return __generator(this, function (_a) {
            rect = document.getSelection().baseNode.parentNode.getBoundingClientRect();
            setScreenOffset(rect.y);
            contentDiv = document.querySelector('#editor');
            offset = contentDiv.getBoundingClientRect().y;
            setOffSet(offset);
            editorFieldHeight = contentDiv.clientHeight;
            setEditorHeight(editorFieldHeight);
            diff = rect.y - offset;
            setToolbarPosition(diff);
            return [2 /*return*/];
        });
    }); };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.editor }, { children: [_jsx("div", __assign({ className: classes.floatingBar, style: { top: toolbarPosition < 0 ? 0 : toolbarPosition - 15, left: 0 } }, { children: _jsx(EditorToolbar, {}) })), _jsx(ReactQuill, { id: "editor", ref: quillRef, theme: "snow", value: content, onChange: handleChange, placeholder: "type something amazing", modules: modules, formats: formats, className: classes.quillEditor }), _jsx("div", { children: _jsx(InsertButton, { embedUrl: embedUrl, setEmbedUrl: setEmbedUrl }) })] })), _jsxs("div", __assign({ className: classes.wordCount }, { children: [wordCount, "/1000 words"] }))] })));
};
export default Editor;
