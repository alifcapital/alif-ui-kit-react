import React from 'react';
import { IProgressBarProps } from './ProgressBarTypes';
import clsx from 'clsx';

import './ProgressBarStyles.scss';
import { PROGRESS_BAR_SIZE } from './ProgressBarConstants';

const MAX_VALUE = 100

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
    aria-valuenow={Math.min(progress,MAX_VALUE)}
    aria-valuemax={MAX_VALUE}
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
      style={{ width: `${Math.min(progress,MAX_VALUE)}%`, backgroundColor: indicatorColor }}
    />
  </div>
);
