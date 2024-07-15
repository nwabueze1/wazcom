import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditorToolbarStyles } from "./styles";
import clx from "classnames";
import { EmbedButton } from "../EmbedButton";
export var EditorToolbar = function (_a) {
    var initiateEmbed = _a.initiateEmbed;
    var classes = useEditorToolbarStyles();
    return (_jsxs("div", { id: "toolbar", className: classes.toolbar, children: [_jsx("span", { className: clx("ql-formats", classes.toolbarItem), children: _jsx(EmbedButton, { initiateEmbed: initiateEmbed }) }), _jsx("span", { className: clx("ql-formats", classes.toolbarItem), children: _jsxs("select", { className: "ql-header", children: [_jsx("option", { value: "1", children: "Heading 1" }), _jsx("option", { value: "2", children: "Heading 2" }), _jsx("option", { value: "3", children: "Heading 3" }), _jsx("option", { value: "4", children: "Heading 4" }), _jsx("option", { value: "5", children: "Heading 5" }), _jsx("option", { value: "6", children: "Heading 6" }), _jsx("option", { value: "", children: "Normal" })] }) }), _jsxs("span", { className: clx("ql-formats", classes.toolbarItem), children: [_jsx("button", { className: "ql-bold" }), _jsx("button", { className: "ql-italic" }), _jsx("button", { className: "ql-underline" }), _jsx("button", { className: "ql-strike" }), _jsx("button", { className: "ql-link", onClick: function () {
                            var linkTooltip = Array.from(document.getElementsByClassName("ql-tooltip ql-editing"));
                            if (linkTooltip[0]) {
                                var editor = document.getElementsByClassName("ql-editor")[0];
                                var editorScroll = editor.scrollTop;
                                if (editorScroll > 0) {
                                    linkTooltip[0].style.top = "calc(".concat(linkTooltip[0].style.top, " - ").concat(editorScroll, "px + 80px)");
                                }
                                var maxLeft = editor.clientWidth - linkTooltip[0].clientWidth - 20;
                                var left = Number(linkTooltip[0].style.left.split("px")[0]);
                                left = Math.max(20, left);
                                left = Math.min(maxLeft, left);
                                linkTooltip[0].style.left = "".concat(left, "px");
                            }
                        } })] }), _jsxs("span", { className: clx("ql-formats", classes.toolbarItem), children: [_jsx("button", { className: "ql-list", value: "ordered" }), _jsx("button", { className: "ql-list", value: "bullet" }), _jsx("select", { className: "ql-align" })] })] }));
};
