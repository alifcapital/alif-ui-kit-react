import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
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

  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) {
      return;
    }

    setIsChecked(!isChecked);
    onChange && onChange(!isChecked, e);
  };

  const handleEnterPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ) => {
    if ((ev.key === 'Enter' || ev.key === ' ') && !isDisabled) {
      const event = {
        target: {
          ariaLabel,
          name,
        },
      };

      setIsChecked(!isChecked);
      // mapping custom object as React.ChangeEvent<HTMLInputElement>
      // @ts-ignore
      onChange && onChange(!isChecked, event);
    }
  };

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  useEffect(() => {
    const value = typeof checked === 'boolean' ? checked : false;
    setIsChecked(value);
  }, [checked]);

  return (
    <div className="Switch">
      <label>
        <div
          className={clsx({
            ['Switch-light']: theme === SWITCH_THEME.Light,
            ['Switch-dark']: theme === SWITCH_THEME.Dark,
            ['Switch-green']: theme === SWITCH_THEME.Green,
            ['Switch-large']: size === SWITCH_SIZE.Large,
            ['Switch-medium']: size === SWITCH_SIZE.Medium,
            ['Switch-small']: size === SWITCH_SIZE.Small,
            ['Switch-light-active']: isChecked && theme === SWITCH_THEME.Light,
            ['Switch-dark-active']: isChecked && theme === SWITCH_THEME.Dark,
            ['Switch-green-active']: isChecked && theme === SWITCH_THEME.Green,
            ['Switch-large-active']: isChecked && size === SWITCH_SIZE.Large,
            ['Switch-medium-active']: isChecked && size === SWITCH_SIZE.Medium,
            ['Switch-small-active']: isChecked && size === SWITCH_SIZE.Small,
            ['Switch-disabled']: isDisabled,
            [className || '']: !!className,
          })}
          tabIndex={0}
          role="input"
          onKeyDown={handleEnterPress}
        >
          <input
            aria-label={ariaLabel}
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
