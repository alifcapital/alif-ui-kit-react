import React from 'react';
import clsx from 'clsx';

import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonConstants';
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
    color = ButtonColor.Primary,
    withIcon,
    size = ButtonSize.Medium,
    variant = ButtonVariant.Contained,
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      id={id}
      disabled={disabled}
      className={clsx({
        ['Button']: true,
        ['Button-contained']: variant === ButtonVariant.Contained,
        ['Button-outlined']: variant === ButtonVariant.Outlined,
        ['Button-outlined-disable']: !!disabled && variant === ButtonVariant.Outlined,
        ['Button-text']: variant === ButtonVariant.Text,
        ['Button-text-small']: size === ButtonSize.Small && variant === ButtonVariant.Text,
        ['Button-text-large']: size === ButtonSize.large && variant === ButtonVariant.Text,
        ['Button-text-disable']: !!disabled && variant === ButtonVariant.Text,
        ['Button-primary']: size === ButtonSize.Medium,
        ['Button-primary-disable']: !!disabled && color === ButtonColor.Primary,
        ['Button-secondary']: color === ButtonColor.Secondary,
        ['Button-secondary-disable']: !!disabled && color === ButtonColor.Secondary,
        ['Button-green']: color === ButtonColor.Green,
        ['Button-green-disable']: !!disabled && color === ButtonColor.Green,
        ['Button-small']: size === ButtonSize.Small,
        ['Button-large']: size === ButtonSize.large,
        ['Button-round']: !!rounded,
        ['Button-only_icon']: !!withIcon,
        ['Button-only_icon-small']: !!withIcon && size === ButtonSize.Small,
        ['Button-only_icon-large']: !!withIcon && size === ButtonSize.large,
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
