import { HTMLAttributes, ReactNode } from 'react';
import { TYPOGRAPHY_VARIANT } from './TypographyConstants';
type TVariant = `${TYPOGRAPHY_VARIANT}`;
export interface ITypography extends HTMLAttributes<HTMLDivElement> {
    variant?: TVariant;
    children: ReactNode;
    className?: string;
}
export {};
