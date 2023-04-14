import { FC } from "react";
import { Tooltip, Wrapper } from "../../core";

import { useNotificationStyles } from "./styles";
import { NotificationProps } from "./types";

export const NotificationView: FC<NotificationProps> = () => {
  const classes = useNotificationStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Notifications"
        description="Feedback help users understand what the application is currently doing, and to refer to the user’s next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results."
        showBody={false}
      />
      <br />
      <br />
      {/* Tooltip */}
      <Wrapper
        title="Information-Tips"
        description="Used to accurately describe the pointed object, such as icons, graphics, links, etc. When the mouse is moved in, the prompt is displayed, when the mouse is moved out, the prompt is disappeared. And the complex text and operations are not carried."
        classNames={{ title: classes.titleWrapper }}
      >
        <div className={classes.tooltipContainer}>
          <div>
            <h5 className={classes.tooltipTitle}>Right side tip</h5>
            <Tooltip
              content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
              position="right"
            />
          </div>
          <div>
            <h5 className={classes.tooltipTitle}>Up tip</h5>
            <Tooltip
              content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
              position="top"
            />
          </div>
          <div>
            <h5 className={classes.tooltipTitle}>Down tip</h5>
            <Tooltip
              content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
              position="bottom"
            />
          </div>
          <div>
            <h5 className={classes.tooltipTitle}>Left side tip</h5>
            <Tooltip
              content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
              position="left"
            />
          </div>
        </div>
      </Wrapper>
      <br />
      <br />
    </div>
  );
};
