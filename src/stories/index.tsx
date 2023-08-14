import {
  Accordion,
  Button,
  BreadCrumb,
  Card,
  Loader,
  Gallery,
  ImageSelector,
  Table,
  TableNew,
  MenuCard,
  DisplayCard,
  Notification,
  Carousel,
  EmptyState,
  DateTimePicker,
  Scheduler,
  Tab,
} from "../core";
import { BiLink } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import {
  CheckBoxInput,
  CurrencyInputField,
  ComboBoxInput,
  SelectInput,
  TextInput,
  InputGroup,
  ToggleInput,
  PhoneNumberInput,
  RadioButtonInput,
  TextArea,
  EmailInput,
  WysiwygInput,
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
  GET_BLOG_POSTS,
} from "../helpers/graphQL";
import { Valour, Taurant, Nour } from "templates/Navs";

import { ComponentPropType, TemplatePropType } from "./types";
import { DynamicInput, EditableTextInput, SectionEditor } from "../io";
import { getTableRows } from "./table";

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
      label: <p style={{ color: "red" }}>Description</p>,
      name: "description",
      onChange: ({ name, value }: { name: string; value: string }) => {
        {
          name;
        }
        {
          value;
        }
      },
      // multiline: true,
      // minRows: 5,
      // feedback: {
      //     text: (
      //         <div style={{ display: "flex", flexDirection: "column" }}>
      //             <p key={1} style={{ color: "blue" }}>
      //                 Olamileke is a boy
      //             </p>
      //             <p key={2} style={{ color: "blue" }}>
      //                 Olamileke is a boy
      //             </p>
      //         </div>
      //     ),
      //     status: "error",
      // },
      // error: true,
    },
  },
  {
    name: "Email",
    component: EmailInput,
    props: {
      label: "Email Address",
      name: "email",
      onChange: ({ name, value }: { name: string; value: string }) => {
        {
          name;
        }
        {
          value;
        }
      },
      // multiline: true,
      // minRows: 5,
      // feedback: {
      //     text: (
      //         <div style={{ display: "flex", flexDirection: "column" }}>
      //             <p key={1} style={{ color: "blue" }}>
      //                 Olamileke is a boy
      //             </p>
      //             <p key={2} style={{ color: "blue" }}>
      //                 Olamileke is a boy
      //             </p>
      //         </div>
      //     ),
      //     status: "error",
      // },
      // error: true,
    },
  },
  {
    name: "TableWithPagination",
    component: TableNew,
    props: {
      columns: [
        { name: "Title", key: "title", type: "string" },
        { name: "Author", key: "author.name", type: "string" },
        { name: "Likes", key: "likes", type: "number" },
        { name: "Category", key: "category.name", type: "string" },
        { name: "Last Modified", key: "updated_at", type: "date" },
      ],
      getRows: getTableRows,
      query: {
        name: GET_BLOG_POSTS,
        client: createApolloClient("https://ofambegbe-ploutonion.wazobia.uk/graphql"),
        variables: { blog_uuid: "a5ad9bed-679c-4190-a1a8-8b2d14bbb3c9" },
        dataKey: "postsByBlogUuid",
      },
      conditionFilters: [
        { name: "All Posts", condition: (posts: any) => posts },
        {
          name: "Published",
          condition: (posts: any) => posts.filter((post: any) => post.status),
        },
        {
          name: "Drafted",
          condition: (posts: any) => posts.filter((post: any) => !post.status),
        },
      ],
      EmptyState: <p>Hahaha, no content</p>,
      showFilters: true,
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
      isExpanded: true,
      title: <p style={{ fontSize: "25px", color: "blue" }}>leke</p>,
    },
  },
  {
    name: "tab",
    component: Tab,
    props: {
      controls: [
        {
          name: "general",
          title: "General",
          component: <div>General Tab</div>,
        },
        {
          name: "templates",
          title: "Templates",
          component: <div>Templates Tab</div>,
        },
        {
          name: "seo",
          title: "SEO",
          component: <div>SEO Tab</div>,
        },
      ],
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
      loading: true,
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
        {
          label: "Craft Factory MX",
          value: "Craft Factory MX",
        },
        {
          label: "Four Nine Roots",
          value: "Four Nine Roots",
        },
        {
          label: "Corner Shop Challenge",
          value: "Corner Shop Challenge",
        },
        {
          label: "Bewährt (Tried and Tested: German)",
          value: "Bewährt (Tried and Tested: German)",
        },
        {
          label: "Craft Factory",
          value: "Craft Factory",
        },
        {
          label: "VT Dynamic Edition",
          value: "VT Dynamic Edition",
        },
        {
          label: "Spread Joy, Not Germs",
          value: "Spread Joy, Not Germs",
        },
        {
          label: "Craft Factory Germany",
          value: "Craft Factory Germany",
        },
        {
          label: "Twisted",
          value: "Twisted",
        },
        {
          label: "Cake Factory",
          value: "Cake Factory",
        },
        {
          label: "Four Nine Pride",
          value: "Four Nine Pride",
        },
        {
          label: "Lovimals France",
          value: "Lovimals France",
        },
        {
          label: "Futurology France",
          value: "Futurology France",
        },
        {
          label: "Lovimals German",
          value: "Lovimals German",
        },
        {
          label: "Tried and Tested UK",
          value: "Tried and Tested UK",
        },
        {
          label: "Craft Factory France",
          value: "Craft Factory France",
        },
        {
          label: "Take 5 UK",
          value: "Take 5 UK",
        },
        {
          label: "Beproefd",
          value: "Beproefd",
        },
        {
          label: "Lovimals Japan",
          value: "Lovimals Japan",
        },
        {
          label: "Testé et approuvé (Tried and Tested: France)",
          value: "Testé et approuvé (Tried and Tested: France)",
        },
        {
          label: "Tried and Tested Norway",
          value: "Tried and Tested Norway",
        },
        {
          label: "VT: The X-MAS Factor",
          value: "VT: The X-MAS Factor",
        },
        {
          label: "Four Nine Voices",
          value: "Four Nine Voices",
        },
        {
          label: "Sound Bites",
          value: "Sound Bites",
        },
        {
          label: "Time For The Truth France",
          value: "Time For The Truth France",
        },
        {
          label: "Twisted Explore",
          value: "Twisted Explore",
        },
        {
          label: "Twisted Green",
          value: "Twisted Green",
        },
        {
          label: "World of Craft",
          value: "World of Craft",
        },
        {
          label: "After Dark",
          value: "After Dark",
        },
        {
          label: "Mach Eine Pause (Take 5: German)",
          value: "Mach Eine Pause (Take 5: German)",
        },
        {
          label: "The ASMR House",
          value: "The ASMR House",
        },
        {
          label: "Time For The Truth Germany",
          value: "Time For The Truth Germany",
        },
        {
          label: "Tried and Tested Japan",
          value: "Tried and Tested Japan",
        },
        {
          label: "Four Nine Salon",
          value: "Four Nine Salon",
        },
        {
          label: "Love Unfiltered",
          value: "Love Unfiltered",
        },
        {
          label: "Ta Fem",
          value: "Ta Fem",
        },
        {
          label: "Four Nine Voices India",
          value: "Four Nine Voices India",
        },
        {
          label: "Twisted Bakes",
          value: "Twisted Bakes",
        },
        {
          label: "Four Nine Looks",
          value: "Four Nine Looks",
        },
        {
          label: "Futurology Germany",
          value: "Futurology Germany",
        },
        {
          label: "My Radical Life",
          value: "My Radical Life",
        },
        {
          label: "Beauty My Way",
          value: "Beauty My Way",
        },
        {
          label: "Futurology",
          value: "Futurology",
        },
        {
          label: "Lovimals Brazil",
          value: "Lovimals Brazil",
        },
        {
          label: "Lovimals Italy",
          value: "Lovimals Italy",
        },
        {
          label: "Stronger",
          value: "Stronger",
        },
        {
          label: "Take 5 Japan",
          value: "Take 5 Japan",
        },
        {
          label: "VT Challenges",
          value: "VT Challenges",
        },
        {
          label: "Family Matters",
          value: "Family Matters",
        },
        {
          label: "Tome 5",
          value: "Tome 5",
        },
        {
          label: "FYI",
          value: "FYI",
        },
        {
          label: "Twisted MX",
          value: "Twisted MX",
        },
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
      // required: true,
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
        {
          name: "impression",
          label: <AiOutlineEye fontSize="20px" />,
        },
      ],
      value: [],
      emptyTableState: {
        image: {
          src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/Posts/emptypostimg.svg",
        },
        text: "You have not created any blog post yet. Click below to create post.",
        header: "Welcome to Post",
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
        { label: "Michael", value: "michael" },
        { label: "Rose", value: "rose" },
        { label: "Tami", value: "tami" },
        { label: "Dara", value: "dara" },
        { label: "Tiara", value: "tiara" },
      ],
      // error: true,
      // required: true,
      value: "basit",
      feedback: { text: "Tariq is a weirdo", status: "error" },
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
      name: "schedule",
      label: "Menu Schedule",
      MenuProps: {
        style: { top: 50, position: "absolute" },
        variant: "menu",
      },
      orientation: "vertical",
      multiple: true,
      value: [
        {
          day: "1",
          start_time: "12:00",
          end_time: "18:00",
        },
        {
          day: "2",
          start_time: "12:00",
          end_time: "18:00",
        },
      ],
      onChange: (data: { name: string; value: any }) => {
        console.log(data);
      },
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
  {
    name: "Wysiwyg Input",
    component: WysiwygInput,
    props: {},
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
    },
  },
];
