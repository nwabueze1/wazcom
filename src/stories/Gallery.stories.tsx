import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Gallery } from "../components";

export default {
  title: "Waz/Gallery",
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args}>Text</Gallery>
);

export const Primary = Template.bind({});
Template.args = {};
