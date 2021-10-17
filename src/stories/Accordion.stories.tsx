import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Accordion } from "../core";

export default {
  title: "Waz/Accordion",
  component: Accordion,
  args: {
    title: "Testing",
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>Accordion</Accordion>
);

export const Primary = Template.bind({});
Template.args = {};

export const Secondary = Template.bind({});
Template.args = {};
