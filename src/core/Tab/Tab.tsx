import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTabStyles } from './styles';
import { TabProps } from './types';
import clx from 'classnames';
import { useLocation, useHistory } from 'react-router-dom';

export const Tab: FC<TabProps> = ({ controls }) => {
    const classes = useTabStyles();
    const [activeTab, setActiveTab] = useState<string>();
    const { pathname, search } = useLocation();
    const history = useHistory();

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

        history.replace({ pathname, search: query.toString() });
    }, [activeTab, query]);

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                {
                    controls.map(({ name, title }, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabClick(name)}
                            className={clx(classes.tab, (name == activeTab) && classes.tabIsActive)}
                        >{title}</div>
                    ))
                }
            </div>
            <div className={classes.contentWrapper}>
                {
                    controls.map(({ name, component }, index) => (
                        <div className={clx(classes.content, (name == activeTab) && classes.contentIsActive)} key={index}>{component}</div>
                    ))
                }
            </div>
        </div>
    )
}