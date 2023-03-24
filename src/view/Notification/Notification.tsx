import { FC, useState } from "react";
import { Notification, Tag, Tootip } from "../../core";

import { useNotificationStyles } from "./styles";
import { NotificationProps } from "./types";

export const NotificationView: FC<NotificationProps> = () => {
  const classes = useNotificationStyles();
  const [list, setList] = useState<any[]>([]);

  const showToast = () => {
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 101 + 1),
        title: "Success",
        description: "This is a success toast component",
        message: "This is a success toast component",
        status: "success",
      },
    ]);
  };

  const handleRemove = () => null;

  return (
    <div className={classes.root}>
      <button onClick={() => showToast()} className={classes.button}>
        Click to see notification
      </button>

      <div className={classes.tooltipContainer}>
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
          position="top"
        >
          <button>Tooltip top</button>
        </Tootip>

        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choicetip You can either grant permission to a user by role or permissions. Switch the button below to make a choicetip"
          position="bottom"
        >
          <button>Tooltip bottom</button>
        </Tootip>

        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choicetip You can either grant permission to a user by role or permissions. Switch the button below to make a choicetip"
          position="right"
        >
          <button>Tooltip right</button>
        </Tootip>
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choicetip"
          position="left"
        >
          <button>Tooltip left</button>
        </Tootip>
      </div>

      <div className={classes.tooltipContainer}>
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
          position="top"
        />
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
          position="bottom"
        />
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
          position="left"
        />
        <Tootip
          content="You can either grant permission to a user by role or permissions. Switch the button below to make a choice"
          position="right"
        />
      </div>

      <div className={classes.tooltipContainer}>
        <Tag name="Website" />
        <Tag name="Website" handleRemove={handleRemove} />
      </div>

      <Notification
        status={"success"}
        list={list}
        position={"top-right"}
        autoDelete={true}
        duration={10000}
      />
    </div>
  );
};
