import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clx from 'classnames';
import { snakeCase } from "lodash";

import { useTabStyles } from './styles';
import { TabProps } from './types';


export const Tab: React.FC<TabProps> = ({
    controls,
    variant,
    backgroundColor,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    className,
    tabHeaderClassName,
    activeTabClassName,
    containerClassName,
}) => {
    const classes = useTabStyles({
        variant,
        backgroundColor,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
    });
    const [activeTab, setActiveTab] = useState<string>();
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const query = useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {
        const defaultControl = controls?.find((control) => control.name == query?.get('tab'));

        if (defaultControl) {
            setActiveTab(defaultControl.name);
        }
    }, [controls, query, setActiveTab]);

    const handleTabClick = useCallback((name: string) => {
        setActiveTab(name);
        query.set('tab', name ?? '');

        navigate({ pathname, search: query.toString() });
    }, [activeTab, query]);

    return (
        <div className={clx(classes.root, className)}>
            <div className={tabHeaderClassName}>
                <div className={clx(classes.tabs, containerClassName)}>
                    {
                        controls.map(({ name, title }, index) => (
                            <div
                                key={index}
                                onClick={() => handleTabClick(name)}
                                className={clx(
                                    classes.tab,
                                    (name == activeTab) && classes.tabIsActive,
                                    (name == activeTab) && activeTabClassName,
                                    snakeCase(title), snakeCase(name)
                                )}
                            >
                                {title}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={clx(classes.contentWrapper, snakeCase(`${activeTab} content`))}>
                {
                    controls.map(({ name, component }, index) => (
                        <div key={index} className={clx(classes.content, (name == activeTab) && classes.contentIsActive)}>
                            {component}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}