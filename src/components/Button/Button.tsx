import React from 'react';
import clsx from 'clsx';

import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from './ButtonConstants';
import './ButtonStyles.scss';
import { IButtonProps } from './ButtonTypes';

export const Button = (props: IButtonProps) => {
  const {
    id,
    ariaLabel,
    className,
    children,
    disabled,
    rounded,
    endIcon,
    startIcon,
    color = BUTTON_COLOR.Primary,
    withIcon,
    size = BUTTON_SIZE.Medium,
    variant = BUTTON_VARIANT.Contained,
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      id={id}
      disabled={disabled}
      className={clsx({
        ['Button']: true,
        ['Button-contained']: variant === BUTTON_VARIANT.Contained,
        ['Button-outlined']: variant === BUTTON_VARIANT.Outlined,
        ['Button-outlined-disable']: !!disabled && variant === BUTTON_VARIANT.Outlined,
        ['Button-text']: variant === BUTTON_VARIANT.Text,
        ['Button-text-small']: size === BUTTON_SIZE.Small && variant === BUTTON_VARIANT.Text,
        ['Button-text-large']: size === BUTTON_SIZE.large && variant === BUTTON_VARIANT.Text,
        ['Button-text-disable']: !!disabled && variant === BUTTON_VARIANT.Text,
        ['Button-primary']: size === BUTTON_SIZE.Medium,
        ['Button-primary-disable']: !!disabled && color === BUTTON_COLOR.Primary,
        ['Button-secondary']: color === BUTTON_COLOR.Secondary,
        ['Button-secondary-disable']: !!disabled && color === BUTTON_COLOR.Secondary,
        ['Button-green']: color === BUTTON_COLOR.Green,
        ['Button-green-disable']: !!disabled && color === BUTTON_COLOR.Green,
        ['Button-small']: size === BUTTON_SIZE.Small,
        ['Button-large']: size === BUTTON_SIZE.large,
        ['Button-round']: !!rounded,
        ['Button-only_icon']: !!withIcon,
        ['Button-only_icon-small']: !!withIcon && size === BUTTON_SIZE.Small,
        ['Button-only_icon-large']: !!withIcon && size === BUTTON_SIZE.large,
        [className || '']: !!className,
      })}
    >
      <div className="Button-children">
        {startIcon && <span className="Button-icon-left">{startIcon}</span>}
        {children}
        {endIcon && <span className="Button-icon-right">{endIcon}</span>}
      </div>
    </button>
  );
};
