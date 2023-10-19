import React from 'react';
import { PopoverContent, PopoverTrigger, Root } from '@radix-ui/react-popover';
import { IPopoverProps } from './PopoverTypes';
import clsx from 'clsx';
import './PopoverStyle.scss';

export const Popover = (props: IPopoverProps) => {
  const {
    open,
    onOpenChange,
    ariaLabel,
    triggerElement,
    children,
    popoverClassName,
    contentClassName,
    noStyle = false,
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
          <PopoverTrigger aria-label={ariaLabel} className="Popover-trigger">
            {triggerElement}
          </PopoverTrigger>
        )}

        {open && children && (
          <PopoverContent
            align="end"
            sideOffset={8}
            className={clsx({
              [contentClassName || '']: !!contentClassName,
              ['Popover-content']: !contentClassName || noStyle,
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
