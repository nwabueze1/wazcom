import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { MenuTable } from "../components";

export default {
  title: "Waz/MenuTable",
  component: MenuTable,
  argTypes: {},
} as ComponentMeta<typeof MenuTable>;

const Template: ComponentStory<typeof MenuTable> = (argTypes) => <MenuTable />;

export const Primary = Template.bind({});
Template.args = {};
