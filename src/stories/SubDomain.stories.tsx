import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SubDomain } from "../core";

export default {
  title: "Waz/SubDomain",
  component: SubDomain,
  args: {},
} as ComponentMeta<typeof SubDomain>;

const Template: ComponentStory<typeof SubDomain> = (args) => (
  <SubDomain {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
