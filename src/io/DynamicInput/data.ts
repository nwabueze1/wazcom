import { BiLink, BiTime } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdShortText, MdArrowDropDownCircle } from "react-icons/md";
import { BsTextParagraph } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";

export const defaultInputs = [
    { label: "Paragraph", value: "paragraph", icon: BsTextParagraph },
    { label: "Short Answer", value: "short_answer", icon: MdShortText },
    { label: "Date", value: "date", icon: BsCalendarDate },
    { label: "Time", value: "time", icon: BiTime },
    { label: "Dropdown", value: "dropdown", icon: MdArrowDropDownCircle },
    { label: "Checkboxes", value: "checkboxes", icon: AiFillCheckSquare },
    { label: "Multiple Choice", value: "multiple", icon: RiRadioButtonLine },
    { label: "File upload", value: "file", icon: IoMdCloudUpload },
];
