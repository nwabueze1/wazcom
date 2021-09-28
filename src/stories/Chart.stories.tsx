import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chart } from "../components";

export default {
  title: "Waz/Chart",
  component: Chart,
  args: {},
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Template.args = {};
