import { EyeOff } from 'alif-icon-kit-react';
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
    endIcon,
    startIcon,
    fullWidth,
    error,
    hint,
    helperText,
    placeholder,
    label,
    type,
    name,
    ariaLabel,
    autoComplete = true,
    size = InputSize.Medium,
    theme = InputTheme.Light,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    ...rest
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

  return (
    <div
      className={clsx({
        ['Input-root']: true,
        ['Input-fullwidth']: !!fullWidth,
        ['Input-without-heading ']: !!label,
        [className || '']: !!className,
      })}
    >
      {label && (
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
        {type !== InputType.Password && startIcon && (
          <div className="InputBase-icon-start">{startIcon}</div>
        )}
        <div
          className={clsx({
            ['InputBaseInner']: true,
          })}
        >
          {!label && (
            <label
              className={clsx({
                ['InputLabel']: true,
                ['InputBaseInner-label']: true,
                ['InputLabel-position-fixed']: inputValue.length > 0,
                ['InputLabel-small']: size === InputSize.Small,
              })}
              htmlFor={id || 'inputBaseInput'}
            >
              {placeholder}
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
            placeholder={label ? placeholder : ''}
            {...rest}
          />
        </div>
        {type !== InputType.Password && endIcon && (
          <div className="InputBase-icon-end">{endIcon}</div>
        )}
        {type === InputType.Password && (
          <div className="InputBase-icon-end">
            <EyeOff />
          </div>
        )}
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
