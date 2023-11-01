import { DROPDOWN_SIZE, DROPDOWN_TYPE } from './DropdownConstants';

type TDropdownSize = `${DROPDOWN_SIZE}`;

type TDropdownRenderType<T> =
  | {
      type: `${DROPDOWN_TYPE.Custom}`;
      renderSelectedValue: (item: T | undefined) => React.ReactNode;
      renderItem: (item: T) => React.ReactNode;
      customActiveIcon?: React.ReactNode;
      selected?: T;
    }
  | { type: `${DROPDOWN_TYPE.Default}`; selected?: T };

export interface IDropdownListItem {
  id: string | number;
  label: string;
  value: string;
}

export interface IDropdown<T> {
  label: string;
  size: TDropdownSize;
  error: string;
  isDisabled: boolean;
  className: string;
  onChange: (item: T) => void;
}

export type IDropdownProps<T = IDropdownListItem> = Partial<IDropdown<T>> & {
  ariaLabel: string;
  items: T[];
} & TDropdownRenderType<T>;
