import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MediaLibrary } from "../core";

export default {
  title: "Waz/MediaLibrary",
  component: MediaLibrary,
  argTypes: {},
} as ComponentMeta<typeof MediaLibrary>;

const Template: ComponentStory<typeof MediaLibrary> = (args) => (
  <MediaLibrary {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
