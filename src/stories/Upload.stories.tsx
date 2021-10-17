import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Upload } from "core/Upload";

export default {
  title: "Waz/Upload",
  component: Upload,
  argTypes: {},
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Primary = Template.bind({});
Template.args = {};
