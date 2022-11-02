import { ComponentPropType } from "stories/types";
import { MbmcBlock1 } from "./blocks/MbmcBlock1/MbmcBlock1";
import { MbmcBlock3 } from "./blocks/MbmcBlock3/MbmcBlock3";
import { MbmcBlock2 } from "./blocks/MbmcBlock2/MbmcBlock2";
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

export const blocks: MbmcTemplatePropType[] = [
    {
        name: "mbmc-block-1",
        component: MbmcBlock1,
        props: { style: "mbmc" },
    },
    {
        name: "mbmc-block-2",
        component: MbmcBlock2,
        props: { style: "mbmc" },
    },
    {
        name: "mbmc-block-3",
        component: MbmcBlock3,
        props: { style: "mbmc" },
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
        props: {
            style: "mbmc",
            heading: "Testimony",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
            carouselData: [
                {
                    content:
                        "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                    author: "Elizabeth Lizzy",
                    jobRole: "OFFICE WORKER",
                },
                {
                    content:
                        "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                    author: "Elizabeth Lizzy",
                    jobRole: "OFFICE WORKER2",
                },
                {
                    content:
                        "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                    author: "Elizabeth Lizzy",
                    jobRole: "OFFICE WORKER3",
                },
            ],
        },
    },
    {
        name: "mbmc-block-9",
        component: MbmcBlock9,
        props: {
            style: "mbmc",
            heading: "How It Works",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing eli tr, sed diam nonumy eirmod tempor invidunt ut lab",
            steps: [
                {
                    heading: "Pick your favourite1",
                    description:
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                    image: "",
                },
                {
                    heading: "Expertly prepared2",
                    description:
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                    image: "",
                },
                {
                    heading: "Away it goes",
                    description:
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                    image: "",
                },
                {
                    heading: "Heat - eat - repeat",
                    description:
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                    image: "",
                },
            ],
        },
    },
    {
        name: "mbmc-block-910",
        component: MbmcBlock10,
        props: {
            style: "mbmc",
            tags: [
                {
                    text: "EXPERTLY PREPARED",
                    icon: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg",
                },
                {
                    text: "FRESH & AUTHENTIC",
                    icon: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/foodIcon.svg",
                },
                {
                    text: "UK WIDE DELIVERY",
                    icon: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/deliveryIcon.svg",
                },
            ],
        },
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
