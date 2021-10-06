import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table } from "../components/Table";

export default {
  title: "Waz/Table",
  component: Table,
  args: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
