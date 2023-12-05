import React, { ChangeEvent } from 'react';
import './SliderStyles.scss';
import clsx from 'clsx';
import { ISliderProps } from './SliderTypes';

export const Slider = (props: ISliderProps) => {
  const {
    id,
    ariaLabel,
    name,
    className,
    value = 0,
    disabled,
    min = 0,
    max = 100,
    onChange,
  } = props;

  const handleThumbChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(+e.target.value);
  };

  const keepValueInRange = (value: number) => {
    return Math.min(100, Math.max(0, value));
  };

  const calculatePercentage = (value: number) => {
    return keepValueInRange(((value - min) / (max - min)) * 100);
  };

  return (
    <div
      className={clsx({
        ['Slider']: true,
        [className || '']: !!className,
      })}
    >
      <div className="Slider-progress">
        <div
          className="Slider-track"
          style={{ width: `${value && calculatePercentage(value)}%` }}
        />
        <input
          id={id}
          name={name}
          aria-label={ariaLabel}
          type="range"
          value={value && keepValueInRange(value)}
          min={min}
          max={max}
          disabled={disabled}
          className={clsx({
            ['Slider-range']: true,
            ['Slider-thumb-disabled']: disabled,
          })}
          onChange={handleThumbChange}
        />
      </div>
    </div>
  );
};
