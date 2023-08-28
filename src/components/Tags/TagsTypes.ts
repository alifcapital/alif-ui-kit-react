import React, { SVGProps } from 'react';
import { TAGS_SIZE } from './TagsConstants';

type Size = `${TAGS_SIZE}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;

interface ITag {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: (id: string) => void;
  id: string;
  label: string;
  startIcon?: IconType;
  endIcon?: IconType;
}

export interface ITagsProps {
  tags: ITag[];
  activeTag?: string;
  activeColor?: string;
  gap?: number;
  size?: Size;
  className?: string;
}
