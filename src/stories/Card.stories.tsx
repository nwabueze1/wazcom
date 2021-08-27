import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../components";

export default {
  title: "Waz/Card",
  component: Card,
  args: {
    title: "Testing",
    content: "Test",
    image: {
      src: "https://images.unsplash.com/photo-1629971208136-7d838b2821e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
      alt: "laskdansdk",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Template.args = {};
