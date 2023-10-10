import { ButtonHTMLAttributes, DetailedHTMLProps, SVGProps } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from './ButtonConstants';

type Size = `${BUTTON_SIZE}`;
type Variant = `${BUTTON_VARIANT}`;
type Color = `${BUTTON_COLOR}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;

export interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: Size;
  className: string;
  disabled: boolean;
  rounded: boolean;
  variant: Variant;
  startIcon: IconType;
  endIcon: IconType;
  withIcon: boolean;
  color: Color;
  id: string;
  onClick: () => void;
}

export interface IButtonProps extends Partial<IButton> {
  ariaLabel: string;
  children: React.ReactNode;
}
