import { FC, useState } from "react";
import { Tab, ViewHeader, Wrapper } from "../../core";
import { horizontalTabControls, verticalTabControls, verticalPillControls } from "./data";
import clx from "classnames";
import { useTabsStyles } from "./styles";
import { TabsProps } from "./types";
import { Paper } from "../../core/Paper";
import { useTabData } from "./useTabData";
import { ComponentProps } from "../../core/ComponentProps";

enum TabTypes {
  horizontal = "Horizontal tab",
  vertical = "Vertical tab",
  verticalPill = "Vertical pill",
}

export const TabsView: FC<TabsProps> = () => {
  const [activeSelector, setActiveSelector] = useState<TabTypes>(TabTypes.horizontal);
  const classes = useTabsStyles();
  const { data } = useTabData();

  const renderSelectors = () =>
    [TabTypes.horizontal, TabTypes.vertical, TabTypes.verticalPill].map((item, index) => (
      <p
        className={clx(classes.selector, item == activeSelector && "active")}
        onClick={() => setActiveSelector(item)}
        key={index}
      >
        {item}
      </p>
    ));

  const getContentBySelector = () => {
    switch (activeSelector) {
      case TabTypes.horizontal:
        return <Tab controls={horizontalTabControls} variant="horizontal" width="500px" />;
      case TabTypes.vertical:
        return <Tab controls={verticalTabControls} variant="vertical" width="500px" />;
      case TabTypes.verticalPill:
        return <Tab controls={verticalPillControls} variant="vertical-pill" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Wrapper
        title={"Tab Input"}
        description={
          "Tabs are used to group different but related content, allowing users to navigate views without leaving the page. They always contain at least two items and one tab is active at a time. Tabs can be used on full page layouts or in components such as modals, cards, or side panels."
        }
      />
      <ViewHeader
        configChildren={
          <>
            <div className={classes.selectorContainer}>{renderSelectors()}</div>
            <Paper>{getContentBySelector()}</Paper>
            <ComponentProps body={data} />
          </>
        }
        statesChildren={null}
        hasState={false}
      />
    </div>
  );
};
