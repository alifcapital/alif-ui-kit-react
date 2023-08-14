import { CHECKBOX_SIZE, CHECKBOX_THEME } from './CheckboxConstants';
type Size = `${CHECKBOX_SIZE}`;
type Theme = `${CHECKBOX_THEME}`;
interface ICheckbox {
    id: string;
    size: Size;
    theme?: Theme;
    disabled: boolean;
    value: boolean;
    label: string;
    className: string;
    onChange: (isChecked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    error: boolean;
    name: string;
}
export interface ICheckboxProps extends Partial<ICheckbox> {
    children?: React.ReactNode;
    ariaLabel: string;
}
export {};
