import React from "react";
import {
  Accordion,
  AccordionProps,
  Button,
  ButtonProps,
  BreadCrumb,
  BreadCrumbProps,
  Card,
  CardProps,
  Loader,
  LoaderProps,
  Gallery,
  GalleryProps,
  ImageSelector,
  ImageSelectorProps,
  Table,
  TableProps,
  MenuCard,
  MenuCardProps,
  DisplayCard,
  DisplayCardProps,
  Notification,
  NotificationProps,
  RadioButton,
  RadioButtonProps,
  Carousel,
} from "../core";

import {
  CheckBoxInput,
  CheckBoxInputProps,
  ComboBoxInput,
  ComboBoxInputProps,
  ImageUploadInput,
  ImageUploadInputProps,
  RichTextInput,
  RichTextInputProps,
  SelectInput,
  SelectInputProps,
  TagInput,
  TagInputProps,
  TextInput,
  TextInputProps,
  ToggleInput,
  ToggleInputProps,
} from "../io";

import {
  GqlComboBox,
  GqlComboBoxProps
} from "../gql";

import { GETBLOGCATEGORIES, createApolloClient, createNewCategory } from '../helpers/graphQL';

type ComponentPropType = {
  component: any;
} & (
  | AccordionStory
  | BreadCrumbStory
  | ButtonStory
  | CardStory
  | CheckBoxStory
  | LoaderStory
  | ComboBoxStory
  | TextStory
  | GalleryStory
  | ImageSelectorStory
  | ToggleStory
  | TableStory
  | MenuCardStory
  | DisplayCardStory
  | NotificationStory
  | RadioButtonStory
  | ImageUploadStory
  | SelectStory
  | TagStory
  | RichTextStory
  | GqlComboBoxStory
);

type AccordionStory = {
  name: string;
  props: AccordionProps;
};

type LoaderStory = {
  name: string;
  props: LoaderProps;
};

type BreadCrumbStory = {
  name: string;
  props: BreadCrumbProps;
};

type ButtonStory = {
  name: string;
  props: ButtonProps;
};

type CardStory = {
  name: string;
  props: CardProps;
};

type CheckBoxStory = {
  name: string;
  props: CheckBoxInputProps;
};

type ComboBoxStory = {
  name: string;
  props: ComboBoxInputProps;
};

type TextStory = {
  name: string;
  props: TextInputProps;
};

type GalleryStory = {
  name: string;
  props: GalleryProps;
};

type ImageSelectorStory = {
  name: string;
  props: ImageSelectorProps;
};

type ToggleStory = {
  name: string;
  props: ToggleInputProps;
};

type TableStory = {
  name: string;
  props: TableProps;
};

type MenuCardStory = {
  name: string;
  props: MenuCardProps;
};

type DisplayCardStory = {
  name: string;
  props: DisplayCardProps;
};

type NotificationStory = {
  name: string;
  props: NotificationProps;
};

type RadioButtonStory = {
  name: string;
  props: RadioButtonProps;
};

type ImageUploadStory = {
  name: string;
  props: ImageUploadInputProps;
};

type SelectStory = {
  name: string;
  props: SelectInputProps;
};

type TagStory = {
  name: string;
  props: TagInputProps;
};

type RichTextStory = {
  name: string;
  props: RichTextInputProps;
};

type GqlComboBoxStory = {
  name: string;
  props: GqlComboBoxProps;
};

export const stories: ComponentPropType[] = [
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
      placeholder: "Select Wazobia Member",
      helperText: "No wazobia member selected",
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
      variant: "circle",
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
      label:"lslss",
      options: [
        { label: "Basit", value: "basit" },
        { label: "Chinazom", value: "chinazom" },
      ],
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
      value: { label: 'entertainment', value: 5 },
      addOption: createNewCategory
    },
  },
];
