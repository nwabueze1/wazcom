import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuTable } from "../core";

export default {
  title: "Waz/MenuTable",
  component: MenuTable,
  args: {
    rows: [
      {
        id: 1,
        Menu: "breakfast",
        Schedule: "08:00am-10:00am",
        day: "Today",
      },
      {
        id: 2,
        Menu: "Dinner",
        Schedule: "09:00pm-11:00pm",
        day: "3 days ago",
      },
      {
        id: 3,
        Menu: "Lunch",
        Schedule: "03:00pm-5:00pm",
        day: "3 days ago",
      },
    ],
  },
} as ComponentMeta<typeof MenuTable>;

const Template: ComponentStory<typeof MenuTable> = (args) => (
  <MenuTable {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
