import React, { SVGProps } from 'react';
import { SWITCH_TAGS_SIZE, SWITCH_TAGS_VARIANT } from './SwitchTagsConstants';

type Size = `${SWITCH_TAGS_SIZE}`;
type Variant = `${SWITCH_TAGS_VARIANT}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;
type TKeys = string | undefined;

export type TSwitchTagId<T> = TKeys & T extends infer K ? (K extends TKeys ? K : never) : TKeys;

interface ISwitchTag<T> {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: (id: TSwitchTagId<T>) => void;
  id: TSwitchTagId<T>;
  label: string;
  startIcon?: IconType;
  endIcon?: IconType;
}

export interface ISwitchTagsProps<T> {
  tags: ISwitchTag<T>[];
  variant?: Variant;
  activeTag?: TSwitchTagId<T>;
  activeColor?: string;
  backgroundColor?: string;
  gap?: number;
  size?: Size;
  className?: string;
}
