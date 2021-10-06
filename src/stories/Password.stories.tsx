import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PasswordFields } from "../components";

export default {
  title: "Waz/PasswordFields",
  component: PasswordFields,
  args: {},
} as ComponentMeta<typeof PasswordFields>;

const Template: ComponentStory<typeof PasswordFields> = (args) => (
  <PasswordFields {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
