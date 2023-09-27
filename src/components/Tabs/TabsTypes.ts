import { TABS_SIZE } from './TabsConstants';

type Size = `${TABS_SIZE}`;
type TKeys = string | number;

export type TTabId<T> = TKeys & T extends infer K ? (K extends TKeys ? K : never) : TKeys;

interface ITab<T> {
  disabled?: boolean;
  content?: React.ReactNode;
  onClick?: (id: TTabId<T>) => void;
  id: TTabId<T>;
  label: string;
}

export interface ITabsProps<T> {
  tabs: ITab<T>[];
  activeTab?: TTabId<T>;
  activeColor?: string;
  tabMarginBottom?: number;
  gap?: number;
  size?: Size;
  className?: string;
}
