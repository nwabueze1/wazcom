import { jsx as _jsx } from "react/jsx-runtime";
import { FaInstagramSquare, FaUnsplash } from "react-icons/fa";
import { SiPexels } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
export var medialibraryTabs = [
    { name: "My Library", icon: _jsx(IoPerson, { className: "person" }) },
    { name: "Unsplash", icon: _jsx(FaUnsplash, {}) },
    { name: "Instagram", icon: _jsx(FaInstagramSquare, { fill: "#d62976", className: "instagram" }) },
    { name: "Pexels", icon: _jsx(SiPexels, { style: { fill: "#07a081" }, className: "pexel" }) },
];
export var selectorTabs = ["Media Library", "Unsplash", "Instagram", "Pexels"];
export var sortType = ["Most Recent", "Oldest"];
