import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { S3ImageUploader } from "../components/S3ImageUploader";

export default {
  title: "Waz/S3ImageUploader",
  component: S3ImageUploader,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof S3ImageUploader>;

const Template: ComponentStory<typeof S3ImageUploader> = (args) => (
  <S3ImageUploader {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
