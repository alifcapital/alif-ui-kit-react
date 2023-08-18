import React from 'react';
import { TABS_SIZE } from './TabsConstants';

type Size = `${TABS_SIZE}`;

interface ITab {
  disabled: boolean;
  content: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Tab extends Partial<ITab> {
  id: string;
  label: string;
}

export interface ITabsProps {
  tabs: Tab[];
  gap?: number;
  size?: Size;
  className?: string;
}
