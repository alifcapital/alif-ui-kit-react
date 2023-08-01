import { InputSize, InputTheme, InputType } from './InputConstants';

type Type = `${InputType}`;
type Size = `${InputSize}`;
type Theme = `${InputTheme}`;

type RestProps = Omit<React.ComponentProps<'input'>, 'size'>;
export interface InputProps extends RestProps {
  id?: string;
  className?: string;
  name?: string;
  label?: string;
  placeholder: string;
  value?: string | number;
  defaultValue?: string | number;
  type: Type;
  disabled?: boolean;
  ariaLabel: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isError?: boolean;
  isHint?: boolean;
  helperText?: React.ReactNode;
  size?: Size;
  theme?: Theme;
  autoComplete?: string | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}
