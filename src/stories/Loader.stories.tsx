import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Loader } from "../components";

export default {
  title: "Waz/Loader",
  component: Loader,
  args: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
