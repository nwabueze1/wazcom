import { TextInput } from "io";
import React from "react";
import { Button } from "core/Button";
import { useSubscribeStyles } from "./styles";

export const Subscribe = () => {
  const classes = useSubscribeStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.title}>Subscribe to Newsletter</p>
        <p className={classes.info}>
          You can subscribe for our newsletter to get emails whenever we post
          new articles. Input your details below.
        </p>
        <div className={classes.input}>
          <TextInput />
        </div>
        <Button className={classes.btn}>Subscribe</Button>
      </div>
    </div>
  );
};
