import { SVGProps } from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonConstants';

type Size = `${ButtonSize}`;
type Variant = `${ButtonVariant}`;
type Color = `${ButtonColor}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;

export type IButtonProps = {
  children?: React.ReactNode;
  size?: Size;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  variant?: Variant;
  startIcon?: IconType;
  endIcon?: IconType;
  withIcon?: boolean;
  ariaLabel: string;
  color?: Color;
  id?: string;
};
