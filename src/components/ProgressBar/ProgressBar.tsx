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
}: IProgressBarProps) => (
  <div
    role="progressbar"
    aria-valuemin={0}
    aria-valuenow={progress}
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
      style={{ width: `${progress}%`, backgroundColor: indicatorColor }}
    />
  </div>
);
