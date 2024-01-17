import React from 'react';
import { PopoverContent, PopoverTrigger, Root } from '@radix-ui/react-popover';
import clsx from 'clsx';
import { IPopoverProps } from './PopoverTypes';
import './PopoverStyle.scss';

export const Popover = (props: IPopoverProps) => {
  const {
    open,
    onOpenChange,
    onTriggerClick,
    ariaLabel,
    triggerElement,
    children,
    popoverClassName,
    contentClassName,
    noStyle = false,
    sideOffset = 18,
    align = 'end',
    triggerTabindex,
    triggerAsChild = false,
    ...restProps
  } = props;

  return (
    <div
      className={clsx({
        [popoverClassName || '']: !!popoverClassName,
        ['Popover']: !noStyle,
      })}
    >
      <Root open={open} onOpenChange={onOpenChange}>
        {triggerElement && (
          <PopoverTrigger
            aria-label={ariaLabel}
            tabIndex={triggerTabindex}
            className="Popover-trigger"
            onClick={onTriggerClick}
            asChild={triggerAsChild}
          >
            {triggerElement}
          </PopoverTrigger>
        )}

        {open && children && (
          <PopoverContent
            align={align}
            sideOffset={sideOffset}
            className={clsx({
              [contentClassName || '']: !!contentClassName,
              ['Popover-content']: !!contentClassName || !noStyle,
            })}
            {...restProps}
          >
            {children}
          </PopoverContent>
        )}
      </Root>
    </div>
  );
};
