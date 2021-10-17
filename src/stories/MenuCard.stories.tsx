import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuCard } from "../core";

export default {
  title: "Waz/MenuCard",
  component: MenuCard,
  argTypes: {},
} as ComponentMeta<typeof MenuCard>;

const Template: ComponentStory<typeof MenuCard> = (args) => (
  <MenuCard {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
