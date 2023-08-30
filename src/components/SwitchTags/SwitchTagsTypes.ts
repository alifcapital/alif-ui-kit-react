import React, { SVGProps } from 'react';
import { SWITCH_TAGS_SIZE } from './SwitchTagsConstants';

type Size = `${SWITCH_TAGS_SIZE}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;

interface ISwitchTag {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: (id: string) => void;
  id: string;
  label: string;
  startIcon?: IconType;
  endIcon?: IconType;
}

export interface ISwitchTagsProps {
  tags: ISwitchTag[];
  activeTag?: string;
  activeColor?: string;
  tagsBackgroundColor?: string;
  gap?: number;
  size?: Size;
  className?: string;
}
