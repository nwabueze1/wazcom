import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toggle } from "../components";

export default {
  title: "Waz/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => <Toggle />;

export const Primary = Template.bind({});
Template.args = {};

export const Secondary = Template.bind({});
Template.args = {};
