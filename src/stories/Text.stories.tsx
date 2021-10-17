import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../core";

export default {
  title: "Waz/Text",
  component: Text,
  argTypes: {},
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
