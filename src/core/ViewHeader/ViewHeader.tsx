import { FC, useState } from "react";
import { TabState, ViewHeaderPropsType } from "./type";
import { useViewHeaderStyles } from "./useViewHeaderStyles";
import clx from "classnames";

export const ViewHeader: FC<ViewHeaderPropsType> = ({
  statesChildren,
  configChildren,
  hasState = true,
}) => {
  const [activeTab, setActiveTab] = useState<TabState>(TabState.Config);
  const classes = useViewHeaderStyles();

  const renderChildren = () => {
    switch (activeTab) {
      case TabState.Config:
        return configChildren;
      case TabState.States:
        return statesChildren;
      default:
        return null;
    }
  };

  const renderTabs = () =>
    [TabState.Config, TabState.States].map((value, index) =>
      index == 1 && !hasState ? null : (
        <button
          key={index}
          onClick={() => setActiveTab(value)}
          className={clx(classes.tab, activeTab === value && "active")}
        >
          {value}
        </button>
      ),
    );

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>{renderTabs()}</div>
      <div className={classes.separator} />
      {renderChildren()}
    </div>
  );
};
