import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TextArea } from "../components/TextArea";

export default {
  title: "Waz/TextArea",
  component: TextArea,
  args: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
