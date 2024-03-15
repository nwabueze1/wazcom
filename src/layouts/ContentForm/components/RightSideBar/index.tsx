import { FC, useState } from 'react';
import clx from 'classnames';
import _ from "lodash"
import { RightSideBarProps } from './types';
import { tabs } from './data';
import { useStyles } from './styles';

export const RightSideBar: FC<RightSideBarProps> = ({
  pageType,
  controls,
}) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('details');

  const displayControls = () => {
    return controls[activeTab as keyof typeof controls] || controls.details;
  };

  const displayTabs = () =>
    tabs.map((tab, index) => (
      <div
        key={index}
        className={clx(
          classes.tab,
          activeTab === _.camelCase(tab.name) && classes.activeTab
        )}
        onClick={() => setActiveTab(_.camelCase(tab.name))}
      >
        {tab.icon}
        <p
          className={clx(
            classes.tabName,
            activeTab === _.camelCase(tab.name) && classes.active
          )}
        >
          {tab.name !== 'Related Posts'
            ? tab.name
            : pageType !== 'posts'
            ? `Related ${pageType}`
            : tab.name}
        </p>
      </div>
    ));

  return (
    <section className={classes.tabs}>
      {/* <div className={classes.controls}>{displayControls()}</div> */}
      <div className={clx(classes.content__form_section, classes.tabContainer)}>
        {displayTabs()}
      </div>
    </section>
  );
};
