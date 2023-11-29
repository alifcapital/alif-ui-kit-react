import { RADIO_GROUP_SIZE, RADIO_GROUP_THEME, RADIO_GROUP_VARIANT } from './RadioGroupConstants';

type Size = `${RADIO_GROUP_SIZE}`;
type Theme = `${RADIO_GROUP_THEME}`;
export type TRadioGroupVariant = `${RADIO_GROUP_VARIANT}`;

export type TRadioGroupValue = string | number;

export interface IRadioGroupOption {
  label?: JSX.Element | string;
  labelOrder?: 0 | 1;
  value: TRadioGroupValue;
  key: string;
  disabled?: boolean;
  ariaLabel?: string;
  error?: boolean;
}

export interface IRadioGroupProps {
  variant?: TRadioGroupVariant;
  value?: TRadioGroupValue;
  onChange?: (newValue: TRadioGroupValue) => void;
  disabled?: boolean;
  gap?: number;
  size?: Size;
  theme?: Theme;
  options: IRadioGroupOption[];
  name: string;
  ariaLabel: string;
}
