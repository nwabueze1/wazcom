import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Selector } from "../core/Selector";

export default {
  title: "Waz/Selector",
  component: Selector,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof Selector>;

const Template: ComponentStory<typeof Selector> = (args) => (
  <Selector {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
