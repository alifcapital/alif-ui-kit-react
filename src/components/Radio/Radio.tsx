'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { IRadioProps } from './RadioTypes';
import { RADIO_SIZE, RADIO_THEME } from './RadioConstants';
import './RadioStyles.scss';

const Radio = React.forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const {
    id,
    name,
    disabled,
    children,
    label,
    className,
    ariaLabel,
    error,
    value,
    onChange,
    theme = RADIO_THEME.Light,
    size = RADIO_SIZE.Medium,
  } = props;

  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);


  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);


  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <div className="Radio">
      <label
        className={clsx({
          ['Radio-checked']: value,
          ['Radio-dark-checked']: value && theme === RADIO_THEME.Dark,
          ['Radio-green-checked']: value && theme === RADIO_THEME.Green,
          ['Radio-unchecked']: !value,
          ['Radio-error']: isError,
          ['Radio-disabled']: isDisabled,
          ['Radio-green-disabled']: isDisabled && theme === RADIO_THEME.Green,
          ['Radio-dark-disabled']: isDisabled && theme === RADIO_THEME.Dark,
          ['Radio-dark']: theme === RADIO_THEME.Dark,
          ['Radio-green']: theme === RADIO_THEME.Green,
          [className || '']: !!className,
        })}
        htmlFor={id}
      >
        <input
          type="radio"
          className={clsx({
            ['Radio-input']: true,
            ['Radio-large']: size === RADIO_SIZE.Large,
            ['Radio-medium']: size === RADIO_SIZE.Medium,
            ['Radio-small']: size === RADIO_SIZE.Small,
          })}
          onChange={onChange}
          id={id}
          ref={ref}
          checked={value}
          disabled={disabled}
          name={name}
          aria-label={ariaLabel}
        />
        {(label || children) && (
          <div
            className={clsx({
              ['Radio-label']: true,
              ['Radio-label-small']: size === RADIO_SIZE.Small,
              ['Radio-label-dark']: theme === RADIO_THEME.Dark,
              ['Radio-label-green']: theme === RADIO_THEME.Green,
              ['Radio-label-disabled']: isDisabled,
              ['Radio-label-dark-disabled']: isDisabled && theme === RADIO_THEME.Dark,
              ['Radio-label-green-disabled']: isDisabled && theme === RADIO_THEME.Green,
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
