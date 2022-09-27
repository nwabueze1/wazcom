import { MdFormatBold, MdOutlineFormatItalic } from "react-icons/md";
import { BiHeading } from "react-icons/bi";
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
    icon: <BiHeading />,
    cmd: "formatBlock",
    arg: "h1",
  },
  {
    cmd: "createLink",
    arg: "https://github.com/lovasoa/react-contenteditable",
    name: "hyperlink",
    icon: <BsLink />,
  }
];