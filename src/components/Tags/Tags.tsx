import React, { useLayoutEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

import { ITagsProps } from './TagsTypes';
import { TAGS_SIZE } from './TagsConstants';
import './TagsStyles.scss';

export const Tags = (props: ITagsProps) => {
  const { className, size = TAGS_SIZE.Medium, tags, gap, activeTab, activeColor } = props;

  const [selectedId, setSelectedId] = useState(tags[0]?.id);
  const selectedTab = useMemo(() => tags.find((tag) => tag.id === selectedId), [selectedId, tags]);

  const handleTabClick = (id: string, clickHandler?: (id: string) => void) => {
    setSelectedId(id);
    clickHandler && clickHandler(id);
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
          ['Tags']: true,
          [className || '']: !!className,
        })}
      >
        {tags?.map((tag) => (
          <button
            key={tag.id}
            aria-label={tag.label}
            id={tag.id}
            disabled={tag.disabled}
            style={{ backgroundColor: selectedId === tag.id ? activeColor : '' }}
            className={clsx({
              ['Tag']: true,
              ['Tag-medium']: size === TAGS_SIZE.Medium,
              ['Tag-large']: size === TAGS_SIZE.large,
              ['Tag-active']: selectedId === tag.id,
              [className || '']: !!className,
            })}
            onClick={() => handleTabClick(tag.id, tag.onClick)}
          >
            <div className="Tag-label">
              {tag.startIcon && <span className="Tag-icon-left">{tag.startIcon}</span>}
              {tag.label}
              {tag.endIcon && <span className="Tag-icon-right">{tag.endIcon}</span>}
            </div>
          </button>
        ))}
      </div>
      {selectedTab && selectedTab.content && (
        <div className="Tag-content">{selectedTab.content}</div>
      )}
    </>
  );
};
