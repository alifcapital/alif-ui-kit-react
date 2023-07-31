import clsx from 'clsx';
import React, { useState } from 'react';

import { InputSize, InputTheme, InputType } from './InputConstants';
import './InputStyles.scss';
import { InputProps } from './InputTypes';

export const Input = (props: InputProps) => {
  const {
    id,
    value,
    defaultValue,
    className,
    disabled,
    endAddon,
    startAddon,
    fullWidth,
    error,
    hint,
    helperText,
    placeholder,
    label,
    type,
    name,
    ariaLabel,
    hasHeading = false,
    autoComplete = true,
    size = InputSize.Medium,
    theme = InputTheme.Light,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
  } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown && onKeyDown(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyUp && onKeyUp(e);
  };

  const HideIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75879 3.58594L6.4659 4.29304L20.0859 17.913L20.793 18.6202L19.3788 20.0344L18.6717 19.3273L17.7827 18.4382L17.7651 18.4483C16.0008 19.4569 14.0053 19.9916 11.973 20.0001L11.9688 20.0002C6.48714 20.0002 2.77969 16.1284 1.17725 14.0214C0.725829 13.4445 0.480469 12.7329 0.480469 12.0002C0.480469 11.2676 0.725689 10.5563 1.17686 9.9794C2.34697 8.43706 3.76703 7.10321 5.37698 6.03255L5.05169 5.70726L4.34458 5.00015L5.75879 3.58594ZM6.82337 7.47894C5.25749 8.46171 3.88263 9.72043 2.76572 11.1941L2.7546 11.2085C2.57703 11.4342 2.48047 11.713 2.48047 12.0002C2.48047 12.2873 2.57703 12.5661 2.7546 12.7918L2.76499 12.8052C4.26489 14.7793 7.45475 17.9991 11.9666 18.0002C13.4762 17.9935 14.9614 17.6371 16.3064 16.962L14.5049 15.1604C13.8712 15.5613 13.132 15.7794 12.3703 15.7802C11.5788 15.7819 10.8047 15.5488 10.1458 15.1104C9.48668 14.6719 8.97242 14.0477 8.66828 13.3166C8.36415 12.5856 8.28386 11.7807 8.43748 11.004C8.53389 10.5166 8.7197 10.054 8.98302 9.63859L6.82337 7.47894ZM10.4295 11.263C10.4181 11.3056 10.4081 11.3486 10.3995 11.3921C10.3226 11.7804 10.3628 12.1829 10.5149 12.5484C10.6669 12.9139 10.924 13.226 11.2536 13.4453C11.5833 13.6646 11.9705 13.7812 12.3663 13.7802L12.3679 13.7802C12.5438 13.78 12.7172 13.7567 12.8842 13.7119L10.4295 11.263ZM12.3703 15.7802C12.3701 15.7802 12.3699 15.7802 12.3697 15.7802L12.3688 14.7802L12.3712 15.7802C12.3709 15.7802 12.3706 15.7802 12.3703 15.7802ZM10.4188 4.02018H11.4188H11.9688C17.4504 4.02018 21.1578 7.89191 22.7603 9.99894C23.2117 10.5759 23.457 11.2874 23.457 12.0202C23.457 12.7557 23.2098 13.47 22.755 14.0481C22.3075 14.6176 21.8312 15.1638 21.3281 15.6848L20.6334 16.4041L19.1948 15.0148L19.8894 14.2955C20.3454 13.8233 20.777 13.3283 21.1825 12.8123L21.1829 12.8118C21.3605 12.5861 21.457 12.3073 21.457 12.0202C21.457 11.733 21.3605 11.4542 21.1829 11.2286L21.1725 11.2151C19.6724 9.24075 16.4817 6.02018 11.9688 6.02018H11.4188H10.4188V4.02018Z"
        fill="#73787D"
      />
    </svg>
  );

  return (
    <div
      className={clsx({
        ['Input-root']: true,
        ['Input-fullwidth']: !!fullWidth,
        ['Input-without-heading ']: !!label,
        [className || '']: !!className,
      })}
    >
      {hasHeading && (
        <label
          className={clsx({
            ['InputLabel']: true,
            ['InputLabel-small']: size === InputSize.Small,
          })}
          htmlFor={id || 'inputBaseInput'}
        >
          {label}
        </label>
      )}
      <div
        className={clsx({
          ['InputBase-root']: true,
          ['InputBase-error']: !!error,
          ['InputBase-root-dark']: theme === InputTheme.Dark,
        })}
      >
        {type !== InputType.Password && startAddon && (
          <div className="InputBase-icon-start">{startAddon}</div>
        )}
        <div
          className={clsx({
            ['InputBaseInner']: true,
          })}
        >
          {!hasHeading && (
            <label
              className={clsx({
                ['InputLabel']: true,
                ['InputBaseInner-label']: true,
                ['InputLabel-position-fixed']: inputValue.length > 0,
                ['InputLabel-small']: size === InputSize.Small,
              })}
              htmlFor={id || 'inputBaseInput'}
            >
              {label}
            </label>
          )}
          <input
            defaultValue={!value && defaultValue ? defaultValue : undefined}
            aria-label={ariaLabel}
            autoComplete={autoComplete ? 'on' : 'off'}
            className={clsx({
              ['InputBase-input']: true,
              ['InputBase-input-dark']: theme === InputTheme.Dark,
              ['InputBase-input-small']: size === InputSize.Small,
            })}
            disabled={disabled}
            name={name}
            type={type}
            id={id || 'inputBaseInput'}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            placeholder={hasHeading ? placeholder : ''}
          />
        </div>
        {type !== InputType.Password && endAddon && (
          <div className="InputBase-icon-end">{endAddon}</div>
        )}
        {type === InputType.Password && <div className="InputBase-icon-end">{HideIcon}</div>}
      </div>
      {helperText && (
        <p
          className={clsx({
            ['Input-helper-text']: true,
            ['Input-hint-text']: !!hint,
            ['Input-error-text']: !!error,
            ['Input-helper-text-dark']: !error && theme === InputTheme.Dark,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
