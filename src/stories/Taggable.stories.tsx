import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Taggable } from "../components/Taggable";

export default {
  title: "Waz/Taggable",
  component: Taggable,
  args: {},
} as ComponentMeta<typeof Taggable>;

const Template: ComponentStory<typeof Taggable> = (args) => (
  <Taggable {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
