import React from 'react';
import { IProgressBarProps } from './ProgressBarTypes';
import clsx from 'clsx';

import './ProgressBarStyles.scss';
import { PROGRESS_BAR_SIZE } from './ProgressBarConstants';

export const ProgressBar = ({
  progress,
  size = PROGRESS_BAR_SIZE.Medium,
  className,
  id,
  indicatorColor,
}: IProgressBarProps) => {
  const keepValueInRange = (value: number) => {
    return Math.min(100, Math.max(0, value));
  };

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={keepValueInRange(progress)}
      aria-valuemax={100}
      id={id}
      className={clsx({
        ['ProgressBar']: true,
        ['ProgressBar-medium']: size === PROGRESS_BAR_SIZE.Medium,
        ['ProgressBar-small']: size === PROGRESS_BAR_SIZE.Small,
        [className || '']: !!className,
      })}
    >
      <div
        className="ProgressBar-indicator"
        style={{ width: `${keepValueInRange(progress)}%`, backgroundColor: indicatorColor }}
      />
    </div>
  );
};
