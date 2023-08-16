import { SWITCH_SIZE, SWITCH_THEME } from './SwitchConstants';
type Size = `${SWITCH_SIZE}`;
type Theme = `${SWITCH_THEME}`;
interface ISwitch {
    id: string;
    name: string;
    size: Size;
    theme: Theme;
    disabled: boolean;
    checked: boolean;
    label: string;
    className: string;
    onChange: (isChecked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ISwitchProps extends Partial<ISwitch> {
    ariaLabel: string;
}
export {};
