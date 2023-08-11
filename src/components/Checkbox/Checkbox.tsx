import React, { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ICheckboxProps } from './CheckboxTypes';
import { CHECKBOX_VALUE, CHECKBOX_SIZE, CHECKBOX_THEME } from './CheckboxConstants';
import { Check } from 'alif-icon-kit-react';

import './CheckboxStyles.scss';

export const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const {
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

  // Define the component state using useState hooks
  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  // Handle checkbox change event
  // We can use useCallback here to memoize the function
  // but it's not necessary since the function is not passed to any child components
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      // Return if the component is disabled
      return;
    }

    // Toggle the checked state and call onChange callback if provided
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked, e);
  };

  // Handle keyboard events
  // We can use useCallback here to memoize the function
  // but it's not necessary since the function is not passed to any child components
  const handleEnterPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ) => {
    if ((ev.key === 'Enter' || ev.key === ' ') && !disabled) {
      // Check the box if user presses Enter or Space
      setIsChecked(!isChecked);
      onChange && onChange(!isChecked);
    }
  };

  // Update the disabled state when props change
  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  // Update the checked/indeterminate state when value prop changes
  useEffect(() => {
    const checked = typeof value === 'boolean' ? value : false;
    const indefinite = value === CHECKBOX_VALUE.indeterminate;
    if (indefinite) {
      // Set indeterminate state if the value prop is 'indeterminate'
      setIsIndeterminate(true);
    } else {
      // Otherwise, set checked state
      setIsChecked(checked);
    }
  }, [value]);

  // Update the error state when error prop changes
  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  return (
    <>
      <div className="Checkbox">
        <label>
          <div
            className={clsx({
              ['Checkbox-checked']: isChecked || isIndeterminate,
              ['Checkbox-dark-checked']: isChecked && theme === CHECKBOX_THEME.Dark,
              ['Checkbox-green-checked']: isChecked && theme === CHECKBOX_THEME.Green,
              ['Checkbox-unchecked']: !isChecked && !isIndeterminate,
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
                type="checkbox"
                onChange={handleChangeCheckbox}
                aria-label={ariaLabel}
                tabIndex={-1}
                disabled={isDisabled}
              />
              {isChecked && !isDisabled && <Check />}
              {isIndeterminate && !isChecked && !isDisabled && <Check />}
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
    </>
  );
};
