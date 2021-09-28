import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Price } from "../components";

export default {
  title: "Waz/Price",
  component: Price,
  args: {},
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => (
  <Price {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
