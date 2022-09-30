import { DefaultInputState } from "./components/DefautInputState/DefualtInputstate";
import { DropDown } from "./components/DropDown/DropDown";
import { CheckBox } from "./components/CheckBox/CheckBox";
import { MultipleChoice } from "./components/MultipleChoice/MultipleChoice";
import { ShortAnswer } from "./components/ShortAnswer/ShortAnswer";
import { Date } from "./components/Date/Date";
import { Time } from "./components/Time/Time";
import { InputComponentProps } from "./types";

export const inputComponents: InputComponentProps[] = [
    {
        name: "short_answer",
        component: <ShortAnswer placeholderText="Short Answer Text" />
    },
    {
        name: "paragraph",
        component: <ShortAnswer placeholderText="Long Answer Text" />
    },
    {
        name: "dropdown",
        component: <DropDown />
    },
    {
        name: "checkboxes",
        component: <CheckBox />
    },
    {
        name: "multiple",
        component: <MultipleChoice />
    },
    {
        name: "file",
        component: <ShortAnswer placeholderText="Long Answer Text" />
    },
    {
        name: "date",
        component: <Date />
    },
    {
        name: "time",
        component: <Time />
    }
]