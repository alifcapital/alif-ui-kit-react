import { SVGProps } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from './ButtonConstants';

type Size = `${BUTTON_SIZE}`;
type Variant = `${BUTTON_VARIANT}`;
type Color = `${BUTTON_COLOR}`;
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
