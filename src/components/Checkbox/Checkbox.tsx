import React, { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Check } from 'alif-icon-kit-react';

import { ICheckboxProps } from './CheckboxTypes';
import { CHECKBOX_SIZE, CHECKBOX_THEME } from './CheckboxConstants';
import './CheckboxStyles.scss';

const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
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
    theme = CHECKBOX_THEME.Light,
    size = CHECKBOX_SIZE.Medium,
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
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
    const checked = typeof value === 'boolean' ? value : false;
    setIsChecked(checked);
  }, [value]);

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <div className="Checkbox">
      <label>
        <div
          className={clsx({
            ['Checkbox-checked']: isChecked,
            ['Checkbox-dark-checked']: isChecked && theme === CHECKBOX_THEME.Dark,
            ['Checkbox-green-checked']: isChecked && theme === CHECKBOX_THEME.Green,
            ['Checkbox-unchecked']: !isChecked,
            ['Checkbox-error']: isError,
            ['Checkbox-disabled']: isDisabled,
            ['Checkbox-green-disabled']: isDisabled && theme === CHECKBOX_THEME.Green,
            ['Checkbox-dark-disabled']: isDisabled && theme === CHECKBOX_THEME.Dark,
            ['Checkbox-dark']: theme === CHECKBOX_THEME.Dark,
            ['Checkbox-green']: theme === CHECKBOX_THEME.Green,
            [className || '']: !!className,
          })}
        >
          <div
            className={clsx({
              ['Checkbox-container']: true,
              ['Checkbox-large']: size === CHECKBOX_SIZE.Large,
              ['Checkbox-medium']: size === CHECKBOX_SIZE.Medium,
              ['Checkbox-small']: size === CHECKBOX_SIZE.Small,
            })}
            role="input"
            tabIndex={0}
            onKeyDown={handleEnterPress}
          >
            <input
              ref={ref}
              id={id}
              type="checkbox"
              onChange={handleChangeCheckbox}
              aria-label={ariaLabel}
              tabIndex={-1}
              disabled={isDisabled}
            />
            {isChecked && !isDisabled && <Check />}
          </div>
        </div>

        {(label || children) && (
          <div
            className={clsx({
              ['Checkbox-label']: true,
              ['Checkbox-label-small']: size === CHECKBOX_SIZE.Small,
              ['Checkbox-label-dark']: theme === CHECKBOX_THEME.Dark,
              ['Checkbox-label-green']: theme === CHECKBOX_THEME.Green,
              ['Checkbox-label-disabled']: isDisabled,
              ['Checkbox-label-dark-disabled']: isDisabled && theme === CHECKBOX_THEME.Dark,
              ['Checkbox-label-green-disabled']: isDisabled && theme === CHECKBOX_THEME.Green,
            })}
          >
            {label || children}
          </div>
        )}
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
