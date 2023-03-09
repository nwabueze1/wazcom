import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { Tab } from "../../core";

import { useTabsStyles } from "./styles";
import { TabsProps } from "./types";

export const TabsView: FC<TabsProps> = () => {
  const classes = useTabsStyles();

  const verticalTabControls = [
    { name: 'search-vertical', title: 'CONTROL TILE', component: <div>COMPONENT</div>, },
    {
      name: 'messages-vertical', title: 'CONTROL TILE 2', component: <div>COMPONENT 2</div>,
    }
  ];
  const verticalPillControls = [
    { name: 'search-pill', title: 'CONTROL TILE', component: <div>COMPONENT</div>, icon: <BsSearch size={16} /> },
    {
      name: 'messages-pill', title: 'CONTROL TILE 2', component: <div>COMPONENT 2</div>, icon: <FiMessageCircle size={16} />
    }
  ];

  return (
    <div className={classes.container}>
      <Tab
        controls={verticalTabControls}
        variant="vertical"
        borderRadius={14}
        height={20}
      />
      <Tab
        controls={verticalPillControls}
        variant="vertical-pill"
        borderRadius={14}
        height={20}
      />
    </div>
  );
};
