import React, { useLayoutEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

import { ITabsProps } from './TabsTypes';
import { TABS_SIZE } from './TabsConstants';
import './TabsStyles.scss';

export const Tabs = (props: ITabsProps) => {
  const { className, size = TABS_SIZE.Large, tabs, gap, activeTab, tabMarginBottom = 16 } = props;

  const [selectedId, setSelectedId] = useState(tabs[0]?.id);
  const selectedTab = useMemo(() => tabs.find((tab) => tab.id === selectedId), [selectedId, tabs]);

  const handleTabClick = (id: string, clickHandler?: () => void) => {
    setSelectedId(id);
    clickHandler && clickHandler();
  };

  useLayoutEffect(() => {
    if (activeTab) {
      setSelectedId(activeTab);
    }
  }, [activeTab]);

  return (
    <>
      <div
        style={{ gap: gap }}
        className={clsx({
          ['Tabs']: true,
          [className || '']: !!className,
        })}
      >
        {tabs?.map((tab) => (
          <button
            key={tab.id}
            aria-label={tab.label}
            disabled={tab.disabled}
            className={clsx({
              ['Tab-root']: true,
              ['Tab-root-active']: selectedId === tab.id,
              ['Tab-root-small']: size === TABS_SIZE.Small,
            })}
            onClick={() => handleTabClick(tab.id, tab.onClick)}
          >
            <div
              style={{ marginBottom: tabMarginBottom }}
              className={clsx({
                ['Tab-label']: true,
              })}
            >
              {tab.label}
            </div>
            <div className="Tab-active-line"></div>
          </button>
        ))}
      </div>
      {selectedTab && selectedTab.content && (
        <div className="Tab-content">{selectedTab.content}</div>
      )}
    </>
  );
};
