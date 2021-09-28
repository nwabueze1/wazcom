import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BreadCrumb } from "../components";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Waz/BreadCrumb",
  component: BreadCrumb,
  decorators: [
    (BreadCrumb) => (
      <MemoryRouter>
        <BreadCrumb />
      </MemoryRouter>
    ),
  ],
  args: {
    paths: [
      { label: "Home", path: "/" },
      { label: "Details", path: "./pricing1" },
      { label: "Pricing", path: "./pricing2" },
      { label: "Checkout", path: "./" },
    ],
  },
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
