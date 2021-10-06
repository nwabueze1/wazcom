import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeaderTitle } from "../components";

export default {
  title: "Waz/HeaderTitle",
  component: HeaderTitle,
  args: {
    array: ["Option 1", "Option 2", "Option 3"],
  },
} as ComponentMeta<typeof HeaderTitle>;

const Template: ComponentStory<typeof HeaderTitle> = (args) => (
  <HeaderTitle {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
