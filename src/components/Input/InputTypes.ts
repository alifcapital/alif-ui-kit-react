import { INPUT_SIZE, INPUT_THEME, INPUT_TYPE } from './InputConstants';

type Type = `${INPUT_TYPE}`;
type Size = `${INPUT_SIZE}`;
type Theme = `${INPUT_THEME}`;

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
  requiredSymbol?:
    | {
        color?: string;
      }
    | boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}
