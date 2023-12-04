import React, { ChangeEvent } from 'react';
import './SliderStyles.scss';
import clsx from 'clsx';
import { ISliderProps } from './SliderTypes';

export const Slider = (props: ISliderProps) => {
  const { id, ariaLabel, name, className, value = 0, disabled, onChange } = props;

  const handleThumbChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(+e.target.value);
  };

  const keepValueInRange = (value: number) => {
    return Math.min(100, Math.max(0, value));
  };

  return (
    <div
      className={clsx({
        ['Slider']: true,
        [className || '']: !!className,
      })}
    >
      <div className="Slider-progress">
        <div className="Slider-track" style={{ width: `${value && keepValueInRange(value)}%` }} />
        <input
          id={id}
          name={name}
          aria-label={ariaLabel}
          type="range"
          value={value && keepValueInRange(value)}
          min={0}
          max={100}
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
