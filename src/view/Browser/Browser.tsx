import { startCase } from "lodash";
import * as React from "react";
import { FC, useState } from "react";
import { stories } from "../../stories";
import { useBrowserStyles } from "./styles";
import { BrowserProps } from "./types";

export const Browser: FC<BrowserProps> = () => {
  const classes = useBrowserStyles();
  const [search] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {stories
          .sort(({ name: aName }, { name: bName }) =>
            aName.toLowerCase() < bName.toLowerCase()
              ? -1
              : aName.toLowerCase() > bName.toLowerCase()
              ? 1
              : 0,
          )
          .filter(({ name }) => name.toLowerCase().includes(search))
          .map(({ name, component: Comp, props }, index) => (
            <div key={index} className={classes.componentWrapper} id={name.toLowerCase()}>
              <h3>{startCase(name)}</h3>
              <div className={classes.well}>{React.cloneElement(<Comp />, props)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
