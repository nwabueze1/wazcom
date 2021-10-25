import {
  Accordion,
  AccordionProps,
  Button,
  ButtonProps,
  BreadCrumb,
  BreadCrumbProps,
  Card,
  CardProps,
  CheckBox,
  CheckBoxProps,
  Email,
  EmailProps,
  Loader,
  LoaderProps,
  ComboBox,
  ComboBoxProps,
  Text,
  TextProps,
  Gallery,
  GalleryProps,
  ImageSelector,
  ImageSelectorProps,
  Toggle,
  ToggleProps,
  MenuTable,
  MenuTableProps,
  MenuCard,
  MenuCardProps,
  PasswordFields,
  PasswordFieldsProps,
  Scheduler,
  SchedulerProps,
  Page,
  pageProps,
  Selector,
  SelectorProps,
  DisplayCard,
  DisplayCardProps,
  Notification,
  NotificationProps,
  RadioButton,
  RadioButtonProps,
  ImageUpload,
  ImageUploadProps,
  HeaderTitle,
  HeaderTitleProps,
  Price,
  PriceProps,
} from "../core";

type ComponentPropType = {
  component: any;
} & (
  | AccordionStory
  | BreadCrumbStory
  | ButtonStory
  | CardStory
  | CheckBoxStory
  | EmailStory
  | LoaderStory
  | ComboBoxStory
  | TextStory
  | GalleryStory
  | ImageSelectorStory
  | ToggleStory
  | MenuTableStory
  | MenuCardStory
  | PasswordFieldsStory
  | SchedulerStory
  | PageStory
  | SelectorStory
  | DisplayCardStory
  | NotificationStory
  | RadioButtonStory
  | ImageUploadStory
  | HeaderTitleStory
  | PriceStory
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
  props: CheckBoxProps;
};

type EmailStory = {
  name: string;
  props: EmailProps;
};

type ComboBoxStory = {
  name: string;
  props: ComboBoxProps;
};

type TextStory = {
  name: string;
  props: TextProps;
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
  props: ToggleProps;
};

type MenuTableStory = {
  name: string;
  props: MenuTableProps;
};

type MenuCardStory = {
  name: string;
  props: MenuCardProps;
};

type PasswordFieldsStory = {
  name: string;
  props: PasswordFieldsProps;
};

type SchedulerStory = {
  name: string;
  props: SchedulerProps;
};

type PageStory = {
  name: string;
  props: pageProps;
};

type DisplayCardStory = {
  name: string;
  props: DisplayCardProps;
};

type SelectorStory = {
  name: string;
  props: SelectorProps;
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
  props: ImageUploadProps;
};

type HeaderTitleStory = {
  name: string;
  props: HeaderTitleProps;
};

type PriceStory = {
  name: string;
  props: PriceProps;
};

export const stories: ComponentPropType[] = [
  {
    name: "accordion",
    component: Accordion,
    props: {
      title: "Wazcom Accordion",
    },
  },
  {
    name: "breadcrumb",
    component: BreadCrumb,
    props: {
      paths: [
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
    },
  },
  {
    name: "checkbox",
    component: CheckBox,
    props: {},
  },
  {
    name: "email",
    component: Email,
    props: {},
  },
  {
    name: "loader",
    component: Loader,
    props: {},
  },
  {
    name: "combobox",
    component: ComboBox,
    props: {},
  },
  {
    name: "text",
    component: Text,
    props: {},
  },
  {
    name: "gallery",
    component: Gallery,
    props: {image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"},
  },
  {
    name: "imageselector",
    component: ImageSelector,
    props: {},
  },
  {
    name: "toggle",
    component: Toggle,
    props: {},
  },
  {
    name: "menutable",
    component: MenuTable,
    props: {
      rows:[{id: 1, Menu: "Breakfast", day: "yesterday", Schedule:"9am-6pm"}]
    },
  },
  {
    name: "menucard",
    component: MenuCard,
    props: {
      amount: 500,
      meal: "jollof Rice",
      details: "spicy Fried Rice",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    }
  },
  {
    name: "password",
    component: PasswordFields,
    props: {},
  },
  {
    name: "scheduler",
    component: Scheduler,
    props: {},
  },
  {
    name: "page",
    component: Page,
    props: {},
  },
  {
    name: "selector",
    component: Selector,
    props: {
     items:["Messi", "Benzema", "Mo'Salah"]
    },
  },
  {
    name: "displayCard",
    component: DisplayCard,
    props: {total:30, title:"Pending Orders"},
  },

  {
    name: "notification",
    component: Notification,
    props: {status:"Success"},
  },

  {
    name: "radiobutton",
    component: RadioButton,
    props: {},
  },

  {
    name: "imageupload",
    component: ImageUpload,
    props: {},
  },

  {
    name: "headertitle",
    component: HeaderTitle,
    props: {},
  },

  {
    name: "price",
    component: Price,
    props: {},
  },
];
