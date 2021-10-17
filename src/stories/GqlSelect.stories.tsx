import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "../core";

export default {
  title: "Gql/Select",
  component: Select,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Template.args = {};
