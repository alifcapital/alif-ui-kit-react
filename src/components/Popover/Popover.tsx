import React from 'react';
import { PopoverContent, PopoverTrigger, Portal, Root } from '@radix-ui/react-popover';
import clsx from 'clsx';
import { IPopoverProps } from './PopoverTypes';
import './PopoverStyle.scss';

const Content = (props: Partial<IPopoverProps>) => {
  const {
    children,
    contentClassName,
    noStyle = false,
    sideOffset = 18,
    align = 'end',
    ...restProps
  } = props;

  return (
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
  );
};

export const Popover = (props: IPopoverProps) => {
  const {
    isPortal = true,
    open,
    onOpenChange,
    onTriggerClick,
    ariaLabel,
    triggerElement,
    children,
    popoverClassName,
    noStyle = false,
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

        {open &&
          children &&
          (isPortal ? (
            <Portal>
              <Content {...restProps}>{children}</Content>
            </Portal>
          ) : (
            <Content {...restProps}>{children}</Content>
          ))}
      </Root>
    </div>
  );
};
