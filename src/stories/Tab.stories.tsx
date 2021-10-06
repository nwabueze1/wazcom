import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tab } from "components/Tab";

export default {
  title: "Waz/Tab",
  component: Tab,
  args: {
    label: "tab 3",
    arr: ["tab2", "tab 3", "tab 4"],
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Template.args = {};
