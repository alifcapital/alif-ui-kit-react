import React, { useState } from 'react';
import clsx from 'clsx';

import { ITabsProps } from './TabsTypes';
import { TABS_SIZE } from './TabsConstants';
import './TabsStyles.scss';

export const Tabs = (props: ITabsProps) => {
  const { className, size = TABS_SIZE.large, tabs, gap } = props;

  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId);

  const handleTabClick =
    (id: string, clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedId(id);
      clickHandler && clickHandler(e);
    };

  return (
    <>
      <div
        style={{ gap: gap }}
        className={clsx({
          ['Tabs-root']: true,
          [className || '']: !!className,
        })}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            aria-label={tab.label}
            disabled={tab.disabled}
            className={clsx({
              ['Tab-root']: true,
              ['Tab-root-active']: selectedId === tab.id,
              ['Tab-root-small']: size === TABS_SIZE.Small,
            })}
            onClick={handleTabClick(tab.id, tab.onClick)}
          >
            <div
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
        <div className="Tab-content" key={selectedId}>
          {selectedTab.content}
        </div>
      )}
    </>
  );
};
