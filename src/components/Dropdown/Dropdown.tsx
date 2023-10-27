import React, { MouseEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Check, SelectOpenDown } from 'alif-icon-kit-react';

import { IDropdownListItem, IDropdownProps } from './DropdownTypes';
import { Popover } from '../Popover';
import { DROPDOWN_SIZE } from './DropdownConstants';
import './DropdownStyles.scss';

export const Dropdown = React.forwardRef<HTMLInputElement, IDropdownProps>((props, ref) => {
  const {
    items,
    selected,
    label,
    ariaLabel,
    size = DROPDOWN_SIZE.Medium,
    error,
    isDisabled,
    onChange,
    type,
    className,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<IDropdownListItem>();

  const handleClick = () => setIsOpen(!isOpen);

  const handleItemClick = (item: IDropdownListItem) => {
    setActiveItem(item);
    onChange && onChange(item);
    setIsOpen(false);
  };

  const handleTriggerClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget) {
      event.preventDefault();
    }
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  const handleItemKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    item: IDropdownListItem,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveItem(item);
      onChange && onChange(item);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setActiveItem(selected);
  }, [selected]);

  return (
    <div
      className={clsx({
        ['Dropdown']: true,
        ['Dropdown-disabled']: isDisabled,
        [className || '']: !!className,
      })}
    >
      {label && (
        <div
          className={clsx({
            ['Dropdown-label']: true,
            ['Dropdown-label-medium']: size === DROPDOWN_SIZE.Medium,
            ['Dropdown-label-small']: size === DROPDOWN_SIZE.Small,
          })}
        >
          {label}
        </div>
      )}
      <Popover
        open={isOpen}
        ariaLabel={ariaLabel}
        contentClassName={clsx({
          ['Dropdown-popover-content']: true,
          ['Dropdown-popover-content-medium']: size === DROPDOWN_SIZE.Medium,
          ['Dropdown-popover-content-small']: size === DROPDOWN_SIZE.Small,
        })}
        popoverClassName="Dropdown-popover"
        sideOffset={0}
        onOpenChange={handleClick}
        onTriggelClick={handleTriggerClick}
        align={'start'}
        triggerTabindex={-1}
        triggerElement={
          <div
            ref={ref}
            className={clsx({
              ['Dropdown-root']: true,
              ['Dropdown-root-small']: type === 'default' && size === DROPDOWN_SIZE.Small,
              ['Dropdown-root-medium']: type === 'default' && size === DROPDOWN_SIZE.Medium,
              ['Dropdown-root-error']: !!error,
              ['Dropdown-root-active']: isOpen,
            })}
            tabIndex={0}
            aria-label={ariaLabel}
            role="trigger"
            onKeyDown={handleEnterPress}
          >
            <div className="Dropdown-base">
              {type === 'custom' ? props.renderSeletedValue(activeItem) : activeItem?.label}
              <div
                className={clsx({
                  ['Dropdown-input-icon']: true,
                  ['Dropdown-input-icon-up']: isOpen,
                })}
              >
                <SelectOpenDown />
              </div>
            </div>
          </div>
        }
      >
        <div
          className={clsx({
            ['Dropdown-list']: true,
            ['Dropdown-list-medium']: size === DROPDOWN_SIZE.Medium,
            ['Dropdown-list-small']: size === DROPDOWN_SIZE.Small,
          })}
          onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
        >
          {items.map((item) => (
            <div
              key={item.value}
              className={clsx({
                ['Dropdown-list-item']: true,
                ['Dropdown-list-item-small']: size === DROPDOWN_SIZE.Small,
                ['Dropdown-list-item-medium']: size === DROPDOWN_SIZE.Medium,
              })}
              tabIndex={0}
              role="button"
              onClick={() => handleItemClick(item)}
              onKeyDown={(e) => handleItemKeyPress(e, item)}
            >
              {type === 'custom' ? props.renderItem(item) : item.label}
              {activeItem?.value === item.value && (
                <div className="Dropdown-list-active-item">
                  {type === 'custom' ? (
                    props.customActiveIcon
                  ) : (
                    <Check color="" width="24" height="24" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Popover>
      {error && (
        <div
          className={clsx({
            ['Dropdown-error-text']: true,
            ['Dropdown-error-text-medium']: size === DROPDOWN_SIZE.Medium,
            ['Dropdown-error-text-small']: size === DROPDOWN_SIZE.Small,
          })}
        >
          {error}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
