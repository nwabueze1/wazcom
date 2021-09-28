import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Notification } from "../components";

export default {
  title: "Waz/Notification",
  component: Notification,
  args: {
    status: "test ",
    title: "new",
    message: "my news",
    statusAlert: "alert",
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Primary = Template.bind({});
Template.args = {};
