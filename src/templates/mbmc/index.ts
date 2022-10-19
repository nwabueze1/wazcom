import { ComponentPropType } from "stories/types";
import { Header } from "./blocks/Header/Header";
import { MbmcBlock3 } from "./blocks/MbmcBlock3/MbmcBlock3";
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
    {
        name: "mbmc-block-3",
        component: MbmcBlock3,
        props: {},
    },
];
