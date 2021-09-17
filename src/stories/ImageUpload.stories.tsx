import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ImageUpload } from "../components/ImageUpload";

export default {
  title: "Waz/ImageUpload",
  component: ImageUpload,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => (
  <ImageUpload {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
