import { BsArrowRight } from "react-icons/bs";
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
import { useMbmbcStyles } from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { MbmcBlock14 } from "./blocks/MbmcBlock14/MbmcBlock14";
import { MbmcBlock15 } from "./blocks/MbmcBlock15/MbmcBlock15";

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
            props: {
                style: "mbmc",
                heading: "Lorem Ipsum Dolor Sit.",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore a….`,
                images: [
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                ],
            },
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
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/step1.svg",
                    },
                    {
                        heading: "Expertly prepared2",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/step2.svg",
                    },
                    {
                        heading: "Away it goes",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/step3.svg",
                    },
                    {
                        heading: "Heat - eat - repeat",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/step4.svg",
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
            props: {
                style: "mbmc",
                heading: "Baking",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea ta`,
                image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/zdpk0U95fFJNVodRZxpIYk6hMIJYReitDX4R7RX4.png",
                ctas: [
                    {
                        type: "PRIMARY",
                        text: "Contact us",
                    },
                ],
            },
        },
        {
            name: "mbmc-block-912",
            component: MbmcBlock12,
            props: {
                style: "mbmc",
                heading: "We Are Available To Get Your Order",
                description:
                    "If you’d like to talk please call or email us, you can also use the form to get in touch. We’ll get back in touch within 24hrs",
                ctas: [
                    {
                        type: "SECONDARY",
                        text: "Call us",
                    },
                    {
                        type: "PRIMARY",
                        text: "Email us",
                    },
                ],
            },
        },
        {
            name: "mbmc-block-913",
            component: MbmcBlock13,
            props: {
                style: "mbmc",
                logo: {
                    desktopSrc:
                        "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Logo-Landscape.svg",
                    url: "#",
                    mobileSrc: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Logo.svg",
                },
                links: [
                    { text: "About us", url: "#" },
                    { text: "Menus", url: "#" },
                    { text: "Contact us", url: "#" },
                ],
                icons: [
                    {
                        url: "#",
                        icon: <FiShoppingCart color="white" fontSize={20} />,
                        badgeIcon: true,
                        badgeCount: 4,
                    },
                ],
                ctas: [
                    {
                        text: "Order now",
                        handleClick: () => console.log("clicked"),
                    },
                ],
            },
        },
        {
            name: "mbmc-block-914",
            component: MbmcBlock14,
            props: {
                style: "mbmc",
            },
        },
        {
            name: "mbmc-block-915",
            component: MbmcBlock15,
            props: {
                style: "mbmc",
                steps: ["Checkout1", "Shipping Details", "Payment"],
                stepHistory: [1, 2],
            },
        },
    ];
};
