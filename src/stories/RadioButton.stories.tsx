import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioButton } from "../components/RadioButton";

export default {
  title: "Waz/RadioButton",
  component: RadioButton,
  argTypes: {},
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
