import { ComponentPropType } from "stories/types";
import { Header } from "./blocks/Header/Header";
import { SubHeader } from "./blocks/SubHeader/SubHeader";

export const blocks: ComponentPropType[] = [
    {
        name: "mbmc-block-1",
        component: Header,
        props: {},
    },
    {
        name: "mbmc-block-2",
        component: SubHeader,
        props: {},
    },
];
