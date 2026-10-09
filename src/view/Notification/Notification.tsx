import { FC } from "react";
import { Wrapper, Tooltip, Button, useAlertContext, Tag } from "../../core";

import { useNotificationStyles } from "./styles";

export const NotificationView = () => {
  const classes = useNotificationStyles();
  const toast = useAlertContext();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Notifications"
        description="Feedback help users understand what the application is currently doing, and to refer to the user’s next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results."
        showBody={false}
      />
      <br />
      <br />
      {/*Success Alert */}
      <Wrapper
        title="Success Alert"
        description="It is a non-blocking information display. It does not interrupt the user’s current operation. It usually stays at a certain position on the page (top preferentially). Used to indicate a successful information."
        classNames={{ title: classes.titleWrapper }}
      >
        <Button
          onClick={() => {
            toast.success({ title: "Successfully saved" });
          }}
        >
          Show Alert
        </Button>
      </Wrapper>
      <br />
      <br />
      {/* Warning Alert */}
      <Wrapper
        title="Warning Alert"
        description="It is a non-blocking information display. It does not interrupt the user’s current operation. It usually stays at a certain position on the page (top preferentially). Used to indicate a warning information."
        classNames={{ title: classes.titleWrapper }}
      >
        <Button
          onClick={() => {
            toast.warning({ title: "Warning alert" });
          }}
        >
          Show Alert
        </Button>
      </Wrapper>
      <br />
      <br />
      {/* Info Alert */}
      <Wrapper
        title="Info Alert"
        description="It is a non-blocking information display. It does not interrupt the user’s current operation. It usually stays at a certain position on the page (top preferentially). Used to indicate a warning information."
        classNames={{ title: classes.titleWrapper }}
      >
        <Button
          onClick={() => {
            toast.info({ title: "Information alert" });
          }}
        >
          Show Alert
        </Button>
      </Wrapper>
      <br />
      <br />
      {/* Error Alert */}
      <Wrapper
        title="Error Alert"
        description="It is a non-blocking information display. It does not interrupt the user’s current operation. It usually stays at a certain position on the page (top preferentially). Used to indicate a warning information."
        classNames={{ title: classes.titleWrapper }}
      >
        <Button
          onClick={() => {
            toast.error({ title: "Error alert" });
          }}
        >
          Show Alert
        </Button>
      </Wrapper>
      <br />
      <br />
      {/* General Alert */}
      <Wrapper
        title="General Notification (With Helper Text)"
        description="It is a non-blocking information display. It does not interrupt the user’s current operation. It usually stays at a certain position on the page (top preferentially). Used to indicate a successful information."
        classNames={{ title: classes.titleWrapper }}
      >
        <Button
          onClick={() => {
            toast.success({
              title: "Successfully saved",
              message:
                "This is a very important information and requires your immediate attention. Kindly act on it, ASAP.",
            });
          }}
        >
          Show Alert
        </Button>
      </Wrapper>
      <br />
      <br />
      {/* Tags */}
      <Wrapper
        title="Tags"
        description="Tag are used to label, categorize, or organize items using keywords that describe them."
        classNames={{ title: classes.titleWrapper }}
      >
        <div className={classes.tagsContainer}>
          <Tag name="Website" />
          <Tag name="Website" isDismissable={true} />
        </div>
      </Wrapper>
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
