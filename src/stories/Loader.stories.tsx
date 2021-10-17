import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from "../core";

export default {
  title: "Waz/Loader",
  component: Loader,
  args: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Template.args = {};
