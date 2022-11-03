import { BsArrowRight } from "react-icons/bs";
import { MbmcBlock1 } from "./blocks/MbmcBlock1/MbmcBlock1";
import { MbmcBlock3 } from "./blocks/MbmcBlock3/MbmcBlock3";
import { MbmcBlock4 } from "./blocks/MbmcBlock4/MbmcBlock4";
import { MbmcBlock5 } from "./blocks/MbmcBlock5/MbmcBlock5";
import { MbmcBlock6 } from "./blocks/MbmcBlock6/MbmcBlock6";
import { MbmcBlock7 } from "./blocks/MbmcBlock7/MbmcBlock7";
import { MbmcBlock8 } from "./blocks/MbmcBlock8/MbmcBlock8";
import { MbmcBlock9 } from "./blocks/MbmcBlock9/MbmcBlock9";
import { MbmcBlock10 } from "./blocks/MbmcBlock10/MbmcBlock10";
import { MbmcTemplatePropType } from "./types";
import { MbmcBlock11 } from "./blocks/MbmcBlock11/MbmcBlock11";
import { MbmcBlock12 } from "./blocks/MbmcBlock12/MbmcBlock12";
import { MbmcBlock13 } from "./blocks/MbmcBlock13/MbmcBlock13";
import { useMbmbcStyles } from "./styles";

export const useGetMbmcBlocks = () => {
    const classes = useMbmbcStyles();

    return (): MbmcTemplatePropType[] => [
        {
            name: "mbmc-block-1",
            component: MbmcBlock1,
            props: {
                style: "mbmc",
                heading: "From Our <br /> Kitchen <br /> To Your Table",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                ctas: [
                    {
                        text: "Order now",
                        rIcon: <BsArrowRight className={classes.mbmc1CtaIcon} />,
                    },
                    {
                        text: "Contact us",
                        type: "SECONDARY",
                    },
                ],
            },
        },
        {
            name: "mbmc-block-2",
            component: MbmcBlock1,
            props: {
                style: "mbmc",
                heading: "Our Menu",
            },
        },
        {
            name: "mbmc-block-3",
            component: MbmcBlock3,
            props: {
                style: "mbmc",
                heading: "Food is an important part of a balanced diet",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd.
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eo…`,
                ctas: [
                    {
                        text: "Learn more",
                    },
                ],
            },
        },
        {
            name: "mbmc-block-4",
            component: MbmcBlock4,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-5",
            component: MbmcBlock5,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-6",
            component: MbmcBlock6,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-7",
            component: MbmcBlock7,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-8",
            component: MbmcBlock8,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-9",
            component: MbmcBlock9,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-910",
            component: MbmcBlock10,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-911",
            component: MbmcBlock11,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-912",
            component: MbmcBlock12,
            props: { style: "mbmc" },
        },
        {
            name: "mbmc-block-913",
            component: MbmcBlock13,
            props: { style: "mbmc" },
        },
    ];
};
