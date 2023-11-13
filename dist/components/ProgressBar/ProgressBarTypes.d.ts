import { PROGRESS_BAR_SIZE } from './ProgressBarConstants';
type NumericRange<START extends number, END extends number, ARR extends unknown[] = [], ACC extends number = never> = ARR['length'] extends END ? ACC | START | END : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;
type TProgressBarSize = `${PROGRESS_BAR_SIZE}`;
export interface IProgressBar {
    size: TProgressBarSize;
    className: string;
    id: string;
    indicatorColor: string;
}
export interface IProgressBarProps extends Partial<IProgressBar> {
    progress: NumericRange<0, 100>;
}
export {};
