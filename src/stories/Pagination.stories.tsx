import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Page } from "../core";

export default {
  title: "Waz/Page",
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Template.args = {};
