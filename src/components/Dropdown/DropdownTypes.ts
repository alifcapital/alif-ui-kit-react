import { DROPDOWN_SIZE } from './DropdownConstants';

type TDropdownSize = `${DROPDOWN_SIZE}`;

type TDropdownRenderType =
  | {
      type: 'custom';
      renderSeletedValue: (item: IDropdownListItem | undefined) => React.ReactNode;
      renderItem: (item: IDropdownListItem) => React.ReactNode;
      customActiveIcon?: React.ReactNode;
    }
  | { type: 'default' };

export interface IDropdownListItem {
  label: string;
  value: string;
}

export interface IDropdown {
  label: string;
  selected: IDropdownListItem;
  size: TDropdownSize;
  error: string;
  isDisabled: boolean;
  className: string;
  onChange: (item: IDropdownListItem) => void;
}

export type IDropdownProps = Partial<IDropdown> & {
  ariaLabel: string;
  items: IDropdownListItem[];
} & TDropdownRenderType;
