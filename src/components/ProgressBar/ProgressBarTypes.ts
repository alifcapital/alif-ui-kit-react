import { PROGRESS_BAR_SIZE } from './ProgressBarConstants';

type TProgressBarSize = `${PROGRESS_BAR_SIZE}`;

export interface IProgressBar {
  size: TProgressBarSize;
  className: string;
  id: string;
  indicatorColor: string;
}

export interface IProgressBarProps extends Partial<IProgressBar> {
  progress: number;
}
