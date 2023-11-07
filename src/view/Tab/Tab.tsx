import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { Tab } from "../../core";

import { useTabsStyles } from "./styles";
import { TabsProps } from "./types";

export const TabsView: FC<TabsProps> = () => {
  const classes = useTabsStyles();

  const verticalTabControls = [
    { name: "all-vertical", title: "All", component: <div>COMPONENT 1</div> },
    {
      name: "header-vertical",
      title: "Header",
      component: <div>COMPONENT 2</div>,
    },
    {
      name: "body-vertical",
      title: "Body",
      component: <div>COMPONENT 3</div>,
    },
    {
      name: "footer-vertical",
      title: "Footers",
      component: <div>COMPONENT 4</div>,
    },
  ];
  const verticalPillControls = [
    {
      name: "search-pill",
      title: "CONTROL TILE",
      component: <div>COMPONENT</div>,
      icon: <BsSearch size={16} />,
    },
    {
      name: "messages-pill",
      title: "CONTROL TILE 2",
      component: <div>COMPONENT 2</div>,
      icon: <FiMessageCircle size={16} />,
    },
  ];

  return (
    <div className={classes.container}>
      <Tab controls={verticalTabControls} variant="vertical" width="500px" />
      <Tab controls={verticalPillControls} variant="vertical-pill" />
    </div>
  );
};
