'use client';

import React, { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { IRadioProps } from './RadioTypes';
import { RADIO_SIZE, RADIO_THEME } from './RadioConstants';
import './RadioStyles.scss';
import { CHECKBOX_SIZE, CHECKBOX_THEME } from '../Checkbox';

const Radio = React.forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const {
    id,
    name,
    disabled,
    children,
    value,
    label,
    className,
    onChange,
    ariaLabel,
    error,
    theme = RADIO_THEME.Light,
    size = RADIO_SIZE.Medium,
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const checked = typeof value === 'boolean' ? value : false;
    setIsChecked(checked);
  }, [value]);

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <div className="Radio">
      <label
          className={clsx({
            ['Radio-checked']: isChecked,
            ['Radio-dark-checked']: isChecked && theme === CHECKBOX_THEME.Dark,
            ['Radio-green-checked']: isChecked && theme === CHECKBOX_THEME.Green,
            ['Radio-unchecked']: !isChecked,
            ['Radio-error']: isError,
            ['Radio-disabled']: isDisabled,
            ['Radio-green-disabled']: isDisabled && theme === CHECKBOX_THEME.Green,
            ['Radio-dark-disabled']: isDisabled && theme === CHECKBOX_THEME.Dark,
            ['Radio-dark']: theme === CHECKBOX_THEME.Dark,
            ['Radio-green']: theme === CHECKBOX_THEME.Green,
            [className || '']: !!className,
          })}
        htmlFor={id}
        onKeyDown={handleEnterPress}
      >
        <input
          type="radio"
          className={clsx({
            ['Radio-input']: true,
            ['Radio-large']: size === CHECKBOX_SIZE.Large,
            ['Radio-medium']: size === CHECKBOX_SIZE.Medium,
            ['Radio-small']: size === CHECKBOX_SIZE.Small,
          })}
          onChange={handleChangeRadio}
          id={id}
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          aria-label={ariaLabel}
        />
        {(label || children) && (
          <div
            className={clsx({
              ['Radio-label']: true,
              ['Radio-label-small']: size === CHECKBOX_SIZE.Small,
              ['Radio-label-dark']: theme === CHECKBOX_THEME.Dark,
              ['Radio-label-green']: theme === CHECKBOX_THEME.Green,
              ['Radio-label-disabled']: isDisabled,
              ['Radio-label-dark-disabled']: isDisabled && theme === CHECKBOX_THEME.Dark,
              ['Radio-label-green-disabled']: isDisabled && theme === CHECKBOX_THEME.Green,
            })}
          >
            {label || children}
          </div>
        )}
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export { Radio };
