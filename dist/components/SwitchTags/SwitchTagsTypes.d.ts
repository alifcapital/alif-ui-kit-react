import React, { SVGProps } from 'react';
import { SWITCH_TAGS_SIZE, SWITCH_TAGS_VARIANT } from './SwitchTagsConstants';
type Size = `${SWITCH_TAGS_SIZE}`;
type Variant = `${SWITCH_TAGS_VARIANT}`;
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
    variant?: Variant;
    activeTag?: string;
    activeColor?: string;
    backgroundColor?: string;
    gap?: number;
    size?: Size;
    className?: string;
}
export {};
