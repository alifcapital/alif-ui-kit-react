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
  type: Type;
  disabled?: boolean;
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  error?: boolean;
  hint?: boolean;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  size?: Size;
  hasHeading?: boolean;
  theme?: Theme;
}
