import { FaInstagramSquare, FaUnsplash } from "react-icons/fa";
import { SiPexels } from "react-icons/si";
import { IoPerson } from "react-icons/io5";

export const medialibraryTabs = [
    { name: "My Library", icon: <IoPerson className={"person"} /> },
    { name: "Unsplash", icon: <FaUnsplash /> },
    { name: "Instagram", icon: <FaInstagramSquare fill={"#d62976"} className={"instagram"} /> },
    { name: "Pexels", icon: <SiPexels style={{ fill: "#07a081" }} className={"pexel"} /> },
];

export const selectorTabs = ["Media Library", "Unsplash", "Instagram", "Pexels"];

export const sortType = ["Most Recent", "Oldest"];