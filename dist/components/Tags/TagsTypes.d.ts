import React, { SVGProps } from 'react';
import { TAGS_SIZE } from './TagsConstants';
type Size = `${TAGS_SIZE}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;
type TKeys = string | undefined;
export type TTagId<T> = TKeys & T extends infer K ? (K extends TKeys ? K : never) : TKeys;
interface ITag<T> {
    disabled?: boolean;
    content?: React.ReactNode;
    onClick?: (id: TTagId<T>) => void;
    id: TTagId<T>;
    label: string;
    startIcon?: IconType;
    endIcon?: IconType;
}
export interface ITagsProps<T> {
    tags: ITag<T>[];
    activeTag?: TTagId<T>;
    activeColor?: string;
    gap?: number;
    size?: Size;
    className?: string;
}
export {};
