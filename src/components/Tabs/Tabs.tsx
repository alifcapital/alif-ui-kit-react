'use client';

import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import { ITabsProps, TTabId } from './TabsTypes';
import { TABS_SIZE } from './TabsConstants';
import './TabsStyles.scss';

export const Tabs = <T,>(props: ITabsProps<T>) => {
  const {
    className,
    size = TABS_SIZE.Large,
    tabs,
    gap,
    activeTab,
    activeColor,
    tabMarginBottom = 16,
  } = props;

  const [selectedId, setSelectedId] = useState<TTabId<T>>(tabs[0]?.id);
  const [left, setLeft] = useState(6);
  const [width, setWidth] = useState(0);
  const [transition, setTransition] = useState('none');
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedTab = useMemo(() => tabs.find((tab) => tab.id === selectedId), [selectedId, tabs]);
  const tabRefs = useRef(new Array(tabs.length));

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: TTabId<T>,
    clickHandler?: (id: TTabId<T>) => void,
  ) => {
    if (id !== selectedId) {
      setTransition('left 200ms linear, width 200ms linear');
      setLeft(e.currentTarget.offsetLeft);
      setWidth(e.currentTarget.offsetWidth);
      setSelectedId(id);
      clickHandler && clickHandler(id);
    }
  };

  useLayoutEffect(() => {
    if (activeTab) {
      const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

      setActiveIndex(activeIndex);
      setSelectedId(activeTab);
    }
  }, [activeTab, tabs]);

  useLayoutEffect(() => {
    const width = tabRefs.current[activeIndex]?.offsetWidth;
    const left = tabRefs.current[activeIndex]?.offsetLeft;

    setWidth(width);
    setLeft(left);
  }, [activeIndex]);

  return (
    <div className="Tabs">
      <div
        style={{ gap: gap }}
        className={clsx({
          ['Tabs-base']: true,
          [className || '']: !!className,
        })}
      >
        {tabs?.map((tab, index) => (
          <button
            ref={(el) => (tabRefs.current[index] = el)}
            key={tab.id}
            aria-label={tab.label}
            disabled={tab.disabled}
            className={clsx({
              ['Tab-root']: true,
              ['Tab-root-active']: selectedId === tab.id,
              ['Tab-root-small']: size === TABS_SIZE.Small,
            })}
            onClick={(e) => handleTabClick(e, tab.id, tab.onClick)}
          >
            <div
              style={{ marginBottom: tabMarginBottom }}
              className={clsx({
                ['Tab-label']: true,
              })}
            >
              {tab.label}
            </div>
          </button>
        ))}
        <div
          style={{
            left,
            width,
            transition,
            backgroundColor: activeColor,
          }}
          className="Tab-active-line"
        />
      </div>
      {selectedTab && selectedTab.content && (
        <div className="Tab-content">{selectedTab.content}</div>
      )}
    </div>
  );
};
