import {
    Accordion,
    Button,
    BreadCrumb,
    Card,
    Loader,
    Gallery,
    ImageSelector,
    Table,
    MenuCard,
    DisplayCard,
    Notification,
    Carousel,
    EmptyState,
    DateTimePicker,
    Scheduler,
} from "../core";
import { BiLink } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

import {
    CheckBoxInput,
    CurrencyInputField,
    ComboBoxInput,
    RichTextInput,
    SelectInput,
    TextInput,
    InputGroup,
    ToggleInput,
    PhoneNumberInput,
    RadioButtonInput,
    TextArea,
} from "../io";

import { GqlComboBox, GqlMediaLibrary, GqlMediaLibrarySelector } from "../gql";

import {
    GETBLOGCATEGORIES,
    createApolloClient,
    createNewCategory,
    GET_IMAGES,
    UPLOAD_IMAGE,
    DELETE_IMAGE,
    UPDATE_IMAGE,
} from "../helpers/graphQL";
import { Valour, Taurant, Nour } from "templates/Navs";

import { ComponentPropType, TemplatePropType } from "./types";
import { data } from "./data";
import { EditableTextInput } from "io/EditableTextInput";
import { DynamicInput } from "io/DynamicInput";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { SectionEditor } from "io/SectionEditor";

export const stories: ComponentPropType[] = [
    {
        name: "EditableTextInput",
        component: EditableTextInput,
        props: {
            label: "Description",
            name: "description",
            onChange: ({ name, value }: { name: string; value: string }) => {
                {
                    name;
                }
                {
                    value;
                }
            },
            multiline: true,
            minRows: 5,
            feedback: {
                text: (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p key={1} style={{ color: "blue" }}>
                            Olamileke is a boy
                        </p>
                        <p key={2} style={{ color: "blue" }}>
                            Olamileke is a boy
                        </p>
                    </div>
                ),
                status: "error",
            },
            error: true,
        },
    },
    {
        name: "TextArea",
        component: TextArea,
        props: {
            label: "Description",
            name: "description",
            onChange: ({ name, value }: { name: string; value: string }) => {
                {
                    name;
                }
                {
                    value;
                }
            },
            multiline: true,
            minRows: 5,
            feedback: {
                text: (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p key={1} style={{ color: "blue" }}>
                            Olamileke is a boy
                        </p>
                        <p key={2} style={{ color: "blue" }}>
                            Olamileke is a boy
                        </p>
                    </div>
                ),
                status: "error",
            },
            error: true,
        },
    },
    {
        name: "TableWithPagination",
        component: Table,
        props: {
            headers: [],
            value: data,
            pagination: true,
            hasCheckBox: true,
            paginatorInfo: {
                currentPage: 1,
                perPage: 10,
                total: 10,
            },
            controls: {
                filter: ["id", "name"],
                canPrint: true,
                canExport: {},
            },
        },
    },
    {
        name: "MediaLibrarySelector",
        component: GqlMediaLibrarySelector,
        props: {
            label: "Avatar",
            config: {
                client: createApolloClient("https://nicodemus.sytbuilder.com/graphql"),
                query: {
                    name: GET_IMAGES,
                    variables: {
                        page: 1,
                        count: 7,
                    },
                },
                upload: {
                    name: UPLOAD_IMAGE,
                    variables: {},
                },
                viewOnly: true,
            },
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/wbAJD5oi83HUWjLuZhqTiXwlW6LO9Xdxfxr2K4TI.jpg",
            feedback: {
                text: "Image is required",
                status: "error",
            },
            error: true,
            iconType: "button",
        },
    },
    {
        name: "MediaLibrary",
        component: GqlMediaLibrary,
        props: {
            config: {
                client: createApolloClient("https://nicodemus.sytbuilder.com/graphql"),
                query: {
                    name: GET_IMAGES,
                    variables: {
                        page: 1,
                        count: 7,
                    },
                },
                upload: {
                    name: UPLOAD_IMAGE,
                    variables: {},
                },
                update: {
                    name: UPDATE_IMAGE,
                },
                remove: {
                    name: DELETE_IMAGE,
                },
            },
        },
    },
    {
        name: "accordion",
        component: Accordion,
        props: {
            children: "This is an example Wazcom Accordion",
            defaultExpanded: true,
            title: <p>leke</p>,
        },
    },
    {
        name: "breadcrumb",
        component: BreadCrumb,
        props: {
            crumbs: [
                {
                    label: "Services",
                    path: "/",
                },
                {
                    label: "Software Development",
                    path: "/soft",
                },
                {
                    label: "Mobile App Development",
                    path: "/mob",
                },
            ],
            handleClick: (path: string) => {
                path;
            },
        },
    },
    {
        name: "button",
        component: Button,
        props: {
            children: "Testing",
        },
    },
    {
        name: "card",
        component: Card,
        props: {
            children: "Testing",
            title: "Cooked dish on gray bowl",
            content: "Enjoy this wasabi chicken teriyaki choi mein",
            image: {
                src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
                alt: "cooked dish on gray bowl",
            },
            buttons: {
                values: ["Read", "Check Out"],
            },
            align: "center",
        },
    },
    {
        name: "checkbox",
        component: CheckBoxInput,
        props: {},
    },
    {
        name: "loader",
        component: Loader,
        props: {},
    },
    {
        name: "combobox",
        component: ComboBoxInput,
        props: {
            options: [
                { label: "Bread", value: "23" },
                { label: "Love", value: "45" },
            ],
            value: { label: "Love", value: "45" },
            placeholder: "Select Wazobia Member",
            isAdd: false,
        },
    },
    {
        name: "text",
        component: TextInput,
        props: {
            label: "Olamileke",
            feedback: {
                text: "Rebuilt successfully",
                status: "success",
            },
            required: true,
            type: "text",
            onChange: ({ value }: { name: string; value: any }) => {
                value;
            },
        },
    },
    {
        name: "gallery",
        component: Gallery,
        props: {
            items: [
                {
                    image: {
                        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
                        alt: "An Example Image",
                    },
                    id: 1,
                },
                {
                    image: {
                        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
                        alt: "An Example Image",
                    },
                    id: 2,
                },
                {
                    image: {
                        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
                        alt: "An Example Image",
                    },
                    id: 3,
                },
            ],
        },
    },
    {
        name: "DynamicInput",
        component: DynamicInput,
        props: {
            label: "lslss",
            options: [
                { label: "Basit", value: "basit", icon: FaEdit },
                { label: "Chinazom", value: "chinazom", icon: FaEdit },
            ],
            error: true,
            required: true,
            feedback: { text: "Tariq is a weirdo", status: "error" },
            active: true,
            defaultQuestion: {
                text: "",
                type: "dropdown",
                // supportImage: {
                //     name: "",
                //     value: {
                //         alternative_text: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                //         caption: "",
                //         created_at: "2022-10-13 09:33:44",
                //         id: "22",
                //         title: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                //         updated_at: "2022-10-13 09:33:44",
                //         url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/1a8ac99f-0e27-4784-8451-07c73953820d/G50PWn0yPElJjkYuSSbRxEKG0W522iYPJ9iq9VL1.png",
                //         uuid: "fe3fc661-96af-49cf-b8a7-390a673cc4e0",
                //         __typename: "Image",
                //     },
                // },
                options: [
                    {
                        text: "edo",
                        media: {
                            name: "",
                            value: {
                                alternative_text: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                                caption: "",
                                created_at: "2022-10-13 09:33:44",
                                id: "22",
                                title: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                                updated_at: "2022-10-13 09:33:44",
                                url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/1a8ac99f-0e27-4784-8451-07c73953820d/G50PWn0yPElJjkYuSSbRxEKG0W522iYPJ9iq9VL1.png",
                                uuid: "fe3fc661-96af-49cf-b8a7-390a673cc4e0",
                                __typename: "Image",
                            },
                        },
                    },
                ],
                required: true,
                answers: [0],
                point: 0,
                // media: {
                //     name: "",
                //     value: {
                //         alternative_text: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                //         caption: "",
                //         created_at: "2022-10-13 09:33:44",
                //         id: "22",
                //         title: "Screenshot 2022-07-25 at 14.33.36 (2).png",
                //         updated_at: "2022-10-13 09:33:44",
                //         url: "https://sytbuildr.s3.eu-west-2.amazonaws.com/1a8ac99f-0e27-4784-8451-07c73953820d/G50PWn0yPElJjkYuSSbRxEKG0W522iYPJ9iq9VL1.png",
                //         uuid: "fe3fc661-96af-49cf-b8a7-390a673cc4e0",
                //         __typename: "Image",
                //     },
                // },
            },
        },
    },
    {
        name: "SectionEditor",
        component: SectionEditor,
        props: {
            label: "lslss",
            options: [
                { label: "Basit", value: "basit", icon: FaEdit },
                { label: "Chinazom", value: "chinazom", icon: FaEdit },
            ],
            error: true,
            required: true,
            feedback: { text: "Tariq is a weirdo", status: "error" },
        },
    },
    {
        name: "Image Selector",
        component: ImageSelector,
        props: {
            variant: "square",
            size: "full",
        },
    },
    {
        name: "Toggle",
        component: ToggleInput,
        props: {
            label: "leke",
            feedback: {
                text: <p style={{ color: "green" }}>olamileke</p>,
            },
        },
    },
    {
        name: "Table",
        component: Table,
        props: {
            headers: [
                {
                    name: "id",
                    label: "id",
                },
                {
                    name: "name",
                    label: "name",
                },
                {
                    name: "email",
                    label: "email",
                },
            ],
            value: [],
            emptyTableState: {
                image: {
                    src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/Posts/emptypostimg.svg",
                },
                text: "You have not created any blog post yet. Click below to create post.",
                button: {
                    display: true,
                    text: "Create New Menu",
                    handleClick: () => {
                        alert("Zeus Empty State");
                    },
                },
            },
        },
    },
    {
        name: "Menu Card",
        component: MenuCard,
        props: {
            id: 23,
            amount: 500,
            title: "Jollof Rice",
            description: "spicy Fried Rice",
            image: {
                src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
            },
            status: true,
        },
    },
    {
        name: "displayCard",
        component: DisplayCard,
        props: { total: 30, title: "Pending Orders", color: "blue" },
    },
    {
        name: "notification",
        component: Notification,
        props: {
            title: "Khalid is a bad ass rapper",
            status: "Success",
            message: "The New Dawn is upon us",
        },
    },
    {
        name: "radiobutton",
        component: RadioButtonInput,
        props: {},
    },
    {
        name: "carousel",
        component: Carousel,
        props: {
            items: [
                {
                    label: "San Francisco – Oakland Bay Bridge, United States",
                    image: {
                        src: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
                    },
                },
                {
                    label: "Bird",
                    image: {
                        src: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
                    },
                },
                {
                    label: "Bali, Indonesia",
                    image: {
                        src: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
                    },
                },
                {
                    label: "Goč, Serbia",
                    image: {
                        src: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
                    },
                },
            ],
        },
    },
    {
        name: "Select",
        component: SelectInput,
        props: {
            label: "lslss",
            options: [
                { label: "Basit", value: "basit" },
                { label: "Chinazom", value: "chinazom" },
            ],
            error: true,
            required: true,
            feedback: { text: "Tariq is a weirdo", status: "error" },
        },
    },
    {
        name: "Rich Text",
        component: RichTextInput,
        props: {
            apiKey: "",
            error: true,
            feedback: { text: "Tariq is a weirdo", status: "error" },
            client: createApolloClient(process.env.REACT_APP_NICODEMUS_API_TOKEN as string),
        },
    },
    {
        name: "GqlComboBox",
        component: GqlComboBox,
        props: {
            name: "gqlcomboboxinput",
            config: {
                client: createApolloClient("https://muse.sytbuilder.com/graphql"),
                name: GETBLOGCATEGORIES,
                type: "query",
                labelKey: "name",
                valueKey: "id",
                key: ["categoriesByBlogID"],
            },
            variables: { blog_id: 34 },
            value: { label: "entertainment", value: 5 },
            addOption: createNewCategory,
            error: true,
            feedback: { text: "Tariq is a weirdo", status: "error" },
        },
    },
    {
        name: "Empty State",
        component: EmptyState,
        props: {
            text: "No menus to display",
            image: {
                src: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
            },
            button: {
                display: true,
                text: "Create New Menu",
                handleClick: () => {
                    alert("Zeus Empty State");
                },
            },
        },
    },
    {
        name: "Scheduler",
        component: Scheduler,
        props: {
            label: "Menu Schedule",
            value: [
                {
                    day: "0",
                    start_time: "12:00",
                    end_time: "18:00",
                },
            ],
        },
    },
    {
        name: "DateTimePicker",
        component: DateTimePicker,
        props: {
            label: "Date time picker",
            value: [
                {
                    day: "0",
                    time: "18:00",
                },
            ],
        },
    },
    {
        name: "InputGroup",
        component: InputGroup,
        props: {
            variant: "outlined",
            text: "wazcomghdshgksdgjsk.sytbuilder.com",
            label: "@wazcom.zeus",
            icon: <BiLink />,
            feedback: {
                status: "error",
                text: "aoaoaoa",
            },
        },
    },
    {
        name: "CurrencyInput",
        component: CurrencyInputField,
        props: {
            name: "basit",
            currency: "£",
            placeholder: "enter amont",
        },
    },
    {
        name: "PhoneNumberInput",
        component: PhoneNumberInput,
        props: {
            country: "ng",
        },
    },
];

export const navs: TemplatePropType[] = [
    {
        name: "Nour",
        component: Nour,
        props: {
            links: [
                { text: "home", url: "/" },
                { text: "blog", url: "/" },
                { text: "restaurant", url: "/" },
            ],
            socials: [
                { icon: <AcUnitIcon />, url: "/" },
                { icon: <AcUnitIcon />, url: "/" },
            ],
        },
    },
    {
        name: "Taurant",
        component: Taurant,
        props: {
            links: [
                { text: "home", url: "/" },
                { text: "blog", url: "/" },
                { text: "restaurant", url: "/" },
            ],
            socials: [
                { icon: <AcUnitIcon />, url: "/" },
                { icon: <AcUnitIcon />, url: "/" },
            ],
        },
    },
    {
        name: "Valour",
        component: Valour,
        props: {
            links: [
                { text: "home", url: "/" },
                { text: "blog", url: "/" },
                { text: "restaurant", url: "/" },
            ],
            socials: [
                { icon: <AcUnitIcon />, url: "/" },
                { icon: <AcUnitIcon />, url: "/" },
            ],
        },
    },
];
