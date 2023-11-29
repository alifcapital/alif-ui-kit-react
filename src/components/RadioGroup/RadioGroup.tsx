import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';

import './RadioGroupStyles.scss';
import { IRadioGroupOption, IRadioGroupProps } from './RadioGroupTypes';
import { RADIO_GROUP_SIZE, RADIO_GROUP_THEME, RADIO_GROUP_VARIANT } from './RadioGroupConstants';

const RadioGroup: React.FC<IRadioGroupProps> = ({
  options = [],
  value = options[0]?.value,
  onChange,
  disabled = false,
  name,
  size = RADIO_GROUP_SIZE.Medium,
  theme = RADIO_GROUP_THEME.Green,
  error = false,
  variant = RADIO_GROUP_VARIANT.row,
  gap = 12,
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    if (localValue !== value) setLocalValue(value);
  }, [value]);

  const handleChange = (option: IRadioGroupOption) => {
    if (localValue !== option.value) {
      setLocalValue(option.value);
      onChange && onChange(option.value);
    }
  };

  const handleKeyPress = (
    ev: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    option: IRadioGroupOption,
  ) => {
    if ((ev.key === 'Enter' || ev.key === ' ') && !disabled) {
      handleChange(option);
    }
  };

  return (
    <div
      style={{ gap: gap + 'px' }}
      className={clsx({
        ['RadioGroup']: true,
        ['RadioGroup-disabled']: disabled,
        ['RadioGroup-row']: variant === RADIO_GROUP_VARIANT.row,
        ['RadioGroup-column']: variant === RADIO_GROUP_VARIANT.column,
        ['RadioGroup-dark']: theme === RADIO_GROUP_THEME.Dark,
        ['RadioGroup-green']: theme === RADIO_GROUP_THEME.Green,
        ['RadioGroup-light']: theme === RADIO_GROUP_THEME.Light,
      })}
    >
      {options.map((option) => {
        const isChecked = localValue === option.value;
        return (
          <label
            className={clsx({
              ['RadioGroup-button']: true,
              ['RadioGroup-button-checked']: isChecked,
              ['RadioGroup-button-unchecked']: !isChecked,
              ['RadioGroup-button-disabled']: option.disabled || disabled,
              ['RadioGroup-button-error']: error,
            })}
            key={option.key}
          >
            <input
              type="radio"
              checked={isChecked}
              className={clsx({
                ['Radio-input']: true,
                ['Radio-input-order-1']: option.labelOrder === 'left',
                ['Radio-input-large']: size === RADIO_GROUP_SIZE.Large,
                ['Radio-input-medium']: size === RADIO_GROUP_SIZE.Medium,
                ['Radio-input-small']: size === RADIO_GROUP_SIZE.Small,
              })}
              onChange={() => handleChange(option)}
              aria-label={option?.ariaLabel || 'radio'}
              tabIndex={-1}
              name={name}
              disabled={option.disabled || disabled}
            />
            {option.label && (
              <div
                onKeyDown={(e) => handleKeyPress(e, option)}
                tabIndex={!option.disabled ? 0 : undefined}
                className={clsx({
                  ['RadioGroup-button-label']: true,
                  ['RadioGroup-button-label-order-0']: option.labelOrder === 'left',
                })}
                style={{ order: option.labelOrder }}
              >
                {option.label}
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
