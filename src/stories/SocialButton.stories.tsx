import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SocialButton } from "../components/SocialButton";

export default {
  title: "Waz/Selector",
  component: SocialButton,
  args: {
  },
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => (
  <SocialButton {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
