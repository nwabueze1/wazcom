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
import { MbmcBlock14 } from "./blocks/MbmcBlock14/MbmcBlock14";
import { createApolloClient } from "helpers/graphQL";
import { MbmcBlock61 } from "./blocks/MbmcBlock6-1";

export const useGetMbmcBlocks = () => {
    const classes = useMbmbcStyles();

    return (): MbmcTemplatePropType[] => [
        {
            name: "mbmc-block-1",
            component: MbmcBlock1,
            props: {
                heading: "From Our <br /> Kitchen <br /> To Your Table",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/hero-food.webp",
                ctas: [
                    {
                        text: "Order now",
                        rIcon: <BsArrowRight className={classes.mbmc1CtaIcon} />,
                    },
                    {
                        text: "Contact us",
                        variant: "SECONDARY",
                    },
                ],
                mode: "edit",
                handleClick: (route: string) => alert(route),
                activeElement: "MbmcBlock1.image",
            },
        },
        {
            name: "mbmc-block-2",
            component: MbmcBlock1,
            props: {
                heading: "Our Menu",
                image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/hero-food.webp",
                fullHeight: false,
            },
        },
        {
            name: "mbmc-block-3",
            component: MbmcBlock3,
            props: {
                heading: "Food is an important part of a balanced diet",
                description: `We serve the finest flavours and rich serving of mouth-watering Afro-Caribbean and Asian cuisines that include delicious Cocktails and bakes.<br/><br/>Founded on the love of bringing people together over intercontinental delicacies. We are a husband and wife team of passionate chefs who want to make your next meal a hit!`,
                ctas: [
                    {
                        text: "Learn more",
                    },
                ],
                mode: "edit",
                index: 0,
                handleClick: (route: string) => alert(route),
                activeElement: "0.description",
            },
        },
        {
            name: "mbmc-block-4",
            component: MbmcBlock4,
            props: {
                heading: "Our Premium Services",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore a….`,
                cards: [
                    {
                        heading: "Baking",
                        description:
                            "Lorem ips um dolor sit amet, consetetur sadipscin g elitr, sed diam nonumy eirmod.",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/bake.webp",
                    },
                    {
                        heading: "Private Dining",
                        description:
                            "Lorem ips um dolor sit amet, consetetur sadipscin g elitr, sed diam nonumy eirmod.",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/tablevase.webp",
                    },
                    {
                        heading: "Cocktail & Mocktail",
                        description:
                            "Lorem ips um dolor sit amet, consetetur sadipscin g elitr, sed diam nonumy eirmod.",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/drink.webp",
                    },
                ],

                mode: "edit",
                index: 0,
                handleClick: (route: string) => alert(route),
                activeElement: "0.cards.2.image",
            },
        },
        {
            name: "mbmc-block-5",
            component: MbmcBlock5,
            props: {
                logo: {
                    src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/chefLogo.svg",
                    text: "",
                    url: "#",
                },
                index: 0,
                mode: "view",
                handleClick: (route: string) => alert(route),
                links: [
                    {
                        name: "Company",
                        links: [
                            {
                                text: "About us",
                                url: "/about",
                            },
                            {
                                text: "Our menu",
                                url: "/menu",
                            },
                            {
                                text: "Services",
                                url: "/about#services",
                            },
                        ],
                    },
                    {
                        name: "Services",
                        links: [
                            {
                                text: "Private dining",
                                url: "/about#private-dining",
                            },
                            {
                                text: "Baking",
                                url: "/about#baking",
                            },
                            {
                                text: "Mocktail and cocktail",
                                url: "/about#",
                            },
                        ],
                    },
                    {
                        name: "Contact us:",
                        links: [
                            {
                                text: "+44444444444",
                                url: "tel:+44444444444",
                            },
                            {
                                text: "johndoe@wazobia.tech",
                                url: "mailto:johndoe@wazobia.tech",
                            },
                            {
                                text: "1 Ave, Kent, United Kingdom",
                                url: "#",
                            },
                        ],
                    },
                    {
                        name: "Connect with us",
                        links: [
                            {
                                text: "@mrbakerandmrscook",
                                url: "https://www.instagram.com/mrbakermrscook/?hl=en",
                                icon: "instagram",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "mbmc-block-6",
            component: MbmcBlock6,
            props: {
                heading: "Explore Our Menu",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                diam nonumy eirmod tempor invidunt ut labore et dolore a….`,
                menu_uuid: "86e9e1a1-8d9a-4673-b035-f720df10728a",
                integratedService: "AMBROSIA",
                services: {
                    AMBROSIA: "https://ofambegbe-ambrosia.wazobia.uk/graphql",
                    NICODEMUS: "",
                    MUSE: "",
                },
                mode: "edit",
                index: 0,
                activeElement: "0.menu_uuid",
                handleClick: (route: string) => alert(route),
            },
        },
        {
            name: "mbmc-block-61",
            component: MbmcBlock61,
            props: {
                heading: "Explore Our Best Menu",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                diam nonumy eirmod tempor invidunt ut labore et dolore a….`,
                services: {
                    AMBROSIA: "https://ambrosia.hogfort.com/graphql",
                    NICODEMUS: "",
                    MUSE: "",
                },
                integratedService: "AMBROSIA",
                menu_uuid: "caac32a1-7213-4c5c-9378-78e488dd697f",
                site_uuid: "",
            },
        },
        {
            name: "mbmc-block-7",
            component: MbmcBlock7,
            props: {
                heading: "Lorem Ipsum Dolor Sit.",
                description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore a….`,
                images: [
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/img.webp",
                ],
                services: {
                    AMBROSIA: "https://ambrosia.hogfort.com/graphql",
                    NICODEMUS: "https://nicodemus.sytbuilder.com/graphql",
                    MUSE: "",
                },
                integratedService: "NICODEMUS",
                site_uuid: "ca2291e7-7789-43c5-8ab3-5bbb01228b07",
                mode: "edit",
                index: 0,
                activeElement: "0.description",
                handleClick: (route: string) => alert(route),
            },
        },
        {
            name: "mbmc-block-8",
            component: MbmcBlock8,
            props: {
                heading: "Testimonial",
                description:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
                cards: [
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                    {
                        content:
                            "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.”",
                        name: "Elizabeth Lizzy",
                        role: "OFFICE WORKER",
                    },
                ],
                mode: "edit",
                index: 0,
                activeElement: "0.cards.6.name",
                handleClick: (element: string) => alert(element),
            },
        },
        {
            name: "mbmc-block-9",
            component: MbmcBlock9,
            props: {
                heading: "How It Works",
                description:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing eli tr, sed diam nonumy eirmod tempor invidunt ut lab",
                steps: [
                    {
                        heading: "Pick your favourite",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/step1.webp",
                        url: "/menu",
                    },
                    {
                        heading: "Expertly prepared",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/step2.webp",
                    },
                    {
                        heading: "Away it goes",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/step3.webp",
                    },
                    {
                        heading: "Heat - eat - repeat",
                        description:
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/step4.svg",
                    },
                ],
                // mode: "edit",
                // activeElement: "0.steps.1.heading",
                handleClick: (element: string) => alert(element),
            },
        },
        {
            name: "mbmc-block-10",
            component: MbmcBlock10,
            props: {
                tags: [
                    {
                        text: "EXPERTLY PREPARED",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/home/chefLogo.webp",
                    },
                    {
                        text: "FRESH & AUTHENTIC",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/foodIcon.svg",
                    },
                    {
                        text: "UK WIDE DELIVERY",
                        image: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/deliveryIcon.svg",
                    },
                ],
                mode: "edit",
                index: 0,
                activeElement: "0.tags.0.text",
                handleClick: (route: string) => alert(route),
            },
        },
        {
            name: "mbmc-block-11",
            component: MbmcBlock11,
            props: {
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
                        variant: "PRIMARY",
                        text: "Contact us",
                        url: "/contact-us",
                    },
                ],
                hasBackground: true,
                layout: "row-reverse",
                mode: "view",
                handleClick: (route: string) => alert(route),
                index: 0,
                activeElement: "0.heading",
            },
        },
        {
            name: "mbmc-block-12",
            component: MbmcBlock12,
            props: {
                heading: "We Are Available To Get Your Order",
                description:
                    "If you’d like to talk please call or email us, you can also use the form to get in touch. We’ll get back in touch within 24hrs",
                ctas: [
                    {
                        text: "Call us",
                        variant: "SECONDARY",
                        size: "sm",
                    },
                    {
                        text: "Email us",
                        size: "sm",
                    },
                ],
                client: {
                    type: "emailjs",
                    credentials: {
                        service_id: "service_e0r79wm",
                        template_id: "template_1qe38gr",
                        user_id: "_h6kVofH7LYFXtlsI",
                    },
                },
                mode: "edit",
                handleClick: (route: string) => alert(route),
                index: 0,
                activeElement: "0.ctas.0",
            },
        },
        {
            name: "mbmc-block-13",
            component: MbmcBlock13,
            props: {
                logo: {
                    src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/Logo%402x.png",
                    url: "#",
                },
                links: [
                    { text: "About us", url: "/about" },
                    { text: "Menus", url: "/menu" },
                    { text: "Contact us", url: "/contact-us" },
                ],
                ctas: [
                    {
                        text: "Order now",
                        variant: "NEUTRAL",
                    },
                ],
                site_uuid: "896466aa-bacc-4817-b577-436a52540eff",
                mode: "view",
                index: 0,
                activeElement: "0.ctas.0",
                handleClick: (route: string) => alert(route),
            },
        },
        {
            name: "mbmc-block-14",
            component: MbmcBlock14,
            props: {
                services: {
                    AMBROSIA: "https://ofambegbe-ambrosia.wazobia.uk/graphql",
                    NICODEMUS: "https://ofambegbe-nicodemus.wazobia.uk/graphql",
                    MUSE: "",
                },
                integratedServices: ["AMBROSIA", "NICODEMUS"],
                site_uuid: "896466aa-bacc-4817-b577-436a52540eff",
            },
        },
    ];
};
