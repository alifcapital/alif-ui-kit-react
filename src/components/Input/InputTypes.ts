import { InputSize, InputTheme, InputType } from './InputConstants';

type Type = `${InputType}`;
type Size = `${InputSize}`;
type Theme = `${InputTheme}`;

export interface InputProps {
  id?: string;
  className?: string;
  name?: string;
  label: string;
  placeholder: string;
  value?: string | number;
  defaultValue?: string | number;
  type: Type;
  disabled?: boolean;
  ariaLabel: string;
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  error?: boolean;
  hint?: boolean;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  size?: Size;
  hasHeading?: boolean;
  theme?: Theme;
  autoComplete?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}
