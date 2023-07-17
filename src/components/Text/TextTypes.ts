import { ReactNode } from 'react';

export interface ITextProps {
  children: ReactNode;
  bold?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  className?: string;
}
