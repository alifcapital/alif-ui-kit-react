import React from 'react';
import { TABS_SIZE } from './TabsConstants';

type Size = `${TABS_SIZE}`;

interface ITab {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: (id: string) => void;
  id: string;
  label: string;
}

export interface ITabsProps {
  tabs: ITab[];
  activeTab?: string;
  tabMarginBottom?: number;
  gap?: number;
  size?: Size;
  className?: string;
}
