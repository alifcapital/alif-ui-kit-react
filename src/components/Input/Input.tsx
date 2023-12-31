'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import { EyeOff, EyeOn } from 'alif-icon-kit-react';

import { INPUT_SIZE, INPUT_THEME, INPUT_TYPE } from './InputConstants';
import './InputStyles.scss';
import { InputProps } from './InputTypes';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
    autoComplete,
    size = INPUT_SIZE.Medium,
    theme = INPUT_THEME.Light,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    requiredSymbol,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [isAutoFill, setIsAutofill] = useState(false);
  const [inputType, setInputType] = useState<`${INPUT_TYPE}`>(type);
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

  const handleAutofill = (e: React.AnimationEvent<HTMLInputElement>) => {
    if (e.animationName === 'onAutoFillStart') {
      setIsAutofill(true);
    }
  };

  useLayoutEffect(() => {
    if (defaultValue || value) {
      setInputValue(' ');
    }
  }, [defaultValue, value]);

  useEffect(() => {
    if (type === INPUT_TYPE.Password) {
      setInputType(showPassword ? INPUT_TYPE.Text : INPUT_TYPE.Password);
    }
  }, [showPassword, type]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setIsAutofill(false);
    }
  }, [inputValue]);

  return (
    <div
      className={clsx({
        ['Input']: true,
        ['Input-without-heading ']: !!label,
        [className || '']: !!className,
      })}
    >
      {label && (
        <label
          className={clsx({
            ['InputLabel']: true,
            ['InputLabel-small']: size === INPUT_SIZE.Small,
          })}
          htmlFor={id}
        >
          {label}
          {requiredSymbol && (
            <span
              style={{
                color: typeof requiredSymbol === 'object' ? requiredSymbol.color : undefined,
              }}
            >
              {requiredSymbol && '*'}
            </span>
          )}
        </label>
      )}
      <div
        className={clsx({
          ['InputBase-root']: true,
          ['Input-disabled']: disabled,
          ['InputBase-error']: !!isError,
          ['InputBase-root-dark']: theme === INPUT_THEME.Dark,
        })}
      >
        {type !== INPUT_TYPE.Password && startIcon && (
          <div className="InputBase-icon-start">{startIcon}</div>
        )}
        <div
          className={clsx({
            ['InputBaseInner']: true,
          })}
        >
          {!label && (
            <label
              style={{
                zIndex: isAutoFill ? 1 : 0,
              }}
              className={clsx({
                ['InputLabel']: true,
                ['InputLabel-medium-align-center']: size === INPUT_SIZE.Medium,
                ['InputLabel-small-align-center']: size === INPUT_SIZE.Small,
                ['InputLabel-position-fixed']: inputValue.length > 0 || isAutoFill,
              })}
              htmlFor={id}
            >
              {placeholder}
            </label>
          )}
          <input
            defaultValue={!value && defaultValue ? defaultValue : undefined}
            aria-label={ariaLabel}
            autoComplete={autoComplete}
            className={clsx({
              ['InputBase-input']: true,
              ['InputBase-input-dark']: theme === INPUT_THEME.Dark,
              ['InputBase-input-small']: size === INPUT_SIZE.Small,
              ['InputBase-autofill-font']: isAutoFill,
            })}
            disabled={disabled}
            name={name}
            type={inputType}
            id={id}
            value={value}
            onAnimationStart={handleAutofill}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            placeholder={label ? placeholder : ''}
            ref={ref}
            {...rest}
          />
        </div>
        {type !== INPUT_TYPE.Password && endIcon && (
          <div className="InputBase-icon-end">{endIcon}</div>
        )}
        {type === INPUT_TYPE.Password && (
          <button
            type="button"
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
            ['Input-helper-text-dark']: !isError && theme === INPUT_THEME.Dark,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
