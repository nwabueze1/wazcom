import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ImageSelector } from "../components";

export default {
  title: "Waz/ImageSelector",
  component: ImageSelector,
  argTypes: {},
} as ComponentMeta<typeof ImageSelector>;

const Template: ComponentStory<typeof ImageSelector> = (args) => (
  <ImageSelector {...args}/>
);

export const Primary = Template.bind({});
Template.args = {};

