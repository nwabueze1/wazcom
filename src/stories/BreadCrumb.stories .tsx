import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BreadCrumb } from "../components";

export default {
  title: "Waz/BreadCrumb",
  component: BreadCrumb,
  argTypes: {},
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
