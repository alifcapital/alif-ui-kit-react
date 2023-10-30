import { DROPDOWN_SIZE, DROPDOWN_TYPE } from './DropdownConstants';
type TDropdownSize = `${DROPDOWN_SIZE}`;
type TDropdownRenderType = {
    type: `${DROPDOWN_TYPE.Custom}`;
    renderSeleсtedValue: (item: IDropdownListItem | undefined) => React.ReactNode;
    renderItem: (item: IDropdownListItem) => React.ReactNode;
    customActiveIcon?: React.ReactNode;
} | {
    type: `${DROPDOWN_TYPE.Default}`;
};
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
export {};
