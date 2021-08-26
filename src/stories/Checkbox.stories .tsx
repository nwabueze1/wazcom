import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckBox } from "components/Checkbox";
import React from "react";

export default {
  title: "Waz/Checkbox",
  component: CheckBox,
  argTypes: {},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
