import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Toggle } from "../components";

export default {
  title: "Waz/Toggle",
  component: Toggle,
  args: {
    status: "test ",
    title: "new",
    message: "my news",
    statusAlert: "alert",
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Template.args = {};
