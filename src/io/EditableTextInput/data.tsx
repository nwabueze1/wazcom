import { MdFormatBold, MdOutlineFormatItalic } from "react-icons/md";
import { CgFormatHeading } from "react-icons/cg";
import { BsLink } from "react-icons/bs";

export const contols = [
    {
        name: "italic",
        cmd: "italic",
        icon: <MdOutlineFormatItalic />,
    },
    {
        name: "bold",
        cmd: "bold",
        icon: <MdFormatBold />,
    },
    {
        name: "heading",
        icon: <CgFormatHeading />,
        cmd: "formatBlock",
        arg: "h1",
    },
    {
        cmd: "createLink",
        arg: "https://github.com/lovasoa/react-contenteditable",
        name: "hyperlink",
        icon: <BsLink />,
    },
];
