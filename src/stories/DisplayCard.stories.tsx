import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DisplayCard } from "../core";

export default {
  title: "Waz/DisplayCard",
  component: DisplayCard,
  argTypes: {},
} as ComponentMeta<typeof DisplayCard>;

const Template: ComponentStory<typeof DisplayCard> = (args) => (
  <DisplayCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
