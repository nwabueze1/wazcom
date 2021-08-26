import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Meta } from "@storybook/react";

import { Text, TextProps } from "../components";

export default {
  title: "Waz/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Primary: React.VFC<any> = () => (
  <Text source="storybook">Button</Text>
);
