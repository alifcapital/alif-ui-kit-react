import React, { ChangeEvent, useEffect, useState } from 'react';
import './SliderStyles.scss';
import clsx from 'clsx';
import { ISliderProps } from './SliderTypes';

export const Slider = (props: ISliderProps) => {
  const { id, ariaLabel, name, className, value, disabled, onChange } = props;

  const [rangeValue, setRangeValue] = useState(0);

  const handleThumbChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    setRangeValue(value);
    onChange && onChange(value);
  };

  const normalize = (value: number) => {
    return Math.min(100, Math.max(0, value));
  };

  useEffect(() => {
    if (value) setRangeValue(value);
  }, [value]);

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
          style={{ width: `${rangeValue && normalize(rangeValue)}%` }}
        />
        <input
          id={id}
          name={name}
          aria-label={ariaLabel}
          type="range"
          value={rangeValue && normalize(rangeValue)}
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
