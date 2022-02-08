import { TextInput } from "io";
import { FC } from "react";
import clx from "classnames"
import { SubscribeProps } from "./types";
import { Button } from "core/Button";
import { useSubscribeStyles } from "./styles";

export const Subscribe: FC<SubscribeProps> = ({className}) => {
  const classes = useSubscribeStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <p className={classes.title}>Subscribe to Newsletter</p>
        <p className={classes.info}>
          You can subscribe for our newsletter to get emails whenever we post
          new articles. Input your details below.
        </p>
        <div className={classes.parent}>
          <div className={classes.input}>
            <TextInput />
          </div>
          <Button className={classes.btn}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
