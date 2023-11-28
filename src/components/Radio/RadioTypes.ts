import { RADIO_SIZE, RADIO_THEME } from './RadioConstants';

type Size = `${RADIO_SIZE}`;
type Theme = `${RADIO_THEME}`;

interface IRadio {
  id: string;
  size: Size;
  theme?: Theme;
  disabled: boolean;
  value: boolean;
  label: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  name: string;
}

export interface IRadioProps extends Partial<IRadio> {
  children?: React.ReactNode;
  ariaLabel: string;
}
