import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "../components";

export default {
  title: "Waz/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Text</Text>
);

export const Primary = Template.bind({});
Template.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Template.args = {
  color: "secondary",
};
