import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckBox } from "../components";

export default {
  title: "Waz/CheckBox",
  component: CheckBox,
  argTypes: {},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
