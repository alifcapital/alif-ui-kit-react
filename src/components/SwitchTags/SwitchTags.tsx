'use client';

import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';

import { ISwitchTagsProps, TSwitchTagId } from './SwitchTagsTypes';
import { SWITCH_TAGS_SIZE, SWITCH_TAGS_VARIANT } from './SwitchTagsConstants';
import './SwitchTagsStyles.scss';

export const SwitchTags = <T,>(props: ISwitchTagsProps<T>) => {
  const {
    className,
    size = SWITCH_TAGS_SIZE.Medium,
    variant = SWITCH_TAGS_VARIANT.Round,
    tags,
    gap,
    activeTag,
    activeColor,
    backgroundColor,
  } = props;

  const [selectedId, setSelectedId] = useState<TSwitchTagId<T>>(tags[0]?.id);
  const [left, setLeft] = useState(6);
  const [width, setWidth] = useState(0);
  const [transition, setTransition] = useState('none');
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedTag = useMemo(() => tags.find((tag) => tag.id === selectedId), [selectedId, tags]);
  const tagRefs = useRef(new Array(tags.length));

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: TSwitchTagId<T>,
    clickHandler?: (id: TSwitchTagId<T>) => void,
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
    if (activeTag) {
      const activeIndex = tags.findIndex((tag) => tag.id === activeTag);

      setActiveIndex(activeIndex);
      setSelectedId(activeTag);
    }
  }, [activeTag, tags]);

  useLayoutEffect(() => {
    const width = tagRefs.current[activeIndex]?.offsetWidth;
    const left = tagRefs.current[activeIndex]?.offsetLeft;

    setWidth(width);
    setLeft(left);
  }, [activeIndex]);

  return (
    <div className="SwitchTags">
      <div
        style={{ gap, backgroundColor }}
        className={clsx({
          ['SwitchTags-base']: true,
          ['SwitchTags-base-round']: variant === SWITCH_TAGS_VARIANT.Round,
          ['SwitchTags-base-square']: variant === SWITCH_TAGS_VARIANT.Square,
          [className || '']: !!className,
        })}
      >
        {tags?.map((tag, index) => (
          <button
            ref={(el) => (tagRefs.current[index] = el)}
            key={tag.id}
            aria-label={tag.label}
            id={tag.id}
            disabled={tag.disabled}
            className={clsx({
              ['SwitchTag']: true,
              ['SwitchTag-medium']: size === SWITCH_TAGS_SIZE.Medium,
              ['SwitchTag-large']: size === SWITCH_TAGS_SIZE.Large,
              ['SwitchTag-active']: selectedId === tag.id,
              [className || '']: !!className,
            })}
            onClick={(e) => handleTabClick(e, tag.id, tag.onClick)}
          >
            {tag.startIcon && <span className="SwitchTag-icon-left">{tag.startIcon}</span>}
            {tag.label}
            {tag.endIcon && <span className="SwitchTag-icon-right">{tag.endIcon}</span>}
          </button>
        ))}
        <div
          style={{
            left,
            width,
            transition,
            backgroundColor: activeColor,
          }}
          className={clsx({
            ['ActiveTab']: true,
            ['ActiveTab-small']: size === SWITCH_TAGS_SIZE.Medium,
          })}
        />
      </div>
      {selectedTag && selectedTag.content && (
        <div className="Tag-content">{selectedTag.content}</div>
      )}
    </div>
  );
};
