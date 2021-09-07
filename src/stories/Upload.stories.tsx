import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Upload } from "../components";

export default {
  title: "Waz/Upload",
  component: Upload,
  argTypes: {},
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Primary = Template.bind({});
Template.args = {};
