import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { DisplayCard } from "../components";

export default {
  title: "Waz/CheckBox",
  component: DisplayCard,
  argTypes: {},
} as ComponentMeta<typeof DisplayCard>;

const Template: ComponentStory<typeof DisplayCard> = (args) => (
  <DisplayCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
