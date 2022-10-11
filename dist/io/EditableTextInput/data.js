import { jsx as _jsx } from "react/jsx-runtime";
import { MdFormatBold, MdOutlineFormatItalic } from "react-icons/md";
import { CgFormatHeading } from "react-icons/cg";
import { BsLink } from "react-icons/bs";
export var contols = [
    {
        name: "italic",
        cmd: "italic",
        icon: _jsx(MdOutlineFormatItalic, {}, void 0),
    },
    {
        name: "bold",
        cmd: "bold",
        icon: _jsx(MdFormatBold, {}, void 0),
    },
    {
        name: "heading",
        icon: _jsx(CgFormatHeading, {}, void 0),
        cmd: "formatBlock",
        arg: "h1",
    },
    {
        cmd: "createLink",
        arg: "https://github.com/lovasoa/react-contenteditable",
        name: "hyperlink",
        icon: _jsx(BsLink, {}, void 0),
    },
];
