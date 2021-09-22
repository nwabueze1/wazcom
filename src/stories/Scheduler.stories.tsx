import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Scheduler } from "../components";

export default {
  title: "Waz/Scheduler",
  component: Scheduler,
  args: {},
} as ComponentMeta<typeof Scheduler>;

const Template: ComponentStory<typeof Scheduler> = (args) => (
  <Scheduler {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
