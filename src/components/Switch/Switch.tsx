import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { ISwitchProps } from './SwitchTypes';
import './SwitchStyles.scss';
import { SWITCH_SIZE, SWITCH_THEME } from './SwitchConstants';

export const Switch: React.FC<ISwitchProps> = (props) => {
  const {
    id,
    name,
    className,
    checked,
    disabled,
    ariaLabel,
    label,
    theme = SWITCH_THEME.Light,
    size = SWITCH_SIZE.Medium,
    onChange,
  } = props;

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    onChange && onChange(!checked, e);
  };

  const handleEnterPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ) => {
    if ((ev.key === 'Enter' || ev.key === ' ') && !disabled) {
      const event = {
        target: {
          ariaLabel,
          name,
        },
      };
      // mapping custom object as React.ChangeEvent<HTMLInputElement>
      // @ts-ignore
      onChange && onChange(!checked, event);
    }
  };

  return (
    <div className="Switch-root">
      <label>
        <div
          className={clsx({
            ['Switch-light']: theme === SWITCH_THEME.Light,
            ['Switch-dark']: theme === SWITCH_THEME.Dark,
            ['Switch-green']: theme === SWITCH_THEME.Green,
            ['Switch-large']: size === SWITCH_SIZE.Large,
            ['Switch-medium']: size === SWITCH_SIZE.Medium,
            ['Switch-small']: size === SWITCH_SIZE.Small,
            ['Switch-light-active']: checked && theme === SWITCH_THEME.Light,
            ['Switch-dark-active']: checked && theme === SWITCH_THEME.Dark,
            ['Switch-green-active']: checked && theme === SWITCH_THEME.Green,
            ['Switch-large-active']: checked && size === SWITCH_SIZE.Large,
            ['Switch-medium-active']: checked && size === SWITCH_SIZE.Medium,
            ['Switch-small-active']: checked && size === SWITCH_SIZE.Small,
            ['Switch-disabled']: disabled,
            [className || '']: !!className,
          })}
          tabIndex={0}
          role="input"
          onKeyDown={handleEnterPress}
        >
          <input
            tabIndex={-1}
            type="checkbox"
            name={name}
            id={id}
            onChange={handleChangeCheckbox}
          />
          <div
            className={clsx({
              ['Switch-ellipse']: true,
            })}
          ></div>
        </div>

        <div
          className={clsx({
            ['Switch-label']: true,
            ['Switch-label-small']: size === SWITCH_SIZE.Small,
            ['Switch-label-dark']: theme === SWITCH_THEME.Dark,
            ['Switch-label-green']: theme === SWITCH_THEME.Green,
          })}
        >
          {label}
        </div>
      </label>
    </div>
  );
};
