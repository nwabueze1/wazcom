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
);

type AccordionStory = {
  name: string;
  props: AccordionProps;
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
];
