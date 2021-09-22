import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Email } from "../components";

export default {
  title: "Waz/Email",
  component: Email,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => (
  <Email {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
