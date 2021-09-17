import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ComboBox } from "../components";

export default {
  title: "Waz/ComboBox",
  component: ComboBox,
  argTypes: {},
} as ComponentMeta<typeof ComboBox>;

const Template: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args}/>
);

export const Primary = Template.bind({});
Template.args = {};
