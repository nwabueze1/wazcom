import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Accordion } from "../components";

export default {
  title: "Waz/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>Accordion</Accordion>
);

export const Primary = Template.bind({});
Template.args = {};

export const Secondary = Template.bind({});
Template.args = {};
