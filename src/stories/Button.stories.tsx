import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../components";

export default {
  title: "Waz/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Template.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Template.args = {
  color: "secondary",
  variant: "outline",
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };

// export const Primary: React.VFC<typeof Button> = () => (
//   <Button color="primary">Button</Button>
// );

// export const Secondary: React.VFC<typeof Button> = () => (
//   <Button color="secondary" variant="normal">
//     Button
//   </Button>
// );
