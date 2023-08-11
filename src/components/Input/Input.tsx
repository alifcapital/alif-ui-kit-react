import React, { useEffect, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import { EyeOff, EyeOn } from 'alif-icon-kit-react';

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
    isError,
    isHint,
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
  const [inputType, setInputType] = useState<`${InputType}`>(type);
  const [showPassword, setShowPassword] = React.useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  useLayoutEffect(() => {
    if (defaultValue || value) {
      setInputValue(' ');
    }
  }, [defaultValue, value]);

  useEffect(() => {
    if (type === InputType.Password) {
      setInputType(showPassword ? InputType.Text : InputType.Password);
    }
  }, [showPassword, type]);

  return (
    <div
      className={clsx({
        ['Input-root']: true,
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
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={clsx({
          ['InputBase-root']: true,
          ['Input-disabled']: disabled,
          ['InputBase-error']: !!isError,
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
                ['InputLabel-medium-align-center']: size === InputSize.Medium,
                ['InputLabel-small-align-center']: size === InputSize.Small,
                ['InputLabel-position-fixed']: inputValue.length > 0,
              })}
              htmlFor={id}
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
            type={inputType}
            id={id}
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
          <button
            aria-label="toggle password visibility"
            className="InputBase-icon-end"
            onClick={handleClickShowPassword}
          >
            {showPassword ? <EyeOn /> : <EyeOff />}
          </button>
        )}
      </div>
      {helperText && (
        <p
          className={clsx({
            ['Input-helper-text']: true,
            ['Input-hint-text']: !!isHint,
            ['Input-error-text']: !!isError,
            ['Input-helper-text-dark']: !isError && theme === InputTheme.Dark,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
