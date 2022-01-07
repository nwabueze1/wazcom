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
  Scheduler,
  SchedulerProps,
  DisplayCard,
  DisplayCardProps,
  Notification,
  NotificationProps,
  RadioButton,
  RadioButtonProps,
  HeaderTitle,
  HeaderTitleProps,
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
  SelectInput,
  TagInput,
  TextInput,
  TextInputProps,
  ToggleInput,
  ToggleInputProps,
} from "../io";

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
  | SchedulerStory
  | DisplayCardStory
  | NotificationStory
  | RadioButtonStory
  | ImageUploadStory
  | HeaderTitleStory
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

type SchedulerStory = {
  name: string;
  props: SchedulerProps;
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

type HeaderTitleStory = {
  name: string;
  props: HeaderTitleProps;
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
    props: {},
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
          name: "menu",
          label: "menu",
        },
        {
          name: "laptop",
          label: "laptop",
        },
        {
          name: "laptop",
          label: "laptop",
        },
      ],
    },
  },
  {
    name: "menucard",
    component: MenuCard,
    props: {
      amount: 500,
      meal: "jollof Rice",
      details: "spicy Fried Rice",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
  },
  {
    name: "scheduler",
    component: Scheduler,
    props: {},
  },
  {
    name: "displayCard",
    component: DisplayCard,
    props: { total: 30, title: "Pending Orders" },
  },
  {
    name: "notification",
    component: Notification,
    props: { status: "Success" },
  },
  {
    name: "radiobutton",
    component: RadioButton,
    props: {},
  },
  {
    name: "imageupload",
    component: ImageUploadInput,
    props: {},
  },
  {
    name: "headertitle",
    component: HeaderTitle,
    props: {},
  },
  {
    name: "carousel",
    component: Carousel,
    props: {},
  },
];
