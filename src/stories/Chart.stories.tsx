import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Chart } from "../components";

export default {
  title: "Waz/Chart",
  component: Chart,
  args: {
    color: "primary",
  },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Template.args = {};

export const Secondary = Template.bind({});
Template.args = {};
