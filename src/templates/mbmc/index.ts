import { ComponentPropType } from "stories/types";
import { MbmcBlock1 } from "./blocks/MbmcBlock1/MbmcBlock1";
import { MbmcBlock3 } from "./blocks/MbmcBlock3/MbmcBlock3";
import { MbmcBlock2 } from "./blocks/MbmcBlock2/MbmcBlock2";

export const blocks: ComponentPropType[] = [
    {
        name: "mbmc-block-1",
        component: MbmcBlock1,
        props: {},
    },
    {
        name: "mbmc-block-2",
        component: MbmcBlock2,
        props: {},
    },
    {
        name: "mbmc-block-3",
        component: MbmcBlock3,
        props: {},
    },
];
