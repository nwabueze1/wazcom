import {
  Accordion,
  Button,
  BreadCrumb,
  Card,
  Loader,
  Gallery,
  ImageSelector,
  InputGroup,
  Table,
  MenuCard,
  DisplayCard,
  Notification,
  RadioButton,
  Carousel,
  EmptyState,
  Scheduler,
} from "../core";

import {
  CheckBoxInput,
  ComboBoxInput,
  RichTextInput,
  SelectInput,
  TagInput,
  TextInput,
  ToggleInput,
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

import { ComponentPropType } from "./types";

import { data } from "./data";

export const stories: ComponentPropType[] = [
  {
    name: "TextArea",
    component: TextArea,
    props: {},
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
        total: 100,
      },
      controls: {
        filter: ["id", "name"],
        canPrint: true,
        export: {},
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
      },
      src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/wbAJD5oi83HUWjLuZhqTiXwlW6LO9Xdxfxr2K4TI.jpg",
      feedback: {
        text: "Image is required",
        status: "error",
      },
      error: true,
      size: "full",
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
      title: "Wazcom Accordion",
      children: "This is an example Wazcom Accordion",
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
      handleClick: (path: string) => {},
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
      error: true,
      feedback: { text: "Tariq is a weirdo", status: "error" },
    },
  },
  {
    name: "text",
    component: TextInput,
    props: {
      feedback: {
        text: "Rebuilt successfully",
        status: "success",
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
      helperText: "aoaala",
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
      data: [
        {
          id: 1,
          name: "James Jackson",
          email: "jjackson@yahoo.com",
        },
        {
          id: 2,
          name: "Jill James",
          email: "jjames@yahoo.com",
        },
        {
          id: 3,
          name: "Aliyu Alli",
          email: "aalli@yahoo.com",
        },
      ],
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
      statusAlert: "Jill Biden",
    },
  },
  {
    name: "radiobutton",
    component: RadioButton,
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
      feedback: { text: "Tariq is a weirdo", status: "error" },
    },
  },
  {
    name: "Tags",
    component: TagInput,
    props: {
      tags: ["Work", "Vibes"],
    },
  },
  {
    name: "Rich Text",
    component: RichTextInput,
    props: {
      apiKey: "",
      error: true,
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
      label: "Menu Schedule",
      value: [
        {
          day: "01",
          start_time: "12:00",
          end_time: "18:00",
        },
      ],
    },
  },
  {
    name: "InputGroup",
    component: InputGroup,
    props: {
      variant: "",
      label: "@wazcom.zeus",
    },
  },
];
